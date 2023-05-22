import { Box } from "@chakra-ui/react";
import ListButton from "./ListButton";
import TodoList from "./TodoList";
import TotalAmount from "./TotalAmount";

const Index = () => {
  return (
    <Box  >
      <TotalAmount />
      <ListButton />
      <TodoList />
    </Box>
  )
}

export default Index;