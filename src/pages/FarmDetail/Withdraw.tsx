import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

interface IProps {
  
  tokenSymbol?: string;
  accountBalance: number;
}

const Withdraw = ({ tokenSymbol, accountBalance }: IProps) => {
  return (
    <Stack direction="column" sx={{ width: "100%" }} alignItems="center">
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
            Withdraw {tokenSymbol}
          </p>
          <InfoIcon />
        </Box>
        <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>
          Your Balance: {accountBalance} ETH
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
      ></span>

      <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>Max Withdraw</p>
        </Box>
        <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>
          {accountBalance}ETH
        </p>
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
              marginBottom: 0,
            }}
          >
            X wETH
          </p>
          <p style={{ fontSize: ".8rem" }}>Est. Network Fee: X ETH</p>
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
        Withdraw
      </Button>
    </Stack>
  );
};

export default Withdraw;
