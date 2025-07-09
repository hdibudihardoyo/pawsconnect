import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import MapForm from "../Components/MapForm";
import MapPicker from "../Components/MapPicker";
const AdopsiForm = () => {
  const {
    register,
    handleSubmit,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6">Tambah Data Kucing</h2>

      <h3 className="text-xl font-semibold mb-4">Data Utama</h3>
      <div className="mb-4">
        <label
          htmlFor="nama_kucing"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Kucing
        </label>
        <input
          type="text"
          id="nama_kucing"
          {...register("nama_kucing", { required: "Nama kucing diperlukan" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.nama_kucing && (
          <p className="text-red-500 text-xs mt-1">
            {errors.nama_kucing.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="deskripsi"
          className="block text-sm font-medium text-gray-700"
        >
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          placeholder="Tuliskan Gen dan Usia Kucing"
          {...register("deskripsi", { required: "Deskripsi diperlukan" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.deskripsi && (
          <p className="text-red-500 text-xs mt-1">
            {errors.deskripsi.message}
          </p>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-4">Data Pendukung</h3>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div className="mb-4">
          <label
            htmlFor="umur"
            className="block text-sm font-medium text-gray-700"
          >
            Umur
          </label>
          <input
            type="text"
            id="umur"
            {...register("umur", { required: "Umur diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.umur && (
            <p className="text-red-500 text-xs mt-1">{errors.umur.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="kelamin"
            className="block text-sm font-medium text-gray-700"
          >
            Kelamin
          </label>
          <select
            id="kelamin"
            {...register("kelamin", { required: "Kelamin diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Pilih Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          {errors.kelamin && (
            <p className="text-red-500 text-xs mt-1">
              {errors.kelamin.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="berat"
            className="block text-sm font-medium text-gray-700"
          >
            Berat (kg)
          </label>
          <input
            type="number"
            id="berat"
            {...register("berat", { required: "Berat diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.berat && (
            <p className="text-red-500 text-xs mt-1">{errors.berat.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="warna"
            className="block text-sm font-medium text-gray-700"
          >
            Warna
          </label>
          <input
            type="text"
            id="warna"
            {...register("warna", { required: "Warna diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.warna && (
            <p className="text-red-500 text-xs mt-1">{errors.warna.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="vaksin"
            className="block text-sm font-medium text-gray-700"
          >
            Vaksin
          </label>
          <input
            type="text"
            id="vaksin"
            {...register("vaksin", { required: "Vaksin diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.vaksin && (
            <p className="text-red-500 text-xs mt-1">{errors.vaksin.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="riwayat_penyakit"
            className="block text-sm font-medium text-gray-700"
          >
            Riwayat Penyakit
          </label>
          <input
            type="text"
            id="riwayat_penyakit"
            {...register("riwayat_penyakit")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lahir"
            className="block text-sm font-medium text-gray-700"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="lahir"
            {...register("lahir", { required: "Tanggal lahir diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.lahir && (
            <p className="text-red-500 text-xs mt-1">{errors.lahir.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="tlp_pemilik"
            className="block text-sm font-medium text-gray-700"
          >
            Telepon Pemilik
          </label>
          <input
            type="text"
            id="tlp_pemilik"
            {...register("tlp_pemilik", {
              required: "Telepon pemilik diperlukan",
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.tlp_pemilik && (
            <p className="text-red-500 text-xs mt-1">
              {errors.tlp_pemilik.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="foto_kucing"
            className="block text-sm font-medium text-gray-700"
          >
            Foto Kucing
          </label>
          <input
            type="file"
            id="foto_kucing"
            {...register("foto_kucing", { required: "Foto kucing diperlukan" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.foto_kucing && (
            <p className="text-red-500 text-xs mt-1">
              {errors.foto_kucing.message}
            </p>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Lokasi Kucing</h3>

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
          <p className="text-red-500 text-xs mt-1">{errors.latitude.message}</p>
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

      <MapPicker onLocationSelect={handleLocationSelect} className="mt-4" />

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-4/5 mt-4 text-base bg-primary text-white py-2 rounded-lg hover:bg-purple font-bold font-satoshi-regular"
        >
          Tambah Kucing
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 text-center">{error}</p>
      )}
    </form>
  );
};

export default AdopsiForm;
