import NavBarOption from "./NavBarOption";
import { IoCart, IoHome } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 lg:hidden flex py-6  bg-white justify-between items-center shadow z-50">
      <Link to="/">
        <NavBarOption icon={<IoHome />} text="خانه" />
      </Link>
      <Link to="category">
        <NavBarOption icon={<IoCart />} text="دسته بندی" />
      </Link>
      <Link to="/auth/login">
        <NavBarOption icon={<CiUser />} text="فروشگاه من" />
      </Link>
    </div>
  );
};

export default NavBar;
