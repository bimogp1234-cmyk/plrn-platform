import { useState, useEffect } from "react";
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
} from "@mui/icons-material";
import Leaderboard from "./../LeaderboardComp/LeaderBoard";
import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  getDocs,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./../../../FireBaseDatabase/firebase";

export default function MainComDep() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const { userData: passedUserData, darkMode } = location.state || {};
  const storedUserData = localStorage.getItem("userData");
  const userData =
    passedUserData || (storedUserData ? JSON.parse(storedUserData) : null);

  const name = userData?.fullName || userData?.name || "مستخدم غير معروف";
  const photo =
    userData?.photoURL || "https://placehold.co/100x100/10b981/ffffff?text=U";

  const [showContent, setShowContent] = useState(false);
  const [progressData, setProgressData] = useState([]);
  const [unlockedUnits, setUnlockedUnits] = useState([0]);
  const [userScore, setUserScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const lessonsData = [
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
  ];

  const announcementsData = [
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
  ];

  const gamesData = [
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
  ];

  const getGamesByUnit = (unitId) => {
    return gamesData.filter((game) => game.unit === unitId);
  };

  const getLessonsByUnit = (unitId) => {
    return lessonsData.filter((lesson) => lesson.unit === unitId);
  };

  const getGridClasses = (type) => {
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
  };

  const isUnitUnlocked = (unitId) => {
    return unlockedUnits.includes(unitId);
  };

  const getTotalProgress = () => {
    if (progressData.length === 0) return 0;
    const totalPercentage = progressData.reduce(
      (sum, unit) => sum + (unit.percentage || 0),
      0
    );
    return Math.round(totalPercentage / progressData.length);
  };

  const calculateUnlockedUnits = (progressData) => {
    const unlocked = [0];
    progressData.forEach((unit, index) => {
      if (index > 0 && progressData[index - 1]?.completed) {
        unlocked.push(unit.id);
      }
    });
    console.log("🔓 Unlocked units:", unlocked);
    return unlocked;
  };

  const loadProgressFromFirebase = async () => {
    if (!userData?.uid) {
      console.log("❌ No user ID available");
      return null;
    }

    try {
      console.log("🔄 Loading progress from Firebase for user:", userData.uid);

      const progressRef = doc(db, "users", userData.uid, "progress", "main");
      const scoresRef = doc(db, "users", userData.uid, "scores", "overall");

      const [progressSnap, scoresSnap] = await Promise.all([
        getDoc(progressRef),
        getDoc(scoresRef),
      ]);

      if (progressSnap.exists()) {
        const progressData = progressSnap.data();
        const scoresData = scoresSnap.exists() ? scoresSnap.data() : {};

        console.log("✅ Loaded progress from Firebase:", progressData);

        return {
          progressData: progressData.progressData || getInitialProgressData(),
          unlockedUnits: progressData.unlockedUnits || [0],
          userScore: scoresData.totalScore || 0,
        };
      } else {
        console.log("📝 No progress data found, initializing default");
        return {
          progressData: getInitialProgressData(),
          unlockedUnits: [0],
          userScore: 0,
        };
      }
    } catch (error) {
      console.error("❌ Error loading from Firestore:", error);
      return null;
    }
  };

  const getInitialProgressData = () => {
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
        maxPossibleScore: 200,
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
        maxPossibleScore: 200,
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
        maxPossibleScore: 100,
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
        maxPossibleScore: 100,
      },
    ];
  };

  const updateProgressData = async (gameData) => {
    if (!userData?.uid) return;

    try {
      const { unitId, gameId, score: gameScore, completed } = gameData;

      const progressRef = doc(db, "users", userData.uid, "progress", "main");
      const progressSnap = await getDoc(progressRef);

      if (progressSnap.exists()) {
        const currentProgress =
          progressSnap.data().progressData || getInitialProgressData();
        const updatedProgress = [...currentProgress];

        if (updatedProgress[unitId]) {
          updatedProgress[unitId].totalScore += gameScore;
          updatedProgress[unitId].completedGames += completed ? 1 : 0;

          const percentage = Math.min(
            (updatedProgress[unitId].totalScore /
              updatedProgress[unitId].maxPossibleScore) *
              100,
            100
          );
          updatedProgress[unitId].percentage = Math.round(percentage);
          updatedProgress[unitId].completed = percentage >= 100;
        }

        const newUnlockedUnits = calculateUnlockedUnits(updatedProgress);

        await setDoc(progressRef, {
          progressData: updatedProgress,
          unlockedUnits: newUnlockedUnits,
          lastUpdated: serverTimestamp(),
        });

        setProgressData(updatedProgress);
        setUnlockedUnits(newUnlockedUnits);

        console.log("✅ Progress updated successfully");
      }
    } catch (error) {
      console.error("❌ Error updating progress:", error);
    }
  };

  useEffect(() => {
    const handleGameCompletion = (event) => {
      if (event.data && event.data.type === "GAME_COMPLETE") {
        const { unitId, gameId, gameData } = event.data;
        console.log("🎯 Game completion processed:", {
          unitId,
          gameId,
          gameData,
        });

        updateProgressData({ unitId, gameId, ...gameData });
        loadProgressData();
      }
    };

    window.addEventListener("message", handleGameCompletion);

    if (location.state?.gameCompletion) {
      const { unitId, gameId, gameData } = location.state;
      console.log("🔄 Game completion from navigation:", {
        unitId,
        gameId,
        gameData,
      });
      updateProgressData({ unitId, gameId, ...gameData });
      loadProgressData();
      navigate(location.pathname, { replace: true, state: {} });
    }

    return () => window.removeEventListener("message", handleGameCompletion);
  }, [location.state, navigate]);

  const loadProgressData = async () => {
    setIsLoading(true);
    console.log("🔄 Loading progress data...");

    try {
      const firestoreProgress = await loadProgressFromFirebase();

      if (firestoreProgress) {
        console.log("✅ Using Firestore data");
        setProgressData(firestoreProgress.progressData);
        setUnlockedUnits(firestoreProgress.unlockedUnits);
        setUserScore(firestoreProgress.userScore);
      } else {
        console.log("🔄 Using default progress data");
        const initialProgress = getInitialProgressData();
        setProgressData(initialProgress);
        setUnlockedUnits([0]);
        setUserScore(0);
      }
    } catch (error) {
      console.error("❌ Error loading progress:", error);
      const initialProgress = getInitialProgressData();
      setProgressData(initialProgress);
      setUnlockedUnits([0]);
      setUserScore(0);
    }

    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  useEffect(() => {
    if (!userData?.uid) return;

    console.log(
      "👂 Setting up real-time score listener for user:",
      userData.uid
    );

    const overallRef = doc(db, "users", userData.uid, "scores", "overall");

    const unsubOverall = onSnapshot(
      overallRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const newScore = data.totalScore || 0;
          setUserScore((prev) => {
            if (prev !== newScore) {
              console.log("💰 Real-time score update:", newScore);
              return newScore;
            }
            return prev;
          });
        }
      },
      (err) => console.error("Overall scores snapshot error:", err)
    );

    return () => {
      unsubOverall();
    };
  }, [userData?.uid]);

  useEffect(() => {
    loadProgressData();
  }, [userData?.uid]);

  const showToast = (message, type) => {
    console.log(`${type}: ${message}`);
    if (typeof window !== "undefined" && window.alert) {
      window.alert(`${type}: ${message}`);
    }
  };

  const handleOpen = (path, unitId = null, gameId = null) => {
    if (!path) {
      showToast("المسار غير متاح حالياً.", "info");
      return;
    }

    if (unitId !== null && !unlockedUnits.includes(unitId)) {
      showToast("يجب إكمال الوحدة السابقة أولاً!", "warning");
      return;
    }

    const gameState = {
      userData: userData,
      darkMode: darkMode,
      unitId: unitId,
      gameId: gameId,
    };

    navigate(`/${path}`, { state: gameState });
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
            sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }}
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
        </div>
      </div>

      {/* Main content */}
      {showContent && (
        <div
          className={`container max-w-7xl grid gap-4 sm:gap-6 ${
            isDesktop ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {/* Left: Progress & Leaderboard */}
          <div className="space-y-4 sm:space-y-6">
            {/* Progress */}
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
                <div className="mb-4 group" key={unit.id}>
                  <div
                    className={`flex justify-between mb-1 font-semibold ${
                      isMobile ? "text-sm" : "text-base"
                    }`}
                  >
                    <div className="flex items-center">
                      {unit.completed ? (
                        <CheckCircle
                          className="text-green-500 mr-2"
                          fontSize={isMobile ? "small" : "medium"}
                        />
                      ) : isUnitUnlocked(unit.id) ? (
                        <LockOpen
                          className="text-blue-500 mr-2"
                          fontSize={isMobile ? "small" : "medium"}
                        />
                      ) : (
                        <Lock
                          className="text-gray-500 mr-2"
                          fontSize={isMobile ? "small" : "medium"}
                        />
                      )}
                      <span className={isMobile ? "text-xs" : "text-sm"}>
                        {isMobile ? `الوحدة ${unit.id + 1}` : unit.label}
                      </span>
                    </div>
                    <span>{unit.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 sm:h-4 rounded-full overflow-hidden">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      {unit.completedGames || 0} /{" "}
                      {getGamesByUnit(unit.id).length} ألعاب مكتملة
                    </span>
                    <span>
                      {unit.totalScore || 0} / {unit.maxPossibleScore || 0} نقطة
                    </span>
                  </div>
                  {!isUnitUnlocked(unit.id) && (
                    <p
                      className={`text-gray-500 mt-1 ${
                        isMobile ? "text-xs" : "text-sm"
                      }`}
                    >
                      تحتاج {unit.requiredScore}% لإلغاء القفل
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Leaderboard - Hide on mobile if too crowded */}
            {!isMobile && (
              <Leaderboard
                darkMode={darkMode}
                userId={userData?.uid}
                userScore={userScore}
                isMobile={isMobile}
              />
            )}
          </div>

          {/* Right: Units, Lessons & Games */}
          <div
            className={`space-y-4 sm:space-y-6 ${
              isDesktop ? "lg:col-span-3" : ""
            }`}
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
                          isMobile ? "text-xs" : "text-sm"
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
                        🧩 الدروس التفاعلية
                      </h3>
                      <div
                        className={`grid gap-4 sm:gap-6 ${getGridClasses(
                          "lessons"
                        )}`}
                      >
                        {getLessonsByUnit(unit.id).map(
                          (lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group ${
                                !isUnitUnlocked(unit.id)
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={() =>
                                isUnitUnlocked(unit.id) &&
                                handleOpen(
                                  `lesson-${unit.id}-${lessonIndex}`,
                                  unit.id
                                )
                              }
                            >
                              <div
                                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${lesson.gradient}`}
                              ></div>
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
                                {!isUnitUnlocked(unit.id) && (
                                  <Lock
                                    className="absolute top-2 left-2 text-gray-500"
                                    fontSize="small"
                                  />
                                )}
                              </div>
                            </div>
                          )
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
                        🎮 الألعاب التعليمية
                      </h3>
                      <div
                        className={`grid gap-4 sm:gap-6 ${getGridClasses(
                          "games"
                        )}`}
                      >
                        {getGamesByUnit(unit.id).map((game, gameIndex) => {
                          const isUnlocked = isUnitUnlocked(unit.id);
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
                              <div
                                className={`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${game.gradientLeft}`}
                              ></div>
                              <div
                                className={`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${game.gradientRight}`}
                              ></div>
                              {!isUnlocked && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                                  <Lock className="text-white text-2xl sm:text-4xl" />
                                </div>
                              )}
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
                                    {game.points} نقطة
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

            {/* Mobile Leaderboard */}
            {isMobile && (
              <Leaderboard
                darkMode={darkMode}
                userId={userData?.uid}
                userScore={userScore}
                isMobile={isMobile}
              />
            )}

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
              } border-2 ${
                darkMode ? "border-blue-500/30" : "border-blue-200"
              }`}
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
      )}

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
