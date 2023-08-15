import { useState, useEffect } from "react";
import Item from "./Item";
import Form from "./Form";
import Header from "./Header";
import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";
const URL = "http://localhost:4000/tasks";
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      setTasks(data);
      setIsLoading(false);
    } else {
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [tasks, setTasks] = useState([]);
  const clear = async () => {
    const res = await fetch(URL, {
      method: "DELETE",
    });
    if (res.ok) {
      setTasks(tasks.filter((task) => !task.done));
    }
  };
  const toggleTask = async (_id) => {
    //fetch endpoint
    const res = await fetch(`${URL}/${_id}/toggle`, {
      method: "PUT",
    });
    //
    if (res.ok) {
      setTasks(
        tasks.map((task) => {
          if (task._id === _id) {
            task.done = !task.done;
          }
          return task;
        })
      );
    }
  };
  const deleteTask = async (_id) => {
    const res = await fetch(`${URL}/${_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setTasks(tasks.filter((task) => task._id !== _id));
    }
  };
  const addTask = async (subject) => {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ subject }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setTasks([...tasks, { ...data }]);
    }
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
      <Container sx={{ marginBottom: 5 }}>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {/* not a component , for margin and padding  */}

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
