import axios from "axios";

const Endpoint = "https://watch-e-commerce-w6mv.onrender.com";

// Get all products:
export const GetAllProducts2 = async () => {
  return await axios
    .get(`${Endpoint}/api/products/allproducts`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

// Get single products:
export const SingleProducts2 = async (productID: any) => {
  return await axios
    .get(`${Endpoint}/api/products/allproducts/${productID}`)
    .then((res) => res.data);
};
