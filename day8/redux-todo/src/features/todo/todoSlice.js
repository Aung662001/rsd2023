import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:4000/tasks";

export const fetchTasks = createAsyncThunk("tasksGetAll", async () => {
  const response = await fetch(url);
  return await response.json();
});
export const addTasks = createAsyncThunk("postNewTask", async (subject) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ subject }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});

const initialState = {
  tasks: [],
  loading: false,
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
      fetch(`${url}/${action.payload}`, {
        method: "DELETE",
        body: JSON.stringify({ ...action.payload }),
      });
      state.tasks = state.tasks.filter((item) => item._id !== action.payload);
    },
    toggleDone: (state, action) => {
      fetch(`${url}/${action.payload}/toggle`, {
        method: "PUT",
      });
      state.tasks.map((item) => {
        if (item._id === action.payload) {
          return (item.done = !item.done);
        }
      });
    },
    clear: (state, action) => {
      fetch(`${url}`, {
        method: "DELETE",
      });
      state.tasks = state.tasks.filter((item) => item.done !== true);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTasks.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { add, del, toggleDone, clear } = todoSlice.actions;

export default todoSlice.reducer;
