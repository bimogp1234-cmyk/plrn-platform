import { useEffect } from "react";

const ToastManager = ({ toasts, removeToast }) => {
  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  return (
    <div
      className="fixed top-6 right-6 z-50 flex flex-col gap-4 items-end"
      dir="rtl"
    >
      {toasts.map((toast) => {
        const bg =
          toast.type === "success"
            ? "bg-green-500"
            : toast.type === "error"
            ? "bg-red-500"
            : "bg-gray-700";

        return (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${bg}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-black font-medium">
                {toast.message}
              </span>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-black hover:text-gray-200 text-lg font-bold"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToastManager;
