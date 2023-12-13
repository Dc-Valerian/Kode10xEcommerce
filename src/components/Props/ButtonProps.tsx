import React from "react";
import { NavLink } from "react-router-dom";

interface DownloadButtonProps {
  text: string;
  border?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, border = false }) => {
  const isBorder = border ? "border" : "";

  return (
    <NavLink to="/shop-now">
      <button
        className={`inline-block rounded ${isBorder} ${
          isBorder ? "border-current" : "bg-[#4DC4CC]"
        } px-8 py-3 text-sm font-medium text-${
          isBorder ? "indigo-600" : "white"
        } transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:${
          isBorder ? "text-indigo-500" : "bg-[#4DC4CC]"
        }`}
      >
        {text}
      </button>
    </NavLink>
  );
};

export default DownloadButton;
