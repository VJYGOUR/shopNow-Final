import api from "../api/axios";
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};
export const login = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};
export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
export const authMe = async () => {
  const response = await api.get("/auth/authme");
  return response.data;
};
