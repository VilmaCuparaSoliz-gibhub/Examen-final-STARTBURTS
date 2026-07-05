import React from 'react'
import '../../styles/plantel-ejecutivo.css'

// CORREGIDO: Dos niveles de puntos para ir directo de components/ a assets/
import gerenteImg from '../../assets/oscar_lafuente.png'
import jefeMedicoImg from '../../assets/jerson_arancibia.jpg'
import rrhhImg from '../../assets/elena_bravo.jpg'
import serviciosGenImg from '../../assets/grinez_rocio.jpg'

function PlantelEjecutivo() {
  return (
    <section className="institucional-section plantel-ejecutivo">
      <h1 className="titulo">Plantel Ejecutivo</h1>
      <p>Detalles del equipo directivo y jerárquico de la institución.</p>

      <div className="organigrama">
        <div className="nivel-1">
          <div className="caja">
            <span className="rol">Directorio</span>
          </div>
        </div>

        <div className="linea-v"></div>

        <div className="nivel-2">
          <div className="caja">
            <span className="rol">Gerente General</span>
            <div className="foto">
              <img src={gerenteImg} alt="Gerente General" />
            </div>
          </div>
        </div>

        <div className="rama">
          <div className="linea-v"></div>
          <div className="rama-fila">
            <div className="columna">
              <div className="linea-v"></div>
              <div className="caja">
                <span className="rol">Jefatura Médica</span>
                <div className="foto">
                  <img src={jefeMedicoImg} alt="Jefatura Médica" />
                </div>
              </div>
            </div>

            <div className="columna">
              <div className="linea-v"></div>
              <div className="caja">
                <span className="rol">Jefatura Recursos Humanos</span>
                <div className="foto">
                  <img src={rrhhImg} alt="Jefatura Recursos Humanos" />
                </div>
              </div>
            </div>

            <div className="columna">
              <div className="linea-v"></div>
              <div className="caja">
                <span className="rol">Jefatura Servicios Generales</span>
                <div className="foto">
                  <img src={serviciosGenImg} alt="Jefatura Servicios Generales" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlantelEjecutivo
