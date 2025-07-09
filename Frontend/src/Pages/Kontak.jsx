import React from "react";
import NavHeader from "../Components/NavHeader";
import { kontak, map, call, mail } from "../assets";
import Artikel from "../Components/Artikel";
import Footer from "../Components/Footer.jsx";

const Kontak = () => {
  return (
    <>
      <NavHeader nav="Kontak" page="Beranda" pagenav1=">" page2="Kontak" />
      <div className="flex  items-center p-5 space-x-20 mx-20  ">
        <div className="flex-1 w-64 h-72 ">
          <h1 className="text-2xl text-secondary font-semibold font-satoshi-light">
            Get in Touch
          </h1>
          <br />
          <p className="text-secondary text-lg font-light font-satoshi-light mr-5">
            Apabila Anda mengalami kesulitan saat menggunakan website ini,
            silahkan sampaikan melalui layanan pelanggan kami
          </p>
          <div className="flex flex-row text-sm font-light font-satoshi-light text-primary items-center mt-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <img src={map} alt="map" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">
                  Jln. Sukopuro Wetan, Kertasono, Bandung, Jawa Barat
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={call} alt="call" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">
                  +62 81946757176
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={mail} alt="mail" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">
                  pawpawconnect@mail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-64 h-70">
          <img src={kontak} alt="kontak" />
        </div>
      </div>
      <Artikel />
      <Footer />
    </>
  );
};

export default Kontak;
