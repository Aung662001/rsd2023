import React, { useRef } from "react";
import {
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { add } from "./features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const input = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const subject = input.current.value;
        // addTask(subject);
        input.current.value = "";
        input.current.focus();
      }}
    >
      <FormControl fullWidth>
        <OutlinedInput
          inputRef={input}
          endAdornment={
            // <InputAdornment position="start">
            <IconButton
              type="submit"
              onClick={() => dispatch(add(input.current.value))}
            >
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
