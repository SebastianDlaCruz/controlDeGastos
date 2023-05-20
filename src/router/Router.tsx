import Login from "@pages/auth/login/Login.page";
import Register from "@pages/auth/register/Register.page";
import Home from "@pages/home/Home.page";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>
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
