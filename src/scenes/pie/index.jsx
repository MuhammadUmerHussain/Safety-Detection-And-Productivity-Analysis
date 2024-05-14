import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { mockPieData1 } from "../../data/mockData";
import { useEffect, useState } from "react";
const Pie = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    const storedRes = localStorage.getItem("resData");
    const parsedRes = JSON.parse(storedRes);
    if (parsedRes.threshold) {
      if (parsedRes.threshold < 0.2) {
        let data = [
          {
            id: "Working Very Slow",
            label: "Working Very Slow",
            value: 0.125,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "Average",
            label: "Average",
            value: 0.375,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "High",
            label: "High",
            value: 0.75,
            color: "hsl(162, 70%, 50%)",
          },
        ];
        setLineData(data);
      } else if (parsedRes.threshold >= 0.2 && parsedRes.threshold < 0.8) {
        let data = [
          {
            id: "Slow",
            label: "Slow",
            value: 0.125,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "Working Good",
            label: "Working Good",
            value: 0.375,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "High",
            label: "High",
            value: 0.75,
            color: "hsl(162, 70%, 50%)",
          },
        ];
        setLineData(data);
      } else if (parsedRes.threshold >= 0.8) {
        let data = [
          {
            id: "Slow",
            label: "Slow",
            value: 0.125,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "Average",
            label: "Average",
            value: 0.375,
            color: "hsl(162, 70%, 50%)",
          },
          {
            id: "Working Swiftly",
            label: "Working Swiftly",
            value: 0.75,
            color: "hsl(162, 70%, 50%)",
          },
        ];
        setLineData(data);
      }

      // Now, parsedRes contains the res object retrieved from local storage
    }
  }, []);
  return (
    <Box m="20px">
      <Header title="Safety Detection" subtitle="" />
      <Box height="75vh">
        <PieChart data={lineData} />
      </Box>
    </Box>
  );
};

export default Pie;
