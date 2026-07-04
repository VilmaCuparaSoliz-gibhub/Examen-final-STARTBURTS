import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
	return (
	<nav className="site-nav">
			<ul>
				<li>
					<Link to="/inicio">Inicio</Link>
				</li>

				{/* CAMBIA SOLO ESTE LI */}
				<li className="dropdown">
					<Link to="/institucional">Institucional</Link>
					<ul className="dropdown-content">
						<li><Link to="/institucional/datos-generales">Datos Generales</Link></li>
						<li><Link to="/institucional/situacion-geografica">Situación Geográfica</Link></li>
					</ul>
				</li>

				<li>
					<Link to="/servicios">Servicios</Link>
				</li>
				<li>
					<Link to="/personal-de-salud">Personal de Salud</Link>
				</li>
				<li>
					<Link to="/contrataciones">Contrataciones</Link>
				</li>
				<li>
					<Link to="/transparencia">Transparencia</Link>
				</li>
			</ul>
	</nav>
	)
}