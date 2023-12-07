import axios from "axios";

export const api = "https://watch-e-commerce-w6mv.onrender.com/api";

export const getAllCategory = async () => {
  return await axios
    .get(`${api}/category/all-category`)
    .then((res) => res.data);
};

export const getAllProduct = async () => {
  return await axios.get(`${api}/products/allproducts`).then((res) => res.data);
};

export const SingleProduct = async (id: any) => {
  return await axios
    .get(`${api}/products/allproducts/${id}`)
    .then((res) => res.data);
};

export const createUser = async ({  email, password }: any) => {
    await axios
      .post(`${api}/users/login`, {
        email,
        password,
      })
      .then((res) => res.data);
  };