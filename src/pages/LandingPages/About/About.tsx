import AboutProps from "./AboutProps";
const About = () => {
  return (
    <div className="bg-[gold] py-[30px] w-[100%] flex items-center justify-center">
      <div className="bg-[peru] w-[95%] flex gap-[20px] justify-between flex-wrap ">
        <AboutProps />
        <AboutProps />
      </div>
    </div>
  );
};

export default About;
