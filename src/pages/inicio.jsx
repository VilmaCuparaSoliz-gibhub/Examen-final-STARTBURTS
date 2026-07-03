import '../styles/inicio.css'
import manual from '../assets/manual.png'
import solvencia from '../assets/solvencia.png'
import cuestionario from '../assets/img-cuestionario.png'
import emergencias from '../assets/emergencias.jpg'
import ambulancia from '../assets/ambulancia.png'
import laboratorio from '../assets/laboratorio.jpg'
import medicina from '../assets/medicina_gral.jpg'
import pediatria from '../assets/pediatria.jpg'
import ImageCarousel from '../components/ImageCarousel'
import ecografia from '../assets/ecografia.jpg'
import elena from '../assets/elena_bravo.jpg'
import grinez from '../assets/grinez_rocio.jpg'
import melva from '../assets/melva_magne.jpg'
import alfredo from '../assets/alfredo_acha.jpeg'
import StaffCarousel from '../components/StaffCarousel'
import erick from '../assets/erick_lennis.png'
import orcar from '../assets/oscar_lafuente.png'
import jerson from '../assets/jerson_arancibia.jpg'
import ingreso from '../assets/ingreso.png'


function Inicio() {
  const images = [
    { src: manual, title: 'MANUAL ATENCIÓN EN LÍNEA' },
    { src: cuestionario, title: 'MANUAL CERTIFICACIONES EN LÍNEA' },
    { src: solvencia, title: 'MANUAL RESERVA DE FICHAS EN LÍNEA' },
    { src: ingreso, title: 'INGRESO A FICHAJE EN LÍNEA' },
  ]

  return (
    <div className="page">
      <div className="novedades">
        <h1 className="novedades-title">ULTIMAS NOVEDADES Y CONSULTAS EXTERNAS</h1>
        <h2 className="novedades-sub">
          Estimado usuario, le comunicamos que los enlaces para los diferentes
          documentos se encuentran
          <a className="link-rojo" href="#"> A CONTINUACIÓN</a>
        </h2>

        <div className="gallery">
          {images.map((img, i) => (
            <div className="card" key={i}>
              <img src={img.src} alt={img.title} />
              <div className="card-title">{img.title}</div>
            </div>
          ))}
        </div>

        <div className="services">
          <div className="services-text">
            <h2>Brindando los mejores servicios</h2>
            <p>
              Servicio de ambulancia las 24 Hrs. de la semana.
              Les brindamos los mejores servicios y médicos para su confort con
              calidad y calidez. 24/7 la fórmula perfecta al servicio de nuestros
              asegurados y la población en general. Las 24 horas y los 7 días de la
              semana, en caso de necesitarnos llamar al número de emergencias.
            </p>
          </div>

          <div className="services-thumbs">
            <ImageCarousel images={[laboratorio, ambulancia, medicina, pediatria]} visible={3} height={90} interval={2200} />
          </div>
        </div>

        <section className="autoridades">
          <h3>AUTORIDADES</h3>
          <div className="autoridades-bar">
            <a href="#"> Conozca a nuestras autoridades ingresando al enlace ➡️ </a>
          </div>
        </section>

        <section className="staff">
          <h2 className="staff-title">👨‍⚕️Contamos con médicos especialistas preparados al servicio de la sociedad</h2>

          <StaffCarousel
            items={[
              { src: elena, name: 'ELENA BRAVO', role: 'MÉDICO GENERAL EST.' },
              { src: grinez, name: 'GRINEZ ROCIO', role: 'MÉDICO CENTINELA' },
              { src: melva, name: 'MELVA MAGNE', role: 'REGENTE DE FARMACIA' },
              { src: alfredo, name: 'ALFREDO ACHA', role: 'MÉDICO GENERAL' },
              { src: erick, name: 'ERICK LENNIS', role: 'MÉDICO PEDIATRA' },
              { src: orcar, name: 'OSCAR LAFUENTE', role: 'MEDICO GENERAL'},
              { src: jerson, name:'JERSON ARANCIBIA',role:'GESTOR DE CALIDAD'},

            ]}
            visible={3}
            interval={2500}
          />
        </section>

        <section className="highlight-services">
          <ImageCarousel
            items={[
              { src: laboratorio, label: 'LABORATORIO', overlay: true },
              { src: pediatria, label: 'PEDIATRÍA', overlay: true },
              { src: emergencias, label: 'EMERGENCIAS', overlay: true },
              { src: ecografia, label: 'CONSULTA GENERAL', overlay: true },
            ]}
            visible={3}
            height={260}
            interval={2800}
          />
        </section>
      </div>
    </div>
  )
}

export default Inicio
