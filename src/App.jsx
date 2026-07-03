import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
