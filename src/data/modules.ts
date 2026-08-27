import modulo0Content from '../../modules/0_literatura.md?raw'

export interface ModuleItem {
  id: string
  number: number
  title: string
  mathematician: string
  image: string
  description: string
  content: string
}

export const MODULES: ModuleItem[] = [
  {
    id: '0',
    number: 0,
    title: 'Módulo 0: Literatura matemática',
    mathematician: 'René Descartes',
    image: '/descartes.png',
    description: 'Empezaremos desde lo más básico para que puedas leer el lenguaje matemático.',
    content: modulo0Content,
  },
  {
    id: '1',
    number: 1,
    title: 'Módulo 1: Estudio de ecuaciones lineales',
    mathematician: 'Carl Friedrich Gauss',
    image: '/gauss.png',
    description: 'Entenderemos el álgebra sobre el que se sustentan las ecuaciones de toda la vida.',
    content: modulo0Content,
  },
]
