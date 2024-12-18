import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PackageDetail from "./pages/PackageDetail";
import OrderForm from "./pages/OrderForm";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderHistory from "./pages/OrderHistory";
import Dashboard from "./pages/Dashboard"; // Halaman dashboard admin

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/package/:id" element={<PackageDetail />} />

      {/* Rute Terproteksi */}
      <Route element={<ProtectedRoute />}>
        <Route path="/order/:id" element={<OrderForm />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Route>

      {/* Rute Khusus Admin */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);
