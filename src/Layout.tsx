import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="w-full flex flex-col font-myFont">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
