import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../../FireBaseDatabase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import logo from "../../assets/logo/logo.png";
import {
  ensureUserInitialized,
  updateUserFields,
} from "../Departments/ComputerDep/progressService";

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [googleSetPasswordMode, setGoogleSetPasswordMode] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { email: preEmail = "", password: prePassword = "" } =
    location.state || {};

  const style =
    "w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400";

  // Real-time password match check
  useEffect(() => {
    setPasswordMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showSuccess = (msg) => toast.success(msg, { autoClose: 3000 });
  const showError = (msg) => toast.error(msg, { autoClose: 3000 });

  // Regular Email/Password registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, username, password, confirmPassword, agree } =
      formState;

    if (password !== confirmPassword) {
      showError("❌ كلمات المرور غير متطابقة.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Centralize user creation/update through service helper
      await ensureUserInitialized(user.uid, {
        fullName,
        username,
        email,
        provider: "email",
        agree,
      });

      showSuccess("✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى تسجيل الدخول...");
      setTimeout(
        () => navigate("/login", { state: { email, password } }),
        3000
      );
    } catch (err) {
      console.error("Registration error:", err);
      let message = "❌ حدث خطأ أثناء إنشاء الحساب.";
      switch (err.code) {
        case "auth/email-already-in-use":
          message = "❌ هذا البريد الإلكتروني مستخدم بالفعل.";
          break;
        case "auth/invalid-email":
          message = "❌ البريد الإلكتروني غير صالح.";
          break;
        case "auth/weak-password":
          message = "❌ كلمة المرور ضعيفة جدًا. استخدم 6 أحرف على الأقل.";
          break;
        case "auth/operation-not-allowed":
          message = "❌ إنشاء الحساب باستخدام البريد الإلكتروني غير مفعل.";
          break;
        case "permission-denied":
          message = "❌ ليس لديك صلاحية للقيام بهذه العملية.";
          break;
        default:
          if (err.message?.includes("permission")) {
            message = "❌ خطأ في الصلاحيات. يرجى المحاولة مرة أخرى.";
          }
      }
      showError(message);
    } finally {
      setLoading(false);
    }
  };

  // Google registration/login
  const handleGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists() || !userSnap.data().passwordSet) {
        // Ensure the user doc exists with canonical fields
        await ensureUserInitialized(user.uid, {
          fullName: user.displayName || "",
          username: user.displayName
            ? user.displayName.replace(/\s+/g, "")
            : "",
          email: user.email || "",
          provider: "google",
          agree: true,
        });

        // Still set password mode for first-time Google users
        setGoogleUser(user);
        setGoogleSetPasswordMode(true);
      } else {
        showSuccess("✅ تم تسجيل الدخول بنجاح!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      console.error("Google auth error:", err);
      let message = "❌ فشل تسجيل الدخول باستخدام Google.";
      if (err.code === "permission-denied") {
        message = "❌ ليس لديك صلاحية للوصول إلى البيانات.";
      }
      showError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    if (!googleUser || !passwordMatch) return;

    setLoading(true);
    try {
      await updatePassword(googleUser, newPassword);
      await updateUserFields(googleUser.uid, {
        passwordSet: true,
        lastLogin: Date.now(),
      });
      showSuccess("✅ تم إضافة كلمة المرور بنجاح!");
      setGoogleSetPasswordMode(false);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Set password error:", err);
      let message = "❌ فشل إضافة كلمة المرور. حاول مرة أخرى.";
      if (err.code === "permission-denied") {
        message = "❌ ليس لديك صلاحية لتحديث البيانات.";
      }
      showError(message);
    } finally {
      setLoading(false);
    }
  };

  if (googleSetPasswordMode) {
    return (
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 font-[Tajawal]"
        dir="rtl"
        lang="ar"
      >
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
            إضافة كلمة مرور جديدة
          </h2>
          <form onSubmit={handleSetPassword} className="space-y-4">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="أدخل كلمة المرور الجديدة"
              required
              className={style}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="تأكيد كلمة المرور"
              required
              className={`${style} ${!passwordMatch ? "border-red-500" : ""}`}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm text-center">
                ❌ كلمة المرور غير متطابقة
              </p>
            )}
            <button
              type="submit"
              disabled={loading || !passwordMatch}
              className={`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 ${
                loading || !passwordMatch ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "جاري الحفظ..." : "حفظ كلمة المرور"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="min-h-screen bg-gray-100 font-[Tajawal]"
        dir="rtl"
        lang="ar"
      >
        <div className="flex items-center justify-center sm:px-6 md:px-8 lg:px-12 min-h-[70vh]">
          <div className="w-full sm:w-[100%] md:w-[80%] lg:w-[60%] max-w-2xl bg-white rounded-2xl shadow-xl p-6 my-10">
            <Link to="/main">
              <img
                src={logo}
                alt="Logo"
                className="w-20 mx-auto mb-4 cursor-pointer"
              />
            </Link>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
              إنشاء <span className="text-green-500">حساب</span> جديد
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                value={formState.fullName}
                onChange={handleChange}
                type="text"
                placeholder="الاسم الكامل"
                required
                className={style}
              />
              <input
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                placeholder="البريد الإلكتروني"
                required
                className={style}
              />
              <input
                name="username"
                value={formState.username}
                onChange={handleChange}
                type="text"
                placeholder="اسم المستخدم"
                required
                className={style}
              />
              <div className="relative">
                <input
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة المرور"
                  required
                  className={style + " pr-10"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="تأكيد كلمة المرور"
                  required
                  className={style + " pr-10"}
                />
              </div>

              <div className="flex items-center gap-2 text-sm">
                <input
                  id="terms"
                  name="agree"
                  type="checkbox"
                  checked={formState.agree}
                  onChange={handleChange}
                  required
                  className="accent-green-500"
                />
                <label htmlFor="terms">
                  أوافق على{" "}
                  <a href="/terms" className="text-green-500">
                    الشروط والأحكام
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
              </button>

              <div className="text-center my-4 relative">
                <span className="bg-white px-4 text-gray-500 relative z-10">
                  أو
                </span>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0" />
              </div>

              <button
                type="button"
                onClick={handleGoogle}
                className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                المتابعة باستخدام Google
              </button>

              <div className="flex justify-center gap-2 mt-4">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-green-500">
                  تسجيل الدخول
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default RegisterForm;
