import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/Signup";
import Dashboard from "../Layout/Dashboard";
import PrivateRouter from "./PrivateRouter";
export const router= createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>

    },
    {
        path:'login',
        element:<LoginPage></LoginPage>
    },
    {
        path:'signup',
        element:<Signup></Signup>
    },
    {
        path:'dashboard',
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>
    }
]);