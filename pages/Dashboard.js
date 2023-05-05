import Image from "next/image";
import { Inter } from "next/font/google";
import BaseCard from "../components/Molecules/Cards/BaseCard";
// import { provider, contract } from "../utils";
import { contractAddress, ABI } from "../contract";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [provider, setProvider] = useState();
  const [contract, setContract] = useState();

  useEffect(async () => {
    if (
      typeof window !== "undefined" ||
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const contract = new ethers.Contract(contractAddress, ABI, provider);
      setContract(contract);
      // other stuff using provider here
    }
  }, []);

  useEffect(async () => {
    const value = await contract.getBalances();
    console.log("balances", value);
  }, []);
  return (
    <div className="flex flex-wrap min-h-screen bg-backgroundColor  py-10 justify-between ">
      <BaseCard
        name="User Valut"
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
    </div>
  );
}
