import { products } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";

const ShopNow = () => {
  return (
    <div
    className="flex flex-wrap items-center justify-center mt-[90px] gap-[15px]"
    >
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
};

export default ShopNow;
