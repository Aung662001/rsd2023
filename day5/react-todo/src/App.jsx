import { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Header from "./Header";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [tasks, setTasks] = useState([
    { _id: 1, subject: "Milk", done: false },
    { _id: 2, subject: "Banana", done: true },
    { _id: 3, subject: "Mango", done: false },
    { _id: 4, subject: "Egg", done: true },
  ]);
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
  return (
    <div>
      <Header />
      <Container>
        <CssBaseline />
        {/* not a component , for margin and padding  */}

        <h1>React Todo</h1>
        <Form addTask={addTask} />
        <ul>
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
        </ul>
        <br />
        <ul>
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
        </ul>
      </Container>
    </div>
  );
};

export default App;
