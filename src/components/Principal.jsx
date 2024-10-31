import React from 'react'
import patito from '../assets/patito.webp';

const Principal = () => {

  return (
    <div className='principal-container'>
        <div className='titulos-container'>
            <div className='titulo'>Aprende a programar <span className='gratis'>{`{GRATIS}`}</span> <br></br>desde donde quieras.</div>
            <div className='subtitulo'>Suscríbete a nuestra newsletter y recibirás <br></br> todo lo necesario para convertirte en desarrollador web.</div>
            <div className='input-container'>
                <input type='email' placeholder='Introduce tu email' />
                <input type='submit' value='Enviar' />
            </div>
        </div>
        <div className='imagen'>
            <img src={patito} alt='patito' />
        </div>
    </div>
  )
}

export default Principal