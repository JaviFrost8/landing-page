import React from 'react'

const Persona = ({foto, nombre, testimonio}) => {

  return (
    <div className='container-persona'>
        <img src={foto} alt='foto persona' />
        <div className='info'>
            <h2>{nombre}</h2>
            <span>{testimonio}</span>
        </div>
    </div>
  )
}

export default Persona