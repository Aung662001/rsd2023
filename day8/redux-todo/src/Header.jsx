import { useState, useContext } from "react";
import {
  Badge,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Fade,
} from "@mui/material";
import { ThemeContext } from "./ThemeApp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion } from "framer-motion";
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { clear } from "../src/features/todo/todoSlice";
import { useLocation } from "react-router-dom";
export default function Header({ count, toggleDrawer }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { setMode, mode } = useContext(ThemeContext);

  function changeMode() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  const [openMenu, setOpenMenu] = useState();
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Badge badgeContent={count} color="error" sx={{ mr: 2 }}>
              <Typography variant="h6" component="div">
                Todos
              </Typography>
            </Badge>
          </Box>
          {mode === "dark" ? (
            <Button color="inherit" onClick={changeMode}>
              <motion.div
                whileTap={{ rotate: [0, 90, 180], opacity: [1] }}
                transition={{ duration: 0.3 }}
              >
                <LightModeIcon />
              </motion.div>
            </Button>
          ) : (
            <Button color="inherit" onClick={changeMode}>
              <motion.div
                whileTap={{ rotate: [0, 360], opacity: [1] }}
                transition={{ duration: 0.3 }}
              >
                <DarkModeIcon />
              </motion.div>
            </Button>
          )}
          {pathname === "/" && (
            <Box>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={openMenu}
                open={Boolean(openMenu)}
                onClose={() => setOpenMenu(false)}
                TransitionComponent={Fade}
              >
                <MenuItem
                  onClick={() => {
                    setOpenMenu(null);
                    // clear();
                    dispatch(clear());
                  }}
                >
                  Clear
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
