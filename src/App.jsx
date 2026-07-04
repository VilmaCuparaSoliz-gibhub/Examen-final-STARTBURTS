import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
<<<<<<< HEAD
import PlantelEjecutivo from './components/institucionalidad/plantel-ejecutivo.jsx'
import EstructuraOrganica from './components/institucionalidad/estructura-organica.jsx'
import Directorio from './components/institucionalidad/directorio.jsx'
=======
import Inicio from './pages/inicio'
import Institucional from './pages/institucional'
import Servicios from './pages/servicios'
import PersonalDeSalud from './pages/personal-de-salud'
import Contrataciones from './pages/contrataciones'
import Transparencia from './pages/transparecia'
import DatosGenerales from './components/institucionalidad/datos-generales'
import SituacionGeografica from './components/institucionalidad/situacion-geografica'
import PlantelEjecutivo from './components/institucionalidad/plantel-ejecutivo'
import EstructuraOrganica from './components/institucionalidad/estructura-organica'
import Directorio from './components/institucionalidad/directorio'

>>>>>>> d0ef51e4f3ac948c15b3a8c73bfaac307a8059d6
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/ejemplo" element={<PlantelEjecutivo />} />
          <Route path="/estructura-organica" element={<EstructuraOrganica />} />
          <Route path="/directorio" element={<Directorio />} />
=======
          <Route path="/institucional" element={<Institucional />} />
=======
          <Route path="/institucional" element={<Institucional />}>
            <Route index element={<DatosGenerales />} />
            <Route path="datos-generales" element={<DatosGenerales />} />
            <Route path="situacion-geografica" element={<SituacionGeografica />} />
            <Route path="plantel-ejecutivo" element={<PlantelEjecutivo />} />
            <Route path="estructura-organica" element={<EstructuraOrganica />} />
            <Route path="directorio" element={<Directorio />} />
          </Route>
>>>>>>> ba10e89ac474be4cf1a78ba587a8e62323a9f463
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/personal-de-salud" element={<PersonalDeSalud />} />
          <Route path="/contrataciones" element={<Contrataciones />} />
          <Route path="/transparencia" element={<Transparencia />} />
>>>>>>> d0ef51e4f3ac948c15b3a8c73bfaac307a8059d6
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
