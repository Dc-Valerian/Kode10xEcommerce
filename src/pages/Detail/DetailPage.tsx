import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../APIS/Store";
import "./DetailPageStyle.css";
import { useQuery } from "@tanstack/react-query";
import { SingleProducts2 } from "../../APIS/Api";
import { addToCart, removeFromCart } from "../../APIS/ReduxState";

const DetailPage = () => {
  const { productID } = useParams();
  const dispatch = useAppDispatch();

  // To have access to the whole of my cart
  const readMyCart = useAppSelector((state) => state.cart);

  // To read a single product from the cart
  const readSingleItem = readMyCart.filter((item) => item._id === productID);

  // To get the total price of quantity of each items in cart:
  const TotalPrice = (item: any) =>
    item.reduce(
      (allItems: number, oneItem: any) =>
        allItems + oneItem.CartQuantity * oneItem.price,
      0
    );

  const disabledStyle = "disabled-div";

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

          <div className="w-[90%] h-[35%]  flex flex-col detailFunction">
            <div className="w-[100%] h-[50%]  border-t-2 border-[grey] border-b-2  flex justify-center items-center">
              <div className="w-[45%] h-[80%] flex items-center justify-center ">
                <div
                  className="w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton"
                  onClick={() => {
                    dispatch(removeFromCart(OneProducts?.data?.data));
                  }}
                >
                  -
                </div>
                <div className="w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton">
                  {readSingleItem[0]?.CartQuantity}
                </div>
                <div
                  className={`w-[20%] h-[60%] bg-[white] border-solid border-[1px] border-[#ebe8e8] flex justify-center items-center hover:cursor-pointer detailFunctionButton ${
                    readSingleItem[0]?.CartQuantity ===
                    OneProducts?.data?.data.quantity
                      ? disabledStyle
                      : ""
                  }`}
                  onClick={() => {
                    if (
                      readSingleItem[0]?.CartQuantity !==
                      OneProducts?.data?.data.quantity
                    ) {
                      dispatch(addToCart(OneProducts?.data?.data));
                    }
                  }}
                >
                  +
                </div>
              </div>
              <div className="w-[50%] h-[80%] flex justify-center items-center">
                <button
                  className="w-[70%] h-[80%] bg-[#3B82F6] text-white rounded-[8px] font-bold"
                  onClick={() => {
                    dispatch(addToCart(OneProducts?.data?.data));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
