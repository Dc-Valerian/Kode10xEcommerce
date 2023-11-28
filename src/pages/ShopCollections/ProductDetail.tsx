import { IoIosStarOutline } from "react-icons/io";

interface Product {
  imageUrl: string;
  name: string;
  price: number;
  discountedPrice: number;
  ratings: number[];
}

export const ProductDetail: React.FC<Product> = ({
  imageUrl,
  name,
  price,
  discountedPrice,
  ratings,
}) => {
  return (
    <div className="w-[300px] h-[500px] flex justify-center items-center flex-col">
      <div className="w-[300px] h-[300px] bg-[#F2F4F6] flex justify-center items-center">
        <img src={imageUrl} alt={name} className="w-[350px] h-[300px]" />
      </div>
      <div className="w-[350px] h-[170px] flex flex-col justify-center items-center">
        <p className="text-center text-[grey] font-lighter">{name}</p>
        <div className="w-[200px] h-[30px] flex justify-center">
          {ratings.map((_, index) => (
            <IoIosStarOutline key={index} />
          ))}
        </div>
        <p className="text-center text-[#00000096] font-semi-bold">
          ${price}{" "}
          <span className="text-center font-bold text-[#000000b9]">
            ${discountedPrice}
          </span>{" "}
        </p>
        {/* Add your size selection buttons here */}
      </div>
    </div>
  );
};
