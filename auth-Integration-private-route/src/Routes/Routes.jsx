import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Profile from "../Components/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/login', Component: Login },
            { path: '/register', Component: Register },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile /></PrivateRoutes>,
            }
        ]
    },
    {
        path: "*",
        Component: () => <div className="text-center text-3xl">404 Not Found</div>
    }
]);
