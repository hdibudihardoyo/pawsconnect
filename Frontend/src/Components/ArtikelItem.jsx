import React from "react";
import { artikelItems } from "../constants";
import { Link } from "react-router-dom";

const ArtikelItem = () => {
  return (
    <>
     <div className="container mx-20">
            {artikelItems.slice(1, 4).map((artikel) => (
              <div
                key={artikel.id}
                className="flex  items-center p-5  space-x-20 space-y-16 mt-8 ml-6 "
              >
                <img
                  className="w-96 h-72  scale-125 object-cover mb-4"
                  src={artikel.image}
                  alt={artikel.title}
                />
                <div className="flex-1 w-56 h-72 space-y-4">
                  <h3 className="text-sm font-light">{artikel.date}</h3>
                  <h3 className="text-lg  font-bold mt-2">{artikel.title}</h3>
                  <p className="text-sm font-light mt-2 mr-48 ">{artikel.content}</p>
                  <div className="flex text-sm font-light font-satoshi-light text-primary items-center mt-4 cursor-pointer">
    
                  <Link to={artikel.link}>{artikel.more}</Link>
    
                  </div>
                </div>
              </div>
            ))}
          </div>
    </>
  );
};

export default ArtikelItem;
