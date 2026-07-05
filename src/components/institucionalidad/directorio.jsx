import React, { useState, useEffect } from 'react';

function Directorio() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Detecta automáticamente la subcarpeta /Examen-final-STARTBURTS/
    const urlBase = import.meta.env.BASE_URL;

    fetch(`${urlBase}api/directorio.json`)
      .then(response => {
        if (!response.ok) throw new Error('Error al conectar con el servidor de datos');
        return response.json();
      })
      .then(data => {
        setContactos(data);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error API:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p style={{ padding: '20px', textAlign: 'center' }}>Conectando con la API del Directorio...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ color: '#0056b3', borderBottom: '2px solid #0056b3', paddingBottom: '10px' }}>
        📞 Directorio Telefónico Interno (API Connect)
      </h3>
      <p style={{ color: '#666', fontSize: '0.9em' }}>Datos consultados dinámicamente mediante Fetch asíncrono.</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#0056b3', color: 'white' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Oficina / Departamento</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Encargado</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Nº Interno</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Contacto Electrónico</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.oficina}</td>
              <td style={{ padding: '12px' }}>{item.encargado}</td>
              <td style={{ padding: '12px', color: '#e10404', fontWeight: 'bold' }}>{item.interno}</td>
              <td style={{ padding: '12px', fontStyle: 'italic', color: '#555' }}>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directorio;
