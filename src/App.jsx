import './App.css'
import { Routes, Route } from 'react-router-dom'; // Eliminado 'BrowserRouter as Router'
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

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/institucional" element={<Institucional />}>
            <Route index element={<DatosGenerales />} />
            <Route path="datos-generales" element={<DatosGenerales />} />
            <Route path="situacion-geografica" element={<SituacionGeografica />} />
            <Route path="plantel-ejecutivo" element={<PlantelEjecutivo />} />
            <Route path="estructura-organica" element={<EstructuraOrganica />} />
            <Route path="directorio" element={<Directorio />} />
          </Route>
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/institucional/datos-generales" element={<DatosGenerales/>}/>
          <Route path="/institucional/situacion-geografica" element={<SituacionGeografica />}/>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/personal-de-salud" element={<PersonalDeSalud />} />
          <Route path="/contrataciones" element={<Contrataciones />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route
  path="/transparencia/auditoria"
  element={<Auditoria />}
/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
