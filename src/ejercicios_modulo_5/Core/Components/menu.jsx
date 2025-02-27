import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import ListarProductos from "../../Productos/components/ListarProductos";
import FormularioInteractivo from "../../Formulario/components/FormularioInteractivo";
import Contador from "../../Contador/components/Contador";
import Bienvenida from "../../Users/components/Bienvenida";

const nombre = "Alejo";

export default function Menu() {
  const navigate = useNavigate(); // Inicializamos useNavigate

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Menu */}
      <nav className=" text-white p-4 flex justify-center space-x-4 shadow-lg">
        <h1>
          <Bienvenida nombre={nombre} />
        </h1>

        {/* Botones de navegación con useNavigate */}
        <button onClick={() => navigate('/usuarios')} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Usuarios</button>
        <button onClick={() => navigate('/productos')} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Productos</button>
        <button onClick={() => navigate('/contador')} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Contador</button>
        <button onClick={() => navigate('/formulario')} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Formulario</button>
      </nav>

      {/* Page Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
