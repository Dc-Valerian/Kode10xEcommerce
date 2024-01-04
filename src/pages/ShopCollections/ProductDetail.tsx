import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getAllProduct } from "../../api/Apicall";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import "./ProductStyle.css";

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
            className={`bg-blue-500 rounded-[4px] text-white border-solid border-2 border-gray-300 py-2 px-4 m-2 cursor-pointer focus:outline-none hover:bg-[#E9522E] ${
              currentPage === number ? "bg-[#E9522E]" : ""
            }`}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export const ProductDetail = () => {
  const {
    data: allProducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-all"],
    queryFn: getAllProduct,
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 12;

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

  if (isError) {
    return <div>Error fetching data...</div>;
  }

  // If data is still loading, show loader
  if (isLoading || !allProducts) {
    return (
      <div
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        Getting Data...Chill
        <Oval height={80} width={80} color="#4fa94d" />
      </div>
    );
  }

  return (
    <div className="w-[100%] flex items-center justify-center flex-wrap gap-[20px] holderholderholder">
      <div className=" w-[100%]  flex p-5 justify-between searchHolder">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="pl-[10px] h-[45px] w-[40%] searchInput border border-gray rounded px-3  outline-[#EB713D]"
        />
        <select
          value={sortOrder}
          onChange={handleSort}
          className="pl-[10px] h-[45px] w-[30%] rounded-[10px] searchInput border border-gray px-3 outline-[#EB713D]"
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Getting Data
          <Oval height={80} width={80} color="#4fa94d" />
        </div>
      ) : (
        <div className="w-[100%] pb-[15px] overflow-hidden flex items-center justify-center flex-wrap gap-[25px]  holderHolder">
          {currentProducts.length ? (
            currentProducts.map((el: any) => (
              <div
                key={el?._id}
                className="flex flex-wrap gap-[20px] mt-[10px] items-center justify-center  imageHolder w-[300px] h-[400px]"
              >
                {/* <div className="w-[300px] h-[350px] flex justify-center items-center flex-col bg-[gold]"> */}
                <NavLink
                  to={`/product-details/${el?._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-[280px] h-[300px]  rounded-[10px] bg-gray-300 flex justify-center items-center uploadImageHolder">
                    <img
                      src={el?.productImage}
                      className="h-[90%] object-cover w-[90%] transform transition duration-300 ease-in-out hover:scale-[1.04] rounded-[10px] imageItself"
                    />
                  </div>
                </NavLink>
                <div className="w-[350px] flex flex-col justify-center items-center ">
                  <p className="text-center text-[grey] font-lighter">
                    {el?.title}
                  </p>
                  <p className="text-center text-[black] font-semibold">
                    {el.category}
                  </p>

                  <p className="text-center text-[#00000096] font-semi-bold">
                    ₦{el?.price}
                  </p>
                  {/* </div> */}
                </div>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      )}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
