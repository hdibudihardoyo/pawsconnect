import React from "react";
import styles from "../style";
import { puppiesItems } from "../constants";

const Puppies = () => {
  return (
    <>
      <div className="border-b-2 border-[#D9D9D9] shadow-inner bg-[#F8F8F8]">
        <div className="flex flex-col items-center mx-auto mb-8 mt-20">
          <section id="home-2" className={`${styles.section} text-center`}>
            <h2 className="text-primary text-xl font-bold font-Satoshi-Regular leading-snug mt-10">
              Bertemu dengan kucingmu
            </h2>
            <h1 className="text-cyan text-6xl font-bold font-Satoshi-Regular leading-[105px]">
              Puppies Menunggu untuk Adopsi
            </h1>
            <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mx-40 mt-10 mb-10">
              Tes DNA kucing adalah yang terbaik karena memberikan informasi
              tentang asal-usul ras dan kesehatan sebagian besar kucing. Jadi,
              jika Anda ingin mengetahui lebih banyak tentang asal-usul ras dan
              informasi kesehatan kucing Anda, tes ini sangat direkomendasikan.
            </p>
            <section className={`${styles.flexCenter} ${styles.paddingY}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-10 items-center ">
                {puppiesItems.slice(0, 3).map((puppy) => (
                  <div
                    key={puppy.title}
                    className="flex flex-col items-center  w-fit border-b-2 border-greyLight shadow-inner rounded-[15px] p-4"
                  >
                    <img
                      src={puppy.image}
                      alt={`image of ${puppy.title}`}
                      className="w-full h-auto object-cover hover:cursor-pointer hover:scale-105 duration-300"
                    />
                    <div className="w-[84px] text-secondary text-3xl  font-bold font-Satoshi-Regular leading-[45px] pl-5 ">
                      {puppy.title}
                    </div>
                    <div className="w-[315px] text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mt-2">
                      {puppy.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Puppies;
