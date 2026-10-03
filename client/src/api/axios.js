import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
console.log("axios has ben initialized", api);
export default api;
