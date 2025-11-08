import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import {
  Brightness4,
  VolumeUp,
  VolumeOff,
  Favorite,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation, useNavigate } from "react-router-dom";
import "@fontsource/tajawal";

// Firestore service
import {
  getGameProgress,
  setGameProgress,
} from "../../Departments/ComputerDep/progressService";
import { saveGameScore } from "../../Departments/ComputerDep/progressService";
import {
  DEFAULT_PER_PLACEMENT_POINTS,
  computeRawMaxFromQuestions,
} from "./../../../config/gameConstants";
import { getStoredTheme, setTheme } from "./../../../utils/theme";
import { useAuth } from "../../../contexts/AuthContext";

// الأصوات
const correctSound = new Audio("/sound/correct.mp3");
const wrongSound = new Audio("/sound/lose1.mp3");
const musicRelaxing = new Audio("/sound/music-relaxing.mp3");
musicRelaxing.loop = true;

const ItemTypes = { SHAPE: "shape" };

// جميع الأشكال الممكنة
const ALL_SHAPES = [
  { id: "start", label: "البداية", color: "#43A047", type: "start" },
  { id: "input", label: "ادخل الطول", color: "#2196F3", type: "input" },
  { id: "input1", label: "ادخل العرض", color: "#2196F3", type: "input1" },
  { id: "process", label: "احسب المساحة", color: "#FFC107", type: "process" },
  { id: "output", label: "اطبع الناتج", color: "#9C27B0", type: "output" },
  { id: "end", label: "النهاية", color: "#E91E63", type: "end" },
  { id: "inputNum", label: "ادخل الرقم", color: "#03A9F4", type: "inputNum" },
  {
    id: "inputNum1",
    label: "ادخل الرقمين",
    color: "#03A9F4",
    type: "inputNum1",
  },
  { id: "process2", label: "اجمع الرقمين", color: "#FFC107", type: "process2" },
  { id: "output2", label: "اعرض المجموع", color: "#9C27B0", type: "output2" },
  { id: "process3", label: "اقسم العدد", color: "#FFC107", type: "process3" },
  { id: "output3", label: "اطبع الناتج", color: "#9C27B0", type: "output3" },
  {
    id: "decision",
    label: "هل العدد زوجي؟",
    color: "#FF5722",
    type: "decision",
  },
  { id: "process4", label: "اطبع 'زوجي'", color: "#FFC107", type: "process4" },
  { id: "process5", label: "اطبع 'فردي'", color: "#9C27B0", type: "process5" },
  { id: "loop", label: "كرر من 1 إلى 5", color: "#4CAF50", type: "loop" },
  { id: "output4", label: "اطبع العدد", color: "#03A9F4", type: "output4" },
];

// الأسئلة
const QUESTIONS = [
  {
    id: 1,
    title: "احسب مساحة المستطيل إذا علمت أن المساحة = الطول × العرض",
    requiredShapes: ["start", "input", "input1", "process", "output", "end"],
    points: 100,
  },
  {
    id: 2,
    title: "صمّم خوارزمية لجمع رقمين ثم عرض الناتج",
    requiredShapes: ["start", "inputNum1", "process2", "output2", "end"],
    points: 150,
  },
  {
    id: 3,
    title: "صمّم خوارزمية لإدخال عدد ثم قسمته على 2 وطباعة الناتج",
    requiredShapes: ["start", "inputNum", "process3", "output3", "end"],
    points: 200,
  },
  {
    id: 4,
    title:
      "صمّم خوارزمية للتحقق مما إذا كان العدد زوجياً أو فردياً باستخدام اتخاذ القرار",
    requiredShapes: [
      "start",
      "inputNum",
      "decision",
      "process4",
      "process5",
      "end",
    ],
    points: 250,
  },
  {
    id: 5,
    title: "صمّم خوارزمية تكرّر طباعة الأعداد من 1 إلى 5",
    requiredShapes: ["start", "loop", "output4", "end"],
    points: 300,
  },
];

// -------- Shape component --------
function Shape({ shape }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.SHAPE,
      item: { id: shape.id, shapeType: shape.type },
      collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    }),
    [shape]
  );

  const renderShape = () => {
    switch (shape.type) {
      case "start":
      case "end":
        return (
          <svg width="130" height="60" viewBox="0 0 130 60">
            <ellipse cx="65" cy="30" rx="60" ry="25" fill={shape.color} />
            <text
              x="65"
              y="34"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
      case "decision":
        return (
          <svg width="140" height="80" viewBox="0 0 140 80">
            <polygon
              points="70,0 140,40 70,80 0,40"
              fill={shape.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="70"
              y="45"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
      case "input":
      case "input1":
      case "inputNum":
      case "output":
      case "output2":
      case "output3":
        return (
          <svg width="140" height="60" viewBox="0 0 140 60">
            <polygon
              points="20,0 140,0 120,60 0,60"
              fill={shape.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="70"
              y="35"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
      default:
        return (
          <svg width="130" height="60" viewBox="0 0 130 60">
            <rect
              x="5"
              y="5"
              width="120"
              height="50"
              rx="8"
              fill={shape.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="65"
              y="35"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
    }
  };

  return (
    <motion.div
      ref={drag}
      animate={{ x: Math.random() * 150 - 75, y: Math.random() * 100 - 50 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      className="absolute cursor-pointer select-none"
      style={{
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 70 + 10}%`,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {renderShape()}
    </motion.div>
  );
}

// -------- Slot component --------
function Slot({
  slotId,
  correctShape,
  placedShape,
  onDrop,
  showArrow,
  darkMode,
}) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHAPE,
      drop: (item) => onDrop(slotId, item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [slotId, correctShape, placedShape]
  );

  const renderPlacedShape = (shape) => {
    if (!shape) return null;
    switch (shape.type) {
      case "start":
      case "end":
        return (
          <svg width="130" height="60">
            <ellipse cx="65" cy="30" rx="60" ry="25" fill={shape.color} />
            <text
              x="65"
              y="34"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
      case "decision":
        return (
          <svg width="140" height="80">
            <polygon
              points="70,0 140,40 70,80 0,40"
              fill={shape.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="70"
              y="45"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
      default:
        return (
          <svg width="140" height="60">
            <rect
              x="5"
              y="5"
              width="130"
              height="50"
              rx="8"
              fill={shape.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="70"
              y="35"
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontFamily="Tajawal"
            >
              {shape.label}
            </text>
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <div
        ref={drop}
        className={`flex justify-center items-center border-2 rounded-lg transition-all duration-300 ${
          isOver ? "bg-green-200" : darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
        style={{
          width: "220px",
          height: "90px",
          borderColor: canDrop ? "#4CAF50" : "#aaa",
        }}
      >
        {placedShape ? (
          renderPlacedShape(placedShape)
        ) : (
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            ضع الشكل هنا
          </span>
        )}
      </div>

      {showArrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-2"
        >
          <svg width="60" height="30" viewBox="0 0 40 60">
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="50"
              stroke="#ffffff"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="4"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#FFFFFF" />
              </marker>
            </defs>
          </svg>
        </motion.div>
      )}
    </div>
  );
}

// -------- Main Game --------
export default function DragDrop() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, darkMode, unitId, gameId, savedProgress } =
    location.state || {};

  // Prefer the authenticated user from context to avoid passing incorrect uids
  const { user: authUser } = useAuth ? useAuth() : { user: null };

  const [musicPlaying, setMusicPlaying] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [savedProgressData, setSavedProgressData] = useState(null);
  const [loadedFromSave, setLoadedFromSave] = useState(false);

  // theme override: reads persisted choice and allows toggle
  const [localTheme, setLocalTheme] = useState(null); // 'dark' | 'light' | null (null = follow prop)
  const [placed, setPlaced] = useState({});
  const [lives, setLives] = useState(3);
  const [showLivesModal, setShowLivesModal] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentQuestion = QUESTIONS[currentLevel];
  const slots = currentQuestion.requiredShapes.map((shapeType, i) => ({
    id: `slot-${i}`,
    correctShape: shapeType,
  }));

  const shapesForQuestion = ALL_SHAPES.filter(
    (s) =>
      currentQuestion.requiredShapes.includes(s.type) &&
      !Object.values(placed).some((p) => p && p.id === s.id)
  );

  // 🎯 Enhanced progress reporting
  const reportProgress = async (isCompleted = false, finalScore = null) => {
    const currentScore = finalScore !== null ? finalScore : score;
    // Use raw scoring based on per-level weights. Each question has a `points`
    // weight; the game's rawMax is the sum of those weights. We compute the
    // rawScore as the sum of earned per-level points (stored in `score`).
    const rawScore = Math.max(0, Math.round(currentScore * 100) / 100);
    // Prefer a centralized computation; fallback to question.points or a default
    const rawMax =
      computeRawMaxFromQuestions(QUESTIONS) ||
      QUESTIONS.reduce(
        (acc, q) =>
          acc +
          (q.points ||
            DEFAULT_PER_PLACEMENT_POINTS * (q.requiredShapes?.length || 1)),
        0
      );
    const totalLevels = QUESTIONS.length;
    const progressPercentage = Math.floor((currentLevel / totalLevels) * 100);

    const gameData = {
      score: rawScore,
      rawScore,
      rawMax,
      currentLevel: currentLevel,
      totalLevels: totalLevels,
      progressPercentage: progressPercentage,
      completed: isCompleted,
      finalScore: isCompleted ? rawScore : undefined,
      points: rawScore,
    };

    console.log("📊 Reporting progress:", gameData);

    // 1. Save to localStorage
    try {
      localStorage.setItem(`game_progress_${gameId}`, JSON.stringify(gameData));
    } catch (err) {
      console.warn("localStorage save failed", err);
    }

    // 2. Save to Firebase via centralized service
    const uid = authUser?.uid || userData?.uid;
    if (!uid) {
      // Do not attempt Firestore writes when there's no authenticated user.
      // This prevents "Missing or insufficient permissions" errors when
      // callers accidentally pass the wrong uid or the user is not signed in.
      console.warn("Skipping remote save: no authenticated user");
    }

    if (uid && gameId) {
      // Persist a lightweight progress doc so the game can resume later
      try {
        await setGameProgress(uid, gameId, {
          currentLevel: gameData.currentLevel,
          score: gameData.score,
          totalLevels: gameData.totalLevels,
          progressPercentage: gameData.progressPercentage,
          completed: Boolean(gameData.completed),
        });
      } catch (err) {
        console.warn("Could not save game progress to Firestore:", err);
      }
      try {
        await saveGameScore(uid, gameId, {
          unitId,
          rawScore,
          rawMax,
          completed: Boolean(isCompleted),
        });
        console.log("✅ Firebase score saved (service)");
      } catch (err) {
        console.error("❌ Firebase save error (service):", err);
      }
    }

    // 3. Send message to parent (MainComDep)
    const messageData = {
      type: "GAME_COMPLETE",
      unitId: unitId,
      gameId: gameId,
      gameData: gameData,
    };

    console.log("📨 Sending message to parent:", messageData);

    // Try multiple ways to send the message
    if (window.parent !== window) {
      window.parent.postMessage(messageData, "*");
    }

    if (window.opener) {
      window.opener.postMessage(messageData, "*");
    }

    // Also try to send to the same window (for testing)
    window.postMessage(messageData, "*");

    return gameData;
  };

  // Save progress when level or score changes
  useEffect(() => {
    if (loadedFromSave === false && savedProgressData) {
      // Do not auto-apply saved progress - wait for user to click Resume
      return;
    }

    if (currentLevel > 0 || score > 0) {
      reportProgress(false).catch(console.error);
    }
  }, [currentLevel, score]);

  // Load saved progress (localStorage -> Firestore) on mount and AUTO-APPLY it
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        // 1. Try localStorage first
        const raw = localStorage.getItem(`game_progress_${gameId}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (mounted && parsed) {
            setSavedProgressData(parsed);
            // Auto-apply saved progress immediately
            setCurrentLevel(parsed.currentLevel || 0);
            setScore(parsed.score || 0);
            setLoadedFromSave(true);
          }
        }

        // 2. If user is logged in try Firestore saved progress (overrides local)
        if (userData?.uid && gameId) {
          try {
            const remote = await getGameProgress(userData.uid, gameId);
            if (mounted && remote) {
              setSavedProgressData(remote);
              // Auto-apply remote progress (override local)
              setCurrentLevel(remote.currentLevel || 0);
              setScore(remote.score || 0);
              setLoadedFromSave(true);
            }
          } catch (err) {
            console.warn("Failed to load remote game progress:", err);
          }
        }

        // Load persisted theme preference
        const persisted = getStoredTheme();
        if (mounted && persisted)
          setLocalTheme(persisted === "dark" ? "dark" : "light");
      } catch (err) {
        console.warn("Failed to load saved progress:", err);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  // Saved progress is applied automatically on load (auto-resume)

  const handleResetProgress = async () => {
    try {
      localStorage.removeItem(`game_progress_${gameId}`);
      if (userData?.uid) {
        await setGameProgress(userData.uid, gameId, {
          currentLevel: 0,
          score: 0,
          completed: false,
        });
      }
      setSavedProgressData(null);
      setCurrentLevel(0);
      setScore(0);
      setLoadedFromSave(false);
      console.log("Progress reset");
    } catch (err) {
      console.warn("Failed to reset progress:", err);
    }
  };

  // Theme toggle handler (persist locally and to user profile when available)
  const toggleLocalTheme = async () => {
    const next =
      localTheme === "dark" || (!localTheme && darkMode) ? "light" : "dark";
    setLocalTheme(next);
    try {
      await setTheme(next, userData?.uid || null);
    } catch (err) {
      console.warn("Failed to persist theme", err);
    }
  };

  const toggleMusic = () => {
    if (musicPlaying) {
      musicRelaxing.pause();
    } else {
      musicRelaxing.play().catch(console.error);
    }
    setMusicPlaying(!musicPlaying);
  };

  const handleDrop = (slotId, item) => {
    if (showGameOverModal) return;

    const slot = slots.find((s) => s.id === slotId);
    if (!slot) return;

    const draggedShape = ALL_SHAPES.find((s) => s.id === item.id);
    if (!draggedShape) return;

    if (slot.correctShape === item.shapeType) {
      // Correct placement
      correctSound.currentTime = 0;
      correctSound.play().catch(console.error);
      setPlaced((prev) => ({ ...prev, [slotId]: draggedShape }));
      // Award per-placement points proportionally so each level's max equals
      // its `points` weight. This keeps the game's overall rawMax equal to
      // sum(QUESTIONS[].points).
      const placementsCount = slots.length || 1;
      const perPlacement = (currentQuestion.points || 0) / placementsCount;
      setScore((s) => {
        const next = +(s + perPlacement).toFixed(2);
        return next;
      });
    } else {
      // Wrong placement
      wrongSound.currentTime = 0;
      wrongSound.play().catch(console.error);
      setLives((prev) => {
        const newLives = Math.max(prev - 1, 0);
        if (newLives === 0) {
          setTimeout(() => setShowGameOverModal(true), 400);
        }
        return newLives;
      });
    }
  };

  // Check level completion
  useEffect(() => {
    if (Object.keys(placed).length === slots.length) {
      setTimeout(() => {
        if (currentLevel < QUESTIONS.length - 1) {
          // Move to next level
          const nextLevel = currentLevel + 1;
          setCurrentLevel(nextLevel);
          setPlaced({});

          // Show lives modal only when moving to level 2
          if (nextLevel === 1) {
            setShowLivesModal(true);
          }

          // Reset lives for new levels
          if (nextLevel >= 1) {
            setLives(3);
          }
        } else {
          // Game completed - final score is the accumulated per-level points
          const finalScore = score;
          setGameCompleted(true);
          setShowGameOverModal(true);

          console.log("🎮 Game completed! Final score:", finalScore);

          // Report final completion
          reportProgress(true, finalScore).catch(console.error);
        }
      }, 1000);
    }
  }, [placed, slots.length, currentLevel, score, currentQuestion.points]);

  const closeLivesModal = () => setShowLivesModal(false);

  const restartGame = () => {
    setCurrentLevel(0);
    setScore(0);
    setPlaced({});
    setLives(3);
    setShowLivesModal(false);
    setShowGameOverModal(false);
    setGameCompleted(false);
  };

  const exitGame = () => {
    // Save current progress before exiting
    reportProgress(false).catch(console.error);

    navigate(-1, {
      state: {
        gameCompletion: true,
        unitId: unitId,
        gameId: gameId,
        gameData: {
          score: score,
          currentLevel: currentLevel,
          totalLevels: QUESTIONS.length,
          progressPercentage: Math.floor(
            (currentLevel / QUESTIONS.length) * 100
          ),
          completed: gameCompleted,
        },
      },
    });
  };

  const exitWithCompletion = () => {
    const finalScore = score;

    reportProgress(true, finalScore)
      .then(() => {
        navigate(-1, {
          state: {
            gameCompletion: true,
            unitId: unitId,
            gameId: gameId,
            gameData: {
              score: finalScore,
              currentLevel: currentLevel,
              totalLevels: QUESTIONS.length,
              progressPercentage: 100,
              completed: true,
              finalScore: finalScore,
            },
          },
        });
      })
      .catch(console.error);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`min-h-screen flex flex-col font-[Tajawal] overflow-hidden ${
          darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
        }`}
        dir="rtl"
      >
        <AppBar
          position="static"
          className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
        >
          <Toolbar className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                onClick={exitGame}
                variant="outlined"
                size="small"
                className="text-green-500 border-green-500"
              >
                العودة
              </Button>
              <span className="text-lg font-bold text-green-500 ml-3">
                لعبة أشكال الخوارزميات
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle: persists choice locally and to the user profile when logged in */}
              <Button
                size="small"
                variant="outlined"
                onClick={toggleLocalTheme}
              >
                {localTheme === "dark" || (localTheme === null && darkMode)
                  ? "وضع فاتح"
                  : "وضع داكن"}
              </Button>
              <IconButton onClick={toggleMusic} color="inherit">
                {musicPlaying ? <VolumeUp /> : <VolumeOff />}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {/* Saved progress (auto-applied) — UI no longer requires manual Resume */}

        <main className="flex-1 grid grid-cols-2 gap-4 p-6">
          <div className="relative h-full overflow-hidden border-r border-gray-700/30 pr-4">
            {shapesForQuestion.length === 0 && (
              <div
                className={`text-center mt-10 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                لا أشكال متبقية للسحب في هذا السؤال
              </div>
            )}
            {shapesForQuestion.map((shape) => (
              <Shape key={shape.id} shape={shape} />
            ))}
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-xl font-bold mb-1">
              السؤال {currentLevel + 1} من {QUESTIONS.length}
            </h2>
            <h3 className="text-lg mb-4 text-center">
              {currentQuestion.title}
            </h3>

            <div className="flex flex-col gap-4 items-center">
              {slots.map((slot, i) => (
                <Slot
                  key={slot.id}
                  slotId={slot.id}
                  correctShape={slot.correctShape}
                  placedShape={placed[slot.id]}
                  onDrop={handleDrop}
                  showArrow={Boolean(placed[slot.id]) && i < slots.length - 1}
                  darkMode={darkMode}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Favorite
                    key={i}
                    className={`text-3xl transition-all duration-300 ${
                      i < lives ? "text-red-500" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold">النقاط: {score}</div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                المستوى: {currentLevel + 1}
              </div>
            </div>
          </div>
        </main>

        <footer
          className={`text-center py-3 text-sm border-t ${
            darkMode ? "border-gray-700/30" : "border-gray-300"
          }`}
        >
          النقاط الحالية: <strong>{score}</strong>
          {savedProgress && (
            <span
              className={`mr-4 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              (تم تحميل التقدم المحفوظ)
            </span>
          )}
        </footer>

        {/* Modals */}
        {showLivesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div
              className={`rounded-xl p-6 max-w-md w-full text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">تم تفعيل نظام الأرواح</h3>
              <p className="mb-4">
                بدءاً من هذا المستوى لديك 3 محاولات، كل خطأ يقلب حياة واحدة.
              </p>
              <div className="flex justify-center gap-3 mb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Favorite
                    key={i}
                    className={`text-2xl ${
                      i < lives ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={closeLivesModal}
                className="px-4 py-2 rounded-full bg-green-500 text-white font-semibold"
              >
                فهمت وابدأ
              </button>
            </div>
          </div>
        )}

        {showGameOverModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div
              className={`rounded-2xl p-6 max-w-sm w-full text-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <h2 className="text-2xl font-bold mb-3">
                {gameCompleted ? "🎉 مبروك! أكملت اللعبة" : "انتهت اللعبة"}
              </h2>
              <p className="mb-4">
                نقاطك: <strong>{score}</strong>
                {gameCompleted && (
                  <>
                    <br />
                    <span className="text-green-600">
                      النقاط الإجمالية: <strong>{score}</strong>
                    </span>
                  </>
                )}
              </p>
              <div className="flex flex-col gap-3">
                {gameCompleted ? (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={exitWithCompletion}
                    fullWidth
                  >
                    العودة مع حفظ النقاط
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={restartGame}
                    fullWidth
                  >
                    إعادة المحاولة
                  </Button>
                )}
                <Button variant="outlined" onClick={exitGame} fullWidth>
                  العودة للقائمة الرئيسية
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
}
