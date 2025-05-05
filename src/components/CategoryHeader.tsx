import { Link } from "react-router";
import { useCategories } from "../hooks/useCategories";
import { categoryTranslations } from "../type/categoryTranslate";

const CategoryHeader = () => {
  const { data } = useCategories();
  console.log(data, "data");
  return (
    <>
      {data?.map((item: string) => {
        return (
          <Link to={`category/${categoryTranslations[item]}`} key={item}>
            <li className="cursor-pointer relative group">
              {categoryTranslations[item] || item}
              <span className="absolute w-0 bg-red-400 bottom-0 left-0 h-[1px] group-hover:w-full transition-all duration-300"></span>
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default CategoryHeader;
