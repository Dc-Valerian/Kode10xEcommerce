import About from "../About/About";
import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Hero from "../Hero/Hero";
import TestimonialSlider from "../Testimonal/Test";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Category />
      <About />
      <Discount />
      <TestimonialSlider />
    </div>
  );
};

export default HomeScreen;
