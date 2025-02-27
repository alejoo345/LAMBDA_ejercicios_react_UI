import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioInteractivo() {
  const [nombre, setNombre] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="flex flex-col items-center mt-4 space-y-4">
      {/* Botón para mostrar/ocultar el formulario */}
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        onClick={() => setMostrarFormulario((prev) => !prev)}
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>

      {/* Botón para volver al inicio */}
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        onClick={() => navigate("/")}
      >
        Volver al Inicio
      </button>

      {/* Formulario */}
      {mostrarFormulario && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md w-64 text-center">
          <input
            type="text"
            className="font-black text-center bg-fuchsia-950 text-white w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="mt-2 text-red-500 font-black break-words w-full text-center overflow-hidden text-ellipsis">
            Nombre ingresado: {nombre}
          </p>
        </div>
      )}
    </div>
  );
}
