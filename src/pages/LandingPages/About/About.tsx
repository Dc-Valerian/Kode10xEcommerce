import AboutProps from "./AboutProps";

const About = () => {
  return (
    <div className="bg-[gold] py-[30px] w-[100%] flex items-center justify-center">
      <div className="w-[95%] flex gap-[20px] justify-between">
        <AboutProps />
        <AboutProps />
      </div>
    </div>
  );
};

export default About;
