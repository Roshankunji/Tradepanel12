import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Table from "../components/Molecules/Table/index";
const Gmx = () => {
  const [toggle, setToggle] = useState("Long");
  const [tradeDataTab, setTradeDataTab] = useState("Positions");
  const [marketPay, setMarketPay] = useState(null);
  const [numberOfPositions, setNumberOfPositions] = useState(2);
  const [limit, setLimit] = useState(10);

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
      <div className="flex justify-end">
        <div className="w-[100%] flex my-[10px]">
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
          <div className="w-[32%]">
            <div className="flex">
              <div onClick={() => toggleHandler("Long")} className="w-[50%]">
                <div
                  className={
                    toggle === "Long"
                      ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                      : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer"
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
                      ? "text-center bg-primary h-full p-2 border-1 border-gray-800 text-white text-[16px] font-medium cursor-pointer"
                      : "text-center bg-gray-700 p-2 text-gray-400 border-1 font-medium cursor-pointer"
                  }
                >
                  <TrendingDownIcon className="mr-[5px]" /> Short
                </div>
              </div>
            </div>

            <div className="flex my-[10px]">
              <div className="mr-5">Market</div>
              <div>Limit</div>
            </div>

            <div className="my-[10px] flex justify-between">
              <text>pay: 10.00 USDF</text>
              <text>Balance: 13.8788</text>
            </div>
            <div>
              <input
                type="number"
                className="text-[36px] bg-darkBlue w-[100%] outline-none rounded-[18px]  font-sora bg-backgroundColor text-white"
                value={marketPay}
                placeholder="0"
                onChange={(e) => {
                  setMarketPay(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmx;
