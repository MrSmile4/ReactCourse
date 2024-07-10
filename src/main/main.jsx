import ReactDOM from "react-dom/client";
import React from "react";
import ScrollProgressBar from "../components/scroll-progress-bar/scroll-progress-bar";
import App from "../components/app/App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProgressBar />
    <App />
  </React.StrictMode>
);
