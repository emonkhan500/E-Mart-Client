import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";


import Vendors from "./Pages/Vendors/Vendors";

import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Layout/Dashboard";
import UserProfile from "./UserThing/UserProfile";
import Orders from "./UserThing/Orders";
import MyCart from "./MyCart/MyCart";
import ManageProduct from "./AdminThing/ManageProduct";
import ManageOrders from "./AdminThing/ManageOrders";
import AddProduct from "./AdminThing/AddProduct";
import ManageUser from "./AdminThing/ManageUser";
import AdminProfile from "./AdminThing/AdminProfile";
import PrivateRoute from "./Private&Admin/PrivateRoute";
import Wish from "./Wishlist/Wish";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>  
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>  
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>  
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/shop',
          element:<PrivateRoute><Shop></Shop></PrivateRoute>
        },
        {
          path:'/vendors',
          element:<Vendors></Vendors>
        },
        
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'/wish',
          element:<PrivateRoute><Wish></Wish></PrivateRoute>
        },
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // admin
        {
          path:'/dashboard/adminprofile',
          element:<AdminProfile></AdminProfile>
        },
        
        {
          path:'/dashboard/manageorders',
          element:<ManageOrders></ManageOrders>
        },
        {
          path:'/dashboard/manageproducts',
          element:<ManageProduct></ManageProduct>
        },
        {
          path:'/dashboard/addproducts',
          element:<AddProduct></AddProduct>
        },
        {
          path:'/dashboard/manageusers',
          element:<ManageUser></ManageUser>
        },
        // user
        {
          path:'/dashboard/userprofile',
          element:<UserProfile></UserProfile>
        },
        {
          path:'/dashboard/orders',
          element:<Orders></Orders>
        },
      ]
    }
  ]);