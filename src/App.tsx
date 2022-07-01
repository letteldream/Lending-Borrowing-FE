import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.css";
import { useIsLoading } from "state/application/hooks";
import Loading from "components/Loading";

function App() {
  const isLoading = useIsLoading();

  return (
    <BrowserRouter>
      <Box>
        <CssBaseline />
        <Routes />
      </Box>
      <Loading isLoading={isLoading} />
    </BrowserRouter>
  );
}

export default App;
