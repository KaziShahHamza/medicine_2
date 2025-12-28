import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: f.name.value,
        email: f.email.value,
        password: f.password.value
      })
    });

    navigate("/login");
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>

      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />

      <button>Signup</button>

      <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </form>
  );
}
