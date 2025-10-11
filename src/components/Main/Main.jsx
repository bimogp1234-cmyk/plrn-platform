import { useEffect, useRef, useState } from "react";
import styles from "./main.module.css";
import "@fontsource/tajawal";
import Bubbles from "../Bubbles/Bubbles";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutBlarn from "./AboutBlarn";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function ProgramsInteractive() {
  const programs = [
    {
      title: "الحاسوب",
      description:
        "نطلق في عالم التكنولوجيا مع مناهج الحاسوب المختلفة، واستمتع بتحديات تفاعلية تكسبك نقاطًا ومهارات أساسية تفتح لك أبواب المستقبل الرقمي.",
      icon: "https://img.icons8.com/?size=100&id=XKASq08BL6br&format=png&color=000000",
      gradient: styles.gradientYellow,
    },
    {
      title: "الإسعافات الأولية",
      description:
        "استعد لتحديات الإسعافات الأولية وتعلّم مهارات الحياة الأساسية، اكسب نقاطك مع كل إنقاذ وكن البطل القادر على التعامل مع أي موقف طارئ بثقة.",
      icon: "https://img.icons8.com/?size=100&id=kP6pGQWbmasY&format=png&color=000000",
      gradient: styles.gradientGreen,
    },
    {
      title: "الرياضيات",
      description:
        "اكتشف مغامرة الأرقام والمنطق! حل الألغاز واكسب نقاطًا بينما تتعلّم بطريقة ممتعة تجعل كل عملية حسابية رحلة شيقة.",
      icon: "https://img.icons8.com/?size=100&id=80258&format=png&color=000000",
      gradient: styles.gradientBlue,
    },
    {
      title: "الفيزياء",
      description:
        "استكشف أسرار الكون من خلال تجارب علمية تفاعلية، أكسب نقاطًا مع كل تجربة واكتشف روعة العلوم في حياتك اليومية بأسلوب ممتع ومشوق.",
      icon: "https://img.icons8.com/?size=100&id=RPHZmB5ERyjp&format=png&color=000000",
      gradient: styles.gradientPink,
    },
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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <main className={styles.container}>
        <section id="m" ref={sectionRef} className={styles.section}>
          <div
            className={`${styles.header} ${
              visible ? styles.sectionVisible : styles.sectionHidden
            }`}
          >
            <h1 className={styles.title}>
              برامجنا التعليمية <div className={styles.bounceText}>الممتعة</div>
            </h1>
            <p className={styles.subtitle}>
              برامجنا التعليمية مصممة لتجمع بين الفائدة والمتعة، حيث نقدم محتوى
              متنوع يغطي مختلف المراحل الدراسية.
            </p>
          </div>

          <div
            className={`${styles.cardGrid} ${
              visible ? styles.sectionVisible : styles.sectionHidden
            }`}
          >
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${styles.card} ${program.gradient}`}
                style={{
                  animation: visible
                    ? `floatCard ${
                        2 + index * 0.5
                      }s ease-in-out infinite alternate`
                    : "none",
                }}
              >
                <img
                  src={program.icon}
                  alt={program.title}
                  className={styles.cardIcon}
                />
                <h2 className={styles.cardTitle}>{program.title}</h2>
                <p className={styles.cardDescription}>{program.description}</p>
                <a href="#" className={styles.bounceButton}>
                  ابدأ اللعب
                </a>
              </div>
            ))}
          </div>
        </section>

        <Bubbles />
        <section id="about">
          <AboutBlarn />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
}
