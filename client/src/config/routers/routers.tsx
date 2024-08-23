import { RouteObject } from "react-router-dom";
import HomePage from "../../pages/home";
import AdminPage from "../../pages/admin";
import Login from "../../pages/login";
import Register from "../../pages/register";
import PrivateRoute from "./private_router";

const routers: RouteObject[] = [
  {
    path: "/home",
    element: <PrivateRoute element={<HomePage />} />,
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
];

export default routers;
