import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import HomeScreen from "../pages/LandingPages/HomeScreen";
import ShopNow from "../pages/ShopCollections/ShopNow";

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
    ],
  },
]);
