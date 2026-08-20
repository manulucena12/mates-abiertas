export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Curso introductorio a las matemáticas desde razonamientos y pasos lógicos
          </h1>

          <p className="hero-subtitle">
            Completamente abierto, gratis y sin inscripción
          </p>

          <p className="hero-description">
            Inspirado en la filosofía de educación accesible de{" "}
            <a
              href="https://fullstackopen.com/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stack Open
            </a>
            . Aprende las matemáticas esenciales comprendiendo el origen de cada
            concepto, deduciendo resultados con lógica y sin memorizar fórmulas.
          </p>

          <a href="#contents" className="btn-primary">
            Empezar curso
          </a>
        </div>

        <div className="hero-visual">
          <div className="euler-card">
            <div className="euler-card-header">
              <span>Leonhard Euler</span>
            </div>

            <img
              src="/euler.png"
              alt="Ilustración de Leonhard Euler"
              className="euler-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
