const Cart = () => {
  return (
    <div className="w-[100%] h-screen  flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full h-[20%] bg-[white] flex justify-around items-center">
        <div className="w-[40%] h-[70%]  flex justify-center flex-col gap-3 ">
          <p className="font-bold text-4xl   text-[black]">Shopping Cart</p>
          <p className="font-medium text-[grey] ">
            HomePage/Clothing Category/
            <span className="font-medium text-[grey] underline underline-black">
              Shopping Cart
            </span>
          </p>
        </div>
        <div className="w-[30%] h-[70%]  flex items-center justify-end">
          <button className="w-[25%] h-[40%] bg-[black] rounded-[15px] text-white font-bold">
            Clear Cart
          </button>
        </div>
      </div>
      <div className="w-full h-[80%]  flex justify-around items-center">
        <div className="w-[50%] h-[90%]  ml-[20px]">
          <div className="w-full h-[40%]  border-b-2 border-grey flex justify-around items-center">
            <div className="w-[20%] h-[85%] ">
              <img
                src="http://localhost:3000/static/media/shirt.9ddc0dff360795c6f5b5.png"
                alt=""
                className="w-[100%] h-[100%] rounded-10px"
              />
            </div>
            <div className="w-[65%] h-[90%] flex justify-between items-center flex-col">
              <div className="w-full h-[70%] ">
                <p className="font-medium text-bold text-[20px] text-black">
                  NeckLace
                </p>
                <div className="w-full h-[60%]  flex justify-around items-center">
                  <div className="w-[15%] h-[80%] flex justify-center items-center border-r border-grey">
                    <p className="font-bold text-medium text-[grey]">fair</p>
                  </div>
                  <div
                    className="w-[15%] h-[80%] 
                         flex justify-center items-center"
                  >
                    <p className="font-bold text-medium text-[grey]  ">Lorem</p>
                  </div>
                  <div className="w-[35%] h-[80%] flex items-center justify-center ">
                    <div className="w-[20%] h-[55%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center rounded-[50px]">
                      +
                    </div>
                    <div className="w-[20%] h-[55%] bg-[white]  flex justify-center items-center">
                      7
                    </div>
                    <div className="w-[20%] h-[55%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center rounded-[50px]">
                      -
                    </div>
                  </div>
                  <div className="w-[20%] h-[50%]  rounded-[10px] flex justify-center items-center bg-none border border-green-600">
                    <p className="font-bold text-bold text-[grey] text-xl text-green-600">
                      #3,500
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[28%] flex justify-between items-center">
                <div className="w-[20%] h-[80%]  rounded-[10px] flex justify-center items-center  border-2 border-[grey]">
                  <p className="font-medium  text-[grey] text-[18px] ">
                    In stock
                  </p>
                </div>

                <div className="w-[20%] h-[80%]  rounded-[10px] flex justify-center items-center ">
                  <p className="font-medium text-[grey] text-[20px] text-[#4848e9]">
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[40%]  border-b-2 border-grey flex justify-around items-center">
            <div className="w-[20%] h-[85%] ">
              <img
                src="http://localhost:3000/static/media/shirt.9ddc0dff360795c6f5b5.png"
                alt=""
                className="w-[100%] h-[100%] rounded-10px"
              />
            </div>
            <div className="w-[65%] h-[90%] flex justify-between items-center flex-col">
              <div className="w-full h-[70%] ">
                <p className="font-medium text-bold text-[20px] text-black">
                  NeckLace
                </p>
                <div className="w-full h-[60%]  flex justify-around items-center">
                  <div className="w-[15%] h-[80%] flex justify-center items-center border-r border-grey">
                    <p className="font-bold text-medium text-[grey]">fair</p>
                  </div>
                  <div
                    className="w-[15%] h-[80%] 
                         flex justify-center items-center"
                  >
                    <p className="font-bold text-medium text-[grey]  ">Lorem</p>
                  </div>
                  <div className="w-[35%] h-[80%] flex items-center justify-center ">
                    <div className="w-[20%] h-[55%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center rounded-[50px]">
                      +
                    </div>
                    <div className="w-[20%] h-[55%] bg-[white]  flex justify-center items-center">
                      7
                    </div>
                    <div className="w-[20%] h-[55%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center rounded-[50px]">
                      -
                    </div>
                  </div>
                  <div className="w-[20%] h-[50%]  rounded-[10px] flex justify-center items-center bg-none border border-green-600">
                    <p className="font-bold text-bold text-[grey] text-xl text-green-600">
                      #3,500
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[28%] flex justify-between items-center">
                <div className="w-[20%] h-[80%]  rounded-[10px] flex justify-center items-center  border-2 border-[grey]">
                  <p className="font-medium  text-[grey] text-[18px] ">
                    In stock
                  </p>
                </div>

                <div className="w-[20%] h-[80%]  rounded-[10px] flex justify-center items-center ">
                  <p className="font-medium text-[grey] text-[20px] text-[#4848e9]">
                    Remove
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[50%]  mr-[20px] border-l-2 border-grey flex  justify-center items-center flex-col  ">
          <p className="font-bold text-[25px] text-center   text-[black]">
            Order of Summary
          </p>
          <div className="w-full h-[21%]  border-t-2 border-[grey] flex justify-between items-center">
            <p className="font-medium text-bold text-[grey]">Subtotal</p>
            <p className="font-medium text-bold text-[grey]">#3,620</p>
          </div>
          <div className="w-full h-[21%] border-t-2 border-[grey]  flex justify-between items-center">
            <p className="font-medium text-bold text-grey">Shipping fee</p>
            <p className="font-medium text-bold text-grey">#620</p>
          </div>
          <div className="w-full h-[21%]  border-t-2 border-[grey]  flex justify-between items-center">
            <p className="font-medium text-bold text-grey">Tax Estimate</p>
            <p className="font-medium text-bold text-grey">#3,500</p>
          </div>
          <div className="w-full h-[21%] border-t-2 border-[grey]  flex justify-between items-center">
            <p className="font-bold text-xl text-[#12122c]">Order Total</p>
            <p className="font-bold text-xl text-grey">#3,820</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
