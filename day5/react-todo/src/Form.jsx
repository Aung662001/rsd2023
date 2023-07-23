import React, { useRef } from "react";
import {
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const Form = ({ addTask }) => {
  const input = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const subject = input.current.value;
        addTask(subject);
        input.current.value = "";
        input.current.focus();
      }}
    >
      <FormControl fullWidth>
        <OutlinedInput
          inputRef={input}
          endAdornment={
            // <InputAdornment position="start">
            <IconButton type="submit">
              <AddIcon />
            </IconButton>
            // </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
    </form>
  );
};

export default Form;
