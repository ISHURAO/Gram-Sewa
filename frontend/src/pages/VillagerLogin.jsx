import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function VillagerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role: "villager" }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/villager");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Villager Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          New villager?{" "}
          <Link to="/villager-signup" className="text-green-700 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default VillagerLogin;
