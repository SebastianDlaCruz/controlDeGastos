import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Hamburger from '/assets/icons/hamburger.svg';
const MenuNav = () => {
  return (
    <Menu >
      <MenuButton>
        <img src={Hamburger} alt="hamburger icon" />
      </MenuButton>
      <MenuList backgroundColor={"blackAlpha.600"}>
        <MenuItem as={NavLink} to={"/"} backgroundColor={"blackAlpha.700"} _hover={{ backgroundColor: "#670fa1" }}>Inicio</MenuItem>
        <MenuItem as={NavLink} to={"/servicios"} backgroundColor={"blackAlpha.700"} _hover={{ backgroundColor: "#670fa1" }}>Servicios</MenuItem>
        <MenuItem as={NavLink} to={"/perfil"} backgroundColor={"blackAlpha.700"} _hover={{ backgroundColor: "#670fa1" }}>Mi cuenta</MenuItem>
        <MenuItem as={NavLink} to={"/sugerencias"} backgroundColor={"blackAlpha.700"} _hover={{ backgroundColor: "#670fa1" }}>Sugerencias</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuNav;