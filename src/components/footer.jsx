import '../styles/footer.css'

export default function Footer() {
  const handleClickableClick = (event) => {
    event.preventDefault()
  }

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Acerca de Nosotros</h3>

          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>
              <strong>Dirección:</strong>{' '}
              <a
                href="https://maps.google.com/?q=Calama+107,+Potosi,+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calama Nº. 107
              </a>
            </span>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>
              <strong>Teléfono:</strong>{' '}
              <button type="button" className="clickable-item link-button" onClick={handleClickableClick}>
                +591-1-0283459
              </button>
            </span>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>
              <strong>Informaciones - Fichaje:</strong>{' '}
              <button type="button" className="clickable-item link-button" onClick={handleClickableClick}>
                +591-2-2948562
              </button>
            </span>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>
              <strong>Emergencias - Clínica:</strong>{' '}
              <button type="button" className="clickable-item link-button" onClick={handleClickableClick}>
                +591-3-4563456
              </button>
            </span>
          </div>

          <div className="contact-item mail-container">
            <span>
              <a href="https://ssupotosi.com.bo/#" className="clickable-item">
                segurosocialuniversitario@ssupotosi.com.bo
              </a>
            </span>
          </div>
        </div>

        <div className="footer-section footer-section--wide">
          <h3>Servicios</h3>
          <ul className="services-list">
            <li>Consulta Externa</li>
            <li>Fisioterapia</li>
            <li>Laboratorio Clínico</li>
            <li>Ecografía</li>
            <li>Imagenología</li>
            <li>Internación Clínica y Quirúrgica</li>
            <li>Enfermería</li>
            <li>Afiliaciones</li>
            <li>Farmacia</li>
            <li className="highlight-link">Fichaje En Línea</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2026 Todos los derechos reservados - Seguro Social Universitario Potosí</p>
        <p>
          <i className="fa-solid fa-building-columns"></i> S.S.U.P.
        </p>
        <p>Desarrollado por Grupo Startburts.</p>
      </div>
    </footer>
  )
}