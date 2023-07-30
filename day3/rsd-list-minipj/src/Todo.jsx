import { createRef, useContext } from "react";
import Header from "./Header";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./ContextProvider";
const Todo = () => {
  const navigate = useNavigate();
  const input = createRef();
  const { data, setData } = useContext(AppContext);
  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const addnew = (name) => {
    let id = data[data.length - 1].id + 1;
    setData([...data, { id, name, status: false }]);
  };
  return (
    <>
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
      <span onClick={() => navigate("../")} style={{ color: "blue" }}>
        &laquo;Go Back
      </span>
    </>
  );
};

export default Todo;
