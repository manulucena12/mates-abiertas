import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MODULES } from '../data/modules.ts'

const MarkdownRenderer = lazy(() => import('../components/MarkdownRenderer.tsx'))

export default function ModulePage() {
  const { id } = useParams<{ id: string }>()
  const moduleItem = MODULES.find((module) => module.id === id)
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!moduleItem) return

    let cancelled = false
    setContent(null)
    setError(false)

    moduleItem.loadContent().then(
      (loadedContent) => {
        if (!cancelled) setContent(loadedContent)
      },
      () => {
        if (!cancelled) setError(true)
      },
    )

    return () => {
      cancelled = true
    }
  }, [moduleItem])

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
          {error ? (
            <p>No se pudo cargar el módulo. Inténtalo de nuevo.</p>
          ) : content === null ? (
            <p aria-live="polite">Cargando módulo...</p>
          ) : (
            <Suspense fallback={<p aria-live="polite">Preparando contenido...</p>}>
              <MarkdownRenderer content={content} />
            </Suspense>
          )}
        </div>
      </div>
    </article>
  )
}
