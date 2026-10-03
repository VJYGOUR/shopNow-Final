import { createContext, useContext, useState, useEffect } from "react";
import { registerUser, login, logout, authMe } from "../services/authService";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await authMe();
        setUser(data.user);
      } catch (error) {
        setUser(null);

        console.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  const register01 = async (userData) => {
    const data = await registerUser(userData);

    return data;
  };
  const login01 = async (userData) => {
    const data = await login(userData);
    setUser(data.user);
    return data;
  };
  const logout01 = async () => {
    await logout();
    setUser(null);
  };
  const value = {
    user,
    register01,
    login01,
    logout01,
    authMe,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
