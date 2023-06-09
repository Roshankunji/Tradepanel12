const arbitrumFork = {
    id: 42161,
    name: 'Arbitrum Fork',
    network: 'arbitrum fork',
    iconUrl: '../public/Images/arb.png',
    iconBackground: 'rgba(0,0,0,0)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://rpc.tenderly.co/fork/cf94355b-e254-41d4-8240-230a56d108b7']
      },
      public: {
        http: ['https://rpc.tenderly.co/fork/cf94355b-e254-41d4-8240-230a56d108b7']
      }
    }
  };

  export { arbitrumFork }