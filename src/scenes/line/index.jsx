import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { mockLineData } from "../../data/mockData";
const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="Arm Movement Activity"
        subtitle="RIGHT AND LEFT ARM MOVEMENT"
      />
      <div style={{ display: "flex" }}>
        <Box height="39vh" width="100%">
          <LineChart data={mockLineData} />
        </Box>
        <Box height="39vh" width="100%">
          <LineChart data={mockLineData} />
        </Box>
      </div>
    </Box>
  );
};

export default Line;
