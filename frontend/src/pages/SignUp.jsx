import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    village: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful ✅ Please login");
    } catch (error) {
      alert(
        error?.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Citizen Signup – GramSewa 🌾
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Register to access village services & transparency
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="village"
            placeholder="Village Name"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
