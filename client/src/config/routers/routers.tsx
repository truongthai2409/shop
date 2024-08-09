import { RouteObject } from "react-router-dom";
import HomePage from "../../pages/home";
import AdminPage from "../../pages/admin";
import Login from "../../pages/login";

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
];
export default routers;