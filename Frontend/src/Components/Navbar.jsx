import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { navigationLinks} from "../constants";
import { logobaru } from "../assets";
import UserMenu from "./UserMenu";
import { AuthContext } from "../Auth/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return null;
  }
  return ( 
    <>
      <div className="md:flex space-x-6 hidden items-center justify-center flex-col md:flex-row mt-2">
        <div className="flex justify-between items-center w-full px-10 mx-12">        

          <div className="flex items-center"> 
            <Link to="/">
              <img src={logobaru} alt="logo" className="w-20 mb-6" />
            </Link>
          </div>

          <div className="flex space-x-6 ml-32">
      {navigationLinks.map((link) => (
        <Link key={link.to} to={link.to} className="text-sky-950 text-base font-light font-Satoshi-Light leading-[40px]">
          {link.label}
        </Link>
      ))}
    </div>
          <div className="relative flex items-center space-x-4">
            <label className="input input-bordered input-primary flex items-center gap-2 border-b-primary h-[30px]">
              <input type="text" className="grow" placeholder="Cari..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
