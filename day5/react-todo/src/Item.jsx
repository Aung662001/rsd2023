import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = ({ task, deleteTask, toggleTask }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <IconButton onClick={() => toggleTask(task._id)}>
          {task.done ? (
            <Checkbox edge="start" checked={true} tabIndex={-1} disableRipple />
          ) : (
            <Checkbox edge="start" checked={false} tabIndex={-1} />
          )}
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={task.subject} />
      <ListItemIcon>
        <IconButton onClick={() => deleteTask(task._id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default Item;
