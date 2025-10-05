import React, { useState } from "react";
import loginImage from "../assets/loginimage.jpg"; // replace with your image

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-4 md:p-16 gap-6 bg-gray-50">
      {/* Image */}
      <div className="md:flex-1 w-full rounded-md">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-64 md:h-full object-cover rounded-md"
        />
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 md:p-10 bg-white rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition font-semibold"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <span className="text-red-600 hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
