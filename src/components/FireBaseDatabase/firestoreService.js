import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

/*
  Simple Firestore service with:
   - getLeaderboard(limit)
   - onLeaderboardChange(callback, limit)
   - getLeaderboardEntry(userId)
   - getUserProfile(userId)

  Notes:
   - Expects Firebase config to be present in environment variables (REACT_APP_FIREBASE_*)
     but will try to use an already initialized app if present.
   - Errors (including permission-denied) are rethrown so callers can handle them.
*/

// Initialize Firebase app if not already initialized
let db;
function initFirestore() {
  if (db) return db;
  try {
    if (!getApps().length) {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
      };
      // Minimal validation - if projectId missing, throw a clear error
      if (!firebaseConfig.projectId) {
        throw new Error(
          "Firebase configuration not found. Ensure REACT_APP_FIREBASE_PROJECT_ID is set."
        );
      }
      initializeApp(firebaseConfig);
    }
    db = getFirestore();
    return db;
  } catch (err) {
    // Rethrow to let callers show appropriate message
    throw err;
  }
}

// Simple in-memory cache for user profiles (to reduce reads)
const profileCache = new Map();

// getLeaderboard: returns array of plain objects { id, ...fields }
export async function getLeaderboard(limitCount = 100) {
  const db = initFirestore();
  try {
    const q = query(
      collection(db, "leaderboard"),
      orderBy("totalXP", "desc"),
      limit(limitCount)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data ? d.data() : {}) }));
  } catch (err) {
    console.error("getLeaderboard error:", err);
    throw err;
  }
}

// onLeaderboardChange: attaches an onSnapshot listener and returns unsubscribe()
// callback receives snapshot.docs (array of QueryDocumentSnapshot)
export function onLeaderboardChange(callback, limitCount = 100) {
  const db = initFirestore();
  try {
    const q = query(
      collection(db, "leaderboard"),
      orderBy("totalXP", "desc"),
      limit(limitCount)
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data ? d.data() : {}),
        }));
        callback(docs);
      },
      (err) => {
        console.error("onLeaderboardChange snapshot error:", err);
        setTimeout(() => {
          throw err;
        }, 0);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.error("onLeaderboardChange error:", err);
    throw err;
  }
}

// getLeaderboardEntry: fetch leaderboard entry for a user (returns {id, data} or null)
export async function getLeaderboardEntry(userId) {
  if (!userId) return null;
  const db = initFirestore();
  try {
    const q = query(
      collection(db, "leaderboard"),
      where("userId", "==", userId),
      limit(1)
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      const docSnap = snap.docs[0];
      return { id: docSnap.id, ...(docSnap.data ? docSnap.data() : {}) };
    }
    return null;
  } catch (err) {
    console.error("getLeaderboardEntry error:", err);
    throw err;
  }
}

// getUserProfile: try to get user profile from "users" collection or other fallbacks
export async function getUserProfile(userId) {
  if (!userId) return null;
  // Check cache first
  if (profileCache.has(userId)) {
    return profileCache.get(userId);
  }

  const db = initFirestore();
  try {
    // Primary: users/{userId}
    const userDocRef = doc(db, "users", userId);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      profileCache.set(userId, data);
      return data;
    }

    // Fallback: try 'profiles' collection with doc id = userId
    try {
      const profileDocRef = doc(db, "profiles", userId);
      const profileSnap = await getDoc(profileDocRef);
      if (profileSnap.exists()) {
        const pdata = profileSnap.data();
        profileCache.set(userId, pdata);
        return pdata;
      }
    } catch (innerErr) {
      // swallow fallback errors but log
      console.warn("fallback profile lookup failed:", innerErr);
    }

    // No profile found
    return null;
  } catch (err) {
    console.error("getUserProfile error:", err);
    throw err;
  }
}

export default {
  getLeaderboard,
  onLeaderboardChange,
  getLeaderboardEntry,
  getUserProfile,
};
