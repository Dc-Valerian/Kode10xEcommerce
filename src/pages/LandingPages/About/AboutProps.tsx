import DownloadButton from "../../../components/Props/ButtonProps";
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
    <div className="bg-[#F3F4F6] w-[40%] h-[500px] flex justify-center rounded-[10px] items-center aboutCard">
      <div className="w-[80%]  h-[88%] flex items-center justify-between flex-col gap-[20px] ">
        <div className="flex items-center flex-col justify-center gap-[10px]">
          <h3 className="text-[black] text-[16px] font-medium">{firsttext}</h3>
          <h2 className=" font-semibold text-[23px] text-[black] secondText">
            {secondtext}
          </h2>

          <DownloadButton />
        </div>
        <div className="h-[70%] w-[80%] flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="w-[90%] h-[90%] object-cover rounded-[10px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProps;
