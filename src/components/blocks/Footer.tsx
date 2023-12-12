import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion";

interface ButtonData {
  icon: JSX.Element;
  url: string;
}

const Footer = () => {
  const buttonData: ButtonData[] = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/shopwithfamousshop/",
    },
    { icon: <ImWhatsapp />, url: "https://wa.me/+2347018549555" },

    {
      icon: <SiFacebook />,
      url: "https://web.facebook.com/profile.php?id=61554003966869",
    },
    { icon: <FaXTwitter />, url: "https://twitter.com/shopwithfamous" },
  ];

  const handleClicURL = (url: string) => {
    return () => {
      window.open(url, "_blank");
    };
  };

  return (
    <div
      id="contact"
      className="w-full min-h-[150px]  flex flex-col md:flex-row md:justify-between md:items-center text-[black] font-roboto overflow-hidden pt-[40px] pb-[40px] pl-[20px] md:p-0  items-center justify-center"
    >
      <div className="md:text-center  leading-4 md:ml-[50px] font-roboto mb-[20px] md:mb-0 h-[130px] w-[130px] flex  flex-col items-center gap-[8px] hover:cursor-pointer">
        <img
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1701695953/WhatsApp_Image_2023-12-02_at_04.56.01_9fa268ad-removebg-preview_qmfbvw.png"
          className=" w-[100%] h-[50%] object-cover "
        />
        <text className="text-[18px]">0701 854 9555</text>
        <text className="text-[18px]">0704 904 6788</text>
      </div>

      <div className=" font-roboto mb-[20px] md:mb-0 ">
        <h5 className="text-black text-xl font-medium mb-2 text-center">
          35/37 Isale Agbede St, Idumagbo Ave, Lagos Island,Lagos 101101,Lagos
        </h5>
      </div>

      <div className="flex gap-[20px] md:mb-0 w-[300px] justify-between ">
        <div className="flex flex-col ">
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Unisex
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Men
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Women
          </h5>
        </div>

        <div>
          <h5 className="text-black text-[18px] font-medium mb-1">Category</h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Casio
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            G shock
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Naviforce
          </h5>
        </div>

        <div>
          <h5 className="text-black text-[18px] font-medium mb-1">Category</h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Rolex
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Rado
          </h5>
          <h5 className="text-[16px] hover:text-orange-500 cursor-pointer">
            Skmei
          </h5>
        </div>
      </div>

      <div className="flex mr-[40px] flex-col mb-[20px] md:mb-0 ">
        <div className="flex items-center justify-center  gap-[8px]">
          {buttonData.map((button, index) => (
            <motion.div
              key={index}
              className=" text-[white] cursor-pointer rounded-lg overflow-hidden relative flex items-center justify-center  p-[8px] transition duration-300 ease-in-out hover:bg-opacity-40 backdrop-blur-3xl animate-pulse bg-[var(--accent)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClicURL(button.url)}
            >
              <div className="bg-opacity-20 hover:bg-opacity-40 p-[1px] h-[23px] w-[23px] text-[23px]">
                {button.icon}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="font-bold text-[16px] mt-[15px] flex items-center justify-center w-[100%] text-center">
          All Right Reserved. C.2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
