import api from "../api/axios";
export const getCategories = async () => {
  const response = await api.get("/category");
  return response.data;
};
export const getCategoryById = async (id) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};
export const createCategory = async (category) => {
  const response = await api.post("/category/create", category);
  return response.data;
};
export const updateCategory = async (id, category) => {
  const response = await api.put(`/category/${id}`, category);
  return response.data;
};
export const deleteCategory = async (id) => {
  const response = await api.delete(`/category/${id}`);
  return response.data;
};
