import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Order from "../pages/Order/Order";
import Recommendation from "../pages/Recommendation/Recommendation";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },

        {
          path:'order',
          element: <Order></Order>,
        },
        {
          path:'recommendation',
          element: <Recommendation></Recommendation>,
        },

        {
          path: 'login',
          element: <Login></Login>,
      },
      {
        path: 'Register',
        element: <Register></Register>,
    },

      ]
    },
  ]);