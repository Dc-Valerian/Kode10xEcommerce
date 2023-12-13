import React from "react";
import { BarLoader } from "react-spinners";

const LoadingPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-150 h-150">
        <img
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1701695953/WhatsApp_Image_2023-12-02_at_04.56.01_9fa268ad-removebg-preview_qmfbvw.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-4xl font-normal text-[var(myColor)] my-4">
        Famous Shop
      </h3>
      <BarLoader width="250px" height={"7px"} color="#E9522E" />
    </div>
  );
};

export default LoadingPage;
