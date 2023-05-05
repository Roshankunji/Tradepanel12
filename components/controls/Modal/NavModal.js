import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import kunjilogo from "../../../public/Images/kunjilogo.png";
import browserWallet from "../../../public/Images/browserWallet.png";
import walletConnect from "../../../public/Images/WalletConnect.png";
import coinbase from "../../../public/Images/coinbase.png";
import torus from "../../../public/Images/torus.png";
import frame from "../../../public/Images/frame.png";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 374,
  bgcolor: "#161617",
  borderRadius: "18px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

const NavModal = () => {
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Button onClick={handleOpen} className="bg-primary">
          Connect Wallet
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="backdrop-blur-sm px-[71px] "
        >
          <Box sx={style}>
            <div
              className="text-end mb-[2px] cursor-pointer"
              onClick={handleClose}
            >
              <CancelIcon className="text-[20px] text-lightGray" />
            </div>
            <div className="text-center">
              <div className="w-[100%] flex justify-center mb-[10px]">
                <Image
                  src={kunjilogo}
                  alt="kunjilogo"
                  className="w-[40px] h-[40px]"
                ></Image>
              </div>
              <div className="text-[20px]">Connect Wallet</div>
              <div className="text-[13px] mb-[20px]">
                Connect your wallet to start investing
              </div>
            </div>
            <div>
              <div
                className={
                  click === true
                    ? "flex justify-between items-center py-[15px] bg-hoverBgColor hover:bg-hoverBgColor hover:rounded-[6px] rounded-[6px] px-[10px] cursor-pointer mb-[3px]"
                    : "flex justify-between items-center py-[15px] px-[10px] cursor-pointer hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px]"
                }
                onClick={() => {
                  setClick(!click);
                  setClick1(false);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                }}
              >
                <text className="text-[15px]">Browser Wallet</text>
                <Image
                  src={browserWallet}
                  alt="browser wallet"
                  className="w-[25px] h-[25px]"
                ></Image>
              </div>

              <div
                className={
                  click1 === true
                    ? "flex justify-between items-center py-[15px] bg-hoverBgColor hover:bg-hoverBgColor rounded-[6px] hover:rounded-[6px] mb-[3px] px-[10px] cursor-pointer"
                    : "flex justify-between items-center py-[15px] px-[10px] cursor-pointer hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px]"
                }
                onClick={() => {
                  setClick(false);
                  setClick1(!click1);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                }}
              >
                <text className="text-[15px]">Wallet Connect</text>
                <Image
                  src={walletConnect}
                  alt="wallet connect"
                  className="w-[25px] h-[25px]"
                ></Image>
              </div>
              <div
                className={
                  click2 === true
                    ? "flex justify-between items-center py-[15px] bg-hoverBgColor hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px] rounded-[6px] px-[10px] cursor-pointer"
                    : "flex justify-between items-center py-[15px] px-[10px] cursor-pointer hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px]"
                }
                onClick={() => {
                  setClick(false);
                  setClick1(false);
                  setClick2(!click2);
                  setClick3(false);
                  setClick4(false);
                }}
              >
                <text className="text-[15px]">Coinbase Wallet</text>
                <Image
                  src={coinbase}
                  alt="coinbase"
                  className="w-[25px] h-[25px]"
                ></Image>
              </div>
              <div
                className={
                  click3 === true
                    ? "flex justify-between items-center py-[15px] bg-hoverBgColor hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px] rounded-[6px] px-[10px] cursor-pointer"
                    : "flex justify-between items-center py-[15px] px-[10px] cursor-pointer hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px]"
                }
                onClick={() => {
                  setClick(false);
                  setClick1(false);
                  setClick2(false);
                  setClick3(!click3);
                  setClick4(false);
                }}
              >
                <text className="text-[15px]">Torus</text>
                <Image
                  src={torus}
                  alt="torus"
                  className="w-[25px] h-[25px]"
                ></Image>
              </div>
              <div
                className={
                  click4 === true
                    ? "flex justify-between items-center py-[15px] bg-hoverBgColor hover:bg-hoverBgColor hover:rounded-[6px] rounded-[6px] mb-[3px] px-[10px] cursor-pointer"
                    : "flex justify-between items-center py-[15px] px-[10px] cursor-pointer hover:bg-hoverBgColor hover:rounded-[6px] mb-[3px]"
                }
                onClick={() => {
                  setClick(false);
                  setClick1(false);
                  setClick2(false);
                  setClick3(false);
                  setClick4(!click4);
                }}
              >
                <text className="text-[15px]">Frame</text>
                <Image
                  src={frame}
                  alt="frame"
                  className="w-[25px] h-[25px]"
                ></Image>
              </div>
              <p className="mt-[20px] text-[12px] text-[#5D6062]">
                By opting for a wallet, you acknowledge the External
                Provider&apos;s terms and conditions. Your wallet access may be
                dependent on the External Provider&apos;s operational status.
              </p>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default NavModal;
