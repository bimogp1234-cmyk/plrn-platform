/**
 * scripts/migrate-leaderboard.js
 *
 * One-time migration helper to ensure every user has a top-level
 * `leaderboard/{uid}` document that contains canonical fields used by the UI.
 *
 * Usage:
 * 1) Place your Firebase service account JSON at the repo root as `serviceAccountKey.json`.
 * 2) Install dependency: npm install firebase-admin
 * 3) Dry run (shows what would change): node scripts/migrate-leaderboard.js --dry
 * 4) Run migration: node scripts/migrate-leaderboard.js
 *
 * The script will look for data in the following places (in order):
 * - users/{uid}/leaderboard/{*}
 * - users/{uid}/scores/overall
 * - users/{uid} doc fields (totalScore, name, photoURL)
 * - existing top-level leaderboard/{uid} (will be merged)
 */

const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const DRY_RUN = process.argv.includes("--dry") || process.env.DRY_RUN === "1";

const keyPath = path.resolve(process.cwd(), "serviceAccountKey.json");
if (!fs.existsSync(keyPath)) {
  console.error(
    "Missing serviceAccountKey.json in repository root. Create one in Firebase console and save it as serviceAccountKey.json."
  );
  process.exit(1);
}

const serviceAccount = require(keyPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

function pickNumber(v, fallback = 0) {
  return typeof v === "number" ? v : fallback;
}

async function buildEntryForUser(uid, userDoc) {
  // Try per-user leaderboard subcollection
  const userLbCol = db.collection("users").doc(uid).collection("leaderboard");
  const lbSnap = await userLbCol.limit(1).get();
  if (!lbSnap.empty) {
    const d = lbSnap.docs[0].data();
    return {
      userId: uid,
      name: d.name || userDoc.name || userDoc.fullName || "مستخدم",
      photoURL: d.photoURL || userDoc.photoURL || null,
      totalScore: pickNumber(
        d.totalScore,
        pickNumber(d.score, pickNumber(userDoc.totalScore, 0))
      ),
      completedGames: pickNumber(d.completedGames, 0),
      completedLessons: pickNumber(d.completedLessons, 0),
      completedUnits: pickNumber(d.completedUnits, 0),
      lastUpdated:
        d.lastUpdated ||
        d.updatedAt ||
        userDoc.lastUpdated ||
        admin.firestore.FieldValue.serverTimestamp(),
    };
  }

  // Fallback: try users/{uid}/scores/overall
  const scoresOverallRef = db
    .collection("users")
    .doc(uid)
    .collection("scores")
    .doc("overall");
  const scoresSnap = await scoresOverallRef.get();
  if (scoresSnap.exists) {
    const d = scoresSnap.data();
    return {
      userId: uid,
      name: userDoc.name || userDoc.fullName || "مستخدم",
      photoURL: userDoc.photoURL || null,
      totalScore: pickNumber(d.totalScore, pickNumber(userDoc.totalScore, 0)),
      completedGames: pickNumber(d.completedGames, 0),
      completedLessons: pickNumber(d.completedLessons, 0),
      completedUnits: pickNumber(d.completedUnits, 0),
      lastUpdated:
        d.lastUpdated ||
        userDoc.lastUpdated ||
        admin.firestore.FieldValue.serverTimestamp(),
    };
  }

  // Fallback: look at top-level existing leaderboard doc
  const topRef = db.collection("leaderboard").doc(uid);
  const topSnap = await topRef.get();
  if (topSnap.exists) {
    const d = topSnap.data();
    return {
      userId: uid,
      name: d.name || userDoc.name || userDoc.fullName || "مستخدم",
      photoURL: d.photoURL || userDoc.photoURL || null,
      totalScore: pickNumber(
        d.totalScore,
        pickNumber(d.score, pickNumber(userDoc.totalScore, 0))
      ),
      completedGames: pickNumber(d.completedGames, 0),
      completedLessons: pickNumber(d.completedLessons, 0),
      completedUnits: pickNumber(d.completedUnits, 0),
      lastUpdated:
        d.lastUpdated ||
        d.updatedAt ||
        userDoc.lastUpdated ||
        admin.firestore.FieldValue.serverTimestamp(),
    };
  }

  // Last fallback: use userDoc fields
  return {
    userId: uid,
    name: userDoc.name || userDoc.fullName || "مستخدم",
    photoURL: userDoc.photoURL || null,
    totalScore: pickNumber(userDoc.totalScore, 0),
    completedGames: pickNumber(userDoc.completedGames, 0),
    completedLessons: pickNumber(userDoc.completedLessons, 0),
    completedUnits: pickNumber(userDoc.completedUnits, 0),
    lastUpdated:
      userDoc.lastUpdated ||
      userDoc.updatedAt ||
      admin.firestore.FieldValue.serverTimestamp(),
  };
}

async function migrate() {
  console.log(
    DRY_RUN ? "Running migration in DRY-RUN mode" : "Running migration (live)"
  );

  const usersSnap = await db.collection("users").get();
  console.log(`Found ${usersSnap.size} users`);

  let updated = 0;
  for (const udoc of usersSnap.docs) {
    const uid = udoc.id;
    const userDoc = udoc.data() || {};

    try {
      const entry = await buildEntryForUser(uid, userDoc);

      // Basic sanity: skip users with no meaningful data (name only default and 0 score) if you want
      // Here we will still write them so they appear in the leaderboard

      if (DRY_RUN) {
        console.log("[DRY] Would write leaderboard/" + uid + ":", entry);
      } else {
        await db
          .collection("leaderboard")
          .doc(uid)
          .set(
            Object.assign({}, entry, {
              lastUpdated: admin.firestore.Timestamp.now(),
            }),
            { merge: true }
          );
        console.log("Wrote leaderboard/" + uid);
      }

      updated++;
    } catch (err) {
      console.error("Error migrating user", uid, err);
    }
  }

  console.log(`Done. Processed ${updated} users.`);
}

migrate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
