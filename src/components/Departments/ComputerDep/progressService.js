// progressService.js - thin wrapper around shared firestoreService
// Centralizes the subset of Firestore functions used by the ComputerDep UI
import * as shared from "./../../../FireBaseDatabase/firestoreService";
import { db, auth } from "./../../../FireBaseDatabase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { doc } from "firebase/firestore";

// Small in-memory queue for writes attempted before auth was ready.
// When a write is attempted while no matching auth is present we enqueue
// the request and flush when onAuthStateChanged reports a matching user.
const STORAGE_KEY = "plrn_pending_progress_writes_v1";
const _pendingProgressWrites = [];
let _authListenerRegistered = false;

const _loadPendingQueueFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // merge without duplicates
      parsed.forEach((p) => {
        const exists = _pendingProgressWrites.some(
          (q) =>
            q.uid === p.uid &&
            JSON.stringify(q.fields) === JSON.stringify(p.fields)
        );
        if (!exists) _pendingProgressWrites.push(p);
      });
    }
  } catch (err) {
    console.warn("Could not load pending progress writes from storage:", err);
  }
};

const _savePendingQueueToStorage = () => {
  try {
    if (!_pendingProgressWrites.length) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_pendingProgressWrites));
  } catch (err) {
    console.warn("Could not save pending progress writes to storage:", err);
  }
};

const _flushPendingWrites = async () => {
  if (!_pendingProgressWrites.length) return;
  try {
    const current = auth && auth.currentUser;
    if (!current) return; // still not signed in

    // Iterate copy to allow modifications during flush
    const copy = _pendingProgressWrites.slice();
    for (const i of copy) {
      try {
        if (current.uid === i.uid) {
          try {
            await shared.updateProgressFields(i.uid, i.fields);
            // remove from queue
            const idx = _pendingProgressWrites.indexOf(i);
            if (idx !== -1) _pendingProgressWrites.splice(idx, 1);
            _savePendingQueueToStorage();
            console.log("✅ Flushed queued progress write for uid:", i.uid);
          } catch (err) {
            // If the write failed due to permission or other reasons, keep it
            // queued (persisted) and log a clear message. It will be retried
            // on the next sign-in or when the app attempts flush again.
            console.warn("Failed to flush queued progress write:", err);
            _savePendingQueueToStorage();
          }
        }
      } catch (err) {
        console.warn("Failed to flush queued progress write (outer):", err);
        // keep it in queue to retry later
      }
    }
  } catch (err) {
    console.error("_flushPendingWrites failed:", err);
  }
};

const _ensureAuthListener = () => {
  if (_authListenerRegistered) return;
  try {
    _authListenerRegistered = true;
    // load pending queue from storage on first registration
    try {
      _loadPendingQueueFromStorage();
    } catch (err) {}

    auth.onAuthStateChanged((user) => {
      if (user) {
        // attempt flush when a user signs in
        _flushPendingWrites().catch((e) =>
          console.error("Error flushing pending progress writes:", e)
        );
      }
    });
  } catch (err) {
    console.warn("Could not register auth state listener:", err);
  }
};

// Re-export selected functions so components import from a local module
export const getUserScores = async (uid) => {
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.warn(
        "getUserScores: auth mismatch or not signed-in, skipping fetch",
        {
          requestedUid: uid,
          currentUid: current?.uid,
        }
      );
      return {};
    }
    return await shared.getUserScores(uid);
  } catch (err) {
    console.error("getUserScores failed:", err);
    return {};
  }
};

export const getUserLessons = async (uid) => {
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.warn(
        "getUserLessons: auth mismatch or not signed-in, skipping fetch",
        {
          requestedUid: uid,
          currentUid: current?.uid,
        }
      );
      return {};
    }
    return await shared.getUserLessons(uid);
  } catch (err) {
    console.error("getUserLessons failed:", err);
    return {};
  }
};

export const saveUserProgress = async (uid, payload) => {
  return shared.saveUserProgress(uid, payload);
};

export const saveGameScore = async (uid, gameId, payload) => {
  return shared.saveGameScore(uid, gameId, payload);
};

export const saveLessonCompletion = async (uid, lessonId, payload) => {
  return shared.saveLessonCompletion(uid, lessonId, payload);
};

export const resetUserProgress = async (uid) => {
  return shared.resetUserProgress(uid);
};

export const getUserProgress = async (uid) => {
  return shared.getUserProgress(uid);
};

export const getUserOverall = async (uid) => {
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.warn(
        "getUserOverall: auth mismatch or not signed-in, skipping fetch",
        {
          requestedUid: uid,
          currentUid: current?.uid,
        }
      );
      return null;
    }
    return await shared.getUserOverall(uid);
  } catch (err) {
    console.error("getUserOverall failed:", err);
    return null;
  }
};

export const updateUserFields = async (uid, fields) => {
  return shared.updateUserFields(uid, fields);
};

export const updateProgressFields = async (uid, fields = {}) => {
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.warn(
        "updateProgressFields: auth mismatch or not signed-in, queuing write",
        { requestedUid: uid, currentUid: current?.uid }
      );

      // queue the write (persisted) and ensure we have an auth state listener to flush later
      try {
        _pendingProgressWrites.push({ uid, fields });
        _savePendingQueueToStorage();
        _ensureAuthListener();
        return true; // queued
      } catch (qe) {
        console.error("Failed to queue progress write:", qe);
        return false;
      }
    }

    try {
      return await shared.updateProgressFields(uid, fields);
    } catch (err) {
      // If the write failed (e.g., permission-denied), persist the write so
      // we can retry later instead of surfacing a loud exception to UI.
      console.warn("updateProgressFields failed, persisting for retry:", err);
      try {
        _pendingProgressWrites.push({ uid, fields });
        _savePendingQueueToStorage();
        _ensureAuthListener();
      } catch (qe) {
        console.error("Failed to persist failed progress write:", qe);
      }
      // Do NOT re-throw here; return false to indicate the write was queued/fallbacked.
      return false;
    }
  } catch (err) {
    console.error("updateProgressFields failed:", err);
    throw err;
  }
};

export const ensureUserInitialized = async (uid, profile) => {
  return shared.ensureUserInitialized(uid, profile);
};

export const setLeaderboardEntry = async (uid, entry) => {
  return shared.setLeaderboardEntry(uid, entry);
};

export const getGameProgress = async (uid, gameId) => {
  return shared.getGameProgress(uid, gameId);
};

export const setGameProgress = async (uid, gameId, progress) => {
  return shared.setGameProgress(uid, gameId, progress);
};

export const getLeaderboardEntry = async (uid) => {
  return shared.getLeaderboardEntry(uid);
};

export const getLeaderboard = async (opts) => {
  return shared.getLeaderboard(opts);
};

export const getAllLeaderboard = async (opts) => {
  return shared.getAllLeaderboard(opts);
};

export const getUserProfile = async (uid) => {
  return shared.getUserProfile(uid);
};

export const onLeaderboardChange = (cb, opts) => {
  return shared.onLeaderboardChange(cb, opts);
};

export const recalculateUserXP = async (uid, opts) => {
  return shared.recalculateUserXP(uid, opts);
};

export const syncUserToLeaderboard = async (uid) => {
  return shared.syncUserToLeaderboard(uid);
};

// Real-time listener helpers -------------------------------------------------
export const onUserScoresChange = (uid, callback) => {
  if (!uid || typeof callback !== "function") return () => {};

  // Guard: do not attach a realtime listener unless the Firebase client
  // currently has an authenticated user matching the requested uid.
  // This prevents permission-denied watch errors when a local userId exists
  // but there's no active Firebase auth session.
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.log(
        "onUserScoresChange: no matching authenticated user, skipping realtime listener",
        { requestedUid: uid, currentUid: current?.uid }
      );
      return () => {};
    }
  } catch (err) {
    console.error("onUserScoresChange auth guard check failed:", err);
    return () => {};
  }

  const coll = collection(db, "users", uid, "scores");

  const unsub = onSnapshot(
    coll,
    (snapshot) => {
      const updated = {};
      snapshot.forEach((d) => {
        const data = d.data ? d.data() : d;
        const gameId = data?.gameId || d.id;
        updated[gameId] = { gameId, ...(data || {}) };
      });
      try {
        callback(updated);
      } catch (err) {
        console.error("onUserScoresChange callback error:", err);
      }
    },
    (err) => {
      console.error("onUserScoresChange snapshot error:", err);
      try {
        callback({});
      } catch (e) {}
    }
  );

  return unsub;
};

export const onUserLessonsChange = (uid, callback) => {
  if (!uid || typeof callback !== "function") return () => {};

  // Guard: require active Firebase auth for this uid before attaching.
  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.log(
        "onUserLessonsChange: no matching authenticated user, skipping realtime listener",
        { requestedUid: uid, currentUid: current?.uid }
      );
      return () => {};
    }
  } catch (err) {
    console.error("onUserLessonsChange auth guard check failed:", err);
    return () => {};
  }

  const coll = collection(db, "users", uid, "lessons");

  const unsub = onSnapshot(
    coll,
    (snapshot) => {
      const updated = {};
      snapshot.forEach((d) => {
        const data = d.data ? d.data() : d;
        const lessonId = data?.lessonId || d.id;
        updated[lessonId] = { lessonId, ...(data || {}) };
      });
      try {
        callback(updated);
      } catch (err) {
        console.error("onUserLessonsChange callback error:", err);
      }
    },
    (err) => {
      console.error("onUserLessonsChange snapshot error:", err);
      try {
        callback({});
      } catch (e) {}
    }
  );

  return unsub;
};

export const onUserProgressChange = (uid, callback) => {
  if (!uid || typeof callback !== "function") return () => {};

  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.log(
        "onUserProgressChange: no matching authenticated user, skipping realtime listener",
        { requestedUid: uid, currentUid: current?.uid }
      );
      return () => {};
    }
  } catch (err) {
    console.error("onUserProgressChange auth guard check failed:", err);
    return () => {};
  }

  const progressDoc = doc(db, "users", uid, "progress", "main");

  const unsub = onSnapshot(
    progressDoc,
    (snap) => {
      try {
        const data = snap && snap.data ? snap.data() : snap;
        callback(data || {});
      } catch (err) {
        console.error("onUserProgressChange callback error:", err);
      }
    },
    (err) => {
      console.error("onUserProgressChange snapshot error:", err);
      try {
        callback({});
      } catch (e) {}
    }
  );

  return unsub;
};

export const onGameProgressChange = (uid, gameId, callback) => {
  if (!uid || !gameId || typeof callback !== "function") return () => {};

  try {
    const current = auth && auth.currentUser;
    if (!current || current.uid !== uid) {
      console.log(
        "onGameProgressChange: no matching authenticated user, skipping realtime listener",
        { requestedUid: uid, currentUid: current?.uid }
      );
      return () => {};
    }
  } catch (err) {
    console.error("onGameProgressChange auth guard check failed:", err);
    return () => {};
  }

  const gameDoc = doc(db, "users", uid, "games", gameId);

  const unsub = onSnapshot(
    gameDoc,
    (snap) => {
      try {
        const data = snap && snap.data ? snap.data() : snap;
        callback(data || {});
      } catch (err) {
        console.error("onGameProgressChange callback error:", err);
      }
    },
    (err) => {
      console.error("onGameProgressChange snapshot error:", err);
      try {
        callback({});
      } catch (e) {}
    }
  );

  return unsub;
};

export default {
  getUserScores,
  getUserLessons,
  saveUserProgress,
  saveGameScore,
  saveLessonCompletion,
  resetUserProgress,
  getUserProgress,
  getUserOverall,
  updateUserFields,
  ensureUserInitialized,
  setLeaderboardEntry,
  getGameProgress,
  setGameProgress,
  getLeaderboardEntry,
  getLeaderboard,
  getAllLeaderboard,
  getUserProfile,
  onLeaderboardChange,
  recalculateUserXP,
  syncUserToLeaderboard,
  onUserScoresChange,
  onUserLessonsChange,
  onUserProgressChange,
  onGameProgressChange,
};
