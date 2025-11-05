// MainComDep.jsx - FIXED CIRCULAR DEPENDENCY
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, useMediaQuery, useTheme } from "@mui/material";
import {
  ArrowBack,
  Gamepad,
  Campaign,
  CheckCircle,
  BugReport,
  Code,
  School,
  SportsEsports,
  Lock,
  LockOpen,
  MilitaryTech,
  Refresh,
} from "@mui/icons-material";
import Leaderboard from "./../LeaderboardComp/Leaderboard";
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  saveUserProgress,
  saveGameScore,
  getUserScores,
  getUserLessons,
  resetUserProgress,
  saveLessonCompletion,
} from "./../../../FireBaseDatabase/firestoreService";
import { db } from "../../../FireBaseDatabase/firebase";
export default function MainComDep() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // 🟩 Get user data from router or localStorage
  const { userData: passedUserData, darkMode } = location.state || {};
  const storedUserData = localStorage.getItem("userData");
  const userData =
    passedUserData || (storedUserData ? JSON.parse(storedUserData) : null);

  const name = userData?.fullName || userData?.name || "مستخدم غير معروف";
  const photo =
    userData?.photoURL || "https://placehold.co/100x100/10b981/ffffff?text=U";

  const [progressData, setProgressData] = useState([]);
  const [unlockedUnits, setUnlockedUnits] = useState([0]);
  const [userScore, setUserScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [gameScores, setGameScores] = useState({});
  const [lessonCompletions, setLessonCompletions] = useState({});

  // 🎯 Refs to prevent unnecessary re-renders
  const progressDataRef = useRef([]);
  const gameScoresRef = useRef({});
  const lessonCompletionsRef = useRef({});
  const isInitializedRef = useRef(false);

  // 🎯 Units model: each unit contains its lessons and games with max points.
  // This makes scoring deterministic and easy to change per-unit.
  const units = useMemo(
    () => [
      {
        id: 0,
        label: "الوحدة الأولى: أساسيات البرمجة",
        color: "teal",
        lessonWeight: 0.4, // 40% of unit
        gameWeight: 0.6, // 60% of unit
        lessons: [
          {
            id: "intro-programming",
            title: "مدخل إلى البرمجة",
            emoji: "💻",
            maxPoints: 40,
            gradient: "from-green-200 to-green-400",
          },
          {
            id: "computer-components",
            title: "المكونات المادية للحاسوب",
            emoji: "🖥️",
            maxPoints: 40,
            gradient: "from-blue-200 to-blue-400",
          },
        ],
        games: [
          {
            path: "dragDrop",
            title: "لعبة المخطط الانسيابي",
            gameId: "dragDrop",
            icon: <BugReport />,
            maxPoints: 60,
            gradientLeft: "from-green-400 to-teal-600",
            gradientRight: "from-teal-600 to-green-400",
          },
          {
            path: "hangmangame",
            title: "لعبة الرجل المشنوق",
            gameId: "hangmangame",
            icon: <BugReport />,
            maxPoints: 60,
            gradientLeft: "from-yellow-400 to-amber-600",
            gradientRight: "from-amber-600 to-yellow-400",
          },
          {
            path: "messinglines",
            title: "لعبة الخوارزمية الناقصة",
            gameId: "messinglines",
            icon: <BugReport />,
            maxPoints: 60,
            gradientLeft: "from-yellow-400 to-amber-600",
            gradientRight: "from-amber-600 to-yellow-400",
          },
        ],
      },
      {
        id: 1,
        label: "الوحدة الثانية: مدخل للغات البرمجة",
        color: "pink",
        lessonWeight: 0.4,
        gameWeight: 0.6,
        lessons: [
          {
            id: "algorithms-flowcharts",
            title: "الخوارزميات والمخططات الانسيابية",
            emoji: "📊",
            maxPoints: 40,
            gradient: "from-purple-200 to-purple-400",
          },
        ],
        games: [
          {
            path: "flowchartgame",
            title: "مغامرة الخوارزميات",
            gameId: "flowchartgame",
            icon: <SportsEsports />,
            maxPoints: 60,
            gradientLeft: "from-purple-400 to-pink-600",
            gradientRight: "from-pink-600 to-purple-400",
          },
          {
            path: "algorithm-shapes-game",
            title: "لعبة أشكال الخوارزميات",
            gameId: "algorithm-shapes",
            icon: <Code />,
            maxPoints: 60,
            gradientLeft: "from-indigo-400 to-purple-600",
            gradientRight: "from-purple-600 to-indigo-400",
          },
        ],
      },
      {
        id: 2,
        label: "الوحدة الثالثة: الخوارزميات والمخططات",
        color: "amber",
        lessonWeight: 0.4,
        gameWeight: 0.6,
        lessons: [
          {
            id: "javascript-basics",
            title: "برمجة بلغة جافا سكربت",
            emoji: "📝",
            maxPoints: 40,
            gradient: "from-yellow-200 to-yellow-400",
          },
        ],
        games: [
          {
            path: "compiler-game",
            title: "رحلة المترجم",
            gameId: "compiler-journey",
            icon: <Code />,
            maxPoints: 60,
            gradientLeft: "from-red-400 to-rose-600",
            gradientRight: "from-rose-600 to-red-400",
          },
        ],
      },
      {
        id: 3,
        label: "الوحدة الرابعة: مبادئ البرمجة بلغة سكراتش",
        color: "sky",
        lessonWeight: 0.4,
        gameWeight: 0.6,
        lessons: [
          {
            id: "data-handling",
            title: "التعامل مع البيانات",
            emoji: "📂",
            maxPoints: 40,
            gradient: "from-red-200 to-red-400",
          },
        ],
        games: [
          {
            path: "scratch-lab",
            title: "مختبر سكراتش",
            gameId: "scratch-lab",
            icon: <School />,
            maxPoints: 60,
            gradientLeft: "from-blue-400 to-cyan-600",
            gradientRight: "from-cyan-600 to-blue-400",
          },
        ],
      },
    ],
    []
  );

  // 🎯 Initialize progress data structure
  const getInitialProgressData = useCallback(() => {
    // Create initial progress entries derived from `units` model so it's DRY and consistent
    return units.map((u, idx) => {
      const totalGames = (u.games || []).length;
      const totalLessons = (u.lessons || []).length;
      const maxPossibleGameScore = (u.games || []).reduce(
        (s, g) => s + (g.maxPoints || 100),
        0
      );
      const maxPossibleLessonScore = (u.lessons || []).reduce(
        (s, l) => s + (l.maxPoints || 40),
        0
      );
      const maxPossibleScore = Math.round(
        (u.gameWeight || 0.6) * 100 + (u.lessonWeight || 0.4) * 100
      );

      // default required score thresholds (fallback to index * 30 if not configured)
      const defaultThresholds = [0, 30, 60, 90];

      return {
        id: u.id,
        label: u.label,
        percentage: 0,
        color: u.color || (defaultThresholds[u.id] ? "teal" : "teal"),
        completed: false,
        requiredScore: defaultThresholds[u.id] || u.id * 30,
        totalScore: 0,
        completedGames: 0,
        completedLessons: 0,
        totalGames,
        totalLessons,
        maxPossibleScore: maxPossibleScore || 100,
        gameScore: 0,
        lessonScore: 0,
      };
    });
  }, []);

  // 🎯 Get games by unit
  const getGamesByUnit = useCallback(
    (unitId) => {
      const u = units.find((x) => x.id === unitId);
      return u ? u.games || [] : [];
    },
    [units]
  );

  // 🎯 Get lessons by unit
  const getLessonsByUnit = useCallback(
    (unitId) => {
      const u = units.find((x) => x.id === unitId);
      return u ? u.lessons || [] : [];
    },
    [units]
  );

  // 🎯 Check if unit is unlocked
  const isUnitUnlocked = useCallback(
    (unitId) => {
      return unlockedUnits.includes(unitId);
    },
    [unlockedUnits]
  );

  // 🎯 Calculate total progress from all units
  const getTotalProgress = useCallback(() => {
    if (progressData.length === 0) return 0;
    const totalPercentage = progressData.reduce(
      (sum, unit) => sum + (unit.percentage || 0),
      0
    );
    return Math.round(totalPercentage / progressData.length);
  }, [progressData]);

  // 🎯 Get grid classes for responsive design
  // Accepts either a numeric count (preferred) or the special string 'stats'.
  // This keeps layout flexible: small counts shrink columns, large counts expand.
  const getGridClasses = useCallback(
    (countOrKey) => {
      // Preserve the old 'stats' behavior when explicitly requested
      if (typeof countOrKey === "string" && countOrKey === "stats") {
        return isMobile ? "grid-cols-2" : "grid-cols-4";
      }

      const count = Number(countOrKey) || 0;

      if (isMobile) return "grid-cols-1";
      if (isTablet) {
        if (count <= 1) return "grid-cols-1";
        if (count === 2) return "grid-cols-2";
        return "grid-cols-2"; // tablet stays at 2 cols for readability
      }

      // Desktop
      if (count <= 1) return "grid-cols-1";
      if (count === 2) return "grid-cols-2";
      if (count === 3) return "grid-cols-3";
      return "grid-cols-3"; // don't exceed 3 by default; keep cards readable
    },
    [isMobile, isTablet]
  );

  // 🎯 Load individual game scores from Firebase
  const loadIndividualGameScores = useCallback(async () => {
    if (!userData?.uid) {
      console.log("❌ No user UID found");
      return {};
    }
    try {
      const scores = await getUserScores(userData.uid);
      console.log("🎮 Loaded individual game scores:", scores);
      return scores;
    } catch (error) {
      console.error("❌ Error loading individual game scores:", error);
      return {};
    }
  }, [userData?.uid]);

  // 🎯 Load lesson completions from Firebase
  const loadLessonCompletions = useCallback(async () => {
    if (!userData?.uid) {
      console.log("❌ No user UID found for lesson completions");
      return {};
    }
    try {
      const completions = await getUserLessons(userData.uid);
      console.log("📚 Loaded lesson completions:", completions);
      return completions;
    } catch (error) {
      console.error("❌ Error loading lesson completions:", error);
      return {};
    }
  }, [userData?.uid]);

  // 🎯 Calculate unit progress based on game scores AND lessons
  const calculateUnitProgress = useCallback(
    (unit, gameScores, lessonCompletions) => {
      // Use the canonical `units` model to get games/lessons metadata
      const unitDef = units.find((u) => u.id === unit.id) || {};
      const unitGames = unitDef.games || [];
      const unitLessons = unitDef.lessons || [];

      // Calculate game points (60% of unit)
      let totalGameScore = 0;
      let maxPossibleGameScore = 0;
      let completedGames = 0;

      unitGames.forEach((game) => {
        const gameScore = gameScores[game.gameId]?.score || 0;
        const gameMaxScore = game.maxPoints || game.points || 100;

        totalGameScore += Math.min(gameScore, gameMaxScore);
        maxPossibleGameScore += gameMaxScore;

        if (gameScores[game.gameId]?.completed) {
          completedGames++;
        }
      });

      // Calculate lesson points (40% of unit)
      let totalLessonScore = 0;
      let maxPossibleLessonScore = 0;
      let completedLessons = 0;

      unitLessons.forEach((lesson) => {
        const lMax = lesson.maxPoints || 40;
        maxPossibleLessonScore += lMax;
        if (lessonCompletions[lesson.id]?.completed) {
          completedLessons++;
          totalLessonScore += lMax;
        }
      });

      // Combine scores: scale games and lessons into unit percentages using unit weights
      const gameContribution =
        maxPossibleGameScore > 0
          ? (totalGameScore / maxPossibleGameScore) *
            ((unitDef.gameWeight || 0.6) * 100)
          : 0;

      const lessonContribution =
        maxPossibleLessonScore > 0
          ? (totalLessonScore / maxPossibleLessonScore) *
            ((unitDef.lessonWeight || 0.4) * 100)
          : 0;

      const totalScore = gameContribution + lessonContribution;
      const percentage = Math.min(100, Math.round(totalScore));

      const completed = percentage >= 100;

      return {
        totalScore: Math.round(totalScore),
        percentage,
        completed,
        completedGames,
        completedLessons,
        maxPossibleScore: 100,
        gameScore: Math.round(gameContribution),
        lessonScore: Math.round(lessonContribution),
      };
    },
    [units]
  );

  // 🎯 Calculate which units should be unlocked
  const calculateUnlockedUnits = useCallback((progressData) => {
    const unlocked = [0]; // Always unlock first unit

    progressData.forEach((unit, index) => {
      if (index > 0 && progressData[index - 1]?.completed) {
        unlocked.push(unit.id);
      }
    });

    console.log("🔓 Calculated unlocked units:", unlocked);
    return unlocked;
  }, []);

  // 🎯 Calculate total user score from all units
  const calculateTotalUserScore = useCallback((progressData) => {
    return progressData.reduce((sum, unit) => sum + (unit.totalScore || 0), 0);
  }, []);

  // 🎯 Save progress to Firebase
  const saveProgressToFirebase = useCallback(async () => {
    if (!userData?.uid) {
      console.log("❌ No user UID, skipping Firebase save");
      return;
    }
    try {
      const totalProgress = getTotalProgress();
      const completedGames = progressDataRef.current.reduce(
        (count, unit) => count + (unit.completedGames || 0),
        0
      );
      const completedLessons = progressDataRef.current.reduce(
        (count, unit) => count + (unit.completedLessons || 0),
        0
      );
      const completedUnits = progressDataRef.current.filter(
        (unit) => unit.completed
      ).length;

      const userProfile = {
        email: userData.email,
        name: userData.fullName || userData.name,
        photoURL: userData.photoURL,
      };

      const totals = {
        totalScore: userScore,
        totalXP: userScore,
        completedGames,
        completedLessons,
        completedUnits,
      };

      await saveUserProgress(userData.uid, {
        progressData: progressDataRef.current,
        unlockedUnits,
        totalProgress,
        userProfile,
        totals,
      });

      console.log("✅ All progress saved to Firestore (via service)");
    } catch (error) {
      console.error("❌ Error saving to Firestore:", error);
    }
  }, [userData, userScore, unlockedUnits, getTotalProgress]);

  // 🎯 Debounced save scheduler to avoid rapid Firestore writes
  const saveTimeoutRef = useRef(null);

  const scheduleSave = useCallback(() => {
    // Clear previous timer
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Schedule save after short delay (1.5s)
    saveTimeoutRef.current = setTimeout(() => {
      // flush timer reference
      saveTimeoutRef.current = null;
      saveProgressToFirebase().catch((err) =>
        console.error("❌ Debounced save failed:", err)
      );
    }, 1500);
  }, [saveProgressToFirebase]);

  // 🎯 Recalculate all progress from individual game scores AND lesson completions
  const recalculateAllProgress = useCallback(async () => {
    console.log("🔄 Starting progress recalculation...");

    try {
      const currentGameScores = await loadIndividualGameScores();
      const currentLessonCompletions = await loadLessonCompletions();
      const initialProgress = getInitialProgressData();

      // Calculate progress for each unit
      const updatedProgress = initialProgress.map((unit) => {
        const unitProgress = calculateUnitProgress(
          unit,
          currentGameScores,
          currentLessonCompletions
        );

        return {
          ...unit,
          percentage: unitProgress.percentage,
          completed: unitProgress.completed,
          totalScore: unitProgress.totalScore,
          completedGames: unitProgress.completedGames,
          completedLessons: unitProgress.completedLessons,
          maxPossibleScore: unitProgress.maxPossibleScore,
          gameScore: unitProgress.gameScore,
          lessonScore: unitProgress.lessonScore,
        };
      });

      // Calculate total user score
      const newTotalScore = calculateTotalUserScore(updatedProgress);

      // Update unlocked units
      const newUnlockedUnits = calculateUnlockedUnits(updatedProgress);

      console.log("💰 Recalculated total score:", newTotalScore);
      console.log("📊 Final progress data:", updatedProgress);
      console.log("🔓 Final unlocked units:", newUnlockedUnits);

      // Update states
      setProgressData(updatedProgress);
      setUserScore(newTotalScore);
      setUnlockedUnits(newUnlockedUnits);
      setGameScores(currentGameScores);
      setLessonCompletions(currentLessonCompletions);

      // Update refs
      progressDataRef.current = updatedProgress;
      gameScoresRef.current = currentGameScores;
      lessonCompletionsRef.current = currentLessonCompletions;

      return {
        updatedProgress,
        newTotalScore,
        newUnlockedUnits,
        gameScores: currentGameScores,
        lessonCompletions: currentLessonCompletions,
      };
    } catch (error) {
      console.error("❌ Error recalculating progress:", error);
      throw error;
    }
  }, [
    loadIndividualGameScores,
    loadLessonCompletions,
    getInitialProgressData,
    calculateUnitProgress,
    calculateTotalUserScore,
    calculateUnlockedUnits,
  ]);

  // 🎯 Mark lesson as completed
  const markLessonCompleted = useCallback(
    async (lessonId, unitId) => {
      if (!userData?.uid) return;

      try {
        // Use centralized service helper to save lesson completion
        await saveLessonCompletion(userData.uid, lessonId, {
          unitId,
          completed: true,
        });

        console.log("✅ Lesson marked as completed:", lessonId);

        // Reload lesson completions and recalculate progress
        const updatedCompletions = await loadLessonCompletions();
        setLessonCompletions(updatedCompletions);
        lessonCompletionsRef.current = updatedCompletions;

        // Recalculate all progress
        await recalculateAllProgress();
      } catch (error) {
        console.error("❌ Error marking lesson as completed:", error);
      }
    },
    [userData?.uid, loadLessonCompletions, recalculateAllProgress]
  );

  // 🎯 Update game progress and scores
  const updateGameProgress = useCallback(
    async (unitId, gameId, gameData) => {
      if (unitId === null || gameId === null) {
        console.log("❌ Missing unitId or gameId");
        return;
      }

      const score =
        gameData?.score || gameData?.finalScore || gameData?.points || 0;
      const completed = gameData?.completed || false;

      console.log("🔄 Updating game progress:", {
        unitId,
        gameId,
        score,
        completed,
        gameData,
      });

      try {
        // Use centralized helper to save game score and trigger recalculation
        if (userData?.uid) {
          // Prefer rawScore/rawMax if provided by the game; otherwise try to infer from unit/game metadata
          const rawScore =
            typeof gameData?.rawScore === "number"
              ? gameData.rawScore
              : typeof gameData?.score === "number"
              ? gameData.score
              : score;

          const gameDef = units
            .map((u) => u.games || [])
            .flat()
            .find((g) => g.gameId === gameId);

          const rawMax =
            typeof gameData?.rawMax === "number"
              ? gameData.rawMax
              : gameDef?.maxPoints || gameData?.points || undefined;

          await saveGameScore(userData.uid, gameId, {
            unitId,
            rawScore,
            rawMax,
            completed: completed || false,
          });
          console.log("✅ Individual score saved for", gameId);
        }

        // Recalculate all progress to reflect changes
        await recalculateAllProgress();
      } catch (error) {
        console.error("❌ Error in updateGameProgress:", error);
      }
    },
    [userData?.uid, recalculateAllProgress]
  );

  // 🎯 Get game score for display
  const getGameScore = useCallback(
    (gameId) => {
      return gameScores[gameId]?.score || 0;
    },
    [gameScores]
  );

  // 🎯 Check if game is completed
  const isGameCompleted = useCallback(
    (gameId) => {
      return gameScores[gameId]?.completed || false;
    },
    [gameScores]
  );

  // 🎯 Check if lesson is completed
  const isLessonCompleted = useCallback(
    (lessonId) => {
      return lessonCompletions[lessonId]?.completed || false;
    },
    [lessonCompletions]
  );

  // 🎯 Game completion handler
  useEffect(() => {
    const handleGameCompletion = (event) => {
      // Check if this is a game completion message
      if (event.data && event.data.type === "GAME_COMPLETE") {
        const { unitId, gameId, gameData } = event.data;
        console.log("🎯 Game completion processed from message:", {
          unitId,
          gameId,
          gameData,
        });

        updateGameProgress(unitId, gameId, gameData);
      }
    };

    // Listen for messages from child games
    window.addEventListener("message", handleGameCompletion);

    // Also check for completion data in location state (when navigating back)
    if (location.state?.gameCompletion) {
      const { unitId, gameId, gameData } = location.state;
      console.log("🔄 Game completion from navigation state:", {
        unitId,
        gameId,
        gameData,
      });
      updateGameProgress(unitId, gameId, gameData);

      // Clear the state to avoid processing again
      navigate(location.pathname, { replace: true, state: {} });
    }

    return () => window.removeEventListener("message", handleGameCompletion);
  }, [location.state, navigate, updateGameProgress]);

  // 🎯 Initialize progress system - RUNS ONLY ONCE
  useEffect(() => {
    const initializeProgress = async () => {
      if (isInitializedRef.current) return;
      isInitializedRef.current = true;

      console.log("🚀 Initializing progress system...");

      if (!userData?.uid) {
        console.log("👤 No user ID, using default progress");
        const initialProgress = getInitialProgressData();
        setProgressData(initialProgress);
        setUnlockedUnits([0]);
        setUserScore(0);
        setIsLoading(false);

        // Update refs
        progressDataRef.current = initialProgress;
        return;
      }

      setIsLoading(true);

      try {
        console.log("🔄 Checking for existing progress in Firebase...");

        // Try to load existing progress from Firebase
        const progressRef = doc(db, "users", userData.uid, "progress", "main");
        const progressSnap = await getDoc(progressRef);

        if (progressSnap.exists()) {
          const progressData = progressSnap.data();
          console.log("✅ Found existing progress:", progressData);

          setProgressData(
            progressData.progressData || getInitialProgressData()
          );
          setUnlockedUnits(progressData.unlockedUnits || [0]);

          // Update refs
          progressDataRef.current =
            progressData.progressData || getInitialProgressData();

          // Load user score
          const scoresRef = doc(db, "users", userData.uid, "scores", "overall");
          const scoresSnap = await getDoc(scoresRef);
          if (scoresSnap.exists()) {
            const scoresData = scoresSnap.data();
            setUserScore(scoresData.totalScore || 0);
          }

          // Load individual game scores
          const gameScoresData = await loadIndividualGameScores();
          setGameScores(gameScoresData);
          gameScoresRef.current = gameScoresData;

          // Load lesson completions
          const lessonCompletionsData = await loadLessonCompletions();
          setLessonCompletions(lessonCompletionsData);
          lessonCompletionsRef.current = lessonCompletionsData;
        } else {
          console.log("📝 No existing progress, creating new...");
          // No existing progress, create new
          await recalculateAllProgress();
        }
      } catch (error) {
        console.error("❌ Error initializing progress:", error);
        // Fallback to initial progress
        const initialProgress = getInitialProgressData();
        setProgressData(initialProgress);
        setUnlockedUnits([0]);
        setUserScore(0);

        // Update refs
        progressDataRef.current = initialProgress;
      }

      setIsLoading(false);
    };

    initializeProgress();
  }, [
    userData?.uid,
    getInitialProgressData,
    recalculateAllProgress,
    loadIndividualGameScores,
    loadLessonCompletions,
  ]);

  // 🎯 Save to Firebase when data changes
  useEffect(() => {
    if (isLoading || !userData?.uid || progressData.length === 0) return;

    // Only schedule save if data actually changed
    const shouldSave =
      JSON.stringify(progressData) !==
        JSON.stringify(progressDataRef.current) ||
      JSON.stringify(gameScores) !== JSON.stringify(gameScoresRef.current) ||
      JSON.stringify(lessonCompletions) !==
        JSON.stringify(lessonCompletionsRef.current);

    if (shouldSave) {
      console.log("🔄 Data changed, scheduling save to Firebase...");

      // Update refs first
      progressDataRef.current = progressData;
      gameScoresRef.current = gameScores;
      lessonCompletionsRef.current = lessonCompletions;

      // Use debounced scheduler to reduce writes
      scheduleSave();
    }
  }, [
    progressData,
    userScore,
    unlockedUnits,
    gameScores,
    lessonCompletions,
    userData?.uid,
    isLoading,
    scheduleSave,
  ]);

  // Flush any pending save on unmount or when user changes
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = null;
        // best-effort synchronous save (fire-and-forget)
        saveProgressToFirebase().catch((err) =>
          console.error("❌ Flush save failed on unmount:", err)
        );
      }
    };
  }, [saveProgressToFirebase]);

  // 🎯 REAL-TIME Firestore listeners for game scores
  useEffect(() => {
    if (!userData?.uid) return;

    console.log(
      "👂 Setting up real-time game scores listener for user:",
      userData.uid
    );

    const scoresCollection = collection(db, "users", userData.uid, "scores");

    const unsubscribe = onSnapshot(
      scoresCollection,
      (snapshot) => {
        const updatedScores = {};

        snapshot.forEach((doc) => {
          const data = doc.data();
          updatedScores[data.gameId] = {
            score: data.score || 0,
            completed: data.completed || false,
            lastPlayed: data.lastPlayed,
            unitId: data.unitId,
            points: data.points || 0,
          };
        });

        console.log("🔄 Real-time game scores update:", updatedScores);

        // Only update if scores actually changed
        if (
          JSON.stringify(updatedScores) !==
          JSON.stringify(gameScoresRef.current)
        ) {
          setGameScores(updatedScores);
          gameScoresRef.current = updatedScores;

          // Recalculate progress with new scores
          recalculateAllProgress().catch(console.error);
        }
      },
      (err) => {
        console.error("❌ Game scores snapshot error:", err);
      }
    );

    return () => {
      console.log("🧹 Cleaning up game scores listener");
      unsubscribe();
    };
  }, [userData?.uid, recalculateAllProgress]);

  // 🎯 REAL-TIME Firestore listeners for lesson completions
  useEffect(() => {
    if (!userData?.uid) return;

    console.log(
      "👂 Setting up real-time lesson completions listener for user:",
      userData.uid
    );

    const lessonsCollection = collection(db, "users", userData.uid, "lessons");

    const unsubscribe = onSnapshot(
      lessonsCollection,
      (snapshot) => {
        const updatedCompletions = {};

        snapshot.forEach((doc) => {
          const data = doc.data();
          updatedCompletions[data.lessonId] = {
            completed: data.completed || false,
            lastUpdated: data.lastUpdated,
            unitId: data.unitId,
          };
        });

        console.log(
          "🔄 Real-time lesson completions update:",
          updatedCompletions
        );

        // Only update if completions actually changed
        if (
          JSON.stringify(updatedCompletions) !==
          JSON.stringify(lessonCompletionsRef.current)
        ) {
          setLessonCompletions(updatedCompletions);
          lessonCompletionsRef.current = updatedCompletions;

          // Recalculate progress with new completions
          recalculateAllProgress().catch(console.error);
        }
      },
      (err) => {
        console.error("❌ Lesson completions snapshot error:", err);
      }
    );

    return () => {
      console.log("🧹 Cleaning up lesson completions listener");
      unsubscribe();
    };
  }, [userData?.uid, recalculateAllProgress]);

  // 🎯 Handle navigation
  const handleOpen = useCallback(
    (path, unitId = null, gameId = null, lessonId = null) => {
      if (!path) {
        alert("المسار غير متاح حالياً.");
        return;
      }

      if (unitId !== null && !unlockedUnits.includes(unitId)) {
        alert("يجب إكمال الوحدة السابقة أولاً!");
        return;
      }

      const gameState = {
        userData: userData,
        darkMode: darkMode,
        unitId: unitId,
        gameId: gameId,
        lessonId: lessonId,
      };

      console.log("🎯 Navigating to:", path, "with state:", gameState);
      navigate(`/${path}`, { state: gameState });
    },
    [unlockedUnits, userData, darkMode, navigate]
  );

  // 🎯 Debug function to reset progress
  const resetProgress = async () => {
    if (!userData?.uid) return;

    if (
      window.confirm(
        "هل أنت متأكد من إعادة تعيين التقدم؟ سيتم حذف جميع بياناتك."
      )
    ) {
      try {
        // Use service helper to reset user progress in Firestore
        await resetUserProgress(userData.uid);

        // Reset local state
        const initialProgress = getInitialProgressData();
        setProgressData(initialProgress);
        setUnlockedUnits([0]);
        setUserScore(0);
        setGameScores({});
        setLessonCompletions({});

        // Update refs
        progressDataRef.current = initialProgress;
        gameScoresRef.current = {};
        lessonCompletionsRef.current = {};

        alert("تم إعادة تعيين التقدم بنجاح!");
      } catch (error) {
        console.error("Error resetting progress:", error);
        alert("حدث خطأ أثناء إعادة التعيين");
      }
    }
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-green-50"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-green-500">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen font-[Tajawal] ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      } flex flex-col items-center justify-start py-4 sm:py-6 px-3 sm:px-6`}
      dir="rtl"
    >
      {/* Navbar */}
      <div
        className={`w-full max-w-7xl flex justify-between items-center p-3 sm:p-4 mb-4 sm:mb-6 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800/70" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            startIcon={<ArrowBack />}
            size={isMobile ? "small" : "medium"}
            className="bg-white text-green-600 hover:bg-green-100"
          >
            {isMobile ? "" : "العودة"}
          </Button>
          <h1
            className={`font-bold text-green-400 ${
              isMobile ? "text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            {isMobile
              ? "بليرن - الحاسوب"
              : "منصة بليرن التعليمية - قسم الحاسوب"}
          </h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span
            className={`font-semibold ${isMobile ? "text-sm" : "text-base"}`}
          >
            {isMobile ? name.split(" ")[0] : name}
          </span>
          <Avatar
            src={photo}
            alt={name}
            sx={{
              width: isMobile ? 32 : 40,
              height: isMobile ? 32 : 40,
            }}
          />
        </div>
      </div>

      {/* Greeting */}
      <div
        className={`w-full max-w-7xl rounded-3xl shadow-2xl p-6 sm:p-8 text-center mb-4 sm:mb-6 transition-all duration-700 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 via-gray-800 to-green-900/40 border border-green-500/40"
            : "bg-gradient-to-br from-white to-green-50 border border-green-400/40"
        }`}
      >
        <h1
          className={`font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn ${
            isMobile ? "text-2xl" : "text-3xl"
          }`}
        >
          مرحباً {name.split(" ")[0]}! 👋
        </h1>
        <p className={`mt-2 opacity-80 ${isMobile ? "text-base" : "text-lg"}`}>
          أهلاً بك في قسم الحاسوب التفاعلي — استعد لخوض تجربة تعليمية ممتعة!
        </p>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          <div
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
              darkMode ? "bg-green-500/20" : "bg-green-100"
            } text-green-600 font-semibold ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            التقدم الكلي: {getTotalProgress()}%
          </div>
          <div
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
              darkMode ? "bg-blue-500/20" : "bg-blue-100"
            } text-blue-600 font-semibold ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            النقاط: {userScore}
          </div>
          <div
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
              darkMode ? "bg-purple-500/20" : "bg-purple-100"
            } text-purple-600 font-semibold ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            الألعاب المكتملة:{" "}
            {progressData.reduce(
              (count, unit) => count + (unit.completedGames || 0),
              0
            )}
          </div>
          <div
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
              darkMode ? "bg-amber-500/20" : "bg-amber-100"
            } text-amber-600 font-semibold ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            الدروس المكتملة:{" "}
            {progressData.reduce(
              (count, unit) => count + (unit.completedLessons || 0),
              0
            )}
          </div>
        </div>
      </div>

      {/* Debug Info */}
      <div className="w-full max-w-7xl mb-4">
        <details
          className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          <summary>معلومات التصحيح (Debug)</summary>
          <div className="mt-2 p-2 bg-black/20 rounded">
            <p>الوحدات المفتوحة: {unlockedUnits.join(", ")}</p>
            <p>إجمالي النقاط: {userScore}</p>
            <p>
              عدد الألعاب المكتملة:{" "}
              {
                Object.values(gameScores).filter((score) => score.completed)
                  .length
              }
            </p>
            <p>
              عدد الدروس المكتملة:{" "}
              {
                Object.values(lessonCompletions).filter(
                  (lesson) => lesson.completed
                ).length
              }
            </p>
            <p>معرف المستخدم: {userData?.uid || "غير متوفر"}</p>
          </div>
        </details>
      </div>

      {/* Main content - UPDATED LAYOUT */}
      <div
        className={`w-full max-w-7xl flex flex-col lg:flex-row gap-4 sm:gap-6 ${
          isDesktop ? "flex-row" : "flex-col"
        }`}
      >
        {/* Left: Progress & Leaderboard - UPDATED SIZES */}
        <div
          className={`space-y-4 sm:space-y-6 ${isDesktop ? "w-1/3" : "w-full"}`}
        >
          {/* Progress - ENLARGED */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
              darkMode ? "bg-gray-800/60" : "bg-white"
            }`}
          >
            <h3
              className={`font-bold mb-4 flex items-center ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              <Gamepad className="ml-2 text-teal-500" /> تقدمي الدراسي
            </h3>
            {progressData.map((unit) => (
              <div className="mb-6 group" key={unit.id}>
                <div
                  className={`flex justify-between mb-2 font-semibold ${
                    isMobile ? "text-base" : "text-lg"
                  }`}
                >
                  <div className="flex items-center">
                    {unit.completed ? (
                      <CheckCircle
                        className="text-green-500 mr-2"
                        fontSize={isMobile ? "medium" : "large"}
                      />
                    ) : isUnitUnlocked(unit.id) ? (
                      <LockOpen
                        className="text-blue-500 mr-2"
                        fontSize={isMobile ? "medium" : "large"}
                      />
                    ) : (
                      <Lock
                        className="text-gray-500 mr-2"
                        fontSize={isMobile ? "medium" : "large"}
                      />
                    )}
                    <span className={isMobile ? "text-sm" : "text-base"}>
                      {isMobile ? `الوحدة ${unit.id + 1}` : unit.label}
                    </span>
                  </div>
                  <span className={isMobile ? "text-base" : "text-lg"}>
                    {unit.percentage}%
                  </span>
                </div>
                {/* ENLARGED Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 sm:h-6 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${
                      {
                        teal: "from-teal-400 to-cyan-500",
                        pink: "from-pink-500 to-rose-500",
                        amber: "from-amber-400 to-orange-500",
                        sky: "from-sky-400 to-blue-500",
                      }[unit.color]
                    } rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`}
                    style={{ width: `${unit.percentage}%` }}
                  >
                    {unit.percentage >= 100 && (
                      <CheckCircle fontSize="small" className="text-white" />
                    )}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>
                    {unit.completedGames || 0} / {unit.totalGames} ألعاب -
                    {unit.completedLessons || 0} / {unit.totalLessons} دروس
                  </span>
                  <span>
                    {unit.totalScore || 0} / {unit.maxPossibleScore || 0} نقطة
                  </span>
                </div>
                {!isUnitUnlocked(unit.id) && unit.id > 0 && (
                  <p
                    className={`text-gray-500 mt-2 ${
                      isMobile ? "text-xs" : "text-sm"
                    }`}
                  >
                    تحتاج إكمال الوحدة {unit.id} أولاً
                  </p>
                )}
              </div>
            ))}

            {/* Reset Button moved to end of progress section */}
            <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
              <Button
                onClick={resetProgress}
                variant="outlined"
                color="warning"
                startIcon={<Refresh />}
                fullWidth
                size={isMobile ? "medium" : "large"}
              >
                إعادة تعيين التقدم
              </Button>
            </div>
          </div>

          {/* Leaderboard - ENLARGED and UPDATED */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
              darkMode ? "bg-gray-800/60" : "bg-white"
            }`}
          >
            <Leaderboard
              darkMode={darkMode}
              userId={userData?.uid}
              userScore={userScore}
              isMobile={isMobile}
            />
          </div>
        </div>

        {/* Right: Units, Lessons & Games - UPDATED LAYOUT */}
        <div
          className={`space-y-4 sm:space-y-6 ${isDesktop ? "w-2/3" : "w-full"}`}
        >
          {/* Units Section */}
          {progressData.map((unit) => {
            const unitDef = units.find((u) => u.id === unit.id) || {};
            return (
              <div key={unit.id} className="space-y-4">
                {/* Unit Header */}
                <div
                  className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
                    darkMode ? "bg-gray-800/60" : "bg-white"
                  } ${!isUnitUnlocked(unit.id) ? "opacity-60" : ""}`}
                >
                  <div
                    className={`flex items-center justify-between mb-4 sm:mb-6 ${
                      isMobile ? "flex-col gap-2 items-start" : ""
                    }`}
                  >
                    <h2
                      className={`font-bold text-green-400 ${
                        isMobile ? "text-xl" : "text-2xl"
                      }`}
                    >
                      {unit.label}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {!isUnitUnlocked(unit.id) && (
                        <Lock className="text-red-500" />
                      )}
                      <span
                        className={`px-3 py-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 ${
                          isMobile ? "text-sm" : "text-base"
                        }`}
                      >
                        {unit.percentage}% مكتمل
                      </span>
                    </div>
                  </div>

                  {/* Lessons for this unit */}
                  {getLessonsByUnit(unit.id).length > 0 && (
                    <div className="mb-6 sm:mb-8">
                      <h3
                        className={`font-bold mb-4 sm:mb-6 text-green-400 text-center ${
                          isMobile ? "text-xl" : "text-2xl"
                        }`}
                      >
                        🧩 الدروس التفاعلية (
                        {Math.round(
                          (units.find((u) => u.id === unit.id)?.lessonWeight ||
                            0.4) * 100
                        )}{" "}
                        نقطة)
                      </h3>
                      <div
                        className={`grid gap-4 sm:gap-6 ${getGridClasses(
                          getLessonsByUnit(unit.id).length
                        )}`}
                      >
                        {getLessonsByUnit(unit.id).map(
                          (lesson, lessonIndex) => {
                            const isCompleted = isLessonCompleted(lesson.id);
                            const isUnlocked = isUnitUnlocked(unit.id);

                            return (
                              <div
                                key={lessonIndex}
                                className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group ${
                                  !isUnlocked
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                                onClick={() => {
                                  if (isUnlocked) {
                                    markLessonCompleted(lesson.id, unit.id);
                                    handleOpen(
                                      `lesson-${unit.id}-${lessonIndex}`,
                                      unit.id,
                                      null,
                                      lesson.id
                                    );
                                  }
                                }}
                              >
                                {/* Animated Background Gradient */}
                                <div
                                  className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${lesson.gradient}`}
                                ></div>

                                {/* Completion Checkmark */}
                                {isCompleted && (
                                  <div className="absolute top-2 right-2 z-20">
                                    <CheckCircle className="text-green-500 text-2xl bg-white rounded-full" />
                                  </div>
                                )}

                                {/* Lock Overlay */}
                                {!isUnlocked && (
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                                    <Lock className="text-white text-2xl sm:text-4xl" />
                                  </div>
                                )}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center min-h-[120px] sm:min-h-[140px]">
                                  <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 transition-transform duration-500 group-hover:animate-bounce">
                                    {lesson.emoji}
                                  </span>
                                  <span
                                    className={`font-bold ${
                                      isMobile ? "text-base" : "text-lg"
                                    }`}
                                  >
                                    {lesson.title}
                                  </span>
                                  <p
                                    className={`mt-2 opacity-75 ${
                                      isMobile ? "text-xs" : "text-sm"
                                    }`}
                                  >
                                    {lesson.description}
                                  </p>
                                  <div className="mt-2 text-xs text-gray-600 bg-white/70 px-2 py-1 rounded-full">
                                    {isCompleted ? "مكتمل" : "انقر لبدء الدرس"}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {/* Games for this unit */}
                  {getGamesByUnit(unit.id).length > 0 && (
                    <div>
                      <h3
                        className={`font-bold mb-4 sm:mb-6 text-purple-400 text-center ${
                          isMobile ? "text-xl" : "text-2xl"
                        }`}
                      >
                        🎮 الألعاب التعليمية (
                        {Math.round(
                          (units.find((u) => u.id === unit.id)?.gameWeight ||
                            0.6) * 100
                        )}{" "}
                        نقطة)
                      </h3>
                      <div
                        className={`grid gap-4 sm:gap-6 ${getGridClasses(
                          getGamesByUnit(unit.id).length
                        )}`}
                      >
                        {getGamesByUnit(unit.id).map((game, gameIndex) => {
                          const isUnlocked = isUnitUnlocked(unit.id);
                          const gameScore = getGameScore(game.gameId);
                          const isCompleted = isGameCompleted(game.gameId);

                          return (
                            <div
                              key={gameIndex}
                              className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 cursor-pointer group ${
                                isUnlocked
                                  ? "hover:scale-[1.05] hover:shadow-2xl"
                                  : "opacity-60 cursor-not-allowed"
                              }`}
                              onClick={() =>
                                isUnlocked &&
                                handleOpen(game.path, unit.id, game.gameId)
                              }
                            >
                              {/* Enhanced Hover Effect - From Both Sides */}
                              <div
                                className={`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${game.gradientLeft}`}
                              ></div>
                              <div
                                className={`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${game.gradientRight}`}
                              ></div>

                              {/* Lock Overlay */}
                              {!isUnlocked && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                                  <Lock className="text-white text-2xl sm:text-4xl" />
                                </div>
                              )}

                              {/* Completion Checkmark */}
                              {isCompleted && (
                                <div className="absolute top-2 right-2 z-20">
                                  <CheckCircle className="text-green-500 text-2xl bg-white rounded-full" />
                                </div>
                              )}

                              {/* Content */}
                              <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-black min-h-[160px] sm:min-h-[200px]">
                                <span
                                  className={`mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                                    isMobile ? "text-2xl" : "text-4xl"
                                  }`}
                                >
                                  {game.icon}
                                </span>
                                <h4
                                  className={`font-bold mb-2 drop-shadow ${
                                    isMobile ? "text-base" : "text-lg"
                                  }`}
                                >
                                  {game.title}
                                </h4>
                                <p
                                  className={`mb-3 opacity-90 drop-shadow ${
                                    isMobile ? "text-xs" : "text-sm"
                                  }`}
                                >
                                  {game.description}
                                </p>
                                <div className="flex justify-between w-full text-xs mt-auto">
                                  <span className="px-2 py-1 rounded-full bg-white/70 backdrop-blur-sm text-black">
                                    {game.level}
                                  </span>
                                  <span className="px-2 py-1 rounded-full bg-yellow-500/70 backdrop-blur-sm text-black">
                                    {gameScore}/
                                    {game.maxPoints || game.points || 100} نقطة
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Announcements removed - simplified layout */}

          {/* User Stats Card */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-blue-900/20"
                : "bg-gradient-to-br from-white to-blue-50"
            } border-2 ${darkMode ? "border-blue-500/30" : "border-blue-200"}`}
          >
            <h3
              className={`font-bold mb-4 flex items-center ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              <MilitaryTech className="mr-2 text-blue-400" />
              إحصائياتي
            </h3>
            <div className={`grid gap-3 sm:gap-4 ${getGridClasses("stats")}`}>
              <div
                className={`text-center p-3 sm:p-4 rounded-xl ${
                  darkMode ? "bg-blue-500/20" : "bg-blue-100"
                }`}
              >
                <div
                  className={`font-bold text-blue-400 ${
                    isMobile ? "text-xl" : "text-2xl"
                  }`}
                >
                  {getTotalProgress()}%
                </div>
                <div className={isMobile ? "text-xs" : "text-sm"}>
                  التقدم الكلي
                </div>
              </div>
              <div
                className={`text-center p-3 sm:p-4 rounded-xl ${
                  darkMode ? "bg-green-500/20" : "bg-green-100"
                }`}
              >
                <div
                  className={`font-bold text-green-400 ${
                    isMobile ? "text-xl" : "text-2xl"
                  }`}
                >
                  {userScore}
                </div>
                <div className={isMobile ? "text-xs" : "text-sm"}>
                  النقاط الكلية
                </div>
              </div>
              <div
                className={`text-center p-3 sm:p-4 rounded-xl ${
                  darkMode ? "bg-purple-500/20" : "bg-purple-100"
                }`}
              >
                <div
                  className={`font-bold text-purple-400 ${
                    isMobile ? "text-xl" : "text-2xl"
                  }`}
                >
                  {progressData.filter((unit) => unit.completed).length}
                </div>
                <div className={isMobile ? "text-xs" : "text-sm"}>
                  الوحدات المكتملة
                </div>
              </div>
              <div
                className={`text-center p-3 sm:p-4 rounded-xl ${
                  darkMode ? "bg-amber-500/20" : "bg-amber-100"
                }`}
              >
                <div
                  className={`font-bold text-amber-400 ${
                    isMobile ? "text-xl" : "text-2xl"
                  }`}
                >
                  {progressData.reduce(
                    (count, unit) => count + (unit.completedGames || 0),
                    0
                  )}
                </div>
                <div className={isMobile ? "text-xs" : "text-sm"}>
                  الألعاب المكتملة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`w-full mt-8 sm:mt-12 p-4 sm:p-6 text-center rounded-t-3xl shadow-inner ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-green-100 text-gray-700"
        }`}
      >
        <p className={isMobile ? "text-sm" : "text-base"}>
          © 2025 منصة بليرن التعليمية. جميع الحقوق محفوظة.
        </p>
      </footer>

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.7s ease forwards; }

          @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          .animate-bounce { animation: bounce 0.6s infinite; }
        `}
      </style>
    </div>
  );
}
