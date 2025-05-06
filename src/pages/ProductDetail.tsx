import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductId } from "../services/getProduct";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductId(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (isError) return <div>خطا در دریافت اطلاعات محصول</div>;

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full lg:w-1/3 h-[400px] border">
        <img
          src={data.image}
          alt={data.title}
          className="object-contain h-full"
        />
      </div>
      <div className="w-full lg:w-1/3 border"></div>
      <div className="w-full lg:w-1/3 border"></div>
    </div>
  );
};

export default ProductDetail;
