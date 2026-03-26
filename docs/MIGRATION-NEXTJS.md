# Guia de Migração: CRA → Next.js

## Por que migrar?

- **CRA está descontinuado** — O React recomenda oficialmente frameworks como Next.js
- **SSR/SSG** — Melhor SEO e performance (crítico para portfólios)
- **App Router** — Roteamento baseado em ficheiros, layouts aninhados
- **Mercado** — Next.js é requisito na maioria das vagas front-end em 2026

## Passos de Migração

### 1. Criar projeto Next.js

```bash
npx create-next-app@latest efood-next --typescript --tailwind --app --src-dir
cd efood-next
```

### 2. Instalar dependências do projeto atual

```bash
npm install @reduxjs/toolkit react-redux styled-components formik yup
```

### 3. Configurar Styled Components para SSR

```js
// next.config.js
const nextConfig = {
  compiler: {
    styledComponents: true
  }
}
module.exports = nextConfig
```

### 4. Mapear rotas CRA → App Router

| CRA (React Router) | Next.js (App Router) |
|---|---|
| `routes.tsx` → `/` | `src/app/page.tsx` |
| `routes.tsx` → `/perfil/:id` | `src/app/perfil/[id]/page.tsx` |

### 5. Migrar componentes

1. Copiar `src/components/` → `src/components/` (quase 1:1)
2. Copiar `src/store/` → `src/store/` 
3. Copiar `src/services/` → `src/services/`
4. Copiar `src/utils/` → `src/utils/`

### 6. Adaptar Provider (Redux + Styled Components)

```tsx
// src/app/providers.tsx
'use client'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
```

```tsx
// src/app/layout.tsx
import Providers from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### 7. Marcar componentes client-side

Componentes com hooks (`useState`, `useEffect`, `useSelector`, `useDispatch`) precisam do directive:

```tsx
'use client'
// resto do componente
```

### 8. Componentes que podem ser Server Components

- `Footer` (estático)
- `Tag` (estático)
- `Button` (se não usar hooks)

### 9. Deploy

```bash
# Vercel detecta Next.js automaticamente
vercel --prod
```

## Ordem de migração recomendada

1. **Layout** (Header + Footer) — estrutura base
2. **Home** — lista de restaurantes com `fetch` server-side
3. **Perfil** — página dinâmica com `[id]`
4. **Cart + Checkout** — client components (Redux)
5. **Testes** — adaptar para Next.js testing

## Tempo estimado

- Migração básica funcional: **3-5 dias**
- Polimento + testes: **+2-3 dias**
