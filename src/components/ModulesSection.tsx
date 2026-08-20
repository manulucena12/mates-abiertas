import ModuleCard from './ModuleCard.tsx'
import { MODULES } from '../data/modules.ts'

export default function ModulesSection() {
  return (
    <section id="contents" className="modules-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contenido del curso</h2>
        </div>

        <div className="modules-grid">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}
