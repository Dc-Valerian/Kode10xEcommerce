import SlidingBorderButton from "../../../components/Props/ButtonProps";
import CountdownTimer from "./CountDownTimer";
import "./DiscountStyle.css";

const Discount = () => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 40);

  return (
    <div className="bg-[#F3F4F6] w-[100%] flex items-center justify-center ">
      <div className="w-[95%] flex justify-between flex-wrap">
        <div className=" w-[45%] h-[500px]  discountCard flex  justify-center items-center">
          <div className=" w-[70%] h-[90%] flex items-center justify-center flex-col">
            <div className=" w-[90%] h-[97%] flex  items-center flex-col gap-[20px]">
              <button className="bg-[var(--myColor)] w-[120px] py-[10px] text-[white] rounded-[5px] hover:bg-[white] hover:text-[var(--myColor)]     hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05]">
                Hurry Up!
              </button>

              <div className="text-[45px] w-[70%] text-center leading-[55px] discountText">
                Upto 25% Discount Check it out
              </div>
              <CountdownTimer targetTime={targetTime} />
              <SlidingBorderButton direction="top" text="Shop Now" />
            </div>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center h-[500px] discountCard">
          <img
            src="https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
