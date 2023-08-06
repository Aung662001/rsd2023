import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Contact = ({ showDrawer, setShowDrawer, toggleDrawer }) => {
  return (
    <Container>
      <Box sx={{ mx: { lg: 20, md: 10 } }}>
        <Typography variant="h1">Contact Us</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora
          eligendi id sequi dolorum laborum amet non quis animi molestias!
          Deserunt qui ipsa eius ex delectus? Iste provident delectus beatae.
        </Typography>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
