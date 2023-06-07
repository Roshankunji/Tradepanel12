import React from "react";
import FundsRollover from "./FundsRollover";

const BaseCard = ({ name, className }) => {
  return (
    <>
      <div
        className={`bg-[#16182e] rounded-[10px] w-[100%] sm:w-[45%] md:w-[30%] h-[100%] font-sora ${className}`}
      >
        <div className="w-[100%] h-[100%] text-white ">
          <div className="text-white  flex justify-center py-[10px] text-[18px]">
            {name}
          </div>
          <hr className="border-borderColor borderWidth-[0.05px]" />
          {name === "Funds Rollover" ? (
            <div className="px-[25px] py-[15px]">
              <FundsRollover />
            </div>
          ) : (
            <div className="py-[15px] px-[25px]">
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Total Funds</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Unused</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Deployed</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </p>
              </div>
              <div className="flex flex-col py-[6px]">
                <p className="text-[12px] font-sora">Current Value</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788
                </p>
              </div>
              <div className="flex flex-col py-[6px] ">
                <p className="text-[12px] font-sora">Returns</p>
                <p className="text-[18px] font-semibold font-sora">
                  $34,44,44,4788{" "}
                  <span className="text-green-500 font-normal">(+50.3%)</span>
                </p>
              </div>
              {name === "User Vault" ? (
                <div>
                  <div className="flex flex-col py-[6px] ">
                    <p className="text-[12px] font-sora">Total Shares</p>
                    <p className="text-[18px] font-semibold font-sora">
                      $34,44,44,4788
                    </p>
                  </div>
                  <div className="flex flex-col py-[6px] ">
                    <p className="text-[12px] font-sora">
                      Price Per Share
                    </p>
                    <p className="text-[18px] font-semibold font-sora">
                      $34,44,44,4788
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-[6px] ">
                  <p className="text-[12px] font-sora">Uv/Tw(Unused)</p>
                  <p className="text-[18px] font-semibold font-sora">
                    1,000.45
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BaseCard;
