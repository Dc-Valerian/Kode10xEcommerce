import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getAllProduct } from "../../api/Apicall";
import React, {  useState } from "react";
import { Oval } from "react-loader-spinner";

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
  const productsPerPage = 3;

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
    <div className="w-[100%] flex items-center justify-center flex-wrap gap-[20px]">
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
        <div className="w-[90%] flex items-center justify-center flex-wrap gap-[35px]">
          {currentProducts.length ? (
            currentProducts.map((el: any) => (
              <div
                key={el?._id}
                className="flex flex-wrap gap-[20px] mt-[10px] items-center justify-center"
              >
                <div className="w-[300px] h-[350px] flex justify-center items-center flex-col">
                  <NavLink
                    to={`/product-details/${el?._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="w-[300px] h-[300px] flex justify-center items-center">
                      <img
                        src={el?.productImage}
                        className="w-[350px] h-[300px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-[1.04] rounded-[10px]"
                      />
                    </div>
                  </NavLink>
                  <div className="w-[350px] h-[170px] flex flex-col justify-center items-center">
                    <p className="text-center text-[grey] font-lighter">
                      {el?.title}
                    </p>

                    <p className="text-center text-[#00000096] font-semi-bold">
                      ${el?.price}{" "}
                      <span className="text-center font-bold text-[#000000b9]"></span>{" "}
                    </p>
                  </div>
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
