import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import DashboardRedirect from "./Layout/DashboardRedirect";
import Vendors from "./Pages/Vendors/Vendors";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Shop from "./Pages/Shop/Shop";
import PDashboard from "./Layout/PDashBoard";
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
import Details from "./Pages/Shop/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "/vendors",
        element: <Vendors></Vendors>,
      },

      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/wish",
        element: (
          <PrivateRoute>
            <Wish></Wish>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <PDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardRedirect />,
      },

      // admin
      {
        path: "adminprofile",
        element: <AdminProfile />,
      },
      {
        path: "manageorders",
        element: <ManageOrders />,
      },
      {
        path: "manageproducts",
        element: <ManageProduct />,
      },
      {
        path: "addproducts",
        element: <AddProduct />,
      },
      {
        path: "manageusers",
        element: <ManageUser />,
      },

      // user
      {
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);
