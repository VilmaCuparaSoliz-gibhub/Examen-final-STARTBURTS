import React, { useState } from 'react'
import '../styles/header.css'

function Header() {
  const [showReservasModal, setShowReservasModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Funciones nativas de Vite para resolver las rutas físicas en producción
  const getImgUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href;
  };

  return (
    <>
      {/* Barra superior de información */}
      <div className="top-header">
        <div className="top-left">
          <span>📞Emergencias ☎️+591-2-6224161</span>
          <span>📧 ssupotosi@gmail.com</span>
          <span>📍Calle Calama N° 107</span>
        </div>
        <div className='top-right'>
          <a href="#">APLICATIVOS</a>
        </div>
      </div>

      {/* Cuerpo principal del Encabezado */}
      <header id="main-header-body">
        <div className="container header-grid">
          
          {/* Logo Izquierdo (SSU) */}
          <div className="header-logo-left">
            <a href="/">
              <img 
                src={getImgUrl('logo.png')} 
                alt="Logo SSU" 
                className="img-logo-ssu" 
              />
            </a>
          </div>

          {/* Título Central */}
          <div className="header-title-center">
            <h1>SEGURO SOCIAL <br/> UNIVERSITARIO POTOSÍ</h1>
          </div>

          {/* Bloque Derecho */}
          <div className="header-logo-right">
            <img
              src={getImgUrl('Escudo_de_Bolivia.png')}
              alt="Escudo de Bolivia"
              className="img-escudo"
            />

            {/* Convocatorias */}
            <a href="/convocatorias" className="convocatorias-link">
              <img
                src={getImgUrl('convocatorias.jpg')}
                alt="Convocatorias"
                className="img-convocatorias"
              />
            </a>

            <div className="header-sub-links">
              {/* Reservas */}
              <button
                className="link-azul-btn"
                onClick={() => setShowReservasModal(true)}
              >
                Reservas
              </button>

              {/* Síguenos */}
              <div className="dropdown-siguenos">
                <button
                  className="dropdown-toggle-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Síguenos
                </button>

                <div className={`dropdown-social-content ${dropdownOpen ? "show" : ""}`}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-facebook"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-youtube"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* VENTANA EMERGENTE (MODAL) DE RESERVAS */}
        {showReservasModal && (
          <div className="modal-overlay" onClick={() => setShowReservasModal(false)}>
            <div className="login-card-container" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={() => setShowReservasModal(false)}>✕</button>

              <div className="horarios-banner-rojo">
                <h3>RESERVA DE ATENCIÓN 2026!!!</h3>
                <p className="dias">LUNES A VIERNES</p>
                <p>Asegurados de 19:30 a 20:00</p>
                <p>Estudiantes de 20:00 a 20:30</p>
              </div>

              <form className="login-form-reserva" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group-reserva">
                  <label>USUARIO</label>
                  <input type="text" placeholder="Código de Carnet de Asegurado" />
                </div>

                <div className="form-group-reserva">
                  <label>CONTRASEÑA</label>
                  <input type="password" placeholder="Nº de Carnet de Identidad" />
                </div>

                <button type="submit" className="btn-ingresar-reserva">INGRESAR</button>
              </form>

              <p className="session-expire-text">
                Señor usuario su sesión acaba de expirar, por favor vuelva a introducir sus credenciales de acceso.
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
