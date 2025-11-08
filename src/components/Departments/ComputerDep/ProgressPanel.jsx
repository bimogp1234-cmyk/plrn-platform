import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import {
  Refresh,
  CheckCircle,
  Lock,
  LockOpen,
  Gamepad,
} from "@mui/icons-material";
import Leaderboard from "./../LeaderboardComp/Leaderboard";

function ProgressPanel({
  progressData,
  isMobile,
  isUnitUnlocked,
  resetProgress,
  darkMode,
  userData,
  userScore,
}) {
  return (
    <div className={`space-y-4 sm:space-y-6`}>
      <div
        className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
          darkMode ? "bg-gray-800/60" : "bg-white"
        }`}
      >
        <h3
          className={`font-bold mb-4 flex items-center ${
            isMobile ? "text-lg" : "text-xl"
          }`}
        >
          <Gamepad className="ml-2 text-teal-500" /> تقدمي الدراسي
        </h3>

        {progressData.map((unit) => (
          <div className="mb-6 group" key={unit.id}>
            <div
              className={`flex justify-between mb-2 font-semibold ${
                isMobile ? "text-base" : "text-lg"
              }`}
            >
              <div className="flex items-center">
                {unit.completed ? (
                  <CheckCircle
                    className="text-green-500 mr-2"
                    fontSize={isMobile ? "medium" : "large"}
                  />
                ) : isUnitUnlocked(unit.id) ? (
                  <LockOpen
                    className="text-blue-500 mr-2"
                    fontSize={isMobile ? "medium" : "large"}
                  />
                ) : (
                  <Lock
                    className="text-gray-500 mr-2"
                    fontSize={isMobile ? "medium" : "large"}
                  />
                )}
                <span className={isMobile ? "text-sm" : "text-base"}>
                  {isMobile ? `الوحدة ${unit.id + 1}` : unit.label}
                </span>
              </div>
              <span className={isMobile ? "text-base" : "text-lg"}>
                {unit.percentage}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 sm:h-6 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full bg-gradient-to-r ${
                  {
                    teal: "from-teal-400 to-cyan-500",
                    pink: "from-pink-500 to-rose-500",
                    amber: "from-amber-400 to-orange-500",
                    sky: "from-sky-400 to-blue-500",
                  }[unit.color]
                } rounded-full transition-all duration-1000 flex justify-center items-center group-hover:scale-x-[1.05]`}
                style={{ width: `${unit.percentage}%` }}
              >
                {unit.percentage >= 100 && (
                  <CheckCircle fontSize="small" className="text-white" />
                )}
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>
                {unit.completedGames || 0} / {unit.totalGames} ألعاب -{" "}
                {unit.completedLessons || 0} / {unit.totalLessons} دروس
              </span>
              <span>
                {unit.totalScore || 0} / {unit.maxPossibleScore || 0} نقطة
              </span>
            </div>

            {!isUnitUnlocked(unit.id) && unit.id > 0 && (
              <p
                className={`text-gray-500 mt-2 ${
                  isMobile ? "text-xs" : "text-sm"
                }`}
              >
                تحتاج إكمال الوحدة {unit.id} أولاً
              </p>
            )}
          </div>
        ))}

        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
          <Button
            onClick={resetProgress}
            variant="outlined"
            color="warning"
            startIcon={<Refresh />}
            fullWidth
            size={isMobile ? "medium" : "large"}
          >
            إعادة تعيين التقدم
          </Button>
        </div>
      </div>

      <div
        className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
          darkMode ? "bg-gray-800/60" : "bg-white"
        }`}
      >
        <Leaderboard
          darkMode={darkMode}
          userId={userData?.uid}
          userScore={userScore}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

ProgressPanel.propTypes = {
  progressData: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
  isUnitUnlocked: PropTypes.func.isRequired,
  resetProgress: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
  userData: PropTypes.object,
  userScore: PropTypes.number,
};

ProgressPanel.defaultProps = {
  isMobile: false,
  darkMode: false,
  userData: null,
  userScore: 0,
};

export default ProgressPanel;
