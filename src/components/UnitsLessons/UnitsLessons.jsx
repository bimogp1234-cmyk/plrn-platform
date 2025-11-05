import React from "react";
import { Button, CheckCircle } from "@mui/material";
import { Lock } from "@mui/icons-material";

export default function UnitsLessons({
  unit,
  lessons = [],
  isUnlocked = true,
  markLessonCompleted = () => {},
  handleOpen = () => {},
  isLessonCompleted = () => false,
  darkMode = false,
  isMobile = false,
}) {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
        darkMode ? "bg-gray-800/60" : "bg-white"
      } ${!isUnlocked ? "opacity-60" : ""}`}
      dir="rtl"
    >
      <div className="flex items-center justify-between mb-4">
        <h2
          className={`font-bold text-green-400 ${
            isMobile ? "text-xl" : "text-2xl"
          }`}
        >
          {unit?.label}
        </h2>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-600">
            {unit?.percentage ?? 0}% مكتمل
          </span>
        </div>
      </div>

      <div
        className={`grid gap-4 sm:gap-6 ${
          isMobile ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {lessons.map((lesson, idx) => {
          const completed = isLessonCompleted(lesson.id);
          return (
            <div
              key={lesson.id || idx}
              className={`relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] cursor-pointer group ${
                !isUnlocked ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (!isUnlocked) return;
                // mark completed then open
                try {
                  markLessonCompleted(lesson.id, unit.id);
                } catch (err) {
                  console.error("markLessonCompleted error:", err);
                }
                handleOpen(
                  lesson.path || `lesson-${unit.id}-${idx}`,
                  unit.id,
                  null,
                  lesson.id
                );
              }}
            >
              {/* Animated Gradient */}
              <div
                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-gradient-to-br ${
                  lesson.gradient || "from-green-200 to-green-400"
                }`}
              ></div>

              {/* Completion Check */}
              {completed && (
                <div className="absolute top-2 right-2 z-20">
                  <CheckCircle className="text-green-500 text-2xl bg-white rounded-full" />
                </div>
              )}

              {/* Lock overlay */}
              {!isUnlocked && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                  <Lock className="text-white text-2xl sm:text-4xl" />
                </div>
              )}

              <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center min-h-[120px]">
                <div className="text-3xl mb-2">{lesson.emoji || "📘"}</div>
                <div className="font-bold">{lesson.title}</div>
                {lesson.description && (
                  <p className="mt-2 opacity-75 text-sm">
                    {lesson.description}
                  </p>
                )}
                <div className="mt-3">
                  <Button size="small" variant="contained" onClick={() => {}}>
                    افتح الدرس
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
