import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { mockPieData } from "../../data/mockData";
const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Productivity Analysis Graph" subtitle="" />
      <Box height="75vh">
        <PieChart data={mockPieData} />
      </Box>
    </Box>
  );
};

export default Bar;
