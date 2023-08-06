import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const MainDrawer = ({ showDrawer, setShowDrawer, toggleDrawer }) => {
  return (
    <div>
      <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer()}>
        <Box sx={{ width: 400 }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                height: 260,
                background: "pink",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Avatar sx={{ width: 98, height: 98, ml: 3, mb: -5 }}>A</Avatar>
            </Box>

            <ListItem sx={{ marginTop: 8 }}>
              <Link to="/" onClick={toggleDrawer()}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                    <ListItemText primary="Home" />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/about" onClick={toggleDrawer()}>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                    <ListItemText primary="About" />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/contact" onClick={toggleDrawer()}>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                    <ListItemText primary="Contact" />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default MainDrawer;
