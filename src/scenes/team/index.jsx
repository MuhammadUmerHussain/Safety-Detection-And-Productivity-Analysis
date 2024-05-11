import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
const Team = () => {
  const theme = useTheme();
  const inputRef = React.useRef();
  const colors = tokens(theme.palette.mode);
  const [source, setSource] = useState();
  const handleChoose = (event) => {
    inputRef.current.click();
  };
  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  // const onDrop = useCallback((acceptedFiles) => {
  //   // Do something with the files
  //   console.log(
  //     "file",
  //     acceptedFiles,
  //     "file.originFileObj",
  //     acceptedFiles.originFileObj
  //   );

  //   var url = URL.createObjectURL(acceptedFiles.originFileObj);
  //   setVideoFiles(url);
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  //   accept: "video/*",
  // });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("video", file);

    // axios
    //   .post("http://localhost:5000/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     console.log("File uploaded successfully:", response.data);
    //     // Do something with the response if needed
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading file:", error);
    //   });

    const url = URL.createObjectURL(file);
    setSource(url);
  };
  return (
    <Box m="20px">
      <Header title="DROP VIDEO" subtitle="PLEASE CLICK ON BUTTON" />
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
        }}
      >
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && (
          <button className="drag-drop-box" onClick={handleChoose}>
            Drop Your Video
          </button>
        )}
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
        {source && (
          <video
            className="VideoInput_video"
            width="100%"
            height="100%"
            controls
            src={source}
          />
        )}
      </Box>
    </Box>
  );
};

export default Team;
const videoStyle = {
  marginTop: "20px",
  maxWidth: "100%",
};
