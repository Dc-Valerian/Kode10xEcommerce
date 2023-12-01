import { ProductDetail } from "./ProductDetail";
import { Oval } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GetAllProducts2 } from "../../APIS/Api";
import "./ProductStyle.css"

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      {pageNumbers.map((number) => (
        <div key={number} onClick={() => paginate(number)}>
          <button
            className={`bg-blue-500 text-white border-solid border-2 border-gray-300 py-2 px-4 m-2 cursor-pointer focus:outline-none ${
              currentPage === number ? "bg-yellow-500" : ""
            }`}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

const ShopProduct = () => {
  const { data: allProducts, isLoading } = useQuery({
    queryKey: ["All-Products"],
    queryFn: GetAllProducts2,
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;

  const filteredProducts = allProducts?.data.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedProducts = [...(filteredProducts || [])];

  if (sortOrder === "lowToHigh") {
    sortedProducts = sortedProducts.sort((a: any, b: any) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts = sortedProducts.sort((a: any, b: any) => b.price - a.price);
  }

  // Pagination logic
  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: any[] = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderProducts = () => {
    return currentProducts?.length >= 1 ? (
      currentProducts.map((product: any, index: number) => (
        <ProductDetail
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      ))
    ) : (
      <div>No Data Found</div>
    );
  };

  return (
    <div className="w-full h-full bg-[#F2F4F6] mt-20 flex justify-center flex-col items-center">
      <div className=" w-[70%] flex p-5 justify-between searchHolder">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="pl-[10px] h-[40px] w-[50%] searchInput"
        />
        {/* Add select for sorting */}
        <select
          value={sortOrder}
          onChange={handleSort}
          className="pl-[10px] h-[40px] w-[20%] rounded-[10px] searchInput"
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="w-full h-full bg-[#F2F4F6] flex flex-wrap justify-center items-center gap-[40px] mt-[20px]">
        {isLoading ? (
          <div>
            Getting All Data
            <Oval height={80} width={80} color="#4fa94d" />
          </div>
        ) : (
          <>{renderProducts()}</>
        )}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ShopProduct;
