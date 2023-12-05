import axios from "axios";

const Endpoint = "https://watch-e-commerce-w6mv.onrender.com";

// -GET ALL PRODUCTS
export const GetAllProducts2 = async () => {
  return await axios
    .get(`${Endpoint}/api/products/allproducts`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err, "couldn't get all products");
    });
};

// -GET ONE PRODUCT
export const SingleProducts2 = async (id: number) => {
  try {
    const response = await axios.get(
      `${Endpoint}/api/products/allproducts/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch a single product data ${id}`);
  }
};

// export const adminUpload = async () => {
//   try {
//     const response = await axios.get(
//       `${Endpoint}/api/products/allproducts/${id}`
//     );
//   } catch (error) {}
// };
