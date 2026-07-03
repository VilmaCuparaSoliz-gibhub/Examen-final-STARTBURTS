import '../styles/sideBar.css'

export default function SideBar() {
	return (
		<aside className="sidebar">
			<h3>Navegación Lateral</h3>
			<ul>
				<li><a href="#section1">Sección 1</a></li>
				<li><a href="#section2">Sección 2</a></li>
				<li><a href="#section3">Sección 3</a></li>
			</ul>
		</aside>
	)
}