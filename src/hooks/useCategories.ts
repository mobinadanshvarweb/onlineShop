import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/getProduct";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
