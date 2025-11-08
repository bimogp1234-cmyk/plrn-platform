import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useAuth } from "./AuthContext";
import * as progressService from "../components/Departments/ComputerDep/progressService";

const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const { user: authUser } = useAuth();
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState(null);
  const [overall, setOverall] = useState(null);
  const [scores, setScores] = useState({});
  const [lessons, setLessons] = useState({});
  const [progress, setProgress] = useState(null);

  // Lightweight deep-equality via JSON stringify for small objects coming from
  // realtime listeners. This avoids unnecessary setState -> re-renders when
  // the incoming snapshot doesn't change the shape/values.
  const _isEqual = (a, b) => {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (err) {
      return a === b;
    }
  };

  // Load initial snapshot and attach realtime listeners when user is signed in
  useEffect(() => {
    let unsubScores = null;
    let unsubLessons = null;
    let unsubProgress = null;
    let mounted = true;

    const uid = authUser?.uid;
    if (!uid) {
      // reset
      setProfile(null);
      setOverall(null);
      setScores({});
      setLessons({});
      setProgress(null);
      setLoading(false);
      return () => {};
    }

    setLoading(true);

    const loadAll = async () => {
      try {
        const [p, o, s, l, pr] = await Promise.all([
          progressService.getUserProfile(uid),
          progressService.getUserOverall(uid),
          progressService.getUserScores(uid),
          progressService.getUserLessons(uid),
          progressService.getUserProgress(uid),
        ]);

        if (!mounted) return;
        setProfile(p || null);
        setOverall(o || null);
        setScores(s || {});
        setLessons(l || {});
        setProgress(pr || null);
        setLoading(false);
      } catch (err) {
        console.error("UserDataProvider loadAll error:", err);
        setLoading(false);
      }
    };

    loadAll();

    try {
      unsubScores = progressService.onUserScoresChange(uid, (updated) => {
        try {
          const next = updated || {};
          setScores((prev) => {
            if (_isEqual(prev, next)) return prev;
            return next;
          });
        } catch (e) {
          console.error("onUserScoresChange handler error", e);
        }
      });
    } catch (err) {
      console.warn("Failed to attach onUserScoresChange", err);
    }

    try {
      unsubLessons = progressService.onUserLessonsChange(uid, (updated) => {
        try {
          const next = updated || {};
          setLessons((prev) => {
            if (_isEqual(prev, next)) return prev;
            return next;
          });
        } catch (e) {
          console.error("onUserLessonsChange handler error", e);
        }
      });
    } catch (err) {
      console.warn("Failed to attach onUserLessonsChange", err);
    }

    try {
      unsubProgress = progressService.onUserProgressChange(uid, (updated) => {
        try {
          const next = updated || null;
          setProgress((prev) => {
            if (_isEqual(prev, next)) return prev;
            return next;
          });
        } catch (e) {
          console.error("onUserProgressChange handler error", e);
        }
      });
    } catch (err) {
      console.warn("Failed to attach onUserProgressChange", err);
    }

    return () => {
      mounted = false;
      try {
        if (typeof unsubScores === "function") unsubScores();
      } catch (e) {}
      try {
        if (typeof unsubLessons === "function") unsubLessons();
      } catch (e) {}
      try {
        if (typeof unsubProgress === "function") unsubProgress();
      } catch (e) {}
    };
  }, [authUser]);

  // Helper actions (wrap service calls) -------------------------------------------------
  const saveGameScore = useCallback(
    async (gameId, opts) => {
      const uid = authUser?.uid;
      if (!uid || !gameId) throw new Error("uid and gameId required");
      return progressService.saveGameScore(uid, gameId, opts);
    },
    [authUser]
  );

  const setGameProgress = useCallback(
    async (gameId, progressPayload) => {
      const uid = authUser?.uid;
      if (!uid || !gameId) throw new Error("uid and gameId required");
      return progressService.setGameProgress(uid, gameId, progressPayload);
    },
    [authUser]
  );

  const saveUserProgress = useCallback(
    async (payload) => {
      const uid = authUser?.uid;
      if (!uid) throw new Error("uid required");
      return progressService.saveUserProgress(uid, payload);
    },
    [authUser]
  );

  const value = {
    user: authUser,
    loading,
    profile,
    overall,
    scores,
    lessons,
    progress,
    saveGameScore,
    setGameProgress,
    saveUserProgress,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserDataContext);
};

export default UserDataContext;
