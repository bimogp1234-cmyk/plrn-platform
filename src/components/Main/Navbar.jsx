import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logoImg from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const loginControls = useAnimation();
  const [textColor, setTextColor] = useState("#E53E3E"); // اللون الأحمر الغامق الأساسي
  const navigate = useNavigate();
  const sections = [
    { id: "hero", name: "الرئيسية" },
    { id: "programs", name: "البرامج التعليمية" },
    { id: "about", name: "عن المنصة" },
    { id: "faq", name: "الأسئلة الشائعة" },
    { id: "footer", name: "تواصل معنا" },
  ];

  // تحديث القسم النشط أثناء التمرير
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // حركة تلقائية لزر تسجيل الدخول
  useEffect(() => {
    loginControls.start({
      rotate: [0, 15, -15, 0],
      y: [0, -10, 10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    });

    // تغيير لون النصوص باستمرار
    const interval = setInterval(() => {
      setTextColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);
    }, 2000);
    return () => clearInterval(interval);
  }, [loginControls]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-b-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <motion.div
          className="flex items-center cursor-pointer select-none mr-12"
          animate={{ x: [-5, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src={logoImg}
            alt="بليرن"
            className="w-50 h-16 mr-3 animate-float-slow"
          />
          {/* <motion.span
            className="text-4xl font-extrabold" 
            style={{ color: textColor }}
          >
            بلـــيرن
          </motion.span> */}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-Tajawal">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleClick(section.id)}
              whileHover={{ scale: 1.1, rotate: 2 }}
              style={{
                color: activeSection === section.id ? "#E53E3E" : "#4A5568",
              }}
              className="font-semibold text-lg cursor-pointer transition-colors duration-300"
            >
              {section.name}
            </motion.button>
          ))}

          {/* زر تسجيل الدخول متحرك تلقائي */}
          <motion.a
            onClick={() => navigate("/login")}
            animate={loginControls}
            whileHover={{ scale: 1.2, rotate: 0 }}
            className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r cursor-pointer from-green-400 via-blue-400 to-green-300 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          >
            تسجيل الدخول
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-white/80 backdrop-blur-md rounded-b-xl"
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleClick(section.id)}
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
                style={{ color: textColor }}
                className="font-semibold text-lg transition-colors duration-300"
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
