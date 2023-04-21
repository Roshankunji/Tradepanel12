import React, { useState } from "react";
import Image from "next/image";
import setting from "../public/Images/setting.png";
import paper from "../public/Images/paper.png";
import Button from "../components/atoms/Button/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import UniswapModalContent from "../components/controls/Modal/UniswapModalContent";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Switch from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorWarning from "../components/Molecules/ErrorMessge/ErrorWarning";
import Error from "../components/Molecules/ErrorMessge/Error";

const label = { inputProps: { "aria-label": "Switch demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 404,
  bgcolor: "#131A2A",
  borderRadius: "18px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
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
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const uniswap = () => {
  const [open, setOpen] = React.useState(false);
  const [percentage, setPercentage] = useState();
  const [checked, setChecked] = useState(false);
  const [expand, setExpand] = useState(true);
  const [auto, setAuto] = useState(false);
  const [approve, setApprove] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px]"
      >
        <Box sx={style}>
          <UniswapModalContent />
        </Box>
      </Modal>
      <div className="flex justify-center items-center bg-backgroundColor text-white py-[50px]">
        {" "}
        <div className="w-[500px] bg-darkBlueBlack1 border-[1px] border-borderColor1 rounded-[10px]">
          <div className="flex justify-between  items-center py-[15px] mx-[20px]">
            <div className="font-semiboold">Swap</div>
            <div className="flex">
              <Image
                src={setting}
                alt="setting"
                className="w-[20px] h-[20px]"
              />
              <Image
                src={paper}
                alt="paper"
                className="w-[20px] h-[20px] ml-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%]  ">
            <div className="flex justify-between py-[20px] mx-[20px] px-[20px] mb-[5px] bg-darkBlue rounded-[10px]">
              <div>
                <div className="text-[36px]">5</div>
                <div className="text-lightbluetext text-[14px]">$45.00</div>
              </div>
              <div>
                <div
                  className="mb-[15px] flex justify-center items-center py-[5px] rounded-[20px] text-white bg-lightBlue cursor-pointer"
                  onClick={handleOpen}
                >
                  <Image
                    src={setting}
                    alt="coin"
                    className="w-[18px] h-[18px] mr-[8px]"
                  ></Image>
                  <text className="text-[18px]">USDT</text>
                  <KeyboardArrowDownIcon />
                </div>
                <div className="text-center">
                  Balance : 13.83 <span>Max</span>
                </div>
              </div>
            </div>
            {/* <div className="rounded-[5px]  w-[40px] flex justify-center items-center py-[5px] absolute top-[80%] left-[50%] border-darkBlueBlack1 border-[4px]  z-2 bg-backgroundColor">
              <SouthIcon className="bg-backgroundColor"></SouthIcon>
            </div> */}
          </div>

          <div className="flex justify-between py-[20px] mb-[10px] mx-[20px] px-[20px] bg-darkBlue rounded-[10px] cursor-pointer">
            <div>
              <div className="text-[36px]">5</div>
              <div className="text-lightbluetext text-[14px]">$45.00</div>
            </div>
            <div>
              <div
                className="mb-[15px] flex justify-center items-center bg-primary py-[5px] px-[8px] rounded-[20px] text-white"
                onClick={handleOpen}
              >
                <Image
                  src={setting}
                  alt="coin"
                  className="w-[18px] h-[18px] mr-[8px]"
                ></Image>
                <text className="text-[18px]">Select Token</text>
                <KeyboardArrowDownIcon />
              </div>
              <div className="text-center">
                Balance : 13.83 <span>Max</span>
              </div>
            </div>
          </div>

          <div className="flex mb-[10px] px-[20px]">
            <text className="mr-[10px]">Slippage Tolerance</text>
            <HelpOutlineIcon />
          </div>
          <div className="flex-col mb-[10px] px-[20px]">
            <div className="w-[100%] flex items-center">
              {auto === true ? (
                <Button
                  className="bg-darkBlueBlack py-[5px] h-[50px] px-[10px] mr-[10px] rounded-[10px] border-[1px] border-borderColor1 "
                  onClick={() => {
                    setAuto(!auto);
                  }}
                >
                  <text className="text-[16px]">Auto</text>
                </Button>
              ) : (
                <Button
                  className="bg-primary py-[5px] px-[10px] h-[50px] mr-[10px] rounded-[10px] border-[1px] border-borderColor1 border-primary"
                  onClick={() => {
                    setAuto(!auto);
                  }}
                >
                  <text className="text-[16px]">Auto</text>
                </Button>
              )}

              <div className="username flex justify-between items-center w-[100%] h-[50px] outline-none rounded-[18px] font-sora bg-darkBlueBlack text-white py-[3px] px-[10px] border-[1px] border-borderColor1  rounded-[10px]">
                {/* <WarningIcon className="text-[18px] text-yellow-600 ml-[5px]" /> */}
                <input
                  type="number"
                  className="w-[100%] outline-none rounded-[18px] font-sora bg-darkBlueBlack text-white py-[3px] px-[5px] text-right"
                  placeholder="0.10"
                  controls={false}
                  onChange={(e) => {
                    setPercentage(e.target.value);
                  }}
                ></input>
                <text className="font-semibold mr-[5px]">%</text>
              </div>
            </div>
            {/* <ErrorWarning className="text-[12px] my-[10px]">
              Your transaction may be fontrun
            </ErrorWarning> */}
            {/* <Error className="text-[12px] my-[10px]">
              Enter a valid slippage percentage
            </Error> */}
          </div>
          <div className="mb-[10px] px-[20px]">Interface Setting</div>
          <div className="flex justify-between items-center px-[20px] mb-[10px]">
            <div className="flex items-center">
              <text className="mr-[10px] text-[15px]">Auto Router Api</text>
              <HelpOutlineIcon className="text-[18px]" />
            </div>
            {/* <Switch {...label} checked={checked} onChange={handleChange} /> */}
            <AntSwitch
              inputProps={{ "aria-label": "ant design" }}
              checked={checked}
              onChange={handleChange}
            />
          </div>

          <div className="bg-darkBlue pb-[8px] mb-[10px]">
            <div
              className="flex justify-between  py-[5px] mb-[10px] cursor-pointer px-[20px]"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <div className="flex items-center">
                <InfoOutlinedIcon className="text-lightbluetext text-[14px] mr-[5px]" />
                <div>
                  <text className="text-[14px]">1 USDT = 1.0045(USDC) </text>
                  <span className="text-lightbluetext text-[14px]">
                    ($1.002)
                  </span>
                </div>
              </div>
              {expand === true ? (
                <KeyboardArrowUpOutlinedIcon className="text-[#98A1C0]" />
              ) : (
                <ExpandMoreIcon className="text-lightbluetext" />
              )}

              {/* <ExpandMoreIcon className="text-lightbluetext" /> */}
            </div>
            {expand === true ? (
              <div className="border-[1px] border-borderColor1 mx-[20px] rounded-[10px] px-[10px] py-[10px] my-[5px]">
                <div className="mb-[10px]">
                  <div className="flex justify-between mb-[10px]">
                    <div className="text-lightbluetext text-[14px]">
                      Ecpected Output
                    </div>
                    <div>999.45 USDT</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lightbluetext text-[14px]">
                      Price Impact
                    </div>
                    <div className="text-lightbluetext text-[14px]">0.00%</div>
                  </div>
                </div>
                <hr className="border-borderColor1"></hr>
                <div className="my-[10px]">
                  <div className="flex justify-between mb-[10px]">
                    <div className="text-lightbluetext text-[14px]">
                      Minimum recieved after slipage (0.10%)
                    </div>
                    <div>999.45 USDT</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lightbluetext text-[14px]">
                      Network Fee
                    </div>
                    <div className="text-lightbluetext text-[14px]">~$1.83</div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mx-[20px]">
            <Button className="bg-darkBlue w-[100%] mb-[20px] text-borderColor1 font-semibold">
              {" "}
              Insufficient Balance
            </Button>
          </div>
          {approve === true ? (
            <div className="mx-[20px]">
              <Button className="bg-darkBlue w-[100%] mb-[20px] text-borderColor1 font-semibold">
                <div className="flex items-center justify-center">
                  <Box
                    sx={{
                      display: "flex",
                      marginRight: "10px",
                    }}
                  >
                    <CircularProgress className="p-[5px]" />
                  </Box>
                  <text>Approve in your wallet</text>
                </div>
              </Button>
            </div>
          ) : (
            <div className="mx-[20px]">
              <Button
                className="bg-primary w-[100%] mb-[20px]"
                onClick={() => {
                  setApprove(!approve);
                }}
              >
                <div className="flex items-center justify-center">
                  <InfoOutlinedIcon className="text-lightblutext text-[25px] mr-[10px]" />
                  <text>Approve use of USDC</text>
                </div>
              </Button>
            </div>
          )}

          <div className="mx-[20px]">
            <Button className="bg-primary w-[100%] mb-[20px]">Swap</Button>
          </div>
          <div className="mx-[20px]">
            <Button className="bg-primary w-[100%] mb-[20px]">
              Confirm Swap
            </Button>
          </div>
          {/* <Button className="text-[#4C82FB] w-[100%] mb-[20px] bg-[#4c82fb3d]">
            Connect Wallet
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default uniswap;
