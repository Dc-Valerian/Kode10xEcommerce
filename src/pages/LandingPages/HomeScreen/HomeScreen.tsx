import About from "../About/About";
import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Hero from "../Hero/Hero";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Category />
      <About />
      <Discount/>
    </div>
  );
};

export default HomeScreen;
