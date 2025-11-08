import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import {
  ArrowBack,
  Gamepad,
  Campaign,
  CheckCircle,
  BugReport,
  Code,
  School,
  SportsEsports,
} from "@mui/icons-material";

export default function FirstAidDep() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userData, darkMode } = location.state || {};
  const name = userData?.fullName || "مستخدم غير معروف";
  const photo =
    userData?.avatarURL ||
    (userData?.avatarSeed
      ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
          userData.avatarSeed
        )}&size=100`
      : userData?.photoURL) ||
    "https://placehold.co/100x100/10b981/ffffff?text=U";

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const progressData = userData?.progress_array || [
    {
      label: "الوحدة الأولى: أساسيات الإسعافات الأولية",
      percentage: 40,
      color: "teal",
    },
    {
      label: "الوحدة الثانية: التعامل مع الجروح والإصابات",
      percentage: 10,
      color: "pink",
    },
    {
      label: "الوحدة الثالثة: الإنعاش القلبي والتنفس الاصطناعي",
      percentage: 0,
      color: "amber",
    },
    {
      label: "الوحدة الرابعة: إسعافات الحوادث المنزلية",
      percentage: 0,
      color: "sky",
    },
  ];

  const lessonsData = [
    "مقدمة في الإسعافات الأولية",
    "الجروح والنزيف",
    "الكسور والإصابات العظمية",
    "الإصابات الحرارية والحروق",
    "الإنعاش القلبي الرئوي CPR",
  ];

  const announcementsData = [
    {
      title: "ورشة عمل الإسعافات الأولية للطلاب",
      subtitle: "آخر موعد للتسجيل 15 نوفمبر.",
      color: "amber",
    },
    {
      title: "مسابقة تطبيق الإسعافات",
      subtitle: "تنطلق يوم الإثنين القادم.",
      color: "teal",
    },
  ];

  const gamesData = [
    {
      title: "تحدي الجروح",
      category: "الوحدة 2",
      level: "سهل",
      levelColor: "green",
      icon: <School />,
    },
    {
      title: "رحلة الإنعاش",
      category: "الوحدة 3",
      level: "متوسط",
      levelColor: "yellow",
      icon: <SportsEsports />,
    },
    {
      title: "مغامرة الحوادث المنزلية",
      category: "الوحدة 4",
      level: "صعب",
      levelColor: "red",
      icon: <Code />,
    },
    {
      title: "تحدي الإسعافات الأولية",
      category: "الوحدة 1",
      level: "متوسط",
      levelColor: "yellow",
      icon: <BugReport />,
    },
  ];

  const handleProgressUpdate = (index, increment) => {
    progressData[index].percentage = Math.min(
      100,
      progressData[index].percentage + increment
    );
  };

  return (
    <div
      className={`min-h-screen font-[Tajawal] ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      } flex flex-col items-center justify-start py-6 px-6`}
      dir="rtl"
    >
      {/* Navbar */}
      <div
        className={`w-full max-w-5xl flex justify-between items-center p-4 mb-6 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800/70" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-4 space-x-reverse">
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            startIcon={<ArrowBack />}
            className="bg-white text-green-600 hover:bg-green-100"
          >
            العودة
          </Button>
          <h1 className="text-2xl font-bold text-green-400">
            منصة بليرن التعليمية
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">{name}</span>
          <Avatar src={photo} alt={name} />
        </div>
      </div>

      {/* Greeting */}
      <div
        className={`w-full max-w-3xl rounded-3xl shadow-2xl p-8 text-center mb-6 transition-all duration-700 ${
          darkMode
            ? "bg-gray-800/80 border border-green-500/40"
            : "bg-white border border-green-400/40"
        }`}
      >
        <h1 className="text-3xl font-extrabold mt-4 text-green-400 drop-shadow-lg animate-fadeIn">
          مرحباً {name}! 👋
        </h1>
        <p className="text-lg mt-2 opacity-80">
          أهلاً بك في قسم الإسعافات الأولية التفاعلي — استعد لخوض تجربة تعليمية
          ممتعة!
        </p>
      </div>

      {/* Main content */}
      {showContent && (
        <div className="container max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Right: Progress & Announcements */}
          <div className="space-y-6">
            {/* Progress */}
            <div
              className={`rounded-2xl p-6 shadow-lg ${
                darkMode ? "bg-gray-800/60" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Gamepad className="ml-2 text-teal-500" /> تقدمي الدراسي
              </h3>
              {progressData.map((p, i) => (
                <div className="mb-4 group" key={i}>
                  <div className="flex justify-between mb-1 font-semibold">
                    {p.label} <span>{p.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        {
                          teal: "from-teal-400 to-cyan-500",
                          pink: "from-pink-500 to-rose-500",
                          amber: "from-amber-400 to-orange-500",
                          sky: "from-sky-400 to-blue-500",
                        }[p.color]
                      } rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`}
                      style={{ width: `${p.percentage}%` }}
                    >
                      {p.percentage >= 100 && (
                        <CheckCircle fontSize="small" className="text-white" />
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleProgressUpdate(i, 10)}
                    disabled={p.percentage >= 100}
                    variant="contained"
                    size="small"
                    className="mt-1"
                  >
                    +10%
                  </Button>
                </div>
              ))}
            </div>

            {/* Announcements */}
            <div
              className={`rounded-2xl p-6 shadow-lg ${
                darkMode
                  ? "bg-gray-800/70 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Campaign className="mr-2 text-amber-400" /> الإعلانات
              </h3>
              <ul className="space-y-3">
                {announcementsData.map((a, i) => (
                  <li
                    key={i}
                    className="relative p-3 rounded cursor-pointer overflow-hidden group border-l-4"
                    style={{
                      borderColor:
                        a.color === "amber"
                          ? darkMode
                            ? "#FBBF24"
                            : "#D97706"
                          : darkMode
                          ? "#14B8A6"
                          : "#059669",
                    }}
                  >
                    <div
                      className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ${
                        darkMode
                          ? "bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50"
                          : "bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100"
                      }`}
                    ></div>
                    <div className="relative z-10">
                      <p className="font-bold">{a.title}</p>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {a.subtitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left: Lessons & Games */}
          <div className="space-y-6 lg:col-span-2">
            {/* Lessons */}
            <div
              className={`rounded-2xl p-6 shadow-lg ${
                darkMode ? "bg-gray-800/60" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
                🧩 الدروس التفاعلية
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessonsData.map((lesson, i) => {
                  const gradients = [
                    "from-green-200 to-green-400",
                    "from-pink-200 to-pink-400",
                    "from-amber-200 to-amber-400",
                    "from-sky-200 to-sky-400",
                    "from-purple-200 to-purple-400",
                  ];
                  const emojis = ["🩹", "🏥", "🩺", "🔥", "💉"];
                  return (
                    <div
                      key={i}
                      className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.1] hover:rotate-2 cursor-pointer group"
                    >
                      <div
                        className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${
                          gradients[i % gradients.length]
                        }`}
                      ></div>
                      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-3xl mb-4 transition-transform duration-500 hover:animate-bounce">
                          {emojis[i % emojis.length]}
                        </span>
                        <span className="font-bold text-lg">{lesson}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Games */}
            <div
              className={`rounded-2xl p-6 shadow-lg ${
                darkMode ? "bg-gray-900/70" : "bg-white"
              }`}
            >
              <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
                🎮 الألعاب
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gamesData.map((g, i) => {
                  const gradientsLeft = [
                    "from-green-400 to-teal-600",
                    "from-yellow-400 to-amber-600",
                    "from-red-500 to-rose-600",
                    "from-pink-400 to-purple-600",
                  ];
                  const gradientsRight = [
                    "from-teal-600 to-green-400",
                    "from-amber-600 to-yellow-400",
                    "from-rose-600 to-red-500",
                    "from-purple-600 to-pink-400",
                  ];
                  return (
                    <div
                      key={i}
                      className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.05] cursor-pointer group"
                    >
                      {/* Left half */}
                      <div
                        className={`absolute inset-y-0 left-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-r ${
                          gradientsLeft[i % gradientsLeft.length]
                        }`}
                      ></div>
                      {/* Right half */}
                      <div
                        className={`absolute inset-y-0 right-0 w-0 group-hover:w-1/2 transition-all duration-700 bg-gradient-to-l ${
                          gradientsRight[i % gradientsRight.length]
                        }`}
                      ></div>
                      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-4xl mb-4">{g.icon}</span>
                        <h4
                          className={`font-bold text-lg ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {g.title}
                        </h4>
                        <p
                          className={`text-sm mt-1 ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {g.category}
                        </p>
                        <span className="mt-2 inline-block px-3 py-1 rounded-full bg-white/30 text-white font-semibold w-max">
                          {g.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`w-full mt-12 p-6 text-center rounded-t-3xl shadow-inner ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-green-100 text-gray-700"
        }`}
      >
        © 2025 منصة بليرن التعليمية. جميع الحقوق محفوظة.
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
