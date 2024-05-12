import React, { useEffect, useRef } from "react";

const UploadWidget = ({ onUpload,processModelResults }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const presets = ["unsigned", "video", "eager"];
  const getMyUploadPresets = (cb) => cb(presets);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    console.log("cloudinary", cloudinaryRef.current);

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "djmt6sc3a",
        uploadPreset: "dpnd8j6i",
        showAdvancedOptions: true,
        getUploadPresets: getMyUploadPresets,
      },
      function (error, result) {
        console.log("result cloud", result);
        const url = result.info.secure_url; // Extracting the secure URL from the result
        console.log("Uploaded URL:", url);
        if (!error && result && result.event === "success") {
          const secureUrl = result.info.secure_url;
          console.log("Uploaded URL:111", secureUrl);
          onUpload(secureUrl); // Call the callback function with the secure URL
          processModelResults(secureUrl)
        }
      }
    );
  }, []);

  return (
    <button className="drag-drop-box" onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  );
};

export default UploadWidget;
