import UserProvider from "@context/provider/UserProvider.context";
import GlobalStyles from '@mui/material/GlobalStyles';
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles styles={{
        body: { backgroundColor: "#373737", color: '#fff' }
      }} />
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
