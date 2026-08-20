import { Link } from 'react-router-dom'
import type { ModuleItem } from '../data/modules.ts'

interface ModuleCardProps {
  module: ModuleItem
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div className="euler-card module-card">
      <div className="euler-card-header">
        <span>{module.mathematician}</span>
      </div>

      <img
        src={module.image}
        alt={`Ilustración de ${module.mathematician}`}
        className="euler-img module-img"
      />

      <div className="module-card-body">
        <h3 className="module-title">{module.title}</h3>
        <p className="module-summary">{module.description}</p>
        <Link to={`/modulos/${module.id}`} className="btn-primary btn-module">
          Ver módulo
        </Link>
      </div>
    </div>
  )
}
