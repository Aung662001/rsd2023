import React from "react";
import { Drawer, Box } from "@mui/material";
const MainDrawer = ({ showDrawer, setShowDrawer, toggleDrawer }) => {
  return (
    <div>
      <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer()}>
        <Box sx={{ width: 400 }}></Box>
      </Drawer>
    </div>
  );
};

export default MainDrawer;
