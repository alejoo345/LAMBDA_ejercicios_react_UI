import React, { useState } from "react";
import useFetchUsers from "../../Consumir_api/hooks/useFetchUsers";
import { useNavigate } from "react-router-dom";

export default function Usuarios() {
  const { users, loading, error } = useFetchUsers();
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const navigate = useNavigate(); // Hook para redireccionar

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {/* Botón para mostrar/ocultar la lista de usuarios */}
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        onClick={() => setMostrarUsuarios((prev) => !prev)}
      >
        {mostrarUsuarios ? "Ocultar Usuarios" : "Mostrar Usuarios"}
      </button>

      {/* Lista de usuarios con botones que llevan al perfil */}
      {mostrarUsuarios && (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-black text-center text-red-500 border-b pb-2">
            Lista de Usuarios
          </h2>
          <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
            {users.map((user) => (
              <div
                key={user.id}
                className="border-b p-4 hover:bg-gray-100 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={() => navigate(`/perfil/${user.id}`)} // Redirige al perfil
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Ver Perfil
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Botón para volver al inicio */}
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        onClick={() => navigate("/")} // Redirige al inicio
      >
        Volver al Inicio
      </button>
    </div>
  );
}
