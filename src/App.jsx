import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
export default function App() {
  return (
    <div className="min-h-screen text-gray-900 relative">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
