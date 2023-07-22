const Item = ({ task, deleteTask, toggleTask }) => {
  return (
    <li>
      <a href="#/" onClick={() => toggleTask(task._id)}>
        {task.done ? "Undo" : "Done"}
      </a>
      {task.subject}
      <a
        href="#/"
        onClick={() => {
          deleteTask(task._id);
        }}
      >
        Delete
      </a>
    </li>
  );
};

export default Item;
