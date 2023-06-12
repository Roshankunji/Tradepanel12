/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import { tokenInfoData } from "../components/controls/Dropdown/TokenData.js";
import ExperModeModal from "../components/controls/Modal/ExperModeModal";
import { erc20ABI, useAccount, useNetwork, usePublicClient, useWalletClient } from 'wagmi'
import { LensABI, TraderWalletABI } from "../contracts/abis";
import { contractAddress } from '../contracts/address'
import { encodePacked, parseUnits } from "viem";
import { formatEtherValue, formatUnitValue } from "../utils/formatNumber";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import { usePriceImpact } from '../hook/usePriceImpact.js'
import { useApproveToken } from "../hook/useToken";
import { useStore } from "../context/StoreContext";
import { waitForTransaction } from '@wagmi/core';
import { toast } from "react-toastify";

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

const traderTokens = [
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

const userTokens = [
  {
    tokenName: "Tether USD",
    tokenAmount: 100.75,
    dollarValue: 100.75,
    tokenSymbol: "USDT",
    percentChange: 1.05,
    profitLoss: "loss",
  },
  {
    tokenName: "USD Coin",
    tokenAmount: 100.35,
    dollarValue: 100.36,
    tokenSymbol: "USDC",
    percentChange: 1.07,
    profitLoss: "profit",
  },
  {
    tokenName: "Ethereum",
    tokenAmount: 1.003,
    dollarValue: 40.86,
    tokenSymbol: "ETH",
    percentChange: 10.33,
    profitLoss: "loss",
  },
];

const Uniswap = () => {
  const [totalProfitLoss, setTotalProfitLoss] = useState("loss");
  const [totalTraderTokenAmount, setTotalTraderTokenAmount] = useState();
  const [totalUserTokenAmount, setTotalUserTokenAmount] = useState();
  const [walletAddress, setWalletAddress] = useState("0x5175...526A");
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState(0.5);
  const [checked, setChecked] = useState(false);
  const [expand, setExpand] = useState(true);
  const [auto, setAuto] = useState(false);
  const [approve, setApprove] = useState(false);
  const [swapAmount, setSwapAmount] = useState();
  const [swapSecondAmount, setSwapSecondAmount] = useState();
  const [tokenData, setTokenData] = useState(tokenInfoData[0]);
  const [tokenDataNext, setTokenDataNext] = useState(tokenInfoData[1]);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  let [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState("Trader wallet");
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { address: userAddress } = useAccount();
  const [balance1, setBalance1] = useState(0.00);
  const [balance2, setBalance2] = useState(0.00);
  const [usdValue, setUsdValue] = useState(0);
  const [poolFee, setPoolFee] = useState(3000);
  const [ratio, setRatio] = useState(0);
  const priceImpact = usePriceImpact(ratio, swapAmount, swapSecondAmount);
  const { isApproveLoad, setApproveLoad } = useStore();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  const [ tokenApprove ] = useApproveToken(tokenData.address, contractAddress.traderWalletAddress);

  const fetchAmountIn = async (amount) => {
    if(amount === 0 || amount === "" || amount === undefined) {
      return 0;
    } else {
      const token1Decimal = await publicClient.readContract({ abi: erc20ABI, address: tokenDataNext.address, functionName: "decimals" });
      const amountOut = amount * 10 ** token1Decimal;
      const path = encodePacked(["address", "uint24", "address"], [tokenDataNext.address, poolFee, tokenData.address])
      const _amountIn = await publicClient.readContract({ address: contractAddress.lensAddress, abi: LensABI, functionName: "getAmountIn", args: [path, amountOut] })
      const token2Decimal = await publicClient.readContract({ abi: erc20ABI, address: tokenData.address, functionName: "decimals" });
      const amountIn = formatUnitValue(_amountIn[0], token2Decimal);
      return amountIn;
    }
  }

  const fetchAmountOut = async (amount) => {
    if(amount === 0 || amount === "" || amount === undefined) {
      return 0;
    } else {
      const tokenDecimal = await publicClient.readContract({ abi: erc20ABI, address: tokenData.address, functionName: "decimals" });
      const amountIn = amount * 10 ** tokenDecimal;
      const path = encodePacked(["address", "uint24", "address"], [tokenData.address, poolFee, tokenDataNext.address])
      const _amountOut = await publicClient.readContract({ address: contractAddress.lensAddress, abi: LensABI, functionName: "getAmountOut", args: [path, amountIn] })
      const token2Decimal = await publicClient.readContract({ abi: erc20ABI, address: tokenDataNext.address, functionName: "decimals" });
      const amountOut = formatUnitValue(_amountOut[0], token2Decimal);
      return amountOut;
    }
  }

  const handleInputAmount = async (_amount) => {
    const amount = Number(_amount);
    setSwapAmount(amount);
    const debounceTimeout = setTimeout(async () => {
    const amountOut = await fetchAmountOut(amount);
      setSwapSecondAmount(amountOut);
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    }
  } 

  const handleOutputAmount = async (_amount) => {
    const amount = Number(_amount);
    setSwapSecondAmount(amount);
    const debounceTimeout = setTimeout(async () => {
      const amountIn = await fetchAmountIn(amount);
      setSwapAmount(amountIn);
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    }
  } 

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
    setTotalTraderTokenAmount(
      traderTokens
        .map((item) => item.dollarValue)
        .reduce((prev, next) => prev + next)
        .toFixed(2)
    );
    setTotalUserTokenAmount(
      userTokens
        .map((item) => item.dollarValue)
        .reduce((prev, next) => prev + next)
        .toFixed(2)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openConfirmModal]);

  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
    setCounter(0);
  };

  const toggleHandler = (type) => {
    setToggle(type);
  };

  const fetchBalances = async (shortName, tokenAddress, setBalance) => {
    if(userAddress === undefined) { 
      setBalance(0) 
    } else {
      if(shortName === "ETH") {
        const _amount = await publicClient.getBalance({ address: userAddress });
        const amount = formatEtherValue(_amount);
        setBalance(amount);
      } else {
        const _amount = await publicClient.readContract({ 
          address: tokenAddress,
          abi: erc20ABI, 
          functionName: 'balanceOf', 
          args: [userAddress] 
        });
        const amount = formatEtherValue(_amount);
        setBalance(amount)
    }
   }
  }

  useEffect(() => {
    fetchBalances(tokenData.shortName, tokenData.address, setBalance1);
    fetchBalances(tokenDataNext.shortName, tokenDataNext.address, setBalance2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenData, tokenDataNext, isConnected])

  const handleTokenData = async() => {
    const amountOut = await fetchAmountOut(swapAmount);
    setSwapSecondAmount(amountOut);
    const _ratio = await fetchAmountOut(1);
    setRatio(_ratio);
  }

  const handleTokenNextData = async () => {
    const amountIn = await fetchAmountIn(swapSecondAmount);
    setSwapAmount(amountIn);
    const _ratio = await fetchAmountOut(1);
    setRatio(_ratio);
  }

  useEffect(() => {
    handleTokenData();
  }, [tokenData])

  useEffect(() => {
    handleTokenNextData();
  }, [tokenDataNext])

  const handleTokenApprove = () => {
    setApproveLoad(true);
    tokenApprove?.();
  }

  const handleSwap = async () => {
    if(walletClient === null || walletClient === undefined) return;
    try {
      const protocolId = 2;
      const replicate = true;
      const tokenADecimal = await publicClient.readContract({ abi: erc20ABI, address: tokenData.address, functionName: "decimals" });
      const tokenBDecimal = await publicClient.readContract({ abi: erc20ABI, address: tokenDataNext.address, functionName: "decimals" });
      debugger;
      const amountIn = parseUnits(`${swapAmount}`, tokenADecimal);
      const amountOut = parseUnits(`${swapSecondAmount}`, tokenBDecimal);
      const fee = percentage * 1000;
      const path = encodePacked(["address", "uint24", "address"], [tokenData.address, fee, tokenDataNext.address])
      const operationId = 1; // Sell
      const tradeData = encodePacked(["bytes", "uint256", "uint256"], [path, amountIn, amountOut]);
      const tradeOperation = { operationId, data: tradeData };
      const { request } = await publicClient.simulateContract({ 
        address: contractAddress.traderWalletAddress, 
        abi: TraderWalletABI, 
        functionName: 'executeOnProtocol', 
        args: [protocolId, tradeOperation, replicate] 
      });
      const hash = await walletClient.writeContract(request);
      const tx = await waitForTransaction({ hash });
      if(tx.status === 'reverted') {
        toast.dismiss();
        toast.error('Swapping Failed!');
      }
    } catch (err) {
      console.log(err);
    }
  }

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
            token={tokenData}
            setToken={setTokenData}
            tokenNext={tokenDataNext}
            setTokenNext={setTokenDataNext}
            first={first}
            second={second}
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
            <div className="flex items-center bg-gray-800 px-2 rounded-full">
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
              <div className="w-full mb-3">
                <div className="flex">
                  <div
                    onClick={() => toggleHandler("Trader wallet")}
                    className="w-[50%]"
                  >
                    <div
                      className={
                        toggle === "Trader wallet"
                          ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                          : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                      }
                    >
                      Trader wallet
                    </div>
                  </div>
                  <div
                    onClick={() => toggleHandler("User wallet")}
                    className="w-[50%]"
                  >
                    <div
                      className={
                        toggle === "User wallet"
                          ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                          : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                      }
                    >
                      User wallet
                    </div>
                  </div>
                </div>
              </div>
              {toggle === "Trader wallet" && (
                <div>
                  <div>
                    <div className="text-white text-[36px] font-medium">
                      ${totalTraderTokenAmount}
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
                  {traderTokens.map(function (e) {
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
              )}
              {toggle === "User wallet" && (
                <div>
                  <div>
                    <div className="text-white text-[36px] font-medium">
                      ${totalUserTokenAmount}
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
                  {userTokens.map(function (e) {
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
              )}
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
                  value={Number(swapAmount ?? 0) }
                  placeholder="0"
                  onChange={(e) => handleInputAmount(e.target.value)}
                />
                <div className="text-lightbluetext text-[14px] ">${usdValue}</div>
              </div>
              <div className="w-[40%]">
                <div
                  className="mb-[15px]  box-border flex justify-center items-center py-[5px] rounded-[20px] text-white bg-lightBlue cursor-pointer"
                  onClick={handleOpen}
                >
                  {tokenData && tokenData.image ? (
                    <Image
                      src={tokenData?.image}
                      alt="Token"
                      className="mr-[8px] rounded-[20px] w-[25px] h-[25px]"
                    ></Image>
                  ) : (
                    <Jazzicon diameter={25} paperStyles={{ marginRight: '20px' }} seed={jsNumberForAddress(tokenData.address)} />
                  )}

                  <p className="text-[18px]">
                    {tokenData.shortName ? tokenData.shortName : tokenInfoData[0].shortName}
                  </p>
                  <KeyboardArrowDownIcon />
                </div>
                <div className="text-center">
                  Balance : { balance1 } <span style={{ cursor: 'pointer' }} onClick={() => handleInputAmount(balance1) }>Max</span>
                </div>
              </div>
            </div>
            {/* <div className="rounded-[5px]  w-[40px] flex justify-center items-center py-[5px] absolute top-[80%] left-[50%] border-darkBlueBlack1 border-[4px]  z-2 bg-backgroundColor">
              <SouthIcon className="bg-backgroundColor"></SouthIcon>
            </div> */}
          </div>

          <div className="flex justify-between py-[20px] mb-[10px] mx-[20px] px-[20px] bg-darkBlue rounded-[10px] ">
            <div className="w-[60%] mr-[10px]">
              <input
                type="number"
                className="text-[36px] bg-darkBlue w-[100%] outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                value={Number(swapSecondAmount ?? 0)}
                placeholder="0"
                onChange={(e) => handleOutputAmount(e.target.value)}
              />
              <div className="text-lightbluetext text-[14px]">${usdValue}</div>
            </div>
            <div className="w-[40%]">
              <div
                className="mb-[15px] flex justify-center items-center bg-primary py-[5px] px-[8px] rounded-[20px] text-white"
                onClick={handleOpen1}
              >
                {tokenDataNext && tokenDataNext.image ? (
                  <Image
                    src={tokenDataNext.image}
                    alt="Token"
                    className="mr-[8px] rounded-[20px] w-[25px] h-[25px]"
                  ></Image>
                ) : (
                  <Jazzicon diameter={25} paperStyles={{ marginRight: '20px' }} seed={jsNumberForAddress(tokenDataNext.address)} />
                )}

                <p className="text-[18px]">
                  {tokenDataNext && tokenDataNext.shortName
                    ? tokenDataNext.shortName
                    : "Select Token"}
                </p>
                <KeyboardArrowDownIcon />
              </div>
              <div className="text-center">
                Balance : { balance2 } <span style={{ cursor: 'pointer' }} onClick={() => handleOutputAmount(balance2)}>Max</span>
              </div>
            </div>
          </div>

          <div className="flex-col mb-[10px] px-[20px]">
            <div className="flex items-center gap-3">
              <div className="flex-col items-start w-[60%]">
                <div className="flex mb-[10px]">
                  <p className="mr-[10px]">Slippage Tolerance</p>
                  <HelpOutlineIcon />
                </div>
                <div className="flex gap-3">
                  {auto === true ? (
                    <Button
                      className="bg-darkBlueBlack py-[5px] h-[50px] px-[10px] rounded-[10px] border-[1px] border-borderColor1 "
                      onClick={() => {
                        setAuto(!auto);
                      }}
                    >
                      <p className="text-[16px]">Auto</p>
                    </Button>
                  ) : (
                    <Button
                      className="bg-primary py-[5px] px-[10px] h-[50px] rounded-[10px] border-[1px] border-borderColor1 border-primary"
                      onClick={() => {
                        setAuto(!auto);
                      }}
                    >
                      <p className="text-[16px]">Auto</p>
                    </Button>
                  )}

                  <div className="username flex justify-between items-center w-[100%] h-[50px] outline-none rounded-[18px] font-sora bg-darkBlueBlack text-white py-[3px] px-[10px] border-[1px] border-borderColor1  rounded-[10px]">
                    {/* <WarningIcon className="text-[18px] text-yellow-600 ml-[5px]" /> */}
                    <input
                      type="number"
                      className="w-[100%] outline-none rounded-[18px] font-sora bg-darkBlueBlack text-white py-[3px] px-[5px] text-right"
                      placeholder="0.10"
                      controls={false}
                      value={percentage}
                      onChange={(e) => {
                        setPercentage(e.target.value);
                      }}
                    />
                    <p className="font-semibold mr-[5px]">%</p>
                  </div>
                </div>
              </div>
              <div className="flex-col items-start w-[40%]">
                <div className="flex mb-[10px]">
                  <p className="mr-[10px]">Pool Fee</p>
                </div>
                <select
                  id="demo-simple-select"
                  value={poolFee}
                  label="Age"
                  className="w-[100%] h-[50px] outline-none rounded-[18px] font-sora bg-darkBlueBlack text-white py-[3px] px-[5px] text-right"
                  onChange={(e) => setPoolFee(e.target.value)}
                >
                  <option value={100}>0.01 %</option>
                  <option value={300}>0.05 %</option>
                  <option value={3000} defaultValue={3000}>0.3 %</option>
                  <option value={10000}>1 %</option>
                </select>
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
              <p className="mr-[10px] text-[15px]">Auto Router Api</p>
              <HelpOutlineIcon className="text-[18px]" />
            </div>
            <Switch1 checked={checked} change={handleChange} />
          </div>

          <div className="flex justify-between items-center px-[20px] mb-[10px]">
            <div className="flex items-center">
              <p className="mr-[10px] text-[15px]">Expert Mode</p>
              <HelpOutlineIcon className="text-[18px]" />
            </div>
            <ExperModeModal />
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
                  <p className="text-[14px]">1 {tokenData.shortName} = {ratio}({tokenDataNext.shortName}) </p>
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
                      Expected Output
                    </div>
                    <div>{swapSecondAmount} {tokenDataNext.shortName}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lightbluetext text-[14px]">
                      Price Impact
                    </div>
                    <div className="text-lightbluetext text-[14px]">
                    {priceImpact}
                    </div>
                  </div>
                </div>
                <hr className="border-borderColor1"></hr>
                <div className="my-[10px]">
                  <div className="flex justify-between mb-[10px]">
                    <div className="text-lightbluetext text-[14px]">
                      Minimum recieved after slipage ({percentage}%)
                    </div>
                    <div>{(swapSecondAmount - (percentage / 100)) > 0 ? (swapSecondAmount - (percentage / 100)).toFixed(3) : 0} {tokenDataNext.shortName}</div>
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
          {isApproveLoad === true ? (
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
                  <p>Approve in your wallet</p>
                </div>
              </Button>
            </div>
          ) : (
            <div className="mx-[20px]">
              <Button
                className="bg-primary w-[100%] mb-[20px]"
                disabled={tokenData.shortName === "ETH"}
                onClick={
                  handleTokenApprove
                }
              >
                <div className="flex items-center justify-center">
                  <InfoOutlinedIcon className="text-lightblutext text-[25px] mr-[10px]" />
                  <p>Approve use of {tokenData.shortName}</p>
                </div>
              </Button>
            </div>
          )}

          <div className="mx-[20px]">
            <Button className="bg-primary w-[100%] mb-[20px]" onClick={handleSwap}>Swap</Button>
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
