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
import More from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resetpassword from "./pages/Resetpassword/Reset.jsx";
import NewPassword from "./pages/NewPassword/NewPassword.jsx";
import CartDrawer from "./commponrnts/CartDrawer/CartDrawer.jsx";
import ProtectedRouter from "../protectedRouter.jsx";
import Product from "./pages/Products/Product.jsx";
import Products from "./pages/Products/Products.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProfileOrders from "./pages/Profile/ProfileOrders.jsx";
import ProfileInfo from "./pages/Profile/ProfileInfo.jsx";
import Categorie from "./commponrnts/Categories/Categorie.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            index:true,
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
          path:'checkout',
            element:
            
              <Checkout/>
        },
        {
          path:'products',
            element:
            
              <Products/>
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
            path:'blog',
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
        },
        {
          path:'product/:id',
          element:<Product/>
        },
        {
          path:'CartDrawer',
          element:<CartDrawer/>
        },
        {
          path:'Products/category/:id',
          element:<Categorie/>
        },
        {
          path:'profile',
          element:<Profile/>,
          children:[
            {
              path:'orders',
              element:<ProfileOrders/>,
            },{
              path:'info',
              element:<ProfileInfo/>,
            }
          ]
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