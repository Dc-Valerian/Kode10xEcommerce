import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import HomeScreen from "../pages/LandingPages/HomeScreen/HomeScreen";
import ShopProduct from "../pages/ShopCollections/ShopProduct";
import AdminLogin from "../pages/auth/AdminLogin";
import UploadPage from "../pages/UploadPage/UploadPage";
import DetailPage from "../pages/Detail/DetailPage";
import Example from "../pages/CartPage/Cart2";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/shop-now",
        element: <ShopProduct />,
      },
      {
        path: "/product-details",
        element: <DetailPage/>
      },
      {
        path: "/cart",
        element: <Example/>
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/upload-page",
    element: <UploadPage />,
  },
]);
