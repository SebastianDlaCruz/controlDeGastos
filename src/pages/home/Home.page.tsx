import { Box } from "@chakra-ui/react";
import NavBar from "@components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Index from "./components/Index";
const Home = () => {
  document.title = "Control de gastos";

  const { pathname } = useLocation();



  return (
    <Box bg={"blackAlpha.800"}
      minH={"100vh"}
      color={"whiteAlpha.900"}
    >
      <NavBar />
      {pathname === "/"
        ? (<Index />)
        : (<Outlet />)}
    </Box>
  )
}

export default Home