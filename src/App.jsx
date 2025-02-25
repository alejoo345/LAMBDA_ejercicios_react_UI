import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bienvenida from './modules/Users/components/Bienvenida'
import ListarProductos from './modules/Productos/components/ListarProductos'
import Contador from './modules/contador/hooks/Contador'


function App() {

  const nombre = "Alejo"
  const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Smartphone", precio: 800 },
    { nombre: "Auriculares", precio: 150 },
    { nombre: "PC", precio: 20000}
  ];

  return (
    <>
      <Bienvenida nombre={nombre}/>
      <br/>
      <ListarProductos productos={productos}/>
      <br/>
      <Contador/>
    </>
  )
}

export default App
