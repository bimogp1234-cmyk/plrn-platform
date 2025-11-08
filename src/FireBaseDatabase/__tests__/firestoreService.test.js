import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

// Mock firebase/firestore before importing the service under test
vi.mock("firebase/firestore", () => {
  // We'll provide mock implementations for collection and getDocs
  return {
    collection: (...args) => ({ _path: args }),
    getDocs: async (collRef) => {
      const docs = [
        { id: "game1", data: () => ({ score: 50, gameId: "game1" }) },
        { id: "game2", data: () => ({ score: 80 }) },
      ];
      return {
        docs,
        forEach(cb) {
          docs.forEach(cb);
        },
      };
    },
  };
});

import { getUserScores } from "../firestoreService";

describe("firestoreService.getUserScores normalization", () => {
  it("returns a map keyed by gameId and ensures gameId is present on each entry", async () => {
    const map = await getUserScores("some-uid");

    expect(map).toBeTruthy();
    expect(map.game1).toBeTruthy();
    expect(map.game1.gameId).toBe("game1");

    // second doc lacked gameId in the data; should fall back to doc.id
    expect(map.game2).toBeTruthy();
    expect(map.game2.gameId).toBe("game2");
  });
});
