import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import cardicon from "assets/cardicon.svg";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

import {
  useLendingMarketContract,
  usePriceOracleContract,
  useWETHContract,
} from "hooks/useContract";
import { LENDING_MARKET_ADDRESS, WETH_ADDRESS } from "config/address";
import { BigNumber, ethers } from "ethers";
import { useWeb3 } from "state/web3";
import { ICollateralSettings } from "interface/ICollateralSettings";
import { IMarketSettings } from "./IMarketSettings";

interface Props {
  icon: string;
  headline: string;
  symbol: string;
}

const Index: React.FC<Props> = ({ icon, headline, symbol }) => {
  // Get Contracts
  const { chainId } = useWeb3();
  const tokenContract = useWETHContract();
  const priceOracleContract = usePriceOracleContract();
  const lendingMarketContract = useLendingMarketContract();
  // Variables
  const [TVL, setTVL] = useState(0);
  const [borrowLimit, setBorrowLimit] = useState(0);
  const [USDLeft, setUSDLeft] = useState(0);
  const [lendMarketSetting, setLendMarketSetting] = useState<IMarketSettings>();

  useEffect(() => {
    console.log("tokenContract", tokenContract);
    console.log("priceOracleContract", priceOracleContract);
    console.log("lendingMarketContract", lendingMarketContract);
    if (
      chainId &&
      tokenContract &&
      priceOracleContract &&
      lendingMarketContract
    ) {
      const getInfo = async () => {
        // Calculate TVL
        const tokenDecimal = await tokenContract.decimals();
        const amount = await tokenContract.balanceOf(
          LENDING_MARKET_ADDRESS[chainId]
        );
        const viewPriceInUSD = await priceOracleContract.viewPriceInUSD(
          WETH_ADDRESS[chainId]
        );
        const TVL =
          (amount * viewPriceInUSD) /
          Math.pow(10, tokenDecimal) /
          Math.pow(10, 8);
        setTVL(TVL);
        // Calculate AirUSD Rborrow Limit
        const colleteralSettings: ICollateralSettings =
          await lendingMarketContract.collateralSettings(WETH_ADDRESS[chainId]);
        console.log("colleteralSettings", colleteralSettings);
        const borrowLimit =
          (colleteralSettings.creditLimitRate[0] /
            colleteralSettings.creditLimitRate[1]) *
          100;
        setBorrowLimit(borrowLimit);
        // Calculate AirUSD left
        const totalBorrowsPerCollateral: BigNumber =
          await lendingMarketContract.totalBorrowsPerCollateral(
            WETH_ADDRESS[chainId]
          );
        const left =
          Number(ethers.utils.formatEther(colleteralSettings.totalBorrowCap)) -
          Number(ethers.utils.formatEther(totalBorrowsPerCollateral));
        setUSDLeft(left);
        // Get Lending Market Settings
        const settings: IMarketSettings =
          await lendingMarketContract.settings();
        console.log("settings", settings);
        setLendMarketSetting(settings);
      };
      getInfo();
    }
  }, [chainId, tokenContract, priceOracleContract, lendingMarketContract]);

  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        // marginRight: "1rem",
        // alignItems: "center",
        px: 4,
        flexDirection: "column",
        background: "linear-gradient(to top, #252A32, #52306B)",
        borderRadius: "1.5rem",
        width: desktop ? "30%" : "90%",
        marginBottom: desktop ? 0 : "1rem",
        height: desktop ? "25rem" : "27rem",
        zIndex: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src={icon} alt="" />
        <p style={{ marginLeft: "1rem" }}>{headline}</p>
      </Box>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <div>
          <p
            style={{
              marginBottom: "-.5rem",
              color: "#D1D5DB",
              fontSize: ".8rem",
            }}
          >
            TVL
          </p>
          <h3 style={{ fontSize: ".9rem" }}>{TVL}</h3>
        </div>
        <div>
          <p
            style={{
              marginBottom: "-.5rem",
              color: "#D1D5DB",
              fontSize: ".8rem",
            }}
          >
            Airusd Rborrow Limit
          </p>
          <h3 style={{ fontSize: ".9rem" }}>$ {borrowLimit} </h3>
        </div>
        <div>
          <p
            style={{
              marginBottom: "-.5rem",
              color: "#D1D5DB",
              fontSize: ".8rem",
            }}
          >
            Airusd Left
          </p>
          <h3 style={{ fontSize: ".9rem" }}>{USDLeft}</h3>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          fontSize: ".8rem",
          color: "#F9FAFB",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <p>COLLATERAL</p>
        <p>2,567.78 wETH=$5690m </p>
      </Box>
      <LinearProgress
        style={{ height: ".7rem", borderRadius: "1rem" }}
        color="primary"
        variant="determinate"
        value={50}
      />
      <Box
        sx={{
          display: "flex",
          fontSize: ".8rem",
          color: "#F9FAFB",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <p>MINTED VST</p>
        <p>2,567.78 VST</p>
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <div style={{ marginRight: "10%" }}>
          <p
            style={{
              marginBottom: "-.5rem",
              color: "#D1D5DB",
              fontSize: ".8rem",
            }}
          >
            Interest
          </p>
          <h3 style={{ fontSize: ".9rem" }}>
            {Number(lendMarketSetting?.interestApr.numerator)}%
          </h3>
        </div>
        <div>
          <p
            style={{
              marginBottom: "-.5rem",
              color: "#D1D5DB",
              fontSize: ".8rem",
            }}
          >
            Liquidation Fee
          </p>
          <h3 style={{ fontSize: ".9rem" }}>
            {Number(lendMarketSetting?.liquidationPenalty.numerator)}%
          </h3>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Link
          to="/borrow-detail"
          style={{ width: "45%", textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7E3AF2",
              width: "100%",
              borderRadius: ".5rem",
            }}
          >
            Borrow
          </Button>
        </Link>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            width: "45%",
            borderRadius: ".5rem",
          }}
        >
          Learn More
        </Button>
      </Box>
      <img
        style={{
          width: "50%",
          position: "absolute",
          right: 0,
          top: 0,
          opacity: 0.2,
        }}
        src={cardicon}
        alt=""
      />
    </Box>
  );
};

export default Index;
