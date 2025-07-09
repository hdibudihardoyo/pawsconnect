import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logobaru } from "../assets/index.js";
import { AuthContext } from "../Auth/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:8000/auth-login", {
        email,
        password,
      });
      login(response.data.token, response.data.id);
      navigate("/");
    } catch (err) {
      setError("Email atau password tidak valid");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="w-96 p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex items-center justify-center mb-2">
            <img src={logobaru} alt="Logo" className="w-48" />
          </div>
          <h5 className="text-xl text-center font-semibold text-black mt-6 mb-8">
            Masuk Untuk Melanjutkan
          </h5>

          <div className="mt-4">
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary text-black font-satoshi-regular"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs font-light mt-1">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="mt-4 relative">
            <label htmlFor="password">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary text-black font-satoshi-regular"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs font-light mt-1">
                  {errors.password.message}
                </span>
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
          </div>

          <p className="text-sm text-secondary font-bold mt-1 font-satoshi-regular">
            Belum punya akun?
            <Link
              to="/register"
              className="font-light text-primary underline ml-2"
            >
              Daftar
            </Link>
          </p>
          <button
            type="submit"
            className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple"
          >
            Masuk
          </button>
          {error && (
            <div className="text-red-500 text-xs font-light mt-1">{error}</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
