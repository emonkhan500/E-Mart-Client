import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";

import Shop from "./Pages/Shop";
import Vendors from "./Pages/Vendors";
import Blogs from "./Pages/Blogs";
import Pages from "./Pages/Pages";
import Contact from "./Pages/Contact";
import About from "./Pages/About/About";

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
          path:'/pages',
          element:<Pages></Pages>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);