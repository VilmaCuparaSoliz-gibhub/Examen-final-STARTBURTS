import "../../styles/institucional/datos-generales.css";

function DatosGenerales() {
  return (
    <div className="datos-container">
      <h2 className="titulo-rojo">ANTECEDENTES</h2>
      <p className="texto">
        Proteger la salud del asegurado y su familia mediante los servicios de promoción de prevención, curación y rehabilitación en los seguros de enfermedad, maternidad y riesgos Profesionales a corto plazo garantizando la eficiencia, eficacia y economicidad.</p>

      <div className="grid-3">
        <div>
          <h3 className="titulo-rojo">MISIÓN</h3>
          <p className="texto">Proteger la salud del asegurado y su familia mediante los servicios de promoción de prevención, curación y rehabilitación en los seguros de enfermedad, maternidad y riesgos Profesionales a corto plazo garantizando la eficiencia, eficacia y economicidad.</p>
        </div>
        <div>
          <h3 className="titulo-rojo">VISIÓN</h3>
          <p className="texto">Un seguro Social Universitario diferente y mejor para todos, reconocido por su excelencia en la prestación de servicios de salud, sólido económicamente y auto sostenible, con un alto nivel de organización y un personal que ofrece calidad, calidez y oportuna atención a sus asegurados, beneficiarios y público en general. Una institución, más ágil, más accesible, más agradable, más eficiente, más humana, donde el paciente se sienta cuidado y respetado.</p>
        </div>
        <div>
          <h3 className="titulo-rojo">OBJETIVO INSTITUCIONAL</h3>
          <p className="texto">El Seguro Social Universitario de Potosí, es una institución de servicio al público cuya función principal es la de prestar servicios de salud. Su cobertura alcanza principalmente a los trabajadores, docentes y administrativos de la Universidad Autónoma Tomás Frías y sus beneficiarios trabajadores y beneficiarios de la misma institución y de otras empresas afiliadas.</p>
        </div>
      </div>

      <h2 className="titulo-rojo">UBICACION GEOGRÁFICA</h2>
      
      <div className="texto" style={{marginBottom: '20px'}}>
        <p className="texto">
        El Seguro Social Universitario de Potosí, se encuentra ubicada en la capital del departamento de Potosí ; la clínica está ubicada en la calle Calama Nº 107 en la zona central de la ciudad
      </p>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234!2d-65.7543!3d-19.5834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM1JzAwLjIiUyA2NcKwNDUnMTUuNSJX!5e0!3m2!1ses!2sbo!4v1234567890"
        width="100%" 
        height="350" 
        style={{border:0, borderRadius: '8px'}} 
        allowFullScreen="" 
        loading="lazy"
        title="Mapa SSU Potosí">
      </iframe>

    </div>
  );
}
export default DatosGenerales;
