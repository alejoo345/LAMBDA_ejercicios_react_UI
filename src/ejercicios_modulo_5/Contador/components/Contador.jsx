import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mostrarContador, setMostrarContador] = useState(false);
  const navigate = useNavigate(); // Hook para navegación

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Botón para mostrar u ocultar el contador */}
      <button
        className="bg-purple-500 border-purple-200 h-10 text-neutral-50 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded"
        onClick={() => setMostrarContador(!mostrarContador)}
      >
        {mostrarContador ? "Ocultar Contador" : "Mostrar Contador"}
      </button>

      {/* Botón para volver a la ruta base */}
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        onClick={() => navigate("/")} // Redirige a la ruta base
      >
        Volver al Inicio
      </button>

      {/* Sección del contador */}
      {mostrarContador && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md w-64 text-center">
          <p className="font-black text-red-500">Valor del contador: {contador}</p>
          <div className="flex justify-between mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => setContador(contador + 1)}
            >
              Incrementar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={() => setContador(contador - 1)}
            >
              Decrementar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
