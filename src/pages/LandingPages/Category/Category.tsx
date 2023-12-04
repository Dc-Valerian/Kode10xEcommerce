import Casio from "./Casio";
import Rolex from "./Rolex";

const Category = () => {
  return (
    <div className="mt-[20px] w-[100%] flex items-center justify-center">
      <div className=" w-[95%]">
        <text className="text-[black] text-[25px] ">
          Categories
        </text>
       <div
       className=" mt-[20px]"
       >
       <div className="mb-[20px]">
          <text className="text-[black] text-[25px]">Rolex</text>
          <Rolex />
        </div>
        <div>
          <text className="text-[black] text-[25px]">Casio</text>
          <Casio />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Category;
