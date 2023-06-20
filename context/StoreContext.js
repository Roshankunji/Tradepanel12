import React, { createContext, useState, useContext, useEffect } from 'react';
import { TraderWalletABI } from '../contracts/abis';
import { contractAddress } from '../contracts/address';
import { usePublicClient } from 'wagmi';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [isApproveLoad, setApproveLoad] = useState(false);
  const [traderTotalAmount, setTraderTotalAmount] = useState(0);
  const [userTotalAmount, setUserTotalAmount] = useState(0);
  const [traderWallet, setTraderWallet] = useState("Loading...");
  const [vaultAddress, setVaultAddress] = useState("Loading...");
  const publicClient = usePublicClient();

  const setLoading = (status) => {
    setApproveLoad(status);
  }

  const setTraderAmount = (amount) => {
    setTraderTotalAmount(amount);
  }

  const setUserAmount = (amount) => {
    setUserTotalAmount(amount);
  }

  const getTraderWallet = async () => {
    const trader = await publicClient.readContract({ 
        abi: TraderWalletABI, 
        address: contractAddress.traderWalletAddress, 
        functionName: "traderAddress" 
    });
    setTraderWallet(trader);
  }

  const getUserVault = async () => {
    const userVault = await publicClient.readContract({ 
      abi: TraderWalletABI,
      address: contractAddress.traderWalletAddress,
      functionName: 'vaultAddress'
    });
    setVaultAddress(userVault);
  }

  useEffect(() => {
    getTraderWallet();
    getUserVault();
  }, [])

  return (
    <StoreContext.Provider
      value={{
        isApproveLoad,
        setApproveLoad: setLoading,
        traderTotalAmount,
        setTraderTotalAmount: setTraderAmount,
        userTotalAmount,
        setUserTotalAmount: setUserAmount,
        traderWallet,
        vaultAddress
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
