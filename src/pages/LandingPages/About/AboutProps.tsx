import SlidingBorderButton from "../../../components/Props/ButtonProps";
import "./AboutStyle.css";
import React from "react";

interface AboutCardProps {
  firsttext: string;
  secondtext: string;
  image: string;
}

const AboutProps: React.FC<AboutCardProps> = ({
  firsttext,
  secondtext,
  image,
}) => {
  return (
    <div className="bg-[#F3F4F6] w-[48%] h-[500px] flex justify-center rounded-[10px] items-center aboutCard">
      <div className="w-[80%]  h-[88%] flex items-center justify-between flex-col gap-[30px] ">
        <div className="flex items-center flex-col justify-center gap-[10px]">
          <text
          className="text-[black] text-[16px] font-medium">
            {firsttext}
          </text>
          <h2
          className=" font-semibold text-[23px] text-[black]"
          >
            {secondtext}
            </h2>

          <SlidingBorderButton direction="bottom" text="Shop Now" />
        </div>
        <img src={image} alt="" className="w-[75%] h-[80%] object-contain " />
      </div>
    </div>
  );
};

export default AboutProps;
