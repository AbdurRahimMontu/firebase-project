import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Orders from '../Components/Orders';
import Profile from '../Components/Profile';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Components/Dashboard';

const Routes = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                Component:Home
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"orders",
                element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path:"profile",
                element:<PrivateRoutes><Profile></Profile>  </PrivateRoutes>
            },
            {
                path:"dashboard",
                element:<PrivateRoutes><Dashboard></Dashboard>  </PrivateRoutes>
            },

        ]
    }
    
])

export default Routes;