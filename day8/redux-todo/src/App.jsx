import { useEffect, useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import MainDrawer from "./MainDrawer";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "./features/todo/todoSlice";
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const dispatch = useDispatch();

  const { tasks, loading } = useSelector((state) => state.todo);
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
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <Box sx={{ mx: { lg: 20, md: 10 } }}>
      <MainDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        toggleDrawer={toggleDrawer}
      />
      <Header count={count} toggleDrawer={toggleDrawer} />
      <Outlet />
      {loading && <div style={{ textAlign: "center" }}>Loading...</div>}
    </Box>
  );
};

export default App;
