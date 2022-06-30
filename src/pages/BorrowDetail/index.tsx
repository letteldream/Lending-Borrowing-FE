import { Box, Button, Divider, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import borrowbg from "assets/borrowbg.svg";
import BorrowDetailbg from "assets/Frame 363.png";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Header = React.lazy(() => import("components/Header"));
const Footer = React.lazy(() => import("components/Footer"));

const Index: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

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
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/borrow"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ArrowBackIcon />
            <p style={{ marginLeft: "1rem", textDecoration: "underline" }}>
              Back to borrow
            </p>
          </Box>
        </Link>
        <Box
          className="BorrowDetail"
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
          <h1>wETH Borrow</h1>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>
                Deposit wETH
              </p>
              <InfoIcon />
            </Box>
            <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>
              Your Balance: x.xxxxETH
            </p>
          </Box>
          <TextField
            className="input-borrow"
            type="number"
            value={0}
            variant="outlined"
            sx={{ width: "80%", outline: "#4B5563", borderRadius: "1rem" }}
          />
          <span
            style={{
              width: "80%",
              height: "1px",
              background: "#9CA3AF",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            asdads
          </span>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>
                Borrow VST
              </p>
              <InfoIcon />
            </Box>
            {/* <p style={{color: "#FFFFFF", fontSize: ".8rem"}} >Your Balance: x.xxxxETH</p> */}
          </Box>
          <TextField
            className="input-borrow"
            type="number"
            value={0}
            variant="outlined"
            sx={{ width: "80%", outline: "#4B5563", borderRadius: "1rem" }}
          />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>
                Max Borrow
              </p>
              {/* <InfoIcon/> */}
            </Box>
            <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>X VST</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>You will get</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: ".8rem",
                  marginRight: ".5rem",
                  marginBottom: 0,
                }}
              >
                X wETH
              </p>
              <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>
                Est. Network Fee: X ETH
              </p>
            </Box>
          </Box>
          <Button
            sx={{
              color: "white",
              height: "3rem",
              width: "80%",
              background: "#7E3AF2",
              marginBottom: "3rem",
            }}
          >
            Get wETH
          </Button>
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
