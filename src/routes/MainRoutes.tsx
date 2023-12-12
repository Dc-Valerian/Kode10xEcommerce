import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import HomeScreen from "../pages/LandingPages/HomeScreen/HomeScreen";
import AdminLogin from "../pages/auth/AdminLogin";
import UploadPage from "../pages/UploadPage/UploadPage";
import DetailPage from "../pages/Detail/DetailPage";
import ShopNow from "../pages/ShopCollections/ShopNow";
import NotFoundPage from "../pages/ErrorPage/ErrorPage";

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
        element: <ShopNow />,
      },
      {
        path: "/product-details/:id",
        element: <DetailPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
