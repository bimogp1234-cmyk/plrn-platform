import { useState, useEffect } from "react";
import heroVideo from "../../assets/image_hero/logo_v.mp4";
import "@fontsource/tajawal";
import "@fontsource/cairo-play";
import { useNavigate } from "react-router-dom";
import Bubbles from "../Bubbles/Bubbles";

export default function Hero() {
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setShowTitle(true), 2500));
    timers.push(setTimeout(() => setShowText(true), 2900));
    timers.push(setTimeout(() => setShowButtons(true), 3000));
    timers.push(setTimeout(() => setShowVideo(true), 300));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-tajawal flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-24 md:pt-0">
      {/* محتوى الصفحة */}
      <div className="relative z-10 flex flex-col items-center  text-center md:text-right max-w-xl md:max-w-2xl space-y-6 md:space-y-8 mt-12 md:mt-0">
        {/* العنوان */}
        <h1
          className={`text-3xl md:text-4xl font-extrabold transform transition-all duration-700 ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-green-500 inline-block animate-bounce">
            منصة تعليمية تفاعلية
          </div>
        </h1>

        {/* النص */}
        <p
          className={`text-lg md:text-1xl text-black leading-relaxed max-w-md md:max-w-lg transform transition-all duration-700 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } font-['Cairo_Play']`}
        >
          منصتنا التعليمية التفاعلية هي الأولى من نوعها في السودان، حيث نحوّل
          التعلم إلى تجربة مليئة بالمرح والإبداع. من خلال ألعاب تعليمية مبتكرة،
          نمنح الطلاب الفرصة لاكتشاف المعرفة بطريقة شيقة، تحفّز الفضول وتغذي حب
          الاستطلاع لديهم. هنا، تتحوّل المناهج إلى مغامرات تعليمية ممتعة، ونصنع
          جيلًا مبدعًا يتعلّم بشغف وينمو بوعي ومعرفة بأسلوب جديد كليًا.
        </p>

        {/* الأزرار */}
        <div
          className={`flex flex-col md:flex-row gap-4 md:gap-6 transform transition-all duration-700 ${
            showButtons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <a
            onClick={() => navigate("/login")}
            className="px-8 py-4 bg-green-500 text-white cursor-pointer font-bold rounded-full shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500 animate-bounce-slow text-center"
          >
            ابدأ اللعب الآن
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-center"
          >
            تعرف أكثر
          </a>
        </div>
      </div>

      {/* فيديو التوضيح */}
      <div
        className={`relative z-10 mb-12 md:mb-0 transform transition-all duration-700 ${
          showVideo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="w-72 sm:w-80 md:w-96 rounded-lg shadow-lg"
        />
      </div>
      <Bubbles />
    </section>
  );
}
