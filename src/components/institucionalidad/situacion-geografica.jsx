import "../../styles/institucional/situacion-geografica.css";


function SituacionGeografica() {
  return (
    <div className="geo-container">
      <h2 className="titulo-rojo">UBICACIÓN GEOGRÁFICA</h2>
      <p className="texto">
       El Seguro Social Universitario de Potosí, se encuentra ubicada en la capital del departamento de Potosí ; la clínica está ubicada en la calle Calama Nº 107 en la zona central de la ciudad.
      </p>
      <iframe 
  className="mapa"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1234!2d-65.756789!3d-19.588234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b7b8a9b8c7d6%3A0x1234567890abcdef!2sSeguro%20Social%20Universitario%20de%20Potos%C3%AD%2C%20C.%20Calama%20107%2C%20Potos%C3%AD!5e0!3m2!1ses!2sbo!4v1234567890"
  width="100%" 
  height="450" 
  style={{border:0}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
    </div>
  );
}
export default SituacionGeografica;