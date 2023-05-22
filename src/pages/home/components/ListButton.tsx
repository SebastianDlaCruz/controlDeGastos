import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import add from '/assets/icons/add.svg';
import calendario from '/assets/icons/calendario.svg';

const ListButton = () => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"}>
      <List display="flex" justifyContent={"space-evenly"}
        backgroundColor={"purple.600"} w={"400px"} borderRadius={"2px"}>
        <ListItem
          as={NavLink}
          to={"/añadir"}
          display={"flex"} padding=".4em" borderRadius={"2px"}
          flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
          _hover={{
            backgroundColor: "purple.500"
          }} >
          <ListIcon backgroundImage={`url(${add})`} margin="0" backgroundSize={"cover"} padding="1em" />
          <Text fontSize={"2xs"}>Añadir</Text>
        </ListItem>

        <ListItem
          as={NavLink}
          to={"/calendario"}
          display={"flex"} padding=".4em" borderRadius={"2px"}
          flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
          _hover={{
            backgroundColor: "purple.500"
          }} >
          <ListIcon backgroundImage={`url(${calendario})`} margin="0" backgroundSize={"cover"} padding="1em" />
          <Text fontSize={"2xs"}>Calendario</Text>
        </ListItem>
        <ListItem
          as={NavLink}
          to={"/añadir"}
          display={"flex"} backgroundColor={"purple.600"} padding=".4em" borderRadius={"2px"}
          flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
          _hover={{
            backgroundColor: "purple.500"
          }} >
          <ListIcon backgroundImage={`url(${add})`} margin="0" backgroundSize={"cover"} padding="1em" />
          <Text fontSize={"2xs"}>Añadir</Text>
        </ListItem>
        <ListItem
          as={NavLink}
          to={"/añadir"}
          display={"flex"} backgroundColor={"purple.600"} padding=".4em" borderRadius={"2px"}
          flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
          _hover={{
            backgroundColor: "purple.500"
          }} >
          <ListIcon backgroundImage={`url(${add})`} margin="0" backgroundSize={"cover"} padding="1em" />
          <Text fontSize={"2xs"}>Añadir</Text>
        </ListItem>
      </List>

    </Box>
  )
}

export default ListButton