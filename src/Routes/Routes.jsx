import {
    createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layouts/Mainlayout";
import ProductStatistics from "../Components/ProductStatistics";






const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },


            {
                path: '/statistics',
                element: <Statistics></Statistics>,
     
            },



            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
]);

export default router