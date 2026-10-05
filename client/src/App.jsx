import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import Account from "./pages/Account";
import ProtectedRoute from "./auth/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<Account />} />
        <Route path="/categories" element={<Collection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
