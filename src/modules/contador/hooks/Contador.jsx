import React, { useState } from "react";

const BotonMostrarContador = ({ onClick, mostrarContador }) => {
  return (
    <button className="boton-toggle" onClick={onClick}>
      {mostrarContador ? "Ocultar Contador" : "Mostrar Contador"}
    </button>
  );
};

const BotonContador = ({ onClick, texto }) => {
  return <button className="boton-contador" onClick={onClick}>{texto}</button>;
};

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mostrarContador, setMostrarContador] = useState(false);

  return (
    <div>
      <BotonMostrarContador 
        onClick={() => setMostrarContador(!mostrarContador)} 
        mostrarContador={mostrarContador} 
      />
      
      {mostrarContador && (
        <>
          <p>Valor del contador: {contador}</p>
          <BotonContador onClick={() => setContador(contador + 1)} texto="Incrementar" />
          <BotonContador onClick={() => setContador(contador - 1)} texto="Decrementar" />
        </>
      )}
    </div>
  );
}
