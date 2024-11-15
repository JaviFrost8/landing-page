import React from 'react'
import c from '../assets/lenguajes/c.webp';
import java from '../assets/lenguajes/java.webp';
import javascript from '../assets/lenguajes/javascript.webp';
import php from '../assets/lenguajes/php.webp';
import python from '../assets/lenguajes/python.webp';

export const Lenguajes = () => {

  return (
    <div className='big-container-lenguajes'>
      <div className='container-lenguaje'>
        <div className='logosContainer'>
          <img src={javascript} alt='javascript logo' />
          <img src={python} alt='python logo' />
          <img src={php} alt='php logo' />
          <img src={java} alt='java logo' />
          <img src={c} alt='c logo' />
        </div>
      </div>
    </div>
  )
}
