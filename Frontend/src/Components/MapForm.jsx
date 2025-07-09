import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import MapPicker from "./MapPicker";

const MapForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/add-kucing",
        data,
      );
      if (response.status === 200) {
        alert("Data kucing berhasil ditambahkan");
      }
    } catch (err) {
      setError("Gagal menambahkan data kucing");
    }
  };

  const handleLocationSelect = ([lat, lng]) => {
    setValue("latitude", lat);
    setValue("longitude", lng);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 ">
      {/* <h3 className="text-xl font-semibold mb-4">Lokasi Kucing</h3> */}
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {/* Form fields untuk data pendukung lainnya */}

        <div className="mb-4">
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-gray-700"
          >
            Latitude
          </label>
          <input
            type="number"
            step="0.000001"
            id="latitude"
            {...register("latitude", { required: "Latitude diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.latitude && (
            <p className="text-red-500 text-xs mt-1">
              {errors.latitude.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-gray-700"
          >
            Longitude
          </label>
          <input
            type="number"
            step="0.000001"
            id="longitude"
            {...register("longitude", { required: "Longitude diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.longitude && (
            <p className="text-red-500 text-xs mt-1">
              {errors.longitude.message}
            </p>
          )}
        </div>
      </div>

      <MapPicker onLocationSelect={handleLocationSelect} />

      {/* <div className="flex justify-center">
        <button
          type="submit"
          className="w-4/5 mt-4 text-base bg-primary text-white py-2 rounded-lg hover:bg-purple font-bold font-satoshi-regular"
        >
          Tambah Kucing
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 text-center">{error}</p>
      )} */}
    </form>
  );
};

export default MapForm;
