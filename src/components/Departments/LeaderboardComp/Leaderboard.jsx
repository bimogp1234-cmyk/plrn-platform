// LeaderBoard.jsx - FIXED FIREBASE PERMISSIONS
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
  Alert,
} from "@mui/material";
import {
  EmojiEvents,
  MilitaryTech,
  Person,
  Refresh,
  Warning,
} from "@mui/icons-material";
import {
  getLeaderboard,
  onLeaderboardChange,
  getAllLeaderboard,
  getLeaderboardEntry,
  getUserProfile,
} from "../ComputerDep/progressService";
import { useUserData } from "../../../contexts/UserDataContext";
import { useTheme as useAppTheme } from "../../../contexts/ThemeContext";

const Leaderboard = (props) => {
  const { darkMode: propDarkMode, userId, userScore, isMobile } = props;
  const { theme: appTheme } = useAppTheme();
  const darkMode =
    typeof propDarkMode === "boolean" ? propDarkMode : appTheme === "dark";
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [rawDocs, setRawDocs] = useState([]);
  const [permissionError, setPermissionError] = useState(null);

  // Auto-enable raw docs view when debugging via URL ?debug=1 or localStorage flag
  const debugFlag =
    (typeof window !== "undefined" &&
      (new URLSearchParams(window.location.search).get("debug") === "1" ||
        localStorage.getItem("debugLeaderboard") === "1")) ||
    false;
  const [showRaw, setShowRaw] = useState(debugFlag);

  // Prefer global user data when available
  const { user: authUser, overall: contextOverall } = useUserData();
  const effectiveUserId = userId || authUser?.uid || null;
  const effectiveUserScore =
    userScore || contextOverall?.totalScore || contextOverall?.totalXP || 0;

  // Helper: extract plain data from different return shapes
  // - QueryDocumentSnapshot -> call .data()
  // - legacy { id, data } -> use .data
  // - normalized { id, ...fields } -> remove id and return fields
  const extractDocData = (docLike) => {
    if (!docLike) return null;
    if (typeof docLike.data === "function") return docLike.data();
    if (docLike.data !== undefined) return docLike.data;
    const { id, ...rest } = docLike;
    return Object.keys(rest).length ? rest : null;
  };

  // 🎯 Fetch current user's leaderboard data (direct lookup) with error handling
  const fetchCurrentUserData = async () => {
    if (!effectiveUserId) return null;
    try {
      const entry = await getLeaderboardEntry(effectiveUserId);
      return extractDocData(entry);
    } catch (error) {
      console.error("Error fetching current user data:", error);
      if (error.code === "permission-denied") {
        setPermissionError("ليس لديك صلاحية للوصول إلى بيانات التصنيف.");
      }
      return null;
    }
  };

  // 🎯 Fetch leaderboard data from Firebase only with enhanced error handling
  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      setPermissionError(null);
      console.log("📊 Fetching leaderboard data from Firebase...");

      // Fetch current user data first
      const currentUser = await fetchCurrentUserData();
      setCurrentUserData(currentUser);

      // Load top 20 leaderboard documents
      const docs = await getLeaderboard({ limit: 20 });
      const leaders = [];
      const raw = [];

      for (const d of docs) {
        const data = extractDocData(d);
        raw.push({ id: d.id, data });

        // Enhanced error handling for profile enrichment
        let name = data?.name;
        let photo = data?.avatarURL || data?.photoURL || null;

        try {
          // Only attempt to read the user's private `users/{uid}` profile when
          // the entry belongs to the currently signed-in / effective user.
          // Firestore rules restrict reads on `users/{uid}` to the owner, so
          // attempting to read other users will produce permission errors.
          if (
            data?.userId === effectiveUserId &&
            (!name || name === "مستخدم" || name === "مستخدم جديد" || !photo)
          ) {
            const profile = await getUserProfile(data.userId);
            if (profile) {
              if (
                !name &&
                (profile.name || profile.fullName || profile.displayName)
              ) {
                name = profile.name || profile.fullName || profile.displayName;
              }
              if (!photo) {
                photo =
                  profile.avatarURL ||
                  profile.photoURL ||
                  (profile.avatarSeed
                    ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                        profile.avatarSeed
                      )}&size=100`
                    : null);
              }
            }
          }
        } catch (err) {
          console.warn(
            "Could not enrich leaderboard profile for",
            data?.userId,
            err
          );
          // Skip permission errors for enrichment; they are non-critical.
        }

        // Some writers may omit userId in the document; fall back to the doc id
        const uid = data?.userId || d.id;
        if (data && uid) {
          leaders.push({
            id: d.id,
            userId: uid,
            name: name || data.userName || data.fullName || "مستخدم",
            avatarSeed: data?.avatarSeed || null,
            avatarURL: data?.avatarURL || null,
            photoURL: photo || "",
            totalXP: data.totalXP ?? data.totalScore ?? 0,
            completedGames: data.completedGames || 0,
            completedUnits: data.completedUnits || 0,
            lastUpdated: data.lastUpdated,
            rank: leaders.length + 1,
          });
        }
      }

      setRawDocs(raw);
      console.log("🏆 Leaderboard data loaded:", leaders.length, "players");
      console.log("👤 Current user data:", currentUser);

      // If no public leaderboard entries were returned but we have a current
      // user entry, show the current user so they at least see their score.
      if (leaders.length === 0 && currentUser) {
        leaders.push({
          id: currentUser.userId || currentUser.uid || effectiveUserId || "me",
          userId:
            currentUser.userId || currentUser.uid || effectiveUserId || "me",
          name:
            currentUser.name ||
            currentUser.userName ||
            currentUser.fullName ||
            "مستخدم",
          avatarSeed: currentUser.avatarSeed || null,
          avatarURL: currentUser.avatarURL || null,
          photoURL: currentUser.avatarURL || currentUser.photoURL || "",
          totalXP:
            currentUser.totalXP ??
            currentUser.totalScore ??
            effectiveUserScore ??
            0,
          completedGames: currentUser.completedGames || 0,
          completedUnits: currentUser.completedUnits || 0,
          lastUpdated: currentUser.lastUpdated || null,
          rank: 1,
        });
      }

      setLeaderboardData(leaders);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("❌ Error fetching leaderboard:", err);
      if (err.code === "permission-denied") {
        setPermissionError("ليس لديك صلاحية لعرض لوحة المتصدرين.");
        setError("لا يمكن تحميل التصنيف بسبب قيود الصلاحيات.");
      } else {
        setError("فشل في تحميل لوحة المتصدرين");
      }
    } finally {
      setLoading(false);
    }
  };

  // 🎯 (Debug) Fetch all leaderboard docs (paginated) and display everyone
  const fetchAllLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      setPermissionError(null);
      console.log("📊 Fetching ALL leaderboard pages (debug-only)...");

      const docs = await getAllLeaderboard({ pageSize: 200 });
      const leaders = [];
      const raw = [];

      for (const d of docs) {
        const data = extractDocData(d);
        raw.push({ id: d.id, data });

        // Enrich missing display names and avatar with error handling
        let name = data?.name;
        let photo = data?.avatarURL || data?.photoURL || null;
        try {
          // Only enrich from users/{uid} when this entry belongs to the
          // effectiveUserId (to avoid cross-user reads blocked by rules).
          if (
            data?.userId === effectiveUserId &&
            (!name || name === "مستخدم" || name === "مستخدم جديد" || !photo)
          ) {
            const profile = await getUserProfile(data.userId);
            if (profile) {
              if (
                !name &&
                (profile.name || profile.fullName || profile.displayName)
              ) {
                name = profile.name || profile.fullName || profile.displayName;
              }
              if (!photo) {
                photo =
                  profile.avatarURL ||
                  profile.photoURL ||
                  (profile.avatarSeed
                    ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                        profile.avatarSeed
                      )}&size=100`
                    : null);
              }
            }
          }
        } catch (err) {
          console.warn(
            "Could not enrich leaderboard profile for",
            data?.userId,
            err
          );
        }

        if (data && data.userId) {
          leaders.push({
            id: d.id,
            userId: data.userId,
            name: name || data.userName || data.fullName || "مستخدم",
            avatarSeed: data?.avatarSeed || null,
            avatarURL: data?.avatarURL || null,
            photoURL: photo || "",
            totalXP: data.totalXP ?? data.totalScore ?? 0,
            completedGames: data.completedGames || 0,
            completedUnits: data.completedUnits || 0,
            lastUpdated: data.lastUpdated,
            rank: leaders.length + 1,
          });
        }
      }

      setRawDocs(raw);
      setLeaderboardData(leaders);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("❌ Error fetching ALL leaderboard:", err);
      if (err.code === "permission-denied") {
        setPermissionError("ليس لديك صلاحية لعرض جميع بيانات التصنيف.");
        setError("لا يمكن تحميل التصنيف الكامل بسبب قيود الصلاحيات.");
      } else {
        setError("فشل في تحميل لوحة المتصدرين (كل المستخدمين)");
      }
    } finally {
      setLoading(false);
    }
  };

  // 🎯 Real-time leaderboard updates with enhanced error handling
  useEffect(() => {
    if (!effectiveUserId) {
      console.log("👤 No user ID, skipping real-time leaderboard setup");
      return;
    }

    console.log(
      "👂 Setting up real-time leaderboard listener (service) for top 20..."
    );

    const unsubscribe = onLeaderboardChange(
      async (docs) => {
        try {
          const leaders = [];
          const raw = [];

          // Fetch current user data for real-time updates
          const currentUser = await fetchCurrentUserData();
          setCurrentUserData(currentUser);

          for (const d of docs) {
            const data = extractDocData(d);
            raw.push({ id: d.id, data });

            // Enrich missing display names and avatar in realtime updates with error handling
            let name = data?.name;
            let photo = data?.avatarURL || data?.photoURL || null;
            try {
              // Only enrich from users/{uid} for the currently signed-in user
              // to avoid permission-denied errors when attempting to read
              // other users' private profile docs.
              if (
                data?.userId === effectiveUserId &&
                (!name || name === "مستخدم" || name === "مستخدم جديد" || !photo)
              ) {
                const profile = await getUserProfile(data.userId);
                if (profile) {
                  if (
                    !name &&
                    (profile.name || profile.fullName || profile.displayName)
                  ) {
                    name =
                      profile.name || profile.fullName || profile.displayName;
                  }
                  if (!photo) {
                    photo =
                      profile.avatarURL ||
                      profile.photoURL ||
                      (profile.avatarSeed
                        ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                            profile.avatarSeed
                          )}&size=100`
                        : null);
                  }
                }
              }
            } catch (err) {
              console.warn(
                "Could not enrich realtime leaderboard profile for",
                data?.userId,
                err
              );
            }

            // fall back to doc id when data.userId is missing
            const uid = data?.userId || d.id;
            if (data && uid) {
              leaders.push({
                id: d.id,
                userId: uid,
                name: name || data.userName || data.fullName || "مستخدم",
                avatarSeed: data?.avatarSeed || null,
                avatarURL: data?.avatarURL || null,
                photoURL: photo || "",
                totalXP: data.totalXP ?? data.totalScore ?? 0,
                completedGames: data.completedGames || 0,
                completedUnits: data.completedUnits || 0,
                lastUpdated: data.lastUpdated,
                rank: leaders.length + 1,
              });
            }
          }

          setRawDocs(raw);
          console.log("🔄 Real-time update - Players:", leaders.length);

          // If real-time snapshot returned no docs but we have a current user,
          // include the user's own entry so they see at least their score.
          if (leaders.length === 0 && currentUserData) {
            leaders.push({
              id:
                currentUserData.userId ||
                currentUserData.uid ||
                effectiveUserId ||
                "me",
              userId:
                currentUserData.userId ||
                currentUserData.uid ||
                effectiveUserId ||
                "me",
              name:
                currentUserData.name ||
                currentUserData.userName ||
                currentUserData.fullName ||
                "مستخدم",
              photoURL:
                currentUserData.avatarURL || currentUserData.photoURL || "",
              totalXP:
                currentUserData.totalXP ??
                currentUserData.totalScore ??
                effectiveUserScore ??
                0,
              completedGames: currentUserData.completedGames || 0,
              completedUnits: currentUserData.completedUnits || 0,
              lastUpdated: currentUserData.lastUpdated || null,
              rank: 1,
            });
          }

          setLeaderboardData(leaders);
          setLastUpdated(new Date());
          setPermissionError(null); // Clear permission errors on successful update
        } catch (err) {
          console.error("❌ Error processing realtime leaderboard docs:", err);
          if (err.code === "permission-denied") {
            setPermissionError("ليس لديك صلاحية للتحديث اللحظي للتصنيف.");
          }
          setError("خطأ في التحديث اللحظي للتصنيف");
        }
      },
      { limit: 20 }
    );

    return () => {
      console.log("🧹 Cleaning up leaderboard listener (service)");
      unsubscribe && unsubscribe();
    };
  }, [userId]);

  // 🎯 Initial load
  useEffect(() => {
    // Load top 20 on mount using fetchLeaderboard (real-time listener will keep it updated)
    fetchLeaderboard();
  }, [userId]);

  // 🎯 Get user display data
  const getUserDisplayData = (player) => {
    // If this is the current user, use their actual data
    if (player.userId === effectiveUserId && currentUserData) {
      return {
        name: currentUserData.name || "مستخدم",
        photoURL:
          currentUserData.avatarURL ||
          currentUserData.photoURL ||
          (currentUserData.avatarSeed
            ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                currentUserData.avatarSeed
              )}&size=100`
            : ""),
        totalXP: currentUserData.totalXP ?? currentUserData.totalScore ?? 0,
        completedGames: currentUserData.completedGames || 0,
        completedUnits: currentUserData.completedUnits || 0,
      };
    }

    // For other users, prefer avatarURL, then provided photoURL, then avatarSeed
    return {
      name: player.name,
      photoURL:
        player.avatarURL ||
        player.photoURL ||
        (player.avatarSeed
          ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
              player.avatarSeed
            )}&size=100`
          : ""),
      totalXP: player.totalXP ?? player.totalScore ?? 0,
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
    if (playerUserId === effectiveUserId) {
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

  return (
    <Box
      className={`rounded-2xl p-4 sm:p-6 shadow-lg ${
        darkMode ? "bg-gray-800/60" : "bg-white"
      }`}
    >
      {/* Permission Error Alert */}
      {permissionError && (
        <Alert
          severity="warning"
          className="mb-4"
          icon={<Warning />}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => setPermissionError(null)}
            >
              إخفاء
            </Button>
          }
        >
          {permissionError}
        </Alert>
      )}

      <div className="flex justify-between items-center mb-4">
        <Typography
          variant="h6"
          className={`flex items-center ${isMobile ? "text-lg" : "text-xl"}`}
        >
          <EmojiEvents className="ml-2 text-yellow-500" />
          لوحة المتصدرين
        </Typography>

        {/* Manual update buttons removed - leaderboard listens in real-time */}
      </div>

      {error ? (
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
      ) : leaderboardData.length === 0 ? (
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
                        player.userId === effectiveUserId
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
                        {userData.totalXP?.toLocaleString() || 0}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Current user rank info if not in top 10 */}
          {leaderboardData.length > 0 &&
            !leaderboardData.some(
              (player) => player.userId === effectiveUserId
            ) && (
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
                  <strong>{effectiveUserScore?.toLocaleString() || 0}</strong>
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
          إجمالي اللاعبين: {leaderboardData.length} | نقاطك:{" "}
          {effectiveUserScore}
        </Typography>
        <div className="mt-2">
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowRaw((s) => !s)}
          >
            {showRaw ? "إخفاء raw docs" : `عرض raw docs (${rawDocs.length})`}
          </Button>
        </div>
        {showRaw && (
          <Box className="mt-2 p-2 text-left max-h-48 overflow-auto bg-gray-50 rounded">
            {rawDocs.length === 0 ? (
              <Typography variant="caption">لا توجد مستندات خام.</Typography>
            ) : (
              rawDocs.map((d) => (
                <div key={d.id} className="mb-2">
                  <Typography variant="caption" className="font-semibold">
                    ID: {d.id}
                  </Typography>
                  <pre className="text-xs bg-white p-2 rounded border mt-1">
                    {JSON.stringify(d.data, null, 2)}
                  </pre>
                </div>
              ))
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Leaderboard;
