import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, subject: "Apple" },
    { id: 2, subject: "Orange" },
    { id: 3, subject: "Mango" },
  ],
};
export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state.tasks);
      const id = state.tasks.length
        ? state.tasks[state.tasks.length - 1].id + 1
        : 1;
      state.tasks = [...state.tasks, { id, subject: action.payload }];
    },
    del: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del } = todoSlice.actions;

export default todoSlice.reducer;
