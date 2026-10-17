import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as service from "../services/cartService";

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: service.getCart,
    retry: false,
  });
};
export const useCartMutation = (action) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: service[action],
    onSuccess: () => {
      queryClient.invalidateQueries({ querykey: ["cart"] });
    },
  });
};
