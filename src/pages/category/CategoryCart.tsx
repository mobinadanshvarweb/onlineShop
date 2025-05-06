import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categoryTranslations } from "../../type/categoryTranslate";
const CategoryCart = ({
  src,
  title,
  price,
  rate,
  category,
  id,
}: {
  src: string;
  title: string;
  price: number;
  rate: number;
  category: string;
  id: number;
}) => {
  console.log(categoryTranslations[category], "me");

  return (
    <Link
      to={`/product/${id}`}
      className="w-full lg:w-1/2 h-[400px] flex flex-col gap-4 p-3 hover:shadow-2xl py-6 border-[0.1px] border-gray-100"
    >
      <img src={src} alt="Image Of Product" className="h-2/3 object-contain" />
      <p className="w-full flex items-center">{title.substring(0, 50)}</p>
      <span className="w-full flex justify-end gap-2 items-center">
        {rate}
        <FaStar className="text-amber-300" size={20} />
      </span>
      <div className="w-full flex justify-end">{price}</div>
    </Link>
  );
};

export default CategoryCart;
