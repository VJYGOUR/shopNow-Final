import api from "../api/axios";

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};
export const addToCart = async ({ productId, quantity }) => {
  const { data } = await api.post("/cart/items", { productId, quantity });
  return data;
};
export const updateCartItem = async ({ productId, quantity }) => {
  const { data } = await api.put(`/cart/items/${productId}`, { quantity });
  return data;
};
export const removeCartItem = async (productId) => {
  const { data } = await api.delete(`/cart/items/${productId}`);
  return data;
};
