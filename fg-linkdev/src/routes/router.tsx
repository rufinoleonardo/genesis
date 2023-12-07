import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Admin } from "../pages/admin";
import { Networks } from "../pages/adminSocial";
import { Login } from "../pages/login";

import { Private } from "./Private";
import { NotFound } from "../pages/notFound";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/sociais",
    element: (
      <Private>
        <Networks />
      </Private>
    ),
  },
  { path: "/Login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
