import React from "react";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";

const Sukarelawan = () => {
  return (
    <>
      <NavHeader nav="Sukarelawan" page="Beranda" pagenav1=">" page2="Sukarelawan" />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1707723720145-d66c2af42d66)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Jadilah Sukarelawan!</h1>
            <p className="mb-5">
              Bergabunglah dengan kami untuk membantu kucing-kucing terlantar mendapatkan kehidupan yang lebih baik. 
              Dengan menjadi sukarelawan, Anda dapat membuat perbedaan nyata dalam kehidupan mereka.
            </p>
            <button className="btn btn-primary">Daftar Sekarang</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-secondary">Kenapa Menjadi Sukarelawan?</h2>
          <p className="text-lg text-secondary mt-4">
            Menjadi sukarelawan memberi Anda kesempatan untuk:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1562978715-4ebe4fccc065"
              alt="Volunteer 1"
              className="w-full h-48 object-cover rounded-t-lg bottom-24"
            />
            <h3 className="text-xl font-bold mt-4">Membantu Kucing</h3>
            <p className="text-secondary mt-2">
              Memberikan perawatan, makanan, dan kasih sayang kepada kucing yang membutuhkan.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1622422098590-5937643cc1eb"
              alt="Volunteer 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Mengembangkan Keterampilan</h3>
            <p className="text-secondary mt-2">
              Memperoleh pengalaman berharga dan keterampilan baru dalam merawat hewan.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1566152376619-5868ae9070d6"
              alt="Volunteer 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Menjadi Bagian dari Komunitas</h3>
            <p className="text-secondary mt-2">
              Bergabung dengan komunitas pecinta kucing yang peduli dan saling mendukung.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sukarelawan;
