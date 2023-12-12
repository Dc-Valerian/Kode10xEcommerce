import Casio from "./Casio";
import Other from "./Other";
import Rolex from "./Rolex";

const Category = () => {
  return (
    <div className="mt-[20px] w-[100%] flex items-center justify-center">
      <div className=" w-[95%]">
        <h2 className="text-[black] text-[25px] ">Categories</h2>
        <div className=" mt-[20px]">
          <div className="mb-[20px]">
            <h1 className="text-[black] text-[25px]">Rolex</h1>
            <Rolex />
          </div>
          <div>
            <h2 className="text-[black] text-[25px]">Casio</h2>
            <Casio />
          </div>
          <div>
            <h2 className="text-[black] text-[25px]">Others</h2>
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
