import { api } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ProductsProps } from "./interface";

const getProducts = async ({ page, rows, sortBy, orderBy }: ProductsProps) => {
  const result = await api.get(
    `?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );
  return result.data;
};

const useGetProducts = ({ page, rows, sortBy, orderBy }: ProductsProps) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => getProducts({ page, rows, sortBy, orderBy }),
  });

  return { data, isLoading, refetch };
};

export default useGetProducts;
