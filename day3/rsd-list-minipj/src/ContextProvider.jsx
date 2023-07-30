import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
const ContextProvider = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Aung", status: false },
    { id: 2, name: "Maung", status: false },
    { id: 3, name: "Kaung", status: false },
  ]);
  function clear() {
    console.log("clear");
    setData([]);
  }
  return (
    <AppContext.Provider value={{ data, clear, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
