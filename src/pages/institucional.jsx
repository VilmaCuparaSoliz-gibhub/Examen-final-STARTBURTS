import '../styles/intitucional.css'
import { NavLink, Outlet } from 'react-router-dom'

function Institucional() {
  return (
    <div className="page institucional-page">
      <div className="institucional-content">
        <div className="institucional-header">
          <h1>Institucional</h1>
          <p>Seleccione una sección para abrir su ventana de contenido dentro de Institucional.</p>
        </div>

        <nav className="institucional-menu">
          <NavLink to="datos-generales" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Datos Generales
          </NavLink>
          <NavLink to="situacion-geografica" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Situación Geográfica
          </NavLink>
          <NavLink to="plantel-ejecutivo" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Plantel Ejecutivo
          </NavLink>
          <NavLink to="estructura-organica" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Estructura Orgánica
          </NavLink>
          <NavLink to="directorio" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Directorio
          </NavLink>
        </nav>

        <div className="institucional-window">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Institucional
