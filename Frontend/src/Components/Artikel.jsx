import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ArtikelCard from "./ArtikelCard";


const Artikel = () => {
  return (
    <>
        <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular">
            Artikel Terbaru Kami
          </h1>
          <Link to="/artikel">
            <Button variant="primary">Selengkapnya</Button>
          </Link>
        </div>
        <ArtikelCard />
    </>
  );
};

export default Artikel;
