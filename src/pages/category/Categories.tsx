import { Link } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import { categoryImage } from "../../type/categoryImage";
import { categoryTranslations } from "../../type/categoryTranslate";

const Categories = () => {
  const { data } = useCategories();
  return (
    <div className="w-full flex flex-col gap-8">
      <h2 className="w-full flex justify-center text-3xl font-bold">
        خرید بر اساس دسته بندی
      </h2>
      <div className="flex">
        {data?.map((item: string) => {
          return (
            <figure
              key={item}
              className="w-full lg:w-3/12 flex flex-col gap-3 justify-center items-center"
            >
              <img
                className="border rounded-full h-1/2"
                src={categoryImage[item]}
                alt=""
              />
              <Link to={`category/${categoryTranslations[item]}`}>
                {categoryTranslations[item]}{" "}
              </Link>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
