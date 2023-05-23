import { Box } from "@chakra-ui/react";
import ExpenseGraph from "./ExpenseGraph";
import ListButton from "./ListButton";
import TodoList from "./TodoList";
import TotalAmount from "./TotalAmount";
const Index = () => {
  return (
    <Box>
      <TotalAmount />
      <ExpenseGraph />
      <ListButton />
      <TodoList />
    </Box>
  )
}

export default Index;