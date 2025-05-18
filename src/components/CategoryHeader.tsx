import { useCategories } from "../hooks/useCategories";
import { categoryTranslations } from "../type/categoryTranslate";
import { NavLink } from "react-router-dom";

const CategoryHeader = () => {
  const { data } = useCategories();
  console.log(data, "data");
  return (
    <>
      {data?.map((item: string) => {
        return (
          <NavLink to={`category/${categoryTranslations[item]}`} key={item}>
            {({ isActive }) => (
              <li className="cursor-pointer relative">
                {categoryTranslations[item] || item}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            )}
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryHeader;
