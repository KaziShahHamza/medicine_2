import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: f.email.value,
        password: f.password.value
      })
    });

    const data = await res.json();
    login(data);
    navigate("/dashboard");
  };

  return (
    <div className="container py-16 max-w-md">
      <form onSubmit={submit} className="card space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Login
        </h2>

        <input name="email" placeholder="Email" className="input" />
        <input name="password" type="password" placeholder="Password" className="input" />

        <button className="btn-primary w-full">
          Login
        </button>

        <p className="text-sm text-center text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-sky-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
