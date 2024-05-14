import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";
import React, { useCallback, useEffect, useState } from "react";

const Line = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    const storedRes = localStorage.getItem("resData");
    const parsedRes = JSON.parse(storedRes);
    if (parsedRes.confidenceScores) {
      const formattedData = parsedRes.confidenceScores.map((score, index) => ({
        x: index.toString(), // Using array index as x-value
        y: score, // Confidence score as y-value
      }));
      setLineData([
        {
          id: "Movement",
          color: tokens("dark").greenAccent[500],
          data: formattedData,
        },
      ]);

      // Now, parsedRes contains the res object retrieved from local storage
    }
  }, []);

  useEffect(() => {
    console.log("aa", lineData);
  }, [lineData]);
  return (
    <Box m="20px">
      <Header
        title="Arm Movement Activity"
        subtitle="RIGHT AND LEFT ARM MOVEMENT"
      />
      <div style={{ display: "flex" }}>
        <Box height="39vh" width="100%">
          <LineChart data={lineData} />
        </Box>
        <Box height="39vh" width="100%">
          <LineChart data={lineData} />
        </Box>
      </div>
    </Box>
  );
};

export default Line;
