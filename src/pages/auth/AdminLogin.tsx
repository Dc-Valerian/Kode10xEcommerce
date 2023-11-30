import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./AdminLoginStyles.css";
import { NavLink } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-right-bottom relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1613177794106-be20802b11d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW8lMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        <h2 className="z-20 text-white absolute top-20 md:top-34 text-4xl md:text-2xl ">
          Welcome Back
        </h2>

        <div className="z-10 w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white w-[30%] h-[50%] rounded-md shadow-md p-6 flex flex-col items-center justify-between whiteCard">
            <form className="w-full flex flex-col items-center ">
              <div className=" w-[100%] flex items-center justify-between">
                <h3 className="text-blue-500  text-[25px] capitalize">
                  Input Your Details
                </h3>
                <div
                  onClick={handleGoBack}
                  className="cursor-pointer text-white text-xl flex items-center justify-center rounded-full bg-blue-500 w-10 h-10"
                >
                  <IoArrowBack />
                  <div className="absolute bg-black text-white text-xs px-2 py-1 rounded top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 pointer-events-none">
                    Go back
                  </div>
                </div>
              </div>

              <div className=" flex items-center mt-[10px] justify-between flex-col w-[100%] h-[230px] ">
                <div className=" h-[60%] flex items-center justify-center flex-col w-[95%]">
                  <input
                    className="w-[95%]  mb-4 border border-gray-300 rounded px-3 h-[45px]"
                    required
                    maxLength={50}
                    type="email"
                    placeholder="Email"
                  />

                  <div className="flex items-center  w-[95%] border border-gray-300  h-[45px] rounded ">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-[100%] md:w-72 h-[100%] rounded px-3"
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer flex items-center justify-center w-[10%] h-[100%] text-[25px]"
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </div>
               

              <button className="w-[95%] h-12 font-semibold text-white bg-blue-500 rounded cursor-pointer transition-colors duration-500 hover:bg-blue-600">
              <NavLink
              to="/upload-page"
              style={{textDecoration:"none"}}
              >
                  Login
              </NavLink>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
      </div>
    </div>
  );
};

export default AdminLogin;
