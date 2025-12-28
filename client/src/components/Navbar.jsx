// client/src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-xl text-sky-600">
          MediSync
        </Link>

        <div className="flex items-center gap-4">
          {!user && (
            <Link to="/login" className="text-slate-600 hover:text-sky-600">
              Login
            </Link>
          )}

          {user && (
            <>
              <span className="text-sm text-slate-500">
                Welcome, {user.name || user.email}
              </span>

              <Link to="/dashboard" className="hover:text-sky-600">
                Your Medicines
              </Link>
              <Link to="/health" className="hover:text-sky-600">
                Health Report
              </Link>
              <Link to="/test" className="hover:text-sky-600">
                Test
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
