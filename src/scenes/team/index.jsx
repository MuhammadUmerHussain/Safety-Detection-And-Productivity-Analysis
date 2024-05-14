import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useDrivePicker from "react-google-drive-picker";
import React, { useCallback, useEffect, useState } from "react";
import UploadWidget from "./UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
const Team = () => {
  const theme = useTheme();
  const cld = new Cloudinary({ cloud: { cloudName: "djmt6sc3a" } });
  const [openPicker, authResponse] = useDrivePicker();
  const inputRef = React.useRef();
  const [video, setVideo] = useState("");
  const colors = tokens(theme.palette.mode);
  const [source, setSource] = useState("");
  const navigate = useNavigate();
  const [navigateButton, setNavigateButton] = useState(false);

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

  const processModelResults = (result) => {
    console.log("ummerss", result);
    // Process the model results here
    // if (result) {
    //   // Make Axios POST call
    //   axios.post("http://127.0.0.1:5000/upload", {
    //     imageUrl: result
    //   })
    //   .then(response => {
    //     console.log("POST request successful", response);
    //     // Handle response if needed
    //     if(response?.status==200){
    //       localStorage.setItem(

    //       )
    //     }
    //   })
    //   .catch(error => {
    //     console.error("Error making POST request", error);
    //   });
    // }
    let res = {
      videoPath:
        "C:/Users/abdul/Desktop/Mediapipe_Extraction_Videos/result/result.avi",
      confidenceScores: [
        118.5726662448198, 110.2597984212831, 107.1496212693844,
        109.80331287927139, 108.74106485485176, 118.91352414682241,
        116.44866834592757, 120.28153408951533, 137.66649059648196,
        152.30323193640993, 145.63339272006056, 144.34442168065834,
        132.48611251188427, 119.53473944747157, 118.91583406986277,
        110.14411390957731, 101.16852848374073, 105.35958566245827,
        104.02754992873366, 109.5892126906921, 118.27587546207583,
        128.67092994389793, 126.1880349930697, 124.92694215051485,
        126.74458807961909, 127.03715883055213, 125.9986287597808,
        109.54437721721669, 111.03299504766089, 103.7298311219836,
        108.3869172522347, 100.04568140338374, 103.12135615144516,
        103.12621755855093, 116.5705316512597, 118.44220759728124,
        122.07348935856159, 122.17240078843862, 124.64535698348213,
        125.38712972765767, 125.31710101633502, 121.41396035127418,
        115.75060377622775, 104.76445305063886, 104.94097154626705,
        99.08150813245169, 98.04434245911125, 98.68498567605411,
        115.3448027811814, 124.56062779023685, 126.13328278357982,
        126.50565026564615, 128.4532914709552, 129.45666412353907,
        133.64992991527046, 131.44048537967006, 123.86461153275253,
        113.47046909048812, 105.20681646540739, 123.73637099277958,
        108.69280592175869, 108.98157436720678, 116.96925552251868,
        120.65816781106707, 125.08221437135684, 127.24327740354965,
        125.1151330738493, 126.02863656415849, 126.61236501137647,
        125.71282101773379, 119.6898059196968, 113.71760176950644,
        107.5435635668854, 113.13203827857464, 108.71745884439295,
        107.93869771122417, 112.0943609212856, 116.60483132271199,
        123.45552553783169, 125.32185853290166, 123.27962577618244,
        121.92133507753519, 124.72517594155366, 123.82688112875147,
        125.70819524996293, 117.53060971415245, 114.48787069050742,
        103.76198910309454, 100.4198478905533, 98.72067482828433,
        103.06955232457976, 110.66981164866317, 117.47237233580582,
        123.37410678056035, 121.39559521823962, 121.25504986601076,
        120.73780447318714, 120.0972159963276, 119.03849845706155,
        118.85563160572302, 107.61430592415367, 125.53602273496865,
        135.25615241128017, 119.22831235176335, 112.62987093187259,
        109.12167304590531, 115.31576362971694, 130.00984070478225,
        125.53115785590889, 122.88657066536, 126.21721189502661,
        124.12154075215075, 117.9551942187741, 105.7362587934925,
        136.01418049122975, 110.21103897331622, 110.81848881724403,
        28.82236914456339, 52.02587886145387, 111.37786600192184,
        145.95779190015557, 75.13100736017644, 101.06671793356247,
        111.2267451355336, 119.55790821958902, 135.64975389432192,
        124.91001174900464, 101.14884797809236,
      ],
      threshold: 0.2734375,
      labels: [
        "Person",
        "Safety Vest",
        "NO-Safety Vest",
        "NO-Mask",
        "NO-Hardhat",
        "Hardhat",
      ],
    };

    if (res) {
      localStorage.setItem("resData", JSON.stringify(res));
      console.log("local");
    }
  };

  const handleAnalyzeClick = () => {
    // Navigate to '/contacts' when button is clicked
    navigate("/contacts");
  };
  const handleUpload = (secureUrl) => {
    setSource(secureUrl); // Update the source state with the secure URL

    console.log("ssssss===", source);
  };

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
    // const file = event.target.files[0];
    // const formData = new FormData();
    // formData.append("video", file);
    // formData.append("upload_preset", "dpnd8j6i");
    // fetch("https://api.cloudinary.com/v1_1/djmt6sc3a/video/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVideo(data.secure_url);
    //   });
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
    // const url = URL.createObjectURL(file);
    // console.log("src", url);
    // setSource(url);
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
        {/* <button onClick={() => handleOpenPicker()}>Open Picker</button> */}
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {source.length < 1 && (
          <UploadWidget
            onUpload={handleUpload}
            processModelResults={processModelResults}
          />
        )}
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
        {source.length > 0 && (
          <video
            className="VideoInput_video"
            width="100%"
            height="100%"
            controls
            src={source}
          />
        )}

        {!navigateButton && (
          <button className="drag-drop-box" onClick={handleAnalyzeClick}>
            View Analysis
          </button>
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
