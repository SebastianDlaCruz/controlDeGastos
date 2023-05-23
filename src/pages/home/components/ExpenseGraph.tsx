import { Box } from "@chakra-ui/react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from 'react-chartjs-2';
import { UseGetDataSpent } from "../hook/index.hook";
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseGraph = () => {

  const { data } = UseGetDataSpent();

  return (
    <Box display={"flex"}
      justifyContent={"center"}
      margin="12px 0">
      <Box
        w={"500px"} h={"500px"}>
        <Pie data={data} />
      </Box>
    </Box>
  )
}

export default ExpenseGraph