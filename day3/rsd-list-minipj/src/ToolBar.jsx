import { useContext } from "react";
import { AppContext } from "./App";

const ToolBar = () => {
  const { clear } = useContext(AppContext);
  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default ToolBar;
