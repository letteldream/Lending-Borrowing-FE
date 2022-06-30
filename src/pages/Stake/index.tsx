import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import React, { lazy } from "react";
import linearbg from "assets/linearbg.svg";
import eth from "assets/eth.svg";
import cardicon from "assets/cardicon.svg";
import ethfilled from "assets/ethfilled.svg";
import stheth from "assets/stheth.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RepeatIcon from "@mui/icons-material/Repeat";
import InfoIcon from "@mui/icons-material/Info";

const Header = lazy(() => import("components/Header"));
const Footer = lazy(() => import("components/Footer"));
const Card = lazy(() => import("components/TokenCard"));

const Index: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box sx={{ background: "#1D1F22", minHeight: "100vh", width: "100vw" }}>
      <Header />
      <Box sx={{ width: desktop ? "80%" : "100%", mx: "auto" }}>
        <Box sx={{ paddingX: "30px" }}>
          <h1 style={{ marginLeft: "1rem", fontWeight: "bold" }}>Stake</h1>
          <p style={{ marginLeft: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Box>
        <Box
          sx={{
            zIndex: 1,
            width: "100%",
            justifyContent: "space-between",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            alignItems: "center",
            backgroundImage: desktop ? "none" : `url(${linearbg})`,
            display: "flex",
            flexDirection: "column",
            py: desktop ? 0 : 2,
            mt: 3,
          }}
        >
          <Box
            sx={{
              zIndex: 2,
              width: "90%",
              display: "flex",
              flexDirection: desktop ? "row" : "column",
              alignItems: "center",
              position: "relative",
              height: desktop ? "7rem" : "auto",
              borderRadius: "1rem",
              px: 4,
              py: desktop ? 0 : 4,
              background:
                "linear-gradient(82deg, rgba(37,41,49,1) 62%, rgba(126,58,242,1) 100%)",
            }}
          >
            <img
              src={cardicon}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "5rem",
                opacity: 0.2,
              }}
              alt=""
            />
            <TextField
              value={1}
              type="number"
              sx={{ width: desktop ? "15%" : "90%", borderRadius: ".5rem" }}
              className="input-borrow"
            />
            <Box
              sx={{
                display: "flex",
                width: desktop ? "auto" : "90%",
                alignItems: "center",
                ml: desktop ? 2 : 0,
                mt: desktop ? 0 : 2,
                px: 2,
                height: "3.7rem",
                borderRadius: ".5rem",
              }}
              className="input-borrow"
            >
              <img src={ethfilled} alt="" />
              <p style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                wEthereum (wETH)
              </p>
              <KeyboardArrowDownIcon />
            </Box>
            <RepeatIcon
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginTop: desktop ? 0 : "1rem",
                marginBottom: desktop ? 0 : "1rem",
              }}
            />
            <TextField
              value={1}
              type="number"
              sx={{ width: desktop ? "15%" : "90%", borderRadius: ".5rem" }}
              className="input-borrow"
            />
            <Box
              sx={{
                display: "flex",
                width: desktop ? "auto" : "90%",
                alignItems: "center",
                ml: desktop ? 2 : 0,
                mt: desktop ? 0 : 2,
                mb: desktop ? 0 : 2,
                px: 2,
                height: "3.7rem",
                borderRadius: ".5rem",
              }}
              className="input-borrow"
            >
              <img src={stheth} alt="" />
              <p style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                stEthereum (stETH)
              </p>
              <KeyboardArrowDownIcon />
            </Box>
            <Button
              sx={{
                background: "#7E3AF2",
                height: "2.5rem",
                marginLeft: desktop ? "2rem" : 0,
                width: desktop ? "6rem" : "90%",
                color: "white",
              }}
            >
              Apply
            </Button>
          </Box>
          <Box
            sx={{
              //   display: desktop ? "none" : "block",
              width: "90%",
              marginTop: "3rem",
              zIndex: 2,
              px: 4,
              py: 5,
              borderRadius: "1rem",
              minHeight: "20rem",
              background: "#252931",
              position: "relative",
              bottom: 10,
            }}
          >
            {/* <Box> */}
            <h3>Balance</h3>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                Lore ipsum lorem ipsum
              </p>
              <InfoIcon />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                lorem ipsum
              </p>
              <Box>
                <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                  0.00000
                </p>
                <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                  0.00000
                </p>
              </Box>
            </Box>
            <Box sx={{ width: "100%", background: "grey", fontSize: ".1rem" }}>
              a
            </Box>
            <h3>Staked</h3>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                Lore ipsum lorem ipsum
              </p>
              <InfoIcon />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                lorem ipsum
              </p>
              <Box>
                <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                  0.00000
                </p>
                <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                  0.00000
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
                Approximate staking APR
              </p>
              {/* <Box> */}
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
              {/* <p style={{fontSize: ".8rem", marginRight: "1rem"}} >0.00000</p> */}
              {/* </Box> */}
            </Box>
            <Box sx={{ widht: "100%", textAlign: "center", p: 2 }}>
              <Button
                sx={{ width: "90%", background: "#7E3AF2", color: "white" }}
              >
                Collect Rewards
              </Button>
            </Box>

            {/* </Box> */}
          </Box>
          <Box sx={{ display: desktop ? "none" : "block", marginTop: "4rem" }}>
            <Footer />
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: desktop ? "block" : "none",
            width: "100%",
            marginTop: "3rem",
            zIndex: 22,
            px: 4,
            py: 2,
            borderRadius: "1rem",
            minHeight: "20rem",
            background: "#252931",
            position: "relative",
            bottom: 10,
          }}
        >
          
          <h3>Balance</h3>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
              Lore ipsum lorem ipsum
            </p>
            <InfoIcon />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
              lorem ipsum
            </p>
            <Box>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
            </Box>
          </Box>
          <Box sx={{ width: "100%", background: "grey", fontSize: ".1rem" }}>
            a
          </Box>
          <h3>Staked</h3>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
              Lore ipsum lorem ipsum
            </p>
            <InfoIcon />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
              lorem ipsum
            </p>
            <Box>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
              <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>
              Approximate staking APR
            </p>
            
            <p style={{ fontSize: ".8rem", marginRight: "1rem" }}>0.00000</p>
            
          </Box>

          <Button sx={{ width: "100%", background: "#7E3AF2", color: "white" }}>
            Collect Rewards
          </Button>

          
        </Box> */}
      </Box>
      <Box
        sx={{
          height: "100%",
          position: "absolute",
          bottom: "-40%",
          left: 0,
          zIndex: 1,
          display: desktop ? "block" : "none",
          width: "100vw",
          backgroundImage: `url(${linearbg})`,
          backgroundSize: "cover",
          // border: "1px solid #E8E8E8",
          backdropFilter: "blur(40px)",
          // borderRadius: "48px"
        }}
      />
    </Box>
  );
};

export default Index;
