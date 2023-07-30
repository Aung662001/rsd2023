import { useContext } from "react";
import { AppContext } from "./ContextProvider";

const ToolBar = () => {
  const { clear } = useContext(AppContext);
  console.log(typeof useContext(AppContext));
  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default ToolBar;
