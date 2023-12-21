import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/layout";
import { Home } from "../pages/home";
import { Calendar } from "../pages/calendar";
import { Listas } from "../pages/listas";
import { Pesquisa } from "../pages/pesquisa";
import { OrgaoHistory } from "../pages/orgao";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { NotFound } from "../pages/error";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Calendar />, path: "/calendar" },
      { element: <Listas />, path: "/listas" },
      { element: <Pesquisa />, path: "/pesquisa" },
      { element: <OrgaoHistory />, path: "/orgaos" },
      { element: <NotFound />, path: "*" },
    ],
  },
  { element: <Login />, path: "/login" },
  { element: <Register />, path: "/register" },
]);
