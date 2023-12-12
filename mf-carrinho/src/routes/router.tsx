import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Product } from "../pages/product";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Cart />, path: "/cart" },
      { element: <Product />, path: "/product/:id" },
    ],
  },
]);
