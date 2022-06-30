export enum SupportedChainId {
  MAINNET = 1,
  TESTNET = 4,
  HEX_MAINNET = "0x1",
  HEX_TESTNET = "0x4",
}

type AddressMap = { [chainId: number]: string };

export const AIRA_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0xB972c505979D966eB8F65Ccac647A2E21DdA3345",
};

export const AIRUSD_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x68193B15dD405066fFC70Df5c4fa761384d7d23F",
};

export const LENDING_REGISTRY_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0xd324e6BF16BF466ec2537Ae232831f969fd1102F",
};

export const LENDING_MARKET_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x89ae3E446cD004e2a5a03df7901cD6Ac1eddcE64",
};

export const LIQUIDATIONBOT_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0xE60EA0F047006b8F4FB367694B4ff908d7854d47",
};

export const PRICE_ORACLE_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x497A650820040c5aA238f22E2Fe272d4Ea3de60B",
};

export const STABLE_POOL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x29A4F56eBA26CbCAD1E8FBB9eceffEbF8Aac8520",
};

export const SWAPPER_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0xCE9e500710dBFCf389198e0DfcD032e2c70B0B6E",
};

export const UNISWAPV2_SWAPPER_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0xf32Cd70E4e85EeCB875aA44ADeF594c30CAdcfEC",
};

export const WETH_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x7DA502419C4381AEC4E98c9A3AC75973e318617C",
};

export const WETHCHAINLINK_USDADAPTER_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: "",
  [SupportedChainId.TESTNET]: "0x74b98F1c4EBFC35e764A7FDCB10abc4BaF4C5930",
};
