import { useState } from 'react'
import '../../styles/institucional/directorio.css'

const miembros = [
  { id: 'docente', texto: 'Director Sector Docente:' },
  { id: 'administrativo', texto: 'Director Sector Administrativo:' },
  { id: 'pasivo', texto: 'Director Sector Pasivo: Dr. José Alfredo LENIS PORCEL' },
  { id: 'gerente', texto: 'Gerente General: Lic. Guido Anagua Villafuerte' },
  { id: 'secretario', texto: 'Secretario Directorio: Abog. Juan M. CABRERA BUSTILLOS' },
]

export default function Directorio() {
  const [activos, setActivos] = useState([])

  const toggleCaja = (id) => {
    setActivos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="institucional-section directorio">
      <h3>Directorio</h3>
      <p>Información de contacto del personal y áreas de la institución.</p>

      <div className="organigrama">
        <button
          type="button"
          className={`caja caja-presidente ${activos.includes('presidente') ? 'activo' : ''}`}
          onClick={() => toggleCaja('presidente')}
        >
          Presidente: Dr. Ing. Pedro Guido LOPEZ CORTES
        </button>

        <div className="linea-v"></div>

        <div className="rama">
          <div className="linea-v"></div>
          <div className="rama-fila">
            {miembros.map((miembro) => (
              <div key={miembro.id} className="columna">
                <div className="linea-v"></div>
                <button
                  type="button"
                  className={`caja ${activos.includes(miembro.id) ? 'activo' : ''}`}
                  onClick={() => toggleCaja(miembro.id)}
                >
                  {miembro.texto}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}