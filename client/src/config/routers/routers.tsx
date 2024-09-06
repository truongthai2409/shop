import { RouteObject } from "react-router-dom";
import PrivateRoute from "./private_router";
import HomePage from "../../pages/home/home";
import AdminPage from "../../pages/admin/admin";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Page404 from "../../pages/404/error";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <PrivateRoute element={<AdminPage />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export default routers;
