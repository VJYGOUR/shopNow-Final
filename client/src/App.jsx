import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Collection from "./pages/Collection";
import Account from "./pages/Account";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminCategories from "./pages/admin/categories/AdminCategories";
import CreateCategory from "./pages/admin/categories/CreateCategory";
import AdminProductPage from "./pages/admin/categories/product/AdminProductPage";
import AddProduct from "./pages/admin/categories/product/AddProduct";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<Account />} />
        <Route path="/categories" element={<Collection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/categories" element={<AdminCategories />} />

          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
