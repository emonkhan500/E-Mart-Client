import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";

import Shop from "./Pages/Shop";
import Vendors from "./Pages/Vendors";

import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";

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
          path:'/signin',
          element:<SignIn></SignIn>  
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
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
        }
      ]
    },
  ]);