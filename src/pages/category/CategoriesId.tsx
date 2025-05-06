import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoriesId } from "../../services/getCategoriesId";
import { categoryEn } from "../../type/categoryEn";
import type { Products } from "../../type/product-type";
import CategoryCart from "./CategoryCart";

const CategoriesId = () => {
  const { id } = useParams<{ id: string }>();
  const enId = categoryEn[id!];
  const { data } = useQuery({
    queryKey: ["categoriesId", enId],
    queryFn: () => getCategoriesId(enId),
    enabled: !!enId,
  });
  console.log(data);

  return (
    <div className="w-full px-16  flex flex-wrap">
      {data?.map((item: Products) => {
        return (
          <CategoryCart
            key={item.id}
            price={item.price}
            src={item.image}
            title={item.title}
            rate={item.rating.rate}
            category={item.category}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default CategoriesId;
