import '../../styles/institucional/estructura-organica.css'

function EstructuraOrganica() {
  return (
    <section className="institucional-section estructura-organizacional">
      <h3>Estructura Orgánica</h3>
      <p>Mapa organizacional y distribución de áreas funcionales.</p>
      
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

export default EstructuraOrganica