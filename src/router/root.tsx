import Login from "@pages/auth/log/Login";
import Register from "@pages/auth/register/Register";
import Home from "@pages/home/Home";
import Account from "@pages/view/account/Account";
import Add from "@pages/view/add/Add";
import Services from "@pages/view/services/Services";
import ViewServices from "@pages/view/services/components/ViewServices";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "servicios",
    element: <Services />,
    children: [
      {
        path: "servicios/:serviciosId",
        element: <ViewServices />,
      },
    ],
  },
  {
    path: "/calendario",
    element: <div>calendario</div>,
  },
  {
    path: "/añadir",
    element: <Add />,
  },
  {
    path: "/educacion",
    element: <div>añadir</div>,
  },
  {
    path: "/perfil",
    element: <Account />,
  },
]);
