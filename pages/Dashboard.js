import Image from "next/image";
import { Inter } from "next/font/google";
import BaseCard from "../components/Molecules/Cards/BaseCard";
import abi from "./abi.json";
import { ethers } from "ethers";
import { useState } from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [name, setName] = useState();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { chain } = useNetwork();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  // const network = useSwitchNetwork({
  //   chainId: 42161,
  // });
  console.log("network is", switchNetwork);

  const callContract = async () => {
    const addr = "0x824bef9c581f03ffd699b9bfdb9c714ac25f51b1";
    // if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(addr, abi, provider);
    const name = await contract.getBalances();
    console.log("name is", name);
    setName(name);
    // console.log("name", name);
    // } else {
    // }
  };

  return (
    <div className="flex flex-wrap min-h-screen bg-backgroundColor  py-10 justify-between ">
      <BaseCard
        name="User Vault"
        className="w-[100%] sm:w-[45%] md:w-[30%] bg-gradient-custom-90.76deg"
      />
      <BaseCard
        name="Trader Wallet"
        className="w-[100%] sm:w-[45%] md:w-[30%] "
      />
      <BaseCard
        name="Funds Rollover"
        className="w-[100%] sm:w-[45%] md:w-[30%]"
      />
      {chain && <div>Connected to {chain.name}</div>}

      <button onClick={connect}>contract</button>
    </div>
  );
}
