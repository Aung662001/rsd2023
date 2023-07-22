import React, { useRef } from "react";

const Form = ({ addTask }) => {
  const input = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const subject = input.current.value;
        addTask(subject);
        input.current.value = "";
        input.focus();
      }}
    >
      <input type="text" placeholder="Add new task" ref={input}></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
