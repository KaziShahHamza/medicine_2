import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value
      })
    });

    const data = await res.json();
    login(data);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>

      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        Don’t have an account?{" "}
        <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
}
