import { useEffect, useRef, useState } from "react";
import "@fontsource/tajawal";
import Bubbles from "../Bubbles/Bubbles";

export default function AboutBulbul() {
  const features = [
    {
      title: "تعليم تفاعلي ممتع",
      description:
        "ألعاب تعليمية ودروس تفاعلية تحول التعلم إلى مغامرة مشوقة تثري معارف الطفل",
      icon: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      circle: "bg-yellow-200",
    },
    {
      title: "متابعة أدائك ",
      description: "لوحة تحكم ذكية تمكنك من متابعة تقدمك بدقة وسهولة",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
      circle: "bg-green-200",
    },
    {
      title: "مناهج سودانية متكاملة",
      description: "محتوى تعليمي عالي الجودة مصمم وفق أحدث المناهج السودانية",
      icon: "https://img.icons8.com/?size=100&id=9Cnmfi1SKARM&format=png&color=000000",
      circle: "bg-blue-200",
    },
    {
      title: "بيئة آمنة ومحمية",
      description: "منصة خالية من المشتتات والإعلانات تضمن تجربة تعليمية آمنة",
      icon: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",
      circle: "bg-pink-200",
    },
    {
      title: "تعلم في أي وقت",
      description: "دروس متاحة 24/7 تتناسب مع جدولكم اليومي ووتيرة تعلم سريعة",
      icon: "https://img.icons8.com/?size=100&id=hpibXgnvscd8&format=png&color=000000",
      circle: "bg-purple-200",
    },
    {
      title: "تنمية المهارات",
      description: "أنشطة تعزز التفكير النقدي والإبداعي وتطور مهاراتك ",
      icon: "https://img.icons8.com/?size=100&id=w8rjZ3tt8DQG&format=png&color=000000",
      circle: "bg-teal-200",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen py-20 px-6 bg-gray-50 font-tajawal relative overflow-hidden"
    >
      {/* العنوان */}
      <div
        className={`text-center mb-16 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          لماذا تعد{" "}
          <div className="text-yellow-400 drop-shadow-md animate-bounce">
            بلــــــيرن
          </div>{" "}
          الخيار الأمثل لتعلمك
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          نُقدّم تجربة تعليمية آمنة وممتعة، تمزج بين الإبداع والتكنولوجيا،
          لتنمية مهارات طفلك بطريقة تفاعلية ومشوقة.
        </p>
      </div>

      {/* البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl shadow-lg backdrop-blur-xl bg-white/40 border border-white/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 group
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
              animation: `floatCard ${
                2 + index * 0.5
              }s ease-in-out infinite alternate`,
            }}
          >
            <div
              className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-500 ${feature.circle}`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-gray-700 text-center leading-relaxed max-w-xs mx-auto">
              {feature.description}
            </p>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
          </div>
        ))}
      </div>

      {/* فقاعات خلفية */}
      <Bubbles />

      {/* Animations */}
      <style>
        {`
          @keyframes floatCard {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
          @keyframes floatBubble {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-25px) translateX(12px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
    </section>
  );
}
