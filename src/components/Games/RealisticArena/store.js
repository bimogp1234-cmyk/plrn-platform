import { create } from "zustand"; // ✅ صحيح
export const useGameStore = create((set) => ({
  score: 0,
  level: 1,
  targetsDestroyed: 0,
  currentQuestionIndex: 0,
  questions: [
    {
      text: "ما هو الشكل الذي يمثل بداية أو نهاية المخطط الانسيابي؟",
      correct: "oval",
    },
    {
      text: "ما هو الشكل الذي يمثل عملية أو خطوة تنفيذ؟",
      correct: "rectangle",
    },
    {
      text: "أي شكل يمثل شرط اتخاذ قرار؟",
      correct: "diamond",
    },
    {
      text: "أي شكل يمثل إدخال أو إخراج بيانات؟",
      correct: "parallelogram",
    },
    {
      text: "أي شكل يمثل قاعدة بيانات؟",
      correct: "cylinder",
    },
  ],
  setScore: (s) => set({ score: s }),
  incScore: (n = 1) => set((st) => ({ score: st.score + n })),
  nextQuestion: () =>
    set((st) => ({
      currentQuestionIndex:
        st.currentQuestionIndex + 1 < st.questions.length
          ? st.currentQuestionIndex + 1
          : 0,
    })),
  nextLevel: () =>
    set((st) => ({ level: Math.min(3, st.level + 1), targetsDestroyed: 0 })),
  reset: () =>
    set({ score: 0, level: 1, targetsDestroyed: 0, currentQuestionIndex: 0 }),
}));
