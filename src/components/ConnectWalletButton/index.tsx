import "./index.css";
import { IconButton, Button, Typography, Box } from "@mui/material";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useModalOpen, useWalletModalToggle } from "state/application/hooks";
import { ApplicationModal } from "state/application/reducer";
import WalletLink from "walletlink";
import { useWeb3 } from "state/web3";
import Web3Modal from "web3modal";
import { SupportedChainId } from "config/address";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import close from "assets/close.svg";

import metamask from "assets/metamask.svg";
import { shortenAddress } from "utils";

const INFURA_ID = "e67a2556dede4ff2b521a375a1905f8b";

const web3Modal = new Web3Modal({
  disableInjectedProvider: true,
  network: "mainnet",
  cacheProvider: true,
  providerOptions: {
    "custom-metamask": {
      display: {
        name: "MetaMask",
        description: "Connect to your MetaMask Wallet",
        logo: "https://duckduckgo.com/i/b08b6e4c.png",
      },
      package: true,
      connector: async () => {
        if ((window as any).ethereum === undefined) {
          (window as any).open(
            "https://metamask.app.link/dapp/www.ethbox.org/app/",
            "_blank"
          );
          return;
        } else if ((window as any).ethereum.providers !== undefined) {
          const providers = (window as any).ethereum.providers;
          const provider = providers.find((p: any) => p.isMetaMask); // <-- LOOK HERE
          if (provider) {
            try {
              await provider.request({ method: "eth_requestAccounts" });
              return provider;
            } catch (error) {
              throw new Error("User Rejected");
            }
          } else {
            (window as any).open(
              "https://metamask.app.link/dapp/www.ethbox.org/app/",
              "_blank"
            );
            return;
          }
        } else if (
          (window as any).ethereum.providers === undefined &&
          (window as any).ethereum.isMetaMask === true
        ) {
          const provider = (window as any).ethereum;
          try {
            await provider.request({ method: "eth_requestAccounts" });
            return provider;
          } catch (error) {
            throw new Error("User Rejected");
          }
        } else {
          window.open(
            "https://metamask.app.link/dapp/www.ethbox.org/app/",
            "_blank"
          );
          return;
        }
      },
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
    "custom-walletlink": {
      display: {
        logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
        name: "Coinbase",
        description: "Connect to Coinbase Wallet (not Coinbase App)",
      },
      options: {
        appName: "Coinbase", // Your app name
        networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
        chainId: 1,
      },
      package: WalletLink,
      connector: async (_: any, options: any) => {
        const { appName, networkUrl, chainId } = options;
        const walletLink = new WalletLink({ appName });
        const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
        await provider.enable();
        return provider;
      },
    },
  },
  theme: {
    background: "#1E1E1E",
    main: "rgb(199, 199, 199)",
    secondary: "rgb(136, 136, 136)",
    border: "rgba(195, 195, 195, 0.14)",
    hover: "rgb(16, 26, 32)",
  },
});

export default function ConnectWalletButton() {
  const { account, chainId, instance, dispatch: web3Dispatch } = useWeb3();

  const toggleWalletModal = useWalletModalToggle();
  const isWalletModalOpen = useModalOpen(ApplicationModal.WALLET);

  const connect = useCallback(async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      const chainId = await signer.getChainId();
      if (web3Dispatch) {
        web3Dispatch({
          type: "SET_WEB3",
          instance,
          provider,
          account,
          chainId,
        });
      }
    } catch (err) {
      console.log(err);
    }
    if (isWalletModalOpen) {
      toggleWalletModal();
    }
  }, [web3Dispatch, toggleWalletModal, isWalletModalOpen]);

  const switchRequest = () => {
    if (window.ethereum)
      return window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SupportedChainId.HEX_TESTNET }],
      });
  };

  const swithNetwork = async () => {
    if (window.ethereum) {
      try {
        await switchRequest();
      } catch (error: any) {
        if (error.code === 4902) {
          try {
            await switchRequest();
          } catch (addError) {
            console.log(error);
          }
        }
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (chainId !== SupportedChainId.MAINNET) {
      swithNetwork();
    }
    if (web3Modal.cachedProvider) {
      toggleWalletModal();
    }
  }, []);

  useEffect(() => {
    if (isWalletModalOpen) {
      connect();
    }
  }, [connect, isWalletModalOpen]);

  useEffect(() => {
    if (instance?.on && web3Dispatch) {
      instance.on("chainChanged", (_hexChainId: string) => {
        const newChainId = parseInt(_hexChainId, 16);
        if (newChainId !== SupportedChainId.MAINNET) {
          swithNetwork();
        }
        web3Dispatch({ type: "SET_CHAINID", chainId: newChainId });
      });
      instance.on(
        "disconnect",
        async (error: { code: number; message: string }) => {
          await web3Modal.clearCachedProvider();
          if (
            instance?.disconnect &&
            typeof instance.disconnect === "function"
          ) {
            await instance.disconnect();
          }
          if (web3Dispatch) {
            web3Dispatch({ type: "RESET_WEB3" });
          }
        }
      );
      instance.on("accountsChanged", async (accounts: string[]) => {
        if (accounts.length > 0) {
          web3Dispatch({ type: "SET_ACCOUNT", account: accounts[0] });
        } else {
          await web3Modal.clearCachedProvider();
          if (
            instance?.disconnect &&
            typeof instance.disconnect === "function"
          ) {
            await instance.disconnect();
          }
          if (web3Dispatch) {
            web3Dispatch({ type: "RESET_WEB3" });
          }
        }
      });
    }
  }, [instance, web3Dispatch]);

  const disconnect = useCallback(async () => {
    await web3Modal.clearCachedProvider();
    if (instance?.disconnect && typeof instance.disconnect === "function") {
      await instance.disconnect();
    }
    if (web3Dispatch) {
      web3Dispatch({ type: "RESET_WEB3" });
    }
  }, [instance, web3Dispatch]);

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open2 = anchorE2 === null ? false : true;
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  return account && instance ? (
    <>
      <Box
        onClick={(e) => handleClick2(e)}
        sx={{
          overflowY: "hidden",
          borderRadius: ".3rem",
          background: "#252931",
          px: 1,
          height: "2.3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={metamask} alt="" />
        <p style={{ marginLeft: ".5rem", color: "#9CA3AF" }}>
          {shortenAddress(account)}
        </p>
        <KeyboardArrowDownIcon htmlColor="#9CA3AF" />
      </Box>
      <Menu anchorEl={anchorE2} open={open2} onClose={() => handleClose2()}>
        <MenuItem style={{ background: "#252931" }} onClick={disconnect}>
          <img style={{ marginRight: ".5rem" }} src={close} alt="" />
          Disconnect Wallet
        </MenuItem>
      </Menu>
    </>
  ) : (
    <Box
      onClick={toggleWalletModal}
      sx={{
        overflowY: "hidden",
        borderRadius: ".3rem",
        height: "2.3rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#7E3AF2",
          borderRadius: ".5rem",
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
}
