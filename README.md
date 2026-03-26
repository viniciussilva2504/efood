# 🍔 eFood — Plataforma de Delivery de Restaurantes

![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9-764ABC?style=flat-square&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

Aplicação front-end de delivery que permite explorar restaurantes, visualizar cardápios detalhados, adicionar itens ao carrinho e finalizar pedidos — com autenticação via Supabase, avaliações de clientes, favoritos, autocomplete de endereço via ViaCEP e geolocalização para cálculo de distância.

## 🚀 Demo ao Vivo

**[efood-parte-2.vercel.app](https://efood-parte-2.vercel.app)**

## 📸 Screenshots

| Home — Lista de Restaurantes | Perfil — Cardápio do Restaurante | Modal / Checkout |
|:---:|:---:|:---:|
| ![Home](docs/screenshot-home.png) | ![Perfil](docs/screenshot-perfil.png) | ![Checkout](docs/screenshot-checkout.png) |

## 🛠️ Stack & Tecnologias

| Categoria | Tecnologia |
|---|---|
| **UI** | React 19, Styled Components |
| **Linguagem** | TypeScript |
| **Estado Global** | Redux Toolkit (slices + RTK Query) |
| **Roteamento** | React Router DOM v7 |
| **Formulários** | Formik + Yup (validação) |
| **API** | RTK Query com fetchBaseQuery |
| **Backend** | Supabase (Auth, PostgreSQL, Storage) |
| **APIs Públicas** | ViaCEP (autocomplete de endereço), Geolocation API |
| **Deploy** | Vercel |

## ✨ Funcionalidades

- **Listagem de restaurantes** — página principal com cards de restaurantes (tipo de cozinha, avaliação, destaque)
- **Cardápio detalhado** — página de perfil do restaurante com modal de produto (foto, descrição, porção, preço)
- **Carrinho de compras** — adicionar/remover itens com estado gerido via Redux Toolkit
- **Checkout completo** — fluxo em etapas: dados de entrega → dados de pagamento → confirmação do pedido
- **Validação de formulários** — validação em tempo real com Formik e Yup
- **Integração com API REST** — consumo de endpoints para listagem, detalhe e finalização de compra via RTK Query
- **Layout responsivo** — interface adaptada para diferentes tamanhos de ecrã

### Integrações

- **Supabase Auth** — login/registo com email e senha, sessões persistentes
- **Favoritos** — marcar/desmarcar restaurantes favoritos (Supabase PostgreSQL)
- **Avaliações de clientes** — sistema de reviews com nota e comentário por restaurante
- **Histórico de pedidos** — pedidos concluídos são guardados na base de dados do utilizador
- **ViaCEP** — autocomplete de endereço no checkout (preenche rua, cidade e UF automaticamente ao digitar o CEP)
- **Geolocalização** — calcula e exibe distância do utilizador a cada restaurante usando Geolocation API + fórmula Haversine

## ⚙️ Como Executar Localmente

**Pré-requisitos:** Node.js 16+ e npm

```bash
# Clone o repositório
git clone https://github.com/viniciussilva2504/efood.git

# Entre na pasta do projeto
cd efood

# Instale as dependências
npm install

# Configure as variáveis de ambiente (ver .env.example)
cp .env.example .env
# Preencha REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY

# Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis (Cart, Checkout, AuthModal, ReviewList, etc.)
├── contexts/         # React Contexts (AuthContext, CartContext)
├── hooks/            # Custom hooks (useGeolocation)
├── pages/            # Páginas da aplicação (Home, Perfil)
├── store/            # Redux store e reducers (Cart slice)
├── services/         # APIs (RTK Query, Supabase, ViaCEP)
├── models/           # Tipagem TypeScript (Cardapio, Checkout)
├── styles/           # Estilos globais
├── utils/            # Funções utilitárias (formatters)
└── routes.tsx        # Configuração de rotas
```

## 📌 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm test` | Executa os testes |
| `npm run build` | Gera o build de produção |

## 🗺️ Roadmap de Evolução

- [x] Adicionar **autenticação** com Supabase (login, registo, sessões)
- [x] Integrar **ViaCEP** para autocomplete de endereço no checkout
- [x] Implementar **geolocalização** com cálculo de distância
- [x] Sistema de **avaliações** e **favoritos** com Supabase
- [ ] Migrar para **Next.js** (App Router + SSR) para melhor SEO e performance
- [ ] Implementar **testes E2E com Cypress** para fluxo completo de checkout
- [ ] Adicionar **skeleton loaders** para melhor UX durante carregamento
- [ ] Implementar **PWA** com service worker para uso offline

## 🧑‍💻 Autor

**Vinicius Silva** — Frontend Developer · React + TypeScript

- GitHub: [@viniciussilva2504](https://github.com/viniciussilva2504)
- LinkedIn: [Vinicius Silva](https://www.linkedin.com/in/viniciussilva2504/)

---

> Projeto desenvolvido como parte da formação Full-Stack, demonstrando domínio de React, TypeScript, Redux Toolkit, integração com APIs REST e boas práticas de desenvolvimento front-end.