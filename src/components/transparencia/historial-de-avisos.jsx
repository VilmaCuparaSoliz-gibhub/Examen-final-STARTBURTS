import React from 'react'
import transparencia from '../../assets/transparencia.png'
import transparencia1 from '../../assets/transparencia1.png'
import '../../styles/transparencia.css'

function HistorialDeAvisos() {
  return (
    <div>

      <h2 className='titulo'><strong>HISTORIAL DE PUBLICACIONES E INVITACIONES 2021</strong></h2>
      <h4 className='subtitulo'>AUDIENCIA DE RENDICIÓN PÚBLICA DE CUENTAS FINAL 2020</h4>
      <div className="img"><img  src={transparencia} alt="Avisos" width="70%" height="90%"/></div>
      <p>Publicación 15/02/2021</p>
      <h4 className='subtitulo2'>AUDIENCIA DE RENDICIÓN PÚBLICA DE CUENTAS INICIAL 2021</h4>
      <div className="imgb"><img src={transparencia1} alt="Avisos" width="70%" height="90%"/></div>
    </div>
  )
}

export default HistorialDeAvisos