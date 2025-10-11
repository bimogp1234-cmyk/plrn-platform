import { useEffect, useState, useRef } from "react";
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
} from "@mui/material";
import {
  Brightness4,
  Logout,
  Notifications,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Link,
  Calculate,
  Science,
  Computer,
  LocalHospital,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Save, Edit, PhotoCamera } from "@mui/icons-material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Firebase imports — keep these as in your project (firebase is assumed initialized)
import {
  signOut,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../../FireBaseDatabase/firebase";

// -----------------------------------------------------------------------------
// DashboardCombined.jsx
// - Contains two components in one file:
//   1) Dashboard (main app)
//   2) ProfileEditModal (inline, used by Dashboard)
// - Keeps your existing design and styling intact
// - Loads mock "Firestore-like" data for games and programs (replace with real
//   Firestore reads later if you want)
// - Includes helpful comments and clear sections for maintainability
// -----------------------------------------------------------------------------

// -------------------------------
// ProfileEditModal (inline)
// -------------------------------
function ProfileEditModal({
  isOpen = false,
  onClose,
  userData,
  userId,
  fb,
  appId,
  darkMode,
  showToast,
}) {
  const [editedData, setEditedData] = useState({
    fullName: "",
    file: null,
  });
  const [previewURL, setPreviewURL] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Keep form synced with userData
  useEffect(() => {
    if (userData) {
      setEditedData({
        fullName: userData.fullName || userData.name || "",
        file: null,
      });
      setPreviewURL(userData.photoURL || "");
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setEditedData((prev) => ({ ...prev, file }));
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleProfileSave = async () => {
    if (!fb?.db || !userId) {
      showToast("خطأ: لم يتم تهيئة المصادقة أو قاعدة البيانات.", "error");
      return;
    }

    if (!editedData.fullName.trim()) {
      showToast("الرجاء إدخال الاسم الكامل.", "warning");
      return;
    }

    setIsSaving(true);

    let finalPhotoURL = previewURL;

    try {
      // Upload new photo if selected
      if (editedData.file) {
        const storageRef = ref(
          fb.storage,
          `profile_pictures/${userId}/${editedData.file.name}`
        );
        await uploadBytes(storageRef, editedData.file);
        finalPhotoURL = await getDownloadURL(storageRef);
      }

      const userDocRef = doc(
        fb.db,
        `artifacts/${appId}/users/${userId}/profile`,
        "data"
      );
      await setDoc(
        userDocRef,
        {
          fullName: editedData.fullName,
          photoURL: finalPhotoURL,
          lastUpdated: Date.now(),
        },
        { merge: true }
      );

      showToast("تم حفظ الملف الشخصي بنجاح!", "success");
      onClose();
    } catch (error) {
      console.error("Error saving profile:", error);
      const errorMessage =
        error?.code === "permission-denied"
          ? "فشل الحفظ: يرجى التحقق من قواعد الأمان (write)."
          : "فشل الحفظ: حدث خطأ غير متوقع.";
      showToast(errorMessage, "error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        className: `${
          darkMode
            ? "bg-gray-800 text-white shadow-xl shadow-green-900/50"
            : "bg-white text-gray-900 shadow-lg"
        } transition-colors duration-300 rounded-xl`,
      }}
      dir="rtl"
    >
      <DialogTitle
        className={`text-center font-bold text-2xl border-b ${
          darkMode
            ? "border-gray-700 text-green-400"
            : "border-gray-200 text-green-600"
        }`}
      >
        <Edit className="ml-2" />
        تعديل الملف الشخصي
      </DialogTitle>

      <DialogContent className="py-6 space-y-6 flex flex-col items-center">
        {/* Profile picture */}
        <Box className="relative">
          <Avatar
            src={
              previewURL || "https://placehold.co/100x100/333333/ffffff?text=?"
            }
            alt={editedData.fullName || "User"}
            className="w-24 h-24 mb-4 border-4 border-green-500 shadow-lg cursor-pointer"
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="profile-pic-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="profile-pic-upload">
            <IconButton
              color="primary"
              component="span"
              className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Box>

        {/* Full Name */}
        <TextField
          margin="dense"
          name="fullName"
          label="الاسم الكامل"
          type="text"
          fullWidth
          variant="outlined"
          value={editedData.fullName}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
        />

        {/* Email (read-only) */}
        <TextField
          margin="dense"
          label="البريد الإلكتروني"
          type="email"
          fullWidth
          variant="outlined"
          value={userData?.email || ""}
          disabled
          InputLabelProps={{ shrink: true }}
        />

        {/* User ID (read-only) */}
        <TextField
          margin="dense"
          label="معرّف المستخدم"
          type="text"
          fullWidth
          variant="outlined"
          value={userId || "N/A"}
          disabled
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>

      <DialogActions className="p-4 flex justify-between">
        <Button
          onClick={onClose}
          variant="outlined"
          className={`font-bold transition-all ${
            darkMode
              ? "text-white border-red-500 hover:bg-red-500/10"
              : "text-red-500 border-red-500 hover:bg-red-500/10"
          }`}
          disabled={isSaving}
        >
          إلغاء
        </Button>
        <Button
          onClick={handleProfileSave}
          variant="contained"
          className="font-bold bg-green-500 hover:bg-green-600 text-white transition-all transform hover:scale-[1.02]"
          startIcon={<Save />}
          disabled={isSaving}
        >
          {isSaving ? "جاري الحفظ..." : "حفظ التعديلات"}
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
  const handleOpen = (path) => {
    if (!path) {
      showToast("المسار غير متاح حالياً.", "info");
      return;
    }

    if (!userId || !userData) {
      showToast("يجب تسجيل الدخول أولاً.", "warning");
      return;
    }

    setIsSidebarOpen(false);

    // Navigate and send user data via router state
    navigate(`/${path}`, {
      state: {
        userId,
        userData,
        darkMode,
      },
    });
  };

  // ----------------- Firebase & user state -----------------
  // fb holds db & auth wrappers so we can pass them to modal
  const [fb, setFb] = useState({ auth, db });
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // ----------------- Content (mocked Firestore style) -----------------
  // We'll load mock data here — structured like a Firestore response so swapping to
  // real Firestore reads will be trivial.
  const [programs, setPrograms] = useState([]);

  const sectionRef = useRef(null);

  // ----------------- Helper: toast -----------------
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((p) => [...p, { id, message, type }]);
    // Auto remove after 3s
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3000);
  };

  // ----------------- Greeting -----------------
  const getGreeting = () => {
    // Detect user's local timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Define Sudan’s timezone and offset (UTC+2)
    const sudanOffset = 2;

    let hour;

    try {
      if (userTimeZone === "Africa/Khartoum") {
        // User is in Sudan — just use local time
        hour = new Date().getHours();
      } else {
        // Convert UTC time to Sudan local time
        const now = new Date();
        hour = (now.getUTCHours() + sudanOffset) % 24;
      }
    } catch (error) {
      // Fallback in case timezone detection fails
      hour = (new Date().getUTCHours() + sudanOffset) % 24;
    }

    // Determine greeting based on Sudan’s local time
    if (hour < 12) return "صباح الخير";
    if (hour < 18) return "مساء الخير";
    return "مساء النور";
  };

  // ----------------- Auth initialization -----------------
  useEffect(() => {
    // Keep Firebase objects from imports in state to pass down
    setFb({ auth, db });

    // Listen for auth state updates
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else setUserId(null);
      setIsAuthReady(true);
    });

    // If you have an initial token mechanism, keep it here (optional)
    // (left intentionally minimal since firebase is already configured)

    return () => unsubscribe();
  }, []);

  // ----------------- Load user profile (real-time) -----------------
  useEffect(() => {
    if (!isAuthReady) return;

    let unsubscribe = () => {};

    if (userId && fb?.db) {
      // Reference the top-level users collection
      const userDocRef = doc(fb.db, "users", userId);

      unsubscribe = onSnapshot(
        userDocRef,
        (snap) => {
          console.log("Snapshot exists?", snap.exists());
          console.log("Data:", snap.data());
          if (snap.exists()) {
            const data = snap.data();
            setUserData({
              fullName: data.name || "ضيف جديد", // use 'name' from Firestore
              photoURL:
                data.photoURL ||
                "https://placehold.co/100x100/10b981/ffffff?text=U",
            });
          } else {
            // document doesn't exist yet
            setUserData({
              fullName: "ضيف جديد",
              photoURL: "https://placehold.co/100x100/10b981/ffffff?text=U",
            });
          }
          setLoading(false);
        },
        (err) => {
          console.error("profile onSnapshot error:", err);
          setUserData({
            fullName: "مستخدم",
            photoURL: "https://placehold.co/100x100/333333/ffffff?text=?",
          });
          setLoading(false);
        }
      );
    } else if (isAuthReady && !userId) {
      // fallback for anonymous/not-signed-in
      setUserData({
        fullName: "مستخدم غير معروف",
        photoURL: "https://placehold.co/100x100/333333/ffffff?text=?",
      });
      setLoading(false);
    }

    // Cleanup
    return () => unsubscribe();
  }, [isAuthReady, userId, fb]);

  // ----------------- Load mock content (games & programs) -----------------
  useEffect(() => {
    // Simulate async load (like fetching from Firestore)
    const loadMockContent = async () => {
      // In your real implementation, replace this with Firestore reads (getDocs)
      await new Promise((r) => setTimeout(r, 350)); // small delay for UX

      const mockPrograms = [
        {
          id: "computer",
          name: "الحاسوب",
          path: "maincomdep",

          description: "مسار الحاسوب التفاعلي",
          icon: <Computer />,
        },
        {
          id: "firstaid",
          path: "firstaid",

          name: "الإسعافات الأولية",
          description: "أساسيات الإسعاف الأولي",
          icon: <LocalHospital />,
        },
        {
          id: "math",
          path: "mathdep",

          name: "الرياضيات",
          description: "تطوير المهارات الحسابية",
          icon: <Calculate />,
        },
        {
          id: "physics",
          path: "physicdep",
          name: "الفيزياء",
          description: "مقدمات في الفيزياء",
          icon: <Science />,
        },
      ];

      setPrograms(mockPrograms);
    };

    loadMockContent();
  }, []);

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
  const toggleTheme = () => setDarkMode((p) => !p);

  // ----------------- Custom styles (keep same as original) -----------------
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

  // ----------------- Sidebar component (inline) -----------------
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
            ? "bg-gray-900 text-white border-l border-green-700/50"
            : "bg-white text-gray-800 border-l border-green-200"
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
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 dark:bg-gray-700/50 shadow-inner cursor-pointer hover:shadow-green-500/50 transition-shadow"
            onClick={() => setIsModalOpen(true)}
          >
            <Avatar
              src={userData?.photoURL}
              alt={userData?.fullName || "U"}
              sx={{ width: 48, height: 48, border: "2px solid #4ade80" }}
            />
            <span className="font-extrabold text-lg text-green-300">
              {userData?.fullName || "مستخدم"}
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
              onClick={() => {
                handleOpen(p.path, auth.currentUser?.uid);
                setIsSidebarOpen(false);
              }}
              className="flex items-center gap-4 text-lg font-medium py-3 px-2 rounded-xl transition-all duration-200 hover:bg-blue-600/30 hover:text-blue-300 hover:shadow-md"
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
          >
            <Brightness4 className="text-blue-400" />
          </IconButton>
          <IconButton
            onClick={handleLogout}
            title="تسجيل الخروج"
            className="p-3 rounded-full bg-red-500/10 hover:bg-red-500/20"
          >
            <Logout className="text-red-400" />
          </IconButton>
          <IconButton
            title="الإشعارات"
            className="p-3 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20"
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

        {/* Inline ProfileEditModal usage */}
        <ProfileEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userData={userData}
          userId={userId}
          fb={fb}
          appId={"default-app-id"}
          darkMode={darkMode}
          showToast={showToast}
        />

        <div className="flex-1 flex flex-col transition-all duration-300">
          <AppBar position="sticky" className={`shadow-2xl`}>
            <Toolbar className="flex justify-between w-full p-2 sm:p-4 bg-gradient-to-l from-green-600/90 to-blue-600/90 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3">
                <IconButton
                  onClick={() => setIsSidebarOpen(true)}
                  color="inherit"
                  title="قائمة التنقل"
                >
                  <MenuIcon className="text-white hover:scale-110 transition-transform" />
                </IconButton>
                <h1 className="text-3xl font-black text-white ml-2 drop-shadow-md">
                  بلــــــيرن
                </h1>
              </div>

              <div
                className="flex items-center gap-3 p-1 rounded-full bg-white/10 pr-4 transition-all duration-300 hover:bg-white/20 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Avatar
                  src={userData?.photoURL}
                  alt={userData?.fullName || "U"}
                  sx={{ width: 40, height: 40, border: "2px solid white" }}
                />
                <span className="font-extrabold text-white text-base hidden sm:inline drop-shadow">
                  {userData?.fullName || "مستخدم"}
                </span>
              </div>
            </Toolbar>
          </AppBar>

          <Fade in={showWelcome} timeout={2000}>
            <div className="w-full py-3 text-center text-xl font-black text-white bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 shadow-2xl">
              {getGreeting()} 👋 {userData?.fullName || "مستخدم"}!
            </div>
          </Fade>

          <main className="flex-1 w-full p-4 sm:p-8">
            <section
              id="hero"
              className={`py-20 max-w-7xl mx-auto w-full text-center rounded-3xl shadow-2xl mb-12 ${
                darkMode ? "bg-gray-800/80" : "bg-white/90"
              }`}
            >
              <h2 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 leading-tight drop-shadow-lg">
                انطلق في رحلة{" "}
                <span className="text-yellow-400 animate-pulse">التعلم</span>{" "}
                باللعب!
              </h2>
              <p className="text-2xl opacity-90 font-medium max-w-3xl mx-auto mb-10 text-gray-300 dark:text-gray-400">
                منصة **بلــــــيرن** هي بوابتك نحو تجربة تعليمية ممتعة، حيث
                يتحول كل درس إلى لعبة مثيرة تطلق العنان لإبداعك.
              </p>
            </section>

            <section
              id="programs-overview"
              className="py-12 max-w-7xl mx-auto w-full"
            >
              <h2 className="text-4xl font-black mb-10 text-purple-400 text-center">
                برامجنا التعليمية المبتكرة 💡
              </h2>
              {/* التعديل هنا: lg:grid-cols-4 تم تغييره إلى lg:grid-cols-2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {programs.map((p) => (
                  <Paper
                    key={p.id}
                    elevation={10}
                    id={p.id}
                    className={`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.05] cursor-pointer shadow-xl border-b-4 ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700 border-purple-500"
                        : "bg-white hover:bg-gray-50 border-purple-400"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <span className="text-4xl text-purple-400 mb-2 p-3 rounded-full bg-purple-500/10">
                        {p.icon}
                      </span>
                      <h3 className="text-xl font-extrabold text-purple-400">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm opacity-80">{p.description}</p>
                      <button
                        onClick={() =>
                          handleOpen(p.path, auth.currentUser?.uid)
                        }
                        className="mt-2 py-2 px-6 text-xl rounded-full font-extrabold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98] border-b-4 border-green-700"
                      >
                        ابداً اللعب الآن
                      </button>
                    </div>
                  </Paper>
                ))}
              </div>
            </section>
          </main>

          <Snackbar
            open={toasts.length > 0}
            autoHideDuration={3000}
            onClose={() => setToasts((p) => p.slice(1))}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
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
            className={`relative w-full overflow-hidden py-20 px-4 sm:px-8 transition-all duration-700 ${
              darkMode
                ? "bg-gray-900 text-white"
                : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
            }`}
          >
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h2 className="text-4xl font-extrabold mb-4 text-green-500">
                  <span className="inline-block animate-bounce-slow">
                    بلــــــيرن
                  </span>
                </h2>
                <p className="mb-6 leading-relaxed text-base opacity-90">
                  منصة تعليمية تفاعلية مبتكرة تقدم تجربة تعلم عبر الألعاب مصممة
                  لتنمية مهاراتك بطريقة إبداعية.
                </p>
                <div className="flex gap-4 mt-4 flex-wrap">
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
                <h3 className="text-2xl font-bold mb-4 text-green-500">
                  روابط سريعة
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="opacity-80">
                    <a
                      href="#hero"
                      className="hover:text-green-400 transition-colors"
                    >
                      العودة إلى الأعلى
                    </a>
                  </li>
                  <li className="opacity-80">
                    <a
                      href="#games"
                      className="hover:text-green-400 transition-colors"
                    >
                      استعراض الألعاب
                    </a>
                  </li>
                  <li className="opacity-80">
                    <a
                      href="#about"
                      className="hover:text-green-400 transition-colors"
                    >
                      حول بليرن
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-500">
                  تواصل معنا
                </h3>
                <p className="text-base">
                  نحن هنا للإجابة على جميع استفساراتك.
                </p>
                <p className="mt-2 text-green-400 font-semibold">
                  info@Plarn.com
                </p>
                <p className="text-green-400 font-semibold">+24997922457</p>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-center space-y-2 text-sm">
              <p className="text-base font-semibold">
                © 2025 بلــــــيرن. جميع الحقوق محفوظة.
              </p>
              <div className="flex justify-center gap-6 mt-2">
                <a
                  href="#privacy"
                  className="hover:text-green-400 transition-colors"
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
