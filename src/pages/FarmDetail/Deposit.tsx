import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Web3Provider as Web3ProviderEthers } from "@ethersproject/providers";
import { useLendingMarketContract, useWETHContract } from "hooks/useContract";
import useApprove, { ApprovalState } from "hooks/useApprove";
import { LENDING_MARKET_ADDRESS, WETH_ADDRESS } from "config/address";
import { useWeb3 } from "state/web3";
import ERC20 from "abi/types/ERC20";
import { Contract, ethers } from "ethers";
import Loading from "components/Loading";

interface IProps {
  // amount: number;
  tokenSymbol?: string;
  accountBalance: number;
}

const Deposit = ({ tokenSymbol, accountBalance }: IProps) => {
  const { account, chainId, provider } = useWeb3();

  const tokenContract = useWETHContract();
  const lendingMarketContract = useLendingMarketContract();
  const token = useMemo(() => {
    if (provider && tokenContract) {
      const signer = provider.getSigner();
      return new ERC20(tokenContract.address, signer, "WETH");
    }
  }, [tokenContract, provider]);
  const [approveStatus, approve] = useApprove(
    token!,
    LENDING_MARKET_ADDRESS[chainId!]
  );

  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const depositToken = async () => {
    if (value <= 0) alert("Deposit value should be > 0");
    else if (lendingMarketContract && account && chainId) {
      try {
        const tx = await lendingMarketContract.deposit(
          WETH_ADDRESS[chainId],
          ethers.utils.parseUnits(value.toString()),
          account
        );
        setLoading(true);
        const receipt = await tx.wait();
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        console.log("err", err);
        alert(err?.data?.message);
      }
    }
  };

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
            Deposit {tokenSymbol}
          </p>
          <InfoIcon />
        </Box>
        <p style={{ color: "#FFFFFF", fontSize: ".8rem" }}>
          Your Balance: {accountBalance} ETH
        </p>
      </Box>
      <TextField
        onChange={(e) => setValue(Number(e.target.value))}
        className="input-borrow"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={value}
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
          <p style={{ fontSize: ".8rem", marginRight: ".5rem" }}>Max Deposit</p>
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
      {approveStatus !== ApprovalState.APPROVED ? (
        <Button
          onClick={approve}
          sx={{
            color: "white",
            height: "3rem",
            width: "80%",
            background: "#7E3AF2",
            marginBottom: "3rem",
          }}
        >
          APPROVE
        </Button>
      ) : (
        <Button
          onClick={() => {
            depositToken();
          }}
          sx={{
            color: "white",
            height: "3rem",
            width: "80%",
            background: "#7E3AF2",
            marginBottom: "3rem",
          }}
        >
          DEPOSIT
        </Button>
      )}
      <Loading isLoading={loading} />
    </Stack>
  );
};

export default Deposit;
