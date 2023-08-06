import { useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import MainDrawer from "./MainDrawer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const tasks = useSelector((state) => state.todo.tasks);
  let count = tasks.filter((task) => task.done === false).length;
  //for sidebar open and close
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowDrawer(!showDrawer);
  };
  return (
    <Box sx={{ mx: { lg: 20, md: 10 } }}>
      <MainDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        toggleDrawer={toggleDrawer}
      />
      <Header count={count} toggleDrawer={toggleDrawer} />
      <Outlet />
    </Box>
  );
};

export default App;
