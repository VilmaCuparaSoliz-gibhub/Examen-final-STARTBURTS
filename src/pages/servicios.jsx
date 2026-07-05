import React, { useState, useEffect } from 'react';

function Servicios() {
  const [listaServicios, setListaServicios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const urlBase = import.meta.env.BASE_URL;

    fetch(`${urlBase}api/servicios.json`)
      .then(response => {
        if (!response.ok) throw new Error('Error al recuperar catálogo médico');
        return response.json();
      })
      .then(data => {
        setListaServicios(data);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error API:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p style={{ padding: '30px', textAlign: 'center' }}>Consultando API de Especialidades SSU...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ color: '#e10404' }}>🩺 Carteras de Servicios Médicos Disponibles</h2>
      <p style={{ color: '#555' }}>Información en tiempo real enlazada mediante simulación de API REST.</p>
      
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {listaServicios.map(serv => (
          <div key={serv.id} style={{ padding: '20px', borderLeft: '5px solid #e10404', background: '#fcfcfc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '1.2em' }}>{serv.especialidad}</h4>
            <p style={{ margin: '3px 0', color: '#666' }}><strong>Médico Asignado:</strong> {serv.medico}</p>
            <p style={{ margin: '3px 0', color: '#666' }}><strong>Días de Atención:</strong> {serv.atencion}</p>
            <span style={{ fontSize: '0.85em', background: '#eee', padding: '3px 8px', borderRadius: '3px', inlineBlock: 'true' }}>
              📍 {serv.consultorio}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
