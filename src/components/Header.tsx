import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand">
          Matemáticas Abiertas
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <a 
                href="https://github.com/manulucena12/mates-abiertas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                Github
              </a>
            </li>
            <li><a href="#about" className="nav-link">Sobre el curso</a></li>
            <li><Link to="/#contents" className="nav-link">Contenido</Link></li>
            <li><a href="#faq" className="nav-link">Preguntas Frecuentes</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
