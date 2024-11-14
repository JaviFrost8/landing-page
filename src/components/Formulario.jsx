import React from 'react'

export const Formulario = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='containerForm'>
      <div className='textContainer'>
        <h1 className='text'>Rellena <span className='resaltado'>{'{este formulario}'}</span> y déjanos</h1>
        <h1 className='text'>saber que material se corresponde mejor con <span className='resaltado'>{'{tu aprendizaje}'}</span></h1>
      </div>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <ul className='ul'>
            <li className='liOne'>
              <div className='nameSurname'>
                <label>Nombre:</label>
                <input type='text' placeholder='Introduce tu nombre'/>
              </div>
              <div className='nameSurname'>
                <label>Apellidos:</label>
                <input type='text' placeholder='Introduce tus apellidos'/>
              </div>
            </li>
            <li className='li'>
              <label>Email:</label>
              <input type='email' placeholder='Introduce tu email'/>
            </li>
            <li className='li'>
              <label>¿Que lenguaje de programación te interesa?:</label>
              <input type='text' placeholder='Ej: Python, Javascript, PHP...'/>
            </li>
            <li className='li'>
              <label>¿Que rama te interesa?:</label>
              <input type='text' placeholder='Ej: Frontend, Backend, Full Stack...'/>
            </li>
          </ul>
          <input type='submit' value='Enviar' />
        </form>
      </div>
    </div>
  )
}
