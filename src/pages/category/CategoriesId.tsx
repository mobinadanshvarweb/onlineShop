import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoriesId } from "../../services/getCategoriesId";
import { categoryEn } from "../../type/categoryEn";
import type { Products } from "../../type/product-type";

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
    <div>
      {id}-{enId}
      <div className="px-3 border border-red-500">
        {data?.map((item: Products) => {
          return (
            <span className="px-3 border border-amber-600">{item.id}</span>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesId;
