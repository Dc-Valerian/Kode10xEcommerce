// import { useParams } from "react-router-dom";
// import { useAppSelector } from "../../APIS/Store";
import { useParams } from "react-router-dom";
import "./DetailPageStyle.css";
import { SingleProduct } from "../../api/Apicall";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "../../global/ReduxState";
import { UseAppDispatch } from "../../global/Store";
// import { SingleProducts2 } from "../../APIS/Api";

const DetailPage = () => {
  const { id } = useParams();

  const getData = useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      return SingleProduct(id);
    },
  });
  const dispatch = UseAppDispatch();

  // const readMyCart = useAppSelector((state) => state.cart);

  // const TotalPrice = (item: any) =>
  //   item.reduce(
  //     (allItems: number, oneItem: any) =>
  //       allItems + oneItem.CartQuantity * oneItem.price,
  //     0
  //   );

  // const OneProducts = useQuery({
  //   queryKey: ["oneProduct", productID],
  //   queryFn: () => {
  //     return SingleProducts2(productID);
  //   },
  // });

  return (
    <div className="w-[100%] h-screen  flex justify-center items-center overflow-y-hidden mt-[60px] mainDetailStyle">
      <div className="w-[80%] h-[80%] bg-[#F3F4F6] rounded-[20px] flex justify-around items-center mainDefaultStyle">
        <div className="w-[40%] h-[80%]   flex justify-center items-center rounded-[20px] detailImageHolder">
          <img
            src={getData?.data?.data?.productImage}
            alt=""
            className="w-[90%] h-[90%] flex justify-center items-center object-contain detailImage"
          />
        </div>

        <div className="w-[48%]   flex items-center justify-center flex-col  detailDetail ">
          <div className="w-[90%] flex  flex-col gap-5 detailInfo">
            <p className="font-semi-bold text-xl text-[#3B82F6] ">
              Famous Shop Store
            </p>
            <p className="font-bold text-4xl detailInfo1 ">
              {/* {OneProducts?.data?.data.title} */}
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
              onClick={() => {
                dispatch(addToCart(getData?.data?.data));
                alert("added successfully");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
