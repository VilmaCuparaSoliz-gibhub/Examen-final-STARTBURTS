import React, { useState } from 'react'
import HistorialDeAvisos from '../components/transparencia/historial-de-avisos'
//import AsesoriaLegal from '../components/transparencia/asesoria-legal'
import Auditoria from '../components/transparencia/auditoria'
//import RecursosHumanos from '../components/transparencia/recursos-humanos'
import '../styles/transparencia.css'

function Transparencia() {
  const [opcion, setOpcion] = useState('historial')

  return (
    <div className="page transparencia-page">


      <div className="transparencia-options">
        <button className={opcion === 'historial' ? 'active' : ''} onClick={() => setOpcion('historial')}>
          Historial de avisos
        </button>
        <button className={opcion === 'asesoria' ? 'active' : ''} onClick={() => setOpcion('asesoria')}>
          Asesoría legal
        </button>
        <button className={opcion === 'recursos' ? 'active' : ''} onClick={() => setOpcion('recursos')}>
          Recursos humanos
        </button>
        <button className={opcion === 'auditoria' ? 'active' : ''} onClick={() => setOpcion('auditoria')}>
          Auditoría
        </button>
      </div>

      <div className="transparencia-content">
        {opcion === 'historial' && <HistorialDeAvisos />}
        {opcion === 'asesoria' && <AsesoriaLegal />}
        {opcion === 'recursos' && <RecursosHumanos />}
        {opcion === 'auditoria' && <Auditoria />}
      </div>
    </div>
  )
}

export default Transparencia
