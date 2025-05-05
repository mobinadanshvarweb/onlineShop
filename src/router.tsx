import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Categories from "./pages/category/Categories";
import CategoriesId from "./pages/category/CategoriesId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Categories /> },
      { path: "category/:id", element: <CategoriesId /> },
    ],
  },
]);
export default router;
