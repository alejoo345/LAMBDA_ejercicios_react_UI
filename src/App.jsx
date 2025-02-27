import './App.css'

import ListarProductos from './ejercicios_modulo_5/Productos/components/ListarProductos'
import Contador from './ejercicios_modulo_5/Contador/components/Contador'
import FormularioInteractivo from './ejercicios_modulo_5/Formulario/components/FormularioInteractivo'
import {Routes, Route} from 'react-router-dom'
import UserList from './ejercicios_modulo_5/Consumir_api/components/Userlist'
import Menu from './ejercicios_modulo_5/Core/Components/menu'
import PerfilUsuario from './ejercicios_modulo_5/Perfil_usuario/components/Perfil'

function App() {

  const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Smartphone", precio: 800 },
    { nombre: "Auriculares", precio: 150 },
    { nombre: "PC", precio: 20000}
  ];

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<sidebar/>}/>  */}
        {/* <Route path='/app' element={<sidebar/>}> */}
        <Route path="/" element={< Menu/> } />
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/perfil/:id" element={<PerfilUsuario />} />
          <Route path="/productos" element={<ListarProductos productos={productos} />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/formulario" element={<FormularioInteractivo />} />
        {/* <Route/> */}
      </Routes>

    </>
  )
}

export default App
