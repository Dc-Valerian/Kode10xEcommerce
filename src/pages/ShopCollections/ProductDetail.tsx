import React from "react";

interface Product {
  imageUrl: string;
  name: string;
  price: number;
  discountedPrice: number;
  ratings: number[];
}

export const ProductDetail: React.FC<Product> = ({
  imageUrl,
  name,
  price,
  discountedPrice,
}) => {
  return (
    <div className="w-[300px] h-[400px] flex justify-center items-center flex-col">
      <div className="w-[300px] h-[300px] bg-[#F2F4F6] flex justify-center items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-[350px] h-[300px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-[1.04]"
        />
      </div>
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
