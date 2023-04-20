import React from "react";
import Image from "next/image";
import setting from "../public/Images/setting.png";
import paper from "../public/Images/paper.png";
import Button from "../components/atoms/Button/Button";
import SouthIcon from "@mui/icons-material/South";
const uniswap = () => {
  return (
    <>
      <div className="flex min-h-screen flex justify-center flex-col items-center bg-backgroundColor text-white ">
        {" "}
        <div className="w-[573px]  px-[20px] bg-darkBlueBlack1">
          <div className="flex justify-between  items-center py-[15px]">
            <div className="font-semiboold">swap</div>
            <div className="flex">
              <Image
                src={setting}
                alt="setting"
                className="w-[27px] h-[27px]"
              />
              <Image
                src={paper}
                alt="paper"
                className="w-[27px] h-[27px] ml-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-col  relative w-[100%] z-1">
            <div className="flex justify-between py-[20px] px-[15px] mb-[8px] card">
              <div>
                <div className="mb-[15px]">5</div>
                <div>45.00</div>
              </div>
              <div>
                <div className="mb-[15px]">dropdown</div>
                <div>
                  Balance : 13.83 <span>Max</span>
                </div>
              </div>
            </div>
            <div className="rounded-[5px]  w-[40px] flex justify-center items-center py-[5px] absolute top-[80%] left-[50%] border-darkBlueBlack1 border-[4px] card1 z-2 ">
              <SouthIcon></SouthIcon>
            </div>
          </div>

          <div className="flex justify-between py-[20px] px-[15px] mb-[10px] card z-1">
            <div>
              <div className="mb-[15px]">5</div>
              <div>45.00</div>
            </div>
            <div>
              <div className="mb-[15px]">dropdown</div>
              <div>
                Balance : 13.83 <span>Max</span>
              </div>
            </div>
          </div>
          <Button className="bg-primary w-[100%]">Swap</Button>
        </div>
      </div>
    </>
  );
};

export default uniswap;
