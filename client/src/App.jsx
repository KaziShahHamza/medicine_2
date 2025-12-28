// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { AuthProvider } from "./context/AuthContext";
import { MedicineProvider, useMedicines } from "./context/MedicineContext";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";

import useMedicineReminder from "./hooks/useMedicineReminder";
import Health from "./pages/Health";

function ReminderWrapper() {
  const { medicines } = useMedicines();
  useMedicineReminder(medicines);
  return null;
}

export default function App() {
  // request notification permission once
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <AuthProvider>
      <MedicineProvider>
        <BrowserRouter>
          <Navbar />

          {/* background reminder engine */}
          <ReminderWrapper />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/health"
              element={
                <ProtectedRoute>
                  <Health />
                </ProtectedRoute>
              }
            />

            <Route
              path="/test"
              element={
                <ProtectedRoute>
                  <TestPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </MedicineProvider>
    </AuthProvider>
  );
}
