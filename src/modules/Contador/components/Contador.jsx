import React, { useState } from "react";
import '../utils/contador.css'



export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mostrarContador, setMostrarContador] = useState(false);

  return (
    <div className="contador" >
        <button
          className="boton-toggle"
          onClick={() => setMostrarContador(!mostrarContador)}
        >
          {mostrarContador ? "Volver" : "Mostrar Productos"}
        </button>
      
      {mostrarContador && (
        <>
          <br /><br />
          <p>Valor del contador: {contador}</p>
          <br />
          <button className="boton-contador" onClick={() => setContador(contador + 1)}> Incrementar</button>
          <button className="boton-contador" onClick={() => setContador(contador - 1)}>Decrementar</button>
        </>
      )}
    </div>
  );
}
