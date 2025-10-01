import { useEffect, useState, useRef } from "react";
import { auth, db } from "../../FireBaseDatabase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import "@fontsource/tajawal";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Snackbar,
  Alert,
  Fade,
  Paper,
} from "@mui/material";
import { Brightness4, Logout, Notifications } from "@mui/icons-material";

// Bubble background
const Bubbles = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full opacity-30 animate-pulse" />
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-ping" />
  </div>
);

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [toasts, setToasts] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const sectionRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "صباح الخير";
    if (hour < 18) return "مساء الخير";
    return "مساء النور";
  };
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      window.location.href = "/login";
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, "users", currentUser.uid),
      (docSnap) => {
        setUserData(docSnap.exists() ? docSnap.data() : null);
        setLoading(false);
      }
    );

    const timer = setTimeout(() => setShowWelcome(false), 4000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      unsubscribe();
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      showToast("تم تسجيل الخروج بنجاح!", "success");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    });
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const games = [
    {
      title: "لعبة الحروف",
      icon: "🔤",
      description: "تعلم الحروف العربية بطريقة ممتعة وتفاعلية.",
    },
    {
      title: "لعبة الألوان",
      icon: "🎨",
      description: "استكشاف الألوان من خلال التحديات البصرية.",
    },
    {
      title: "لعبة الأشكال",
      icon: "🟠",
      description: "تمييز الأشكال الهندسية وتطوير المهارات البصرية.",
    },
    {
      title: "لعبة الأرقام",
      icon: "🔢",
      description: "تعلم الأرقام العربية من خلال اللعب.",
    },
    {
      title: "لعبة الحيوانات",
      icon: "🐘",
      description: "تعرف على الحيوانات وأصواتها بطريقة ممتعة.",
    },
    {
      title: "لعبة الفواكه",
      icon: "🍎",
      description: "تمييز الفواكه وتعلم أسمائها.",
    },
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "البرامج التعليمية", href: "#programs" },
    { name: "عن المنصة", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  const programLinks = [
    { name: "الحاسوب", href: "#arabic" },
    { name: "الإسعافات الأولية", href: "#science" },
    { name: "الرياضيات", href: "#math" },
    { name: "الفيزياء", href: "#english" },
  ];

  const socialLinks = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      url: "https://wa.me/+249997922457",
      alt: "WhatsApp",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
      url: "https://t.me/Mohamed_albasher",
      alt: "Telegram",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      url: "https://facebook.com",
      alt: "Facebook",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
      url: "mailto:info@Plarn.com",
      alt: "Email",
    },
  ];
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 font-[Tajawal] bg-gray-900">
        جاري تحميل البيانات...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen font-[Tajawal] flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      }`}
      dir="rtl"
      lang="ar"
    >
      {/* Navbar */}
      <AppBar
        position="static"
        className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
      >
        <Toolbar className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-green-400">🌟</span>
            <span className="text-lg font-bold text-green-500">
              منصة الألعاب
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconButton onClick={toggleTheme} color="inherit">
              <Brightness4 className="text-blue-400" />
            </IconButton>
            <IconButton onClick={handleLogout} color="inherit">
              <Logout className="text-red-400" />
            </IconButton>
          </div>
          <div className="flex items-center gap-2">
            <IconButton color="inherit">
              <Notifications className="text-yellow-400" />
            </IconButton>
            <Avatar src={userData?.photoURL} />
            <span className="font-semibold">
              {userData?.fullName || "مستخدم"}
            </span>
          </div>
        </Toolbar>
      </AppBar>

      {/* Welcome Banner */}
      <Fade in={showWelcome} timeout={1000}>
        <div className="w-full py-4 text-center text-xl font-bold text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
          {getGreeting()} 👋 {userData?.fullName || "مستخدم"}!
        </div>
      </Fade>
      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-green-400">
          الألعاب المتاحة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <Paper
              key={i}
              elevation={4}
              className={`rounded-xl p-6 transition-all hover:scale-[1.02] ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-700 text-white"
                  : "bg-gradient-to-br from-white to-green-100 text-gray-800"
              }`}
            >
              <div className="text-4xl mb-4">{game.icon}</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">
                {game.title}
              </h3>
              <p className="text-sm">{game.description}</p>
            </Paper>
          ))}
        </div>
      </main>

      {/* Toast Notifications */}
      <Snackbar
        open={toasts.length > 0}
        autoHideDuration={3000}
        onClose={() => removeToast(toasts[0].id)}
      >
        <Alert severity={toasts[0]?.type || "success"}>
          {toasts[0]?.message}
        </Alert>
      </Snackbar>
      {/* Footer */}
      <footer
        ref={sectionRef}
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
        {/* Bubble background */}
        <Bubbles />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Platform Info */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-green-500">
              <span className="inline-block animate-bounce-slow">
                بلــــــيرن
              </span>
            </h2>
            <p className="mb-6 leading-relaxed text-base">
              منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة
              لتنمية مهاراتك بطريقة إبداعية.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition duration-500 hover:scale-110 hover:-translate-y-1 animate-icon-bounce"
                >
                  <img src={item.icon} alt={item.alt} className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-500">
              روابط سريعة
            </h3>
            <ul className="space-y-3 text-base">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="relative inline-block px-2 py-1 hover:text-green-400 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-500">
              البرامج التعليمية
            </h3>
            <ul className="space-y-3 text-base">
              {programLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="relative inline-block px-2 py-1 hover:text-green-400 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-400 before:transition-all hover:before:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-center space-y-2 text-sm">
          <p className="text-base font-semibold">
            +24997922457 | info@Plarn.com
          </p>
          <p>© 2025 بلــــــيرن. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a
              href="#privacy"
              className="hover:text-green-400 transition-colors"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} // End of Dashboard component
