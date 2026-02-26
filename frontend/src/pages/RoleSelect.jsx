import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }
    navigate("/login", { state: { role } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Select Your Role
        </h2>

        {/* Role buttons */}
        <div className="space-y-3">
          {["villager", "sarpanch", "bdpo", "collector"].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`w-full py-3 rounded-lg border font-medium capitalize ${
                role === item
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Selected role text */}
        {role && (
          <p className="text-center mt-4 text-green-700">
            Selected Role: <b className="capitalize">{role}</b>
          </p>
        )}

        {/* Continue button */}
        <button
          onClick={handleNext}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default RoleSelect;
