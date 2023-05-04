import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../../atoms/Button/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#131A2A",
  borderRadius: "3px",
  boxShadow: 24,
  color: "white",
  //   p: 4,
};

const ClosePositionModal = (props) => {
  const [open, setOpen] = React.useState(props.open);
  const [click, setClick] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  return (
    <>
      <div>
        {/* <Button
          className="bg-primary w-[100%] rounded-[2px]"
          onClick={handleOpen}
        >
          Long BTC
        </Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="backdrop-blur-sm px-[71px] "
        >
          <Box sx={style}>
            <div className="flex justify-between px-[15px] py-[10px]">
              <div className="text-[20px]">Confirm Long</div>
              <div
                className="text-end mb-[2px] cursor-pointer"
                onClick={handleClose}
              >
                <CancelIcon className="text-[20px] text-lightGray" />
              </div>
            </div>
            <hr className="border-[1px] border-lightBlue"></hr>
            <div className="text-center px-[15px] py-[15px]">
              <div className="w-[100%] flex justify-center mb-[5px]">
                Pay 10.0000 USDC ($10.00)
              </div>

              <ArrowDownwardIcon className="mb-[5px]" />

              <div className="text-[13px] mb-[20px]">
                Long 0.0007 BTC ($19.87)
              </div>

              <div className="flex justify-between">
                <div>Leverage</div>
                <div>2.00x</div>
              </div>
              <div className="flex justify-between">
                <div>Allow upto 1% of slippage</div>
                <div>2.00x</div>
              </div>
              <div className="flex justify-between">
                <div>Allowed Slippage</div>
                <div>0.30%</div>
              </div>
              <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
              <div className="flex justify-between">
                <div>Collateral Spread</div>
                <div>0.00%</div>
              </div>
              <div className="flex justify-between">
                <div>Entry Price</div>
                <div>$28,456,454</div>
              </div>
              <div className="flex justify-between">
                <div>Liq. Price</div>
                <div>$28,456,454</div>
              </div>
              <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
              <div className="flex justify-between">
                <div>Collateral (Btc)</div>
                <div>$9.94</div>
              </div>
              <div className="flex justify-between">
                <div>Fees</div>
                <div>$0.43</div>
              </div>
              <Button className="bg-primary w-[100%] rounded-[3px] mt-[15px]">
                Long
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ClosePositionModal;
