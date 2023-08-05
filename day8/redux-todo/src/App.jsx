import { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Header from "./Header";
import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";
import { useSelector } from "react-redux";
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const tasks = useSelector((state) => state.todo.tasks);
  console.log(tasks);
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
      <Container>
        {/* not a component , for margin and padding  */}

        <h1>React Todo</h1>
        <Form />
        <List>
          {tasks
            .filter((task) => task.done)
            .map((task) => {
              return <Item task={task} key={task.id} />;
            })}
        </List>
        <br />
        <List>
          {tasks
            .filter((task) => !task.done)
            .map((task) => {
              return <Item task={task} key={task.id} />;
            })}
        </List>
      </Container>
    </Box>
  );
};

export default App;
