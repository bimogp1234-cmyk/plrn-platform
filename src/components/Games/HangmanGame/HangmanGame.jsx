import React, { useState, useRef } from "react";
import "@fontsource/tajawal";
import {
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { Brightness4, ArrowBack } from "@mui/icons-material";
import "./HangmanGame.css";

const QUIZ = [
  {
    hint: "ما هو الهدف الأساسي من دراسة المشكلات البرمجية؟",
    options: [
      "تطوير لغات برمجة جديدة",
      "فهم المشكلة وتحليلها لإيجاد الحل المناسب",
      "إنشاء ألعاب إلكترونية معقدة",
      "زيادة سرعة الحاسوب",
    ],
    answer: "فهم المشكلة وتحليلها لإيجاد الحل المناسب",
  },
  {
    hint: "ما هي الخوارزمية؟",
    options: [
      "لغة برمجة عالية المستوى",
      "مجموعة من الخطوات المنطقية والمتسلسلة لحل مشكلة معينة",
      "برنامج جاهز لتنفيذ مهمة محددة",
      "أداة لتصميم واجهات المستخدم",
    ],
    answer: "مجموعة من الخطوات المنطقية والمتسلسلة لحل مشكلة معينة",
  },
  {
    hint: "من هو العالم الذي نسبت إليه تسمية 'الخوارزمية'؟",
    options: [
      "أحمد بن موسى الخوارزمي",
      "ابن الهيثم",
      "جابر بن حيان",
      "البتاني",
    ],
    answer: "أحمد بن موسى الخوارزمي",
  },
  {
    hint: "ما هي إحدى خصائص الخوارزمية الجيدة؟",
    options: [
      "أن تكون مكتوبة بلغة برمجة معينة",
      "أن تكون غامضة وغير واضحة",
      "أن تكون عامة ويمكن تطبيقها على أي مدخلات",
      "أن تكون طويلة ومعقدة",
    ],
    answer: "أن تكون عامة ويمكن تطبيقها على أي مدخلات",
  },
  {
    hint: "ماذا يمثل رمز المستطيل في المخططات الانسيابية؟",
    options: [
      "البداية أو النهاية",
      "عملية معالجة البيانات",
      "إدخال أو إخراج البيانات",
      "قرار أو اختيار",
    ],
    answer: "عملية معالجة البيانات",
  },
  {
    hint: "ماذا يمثل رمز المعين (الماس) في المخططات الانسيابية؟",
    options: ["إدخال البيانات", "إخراج البيانات", "قرار أو اختيار", "نقطة ربط"],
    answer: "قرار أو اختيار",
  },
  {
    hint: "ما هو المخطط الانسيابي الذي يستخدم لتوضيح تسلسل الخطوات في حل مشكلة بسيطة؟",
    options: ["مخطط التفرع", "المخطط البسيط", "مخطط التكرار", "مخطط الربط"],
    answer: "المخطط البسيط",
  },
  {
    hint: "أي من أنواع المخططات الانسيابية يستخدم لتكرار مجموعة من التعليمات لعدد محدد من المرات؟",
    options: ["مخطط التفرع", "المخطط البسيط", "مخطط التكرار", "مخطط الربط"],
    answer: "مخطط التكرار",
  },
  {
    hint: "في مرحلة 'تحليل المشكلة' لحل مشكلة برمجية، ماذا نقصد بالمدخلات؟",
    options: [
      "النتائج النهائية للبرنامج",
      "العمليات التي يقوم بها الحاسوب",
      "البيانات الأساسية المتعلقة بالمشكلة",
      "الأخطاء البرمجية",
    ],
    answer: "البيانات الأساسية المتعلقة بالمشكلة",
  },
  {
    hint: "ما هو الغرض من مرحلة 'اختبار البرنامج' في دورة حياة تطوير البرنامج؟",
    options: [
      "كتابة الشفرة البرمجية",
      "تصميم واجهة المستخدم",
      "التأكد من أن البرنامج يحقق الهدف المطلوب وخالٍ من الأخطاء",
      "تحديد المشكلة البرمجية",
    ],
    answer: "التأكد من أن البرنامج يحقق الهدف المطلوب وخالٍ من الأخطاء",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HangmanGame() {
  const [darkMode, setDarkMode] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [finished, setFinished] = useState(false);
  const [dialog, setDialog] = useState({ open: false, type: "", text: "" });
  const [disabledOptions, setDisabledOptions] = useState(false);

  const successAudioRef = useRef(null);
  const wrongAudioRef = useRef(null);

  const playSuccess = () => {
    if (successAudioRef.current) {
      try {
        successAudioRef.current.currentTime = 0;
        successAudioRef.current.play();
      } catch {}
    }
  };

  const playWrong = () => {
    if (wrongAudioRef.current) {
      try {
        wrongAudioRef.current.currentTime = 0;
        wrongAudioRef.current.play();
      } catch {}
    }
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleChoose = (option) => {
    if (disabledOptions || finished) return;
    const q = QUIZ[questionIndex];
    if (option === q.answer) {
      playSuccess();
      setDialog({
        open: true,
        type: "success",
        text: "🎉 إجابة صحيحة! سيتم الانتقال للسؤال التالي تلقائيًا.",
      });
      setDisabledOptions(true);
      setTimeout(() => {
        if (questionIndex < QUIZ.length - 1) setQuestionIndex((i) => i + 1);
        else {
          setDialog({
            open: true,
            type: "finished",
            text: "🎯 لقد أجبت على جميع الأسئلة! ستبدأ اللعبة من جديد.",
          });
          setQuestionIndex(0);
        }
        setDisabledOptions(false);
      }, 1500);
    } else {
      playWrong();
      const nextWrong = Math.min(6, wrongAttempts + 1);
      setWrongAttempts(nextWrong);
      if (nextWrong >= 6) {
        setFinished(true);
        setDisabledOptions(true);
        setDialog({
          open: true,
          type: "fail",
          text: "☠️ تم شنق الرجل! حاول مرة أخرى.",
        });
      } else {
        setDialog({
          open: true,
          type: "error",
          text: `❌ إجابة خاطئة! المحاولة ${nextWrong} / 6`,
        });
      }
    }
  };

  const handleCloseDialog = () => {
    setDialog((d) => ({ ...d, open: false }));
    if (dialog.type === "fail") handleRestart();
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setWrongAttempts(0);
    setFinished(false);
    setDisabledOptions(false);
    setDialog({ open: false, type: "", text: "" });
  };

  const current = QUIZ[questionIndex];

  return (
    <div
      className={`min-h-screen font-[Tajawal] flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      }`}
      dir="rtl"
      lang="ar"
    >
      <audio
        ref={successAudioRef}
        src="/../../public/sound/correct.mp3"
        preload="auto"
      />
      <audio
        ref={wrongAudioRef}
        src="/../../public/sound/wrong.mp3"
        preload="auto"
      />

      <AppBar
        position="static"
        className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
      >
        <Toolbar className="flex justify-between items-center w-full relative">
          {/* Left: Go back + Platform name */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-500">
              بلــــــيرن
            </span>
          </div>

          {/* Center: Game Name */}
          <span className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-green-500">
            لعبة الرجل المشنوق
          </span>

          {/* Right: Theme toggle */}
          <div className="flex items-center gap-2 z-10">
            <IconButton
              onClick={() => window.history.back()}
              color="inherit"
              title="العودة"
            >
              <ArrowBack className="text-red-400" />
            </IconButton>
            <IconButton onClick={toggleTheme} color="inherit">
              <Brightness4 className="text-blue-400" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* === Main Section === */}
      <main className="flex-1 px-6 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          خمن الإجابة الصحيحة
        </h2>
        <p className="mb-8 text-gray-300">{current.hint}</p>
        {/* الرجل المشنوق */}
        <div
          className={`relative mx-auto mb-6 transition-all duration-500 ${
            darkMode ? "border-gray-500" : "border-gray-800"
          }`}
          style={{
            width: "200px",
            height: "260px",
            borderLeft: `5px solid ${darkMode ? "#888" : "#222"}`,
            borderTop: `5px solid ${darkMode ? "#888" : "#222"}`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: "3px",
              height: "50px",
              background: darkMode ? "#999" : "#000",
            }}
          />
          <div
            className="absolute top-[50px] left-1/2 transform -translate-x-1/2"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: `3px solid ${darkMode ? "#ccc" : "#111"}`,
              display: wrongAttempts >= 1 ? "block" : "none",
            }}
          />
          <div
            className="absolute top-[90px] left-1/2 transform -translate-x-1/2"
            style={{
              width: "3px",
              height: "60px",
              background: darkMode ? "#ccc" : "#111",
              display: wrongAttempts >= 2 ? "block" : "none",
            }}
          />
          <div
            className="absolute top-[100px] left-[calc(50%-25px)]"
            style={{
              width: "25px",
              height: "3px",
              background: darkMode ? "#ccc" : "#111",
              display: wrongAttempts >= 3 ? "block" : "none",
            }}
          />
          <div
            className="absolute top-[100px] left-1/2"
            style={{
              width: "25px",
              height: "3px",
              background: darkMode ? "#ccc" : "#111",
              display: wrongAttempts >= 4 ? "block" : "none",
            }}
          />
          <div
            className="absolute top-[150px] left-[calc(50%-20px)]"
            style={{
              width: "25px",
              height: "3px",
              transform: "rotate(-30deg)",
              background: darkMode ? "#ccc" : "#111",
              display: wrongAttempts >= 5 ? "block" : "none",
            }}
          />
          <div
            className="absolute top-[150px] left-1/2"
            style={{
              width: "25px",
              height: "3px",
              transform: "rotate(30deg)",
              background: darkMode ? "#ccc" : "#111",
              display: wrongAttempts >= 6 ? "block" : "none",
            }}
          />
        </div>

        {/* الخيارات */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {current.options.map((opt) => (
            <button
              key={opt}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                darkMode
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-300 hover:bg-green-400"
              }`}
              onClick={() => handleChoose(opt)}
              disabled={disabledOptions || finished}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="text-lg font-semibold">
          المحاولات: {wrongAttempts} / 6
        </div>
      </main>

      <footer
        className={`relative w-full overflow-hidden py-20 px-8 transition-all duration-700 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
        }`}
      >
        <div className="text-center text-sm mt-4">
          © 2025 بلــــــيرن. جميع الحقوق محفوظة.
        </div>
      </footer>

      {/* === Dialog === */}
      <Dialog
        open={dialog.open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        PaperProps={{
          style: {
            borderRadius: 16,
            padding: 8,
            minWidth: 320,
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          style={{
            textAlign: "center",
            fontWeight: 800,
            color:
              dialog.type === "success"
                ? "#064E3B"
                : dialog.type === "error" || dialog.type === "fail"
                ? "#7f1d1d"
                : "#0f172a",
            background:
              dialog.type === "success"
                ? "linear-gradient(90deg,#bbf7d0,#86efac)"
                : dialog.type === "error" || dialog.type === "fail"
                ? "linear-gradient(90deg,#fecaca,#fda4af)"
                : "linear-gradient(90deg,#e0f2fe,#bae6fd)",
            padding: "18px 12px",
          }}
        >
          {dialog.type === "success"
            ? "نجاح"
            : dialog.type === "error"
            ? "خطأ"
            : dialog.type === "fail"
            ? "تم الشنق!"
            : "معلومة"}
        </DialogTitle>
        <DialogContent
          style={{
            textAlign: "center",
            padding: "24px 18px",
            fontSize: 18,
            color: "#0f172a",
          }}
        >
          {dialog.text}
        </DialogContent>
        <DialogActions style={{ justifyContent: "center", paddingBottom: 18 }}>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            style={{
              background:
                dialog.type === "fail"
                  ? "linear-gradient(90deg,#dc2626,#fb7185)"
                  : "#3b82f6",
              color: "white",
              padding: "10px 24px",
              borderRadius: 12,
              fontWeight: 700,
            }}
          >
            {dialog.type === "fail" ? "أعد المحاولة" : "إغلاق"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
