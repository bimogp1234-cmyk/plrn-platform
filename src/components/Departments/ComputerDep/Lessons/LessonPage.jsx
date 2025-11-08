import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { unit0Lessons } from "./Unit0Lessons";
import { unit1Lessons } from "./Unit1Lessons";
import { unit2Lessons } from "./Unit2Lessons";
import { unit3Lessons } from "./Unit3Lessons";
import { Button } from "@mui/material";

const lessonsMap = {
  0: unit0Lessons,
  1: unit1Lessons,
  2: unit2Lessons,
  3: unit3Lessons,
};

export default function LessonPage() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const unitNum = Number(unitId);
  const unitLessons = lessonsMap[unitNum] || {};
  const lesson = unitLessons[lessonId];

  // Support passing state from MainComDep
  const state = location.state || {};

  // Auto-start interactive lesson: redirect to `/lesson` immediately so the
  // interactive view opens without requiring the user to click "ابدأ الدرس التفاعلي".
  React.useEffect(() => {
    if (lesson) {
      // forward state (userData, darkMode) and identify unit/lesson
      navigate("/lesson", {
        replace: true,
        state: { ...state, unitId: unitNum, lessonId },
      });
    }
  }, [lesson, navigate, state, unitNum, lessonId]);

  if (!lesson) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        dir="rtl"
      >
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-red-500">
            الدرس غير موجود
          </h2>
          <p className="mt-2 text-gray-600">
            لم نتمكن من العثور على هذا الدرس.
          </p>
          <div className="mt-4">
            <Button variant="contained" onClick={() => navigate(-1)}>
              العودة
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 font-[Tajawal] bg-green-50" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
          <div className="p-6 bg-gradient-to-br from-green-400 to-teal-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-extrabold text-3xl">{lesson.title}</h1>
                <p className="mt-1 opacity-90">الوحدة {unitNum + 1}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  className="bg-white/20 text-white"
                >
                  العودة
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate("/lesson", {
                      state: { ...state, unitId: unitNum, lessonId },
                    })
                  }
                >
                  ابدأ الدرس التفاعلي
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid gap-4">
              {lesson.content.map((block, idx) => (
                <div key={idx} className="p-4 rounded-xl shadow-sm bg-gray-50">
                  <h3 className="font-semibold mb-2 text-green-600">
                    {block.title}
                  </h3>

                  {block.type === "text" && (
                    <p className="whitespace-pre-line text-gray-700">
                      {block.content}
                    </p>
                  )}

                  {block.type === "list" && (
                    <ul className="list-disc list-inside text-gray-700">
                      {block.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  )}

                  {block.type === "definition" && (
                    <div className="text-gray-700">
                      {block.items.map((it, i) => (
                        <div key={i} className="mb-3">
                          <div className="font-bold">{it.term}</div>
                          <div className="mr-4">{it.definition}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(block.type === "example" ||
                    block.type === "comparison") && (
                    <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded">
                      {block.content}
                    </pre>
                  )}

                  {block.type === "code" && (
                    <pre className="whitespace-pre-wrap bg-gray-900 text-white p-3 rounded">
                      {block.content}
                    </pre>
                  )}

                  {block.type === "activity" && (
                    <div className="mt-3 p-3 bg-yellow-50 rounded">
                      <div className="font-semibold text-yellow-700">نشاط</div>
                      <div className="text-gray-700">{block.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
