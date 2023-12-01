import React from "react";
import { NavLink } from "react-router-dom";

interface Product {
  imageUrl: string;
  name: string;
  price: number;
  discountedPrice: number;
}

export const ProductDetail: React.FC<Product> = ({
  imageUrl,
  name,
  price,
  discountedPrice,
}) => {
  return (
    <div className="w-[300px] h-[350px] flex justify-center items-center flex-col">
      
    <NavLink
    to="/product-details"
    style={{textDecoration:"none"}}
    >
    <div className="w-[300px] h-[300px] bg-[#F2F4F6] flex justify-center items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-[350px] h-[300px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-[1.04]"
        />
      </div>
    </NavLink>
      <div className="w-[350px] h-[170px] flex flex-col justify-center items-center">
        <p className="text-center text-[grey] font-lighter">{name}</p>

        <p className="text-center text-[#00000096] font-semi-bold">
          ${price}{" "}
          <span className="text-center font-bold text-[#000000b9]">
            ${discountedPrice}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};
