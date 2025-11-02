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
import Leaderboard from "./../LeaderboardComp/LeaderBoard";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  collection,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "./../../../FireBaseDatabase/firebase";

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

  // 🎯 Memoized data definitions
  const { lessonsData, announcementsData, gamesData } = useMemo(
    () => ({
      lessonsData: [
        {
          id: "intro-programming",
          title: "مدخل إلى البرمجة",
          unit: 0,
          description: "تعرف على أساسيات البرمجة والمفاهيم الأساسية",
          emoji: "💻",
          gradient: "from-green-200 to-green-400",
        },
        {
          id: "computer-components",
          title: "المكونات المادية للحاسوب",
          unit: 0,
          description: "اكتشف مكونات الحاسوب ووظائفها",
          emoji: "🖥️",
          gradient: "from-blue-200 to-blue-400",
        },
        {
          id: "algorithms-flowcharts",
          title: "الخوارزميات والمخططات الانسيابية",
          unit: 1,
          description: "تعلم تصميم الخوارزميات والمخططات",
          emoji: "📊",
          gradient: "from-purple-200 to-purple-400",
        },
        {
          id: "javascript-basics",
          title: "برمجة بلغة جافا سكربت",
          unit: 2,
          description: "ابدأ رحلتك مع لغة جافا سكربت",
          emoji: "📝",
          gradient: "from-yellow-200 to-yellow-400",
        },
        {
          id: "data-handling",
          title: "التعامل مع البيانات",
          unit: 3,
          description: "إدارة وتخزين البيانات في البرامج",
          emoji: "📂",
          gradient: "from-red-200 to-red-400",
        },
      ],
      announcementsData: [
        {
          title: "مسابقة أفضل مشروع بلغة سكراتش!",
          subtitle: "آخر موعد 1 نوفمبر.",
          color: "amber",
          icon: "🏆",
        },
        {
          title: "ورشة عمل: حل المشكلات بالخوارزميات",
          subtitle: "يوم الثلاثاء القادم.",
          color: "teal",
          icon: "🔧",
        },
        {
          title: "تصفيات بطولة البرمجة السريعة",
          subtitle: "ابدأ التدرب الآن!",
          color: "blue",
          icon: "⚡",
        },
      ],
      gamesData: [
        {
          path: "dragDrop",
          title: "لعبة المخطط الانسيابي",
          unit: 0,
          gameId: "dragDrop",
          description: "اختبر ذاكرتك مع مصطلحات البرمجة",
          level: "سهل",
          levelColor: "green",
          icon: <BugReport />,
          points: 100,
          gradientLeft: "from-green-400 to-teal-600",
          gradientRight: "from-teal-600 to-green-400",
        },
        {
          path: "hangman",
          title: "لعبة الرجل المشنوق",
          unit: 0,
          gameId: "hangman",
          description: "احزر كلمات البرمجة قبل فوات الأوان",
          level: "متوسط",
          levelColor: "yellow",
          icon: <BugReport />,
          points: 100,
          gradientLeft: "from-yellow-400 to-amber-600",
          gradientRight: "from-amber-600 to-yellow-400",
        },
        {
          path: "flowchartgame",
          title: "مغامرة الخوارزميات",
          unit: 1,
          gameId: "flowchartgame",
          description: "ارسم المسار الصحيح للخوارزمية",
          level: "متوسط",
          levelColor: "yellow",
          icon: <SportsEsports />,
          points: 100,
          gradientLeft: "from-purple-400 to-pink-600",
          gradientRight: "from-pink-600 to-purple-400",
        },
        {
          path: "algorithm-shapes-game",
          title: "لعبة أشكال الخوارزميات",
          unit: 1,
          gameId: "algorithm-shapes",
          description: "رتب أشكال الخوارزميات في التسلسل الصحيح",
          level: "متوسط",
          levelColor: "yellow",
          icon: <Code />,
          points: 100,
          gradientLeft: "from-indigo-400 to-purple-600",
          gradientRight: "from-purple-600 to-indigo-400",
        },
        {
          path: "compiler-game",
          title: "رحلة المترجم",
          unit: 2,
          gameId: "compiler-journey",
          description: "افهم كيفية عمل المترجم البرمجي",
          level: "صعب",
          levelColor: "red",
          icon: <Code />,
          points: 100,
          gradientLeft: "from-red-400 to-rose-600",
          gradientRight: "from-rose-600 to-red-400",
        },
        {
          path: "scratch-lab",
          title: "مختبر سكراتش",
          unit: 3,
          gameId: "scratch-lab",
          description: "ابن مشاريعك الأولى بلغة سكراتش",
          level: "سهل",
          levelColor: "green",
          icon: <School />,
          points: 100,
          gradientLeft: "from-blue-400 to-cyan-600",
          gradientRight: "from-cyan-600 to-blue-400",
        },
      ],
    }),
    []
  );

  // 🎯 Initialize progress data structure
  const getInitialProgressData = useCallback(() => {
    return [
      {
        id: 0,
        label: "الوحدة الأولى: أساسيات البرمجة",
        percentage: 0,
        color: "teal",
        completed: false,
        requiredScore: 0,
        totalScore: 0,
        completedGames: 0,
        completedLessons: 0,
        totalGames: 2, // dragDrop + hangman
        totalLessons: 2, // intro-programming + computer-components
        maxPossibleScore: 100,
        gameScore: 0,
        lessonScore: 0,
      },
      {
        id: 1,
        label: "الوحدة الثانية: مدخل للغات البرمجة",
        percentage: 0,
        color: "pink",
        completed: false,
        requiredScore: 30,
        totalScore: 0,
        completedGames: 0,
        completedLessons: 0,
        totalGames: 2, // flowchartgame + algorithm-shapes
        totalLessons: 1, // algorithms-flowcharts
        maxPossibleScore: 100,
        gameScore: 0,
        lessonScore: 0,
      },
      {
        id: 2,
        label: "الوحدة الثالثة: الخوارزميات والمخططات",
        percentage: 0,
        color: "amber",
        completed: false,
        requiredScore: 60,
        totalScore: 0,
        completedGames: 0,
        completedLessons: 0,
        totalGames: 1, // compiler-journey
        totalLessons: 1, // javascript-basics
        maxPossibleScore: 100,
        gameScore: 0,
        lessonScore: 0,
      },
      {
        id: 3,
        label: "الوحدة الرابعة: مبادئ البرمجة بلغة سكراتش",
        percentage: 0,
        color: "sky",
        completed: false,
        requiredScore: 90,
        totalScore: 0,
        completedGames: 0,
        completedLessons: 0,
        totalGames: 1, // scratch-lab
        totalLessons: 1, // data-handling
        maxPossibleScore: 100,
        gameScore: 0,
        lessonScore: 0,
      },
    ];
  }, []);

  // 🎯 Get games by unit
  const getGamesByUnit = useCallback(
    (unitId) => {
      return gamesData.filter((game) => game.unit === unitId);
    },
    [gamesData]
  );

  // 🎯 Get lessons by unit
  const getLessonsByUnit = useCallback(
    (unitId) => {
      return lessonsData.filter((lesson) => lesson.unit === unitId);
    },
    [lessonsData]
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
  const getGridClasses = useCallback(
    (type) => {
      switch (type) {
        case "lessons":
          return isMobile
            ? "grid-cols-1"
            : isTablet
            ? "grid-cols-2"
            : "grid-cols-3";
        case "games":
          return isMobile
            ? "grid-cols-1"
            : isTablet
            ? "grid-cols-2"
            : "grid-cols-3";
        case "stats":
          return isMobile ? "grid-cols-2" : "grid-cols-4";
        default:
          return "grid-cols-1";
      }
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
      const scoresCollection = collection(db, "users", userData.uid, "scores");
      const scoresSnapshot = await getDocs(scoresCollection);
      const scores = {};

      scoresSnapshot.forEach((doc) => {
        const data = doc.data();
        scores[data.gameId] = {
          score: data.score || 0,
          completed: data.completed || false,
          lastPlayed: data.lastPlayed,
          unitId: data.unitId,
          points: data.points || 0,
        };
      });

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
      const lessonsCollection = collection(
        db,
        "users",
        userData.uid,
        "lessons"
      );
      const lessonsSnapshot = await getDocs(lessonsCollection);
      const completions = {};

      lessonsSnapshot.forEach((doc) => {
        const data = doc.data();
        completions[data.lessonId] = {
          completed: data.completed || false,
          lastUpdated: data.lastUpdated,
          unitId: data.unitId,
        };
      });

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
      const unitGames = getGamesByUnit(unit.id);
      const unitLessons = getLessonsByUnit(unit.id);

      // Calculate game points (60% of unit)
      let totalGameScore = 0;
      let maxPossibleGameScore = 0;
      let completedGames = 0;

      unitGames.forEach((game) => {
        const gameScore = gameScores[game.gameId]?.score || 0;
        const gameMaxScore = game.points || 100;

        totalGameScore += Math.min(gameScore, gameMaxScore);
        maxPossibleGameScore += gameMaxScore;

        if (gameScores[game.gameId]?.completed) {
          completedGames++;
        }
      });

      // Calculate lesson points (40% of unit)
      let totalLessonScore = 0;
      const maxPossibleLessonScore = 40; // Fixed 40 points for lessons
      let completedLessons = 0;

      unitLessons.forEach((lesson) => {
        if (lessonCompletions[lesson.id]?.completed) {
          completedLessons++;
          totalLessonScore += maxPossibleLessonScore / unitLessons.length; // Distribute 40 points evenly among lessons
        }
      });

      // Combine scores: Games (scaled to 60 points) + Lessons (40 points)
      const gameContribution =
        maxPossibleGameScore > 0
          ? (totalGameScore / maxPossibleGameScore) * 60
          : 0;

      const totalScore = gameContribution + totalLessonScore;
      const percentage = Math.min(100, Math.round(totalScore));

      const completed = percentage >= 100;

      return {
        totalScore: Math.round(totalScore),
        percentage,
        completed,
        completedGames,
        completedLessons,
        maxPossibleScore: 100, // Total unit is now 100 points (40 lessons + 60 games)
        gameScore: Math.round(gameContribution),
        lessonScore: Math.round(totalLessonScore),
      };
    },
    [getGamesByUnit, getLessonsByUnit]
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
      const userRef = doc(db, "users", userData.uid);
      const progressRef = doc(db, "users", userData.uid, "progress", "main");
      const scoresRef = doc(db, "users", userData.uid, "scores", "overall");
      const leaderboardRef = doc(db, "leaderboard", userData.uid);

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

      console.log("💾 Saving to Firebase:", {
        totalScore: userScore,
        totalProgress,
        completedGames,
        completedLessons,
        completedUnits,
        unlockedUnits,
      });

      // Use batch write for atomic operations
      const batch = writeBatch(db);

      // Update user profile with scores
      batch.set(
        userRef,
        {
          email: userData.email,
          name: userData.fullName || userData.name,
          photoURL: userData.photoURL,
          totalScore: userScore,
          totalProgress: totalProgress,
          completedGames: completedGames,
          completedLessons: completedLessons,
          completedUnits: completedUnits,
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );

      // Update progress data
      batch.set(
        progressRef,
        {
          progressData: progressDataRef.current,
          unlockedUnits: unlockedUnits,
          totalProgress: totalProgress,
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );

      // Update overall scores
      batch.set(
        scoresRef,
        {
          totalScore: userScore,
          completedGames: completedGames,
          completedLessons: completedLessons,
          completedUnits: completedUnits,
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );

      // Update public leaderboard entry
      batch.set(
        leaderboardRef,
        {
          userId: userData.uid,
          name: userData.fullName || userData.name,
          photoURL: userData.photoURL,
          totalScore: userScore,
          completedGames: completedGames,
          completedLessons: completedLessons,
          completedUnits: completedUnits,
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );

      await batch.commit();
      console.log("✅ All progress saved to Firestore successfully");
    } catch (error) {
      console.error("❌ Error saving to Firestore:", error);
    }
  }, [userData, userScore, unlockedUnits, getTotalProgress]);

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
        const lessonRef = doc(db, "users", userData.uid, "lessons", lessonId);
        await setDoc(
          lessonRef,
          {
            lessonId,
            unitId,
            completed: true,
            lastUpdated: serverTimestamp(),
          },
          { merge: true }
        );

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
        // Write individual score doc to Firestore
        if (userData?.uid) {
          const scoreRef = doc(db, "users", userData.uid, "scores", gameId);
          await setDoc(
            scoreRef,
            {
              gameId,
              unitId,
              score,
              points: score,
              completed: completed || false,
              lastPlayed: serverTimestamp(),
            },
            { merge: true }
          );
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

    // Only save if data actually changed
    const shouldSave =
      JSON.stringify(progressData) !==
        JSON.stringify(progressDataRef.current) ||
      JSON.stringify(gameScores) !== JSON.stringify(gameScoresRef.current) ||
      JSON.stringify(lessonCompletions) !==
        JSON.stringify(lessonCompletionsRef.current);

    if (shouldSave) {
      console.log("🔄 Data changed, saving to Firebase...");

      // Update refs first
      progressDataRef.current = progressData;
      gameScoresRef.current = gameScores;
      lessonCompletionsRef.current = lessonCompletions;

      saveProgressToFirebase();
    }
  }, [
    progressData,
    userScore,
    unlockedUnits,
    gameScores,
    lessonCompletions,
    userData?.uid,
    isLoading,
    saveProgressToFirebase,
  ]);

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
        // Delete all scores
        const scoresCollection = collection(
          db,
          "users",
          userData.uid,
          "scores"
        );
        const scoresSnapshot = await getDocs(scoresCollection);

        const deleteScorePromises = scoresSnapshot.docs.map((doc) =>
          setDoc(
            doc.ref,
            {
              score: 0,
              completed: false,
              lastPlayed: serverTimestamp(),
            },
            { merge: true }
          )
        );

        // Delete all lesson completions
        const lessonsCollection = collection(
          db,
          "users",
          userData.uid,
          "lessons"
        );
        const lessonsSnapshot = await getDocs(lessonsCollection);

        const deleteLessonPromises = lessonsSnapshot.docs.map((doc) =>
          setDoc(
            doc.ref,
            {
              completed: false,
              lastUpdated: serverTimestamp(),
            },
            { merge: true }
          )
        );

        await Promise.all([...deleteScorePromises, ...deleteLessonPromises]);

        // Reset progress
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
          {progressData.map((unit) => (
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
                      🧩 الدروس التفاعلية (40 نقطة)
                    </h3>
                    <div
                      className={`grid gap-4 sm:gap-6 ${getGridClasses(
                        "lessons"
                      )}`}
                    >
                      {getLessonsByUnit(unit.id).map((lesson, lessonIndex) => {
                        const isCompleted = isLessonCompleted(lesson.id);
                        const isUnlocked = isUnitUnlocked(unit.id);

                        return (
                          <div
                            key={lessonIndex}
                            className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group ${
                              !isUnlocked ? "opacity-50 cursor-not-allowed" : ""
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
                      })}
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
                      🎮 الألعاب التعليمية (60 نقطة)
                    </h3>
                    <div
                      className={`grid gap-4 sm:gap-6 ${getGridClasses(
                        "games"
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
                                  {gameScore}/{game.points} نقطة
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
          ))}

          {/* Announcements */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-purple-900/20 text-white"
                : "bg-gradient-to-br from-white to-purple-50 text-gray-800"
            } border-2 ${
              darkMode ? "border-purple-500/30" : "border-purple-200"
            }`}
          >
            <h3
              className={`font-bold mb-4 flex items-center ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              <Campaign className="mr-2 text-amber-400" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                الإعلانات والأحداث
              </span>
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {announcementsData.map((announcement, i) => (
                <div
                  key={i}
                  className={`relative p-3 sm:p-4 rounded-xl cursor-pointer overflow-hidden group border-l-4 transform transition-all duration-300 hover:scale-[1.02] ${
                    darkMode
                      ? "bg-gray-700/30 hover:bg-gray-700/50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    borderColor:
                      announcement.color === "amber"
                        ? darkMode
                          ? "#FBBF24"
                          : "#D97706"
                        : announcement.color === "teal"
                        ? darkMode
                          ? "#14B8A6"
                          : "#059669"
                        : darkMode
                        ? "#3B82F6"
                        : "#2563EB",
                  }}
                >
                  <div className="relative z-10 flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                    <span className={isMobile ? "text-xl" : "text-2xl"}>
                      {announcement.icon}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`font-bold ${
                          isMobile ? "text-base" : "text-lg"
                        }`}
                      >
                        {announcement.title}
                      </p>
                      <p
                        className={`${isMobile ? "text-xs" : "text-sm"} ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {announcement.subtitle}
                      </p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full font-bold ${
                        isMobile ? "text-xs" : "text-sm"
                      } ${
                        darkMode
                          ? "bg-purple-500/30 text-purple-300"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      جديد
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
