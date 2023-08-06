import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeApp from "./ThemeApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import { store } from "../src/app/store.js";
import { Provider } from "react-redux";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeApp />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
