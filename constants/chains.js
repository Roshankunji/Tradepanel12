const arbitrumHardhat = {
    id: 31337,
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
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 11_907_934
      }
    }
  };

  export { arbitrumHardhat }