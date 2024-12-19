import React from 'react'
import patito from '../assets/patito.webp';

const Principal = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.email.value = ''
    alert('Gracias por suscribirte. Recibirás el primer email en unos minutos.')
  }

  return (
    <div className='principal-container'>
        <div className='titulos-container'>
            <div className='titulo'>Aprende a programar <span className='resaltado'>{`{GRATIS}`}</span> <br></br>desde donde quieras.</div>
            <div className='subtitulo'>Suscríbete a nuestra newsletter y recibirás <br></br> todo lo necesario para convertirte en desarrollador web.</div>
            <form className='input-container' onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='Introduce tu email' />
                <input type='submit' value='Enviar' />
            </form>
        </div>
        <div className='imagen'>
            <img src={patito} alt='patito' />
        </div>
    </div>
  )
}

export default Principal