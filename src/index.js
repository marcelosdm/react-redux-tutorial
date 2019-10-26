import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App stories={store.getState()} onArchive={() => {}} />,
  rootElement
);
