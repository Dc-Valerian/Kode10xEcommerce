import AboutProps from "./AboutProps";
const About = () => {
  return (
    <div className="py-[30px] w-[100%] flex items-center justify-center mt-[70px]" id="shop">
      <div className="w-[95%] flex gap-[20px] justify-between flex-wrap main">
        <AboutProps
          firsttext=" SMART DRONE"
          secondtext="Just starting at ₦5999.00"
          image="https://res.cloudinary.com/dbpcptmco/image/upload/v1702038646/Armani2_j3qkya.jpg"
        />

        <AboutProps
          firsttext="SECURITY SMART DRONE"
          secondtext="Just starting at   ₦5790.99"
          image="https://res.cloudinary.com/dbpcptmco/image/upload/v1702037848/images_3_jhvpfb.jpg"
        />
      </div>
    </div>
  );
};

export default About;
