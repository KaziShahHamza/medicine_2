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
    <div className="container py-16 w-130">
      <form onSubmit={submit} className="card space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Create account
        </h2>

        <input name="name" placeholder="Name" className="input" />
        <input name="email" placeholder="Email" className="input" />
        <input name="password" type="password" placeholder="Password" className="input" />

        <button className="btn-primary w-full">
          Signup
        </button>

        <p className="text-sm text-center text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
