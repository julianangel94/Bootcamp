import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

//Contador de la manera convencional no optima porque estaria renderizando todo lo que devuelve el componente

/* const App = (props) => {
   return (
     <div>
       <p>El valor del contador es:</p>
       <h1>{props.contadorInicial}</h1>
       <h2>Magia de react</h2>
     </div>
   );
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
 }, 1000);*/

const rootElement = document.getElementById("root");

const App = (props) => {

  const [contadorValue, updateContador] = useState(0);

/*
  const contador = useState(0);
  const contadorValue = contador[0];
  const updateContador = contador[1];
*/
  // setInterval(() => {
  //   updateContador(contadorValue + 1);
  //   }, 1000);

  const handleClick = () => {
    updateContador(contadorValue + 1);
  }

  const handleClickReset = () => {
    updateContador(0);
  }

  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";

    return (
      <div>
        <p>El valor del contador es:</p>
        <h1>{contadorValue}</h1>
        <p>{mensajePar}</p>
        <button onClick={handleClick}>Incrementar</button>
        <button onClick={handleClickReset}>Reiniciar</button>

        {/* Otra manera de set una funcion al boton */}
        {/* <button onClick={() => {
          updateContador(contadorValue + 1);
          // updateContador(prevContador => {
          //   return prevContador + 1;
          // });
          }}>Incrementar</button> */}
          
      </div>
    );
}

ReactDOM.render(<App/>, rootElement)