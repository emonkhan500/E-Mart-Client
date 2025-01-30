import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./src/Layout/Main";
import Home from "./src/Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>  
        }
      ]
    },
  ]);