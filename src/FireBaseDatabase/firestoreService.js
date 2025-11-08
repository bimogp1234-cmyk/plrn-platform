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
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase";

/**
 * Firestore service: centralizes leaderboard, progress and score operations.
 * Notes:
 * - Returns normalized plain objects for documents: { id, ...fields }
 * - Provides safe wrappers to centralize error messages
 */

const handleFirestoreError = (operation, error, uid = null) => {
  console.error(
    `❌ ${operation} failed${uid ? ` for user ${uid}` : ""}:`,
    error
  );

  // surface user-friendly messages for common codes, otherwise rethrow
  if (error && error.code === "permission-denied") {
    throw new Error(`ليس لديك صلاحية للقيام بهذه العملية.`);
  } else if (error && error.code === "unavailable") {
    throw new Error(`الخدمة غير متاحة حاليًا. يرجى المحاولة لاحقًا.`);
  }

  throw error;
};

const safeGetDoc = async (docRef, operation = "get document") => {
  try {
    return await getDoc(docRef);
  } catch (error) {
    // If the error is permission-related, surface a warning and return null
    // so callers can proceed without noisy exceptions.
    if (error && error.code === "permission-denied") {
      console.warn(`${operation} - permission denied for doc`, docRef.path);
      return null;
    }

    handleFirestoreError(operation, error);
  }
};

const safeSetDoc = async (docRef, data, operation = "set document") => {
  try {
    await setDoc(docRef, data, { merge: true });
    return true;
  } catch (error) {
    if (error && error.code === "permission-denied") {
      console.warn(`${operation} - permission denied writing doc`, docRef.path);
      return false;
    }

    handleFirestoreError(operation, error);
  }
};

const safeGetDocs = async (queryRef, operation = "get documents") => {
  try {
    return await getDocs(queryRef);
  } catch (error) {
    handleFirestoreError(operation, error);
  }
};

export async function getLeaderboard({ limit = null, cursor = null } = {}) {
  const leaderboardRef = collection(db, "leaderboard");

  try {
    const compositeClauses = [
      orderBy("totalXP", "desc"),
      orderBy("totalScore", "desc"),
    ];
    if (cursor) compositeClauses.push(startAfter(cursor));
    if (limit) compositeClauses.push(fbLimit(limit));

    const q = query(leaderboardRef, ...compositeClauses);
    const snap = await safeGetDocs(q, "fetch leaderboard");
    if (!snap) return [];

    const docs = [];
    snap.forEach((d) => docs.push({ id: d.id, ...(d.data ? d.data() : {}) }));
    return docs;
  } catch (err) {
    console.warn(
      "Leaderboard composite query failed, retrying simpler query:",
      err?.message || err
    );

    try {
      const fallbackClauses = [orderBy("totalXP", "desc")];
      if (cursor) fallbackClauses.push(startAfter(cursor));
      if (limit) fallbackClauses.push(fbLimit(limit));

      const q2 = query(leaderboardRef, ...fallbackClauses);
      const snap2 = await safeGetDocs(q2, "fetch leaderboard fallback");
      if (!snap2) return [];

      const docs2 = [];
      snap2.forEach((d) =>
        docs2.push({ id: d.id, ...(d.data ? d.data() : {}) })
      );
      return docs2;
    } catch (fallbackError) {
      console.error("Both leaderboard queries failed:", fallbackError);
      return [];
    }
  }
}

export async function getAllLeaderboard({ pageSize = 100 } = {}) {
  const leaderboardRef = collection(db, "leaderboard");
  const all = [];
  let lastDoc = null;

  try {
    while (true) {
      const clauses = [
        orderBy("totalXP", "desc"),
        orderBy("totalScore", "desc"),
      ];
      if (lastDoc) clauses.push(startAfter(lastDoc));
      clauses.push(fbLimit(pageSize));

      const q = query(leaderboardRef, ...clauses);
      const snap = await safeGetDocs(q, "fetch leaderboard page");
      if (!snap) break;

      const page = [];
      snap.forEach((d) => page.push({ id: d.id, ...(d.data ? d.data() : {}) }));
      if (page.length === 0) break;

      all.push(...page);
      lastDoc = snap.docs[snap.docs.length - 1];
      if (page.length < pageSize) break;
    }
    return all;
  } catch (error) {
    console.error("Error fetching all leaderboard:", error);
    return [];
  }
}

export function onLeaderboardChange(callback, { limit = null } = {}) {
  const leaderboardRef = collection(db, "leaderboard");

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
    return onSnapshot(
      q,
      (snapshot) => {
        const docs = [];
        snapshot.forEach((d) =>
          docs.push({ id: d.id, ...(d.data ? d.data() : {}) })
        );
        callback(docs);
      },
      (error) => {
        console.error("Real-time leaderboard error:", error);
        // Try fallback query on error
        try {
          const q2 = fallbackQuery();
          return onSnapshot(q2, (snapshot) => {
            const docs = [];
            snapshot.forEach((d) =>
              docs.push({ id: d.id, ...(d.data ? d.data() : {}) })
            );
            callback(docs);
          });
        } catch (fallbackError) {
          console.error("Fallback real-time query also failed:", fallbackError);
          callback([]);
        }
      }
    );
  } catch (err) {
    console.warn(
      "Leaderboard real-time composite query failed, using fallback listener:",
      err?.message || err
    );

    const q2 = fallbackQuery();
    return onSnapshot(q2, (snapshot) => {
      const docs = [];
      snapshot.forEach((d) =>
        docs.push({ id: d.id, ...(d.data ? d.data() : {}) })
      );
      callback(docs);
    });
  }
}

export async function getLeaderboardEntry(uid) {
  if (!uid) return null;
  try {
    const ref = doc(db, "leaderboard", uid);
    const snap = await safeGetDoc(ref, "get leaderboard entry");
    if (!snap || !snap.exists()) return null;
    return { id: snap.id, ...(snap.data ? snap.data() : {}) };
  } catch (error) {
    console.error("Error getting leaderboard entry:", error);
    return null;
  }
}

export async function getUserProfile(uid) {
  if (!uid) return null;
  try {
    // Guard: avoid attempting to read another user's private profile from
    // the client. Firestore rules restrict reads on `users/{uid}` to the
    // authenticated owner. If the current client is not the owner, return
    // null to let callers fall back to public leaderboard fields.
    try {
      const current = auth && auth.currentUser;
      if (!current || current.uid !== uid) {
        console.log(
          "getUserProfile: skipping read because auth mismatch or not signed-in",
          { requestedUid: uid, currentUid: current?.uid }
        );
        return null;
      }
    } catch (guardErr) {
      // If auth isn't available for some reason, skip the read.
      console.warn("getUserProfile auth guard failed:", guardErr);
      return null;
    }

    const userRef = doc(db, "users", uid);
    const snap = await safeGetDoc(userRef, "get user profile");
    return snap && snap.exists() ? snap.data() : null;
  } catch (err) {
    console.warn("getUserProfile failed for", uid, err?.message || err);
    return null;
  }
}

export async function setLeaderboardEntry(uid, entry) {
  if (!uid) throw new Error("uid required");

  try {
    const ref = doc(db, "leaderboard", uid);
    let name = entry.name || entry.fullName || entry.userName || null;
    let photoURL = entry.photoURL || null;
    const avatarSeed = entry.avatarSeed || null;
    const avatarURL = entry.avatarURL || null;

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
      photoURL: photoURL || avatarURL || null,
      avatarSeed: avatarSeed || null,
      avatarURL: avatarURL || null,
      totalXP:
        typeof entry.totalXP === "number"
          ? entry.totalXP
          : typeof entry.totalScore === "number"
          ? entry.totalScore
          : 0,
      totalScore: typeof entry.totalScore === "number" ? entry.totalScore : 0,
      completedGames:
        typeof entry.completedGames === "number" ? entry.completedGames : 0,
      completedLessons:
        typeof entry.completedLessons === "number" ? entry.completedLessons : 0,
      completedUnits:
        typeof entry.completedUnits === "number" ? entry.completedUnits : 0,
      score:
        typeof entry.score === "number"
          ? entry.score
          : typeof entry.totalScore === "number"
          ? entry.totalScore
          : 0,
      updatedAt: entry.updatedAt || Date.now(),
      lastUpdated: Date.now(),
      lastActive: entry.lastActive || Date.now(),
    };

    await safeSetDoc(ref, payload, "set leaderboard entry");
    return payload;
  } catch (error) {
    console.error("Error setting leaderboard entry:", error);
    throw error;
  }
}

export async function recalculateUserXP(uid, opts = { lessonXP: 20 }) {
  if (!uid) throw new Error("uid required");

  try {
    let gameXP = 0;
    let completedGames = 0;

    try {
      const scores = await getUserScores(uid);
      Object.values(scores || {}).forEach((s) => {
        if (s && typeof s.score === "number") {
          gameXP += Math.max(0, Math.min(100, s.score));
          if (s.completed) completedGames++;
        }
      });
    } catch (err) {
      console.warn("Error calculating game XP:", err);
    }

    let lessonCount = 0;
    const completedUnitSet = new Set();

    try {
      const lessonsColl = collection(db, "users", uid, "lessons");
      const lessonsSnap = await safeGetDocs(lessonsColl, "get lessons");
      if (lessonsSnap) {
        lessonsSnap.forEach((d) => {
          const data = d.data ? d.data() : d;
          if (data?.completed) {
            lessonCount++;
            if (data.unitId !== undefined && data.unitId !== null) {
              completedUnitSet.add(String(data.unitId));
            }
          }
        });
      }
    } catch (err) {
      console.warn("Error counting lessons:", err);
    }

    const lessonXP = lessonCount * (opts.lessonXP || 20);
    const totalXP = Math.round(gameXP + lessonXP);
    const completedLessons = lessonCount;
    const completedUnits = completedUnitSet.size;

    const scoresRef = doc(db, "users", uid, "scores", "overall");
    const leaderboardRef = doc(db, "leaderboard", uid);
    const now = Date.now();

    await safeSetDoc(
      scoresRef,
      {
        totalXP,
        totalScore: totalXP,
        completedGames,
        completedLessons,
        completedUnits,
        updatedAt: now,
      },
      "update overall scores"
    );

    try {
      const profile = await getUserProfile(uid);
      await safeSetDoc(
        leaderboardRef,
        {
          userId: uid,
          name: profile?.name || profile?.fullName || "مستخدم",
          photoURL: profile?.photoURL || profile?.avatarURL || null,
          avatarSeed: profile?.avatarSeed || null,
          avatarURL: profile?.avatarURL || null,
          totalXP,
          totalScore: totalXP,
          completedGames,
          completedLessons,
          completedUnits,
          lastUpdated: now,
          lastActive: now,
        },
        "update leaderboard"
      );
    } catch (err) {
      await safeSetDoc(
        leaderboardRef,
        {
          userId: uid,
          totalXP,
          totalScore: totalXP,
          lastUpdated: now,
          lastActive: now,
        },
        "update leaderboard fallback"
      );
    }

    try {
      await syncUserToLeaderboard(uid);
    } catch (err) {
      console.warn("syncUserToLeaderboard failed:", err);
    }

    return totalXP;
  } catch (error) {
    console.error("Error recalculating user XP:", error);
    throw error;
  }
}

export async function syncUserToLeaderboard(uid) {
  if (!uid) throw new Error("uid required");

  try {
    const [profile, overall, scoresMap, lessonsMap, progress] =
      await Promise.all([
        getUserProfile(uid),
        getUserOverall(uid),
        getUserScores(uid),
        getUserLessons(uid),
        getUserProgress(uid),
      ]);

    const games = Object.values(scoresMap || {}).map((s) => ({
      gameId: s.gameId || s.id || null,
      score: typeof s.score === "number" ? s.score : null,
      rawScore: typeof s.rawScore === "number" ? s.rawScore : null,
      rawMax: typeof s.rawMax === "number" ? s.rawMax : null,
      points: typeof s.points === "number" ? s.points : null,
      completed: !!s.completed,
      lastPlayed: s.lastPlayed || null,
    }));

    const completedLessons = Object.values(lessonsMap || {}).filter(
      (l) => l.completed
    ).length;

    const payload = {
      userId: uid,
      name: profile?.name || profile?.fullName || "مستخدم",
      photoURL: profile?.photoURL || profile?.avatarURL || null,
      avatarSeed: profile?.avatarSeed || null,
      avatarURL: profile?.avatarURL || null,
      totalXP: overall?.totalXP ?? overall?.totalScore ?? 0,
      totalScore: overall?.totalScore ?? overall?.totalXP ?? 0,
      completedGames:
        overall?.completedGames ?? games.filter((g) => g.completed).length,
      completedLessons: overall?.completedLessons ?? completedLessons,
      completedUnits: overall?.completedUnits ?? 0,
      games,
      progressSummary: {
        totalProgress: progress?.totalProgress ?? null,
        unlockedUnits: progress?.unlockedUnits ?? null,
        lastUpdated: progress?.lastUpdated ?? null,
      },
      lastUpdated: Date.now(),
      lastActive: Date.now(),
    };

    const leaderboardRef = doc(db, "leaderboard", uid);
    await safeSetDoc(leaderboardRef, payload, "sync user to leaderboard");
    return payload;
  } catch (err) {
    console.error("syncUserToLeaderboard failed for", uid, err?.message || err);
    throw err;
  }
}

export async function saveUserProgress(
  uid,
  { progressData, unlockedUnits, totalProgress, userProfile, totals }
) {
  if (!uid) throw new Error("uid required");

  try {
    const userRef = doc(db, "users", uid);
    const progressRef = doc(db, "users", uid, "progress", "main");
    const scoresRef = doc(db, "users", uid, "scores", "overall");
    const leaderboardRef = doc(db, "leaderboard", uid);

    const batch = writeBatch(db);

    if (!userProfile) {
      try {
        const p = await getUserProfile(uid);
        if (p) userProfile = p;
      } catch (err) {
        console.warn("Could not read user profile", uid, err?.message || err);
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
          lastUpdated: Date.now(),
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
        lastUpdated: Date.now(),
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
        lastUpdated: Date.now(),
      },
      { merge: true }
    );

    batch.set(
      leaderboardRef,
      {
        userId: uid,
        name: userProfile?.name || userProfile?.fullName || "مستخدم",
        photoURL: userProfile?.photoURL || userProfile?.avatarURL || null,
        avatarSeed: userProfile?.avatarSeed || null,
        avatarURL: userProfile?.avatarURL || null,
        totalXP: totals?.totalXP ?? totals?.totalScore,
        totalScore: totals?.totalScore,
        score: typeof totals?.totalScore === "number" ? totals.totalScore : 0,
        updatedAt: Date.now(),
        completedGames: totals?.completedGames,
        completedLessons: totals?.completedLessons,
        completedUnits: totals?.completedUnits,
        lastUpdated: Date.now(),
        lastActive: Date.now(),
      },
      { merge: true }
    );

    await batch.commit();

    try {
      await syncUserToLeaderboard(uid);
    } catch (err) {
      console.warn("syncUserToLeaderboard failed:", err?.message || err);
    }

    return true;
  } catch (error) {
    console.error("Error saving user progress:", error);
    throw error;
  }
}

// Lightweight update helper for the user's progress document.
// Use this to persist small UI preferences such as `lastViewedUnit`.
export async function updateProgressFields(uid, fields = {}) {
  if (!uid) throw new Error("uid required");

  try {
    // Guard: ensure the current auth user matches the target uid. This
    // prevents the client from attempting a write that Firestore would
    // reject with a permission error.
    try {
      const current = auth && auth.currentUser;
      if (!current || current.uid !== uid) {
        console.warn(
          "updateProgressFields: auth mismatch or not signed-in, refusing to write",
          { requestedUid: uid, currentUid: current?.uid }
        );
        throw new Error("auth-mismatch");
      }
    } catch (guardErr) {
      console.warn("updateProgressFields auth guard failed:", guardErr);
      throw guardErr;
    }

    const progressRef = doc(db, "users", uid, "progress", "main");
    // shallow merge with lastUpdated
    const ok = await safeSetDoc(
      progressRef,
      { ...fields, lastUpdated: Date.now() },
      "update progress fields"
    );

    if (!ok) {
      // safeSetDoc returns false on permission-denied; surface a clearer error
      const e = new Error("permission-denied");
      e.code = "permission-denied";
      throw e;
    }

    return true;
  } catch (err) {
    console.error("Error updating progress fields:", err);
    throw err;
  }
}

export async function saveGameScore(
  uid,
  gameId,
  { unitId, score, rawScore, rawMax, points = 0, completed = false } = {}
) {
  if (!uid || !gameId) throw new Error("uid and gameId required");

  try {
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
      normalized = Math.max(0, Math.min(100, Math.round(score || 0)));
    }

    const scoreRef = doc(db, "users", uid, "scores", gameId);
    await safeSetDoc(
      scoreRef,
      {
        gameId: gameId,
        unitId: unitId,
        rawScore: typeof effectiveRaw === "number" ? effectiveRaw : null,
        rawMax: typeof rawMax === "number" ? rawMax : null,
        // normalized score (0-100)
        score: normalized,
        // store provided points when available, else fallback to normalized
        points: typeof points === "number" && points > 0 ? points : normalized,
        completed: !!completed,
        lastPlayed: Date.now(),
      },
      "save game score"
    );

    try {
      await setLeaderboardEntry(uid, {
        totalScore: normalized,
        totalXP: normalized,
        updatedAt: Date.now(),
      });
    } catch (err) {
      console.warn(
        "Could not write minimal leaderboard entry:",
        err?.message || err
      );
    }

    try {
      await recalculateUserXP(uid);
    } catch (err) {
      console.error("Error recalculating user XP:", err);
    }

    return normalized;
  } catch (error) {
    console.error("Error saving game score:", error);
    throw error;
  }
}

export async function getUserOverall(uid) {
  if (!uid) return null;
  try {
    const ref = doc(db, "users", uid, "scores", "overall");
    const snap = await safeGetDoc(ref, "get user overall");
    return snap && snap.exists() ? snap.data() : null;
  } catch (err) {
    console.warn("getUserOverall failed for", uid, err?.message || err);
    return null;
  }
}

export async function getUserScores(uid) {
  try {
    const coll = collection(db, "users", uid, "scores");
    const snap = await safeGetDocs(coll, "get user scores");
    if (!snap) return {};

    const map = {};
    snap.forEach((d) => {
      const data = d.data ? d.data() : d;
      // Normalize returned object so callers can always rely on .gameId
      const gameId = data?.gameId || d.id;
      if (data) map[gameId] = { gameId, ...data };
    });
    return map;
  } catch (error) {
    console.error("Error getting user scores:", error);
    return {};
  }
}

export async function getUserLessons(uid) {
  try {
    const coll = collection(db, "users", uid, "lessons");
    const snap = await safeGetDocs(coll, "get user lessons");
    if (!snap) return {};

    const map = {};
    snap.forEach((d) => {
      const data = d.data ? d.data() : d;
      if (data?.lessonId) map[data.lessonId] = data;
      else if (d.id) map[d.id] = data;
    });
    return map;
  } catch (error) {
    console.error("Error getting user lessons:", error);
    return {};
  }
}

export async function saveLessonCompletion(
  uid,
  lessonId,
  { unitId = 0, completed = true } = {}
) {
  if (!uid || !lessonId) throw new Error("uid and lessonId required");

  try {
    const lessonRef = doc(db, "users", uid, "lessons", lessonId);
    await safeSetDoc(
      lessonRef,
      {
        lessonId,
        unitId,
        completed,
        lastUpdated: Date.now(),
      },
      "save lesson completion"
    );

    try {
      await recalculateUserXP(uid);
    } catch (err) {
      console.error("Error recalculating user XP after lesson save:", err);
    }

    return true;
  } catch (error) {
    console.error("Error saving lesson completion:", error);
    throw error;
  }
}

export async function resetUserProgress(uid) {
  if (!uid) throw new Error("uid required");

  try {
    console.log("🔄 Resetting progress for user:", uid);

    const scoresColl = collection(db, "users", uid, "scores");
    const lessonsColl = collection(db, "users", uid, "lessons");

    try {
      const scoresSnap = await safeGetDocs(scoresColl, "get scores for reset");
      if (scoresSnap) {
        for (const d of scoresSnap.docs) {
          if (d.id !== "overall") {
            await safeSetDoc(
              d.ref,
              { score: 0, points: 0, completed: false, lastPlayed: Date.now() },
              "reset game score"
            );
          }
        }
      }
    } catch (error) {
      console.warn("Error resetting game scores:", error);
    }

    try {
      const lessonsSnap = await safeGetDocs(
        lessonsColl,
        "get lessons for reset"
      );
      if (lessonsSnap) {
        for (const d of lessonsSnap.docs) {
          await safeSetDoc(
            d.ref,
            { completed: false, lastUpdated: Date.now() },
            "reset lesson"
          );
        }
      }
    } catch (error) {
      console.warn("Error resetting lessons:", error);
    }

    const scoresRef = doc(db, "users", uid, "scores", "overall");
    await safeSetDoc(
      scoresRef,
      {
        totalScore: 0,
        totalXP: 0,
        completedGames: 0,
        completedLessons: 0,
        completedUnits: 0,
        lastUpdated: Date.now(),
      },
      "reset overall scores"
    );

    const progressRef = doc(db, "users", uid, "progress", "main");
    await safeSetDoc(
      progressRef,
      {
        progressData: [],
        unlockedUnits: [0],
        totalProgress: 0,
        lastUpdated: Date.now(),
      },
      "reset progress"
    );

    const leaderboardRef = doc(db, "leaderboard", uid);
    await safeSetDoc(
      leaderboardRef,
      {
        totalScore: 0,
        totalXP: 0,
        score: 0,
        completedGames: 0,
        completedLessons: 0,
        completedUnits: 0,
        lastUpdated: Date.now(),
      },
      "reset leaderboard"
    );

    console.log("✅ Progress reset successfully for user:", uid);
    return true;
  } catch (error) {
    console.error("❌ Error resetting user progress:", error);
    throw error;
  }
}

export async function getUserProgress(uid) {
  try {
    const ref = doc(db, "users", uid, "progress", "main");
    const snap = await safeGetDoc(ref, "get user progress");
    return snap && snap.exists() ? snap.data() : null;
  } catch (error) {
    console.error("Error getting user progress:", error);
    return null;
  }
}

export async function setGameProgress(uid, gameId, progress = {}) {
  if (!uid || !gameId) throw new Error("uid and gameId required");

  try {
    const ref = doc(db, "users", uid, "games", gameId);
    await safeSetDoc(
      ref,
      { ...progress, updatedAt: Date.now() },
      "set game progress"
    );
    return true;
  } catch (error) {
    console.error("Error setting game progress:", error);
    throw error;
  }
}

export async function getGameProgress(uid, gameId) {
  if (!uid || !gameId) return null;

  try {
    const ref = doc(db, "users", uid, "games", gameId);
    const snap = await safeGetDoc(ref, "get game progress");
    return snap && snap.exists() ? snap.data() : null;
  } catch (error) {
    console.error("Error getting game progress:", error);
    return null;
  }
}

export async function ensureUserInitialized(uid, profile = {}) {
  if (!uid) throw new Error("uid required");

  try {
    const userRef = doc(db, "users", uid);
    const snap = await safeGetDoc(userRef, "check user initialization");

    if (!snap || !snap.exists()) {
      await safeSetDoc(
        userRef,
        {
          email: profile.email || "",
          name: profile.name || profile.fullName || "ضيف جديد",
          photoURL: profile.photoURL || null,
          createdAt: Date.now(),
          lastLogin: Date.now(),
        },
        "initialize user"
      );
    }
    return true;
  } catch (error) {
    console.error("Error ensuring user initialization:", error);
    throw error;
  }
}

export async function updateUserFields(uid, fields = {}) {
  if (!uid) throw new Error("uid required");

  try {
    const userRef = doc(db, "users", uid);
    await safeSetDoc(
      userRef,
      { ...fields, lastUpdated: Date.now() },
      "update user fields"
    );
    return true;
  } catch (error) {
    console.error("Error updating user fields:", error);
    throw error;
  }
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
  getUserOverall,
  syncUserToLeaderboard,
};
