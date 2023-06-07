/* eslint-disable no-console */
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { initializeWeb3 } from '../contracts';

const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  const { isConnected, address } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const [isPublicClientReady, setIsPublicClientReady] = useState(false);
  const [isWalletClientReady, setIsWalletClientReady] = useState(false);

  const checkProviderAndSigner = useCallback(async () => {
    if (publicClient) {
      setIsPublicClientReady(true);
    }
    if (walletClient) {
      setIsWalletClientReady(true);
    }
  }, [publicClient, walletClient]);

  useEffect(() => {
    checkProviderAndSigner();
  }, [checkProviderAndSigner]);

  const [isInitialized, setInitialized] = useState(false);
  useEffect(() => {
    if (isConnected && isPublicClientReady && isWalletClientReady) {
      (async () => {
        await initializeWeb3(publicClient, walletClient, address).then((res) => {
          setInitialized(res);
        });
      })();
    } else {
      setInitialized(false);
    }
  }, [isConnected, walletClient, isPublicClientReady, isWalletClientReady, publicClient, address]);

  return <Web3Context.Provider value={{ isConnected, isInitialized }}>{children}</Web3Context.Provider>;
};

export const useWeb3Store = () => {
  const context = useContext(Web3Context);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
