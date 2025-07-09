import React from "react";
import styles from "../style";
import Footer from "../Components/Footer";
import NavHeader from "../Components/NavHeader";
import PuppiesCard from "../Components/PuppiesCard";

const Adopsi = () => {
  return (
    <>
      <NavHeader
        nav="Detail Kucing"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
      />
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
       <PuppiesCard/>
      </section>
      <Footer />
    </>
  );
};

export default Adopsi;
