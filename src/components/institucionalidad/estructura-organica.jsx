import React from 'react'
import '../../styles/institucional/estructura-organica.css'

// CORREGIDO: Añadimos un "../" extra para poder llegar correctamente a assets
import organigramaImg from '../../assets/img/organigrama.png'

function EstructuraOrganica() {
  return (
    <section className="institucional-section estructura-organizacional">
      <h3>Estructura Orgánica</h3>
      <p>Mapa organizacional y distribución de áreas funcionales.</p>
      
      <a
        href={organigramaImg}
        className="imagen-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={organigramaImg}
          alt="Estructura Organizacional"
        />
      </a>
    </section>
  )
}

export default EstructuraOrganica
