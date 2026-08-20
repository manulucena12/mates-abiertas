import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import ModulePage from './pages/ModulePage.tsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modulos/:id" element={<ModulePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
