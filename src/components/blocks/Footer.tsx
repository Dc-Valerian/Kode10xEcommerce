

import { FaFacebook } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full min-h-[150px]  flex flex-col md:flex-row md:justify-between md:items-center text-[black] font-roboto overflow-hidden pt-[40px] pb-[40px] pl-[20px] md:p-0">

      <div className="font-bold text-[20px] md:text-center   leading-4 md:ml-[50px] font-roboto mb-[20px] md:mb-0 h-[50px] flex gap-[10px] flex-col items-center justify-center">
    <text>
    KODE10X 
    </text>
        <span className="text-[16px] text-gray-300 ml-[13px] md:ml-0">
          watches
        </span>
      </div>

      <div className=" font-roboto mb-[20px] md:mb-0 ">
        <h5 className="text-black text-xl font-medium mb-2 text-center">
          ADDRESS: Suite 14, Volatic Towers, Victoria-Island, Lagos, Nigeria.
        </h5>
      </div>

      <div className="flex gap-[20px] md:mb-0 w-[300px] justify-between ">
        <div className="flex flex-col ">
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Unisex
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Men
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Women
          </h5>
        </div>

        <div
       
        >
          <h5 className="text-black text-[18px] font-medium mb-1">
            Category
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Casio
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
          G shock 
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
          Naviforce 
          </h5>
        </div>
        
        <div
        
        >
          <h5 className="text-black text-[18px] font-medium mb-1">
            Category
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
          Rolex 
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
          Rado
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
          Skmei
          </h5>
        </div>
      </div>

      <div className="flex mr-[40px] flex-col mb-[20px] md:mb-0 ">
        <div className=" text-[20px] gap-[10px] flex items-center justify-center ">
        <div
        className="bg-[#F3F4F6] w-[35px] h-[35px] flex items-center justify-center rounded-[20px] animate-pulse"
        >
        <FaFacebook />
        </div>
        <div
        className="bg-[#F3F4F6] w-[35px] h-[35px] flex items-center justify-center rounded-[20px] animate-pulse"
        >
        <BsWhatsapp />
        </div>
        <div
        className="bg-[#F3F4F6] w-[35px] h-[35px] flex items-center justify-center rounded-[20px] animate-pulse"
        >
        <FaTwitter />
        </div>
        <div
        className="bg-[#F3F4F6] w-[35px] h-[35px] flex items-center justify-center rounded-[20px] animate-pulse"
        >
        <FiInstagram />
        </div>
        
        </div>

        <div className="font-bold text-[16px] mt-[15px] flex items-center justify-center ">
          All Right Reserved. C.2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
