import {
  collection,
  query,
  orderBy,
  limit as fbLimit,
  startAfter,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  writeBatch,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

/**
 * Firestore service: centralizes leaderboard, progress and score operations.
 */

export async function getLeaderboard({ limit = null, cursor = null } = {}) {
  const leaderboardRef = collection(db, "leaderboard");
  // Order by totalXP (preferred) then fallback to totalScore for older documents.
  // This makes the leaderboard show entries even if some writers only set totalScore.
  // Try the preferred composite ordering first. If Firestore requires a composite
  // index that hasn't been created yet, catch the error and fall back to a
  // single-field ordering to avoid crashing the UI.
  const compositeClauses = [
    orderBy("totalXP", "desc"),
    orderBy("totalScore", "desc"),
  ];
  if (cursor) compositeClauses.push(startAfter(cursor));
  if (limit) compositeClauses.push(fbLimit(limit));

  try {
    const q = query(leaderboardRef, ...compositeClauses);
    const snap = await getDocs(q);
    const docs = [];
    snap.forEach((d) => docs.push({ id: d.id, data: d.data() }));
    return docs;
  } catch (err) {
    // If the error indicates a missing composite index, retry with a simpler
    // ordering to keep the leaderboard usable until the index is created.
    console.warn(
      "Leaderboard composite query failed, retrying simpler query:",
      err?.message || err
    );
    const fallbackClauses = [orderBy("totalXP", "desc")];
    if (cursor) fallbackClauses.push(startAfter(cursor));
    if (limit) fallbackClauses.push(fbLimit(limit));
    const q2 = query(leaderboardRef, ...fallbackClauses);
    const snap2 = await getDocs(q2);
    const docs2 = [];
    snap2.forEach((d) => docs2.push({ id: d.id, data: d.data() }));
    return docs2;
  }
}

// Paginated helper to fetch all leaderboard documents in pages to avoid
// hitting Firestore memory limits. Fetches pages of `pageSize` until no more
// documents remain and returns the concatenated list.
export async function getAllLeaderboard({ pageSize = 100 } = {}) {
  const leaderboardRef = collection(db, "leaderboard");
  const all = [];
  let lastDoc = null;
  while (true) {
    const clauses = [orderBy("totalXP", "desc"), orderBy("totalScore", "desc")];
    if (lastDoc) clauses.push(startAfter(lastDoc));
    clauses.push(fbLimit(pageSize));
    const q = query(leaderboardRef, ...clauses);
    const snap = await getDocs(q);
    const page = [];
    snap.forEach((d) => page.push({ id: d.id, data: d.data() }));
    if (page.length === 0) break;
    all.push(...page);
    lastDoc = snap.docs[snap.docs.length - 1];
    // If fewer than pageSize returned, we're done.
    if (page.length < pageSize) break;
  }
  return all;
}

export function onLeaderboardChange(callback, { limit = null } = {}) {
  const leaderboardRef = collection(db, "leaderboard");
  // Support limited real-time listeners (e.g., top N) while attempting the
  // preferred composite ordering first, falling back to single-field ordering
  // if an index is missing.
  const compositeQuery = () => {
    const clauses = [orderBy("totalXP", "desc"), orderBy("totalScore", "desc")];
    if (limit) clauses.push(fbLimit(limit));
    return query(leaderboardRef, ...clauses);
  };

  const fallbackQuery = () => {
    const clauses = [orderBy("totalXP", "desc")];
    if (limit) clauses.push(fbLimit(limit));
    return query(leaderboardRef, ...clauses);
  };

  try {
    const q = compositeQuery();
    return onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.forEach((d) => docs.push({ id: d.id, data: d.data() }));
      callback(docs);
    });
  } catch (err) {
    console.warn(
      "Leaderboard real-time composite query failed, using fallback listener:",
      err?.message || err
    );
    const q2 = fallbackQuery();
    return onSnapshot(q2, (snapshot) => {
      const docs = [];
      snapshot.forEach((d) => docs.push({ id: d.id, data: d.data() }));
      callback(docs);
    });
  }
}

// Fetch a single leaderboard entry by uid (convenience helper)
export async function getLeaderboardEntry(uid) {
  if (!uid) return null;
  const ref = doc(db, "leaderboard", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, data: snap.data() };
}

// Helper: read top-level user profile document (if present)
async function getUserProfile(uid) {
  if (!uid) return null;
  try {
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);
    return snap && snap.exists() ? snap.data() : null;
  } catch (err) {
    console.warn("getUserProfile failed for", uid, err?.message || err);
    return null;
  }
}

export async function setLeaderboardEntry(uid, entry) {
  if (!uid) throw new Error("uid required");
  const ref = doc(db, "leaderboard", uid);
  // Ensure we always write a display name (best-effort): prefer provided entry
  // fields, else fall back to the user's profile document, else a localized
  // default. Also try to include photoURL when available.
  let name = entry.name || entry.fullName || entry.userName || null;
  let photoURL = entry.photoURL || null;
  if (!name) {
    const profile = await getUserProfile(uid);
    if (profile) {
      name = profile.name || profile.fullName || profile.displayName || null;
      photoURL = photoURL || profile.photoURL || null;
    }
  }
  const payload = {
    userId: uid,
    name: name || "مستخدم",
    photoURL: photoURL || null,
    // canonical field for ranking: totalXP
    totalXP:
      typeof entry.totalXP === "number"
        ? entry.totalXP
        : typeof entry.totalScore === "number"
        ? entry.totalScore
        : 0,
    // keep legacy field
    totalScore: typeof entry.totalScore === "number" ? entry.totalScore : 0,
    completedGames:
      typeof entry.completedGames === "number" ? entry.completedGames : 0,
    completedLessons:
      typeof entry.completedLessons === "number" ? entry.completedLessons : 0,
    completedUnits:
      typeof entry.completedUnits === "number" ? entry.completedUnits : 0,
    // Keep backward-compatible fields used in older writers/readers
    score:
      typeof entry.score === "number"
        ? entry.score
        : typeof entry.totalScore === "number"
        ? entry.totalScore
        : 0,
    updatedAt: entry.updatedAt || serverTimestamp(),
    lastUpdated: serverTimestamp(),
    lastActive: entry.lastActive || serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: true });
  return payload;
}

// Helper: recalculate user's totalXP from individual scores + lessons
export async function recalculateUserXP(uid, opts = { lessonXP: 20 }) {
  if (!uid) throw new Error("uid required");

  // Sum all game scores (assumed 0-100) as XP, and add lesson XP per completed lesson.
  const scores = await getUserScores(uid);
  let gameXP = 0;
  Object.values(scores || {}).forEach((s) => {
    // if overall doc exists, skip; we only sum individual games with gameId keys
    if (s && typeof s.score === "number")
      gameXP += Math.max(0, Math.min(100, s.score));
  });

  // Count lessons
  const lessonsColl = collection(db, "users", uid, "lessons");
  const lessonsSnap = await getDocs(lessonsColl);
  let lessonCount = 0;
  lessonsSnap.forEach((d) => {
    const data = d.data();
    if (data?.completed) lessonCount++;
  });

  const lessonXP = lessonCount * (opts.lessonXP || 20);

  const totalXP = Math.round(gameXP + lessonXP);

  // Update overall scores doc and public leaderboard
  const scoresRef = doc(db, "users", uid, "scores", "overall");
  const leaderboardRef = doc(db, "leaderboard", uid);

  const now = serverTimestamp();

  await setDoc(
    scoresRef,
    {
      totalXP,
      totalScore: totalXP, // legacy compatibility
      updatedAt: now,
    },
    { merge: true }
  );

  // Ensure leaderboard doc includes a display name / photo if available.
  try {
    const profile = await getUserProfile(uid);
    await setDoc(
      leaderboardRef,
      {
        userId: uid,
        name: profile?.name || profile?.fullName || "مستخدم",
        photoURL: profile?.photoURL || null,
        totalXP,
        totalScore: totalXP,
        lastUpdated: now,
        lastActive: now,
      },
      { merge: true }
    );
  } catch (err) {
    // Fall back to writing without profile fields if the profile read failed
    await setDoc(
      leaderboardRef,
      {
        userId: uid,
        totalXP,
        totalScore: totalXP,
        lastUpdated: now,
        lastActive: now,
      },
      { merge: true }
    );
  }

  return totalXP;
}

export async function saveUserProgress(
  uid,
  { progressData, unlockedUnits, totalProgress, userProfile, totals }
) {
  if (!uid) throw new Error("uid required");

  const userRef = doc(db, "users", uid);
  const progressRef = doc(db, "users", uid, "progress", "main");
  const scoresRef = doc(db, "users", uid, "scores", "overall");
  const leaderboardRef = doc(db, "leaderboard", uid);

  const batch = writeBatch(db);

  // If caller did not supply a userProfile, try to read it so we can
  // populate leaderboard name/photoURL reliably.
  if (!userProfile) {
    try {
      const p = await getUserProfile(uid);
      if (p) userProfile = p;
    } catch (err) {
      console.warn(
        "saveUserProgress: could not read user profile",
        uid,
        err?.message || err
      );
    }
  }

  if (userProfile) {
    batch.set(
      userRef,
      {
        email: userProfile.email,
        name: userProfile.name,
        photoURL: userProfile.photoURL,
        totalScore: totals?.totalScore,
        totalProgress: totalProgress,
        completedGames: totals?.completedGames,
        completedLessons: totals?.completedLessons,
        completedUnits: totals?.completedUnits,
        lastUpdated: serverTimestamp(),
      },
      { merge: true }
    );
  }

  batch.set(
    progressRef,
    {
      progressData: progressData,
      unlockedUnits: unlockedUnits,
      totalProgress: totalProgress,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  batch.set(
    scoresRef,
    {
      totalScore: totals?.totalScore,
      completedGames: totals?.completedGames,
      completedLessons: totals?.completedLessons,
      completedUnits: totals?.completedUnits,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  // also update public leaderboard (use totalXP when available)
  batch.set(
    leaderboardRef,
    {
      userId: uid,
      name: userProfile?.name || userProfile?.fullName || "مستخدم",
      photoURL: userProfile?.photoURL || null,
      totalXP: totals?.totalXP ?? totals?.totalScore,
      totalScore: totals?.totalScore,
      // legacy compatibility
      score: typeof totals?.totalScore === "number" ? totals.totalScore : 0,
      updatedAt: serverTimestamp(),
      completedGames: totals?.completedGames,
      completedLessons: totals?.completedLessons,
      completedUnits: totals?.completedUnits,
      lastUpdated: serverTimestamp(),
      lastActive: serverTimestamp(),
    },
    { merge: true }
  );

  await batch.commit();
}

export async function saveGameScore(
  uid,
  gameId,
  { unitId, score, rawScore, rawMax, points = 0, completed = false } = {}
) {
  if (!uid || !gameId) throw new Error("uid and gameId required");

  // Determine normalization:
  // - If caller provided a rawMax (total possible points for the game), compute
  //   normalized score = round((rawScore || score) / rawMax * 100).
  // - Otherwise assume incoming `score` is already normalized to 0-100.
  let normalized = 0;
  const effectiveRaw =
    typeof rawScore === "number"
      ? rawScore
      : typeof score === "number"
      ? score
      : 0;

  if (typeof rawMax === "number" && rawMax > 0) {
    normalized = Math.round((effectiveRaw / rawMax) * 100);
  } else {
    // clamp incoming score to 0-100
    normalized = Math.max(0, Math.min(100, Math.round(score || 0)));
  }

  // Persist both raw and normalized values for auditing and potential reverse-calcs
  const scoreRef = doc(db, "users", uid, "scores", gameId);
  await setDoc(
    scoreRef,
    {
      gameId,
      unitId,
      // store raw values when available
      rawScore: typeof effectiveRaw === "number" ? effectiveRaw : null,
      rawMax: typeof rawMax === "number" ? rawMax : null,
      // canonical normalized score used by recalculateUserXP
      score: normalized,
      points: normalized,
      completed,
      lastPlayed: serverTimestamp(),
    },
    { merge: true }
  );

  // Recalculate the user's total XP after saving an individual game score
  try {
    await recalculateUserXP(uid);
  } catch (err) {
    console.error("Error recalculating user XP:", err);
  }
}

export async function getUserScores(uid) {
  const coll = collection(db, "users", uid, "scores");
  const snap = await getDocs(coll);
  const map = {};
  snap.forEach((d) => {
    const data = d.data();
    map[data.gameId] = data;
  });
  return map;
}

export async function getUserLessons(uid) {
  const coll = collection(db, "users", uid, "lessons");
  const snap = await getDocs(coll);
  const map = {};
  snap.forEach((d) => {
    const data = d.data();
    if (data?.lessonId) map[data.lessonId] = data;
  });
  return map;
}

// Save a lesson completion entry (centralized) and recalculate user XP
export async function saveLessonCompletion(
  uid,
  lessonId,
  { unitId = 0, completed = true } = {}
) {
  if (!uid || !lessonId) throw new Error("uid and lessonId required");
  const lessonRef = doc(db, "users", uid, "lessons", lessonId);
  await setDoc(
    lessonRef,
    {
      lessonId,
      unitId,
      completed,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
  try {
    await recalculateUserXP(uid);
  } catch (err) {
    console.error("Error recalculating user XP after lesson save:", err);
  }
}

// Reset user progress: zero out scores and lesson completions and reset overall totals
export async function resetUserProgress(uid) {
  if (!uid) throw new Error("uid required");
  const scoresColl = collection(db, "users", uid, "scores");
  const lessonsColl = collection(db, "users", uid, "lessons");
  const scoresSnap = await getDocs(scoresColl);
  const lessonsSnap = await getDocs(lessonsColl);

  const batch = writeBatch(db);

  scoresSnap.forEach((d) => {
    const ref = d.ref;
    batch.set(
      ref,
      {
        score: 0,
        points: 0,
        completed: false,
        lastPlayed: serverTimestamp(),
      },
      { merge: true }
    );
  });

  lessonsSnap.forEach((d) => {
    const ref = d.ref;
    batch.set(
      ref,
      {
        completed: false,
        lastUpdated: serverTimestamp(),
      },
      { merge: true }
    );
  });

  // reset overall scores doc and leaderboard entry
  const scoresRef = doc(db, "users", uid, "scores", "overall");
  const leaderboardRef = doc(db, "leaderboard", uid);

  batch.set(
    scoresRef,
    {
      totalScore: 0,
      totalXP: 0,
      completedGames: 0,
      completedLessons: 0,
      completedUnits: 0,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  batch.set(
    leaderboardRef,
    {
      totalScore: 0,
      totalXP: 0,
      score: 0,
      completedGames: 0,
      completedLessons: 0,
      completedUnits: 0,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );

  await batch.commit();
}

export async function getUserProgress(uid) {
  const ref = doc(db, "users", uid, "progress", "main");
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// Per-game progress helpers (save/load minimal state so games can resume)
export async function setGameProgress(uid, gameId, progress = {}) {
  if (!uid || !gameId) throw new Error("uid and gameId required");
  const ref = doc(db, "users", uid, "games", gameId);
  await setDoc(
    ref,
    {
      ...progress,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
  return true;
}

export async function getGameProgress(uid, gameId) {
  if (!uid || !gameId) return null;
  const ref = doc(db, "users", uid, "games", gameId);
  const snap = await getDoc(ref);
  return snap && snap.exists() ? snap.data() : null;
}

export async function ensureUserInitialized(uid, profile = {}) {
  if (!uid) throw new Error("uid required");
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(
      userRef,
      {
        email: profile.email || "",
        name: profile.name || profile.fullName || "ضيف جديد",
        photoURL: profile.photoURL || null,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      },
      { merge: true }
    );
  }
}

// Small helper to update arbitrary fields on the top-level user document.
// Centralizes usage of setDoc so callers don't import Firestore primitives.
export async function updateUserFields(uid, fields = {}) {
  if (!uid) throw new Error("uid required");
  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    {
      ...fields,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
}

export default {
  getLeaderboard,
  onLeaderboardChange,
  setLeaderboardEntry,
  saveUserProgress,
  saveGameScore,
  getUserScores,
  getAllLeaderboard,
  recalculateUserXP,
  getUserLessons,
  resetUserProgress,
  getUserProgress,
  ensureUserInitialized,
  updateUserFields,
  saveLessonCompletion,
  setGameProgress,
  getGameProgress,
  getLeaderboardEntry,
};
