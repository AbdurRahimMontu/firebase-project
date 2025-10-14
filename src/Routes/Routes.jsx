import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

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
            }
        ]
    }
    
])

export default Routes;