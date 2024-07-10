import ReactDOM from "react-dom/client";
import App from "./components/App";
import React from "react";
import ScrollProgressBar from "./components/scroll-progress-bar/scroll-progress-bar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProgressBar />
    <App />
  </React.StrictMode>
);
