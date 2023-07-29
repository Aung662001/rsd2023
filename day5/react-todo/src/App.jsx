import { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Header from "./Header";
import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const [tasks, setTasks] = useState([
    { _id: 1, subject: "Milk", done: false },
    { _id: 2, subject: "Banana", done: true },
    { _id: 3, subject: "Mango", done: false },
    { _id: 4, subject: "Egg", done: true },
  ]);
  const clear = () => setTasks(tasks.filter((task) => !task.done));
  const toggleTask = (_id) => {
    setTasks(
      tasks.map((task) => {
        if (task._id === _id) {
          task.done = !task.done;
        }
        return task;
      })
    );
  };
  const deleteTask = (_id) => {
    setTasks(tasks.filter((task) => task._id !== _id));
  };
  const addTask = (subject) => {
    const _id = tasks.length ? tasks[tasks.length - 1]._id + 1 : 0;
    setTasks([...tasks, { _id, subject, done: false }]);
  };
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
      <Header count={count} clear={clear} toggleDrawer={toggleDrawer} />
      <Container>
        {/* not a component , for margin and padding  */}

        <h1>React Todo</h1>
        <Form addTask={addTask} />
        <List>
          {tasks
            .filter((task) => task.done)
            .map((task) => {
              return (
                <Item
                  task={task}
                  key={task._id}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
              );
            })}
        </List>
        <br />
        <List>
          {tasks
            .filter((task) => !task.done)
            .map((task) => {
              return (
                <Item
                  task={task}
                  key={task._id}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
              );
            })}
        </List>
      </Container>
    </Box>
  );
};

export default App;
