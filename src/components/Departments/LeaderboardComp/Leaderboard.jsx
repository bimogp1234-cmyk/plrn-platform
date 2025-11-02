import React, { useState, useEffect } from "react";
import {
  Card,
  Avatar,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  EmojiEvents,
  MilitaryTech,
  Whatshot,
  Person,
  Refresh,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./../../../FireBaseDatabase/firebase";
import "@fontsource/tajawal";

export default function Leaderboard({ darkMode, userId, userScore, isMobile }) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadLeaderboardData();
  }, [userId]);

  const loadLeaderboardData = async () => {
    setRefreshing(true);
    try {
      const usersQuery = query(
        collection(db, "users"),
        orderBy("totalScore", "desc"),
        limit(10)
      );

      const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
        const leaderboard = [];
        snapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.totalScore > 0) {
            leaderboard.push({
              id: doc.id,
              rank: leaderboard.length + 1,
              ...userData,
            });
          }
        });

        setLeaderboardData(leaderboard);

        if (userId) {
          const userDocRef = doc(db, "users", userId);
          getDoc(userDocRef).then((userSnap) => {
            if (userSnap.exists()) {
              const userData = userSnap.data();
              const userRankIndex = leaderboard.findIndex(
                (user) => user.id === userId
              );
              setUserRank(userRankIndex !== -1 ? userRankIndex + 1 : null);
            }
          });
        }

        setLoading(false);
        setRefreshing(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error loading leaderboard:", error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-amber-500";
      case 2:
        return "from-gray-400 to-gray-500";
      case 3:
        return "from-amber-600 to-orange-500";
      default:
        return "from-blue-400 to-blue-600";
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <EmojiEvents className="text-yellow-400" />;
      case 2:
        return <MilitaryTech className="text-gray-400" />;
      case 3:
        return <MilitaryTech className="text-amber-600" />;
      default:
        return <Whatshot className="text-blue-400" />;
    }
  };

  const getMedal = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  const refreshLeaderboard = () => {
    loadLeaderboardData();
  };

  if (loading) {
    return (
      <Card
        className={`p-4 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-2xl shadow-lg`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`font-bold flex items-center ${
              isMobile ? "text-lg" : "text-xl"
            } ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            <EmojiEvents className="mr-2 text-yellow-500" />
            لوحة المتصدرين
          </h3>
        </div>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
          <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            جاري تحميل البيانات...
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`p-4 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-2xl shadow-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-bold flex items-center ${
            isMobile ? "text-lg" : "text-xl"
          } ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          <EmojiEvents className="mr-2 text-yellow-500" />
          لوحة المتصدرين
        </h3>
        <Tooltip title="تحديث">
          <IconButton
            onClick={refreshLeaderboard}
            disabled={refreshing}
            className={refreshing ? "animate-spin" : ""}
          >
            <Refresh className={darkMode ? "text-gray-400" : "text-gray-600"} />
          </IconButton>
        </Tooltip>
      </div>

      {/* User Rank Display */}
      {userRank && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-3 rounded-xl ${
            darkMode
              ? "bg-blue-900/30 border border-blue-700"
              : "bg-blue-50 border border-blue-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="w-8 h-8 mr-2 bg-green-500">
                <Person />
              </Avatar>
              <span
                className={`font-semibold ${
                  isMobile ? "text-sm" : "text-base"
                } ${darkMode ? "text-white" : "text-gray-800"}`}
              >
                ترتيبك
              </span>
            </div>
            <div className="flex items-center">
              <span
                className={`font-bold mr-2 ${
                  isMobile ? "text-lg" : "text-xl"
                } ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
              >
                #{userRank}
              </span>
              <span
                className={`font-semibold ${
                  isMobile ? "text-sm" : "text-base"
                } ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {userScore} نقطة
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Leaderboard List */}
      <div className="space-y-3 max-h-80 overflow-y-auto">
        <AnimatePresence>
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                user.id === userId
                  ? darkMode
                    ? "bg-green-900/30 border-2 border-green-500"
                    : "bg-green-100 border-2 border-green-400"
                  : darkMode
                  ? "bg-gray-700/50 hover:bg-gray-700/70"
                  : "bg-gray-50 hover:bg-gray-100"
              } ${isMobile ? "p-2" : "p-3"}`}
            >
              {/* Rank */}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                  user.rank <= 3
                    ? `bg-gradient-to-r ${getRankColor(user.rank)} text-white`
                    : darkMode
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } font-bold ${isMobile ? "text-sm" : "text-base"}`}
              >
                {getMedal(user.rank)}
              </div>

              {/* Avatar */}
              <Avatar
                src={user.photoURL}
                className={`mr-3 ${isMobile ? "w-8 h-8" : "w-10 h-10"} ${
                  user.rank === 1 ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                <Person />
              </Avatar>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-semibold truncate ${
                    isMobile ? "text-sm" : "text-base"
                  } ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  {user.fullName || user.name || "مستخدم"}
                </p>
                <div className="flex items-center mt-1">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {user.totalScore || 0} نقطة
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {user.completedGames || 0} لعبة
                  </span>
                </div>
              </div>

              {/* Rank Icon */}
              <div className="ml-2">{getRankIcon(user.rank)}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {leaderboardData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <EmojiEvents className="text-4xl text-gray-400 mx-auto mb-3" />
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              لا توجد بيانات متاحة حالياً
            </p>
            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-500" : "text-gray-500"
              }`}
            >
              كن أول من يلتحق بالتصنيف!
            </p>
          </motion.div>
        )}
      </div>

      {/* Stats Summary */}
      {leaderboardData.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`mt-4 pt-4 border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p
                className={`text-2xl font-bold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                {leaderboardData.length}
              </p>
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                لاعب نشط
              </p>
            </div>
            <div>
              <p
                className={`text-2xl font-bold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {leaderboardData.reduce(
                  (sum, user) => sum + (user.totalScore || 0),
                  0
                )}
              </p>
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                مجموع النقاط
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </Card>
  );
}
