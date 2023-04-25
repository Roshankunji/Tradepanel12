import React, { useEffect, useState } from "react";
import Image from "next/image";
import setting from "../public/Images/setting.png";
import paper from "../public/Images/paper.png";
import Button from "../components/atoms/Button/Button";
import SouthIcon from "@mui/icons-material/South";
import DrawerC from "../components/controls/SideDrawer/SideDrawer";
import Avatar from "@mui/material/Avatar";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TokenInfo from "../components/Molecules/Uniswap/TokenInfo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import UniswapModalContent from "../components/controls/Modal/UniswapModalContent";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Switch1 from "../components/atoms/Switch/Switch1";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorWarning from "../components/Molecules/ErrorMessge/ErrorWarning";
import Error from "../components/Molecules/ErrorMessge/Error";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import tokenDataFromJson from "../components/controls/Dropdown/TokenData.json";

const label = { inputProps: { "aria-label": "Switch demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "#131A2A",
  borderRadius: "18px",
  boxShadow: 24,
  color: "white",
  // p: 4,
  pt: 1,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "#131A2A",
  borderRadius: "18px",
  boxShadow: 24,
  color: "white",
  padding: 3,
};

const Uniswap = () => {
  const [totalProfitLoss, setTotalProfitLoss] = useState("loss");
  const [totalTokenAmount, setTotalTokenAmount] = useState();
  const [walletAddress, setWalletAddress] = useState("0x5175...526A");
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState();
  const [checked, setChecked] = useState(false);
  const [expand, setExpand] = useState(true);
  const [auto, setAuto] = useState(false);
  const [approve, setApprove] = useState(false);
  const [swapAmount, setSwapAmount] = useState(0);
  const [swapSecondAmount, setSwapSecondAmount] = useState(0);
  const [tokenData, setTokenData] = useState("");
  const [tokenDataNext, setTokenDataNext] = useState("");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  let [counter, setCounter] = useState(0);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleOpen = () => {
    setFirst(true);
    setOpen(true);
  };
  const handleClose = () => {
    setFirst(false);
    setOpen(false);
  };
  const handleOpen1 = () => {
    setSecond(true);
    setOpen(true);
  };
  const handleClose1 = () => {
    setSecond(false);
    setOpen(false);
  };

  useEffect(() => {
    setTotalTokenAmount(
      tokens.map((item) => item.dollarValue).reduce((prev, next) => prev + next)
    );
  }, []);

  useEffect(() => {
    if (openConfirmModal) {
      setTimeout(() => {
        setCounter(counter++);
        setTimeout(() => {
          setCounter(counter++);
          setTimeout(() => {
            setCounter(counter++);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }, [openConfirmModal]);

  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
    setCounter(0);
  };

  let tokens = [
    {
      tokenName: "Tether USD",
      tokenAmount: 10.75,
      dollarValue: 10.75,
      tokenSymbol: "USDT",
      percentChange: 0.05,
      profitLoss: "loss",
    },
    {
      tokenName: "USD Coin",
      tokenAmount: 10.35,
      dollarValue: 10.36,
      tokenSymbol: "USDC",
      percentChange: 0.07,
      profitLoss: "profit",
    },
    {
      tokenName: "Ethereum",
      tokenAmount: 0.003,
      dollarValue: 4.86,
      tokenSymbol: "ETH",
      percentChange: 1.33,
      profitLoss: "loss",
    },
  ];

  useEffect(() => {
    setTotalTokenAmount(
      tokens.map((item) => item.dollarValue).reduce((prev, next) => prev + next)
    );
  }, [tokens]);

  return (
    <>
      <Modal
        open={open}
        onClose={first === true ? handleClose : handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px]"
      >
        <Box sx={style} className="border-[1px] border-borderColor1">
          <UniswapModalContent
            tokenData1={(e) => {
              setTokenData(e);
            }}
            first={first}
            second={second}
            tokenData2={(e) => {
              setTokenDataNext(e);
            }}
            closeModal={() => {
              handleClose();
            }}
          />
        </Box>
      </Modal>
      <Modal
        open={openConfirmModal}
        onClose={handleCloseConfirmModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px]"
        sx={{ height: "100%" }}
      >
        <Box sx={style1}>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center bg-gray-700 px-2 rounded-full">
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={"/Images/Arbitrum.svg"}
                alt="arbitrum"
                className="mr-0"
              />{" "}
              <div className="mr-1">Arbitrum</div>
            </div>
            <CloseIcon
              className="cursor-pointer text-gray-300"
              onClick={handleCloseConfirmModal}
            />
          </div>
          <div className="text-center">
            {counter === 0 && (
              <div>
                <CircularProgress size="78px" className="p-[5px]" />
                <div className="font-medium text-gray-200 mb-[5px] text-[17px]">
                  Confirm Transaction in wallet
                </div>
                <div className="font-normal text-[14px] text-gray-200 mb-[20px]">
                  Swapping 10.7507 USDT for 10.7527 USDC
                </div>
              </div>
            )}
            {counter === 1 && (
              <div>
                <CircularProgress size="78px" className="p-[5px]" />
                <div className="font-medium text-gray-200 mb-[5px] text-[17px]">
                  Transaction Submitted
                </div>
                <div className="font-normal text-[14px] text-gray-200 mb-[20px]">
                  Swap exactly 10.7507 USDT for 10.7527 USDC
                </div>
                <div className="font-normal text-[14px] text-blue-500 mb-[20px] cursor-pointer">
                  View on Explorer
                </div>
              </div>
            )}
            {counter === 2 && (
              <div>
                <CheckCircleOutlineIcon className="text-[90px] text-green-500 mb-2" />
                <div className="font-medium text-gray-200 mb-[5px] text-[17px]">
                  Success
                </div>
                <div className="font-normal text-[14px] text-gray-200 mb-[10px]">
                  Swapping exactly 10.7507 USDT for 10.7527 USDC
                </div>
                <div className="font-normal text-[14px] text-blue-500 mb-[15px] cursor-pointer">
                  View on Explorer
                </div>
                <div className="font-normal text-[14px] text-gray-500 mb-[10px]">
                  Transaction completed in{" "}
                  <span className="text-gray-200">3.511 seconds</span>
                </div>
              </div>
            )}
            {/* {setTimeout(() => {
              if (showContentOne) {
                setShowContentOne(false);
              } else {
                setShowContentOne(true);
              }
            }, 3000)} */}
            <Button
              className="bg-primary w-[100%]"
              onClick={handleCloseConfirmModal}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <div className="ml-auto w-[100px]">
        <DrawerC
          anchor="right"
          wallet={
            <div className="flex py-[7px] px-[12px]">
              <Avatar
                sx={{ width: 25, height: 25 }}
                src={""}
                alt="wallet"
                className="mr-2"
              />
              <div className="text-[16px] font-medium text-white">
                {walletAddress}
              </div>
            </div>
          }
          content={
            <div className="px-[20px] py-[16px]">
              <div>
                <div className="text-white text-[36px] font-medium">
                  ${totalTokenAmount}
                </div>
                <div className="flex items-center text-gray-400 text-[15px] font-medium">
                  {totalProfitLoss === "loss" ? (
                    <SouthEastIcon className="text-red-400 text-[16px] mr-[1px]" />
                  ) : (
                    <NorthEastIcon className="text-green-400 text-[16px] mr-[1px]" />
                  )}
                  <div className="">$0.06</div>
                  <div className="ml-1">(0.24%)</div>
                </div>
              </div>
              <div className="text-white text-[15px] font-bold mt-5 mb-3">
                Tokens
              </div>
              {tokens.map(function (e) {
                return (
                  <TokenInfo
                    key={""}
                    tokenName={e.tokenName}
                    tokenAmount={e.tokenAmount}
                    dollarValue={e.dollarValue}
                    tokenSymbol={e.tokenSymbol}
                    percentChange={e.percentChange}
                    profitLoss={e.profitLoss}
                  />
                );
              })}
            </div>
          }
          button={
            <div className="flex justify-end cursor-pointer pt-3">
              <div className="flex py-[7px] px-[12px] border border-gray-600 rounded-full">
                <Avatar
                  sx={{ width: 25, height: 25 }}
                  src={""}
                  alt="wallet"
                  className="mr-2"
                />
                <div className="text-[16px] font-medium">{walletAddress}</div>
              </div>
            </div>
          }
        />
      </div>

      {/* <SideDrawer openPanel={openPanel} btn="Open">
        <div className="w-[30%]">Hello</div>
      </SideDrawer> */}
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
              <div className="w-[60%] mr-[10px]">
                <input
                  type="number"
                  className="text-[36px] bg-darkBlue w-[100%] outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                  value={swapAmount}
                  onChange={(e) => {
                    setSwapAmount(e.target.value);
                  }}
                ></input>
                <div className="text-lightbluetext text-[14px] ">$45.00</div>
              </div>
              <div className="w-[40%]">
                <div
                  className="mb-[15px]  box-border flex justify-center items-center py-[5px] rounded-[20px] text-white bg-lightBlue cursor-pointer"
                  onClick={handleOpen}
                >
                  {tokenData && tokenData.image ? (
                    <Image
                      src={`data:image/png;base64,${tokenData?.image}`}
                      height={25}
                      width={25}
                      alt="Token"
                      className="mr-[8px] rounded-[20px]"
                    ></Image>
                  ) : (
                    <Image
                      src={`data:image/png;base64,${tokenDataFromJson[0].image}`}
                      height={25}
                      width={25}
                      alt="Token"
                      className="mr-[8px] rounded-[20px]"
                    ></Image>
                  )}

                  <text className="text-[18px]">
                    {tokenData.shortName ? tokenData.shortName : "USDT"}
                  </text>
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
            <div className="w-[60%] mr-[10px]">
              <input
                type="number"
                className="text-[36px] bg-darkBlue w-[100%] outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                value={swapSecondAmount}
                onChange={(e) => {
                  setSwapSecondAmount(e.target.value);
                }}
              ></input>
              <div className="text-lightbluetext text-[14px]">$45.00</div>
            </div>
            <div className="w-[40%]">
              <div
                className="mb-[15px] flex justify-center items-center bg-primary py-[5px] px-[8px] rounded-[20px] text-white"
                onClick={handleOpen1}
              >
                {tokenDataNext && tokenDataNext.image ? (
                  <Image
                    src={`data:image/png;base64,${tokenDataNext.image}`}
                    height={25}
                    width={25}
                    alt="Token"
                    className="mr-[8px] rounded-[20px]"
                  ></Image>
                ) : (
                  ""
                )}

                <text className="text-[18px]">
                  {tokenDataNext && tokenDataNext.shortName
                    ? tokenDataNext.shortName
                    : "Select Token"}
                </text>
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
            <Switch1 checked={checked} change={handleChange} />
          </div>

          <div className="bg-darkBlue mb-[10px]">
            <div
              className="flex justify-between items-center py-[8px] cursor-pointer px-[20px]"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <div className="flex items-center">
                <InfoOutlinedIcon className="text-lightbluetext text-[15px] mr-[5px]" />
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
            <Button
              className="bg-primary w-[100%] mb-[20px]"
              onClick={handleOpenConfirmModal}
            >
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

export default Uniswap;
