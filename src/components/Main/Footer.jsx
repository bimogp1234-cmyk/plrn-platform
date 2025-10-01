import { useEffect, useRef, useState } from "react";
import "@fontsource/tajawal";
import Bubbles from "../Bubbles/Bubbles";
export default function ContactUs() {
  const socialLinks = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      url: "https://wa.me/+249 99 792 2457",
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

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
    <footer
      ref={sectionRef}
      className={`relative w-full bg-gradient-to-b from-gray-50 to-gray-100 font-tajawal overflow-hidden py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* معلومات المنصة */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-black">
            <span className="inline-block animate-bounce-slow">
              بلــــــيرن
            </span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الالعاب مصممة لتنمية
            مهاراتك بطريقة إبداعية.
          </p>
          <div className="flex space-x-6 mt-4">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-500 hover:scale-125 hover:-translate-y-1 animate-icon-bounce"
              >
                <img src={item.icon} alt={item.alt} className="w-12 h-12" />
              </a>
            ))}
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">روابط سريعة</h3>
          <ul className="space-y-2 text-gray-700">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* البرامج التعليمية */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">
            البرامج التعليمية
          </h3>
          <ul className="space-y-2 text-gray-700">
            {programLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="relative inline-block px-2 py-1 hover:text-green-500 transition-colors before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-green-500 before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* أسفل الصفحة */}
      <div className="mt-16 border-t border-gray-300 pt-6 text-center text-gray-600 space-y-2">
        <p className="text-lg font-semibold">24997922457+ | info@Plarn.com</p>
        <p>© 2025 بلــــــيرن. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#privacy" className="hover:text-green-500 transition-colors">
            سياسة الخصوصية
          </a>
        </div>
      </div>
      <Bubbles />
    </footer>
  );
}
