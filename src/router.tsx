import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Categories from "./pages/category/Categories";
import CategoriesId from "./pages/category/CategoriesId";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import AuthLayout from "./pages/auth/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Categories /> },
      { path: "category/:id", element: <CategoriesId /> },
      { path: "product/:id", element: <ProductDetail /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/signup", element: <Signup /> },
      { path: "/auth/login", element: <Login /> },
    ],
  },
]);
export default router;
