import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import "./HeroStyle.css";
import SlidingBorderButton from "../../../components/Props/ButtonProps";
import CountdownTimer from "../Discount/CountDownTimer";

const slides = [
  {
    bgImage: "https://zonnova.vercel.app/assets/watch-2a5a0ee6.png",
    title: "Casio Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage: "https://zonnova.vercel.app/assets/asusproart-123712a4.png",
    title: "Tv Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w=",
    title: "Rolex Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
];

const Superhero = () => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 10);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "unset";
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 900,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <div id="home" className="hero overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[95vh] flex justify-center  overflow-hidden mainHero "
          >
            <div className="bg-[#F3F4F6] w-full bg-opacity-50 items-center justify-center flex h-[90%] mt-[30px] ">
              <div className="w-[95%] flex items-center justify-center h-[95%] mainHero">
                <div className=" w-[50%] h-[90%] flex flex-col justify-center gap-[30px] mainHeroFirst">
                  <Fade
                    delay={1e3}
                    cascade
                    damping={1e-1}
                    className="text-[24px] font-[600] text-[#E9522E] mainHeroFirstText"
                  >
                    SALE UP TO 30% OFF
                  </Fade>
                  <h1 className="text-[#161616] text-[50px] font-[600] leading-[50px] mainHeroFirstTitle">
                    {slide.title}
                  </h1>
                  {/* <p className="text-[18px] font-[400] w-[70%] mainHeroFirstSub">
                  {slide.sub}
                  </p> */}
                  <CountdownTimer targetTime={targetTime} />

                  <div className=" mt-[20px] flex items-center">
                    <SlidingBorderButton direction="top" text="Shop Now" />
                  </div>
                </div>

                <div className=" w-[50%] h-[90%] flex items-center justify-center mainHeroSecond">
                  <img
                    src={slide.bgImage}
                    className="w-[95%] h-[95%] object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Superhero;
