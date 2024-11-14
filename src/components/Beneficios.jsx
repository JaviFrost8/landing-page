import React from 'react'

const Beneficios = () => {
  return (
    <div className='beneficios-container'>
      <div className='beneficio'>
        <i className="fa-regular fa-envelope"></i>
        <span>Recibe cada día una lección a tu correo.</span>
      </div>
      <div className='beneficio'>
        <i className="fa-solid fa-code"></i>
        <span>Aprende buenas prácticas y código limpio.</span>
      </div>
      <div className='beneficio'>
        <i className="fa-solid fa-wallet"></i>
        <span>Totalmente gratis</span>
      </div>
    </div>
  )
}

export default Beneficios