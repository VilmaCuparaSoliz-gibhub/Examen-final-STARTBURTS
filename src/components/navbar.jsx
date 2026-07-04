import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
	const [mostrarTransparencia, setMostrarTransparencia] = useState(false)

	return (
		<nav className="site-nav">
			<ul>
				<li>
					<NavLink
						to="/inicio"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Inicio
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/institucional"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Institucional
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/servicios"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Servicios
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/personal-de-salud"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Personal de Salud
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/contrataciones"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Contrataciones
					</NavLink>
				</li>

				<li className="dropdown">
					<button
						type="button"
						className="dropdown-title"
						onClick={() =>
							setMostrarTransparencia(!mostrarTransparencia)
						}
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