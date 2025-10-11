import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../../FireBaseDatabase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import logo from "../../assets/logo/logo.png";

const RegisterForm = () => {
  const [success, setSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { email: preEmail = "", password: prePassword = "" } =
    location.state || {};
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({
    fullName: "",
    email: preEmail,
    username: "",
    password: prePassword,
    confirmPassword: "",
    gender: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const style =
    "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-right placeholder:text-gray-400 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400";

  const showSuccess = (msg) => toast.success(msg);
  const showError = (msg) => toast.error(msg);
  const resetFeedback = () => {
    setError("");
    setErrors({});
    setSuccess(false);
  };

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (!result?.user) return;
        const user = result.user;

        await setDoc(
          doc(db, "users", user.uid),
          {
            name: user.displayName,
            photoURL: user.photoURL,
            provider: "google",
            gender: "",
            agree: true,
            lastLogin: Date.now(),
          },
          { merge: true }
        );

        setSuccess(true);
        showSuccess("✅ تم تسجيل الدخول باستخدام Google بنجاح! سيتم تحويلك...");
        setTimeout(() => navigate("/login"), 3000);
      } catch (err) {
        if (err.code !== "auth/no-auth-event") {
          console.error(err);
          showError("❌ فشل إتمام تسجيل الدخول باستخدام Google.");
        }
      }
    };
    handleRedirectResult();
  }, [navigate]);

  const handleFirebaseError = (err) => {
    console.error("Firebase Error:", err);
    let message = "❌ حدث خطأ غير متوقع. حاول مرة أخرى.";

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
        message = "❌ التسجيل باستخدام البريد الإلكتروني غير مفعل.";
        break;
      default:
        message = "❌ حدث خطأ أثناء إنشاء الحساب.";
    }

    setError(message);
    showError(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();
    setHasSubmitted(true);
    setLoading(true);

    const {
      email,
      password,
      confirmPassword,
      username,
      fullName,
      gender,
      agree,
    } = formState;

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "كلمات المرور غير متطابقة." });
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

      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName,
          username,
          gender,
          agree,
          provider: "email",
          email,
          lastLogin: Date.now(),
        },
        { merge: true }
      );

      setSuccess(true);
      showSuccess(
        "✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول..."
      );
      setTimeout(
        () => navigate("/login", { state: { email, password } }),
        3000
      );
    } catch (err) {
      handleFirebaseError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    resetFeedback();
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "consent" });
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error(err);
      showError("❌ فشل بدء تسجيل الدخول باستخدام Google.");
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-gray-100 font-[Tajawal]"
        dir="rtl"
        lang="ar"
      >
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Form container */}
        <div className="flex items-center justify-center sm:px-6 md:px-8 lg:px-12 min-h-[70vh]">
          <div className="w-full sm:w-[100%] md:w-[80%] lg:w-[60%] max-w-2xl bg-white rounded-2xl shadow-xl p-2 sm:p-6 md:p-6 lg:p-8 xl:p-10 my-10 sm:my-6 md:my-10 lg:my-14">
            <Link to="/main">
              <img
                src={logo}
                alt="plrn Logo"
                className="w-20 mx-auto mb-4 cursor-pointer"
              />
            </Link>

            <h2 className="flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1">
              إنشاء <span className="text-green-500">حساب</span> جديد
            </h2>

            {success && (
              <div className="text-green-600 text-center font-bold text-lg mb-4">
                تم إنشاء الحساب بنجاح!...
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
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
                <input
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="كلمة المرور"
                  required
                  className={style}
                />
                <input
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  required
                  className={style}
                />
                <select
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                  required
                  className={style}
                >
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    id="terms"
                    name="agree"
                    type="checkbox"
                    checked={formState.agree}
                    onChange={handleChange}
                    required
                    className="accent-green-500"
                  />
                  <label
                    htmlFor="terms"
                    className="flex items-center gap-1 text-[16px] font-bold"
                  >
                    أوافق على{" "}
                    <a
                      href="/terms"
                      className="text-[#22c55e] hover:text-[#1565c0] font-bold"
                    >
                      الشروط والأحكام
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
              </button>

              <div className="relative text-center my-4">
                <span className="bg-white px-4 text-gray-500 z-10 relative">
                  أو
                </span>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-0" />
              </div>

              <button
                type="button"
                onClick={handleGoogle}
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

              <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] text-gray-600 font-bold mt-4">
                <div className="whitespace-nowrap">لديك حساب بالفعل؟</div>
                <a
                  href="/login"
                  className="text-[#22c55e] hover:text-[#1565c0] font-bold"
                >
                  تسجيل الدخول
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {hasSubmitted && error && (
        <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default RegisterForm;
