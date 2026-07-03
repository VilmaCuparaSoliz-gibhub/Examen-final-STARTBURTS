import '../../styles/institucional/estructura-organica.css'
export default function EstructuraOrganica() {
	return (
		<section className="estructura-organizacional">
            <h1 className="titulo">Estructura Organica</h1>
			<a
				href="/img/organigrama.png"
				className="imagen-link"
				target="_blank"
				rel="noreferrer"
			>
				<img
					src="/img/organigrama.png"
					alt="Estructura Organizacional"
				/>
			</a>
		</section>
	)
}