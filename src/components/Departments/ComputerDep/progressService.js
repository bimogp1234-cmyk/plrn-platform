// progressService.js - thin wrapper around shared firestoreService
// Centralizes the subset of Firestore functions used by the ComputerDep UI
import * as shared from "./../../../FireBaseDatabase/firestoreService";
import { db, auth } from "./../../../FireBaseDatabase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

// Re-export selected functions so components import from a local module
export const getUserScores = async (uid) => {
  return shared.getUserScores(uid);
};

export const getUserLessons = async (uid) => {
  return shared.getUserLessons(uid);
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
  return shared.getUserOverall(uid);
};

export const updateUserFields = async (uid, fields) => {
  return shared.updateUserFields(uid, fields);
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
};
