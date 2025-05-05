import { IoEnterOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import CategoryHeader from "./CategoryHeader";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full h-24 bg-white flex items-center px-6 shadow">
      <ul className="flex-1 gap-6 flex items-center justify-start">
        <Link to="/">
          <li>دسته بندی کالاها</li>
        </Link>
        <CategoryHeader />
      </ul>
      <div className="flex items-center gap-8">
        <span className=" p-3 border-[0.5px] flex justify-center items-center rounded-xl border-gray-300 gap-3 cursor-pointer">
          <IoEnterOutline className="rotate-180" size={20} />
          ورود | ثبت نام
        </span>
        <span className="w-[0.5px] bg-gray-300 py-4"></span>
        <span className="relative flex p-3 rounded-xl hover:bg-red-100 cursor-pointer">
          <SlBasket size={30} />
          <span className="absolute w-5 h-5 bottom-0 right-0  flex justify-center items-center bg-red-500 text-xs text-white rounded">
            +9
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
