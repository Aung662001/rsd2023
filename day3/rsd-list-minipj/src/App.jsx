import { createRef, useState } from "react";
import "./App.css";
import Item from "./Item";
import Header from "./Header";
import { createContext } from "react";

//create context
export const AppContext = createContext();
function App() {
  const input = createRef();
  const [data, setData] = useState([
    { id: 1, name: "Aung", status: false },
    { id: 2, name: "Maung", status: false },
    { id: 3, name: "Kaung", status: false },
  ]);
  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const addnew = (name) => {
    let id = data[data.length - 1].id + 1;
    setData([...data, { id, name, status: false }]);
  };
  function clear() {
    setData([]);
  }
  return (
    <AppContext.Provider value={clear}>
      <Header />
      <ol>
        {data.map((item) => {
          return <Item user={item} remove={remove} key={item.id} />;
        })}
      </ol>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input.current.value);
          addnew(input.current.value);
          input.current.value = "";
          input.current.focus();
        }}
      >
        <input type="text" placeholder="Add new list..." ref={input}></input>
        <button type="submit">Add</button>
      </form>
    </AppContext.Provider>
  );
}

export default App;
