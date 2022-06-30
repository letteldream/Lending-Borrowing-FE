import { Contract } from "@ethersproject/contracts";
import {
  AIRA_ADDRESS,
  AIRUSD_ADDRESS,
  LENDING_MARKET_ADDRESS,
  LENDING_REGISTRY_ADDRESS,
  LIQUIDATIONBOT_ADDRESS,
  PRICE_ORACLE_ADDRESS,
  STABLE_POOL_ADDRESS,
  SWAPPER_ADDRESS,
  UNISWAPV2_SWAPPER_ADDRESS,
  WETH_ADDRESS,
  WETHCHAINLINK_USDADAPTER_ADDRESS,
} from "config/address";
import { useMemo } from "react";
import { useWeb3 } from "state/web3";
import { getContract } from "utils";
import AIRA_ABI from "abi/Aira.json";
import AIRUSD_ABI from "abi/AirUSD.json";
import LENDING_MARKET_ABI from "abi/LendingMarket.json";
import LENDING_REGISTRY_ABI from "abi/LendingRegistery.json";
import LIQUIDATIONBOT_ABI from "abi/LiquidationBot.json";
import PRICE_ORACLE_ABI from "abi/PriceOracle.json";
import STABLE_POOL_ABI from "abi/StablePool.json";
import SWAPPER_ABI from "abi/Swapper.json";
import UNISWAPV2_SWAPPER_ABI from "abi/UniswapV2Swapper.json";
import WETH_ABI from "abi/WETH.json";
import WETHCHAINLINK_USDADAPTER_ABI from "abi/WETHChainlinkUSDAdapter.json";

export function useContract(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: { [chainId: number]: any } | any,
  withSignerIfPossible = true
): Contract | null {
  const { chainId, provider, account } = useWeb3();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    let abi: any;
    if (!Array.isArray(ABI) && Object.keys(ABI).length > 0) abi = ABI[chainId];
    else abi = ABI;
    if (!abi) return null;
    try {
      return getContract(
        address,
        abi,
        provider,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [
    addressOrAddressMap,
    ABI,
    provider,
    chainId,
    withSignerIfPossible,
    account,
  ]);
}

export function useAiraContract() {
  return useContract(AIRA_ADDRESS, AIRA_ABI);
}

export function useAirUSDContract() {
  return useContract(AIRUSD_ADDRESS, AIRUSD_ABI);
}

export function useLendingMarketContract() {
  return useContract(LENDING_MARKET_ADDRESS, LENDING_MARKET_ABI);
}

export function useLendingRegistryContract() {
  return useContract(LENDING_REGISTRY_ADDRESS, LENDING_REGISTRY_ABI);
}

export function useLiquidationBotContract() {
  return useContract(LIQUIDATIONBOT_ADDRESS, LIQUIDATIONBOT_ABI);
}

export function usePriceOracleContract() {
  return useContract(PRICE_ORACLE_ADDRESS, PRICE_ORACLE_ABI);
}

export function useStablePoolContract() {
  return useContract(STABLE_POOL_ADDRESS, STABLE_POOL_ABI);
}

export function useSwapperContract() {
  return useContract(SWAPPER_ADDRESS, SWAPPER_ABI);
}

export function useUniswapSwapperContract() {
  return useContract(UNISWAPV2_SWAPPER_ADDRESS, UNISWAPV2_SWAPPER_ABI);
}

export function useWETHContract() {
  return useContract(WETH_ADDRESS, WETH_ABI);
}

export function useWETHChainlinkContract() {
  return useContract(
    WETHCHAINLINK_USDADAPTER_ADDRESS,
    WETHCHAINLINK_USDADAPTER_ABI
  );
}
