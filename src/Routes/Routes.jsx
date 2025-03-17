import {
    createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layouts/Mainlayout";
import CartDetails from "../Components/ProductDetails";
import Laptop from "../Components/Laptop";
import AllProducts from "../Components/AllProducts";
import Phone from "../Components/Phone";
import Accessories from "../Components/Accessories";
import SmartWatch from "../Components/SmartWatch";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                loader: () => fetch('../gadgetHeavenData.json'),
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        loader: () => fetch('../gadgetHeavenData.json'),
                        element: <AllProducts></AllProducts>
                    },
                    {

                        path: '/Laptop',
                        loader: () => fetch('../gadgetHeavenData.json'),
                        element: <Laptop></Laptop>


                    },
                    {
                        path: '/Phone',
                        loader: () => fetch('../gadgetHeavenData.json'),
                        element: <Phone></Phone>
                    },
                    {
                        path: '/Accessories',
                        loader: () => fetch('../gadgetHeavenData.json'),
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/Smartwatch',
                        loader: () => fetch('../gadgetHeavenData.json'),
                        element: <SmartWatch></SmartWatch>,
                    }
                ]


            },


            {
                path: '/statistics',
                loader: () => fetch('../gadgetHeavenData.json'),
                element: <Statistics></Statistics>,

            },



            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

            {
                path: '/cartDetails/:cardId',
                loader: () => fetch('../gadgetHeavenData.json'),
                element: <CartDetails></CartDetails>
            },


        ]
    },
]);

export default router