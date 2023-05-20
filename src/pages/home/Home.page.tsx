import { Box, Text } from "@chakra-ui/react";
import { UseAuth } from "@hooks/index.hook";
const Home = () => {

  const { state } = UseAuth();

  document.title = "Control de gastos";

  return (
    <Box bg={"blackAlpha.800"}
      minH={"100vh"}
      color={"whiteAlpha.900"}
    >

      <Box as="header" textAlign={"center"}
        padding={"33px 0"}>

        <Text as="h1" fontSize={"3xl"}> Bienvenido {state.name}</Text>


      </Box>


    </Box>
  )
}

export default Home