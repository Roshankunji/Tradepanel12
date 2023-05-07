import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 46,
  height: 24,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 22,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(0px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 20,
    height: 20,
    borderRadius: 10,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 28 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "#98a1c03d",
    boxSizing: "border-box",
  },
}));

const Switch1 = ({ checked, change }) => {
  return (
    <AntSwitch
      inputProps={{ "aria-label": "ant design" }}
      checked={checked}
      onChange={change}
    />
  );
};

export default Switch1;
