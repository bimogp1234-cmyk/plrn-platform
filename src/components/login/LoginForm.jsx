import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth, db } from "../../FireBaseDatabase/firebase";
import logo from "../../assets/logo/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const LoginForm = () => {
  const location = useLocation();
  const { email = "", password = "" } = location.state || {};
  const [formState, setFormState] = useState({ email, password });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }
  //handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { email, password } = formState;
      await signInWithEmailAndPassword(auth, email, password);

      // setTimeout(() => {}, 1000);

      // Show success message or redirect
      // alert("تم تسجيل الدخول بنجاح!");
      window.location.href = "/dashboard"; // or your desired route
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("لا يوجد مستخدم بهذا البريد الإلكتروني.");
      } else if (error.code === "auth/wrong-password") {
        setError("كلمة المرور غير صحيحة.");
        setFormState((prev) => ({ ...prev, password: "" }));
      } else if (error.code === "auth/invalid-email") {
        setError("البريد الإلكتروني غير صالح.");
      } else {
        setError("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.");
      }

      setTimeout(() => setError(""), 3000);
      setLoading(false);
    }
  }

  //handle google
  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        provider: "google",
      });

      // Optional: show toast
      // showToast("تم تسجيل الدخول باستخدام Google!", "success");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (error) {
      console.error(error);
      setError("تعذر تسجيل الدخول باستخدام Google. حاول مرة أخرى.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
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
            alt="plern Logo"
            className="w-20 mx-auto mb-4 cursor-pointer"
          />
        </Link>

        <h2 className="flex flex-wrap justify-center items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 gap-1">
          تسجيل <div className="text-green-500">الدخول</div>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <input
              name="email"
              value={formState.email}
              onChange={handleChange}
              type="email"
              placeholder="البريد الإلكتروني"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              name="password"
              value={formState.password}
              onChange={handleChange}
              type="password"
              placeholder="كلمة المرور"
              required
              className={`w-full px-4 py-3 rounded-xl border border-gray-300 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                error === "كلمة المرور غير صحيحة." ? "animate-shake" : ""
              }`}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-right">
              <Link
                to="/forget-password"
                className="text-sm text-blue-500 hover:underline font-medium"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 bg-green-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>

            <div className="relative text-center">
              <span className="bg-white px-4 text-gray-500 z-10 relative">
                أو
              </span>
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

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 text-[16px] font-bold">
              <div className="whitespace-nowrap">ليس لديك حساب؟</div>
              <a
                href="/register"
                className="relative inline-block group font-medium overflow-hidden"
              >
                <div className="px-3 py-1 relative">
                  <div className="relative z-10 flex items-center gap-1 text-[#22c55e] transition-colors duration-500 group-hover:text-[#1565c0]">
                    إنشاء حساب جديد
                  </div>
                  <div className="absolute bottom-0 right-3 h-[2px] w-0 bg-[#1565c0] transition-all duration-500 group-hover:w-[83.5%]" />
                </div>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
