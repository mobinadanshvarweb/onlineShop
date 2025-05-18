import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className="w-full flex flex-col font-myFont relative">
      <Header />

      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
      <NavBar />
    </div>
  );
};

export default Layout;
