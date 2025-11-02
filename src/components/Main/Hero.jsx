import { useState, useEffect, useRef } from "react";
import heroVideo from "../../assets/image_hero/logo_v.mp4";
import "@fontsource/tajawal";
import "@fontsource/cairo-play";
import { useNavigate } from "react-router-dom";
import Bubbles from "../Bubbles/Bubbles";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(true);
  const [videoKey, setVideoKey] = useState(0); // force video replay
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Animate text/buttons after video ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.style.transition = "opacity 1.5s ease-in-out";
      videoRef.current.style.opacity = 0;
      setTimeout(() => setPlayVideo(false), 1500);

      // Smoothly show text content
      if (contentRef.current) {
        contentRef.current.style.transition =
          "opacity 1s ease-in-out, transform 1s ease-in-out";
        contentRef.current.style.opacity = 1;
        contentRef.current.style.transform = "translateY(0)";
      }
      setShowContent(true);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-tajawal flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12">
      {/* Background Video */}
      {playVideo && (
        <video
          key={videoKey}
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-[1500ms]"
        />
      )}

      {/* Text Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl px-4 md:px-0 space-y-6 md:space-y-8 opacity-0 transform translate-y-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          <span className="text-green-500 inline-block animate-bounce">
            منصة تعليمية تفاعلية
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Cairo_Play'] leading-relaxed text-black">
          منصتنا التعليمية التفاعلية هي الأولى من نوعها في السودان، حيث نحوّل
          التعلم إلى تجربة مليئة بالمرح والإبداع. من خلال ألعاب تعليمية مبتكرة،
          نمنح الطلاب الفرصة لاكتشاف المعرفة بطريقة شيقة، تحفّز الفضول وتغذي حب
          الاستطلاع لديهم. هنا، تتحوّل المناهج إلى مغامرات تعليمية ممتعة، ونصنع
          جيلًا مبدعًا يتعلّم بشغف وينمو بوعي ومعرفة بأسلوب جديد كليًا.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500"
          >
            ابدأ اللعب الآن
          </button>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-500"
          >
            تعرف أكثر
          </a>
        </div>
      </div>

      <Bubbles />
    </section>
  );
}
