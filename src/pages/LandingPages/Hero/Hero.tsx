import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import "./HeroStyle.css";
import SlidingBorderButton from "../../../components/Props/ButtonProps";

const slides = [
  {
    bgImage:
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww",
    title: "Apple Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://images.unsplash.com/photo-1613177794106-be20802b11d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW8lMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Employee Performance Management",

    sub: "",
  },
  {
    bgImage:
      "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w=",
    title: "Employee Performance Management",

    sub: "",
  },
];

const Superhero = () => {
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
    <div id="home" className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
          key={index}
          className="w-full h-[95vh] flex justify-center  overflow-hidden bg-no-repeat bg-center bg-cover relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <img
              src={slide.bgImage}
              alt={`slide-${index}`}
              className="absolute top-0 left-0 object-cover w-full h-full blur-image"
            />

            <div className="text w-full bg-opacity-50 flex-col items-center justify-center flex xmd:justify-center xmd:flex xmd:items-center z-[200px]">
              <div className="mt-56 max-w-[500px] w-full text-[white] xmd:mt-36 text-center">
                <Fade duration={2000}>
                  <div
                    className={`herotext text-[50px] lg:w-full font-bold`}
                  >
                    {slide.title}
                  </div>
                </Fade>
                <Fade direction="down">
                  <p className="text-white text-[18px] mt-3 ">{slide.sub}</p>
                </Fade>

                <div className="mt-[40px] hover:cursor-pointer">
                  <Fade direction="up">
                    <SlidingBorderButton direction="top" text="Shop Now " />
                  </Fade>
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
