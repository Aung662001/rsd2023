import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import User from "./User.jsx";
import Todo from "./Todo.jsx";
import ContextProvider from "./ContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/user/:name", element: <User /> },
      { path: "/todo", element: <Todo /> },
    ],
  },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
