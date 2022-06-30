import React from "react";
import Box from "@mui/material/Box";
import logo from "assets/airalogo.svg";
import metamask from "assets/metamask.svg";
import iconmob from "assets/iconmob.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import close from "assets/close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ConnectWalletButton from "components/ConnectWalletButton";

const Index: React.FC = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  // const open2 = Boolean(anchorE2);
  // const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorE2(event.currentTarget);
  // };
  // const handleClose2 = () => {
  //   setAnchorE2(null);
  // };

  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const desktop = useMediaQuery("(min-width: 1024px)");
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "15vh",
        background: "transparent",
        alignItems: "center",
        px: 8,
        justifyContent: "space-between",
      }}
    >
      <img
        style={{
          height: desktop ? "4rem" : "2rem",
          width: desktop ? "4rem" : "2rem",
        }}
        src={desktop ? logo : iconmob}
        alt=""
      />
      <Box sx={{ display: desktop ? "flex" : "none" }}>
        <Link to="/borrow" style={{ textDecoration: "none", color: "white" }}>
          <p
            style={{
              marginRight: "1rem",
              fontWeight: location.pathname === "/borrow" ? "bold" : "normal",
              textDecoration:
                location.pathname === "/borrow" ? "underline" : "none",
            }}
          >
            Borrow
          </p>
        </Link>
        <Link to="/farm" style={{ textDecoration: "none", color: "white" }}>
          <p
            style={{
              marginRight: "1rem",
              fontWeight: location.pathname === "/farm" ? "bold" : "normal",
              textDecoration:
                location.pathname === "/farm" ? "underline" : "none",
            }}
          >
            Farm
          </p>
        </Link>
        <Link to="/stake" style={{ textDecoration: "none", color: "white" }}>
          <p
            style={{
              marginRight: "1rem",
              fontWeight: location.pathname === "/stake" ? "bold" : "normal",
              textDecoration:
                location.pathname === "/stake" ? "underline" : "none",
            }}
          >
            Stake
          </p>
        </Link>
        <p style={{ marginRight: "1rem" }}>Vaults</p>
        <p
          onClick={handleClick}
          style={{ display: "flex", alignItems: "center" }}
        >
          More
          <KeyboardArrowDownIcon />
        </p>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            style={{ background: "#252931", borderBottom: "1px solid grey" }}
          >
            Our Docs
          </MenuItem>
          <MenuItem style={{ background: "#252931" }}>Link</MenuItem>
        </Menu>
        {/* <Menu anchorEl={anchorE2} open={open2} onClose={handleClose2}>
          <MenuItem style={{ background: "#252931" }}>
            <img style={{ marginRight: ".5rem" }} src={close} alt="" />
            Disconnect Wallet
          </MenuItem>
        </Menu> */}
      </Box>
      <ConnectWalletButton />
      {/* <Box
        onClick={handleClick2}
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
        <p style={{ marginLeft: ".5rem", color: "#9CA3AF" }}>0x84a...F9CV4</p>
        <KeyboardArrowDownIcon htmlColor="#9CA3AF" />
      </Box> */}
      <MenuIcon
        onClick={() => setDrawerOpen(true)}
        style={{ display: desktop ? "none" : "block" }}
      />
      <Drawer
        PaperProps={{
          sx: {
            width: "100vw",
            background: "#1D1F22",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            width: "100%",
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", height: "15vh", alignItems: "center" }}>
            <img style={{ marginRight: "1rem" }} src={iconmob} alt="" />
            <h1>Aira Protocol</h1>
          </Box>
          <CancelIcon onClick={handleDrawerClose} />
        </Box>
        <Box px={4}>
          <h1 onClick={() => navigate("/borrow")}>Borrow</h1>
          <h1 onClick={() => navigate("/farm")}>Farm</h1>
          <h1 onClick={() => navigate("/stake")}>Stake</h1>
          <h1 onClick={() => navigate("/")}>Vaults</h1>
          <h1 onClick={() => navigate("/")}>Docs</h1>
        </Box>
        <Box px={4} sx={{ borderTop: "1px solid grey" }}>
          <p>© 2021, Aira Protocol. All Rights Reserved.</p>
          <p>Privacy Policy • Terms and conditions</p>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Index;
