import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeApp from "./ThemeApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import { store } from "../src/app/store.js";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  { path: "/", element: <ThemeApp /> },
  { path: "/about", element: <About /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
