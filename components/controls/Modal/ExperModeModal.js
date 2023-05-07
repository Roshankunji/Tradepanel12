import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import Switch1 from "../../atoms/Switch/Switch1";
import Button from "../../atoms/Button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#131A2A",
  borderRadius: "3px",
  boxShadow: 24,
  color: "white",
  // p: 1,
};

const ExperModeModal = () => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = useState(false);
  const handleOpen = () => {
    if (checked === true) {
      setChecked(false);
      setOpen(false);
    } else {
      setChecked(true);
      setOpen(true);
    }
  };

  const handleOpen1 = () => {
    setChecked(true);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    setChecked(false);
  };

  return (
    <div>
      <Switch1 checked={checked} change={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px] "
      >
        <Box sx={style}>
          <div className="flex justify-between px-[15px] py-[18px]">
            <div className="text-[20px]">Are you sure?</div>
            <div
              className="text-end mb-[2px] cursor-pointer"
              onClick={handleClose}
            >
              {" "}
              <CancelIcon className="text-[20px] text-lightGray" />
            </div>
          </div>
          <hr className="border-[1px] border-lightBlue"></hr>
          <div className="text-center px-[15px] py-[15px]">
            <p className="mb-[15px] text-[14px]">
              Expert mode turns of the confirm transaction prompt and allows
              high slippage trades that often result in bad rates and lost
              funds.
            </p>
            <p className="text-uppercase font-semibold text-[14px] mb-[20px]">
              ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.
            </p>
            <Button
              className="bg-[#664d00] w-[100%] py-[9px] mb-[10px]"
              onClick={handleOpen1}
            >
              <text className="text-[15px]">Turn On Expert Mode</text>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ExperModeModal;
