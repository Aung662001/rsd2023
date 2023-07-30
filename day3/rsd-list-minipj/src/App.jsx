// import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Todo from "./Todo";
import { AppContext } from "./ContextProvider";
import { useContext } from "react";
//create context
function App() {
  const { clear, data } = useContext(AppContext);
  return (
    <>
      <div>
        <h1>About</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/todo"}>Todo</Link>
          </li>
          <li>
            User
            <ul>
              <li>
                <Link to={"/user/alice"}>Alice</Link>
              </li>
              <li>
                <Link to={"/user/bob"}>Bob</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr></hr>
      <Outlet />
    </>
  );
}

export default App;
