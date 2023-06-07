const arbitrumFork = {
    id: 42161,
    name: 'Arbitrum Fork',
    network: 'arbitrum fork',
    iconUrl: '../public/Images/arb.png',
    iconBackground: 'rgba(0,0,0,0)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://rpc.tenderly.co/fork/63e43ae4-c660-4f58-a0e1-325d54f24923']
      },
      public: {
        http: ['https://rpc.tenderly.co/fork/63e43ae4-c660-4f58-a0e1-325d54f24923']
      }
    }
  };

  export { arbitrumFork }