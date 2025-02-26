import './App.css'

import Bienvenida from './ejercicios_modulo_5/Users/components/Bienvenida'
import ListarProductos from './ejercicios_modulo_5/Productos/components/ListarProductos'
import Contador from './ejercicios_modulo_5/Contador/components/Contador'
import FormularioInteractivo from './ejercicios_modulo_5/Formulario/components/FormularioInteractivo'
import UserList from './ejercicios_modulo_5/Consumir_api/components/Userlist'


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
      <br />
      <FormularioInteractivo/>
      <br/>
      <UserList/>
    </>
  )
}

export default App
