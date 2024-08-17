import { RouteObject } from "react-router-dom";
import HomePage from "../../pages/home";
import AdminPage from "../../pages/admin";
import Login from "../../pages/login";
import Register from "../../pages/register";

const routers: RouteObject[] = [
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/admin',
        element: <AdminPage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
];
export default routers;