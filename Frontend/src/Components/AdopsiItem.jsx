import React from "react";

const AdopsiItem = (props) => {
  return (
    <>
      <div className="hover:cursor-pointer hover:scale-105 duration-300">
        <img src={props.image} alt="adopsi" />
        <h2 className="pt-5 text-sky-950 text-[25px] font-bold font-Satoshi-Regular leading-[37.50px]">
          {props.name}
        </h2>
        <p className="text-sky-950 text-xl font-light font-Satoshi-Light leading-[30px]">
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default AdopsiItem;
