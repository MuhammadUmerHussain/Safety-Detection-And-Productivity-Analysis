import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { mockPieData1 } from "../../data/mockData";
const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Safety Detection" subtitle="" />
      <Box height="75vh">
        <PieChart data={mockPieData1} />
      </Box>
    </Box>
  );
};

export default Pie;
