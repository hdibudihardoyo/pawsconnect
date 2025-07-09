import React from "react";

const Button = (props) => {
  return (
    <>
    <div className="flex w-[188px] h-[62px] items-center justify-center gap-[10px] p-[10px] relative bg-primary rounded-[15px]">
        <button className="relative w-fit mt-[-2.50px] mb-[-0.50px]  font-Satoshi-Regular text-3xl  text-white tracking-[-0.69px] leading-[34px] whitespace-nowrap">{props.children}</button>
    </div>
    </>
  );
};

export default Button;
