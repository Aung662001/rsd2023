import * as React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Badge, Typography, Toolbar, Box, AppBar, Button } from "@mui/material";
import { ThemeContext } from "./ThemeApp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ButtonAppBar({ count }) {
  const { setMode, mode } = React.useContext(ThemeContext);
  function changeMode() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Badge badgeContent={count} color="error" sx={{ mr: 2 }}>
            <FormatListBulletedIcon />
          </Badge>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
          {mode === "dark" ? (
            <Button color="inherit" onClick={changeMode}>
              <LightModeIcon />
            </Button>
          ) : (
            <Button color="inherit" onClick={changeMode}>
              <DarkModeIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
