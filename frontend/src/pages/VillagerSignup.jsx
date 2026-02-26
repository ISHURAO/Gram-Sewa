import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VillagerSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    village: "",
    district: "",
    tehsil: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        ...form,
        role: "villager",
      });
      alert("Account created! Please login");
      navigate("/villager-login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Villager Signup
        </h2>

        <form onSubmit={handleSignup} className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded col-span-2" />

          <input name="district" placeholder="District" onChange={handleChange} className="border p-2 rounded" />
          <input name="tehsil" placeholder="Tehsil" onChange={handleChange} className="border p-2 rounded" />
          <input name="village" placeholder="Village" onChange={handleChange} className="border p-2 rounded col-span-2" />

          <button className="col-span-2 bg-green-600 text-white py-3 rounded-lg text-lg">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default VillagerSignup;
