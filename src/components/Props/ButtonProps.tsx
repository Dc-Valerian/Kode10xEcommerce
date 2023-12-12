import React from "react";
import { NavLink } from "react-router-dom";

const DownloadButton: React.FC<{ border?: boolean }> = ({ border = false }) => {
  const isBorder = border ? "border" : "";

  return (
    <NavLink to="/show-now">
      <button
        className={`inline-block rounded ${isBorder} ${
          isBorder ? "border-current" : "bg-indigo-600"
        } px-8 py-3 text-sm font-medium text-${
          isBorder ? "indigo-600" : "white"
        } transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:${
          isBorder ? "text-indigo-500" : "bg-indigo-500"
        }`}
      >
        Download
      </button>
    </NavLink>
  );
};

export default DownloadButton;
