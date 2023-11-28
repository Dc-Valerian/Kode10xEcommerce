import AllCategory from "./AllCategory";
import { categoriesData } from "./CategoryData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

const Category = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
    ],
  };

  return (
    <div className="mt-[40px] w-[100%] flex items-center justify-center">
      <div className=" w-[95%]">
        <text className="text-[black] text-[25px]">Categories</text>
        <div className="card p-[10px]">
          <Slider {...settings} className="w-full">
            {categoriesData.map((category, index) => (
              <div key={index} className="flex justify-center">
                <AllCategory
                  imageUrl={category.imageUrl}
                  text={category.text}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
