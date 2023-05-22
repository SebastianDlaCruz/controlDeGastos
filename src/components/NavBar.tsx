import { Box } from "@chakra-ui/react"
import AvatarUser from "./AvatarUser"
import MenuNav from "./MenuNav"
const NavBar = () => {
  return (
    <Box as="header"
      display="flex"
      justifyContent={"space-between"}
      padding="19px"
      backgroundColor={"blackAlpha.600"}>
      <AvatarUser />
      <MenuNav />
    </Box>
  )
}

export default NavBar