import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'cart',
            element:<Cart/>
        }
    ]
  },
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  },
]);
export default router;