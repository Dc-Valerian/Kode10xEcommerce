import AboutProps from "./AboutProps";
import AboutVideo from "./AboutVideo";
const About = () => {
  return (
    <div className="py-[30px] w-[100%] flex items-center justify-center mt-[70px]" id="shop">
      <div className="w-[95%] flex gap-[20px] justify-evenly flex-wrap main">
        <AboutProps
          firsttext=" SMART DRONE"
          secondtext="Just starting at ₦5999.00"
          image="https://res.cloudinary.com/dbpcptmco/image/upload/v1702038646/Armani2_j3qkya.jpg"
        />

     <AboutVideo/>
      </div>
    </div>
  );
};

export default About;
