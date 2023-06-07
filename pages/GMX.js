import React, { useState, useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckBox from "../components/atoms/Checkbox/Checkbox";
import Button from "../components/atoms/Button/Button";
import DrawerC from "../components/controls/SideDrawer/SideDrawer";
import Search from "../components/controls/Input/Search";
import tokenData from "../components/controls/Dropdown/TokenData.json";
import Image from "next/image";
import LongBtcModal from "../components/controls/Modal/LongBtcModal";
import ClosePositionModal from "../components/controls/Modal/ClosePositionModal";
import Table from "../components/Molecules/Table/index";
import TradeHistory from "../components/Molecules/Gmx/TradeHistory";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Error from "../components/Molecules/ErrorMessge/Error";
import Dropdown from "../components/controls/Dropdown/Dropdown";

const Gmx = () => {
  const [toggle, setToggle] = useState("Long");
  const [marketLimitTab, setMarketLimitTab] = useState("Market");
  const [marketPay, setMarketPay] = useState(null);
  const [marketLong, setMarketLong] = useState(null);
  const [limitPay, setLimitPay] = useState(null);
  const [limitLong, setLimitLong] = useState(null);
  const [marketShort, setMarketShort] = useState(null);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState([]);
  const [tokenData1, setTokenData1] = useState([]);
  const [tokenData2, setTokenData2] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [leaverage, setLeaverage] = useState(1.1);
  const [leaverage1, setLeaverage1] = useState(1.1);
  const [leverageError, setLeverageError] = useState(false);
  const [leverageMaxError, setLeverageMaxError] = useState(false);
  const [leverageError1, setLeverageError1] = useState(false);
  const [leverageMaxError1, setLeverageMaxError1] = useState(false);
  // const [numberOfPositions, setNumberOfPositions] = useState(2);
  const [limit, setLimit] = useState(10);
  const [tradeDataTab, setTradeDataTab] = useState("Positions");
  const [tradeDataTab1, setTradeDataTab1] = useState("Positions");
  const [showClosePositionModal, setShowClosePositionModal] = useState(false);
  const [openConfirmCancelModal, setOpenConfirmCancelModal] = useState(false);
  const [hideMaxButton, setHideMaxButton] = useState(false);
  const [hideMaxButton1, setHideMaxButton1] = useState(false);
  const [hideMaxButton2, setHideMaxButton2] = useState(false);
  const [hideMaxButton3, setHideMaxButton3] = useState(false);
  const [disable, setDisable] = useState(false);

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

  const search = (e) => {
    setSearchData(e);
  };

  useEffect(() => {
    setData(tokenData);
  }, []);

  useEffect(() => {
    if (toggle === "Short" || toggle === "Long") {
      setMarketPay(null);
      setMarketLong(null);
      setLimitPay(null);
      setLimitLong(null);
      setHideMaxButton(false);
      setHideMaxButton1(false);
      setHideMaxButton2(false);
      setHideMaxButton3(false);
      setLeaverage(null);
      setLeverageError(false);
      setLeaverage1(null);
      setLeverageError1(false);
      setLeverageMaxError(false);
      setLeaverage(1.1);
      setLeaverage1(1.1);
      setLeverageMaxError1(false);

      if (marketLimitTab === "Market") {
        setLeaverage1(1.1);
        setLeverageError1(false);
        setLimitPay(null);
        setLimitLong(null);
        setHideMaxButton2(false);
        setHideMaxButton3(false);
        setLeverageMaxError1(false);
      } else {
        setMarketPay(null);
        setMarketLong(null);
        setHideMaxButton(false);
        setHideMaxButton1(false);
        setLeaverage(1.1);
        setLeverageError(false);
        setLeverageMaxError(false);
      }
    }
  }, [toggle, marketLimitTab]);

  useEffect(() => {
    const dataOfToken = data.filter((e) => {
      const uppercase = e?.name?.toUpperCase();
      const lowercase = e?.name?.toLowerCase();
      const uppercase1 = e?.shortName?.toUpperCase();
      const lowercase1 = e?.shortName?.toLowerCase();

      return (
        e.name == searchData ||
        e.name.startsWith(searchData) ||
        e.shortName == searchData ||
        e.shortName.startsWith(searchData) ||
        uppercase.startsWith(searchData.toUpperCase()) ||
        lowercase.startsWith(searchData.toLowerCase()) ||
        uppercase1.startsWith(searchData.toUpperCase()) ||
        lowercase1.startsWith(searchData.toLowerCase())
      );
    });
    setData(dataOfToken);
    if (searchData === "") {
      setData(tokenData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  const handleCloseConfirmCancelModal = () => {
    setOpenConfirmCancelModal(false);
  };

  const toggleHandler = (type) => {
    setToggle(type);
  };
  const toggleTradeDataTab = (type) => {
    setTradeDataTab(type);
  };
  const toggleTradeDataTab1 = (type) => {
    setTradeDataTab1(type);
  };

  let transactionData = [
    {
      coin: "BTC",
      longShortRange: "1.10x",
      longShort: "Long",
      netValue: "$9.92",
      profitLoss: "-$0.02",
      profitLossPercent: "-0.21%",
      size: "$10.94",
      collateral: "$9.93",
      entryPrice: "$28061.13",
      marketPrice: "$28062.3",
      liqPrice: "$15426.5",
    },
    {
      coin: "BTC",
      longShortRange: "2.09x",
      longShort: "Short",
      netValue: "$9.96",
      profitLoss: "-$0.03",
      profitLossPercent: "-0.37%",
      size: "$20.95",
      collateral: "$9.97",
      entryPrice: "$28068.83",
      marketPrice: "$28062.3",
      liqPrice: "$34709.83",
    },
  ];

  let ordersData = [
    {
      type: "Trigger",
      order: "Decrease BTC Long by $5.00",
      price: ">30,000.00",
      marketPrice: "28,048.43",
    },
    {
      type: "Market",
      order: "Increase BTC Short by $23.45",
      price: ">99,999.00",
      marketPrice: "77,396.61",
    },
    {
      type: "Trigger",
      order: "Increase BTC Short by $69.01",
      price: ">52,428.00",
      marketPrice: "32,162.78",
    },
  ];

  let tradeData = [
    {
      date: "06 Apr 2023, 12:01 PM",
      details: "Update order: Decrease BTC Long -5.00 USD, Price: > 28,051.00",
    },
    {
      date: "06 Apr 2023, 12:30 PM",
      details: "Create order: Decrease BTC Short -5.00 USD, Price: > 31,987.00",
    },
    {
      date: "06 Apr 2023, 01:43 PM",
      details: "Request Decrease BTC Long +14.00 USD, Price: > 89,444.00",
    },
    {
      date: "06 Apr 2023, 02:55 PM",
      details: "Update order: Decrease BTC Short -5.00 USD, Price: > 28,051.00",
    },
    {
      date: "06 Apr 2023, 01:43 PM",
      details: "Request Decrease BTC Long +14.00 USD, Price: > 89,444.00",
    },
    {
      date: "06 Apr 2023, 12:30 PM",
      details: "Create order: Decrease BTC Short -5.00 USD, Price: > 31,987.00",
    },
  ];

  const names = ["BTC/USD", "ETH/USD", "LINK/USD", "UNI/USD"];

  let positionColumns = [
    {
      Header: "Position",
      accessor: (d) => (
        <div className="flex flex-col">
          <div className="text-[14px]">{d.coin}</div>
          <div className="flex">
            <div className="text-[14px]">{d.longShortRange} </div>
            <span
              className={
                d.longShort === "Long"
                  ? "text-green-500 text-[14px]"
                  : "text-red-500 text-[14px]"
              }
            >
              &nbsp;{d.longShort}
            </span>
          </div>
        </div>
      ),
    },
    {
      Header: "Net Value",
      accessor: (d) => (
        <div className="flex flex-col">
          <div className="text-[14px]">{d.netValue}</div>
          <div className="flex">
            <div
              className={
                d.profitLoss.startsWith("-")
                  ? "text-red-500 text-[13px]"
                  : "text-green-500 text-[13px]"
              }
            >
              {d.profitLoss}{" "}
            </div>
            <span
              className={
                d.profitLossPercent.startsWith("-")
                  ? "text-red-500 text-[13px]"
                  : "text-green-500 text-[13px]"
              }
            >
              &nbsp;{"("}
              {d.profitLossPercent}
              {")"}
            </span>
          </div>
        </div>
      ),
    },
    {
      Header: "Size",
      accessor: "size",
    },
    {
      Header: "Collateral",
      accessor: "collateral",
    },
    {
      Header: "Entry Price",
      accessor: "entryPrice",
    },
    {
      Header: "Mark Price",
      accessor: "marketPrice",
    },
    {
      Header: "Liq. Price",
      accessor: "liqPrice",
    },
    {
      Header: "",
      accessor: "close",
      Cell: (e) => {
        return (
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setShowClosePositionModal(true)}
          >
            Close
          </div>
        );
      },
    },
  ];

  let orderColumn = [
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Order",
      accessor: "order",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Market Price",
      accessor: "marketPrice",
    },
    {
      Header: "",
      accessor: "close",
      Cell: (e) => {
        return (
          <div
            className="cursor-pointer hover:text-white"
            onClick={() => setOpenConfirmCancelModal(true)}
          >
            Cancel
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        open={openConfirmCancelModal}
        onClose={handleCloseConfirmCancelModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm px-[71px]"
        keepMounted={true}
      >
        <Box sx={style}>
          <div>
            <div className="text-[18px] text-center">Confirm Cancel?</div>
            <div className="text-[14px] text-center mb-[12px] font-thin text-lightGray">
              Are you sure you want to proceed with this action?
            </div>
            <div className="flex justify-center">
              <Button
                className="mx-5 text-[18px] py-[10px] px-[53px] w-[134px] bg-primary"
                onClick={() => {
                  handleCloseConfirmCancelModal();
                }}
              >
                Yes
              </Button>
              <Button
                className="mx-5 text-[18px] py-[10px] px-[53px] w-[134px] bg-red-500"
                onClick={() => {
                  handleCloseConfirmCancelModal();
                }}
              >
                No
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      {
        <ClosePositionModal
          open={showClosePositionModal}
          close={(e) => {
            setShowClosePositionModal(e);
          }}
        />
      }
      <div className="flex justify-end ">
        <div className="w-[100%] flex  my-[10px] ">
          <div className="w-[68%] mr-9">
            <div className="my-[10px] font-semibold flex items-center">
              <Dropdown names={names} width={160} background="#16182e" />
            </div>
            <div className="w-full mb-3">
              <div className="my-[5px] font-semibold text-[#cc9900]">
                Trader Wallet
              </div>
              <div className="flex">
                <div
                  onClick={() => toggleTradeDataTab("Positions")}
                  className=""
                >
                  <div
                    className={
                      tradeDataTab === "Positions"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Positions{" "}
                    {transactionData && transactionData.length > 0
                      ? `(${transactionData.length})`
                      : null}
                  </div>
                </div>
                <div onClick={() => toggleTradeDataTab("Orders")} className="">
                  <div
                    className={
                      tradeDataTab === "Orders"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Orders{" "}
                    {ordersData && ordersData.length > 0
                      ? `(${ordersData.length})`
                      : null}
                  </div>
                </div>
                <div onClick={() => toggleTradeDataTab("Trades")} className="">
                  <div
                    className={
                      tradeDataTab === "Trades"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Trades
                  </div>
                </div>
              </div>
              {tradeDataTab === "Positions" && (
                <Table
                  data={transactionData ? transactionData : []}
                  columns={positionColumns}
                  defaultPageSize={limit}
                  hidePagination={true}
                />
              )}
              {tradeDataTab === "Orders" && (
                <Table
                  data={ordersData ? ordersData : []}
                  columns={orderColumn}
                  defaultPageSize={limit}
                  hidePagination={true}
                />
              )}
              {tradeDataTab === "Trades" &&
                tradeData.map(function (e) {
                  return (
                    <TradeHistory key={""} date={e.date} details={e.details} />
                  );
                })}
            </div>

            <div>
              <div className="my-[5px] font-semibold text-[#cc9900]">
                User Wallet
              </div>
              <div className="flex">
                <div
                  onClick={() => toggleTradeDataTab1("Positions")}
                  className=""
                >
                  <div
                    className={
                      tradeDataTab1 === "Positions"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Positions{" "}
                    {transactionData && transactionData.length > 0
                      ? `(${transactionData.length})`
                      : null}
                  </div>
                </div>
                <div onClick={() => toggleTradeDataTab1("Orders")} className="">
                  <div
                    className={
                      tradeDataTab1 === "Orders"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Orders{" "}
                    {ordersData && ordersData.length > 0
                      ? `(${ordersData.length})`
                      : null}
                  </div>
                </div>
                <div onClick={() => toggleTradeDataTab1("Trades")} className="">
                  <div
                    className={
                      tradeDataTab1 === "Trades"
                        ? "text-center h-full p-2 text-white text-[16px] font-medium cursor-pointer"
                        : "text-center p-2 text-gray-400 font-medium cursor-pointer hover:text-gray-300"
                    }
                  >
                    Trades
                  </div>
                </div>
              </div>
              {tradeDataTab1 === "Positions" && (
                <Table
                  data={transactionData ? transactionData : []}
                  columns={positionColumns}
                  defaultPageSize={limit}
                  hidePagination={true}
                />
              )}
              {tradeDataTab1 === "Orders" && (
                <Table
                  data={ordersData ? ordersData : []}
                  columns={orderColumn}
                  defaultPageSize={limit}
                  hidePagination={true}
                />
              )}
              {tradeDataTab1 === "Trades" &&
                tradeData.map(function (e) {
                  return (
                    <TradeHistory key={""} date={e.date} details={e.details} />
                  );
                })}
            </div>
          </div>

          <div className="w-[32%] flex-col">
            <div className="bg-[#16182e] px-[10px] py-[10px] mb-[10px]">
              <div className="flex">
                <div onClick={() => toggleHandler("Long")} className="w-[50%]">
                  <div
                    className={
                      toggle === "Long"
                        ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer rounded-l-[2px]"
                        : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer rounded-l-[2px]"
                    }
                  >
                    <TrendingUpIcon className="mr-[5px]" />
                    Long
                  </div>
                </div>
                <div onClick={() => toggleHandler("Short")} className="w-[50%]">
                  <div
                    className={
                      toggle === "Short"
                        ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer rounded-r-[2px]"
                        : "text-center bg-gray-800 p-2 text-gray-400 border-1 font-medium cursor-pointer rounded-r-[2px]"
                    }
                  >
                    <TrendingDownIcon className="mr-[5px]" /> Short
                  </div>
                </div>
              </div>

              <div className="flex my-[10px]">
                <div
                  className={
                    marketLimitTab === "Market"
                      ? "mr-5 cursor-pointer text-white"
                      : "mr-5 cursor-pointer text-gray-400"
                  }
                  onClick={() => {
                    setMarketLimitTab("Market");
                  }}
                >
                  Market
                </div>
                <div
                  className={
                    marketLimitTab === "Limit"
                      ? "cursor-pointer text-white"
                      : "cursor-pointer text-gray-400"
                  }
                  onClick={() => {
                    setMarketLimitTab("Limit");
                  }}
                >
                  Limit
                </div>
              </div>
              {marketLimitTab === "Market" ? (
                <div>
                  <div className="bg-backgroundColor py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <p>Pay: 10.00 USDC</p>
                      <p>Balance: 13.8788</p>
                    </div>
                    <div className="flex items-center justify-between w-[100%] ">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-backgroundColor w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketPay ? marketPay : ""}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketPay(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-end w-[50%]  items-center">
                        {hideMaxButton === false ? (
                          <button
                            className="bg-primary py-[4px] px-[9px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setMarketPay(13.8788);
                              setHideMaxButton(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}

                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData1(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div
                              className="box-border flex justify-center w-[80%] items-center py-[5px] rounded-[20px] text-white cursor-pointer"
                              // onClick={handleOpen}
                            >
                              <p className="text-[18px]">
                                {tokenData1 && tokenData1.shortName
                                  ? tokenData1.shortName
                                  : "USDT"}
                              </p>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-backgroundColor py-[10px] px-[10px] rounded-[2px]">
                    <div className="my-[10px] flex justify-between">
                      <p>
                        {toggle === "Long" ? "Long" : "Short"}: 10.00 USDC
                      </p>
                      <p>Leaverage: 1.10x</p>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-backgroundColor w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketLong ? marketLong : ""}
                        placeholder="0"
                        onChange={(e) => {
                          if (toggle === "Long") {
                            setMarketLong(e.target.value);
                          } else {
                            setMarketShort(e.target.value);
                          }
                        }}
                      ></input>
                      <div className="flex justify-end w-[50%] items-center ">
                        {hideMaxButton1 === false ? (
                          <button
                            className="bg-primary py-[4px] px-[9px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setMarketLong(1.1);
                              setHideMaxButton1(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}

                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData2(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div className="box-border flex justify-center w-[80%] items-center py-[5px] rounded-[20px] text-white cursor-pointer">
                              <p className="text-[18px]">
                                {tokenData2 && tokenData2.shortName
                                  ? tokenData2.shortName
                                  : "USDT"}
                              </p>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-[10px] flex justify-between items-center">
                    <div>Leverage Slider</div>
                  </div>
                  {
                    <input
                      type="number"
                      className="w-[100%] outline-none rounded-[3px] font-sora bg-backgroundColor text-white py-[5px] px-[10px] border-[1px] border-lightBlue"
                      placeholder="1.1"
                      controls={false}
                      value={leaverage}
                      onChange={(e) => {
                        if (e.target.value >= 1.1 && e.target.value <= 50) {
                          setLeverageError(false);
                          if (e.target.value.match(/^(\d*\.{0,1}\d{0,1}$)/)) {
                            setLeaverage(e.target.value);
                          } else {
                          }
                        } else if (e.target.value > 50) {
                          setLeverageMaxError(true);
                        } else {
                          setLeaverage(null);
                          setLeverageError(true);
                        }
                      }}
                    ></input>
                  }
                  {leverageError === true ? (
                    <Error className="text-[14px]">
                      Minimum Leverage is 1.1.
                    </Error>
                  ) : (
                    ""
                  )}
                  {leverageMaxError === true ? (
                    <Error className="text-[14px]">
                      Maximum Leverage is 50.
                    </Error>
                  ) : (
                    ""
                  )}
                  <div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Collateral In</p>
                      {toggle === "Long" ? (
                        <p className="text-[14px]">USD</p>
                      ) : (
                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData1(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div
                              className="box-border flex justify-center items-center py-[5px] rounded-[20px] text-white cursor-pointer"
                              // onClick={handleOpen}
                            >
                              <p className="text-[14px] mr-[2px]">
                                {tokenData1 && tokenData1.shortName
                                  ? tokenData1.shortName
                                  : "USDC"}
                              </p>
                              <KeyboardArrowDownIcon className="text-[18px]" />
                            </div>
                          }
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Leaverage</p>
                      <p className="text-[14px]">1.10x</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Entry Price</p>
                      <p className="text-[14px]">$28.065.45</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Liq. price</p>
                      <p className="text-[14px]">$15,269.45</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Fees</p>
                      <p className="underline decoration-dashed text-[14px]">
                        $0.05
                      </p>
                    </div>
                  </div>
                  {
                    <Button
                      className="bg-primary w-[100%] rounded-[2px]"
                      disabled={
                        leverageError === true ||
                        leaverage == null ||
                        leverageMaxError === true
                          ? true
                          : false
                      }
                    >
                      Approve USDC
                    </Button>
                  }
                  {/* <LongBtcModal /> */}
                </div>
              ) : (
                // limit

                <div>
                  <div className="bg-backgroundColor py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <p>Pay: 10.00 USDC</p>
                      <p>Balance: 13.8788</p>
                    </div>
                    <div className="flex items-center justify-between w-[100%] ">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-backgroundColor w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={limitPay ? limitPay : ""}
                        placeholder="0"
                        onChange={(e) => {
                          setLimitPay(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-end w-[50%]  items-center">
                        {hideMaxButton2 === false ? (
                          <button
                            className="bg-primary py-[4px] px-[9px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setLimitPay(13.8788);
                              setHideMaxButton2(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}

                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData1(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div
                              className="box-border flex justify-center w-[80%] items-center py-[5px] rounded-[20px] text-white cursor-pointer"
                              // onClick={handleOpen}
                            >
                              <p className="text-[18px]">
                                {tokenData1 && tokenData1.shortName
                                  ? tokenData1.shortName
                                  : "USDT"}
                              </p>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-backgroundColor py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <p>
                        {toggle === "Long" ? "Long" : "Short"}: 10.00 USDC
                      </p>
                      <p>Leaverage: 1.10x</p>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-backgroundColor w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={limitLong ? limitLong : ""}
                        placeholder="0"
                        onChange={(e) => {
                          if (toggle === "Long") {
                            setLimitLong(e.target.value);
                          } else {
                            setMarketShort(e.target.value);
                          }
                        }}
                      ></input>
                      <div className="flex justify-end w-[50%]  items-center">
                        {hideMaxButton3 === false ? (
                          <button
                            className="bg-primary py-[4px] px-[9px] text-[12px] rounded-[3px] mr-[25px]"
                            onClick={() => {
                              setLimitLong(1.1);
                              setHideMaxButton3(true);
                            }}
                          >
                            MAX
                          </button>
                        ) : (
                          ""
                        )}

                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white rounded-[3px]"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData2(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div
                              className="box-border flex justify-center w-[80%] items-center py-[5px] rounded-[20px] text-white cursor-pointer"
                              // onClick={handleOpen}
                            >
                              <p className="text-[18px]">
                                {tokenData2 && tokenData2.shortName
                                  ? tokenData2.shortName
                                  : "USDT"}
                              </p>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-backgroundColor py-[10px] px-[10px] rounded-[2px]">
                    <div className="my-[10px] flex justify-between">
                      <p>Price</p>
                      <p>Mark: 28,031.23</p>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-backgroundColor w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketPay}
                        placeholder="0"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      ></input>

                      <div className="mr-[10px] text-[18px]">USD</div>
                    </div>
                  </div>
                  <div className="my-[10px] flex justify-between items-center">
                    <div>Leverage Slider</div>
                  </div>
                  {
                    <input
                      type="number"
                      className="w-[100%] outline-none rounded-[3px] font-sora bg-backgroundColor text-white py-[5px] px-[10px] border-[1px] border-lightBlue"
                      placeholder="1.1"
                      controls={false}
                      value={leaverage1}
                      onChange={(e) => {
                        if (e.target.value >= 1.1 && e.target.value <= 50) {
                          setLeverageError1(false);
                          if (e.target.value.match(/^(\d*\.{0,1}\d{0,1}$)/)) {
                            setLeaverage1(e.target.value);
                          } else {
                          }
                        } else if (e.target.value > 50) {
                          setLeverageMaxError1(true);
                        } else {
                          setLeaverage1(null);
                          setLeverageError1(true);
                        }
                      }}
                    ></input>
                  }
                  {leverageError1 === true ? (
                    <Error className="text-[14px]">
                      Minimum Leverage is 1.1.
                    </Error>
                  ) : (
                    ""
                  )}
                  {leverageMaxError1 === true ? (
                    <Error className="text-[14px]">
                      Maximum Leverage is 50.
                    </Error>
                  ) : (
                    ""
                  )}
                  <div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Collateral In</p>
                      {toggle === "Long" ? (
                        <p className="text-[14px]">USD</p>
                      ) : (
                        <DrawerC
                          anchor="right"
                          wallet={
                            <div className="flex py-[7px] px-[12px] text-white">
                              Pay
                            </div>
                          }
                          content={
                            <div>
                              <Search
                                className="mx-4 text-white"
                                searchToken={(e) => {
                                  search(e);
                                }}
                              />
                              <hr className="border-[1px] border-lightBlue mb-[20px]"></hr>
                              <div className="overflow-y-auto h-[100%] mb-[10px] scroll">
                                {data.map((e) => {
                                  return (
                                    <div
                                      className="flex justify-between items-center cursor-pointer hover:bg-backgroundColor border-[1px] border-lightBlue mx-[20px] mb-[10px] rounded-[3px]"
                                      key={data.id}
                                      onClick={() => {
                                        setTokenData2(e);
                                        document
                                          .getElementById("closeTransient")
                                          .click();
                                      }}
                                    >
                                      <div className="flex w-[100%] px-4 py-1 ">
                                        <div className="flex items-center">
                                          <Image
                                            src={`data:image/png;base64,${e.image}`}
                                            alt="Token Image"
                                            width={35}
                                            height={35}
                                            className="rounded-[20px] mr-[10px]"
                                          />
                                        </div>
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </p>
                                          <p className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-col">
                                        <div className="mr-[12px] text-[14px] text-white">
                                          0.002571
                                        </div>
                                        <div className="text-white text-[14px]">
                                          $4.49
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          }
                          button={
                            <div className="box-border flex justify-center items-center py-[5px] rounded-[20px] text-white cursor-pointer">
                              <p className="text-[14px] mr-[2px]">
                                {tokenData2 && tokenData2.shortName
                                  ? tokenData2.shortName
                                  : "USDC"}
                              </p>
                              <KeyboardArrowDownIcon className="text-[18px]" />
                            </div>
                          }
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Leaverage</p>
                      <p className="text-[14px]">1.10x</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Entry Price</p>
                      <p className="text-[14px]">$28.065.45</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Liq. price</p>
                      <p className="text-[14px]">$15,269.45</p>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <p className="text-[14px]">Fees</p>
                      <p className="underline decoration-dashed text-[14px]">
                        $0.05
                      </p>
                    </div>
                  </div>

                  {
                    <Button
                      className="bg-primary w-[100%] rounded-[2px]"
                      disabled={
                        leverageError1 === true ||
                        leaverage1 == null ||
                        leverageMaxError1 === true
                          ? true
                          : false
                      }
                    >
                      Approve USDC
                    </Button>
                  }

                  {/* <LongBtcModal /> */}
                </div>
              )}
            </div>
            <div className="card1 px-[10px] py-[10px]">
              <div>Long BTC</div>
              <hr className="border-lightBlue border-[1px] my-[8px]"></hr>
              <div className="flex items-center justify-between my-[5px]">
                <p className="text-[14px]">Entry Price</p>
                <p className="underline decoration-dashed text-[14px]">
                  $28,065.45
                </p>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <p className="text-[14px]">Exit Price</p>
                <p className="underline decoration-dashed text-[14px]">
                  $28,065.45
                </p>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <p className="text-[14px]">Borrow Fee</p>
                <p className="underline decoration-dashed text-[14px]">
                  0.00079% / 1h
                </p>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <p className="text-[14px]">Available Liquidity</p>
                <p className="underline decoration-dashed text-[14px]">
                  $4,545.79
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmx;
