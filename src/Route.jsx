import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/Register.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Collection from "./pages/Collection/Collection.jsx";
import Necklaces from "./pages/Necklaces/Necklaces.jsx";
import More from "./pages/More/More.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resetpassword from "./pages/Resetpassword/Reset.jsx";
import NewPassword from "./pages/NewPassword/NewPassword.jsx";
import CartDrawer from "./commponrnts/CartDrawer/CartDrawer.jsx";
import ProtectedRouter from "../protectedRouter.jsx";
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
            element:
            <ProtectedRouter>
              <Cart/>
            </ProtectedRouter>
        },
        {
            path:'shop',
            element:<Shop/>
        },
        {
            path:'collection',
            element:<Collection/>
        },
        {
            path:'necklaces',
            element:<Necklaces/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'more',
            element:<More/>
        },
        {
        path:'log in',
        element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'reset',
          element:<Resetpassword/>
        },
        {
          path:'new-password',
          element:<NewPassword/>
        },
        {
          path:'cart-drawer',
          element:<CartDrawer/>
        }
    ]
  },
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      
    ]
  },
]);
export default router;