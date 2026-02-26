import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("villager");

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      
      {/* LEFT BRAND SECTION */}
      <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-green-700 to-green-500 text-white">
        <h1 className="text-4xl font-bold mb-4">🌾 GramSewa</h1>
        <p className="text-lg opacity-90 mb-6">
          Connecting Villagers with Local Governance
        </p>

        <ul className="space-y-3 text-base">
          <li>✅ File Complaints Easily</li>
          <li>📢 Get Official Updates</li>
          <li>🛡️ Transparent Panchayat System</li>
        </ul>

        <p className="mt-10 text-sm opacity-75">
          Government of India Initiative
        </p>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

          {/* Role Toggle */}
          <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
            {["villager", "sarpanch"].map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`w-1/2 py-2 rounded-xl text-sm font-medium transition ${
                  role === r
                    ? "bg-green-600 text-white"
                    : "text-gray-600"
                }`}
              >
                {r === "villager" ? "👨‍🌾 Villager" : "🏛️ Sarpanch"}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            {role === "villager" ? "Villager Login" : "Sarpanch Login"}
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Secure access to your village dashboard
          </p>

          {/* FORM */}
          <form className="space-y-4">
            {role === "villager" ? (
              <>
                <input
                  type="text"
                  placeholder="Aadhaar / Mobile Number"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="password"
                  placeholder="OTP / Password"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Sarpanch ID"
                  className="w-full px-4 py-3 border rounded-xl"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-xl"
                />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Continue to GramSewa →
            </button>
          </form>

          {role === "villager" && (
            <p className="text-center text-sm mt-4">
              New user?{" "}
              <span className="text-green-600 font-medium cursor-pointer">
                Create account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
