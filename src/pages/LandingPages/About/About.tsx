import AboutProps from "./AboutProps";
const About = () => {
  return (
    <div className="py-[30px] w-[100%] flex items-center justify-center mt-[70px]">
      <div className="w-[95%] flex gap-[20px] justify-between flex-wrap ">
        <AboutProps
          firsttext="SECURITY SMART DRONE"
          secondtext="Just starting at $579.99"
          image="https://www.pngmart.com/files/12/Xbox-Remote-Controller-Transparent-PNG.png"
        />

        <AboutProps
          firsttext="SECURITY SMART DRONE"
          secondtext="Just starting at $579.99"
          image="https://panthertech.fiu.edu/site/product-images/194252271780_media-01.png"
        />
      </div>
    </div>
  );
};

export default About;
