# plrn-platform Cloud Functions

This folder contains Firebase Cloud Functions that synchronize a minimal,
public `leaderboard/{uid}` document from each user's aggregated scores and
profile. That allows the client to read `leaderboard/*` (public) while keeping
`users/*` private.

Files

- `index.js` — Cloud Functions triggers:
  - `syncLeaderboardFromOverall` — onWrite `users/{uid}/scores/overall` to write `leaderboard/{uid}`.
  - `syncLeaderboardFromProfile` — onWrite `users/{uid}` to update public profile fields on `leaderboard/{uid}`.

Install & run locally

1. From repository root:

```powershell
cd functions
npm install
npm run serve
```

2. Use Firestore emulator UI to inspect `leaderboard/` documents.

Deploy

1. Ensure Firebase CLI is installed and you're logged in:

```powershell
npm install -g firebase-tools
firebase login
firebase use <your-project-id>
```

2. Deploy functions:

```powershell
cd functions
npm run deploy
```

Notes

- Admin SDK (used in these functions) bypasses Firestore security rules. That
  is intentional — functions act as the trusted synchronizer.
- After deploying, ensure your client reads from `leaderboard` (public) not
  directly from `users` (private) for best security and efficiency.
