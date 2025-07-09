import React from "react";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";

const Donasi = () => {
  return (
    <>
      <NavHeader nav="Donasi" page="Beranda" pagenav1=">" page2="Donasi" />
      <div className="hero bg-base-200 min-h-screen mx-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1636249809812-10b728d20cef"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Donasi"
          />
          <div className="ml-0 lg:ml-8 mt-8 lg:mt-0 mx-6">
            <h1 className="text-5xl font-bold text-secondary">Dukung Kami</h1>
            <p className="py-6 text-lg text-secondary">
              Dengan donasi Anda, kami dapat terus menyelamatkan dan merawat kucing yang membutuhkan. Setiap sumbangan Anda sangat berarti bagi kami.
            </p>
            <h2 className="text-2xl font-bold text-secondary mb-4">Cara Berdonasi</h2>
            <p className="text-lg text-secondary mb-4">
              Anda bisa berdonasi melalui beberapa cara berikut:
            </p>
            <ul className="list-disc list-inside text-lg text-secondary space-y-2">
              <li>Transfer Bank ke rekening BCA: 1234567890 a.n. Yayasan Kucing Peduli</li>
              <li>Transfer Bank ke rekening BRI: 0987654321 a.n. Yayasan Kucing Peduli</li>
              <li>Transfer Bank ke rekening Mandiri: 1122334455 a.n. Yayasan Kucing Peduli</li>
              <li>Kitabisa.com: <a href="https://kitabisa.com/campaign/donasimakanobatuntukkucingsakitterlantar" target="_blank" rel="noopener noreferrer" className="text-primary underline">campaign/donasimakanobatuntukkucingterlantar</a></li>
            </ul>
            <p className="text-lg text-secondary mt-4">
              Setiap donasi Anda akan kami gunakan sebaik mungkin untuk kesejahteraan kucing-kucing yang kami rawat.
            </p>
            <button className="btn btn-primary mt-6 text-white">Donasi Sekarang</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donasi;
