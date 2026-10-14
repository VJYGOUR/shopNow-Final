import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import * as service from "../services/productService";
export const useProducts = (admin = false) => {
  return useQuery({
    queryKey: ["products", admin],
    queryFn: () => service.getAllProduct(admin),
  });
};
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => service.getProductById(id),
    enabled: !!id,
  });
};
export const useProductMutation = (action) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: service[action],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};
