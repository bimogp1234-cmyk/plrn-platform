import React from "react";
import PropTypes from "prop-types";
import { MilitaryTech } from "@mui/icons-material";

function StatsCard({
  getTotalProgress,
  userScore,
  progressData,
  getGridClasses,
  isMobile,
  darkMode,
}) {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-blue-900/20"
          : "bg-gradient-to-br from-white to-blue-50"
      } border-2 ${darkMode ? "border-blue-500/30" : "border-blue-200"}`}
    >
      <h3
        className={`font-bold mb-4 flex items-center ${
          isMobile ? "text-lg" : "text-xl"
        }`}
      >
        <MilitaryTech className="mr-2 text-blue-400" />
        إحصائياتي
      </h3>
      <div className={`grid gap-3 sm:gap-4 ${getGridClasses("stats")}`}>
        <div
          className={`text-center p-3 sm:p-4 rounded-xl ${
            darkMode ? "bg-blue-500/20" : "bg-blue-100"
          }`}
        >
          <div
            className={`font-bold text-blue-400 ${
              isMobile ? "text-xl" : "text-2xl"
            }`}
          >
            {getTotalProgress()}%
          </div>
          <div className={isMobile ? "text-xs" : "text-sm"}>التقدم الكلي</div>
        </div>
        <div
          className={`text-center p-3 sm:p-4 rounded-xl ${
            darkMode ? "bg-green-500/20" : "bg-green-100"
          }`}
        >
          <div
            className={`font-bold text-green-400 ${
              isMobile ? "text-xl" : "text-2xl"
            }`}
          >
            {userScore}
          </div>
          <div className={isMobile ? "text-xs" : "text-sm"}>النقاط الكلية</div>
        </div>
        <div
          className={`text-center p-3 sm:p-4 rounded-xl ${
            darkMode ? "bg-purple-500/20" : "bg-purple-100"
          }`}
        >
          <div
            className={`font-bold text-purple-400 ${
              isMobile ? "text-xl" : "text-2xl"
            }`}
          >
            {progressData.filter((unit) => unit.completed).length}
          </div>
          <div className={isMobile ? "text-xs" : "text-sm"}>
            الوحدات المكتملة
          </div>
        </div>
        <div
          className={`text-center p-3 sm:p-4 rounded-xl ${
            darkMode ? "bg-amber-500/20" : "bg-amber-100"
          }`}
        >
          <div
            className={`font-bold text-amber-400 ${
              isMobile ? "text-xl" : "text-2xl"
            }`}
          >
            {progressData.reduce(
              (count, unit) => count + (unit.completedGames || 0),
              0
            )}
          </div>
          <div className={isMobile ? "text-xs" : "text-sm"}>
            الألعاب المكتملة
          </div>
        </div>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  getTotalProgress: PropTypes.func.isRequired,
  userScore: PropTypes.number.isRequired,
  progressData: PropTypes.array.isRequired,
  getGridClasses: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  darkMode: PropTypes.bool,
};

StatsCard.defaultProps = {
  isMobile: false,
  darkMode: false,
};

export default StatsCard;
