import React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import metamask from "assets/metamask.svg";
import CancelIcon from "@mui/icons-material/Cancel";

const Index: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Box
      sx={{
        width: "100vw",
        background:
          "linear-gradient(82deg, rgba(5,47,131,1) 62%, rgba(126,58,242,1) 100%)",
        height: desktop ? "100vh" : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          py: 4,
          width: desktop ? "35%" : "90%",
          position: "relative",
          minHeight: "50%",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "white",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          marginY: desktop ? "0px" : "20px",
        }}
      >
        <CancelIcon
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            fontSize: "2rem ",
          }}
        />
        <h1 style={{ marginBottom: 0 }}>Connect wallet to continue</h1>
        <p>
          By connecting your wallet, you agree to our Terms of Service and our
          Privacy Policy.
        </p>
        <Box
          sx={{
            flexDirection: desktop ? "row" : "column",
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: desktop ? 2 : 0,
            flexDirection: desktop ? "row" : "column",
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
          <Box
            sx={{
              py: desktop ? 0 : 2,
              marginBottom: desktop ? 0 : 2,
              width: desktop ? "8rem" : "90%",
              height: desktop ? "8rem" : "auto",
              display: "flex",
              flexDirection: desktop ? "column" : "row",
              alignItems: "center",
              justifyContent: desktop ? "center" : "flex-start",
              pl: desktop ? 0 : 4,
              border: "1px solid grey",
              borderRadius: "1rem",
            }}
          >
            <img
              style={{ width: "3rem", marginRight: desktop ? 0 : "1rem" }}
              src={metamask}
              alt=""
            />
            <p>Metamask</p>
          </Box>
        </Box>

        <p style={{ textDecoration: "underline" }}>New to Ethereum?</p>
      </Box>
    </Box>
  );
};

export default Index;
