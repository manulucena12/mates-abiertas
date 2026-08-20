# AGENTS.md

Instrucciones para agentes de IA que trabajen en este repositorio. El README.md describe el proyecto; este archivo define cómo se programa.

## Stack

- Vite 8 + React 19 + TypeScript, con Bun como package manager y runner.
- Lint con oxlint (NO ESLint) según `.oxlintrc.json`.
- React Compiler activo vía `@rolldown/plugin-babel` + `reactCompilerPreset` en `vite.config.ts`.
- Rendering de Markdown/LaTeX: katex, react-markdown, rehype-katex, remark-math.

## Comandos

- `bun run dev` — servidor de desarrollo
- `bun run typecheck` — typecheck solo (`tsc -b`)
- `bun run lint` — oxlint
- `bun run build` — `tsc -b && vite build` (typecheck incluido)
- `bun run preview` — previsualizar build

Verificación antes de terminar: `bun run lint` + `bun run typecheck` + `bun run build`.

## Reglas de TypeScript (rompen el build)

- `erasableSyntaxOnly: true` — prohibidos `enum`, namespaces y parameter properties en clases. Usar tipos, uniones y `const` objects.
- `verbatimModuleSyntax: true` — obligatorio `import type` para tipos.
- `noUnusedLocals` / `noUnusedParameters` — no dejar código muerto.
- Importar con extensión `.tsx`/`.ts` está permitido y es el estilo usado (`import App from './App.tsx'`).

## React Compiler

- Está habilitado en todo el proyecto: NO memoizar a mano (`useMemo`/`useCallback`/`React.memo`) salvo necesidad real.
- Reglas de hooks estrictas (`react/rules-of-hooks` es error): hooks solo en top-level de componentes/hooks propios.

## Math / Markdown

- Al renderizar LaTeX con `rehype-katex` se debe importar el CSS: `import 'katex/dist/katex.min.css'`.

## Disciplina

- No tocar git (commit, push, branch, etc.) ni instalar dependencias sin preguntar primero.
- Dependencias livianas siempre: el proyecto corre con bun, oxlint y stack mínimo a propósito. Antes de sumar una dependencia, evaluar si aporta más de lo que pesa.
- Archivos livianos: máximo 150 líneas por archivo. Partir componentes/módulos antes de superar el límite.
- Commits con conventional commits, mensajes en español (estilo del historial).
- Respetar el CI en todo momento (`.github/workflows/CI.yml`: audit + lint + build sobre `bun.lock` congelado). No cambiar scripts que el CI ejecuta sin preguntar.