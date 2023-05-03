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
import Table from "../components/Molecules/Table/index";

const Gmx = () => {
  const [toggle, setToggle] = useState("Long");
  const [marketLimitTab, setMarketLimitTab] = useState("Market");
  const [marketPay, setMarketPay] = useState(null);
  const [marketLong, setMarketLong] = useState(null);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState([]);
  const [tokenData1, setTokenData1] = useState([]);
  const [tokenData2, setTokenData2] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [leaverage, setLeaverage] = useState(1.1);
  const [numberOfPositions, setNumberOfPositions] = useState(2);
  const [limit, setLimit] = useState(10);
  const [tradeDataTab, setTradeDataTab] = useState("Positions");

  const search = (e) => {
    setSearchData(e);
  };

  useEffect(() => {
    setData(tokenData);
  }, []);

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
  }, [searchData]);

  const toggleHandler = (type) => {
    setToggle(type);
  };
  const toggleTradeDataTab = (type) => {
    setTradeDataTab(type);
  };

  let transactionData = [
    {
      coin: "BTC",
      longShortRange: "1.10x",
      longShort: "Long",
      netValue: 9.92,
      profitLoss: "-$0.02",
      profitLossPercent: "-0.21%",
      size: 10.94,
      collateral: 9.93,
      entryPrice: 28061.13,
      marketPrice: 28062.3,
      liqPrice: 15426.5,
    },
    {
      coin: "BTC",
      longShortRange: "2.09x",
      longShort: "Short",
      netValue: 9.96,
      profitLoss: "-$0.03",
      profitLossPercent: "-0.37%",
      size: 20.95,
      collateral: 9.97,
      entryPrice: 28068.83,
      marketPrice: 28062.3,
      liqPrice: 34709.83,
    },
  ];

  let columns = [
    {
      Header: "Position",
      accessor: (d) => (
        <div className="flex flex-col">
          {d.coin}
          <div className="flex">
            {d.longShortRange}{" "}
            <span
              className={
                d.longShort === "Long" ? "text-green-600" : "text-red-500"
              }
            >
              {d.longShort}
            </span>
          </div>
        </div>
      ),
    },
    {
      Header: "Net Value",
      accessor: "netValue",
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
        return <div className="">Close</div>;
      },
    },
    {
      Header: "",
      accessor: "menu",
      Cell: (e) => {
        return <div className="">Three dots</div>;
      },
    },
  ];

  return (
    <>
      <div className="flex justify-end ">
        <div className="w-[100%] flex  my-[10px] ">
          <div className="w-[68%]">
            <div className="w-full mb-3">
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
                    {numberOfPositions > 0 ? `(${numberOfPositions})` : null}
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
                    Orders
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
            </div>
            {tradeDataTab === "Positions" && (
              <Table
                data={transactionData ? transactionData : []}
                columns={columns}
                defaultPageSize={limit}
                hidePagination={true}
              />
            )}
          </div>
          <div className="w-[32%] flex-col">
            <div className="bg-darkBlueBlack1 px-[10px] py-[10px] mb-[10px]">
              <div className="flex">
                <div onClick={() => toggleHandler("Long")} className="w-[50%]">
                  <div
                    className={
                      toggle === "Long"
                        ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer rounded-l-[2px]"
                        : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer rounded-l-[2px]"
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
                        : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer rounded-r-[2px]"
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
                      ? "mr-5 cursor-pointer text-initialNavTextColor"
                      : "mr-5 cursor-pointer text-white"
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
                      ? "cursor-pointer text-initialNavTextColor"
                      : "cursor-pointer text-white"
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
                  <div className="bg-darkBlue py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <text>Pay: 10.00 USDC</text>
                      <text>Balance: 13.8788</text>
                    </div>
                    <div className="flex items-center justify-between w-[100%] ">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-darkBlue w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketLong}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketPay(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-between w-[50%]  items-center">
                        <Button className="bg-primary py-[3px] px-[8px] text-[11px] rounded-[3px] mr-[5px]">
                          Max
                        </Button>

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
                                          <text className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </text>
                                          <text className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </text>
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
                              <text className="text-[18px]">
                                {tokenData1 && tokenData1.shortName
                                  ? tokenData1.shortName
                                  : "USDT"}
                              </text>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-darkBlue py-[10px] px-[10px] rounded-[2px]">
                    <div className="my-[10px] flex justify-between">
                      <text>Long: 10.00 USDC</text>
                      <text>Leaverage: 1.10x</text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-darkBlue w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketPay}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketLong(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-between w-[50%]  items-center">
                        <Button className="bg-primary py-[3px] px-[8px] text-[11px] rounded-[3px] mr-[5px]">
                          Max
                        </Button>

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
                                          <text className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </text>
                                          <text className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </text>
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
                              <text className="text-[18px]">
                                {tokenData2 && tokenData2.shortName
                                  ? tokenData2.shortName
                                  : "USDT"}
                              </text>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-[10px] flex justify-between items-center">
                    <div>Leverage Slider</div>
                    <CheckBox />
                  </div>
                  <input
                    type="number"
                    className="w-[100%] outline-none rounded-[3px] font-sora bg-darkBlueBlack text-white py-[5px] px-[10px] border-[1px] border-lightBlue"
                    placeholder="1.1"
                    controls={false}
                    value={leaverage}
                    onChange={(e) => {
                      setLeaverage(e.target.value);
                    }}
                  ></input>
                  <div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Collateral In</text>
                      <text className="text-[14px]">USD</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Leaverage</text>
                      <text className="text-[14px]">1.10x</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Entry Price</text>
                      <text className="text-[14px]">$28.065.45</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Liq. price</text>
                      <text className="text-[14px]">$15,269.45</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Fees</text>
                      <text className="underline decoration-dashed">$0.05</text>
                    </div>
                  </div>
                  <Button className="bg-primary w-[100%] rounded-[2px]">
                    Aprove USDC
                  </Button>
                </div>
              ) : (
                // limit

                <div>
                  <div className="bg-darkBlue py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <text>Pay: 10.00 USDC</text>
                      <text>Balance: 13.8788</text>
                    </div>
                    <div className="flex items-center justify-between w-[100%] ">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-darkBlue w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketLong}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketPay(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-between w-[50%]  items-center">
                        <Button className="bg-primary py-[3px] px-[8px] text-[11px] rounded-[3px] mr-[5px]">
                          Max
                        </Button>

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
                                          <text className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </text>
                                          <text className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </text>
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
                              <text className="text-[18px]">
                                {tokenData1 && tokenData1.shortName
                                  ? tokenData1.shortName
                                  : "USDT"}
                              </text>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-darkBlue py-[10px] px-[10px] rounded-[2px] mb-[10px]">
                    <div className="my-[10px] flex justify-between">
                      <text>Long: 10.00 USDC</text>
                      <text>Leaverage: 1.10x</text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-darkBlue w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                        value={marketPay}
                        placeholder="0"
                        onChange={(e) => {
                          setMarketLong(e.target.value);
                        }}
                      ></input>
                      <div className="flex justify-between w-[50%]  items-center">
                        <Button className="bg-primary py-[3px] px-[8px] text-[11px] rounded-[3px] mr-[5px]">
                          Max
                        </Button>

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
                                          <text className="font-semibold text-[18px] text-white">
                                            {e.name}
                                          </text>
                                          <text className="font-extralight text-[13px] text-white">
                                            {e.shortName}
                                          </text>
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
                              <text className="text-[18px]">
                                {tokenData2 && tokenData2.shortName
                                  ? tokenData2.shortName
                                  : "USDT"}
                              </text>
                              <KeyboardArrowDownIcon />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-darkBlue py-[10px] px-[10px] rounded-[2px]">
                    <div className="my-[10px] flex justify-between">
                      <text>Price</text>
                      <text>Mark: 28,031.23</text>
                    </div>
                    <div className="flex items-center justify-between w-[100%]">
                      <input
                        type="number"
                        className="text-[25px] py-[5px] bg-darkBlue w-[50%] mr-[10px] px-[10px]  outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
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
                    <CheckBox />
                  </div>
                  <input
                    type="number"
                    className="w-[100%] outline-none rounded-[3px] font-sora bg-darkBlueBlack text-white py-[5px] px-[10px] border-[1px] border-lightBlue"
                    placeholder="1.1"
                    controls={false}
                    value={leaverage}
                    onChange={(e) => {
                      setLeaverage(e.target.value);
                    }}
                  ></input>
                  <div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Collateral In</text>
                      <text className="text-[14px]">USD</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Leaverage</text>
                      <text className="text-[14px]">1.10x</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Entry Price</text>
                      <text className="text-[14px]">$28.065.45</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Liq. price</text>
                      <text className="text-[14px]">$15,269.45</text>
                    </div>
                    <div className="flex items-center justify-between my-[5px]">
                      <text className="text-[14px]">Fees</text>
                      <text className="underline decoration-dashed">$0.05</text>
                    </div>
                  </div>
                  {/* <Button className="bg-primary w-[100%] rounded-[2px]">
                    Approve USDC
                  </Button> */}

                  <LongBtcModal />
                </div>
              )}
            </div>
            <div className="bg-darkBlueBlack1 px-[10px] py-[10px]">
              <div>Long BTC</div>
              <hr className="border-initialNavTextColor border-[1px] my-[8px]"></hr>
              <div className="flex items-center justify-between my-[5px]">
                <text className="text-[14px]">Entry Price</text>
                <text className="underline decoration-dashed text-[14px]">
                  $28,065.45
                </text>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <text className="text-[14px]">Exit Price</text>
                <text className="underline decoration-dashed text-[14px]">
                  $28,065.45
                </text>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <text className="text-[14px]">Borrow Fee</text>
                <text className="underline decoration-dashed text-[14px]">
                  0.00079% / 1h
                </text>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <text className="text-[14px]">Available Liquidity</text>
                <text className="underline decoration-dashed text-[14px]">
                  $4,545.79
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmx;
