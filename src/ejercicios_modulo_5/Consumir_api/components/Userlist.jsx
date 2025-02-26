import React, { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";

const UserList = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-black text-center mb-4 text-red-500 p-4 border-b">Lista de Usuarios</h2>
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
          {users.map((user) => (
            <div key={user.id} className="border-b p-4 hover:bg-gray-100">
              <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BotonMostrarUsuarios = ({ onClick, mostrarUsuarios }) => {
  return (
    <button 
      className="bg-neutral-50 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white"
      onClick={onClick}
    >
      {mostrarUsuarios ? "Ocultar Usuarios" : "Mostrar Usuarios"}
    </button>
  );
};

export default function Usuarios() {
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);

  return (
    <div>
      <BotonMostrarUsuarios 
        onClick={() => setMostrarUsuarios((prev) => !prev)} 
        mostrarUsuarios={mostrarUsuarios} 
      />
      {mostrarUsuarios && <UserList />}
    </div>
  );
}