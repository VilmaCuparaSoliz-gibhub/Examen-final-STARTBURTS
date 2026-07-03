import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
	const [showInstitucionalMenu, setShowInstitucionalMenu] = useState(false)

	const closeMenu = () => setShowInstitucionalMenu(false)

	return (
		<nav className="site-nav">
			<ul>
				<li>
					<NavLink
						to="/inicio"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
					>
						Inicio
					</NavLink>
				</li>
				<li className="submenu-container">
					<NavLink
						to="/institucional"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={() => setShowInstitucionalMenu(prev => !prev)}
					>
						Institucional
					</NavLink>
					{showInstitucionalMenu && (
						<div className="institucional-dropdown">
							<Link to="/institucional/datos-generales" onClick={closeMenu}>
								Datos Generales
							</Link>
							<Link to="/institucional/situacion-geografica" onClick={closeMenu}>
								Situación Geográfica
							</Link>
							<Link to="/institucional/plantel-ejecutivo" onClick={closeMenu}>
								Plantel Ejecutivo
							</Link>
							<Link to="/institucional/estructura-organica" onClick={closeMenu}>
								Estructura Orgánica
							</Link>
							<Link to="/institucional/directorio" onClick={closeMenu}>
								Directorio
							</Link>
						</div>
					)}
				</li>
				<li>
					<NavLink
						to="/servicios"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
					>
						Servicios
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/personal-de-salud"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
					>
						Personal de Salud
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contrataciones"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
					>
						Contrataciones
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/transparencia"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
					>
						Transparencia
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
