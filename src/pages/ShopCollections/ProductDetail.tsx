import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getAllProduct } from "../../api/Apicall";
import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";

export const ProductDetail = () => {
  const allProducts = useQuery({
    queryKey: ["get-all"],
    queryFn: getAllProduct,
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="w-[100%] flex items-center justify-center flex-wrap gap-[20px]">
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
          Getting Data
          <Oval color="black" />
        </div>
      ) : (
        <div className="w-[90%] flex items-center justify-center flex-wrap gap-[35px]">
          {allProducts?.data?.data.length ? (
            allProducts?.data?.data.map((el: any) => (
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
    </div>
  );
};
