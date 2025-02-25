import '../utils/productos.css'
import React, { useState } from "react";


const BotonMostrarLista = ({ onClick, mostrarLista }) => {
  return (
    <button className="boton-toggle" onClick={onClick}>
      {mostrarLista ? "Volver" : "Mostrar Productos"}
    </button>
  );
};

export default function ListarProductos({ productos = [] }) {
  const [mostrarLista, setMostrarLista] = useState(false);

  return (
    
    <div className="lista-productos">

      <button
          className="boton-toggle"
          onClick={() => setMostrarLista(!mostrarLista)}
        >
          {mostrarLista ? "Volver" : "Mostrar Productos"}
        </button>

 
      
      {mostrarLista && (
        <>
          <h2 className="lista-titulo">Lista de Productos</h2>
          <ul className="lista-items">
            {productos.length > 0 ? (
              productos.map(({ nombre, precio }, index) => (
                <li key={index} className="lista-item">
                  <span className="producto-nombre">{nombre}</span> -
                  <span className="producto-precio"> ${precio}</span>
                </li>
              ))
            ) : (
              <li className="lista-item">No hay productos disponibles</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

