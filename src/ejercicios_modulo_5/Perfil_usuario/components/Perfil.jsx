import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchUsers from "../../Consumir_api/hooks/useFetchUsers";

export default function PerfilUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Buscar usuario por ID
  const user = users.find((u) => u.id.toString() === id);

  if (!user) {
    return <p className="text-center text-red-500">Usuario no encontrado</p>;
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-black text-red-500">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500">{user.phone}</p>
        <p className="text-gray-400">{user.website}</p>
      </div>

      {/* Botón para volver al inicio */}
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        onClick={() => navigate("/usuarios")}
      >
        Volver a la Lista
      </button>
    </div>
  );
}
