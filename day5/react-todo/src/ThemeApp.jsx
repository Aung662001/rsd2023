import React, { createContext, useState } from "react";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

const ThemeApp = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeApp;
