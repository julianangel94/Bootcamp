import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>;
};

let contador = 0;

const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador} />,
    document.getElementById("root")
  );
};

setInterval(() => {
  refresh();
  contador++;
}, 1000);
