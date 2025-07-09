import React from "react";
import { Link } from "react-router-dom";
import { logorm } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <>
    <div className="w-full mt-24 bg-gradient-to-b from-pink from-5% via-[#C2ABD1] to-purple text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-2 px-8 py-8">
        <div className="col-span-2 pt-8 md:pt-2 ml-6 relative bottom-6">
          <div className="flex items-center mr-6 ">
            {/* logo */}
            <img src={logorm} alt="logo" className="w-32 h-28 relative top-5" />
          </div>
        </div>

        {/* tautan navigasi */}
        {footerLinks.slice(0,3).map((link) => (
          <div
            key={link.title}
            className="flex flex-col ss:my-0 my-2 min-w-[150px] mx-4 gap-2 relative right-12">
            <h4 className="font-Satoshi-Regular font-bold text-xl text-secondary pt-2">
              {link.title}
            </h4>
            <ul className="list-none">
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`py-1 font-Satoshi-Light font-light text-base text-secondary hover:text-primary cursor-pointer ${
                    index !== link.links.length - 1 ? "mb-2" : "mb-0"}`}>              
                <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Footer;
