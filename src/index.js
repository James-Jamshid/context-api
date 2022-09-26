import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./Root";
import Mode from "./components/Context";
import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Mode>
      <HomePage />
    </Mode>
  </React.StrictMode>
);
