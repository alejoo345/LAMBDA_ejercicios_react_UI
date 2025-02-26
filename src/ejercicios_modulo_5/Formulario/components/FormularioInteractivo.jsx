import React, { useState } from "react";

export default function FormularioInteractivo() {
  const [nombre, setNombre] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4">
      <button 
        className="bg-neutral-50 border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 transition"
        onClick={() => setMostrarFormulario((prev) => !prev)}
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      
      {mostrarFormulario && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md w-64 text-center">
          <input
            type="text"
            className="font-black text-center bg-fuchsia-950 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="mt-2 text-red-500 font-black break-words w-full text-center overflow-hidden text-ellipsis">Nombre ingresado: {nombre}</p>
        </div>
      )}
    </div>
  );
}
