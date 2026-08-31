import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MODULES } from '../data/modules.ts'

const MarkdownRenderer = lazy(() => import('../components/MarkdownRenderer.tsx'))

type ModuleLoadState = {
  id: string
  content?: string
  error?: boolean
}

export default function ModulePage() {
  const { id } = useParams<{ id: string }>()
  const moduleItem = MODULES.find((module) => module.id === id)
  const [loadState, setLoadState] = useState<ModuleLoadState | null>(null)

  useEffect(() => {
    if (!moduleItem) return

    let cancelled = false

    moduleItem.loadContent().then(
      (content) => {
        if (!cancelled) setLoadState({ id: moduleItem.id, content })
      },
      () => {
        if (!cancelled) setLoadState({ id: moduleItem.id, error: true })
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
        <Link to="/" state={{ scrollTo: 'contents' }} className="btn-primary" style={{ marginTop: '16px' }}>
          ← Volver al contenido
        </Link>
      </div>
    )
  }

  const currentLoad = loadState?.id === moduleItem.id ? loadState : null
  const content = currentLoad?.content ?? null
  const error = currentLoad?.error === true

  return (
    <article className="module-page-wrapper">
      <div className="container">
        <div className="module-nav-bar">
          <Link to="/" state={{ scrollTo: 'contents' }} className="nav-back-link">
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
