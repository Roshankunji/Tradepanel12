import React, { createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [isApproveLoad, setApproveLoad] = useState(false);

  const setLoading = (status) => {
    setApproveLoad(status);
  }

  return (
    <StoreContext.Provider
      value={{
        isApproveLoad,
        setApproveLoad: setLoading
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
