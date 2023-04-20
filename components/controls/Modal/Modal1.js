import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../../atoms/Button/Button";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 504,
  bgcolor: "#161617",
  borderRadius: "18px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

function FacebookCircularProgress(props) {
  return (
    <Box
      sx={{
        position: "relative",
        marginRight: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={23}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,

          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={23}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const Modal1 = ({ control }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [process, setProcess] = useState(false);
  useState(() => {
    setProcess(false);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Button
          className="bg-primary py-[17px]  flex items-center w-[257px] flex justify-center"
          onClick={handleOpen}
          disabled={control === true ? false : true}
        >
          {process === true ? (
            <div>
              {" "}
              <FacebookCircularProgress />
            </div>
          ) : (
            ""
          )}

          <text>
            {process === false ? "Process Rollover" : "Processing Rollover"}
          </text>
        </Button>
        {/* <div className="flex flex-col justify-center items-center">
          <Button className="w-[92px] mb-[10px]">Finish</Button>
          <div className="flex justify-center items-center">
            <CheckCircleOutlineIcon className="text-[15px] text-[#67DF9F] mr-1" />
            <text className="text-[13px] text-[#67DF9F]">
              Rollover Completed
            </text>
          </div>
        </div> */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px]"
        keepMounted={true}
      >
        <Box sx={style}>
          <Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-[18px] text-center"
            >
              Confirm Rollover
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 1 }}
              className="text-[14px] text-center mb-[20px]"
            >
              <div className="px-20 text-center font-light text-lightGray">
                You’re about to process rollover for Top Cap Digital Asset
                Strategy
              </div>
            </Typography>
            <Typography className="text-[14px] text-center mb-[12px] font-thin text-lightGray">
              Are you sure you want to proceed with this action?
            </Typography>
            <div className="flex justify-center">
              <Button
                className="mx-5 text-[18px] py-[10px] px-[53px] w-[134px] bg-primary"
                onClick={() => {
                  handleClose();
                  setProcess(!process);
                }}
              >
                Yes
              </Button>
              <Button
                className="mx-5 text-[18px] py-[10px] px-[53px] w-[134px] bg-orange"
                onClick={() => {
                  handleClose();
                }}
              >
                No
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Modal1;
