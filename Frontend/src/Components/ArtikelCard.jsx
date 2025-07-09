import React from 'react'
import styles from "../style";
import { artikelItems } from "../constants";

const ArtikelCard = () => {
  return (
    <>
       <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${styles.padding} ${styles.flexCenter}`}
          >
            {artikelItems.slice(0, 3).map((artikel) => (
              <div
                key={artikel.id}
                className="flex flex-col items-center p-5  rounded-lg shadow-md bg-white"
              >
                <img
                  className="w-full h-64 object-cover mb-4"
                  src={artikel.image}
                  alt={artikel.title}
                />
                <h3 className="text-sm t font-light">{artikel.read}</h3>
                <h3 className="text-lg  font-bold mt-2">{artikel.title}</h3>
                <p className="text-sm font-light mt-2">{artikel.content}</p>
                <div className="flex items-center mt-4">
                  <img
                    className="w-6 h-6 mr-2"
                    src={artikel.sourcelogo}
                    alt={artikel.source}
                  />
                  <span className="text-sm text-gray-600 font-bold">
                    {artikel.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default ArtikelCard;
