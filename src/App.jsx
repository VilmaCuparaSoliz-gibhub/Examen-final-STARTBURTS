import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Inicio from './pages/inicio'
import Institucional from './pages/institucional'
import Servicios from './pages/servicios'
import PersonalDeSalud from './pages/personal-de-salud'
import Contrataciones from './pages/contrataciones'
import Transparencia from './pages/transparencia'
import DatosGenerales from './components/institucionalidad/datos-generales'
import SituacionGeografica from './components/institucionalidad/situacion-geografica'
import PlantelEjecutivo from './components/institucionalidad/plantel-ejecutivo'
import EstructuraOrganica from './components/institucionalidad/estructura-organica'
import Directorio from './components/institucionalidad/directorio'
// 1. IMPORTACIÓN CORREGIDA: Hacía falta importar Auditoria aquí
import Auditoria from './components/transparencia/auditoria'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          
          {/* Subrutas de Institucional limpias y sin duplicados */}
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/institucional/datos-generales" element={<DatosGenerales />} />
          <Route path="/institucional/situacion-geografica" element={<SituacionGeografica />} />
          <Route path="/institucional/plantel-ejecutivo" element={<PlantelEjecutivo />} />
          <Route path="/institucional/estructura-organica" element={<EstructuraOrganica />} />
          <Route path="/institucional/directorio" element={<Directorio />} />
          
          {/* Otras secciones */}
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/personal-de-salud" element={<PersonalDeSalud />} />
          <Route path="/contrataciones" element={<Contrataciones />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/transparencia/auditoria" element={<Auditoria />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
