import AboutProps from "./AboutProps";
import AboutVideo from "./AboutVideo";
const About = () => {
  return (
    <div className="py-[30px] w-[100%] flex items-center justify-center mt-[70px]" id="shop">
      <div className="w-[95%] flex gap-[20px] justify-evenly flex-wrap main">
        <AboutProps
          firsttext=" SMART Watches"
          secondtext="Just starting at ₦5999.00"
          image="https://i.etsystatic.com/42620100/r/il/883f76/5452369629/il_600x600.5452369629_3izp.jpg"
        />

     <AboutVideo/>
      </div>
    </div>
  );
};

export default About;
