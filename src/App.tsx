import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <CssBaseline />
        <Routes />
      </Box>
    </BrowserRouter>
  );
}

export default App;
