import { useNavigate } from "react-router-dom";
import "./UploadStyles.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../global/ReduxState";
import { UseAppDispatch } from "../../global/Store";
import Swal from "sweetalert2";

const UploadHead = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#40404a",
      cancelButtonColor: "#ff5d1b",
      confirmButtonText: "Yes, Logout my account",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logged Out!",
          "Your account has been logged out.",
          "success"
        );
        dispatch(logoutUser());
        navigate("/");
      }
    });
  };
  return (
    <div className=" h-[60vh]  uploadHome">
      <div
        className="uploadTitle w-[100%] h-[95%] flex justify-center  bg-cover bg-right-bottom relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1613177794106-be20802b11d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW8lMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        <div className=" w-[90%] mt-[10px] z-20">
          <hr className=" h-[2px] mb-[15px] mt-[10px]" />

          <div className="flex items-center justify-between">
            <div className="text-[#FFFFFF] text-[24px] font-[700] ">Admin</div>
            <div className="flex   w-[200px] items-center justify-between">
              <button className="bg-[grey] text-[white] w-[140px] h-[40px] rounded-[20px] flex items-center justify-center">
                Upload Products
              </button>
              <div
                className="bg-[orange] w-[40px] flex items-center justify-center rounded-[50%] h-[40px] text-[white] text-[18px] hover:cursor-pointer"
                onClick={handleLogout}
              >
                <FiLogOut />
              </div>
            </div>
          </div>

          <div className=" w-[100%] flex items-center justify-center ">
            <div className="w-[70%] mt-[20px] uploadUpload">
              <h1 className="flex items-center justify-center text-[#FF5D1B] text-[45px] font-[700] uploadUploadText">
                Upload Products
              </h1>
              <h3 className="flex items-center justify-center text-[18px] font-[700] text-[white] gap-[4px]">
                Home{" "}
                <span>
                  <FaLongArrowAltRight />
                </span>
                Upload Product
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      </div>
    </div>
  );
};

export default UploadHead;
