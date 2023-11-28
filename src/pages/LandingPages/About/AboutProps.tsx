import SlidingBorderButton from "../../../components/Props/ButtonProps";
import "./AboutStyle.css"

const AboutProps = () => {
  return (
    <div className="bg-[#F3F4F6] w-[48%] h-[500px] flex justify-center rounded-[10px] items-center aboutCard">
      <div className="w-[80%]  h-[88%] flex items-center justify-between flex-col gap-[30px] ">
        <div className="flex items-center flex-col justify-center gap-[10px]">
          <text>Security Smart drone</text>
          <h2>Just Starting at #579.99</h2>

          <SlidingBorderButton direction="top" text="Shop Now" />
        </div>
        <img
          src="https://www.pngmart.com/files/12/Xbox-Remote-Controller-Transparent-PNG.png"
          alt=""
          className="w-[80%]"
        />
      </div>
    </div>
  );
};

export default AboutProps;
