import Login from "@pages/auth/login/Login.page";
import Register from "@pages/auth/register/Register.page";
import Home from "@pages/home/Home.page";
import Add from "@pages/view/add/Add.page";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/servicios",
        element: <div>servicios</div>
      },
      {
        path: "/perfil",
        element: <div>perfil</div>
      },
      {
        path: "/sugerencias",
        element: <div>sugerencias</div>
      },
      {
        path: "/añadir",
        element: <Add />
      },
      {
        path: "/calendario",
        element: <div>calendario</div>
      },

    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);
