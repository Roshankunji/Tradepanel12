import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../../atoms/Button/Button";
import CheckBox from "../../../components/atoms/Checkbox/Checkbox";

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
  // p: 1,
};

const ClosePositionModal = (props) => {
  const [open, setOpen] = React.useState(props.open);
  const [click, setClick] = useState(false);
  const handleOpen = () => setOpen(true);
  const [toggle, setToggle] = useState("Market");
  const [marketCloseAmount, setMarketCloseAmount] = useState(null);
  const [triggerCloseAmount, setTriggerCloseAmount] = useState(null);
  const [triggerPrice, setTriggerPrice] = useState(null);
  const [maxAmount, setMaxAmount] = useState(0);
  const [hideMarketMaxButton, setHideMarketMaxButton] = useState(false);
  const [hideTriggerMaxButton, setHideTriggerMaxButton] = useState(false);
  const [keepTriggerLeverage, setKeepTriggerLeverage] = useState(false);
  const [keepMarketLeverage, setKeepMarketLeverage] = useState(false);
  const [allowOnePercentSlippage, setAllowOnePercentSlippage] = useState(false);

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const toggleHandler = (type) => {
    setToggle(type);
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  useEffect(() => {
    setHideMarketMaxButton(false);
    setHideTriggerMaxButton(false);
    setMarketCloseAmount(null);
    setTriggerCloseAmount(null);
    setTriggerPrice(null);
  }, [toggle]);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="backdrop-blur-sm px-[71px] "
        >
          <Box sx={style}>
            <div className="flex justify-between px-[15px] py-[10px]">
              <div className="text-[20px]">Close Long BTC</div>
              <div
                className="text-end mb-[2px] cursor-pointer"
                onClick={handleClose}
              >
                <CancelIcon className="text-[20px] text-lightGray" />
              </div>
            </div>
            <hr className="border-[1px] border-lightBlue"></hr>
            <div className="h-[550px] overflow-y-scroll scroll">
              <div className="w-full p-[15px] mb-0">
                <div className="flex">
                  <div
                    onClick={() => toggleHandler("Market")}
                    className="w-[50%]"
                  >
                    <div
                      className={
                        toggle === "Market"
                          ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                          : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                      }
                    >
                      Market
                    </div>
                  </div>
                  <div
                    onClick={() => toggleHandler("Trigger")}
                    className="w-[50%]"
                  >
                    <div
                      className={
                        toggle === "Trigger"
                          ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                          : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                      }
                    >
                      Trigger
                    </div>
                  </div>
                </div>
              </div>

              {toggle === "Market" && (
                <div>
                  <div className="bg-gray-800 py-[15px] px-[13px] m-[15px] rounded-[5px]">
                    <div className="flex justify-between mb-1">
                      <text className="text-[14px] text-gray-300">Close</text>
                      <text className="text-[14px] text-gray-300">
                        Max: 28,031.23
                      </text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[22px] bg-gray-800 w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px] font-sora bg-backgroundColor text-white"
                        value={marketCloseAmount}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketCloseAmount(e.target.value);
                        }}
                      ></input>
                      <div className="flex">
                        {hideMarketMaxButton === false ? (
                          <button
                            className="bg-primary px-[8px] py-[2px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setMarketCloseAmount(28031.23);
                              setHideMarketMaxButton(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}
                        <div className="text-[18px]">USD</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center px-[15px] py-[15px]">
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">
                        Keep leverage at 2.00x
                      </div>
                      <CheckBox
                        className="w-[5px] bg-gray-300"
                        show={(e) => {
                          setKeepMarketLeverage(e);
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">
                        Allow upto 1% of slippage
                      </div>
                      <CheckBox
                        className="w-[5px] bg-gray-300"
                        show={(e) => {
                          setAllowOnePercentSlippage(e);
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Allowed Slippage</div>
                      <div>0.30%</div>
                    </div>
                    <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Mark Price</div>
                      <div>$28,047.83</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Entry Price</div>
                      <div>$28,048.15</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Liq. Price</div>
                      <div>$21,127.15</div>
                    </div>
                    <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Size</div>
                      <div>$19.94</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Collateral (BTC)</div>
                      <div>$9.9243</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Leverage</div>
                      <div>2.00x</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">PnL</div>
                      <div>-$0.00 (0.00%)</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Fees</div>
                      <div>$0.37</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Receive</div>
                      <div>0.0000 USDC ($0.00)</div>
                    </div>
                    <Button
                      className="bg-primary w-[100%] rounded-[3px] mt-[15px]"
                      disabled={
                        marketCloseAmount === null ||
                        marketCloseAmount === 0 ||
                        marketCloseAmount === undefined
                          ? true
                          : false
                      }
                    >
                      {marketCloseAmount === null ||
                      marketCloseAmount === 0 ||
                      marketCloseAmount === undefined
                        ? "Enter an amount"
                        : "Create order"}
                    </Button>
                  </div>
                </div>
              )}

              {toggle === "Trigger" && (
                <div>
                  <div className="bg-gray-800 py-[15px] px-[13px] mb-[15px] mx-[15px] rounded-[5px]">
                    <div className="flex justify-between mb-1">
                      <text className="text-[14px] text-gray-300">Close</text>
                      <text className="text-[14px] text-gray-300">
                        Max: 28,031.23
                      </text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[22px] bg-gray-800 w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px] font-sora bg-backgroundColor text-white"
                        value={triggerCloseAmount}
                        placeholder="0"
                        onChange={(e) => {
                          setTriggerCloseAmount(e.target.value);
                        }}
                      ></input>
                      <div className="flex">
                        {hideTriggerMaxButton === false ? (
                          <button
                            className="bg-primary px-[8px] py-[2px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setTriggerCloseAmount(28031.23);
                              setHideTriggerMaxButton(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}
                        <div className="text-[18px]">USD</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 py-[15px] px-[13px] mx-[15px] rounded-[5px]">
                    <div className="flex justify-between mb-1">
                      <text className="text-[14px] text-gray-300">Price</text>
                      <text className="text-[14px] text-gray-300">
                        Mark: 28,031.23
                      </text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[22px] bg-gray-800 w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px] font-sora bg-backgroundColor text-white"
                        value={triggerPrice}
                        placeholder="0"
                        onChange={(e) => {
                          setTriggerPrice(e.target.value);
                        }}
                      ></input>

                      <div className="text-[18px]">USD</div>
                    </div>
                  </div>

                  <div className="text-center px-[15px] py-[15px]">
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">
                        Keep leverage at 2.00x
                      </div>
                      <CheckBox
                        className="w-[5px] bg-gray-300"
                        show={(e) => {
                          setKeepTriggerLeverage(e);
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Trigger Price</div>
                      <div>-</div>
                    </div>
                    <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Mark Price</div>
                      <div>$28,047.83</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Entry Price</div>
                      <div>$28,048.15</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Liq. Price</div>
                      <div>$21,127.15</div>
                    </div>
                    <hr className="border-[1px] border-lightBlue my-[10px]"></hr>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Size</div>
                      <div>$19.94</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Collateral (BTC)</div>
                      <div>$9.9243</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Leverage</div>
                      <div>2.00x</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">PnL</div>
                      <div>-$0.00 (0.00%)</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Fees</div>
                      <div>$0.37</div>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <div className="text-gray-300">Receive</div>
                      <div>0.0000 USDC ($0.00)</div>
                    </div>
                    <Button
                      className="bg-primary w-[100%] rounded-[3px] mt-[15px]"
                      disabled={
                        triggerCloseAmount === null ||
                        triggerCloseAmount === 0 ||
                        triggerCloseAmount === undefined ||
                        triggerPrice === null ||
                        triggerPrice === 0 ||
                        triggerPrice === undefined
                          ? true
                          : false
                      }
                    >
                      {triggerCloseAmount === null ||
                      triggerCloseAmount === 0 ||
                      triggerCloseAmount === undefined
                        ? "Enter an amount"
                        : (triggerCloseAmount !== null ||
                            triggerCloseAmount !== 0 ||
                            triggerCloseAmount !== undefined) &&
                          (triggerPrice === null ||
                            triggerPrice === 0 ||
                            triggerPrice === undefined)
                        ? "Enter price"
                        : "Create order"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ClosePositionModal;
