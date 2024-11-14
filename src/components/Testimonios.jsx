import React from 'react'
import foto1 from '../assets/personas/persona1.webp';
import foto2 from '../assets/personas/persona2.webp';
import foto3 from '../assets/personas/persona3.webp';
import Persona from './Persona';

const Testimonios = () => {

    const testimonio1 = 'Mientras estaba estudiando programación, me ayudó que recibiera siempre información diaria a mi correo para ampliar conocimiento.'
    const testimonio2 = 'Cada día aprendo algo nuevo, ayuda mucho leer sobre programación al iniciar el día.'
    const testimonio3 = 'No sabía que algo tan sencillo, fácil y gratis me aportara tanto, volvería a suscribirme sin duda.'

  return (
    <div className='container-testimonios'>
        <div className='persona1'>
           <Persona foto={foto1} nombre={'María Rodríguez'} testimonio={testimonio1} /> 
        </div>
        <div className='persona2'>
           <Persona foto={foto2} nombre={'Paula González'} testimonio={testimonio2} />  
        </div>
        <div className='persona3'>
           <Persona foto={foto3} nombre={'Raúl Echeverria'} testimonio={testimonio3} /> 
        </div>
    </div>
  )
}

export default Testimonios