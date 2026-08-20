import { useParams, Link } from 'react-router-dom'
import { MODULES } from '../data/modules.ts'
import MarkdownRenderer from '../components/MarkdownRenderer.tsx'

export default function ModulePage() {
  const { id } = useParams<{ id: string }>()
  const moduleItem = MODULES.find((m) => m.id === id)

  if (!moduleItem) {
    return (
      <div className="container module-page-wrapper">
        <h2>Módulo no encontrado</h2>
        <p>El módulo solicitado no existe.</p>
        <Link to="/#contents" className="btn-primary" style={{ marginTop: '16px' }}>
          ← Volver al contenido
        </Link>
      </div>
    )
  }

  return (
    <article className="module-page-wrapper">
      <div className="container">
        <div className="module-nav-bar">
          <Link to="/#contents" className="nav-back-link">
            ← Volver al contenido
          </Link>
        </div>

        <div className="module-content-card">
          <MarkdownRenderer content={moduleItem.content} />
        </div>
      </div>
    </article>
  )
}
