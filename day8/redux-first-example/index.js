const { createStore } = require("redux");

const store = createStore((state = [], action) => {
  if (action.type == "add") {
    return [...state, action.name];
  }
  if (action.type == "del") {
    return state.filter((item) => item !== action.name);
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "add", name: "Apple" });
store.dispatch({ type: "add", name: "Orange" });
store.dispatch({ type: "add", name: "Mango" });
store.dispatch({ type: "del", name: "Apple" });
