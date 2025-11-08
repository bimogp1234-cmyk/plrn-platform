import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Lottie from "lottie-react";
import { useLocation } from "react-router-dom";
import { useUserData } from "../../../contexts/UserDataContext";

// Lottie animations
import startAnim from "./lottie/start.json";
import inputAnim from "./lottie/start.json";
import processAnim from "./lottie/start.json";
import outputAnim from "./lottie/start.json";
import endAnim from "./lottie/start.json";

// Sound files (import returns a URL that bundlers handle)
import correctSoundFile from "../../../../public/sound/win1.mp3";
import wrongSoundFile from "../../../../public/sound/lose1.mp3";
import winSoundFile from "../../../../public/sound/win1.mp3";
import failSoundFile from "../../../../public/sound/lose2.mp3";

// Questions
const QUESTIONS = [
  {
    question: "ما هو الرمز الذي يُستخدم لبدء وتنهي المخطط الانسيابي؟",
    correctNode: "start",
    lottie: startAnim,
  },
  {
    question: "ما هو الرمز المستخدم لإدخال البيانات من المستخدم؟",
    correctNode: "input",
    lottie: inputAnim,
  },
  {
    question: "ما هو الرمز المستخدم لتنفيذ العمليات الحسابية أو المنطقية؟",
    correctNode: "process",
    lottie: processAnim,
  },
  {
    question: "ما هو الرمز المستخدم لإظهار النتائج على الشاشة؟",
    correctNode: "output",
    lottie: outputAnim,
  },
  {
    question: "بعد تنفيذ كل الخطوات، ما هو الرمز الأخير في المخطط الانسيابي؟",
    correctNode: "end",
    lottie: endAnim,
  },
];

// Node component
const NodeComponent = ({
  id,
  position,
  onClick,
  isCurrentTarget,
  lottieData,
}) => {
  const baseClass =
    "absolute transition-transform duration-100 ease-out shadow-lg transform hover:scale-105 active:scale-95 cursor-pointer";
  const pulseClass = "rounded-xl";

  return (
    <div
      key={id}
      style={{
        top: position?.top || 0,
        left: position?.left || 0,
        width: 100,
        height: 100,
      }}
      className={`${baseClass} ${pulseClass}`}
      onClick={() => onClick({ instanceId: id, correctNode: id.split("-")[0] })}
    >
      {lottieData ? (
        <Lottie animationData={lottieData} loop autoplay />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-xs font-bold rounded-xl">
          Missing Animation
        </div>
      )}
    </div>
  );
};

// Main
export default function FlowchartGame({ db, userId = "guest" }) {
  const location = useLocation();
  const routeState = location.state || {};
  const routeUserData = routeState.userData || null;
  const routeUnitId = routeState.unitId || null;
  const routeGameId = routeState.gameId || null;
  const {
    user: ctxUser,
    scores: ctxScores,
    saveGameScore: ctxSaveGameScore,
  } = useUserData();
  const effectiveUserId = ctxUser?.uid || routeUserData?.uid || userId;
  const effectiveUnitId = routeUnitId;
  const effectiveGameId = routeGameId;
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const containerRef = useRef(null);
  const positionsRef = useRef({});
  const directionsRef = useRef({});
  const hasPlayedEndSound = useRef(false);

  // Audio refs: store Audio objects here
  const audioRef = useRef({
    correct: null,
    wrong: null,
    win: null,
    fail: null,
  });

  // create Audio objects once on mount
  useEffect(() => {
    // If imports are URLs, new Audio(URL) is fine.
    audioRef.current.correct = new Audio(correctSoundFile);
    audioRef.current.wrong = new Audio(wrongSoundFile);
    audioRef.current.win = new Audio(winSoundFile);
    audioRef.current.fail = new Audio(failSoundFile);

    // Optional: reduce latency by preloading
    Object.values(audioRef.current).forEach((a) => {
      if (a) {
        a.preload = "auto";
        // some browsers won't actually load until user gesture; that's normal
      }
    });
  }, []);

  // Helper to play a named sound reliably
  const playSound = async (name) => {
    try {
      const audio = audioRef.current[name];
      if (!audio) return;
      // Reset playback so it can be played repeatedly
      try {
        audio.pause();
      } catch (e) {}
      try {
        audio.currentTime = 0;
      } catch (e) {}
      // Attempt to play; handle promise rejection (browsers may block if not gesture)
      const p = audio.play();
      if (p && typeof p.then === "function") {
        await p.catch((err) => {
          // optional debug: console.warn("sound play blocked:", name, err);
        });
      }
    } catch (err) {
      // swallow errors so UI doesn't crash
      // console.error("playSound error:", err);
    }
  };

  // repeated nodes
  const repeatedNodes = useMemo(
    () =>
      QUESTIONS.map((q) =>
        [0, 1, 2].map((i) => ({ ...q, instanceId: `${q.correctNode}-${i}` }))
      ).flat(),
    []
  );

  const [nodesPositions, setNodesPositions] = useState({});

  // initialize positions
  const initializePositions = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    if (!clientWidth || !clientHeight) return;
    const pos = {};
    const dirs = {};
    const nodeSize = 120;
    const occupied = new Set();

    repeatedNodes.forEach((node) => {
      let x, y;
      let attempts = 0;
      do {
        x = Math.random() * (clientWidth - nodeSize);
        y = Math.random() * (clientHeight - nodeSize);
        const key = `${Math.floor(x / nodeSize)}:${Math.floor(y / nodeSize)}`;
        if (!occupied.has(key)) {
          occupied.add(key);
          break;
        }
        attempts++;
      } while (attempts < 10);

      pos[node.instanceId] = { top: y, left: x };
      dirs[node.instanceId] = {
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      };
    });

    positionsRef.current = pos;
    directionsRef.current = dirs;
    setNodesPositions(pos);
  }, [repeatedNodes]);

  // load saved score from centralized service (per-game scores)
  useEffect(() => {
    if (!effectiveGameId) return;

    try {
      const myScore = ctxScores?.[effectiveGameId];
      if (myScore) {
        if (typeof myScore.rawScore === "number") {
          setScore(myScore.rawScore || 0);
        } else if (typeof myScore.score === "number") {
          const inferredRawMax = myScore.rawMax || QUESTIONS.length;
          const inferredRaw = Math.round(
            (myScore.score / 100) * inferredRawMax
          );
          setScore(inferredRaw || 0);
        } else {
          setScore(0);
        }
        setLevel(myScore.currentLevel || 0);
      }
    } catch (err) {
      console.error("Error reading score from context:", err);
    }
  }, [ctxScores, effectiveGameId]);

  // save progress when important values change
  useEffect(() => {
    if (!gameStarted) return;
    // Persist the game score via central service when it changes
    const persist = async () => {
      if (!effectiveUserId || !effectiveGameId) return;
      try {
        // Send rawScore/rawMax so central service can normalize to 0-100
        const rawScore = typeof score === "number" ? score : 0;
        const rawMax = QUESTIONS.length;
        if (typeof ctxSaveGameScore === "function") {
          await ctxSaveGameScore(effectiveGameId, {
            unitId: effectiveUnitId,
            rawScore,
            rawMax,
            points: null,
            completed: gameOver,
          });
        } else {
          // fallback: try direct service call (best-effort)
          try {
            const shared = await import(
              "../../Departments/ComputerDep/progressService"
            );
            await shared.saveGameScore(effectiveUserId, effectiveGameId, {
              unitId: effectiveUnitId,
              rawScore,
              rawMax,
              points: null,
              completed: gameOver,
            });
          } catch (err) {
            console.error("Fallback saveGameScore failed:", err);
          }
        }
      } catch (err) {
        console.error("Error saving flowchart score (service):", err);
      }
    };
    // Debounce slightly to avoid too many writes
    const id = setTimeout(persist, 300);
    return () => clearTimeout(id);
  }, [
    score,
    level,
    timer,
    gameStarted,
    gameOver,
    effectiveUserId,
    effectiveGameId,
    effectiveUnitId,
  ]);

  // init / resize
  useEffect(() => {
    initializePositions();
    const onResize = () => initializePositions();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [initializePositions]);

  // timer
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const timerId = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(timerId);
          setGameOver(true);
          if (!hasPlayedEndSound.current) {
            hasPlayedEndSound.current = true;
            if (score >= QUESTIONS.length / 2) playSound("win");
            else playSound("fail");
          }
          setSnackbarMsg(
            score >= QUESTIONS.length / 2
              ? "⏰ انتهى الوقت! لقد نجحت 🎉"
              : "⏰ انتهى الوقت! حاول مرة أخرى ❌"
          );
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [gameStarted, gameOver, score]);

  // node motion
  useEffect(() => {
    if (!gameStarted || gameOver || !containerRef.current) return;
    const id = setInterval(() => {
      const { clientWidth, clientHeight } = containerRef.current;
      const nodeSize = 100;
      const newPos = {};
      const dirs = directionsRef.current;
      Object.keys(positionsRef.current).forEach((k) => {
        const pos = positionsRef.current[k];
        const dir = dirs[k];
        let newLeft = pos.left + dir.dx;
        let newTop = pos.top + dir.dy;
        let newDx = dir.dx;
        let newDy = dir.dy;
        if (newLeft <= 0 || newLeft >= clientWidth - nodeSize) newDx *= -1;
        if (newTop <= 0 || newTop >= clientHeight - nodeSize) newDy *= -1;
        pos.left = Math.max(0, Math.min(clientWidth - nodeSize, newLeft));
        pos.top = Math.max(0, Math.min(clientHeight - nodeSize, newTop));
        dirs[k] = { dx: newDx, dy: newDy };
        newPos[k] = pos;
      });
      positionsRef.current = newPos;
      setNodesPositions({ ...newPos });
    }, 20);
    return () => clearInterval(id);
  }, [gameStarted, gameOver]);

  // handle selection (plays sound every time)
  const handleSelect = (node) => {
    if (gameOver || !gameStarted) return;
    const isCorrect = node.correctNode === QUESTIONS[level].correctNode;

    if (isCorrect) {
      // play correct sound every time
      playSound("correct");
      setScore((s) => s + 1);
      setSnackbarMsg("✅ إجابة صحيحة!");
    } else {
      playSound("wrong");
      setSnackbarMsg("❌ خطأ! حاول مرة أخرى.");
    }

    const next = level + 1;
    setTimeout(() => {
      setSnackbarMsg("");
      if (isCorrect) {
        if (next < QUESTIONS.length) setLevel(next);
        else {
          setGameOver(true);
          if (!hasPlayedEndSound.current) {
            hasPlayedEndSound.current = true;
            if (score + 1 >= QUESTIONS.length / 2) playSound("win");
            else playSound("fail");
          }
          setSnackbarMsg(
            score + 1 >= QUESTIONS.length / 2
              ? "🎉 أحسنت! أكملت الاختبار بنجاح!"
              : "❌ انتهت الأسئلة. حاول مرة أخرى."
          );
        }
      }
    }, 700);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLevel(0);
    setTimer(60);
    setSnackbarMsg("");
    hasPlayedEndSound.current = false;
    initializePositions();
  };
  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setLevel(0);
    setTimer(60);
    setSnackbarMsg("");
    hasPlayedEndSound.current = false;
    initializePositions();
  };

  const currentQuestion = QUESTIONS[level];
  const progressValue = (score / QUESTIONS.length) * 100;

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-4 font-['Tajawal']"
      style={{ direction: "rtl" }}
    >
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 mb-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          🎮 لعبة تعلم المخططات الانسيابية
        </h1>

        <div className="flex justify-between items-center text-lg font-medium text-gray-700 mb-4 border-b pb-4">
          <p>
            الوقت:{" "}
            <span
              className={`font-bold ${
                timer <= 10 ? "text-red-600" : "text-blue-600"
              }`}
            >
              {timer} ثانية
            </span>
          </p>
          <p>
            النقاط:{" "}
            <span className="font-bold text-green-600">
              {score} / {QUESTIONS.length}
            </span>
          </p>
        </div>

        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progressValue}%` }}
            />
          </div>
          <p className="text-left text-sm font-bold text-gray-500 mt-1">
            {Math.round(progressValue)}% إنجاز
          </p>
        </div>

        {gameStarted && !gameOver && currentQuestion && (
          <div className="text-center p-4 bg-blue-50 border-2 border-blue-200 rounded-lg shadow-inner">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700">
              {currentQuestion.question}
            </h2>
          </div>
        )}

        {(!gameStarted || gameOver) && (
          <div className="text-center p-4">
            <p className="text-xl text-gray-600 font-semibold">
              {!gameStarted
                ? "اضغط على 'ابدأ اللعبة' للبدء"
                : gameOver && score >= QUESTIONS.length / 2
                ? "🎉 تهانينا! اضغط 'ابدأ من جديد' لتكرار اللعب."
                : "❌ لم تنجح هذه المرة. اضغط 'ابدأ من جديد' للمحاولة."}
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={startGame}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold shadow"
              >
                ابدأ اللعبة
              </button>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-bold shadow"
              >
                إعادة تعيين
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl flex-1 border-4 border-gray-300 rounded-xl bg-gray-100 min-h-[60vh] overflow-hidden shadow-2xl"
      >
        {gameStarted &&
          !gameOver &&
          repeatedNodes.map((node) => (
            <NodeComponent
              key={node.instanceId}
              id={node.instanceId}
              position={nodesPositions[node.instanceId]}
              onClick={handleSelect}
              lottieData={node.lottie}
              isCurrentTarget={node.correctNode === currentQuestion.correctNode}
            />
          ))}

        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <p className="text-4xl font-extrabold text-white bg-gray-800 p-6 rounded-xl shadow-2xl animate-bounce">
              {snackbarMsg}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
