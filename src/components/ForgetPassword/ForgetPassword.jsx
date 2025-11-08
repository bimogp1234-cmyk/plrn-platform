import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../FireBaseDatabase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import ToastManager from "../Toast/ToastManager";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(false);

  function showToast(message, type = "success") {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // إرسال رابط استعادة كلمة المرور فقط
      await sendPasswordResetEmail(auth, email);

      showToast(
        "تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.",
        "success"
      );
      setEmail("");
    } catch (error) {
      console.error("Password reset error:", error);
      if (error.code === "auth/user-not-found") {
        showToast("لا يوجد مستخدم بهذا البريد الإلكتروني.", "error");
      } else if (error.code === "auth/invalid-email") {
        showToast("البريد الإلكتروني غير صالح.", "error");
      } else if (error.code === "auth/operation-not-allowed") {
        showToast("إعادة تعيين كلمة المرور غير مفعلة حاليًا.", "error");
      } else if (error.code === "auth/too-many-requests") {
        showToast("طلبات كثيرة جدًا. يرجى المحاولة لاحقًا.", "error");
      } else {
        showToast("حدث خطأ أثناء إرسال الرابط. حاول مرة أخرى.", "error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastManager toasts={toasts} removeToast={removeToast} />
      <div
        className="relative min-h-screen flex items-center justify-center bg-green-50 px-6 font-[Cairo]"
        dir="rtl"
        lang="ar"
      >
        {/* Floating stars */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2.5 h-2.5 bg-gradient-to-b from-green-200 to-green-300 rounded-full opacity-60 animate-[drift_8s_ease-in-out_infinite]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Card */}
        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 text-center animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <Link to="/main">
            <img src={logo} alt="plrn Logo" className="w-28 mx-auto mb-5" />
          </Link>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            نسيت <span className="text-green-400">كلمة </span>المرور؟
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="أدخل بريدك الإلكتروني لاستعادة كلمة المرور"
                required
                className="w-full px-4 py-3 border border-green-300 rounded-lg bg-white text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-1/2 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-green-500 hover:scale-[1.02] transition-all duration-300"
            >
              {loading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
            </button>

            <div className="mt-6 text-sm text-gray-600">
              <span>
                تذكرت كلمة المرور؟{" "}
                <Link
                  to="/login"
                  className="text-green-500 font-bold hover:underline"
                >
                  تسجيل الدخول
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
