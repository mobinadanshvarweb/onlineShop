import { Outlet } from "react-router";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="w-full flex flex-col font-myFont">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
