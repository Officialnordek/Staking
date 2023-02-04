export const networkIds = {
  NRK: 81041
}

const networks = {
  [networkIds.NRK]: {
    chainId: '0x13C91',
    chainName: 'NRK Network',
    nativeCurrency: {
      name: 'NRK Coin',
      symbol: 'NRK',
      decimals: 18
    },
    rpc: 'https://mainnet-rpc.nordekscan.com',
    explorer: 'https://nordekscan.com'
  }
}

export const getNetwork = (networkId) => networks[networkId]
