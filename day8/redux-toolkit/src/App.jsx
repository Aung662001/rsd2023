import { useDispatch, useSelector } from "react-redux";
import { add, del } from "./features/todo/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  console.log(tasks);
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => dispatch(add("Milk"))}>Add</button>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.subject}
              &nbsp; &nbsp;
              <button onClick={() => dispatch(del(task.id))}>del</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
