import React from 'react'
import Header from '../Header'
import Principal from '../Principal'
import Beneficios from '../Beneficios'
import Testimonios from '../Testimonios'
import { Formulario } from '../Formulario'
import { Lenguajes } from '../Lenguajes'
import { Footer } from '../Footer'

export const PrincipalPage = () => {
  return (
    <div>
        <Header />
        <Principal />
        <Beneficios />
        <Testimonios />
        <Formulario />
        <Lenguajes />
        <Footer />
    </div>
  )
}
