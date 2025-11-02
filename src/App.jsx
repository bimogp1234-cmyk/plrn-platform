import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import DragDrop from "./components/Games/DragDrop/DragDrop";
import Memorygame from "./components/Games/MemoryGame/Memorygame";
import MessingLines from "./components/Games/MessingLines/MessingLines";
import FPSGame from "./components/Games/RealisticArena/FPSGame";
import MainComDep from "./components/Departments/ComputerDep/MainComDep";
import PhysicDep from "./components/Departments/PhysicsDep/PhysicDep";
import MathDep from "./components/Departments/MathDep/MathDep";
import FirstAidDep from "./components/Departments/FirstAidDep/FirstAidDep";

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
            <Route path="maincomdep" element={<MainComDep />} />
            <Route path="physicdep" element={<PhysicDep />} />
            <Route path="mathdep" element={<MathDep />} />
            <Route path="firstaid" element={<FirstAidDep />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/dragDrop" element={<DragDrop />} />
            <Route path="/messinglines" element={<MessingLines />} />
            <Route path="/memorycard" element={<Memorygame />} />
            <Route path="/realisticarena" element={<FPSGame />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
