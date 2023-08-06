import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, subject: "Milk", done: false },
    { id: 2, subject: "Banana", done: true },
    { id: 3, subject: "Mango", done: false },
    { id: 4, subject: "Egg", done: true },
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
      state.tasks = [
        ...state.tasks,
        { id, subject: action.payload, done: false },
      ];
    },
    del: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    toggleDone: (state, action) => {
      state.tasks.map((item) => {
        if (item.id === action.payload) {
          return (item.done = !item.done);
        }
      });
    },
    clear: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.done !== true);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del, toggleDone, clear } = todoSlice.actions;

export default todoSlice.reducer;
