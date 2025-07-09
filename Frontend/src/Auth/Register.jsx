import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logobaru } from "../assets/index.js";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const handleRegister = async (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password tidak cocok");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/auth-register", {
        nama_depan: firstName,
        nama_belakang: lastName,
        email,
        password,
        confirmPassword,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Email sudah terdaftar");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="w-96 p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex items-center justify-center mb-2">
            <img src={logobaru} alt="Logo" className="w-48" />
          </div>
          <h5 className="text-xl text-center font-semibold text-black mt-6 mb-8">
            Mulai mendaftar
          </h5>
          <div className="mt-4">
            <label htmlFor="firstName">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs font-light mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="lastName">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs font-light mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </label>
          </div>
          <div className="mt-4 relative">
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
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
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
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
          <div className="mt-4 relative">
            <label htmlFor="confirmPassword">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs font-light mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
          </div>

          <p className="text-sm text-secondary font-bold mt-1 ">
            Sudah punya akun?
            <Link to="/login">
              <span className="font-light text-primary underline ml-2">
                Masuk
              </span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple"
          >
            Daftar
          </button>
          {error && (
            <div className="text-red-500 text-xs font-light mt-1">{error}</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Register;
