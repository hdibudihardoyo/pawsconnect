import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { logobaru } from "../assets/index.js";

const AdminModal = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:8000/auth-login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (err) {
      setError("Email atau password tidak valid");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="my_modal_7" className="cursor-pointer">
          Data Adopsi
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box bg-primary h-5/6 px-4 flex items-center justify-center">
            <div className="w-96 p-8 bg-white shadow-lg rounded-3xl">
              <div className="flex items-center justify-center mb-2">
                <img src={logobaru} alt="Logo" className="w-48" />
              </div>
              <h5 className="text-xl text-center font-bold text-black mt-6 mb-8 font-satoshi-bold">
                Masuk sebagai Admin
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
                    <div
                      role="alert"
                      className="mt-1 text-left text-red-500 text-xs font-light"
                    >
                      {errors.email.message}
                    </div>
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
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <div
                      role="alert"
                      className="mt-1 text-left text-red-500 text-xs font-light"
                    >
                      {errors.password.message}
                    </div>
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-4/5 mt-4 text-base bg-primary text-white py-2 rounded-lg hover:bg-purple font-bold font-satoshi-regular"
                >
                  Masuk
                </button>
              </div>
              {error && (
                <div className="text-red-500 text-xs font-light mt-1">
                  {error}
                </div>
              )}
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </form>
    </>
  );
};

export default AdminModal;
