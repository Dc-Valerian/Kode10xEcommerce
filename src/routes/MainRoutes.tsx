import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import HomeScreen from "../pages/LandingPages/HomeScreen/HomeScreen";
import ShopProduct from "../pages/ShopCollections/ShopProduct";
import AdminLogin from "../pages/auth/AdminLogin";

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
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
]);
