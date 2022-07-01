import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import cardicon from "assets/cardicon.svg";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  icon: string;
  headline: string;
  symbol: string;
}

const Index: React.FC<Props> = ({ icon, headline, symbol }) => {
  const navigate = useNavigate();
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
        py: 4,
        flexDirection: "column",
        background: "linear-gradient(to top, #252A32, #5521B5)",
        borderRadius: "1.5rem",
        width: desktop ? "30%" : "90%",
        marginBottom: desktop ? 0 : "1rem",
        height: "auto",
        zIndex: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src={icon} alt="" />
        <p style={{ marginLeft: "1rem" }}>{headline}</p>
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
          <h3 style={{ fontSize: ".9rem" }}>X%</h3>
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
          <h3 style={{ fontSize: ".9rem" }}>XX.X%</h3>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        {/* <Link to="/borrow-detail" style={{width: "45%", textDecoration: "none"}} > */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7E3AF2",
            width: "45%",
            borderRadius: ".5rem",
          }}
          onClick={() => navigate(`/farm-detail/${symbol}`)}
        >
          Deposit
        </Button>
        {/* </Link> */}
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
