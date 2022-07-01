import { Box, useMediaQuery } from "@mui/material";
import React, { lazy } from "react";
import linearbg from "assets/linearbg.svg";
import eth from "assets/eth.svg";
import { PoolList } from "config/poolList";

const Header = lazy(() => import("components/Header"));
const Footer = lazy(() => import("components/Footer"));
const Card = lazy(() => import("components/BorrowCard"));

const Index: React.FC = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box sx={{ background: "#1D1F22", minHeight: "100vh", width: "100vw" }}>
      <Header />
      <Box sx={{ width: desktop ? "80%" : "100%", mx: "auto" }}>
        <h1 style={{ marginLeft: "1rem", fontWeight: "bold" }}>
          Borrowed Tokens
        </h1>
        <p style={{ marginLeft: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <Box
          sx={{
            // zIndex: 22,
            width: "100%",
            justifyContent: "space-between",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            alignItems: "center",
            backgroundImage: desktop ? "none" : `url(${linearbg})`,
            display: "flex",
            flexDirection: desktop ? "row" : "column",
            py: desktop ? 0 : 2,
          }}
        >
          {PoolList.map((item, index) => (
            <Card
              icon={eth}
              headline={item.name}
              symbol={item.symbol}
              key={index}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          height: "60%",
          position: "absolute",
          bottom: 0,
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
