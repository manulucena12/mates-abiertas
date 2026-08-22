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
    description: 'Familiarízate con el lenguaje, la notación formal y las proposiciones lógicas sobre las que están construidas las matemáticas.',
    content: modulo0Content,
  },
  {
    id: '1',
    number: 1,
    title: 'Módulo 1: Trigonometría fundamental',
    mathematician: 'Pitágoras de Samos',
    image: '/pitagoras.png',
    description: 'Explora las relaciones entre los lados y ángulos de los triángulos, la identidad trigonométrica fundamental y el círculo unitario.',
    content: modulo0Content,
  },
]
