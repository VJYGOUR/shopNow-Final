import api from "../api/axios";
export const getAllProduct = async (admin = false) => {
  const { data } = await api.get(admin ? "/products/admin" : "/products");
  return data;
};
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
export const createProduct = async (product) => {
  const response = await api.post("/products/create", product);
  return response.data;
};
export const updateProduct = async (id, product) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};
