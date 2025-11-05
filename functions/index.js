const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Utility: safe read
async function safeGetDoc(path) {
  try {
    return await db.doc(path).get();
  } catch (err) {
    console.warn("safeGetDoc error", path, err.message || err);
    return null;
  }
}

/**
 * Sync leaderboard doc when user's overall scores change.
 * Trigger: users/{uid}/scores/overall onCreate/onUpdate/onDelete
 */
exports.syncLeaderboardFromOverall = functions.firestore
  .document("users/{uid}/scores/overall")
  .onWrite(async (change, context) => {
    const uid = context.params.uid;

    // If overall doc removed -> delete public leaderboard doc
    if (!change.after.exists) {
      try {
        await db.doc(`leaderboard/${uid}`).delete();
        console.log(`Deleted leaderboard/${uid} because overall deleted`);
      } catch (e) {
        console.warn("Failed deleting leaderboard doc", uid, e.message || e);
      }
      return null;
    }

    const overall = change.after.data() || {};

    // Read profile (may be private; admin SDK bypasses rules)
    const userSnap = await safeGetDoc(`users/${uid}`);
    const profile = userSnap && userSnap.exists ? userSnap.data() : {};

    const totalXP =
      typeof overall.totalXP === "number"
        ? overall.totalXP
        : typeof overall.totalScore === "number"
        ? overall.totalScore
        : 0;

    const totalScore =
      typeof overall.totalScore === "number"
        ? overall.totalScore
        : typeof overall.totalXP === "number"
        ? overall.totalXP
        : 0;

    const payload = {
      userId: uid,
      name: profile.name || profile.fullName || "مستخدم",
      photoURL: profile.photoURL || null,
      totalXP,
      totalScore,
      completedGames: overall.completedGames || profile.completedGames || 0,
      completedLessons:
        overall.completedLessons || profile.completedLessons || 0,
      completedUnits: overall.completedUnits || profile.completedUnits || 0,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      lastActive: admin.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await db.doc(`leaderboard/${uid}`).set(payload, { merge: true });
      console.log(`Synced leaderboard/${uid}`, { totalXP, totalScore });
    } catch (err) {
      console.error("Error writing leaderboard doc", err.message || err);
    }

    return null;
  });

/**
 * Update public leaderboard profile fields when user profile changes.
 * Trigger: users/{uid} onWrite
 */
exports.syncLeaderboardFromProfile = functions.firestore
  .document("users/{uid}")
  .onWrite(async (change, context) => {
    const uid = context.params.uid;

    if (!change.after.exists) {
      // user deleted
      try {
        await db.doc(`leaderboard/${uid}`).delete();
        console.log(`Deleted leaderboard/${uid} because user deleted`);
      } catch (e) {
        console.warn(
          "Failed deleting leaderboard doc on user delete",
          e.message || e
        );
      }
      return null;
    }

    const profile = change.after.data() || {};
    const payload = {
      name: profile.name || profile.fullName || "مستخدم",
      photoURL: profile.photoURL || null,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await db.doc(`leaderboard/${uid}`).set(payload, { merge: true });
      console.log(`Updated leaderboard profile for ${uid}`);
    } catch (err) {
      console.error("Error updating leaderboard profile", err.message || err);
    }

    return null;
  });
