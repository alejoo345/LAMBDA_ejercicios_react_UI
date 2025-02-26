import React, { useState } from "react";

export default function ListarProductos({ productos = [] }) {
  const [mostrarLista, setMostrarLista] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        className="bg-neutral-50 border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 transition"
        onClick={() => setMostrarLista(!mostrarLista)}
      >
        {mostrarLista ? "Volver" : "Mostrar Productos"}
      </button>

      {mostrarLista && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md w-80 text-center">
          <h2 className="text-xl font-semibold text-purple-700 mb-3">Lista de Productos</h2>
          <ul className="space-y-2">
            {productos.length > 0 ? (
              productos.map(({ nombre, precio }, index) => (
                <li key={index} className="flex justify-between p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200">
                  <span className="text-blue-600 font-medium">{nombre}</span>
                  <span className="text-red-500 font-bold">${precio}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No hay productos disponibles</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}