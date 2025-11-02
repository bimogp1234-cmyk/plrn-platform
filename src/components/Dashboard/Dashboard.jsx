import { useEffect, useState, useRef, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Snackbar,
  Alert,
  Fade,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Brightness4,
  Logout,
  Notifications,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Calculate,
  Science,
  Computer,
  LocalHospital,
  Save,
  Edit,
  Person,
  AccountCircle,
  Face,
  EmojiPeople,
  SelfImprovement,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { auth, db } from "../../FireBaseDatabase/firebase";

// ✅ Firestore Error Handler
const handleFirestoreError = (error, showToast) => {
  console.error("Firestore Error:", error);

  switch (error.code) {
    case "permission-denied":
      showToast("ليس لديك صلاحية للقيام بهذا الإجراء", "error");
      break;
    case "not-found":
      showToast("البيانات المطلوبة غير موجودة", "warning");
      break;
    case "unavailable":
      showToast("الخدمة غير متاحة حالياً، حاول لاحقاً", "error");
      break;
    case "invalid-argument":
      showToast("بيانات غير صالحة", "error");
      break;
    default:
      showToast("حدث خطأ غير متوقع", "error");
  }
};

// ✅ Avatar options for user selection with Arabic names
const avatarOptions = [
  {
    id: 1,
    seed: "متعلم",
    icon: <AccountCircle />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    seed: "مبدع",
    icon: <Face />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    seed: "مبتكر",
    icon: <EmojiPeople />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    seed: "بطل",
    icon: <SelfImprovement />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    seed: "عالم",
    icon: <Person />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    seed: "مستكشف",
    icon: <AccountCircle />,
    color: "from-teal-500 to-green-500",
  },
];

// ✅ Generate avatar URL based on seed
const generateAvatarUrl = (seed, size = 100) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&size=${size}`;
};

// ✅ Profile Edit Modal with Avatar Selection
function ProfileEditModal({
  isOpen = false,
  onClose,
  userData,
  userId,
  fb,
  darkMode,
  showToast,
}) {
  const [editedData, setEditedData] = useState({ name: "" });
  const [selectedAvatar, setSelectedAvatar] = useState("متعلم");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (userData) {
      setEditedData({
        name: userData.name || userData.fullName || "",
      });

      // Extract seed from current photo URL
      if (userData.photoURL) {
        try {
          const url = new URL(userData.photoURL);
          const currentSeed = url.searchParams.get("seed") || "متعلم";
          setSelectedAvatar(currentSeed);
        } catch {
          setSelectedAvatar("متعلم");
        }
      } else {
        setSelectedAvatar("متعلم");
      }
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (seed) => {
    setSelectedAvatar(seed);
  };

  // ✅ Initialize user subcollections
  const initializeUserSubcollections = async (
    userId,
    userName,
    userPhotoURL
  ) => {
    if (!fb?.db) return;

    try {
      // Progress subcollection
      const progressRef = doc(fb.db, "users", userId, "progress", "data");
      await setDoc(
        progressRef,
        {
          lastPoint: 0,
          createdAt: new Date(),
        },
        { merge: true }
      );

      // Scores subcollection
      const scoresRef = doc(fb.db, "users", userId, "scores", "data");
      await setDoc(
        scoresRef,
        {
          totalScore: 0,
          sessions: 0,
          createdAt: new Date(),
        },
        { merge: true }
      );

      // Leaderboard entry (in user's subcollection)
      const userLeaderboardRef = doc(
        fb.db,
        "users",
        userId,
        "leaderboard",
        userId
      );
      await setDoc(
        userLeaderboardRef,
        {
          userId: userId,
          score: 0,
          name: userName,
          photoURL: userPhotoURL,
          updatedAt: new Date(),
        },
        { merge: true }
      );

      // Global leaderboard entry
      const globalLeaderboardRef = doc(fb.db, "leaderboard", userId);
      await setDoc(
        globalLeaderboardRef,
        {
          userId: userId,
          score: 0,
          name: userName,
          photoURL: userPhotoURL,
          updatedAt: new Date(),
        },
        { merge: true }
      );

      console.log("Initialized user subcollections for:", userId);
    } catch (error) {
      console.error("Error initializing subcollections:", error);
    }
  };

  // ✅ Save user profile
  const handleProfileSave = async () => {
    if (!fb?.db || !userId) {
      showToast("خطأ: لم يتم تهيئة قاعدة البيانات.", "error");
      return;
    }

    if (!editedData.name?.trim()) {
      showToast("الرجاء إدخال الاسم.", "warning");
      return;
    }

    setIsSaving(true);

    try {
      // ✅ Always use selected avatar
      const finalPhotoURL = generateAvatarUrl(selectedAvatar);

      // ✅ Save to main user document
      const userDocRef = doc(fb.db, "users", userId);
      await setDoc(
        userDocRef,
        {
          name: editedData.name.trim(),
          photoURL: finalPhotoURL,
          email: userData?.email || auth.currentUser?.email,
          lastUpdated: new Date(),
          ...(userData?.createdAt && { createdAt: userData.createdAt }),
          lastLogin: new Date(),
        },
        { merge: true }
      );

      // ✅ Initialize subcollections
      await initializeUserSubcollections(
        userId,
        editedData.name.trim(),
        finalPhotoURL
      );

      showToast("تم تحديث الملف الشخصي بنجاح!", "success");
      onClose();
    } catch (error) {
      console.error("Error saving profile:", error);
      handleFirestoreError(error, showToast);
    } finally {
      setIsSaving(false);
    }
  };

  // Get current photo URL for display
  const currentPhotoURL = generateAvatarUrl(selectedAvatar);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        className: `rounded-2xl shadow-2xl border-2 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 via-gray-800 to-green-900/40 border-green-500/50 text-white"
            : "bg-gradient-to-br from-white via-green-50 to-blue-50 border-green-300 text-gray-800"
        } transition-all duration-300`,
      }}
      dir="rtl"
    >
      <DialogTitle
        className={`text-center p-6 ${
          darkMode ? "bg-green-900/20" : "bg-green-100/50"
        } rounded-t-2xl border-b ${
          darkMode ? "border-green-500/30" : "border-green-200"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <Edit
            className={`${darkMode ? "text-green-400" : "text-green-600"}`}
          />
          <Typography
            variant="h5"
            className={`font-bold ${
              darkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            تعديل الملف الشخصي
          </Typography>
        </div>
      </DialogTitle>

      <DialogContent className="p-6">
        <div className="flex flex-col space-y-6">
          {/* Current Avatar Display */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar
                src={currentPhotoURL}
                alt={editedData.name || "User"}
                className={`w-32 h-32 border-4 shadow-lg ${
                  darkMode ? "border-green-500" : "border-green-400"
                }`}
              />
            </div>
          </div>

          {/* Only Editable Field - Username */}
          <TextField
            fullWidth
            name="name"
            label="اسم المستخدم"
            type="text"
            variant="outlined"
            value={editedData.name}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
              className: darkMode ? "text-green-300" : "text-green-700",
            }}
            InputProps={{
              className: `rounded-xl ${
                darkMode
                  ? "bg-gray-700/50 border-green-500/30 text-white placeholder-green-200"
                  : "bg-white border-green-300 text-gray-800 placeholder-green-400"
              }`,
            }}
            placeholder="أدخل اسمك الجديد"
            autoFocus
          />

          {/* Avatar Selection Section */}
          <div
            className={`p-4 rounded-xl border ${
              darkMode
                ? "bg-gray-700/30 border-green-500/30"
                : "bg-green-50/70 border-green-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Person
                className={`text-sm ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <Typography
                variant="body2"
                className={`font-semibold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                اختر صورتك الشخصية
              </Typography>
            </div>

            <Grid container spacing={2}>
              {avatarOptions.map((avatar) => (
                <Grid item xs={4} key={avatar.id}>
                  <div
                    className={`flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                      selectedAvatar === avatar.seed
                        ? darkMode
                          ? "bg-green-500/20 border-green-500 shadow-lg"
                          : "bg-green-100 border-green-400 shadow-md"
                        : darkMode
                        ? "bg-gray-600/30 border-gray-500/30 hover:bg-gray-600/50 hover:border-green-400/50"
                        : "bg-white border-gray-200 hover:bg-green-50 hover:border-green-300"
                    }`}
                    onClick={() => handleAvatarSelect(avatar.seed)}
                  >
                    <Avatar
                      src={generateAvatarUrl(avatar.seed)}
                      className={`w-16 h-16 mb-2 transition-transform ${
                        selectedAvatar === avatar.seed
                          ? "scale-110 ring-2 ring-green-500"
                          : ""
                      }`}
                    />
                    <div
                      className={`text-xs font-medium ${
                        darkMode ? "text-green-300" : "text-green-700"
                      }`}
                    >
                      {avatar.seed}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Info Section */}
          <div
            className={`w-full p-4 rounded-xl border ${
              darkMode
                ? "bg-gray-700/30 border-green-500/30"
                : "bg-green-50/70 border-green-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Person
                className={`text-sm ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <Typography
                variant="body2"
                className={`font-semibold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                معلومات الحساب
              </Typography>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span
                  className={darkMode ? "text-green-300" : "text-green-700"}
                >
                  اسم المستخدم :
                </span>
                <span className={darkMode ? "text-white" : "text-gray-800"}>
                  {userData?.name || "لم يتم تعيينه"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={darkMode ? "text-green-300" : "text-green-700"}
                >
                  البريد الإلكتروني:
                </span>
                <span className={darkMode ? "text-white" : "text-gray-800"}>
                  {userData?.email || auth.currentUser?.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions
        className={`p-4 gap-2 ${
          darkMode ? "bg-green-900/10" : "bg-green-50/50"
        } rounded-b-2xl border-t ${
          darkMode ? "border-green-500/30" : "border-green-200"
        }`}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          className={`font-bold rounded-xl border-2 px-6 ${
            darkMode
              ? "border-red-500 text-red-400 hover:bg-red-500/20 hover:border-red-400"
              : "border-red-500 text-red-500 hover:bg-red-500/10 hover:border-red-600"
          } transition-all duration-200`}
          disabled={isSaving}
        >
          إلغاء
        </Button>
        <Button
          onClick={handleProfileSave}
          variant="contained"
          className={`font-bold rounded-xl px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-green-700`}
          startIcon={<Save />}
          disabled={isSaving}
        >
          {isSaving ? "جاري الحفظ..." : "حفظ التغييرات"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// -------------------------------
// Dashboard (main)
// -------------------------------
export default function Dashboard() {
  // ----------------- UI / theme / basic states -----------------
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ----------------- Responsive Breakpoints -----------------
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < 768px
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg")); // 768px - 1024px
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // > 1024px

  // ----------------- Firebase & user state -----------------
  const [fb, setFb] = useState({ auth, db });
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // ----------------- Content -----------------
  const [programs, setPrograms] = useState([]);
  const sectionRef = useRef(null);

  // ----------------- Toast Helper -----------------
  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((p) => [...p, { id, message, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3000);
  }, []);

  // ----------------- Greeting -----------------
  const getGreeting = () => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const sudanOffset = 2;
    let hour;

    try {
      if (userTimeZone === "Africa/Khartoum") {
        hour = new Date().getHours();
      } else {
        const now = new Date();
        hour = (now.getUTCHours() + sudanOffset) % 24;
      }
    } catch (error) {
      hour = (new Date().getUTCHours() + sudanOffset) % 24;
    }

    if (hour < 12) return "صباح الخير";
    if (hour < 18) return "مساء الخير";
    return "مساء النور";
  };

  // ✅ Get user photo URL
  const getUserPhotoURL = (userData) => {
    return userData?.photoURL || generateAvatarUrl("متعلم");
  };

  // ✅ Initialize user document
  const initializeUserDocument = async (userId, authUser) => {
    if (!fb?.db || !userId) return;

    try {
      const userDocRef = doc(fb.db, "users", userId);
      const photoURL = generateAvatarUrl("متعلم");

      await setDoc(
        userDocRef,
        {
          email: authUser?.email || "",
          name: authUser?.displayName || "ضيف جديد",
          photoURL: photoURL,
          createdAt: new Date(),
          lastLogin: new Date(),
        },
        { merge: true }
      );

      console.log("Initialized user document for:", userId);
    } catch (error) {
      console.error("Error initializing user document:", error);
    }
  };

  // ----------------- Auth initialization -----------------
  useEffect(() => {
    setFb({ auth, db });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  // ----------------- Load user profile -----------------
  useEffect(() => {
    if (!isAuthReady) return;

    let unsubscribe = () => {};

    if (userId && fb?.db) {
      const userDocRef = doc(fb.db, "users", userId);

      unsubscribe = onSnapshot(
        userDocRef,
        (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            const photoURL = getUserPhotoURL(data);

            setUserData({
              uid: userId,
              email: data.email || auth.currentUser?.email || "",
              name: data.name || auth.currentUser?.displayName || "ضيف جديد",
              photoURL: photoURL,
              createdAt: data.createdAt,
              lastLogin: data.lastLogin,
              ...data,
            });
          } else {
            const photoURL = generateAvatarUrl("متعلم");

            setUserData({
              uid: userId,
              email: auth.currentUser?.email || "",
              name: auth.currentUser?.displayName || "ضيف جديد",
              photoURL: photoURL,
            });

            initializeUserDocument(userId, auth.currentUser);
          }
          setLoading(false);
        },
        (err) => {
          console.error("Error loading user data:", err);
          handleFirestoreError(err, showToast);
          setUserData({
            uid: userId,
            name: "مستخدم",
            photoURL: generateAvatarUrl("متعلم"),
          });
          setLoading(false);
        }
      );
    } else if (isAuthReady && !userId) {
      setUserData(null);
      setLoading(false);
    }

    return () => unsubscribe();
  }, [isAuthReady, userId, fb, showToast]);

  // ----------------- Load programs with proper dark mode styling -----------------
  useEffect(() => {
    const loadMockContent = async () => {
      await new Promise((r) => setTimeout(r, 350));

      const mockPrograms = [
        {
          id: "computer",
          name: "الحاسوب",
          path: "maincomdep",
          description: "مسار الحاسوب التفاعلي",
          icon: <Computer className="text-4xl" />,
          light: {
            bg: "bg-gradient-to-br from-white to-blue-50",
            border: "border-blue-200",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            button: "from-blue-500 to-blue-600 border-blue-700",
            text: "text-gray-600",
          },
          dark: {
            bg: "bg-gradient-to-br from-gray-800 via-gray-800 to-blue-900/30",
            border: "border-blue-500/30",
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400",
            button: "from-blue-500 to-blue-600 border-blue-400",
            text: "text-gray-300",
          },
        },
        {
          id: "firstaid",
          path: "firstaid",
          name: "الإسعافات الأولية",
          description: "أساسيات الإسعاف الأولي",
          icon: <LocalHospital className="text-4xl" />,
          light: {
            bg: "bg-gradient-to-br from-white to-red-50",
            border: "border-red-200",
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            button: "from-red-500 to-red-600 border-red-700",
            text: "text-gray-600",
          },
          dark: {
            bg: "bg-gradient-to-br from-gray-800 via-gray-800 to-red-900/30",
            border: "border-red-500/30",
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            button: "from-red-500 to-red-600 border-red-400",
            text: "text-gray-300",
          },
        },
        {
          id: "math",
          path: "mathdep",
          name: "الرياضيات",
          description: "تطوير المهارات الحسابية",
          icon: <Calculate className="text-4xl" />,
          light: {
            bg: "bg-gradient-to-br from-white to-green-50",
            border: "border-green-200",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            button: "from-green-500 to-green-600 border-green-700",
            text: "text-gray-600",
          },
          dark: {
            bg: "bg-gradient-to-br from-gray-800 via-gray-800 to-green-900/30",
            border: "border-green-500/30",
            iconBg: "bg-green-500/20",
            iconColor: "text-green-400",
            button: "from-green-500 to-green-600 border-green-400",
            text: "text-gray-300",
          },
        },
        {
          id: "physics",
          path: "physicdep",
          name: "الفيزياء",
          description: "مقدمات في الفيزياء",
          icon: <Science className="text-4xl" />,
          light: {
            bg: "bg-gradient-to-br from-white to-purple-50",
            border: "border-purple-200",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            button: "from-purple-500 to-purple-600 border-purple-700",
            text: "text-gray-600",
          },
          dark: {
            bg: "bg-gradient-to-br from-gray-800 via-gray-800 to-purple-900/30",
            border: "border-purple-500/30",
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-400",
            button: "from-purple-500 to-purple-600 border-purple-400",
            text: "text-gray-300",
          },
        },
      ];

      setPrograms(mockPrograms);
    };

    loadMockContent();
  }, [darkMode]);

  // ----------------- Navigation -----------------
  const handleOpen = useCallback(
    (path) => {
      if (!path) {
        showToast("المسار غير متاح حالياً.", "info");
        return;
      }

      if (!userId || !userData) {
        showToast("يجب تسجيل الدخول أولاً.", "warning");
        return;
      }

      setIsSidebarOpen(false);

      navigate(`/${path}`, {
        state: {
          userId,
          userData,
          darkMode,
        },
      });
    },
    [userId, userData, darkMode, navigate, showToast]
  );

  // ----------------- Welcome banner timer & footer observer -----------------
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // ----------------- Logout -----------------
  const handleLogout = async () => {
    try {
      await signOut(fb.auth);
      window.location.href = "/login";
      showToast("تم تسجيل الخروج بنجاح!", "success");
    } catch (err) {
      console.error("logout error:", err);
      showToast("فشل تسجيل الخروج.", "error");
    }
  };

  // ----------------- UI helpers -----------------
  const toggleTheme = useCallback(() => setDarkMode((p) => !p), []);

  // ----------------- Custom styles -----------------
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800;900&display=swap');
    .font-\\[Tajawal\\] { font-family: 'Tajawal', sans-serif !important; }
    .animate-bounce-slow { animation: bounce-slow 3s infinite; }
    @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);} }
    .animate-icon-bounce{ transition: transform 0.5s; }
    .animate-icon-bounce:hover{ transform: translateY(-5px) scale(1.1); }
    .bg-pattern{ background-image: radial-gradient(#22c55e11 1px, transparent 1px), radial-gradient(#3b82f611 1px, transparent 1px); background-position: 0 0, 40px 40px; background-size: 80px 80px; }
    ::-webkit-scrollbar{ width:8px; height:8px; }
    ::-webkit-scrollbar-track{ background: #1f2937; border-radius:10px; }
    ::-webkit-scrollbar-thumb{ background: #34d399; border-radius:10px; border:2px solid #1f2937; }
    ::-webkit-scrollbar-thumb:hover{ background:#10b981; }
  `;

  // ----------------- Simple loading state render -----------------
  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center font-[Tajawal] bg-gray-900 text-white"
        dir="rtl"
      >
        <svg
          className="animate-spin h-10 w-10 text-green-400 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <div className="text-xl font-bold text-green-400 animate-pulse">
          جاري تحميل منصة بلــــــيرن...
        </div>
      </div>
    );
  }

  // ----------------- Sidebar component -----------------
  const Sidebar = () => (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-64 p-6 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          darkMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white border-l border-green-700/50"
            : "bg-gradient-to-b from-white to-gray-50 text-gray-800 border-l border-green-200"
        } ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col mb-6 pb-4 border-b border-green-600/50 flex-shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-lg">
              بلــــــيرن
            </h1>
            <IconButton
              onClick={() => setIsSidebarOpen(false)}
              color="inherit"
              className="p-1 rounded-full bg-red-500/10 hover:bg-red-500/20"
            >
              <CloseIcon className="text-red-400" />
            </IconButton>
          </div>

          <div
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 dark:bg-gray-700/50 shadow-inner cursor-pointer hover:shadow-green-500/50 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <Avatar
              src={getUserPhotoURL(userData)}
              alt={userData?.name || "U"}
              sx={{ width: 48, height: 48, border: "2px solid #4ade80" }}
            />
            <span className="font-extrabold text-lg text-green-300">
              {userData?.name || "مستخدم"}
            </span>
          </div>
        </div>

        <nav className="space-y-4 overflow-y-auto flex-1 pb-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 opacity-80">
            القائمة الرئيسية
          </h4>
          <a
            href="#hero"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-green-600/30 hover:text-green-300 hover:shadow-md"
          >
            <span className="text-green-400">
              <Home />
            </span>
            الرئيسية
          </a>
          <h4 className="pt-4 text-sm font-bold uppercase tracking-wider text-blue-400 opacity-80 border-t border-gray-700/50">
            البرامج التعليمية
          </h4>
          {programs.map((p) => (
            <a
              key={p.id}
              onClick={() => handleOpen(p.path)}
              className="flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-blue-600/30 hover:text-blue-300 hover:shadow-md cursor-pointer"
            >
              <span className="text-blue-400">{p.icon}</span>
              {p.name}
            </a>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-around flex-shrink-0">
          <IconButton
            onClick={toggleTheme}
            title="تبديل الثيم"
            className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20"
            aria-label="تبديل الثيم"
          >
            <Brightness4 className="text-blue-400" />
          </IconButton>
          <IconButton
            onClick={handleLogout}
            title="تسجيل الخروج"
            className="p-3 rounded-full bg-red-500/10 hover:bg-red-500/20"
            aria-label="تسجيل الخروج"
          >
            <Logout className="text-red-400" />
          </IconButton>
          <IconButton
            title="الإشعارات"
            className="p-3 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20"
            aria-label="الإشعارات"
          >
            <Notifications className="text-yellow-400" />
          </IconButton>
        </div>
      </aside>
    </>
  );

  // ----------------- Main render -----------------
  return (
    <>
      <style>{customStyles}</style>
      <div
        className={`min-h-screen font-[Tajawal] flex ${
          darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-800"
        } bg-pattern`}
        dir="rtl"
        lang="ar"
      >
        <Sidebar />

        <ProfileEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userData={userData}
          userId={userId}
          fb={fb}
          darkMode={darkMode}
          showToast={showToast}
        />

        <div className="flex-1 flex flex-col transition-all duration-300">
          <AppBar position="sticky" className={`shadow-2xl`}>
            <Toolbar
              className={`flex justify-between w-full ${
                isMobile ? "p-2" : "p-2 sm:p-4"
              } bg-gradient-to-l from-green-600/90 to-blue-600/90 backdrop-blur-sm shadow-xl`}
            >
              <div className="flex items-center gap-3">
                <IconButton
                  onClick={() => setIsSidebarOpen(true)}
                  color="inherit"
                  title="قائمة التنقل"
                  aria-label="فتح قائمة التنقل"
                >
                  <MenuIcon className="text-white hover:scale-110 transition-transform" />
                </IconButton>
                <h1
                  className={`${
                    isMobile ? "text-2xl" : "text-3xl"
                  } font-black text-white ml-2 drop-shadow-md`}
                >
                  بلــــــيرن
                </h1>
              </div>

              <div
                className="flex items-center gap-3 p-1 rounded-full bg-white/10 pr-4 transition-all duration-300 hover:bg-white/20 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && setIsModalOpen(true)}
              >
                <Avatar
                  src={getUserPhotoURL(userData)}
                  alt={userData?.name || "U"}
                  sx={{ width: 40, height: 40, border: "2px solid white" }}
                />
                <span className="font-extrabold text-white text-base hidden sm:inline drop-shadow">
                  {userData?.name || "مستخدم"}
                </span>
              </div>
            </Toolbar>
          </AppBar>

          <Fade in={showWelcome} timeout={2000}>
            <div className="w-full py-3 text-center text-xl font-black text-white bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 shadow-2xl">
              {getGreeting()} 👋 {userData?.name || "مستخدم"}!
            </div>
          </Fade>

          <main className="flex-1 w-full p-4 sm:p-6 lg:p-8">
            {/* Hero Section */}
            <section
              id="hero"
              className={`${
                isMobile ? "py-12" : "py-20"
              } max-w-7xl mx-auto w-full text-center rounded-3xl shadow-2xl mb-8 lg:mb-12 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 via-gray-800 to-green-900/40"
                  : "bg-gradient-to-br from-white to-green-50"
              } border-2 ${
                darkMode ? "border-green-500/20" : "border-green-200"
              }`}
            >
              <h2
                className={`${
                  isMobile ? "text-4xl" : "text-6xl"
                } font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 leading-tight drop-shadow-lg`}
              >
                انطلق في رحلة{" "}
                <span className="text-yellow-400 animate-pulse">التعلم</span>{" "}
                باللعب!
              </h2>
              <p
                className={`${
                  isMobile ? "text-lg" : "text-2xl"
                } font-medium max-w-3xl mx-auto mb-10 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                منصة **بلــــــيرن** هي بوابتك نحو تجربة تعليمية ممتعة، حيث
                يتحول كل درس إلى لعبة مثيرة تطلق العنان لإبداعك.
              </p>
            </section>

            {/* Programs Section */}
            <section
              id="programs-overview"
              className="max-w-7xl mx-auto w-full"
            >
              <h2
                className={`${
                  isMobile ? "text-3xl" : "text-4xl"
                } font-black mb-6 lg:mb-10 text-center ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                برامجنا التعليمية المبتكرة 💡
              </h2>

              {/* Programs Grid */}
              <div
                className={`grid ${
                  isMobile
                    ? "grid-cols-1 gap-4"
                    : "grid-cols-1 md:grid-cols-2 gap-6"
                }`}
              >
                {programs.map((p) => {
                  const theme = darkMode ? p.dark : p.light;
                  return (
                    <Paper
                      key={p.id}
                      elevation={darkMode ? 8 : 4}
                      className={`rounded-2xl p-4 lg:p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg border-2 ${theme.bg} ${theme.border} hover:shadow-xl group`}
                    >
                      <div className="flex flex-col items-center text-center gap-3 lg:gap-4">
                        {/* Icon with proper styling */}
                        <div
                          className={`p-3 lg:p-4 rounded-2xl ${theme.iconBg} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className={theme.iconColor}>{p.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2 lg:space-y-3">
                          <h3
                            className={`${
                              isMobile ? "text-lg" : "text-xl"
                            } font-extrabold ${theme.iconColor}`}
                          >
                            {p.name}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${theme.text}`}
                          >
                            {p.description}
                          </p>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => handleOpen(p.path)}
                          className={`mt-2 py-2 lg:py-3 px-6 lg:px-8 w-full rounded-xl font-extrabold text-white bg-gradient-to-r ${theme.button} hover:shadow-2xl transition-all duration-300 border-b-4 hover:scale-105 active:scale-95`}
                        >
                          ابدأ التعلم الآن
                        </button>
                      </div>
                    </Paper>
                  );
                })}
              </div>
            </section>
          </main>

          <Snackbar
            open={toasts.length > 0}
            autoHideDuration={3000}
            onClose={() => setToasts((p) => p.slice(1))}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: isMobile ? "center" : "left",
            }}
          >
            {toasts[0] ? (
              <Alert
                onClose={() => setToasts((p) => p.slice(1))}
                severity={toasts[0].type || "success"}
                sx={{ width: "100%", fontFamily: "Tajawal" }}
              >
                {toasts[0].message}
              </Alert>
            ) : null}
          </Snackbar>

          <footer
            ref={sectionRef}
            className={`relative w-full overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
              darkMode
                ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
                : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
            }`}
          >
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-green-500">
                  <span className="inline-block animate-bounce-slow">
                    بلــــــيرن
                  </span>
                </h2>
                <p
                  className={`mb-6 leading-relaxed text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة
                  لتنمية مهاراتك بطريقة إبداعية.
                </p>
                <div className="flex gap-3 lg:gap-4 mt-4 flex-wrap">
                  {[
                    {
                      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                      url: "https://wa.me/+249997922457",
                      alt: "WhatsApp",
                    },
                    {
                      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                      url: "https://t.me/Mohamed_albasher",
                      alt: "Telegram",
                    },
                    {
                      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                      url: "https://facebook.com",
                      alt: "Facebook",
                    },
                    {
                      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
                      url: "mailto:info@Plarn.com",
                      alt: "Email",
                    },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform transition duration-500 hover:scale-110 hover:-translate-y-1 animate-icon-bounce p-1 rounded-full bg-white shadow-xl"
                    >
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="w-8 h-8 md:w-10 md:h-10"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/40x40/cccccc/000000?text=S";
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-green-500">
                  روابط سريعة
                </h3>
                <ul className="space-y-3 text-base">
                  <li>
                    <a
                      href="#hero"
                      className={`hover:text-green-400 transition-colors ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      العودة إلى الأعلى
                    </a>
                  </li>
                  <li>
                    <a
                      href="#programs-overview"
                      className={`hover:text-green-400 transition-colors ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      استعراض البرامج
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={`hover:text-green-400 transition-colors ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      حول بليرن
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-green-500">
                  تواصل معنا
                </h3>
                <p
                  className={`text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  نحن هنا للإجابة على جميع استفساراتك.
                </p>
                <p className="mt-2 text-green-400 font-semibold">
                  info@Plarn.com
                </p>
                <p className="text-green-400 font-semibold">+24997922457</p>
              </div>
            </div>

            <div
              className={`mt-12 lg:mt-16 border-t ${
                darkMode ? "border-gray-700" : "border-gray-300"
              } pt-6 text-center space-y-2 text-sm`}
            >
              <p
                className={`text-base font-semibold ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © 2025 بلــــــيرن. جميع الحقوق محفوظة.
              </p>
              <div className="flex justify-center gap-6 mt-2">
                <a
                  href="#privacy"
                  className={`hover:text-green-400 transition-colors ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  سياسة الخصوصية
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
