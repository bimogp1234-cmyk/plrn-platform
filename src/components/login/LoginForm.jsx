import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../FireBaseDatabase/firebase";
import logo from "../../assets/logo/logo.png";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updatePassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import {
  ensureUserInitialized,
  updateUserFields,
} from "../Departments/ComputerDep/progressService";

const LoginForm = () => {
  const [formState, setFormState] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Google password setup
  const [setPasswordMode, setSetPasswordMode] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [message, setMessage] = useState("");

  const style =
    "w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400";

  // Realtime password confirmation check
  useEffect(() => {
    setPasswordMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const usersRef = collection(db, "users");
      const qEmail = query(
        usersRef,
        where("email", "==", formState.identifier)
      );
      const qUsername = query(
        usersRef,
        where("username", "==", formState.identifier)
      );

      const snapEmail = await getDocs(qEmail);
      const snapUsername = await getDocs(qUsername);
      const userDoc = snapEmail.docs[0] || snapUsername.docs[0];

      if (!userDoc) {
        setError("لا يوجد مستخدم بهذا البريد الإلكتروني أو اسم المستخدم.");
        setLoading(false);
        return;
      }

      const email = userDoc.data().email;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        formState.password
      );
      const user = userCredential.user;

      // Ensure user exists in canonical format and update lastLogin
      await ensureUserInitialized(user.uid, {
        fullName: userDoc.data().fullName,
        username: userDoc.data().username,
        email: userDoc.data().email,
        provider: userDoc.data().provider || "email",
        agree: userDoc.data().agree || false,
      });
      await updateUserFields(user.uid, { lastLogin: Date.now() });

      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);
      let errorMessage =
        "فشل تسجيل الدخول. تحقق من البيانات أو جرب تسجيل الدخول عبر Google.";

      switch (err.code) {
        case "auth/user-not-found":
          errorMessage = "لا يوجد مستخدم بهذا البريد الإلكتروني.";
          break;
        case "auth/wrong-password":
          errorMessage = "كلمة المرور غير صحيحة.";
          break;
        case "auth/invalid-email":
          errorMessage = "البريد الإلكتروني غير صالح.";
          break;
        case "auth/too-many-requests":
          errorMessage = "تم إجراء محاولات كثيرة جدًا. يرجى المحاولة لاحقًا.";
          break;
        case "permission-denied":
          errorMessage = "ليس لديك صلاحية للوصول إلى البيانات.";
          break;
        default:
          if (err.message?.includes("permission")) {
            errorMessage = "خطأ في الصلاحيات. يرجى المحاولة مرة أخرى.";
          }
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists() || !userSnap.data().passwordSet) {
        // Centralize initialization
        await ensureUserInitialized(user.uid, {
          fullName: user.displayName || "",
          username: user.displayName
            ? user.displayName.replace(/\s+/g, "")
            : "",
          email: user.email,
          provider: "google",
          agree: true,
        });

        setGoogleUser(user);
        setSetPasswordMode(true);
      } else {
        // Update last login for existing users
        await updateUserFields(user.uid, {
          lastLogin: Date.now(),
          provider: "google",
        });
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("Google login error:", err);
      let errorMessage = "فشل تسجيل الدخول عبر Google.";

      if (err.code === "permission-denied") {
        errorMessage = "ليس لديك صلاحية للوصول إلى البيانات.";
      } else if (err.code === "auth/popup-closed-by-user") {
        errorMessage = "تم إغلاق نافذة تسجيل الدخول.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    if (!googleUser) return;
    if (!passwordMatch) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      await updatePassword(googleUser, newPassword);
      await updateUserFields(googleUser.uid, {
        passwordSet: true,
        lastLogin: Date.now(),
      });

      setMessage(
        "✅ تم إضافة كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول باستخدام البريد وكلمة المرور."
      );
      setSetPasswordMode(false);
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Set password error:", err);
      let errorMessage = "❌ فشل إضافة كلمة المرور. حاول مرة أخرى.";

      if (err.code === "permission-denied") {
        errorMessage = "❌ ليس لديك صلاحية لتحديث البيانات.";
      } else if (err.code === "auth/requires-recent-login") {
        errorMessage = "❌ تحتاج إلى تسجيل الدخول مرة أخرى لتحديث كلمة المرور.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (setPasswordMode) {
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
            {message && (
              <p className="text-center mt-2 text-sm text-green-600">
                {message}
              </p>
            )}
            {error && (
              <p className="text-center mt-2 text-sm text-red-500">{error}</p>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 font-[Tajawal]"
      dir="rtl"
      lang="ar"
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
        <Link to="/main">
          <img
            src={logo}
            alt="Logo"
            className="w-20 mx-auto mb-4 cursor-pointer"
          />
        </Link>

        <h2 className="flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1">
          تسجيل <div className="text-green-500">الدخول</div>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            name="identifier"
            value={formState.identifier}
            onChange={handleChange}
            type="text"
            placeholder="البريد الإلكتروني أو اسم المستخدم"
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
              className={`${style} pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <div className="relative text-center mb-4">
          <span className="bg-white px-4 text-gray-500 z-10 relative">أو</span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            المتابعة باستخدام Google
          </span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 text-[16px] font-bold mt-4">
          <div className="whitespace-nowrap">ليس لديك حساب؟</div>
          <Link to="/register" className="text-green-500 font-bold">
            إنشاء حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
