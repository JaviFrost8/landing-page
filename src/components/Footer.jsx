import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='contact'>
          <span className='contact-us'>Contáctanos</span>
          <div className='phone'>
            <i class="fa-solid fa-phone"></i>
            <span>662628562</span>
          </div>
          <div className='mail'>
            <i class="fa-solid fa-envelope"></i>
            <span>Jjaviergonzalez23@gmail.com</span>
          </div>
          <div className='location'>
            <i class="fa-solid fa-location-dot"></i>
            <span>11130, Chiclana de la frontera/Cádiz</span>
          </div>
        </div>

        <div className='rrss'>
          <span className='rrss-text'>Redes sociales</span>
          <div className='rrss-logos'>
            <a href='#'><i className="fa-brands fa-facebook"></i></a>
            <a href='#'><i className="fa-brands fa-instagram"></i></a>
            <a href='#'><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className='reserved'>
        <span>&copy; Todos los derechos reservados 2024</span>
      </div>
    </div>
  )
}
