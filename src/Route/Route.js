import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Page404 from "../pages/404page/Page404";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Ragister from "../pages/Ragister/Ragister";
import ServiceCenter from "../pages/ServiceCenter/ServiceCenter";

import SingleServiceDetails from "../pages/SingleServiceDetails/SingleServiceDetails";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ragister',
                element: <Ragister></Ragister>
            },
            {
                path: '/ServiceCenter',
                element: <ServiceCenter></ServiceCenter>
            },
            {
                path: '/ServiceCenter/:id',
                element: <SingleServiceDetails></SingleServiceDetails>,
                loader: ({ params }) => fetch(`https://glamour-support.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myReviews',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            }
        ]
    },
    {
        path: '/*',
        element: <Page404></Page404>
    }
])
export default router;