import { useState } from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
	const [mostrarTransparencia, setMostrarTransparencia] = useState(false)
=======
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
	const [showInstitucionalMenu, setShowInstitucionalMenu] = useState(false)

	const closeMenu = () => setShowInstitucionalMenu(false)
>>>>>>> 0f4d6a2 (clonen para institucionalidad)

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
<<<<<<< HEAD

				<li>
=======
				<li className="submenu-container">
>>>>>>> 0f4d6a2 (clonen para institucionalidad)
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
<<<<<<< HEAD

				<li className="dropdown">
					<button
						type="button"
						className="dropdown-title"
						onClick={() =>
							setMostrarTransparencia(!mostrarTransparencia)
						}
=======
				<li>
					<NavLink
						to="/transparencia"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
						onClick={closeMenu}
>>>>>>> 0f4d6a2 (clonen para institucionalidad)
					>
						Transparencia ▼
					</button>

					{mostrarTransparencia && (
						<ul className="dropdown-menu">
							<li>
								<NavLink
									to="/transparencia/auditoria"
									className={({ isActive }) =>
										isActive ? 'active-link' : ''
									}
								>
									Auditoría
								</NavLink>
							</li>

							{/* Tus compañeros agregarán aquí sus opciones */}
						</ul>
					)}
				</li>
			</ul>
		</nav>
	)
}