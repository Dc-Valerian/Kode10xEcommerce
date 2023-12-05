import { useParams } from "react-router-dom";
import { useAppSelector } from "../../APIS/Store";
import "./DetailPageStyle.css";
import { useQuery } from "@tanstack/react-query";
import { SingleProducts2 } from "../../APIS/Api";

const DetailPage = () => {
  const { productID } = useParams();

  const readMyCart = useAppSelector((state) => state.cart);

  const TotalPrice = (item: any) =>
    item.reduce(
      (allItems: number, oneItem: any) =>
        allItems + oneItem.CartQuantity * oneItem.price,
      0
    );

  const OneProducts = useQuery({
    queryKey: ["oneProduct", productID],
    queryFn: () => {
      return SingleProducts2(productID);
    },
  });

  return (
    <div className="w-[100%] h-screen  flex justify-center items-center overflow-y-hidden mt-[60px] mainDetailStyle">
      <div className="w-[80%] h-[80%] bg-[#F3F4F6] rounded-[20px] flex justify-around items-center mainDefaultStyle">
        <div className="w-[40%] h-[80%]   flex justify-center items-center rounded-[20px] detailImageHolder">
          <img
            src="https://websitedemos.net/shoe-store-04/wp-content/uploads/sites/247/2021/03/sports-shoe5.jpg"
            alt=""
            className="w-[90%] h-[90%] flex justify-center items-center object-contain detailImage"
          />
        </div>

        <div className="w-[48%] h-[80%]  flex items-center justify-center flex-col  detailDetail">
          <div className="w-[90%] h-[60%]  flex  flex-col gap-5 detailInfo">
            <p className="font-semi-bold text-xl text-[#3B82F6] ">
              Running shoes
            </p>
            <p className="font-bold text-4xl detailInfo1 ">
              {OneProducts?.data?.data.title}
            </p>
            <p className="font-semi-bold text-grey text-[15px]">
              <span className="text-grey  text-xl ">
                ${OneProducts?.data?.data.price}
              </span>
              {OneProducts?.data?.data.desc}
            </p>
            <p className="font-semi-bold text-xl ">
              Category:
              <span className="font-semi-bold text-xl text-[#3B82F6]">
                Running shoes
              </span>
            </p>

            <div>Total Price: {TotalPrice(readMyCart)} </div>
          </div>

          <div className="w-[90%]   flex flex-col  justify-center detailFunction ">
            <button className="w-[150px] h-[45px] bg-[#3B82F6] text-white rounded-[8px] font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
