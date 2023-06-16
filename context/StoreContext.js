import React, { createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [isApproveLoad, setApproveLoad] = useState(false);
  const [traderTotalAmount, setTraderTotalAmount] = useState(0);
  const [userTotalAmount, setUserTotalAmount] = useState(0);

  const setLoading = (status) => {
    setApproveLoad(status);
  }

  const setTraderAmount = (amount) => {
    setTraderTotalAmount(amount);
  }

  const setUserAmount = (amount) => {
    setUserTotalAmount(amount);
  }

  return (
    <StoreContext.Provider
      value={{
        isApproveLoad,
        setApproveLoad: setLoading,
        traderTotalAmount,
        setTraderTotalAmount: setTraderAmount,
        userTotalAmount,
        setUserTotalAmount: setUserAmount,
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
