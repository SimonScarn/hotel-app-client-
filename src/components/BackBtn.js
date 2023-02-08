import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackBtn() {
    const navigate = useNavigate();

  return (
    <IconButton
      style={{
        borderRadius: 12,
        width: 80,
        height: 40,
        backgroundColor: "#eee",
        fontSize: "14px",
        marginTop: 16,
        position: "absolute",
        bottom: 0,
        left: 0,
        borderTopLeftRadius: 0
      }}
      onClick={() => navigate(-1)}
      color="warning"
    >
      <ArrowBackIcon />
      <span>Back</span>
    </IconButton>
  );
}

export default BackBtn;
