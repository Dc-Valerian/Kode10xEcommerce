import { products } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";

const ShopProduct = () => {
  return (
    <>
      <div className="w-[100%] h-[150vh] bg-[#F2F4F6] flex justify-center items-center mt-[90px]">
        <div className="w-[100%] h-[100%] bg-[#F2F4F6] flex flex-wrap justify-center items-center gap-5">
          {products.map((product, index) => (
            <ProductDetail key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
