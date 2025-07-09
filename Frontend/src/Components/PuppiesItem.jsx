import React, { useState } from "react";
import { puppiesItems } from "../constants";

const PuppiesItem = () => {
  return (
    <>
      <div className="flex flex-row mt-10 items-center space-x-10">
        {puppiesItems.map((item) => (
          <div
            key={item.title}
            className="w-fit p-5 rounded-lg shadow-md bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-contain"
            />
            <div className="w-full text-secondary text-3xl font-bold font-Satoshi-Regular leading-[45px] mt-4">
              {item.title}
            </div>
            <div className="w-full text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mt-2">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PuppiesItem;
