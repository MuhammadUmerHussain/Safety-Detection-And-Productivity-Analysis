import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [source, setSource] = useState(
    "https://drive.google.com/uc?id=1XK1R0tS5A3J6pqAZh4-iJWuGcuFgJG16"
  );

  useEffect(() => {
    console.log("asa", source);
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="VIDEO RESULT"
        subtitle="BELOW GIVEN IS ANALYSIS OF VIDEO"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* {source && (
          <video
            className="VideoInput_video"
            width="100%"
            height="100%"
            controls
            src={source}
          />
        )} */}
        {/* <video
          src="https://drive.google.com/file/d/10NhmQdSSDvDWVLbVwKpfcvPhkT0YWpJ3/view?usp=drive_link"
          controls
        ></video> */}

        <iframe
          height="100%"
          width="100%"
          style={{ border: "none" }}
          src="https://drive.google.com/file/d/1-CLuTllNVuFp4_9KEdKQZ9lCdvHW819e/preview"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contacts;
