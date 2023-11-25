import { Outlet } from "react-router-dom";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
