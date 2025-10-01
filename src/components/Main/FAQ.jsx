import Bubbles from "../Bubbles/Bubbles";
import { useState, useRef, useEffect } from "react";

export default function FAQInteractive() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const questions = [
    {
      question: "ما هي الفئة العمرية المناسبة للمنصة؟",
      answer:
        "المنصة مناسبة لجميع الاعمار، حيث تم تصميم المحتوى بعناية ليناسب مختلف المراحل العمرية.",
    },
    {
      question: "كيف يمكنني متابعة تقدمي  التعليمي؟",
      answer:
        "نوفر لوحة تحكم ذكية  تمكنك من متابعة تقدمك  بسهولة، وعرض النتائج والتقارير الشهرية.",
    },
    {
      question: "كيف يمكنني كسب النقاط وتحقيق الإنجازات على المنصة؟",
      answer:
        "ستتمكن من اكتساب نقاط وإنجازات مع كل درس أو لعبة تكملها، مما يحفز التعلم ويجعل كل تجربة تعليمية ممتعة ومثيرة.",
    },

    {
      question: "هل المحتوى متوافق مع المناهج الدراسية؟",
      answer:
        "نعم، المحتوى التعليمي مصمم وفق المناهج الدراسية السودانية لدي وزارة التربية والتعليم لضمان الاستفادة القصوى وتحقيق التعلم الفعّال.",
    },
    {
      question: "هل كل محتوى المنصة حصري؟",
      answer:
        "نعم، جميع الألعاب والدروس التعليمية مصممة حصريًا لتقديم تجربة تفاعلية معتمدة علي الالعاب.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer لتفعيل ظهور القسم عند التمرير
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen py-16 px-6 bg-gray-50 font-tajawal relative overflow-hidden"
    >
      {/* العنوان */}
      <div
        className={`text-center mb-12 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-black">
          الأسئلة الشائعة
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          نعرف أنكم قد تتساءلون عن بعض التفاصيل، لذلك جمعنا أكثر الأسئلة تكرارًا
          هنا.
        </p>
      </div>

      {/* الأسئلة */}
      <div className="max-w-4xl mx-auto space-y-4 relative z-10">
        {questions.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`relative border border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform ${
                isOpen
                  ? "scale-105 shadow-2xl"
                  : "hover:scale-102 hover:shadow-xl"
              } ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              } transition-all duration-700 delay-${index * 100}`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white text-right text-black font-semibold text-lg md:text-xl focus:outline-none transition-all duration-300"
              >
                {q.question}
                <span
                  className={`ml-4 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  } inline-block`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 py-4 bg-gray-50 overflow-hidden transition-all duration-500`}
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(50px)",
                }}
              >
                <p className="text-gray-700 leading-relaxed">{q.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* فقاعات خلفية */}
      <Bubbles />
    </section>
  );
}
