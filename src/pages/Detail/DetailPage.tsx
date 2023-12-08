import { useParams } from "react-router-dom";
import "./DetailPageStyle.css";
import { SingleProduct } from "../../api/Apicall";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "../../global/ReduxState";
import { UseAppDispatch } from "../../global/Store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

const DetailPage = () => {
  const { id } = useParams();
  const [toastWidth, setToastWidth] = useState<string>("auto");
  const [toastPosition, setToastPosition] = useState<
    "top-right" | "bottom-left"
  >("top-right");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setToastWidth("300px");
        setToastPosition("top-right");
      } else {
        setToastWidth("auto");
        setToastPosition("bottom-left");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getData = useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      return SingleProduct(id);
    },
  });
  const dispatch = UseAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(getData?.data?.data));
    toast.success("Added to Cart successfully");
  };
  return (
    <div className="w-[100%] h-screen  flex justify-center items-center overflow-y-hidden mt-[60px] mainDetailStyle">
      <div className="w-[80%] h-[80%] bg-[#F3F4F6] rounded-[20px] flex justify-around items-center mainDefaultStyle">
        <div className="w-[40%] h-[80%] rounded-[10px] bg-gray-300 flex justify-center items-center detailImageHolder ">
          <img
            src={getData?.data?.data?.productImage}
            alt=""
            className="w-[90%] h-[90%] rounded-[10px] object-cover detailImage"
          />
        </div>

        <div className="w-[48%]   flex items-center justify-center flex-col  detailDetail ">
          <div className="w-[90%] flex  flex-col gap-5 detailInfo">
            <p className="font-semi-bold text-xl text-[#3B82F6] ">
              Famous Shop Store
            </p>
            <p className="font-bold text-4xl detailInfo1 ">
              {getData?.data?.data?.title}
            </p>
            <p className="font-semi-bold text-grey text-[15px]">
              <span className="text-grey  text-xl ">
                ₦:
                {getData?.data?.data?.price}
              </span>
            </p>
            <div className="text-[18px]">{getData?.data?.data?.desc}</div>
            <p className="font-semi-bold text-xl ">
              Category:
              <span className="font-semi-bold text-xl text-[#3B82F6]">
                {getData?.data?.data?.category}
              </span>
            </p>
          </div>

          <div className="w-[90%]   flex flex-col  justify-center detailFunction mt-[50px]">
            <button
              className="w-[150px] h-[45px] bg-[#3B82F6] text-white rounded-[8px] font-bold "
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <ToastContainer
              position={toastPosition}
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ maxWidth: "500px", width: toastWidth }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
