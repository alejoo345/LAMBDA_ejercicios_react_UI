import './App.css'
import Bienvenida from './modules/Users/components/Bienvenida'
import ListarProductos from './modules/Productos/components/ListarProductos'
import Contador from './modules/Contador/components/Contador'
import FormularioInteractivo from './modules/Formulario/components/FormularioInteractivo'

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
    </>
  )
}

export default App
