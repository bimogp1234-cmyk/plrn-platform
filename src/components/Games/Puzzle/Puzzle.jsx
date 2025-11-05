import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
  Snackbar,
  Alert,
  Switch,
  FormControlLabel,
  LinearProgress,
} from "@mui/material";
import { Code, ShapeLine } from "@mui/icons-material";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Confetti from "react-confetti";

const levels = [
  {
    id: 1,
    question: "اكتب كود زائف لحساب مجموع الأعداد من 1 إلى 5",
    hint: "استخدم متغير sum و حلقة for",
    type: "pseudocode",
    templates: {
      pseudocode:
        "ابدأ\nعيّن sum=0\nلـ i من 1 إلى 5:\n sum=sum+i\nاطبع sum\nانتهى",
    },
  },
  {
    id: 2,
    question: "ارسم مخططاً انسيابياً للتحقق إذا كان الرقم زوجي",
    hint: "ابدأ بـ 'ابدأ' ثم أدخل الرقم، استخدم شرط n%2==0",
    type: "flowchart",
    templates: {
      flowchart: [
        "start",
        "input",
        "decision",
        "print_even",
        "print_odd",
        "end",
      ],
    },
  },
];

// Simple validators
const SolutionValidator = {
  validatePseudocode: (solution) => ({
    isValid: solution.length > 0,
    score: 100,
  }),
  validateFlowchart: (drawingData) => ({ isValid: !!drawingData, score: 100 }),
};

// Editors
const PseudocodeEditor = ({ code, onCodeChange, template }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
  >
    <textarea
      className="w-full p-3 rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/30 backdrop-blur-sm font-mono"
      rows={10}
      value={code}
      onChange={(e) => onCodeChange(e.target.value)}
      placeholder={template}
    />
  </motion.div>
);

const DrawingCanvas = ({ onDrawingChange }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative w-full flex flex-col items-center"
  >
    <motion.canvas
      width={Math.min(window.innerWidth * 0.95, 800)}
      height={Math.min(window.innerHeight * 0.5, 500)}
      className="border-2 border-indigo-300 rounded-2xl mt-4 shadow-lg touch-pan-y"
    />
    <Button
      variant="contained"
      color="error"
      className="mt-3 px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      مسح الكل
    </Button>
  </motion.div>
);

function Puzzle() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userSolution, setUserSolution] = useState("");
  const [drawingData, setDrawingData] = useState("");
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [score, setScore] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [darkMode, setDarkMode] = useState(false);

  const currentLevelData = levels[currentLevel];

  const validateSolution = () => {
    let result;
    if (currentLevelData.type === "pseudocode")
      result = SolutionValidator.validatePseudocode(userSolution);
    else result = SolutionValidator.validateFlowchart(drawingData);

    setCompleted(result.isValid);
    setScore(result.score);
    setFeedback(
      result.isValid
        ? `🎉 ممتاز! النقاط: ${result.score}/100`
        : "💡 هناك بعض المشاكل في الحل"
    );

    // Play sound
    const audio = new Audio(
      result.isValid ? "/assets/sound/correct.mp3" : "/assets/sound/lose.mp3"
    );
    audio.play();
  };

  const handleNext = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setUserSolution("");
      setDrawingData("");
      setCompleted(false);
      setFeedback("");
      setScore(0);
    } else {
      setSnackbar({
        open: true,
        message: "🎉 لقد أكملت اللعبة!",
        severity: "success",
      });
    }
  };

  const particlesInit = async (main) => await loadFull(main);

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-200 via-blue-100 to-teal-200"
      } min-h-screen p-6 relative overflow-hidden`}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: darkMode ? "#ffffff" : "#4f46e5" },
            shape: { type: ["circle", "triangle", "square"] },
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 6 } },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              outModes: "out",
            },
          },
        }}
      />

      {/* Header */}
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h3" className="font-extrabold drop-shadow-lg">
          🎮 محرر البرمجة التفاعلي
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="الوضع الليلي"
        />
      </Box>

      {/* Level Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card className="mb-6 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
          <CardContent>
            <Typography variant="h5" className="mb-4 text-center font-bold">
              {currentLevelData.question}
            </Typography>
            <Typography
              variant="body1"
              className="text-center text-indigo-700/80"
            >
              💡 تلميح: {currentLevelData.hint}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs */}
      <Box className="mb-4">
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          centered
          TabIndicatorProps={{
            style: { backgroundColor: "#4f46e5", height: 4, borderRadius: 4 },
          }}
        >
          <Tab icon={<Code />} label="محرر الكود الزائف" />
          <Tab icon={<ShapeLine />} label="رسم المخطط الانسيابي" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <PseudocodeEditor
          code={userSolution}
          onCodeChange={setUserSolution}
          template={currentLevelData.templates.pseudocode}
        />
      )}
      {activeTab === 1 && <DrawingCanvas onDrawingChange={setDrawingData} />}

      {/* Score Progress */}
      <Box className="mt-4 mb-4 w-full">
        <LinearProgress
          variant="determinate"
          value={score}
          sx={{
            height: 15,
            borderRadius: 10,
            backgroundColor: "#ffffff50",
            "& .MuiLinearProgress-bar": {
              borderRadius: 10,
              background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
            },
          }}
        />
      </Box>

      {/* Feedback & Next */}
      {feedback && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`mt-4 p-4 rounded-xl shadow-lg ${
            completed
              ? "bg-green-100/80 text-green-800"
              : "bg-yellow-100/80 text-yellow-800"
          }`}
        >
          <Typography className="font-semibold">{feedback}</Typography>
        </motion.div>
      )}

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          color="success"
          className="mt-6 py-4 text-lg font-bold shadow-xl w-full"
          onClick={handleNext}
        >
          {currentLevel < levels.length - 1
            ? "المستوى التالي 🎯"
            : "إنهاء اللعبة 🏆"}
        </Button>
      </motion.div>

      {/* Confetti */}
      {completed && <Confetti numberOfPieces={400} recycle={false} />}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Puzzle;
