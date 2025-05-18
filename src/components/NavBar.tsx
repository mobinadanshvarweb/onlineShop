import NavBarOption from "./NavBarOption";
import { IoCart, IoHome } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 lg:hidden flex py-6  bg-white justify-between items-center shadow z-50">
      <NavLink to="/">
        {({ isActive }) => (
          <>
            <NavBarOption
              icon={
                <IoHome
                  className={`${isActive ? "text-black" : "text-gray-500"}`}
                />
              }
              text="خانه"
              classname={`${isActive ? "text-black" : "text-gray-300"}`}
            />
          </>
        )}
      </NavLink>
      <NavLink to="category">
        {({ isActive }) => (
          <>
            <NavBarOption
              icon={
                <IoCart
                  className={`${isActive ? "text-black" : "text-gray-500"}`}
                />
              }
              text="دسته بندی"
              classname={`${isActive ? "text-black" : "text-gray-300"}`}
            />
          </>
        )}
      </NavLink>
      <NavLink to="/auth/login">
        {({ isActive }) => (
          <>
            <NavBarOption
              icon={
                <CiUser
                  className={`${isActive ? "text-black" : "text-gray-500"}`}
                />
              }
              text="فروشگاه من"
              classname={`${isActive ? "text-black" : "text-gray-300"}`}
            />
          </>
        )}
      </NavLink>
    </div>
  );
};

export default NavBar;
