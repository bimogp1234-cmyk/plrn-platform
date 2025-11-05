import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import "@fontsource/tajawal";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Brightness4, VolumeUp, VolumeOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

// Firestore service
import { saveGameScore } from "./../../../FireBaseDatabase/firestoreService";

// الأصوات
const correctSound = new Audio("/sound/correct.mp3");
const wrongSound = new Audio("/sound/lose1.mp3");
const typingSound = new Audio("/sound/typing.mp3");
const timeupSound = new Audio("/sound/lose2.mp3");
const musicRelaxing = new Audio("/sound/music-relaxing.mp3");
musicRelaxing.loop = true;

// الأسئلة
const QUESTIONS = [
  {
    id: "q1",
    title: "احسب مساحة المستطيل إذا علمت ان المساحة = الطول*العرض",
    lines: [
      "1/البداية",
      "2/أدخل طول المستطيل: ",
      "3/ ___",
      "4/احسب مساحة المستطيل(المساحة=الطول*العرض): ",
      "5/___",
      "6/النهاية",
    ],
    blanks: ["أدخل عرض المستطيل:", "اطبع الناتج"],
    options: [
      "احسب طول المستطيل:",
      "أدخل عرض المستطيل:",
      "اطبع الناتج",
      "احسب الناتج",
    ],
    explanation: "يجب ان ندخل ونطبع الطول والناتج",
    points: 100,
  },
  {
    id: "q2",
    title: "اكتب خوارزمية لحساب قيمة المعادلة y=x+5",
    lines: [
      "1/البداية",
      "2/___ ",
      "3/احسب قيمة المعادلة y=x+5",
      "4/___",
      "5/___",
    ],
    blanks: ["ادخل قيمة المتغير x", "اطبع الناتج y", "النهاية"],
    options: [
      "ادخل قيمة المتغير y",
      "x",
      "اطبع الناتج y",
      "النهاية",
      "اطبع الناتج x",
      "ادخل قيمة المتغير x",
    ],
    explanation: "يجب ادخال قيمة المتغير الاخر ومن ثم نطبع الناتج",
    points: 150,
  },
  {
    id: "q3",
    title:
      "اذا أراد مستخدم صرف مبلغ محدد من ماكينة الصراف الالي اكتب خوارزمية توضح العملية",
    lines: [
      "1/ادخل بطاقة الصراف الالي",
      "2/___ كلمة المرور",
      "3/اذا كانت كلمة المرور صحيحه اذهب الي 4 واذا لا اذهب الي ___",
      "4/ادخل المبلغ المطلوب صرفه ثم اضغط علي موافق واذهب الي ___",
      "5/اذا كان المبلغ المراد صرفه اكبر من المبلغ الموجود في الحساب اذهب الي 6",
      "6/___",
      "7/___",
      "8/النهاية",
    ],
    blanks: ["أدخل", "2", "6", "انتظر استلام النقود", "استلم البطاقة"],
    options: [
      "استلام النقود",
      "2",
      "انتظر استلام النقود",
      "5",
      "أدخل",
      "6",
      "استلم البطاقة",
    ],
    explanation: "المراحل المفقوده هي 6 و 2",
    points: 200,
  },
];

// Card
function Card({ children, className, darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-5 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}

// Timer
function Timer({ seconds, running, onExpire, resetTrigger, darkMode }) {
  const [t, setT] = useState(seconds);

  useEffect(() => setT(seconds), [seconds, resetTrigger]);
  useEffect(() => {
    if (!running) return;
    if (t <= 0) {
      onExpire && onExpire();
      timeupSound.currentTime = 0;
      timeupSound.play().catch(console.error);
      return;
    }
    const id = setInterval(() => setT((x) => x - 1), 1000);
    return () => clearInterval(id);
  }, [t, running]);

  const pct = Math.max(0, Math.round((t / seconds) * 100));

  return (
    <div className="w-56">
      <div className="text-sm">
        الزمن المتبقي: <strong>{t}s</strong>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded mt-2">
        <motion.div
          style={{ width: `${pct}%` }}
          className={`h-2 rounded ${darkMode ? "bg-blue-400" : "bg-blue-500"}`}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

// FloatingButton
function FloatingButton({ label, onClick, selected, darkMode }) {
  const controls = useAnimation();
  useEffect(() => {
    const moveLoop = async () => {
      while (true) {
        await controls.start({
          x: Math.random() * 140 - 70,
          y: Math.random() * 80 - 40,
          rotate: Math.random() * 20 - 10,
          transition: {
            duration: 0.6 + Math.random() * 0.4,
            ease: "easeInOut",
          },
        });
      }
    };
    moveLoop();
  }, [controls]);

  return (
    <motion.button
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-3 rounded-xl border text-sm font-semibold shadow-lg cursor-pointer transition-all ${
        selected ? "bg-green-600 text-white" : "bg-green-800 text-white"
      } ${
        darkMode ? "border-gray-600" : "border-gray-300"
      } relative overflow-hidden`}
      style={{ position: "relative", zIndex: 2, mixBlendMode: "lighten" }}
    >
      {label}
    </motion.button>
  );
}

// MCQLine
function MCQLine({ question, onAnswer, darkMode, resetTrigger }) {
  const [answers, setAnswers] = useState(
    Array(question.blanks.length).fill("")
  );
  const [filledCount, setFilledCount] = useState(0);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setAnswers(Array(question.blanks.length).fill(""));
    setFilledCount(0);
    setFeedback(null);
    typingSound.currentTime = 0;
    typingSound.play().catch(console.error);
  }, [resetTrigger, question.blanks.length]);

  const handleOptionClick = (opt) => {
    const nextIndex = answers.findIndex((a) => a === "");
    if (nextIndex === -1) return;
    const newAns = [...answers];
    newAns[nextIndex] = opt;
    setAnswers(newAns);
    setFilledCount(nextIndex + 1);
  };

  const handleUndo = () => {
    const lastIndex = [...answers].reverse().findIndex((a) => a !== "");
    if (lastIndex === -1) return;
    const realIndex = answers.length - 1 - lastIndex;
    const newAns = [...answers];
    newAns[realIndex] = "";
    setAnswers(newAns);
    setFilledCount(realIndex);
  };

  const submit = () => {
    const ok = answers.every((a, i) => a === question.blanks[i]);
    if (ok) {
      correctSound.currentTime = 0;
      correctSound.play().catch(console.error);
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play().catch(console.error);
    }
    setFeedback(ok ? "correct" : "wrong");
    setTimeout(() => onAnswer({ correct: ok }), 900);
  };

  let globalBlankIndex = 0;
  const renderLine = (line) => {
    const parts = line.split("___");
    return parts.map((part, i) => {
      const blank =
        i < parts.length - 1 ? (
          <span key={globalBlankIndex} className="underline font-semibold">
            {answers[globalBlankIndex++] || "___"}
          </span>
        ) : null;
      return (
        <React.Fragment key={i}>
          {part}
          {blank}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
      <pre
        className={`mt-2 p-3 rounded text-sm whitespace-pre-wrap ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-black"
        }`}
      >
        {question.lines.map((ln, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            {renderLine(ln)}
          </motion.div>
        ))}
      </pre>

      <div className="mt-5 grid gap-3">
        {question.options.map((opt, i) => (
          <FloatingButton
            key={i}
            label={`${String.fromCharCode(65 + i)}. ${opt}`}
            selected={answers.includes(opt)}
            darkMode={darkMode}
            onClick={() => handleOptionClick(opt)}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={submit}
          disabled={filledCount !== question.blanks.length}
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          تحقق
        </motion.button>

        <button
          onClick={handleUndo}
          className={`px-3 py-2 rounded border transition ${
            darkMode
              ? "hover:bg-yellow-100 text-white border-white"
              : "hover:bg-yellow-200 text-black border-gray-500"
          }`}
        >
          تراجع
        </button>

        <button
          onClick={() => alert(question.explanation)}
          className={`px-3 py-2 rounded border transition ${
            darkMode
              ? "hover:bg-yellow-100 text-white border-white"
              : "hover:bg-yellow-200 text-black border-gray-500"
          }`}
        >
          💡 تلميح
        </button>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            key={feedback}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-2 rounded text-center font-bold text-lg ${
              feedback === "correct" ? "text-green-500" : "text-red-500"
            }`}
          >
            {feedback === "correct" ? "✅ صحيح" : "❌ خطأ"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// اللعبة الرئيسية
export default function MissingLinesGame() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, darkMode, unitId, gameId, savedProgress } =
    location.state || {};

  const [index, setIndex] = useState(savedProgress?.currentLevel || 0);
  const [score, setScore] = useState(savedProgress?.score || 0);
  const [running, setRunning] = useState(true);
  const [finished, setFinished] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const TOTAL = QUESTIONS.length;

  // 🎯 Enhanced progress reporting
  const reportProgress = async (isCompleted = false, finalScore = null) => {
    const currentScore = finalScore !== null ? finalScore : score;
    // Use raw scoring here (sum of question points). Let the service normalize.
    const rawScore = Math.max(0, Math.round(currentScore));
    const rawMax = QUESTIONS.reduce((s, q) => s + (q.points || 0), 0);
    const totalQuestions = QUESTIONS.length;
    const progressPercentage = Math.floor((index / totalQuestions) * 100);

    const gameData = {
      score: rawScore,
      rawScore,
      rawMax,
      currentLevel: index,
      totalLevels: totalQuestions,
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
    if (userData?.uid && gameId) {
      try {
        await saveGameScore(userData.uid, gameId, {
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
    if (index > 0 || score > 0) {
      reportProgress(false).catch(console.error);
    }
  }, [index, score]);

  function toggleMusic() {
    if (musicPlaying) {
      musicRelaxing.pause();
    } else {
      musicRelaxing.play().catch(console.error);
    }
    setMusicPlaying(!musicPlaying);
  }

  function handleAnswer({ correct }) {
    if (correct) {
      const questionPoints = QUESTIONS[index].points;
      setScore((s) => s + questionPoints);
    }
    setRunning(false);
    setTimeout(() => {
      if (index < TOTAL - 1) {
        setIndex((i) => i + 1);
        setResetTrigger((r) => r + 1);
        setRunning(true);
      } else {
        setFinished(true);
        // Report final completion
        reportProgress(true).catch(console.error);
      }
    }, 900);
  }

  function handleExpire() {
    setTimeUp(true);
    setRunning(false);
  }

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
          currentLevel: index,
          totalLevels: TOTAL,
          progressPercentage: Math.floor((index / TOTAL) * 100),
          completed: finished,
        },
      },
    });
  };

  const restartGame = () => {
    setIndex(0);
    setScore(0);
    setTimeUp(false);
    setFinished(false);
    setRunning(true);
    setResetTrigger((r) => r + 1);
  };

  if (timeUp) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
        dir="rtl"
      >
        <h1 className="text-3xl font-bold mb-4">⏰ انتهى الوقت!</h1>
        <p className="mb-4">
          نقاطك النهائية: <strong>{score}</strong>
        </p>
        <div className="flex gap-4">
          <button
            onClick={restartGame}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            إعادة المحاولة 🔁
          </button>
          <button
            onClick={exitGame}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            العودة
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
        }`}
        dir="rtl"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold">🎉 انتهت الجولة!</h2>
          <p className="mt-4 text-lg">
            نقاطك النهائية: <strong>{score}</strong>
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={restartGame}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              إعادة اللعب
            </button>
            <button
              onClick={exitGame}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              العودة مع حفظ النقاط
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[index];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      } font-[Tajawal]`}
      dir="rtl"
    >
      <AppBar
        position="static"
        className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
      >
        <Toolbar className="flex justify-between items-center">
          <Button
            onClick={exitGame}
            variant="outlined"
            size="small"
            className="text-green-500 border-green-500"
          >
            العودة
          </Button>
          <span className="text-lg font-bold text-green-500">
            لعبة الخوارزميات
          </span>
          <div className="flex items-center gap-2">
            <IconButton onClick={() => {}} color="inherit">
              <Brightness4 className="text-blue-400" />
            </IconButton>
            <IconButton onClick={toggleMusic} color="inherit">
              {musicPlaying ? <VolumeUp /> : <VolumeOff />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <main className="flex-1 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              السؤال {index + 1} / {TOTAL}
            </h1>
            <div className="flex items-center gap-4">
              <div>
                النقاط: <strong>{score}</strong>
              </div>
              {savedProgress && (
                <span className="text-xs text-gray-500">
                  (تم تحميل التقدم المحفوظ)
                </span>
              )}
            </div>
          </div>

          <Card darkMode={darkMode}>
            <MCQLine
              key={q.id + resetTrigger}
              question={q}
              onAnswer={handleAnswer}
              darkMode={darkMode}
              resetTrigger={resetTrigger}
            />
          </Card>
        </div>
      </main>

      <footer className="text-center py-3 text-sm border-t border-gray-700/30">
        النقاط الحالية: <strong>{score}</strong> | السؤال: {index + 1} من{" "}
        {TOTAL}
      </footer>
    </div>
  );
}
