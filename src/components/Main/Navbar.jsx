import { useState, useEffect } from "react";
import logoImg from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBaseDatabase/firebase";
import { useUserData } from "../../contexts/UserDataContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          const triggerPoint = window.innerHeight / 2;
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Immediately set the active section on click
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg rounded-b-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer select-none mr-12">
          <img src={logoImg} alt="بليرن" className="w-50 h-16 mr-3" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-Tajawal">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              style={{
                color: activeSection === section.id ? "#E53E3E" : "#4A5568",
              }}
              className="font-semibold text-lg cursor-pointer transition-colors duration-300"
            >
              {section.name}
            </button>
          ))}

          {/* show user info when signed in, otherwise login button */}
          {(() => {
            try {
              const ud = useUserData();
              const current = ud?.user;
              const overall = ud?.overall;
              if (current) {
                return (
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-700">
                      <div className="font-semibold">
                        {current.displayName || ud?.profile?.name || "مستخدم"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {overall?.totalScore ?? overall?.totalXP ?? 0} نقاط
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        try {
                          await signOut(auth);
                          navigate("/");
                        } catch (err) {
                          console.error("Sign out failed:", err);
                          navigate("/");
                        }
                      }}
                      className="ml-6 px-4 py-2 rounded-full bg-red-400 text-white font-bold shadow hover:shadow-md transition-all"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                );
              }
            } catch (e) {
              // if context not available (e.g., during very early render), fall back to login button
            }

            return (
              <button
                onClick={() => navigate("/login")}
                className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-green-300 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                تسجيل الدخول
              </button>
            );
          })()}
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
        <div className="md:hidden bg-white/80 backdrop-blur-md rounded-b-xl">
          <div className="flex flex-col items-center gap-4 py-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                style={{
                  color: activeSection === section.id ? "#E53E3E" : "#4A5568",
                }}
                className="font-semibold text-lg transition-colors duration-300"
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
