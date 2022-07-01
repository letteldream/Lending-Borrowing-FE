import { Box, useMediaQuery, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import borrowbg from "assets/borrowbg.svg";
import BorrowDetailbg from "assets/Frame 363.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { useWETHContract } from "hooks/useContract";
import { useWeb3 } from "state/web3";
import { ethers } from "ethers";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

const Header = React.lazy(() => import("components/Header"));
const Footer = React.lazy(() => import("components/Footer"));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Index: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { symbol } = useParams();
  const { account, provider } = useWeb3();
  // UI variable
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // contract variable
  const [balance, setBalance] = useState(0);

  const tokenContract = useWETHContract();
  useEffect(() => {
    if (account && tokenContract) {
      const getInfo = async () => {
        const _balance = await tokenContract.balanceOf(account);
        setBalance(Number(ethers.utils.formatEther(_balance)));
      };
      getInfo();
    }
  }, [account, tokenContract]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        pb: 10,
        backgroundImage: `url(${borrowbg})`,
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Box sx={{ width: desktop ? "40%" : "90%", mx: "auto" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/farm">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ArrowBackIcon />
            <p style={{ marginLeft: "1rem", textDecoration: "underline" }}>
              Back to Farm
            </p>
          </Box>
        </Link>
        <Box
          className="FarmDetail"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            py: 2,
            borderRadius: "2rem",
            backgroundSize: "cover",
          }}
        >
          <h1>{symbol} Farming</h1>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={
                  <Typography color="white" fontWeight={700} fontSize={20}>
                    Deposit
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <Typography color="white" fontWeight={700} fontSize={20}>
                    Withdraw
                  </Typography>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          {/* Deposit */}
          <Box display={value === 1 ? "none" : "flex"} sx={{ width: "100%" }}>
            {tokenContract && provider && (
              <Deposit
                // tokenContract={tokenContract}
                // provider={provider}

                tokenSymbol={symbol}
                accountBalance={balance}
              />
            )}
          </Box>
          {/* Withdraw */}
          <Box display={value === 0 ? "none" : "flex"} sx={{ width: "100%" }}>
            <Withdraw tokenSymbol={symbol!} accountBalance={balance} />
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            justifyContent: "center",
            textAlign: desktop ? "start" : "center",
            display: "flex",
            flexDirection: desktop ? "row" : "column",
            alignItems: "center",
            width: "100%",
            background: "#252931",
            py: 2,
            marginTop: 2,
            borderRadius: "2rem",
          }}
        >
          <Box>
            <p style={{ color: "#D1D5DB", fontSize: ".8rem" }}>TVL</p>
            <p>XXX.XX</p>
          </Box>
          <span
            style={{
              height: desktop ? "4rem" : "1px",
              width: desktop ? "1px" : "80%",
              background: "white",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />
          <Box>
            <p style={{ color: "#D1D5DB", fontSize: ".8rem" }}>
              Airusd Rborrow Limit
            </p>
            <p>$ XX,XXX,XX</p>
          </Box>
          <span
            style={{
              height: desktop ? "4rem" : "1px",
              width: desktop ? "1px" : "80%",
              background: "white",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />
          <Box>
            <p style={{ color: "#D1D5DB", fontSize: ".8rem" }}>Airusd Left</p>
            <p>XX.XXK</p>
          </Box>
          <span
            style={{
              height: desktop ? "4rem" : "1px",
              width: desktop ? "1px" : "80%",
              background: "white",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />

          <Box>
            <p style={{ color: "#D1D5DB", fontSize: ".8rem" }}>Interest</p>
            <p>X%</p>
          </Box>
          <span
            style={{
              height: desktop ? "4rem" : "1px",
              width: desktop ? "1px" : "80%",
              background: "white",
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
            }}
          />
          <Box>
            <p style={{ color: "#D1D5DB", fontSize: ".8rem" }}>
              Liquidation Fee
            </p>
            <p>XX.X%</p>
          </Box>
        </Box>
        <Box sx={{ display: desktop ? "none" : "block", marginTop: "4rem" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
