import React from "react";
import Item from "./Item";
import Form from "./Form";
import { Box, Container, List } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
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
  );
};

export default Home;
