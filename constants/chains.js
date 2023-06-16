const arbitrumHardhat = {
    id: 42161,
    name: 'Arbitrum hardhat',
    network: 'arbitrum hardhat',
    iconUrl: '../public/Images/arb.png',
    iconBackground: 'rgba(0,0,0,0)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['http://127.0.0.1:8545/']
      },
      public: {
        http: ['http://127.0.0.1:8545/']
      }
    }
  };

  export { arbitrumHardhat }