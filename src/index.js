import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import NestingOfJSX from "./NestingOfJSX";
import Expressions from "./Expressions";
import MapFunctionInJs from "./MapFunctionInJs";
import ConditionalRendering from "./ConditionalRendering";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ConditionalRendering />
    <MapFunctionInJs />
    <Expressions />,
    <App />,
    <Login />,
    <NestingOfJSX />
  </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
