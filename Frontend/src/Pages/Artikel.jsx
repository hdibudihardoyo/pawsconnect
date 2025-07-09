import React from "react";
import ArtikelItem from "../Components/ArtikelItem";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";

const Artikel = () => {
  return (
    <>
      <NavHeader nav="Artikel" page="Beranda" pagenav1=">" page2="Artikel" />
      <ArtikelItem/>
      <Footer />
    </>
  );
};

export default Artikel;
