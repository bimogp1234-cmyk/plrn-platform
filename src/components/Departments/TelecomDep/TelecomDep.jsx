import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { ArrowBack, Book, Campaign } from "@mui/icons-material";
import UnitsLessons from "../../UnitsLessons/UnitsLessons";

export default function TelecomDep() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, darkMode } = location.state || {};

  const name = userData?.fullName || "مستخدم غير معروف";
  const photo =
    userData?.photoURL || "https://placehold.co/100x100/10b981/ffffff?text=U";

  // --- Book: كتاب تكنولوجيا الاتصالات - ثالث متوسط (ملف محتوى افتراضي)
  const units = [
    {
      id: 0,
      label: "الوحدة الأولى: مقدمة في الاتصالات",
      percentage: 0,
      lessons: [
        {
          id: "t0l1",
          title: "مفهوم الاتصالات وأنواعها",
          emoji: "📡",
          description: "مقدمة عن نظم الاتصالات وأنواعها",
          gradient: "from-green-200 to-green-400",
        },
        {
          id: "t0l2",
          title: "مكونات النظام الاتصالي",
          emoji: "🔌",
          description: "المرسل والمستقبل والوسط الناقل",
          gradient: "from-blue-200 to-blue-400",
        },
        {
          id: "t0l3",
          title: "إجراءات السلامة الأساسية",
          emoji: "🛡️",
          description: "قواعد أمن وسلامة العمل في ميدان الاتصالات",
          gradient: "from-amber-200 to-amber-400",
        },
      ],
    },
    {
      id: 1,
      label: "الوحدة الثانية: الإشارات والموجات",
      percentage: 0,
      lessons: [
        {
          id: "t1l1",
          title: "الاشارة التماثلية والرقمية",
          emoji: "🔁",
          description: "فروق الإشارتين وتطبيقاتهما",
          gradient: "from-purple-200 to-purple-400",
        },
        {
          id: "t1l2",
          title: "التردد والطول الموجي",
          emoji: "🌊",
          description: "أساسيات الطيف والتردد",
          gradient: "from-sky-200 to-sky-400",
        },
      ],
    },
    {
      id: 2,
      label: "الوحدة الثالثة: الشبكات والربط",
      percentage: 0,
      lessons: [
        {
          id: "t2l1",
          title: "شبكات LAN و WAN",
          emoji: "🖧",
          description: "مفاهيم الأنواع وطرق الربط",
          gradient: "from-indigo-200 to-indigo-400",
        },
        {
          id: "t2l2",
          title: "مفاهيم التوجيه والتبديل",
          emoji: "🛣️",
          description: "مبادئ الراوتر والسويتش",
          gradient: "from-pink-200 to-pink-400",
        },
        {
          id: "t2l3",
          title: "الكابلات والوسائط",
          emoji: "🔗",
          description: "أنواع الكابلات والوسط الناقل",
          gradient: "from-red-200 to-rose-400",
        },
      ],
    },
    {
      id: 3,
      label: "الوحدة الرابعة: تطبيقات الاتصالات",
      percentage: 0,
      lessons: [
        {
          id: "t3l1",
          title: "الاتصالات اللاسلكية والخلوية",
          emoji: "📶",
          description: "مقدمة عن الشبكات الخلوية",
          gradient: "from-green-200 to-cyan-400",
        },
        {
          id: "t3l2",
          title: "تطبيقات الإنترنت في الاتصالات",
          emoji: "🌐",
          description: "خدمات VoIP وتطبيقاتها",
          gradient: "from-yellow-200 to-amber-400",
        },
      ],
    },
  ];

  // Local completed map (non-persistent). In your app this should connect to the central progress handlers.
  const [completedMap, setCompletedMap] = useState({});

  const isLessonCompleted = (lessonId) => !!completedMap[lessonId];

  const markLessonCompleted = (lessonId, unitId) => {
    setCompletedMap((s) => ({ ...s, [lessonId]: true }));
  };

  const handleOpen = (path, unitId, gameId, lessonId) => {
    // Navigate to a lesson route or open an inline viewer. We send state so Main routes can reuse it.
    const state = { userData, darkMode, unitId, lessonId };
    navigate(`/${path}`, { state });
  };

  return (
    <div
      className={`min-h-screen font-[Tajawal] ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
      } flex flex-col items-center py-6 px-4`}
      dir="rtl"
    >
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
            قسم تكنولوجيا الاتصالات
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">{name}</span>
          <Avatar src={photo} alt={name} />
        </div>
      </div>

      <div
        className={`w-full max-w-5xl rounded-3xl shadow-2xl p-6 text-center mb-6 ${
          darkMode ? "bg-gray-800/80" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-extrabold mt-4 text-green-400">
          كتاب: تكنولوجيا الاتصالات — ثالث متوسط
        </h1>
        <p className="mt-2 opacity-80">
          محتوى مبسّط للوحدات والدروس يمكن ربطه بنظام التقدّم لحفظ وإظهار نتيجة
          المتعلم.
        </p>
      </div>

      <div className="w-full max-w-5xl grid gap-6">
        {units.map((unit) => (
          <UnitsLessons
            key={unit.id}
            unit={unit}
            lessons={unit.lessons}
            isUnlocked={true}
            markLessonCompleted={markLessonCompleted}
            handleOpen={handleOpen}
            isLessonCompleted={isLessonCompleted}
            darkMode={darkMode}
          />
        ))}
      </div>

      <footer
        className={`w-full mt-12 p-6 text-center rounded-t-3xl shadow-inner ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-green-100 text-gray-700"
        }`}
      >
        © 2025 منصة بليرن التعليمية — محتوى افتراضي مبني على الكتاب المطلوب.
      </footer>
    </div>
  );
}
