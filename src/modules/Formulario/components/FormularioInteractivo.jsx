import React, { useState } from "react";
import '../utils/formulario.css'

export default function FormularioInteractivo() {
  const [nombre, setNombre] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="formulario-container">
      <button 
        className="boton-toggle" 
        onClick={() => setMostrarFormulario((prev) => !prev)}
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      <br />
      {mostrarFormulario && (
        <>
        <br />
          <input
            type="text"
            className="input-texto"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="nombre-mostrado">Nombre ingresado: {nombre}</p>
        </>
      )}
    </div>
  );
}