import { useState, useEffect } from "react";
import "@fontsource/tajawal";
import {
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { Brightness4, ArrowBack } from "@mui/icons-material";
import "./Memorygame.css";
import logoImg from "../../assets/logo/logo.png";

const images = [
  "begin.jpg",
  "end.jpg",
  "process.jpg",
  "in-out.jpg",
  "point.jpg",
  "arow.jpg",
  "decision.jpg",
];

export default function MemoryGame() {
  const [darkMode, setDarkMode] = useState(true);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [footerVisible, setFooterVisible] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    message: "",
    color: "green",
  });

  // 🎵 الصوتيات
  const correctSound = new Audio("/sound/correct.mp3");
  const wrongSound = new Audio("/sound/wrong.mp3");

  // 🔄 إعادة تشغيل اللعبة
  const resetGame = () => {
    const doubled = [...images, ...images];
    const shuffled = shuffle(doubled).map((img, index) => ({
      id: index,
      img,
      flipped: false,
    }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setDialog({ open: false, message: "", color: "green" });
  };

  useEffect(() => {
    resetGame();
    setTimeout(() => setFooterVisible(true), 500);
  }, []);

  // التعامل مع تطابق البطاقات
  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].img === cards[second].img) {
        correctSound.play();
        setMatched((prev) => [...prev, cards[first].img]);
        setFlipped([]);
      } else {
        wrongSound.play();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              flipped.includes(i) ? { ...card, flipped: false } : card
            )
          );
          setFlipped([]);
        }, 1000);
      }
    }
  }, [flipped, cards]);

  // عند انتهاء جميع الأزواج
  useEffect(() => {
    if (matched.length === images.length) {
      setDialog({
        open: true,
        message: "🏁 لقد انتهت اللعبة! أحسنت!",
        color: "blue",
      });
    }
  }, [matched]);

  const handleFlip = (index) => {
    if (flipped.length < 2 && !cards[index].flipped) {
      setCards((prev) =>
        prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
      );
      setFlipped((prev) => [...prev, index]);
    }
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleCloseDialog = () => {
    setDialog((prev) => ({ ...prev, open: false }));
  };

  // عدد الأعمدة والصفوف (لجعلها مربعة)
  const gridSize = Math.ceil(Math.sqrt(cards.length));

  return (
    <div
      className={`min-h-screen font-[Tajawal] flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      }`}
      dir="rtl"
      lang="ar"
    >
      {/* الهيدر */}
      <AppBar
        position="static"
        className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
      >
        <Toolbar className="relative flex items-center justify-between w-full">
          {/* Platform */}
          <div className="flex items-center gap-2 z-10">
            <img
              src={logoImg}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-bold text-green-500">
              بلــــــيرن
            </span>
          </div>

          {/* Game name - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
            <span className="text-xl font-bold text-green-400">
              لعبة الذاكرة
            </span>
          </div>

          {/* Buttons */}
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

      {/* محتوى اللعبة */}
      <main className="flex-1 px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-green-400">لعبة الذاكرة</h2>
        <p className="mb-6 text-gray-300">
          اضغط على أي بطاقة للكشف عن الصورة وحاول مطابقة البطاقات المتشابهة.
        </p>
        <div
          className="memory-game-blocks grid gap-4 mx-auto"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(80px, 1fr))`,
            gridTemplateRows: `repeat(${gridSize}, minmax(80px, 1fr))`,
            maxWidth: "600px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`game-block ${card.flipped ? "is-flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="face front">
                <img
                  src="../imgs/logo.jpg"
                  alt="Logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="face back">
                <img
                  src={`/imgs/${card.img}`}
                  alt={card.img}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* نافذة الرسائل */}
      <Dialog open={dialog.open} onClose={handleCloseDialog}>
        <DialogTitle
          style={{
            color:
              dialog.color === "green"
                ? "green"
                : dialog.color === "red"
                ? "red"
                : "blue",
          }}
        >
          {dialog.message}
        </DialogTitle>
        <DialogActions>
          {matched.length === images.length ? (
            <Button onClick={resetGame} color="primary" variant="contained">
              🔁 إعادة المحاولة
            </Button>
          ) : (
            <Button onClick={handleCloseDialog} color="primary">
              حسناً
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* الفوتر */}
      <footer
        className={`relative w-full overflow-hidden py-20 px-8 transition-all duration-700 ${
          footerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        } ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
        }`}
      >
        <div className="text-center text-sm mt-4">
          © 2025 بلــــــيرن. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}

// دالة خلط البطاقات
function shuffle(array) {
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
