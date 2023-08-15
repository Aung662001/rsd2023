import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { del, toggleDone } from "./features/todo/todoSlice";
const Item = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemIcon>
        <IconButton onClick={() => dispatch(toggleDone(task._id))}>
          {task.done ? (
            <Checkbox edge="start" checked={true} tabIndex={-1} disableRipple />
          ) : (
            <Checkbox edge="start" checked={false} tabIndex={-1} />
          )}
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={task.subject} />
      <ListItemIcon>
        <IconButton onClick={() => dispatch(del(task._id))}>
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default Item;
