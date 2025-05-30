
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ExamsList from "./pages/ExamsList";
import TestPage from "./pages/TestPage";

import TestInstructions from "./pages/TestInstructions";
import TestResults from "./pages/TestResults";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";
import AdminExams from "./pages/admin/AdminExams";
import AdminQuestions from "./pages/admin/AdminQuestions";
import AdminUsers from "./pages/admin/AdminUsers";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { getUser, logout } from "./state/auth/Action";
import Footer from "./pages/Footer";
import UserProfile from "./pages/UserProfile";



const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const [user,setUser]=useState("");
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogin=()=>{
    console.log("JWT->"+localStorage.getItem("jwt"));
    console.log("User->",user);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    if (!user || user.role !== "admin") {
      return <Navigate to="/dashboard" />;
    }
    return <>{children}</>;
  };

  return (
        
          <div className="min-h-screen flex flex-col">
            <Navbar user={user} onLogout={handleLogout} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/exams" element={
                  <ProtectedRoute>
                    <ExamsList />
                  </ProtectedRoute>
                } />
                <Route path="/test/:id/instructions" element={
                  <ProtectedRoute>
                    <TestInstructions />
                  </ProtectedRoute>
                } />
                <Route path="/test/:id" element={
                  <ProtectedRoute>
                    <TestPage />
                  </ProtectedRoute>
                } />
                <Route path="/test/:id/results" element={
                  <ProtectedRoute>
                    <TestResults />
                  </ProtectedRoute>
                } />
                <Route path="/analytics" element={
                  <ProtectedRoute>
                    <Analytics />
                  </ProtectedRoute>
                } />

                <Route path="/profile" element={
                  <ProtectedRoute>
                    <UserProfile user={user}/>
                  </ProtectedRoute>
                } />

                {/* Admin Routes */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                } />
                <Route path="/admin/exams" element={
                  <AdminRoute>
                    <AdminExams />
                  </AdminRoute>
                } />
                <Route path="/admin/questions" element={
                  <AdminRoute>
                    <AdminQuestions />
                  </AdminRoute>
                } />
                <Route path="/admin/users" element={
                  <AdminRoute>
                    <AdminUsers />
                  </AdminRoute>
                } />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        
  );
};

export default App;
