import { Avatar, Box, Text } from "@chakra-ui/react";
import UserAuth from "@hooks/UseAuth.hook";
import userIcon from '/assets/icons/user.svg';
const AvatarUser = () => {
  const { state } = UserAuth();

  return (
    <Box
      display="flex"
      w={"500px"}
      alignItems="center"
      gap={"12px"}>
      <Avatar bg={"whiteAlpha.800"}
        padding=".4em"
        size='md'
        name={state.name || '?'}
        src={state.photo || userIcon} />
      <Text>Bienvenido {state.name}</Text>
    </Box>
  )
}

export default AvatarUser