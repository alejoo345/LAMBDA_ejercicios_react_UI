import React from 'react'
import '../utils/users.css'

export default function Bienvenida({nombre}) {

  return (
    <div className="bienvenida">
      <h1 className="bienvenida-texto">¡Bienvenido, {nombre}!</h1>
    </div>
  )
}
