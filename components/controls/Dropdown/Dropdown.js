import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Dropdown = ({ className, names, background, width }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  useEffect(() => {
    setPersonName(names[0]);
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <div className={`flex items-center mr-[30px]  ${className}`}>
        <FormControl sx={{ m: 0, width: width, mt: 0 }}>
          <Select
            // multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            style={{
              color: "white",
              // background: "gray",
              backgroundColor: background,
              height: "40px",
              borderRadius: "8px",
            }}
            sx={{
              height: "2.5rem",
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: "5px 5px 5px px",
              },
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>{names[0]}</em>;
              }

              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {/* <div className="py-[10px]" style={{ background: "#1E1E1E" }}> */}
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                <div
                  className={
                    name == personName
                      ? "bg-primary rounded-[6px] my-[1px] text-white pt-[12px] px-[10px] pb-[12px] box-border w-[100%] hover:bg-primary hover:rounded-[6px]"
                      : "bg-darkBlue text-white pt-[12px] my-[1px] rounded-[2px] px-[10px] pb-[12px] box-border w-[100%] hover:bg-primary hover:rounded-[6px]"
                  }
                >
                  {name}
                </div>
              </MenuItem>
            ))}
            {/* </div> */}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Dropdown;
