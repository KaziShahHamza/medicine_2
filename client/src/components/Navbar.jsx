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
    <nav style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ fontWeight: "bold", marginRight: 20 }}>
        MediSync
      </Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>
        </>
      )}

      {user && (
        <>
          <Link to="/dashboard" style={{ marginLeft: 10 }}>
            Dashboard
          </Link>

          <Link to="/test" style={{ marginLeft: 10 }}>
            Test
          </Link>

          <span style={{ marginLeft: 20 }}>
            {user.name || user.email}
          </span>

          <button
            onClick={handleLogout}
            style={{ marginLeft: 10 }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
