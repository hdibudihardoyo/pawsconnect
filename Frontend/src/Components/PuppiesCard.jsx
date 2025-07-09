import React from 'react'
import { Link } from "react-router-dom";
import { puppiesItems } from "../constants";

const PuppiesCard = () => {
  return (
     <div className="grid grid-cols-3 gap-8 p-4">
          {puppiesItems.map((puppy) => (
            <Link
              to={`/adopsi/${puppy.id}`}
              key={puppy.id}
              className="relative w-fit overflow-hidden"
            >
              <img
                src={puppy.image}
                alt={`image of${puppy.title}`}
                className="w-full h-86 object-cover hover:cursor-pointer hover:scale-105 duration-300"
              />
              <div className="p-4 w-full">
                <h2 className="text-secondary text-3xl font-bold font-Satoshi-Regular pt-2 leading-[37.50px]">
                  {puppy.title}
                </h2>
                <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px]">
                  {puppy.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
  )
}

export default PuppiesCard;
