import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { BorderColor } from "@mui/icons-material";

const CheckBox = ({ show }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    show(event.target.checked);
  };
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 18, color: "white" } }}
        style={{
          width: "5px",
          height: "5px",
        }}
      />
    </>
  );
};

export default CheckBox;
