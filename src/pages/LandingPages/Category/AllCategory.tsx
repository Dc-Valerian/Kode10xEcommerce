import React from "react";
import "./Category.css"

interface AllCategoryProps {
  imageUrl: string;
  text: string;
}

const AllCategory: React.FC<AllCategoryProps> = ({ imageUrl, text }) => {
  return (
    <div className="all mt-[15px] bg-[orange] w-[180px] h-[200px] overflow-hidden relative">
      <div className="bg-[brown] flex items-center flex-col hover:cursor-pointer h-[100%] justify-between">
        <img
          src={imageUrl}
          className="transition duration-300 ease-in-out hover:scale-[1.1] w-full h-full object-cover"
          alt="Casio"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50 flex items-center justify-center">
          <text className="text-white">{text}</text>
        </div>
        <text>Valerian</text>
      </div>
    </div>
  );
};

export default AllCategory;
