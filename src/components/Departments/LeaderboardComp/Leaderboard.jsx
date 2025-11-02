// LeaderBoard.jsx - FIXED VERSION
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import {
  EmojiEvents,
  MilitaryTech,
  Person,
  Refresh,
} from "@mui/icons-material";
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./../../../FireBaseDatabase/firebase";

const Leaderboard = ({ darkMode, userId, userScore, isMobile }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  // 🎯 Fetch current user's leaderboard data
  const fetchCurrentUserData = async () => {
    if (!userId) return null;

    try {
      const userRef = doc(db, "leaderboard", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        return userSnap.data();
      }
      return null;
    } catch (error) {
      console.error("Error fetching current user data:", error);
      return null;
    }
  };

  // 🎯 Fetch leaderboard data from Firebase only
  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("📊 Fetching leaderboard data from Firebase...");

      // Fetch current user data first
      const currentUser = await fetchCurrentUserData();
      setCurrentUserData(currentUser);

      const leaderboardRef = collection(db, "leaderboard");
      const leaderboardQuery = query(
        leaderboardRef,
        orderBy("totalScore", "desc"),
        limit(10)
      );

      const querySnapshot = await getDocs(leaderboardQuery);
      const leaders = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Only add users with valid data
        if (data.userId && data.name && data.name !== "مستخدم جديد") {
          leaders.push({
            id: doc.id,
            userId: data.userId,
            name: data.name,
            photoURL: data.photoURL || "",
            totalScore: data.totalScore || 0,
            completedGames: data.completedGames || 0,
            completedUnits: data.completedUnits || 0,
            lastUpdated: data.lastUpdated,
            rank: leaders.length + 1,
          });
        }
      });

      console.log("🏆 Leaderboard data loaded:", leaders.length, "players");
      console.log("👤 Current user data:", currentUser);

      setLeaderboardData(leaders);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("❌ Error fetching leaderboard:", err);
      setError("فشل في تحميل لوحة المتصدرين");
    } finally {
      setLoading(false);
    }
  };

  // 🎯 Real-time leaderboard updates
  useEffect(() => {
    console.log("👂 Setting up real-time leaderboard listener...");

    const leaderboardRef = collection(db, "leaderboard");
    const leaderboardQuery = query(
      leaderboardRef,
      orderBy("totalScore", "desc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(
      leaderboardQuery,
      async (snapshot) => {
        const leaders = [];

        // Fetch current user data for real-time updates
        const currentUser = await fetchCurrentUserData();
        setCurrentUserData(currentUser);

        snapshot.forEach((doc) => {
          const data = doc.data();

          // Only add users with valid data
          if (data.userId && data.name && data.name !== "مستخدم جديد") {
            leaders.push({
              id: doc.id,
              userId: data.userId,
              name: data.name,
              photoURL: data.photoURL || "",
              totalScore: data.totalScore || 0,
              completedGames: data.completedGames || 0,
              completedUnits: data.completedUnits || 0,
              lastUpdated: data.lastUpdated,
              rank: leaders.length + 1,
            });
          }
        });

        console.log("🔄 Real-time update - Players:", leaders.length);
        setLeaderboardData(leaders);
        setLastUpdated(new Date());
      },
      (err) => {
        console.error("❌ Leaderboard snapshot error:", err);
        setError("خطأ في التحديث اللحظي للتصنيف");
      }
    );

    return () => {
      console.log("🧹 Cleaning up leaderboard listener");
      unsubscribe();
    };
  }, [userId]);

  // 🎯 Initial load
  useEffect(() => {
    fetchLeaderboard();
  }, [userId]);

  // 🎯 Get user display data
  const getUserDisplayData = (player) => {
    // If this is the current user, use their actual data
    if (player.userId === userId && currentUserData) {
      return {
        name: currentUserData.name || "مستخدم",
        photoURL: currentUserData.photoURL || "",
        totalScore: currentUserData.totalScore || 0,
        completedGames: currentUserData.completedGames || 0,
        completedUnits: currentUserData.completedUnits || 0,
      };
    }

    // For other users, use the data from leaderboard
    return {
      name: player.name,
      photoURL: player.photoURL,
      totalScore: player.totalScore,
      completedGames: player.completedGames,
      completedUnits: player.completedUnits,
    };
  };

  // 🎯 Get rank icon based on position
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return (
          <EmojiEvents
            sx={{ color: "#FFD700", fontSize: isMobile ? 20 : 24 }}
          />
        );
      case 2:
        return (
          <EmojiEvents
            sx={{ color: "#C0C0C0", fontSize: isMobile ? 20 : 24 }}
          />
        );
      case 3:
        return (
          <EmojiEvents
            sx={{ color: "#CD7F32", fontSize: isMobile ? 20 : 24 }}
          />
        );
      default:
        return (
          <MilitaryTech
            sx={{
              color: darkMode ? "#666" : "#999",
              fontSize: isMobile ? 16 : 20,
            }}
          />
        );
    }
  };

  // 🎯 Get rank background color
  const getRankBackground = (playerUserId) => {
    if (playerUserId === userId) {
      return darkMode ? "rgba(34, 197, 94, 0.2)" : "rgba(34, 197, 94, 0.1)";
    }
    return "transparent";
  };

  // 🎯 Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <Box
        className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
          darkMode ? "bg-gray-800/60" : "bg-white"
        }`}
      >
        <Typography
          variant="h6"
          className={`flex items-center mb-4 ${
            isMobile ? "text-lg" : "text-xl"
          }`}
        >
          <EmojiEvents className="ml-2 text-yellow-500" />
          لوحة المتصدرين
        </Typography>

        <Box className="flex justify-center items-center py-8">
          <CircularProgress size={30} className="text-green-500" />
          <Typography className="mr-3 text-gray-500">
            جاري تحميل التصنيف...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
          darkMode ? "bg-gray-800/60" : "bg-white"
        }`}
      >
        <Typography
          variant="h6"
          className={`flex items-center mb-4 ${
            isMobile ? "text-lg" : "text-xl"
          }`}
        >
          <EmojiEvents className="ml-2 text-yellow-500" />
          لوحة المتصدرين
        </Typography>

        <Box className="text-center py-4">
          <Typography className="text-red-500 mb-2">{error}</Typography>
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={fetchLeaderboard}
            size="small"
          >
            إعادة المحاولة
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
        darkMode ? "bg-gray-800/60" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography
          variant="h6"
          className={`flex items-center ${isMobile ? "text-lg" : "text-xl"}`}
        >
          <EmojiEvents className="ml-2 text-yellow-500" />
          لوحة المتصدرين
        </Typography>

        <Button
          variant="outlined"
          size="small"
          onClick={fetchLeaderboard}
          className="text-xs"
        >
          تحديث
        </Button>
      </div>
      {leaderboardData.length === 0 ? (
        <Box className="text-center py-6">
          <Person
            sx={{ fontSize: 48, color: darkMode ? "#666" : "#999", mb: 2 }}
          />
          <Typography className={darkMode ? "text-gray-400" : "text-gray-600"}>
            لا توجد بيانات في لوحة المتصدرين حتى الآن
          </Typography>
          <Typography
            variant="body2"
            className={darkMode ? "text-gray-500" : "text-gray-400"}
          >
            كن أول من يظهر في التصنيف!
          </Typography>
        </Box>
      ) : (
        <>
          <TableContainer
            component={Paper}
            elevation={0}
            className="bg-transparent"
          >
            <Table size={isMobile ? "small" : "medium"}>
              <TableHead>
                <TableRow>
                  <TableCell
                    className={`font-bold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } ${isMobile ? "text-xs" : "text-sm"}`}
                    width="20%"
                  >
                    الترتيب
                  </TableCell>
                  <TableCell
                    className={`font-bold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } ${isMobile ? "text-xs" : "text-sm"}`}
                    width="50%"
                  >
                    اللاعب
                  </TableCell>
                  <TableCell
                    className={`font-bold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } ${isMobile ? "text-xs" : "text-sm"}`}
                    align="center"
                    width="30%"
                  >
                    النقاط
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboardData.map((player) => {
                  const userData = getUserDisplayData(player);

                  return (
                    <TableRow
                      key={player.id}
                      sx={{
                        backgroundColor: getRankBackground(player.userId),
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className={`transition-all duration-200 ${
                        player.userId === userId
                          ? "ring-2 ring-green-500 ring-opacity-50"
                          : ""
                      }`}
                    >
                      <TableCell
                        className={`font-semibold ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        } ${isMobile ? "text-xs" : "text-sm"}`}
                      >
                        <Box className="flex items-center">
                          {getRankIcon(player.rank)}
                          <span className="mr-2">{player.rank}</span>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box className="flex items-center">
                          <Avatar
                            src={userData.photoURL}
                            alt={userData.name}
                            sx={{
                              width: isMobile ? 28 : 32,
                              height: isMobile ? 28 : 32,
                              mr: 1,
                            }}
                          >
                            {userData.name?.charAt(0) || "U"}
                          </Avatar>
                          <Box className="flex flex-col">
                            <Typography
                              className={`font-medium ${
                                darkMode ? "text-gray-200" : "text-gray-800"
                              } ${isMobile ? "text-xs" : "text-sm"} ${
                                player.userId === userId
                                  ? "text-green-500 font-bold"
                                  : ""
                              }`}
                            >
                              {userData.name}
                              {player.userId === userId && (
                                <span className="text-xs text-green-500 mr-1">
                                  {" "}
                                  (أنت)
                                </span>
                              )}
                            </Typography>
                            <Typography
                              variant="caption"
                              className={
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }
                            >
                              {userData.completedGames} لعبة •{" "}
                              {userData.completedUnits} وحدة
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        className={`font-bold ${
                          darkMode ? "text-yellow-400" : "text-yellow-600"
                        } ${isMobile ? "text-xs" : "text-sm"}`}
                      >
                        {userData.totalScore?.toLocaleString() || 0}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Current user rank info if not in top 10 */}
          {leaderboardData.length > 0 &&
            !leaderboardData.some((player) => player.userId === userId) && (
              <Box
                className={`mt-4 p-3 rounded-lg border ${
                  darkMode
                    ? "bg-green-900/20 border-green-700/30"
                    : "bg-green-50 border-green-200"
                }`}
              >
                <Typography
                  variant="body2"
                  className={`text-center font-medium ${
                    darkMode ? "text-green-300" : "text-green-700"
                  }`}
                >
                  نقاطك الحالية:{" "}
                  <strong>{userScore?.toLocaleString() || 0}</strong>
                </Typography>
                <Typography
                  variant="body2"
                  className={`text-center ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  استمر في اللعب للظهور في التصنيف!
                </Typography>
              </Box>
            )}
        </>
      )}

      {/* Debug info */}
      <Box className="mt-3 text-center">
        <Typography variant="caption" className="text-gray-500">
          إجمالي اللاعبين: {leaderboardData.length} | نقاطك: {userScore}
        </Typography>
      </Box>
    </Box>
  );
};

export default Leaderboard;
