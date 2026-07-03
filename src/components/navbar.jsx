import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
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
				<li>
					<NavLink
						to="/transparencia"
						className={({ isActive }) => (isActive ? 'active-link' : '')}
					>
						Transparencia
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
