import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import "./HeroStyle.css";
import CountdownTimer from "../Discount/CountDownTimer";
import DownloadButton from "../../../components/Props/ButtonProps";

const slides = [
  {
    bgImage: "https://zonnova.vercel.app/assets/watch-2a5a0ee6.png",
    title: "Smart Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://res.cloudinary.com/dbpcptmco/image/upload/v1702037848/e0678504-e704-42e3-ad8b-546302f22f10_ju9kqd.jpg",
    title: "Rolex Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w=",
    title: "Casio Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://i.etsystatic.com/9338951/c/1000/1000/0/0/il/780e45/1304685380/il_600x600.1304685380_n6pi.jpg",
    title: "Tissot Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://i.etsystatic.com/32599319/r/il/32f039/4025533912/il_600x600.4025533912_39fd.jpg",
    title: "NaviForce Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

 
  {
    bgImage:
      "https://i.etsystatic.com/42408549/c/900/900/49/48/il/fd4089/5423872854/il_600x600.5423872854_5cv9.jpg",
    title: "G Shock Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://res.cloudinary.com/dbpcptmco/image/upload/v1702037861/MRW200H-2BV_ns6kri.jpg",
    title: "Skmei Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://i.etsystatic.com/9186495/c/3000/3000/0/0/il/83fddc/5044732319/il_600x600.5044732319_7kvd.jpg",
    title: "Cartier Watch Series",

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
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div id="home" className="hero overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[100vh] flex justify-center  overflow-hidden mainHero "
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

                  <CountdownTimer />

                  <div className=" mt-[20px] flex items-center">
                  <DownloadButton text="Shop Now!"/>
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
