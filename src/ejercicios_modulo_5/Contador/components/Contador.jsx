import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mostrarContador, setMostrarContador] = useState(false);

  return (
    <div>
        <button
          className="bg-neutral-50 border-purple-200 h-10 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
          onClick={() => setMostrarContador(!mostrarContador)}
        >
          {mostrarContador ? "Volver" : "Mostrar Contador"}
        </button>
      
      {mostrarContador && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md w-100 text-center">
        <p className="font-black text-red-500">Valor del contador: {contador}</p>
        <div className="flex justify-between mt-4">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => setContador(contador + 1)}
          >
            Incrementar
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 w-30 h-10 rounded-lg hover:bg-red-600 transition"
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
