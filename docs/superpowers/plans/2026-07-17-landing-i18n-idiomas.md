# Multi-idioma (PT / EN / ES) na landing page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A landing page (`listinha-landing`, Next.js 15 App Router) passa a servir português, inglês (padrão) e espanhol em toda a home, nas 4 páginas de `/funcionalidades` e na estrutura do blog, com URLs prefixadas por idioma (`/pt`, `/en`, `/es`) e redirects 301 preservando o SEO já acumulado em PT.

**Architecture:** next-intl com `localePrefix: 'always'`. Todo texto hoje hardcoded em JSX é extraído para `messages/{pt,en,es}.json` (namespaces por página) e consumido via `useTranslations()`/`getTranslations()`. Rotas migram de `app/*` para `app/[locale]/*`. URLs legadas sem prefixo recebem redirect 301 determinístico para `/pt/...` via `next.config.js`, sem depender da negociação de idioma do middleware. Os 17 posts de blog existentes continuam só em `/pt/blog/<slug>` — fora de escopo a tradução deles nesta fase.

**Tech Stack:** Next.js 15 (App Router), React 19, next-intl, sem TypeScript.

## Global Constraints

- **Marca "Mise" nunca é traduzida** — permanece hardcoded em todo componente, nunca vira chave de dicionário.
- **Tom, não tradução literal** — EN/ES são reescritos com equivalente natural, preservando a voz Mise (direta, "você"/"you"/"tú", sem ponto final em botões/títulos curtos), conforme `.claude/CLAUDE.md` deste repo.
- **Nenhum SVG inline novo** — ícones seguem usando o componente `<Icon>`/`<BrandIcon>` já existente; esta feature não adiciona iconografia nova.
- **Ratio texto/HTML** — páginas traduzidas mantêm o mesmo volume de parágrafos de corpo em EN/ES que em PT (regra do `CLAUDE.md`), nunca versões resumidas.
- **Identidade das URLs antigas é PT** — qualquer redirect de URL legada aponta para `/pt/...`, nunca para `/en/...`, para proteger o ranking orgânico já acumulado.
- **Fallback obrigatório** — chave de dicionário ausente num idioma cai pro texto em `pt`; se nem `pt` tiver a chave, mostra a chave crua (nunca undefined/branco).
- **Sem framework de teste automatizado neste projeto** — verificação é `npm run build` limpo, scripts `node -e "..."` ad-hoc para checar completude de JSON, e navegação manual no browser.

---

## Mapa de arquivos

| Arquivo | Ação |
|---|---|
| `package.json` | Modificar — adiciona dependência `next-intl` |
| `i18n/routing.js` | Criar — locales, defaultLocale, localePrefix |
| `i18n/request.js` | Criar — carrega dicionário por locale, fallback pra pt |
| `i18n/navigation.js` | Criar — `Link`/`useRouter`/`usePathname` locale-aware |
| `middleware.js` | Criar — negociação de idioma via next-intl |
| `next.config.js` | Modificar — plugin next-intl + redirects legados |
| `messages/pt.json`, `messages/en.json`, `messages/es.json` | Criar — dicionários completos |
| `app/layout.js` | Deletar — conteúdo migra pra `app/[locale]/layout.js` |
| `app/[locale]/layout.js` | Criar — root layout com `<html lang={locale}>`, fontes, GA, `NextIntlClientProvider` |
| `app/[locale]/page.js` | Mover de `app/page.js` + traduzir |
| `app/[locale]/funcionalidades/page.js` | Mover + traduzir |
| `app/[locale]/funcionalidades/lista-de-compras/page.js` | Mover + traduzir |
| `app/[locale]/funcionalidades/despensa/page.js` | Mover + traduzir |
| `app/[locale]/funcionalidades/cardapio-semanal/page.js` | Mover + traduzir |
| `app/[locale]/funcionalidades/receitas/page.js` | Mover + traduzir |
| `app/[locale]/blog/layout.js`, `page.js`, `blog.css`, `<slug>/page.js` (×16) | Mover; `page.js`/`layout.js` traduzidos, posts com guarda de locale |
| `components/SiteNav.js`, `components/NavDropdown.js` | Modificar — traduzidos + `Link` locale-aware |
| `components/LanguageSwitcher.js` | Criar — chips PT/EN/ES |
| `app/globals.css` | Modificar — estilo `.lang-switcher` |
| `app/sitemap.js` | Modificar — 3 variantes de locale + fix dos posts faltando |

---

### Task 1: Instalar next-intl e configurar roteamento base

**Files:**
- Modify: `package.json`
- Create: `i18n/routing.js`
- Create: `i18n/request.js`
- Create: `i18n/navigation.js`
- Create: `middleware.js`

**Interfaces:**
- Produces: `routing` (export de `i18n/routing.js`, usado por `request.js`, `middleware.js`, `app/[locale]/layout.js` para `generateStaticParams`); `Link`, `useRouter`, `usePathname`, `redirect`, `getPathname` (exports de `i18n/navigation.js`, usados por todo componente com link interno ou troca de idioma).

- [ ] **Step 1: Instalar a dependência**

Run: `npm install next-intl`
Expected: `package.json` ganha `"next-intl": "^..."` em `dependencies`, `package-lock.json` atualizado, sem erros.

- [ ] **Step 2: Criar `i18n/routing.js`**

```js
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
})
```

- [ ] **Step 3: Criar `i18n/request.js`**

```js
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import ptMessages from '../messages/pt.json'

function getNested(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), obj)
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    getMessageFallback({ namespace, key }) {
      const path = [namespace, key].filter(Boolean).join('.')
      const ptValue = getNested(ptMessages, path)
      return typeof ptValue === 'string' ? ptValue : path
    },
  }
})
```

- [ ] **Step 4: Criar `i18n/navigation.js`**

```js
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
```

- [ ] **Step 5: Criar `middleware.js` na raiz do projeto**

```js
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
```

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json i18n/routing.js i18n/request.js i18n/navigation.js middleware.js
git commit -m "feat(i18n): instala next-intl e configura roteamento base"
```

---

### Task 2: Dicionários completos `messages/{pt,en,es}.json`

**Files:**
- Create: `messages/pt.json`
- Create: `messages/en.json`
- Create: `messages/es.json`

**Interfaces:**
- Produces: os namespaces `site`, `nav`, `common`, `home`, `funcionalidadesHub`, `svcListaDeCompras`, `svcDespensa`, `svcCardapioSemanal`, `svcReceitas`, `blogIndex` — chaves exatas consumidas por Tasks 4-13 via `useTranslations('<namespace>')`.
- Consumes: nada (dados estáticos).

Este é o task mais longo do plano — os três arquivos têm o conteúdo completo definido abaixo. Strings com formatação embutida (itálico, negrito, quebra de linha, trecho destacado) usam tags XML no estilo next-intl rich text: `<em>`, `<strong>`, `<br></br>`, `<accent>` — consumidas via `t.rich()` nos tasks de wiring (não via `t()` simples).

- [ ] **Step 1: Escrever `messages/pt.json`**

```json
{
  "site": {
    "title": "Mise — Cozinha em paz, do seu jeito.",
    "description": "O app que conecta despensa, receitas e lista de compras. Pra nunca mais faltar nada.",
    "ogDescription": "O app que conecta despensa, receitas e lista de compras. Grátis."
  },
  "nav": {
    "features": "Funcionalidades",
    "blog": "Blog",
    "dropdown": {
      "lista": { "label": "Lista de compras", "desc": "Organizada por corredor, offline" },
      "despensa": { "label": "Despensa", "desc": "Sabe o que falta antes de ir ao mercado" },
      "receitas": { "label": "Receitas", "desc": "Filtra pelo que tem em casa" },
      "cardapio": { "label": "Cardápio semanal", "desc": "Gera lista de compras automática" }
    }
  },
  "common": {
    "skipLink": "Pular para o conteúdo",
    "ctaSmall": "Comece grátis",
    "ctaOpenAppFree": "Abrir o app grátis",
    "ctaOpenMiseFree": "Abrir o Mise grátis",
    "allFeatures": "← Todas as funcionalidades",
    "readArticle": "Ler artigo →",
    "openApp": "Abrir o app",
    "openAppArrow": "Abrir o app →",
    "footerCopy": "Feito com carinho pra quem gosta de cozinhar.",
    "footerCopyright": "© 2024 Mise",
    "footnoteChannels": "CELULAR · TABLET · DESKTOP · OFFLINE",
    "footnoteNoSignup": "sem cadastro · sem cartão · funciona offline"
  },
  "home": {
    "hero": {
      "title": "Cozinha em paz, <accent>do seu jeito.</accent>",
      "sub": "A cozinha não devia te custar tanta cabeça. Despensa, receitas e lista de compras conectadas — você para de decidir e começa a cozinhar.",
      "ctaHow": "Ver como funciona ↓",
      "meta1": "Funciona offline",
      "meta2": "Compartilha no zap",
      "meta3": "Celular e desktop",
      "float1Label": "Acabou o alho",
      "float1Sub": "na despensa",
      "float2Label": "Compartilhada",
      "float2Sub": "com a casa toda",
      "phoneTitle": "Lista da semana",
      "phoneSec1": "Hortifruti",
      "phoneItemAlho": "Alho",
      "phoneItemTomate": "Tomate italiano",
      "phoneSec2": "Mercearia",
      "phoneItemAzeite": "Azeite extra virgem",
      "phoneItemOvos": "Ovos",
      "phoneItemFrango": "Peito de frango",
      "tabLista": "Lista",
      "tabDespensa": "Despensa",
      "tabReceitas": "Receitas",
      "tabPlano": "Plano"
    },
    "pain": {
      "eyebrow": "Você já passou por isso",
      "title": "A cozinha perfeita existe.<br></br>Só que ela nunca tem o que precisa.",
      "sub": "Não é falta de organização. É que nada te ajuda na sua rotina de verdade.",
      "card1Title": "Voltou do mercado sem o alho.",
      "card1Desc": "De novo. Você olha a gôndola, tenta lembrar de cabeça, compra o que acha que precisa. Chega em casa e <em>falta exatamente aquilo.</em>",
      "card2Title": "“É essa marca aqui mesmo?”",
      "card2Desc": "Alguém manda foto de 3 marcas. Você para tudo, responde. <em>Compram a errada assim mesmo.</em>",
      "card3Title": "App de lista virou planilha.",
      "card3Desc": "Cheio de função que você não usa. Na hora da pressa, você ainda abre o bloco de notas. <em>Algo tá errado.</em>",
      "transitionLabel": "Por isso fizemos o Mise",
      "transitionTitle": "Um app que entende sua cozinha <em>do jeito que ela é.</em> Sem complicação, sem frescura."
    },
    "features": {
      "eyebrow": "Funcionalidades",
      "title": "A despensa lembra. O plano se monta. A lista aparece.",
      "sub": "Cada um resolve um pedaço do problema. Juntos, resolvem a semana.",
      "lista": {
        "tag": "Lista de compras",
        "title": "Compartilhe num toque. Comprem certo.",
        "desc": "Organize por mercado ou corredor, mande pelo zap, e quem for às compras vê exatamente o que pegar.",
        "b1": "Por loja ou por corredor",
        "b2": "Compartilhada via WhatsApp",
        "b3": "Histórico do que você já comprou",
        "vmTitle": "Lista da semana",
        "vmItem1": "Leite integral",
        "vmItem2": "Ovos",
        "vmItem3": "Azeite",
        "vmItem4": "Peito de frango"
      },
      "despensa": {
        "tag": "Despensa",
        "title": "Sempre tenha o que precisa pra cozinhar.",
        "desc": "Monta sua despensa ideal uma vez. O que acabou fica marcado — quando for fazer a lista, você já sabe o que comprar.",
        "b1": "Sugestões pra montar a despensa completa",
        "b2": "Adiciona à lista num toque",
        "b3": "Marca o que tá acabando, automaticamente",
        "vmTitle": "Minha despensa",
        "vmCount": "7 itens",
        "chip1": "Alho", "chip2": "Cebola", "chip3": "Azeite", "chip4": "Sal", "chip5": "Ovos", "chip6": "Farinha", "chip7": "Tomate", "chipAdd": "+ Adicionar"
      },
      "receitas": {
        "tag": "Receitas",
        "title": "O caderno de receitas que você nunca teve.",
        "desc": "Salva de qualquer lugar — Instagram, YouTube, Google, ou na mão. Sem foto bonita pra atrapalhar. Só o que importa: nome e ingredientes.",
        "b1": "Captura com um link de qualquer site",
        "b2": "Ingredientes integrados com a lista",
        "b3": "Visual limpo, sem distração",
        "vmTitle": "Minhas receitas",
        "vmCount": "12 salvas",
        "recipe1": "Macarrão ao sugo",
        "recipe2": "Frango grelhado com limão",
        "recipe3": "Bolo de cenoura da vovó",
        "recipe4": "Salada caesar"
      },
      "plano": {
        "tag": "Plano da semana",
        "title": "Semana planejada, lista pronta.",
        "desc": "Monte o cardápio da semana com suas receitas. Num toque, o que falta vai direto pra lista de compras.",
        "b1": "Integrado com suas receitas",
        "b2": "Gera a lista automaticamente",
        "b3": "Evita o “de novo macarrão hoje?”",
        "vmTitle": "Plano da semana",
        "vmGenerate": "→ Gerar lista",
        "day1": "Frango grelhado com limão",
        "day2": "Macarrão ao sugo",
        "day3Empty": "Sem plano",
        "day4": "Salada caesar",
        "day5": "Omelete de legumes"
      }
    },
    "how": {
      "eyebrow": "Como funciona",
      "title": "Três passos. Sem onboarding chato.",
      "sub": "Você não vai precisar de tutorial. Sério.",
      "prose": "O Mise conecta os quatro pilares da rotina de cozinha — despensa, receitas, cardápio semanal e lista de compras — num app só. Quando você marca um item como esgotado na despensa, ele aparece como sugestão na lista. Quando monta o cardápio com receitas salvas, os ingredientes que faltam entram direto na lista de compras. Uma ação no app resolve a próxima etapa automaticamente — sem abrir outro app, sem copiar e colar, sem esquecer.",
      "step1Title": "Monta sua despensa",
      "step1Desc": "Em 2 minutos, você adiciona os básicos que sempre tem em casa. Pode usar as sugestões do app — não precisa começar do zero.",
      "step2Title": "Cria a lista de mercado",
      "step2Desc": "Digita os itens, escolhe um corredor ou loja, e compartilha pelo zap. Quem for às compras vê tudo organizado.",
      "step3Title": "Marca o que comprou",
      "step3Desc": "No corredor do mercado, vai marcando o que pegou. A despensa atualiza sozinha. Pronto, bora cozinhar."
    },
    "founder": {
      "eyebrow": "Por que o Mise existe",
      "quote": "“Eu sempre sofria com algo faltando em casa quando queria cozinhar. E os apps que existiam eram cheios de imagens, planejamento elaborado e função demais — só me faziam perder tempo.<br></br><br></br><strong>Então fiz o Mise:</strong> um jeito fácil de organizar a despensa pra quem gosta de cozinhar.”",
      "name": "Gus",
      "role": "· Criador do Mise"
    },
    "who": {
      "eyebrow": "Para quem é",
      "title": "Para quem é o Mise",
      "p1": "O Mise foi feito para quem cozinha em casa com alguma frequência e já cansou de improvisar. Não é para chef, não é para quem quer montar a cozinha perfeita — é para quem quer sair do mercado com o que precisa e entrar na cozinha sabendo o que vai fazer.",
      "p2": "Funciona bem para casais que dividem as compras, famílias que planejam a semana juntos, quem mora sozinho e tenta não desperdiçar, repúblicas que precisam de lista compartilhada. A lógica é a mesma: saber o que tem em casa, planejar o que vai cozinhar e comprar só o que falta — sem voltar ao mercado no meio da semana.",
      "p3": "Quem usa o Mise há mais de um mês normalmente reduz de três para uma a quantidade de viagens semanais ao supermercado. A lista gerada pelo cardápio elimina os itens por impulso. A despensa elimina a compra duplicada. O resultado aparece na conta do mercado — não num tutorial de organização que você nunca vai terminar."
    },
    "blog": {
      "eyebrow": "Blog",
      "title": "Dicas de quem faz lista de verdade",
      "post1Tag": "Lista de compras",
      "post1Title": "Lista básica de compras: guia com 80+ itens pra copiar",
      "post1Desc": "Os 7 grupos essenciais, quanto custa por mês e dicas pra economizar no supermercado.",
      "post2Tag": "Casa nova",
      "post2Title": "Lista de compras para casa nova: o que não pode faltar",
      "post2Desc": "60+ itens por cômodo, o que comprar primeiro e estimativa de custo por perfil.",
      "seeAll": "Ver todos os artigos →"
    },
    "cta": {
      "eyebrow": "Comece hoje",
      "title": "Cozinha organizada, <em>do seu jeito.</em>",
      "sub": "Grátis. Sem cartão de crédito. Sem cadastro longo. Bora?"
    }
  },
  "funcionalidadesHub": {
    "meta": {
      "title": "Funcionalidades — Mise",
      "description": "Lista de compras gratuita e compartilhada, cardápio semanal com lista automática e receitas com o que tem em casa. Tudo conectado no mesmo app.",
      "ogTitle": "Funcionalidades — Mise",
      "ogDescription": "Lista de compras, cardápio semanal e receitas. Três coisas que funcionam juntas. Grátis."
    },
    "hero": {
      "eyebrow": "Funcionalidades",
      "title": "A despensa lembra. O plano se monta.<br></br><accent>A lista aparece.</accent>",
      "sub": "Lista de compras, despensa, receitas e cardápio semanal — conectados no mesmo app. Cada um resolve um pedaço do problema. Juntos, resolvem a semana."
    },
    "cards": {
      "lista": { "eyebrow": "Lista de compras", "title": "Organizada por corredor. Compartilhada. Grátis.", "desc": "Cria a lista em casa, compartilha pelo WhatsApp e vai ao mercado na ordem dos corredores. Funciona offline.", "tag1": "100% grátis", "tag2": "Compartilhada", "tag3": "Offline" },
      "despensa": { "eyebrow": "Despensa", "title": "Sempre tenha o que precisa pra cozinhar.", "desc": "Monta sua despensa ideal uma vez. O que acabou fica marcado — quando for fazer a lista, você já sabe o que comprar.", "tag1": "Sugestões automáticas", "tag2": "Adiciona à lista", "tag3": "Cruza com receitas" },
      "cardapio": { "eyebrow": "Plano da semana", "title": "Cardápio semanal que gera lista de compras automática.", "desc": "Monta o cardápio de segunda a domingo. O app cruza com a despensa e joga os ingredientes que faltam direto na lista.", "tag1": "7 dias", "tag2": "Lista automática", "tag3": "Menos desperdício" },
      "receitas": { "eyebrow": "Receitas", "title": "Suas receitas. Filtradas pelo que você tem em casa.", "desc": "Salva as receitas que já faz. O app mostra o que dá pra cozinhar hoje — sem passar no mercado antes.", "tag1": "Anotar receitas", "tag2": "Filtro por ingredientes", "tag3": "Lista da receita" },
      "cardLink": "Ver funcionalidade"
    },
    "connect": {
      "title": "Como as quatro ferramentas funcionam juntas",
      "p1": "O Mise não é um app com quatro funções separadas — é um ciclo. Começa pela despensa: você monta o estoque ideal da sua casa uma vez. Quando algo acaba, marca no app. Na hora de planejar a semana, você escolhe as receitas e o Mise cruza com a despensa — os ingredientes que faltam entram automaticamente na lista de compras.",
      "p2": "Você vai ao mercado, compra exatamente o que precisa e marca na lista conforme coloca no carrinho. Na volta, a despensa já está atualizada. Essa conexão resolve um problema que apps isolados não resolvem: a lacuna entre saber o que tem em casa, planejar o que vai cozinhar e saber o que falta comprar.",
      "p3": "Tudo isso sem cadastro obrigatório na largada, sem assinatura, funcionando offline dentro do mercado. Você começa a usar antes de criar conta — e as funcionalidades essenciais nunca ficam bloqueadas.",
      "p4": "O resultado prático: uma família que antes fazia três viagens ao mercado por semana pode reduzir para uma, com uma lista completa gerada pelo próprio app. Quem mora sozinho para de comprar por impulso porque sabe exatamente o que falta. Estimativas de comportamento de consumo mostram que compras sem planejamento custam entre 20% e 30% a mais — entre itens duplicados, produtos que vencem antes de usar e ingredientes esquecidos que faziam parte de um plano que não existia. O Mise corta esse desperdício direto na origem, conectando o que você tem com o que vai cozinhar e o que precisa comprar."
    },
    "cta": {
      "title": "Começa pela lista.<br></br><em>O resto cai no lugar.</em>",
      "sub": "Grátis, sem cadastro na largada, funciona offline."
    }
  }
}
```

Continue no mesmo objeto de `messages/pt.json` — as chaves abaixo (`svcListaDeCompras`, `svcDespensa`, `svcCardapioSemanal`, `svcReceitas`, `blogIndex`) entram como irmãs de `site`/`nav`/`common`/`home`/`funcionalidadesHub` já escritas acima, fechando o mesmo objeto JSON:

```json
  "svcListaDeCompras": {
    "meta": {
      "title": "App de Lista de Compras Gratuito e Compartilhada — Mise",
      "description": "Mise é o app gratuito de lista de compras organizada por corredor e compartilhada em tempo real. Funciona offline, sem cadastro obrigatório.",
      "ogTitle": "App de Lista de Compras Gratuito e Compartilhada — Mise",
      "ogDescription": "Lista de compras organizada por corredor, compartilhada pelo WhatsApp, funciona offline. 100% grátis."
    },
    "hero": {
      "eyebrow": "Lista de compras",
      "title": "App de lista de compras<br></br>gratuito e <accent>compartilhada.</accent>",
      "sub": "Você cria a lista em casa, compartilha pelo zap e vai ao mercado seguindo a ordem dos corredores. Sem voltar pro início porque lembrou do papel higiênico na última gôndola."
    },
    "how": {
      "eyebrow": "Como funciona",
      "title": "Três passos. Nada mais.",
      "step1Title": "Monta a lista em casa",
      "step1Desc": "Adiciona os itens, o app organiza por corredor automaticamente. Hortifruti, carnes, mercearia — tudo na ordem certa do supermercado.",
      "step2Title": "Compartilha pelo WhatsApp",
      "step2Desc": "Manda o link pra quem vai ao mercado junto. Os dois veem a mesma lista em tempo real — ninguém compra o que o outro já colocou no carrinho.",
      "step3Title": "Vai ao mercado e marca",
      "step3Desc": "Funciona offline, com sinal ruim ou sem. Marca cada item conforme coloca no carrinho. Lista zerada na saída do caixa."
    },
    "feature": {
      "eyebrow": "O que tem",
      "title": "Tudo que uma lista de compras precisa ter.",
      "desc": "Sem funcionalidade desnecessária. Sem cadastro obrigatório antes de poder usar. Só o que resolve o problema de sair de casa sem esquecer nada.",
      "point1Title": "Organizada por corredor",
      "point1Desc": "Hortifruti, carnes, mercearia, limpeza e higiene — agrupados na ordem do supermercado.",
      "point2Title": "Lista compartilhada em tempo real",
      "point2Desc": "Link pelo WhatsApp. Dois celulares, uma lista. O que um adiciona aparece pro outro na hora.",
      "point3Title": "Funciona offline",
      "point3Desc": "Dentro do mercado, no subsolo, sem sinal. A lista não some.",
      "point4Title": "100% gratuito, sem cadastro na largada",
      "point4Desc": "Começa a usar antes de criar conta. Nenhuma função essencial bloqueada.",
      "vmTitle": "Lista do mercado",
      "vmCount": "7 itens",
      "vmSec1": "Hortifruti",
      "vmItem1": "Tomate",
      "vmItem2": "Alho",
      "vmItem3": "Cebola",
      "vmSec2": "Mercearia",
      "vmItem4": "Arroz 5 kg",
      "vmItem5": "Feijão carioca",
      "vmItem6": "Macarrão",
      "vmSec3": "Limpeza",
      "vmItem7": "Detergente"
    },
    "why": {
      "title": "Por que a organização por corredor faz diferença",
      "p1": "Ir ao mercado sem lista é improviso com custo. Pesquisas de comportamento de consumo mostram que compras sem planejamento tendem a gastar entre 20% e 30% a mais — entre itens por impulso e repetições daquilo que você já tinha em casa mas não lembrou.",
      "p2": "Mas uma lista qualquer resolve só metade do problema. Sem organização por corredor, você percorre o supermercado de forma aleatória: vai à seção de limpeza, lembra do feijão, volta pra mercearia, passa pelo hortifruti de novo. Além de cansativo, aumenta a chance de pegar coisa que não estava na lista.",
      "p3": "O Mise agrupa os itens na ordem que você encontra no mercado: hortifruti na entrada, carnes e proteínas a seguir, mercearia, limpeza e higiene no fundo. Você entra, percorre uma vez, marca tudo e sai com o carrinho certo — sem voltar ao mesmo corredor duas vezes.",
      "p4": "A organização por corredor do Mise segue o fluxo real de um supermercado: hortifruti na entrada, carnes e laticínios a seguir, mercearia no meio, limpeza e higiene no fundo. Você entra, percorre uma vez, marca tudo sem voltar ao mesmo corredor duas vezes — e sai em menos tempo do que levaria sem lista. Compartilhar pelo WhatsApp antes de sair de casa garante que quem for junto compre exatamente o que a lista diz, sem ligações no meio do corredor."
    },
    "faq": {
      "eyebrow": "Perguntas diretas",
      "title": "O que as pessoas perguntam",
      "q1": "O app de lista de compras é gratuito?",
      "a1": "Sim, 100% gratuito. Lista de compras, compartilhamento e organização por corredor funcionam sem pagar nada. Nenhuma funcionalidade essencial está bloqueada atrás de assinatura.",
      "q2": "Como compartilhar a lista de compras?",
      "a2": "Você compartilha pelo WhatsApp com um link. Quem receber edita a mesma lista em tempo real — sem precisar instalar nada. Funciona pra casal, família ou qualquer pessoa que divide as compras.",
      "q3": "A lista funciona sem internet dentro do mercado?",
      "a3": "Sim. O Mise é um PWA que carrega offline. A lista fica disponível mesmo com sinal ruim ou sem conexão — comum em mercado grande com subsolo.",
      "q4": "Como a lista de compras é organizada por corredor?",
      "a4": "O app agrupa os itens automaticamente — hortifruti, carnes, mercearia, limpeza, higiene — na ordem que você encontra no supermercado. Você percorre os corredores uma vez e marca tudo sem precisar voltar."
    },
    "cta": {
      "title": "Pare de decidir o que comprar.<br></br><em>Comece a cozinhar.</em>",
      "sub": "Sem cadastro na largada. Começa a usar agora."
    }
  },
  "svcDespensa": {
    "meta": { "title": "App de Controle de Despensa — Mise", "description": "Mise é o app de controle de despensa que marca o que tá acabando e gera lista de compras automática. Monta sua despensa ideal uma vez e nunca mais esquece o que falta.", "ogTitle": "App de Controle de Despensa — Mise", "ogDescription": "Monta sua despensa, marca o que acabou e gera a lista de compras automaticamente. Grátis." },
    "hero": { "eyebrow": "Despensa", "title": "Sempre tenha o que<br></br>precisa pra <accent>cozinhar.</accent>", "sub": "Monta sua despensa ideal uma vez. O que acabou fica marcado — quando for fazer a lista, você já sabe o que comprar sem precisar abrir a geladeira." },
    "how": { "eyebrow": "Como funciona", "title": "Monta uma vez. Usa pra sempre.", "step1Title": "Monta a despensa ideal", "step1Desc": "Adiciona os itens que sempre tem em casa — o app sugere os básicos. Arroz, feijão, azeite, alho, cebola. Em dois minutos, sua despensa está pronta.", "step2Title": "Marca o que acabou", "step2Desc": "Usou o último azeite? Um toque e tá marcado como esgotado. Tá quase acabando? Marca como \"acabando\". O app lembra por você.", "step3Title": "Gera a lista automaticamente", "step3Desc": "Na hora de ir ao mercado, o que está esgotado ou acabando vira sugestão de lista com um toque. Sem abrir a geladeira, sem esquecer nada." },
    "feature": { "eyebrow": "O que tem", "title": "Despensa conectada com lista e receitas.", "desc": "Não é só um inventário. A despensa do Mise fala com a lista de compras e com as receitas — pra você saber o que falta comprar e o que já dá pra cozinhar hoje.", "point1Title": "Sugestões pra montar a despensa completa", "point1Desc": "O app sugere os itens mais comuns pra você adicionar com um toque — sem começar do zero.", "point2Title": "Adiciona à lista num toque", "point2Desc": "O que está esgotado vai direto pra lista de compras. Sem copiar, sem digitar de novo.", "point3Title": "Cruza com suas receitas", "point3Desc": "O app mostra quais receitas dá pra fazer com o que tem na despensa — sem ir ao mercado primeiro.", "point4Title": "Marca o que tá acabando", "point4Desc": "Não precisa esperar acabar pra lembrar. Marca como \"acabando\" e o app já inclui nas próximas compras.", "vmTitle": "Minha despensa", "vmCount": "8 itens", "chip1": "Alho", "chip2": "Cebola", "chip3": "Azeite", "chip4": "Arroz", "chip5": "Feijão", "chip6": "Sal", "chip7": "Leite", "chip8": "Ovos", "outLabel": "Acabou", "outItem1": "Sal", "outItem2": "Leite", "addToList": "+ lista" },
    "why": { "title": "O custo de não saber o que tem em casa", "p1": "A despensa desorganizada não é só questão estética — é financeira. Quando você não sabe o que tem em casa, compra duas vezes o mesmo produto, deixa itens vencerem no fundo da prateleira e ainda chega ao mercado sem saber o que realmente falta.", "p2": "Levantamentos sobre desperdício alimentar mostram que o Brasil descarta cerca de 41 kg de alimento por pessoa por ano — e boa parte desse desperdício começa na compra errada: você compra o que não precisa porque não sabia que ainda tinha.", "p3": "Com a despensa do Mise você monta sua lista ideal de estoque uma vez. Depois, basta marcar o que acabou no momento em que você percebe — não no dia do mercado, quando a memória já falhou. Na hora de ir às compras, a lista já está pré-preenchida com o que falta, sem precisar abrir cada armário pra conferir.", "p4": "A diferença entre uma despensa organizada e uma despensa viva está no hábito de marcar o que acaba no momento em que você percebe — não na semana do mercado, quando você já esqueceu. O Mise torna esse hábito mínimo: um toque quando abre o armário e vê que o sal acabou. Na hora de ir ao mercado, a lista já está pré-preenchida com o que falta. Sem abrir cada armário, sem tentar lembrar o que tinha na última prateleira." },
    "faq": { "eyebrow": "Perguntas diretas", "title": "O que as pessoas perguntam", "q1": "Como o app controla o que tem na despensa?", "a1": "Você monta a despensa ideal uma vez — com os itens que sempre tem em casa. Quando algo acaba ou está acabando, marca no app. Na hora de fazer a lista de compras, o Mise já sabe o que falta.", "q2": "A despensa se conecta com a lista de compras?", "a2": "Sim. O que está marcado como esgotado ou acabando na despensa aparece como sugestão na lista de compras com um toque. Sem precisar lembrar de nada.", "q3": "A despensa funciona com as receitas também?", "a3": "Sim. O app cruza a despensa com as receitas salvas e mostra o que dá pra cozinhar hoje sem passar no mercado. Os ingredientes que faltam vão direto pra lista.", "q4": "Preciso montar a despensa do zero?", "a4": "Não. O Mise sugere os itens mais comuns — arroz, feijão, azeite, alho — pra você adicionar com um toque. Em dois minutos a despensa já tem o básico da sua casa." },
    "cta": { "title": "A despensa lembra.<br></br><em>Você cozinha.</em>", "sub": "Sem cadastro na largada. Começa a usar agora." }
  },
  "svcCardapioSemanal": {
    "meta": { "title": "App de Cardápio Semanal com Lista de Compras Integrada — Mise", "description": "Mise é o app para criar cardápio semanal integrado com lista de compras. Você planeja os 7 dias, o app gera a lista automaticamente com o que falta na despensa.", "ogTitle": "App para Criar Cardápio Semanal com Lista de Compras — Mise", "ogDescription": "Cardápio semanal que gera lista de compras automática. Integrado com a despensa. Grátis." },
    "hero": { "eyebrow": "Plano da semana", "title": "App de cardápio semanal que gera<br></br><accent>lista de compras automática.</accent>", "sub": "Você monta o cardápio de segunda a domingo. O app cruza com o que tem na despensa e adiciona os ingredientes que faltam direto na lista. Acabou a surpresa de sexta-feira." },
    "how": { "eyebrow": "Como funciona", "title": "Do cardápio à lista em três passos.", "step1Title": "Escolhe as receitas da semana", "step1Desc": "Seleciona o que vai cozinhar de segunda a domingo usando as receitas salvas no app. Pode deixar dias livres sem problema.", "step2Title": "App cruza com a despensa", "step2Desc": "O Mise verifica o que você já tem em casa e separa só os ingredientes que faltam. Você não compra o que não precisa.", "step3Title": "Lista gerada, mercado resolvido", "step3Desc": "Uma ida ao mercado cobre a semana inteira. Sem improvisar na quinta porque faltou um ingrediente da receita de sexta." },
    "feature": { "eyebrow": "O que tem", "title": "Planejamento que conecta cardápio, despensa e lista.", "desc": "Não é só um calendário de refeições. É um sistema que elimina o espaço entre \"o que vou cozinhar\" e \"o que preciso comprar\".", "point1Title": "7 dias de uma vez", "point1Desc": "Planeja toda a semana antes de ir ao mercado. Uma viagem. Sem improvisos no meio da semana.", "point2Title": "Lista gerada automaticamente", "point2Desc": "Os ingredientes que faltam entram na lista de compras sem precisar anotar um por um.", "point3Title": "Integrado com a despensa", "point3Desc": "O que você já tem em casa não entra na lista. Só compra o que realmente precisa.", "point4Title": "Menos desperdício", "point4Desc": "Você compra o que vai usar — não o que parece útil na hora. O frango fica na geladeira certo prazo.", "vmTitle": "Plano da semana", "vmCount": "5 refeições", "day1Lbl": "SEG", "day1": "Frango grelhado com arroz", "day2Lbl": "TER", "day2": "Macarrão ao sugo", "day3Lbl": "QUA", "day3": "Omelete de legumes", "day4Lbl": "QUI", "day4": "Feijão tropeiro", "day5Lbl": "SEX", "day5": "Peixe assado", "day6Lbl": "SAB", "day6Empty": "— livre —", "day7Lbl": "DOM", "day7Empty": "— livre —" },
    "why": { "title": "Por que planejar a semana antes de ir ao mercado", "p1": "Quem vai ao mercado sem saber o que vai cozinhar na semana compra por instinto. Pega o que parece útil, lembra de algo que estava acabando, joga no carrinho o que estava em promoção. O resultado é uma geladeira cheia de itens desconexos e a dúvida de quarta-feira: o que faço com isso tudo?", "p2": "Famílias que planejam o cardápio semanal antes de ir ao mercado tendem a gastar menos nas compras e desperdiçar menos alimento. O cardápio funciona como filtro: você compra o que vai usar, não o que parece que vai usar.", "p3": "O Mise conecta o cardápio com a despensa. Você escolhe as receitas da semana, o app verifica o que já tem em casa e monta automaticamente a lista dos ingredientes que faltam. Uma ação resolve a semana inteira — sem improvisar na quinta, sem volta extra ao mercado na sexta.", "p4": "Quem experimenta planejar o cardápio antes de ir ao mercado na primeira semana já percebe a diferença na conta e nos improvisos do meio da semana. O hábito de cinco minutos de planejamento no domingo — montar o cardápio com o que tem na despensa e gerar a lista automática — resolve quatro perguntas de \"o que a gente come hoje?\" e economiza pelo menos uma ida extra ao mercado por semana." },
    "faq": { "eyebrow": "Perguntas diretas", "title": "O que as pessoas perguntam", "q1": "Como criar cardápio semanal com lista de compras integrada?", "a1": "Você seleciona receitas para cada dia da semana. O Mise cruza com o que tem na despensa e adiciona automaticamente os ingredientes que faltam na lista de compras. Uma ação gera a lista da semana inteira.", "q2": "O app para criar cardápio semanal é gratuito?", "a2": "Sim, 100% gratuito. O plano da semana, a integração com lista e a despensa funcionam sem pagar nada e sem cadastro obrigatório.", "q3": "Como o cardápio semanal ajuda a economizar no mercado?", "a3": "Quem planeja antes de ir ao mercado compra só o que vai usar. Quem vai sem planejamento gasta em média 27% a mais — são itens por impulso e ingredientes que ficam na geladeira até virar lixo.", "q4": "Funciona para família ou casal?", "a4": "Sim. A lista gerada pelo cardápio é compartilhável pelo WhatsApp. Todos veem o plano da semana e a lista em tempo real no mesmo lugar — sem grupo de texto bagunçado." },
    "cta": { "title": "Menos decisões.<br></br><em>Mais comida.</em>", "sub": "Do cardápio à lista em três passos. Grátis." }
  },
  "svcReceitas": {
    "meta": { "title": "App para Anotar Receitas e Cozinhar com o que Tem em Casa — Mise", "description": "Mise é o app para anotar receitas e filtrar pelo que você tem em casa. Salva as suas receitas, cruza com a despensa e mostra o que dá pra cozinhar hoje.", "ogTitle": "App para Anotar Receitas e Filtrar pelo que Tem em Casa — Mise", "ogDescription": "Salva receitas, filtra pelo que tem em casa, gera lista de compras dos ingredientes que faltam. Grátis." },
    "hero": { "eyebrow": "Receitas", "title": "App para anotar receitas e<br></br><accent>cozinhar com o que tem em casa.</accent>", "sub": "Salva as receitas que você já faz. O app filtra pelo que tem na despensa e mostra o que dá pra cozinhar hoje — sem precisar passar no mercado antes." },
    "how": { "eyebrow": "Como funciona", "title": "Da receita ao prato sem improvisos.", "step1Title": "Anota suas receitas", "step1Desc": "Salva as receitas que você já faz com ingredientes, quantidades e modo de preparo. As suas, não as de influencer que você nunca vai fazer.", "step2Title": "Filtra pelo que tem em casa", "step2Desc": "O app cruza as receitas salvas com o conteúdo da despensa e mostra o que dá pra cozinhar hoje — sem ir ao mercado antes.", "step3Title": "Ingredientes que faltam vão pra lista", "step3Desc": "Escolheu uma receita que falta ingrediente? Com um toque, o que está faltando entra direto na lista de compras." },
    "feature": { "eyebrow": "O que tem", "title": "Receitas que funcionam com o que você tem. Não com o que deveria ter.", "desc": "O problema não é falta de receitas na internet. É saber qual delas você consegue fazer hoje, com o que tem em casa, sem passar no mercado.", "point1Title": "App para anotar qualquer receita", "point1Desc": "Nome, ingredientes com quantidades e modo de preparo. Suas receitas no app, sempre acessíveis.", "point2Title": "Receitas com o que tem em casa", "point2Desc": "Cruza com a despensa e mostra só o que você consegue fazer hoje — sem ir ao mercado.", "point3Title": "Lista gerada da receita", "point3Desc": "Os ingredientes que faltam entram na lista de compras com um toque. Sem anotar um por um.", "point4Title": "Integrado com o cardápio semanal", "point4Desc": "As receitas salvas alimentam o plano da semana. Tudo conectado no mesmo lugar.", "vmTitle": "Minhas receitas", "vmBadge": "Com o que tenho", "recipe1": "Frango xadrez", "recipe1Chip1": "Frango", "recipe1Chip2": "Pimentão", "recipe1Chip3": "Shoyu", "recipe1Chip4": "Castanha", "recipe2": "Omelete de legumes", "recipe2Chip1": "Ovos", "recipe2Chip2": "Cebola", "recipe2Chip3": "Tomate", "recipe3": "Risoto de cogumelos", "recipe3Chip1": "Cogumelos", "recipe3Chip2": "Vinho branco", "addToList": "+ lista" },
    "why": { "title": "Cozinhar com o que tem, não com o que devia ter", "p1": "A maioria dos apps de receita tem o mesmo problema: eles mostram o que você poderia cozinhar em condições ideais, com todos os ingredientes disponíveis. Na vida real, você escolhe uma receita, vai até a cozinha e descobre que faltam três ingredientes. Aí ou improvisa ou pede entrega.", "p2": "O Mise inverte a lógica. Em vez de mostrar receitas e depois você checar o que tem em casa, o app filtra as receitas automaticamente pelo conteúdo da sua despensa. Aparecem só as que você consegue fazer agora — sem precisar passar no mercado antes.", "p3": "Para os ingredientes que faltam numa receita que você quer fazer, o app adiciona tudo à lista de compras com um toque. Você organiza o cardápio com o que tem, compra só o que precisa e entra na cozinha sabendo exatamente o que vai preparar.", "p4": "Manter as receitas que você já faz no app — e não num caderno, numa foto ou numa aba do Chrome que você fecha sem salvar — elimina o \"vamos fazer aquele frango mas eu não lembro os ingredientes\". Em dois minutos, os ingredientes que faltam estão na lista. Em três toques, a receita está no cardápio da semana. Sem depender de sinal pra acessar site de receita no meio do cozimento." },
    "faq": { "eyebrow": "Perguntas diretas", "title": "O que as pessoas perguntam", "q1": "Como anotar receitas no app?", "a1": "Você salva qualquer receita com nome, ingredientes, quantidades e modo de preparo. As receitas ficam no app e ficam disponíveis para o cardápio semanal e para o filtro de \"o que dá pra fazer hoje\".", "q2": "Como ver receitas com o que tem em casa?", "a2": "O Mise cruza as receitas salvas com o conteúdo da sua despensa. O filtro \"com o que tenho\" mostra só as receitas cujos ingredientes você já tem — sem precisar ir ao mercado antes de cozinhar.", "q3": "Como gerar lista de compras a partir de uma receita?", "a3": "Com um toque na receita, os ingredientes que não estão na sua despensa entram automaticamente na lista de compras. Você não precisa copiar um por um.", "q4": "O app para anotar receitas é gratuito?", "a4": "Sim, 100% gratuito. Salvar receitas, filtrar por ingredientes e gerar lista de compras funcionam sem pagar nada e sem cadastro obrigatório." },
    "cta": { "title": "Você não esquece o alho.<br></br><em>O sistema esquece.</em>", "sub": "Receitas filtradas pelo que tem em casa. Sem passar no mercado." }
  },
  "blogIndex": {
    "meta": { "title": "Blog — Mise", "description": "Dicas de organização de cozinha, listas de compras e planejamento semanal." },
    "hero": { "title": "Dicas de quem faz lista de verdade", "sub": "Organização de cozinha, supermercado e planejamento semanal — sem frescura.", "desc": "Aqui você encontra guias práticos sobre listas de compras, organização de despensa e planejamento de refeições. Sem técnicas mirabolantes nem produtos caros — só o que funciona pra quem cozinha em casa de verdade. Cada artigo vem com listas pra copiar, estimativas de custo e respostas diretas às dúvidas mais comuns." },
    "topics": {
      "title": "O que você encontra aqui",
      "t1Title": "Listas de compras",
      "t1P1": "Guias completos com itens organizados por grupo, estimativas de custo por perfil de família e dicas práticas para diferentes situações — casa nova, mês apertado, família grande, casal. Cada lista foi pensada para você copiar e adaptar, não começar do zero toda semana.",
      "t1P2": "Você vai encontrar desde a lista básica de supermercado com os 80 itens que quase todo mundo precisa até listas específicas por situação: mudança, festa, churrasco, cesta básica. Sem itens exóticos que você nunca vai usar.",
      "t2Title": "Organização de despensa e geladeira",
      "t2P1": "Como organizar a despensa por zonas, que recipientes usar, como rotular, por onde começar quando está tudo bagunçado — e como manter organizado no dia a dia sem precisar de um domingo inteiro para reorganizar tudo de novo.",
      "t2P2": "Sem produtos caros, sem estética de revista de decoração. O foco é funcional: o que vai diminuir o desperdício, facilitar o acesso aos ingredientes mais usados e fazer a despensa trabalhar pela sua rotina de cozinha.",
      "t3Title": "Planejamento de refeições e economia",
      "t3P1": "Como montar um cardápio semanal que respeite o tempo disponível e o orçamento, por que planejar antes de ir ao mercado faz diferença na conta do mês e quais hábitos simples cortam o gasto sem abrir mão do que você gosta de comer.",
      "t3P2": "Pesquisas de comportamento de consumo mostram que compras sem lista custam entre 20% e 30% a mais. Os artigos aqui explicam como esse dado se traduz na sua rotina — e o que fazer a respeito."
    },
    "empty": { "title": "Novos posts em breve", "desc": "Estamos traduzindo os artigos do blog. Enquanto isso, dá uma olhada na versão em português." },
    "cta": { "text": "Já que você chegou até aqui — testa o app. É grátis.", "button": "Abrir o Mise →" }
  }
}
```

Feche o objeto raiz (a última chave acima, `blogIndex`, termina o JSON — confira que o arquivo final tem exatamente um `{` de abertura no topo e um `}` de fechamento no final, juntando este trecho com o bloco do Step anterior).

- [ ] **Step 2: Escrever `messages/en.json`**

Mesma estrutura de namespaces e chaves do `pt.json`, com tom reescrito (não tradução literal), conforme regra de tom do design system.

```json
{
  "site": {
    "title": "Mise — Cook in peace, your way.",
    "description": "The app that connects your pantry, recipes and shopping list. So you never run out again.",
    "ogDescription": "The app that connects your pantry, recipes and shopping list. Free."
  },
  "nav": {
    "features": "Features",
    "blog": "Blog",
    "dropdown": {
      "lista": { "label": "Shopping list", "desc": "Organized by aisle, works offline" },
      "despensa": { "label": "Pantry", "desc": "Know what's missing before you shop" },
      "receitas": { "label": "Recipes", "desc": "Filtered by what you have at home" },
      "cardapio": { "label": "Weekly plan", "desc": "Generates your shopping list automatically" }
    }
  },
  "common": {
    "skipLink": "Skip to content",
    "ctaSmall": "Get started free",
    "ctaOpenAppFree": "Open the app for free",
    "ctaOpenMiseFree": "Open Mise for free",
    "allFeatures": "← All features",
    "readArticle": "Read article →",
    "openApp": "Open the app",
    "openAppArrow": "Open the app →",
    "footerCopy": "Made with care for people who love to cook.",
    "footerCopyright": "© 2024 Mise",
    "footnoteChannels": "PHONE · TABLET · DESKTOP · OFFLINE",
    "footnoteNoSignup": "no signup · no card · works offline"
  },
  "home": {
    "hero": {
      "title": "Cook in peace, <accent>your way.</accent>",
      "sub": "The kitchen shouldn't take up this much headspace. Pantry, recipes and shopping list, all connected — you stop deciding and start cooking.",
      "ctaHow": "See how it works ↓",
      "meta1": "Works offline",
      "meta2": "Share it on WhatsApp",
      "meta3": "Phone and desktop",
      "float1Label": "Out of garlic",
      "float1Sub": "in the pantry",
      "float2Label": "Shared",
      "float2Sub": "with the whole house",
      "phoneTitle": "This week's list",
      "phoneSec1": "Produce",
      "phoneItemAlho": "Garlic",
      "phoneItemTomate": "Roma tomatoes",
      "phoneSec2": "Pantry staples",
      "phoneItemAzeite": "Extra virgin olive oil",
      "phoneItemOvos": "Eggs",
      "phoneItemFrango": "Chicken breast",
      "tabLista": "List",
      "tabDespensa": "Pantry",
      "tabReceitas": "Recipes",
      "tabPlano": "Plan"
    },
    "pain": {
      "eyebrow": "You've been there",
      "title": "The perfect kitchen exists.<br></br>It just never has what you need.",
      "sub": "It's not that you're disorganized. Nothing actually helps with your real routine.",
      "card1Title": "Got back from the store without the garlic.",
      "card1Desc": "Again. You scan the shelf, try to remember from memory, buy what feels right. You get home and <em>that's exactly what's missing.</em>",
      "card2Title": "“Is this the right brand?”",
      "card2Desc": "Someone sends a photo of 3 brands. You stop everything to answer. <em>They still buy the wrong one.</em>",
      "card3Title": "Your list app turned into a spreadsheet.",
      "card3Desc": "Full of features you never use. When you're in a rush, you still open Notes instead. <em>Something's off.</em>",
      "transitionLabel": "So we built Mise",
      "transitionTitle": "An app that gets your kitchen <em>exactly as it is.</em> No complications, no fuss."
    },
    "features": {
      "eyebrow": "Features",
      "title": "The pantry remembers. The plan comes together. The list appears.",
      "sub": "Each one solves a piece of the problem. Together, they solve the week.",
      "lista": {
        "tag": "Shopping list",
        "title": "Share it in one tap. Get the right stuff.",
        "desc": "Organize by store or aisle, send it over WhatsApp, and whoever's shopping sees exactly what to grab.",
        "b1": "By store or by aisle",
        "b2": "Shared over WhatsApp",
        "b3": "History of what you've already bought",
        "vmTitle": "This week's list",
        "vmItem1": "Whole milk",
        "vmItem2": "Eggs",
        "vmItem3": "Olive oil",
        "vmItem4": "Chicken breast"
      },
      "despensa": {
        "tag": "Pantry",
        "title": "Always have what you need to cook.",
        "desc": "Set up your ideal pantry once. What runs out gets flagged — by the time you build the list, you already know what to buy.",
        "b1": "Suggestions to build a complete pantry",
        "b2": "Adds to the list in one tap",
        "b3": "Flags what's running low, automatically",
        "vmTitle": "My pantry",
        "vmCount": "7 items",
        "chip1": "Garlic", "chip2": "Onion", "chip3": "Olive oil", "chip4": "Salt", "chip5": "Eggs", "chip6": "Flour", "chip7": "Tomato", "chipAdd": "+ Add"
      },
      "receitas": {
        "tag": "Recipes",
        "title": "The recipe book you never had.",
        "desc": "Save from anywhere — Instagram, YouTube, Google, or by hand. No pretty photos in the way. Just what matters: name and ingredients.",
        "b1": "Capture with a link from any site",
        "b2": "Ingredients synced with the list",
        "b3": "Clean layout, no distractions",
        "vmTitle": "My recipes",
        "vmCount": "12 saved",
        "recipe1": "Spaghetti al sugo",
        "recipe2": "Grilled lemon chicken",
        "recipe3": "Grandma's carrot cake",
        "recipe4": "Caesar salad"
      },
      "plano": {
        "tag": "Weekly plan",
        "title": "Week planned, list ready.",
        "desc": "Build the week's menu with your recipes. In one tap, whatever's missing goes straight to the shopping list.",
        "b1": "Synced with your recipes",
        "b2": "Generates the list automatically",
        "b3": "No more “pasta again tonight?”",
        "vmTitle": "Weekly plan",
        "vmGenerate": "→ Generate list",
        "day1": "Grilled lemon chicken",
        "day2": "Spaghetti al sugo",
        "day3Empty": "No plan",
        "day4": "Caesar salad",
        "day5": "Veggie omelet"
      }
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Three steps. No annoying onboarding.",
      "sub": "You won't need a tutorial. Seriously.",
      "prose": "Mise connects the four pillars of the kitchen routine — pantry, recipes, weekly plan and shopping list — in one app. Mark an item as out in the pantry, and it shows up as a suggestion on the list. Build the week's plan with saved recipes, and the missing ingredients go straight to the shopping list. One action in the app handles the next step automatically — no switching apps, no copy-pasting, no forgetting.",
      "step1Title": "Set up your pantry",
      "step1Desc": "In 2 minutes, add the basics you always have at home. Use the app's suggestions — no need to start from scratch.",
      "step2Title": "Build the shopping list",
      "step2Desc": "Type in the items, pick an aisle or store, and share it over WhatsApp. Whoever's shopping sees everything organized.",
      "step3Title": "Check off what you bought",
      "step3Desc": "In the aisle, check off each item as you grab it. The pantry updates itself. Done — time to cook."
    },
    "founder": {
      "eyebrow": "Why Mise exists",
      "quote": "“I always struggled with something missing at home when I wanted to cook. And the apps out there were full of photos, elaborate planning and too many features — they just wasted my time.<br></br><br></br><strong>So I built Mise:</strong> an easy way to keep a pantry for people who actually like to cook.”",
      "name": "Gus",
      "role": "· Mise's creator"
    },
    "who": {
      "eyebrow": "Who it's for",
      "title": "Who Mise is for",
      "p1": "Mise is built for people who cook at home fairly often and are tired of winging it. It's not for chefs, and it's not for people chasing the perfect kitchen setup — it's for people who want to leave the store with what they need and walk into the kitchen already knowing what they're making.",
      "p2": "It works well for couples splitting the shopping, families planning the week together, people living alone trying not to waste food, and roommates who need a shared list. The logic is the same: know what's at home, plan what you're cooking, and buy only what's missing — without an extra trip to the store mid-week.",
      "p3": "People who've used Mise for more than a month typically go from three grocery runs a week down to one. The list generated from the weekly plan cuts out impulse items. The pantry cuts out duplicate purchases. The result shows up in the grocery bill — not in an organizing tutorial you'll never finish."
    },
    "blog": {
      "eyebrow": "Blog",
      "title": "Tips from people who actually make lists",
      "post1Tag": "Shopping list",
      "post1Title": "Basic shopping list: a guide with 80+ items to copy",
      "post1Desc": "The 7 essential groups, monthly cost estimates, and tips to save money at the store.",
      "post2Tag": "New home",
      "post2Title": "Shopping list for a new home: what you can't skip",
      "post2Desc": "60+ items by room, what to buy first, and cost estimates by household type.",
      "seeAll": "See all articles →"
    },
    "cta": {
      "eyebrow": "Start today",
      "title": "An organized kitchen, <em>your way.</em>",
      "sub": "Free. No credit card. No long signup. Ready?"
    }
  },
  "funcionalidadesHub": {
    "meta": {
      "title": "Features — Mise",
      "description": "Free, shared shopping list, weekly plan with an automatic list, and recipes based on what you have at home. All connected in one app.",
      "ogTitle": "Features — Mise",
      "ogDescription": "Shopping list, weekly plan and recipes. Three things that work together. Free."
    },
    "hero": {
      "eyebrow": "Features",
      "title": "The pantry remembers. The plan comes together.<br></br><accent>The list appears.</accent>",
      "sub": "Shopping list, pantry, recipes and weekly plan — connected in one app. Each one solves a piece of the problem. Together, they solve the week."
    },
    "cards": {
      "lista": { "eyebrow": "Shopping list", "title": "Organized by aisle. Shared. Free.", "desc": "Build the list at home, share it over WhatsApp, and shop the store in aisle order. Works offline.", "tag1": "100% free", "tag2": "Shared", "tag3": "Offline" },
      "despensa": { "eyebrow": "Pantry", "title": "Always have what you need to cook.", "desc": "Set up your ideal pantry once. What runs out gets flagged — by the time you build the list, you already know what to buy.", "tag1": "Automatic suggestions", "tag2": "Adds to the list", "tag3": "Cross-checks with recipes" },
      "cardapio": { "eyebrow": "Weekly plan", "title": "A weekly plan that generates the shopping list automatically.", "desc": "Plan Monday through Sunday. The app checks it against your pantry and drops the missing ingredients straight into the list.", "tag1": "7 days", "tag2": "Automatic list", "tag3": "Less waste" },
      "receitas": { "eyebrow": "Recipes", "title": "Your recipes. Filtered by what you have at home.", "desc": "Save the recipes you already make. The app shows what you can cook today — no store run needed.", "tag1": "Save recipes", "tag2": "Filter by ingredients", "tag3": "List from a recipe" },
      "cardLink": "See feature"
    },
    "connect": {
      "title": "How the four tools work together",
      "p1": "Mise isn't an app with four separate features — it's a cycle. It starts with the pantry: you set up your ideal stock once. When something runs out, you flag it. When it's time to plan the week, you pick recipes and Mise checks them against the pantry — missing ingredients go straight into the shopping list.",
      "p2": "You go to the store, buy exactly what you need, and check things off the list as you put them in the cart. By the time you're home, the pantry is already updated. That connection solves a problem standalone apps don't: the gap between knowing what's at home, planning what you'll cook, and knowing what's left to buy.",
      "p3": "All of this without a mandatory signup up front, without a subscription, working offline inside the store. You start using it before creating an account — and the essential features are never locked behind one.",
      "p4": "The practical result: a family that used to make three grocery runs a week can cut that down to one, with a complete list generated by the app itself. People living alone stop buying on impulse because they know exactly what's missing. Consumer behavior estimates show unplanned shopping trips cost 20% to 30% more — between duplicate items, products that expire before they're used, and forgotten ingredients that were part of a plan that never existed. Mise cuts that waste at the source, connecting what you have with what you'll cook and what you need to buy."
    },
    "cta": {
      "title": "Start with the list.<br></br><em>Everything else falls into place.</em>",
      "sub": "Free, no signup up front, works offline."
    }
  },
  "svcListaDeCompras": {
    "meta": {
      "title": "Free, Shared Shopping List App — Mise",
      "description": "Mise is the free shopping list app organized by aisle and shared in real time. Works offline, no signup required.",
      "ogTitle": "Free, Shared Shopping List App — Mise",
      "ogDescription": "Shopping list organized by aisle, shared over WhatsApp, works offline. 100% free."
    },
    "hero": {
      "eyebrow": "Shopping list",
      "title": "A free, <accent>shared</accent><br></br>shopping list app.",
      "sub": "You build the list at home, share it over WhatsApp, and shop the store in aisle order. No backtracking because you remembered the toilet paper on the last aisle."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Three steps. Nothing else.",
      "step1Title": "Build the list at home",
      "step1Desc": "Add the items, the app sorts them by aisle automatically. Produce, meat, pantry staples — all in the store's real order.",
      "step2Title": "Share it over WhatsApp",
      "step2Desc": "Send the link to whoever's shopping with you. You both see the same list in real time — no one buys what the other already put in the cart.",
      "step3Title": "Shop and check things off",
      "step3Desc": "Works offline, with bad signal or none. Check off each item as you grab it. List's empty by the time you hit checkout."
    },
    "feature": {
      "eyebrow": "What's included",
      "title": "Everything a shopping list needs — and nothing it doesn't.",
      "desc": "No unnecessary features. No mandatory signup before you can use it. Just what solves the problem of leaving home without forgetting something.",
      "point1Title": "Organized by aisle",
      "point1Desc": "Produce, meat, pantry staples, cleaning and personal care — grouped in the store's real order.",
      "point2Title": "Shared in real time",
      "point2Desc": "One link over WhatsApp. Two phones, one list. What one person adds shows up for the other instantly.",
      "point3Title": "Works offline",
      "point3Desc": "Inside the store, in the basement, no signal. The list doesn't disappear.",
      "point4Title": "100% free, no signup up front",
      "point4Desc": "Start using it before you create an account. No essential feature locked.",
      "vmTitle": "Grocery list",
      "vmCount": "7 items",
      "vmSec1": "Produce",
      "vmItem1": "Tomato",
      "vmItem2": "Garlic",
      "vmItem3": "Onion",
      "vmSec2": "Pantry staples",
      "vmItem4": "Rice, 5 kg",
      "vmItem5": "Pinto beans",
      "vmItem6": "Pasta",
      "vmSec3": "Cleaning",
      "vmItem7": "Dish soap"
    },
    "why": {
      "title": "Why aisle organization makes a difference",
      "p1": "Going to the store without a list is improvising at a cost. Consumer behavior research shows unplanned shopping trips tend to run 20% to 30% more expensive — between impulse items and buying doubles of things you already had at home but forgot about.",
      "p2": "But any old list only solves half the problem. Without aisle organization, you wander the store at random: hit the cleaning aisle, remember the beans, head back to pantry staples, pass produce again. Besides being tiring, it raises the odds you'll grab something that wasn't on the list.",
      "p3": "Mise groups items in the order you actually find them in the store: produce at the entrance, meat and protein next, pantry staples, cleaning and personal care at the back. You walk in, go through once, check everything off, and leave with the right cart — no doubling back to the same aisle twice.",
      "p4": "Mise's aisle organization follows a real supermarket's layout: produce at the entrance, meat and dairy next, pantry staples in the middle, cleaning and personal care at the back. You walk in, go through once, check everything off without doubling back — and get out faster than you would without a list. Sharing it over WhatsApp before you leave the house makes sure whoever's shopping with you buys exactly what the list says, no phone calls from the middle of an aisle."
    },
    "faq": {
      "eyebrow": "Straight answers",
      "title": "What people ask",
      "q1": "Is the shopping list app free?",
      "a1": "Yes, 100% free. Shopping list, sharing and aisle organization all work without paying anything. No essential feature is locked behind a subscription.",
      "q2": "How do I share the shopping list?",
      "a2": "You share it over WhatsApp with a link. Whoever receives it edits the same list in real time — nothing to install. Works for couples, families, or anyone splitting the shopping.",
      "q3": "Does the list work without internet inside the store?",
      "a3": "Yes. Mise is a PWA that loads offline. The list stays available even with bad signal or no connection — common in big stores with a basement level.",
      "q4": "How is the shopping list organized by aisle?",
      "a4": "The app groups items automatically — produce, meat, pantry staples, cleaning, personal care — in the order you find them in the store. You go through the aisles once and check everything off without backtracking."
    },
    "cta": {
      "title": "Stop deciding what to buy.<br></br><em>Start cooking.</em>",
      "sub": "No signup up front. Start using it right now."
    }
  },
  "svcDespensa": {
    "meta": { "title": "Pantry Tracking App — Mise", "description": "Mise is the pantry app that flags what's running low and generates your shopping list automatically. Set up your ideal pantry once and never forget what's missing again.", "ogTitle": "Pantry Tracking App — Mise", "ogDescription": "Set up your pantry, flag what ran out, and get your shopping list generated automatically. Free." },
    "hero": { "eyebrow": "Pantry", "title": "Always have what<br></br>you need to <accent>cook.</accent>", "sub": "Set up your ideal pantry once. What runs out gets flagged — by the time you build the list, you already know what to buy without opening the fridge." },
    "how": { "eyebrow": "How it works", "title": "Set it up once. Use it forever.", "step1Title": "Set up your ideal pantry", "step1Desc": "Add the items you always have at home — the app suggests the basics. Rice, beans, olive oil, garlic, onion. In two minutes, your pantry is ready.", "step2Title": "Flag what ran out", "step2Desc": "Used the last of the olive oil? One tap and it's flagged as out. Running low? Mark it \"running low.\" The app remembers for you.", "step3Title": "Get the list automatically", "step3Desc": "When it's time to shop, anything out or running low becomes a list suggestion with one tap. No opening the fridge, nothing forgotten." },
    "feature": { "eyebrow": "What's included", "title": "A pantry connected to your list and recipes.", "desc": "It's not just an inventory. Mise's pantry talks to the shopping list and to your recipes — so you know what to buy and what you can already cook today.", "point1Title": "Suggestions to build a complete pantry", "point1Desc": "The app suggests the most common items for you to add in one tap — no starting from scratch.", "point2Title": "Adds to the list in one tap", "point2Desc": "What's out goes straight to the shopping list. No copying, no retyping.", "point3Title": "Cross-checks with your recipes", "point3Desc": "The app shows which recipes you can make with what's in the pantry — no store run first.", "point4Title": "Flags what's running low", "point4Desc": "No need to wait until it's gone to remember. Mark it \"running low\" and the app already includes it in the next shop.", "vmTitle": "My pantry", "vmCount": "8 items", "chip1": "Garlic", "chip2": "Onion", "chip3": "Olive oil", "chip4": "Rice", "chip5": "Beans", "chip6": "Salt", "chip7": "Milk", "chip8": "Eggs", "outLabel": "Out", "outItem1": "Salt", "outItem2": "Milk", "addToList": "+ list" },
    "why": { "title": "The cost of not knowing what's at home", "p1": "A disorganized pantry isn't just an aesthetic issue — it's a financial one. When you don't know what's at home, you buy the same product twice, let items expire at the back of the shelf, and still show up at the store unsure of what you actually need.", "p2": "Food waste studies show a striking share of household waste starts with the wrong purchase: buying something you didn't need because you didn't realize you already had it.", "p3": "With Mise's pantry, you set up your ideal stock list once. After that, you just flag what ran out the moment you notice — not on shopping day, when memory's already failed. When it's time to shop, the list is already pre-filled with what's missing, no opening every cabinet to check.", "p4": "The difference between an organized pantry and a living one comes down to the habit of flagging what runs out the moment you notice — not shopping week, when you've already forgotten. Mise makes that habit minimal: one tap when you open the cabinet and see the salt is gone. When it's time to shop, the list is already pre-filled with what's missing. No opening every cabinet, no trying to remember what was on the back shelf." },
    "faq": { "eyebrow": "Straight answers", "title": "What people ask", "q1": "How does the app track what's in my pantry?", "a1": "You set up your ideal pantry once — with the items you always have at home. When something runs out or is running low, you flag it in the app. By the time you build the shopping list, Mise already knows what's missing.", "q2": "Does the pantry connect to the shopping list?", "a2": "Yes. Anything flagged as out or running low in the pantry shows up as a shopping list suggestion with one tap. Nothing to remember.", "q3": "Does the pantry work with recipes too?", "a3": "Yes. The app cross-checks the pantry with your saved recipes and shows what you can cook today without a store run. Missing ingredients go straight to the list.", "q4": "Do I need to set up the pantry from scratch?", "a4": "No. Mise suggests the most common items — rice, beans, olive oil, garlic — for you to add in one tap. In two minutes, your pantry already has your household's basics." },
    "cta": { "title": "The pantry remembers.<br></br><em>You cook.</em>", "sub": "No signup up front. Start using it right now." }
  },
  "svcCardapioSemanal": {
    "meta": { "title": "Weekly Meal Plan App with Built-in Shopping List — Mise", "description": "Mise is the app for building a weekly meal plan integrated with your shopping list. Plan all 7 days, and the app generates the list automatically with what's missing from the pantry.", "ogTitle": "Weekly Meal Plan App with Shopping List — Mise", "ogDescription": "A weekly plan that generates the shopping list automatically. Integrated with your pantry. Free." },
    "hero": { "eyebrow": "Weekly plan", "title": "A weekly meal plan app that generates<br></br><accent>the shopping list automatically.</accent>", "sub": "You plan Monday through Sunday. The app checks it against your pantry and adds the missing ingredients straight to the list. No more Friday surprises." },
    "how": { "eyebrow": "How it works", "title": "From plan to list in three steps.", "step1Title": "Pick the week's recipes", "step1Desc": "Choose what you're cooking Monday through Sunday using the recipes saved in the app. Leaving days open is fine.", "step2Title": "The app checks it against the pantry", "step2Desc": "Mise checks what you already have at home and separates out only the missing ingredients. You don't buy what you don't need.", "step3Title": "List generated, shopping solved", "step3Desc": "One trip to the store covers the whole week. No improvising on Thursday because Friday's recipe was missing an ingredient." },
    "feature": { "eyebrow": "What's included", "title": "Planning that connects your meal plan, pantry and list.", "desc": "It's not just a meal calendar. It's a system that closes the gap between \"what am I cooking\" and \"what do I need to buy.\"", "point1Title": "All 7 days at once", "point1Desc": "Plan the whole week before you shop. One trip. No improvising midweek.", "point2Title": "List generated automatically", "point2Desc": "Missing ingredients go into the shopping list without writing them down one by one.", "point3Title": "Integrated with the pantry", "point3Desc": "What you already have at home doesn't make it onto the list. You only buy what you actually need.", "point4Title": "Less waste", "point4Desc": "You buy what you'll actually use — not what seems useful in the moment. The chicken stays in the fridge the right amount of time.", "vmTitle": "Weekly plan", "vmCount": "5 meals", "day1Lbl": "MON", "day1": "Grilled chicken with rice", "day2Lbl": "TUE", "day2": "Spaghetti al sugo", "day3Lbl": "WED", "day3": "Veggie omelet", "day4Lbl": "THU", "day4": "Bean and pork stew", "day5Lbl": "FRI", "day5": "Baked fish", "day6Lbl": "SAT", "day6Empty": "— open —", "day7Lbl": "SUN", "day7Empty": "— open —" },
    "why": { "title": "Why plan the week before you shop", "p1": "Whoever goes shopping without knowing what they're cooking that week buys on instinct. Grabs whatever looks useful, remembers something was running low, tosses in whatever's on sale. The result is a fridge full of disconnected items and the Wednesday question: what do I even do with all this?", "p2": "Families who plan their weekly meals before shopping tend to spend less on groceries and waste less food. The meal plan works as a filter: you buy what you'll use, not what looks like you'll use.", "p3": "Mise connects the meal plan to the pantry. You pick the week's recipes, the app checks what you already have at home, and automatically builds a list of the missing ingredients. One action handles the whole week — no improvising Thursday, no extra store run Friday.", "p4": "People who try planning the meal plan before shopping notice the difference in the bill and the midweek scrambling within the first week. The five-minute habit of planning on Sunday — building the meal plan with what's in the pantry and generating the list automatically — answers four \"what are we eating tonight?\" questions and saves at least one extra store trip a week." },
    "faq": { "eyebrow": "Straight answers", "title": "What people ask", "q1": "How do I create a weekly meal plan with a built-in shopping list?", "a1": "You select recipes for each day of the week. Mise checks them against your pantry and automatically adds the missing ingredients to the shopping list. One action generates the whole week's list.", "q2": "Is the weekly meal plan app free?", "a2": "Yes, 100% free. The weekly plan, the shopping list integration and the pantry all work without paying anything and without a mandatory signup.", "q3": "How does a weekly meal plan help save money at the store?", "a3": "Whoever plans before shopping buys only what they'll use. Whoever shops without a plan spends 27% more on average — impulse items and ingredients that sit in the fridge until they become trash.", "q4": "Does it work for a family or couple?", "a4": "Yes. The list generated from the meal plan is shareable over WhatsApp. Everyone sees the weekly plan and the list in real time in the same place — no messy group chat." },
    "cta": { "title": "Fewer decisions.<br></br><em>More food.</em>", "sub": "From plan to list in three steps. Free." }
  },
  "svcReceitas": {
    "meta": { "title": "App to Save Recipes and Cook with What You Have at Home — Mise", "description": "Mise is the app for saving recipes and filtering by what you have at home. Save your recipes, cross-check them with your pantry, and see what you can cook today.", "ogTitle": "App to Save Recipes and Filter by What You Have at Home — Mise", "ogDescription": "Save recipes, filter by what you have at home, generate a shopping list for what's missing. Free." },
    "hero": { "eyebrow": "Recipes", "title": "An app to save recipes and<br></br><accent>cook with what you have at home.</accent>", "sub": "Save the recipes you already make. The app filters by what's in your pantry and shows what you can cook today — no store run needed first." },
    "how": { "eyebrow": "How it works", "title": "From recipe to plate, no improvising.", "step1Title": "Save your recipes", "step1Desc": "Save the recipes you already make with ingredients, quantities and instructions. Yours — not some influencer's recipe you'll never actually make.", "step2Title": "Filter by what's at home", "step2Desc": "The app cross-checks your saved recipes with what's in the pantry and shows what you can cook today — no store run first.", "step3Title": "Missing ingredients go to the list", "step3Desc": "Picked a recipe that's missing an ingredient? One tap, and what's missing goes straight to the shopping list." },
    "feature": { "eyebrow": "What's included", "title": "Recipes that work with what you have. Not with what you should have.", "desc": "The problem isn't a shortage of recipes online. It's knowing which one you can actually make today, with what's at home, without a store run.", "point1Title": "Save any recipe", "point1Desc": "Name, ingredients with quantities, and instructions. Your recipes in the app, always at hand.", "point2Title": "Recipes based on what's at home", "point2Desc": "Cross-checked with the pantry, showing only what you can make right now — no store run.", "point3Title": "List generated from a recipe", "point3Desc": "Missing ingredients go into the shopping list with one tap. No writing them down one by one.", "point4Title": "Integrated with the weekly plan", "point4Desc": "Saved recipes feed the weekly plan. Everything connected in one place.", "vmTitle": "My recipes", "vmBadge": "What I have", "recipe1": "Kung pao chicken", "recipe1Chip1": "Chicken", "recipe1Chip2": "Bell pepper", "recipe1Chip3": "Soy sauce", "recipe1Chip4": "Cashews", "recipe2": "Veggie omelet", "recipe2Chip1": "Eggs", "recipe2Chip2": "Onion", "recipe2Chip3": "Tomato", "recipe3": "Mushroom risotto", "recipe3Chip1": "Mushrooms", "recipe3Chip2": "White wine", "addToList": "+ list" },
    "why": { "title": "Cooking with what you have, not what you should have", "p1": "Most recipe apps have the same problem: they show what you could cook under ideal conditions, with every ingredient on hand. In real life, you pick a recipe, head to the kitchen and find out three ingredients are missing. Then you either improvise or order delivery.", "p2": "Mise flips the logic. Instead of showing recipes and making you check what's at home afterward, the app filters recipes automatically by what's in your pantry. Only the ones you can make right now show up — no store run first.", "p3": "For the ingredients missing from a recipe you want to make, the app adds everything to the shopping list with one tap. You plan the week with what you have, buy only what you need, and walk into the kitchen knowing exactly what you're making.", "p4": "Keeping the recipes you actually make inside the app — not in a notebook, a photo, or a Chrome tab you close without saving — kills the \"let's make that chicken thing, wait, I don't remember the ingredients\" moment. In two minutes, the missing ingredients are on the list. In three taps, the recipe is on the weekly plan. No relying on signal to load a recipe site mid-cook." },
    "faq": { "eyebrow": "Straight answers", "title": "What people ask", "q1": "How do I save recipes in the app?", "a1": "You save any recipe with a name, ingredients, quantities and instructions. Recipes stay in the app and feed the weekly plan and the \"what can I make today\" filter.", "q2": "How do I see recipes based on what I have at home?", "a2": "Mise cross-checks your saved recipes with what's in your pantry. The \"what I have\" filter shows only the recipes whose ingredients you already have — no store run before you cook.", "q3": "How do I generate a shopping list from a recipe?", "a3": "With one tap on a recipe, the ingredients not in your pantry go automatically into the shopping list. No copying them one by one.", "q4": "Is the recipe app free?", "a4": "Yes, 100% free. Saving recipes, filtering by ingredients and generating a shopping list all work without paying anything and without a mandatory signup." },
    "cta": { "title": "You don't forget the garlic.<br></br><em>The system does.</em>", "sub": "Recipes filtered by what's at home. No store run." }
  },
  "blogIndex": {
    "meta": { "title": "Blog — Mise", "description": "Tips on kitchen organization, shopping lists and weekly meal planning." },
    "hero": { "title": "Tips from people who actually make lists", "sub": "Kitchen organization, groceries and weekly planning — no fuss.", "desc": "Here you'll find practical guides on shopping lists, pantry organization and meal planning. No gimmicky techniques or expensive products — just what actually works for people who cook at home for real. Every article comes with lists to copy, cost estimates and straight answers to the most common questions." },
    "topics": {
      "title": "What you'll find here",
      "t1Title": "Shopping lists",
      "t1P1": "Complete guides with items organized by group, cost estimates by household type, and practical tips for different situations — a new home, a tight month, a big family, a couple. Every list is built for you to copy and adapt, not start from scratch every week.",
      "t1P2": "You'll find everything from the basic grocery list with the 80 items almost everyone needs to situation-specific lists: moving, a party, a barbecue, a basic pantry basket. No exotic items you'll never use.",
      "t2Title": "Pantry and fridge organization",
      "t2P1": "How to organize the pantry by zone, which containers to use, how to label things, where to start when everything's a mess — and how to keep it organized day to day without needing a whole Sunday to redo it all again.",
      "t2P2": "No expensive products, no home-magazine aesthetics. The focus is functional: what actually cuts waste, makes the most-used ingredients easier to reach, and gets the pantry working for your real cooking routine.",
      "t3Title": "Meal planning and saving money",
      "t3P1": "How to build a weekly meal plan that respects your available time and budget, why planning before you shop makes a real difference in the monthly bill, and which simple habits cut spending without giving up what you like to eat.",
      "t3P2": "Consumer behavior research shows shopping without a list costs 20% to 30% more. The articles here explain how that plays out in your routine — and what to do about it."
    },
    "empty": { "title": "New posts coming soon", "desc": "We're translating the blog articles. In the meantime, check out the Portuguese version." },
    "cta": { "text": "Since you made it this far — try the app. It's free.", "button": "Open Mise →" }
  }
}
```

- [ ] **Step 3: Escrever `messages/es.json`**

Mesma estrutura, espanhol latino-americano informal ("tú", não "usted").

```json
{
  "site": {
    "title": "Mise — Cocina en paz, a tu manera.",
    "description": "La app que conecta tu despensa, tus recetas y tu lista de compras. Para que nunca te falte nada.",
    "ogDescription": "La app que conecta tu despensa, tus recetas y tu lista de compras. Gratis."
  },
  "nav": {
    "features": "Funciones",
    "blog": "Blog",
    "dropdown": {
      "lista": { "label": "Lista de compras", "desc": "Organizada por pasillo, funciona sin conexión" },
      "despensa": { "label": "Despensa", "desc": "Sabe qué falta antes de ir al mercado" },
      "receitas": { "label": "Recetas", "desc": "Filtra por lo que tienes en casa" },
      "cardapio": { "label": "Plan semanal", "desc": "Genera tu lista de compras automáticamente" }
    }
  },
  "common": {
    "skipLink": "Saltar al contenido",
    "ctaSmall": "Empieza gratis",
    "ctaOpenAppFree": "Abrir la app gratis",
    "ctaOpenMiseFree": "Abrir Mise gratis",
    "allFeatures": "← Todas las funciones",
    "readArticle": "Leer artículo →",
    "openApp": "Abrir la app",
    "openAppArrow": "Abrir la app →",
    "footerCopy": "Hecho con cariño para quienes aman cocinar.",
    "footerCopyright": "© 2024 Mise",
    "footnoteChannels": "CELULAR · TABLET · ESCRITORIO · SIN CONEXIÓN",
    "footnoteNoSignup": "sin registro · sin tarjeta · funciona sin conexión"
  },
  "home": {
    "hero": {
      "title": "Cocina en paz, <accent>a tu manera.</accent>",
      "sub": "La cocina no debería costarte tanta cabeza. Despensa, recetas y lista de compras conectadas — dejas de decidir y empiezas a cocinar.",
      "ctaHow": "Ver cómo funciona ↓",
      "meta1": "Funciona sin conexión",
      "meta2": "Se comparte por WhatsApp",
      "meta3": "Celular y computadora",
      "float1Label": "Se acabó el ajo",
      "float1Sub": "en la despensa",
      "float2Label": "Compartida",
      "float2Sub": "con toda la casa",
      "phoneTitle": "Lista de la semana",
      "phoneSec1": "Frutas y verduras",
      "phoneItemAlho": "Ajo",
      "phoneItemTomate": "Tomate perita",
      "phoneSec2": "Despensa",
      "phoneItemAzeite": "Aceite de oliva extra virgen",
      "phoneItemOvos": "Huevos",
      "phoneItemFrango": "Pechuga de pollo",
      "tabLista": "Lista",
      "tabDespensa": "Despensa",
      "tabReceitas": "Recetas",
      "tabPlano": "Plan"
    },
    "pain": {
      "eyebrow": "Seguro te pasó",
      "title": "La cocina perfecta existe.<br></br>Solo que nunca tiene lo que necesitas.",
      "sub": "No es falta de organización. Es que nada te ayuda en tu rutina real.",
      "card1Title": "Volviste del mercado sin el ajo.",
      "card1Desc": "De nuevo. Miras la góndola, tratas de recordar de memoria, compras lo que crees que necesitas. Llegas a casa y <em>falta justo eso.</em>",
      "card2Title": "“¿Es esta la marca?”",
      "card2Desc": "Alguien manda foto de 3 marcas. Dejas todo para responder. <em>Igual compran la equivocada.</em>",
      "card3Title": "Tu app de lista se volvió una planilla.",
      "card3Desc": "Llena de funciones que no usas. Cuando tienes apuro, terminas abriendo las notas del celular. <em>Algo está mal.</em>",
      "transitionLabel": "Por eso creamos Mise",
      "transitionTitle": "Una app que entiende tu cocina <em>tal como es.</em> Sin complicación, sin vueltas."
    },
    "features": {
      "eyebrow": "Funciones",
      "title": "La despensa recuerda. El plan se arma. La lista aparece.",
      "sub": "Cada una resuelve una parte del problema. Juntas, resuelven la semana.",
      "lista": {
        "tag": "Lista de compras",
        "title": "Comparte en un toque. Compren lo correcto.",
        "desc": "Organiza por tienda o pasillo, envíala por WhatsApp, y quien vaya al mercado ve exactamente qué llevar.",
        "b1": "Por tienda o por pasillo",
        "b2": "Compartida por WhatsApp",
        "b3": "Historial de lo que ya compraste",
        "vmTitle": "Lista de la semana",
        "vmItem1": "Leche entera",
        "vmItem2": "Huevos",
        "vmItem3": "Aceite de oliva",
        "vmItem4": "Pechuga de pollo"
      },
      "despensa": {
        "tag": "Despensa",
        "title": "Siempre ten lo que necesitas para cocinar.",
        "desc": "Arma tu despensa ideal una sola vez. Lo que se acaba queda marcado — cuando hagas la lista, ya sabes qué comprar.",
        "b1": "Sugerencias para armar la despensa completa",
        "b2": "Agrega a la lista en un toque",
        "b3": "Marca lo que se está acabando, automáticamente",
        "vmTitle": "Mi despensa",
        "vmCount": "7 artículos",
        "chip1": "Ajo", "chip2": "Cebolla", "chip3": "Aceite", "chip4": "Sal", "chip5": "Huevos", "chip6": "Harina", "chip7": "Tomate", "chipAdd": "+ Agregar"
      },
      "receitas": {
        "tag": "Recetas",
        "title": "El cuaderno de recetas que nunca tuviste.",
        "desc": "Guarda desde cualquier lugar — Instagram, YouTube, Google, o a mano. Sin foto bonita que estorbe. Solo lo que importa: nombre e ingredientes.",
        "b1": "Captura con un link de cualquier sitio",
        "b2": "Ingredientes integrados con la lista",
        "b3": "Visual limpio, sin distracciones",
        "vmTitle": "Mis recetas",
        "vmCount": "12 guardadas",
        "recipe1": "Espagueti a la boloñesa",
        "recipe2": "Pollo a la plancha con limón",
        "recipe3": "Torta de zanahoria de la abuela",
        "recipe4": "Ensalada césar"
      },
      "plano": {
        "tag": "Plan semanal",
        "title": "Semana planeada, lista lista.",
        "desc": "Arma el menú de la semana con tus recetas. En un toque, lo que falta va directo a la lista de compras.",
        "b1": "Integrado con tus recetas",
        "b2": "Genera la lista automáticamente",
        "b3": "Se acabó el “¿otra vez pasta hoy?”",
        "vmTitle": "Plan semanal",
        "vmGenerate": "→ Generar lista",
        "day1": "Pollo a la plancha con limón",
        "day2": "Espagueti a la boloñesa",
        "day3Empty": "Sin plan",
        "day4": "Ensalada césar",
        "day5": "Omelette de verduras"
      }
    },
    "how": {
      "eyebrow": "Cómo funciona",
      "title": "Tres pasos. Sin onboarding pesado.",
      "sub": "No vas a necesitar un tutorial. En serio.",
      "prose": "Mise conecta los cuatro pilares de la rutina de cocina — despensa, recetas, plan semanal y lista de compras — en una sola app. Cuando marcas un artículo como agotado en la despensa, aparece como sugerencia en la lista. Cuando armas el menú con recetas guardadas, los ingredientes que faltan entran directo a la lista de compras. Una acción en la app resuelve el siguiente paso automáticamente — sin abrir otra app, sin copiar y pegar, sin olvidos.",
      "step1Title": "Arma tu despensa",
      "step1Desc": "En 2 minutos agregas lo básico que siempre tienes en casa. Puedes usar las sugerencias de la app — no hace falta empezar de cero.",
      "step2Title": "Crea la lista del mercado",
      "step2Desc": "Escribe los artículos, elige un pasillo o tienda, y comparte por WhatsApp. Quien vaya al mercado ve todo organizado.",
      "step3Title": "Marca lo que compraste",
      "step3Desc": "En el pasillo del mercado, vas marcando lo que llevas. La despensa se actualiza sola. Listo, a cocinar."
    },
    "founder": {
      "eyebrow": "Por qué existe Mise",
      "quote": "“Siempre sufría porque me faltaba algo en casa cuando quería cocinar. Y las apps que existían estaban llenas de fotos, planificación elaborada y demasiadas funciones — solo me hacían perder tiempo.<br></br><br></br><strong>Entonces creé Mise:</strong> una forma fácil de organizar la despensa para quien de verdad le gusta cocinar.”",
      "name": "Gus",
      "role": "· Creador de Mise"
    },
    "who": {
      "eyebrow": "Para quién es",
      "title": "Para quién es Mise",
      "p1": "Mise está hecho para quienes cocinan en casa con cierta frecuencia y ya se cansaron de improvisar. No es para chefs, ni para quien quiere armar la cocina perfecta — es para quien quiere salir del mercado con lo que necesita y entrar a la cocina sabiendo qué va a hacer.",
      "p2": "Funciona bien para parejas que se reparten las compras, familias que planean la semana juntas, quien vive solo y trata de no desperdiciar, y quienes comparten casa y necesitan una lista compartida. La lógica es la misma: saber qué hay en casa, planear qué vas a cocinar y comprar solo lo que falta — sin una vuelta extra al mercado a mitad de semana.",
      "p3": "Quienes usan Mise hace más de un mes suelen pasar de tres a una visita semanal al supermercado. La lista generada por el plan elimina las compras por impulso. La despensa elimina la compra duplicada. El resultado se nota en el gasto del mercado — no en un tutorial de organización que nunca vas a terminar."
    },
    "blog": {
      "eyebrow": "Blog",
      "title": "Consejos de quien hace lista de verdad",
      "post1Tag": "Lista de compras",
      "post1Title": "Lista básica de compras: guía con más de 80 artículos para copiar",
      "post1Desc": "Los 7 grupos esenciales, cuánto cuesta por mes y consejos para ahorrar en el supermercado.",
      "post2Tag": "Casa nueva",
      "post2Title": "Lista de compras para casa nueva: lo que no puede faltar",
      "post2Desc": "Más de 60 artículos por ambiente, qué comprar primero y estimación de costo por perfil.",
      "seeAll": "Ver todos los artículos →"
    },
    "cta": {
      "eyebrow": "Empieza hoy",
      "title": "Cocina organizada, <em>a tu manera.</em>",
      "sub": "Gratis. Sin tarjeta de crédito. Sin registro largo. ¿Vamos?"
    }
  },
  "funcionalidadesHub": {
    "meta": {
      "title": "Funciones — Mise",
      "description": "Lista de compras gratuita y compartida, plan semanal con lista automática y recetas con lo que tienes en casa. Todo conectado en la misma app.",
      "ogTitle": "Funciones — Mise",
      "ogDescription": "Lista de compras, plan semanal y recetas. Tres cosas que funcionan juntas. Gratis."
    },
    "hero": {
      "eyebrow": "Funciones",
      "title": "La despensa recuerda. El plan se arma.<br></br><accent>La lista aparece.</accent>",
      "sub": "Lista de compras, despensa, recetas y plan semanal — conectados en la misma app. Cada una resuelve una parte del problema. Juntas, resuelven la semana."
    },
    "cards": {
      "lista": { "eyebrow": "Lista de compras", "title": "Organizada por pasillo. Compartida. Gratis.", "desc": "Arma la lista en casa, compártela por WhatsApp y recorre el mercado en el orden de los pasillos. Funciona sin conexión.", "tag1": "100% gratis", "tag2": "Compartida", "tag3": "Sin conexión" },
      "despensa": { "eyebrow": "Despensa", "title": "Siempre ten lo que necesitas para cocinar.", "desc": "Arma tu despensa ideal una sola vez. Lo que se acaba queda marcado — cuando hagas la lista, ya sabes qué comprar.", "tag1": "Sugerencias automáticas", "tag2": "Agrega a la lista", "tag3": "Se cruza con recetas" },
      "cardapio": { "eyebrow": "Plan semanal", "title": "Un plan semanal que genera la lista de compras automáticamente.", "desc": "Arma el menú de lunes a domingo. La app lo cruza con la despensa y agrega los ingredientes que faltan directo a la lista.", "tag1": "7 días", "tag2": "Lista automática", "tag3": "Menos desperdicio" },
      "receitas": { "eyebrow": "Recetas", "title": "Tus recetas. Filtradas por lo que tienes en casa.", "desc": "Guarda las recetas que ya haces. La app muestra qué puedes cocinar hoy — sin pasar antes por el mercado.", "tag1": "Anotar recetas", "tag2": "Filtro por ingredientes", "tag3": "Lista de la receta" },
      "cardLink": "Ver función"
    },
    "connect": {
      "title": "Cómo funcionan juntas las cuatro herramientas",
      "p1": "Mise no es una app con cuatro funciones separadas — es un ciclo. Empieza por la despensa: armas el stock ideal de tu casa una sola vez. Cuando algo se acaba, lo marcas en la app. A la hora de planear la semana, eliges las recetas y Mise las cruza con la despensa — los ingredientes que faltan entran automáticamente a la lista de compras.",
      "p2": "Vas al mercado, compras exactamente lo que necesitas y marcas en la lista a medida que lo pones en el carrito. Al volver, la despensa ya está actualizada. Esa conexión resuelve un problema que las apps aisladas no resuelven: la brecha entre saber qué hay en casa, planear qué vas a cocinar y saber qué falta comprar.",
      "p3": "Todo esto sin registro obligatorio de entrada, sin suscripción, funcionando sin conexión dentro del mercado. Empiezas a usarla antes de crear una cuenta — y las funciones esenciales nunca quedan bloqueadas.",
      "p4": "El resultado práctico: una familia que antes hacía tres viajes al mercado por semana puede reducirlo a uno, con una lista completa generada por la propia app. Quien vive solo deja de comprar por impulso porque sabe exactamente qué falta. Estimaciones de comportamiento de consumo muestran que las compras sin planificación cuestan entre 20% y 30% más — entre artículos duplicados, productos que vencen antes de usarse e ingredientes olvidados que eran parte de un plan que no existía. Mise corta ese desperdicio desde el origen, conectando lo que tienes con lo que vas a cocinar y lo que necesitas comprar."
    },
    "cta": {
      "title": "Empieza por la lista.<br></br><em>El resto se acomoda solo.</em>",
      "sub": "Gratis, sin registro de entrada, funciona sin conexión."
    }
  },
  "svcListaDeCompras": {
    "meta": {
      "title": "App de Lista de Compras Gratuita y Compartida — Mise",
      "description": "Mise es la app gratuita de lista de compras organizada por pasillo y compartida en tiempo real. Funciona sin conexión, sin registro obligatorio.",
      "ogTitle": "App de Lista de Compras Gratuita y Compartida — Mise",
      "ogDescription": "Lista de compras organizada por pasillo, compartida por WhatsApp, funciona sin conexión. 100% gratis."
    },
    "hero": {
      "eyebrow": "Lista de compras",
      "title": "App de lista de compras<br></br>gratuita y <accent>compartida.</accent>",
      "sub": "Creas la lista en casa, la compartes por WhatsApp y recorres el mercado siguiendo el orden de los pasillos. Sin volver al inicio porque te acordaste del papel higiénico en la última góndola."
    },
    "how": {
      "eyebrow": "Cómo funciona",
      "title": "Tres pasos. Nada más.",
      "step1Title": "Arma la lista en casa",
      "step1Desc": "Agregas los artículos, la app los organiza por pasillo automáticamente. Frutas y verduras, carnes, despensa — todo en el orden correcto del supermercado.",
      "step2Title": "Comparte por WhatsApp",
      "step2Desc": "Envía el link a quien va al mercado contigo. Los dos ven la misma lista en tiempo real — nadie compra lo que el otro ya puso en el carrito.",
      "step3Title": "Vas al mercado y marcas",
      "step3Desc": "Funciona sin conexión, con mala señal o sin nada. Marcas cada artículo a medida que lo llevas. Lista en cero al llegar a la caja."
    },
    "feature": {
      "eyebrow": "Qué incluye",
      "title": "Todo lo que una lista de compras necesita tener.",
      "desc": "Sin funciones innecesarias. Sin registro obligatorio antes de poder usarla. Solo lo que resuelve el problema de salir de casa sin olvidar nada.",
      "point1Title": "Organizada por pasillo",
      "point1Desc": "Frutas y verduras, carnes, despensa, limpieza e higiene — agrupados en el orden del supermercado.",
      "point2Title": "Lista compartida en tiempo real",
      "point2Desc": "Un link por WhatsApp. Dos celulares, una lista. Lo que uno agrega aparece para el otro al instante.",
      "point3Title": "Funciona sin conexión",
      "point3Desc": "Dentro del mercado, en el subsuelo, sin señal. La lista no desaparece.",
      "point4Title": "100% gratis, sin registro de entrada",
      "point4Desc": "Empiezas a usarla antes de crear una cuenta. Ninguna función esencial está bloqueada.",
      "vmTitle": "Lista del mercado",
      "vmCount": "7 artículos",
      "vmSec1": "Frutas y verduras",
      "vmItem1": "Tomate",
      "vmItem2": "Ajo",
      "vmItem3": "Cebolla",
      "vmSec2": "Despensa",
      "vmItem4": "Arroz 5 kg",
      "vmItem5": "Frijoles",
      "vmItem6": "Pasta",
      "vmSec3": "Limpieza",
      "vmItem7": "Detergente"
    },
    "why": {
      "title": "Por qué la organización por pasillo hace la diferencia",
      "p1": "Ir al mercado sin lista es improvisar con costo. Estudios de comportamiento de consumo muestran que las compras sin planificación suelen costar entre 20% y 30% más — entre artículos por impulso y repeticiones de algo que ya tenías en casa pero no recordabas.",
      "p2": "Pero cualquier lista resuelve solo la mitad del problema. Sin organización por pasillo, recorres el supermercado al azar: vas a limpieza, te acuerdas de los frijoles, vuelves a despensa, pasas de nuevo por frutas y verduras. Además de cansador, aumenta la chance de llevar algo que no estaba en la lista.",
      "p3": "Mise agrupa los artículos en el orden en que los encuentras en el mercado: frutas y verduras en la entrada, carnes y proteínas después, despensa, limpieza e higiene al fondo. Entras, recorres una vez, marcas todo y sales con el carrito correcto — sin volver al mismo pasillo dos veces.",
      "p4": "La organización por pasillo de Mise sigue el flujo real de un supermercado: frutas y verduras en la entrada, carnes y lácteos después, despensa en el medio, limpieza e higiene al fondo. Entras, recorres una vez, marcas todo sin volver al mismo pasillo dos veces — y sales en menos tiempo del que tomaría sin lista. Compartirla por WhatsApp antes de salir de casa asegura que quien te acompañe compre exactamente lo que dice la lista, sin llamadas a mitad de pasillo."
    },
    "faq": {
      "eyebrow": "Preguntas directas",
      "title": "Lo que la gente pregunta",
      "q1": "¿La app de lista de compras es gratuita?",
      "a1": "Sí, 100% gratuita. Lista de compras, compartir y organización por pasillo funcionan sin pagar nada. Ninguna función esencial está bloqueada detrás de una suscripción.",
      "q2": "¿Cómo comparto la lista de compras?",
      "a2": "La compartes por WhatsApp con un link. Quien la reciba edita la misma lista en tiempo real — sin instalar nada. Funciona para parejas, familias o cualquiera que reparta las compras.",
      "q3": "¿La lista funciona sin internet dentro del mercado?",
      "a3": "Sí. Mise es una PWA que carga sin conexión. La lista sigue disponible incluso con mala señal o sin conexión — común en mercados grandes con subsuelo.",
      "q4": "¿Cómo se organiza la lista de compras por pasillo?",
      "a4": "La app agrupa los artículos automáticamente — frutas y verduras, carnes, despensa, limpieza, higiene — en el orden en que los encuentras en el supermercado. Recorres los pasillos una vez y marcas todo sin volver atrás."
    },
    "cta": {
      "title": "Deja de decidir qué comprar.<br></br><em>Empieza a cocinar.</em>",
      "sub": "Sin registro de entrada. Empieza a usarla ahora."
    }
  },
  "svcDespensa": {
    "meta": { "title": "App de Control de Despensa — Mise", "description": "Mise es la app de control de despensa que marca lo que se está acabando y genera la lista de compras automáticamente. Arma tu despensa ideal una sola vez y nunca más olvides lo que falta.", "ogTitle": "App de Control de Despensa — Mise", "ogDescription": "Arma tu despensa, marca lo que se acabó y genera la lista de compras automáticamente. Gratis." },
    "hero": { "eyebrow": "Despensa", "title": "Siempre ten lo que<br></br>necesitas para <accent>cocinar.</accent>", "sub": "Arma tu despensa ideal una sola vez. Lo que se acaba queda marcado — cuando hagas la lista, ya sabes qué comprar sin abrir el refrigerador." },
    "how": { "eyebrow": "Cómo funciona", "title": "La armas una vez. La usas para siempre.", "step1Title": "Arma la despensa ideal", "step1Desc": "Agregas los artículos que siempre tienes en casa — la app sugiere lo básico. Arroz, frijoles, aceite, ajo, cebolla. En dos minutos, tu despensa está lista.", "step2Title": "Marca lo que se acabó", "step2Desc": "¿Usaste el último aceite? Un toque y queda marcado como agotado. ¿Se está por acabar? Márcalo como \"por acabarse\". La app se acuerda por ti.", "step3Title": "Genera la lista automáticamente", "step3Desc": "A la hora de ir al mercado, lo que está agotado o por acabarse se convierte en sugerencia de lista con un toque. Sin abrir el refrigerador, sin olvidos." },
    "feature": { "eyebrow": "Qué incluye", "title": "Despensa conectada con la lista y las recetas.", "desc": "No es solo un inventario. La despensa de Mise habla con la lista de compras y con las recetas — para que sepas qué falta comprar y qué puedes cocinar hoy mismo.", "point1Title": "Sugerencias para armar la despensa completa", "point1Desc": "La app sugiere los artículos más comunes para que los agregues en un toque — sin empezar de cero.", "point2Title": "Agrega a la lista en un toque", "point2Desc": "Lo que está agotado va directo a la lista de compras. Sin copiar, sin escribir de nuevo.", "point3Title": "Se cruza con tus recetas", "point3Desc": "La app muestra qué recetas puedes hacer con lo que tienes en la despensa — sin ir antes al mercado.", "point4Title": "Marca lo que se está acabando", "point4Desc": "No hace falta esperar a que se acabe para acordarte. Márcalo como \"por acabarse\" y la app ya lo incluye en la próxima compra.", "vmTitle": "Mi despensa", "vmCount": "8 artículos", "chip1": "Ajo", "chip2": "Cebolla", "chip3": "Aceite", "chip4": "Arroz", "chip5": "Frijoles", "chip6": "Sal", "chip7": "Leche", "chip8": "Huevos", "outLabel": "Se acabó", "outItem1": "Sal", "outItem2": "Leche", "addToList": "+ lista" },
    "why": { "title": "El costo de no saber qué tienes en casa", "p1": "Una despensa desorganizada no es solo un tema estético — es financiero. Cuando no sabes qué tienes en casa, compras dos veces el mismo producto, dejas que artículos venzan al fondo de la repisa y aun así llegas al mercado sin saber qué te falta de verdad.", "p2": "Estudios sobre desperdicio de alimentos muestran que buena parte de ese desperdicio empieza con la compra equivocada: compras algo que no necesitabas porque no sabías que ya lo tenías.", "p3": "Con la despensa de Mise armas tu lista ideal de stock una sola vez. Después, solo tienes que marcar lo que se acabó en el momento en que lo notas — no el día del mercado, cuando ya se te olvidó. A la hora de ir de compras, la lista ya está prellenada con lo que falta, sin abrir cada alacena para revisar.", "p4": "La diferencia entre una despensa organizada y una despensa viva está en el hábito de marcar lo que se acaba en el momento en que lo notas — no en la semana del mercado, cuando ya lo olvidaste. Mise hace ese hábito mínimo: un toque cuando abres la alacena y ves que se acabó la sal. A la hora de ir al mercado, la lista ya está prellenada con lo que falta. Sin abrir cada alacena, sin tratar de recordar qué había en la última repisa." },
    "faq": { "eyebrow": "Preguntas directas", "title": "Lo que la gente pregunta", "q1": "¿Cómo controla la app lo que tengo en la despensa?", "a1": "Armas la despensa ideal una sola vez — con los artículos que siempre tienes en casa. Cuando algo se acaba o está por acabarse, lo marcas en la app. A la hora de hacer la lista de compras, Mise ya sabe qué falta.", "q2": "¿La despensa se conecta con la lista de compras?", "a2": "Sí. Lo que está marcado como agotado o por acabarse en la despensa aparece como sugerencia en la lista de compras con un toque. Sin tener que acordarte de nada.", "q3": "¿La despensa también funciona con las recetas?", "a3": "Sí. La app cruza la despensa con las recetas guardadas y muestra qué puedes cocinar hoy sin pasar por el mercado. Los ingredientes que faltan van directo a la lista.", "q4": "¿Necesito armar la despensa desde cero?", "a4": "No. Mise sugiere los artículos más comunes — arroz, frijoles, aceite, ajo — para que los agregues en un toque. En dos minutos tu despensa ya tiene lo básico de tu casa." },
    "cta": { "title": "La despensa recuerda.<br></br><em>Tú cocinas.</em>", "sub": "Sin registro de entrada. Empieza a usarla ahora." }
  },
  "svcCardapioSemanal": {
    "meta": { "title": "App de Plan Semanal con Lista de Compras Integrada — Mise", "description": "Mise es la app para crear un plan semanal integrado con la lista de compras. Planeas los 7 días, la app genera la lista automáticamente con lo que falta en la despensa.", "ogTitle": "App para Crear Plan Semanal con Lista de Compras — Mise", "ogDescription": "Un plan semanal que genera la lista de compras automáticamente. Integrado con la despensa. Gratis." },
    "hero": { "eyebrow": "Plan semanal", "title": "App de plan semanal que genera<br></br><accent>la lista de compras automáticamente.</accent>", "sub": "Armas el menú de lunes a domingo. La app lo cruza con lo que tienes en la despensa y agrega los ingredientes que faltan directo a la lista. Se acabó la sorpresa del viernes." },
    "how": { "eyebrow": "Cómo funciona", "title": "Del plan a la lista en tres pasos.", "step1Title": "Eliges las recetas de la semana", "step1Desc": "Seleccionas qué vas a cocinar de lunes a domingo usando las recetas guardadas en la app. Puedes dejar días libres sin problema.", "step2Title": "La app lo cruza con la despensa", "step2Desc": "Mise verifica qué ya tienes en casa y separa solo los ingredientes que faltan. No compras lo que no necesitas.", "step3Title": "Lista generada, mercado resuelto", "step3Desc": "Un solo viaje al mercado cubre toda la semana. Sin improvisar el jueves porque faltó un ingrediente de la receta del viernes." },
    "feature": { "eyebrow": "Qué incluye", "title": "Planificación que conecta el menú, la despensa y la lista.", "desc": "No es solo un calendario de comidas. Es un sistema que elimina el espacio entre \"qué voy a cocinar\" y \"qué necesito comprar\".", "point1Title": "7 días de una vez", "point1Desc": "Planeas toda la semana antes de ir al mercado. Un solo viaje. Sin improvisos a mitad de semana.", "point2Title": "Lista generada automáticamente", "point2Desc": "Los ingredientes que faltan entran a la lista de compras sin anotarlos uno por uno.", "point3Title": "Integrado con la despensa", "point3Desc": "Lo que ya tienes en casa no entra a la lista. Solo compras lo que realmente necesitas.", "point4Title": "Menos desperdicio", "point4Desc": "Compras lo que vas a usar — no lo que parece útil en el momento. El pollo se queda en el refrigerador el tiempo justo.", "vmTitle": "Plan semanal", "vmCount": "5 comidas", "day1Lbl": "LUN", "day1": "Pollo a la plancha con arroz", "day2Lbl": "MAR", "day2": "Espagueti a la boloñesa", "day3Lbl": "MIÉ", "day3": "Omelette de verduras", "day4Lbl": "JUE", "day4": "Guiso de frijoles con cerdo", "day5Lbl": "VIE", "day5": "Pescado al horno", "day6Lbl": "SÁB", "day6Empty": "— libre —", "day7Lbl": "DOM", "day7Empty": "— libre —" },
    "why": { "title": "Por qué planear la semana antes de ir al mercado", "p1": "Quien va al mercado sin saber qué va a cocinar esa semana compra por instinto. Lleva lo que parece útil, recuerda algo que se estaba acabando, mete al carrito lo que estaba en oferta. El resultado es un refrigerador lleno de artículos sueltos y la duda del miércoles: ¿y ahora qué hago con todo esto?", "p2": "Las familias que planean el menú semanal antes de ir al mercado suelen gastar menos en las compras y desperdiciar menos comida. El menú funciona como filtro: compras lo que vas a usar, no lo que parece que vas a usar.", "p3": "Mise conecta el menú con la despensa. Eliges las recetas de la semana, la app verifica qué ya tienes en casa y arma automáticamente la lista de los ingredientes que faltan. Una acción resuelve toda la semana — sin improvisar el jueves, sin vuelta extra al mercado el viernes.", "p4": "Quien prueba planear el menú antes de ir al mercado nota la diferencia en la cuenta y en los improvisos de mitad de semana ya en la primera semana. El hábito de cinco minutos de planificación el domingo — armar el menú con lo que hay en la despensa y generar la lista automática — resuelve cuatro preguntas de \"¿qué comemos hoy?\" y ahorra al menos un viaje extra al mercado por semana." },
    "faq": { "eyebrow": "Preguntas directas", "title": "Lo que la gente pregunta", "q1": "¿Cómo creo un plan semanal con lista de compras integrada?", "a1": "Seleccionas recetas para cada día de la semana. Mise las cruza con lo que tienes en la despensa y agrega automáticamente los ingredientes que faltan a la lista de compras. Una acción genera la lista de toda la semana.", "q2": "¿La app para crear el plan semanal es gratuita?", "a2": "Sí, 100% gratuita. El plan semanal, la integración con la lista y la despensa funcionan sin pagar nada y sin registro obligatorio.", "q3": "¿Cómo ayuda el plan semanal a ahorrar en el mercado?", "a3": "Quien planea antes de ir al mercado compra solo lo que va a usar. Quien va sin planificación gasta en promedio 27% más — son artículos por impulso e ingredientes que quedan en el refrigerador hasta convertirse en basura.", "q4": "¿Funciona para familia o pareja?", "a4": "Sí. La lista generada por el menú se puede compartir por WhatsApp. Todos ven el plan de la semana y la lista en tiempo real en el mismo lugar — sin grupo de chat desordenado." },
    "cta": { "title": "Menos decisiones.<br></br><em>Más comida.</em>", "sub": "Del menú a la lista en tres pasos. Gratis." }
  },
  "svcReceitas": {
    "meta": { "title": "App para Anotar Recetas y Cocinar con lo que Tienes en Casa — Mise", "description": "Mise es la app para anotar recetas y filtrar por lo que tienes en casa. Guarda tus recetas, las cruza con la despensa y muestra qué puedes cocinar hoy.", "ogTitle": "App para Anotar Recetas y Filtrar por lo que Tienes en Casa — Mise", "ogDescription": "Guarda recetas, filtra por lo que tienes en casa, genera la lista de compras de los ingredientes que faltan. Gratis." },
    "hero": { "eyebrow": "Recetas", "title": "Una app para anotar recetas y<br></br><accent>cocinar con lo que tienes en casa.</accent>", "sub": "Guarda las recetas que ya haces. La app filtra por lo que tienes en la despensa y muestra qué puedes cocinar hoy — sin pasar antes por el mercado." },
    "how": { "eyebrow": "Cómo funciona", "title": "De la receta al plato sin improvisar.", "step1Title": "Anota tus recetas", "step1Desc": "Guarda las recetas que ya haces con ingredientes, cantidades y modo de preparación. Las tuyas, no las de un influencer que nunca vas a hacer.", "step2Title": "Filtra por lo que tienes en casa", "step2Desc": "La app cruza las recetas guardadas con el contenido de la despensa y muestra qué puedes cocinar hoy — sin ir antes al mercado.", "step3Title": "Los ingredientes que faltan van a la lista", "step3Desc": "¿Elegiste una receta a la que le falta un ingrediente? Con un toque, lo que falta entra directo a la lista de compras." },
    "feature": { "eyebrow": "Qué incluye", "title": "Recetas que funcionan con lo que tienes. No con lo que deberías tener.", "desc": "El problema no es falta de recetas en internet. Es saber cuál puedes hacer hoy, con lo que tienes en casa, sin pasar por el mercado.", "point1Title": "App para anotar cualquier receta", "point1Desc": "Nombre, ingredientes con cantidades y modo de preparación. Tus recetas en la app, siempre a mano.", "point2Title": "Recetas con lo que tienes en casa", "point2Desc": "Se cruza con la despensa y muestra solo lo que puedes hacer ahora — sin ir al mercado.", "point3Title": "Lista generada desde la receta", "point3Desc": "Los ingredientes que faltan entran a la lista de compras con un toque. Sin anotarlos uno por uno.", "point4Title": "Integrado con el plan semanal", "point4Desc": "Las recetas guardadas alimentan el plan de la semana. Todo conectado en el mismo lugar.", "vmTitle": "Mis recetas", "vmBadge": "Con lo que tengo", "recipe1": "Pollo con verduras al wok", "recipe1Chip1": "Pollo", "recipe1Chip2": "Pimiento", "recipe1Chip3": "Salsa de soya", "recipe1Chip4": "Anacardos", "recipe2": "Omelette de verduras", "recipe2Chip1": "Huevos", "recipe2Chip2": "Cebolla", "recipe2Chip3": "Tomate", "recipe3": "Risotto de champiñones", "recipe3Chip1": "Champiñones", "recipe3Chip2": "Vino blanco", "addToList": "+ lista" },
    "why": { "title": "Cocinar con lo que tienes, no con lo que deberías tener", "p1": "La mayoría de las apps de recetas tienen el mismo problema: muestran lo que podrías cocinar en condiciones ideales, con todos los ingredientes disponibles. En la vida real, eliges una receta, vas a la cocina y descubres que faltan tres ingredientes. Ahí improvisas o pides comida a domicilio.", "p2": "Mise invierte la lógica. En vez de mostrar recetas y que después revises qué tienes en casa, la app filtra las recetas automáticamente según el contenido de tu despensa. Aparecen solo las que puedes hacer ahora — sin pasar antes por el mercado.", "p3": "Para los ingredientes que le faltan a una receta que quieres hacer, la app agrega todo a la lista de compras con un toque. Organizas el menú con lo que tienes, compras solo lo que necesitas y entras a la cocina sabiendo exactamente qué vas a preparar.", "p4": "Tener las recetas que realmente haces en la app — y no en un cuaderno, una foto o una pestaña de Chrome que cierras sin guardar — elimina el \"hagamos ese pollo, pero no me acuerdo de los ingredientes\". En dos minutos, los ingredientes que faltan están en la lista. En tres toques, la receta está en el plan de la semana. Sin depender de señal para entrar a un sitio de recetas a mitad de la cocinada." },
    "faq": { "eyebrow": "Preguntas directas", "title": "Lo que la gente pregunta", "q1": "¿Cómo anoto recetas en la app?", "a1": "Guardas cualquier receta con nombre, ingredientes, cantidades y modo de preparación. Las recetas quedan en la app y están disponibles para el plan semanal y para el filtro de \"qué puedo hacer hoy\".", "q2": "¿Cómo veo recetas con lo que tengo en casa?", "a2": "Mise cruza las recetas guardadas con el contenido de tu despensa. El filtro \"con lo que tengo\" muestra solo las recetas cuyos ingredientes ya tienes — sin ir al mercado antes de cocinar.", "q3": "¿Cómo genero la lista de compras desde una receta?", "a3": "Con un toque en la receta, los ingredientes que no están en tu despensa entran automáticamente a la lista de compras. No hace falta copiarlos uno por uno.", "q4": "¿La app para anotar recetas es gratuita?", "a4": "Sí, 100% gratuita. Guardar recetas, filtrar por ingredientes y generar la lista de compras funcionan sin pagar nada y sin registro obligatorio." },
    "cta": { "title": "Tú no te olvidas del ajo.<br></br><em>El sistema se acuerda.</em>", "sub": "Recetas filtradas por lo que tienes en casa. Sin pasar por el mercado." }
  },
  "blogIndex": {
    "meta": { "title": "Blog — Mise", "description": "Consejos de organización de cocina, listas de compras y planificación semanal." },
    "hero": { "title": "Consejos de quien hace lista de verdad", "sub": "Organización de cocina, mercado y planificación semanal — sin vueltas.", "desc": "Aquí encuentras guías prácticas sobre listas de compras, organización de despensa y planificación de comidas. Sin técnicas rebuscadas ni productos caros — solo lo que funciona para quien cocina en casa de verdad. Cada artículo trae listas para copiar, estimaciones de costo y respuestas directas a las dudas más comunes." },
    "topics": {
      "title": "Qué vas a encontrar aquí",
      "t1Title": "Listas de compras",
      "t1P1": "Guías completas con artículos organizados por grupo, estimaciones de costo por tipo de familia y consejos prácticos para distintas situaciones — casa nueva, mes ajustado, familia grande, pareja. Cada lista está pensada para que la copies y adaptes, no para empezar de cero cada semana.",
      "t1P2": "Vas a encontrar desde la lista básica de supermercado con los 80 artículos que casi todo el mundo necesita hasta listas específicas por situación: mudanza, fiesta, parrillada, canasta básica. Sin artículos exóticos que nunca vas a usar.",
      "t2Title": "Organización de despensa y refrigerador",
      "t2P1": "Cómo organizar la despensa por zonas, qué recipientes usar, cómo etiquetar, por dónde empezar cuando todo está desordenado — y cómo mantenerlo organizado en el día a día sin necesitar un domingo entero para volver a acomodar todo.",
      "t2P2": "Sin productos caros, sin estética de revista de decoración. El enfoque es funcional: qué reduce el desperdicio, facilita el acceso a los ingredientes más usados y hace que la despensa trabaje para tu rutina real de cocina.",
      "t3Title": "Planificación de comidas y ahorro",
      "t3P1": "Cómo armar un menú semanal que respete el tiempo disponible y el presupuesto, por qué planear antes de ir al mercado hace la diferencia en la cuenta del mes y qué hábitos simples reducen el gasto sin renunciar a lo que te gusta comer.",
      "t3P2": "Estudios de comportamiento de consumo muestran que comprar sin lista cuesta entre 20% y 30% más. Los artículos de aquí explican cómo se traduce ese dato en tu rutina — y qué hacer al respecto."
    },
    "empty": { "title": "Nuevos artículos muy pronto", "desc": "Estamos traduciendo los artículos del blog. Mientras tanto, revisa la versión en portugués." },
    "cta": { "text": "Ya que llegaste hasta aquí — prueba la app. Es gratis.", "button": "Abrir Mise →" }
  }
}
```

- [ ] **Step 4: Verificar completude e JSON válido**

Run:
```bash
node -e "
const langs = ['pt','en','es'];
const dicts = langs.map(l => require('./messages/' + l + '.json'));

function collectKeys(obj, prefix) {
  let keys = [];
  for (const k in obj) {
    const path = prefix ? prefix + '.' + k : k;
    if (obj[k] && typeof obj[k] === 'object') keys = keys.concat(collectKeys(obj[k], path));
    else keys.push(path);
  }
  return keys;
}

const allKeys = new Set();
dicts.forEach(d => collectKeys(d, '').forEach(k => allKeys.add(k)));

function getPath(obj, path) {
  return path.split('.').reduce((acc, p) => (acc && typeof acc === 'object' ? acc[p] : undefined), obj);
}

let missing = [];
langs.forEach((l, i) => {
  allKeys.forEach(k => {
    const v = getPath(dicts[i], k);
    if (typeof v !== 'string' || !v) missing.push(l + ':' + k);
  });
});

console.log('total keys:', allKeys.size);
console.log('missing:', missing.length ? missing : 'none');
if (missing.length) process.exit(1);
"
```
Expected: `missing: none`. Se der `SyntaxError`, um dos três JSONs está malformado — corrija antes de prosseguir. Se aparecerem chaves faltando, complete-as usando o mesmo padrão de tom das existentes no mesmo namespace.

- [ ] **Step 5: Commit**

```bash
git add messages/pt.json messages/en.json messages/es.json
git commit -m "feat(i18n): dicionarios completos pt/en/es da landing page"
```

---

### Task 3: Restructure para `app/[locale]` + redirects legados

**Files:**
- Delete: `app/layout.js`
- Create: `app/[locale]/layout.js`
- Move: `app/page.js` → `app/[locale]/page.js`
- Move: `app/funcionalidades/**` → `app/[locale]/funcionalidades/**`
- Move: `app/blog/**` → `app/[locale]/blog/**`
- Modify: `next.config.js`

**Interfaces:**
- Consumes: `routing` de `i18n/routing.js` (Task 1).
- Produces: toda rota existente passa a viver sob `app/[locale]/...`, acessível em `/pt/...`, `/en/...`, `/es/...`. `generateStaticParams` do layout garante os 3 locales pré-renderizados. Nenhuma tradução de conteúdo ainda acontece neste task — só a relocação de arquivos; o texto continua hardcoded em PT em todas as páginas (Tasks 5-11 fazem a tradução).

- [ ] **Step 1: Mover as rotas para `app/[locale]`**

Run:
```bash
mkdir -p "app/[locale]"
git mv app/page.js "app/[locale]/page.js"
git mv app/funcionalidades "app/[locale]/funcionalidades"
git mv app/blog "app/[locale]/blog"
```
Expected: `git status` mostra as movimentações como renames, `app/robots.js` e `app/sitemap.js` continuam em `app/` (não movem).

- [ ] **Step 2: Deletar `app/layout.js` e criar `app/[locale]/layout.js`**

Delete o arquivo `app/layout.js` (seu conteúdo — fontes, scripts do GA, `IconSprite`, skip-link, metadata — migra pro novo layout abaixo).

Create `app/[locale]/layout.js`:

```jsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { routing } from '../../i18n/routing'
import '../globals.css'
import IconSprite from '../../components/IconSprite'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
  preload: false,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const viewport = {
  themeColor: '#F5F1E8',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es' }

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'site' })
  return {
    metadataBase: new URL('https://www.miseemcasa.com.br'),
    title: t('title'),
    description: t('description'),
    verification: {
      google: 'YhW2K5hJ2UdND5GjgGfhPogP5MFaybFqoDpbCIlaKIc',
    },
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}`,
      locale: OG_LOCALE[locale],
    },
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt',
        en: 'https://www.miseemcasa.com.br/en',
        es: 'https://www.miseemcasa.com.br/es',
        'x-default': 'https://www.miseemcasa.com.br/pt',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'common' })

  return (
    <html lang={locale}>
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4FY46XVV1X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4FY46XVV1X');
          `}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <IconSprite />
          <a href="#main-content" className="skip-link">{t('skipLink')}</a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

Note que `generateStaticParams` está no layout (não em cada `page.js`) — next-intl recomenda isso porque o layout é compartilhado por todas as rotas sob `[locale]`, e um único `generateStaticParams` já cobre as 3 variantes pra toda a árvore de rotas abaixo dele.

- [ ] **Step 3: Adicionar guarda de locale nos 16 posts de blog**

Os posts existentes (`app/[locale]/blog/<slug>/page.js`, ×16) precisam existir só em `pt` nesta fase — a rota `[locale]` faz match para `en`/`es` também, então cada post precisa recusar explicitamente esses dois idiomas.

Run este script Node para inserir a guarda em todos os 16 arquivos de uma vez (evita 16 edições manuais idênticas):

```bash
node -e "
const fs = require('fs');
const path = require('path');
const dir = 'app/[locale]/blog';
const slugs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

slugs.forEach((slug) => {
  const file = path.join(dir, slug, 'page.js');
  let src = fs.readFileSync(file, 'utf8');

  if (!src.includes(\"from 'next/navigation'\")) {
    src = src.replace(
      /^(import[^\n]*\n)/,
      \"\$1import { notFound } from 'next/navigation'\n\"
    );
  }

  src = src.replace(
    /export default function (\w+)\(\) \{\n  return \(/,
    \"export default function \$1({ params }) {\n  const { locale } = params\n  if (locale !== 'pt') {\n    notFound()\n  }\n  return (\"
  );

  fs.writeFileSync(file, src);
  console.log('guarded:', slug);
});
console.log('total:', slugs.length);
"
```
Expected: imprime `guarded: <slug>` 16 vezes e `total: 16`.

Confira manualmente 1 arquivo (ex: `app/[locale]/blog/o-que-e-chia/page.js`) pra garantir que o import e a guarda entraram corretamente — a função exportada deve começar assim:

```jsx
import { notFound } from 'next/navigation'
// ...outros imports...

export default function OQueEChiaPage({ params }) {
  const { locale } = params
  if (locale !== 'pt') {
    notFound()
  }
  return (
```

Se o nome da função exportada de algum post não seguir o padrão `function NomePage()` (confira com `grep -L "export default function" "app/[locale]/blog/*/page.js"` antes de rodar o script — se a lista vier vazia, todos seguem o padrão e o script funciona sem ajuste).

- [ ] **Step 4: Redirects legados em `next.config.js`**

Read o `next.config.js` atual antes de editar (deve estar vazio, `const nextConfig = {}`). Substitua por:

```js
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/pt', permanent: true },
      { source: '/funcionalidades', destination: '/pt/funcionalidades', permanent: true },
      { source: '/funcionalidades/:path*', destination: '/pt/funcionalidades/:path*', permanent: true },
      { source: '/blog', destination: '/pt/blog', permanent: true },
      { source: '/blog/:path*', destination: '/pt/blog/:path*', permanent: true },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
```

- [ ] **Step 5: Build e verificação manual**

Run: `npm run build`
Expected: build limpo, sem erros. O output lista rotas geradas para `/pt`, `/en`, `/es` e as sub-rotas de `funcionalidades`/`blog` nos 3 locales (posts individuais só aparecem como estáticos pra `pt` — `en`/`es` deles resolvem via `notFound()` em runtime, não pré-renderizados com conteúdo).

Run: `npm run dev`, depois abrir no browser:
- `http://localhost:3000/` → redireciona (301) pra `http://localhost:3000/pt`
- `http://localhost:3000/blog/o-que-e-chia` → redireciona pra `http://localhost:3000/pt/blog/o-que-e-chia`
- `http://localhost:3000/en/blog/o-que-e-chia` → 404 (guarda funcionando)
- `http://localhost:3000/pt`, `http://localhost:3000/en`, `http://localhost:3000/es` → todas carregam a home (ainda em português em todas, já que a tradução acontece só a partir do Task 5 — isso é esperado neste ponto do plano)

- [ ] **Step 6: Commit**

```bash
git add "app/[locale]" app/layout.js next.config.js
git commit -m "feat(i18n): restructure de rotas para app/[locale] + redirects legados"
```

---

### Task 4: `LanguageSwitcher` + traduzir `SiteNav`/`NavDropdown` + dedup da home

**Files:**
- Create: `components/LanguageSwitcher.js`
- Modify: `components/SiteNav.js`
- Modify: `components/NavDropdown.js`
- Modify: `app/globals.css`
- Modify: `app/[locale]/page.js` (troca o header duplicado pelo componente `SiteNav`)

**Interfaces:**
- Consumes: `nav`/`common` namespaces (Task 2), `Link`/`useRouter`/`usePathname` de `i18n/navigation.js` (Task 1).
- Produces: `<LanguageSwitcher />`, usado dentro de `SiteNav` e reutilizável em qualquer header futuro.

- [ ] **Step 1: Criar `components/LanguageSwitcher.js`**

```jsx
'use client'
import { usePathname, useRouter } from '../i18n/navigation'
import { useLocale } from 'next-intl'

const LOCALES = ['pt', 'en', 'es']

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={`chip${l === locale ? ' on' : ''}`}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-pressed={l === locale}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: CSS do switcher em `app/globals.css`**

Read `app/globals.css` primeiro pra achar um bom lugar (perto das regras `.chip` existentes) e confirmar que `.chip`/`.chip.on` já existem (design system, ver `CLAUDE.md`). Adicione logo depois do bloco `.chip.add`:

```css
.lang-switcher {
  display: flex;
  gap: 6px;
  margin-left: 12px;
}

.lang-switcher .chip {
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
```

- [ ] **Step 3: Traduzir e atualizar `components/SiteNav.js`**

```jsx
import { getTranslations } from 'next-intl/server'
import NavDropdown from './NavDropdown'
import LanguageSwitcher from './LanguageSwitcher'
import { BrandIcon } from './Icon'
import { Link } from '../i18n/navigation'

export default async function SiteNav() {
  const t = await getTranslations('nav')
  const tc = await getTranslations('common')
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            <BrandIcon size={20} />
          </div>
          <span className="brand-name">Mise</span>
        </Link>
        <nav className="nav-links">
          <NavDropdown />
          <Link href="/blog" className="nav-link">{t('blog')}</Link>
        </nav>
        <LanguageSwitcher />
        <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          {tc('ctaSmall')}
          <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
```

- [ ] **Step 4: Traduzir e atualizar `components/NavDropdown.js`**

`NavDropdown` é `'use client'`, então usa `useTranslations` (hook), não `getTranslations` (async, server-only). Substitua o array `ITEMS` hardcoded por um lookup nas chaves de `nav.dropdown`, e troque `<a>` por `<Link>`:

Old (topo do arquivo, array `ITEMS`):
```jsx
'use client'
import { useState, useRef } from 'react'
import Icon from './Icon'

const ITEMS = [
  {
    href: '/funcionalidades/lista-de-compras',
    label: 'Lista de compras',
    desc: 'Organizada por corredor, offline',
    iconName: 'cart',
  },
  {
    href: '/funcionalidades/despensa',
    label: 'Despensa',
    desc: 'Sabe o que falta antes de ir ao mercado',
    iconName: 'archive',
  },
  {
    href: '/funcionalidades/receitas',
    label: 'Receitas',
    desc: 'Filtra pelo que tem em casa',
    iconName: 'book',
  },
  {
    href: '/funcionalidades/cardapio-semanal',
    label: 'Cardápio semanal',
    desc: 'Gera lista de compras automática',
    iconName: 'calendar',
  },
]
```

New:
```jsx
'use client'
import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import Icon from './Icon'
import { Link } from '../i18n/navigation'

const ITEM_DEFS = [
  { href: '/funcionalidades/lista-de-compras', key: 'lista', iconName: 'cart' },
  { href: '/funcionalidades/despensa', key: 'despensa', iconName: 'archive' },
  { href: '/funcionalidades/receitas', key: 'receitas', iconName: 'book' },
  { href: '/funcionalidades/cardapio-semanal', key: 'cardapio', iconName: 'calendar' },
]
```

Dentro do componente, logo após `export default function NavDropdown() {`, adicione:
```jsx
  const t = useTranslations('nav')
  const ITEMS = ITEM_DEFS.map((d) => ({
    href: d.href,
    iconName: d.iconName,
    label: t(`dropdown.${d.key}.label`),
    desc: t(`dropdown.${d.key}.desc`),
  }))
```

E troque o trigger e os itens do menu de `<a>` pra `<Link>` (mesmos atributos, só troca a tag e a fonte do texto "Funcionalidades" pra `t('features')`):

Old:
```jsx
      <a
        href="/funcionalidades"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={MENU_ID}
        onKeyDown={handleTriggerKeyDown}
      >
        Funcionalidades
        <Icon
```

New:
```jsx
      <Link
        href="/funcionalidades"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={MENU_ID}
        onKeyDown={handleTriggerKeyDown}
      >
        {t('features')}
        <Icon
```

E a linha de fechamento correspondente (`</a>` logo antes de `<div id={MENU_ID}`) vira `</Link>`.

Old (itens do menu):
```jsx
        {ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem">
            <div className="nav-dropdown-ico" aria-hidden="true">
              <Icon name={item.iconName} size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="nav-dropdown-label">{item.label}</div>
              <div className="nav-dropdown-desc">{item.desc}</div>
            </div>
          </a>
        ))}
```

New:
```jsx
        {ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem">
            <div className="nav-dropdown-ico" aria-hidden="true">
              <Icon name={item.iconName} size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="nav-dropdown-label">{item.label}</div>
              <div className="nav-dropdown-desc">{item.desc}</div>
            </div>
          </Link>
        ))}
```

- [ ] **Step 5: Home page usa `<SiteNav>` em vez do header duplicado**

`app/[locale]/page.js` hoje repete o mesmo markup de header que `SiteNav.js` já tem, sem usar o componente (duplicação pré-existente). Consolide agora que ambos precisam do `LanguageSwitcher`.

Old (topo de `app/[locale]/page.js`, do import até o fim do `</header>`):
```jsx
import NavDropdown from '../components/NavDropdown'
import { BrandIcon, BrandTrioIcon } from '../components/Icon'

export default function Home() {
  return (
    <>

      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <nav className="nav-links">
            <NavDropdown />
            <a href="/blog" className="nav-link">Blog</a>
          </nav>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>
```

New (nota: caminho do import mudou porque o arquivo agora está um nível mais fundo, em `app/[locale]/page.js`):
```jsx
import { BrandIcon, BrandTrioIcon } from '../../components/Icon'
import SiteNav from '../../components/SiteNav'

export default function Home() {
  return (
    <>

      <SiteNav />
```

(O restante do Task 5, que traduz o resto da home, ajusta os demais imports/hrefs do mesmo arquivo — este step só remove a duplicação de header.)

- [ ] **Step 6: `npm run dev` e checar visualmente**

Abrir `/pt`, `/en`, `/es` no browser. Confirmar: os 3 chips PT/EN/ES aparecem no header em todas as páginas que já usam `SiteNav` (funcionalidades × 5), clicar em cada chip troca a URL pro locale certo mantendo o path atual, o item ativo fica destacado (`.chip.on`). Na home, o header agora vem do componente compartilhado.

- [ ] **Step 7: Commit**

```bash
git add components/LanguageSwitcher.js components/SiteNav.js components/NavDropdown.js app/globals.css "app/[locale]/page.js"
git commit -m "feat(i18n): seletor de idioma no header + dedup do header da home"
```

---

### Task 5: Traduzir a home (`app/[locale]/page.js`)

**Files:**
- Modify: `app/[locale]/page.js`

**Interfaces:**
- Consumes: namespace `home` (Task 2) via `getTranslations('home')`; `Link` de `i18n/navigation.js` (Task 1).
- Produces: home totalmente traduzida — este é o padrão canônico de wiring que as Tasks 6-11 replicam.

`Home` vira `async function` (usa `await getTranslations`). Strings com tags (`<accent>`, `<em>`, `<br></br>`, `<strong>`) usam `t.rich('chave', { tag: (chunks) => <jsx>{chunks}</jsx> })` em vez de `t('chave')`.

- [ ] **Step 1: Import e assinatura da função**

Old:
```jsx
import { BrandIcon, BrandTrioIcon } from '../../components/Icon'
import SiteNav from '../../components/SiteNav'

export default function Home() {
```

New:
```jsx
import { getTranslations } from 'next-intl/server'
import { BrandIcon, BrandTrioIcon } from '../../components/Icon'
import SiteNav from '../../components/SiteNav'
import { Link } from '../../i18n/navigation'

export default async function Home() {
  const t = await getTranslations('home')
```

- [ ] **Step 2: Hero**

Old:
```jsx
            <h1>Cozinha em paz, <span className="under">do seu jeito.</span></h1>
            <p className="hero-sub">A cozinha não devia te custar tanta cabeça. Despensa, receitas e lista de compras conectadas — você para de decidir e começa a cozinhar.</p>
            <div className="hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Comece grátis
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#como" className="btn btn-quiet">Ver como funciona ↓</a>
            </div>

            <div className="hero-meta">
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Funciona offline
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Compartilha no zap
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Celular e desktop
              </div>
            </div>
```

New:
```jsx
            <h1>{t.rich('hero.title', { accent: (chunks) => <span className="under">{chunks}</span> })}</h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                {tc('ctaSmall')}
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#como" className="btn btn-quiet">{t('hero.ctaHow')}</a>
            </div>

            <div className="hero-meta">
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta1')}
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta2')}
              </div>
              <div className="item">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                {t('hero.meta3')}
              </div>
            </div>
```

**Nota sobre CTAs repetidos:** `home.json` não tem uma chave própria pra "Comece grátis" porque essa string é idêntica à `common.ctaSmall` já definida no Task 2 — reaproveite o namespace `common` em vez de duplicar a tradução. `useTranslations`/`getTranslations` só resolve chaves dentro do namespace declarado, então para consumir `common.*` de dentro de um componente que já pegou `home`, busque um segundo tradutor:

No Step 1, troque `const t = await getTranslations('home')` por:
```jsx
  const t = await getTranslations('home')
  const tc = await getTranslations('common')
```
E em todo lugar deste task marcado como `t('common.ctaSmall')` acima, use `tc('ctaSmall')` (mesma troca vale nos Steps seguintes sempre que o texto for "Comece grátis", "Ver todos os artigos" não se aplica — essa é própria da home). Ou seja: a linha do hero fica `{tc('ctaSmall')}`, sem o comentário de placeholder.

- [ ] **Step 3: Phone mockup (conteúdo decorativo, mas ainda texto visível)**

Old:
```jsx
              <div>
                <div className="label">Acabou o alho</div>
                <div className="sub">na despensa</div>
              </div>
            </div>

            <div className="phone">
              <div className="phone-screen">
                <div className="ph-top">
                  <div className="ph-title">Lista da semana</div>
                  <span className="ph-badge">2/5</span>
                </div>
                <div className="ph-body">
                  <div className="ph-sec">Hortifruti</div>
                  <div className="ph-item">
                    <div className="ph-qty">2x</div>
                    <div className="ph-nm">Alho</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">Tomate italiano</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-sec">Mercearia</div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">1x</div>
                    <div className="ph-nm">Azeite extra virgem</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">12un</div>
                    <div className="ph-nm">Ovos</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">Peito de frango</div>
                    <div className="ph-ck"></div>
                  </div>
                </div>
```

New:
```jsx
              <div>
                <div className="label">{t('hero.float1Label')}</div>
                <div className="sub">{t('hero.float1Sub')}</div>
              </div>
            </div>

            <div className="phone">
              <div className="phone-screen">
                <div className="ph-top">
                  <div className="ph-title">{t('hero.phoneTitle')}</div>
                  <span className="ph-badge">2/5</span>
                </div>
                <div className="ph-body">
                  <div className="ph-sec">{t('hero.phoneSec1')}</div>
                  <div className="ph-item">
                    <div className="ph-qty">2x</div>
                    <div className="ph-nm">{t('hero.phoneItemAlho')}</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">{t('hero.phoneItemTomate')}</div>
                    <div className="ph-ck"></div>
                  </div>
                  <div className="ph-sec">{t('hero.phoneSec2')}</div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">1x</div>
                    <div className="ph-nm">{t('hero.phoneItemAzeite')}</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item done">
                    <div className="ph-qty dim">12un</div>
                    <div className="ph-nm">{t('hero.phoneItemOvos')}</div>
                    <div className="ph-ck on"></div>
                  </div>
                  <div className="ph-item">
                    <div className="ph-qty">1kg</div>
                    <div className="ph-nm">{t('hero.phoneItemFrango')}</div>
                    <div className="ph-ck"></div>
                  </div>
                </div>
```

- [ ] **Step 4: Tabs do phone mockup e float card final**

Old (dentro de `ph-tab`, os quatro `<div className="ph-tab-i ...">`, texto depois de cada `</div>` do `.pill`):
```jsx
                    Lista
                  </div>
```
```jsx
                    Despensa
                  </div>
```
```jsx
                    Receitas
                  </div>
```
```jsx
                    Plano
                  </div>
```

New (na mesma ordem — são 4 substituições distintas no arquivo, cada uma no seu bloco):
```jsx
                    {t('hero.tabLista')}
                  </div>
```
```jsx
                    {t('hero.tabDespensa')}
                  </div>
```
```jsx
                    {t('hero.tabReceitas')}
                  </div>
```
```jsx
                    {t('hero.tabPlano')}
                  </div>
```

Old (float card "Compartilhada"):
```jsx
              <div>
                <div className="label">Compartilhada</div>
                <div className="sub">com a casa toda</div>
              </div>
```

New:
```jsx
              <div>
                <div className="label">{t('hero.float2Label')}</div>
                <div className="sub">{t('hero.float2Sub')}</div>
              </div>
```

- [ ] **Step 5: Seção DORES (pain)**

Old:
```jsx
      <section className="section pain">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Você já passou por isso</div>
            <h2>A cozinha perfeita existe.<br/>Só que ela nunca tem o que precisa.</h2>
            <p>Não é falta de organização. É que nada te ajuda na sua rotina de verdade.</p>
          </div>

          <div className="pain-grid">
            <div className="pain-card reveal">
              <span className="n">01</span>
              <h3>Voltou do mercado sem o alho.</h3>
              <p>De novo. Você olha a gôndola, tenta lembrar de cabeça, compra o que acha que precisa. Chega em casa e <em>falta exatamente aquilo.</em></p>
            </div>
            <div className="pain-card reveal">
              <span className="n">02</span>
              <h3>&ldquo;É essa marca aqui mesmo?&rdquo;</h3>
              <p>Alguém manda foto de 3 marcas. Você para tudo, responde. <em>Compram a errada assim mesmo.</em></p>
            </div>
            <div className="pain-card reveal">
              <span className="n">03</span>
              <h3>App de lista virou planilha.</h3>
              <p>Cheio de função que você não usa. Na hora da pressa, você ainda abre o bloco de notas. <em>Algo tá errado.</em></p>
            </div>
          </div>

          <div className="pain-transition reveal">
            <div className="mark">
              <BrandIcon size={20} />
            </div>
            <div>
              <div className="label">Por isso fizemos o Mise</div>
              <h3>Um app que entende sua cozinha <em>do jeito que ela é.</em> Sem complicação, sem frescura.</h3>
            </div>
            <svg className="arrow" aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </section>
```

New:
```jsx
      <section className="section pain">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('pain.eyebrow')}</div>
            <h2>{t.rich('pain.title', { br: () => <br /> })}</h2>
            <p>{t('pain.sub')}</p>
          </div>

          <div className="pain-grid">
            <div className="pain-card reveal">
              <span className="n">01</span>
              <h3>{t('pain.card1Title')}</h3>
              <p>{t.rich('pain.card1Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
            <div className="pain-card reveal">
              <span className="n">02</span>
              <h3>{t('pain.card2Title')}</h3>
              <p>{t.rich('pain.card2Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
            <div className="pain-card reveal">
              <span className="n">03</span>
              <h3>{t('pain.card3Title')}</h3>
              <p>{t.rich('pain.card3Desc', { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
          </div>

          <div className="pain-transition reveal">
            <div className="mark">
              <BrandIcon size={20} />
            </div>
            <div>
              <div className="label">{t('pain.transitionLabel')}</div>
              <h3>{t.rich('pain.transitionTitle', { em: (chunks) => <em>{chunks}</em> })}</h3>
            </div>
            <svg className="arrow" aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </section>
```

- [ ] **Step 6: Commit intermediário**

```bash
git add "app/[locale]/page.js"
git commit -m "feat(i18n): traduz hero e secao de dores da home"
```

- [ ] **Step 7: Seção FEATURES (4 cards)**

Old (cabeçalho da seção):
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Funcionalidades</div>
            <h2>A despensa lembra. O plano se monta. A lista aparece.</h2>
            <p>Cada um resolve um pedaço do problema. Juntos, resolvem a semana.</p>
          </div>
```

New:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('features.eyebrow')}</div>
            <h2>{t('features.title')}</h2>
            <p>{t('features.sub')}</p>
          </div>
```

Card LISTA — old:
```jsx
                  Lista de compras
                </div>
                <h3>Compartilhe num toque. Comprem certo.</h3>
                <p>Organize por mercado ou corredor, mande pelo zap, e quem for às compras vê exatamente o que pegar.</p>
                <ul className="feat-bullets">
                  <li>Por loja ou por corredor</li>
                  <li>Compartilhada via WhatsApp</li>
                  <li>Histórico do que você já comprou</li>
                </ul>
```
New:
```jsx
                  {t('features.lista.tag')}
                </div>
                <h3>{t('features.lista.title')}</h3>
                <p>{t('features.lista.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.lista.b1')}</li>
                  <li>{t('features.lista.b2')}</li>
                  <li>{t('features.lista.b3')}</li>
                </ul>
```
E no mockup visual dessa mesma card (`vm-hdr`/`vm-li`), old:
```jsx
                  <div className="vm-hdr"><span>Lista da semana</span><span style={{color:'var(--verde-musgo)'}}>2/5</span></div>
                  <div className="vm-li done"><div className="vm-qty">2x</div><div className="vm-nm">Leite integral</div><div className="vm-ck on"></div></div>
                  <div className="vm-li done"><div className="vm-qty">12un</div><div className="vm-nm">Ovos</div><div className="vm-ck on"></div></div>
                  <div className="vm-li"><div className="vm-qty">1x</div><div className="vm-nm">Azeite</div><div className="vm-ck"></div></div>
                  <div className="vm-li"><div className="vm-qty">1kg</div><div className="vm-nm">Peito de frango</div><div className="vm-ck"></div></div>
```
New:
```jsx
                  <div className="vm-hdr"><span>{t('features.lista.vmTitle')}</span><span style={{color:'var(--verde-musgo)'}}>2/5</span></div>
                  <div className="vm-li done"><div className="vm-qty">2x</div><div className="vm-nm">{t('features.lista.vmItem1')}</div><div className="vm-ck on"></div></div>
                  <div className="vm-li done"><div className="vm-qty">12un</div><div className="vm-nm">{t('features.lista.vmItem2')}</div><div className="vm-ck on"></div></div>
                  <div className="vm-li"><div className="vm-qty">1x</div><div className="vm-nm">{t('features.lista.vmItem3')}</div><div className="vm-ck"></div></div>
                  <div className="vm-li"><div className="vm-qty">1kg</div><div className="vm-nm">{t('features.lista.vmItem4')}</div><div className="vm-ck"></div></div>
```

Card DESPENSA — old:
```jsx
                  <div className="vm-hdr"><span>Minha despensa</span><span style={{color:'var(--carvao-3)'}}>7 itens</span></div>
                  <div className="vm-chips">
                    <span className="vm-chip">Alho</span>
                    <span className="vm-chip">Cebola</span>
                    <span className="vm-chip">Azeite</span>
                    <span className="vm-chip out">Sal</span>
                    <span className="vm-chip">Ovos</span>
                    <span className="vm-chip out">Farinha</span>
                    <span className="vm-chip">Tomate</span>
                    <span className="vm-chip add">+ Adicionar</span>
                  </div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="5" rx="1"/>
                    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
                    <line x1="10" y1="13" x2="14" y2="13"/>
                  </svg>
                  Despensa
                </div>
                <h3>Sempre tenha o que precisa pra cozinhar.</h3>
                <p>Monta sua despensa ideal uma vez. O que acabou fica marcado — quando for fazer a lista, você já sabe o que comprar.</p>
                <ul className="feat-bullets">
                  <li>Sugestões pra montar a despensa completa</li>
                  <li>Adiciona à lista num toque</li>
                  <li>Marca o que tá acabando, automaticamente</li>
                </ul>
```
New:
```jsx
                  <div className="vm-hdr"><span>{t('features.despensa.vmTitle')}</span><span style={{color:'var(--carvao-3)'}}>{t('features.despensa.vmCount')}</span></div>
                  <div className="vm-chips">
                    <span className="vm-chip">{t('features.despensa.chip1')}</span>
                    <span className="vm-chip">{t('features.despensa.chip2')}</span>
                    <span className="vm-chip">{t('features.despensa.chip3')}</span>
                    <span className="vm-chip out">{t('features.despensa.chip4')}</span>
                    <span className="vm-chip">{t('features.despensa.chip5')}</span>
                    <span className="vm-chip out">{t('features.despensa.chip6')}</span>
                    <span className="vm-chip">{t('features.despensa.chip7')}</span>
                    <span className="vm-chip add">{t('features.despensa.chipAdd')}</span>
                  </div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="5" rx="1"/>
                    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
                    <line x1="10" y1="13" x2="14" y2="13"/>
                  </svg>
                  {t('features.despensa.tag')}
                </div>
                <h3>{t('features.despensa.title')}</h3>
                <p>{t('features.despensa.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.despensa.b1')}</li>
                  <li>{t('features.despensa.b2')}</li>
                  <li>{t('features.despensa.b3')}</li>
                </ul>
```

Card RECEITAS — old:
```jsx
                  <div className="vm-hdr"><span>Minhas receitas</span><span style={{color:'var(--carvao-3)'}}>12 salvas</span></div>
                  <div className="vm-recipe"><span>Macarrão ao sugo</span><span className="vm-source">INSTAGRAM</span></div>
                  <div className="vm-recipe"><span>Frango grelhado com limão</span><span className="vm-source">YOUTUBE</span></div>
                  <div className="vm-recipe"><span>Bolo de cenoura da vovó</span><span className="vm-source">MANUAL</span></div>
                  <div className="vm-recipe"><span>Salada caesar</span><span className="vm-source">GOOGLE</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Receitas
                </div>
                <h3>O caderno de receitas que você nunca teve.</h3>
                <p>Salva de qualquer lugar — Instagram, YouTube, Google, ou na mão. Sem foto bonita pra atrapalhar. Só o que importa: nome e ingredientes.</p>
                <ul className="feat-bullets">
                  <li>Captura com um link de qualquer site</li>
                  <li>Ingredientes integrados com a lista</li>
                  <li>Visual limpo, sem distração</li>
                </ul>
```
New:
```jsx
                  <div className="vm-hdr"><span>{t('features.receitas.vmTitle')}</span><span style={{color:'var(--carvao-3)'}}>{t('features.receitas.vmCount')}</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe1')}</span><span className="vm-source">INSTAGRAM</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe2')}</span><span className="vm-source">YOUTUBE</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe3')}</span><span className="vm-source">MANUAL</span></div>
                  <div className="vm-recipe"><span>{t('features.receitas.recipe4')}</span><span className="vm-source">GOOGLE</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  {t('features.receitas.tag')}
                </div>
                <h3>{t('features.receitas.title')}</h3>
                <p>{t('features.receitas.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.receitas.b1')}</li>
                  <li>{t('features.receitas.b2')}</li>
                  <li>{t('features.receitas.b3')}</li>
                </ul>
```

Card PLANO — old:
```jsx
                  <div className="vm-hdr"><span>Plano da semana</span><span style={{color:'var(--verde-musgo)'}}>→ Gerar lista</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEG</span><span>Frango grelhado com limão</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">TER</span><span>Macarrão ao sugo</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUA</span><span className="vm-day-empty">Sem plano</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUI</span><span>Salada caesar</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEX</span><span>Omelete de legumes</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
                  </svg>
                  Plano da semana
                </div>
                <h3>Semana planejada, lista pronta.</h3>
                <p>Monte o cardápio da semana com suas receitas. Num toque, o que falta vai direto pra lista de compras.</p>
                <ul className="feat-bullets">
                  <li>Integrado com suas receitas</li>
                  <li>Gera a lista automaticamente</li>
                  <li>Evita o &ldquo;de novo macarrão hoje?&rdquo;</li>
                </ul>
```
New:
```jsx
                  <div className="vm-hdr"><span>{t('features.plano.vmTitle')}</span><span style={{color:'var(--verde-musgo)'}}>{t('features.plano.vmGenerate')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEG</span><span>{t('features.plano.day1')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">TER</span><span>{t('features.plano.day2')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUA</span><span className="vm-day-empty">{t('features.plano.day3Empty')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">QUI</span><span>{t('features.plano.day4')}</span></div>
                  <div className="vm-day"><span className="vm-day-lbl">SEX</span><span>{t('features.plano.day5')}</span></div>
                </div>
              </div>
              <div className="feat-body">
                <div className="feat-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
                  </svg>
                  {t('features.plano.tag')}
                </div>
                <h3>{t('features.plano.title')}</h3>
                <p>{t('features.plano.desc')}</p>
                <ul className="feat-bullets">
                  <li>{t('features.plano.b1')}</li>
                  <li>{t('features.plano.b2')}</li>
                  <li>{t.rich('features.plano.b3', { em: (chunks) => <>{chunks}</> })}</li>
                </ul>
```

Nota: `features.plano.b3` já contém as aspas curvas (“ ”) diretamente no dicionário (não usa `&ldquo;`/`&rdquo;` do HTML) — pode consumir com `t()` simples em vez de `t.rich()` já que não tem tag, ajuste o último `<li>` acima para `<li>{t('features.plano.b3')}</li>`.

- [ ] **Step 8: Commit intermediário**

```bash
git add "app/[locale]/page.js"
git commit -m "feat(i18n): traduz secao de features da home"
```

- [ ] **Step 9: Seção COMO FUNCIONA (how)**

Old:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Três passos. Sem onboarding chato.</h2>
            <p>Você não vai precisar de tutorial. Sério.</p>
            <p className="how-prose">
              O Mise conecta os quatro pilares da rotina de cozinha — despensa, receitas,
              cardápio semanal e lista de compras — num app só. Quando você marca um item como
              esgotado na despensa, ele aparece como sugestão na lista. Quando monta o cardápio
              com receitas salvas, os ingredientes que faltam entram direto na lista de compras.
              Uma ação no app resolve a próxima etapa automaticamente — sem abrir outro app,
              sem copiar e colar, sem esquecer.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-step reveal">
              <div className="num">1</div>
              <h3>Monta sua despensa</h3>
              <p>Em 2 minutos, você adiciona os básicos que sempre tem em casa. Pode usar as sugestões do app — não precisa começar do zero.</p>
            </div>
            <div className="how-step reveal">
              <div className="num">2</div>
              <h3>Cria a lista de mercado</h3>
              <p>Digita os itens, escolhe um corredor ou loja, e compartilha pelo zap. Quem for às compras vê tudo organizado.</p>
            </div>
            <div className="how-step reveal">
              <div className="num">3</div>
              <h3>Marca o que comprou</h3>
              <p>No corredor do mercado, vai marcando o que pegou. A despensa atualiza sozinha. Pronto, bora cozinhar.</p>
            </div>
          </div>
```

New:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
            <p>{t('how.sub')}</p>
            <p className="how-prose">{t('how.prose')}</p>
          </div>

          <div className="how-grid">
            <div className="how-step reveal">
              <div className="num">1</div>
              <h3>{t('how.step1Title')}</h3>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step reveal">
              <div className="num">2</div>
              <h3>{t('how.step2Title')}</h3>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step reveal">
              <div className="num">3</div>
              <h3>{t('how.step3Title')}</h3>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
```

- [ ] **Step 10: Seção FUNDADOR (founder)**

Old:
```jsx
          <div className="founder-block reveal">
            <div className="founder-avatar">G</div>
            <div>
              <div className="eyebrow"><span className="dot"></span> Por que o Mise existe</div>
              <p className="founder-quote">
                &ldquo;Eu sempre sofria com algo faltando em casa quando queria cozinhar. E os apps que existiam eram cheios de imagens, planejamento elaborado e função demais — só me faziam perder tempo.<br/><br/>
                <strong>Então fiz o Mise:</strong> um jeito fácil de organizar a despensa pra quem gosta de cozinhar.&rdquo;
              </p>
              <div className="founder-name">Gus <span>· Criador do Mise</span></div>
            </div>
          </div>
```

New:
```jsx
          <div className="founder-block reveal">
            <div className="founder-avatar">G</div>
            <div>
              <div className="eyebrow"><span className="dot"></span> {t('founder.eyebrow')}</div>
              <p className="founder-quote">
                {t.rich('founder.quote', {
                  br: () => <br />,
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <div className="founder-name">{t('founder.name')} <span>{t('founder.role')}</span></div>
            </div>
          </div>
```

- [ ] **Step 11: Seção PARA QUEM É (who)**

Old:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Para quem é</div>
            <h2>Para quem é o Mise</h2>
            <p className="how-prose">
              O Mise foi feito para quem cozinha em casa com alguma frequência e já cansou
              de improvisar. Não é para chef, não é para quem quer montar a cozinha perfeita —
              é para quem quer sair do mercado com o que precisa e entrar na cozinha sabendo
              o que vai fazer.
            </p>
            <p className="how-prose">
              Funciona bem para casais que dividem as compras, famílias que planejam a semana
              juntos, quem mora sozinho e tenta não desperdiçar, repúblicas que precisam de
              lista compartilhada. A lógica é a mesma: saber o que tem em casa, planejar o que
              vai cozinhar e comprar só o que falta — sem voltar ao mercado no meio da semana.
            </p>
            <p className="how-prose">
              Quem usa o Mise há mais de um mês normalmente reduz de três para uma a quantidade
              de viagens semanais ao supermercado. A lista gerada pelo cardápio elimina os itens
              por impulso. A despensa elimina a compra duplicada. O resultado aparece na conta
              do mercado — não num tutorial de organização que você nunca vai terminar.
            </p>
          </div>
```

New:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('who.eyebrow')}</div>
            <h2>{t('who.title')}</h2>
            <p className="how-prose">{t('who.p1')}</p>
            <p className="how-prose">{t('who.p2')}</p>
            <p className="how-prose">{t('who.p3')}</p>
          </div>
```

- [ ] **Step 12: Commit intermediário**

```bash
git add "app/[locale]/page.js"
git commit -m "feat(i18n): traduz como-funciona, fundador e para-quem-e da home"
```

- [ ] **Step 13: Seção BLOG preview, CTA final e footer**

Old:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h2>Dicas de quem faz lista de verdade</h2>
          </div>
          <div className="blog-grid reveal">
            <a href="/blog/lista-basica-de-compras" className="blog-card">
              <div className="blog-card-img">
                <img
                  src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                  alt="Carrinho de compras em supermercado"
                  width="600" height="360"
                  loading="lazy"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Lista de compras</span>
                <h3>Lista básica de compras: guia com 80+ itens pra copiar</h3>
                <p>Os 7 grupos essenciais, quanto custa por mês e dicas pra economizar no supermercado.</p>
                <span className="blog-card-link">Ler artigo →</span>
              </div>
            </a>
            <a href="/blog/lista-de-compras-para-casa-nova" className="blog-card">
              <div className="blog-card-img">
                <img
                  src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                  alt="Mulher entrando em apartamento novo"
                  width="600" height="360"
                  loading="lazy"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Casa nova</span>
                <h3>Lista de compras para casa nova: o que não pode faltar</h3>
                <p>60+ itens por cômodo, o que comprar primeiro e estimativa de custo por perfil.</p>
                <span className="blog-card-link">Ler artigo →</span>
              </div>
            </a>
          </div>
          <div className="blog-more reveal">
            <a href="/blog" className="btn btn-ghost">Ver todos os artigos →</a>
          </div>
```

**Importante:** os cards do blog preview apontam pra posts que só existem em `/pt/blog/...` (fase 1). Envolva os dois `<a>` de post (não o link "Ver todos os artigos", que aponta pro índice — esse índice existe nos 3 idiomas) numa condicional de locale, usando `getLocale()`:

No topo do arquivo, troque o import de `getTranslations` por:
```jsx
import { getTranslations, getLocale } from 'next-intl/server'
```
E no Step 1, adicione `const locale = await getLocale()` junto às outras consts.

New:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('blog.eyebrow')}</div>
            <h2>{t('blog.title')}</h2>
          </div>
          {locale === 'pt' && (
            <div className="blog-grid reveal">
              <a href="/blog/lista-basica-de-compras" className="blog-card">
                <div className="blog-card-img">
                  <img
                    src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                    alt="Carrinho de compras em supermercado"
                    width="600" height="360"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">{t('blog.post1Tag')}</span>
                  <h3>{t('blog.post1Title')}</h3>
                  <p>{t('blog.post1Desc')}</p>
                  <span className="blog-card-link">{tc('readArticle')}</span>
                </div>
              </a>
              <a href="/blog/lista-de-compras-para-casa-nova" className="blog-card">
                <div className="blog-card-img">
                  <img
                    src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=600&h=360&fit=crop"
                    alt="Mulher entrando em apartamento novo"
                    width="600" height="360"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">{t('blog.post2Tag')}</span>
                  <h3>{t('blog.post2Title')}</h3>
                  <p>{t('blog.post2Desc')}</p>
                  <span className="blog-card-link">{tc('readArticle')}</span>
                </div>
              </a>
            </div>
          )}
          <div className="blog-more reveal">
            <Link href="/blog" className="btn btn-ghost">{t('blog.seeAll')}</Link>
          </div>
```

Old (CTA final):
```jsx
            <div className="eyebrow eyebrow-centered eyebrow-broto">
              <span className="dot"></span> Comece hoje
            </div>
            <h2>Cozinha organizada, <em>do seu jeito.</em></h2>
            <p>Grátis. Sem cartão de crédito. Sem cadastro longo. Bora?</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                Comece grátis
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="footnote">CELULAR · TABLET · DESKTOP · OFFLINE</div>
```

New:
```jsx
            <div className="eyebrow eyebrow-centered eyebrow-broto">
              <span className="dot"></span> {t('cta.eyebrow')}
            </div>
            <h2>{t.rich('cta.title', { em: (chunks) => <em>{chunks}</em> })}</h2>
            <p>{t('cta.sub')}</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                {tc('ctaSmall')}
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="footnote">{tc('footnoteChannels')}</div>
```

Old (footer):
```jsx
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
```

New:
```jsx
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">{tc('footerCopy')}</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">{tc('openAppArrow')}</a>
        </div>
      </footer>
```

- [ ] **Step 14: Build e checagem manual**

Run: `npm run build` — deve passar limpo.

Run: `npm run dev`, abrir `/pt`, `/en`, `/es`:
- Cada idioma mostra o hero, dores, features, como-funciona, fundador, para-quem-é e CTA final no idioma certo.
- Em `/pt`, a seção de blog preview mostra os 2 cards; em `/en` e `/es`, a seção de blog preview não mostra cards (só o "Ver todos"/"See all"/"Ver todos" apontando pro índice do blog) — comportamento esperado até os posts serem traduzidos.
- Scroll na página inteira em cada idioma — nenhuma seção quebrada, nenhuma chave crua tipo `home.hero.title` aparecendo.

- [ ] **Step 15: Commit final do Task 5**

```bash
git add "app/[locale]/page.js"
git commit -m "feat(i18n): traduz blog preview, cta final e footer da home"
```

---

### Task 6: Traduzir `funcionalidades` (hub/índice)

**Files:**
- Modify: `app/[locale]/funcionalidades/page.js`

**Interfaces:**
- Consumes: namespace `funcionalidadesHub` (Task 2).

- [ ] **Step 1: Imports, `generateMetadata` e array `features`**

Old (topo do arquivo até o fim do array `features`):
```jsx
import RevealObserver from '../../components/RevealObserver'
import { BrandIcon, BrandTrioIcon } from '../../components/Icon'
import SiteNav from '../../components/SiteNav'

export const metadata = {
  title: 'Funcionalidades — Mise',
  description: 'Lista de compras gratuita e compartilhada, cardápio semanal com lista automática e receitas com o que tem em casa. Tudo conectado no mesmo app.',
  openGraph: {
    title: 'Funcionalidades — Mise',
    description: 'Lista de compras, cardápio semanal e receitas. Três coisas que funcionam juntas. Grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br/funcionalidades',
  },
}

const features = [
  {
    href: '/funcionalidades/lista-de-compras',
    eyebrow: 'Lista de compras',
    title: 'Organizada por corredor. Compartilhada. Grátis.',
    desc: 'Cria a lista em casa, compartilha pelo WhatsApp e vai ao mercado na ordem dos corredores. Funciona offline.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    tags: ['100% grátis', 'Compartilhada', 'Offline'],
  },
  {
    href: '/funcionalidades/despensa',
    eyebrow: 'Despensa',
    title: 'Sempre tenha o que precisa pra cozinhar.',
    desc: 'Monta sua despensa ideal uma vez. O que acabou fica marcado — quando for fazer a lista, você já sabe o que comprar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="4" width="20" height="5" rx="1"/>
        <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
        <line x1="10" y1="13" x2="14" y2="13"/>
      </svg>
    ),
    tags: ['Sugestões automáticas', 'Adiciona à lista', 'Cruza com receitas'],
  },
  {
    href: '/funcionalidades/cardapio-semanal',
    eyebrow: 'Plano da semana',
    title: 'Cardápio semanal que gera lista de compras automática.',
    desc: 'Monta o cardápio de segunda a domingo. O app cruza com a despensa e joga os ingredientes que faltam direto na lista.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
      </svg>
    ),
    tags: ['7 dias', 'Lista automática', 'Menos desperdício'],
  },
  {
    href: '/funcionalidades/receitas',
    eyebrow: 'Receitas',
    title: 'Suas receitas. Filtradas pelo que você tem em casa.',
    desc: 'Salva as receitas que já faz. O app mostra o que dá pra cozinhar hoje — sem passar no mercado antes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    tags: ['Anotar receitas', 'Filtro por ingredientes', 'Lista da receita'],
  },
]

export default function FuncionalidadesPage() {
  return (
    <>
      <RevealObserver />

      <SiteNav />
```

New:
```jsx
import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon, BrandTrioIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'
import { Link } from '../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'funcionalidadesHub.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades`,
    },
  }
}

const ICONS = {
  lista: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
    </svg>
  ),
  despensa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="4" width="20" height="5" rx="1"/>
      <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
      <line x1="10" y1="13" x2="14" y2="13"/>
    </svg>
  ),
  cardapio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
    </svg>
  ),
  receitas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
    </svg>
  ),
}

const FEATURE_DEFS = [
  { href: '/funcionalidades/lista-de-compras', key: 'lista' },
  { href: '/funcionalidades/despensa', key: 'despensa' },
  { href: '/funcionalidades/cardapio-semanal', key: 'cardapio' },
  { href: '/funcionalidades/receitas', key: 'receitas' },
]

export default async function FuncionalidadesPage() {
  const t = await getTranslations('funcionalidadesHub')

  const features = FEATURE_DEFS.map((d) => ({
    href: d.href,
    icon: ICONS[d.key],
    eyebrow: t(`cards.${d.key}.eyebrow`),
    title: t(`cards.${d.key}.title`),
    desc: t(`cards.${d.key}.desc`),
    tags: [t(`cards.${d.key}.tag1`), t(`cards.${d.key}.tag2`), t(`cards.${d.key}.tag3`)],
  }))

  return (
    <>
      <RevealObserver />

      <SiteNav />
```

- [ ] **Step 2: Hero**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Funcionalidades</div>
            <h1 className="svc-hero-h1">
              A despensa lembra. O plano se monta.<br />
              <span className="svc-hero-accent">A lista aparece.</span>
            </h1>
            <p className="svc-hero-sub">
              Lista de compras, despensa, receitas e cardápio semanal — conectados no mesmo app.
              Cada um resolve um pedaço do problema. Juntos, resolvem a semana.
            </p>
```

New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
```

- [ ] **Step 3: Grid de cards, link "Ver funcionalidade", e trocar `<a>` por `<Link>`**

Old:
```jsx
            {features.map((f) => (
              <a key={f.href} href={f.href} className="svc-hub-card">
                <div className="svc-hub-icon">{f.icon}</div>
                <div className="svc-hub-eyebrow">{f.eyebrow}</div>
                <h2 className="svc-hub-title">{f.title}</h2>
                <p className="svc-hub-desc">{f.desc}</p>
                <div className="svc-hub-tags">
                  {f.tags.map((t) => (
                    <span key={t} className="svc-hub-tag">{t}</span>
                  ))}
                </div>
                <div className="svc-hub-link">
                  Ver funcionalidade
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
```

New (renomeie a variável de map de `t` pra `tag` — já existe `t` como nome do tradutor no escopo):
```jsx
            {features.map((f) => (
              <Link key={f.href} href={f.href} className="svc-hub-card">
                <div className="svc-hub-icon">{f.icon}</div>
                <div className="svc-hub-eyebrow">{f.eyebrow}</div>
                <h2 className="svc-hub-title">{f.title}</h2>
                <p className="svc-hub-desc">{f.desc}</p>
                <div className="svc-hub-tags">
                  {f.tags.map((tag) => (
                    <span key={tag} className="svc-hub-tag">{tag}</span>
                  ))}
                </div>
                <div className="svc-hub-link">
                  {t('cards.cardLink')}
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
```

- [ ] **Step 4: Seção "Como tudo se conecta"**

Old:
```jsx
          <div className="text-col svc-feature-text reveal">
            <h2>Como as quatro ferramentas funcionam juntas</h2>
            <p>
              O Mise não é um app com quatro funções separadas — é um ciclo. Começa pela
              despensa: você monta o estoque ideal da sua casa uma vez. Quando algo acaba, marca
              no app. Na hora de planejar a semana, você escolhe as receitas e o Mise cruza
              com a despensa — os ingredientes que faltam entram automaticamente na lista de
              compras.
            </p>
            <p>
              Você vai ao mercado, compra exatamente o que precisa e marca na lista conforme
              coloca no carrinho. Na volta, a despensa já está atualizada. Essa conexão resolve
              um problema que apps isolados não resolvem: a lacuna entre saber o que tem em casa,
              planejar o que vai cozinhar e saber o que falta comprar.
            </p>
            <p>
              Tudo isso sem cadastro obrigatório na largada, sem assinatura, funcionando offline
              dentro do mercado. Você começa a usar antes de criar conta — e as funcionalidades
              essenciais nunca ficam bloqueadas.
            </p>
            <p>
              O resultado prático: uma família que antes fazia três viagens ao mercado por semana
              pode reduzir para uma, com uma lista completa gerada pelo próprio app. Quem mora
              sozinho para de comprar por impulso porque sabe exatamente o que falta. Estimativas
              de comportamento de consumo mostram que compras sem planejamento custam entre 20%
              e 30% a mais — entre itens duplicados, produtos que vencem antes de usar e
              ingredientes esquecidos que faziam parte de um plano que não existia. O Mise
              corta esse desperdício direto na origem, conectando o que você tem com o que vai
              cozinhar e o que precisa comprar.
            </p>
          </div>
```

New:
```jsx
          <div className="text-col svc-feature-text reveal">
            <h2>{t('connect.title')}</h2>
            <p>{t('connect.p1')}</p>
            <p>{t('connect.p2')}</p>
            <p>{t('connect.p3')}</p>
            <p>{t('connect.p4')}</p>
          </div>
```

- [ ] **Step 5: CTA e footer**

Old:
```jsx
            <h2>Começa pela lista.<br /><em>O resto cai no lugar.</em></h2>
            <p>Grátis, sem cadastro na largada, funciona offline.</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                Abrir o Mise grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <p className="footnote">sem cadastro · sem cartão · funciona offline</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2024 Mise</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app</a>
        </div>
      </footer>
```

New (o footer é idêntico em todos os 5 arquivos de `/funcionalidades/*` — mesma troca vale nas Tasks 7-10, sem repetir o snippet inteiro lá):
```jsx
            <h2>{t.rich('cta.title', { br: () => <br />, em: (chunks) => <em>{chunks}</em> })}</h2>
            <p>{t('cta.sub')}</p>
            <div className="actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-on-dark btn-lg" target="_blank" rel="noopener">
                {tc('ctaOpenMiseFree')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <p className="footnote">{tc('footnoteNoSignup')}</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </Link>
          <span className="footer-copy">{tc('footerCopyright')}</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">{tc('openApp')}</a>
        </div>
      </footer>
```

Isso usa `tc` (tradutor do namespace `common`) — adicione no Step 1, junto de `const t = await getTranslations('funcionalidadesHub')`:
```jsx
  const tc = await getTranslations('common')
```

- [ ] **Step 6: Build, checagem manual e commit**

Run: `npm run build` — limpo. Run: `npm run dev`, abrir `/pt/funcionalidades`, `/en/funcionalidades`, `/es/funcionalidades` — 4 cards, seção de conexão e CTA traduzidos; clicar num card navega pra `/<locale>/funcionalidades/<slug>` mantendo o idioma.

```bash
git add "app/[locale]/funcionalidades/page.js"
git commit -m "feat(i18n): traduz funcionalidades (hub/indice)"
```

---

### Task 7: Traduzir `funcionalidades/lista-de-compras` (padrão canônico de página com FAQ)

**Files:**
- Modify: `app/[locale]/funcionalidades/lista-de-compras/page.js`

**Interfaces:**
- Consumes: namespace `svcListaDeCompras` (Task 2).
- Produces: o padrão de wiring que as Tasks 8-10 replicam nas outras 3 páginas de `/funcionalidades/*` — mesma forma (hero com `br`+`accent`, 3 passos, 4 pontos de feature com mockup visual, 4 parágrafos "por quê", FAQ com 4 perguntas consumida tanto no `<dl>` visível quanto no JSON-LD, CTA com `br`+`em`, footer igual ao Task 6).

- [ ] **Step 1: Imports, `generateMetadata` e `faqSchema` dinâmico**

Old (topo do arquivo até o fim de `faqSchema`):
```jsx
import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'App de Lista de Compras Gratuito e Compartilhada — Mise',
  description: 'Mise é o app gratuito de lista de compras organizada por corredor e compartilhada em tempo real. Funciona offline, sem cadastro obrigatório.',
  openGraph: {
    title: 'App de Lista de Compras Gratuito e Compartilhada — Mise',
    description: 'Lista de compras organizada por corredor, compartilhada pelo WhatsApp, funciona offline. 100% grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br/funcionalidades/lista-de-compras',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O app de lista de compras Mise é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, 100% gratuito. Lista de compras, compartilhamento e organização por corredor funcionam sem pagar nada e sem cadastro obrigatório.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como compartilhar lista de compras pelo app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Mise você compartilha a lista pelo WhatsApp com um link. Quem receber vê e edita a mesma lista em tempo real — sem instalar nada.',
      },
    },
    {
      '@type': 'Question',
      name: 'A lista de compras funciona sem internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O Mise é um PWA que funciona offline. A lista fica disponível mesmo dentro do mercado com sinal ruim ou sem conexão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar a lista de compras por corredor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Mise organiza os itens automaticamente por corredor — hortifruti, carnes, mercearia, limpeza, higiene — na ordem que você encontra no supermercado. Sem precisar voltar atrás.',
      },
    },
  ],
}

export default function ListaDeComprasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RevealObserver />

      <SiteNav />
```

New — nota importante: o texto das perguntas/respostas do JSON-LD no PT original é ligeiramente diferente do texto do `<dl>` visível mais abaixo na mesma página (dois textos quase-duplicados pra mesma pergunta). Este task **unifica os dois** numa única fonte (`faq.q1`-`q4`/`a1`-`a4` do dicionário, já escritos usando o texto do `<dl>` visível — mais específico e melhor pra UX) tanto no schema quanto no HTML visível, eliminando a inconsistência original:

```jsx
import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import { Link } from '../../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'svcListaDeCompras.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades/lista-de-compras`,
    },
  }
}

export default async function ListaDeComprasPage() {
  const t = await getTranslations('svcListaDeCompras')
  const tc = await getTranslations('common')

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4].map((n) => ({
      '@type': 'Question',
      name: t(`faq.q${n}`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${n}`) },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RevealObserver />

      <SiteNav />
```

**Nota sobre o caminho de import:** confirme a profundidade real do arquivo (`app/[locale]/funcionalidades/lista-de-compras/page.js` está 4 níveis abaixo de `app/`) e ajuste `../../../../` de acordo antes de aplicar — o exemplo acima já reflete essa profundidade.

- [ ] **Step 2: Hero**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Lista de compras</div>
            <h1 className="svc-hero-h1">
              App de lista de compras<br />
              gratuito e <span className="svc-hero-accent">compartilhada.</span>
            </h1>
            <p className="svc-hero-sub">
              Você cria a lista em casa, compartilha pelo zap e vai ao mercado seguindo a ordem dos corredores.
              Sem voltar pro início porque lembrou do papel higiênico na última gôndola.
            </p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Abrir o app grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/funcionalidades" className="btn btn-quiet">← Todas as funcionalidades</a>
            </div>
```

New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                {tc('ctaOpenAppFree')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <Link href="/funcionalidades" className="btn btn-quiet">{tc('allFeatures')}</Link>
            </div>
```

- [ ] **Step 3: Como funciona (3 passos)**

Old:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Três passos. Nada mais.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h3>Monta a lista em casa</h3>
              <p>Adiciona os itens, o app organiza por corredor automaticamente. Hortifruti, carnes, mercearia — tudo na ordem certa do supermercado.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h3>Compartilha pelo WhatsApp</h3>
              <p>Manda o link pra quem vai ao mercado junto. Os dois veem a mesma lista em tempo real — ninguém compra o que o outro já colocou no carrinho.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h3>Vai ao mercado e marca</h3>
              <p>Funciona offline, com sinal ruim ou sem. Marca cada item conforme coloca no carrinho. Lista zerada na saída do caixa.</p>
            </div>
          </div>
```

New:
```jsx
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h3>{t('how.step1Title')}</h3>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h3>{t('how.step2Title')}</h3>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h3>{t('how.step3Title')}</h3>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
```

- [ ] **Step 4: Funcionalidades (4 pontos) + mockup visual**

Old:
```jsx
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Tudo que uma lista de compras precisa ter.</h2>
              <p>
                Sem funcionalidade desnecessária. Sem cadastro obrigatório antes de poder usar.
                Só o que resolve o problema de sair de casa sem esquecer nada.
              </p>
```

New:
```jsx
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
```

Os 4 blocos `.svc-point` seguem todos o mesmo padrão — old de cada um (título + desc dentro de `.svc-point-body`):
```jsx
                    <div className="svc-point-title">Organizada por corredor</div>
                    <div className="svc-point-desc">Hortifruti, carnes, mercearia, limpeza e higiene — agrupados na ordem do supermercado.</div>
```
```jsx
                    <div className="svc-point-title">Lista compartilhada em tempo real</div>
                    <div className="svc-point-desc">Link pelo WhatsApp. Dois celulares, uma lista. O que um adiciona aparece pro outro na hora.</div>
```
```jsx
                    <div className="svc-point-title">Funciona offline</div>
                    <div className="svc-point-desc">Dentro do mercado, no subsolo, sem sinal. A lista não some.</div>
```
```jsx
                    <div className="svc-point-title">100% gratuito, sem cadastro na largada</div>
                    <div className="svc-point-desc">Começa a usar antes de criar conta. Nenhuma função essencial bloqueada.</div>
```
New (mesma ordem):
```jsx
                    <div className="svc-point-title">{t('feature.point1Title')}</div>
                    <div className="svc-point-desc">{t('feature.point1Desc')}</div>
```
```jsx
                    <div className="svc-point-title">{t('feature.point2Title')}</div>
                    <div className="svc-point-desc">{t('feature.point2Desc')}</div>
```
```jsx
                    <div className="svc-point-title">{t('feature.point3Title')}</div>
                    <div className="svc-point-desc">{t('feature.point3Desc')}</div>
```
```jsx
                    <div className="svc-point-title">{t('feature.point4Title')}</div>
                    <div className="svc-point-desc">{t('feature.point4Desc')}</div>
```

Mockup visual — old:
```jsx
                <div className="vm-hdr">
                  <span>Lista do mercado</span>
                  <span className="ph-badge">7 itens</span>
                </div>
                <div className="vm-section-lbl">Hortifruti</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Tomate</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Alho</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Cebola</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">Mercearia</div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">Arroz 5 kg</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Feijão carioca</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">Macarrão</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">Limpeza</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">Detergente</span><div className="vm-ck"></div></div>
```
New:
```jsx
                <div className="vm-hdr">
                  <span>{t('feature.vmTitle')}</span>
                  <span className="ph-badge">{t('feature.vmCount')}</span>
                </div>
                <div className="vm-section-lbl">{t('feature.vmSec1')}</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem1')}</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem2')}</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem3')}</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">{t('feature.vmSec2')}</div>
                <div className="vm-li"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem4')}</span><div className="vm-ck"></div></div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem5')}</span><div className="vm-ck"></div></div>
                <div className="vm-li done"><div className="vm-qty">1×</div><span className="vm-nm">{t('feature.vmItem6')}</span><div className="vm-ck on"></div></div>
                <div className="vm-section-lbl">{t('feature.vmSec3')}</div>
                <div className="vm-li"><div className="vm-qty">2×</div><span className="vm-nm">{t('feature.vmItem7')}</span><div className="vm-ck"></div></div>
```

- [ ] **Step 5: "Por que funciona" (4 parágrafos)**

Old:
```jsx
            <h2>Por que a organização por corredor faz diferença</h2>
            <p>
              Ir ao mercado sem lista é improviso com custo. Pesquisas de comportamento de consumo
              mostram que compras sem planejamento tendem a gastar entre 20% e 30% a mais — entre
              itens por impulso e repetições daquilo que você já tinha em casa mas não lembrou.
            </p>
            <p>
              Mas uma lista qualquer resolve só metade do problema. Sem organização por corredor,
              você percorre o supermercado de forma aleatória: vai à seção de limpeza, lembra do
              feijão, volta pra mercearia, passa pelo hortifruti de novo. Além de cansativo,
              aumenta a chance de pegar coisa que não estava na lista.
            </p>
            <p>
              O Mise agrupa os itens na ordem que você encontra no mercado: hortifruti na
              entrada, carnes e proteínas a seguir, mercearia, limpeza e higiene no fundo. Você
              entra, percorre uma vez, marca tudo e sai com o carrinho certo — sem voltar ao
              mesmo corredor duas vezes.
            </p>
            <p>
              A organização por corredor do Mise segue o fluxo real de um supermercado:
              hortifruti na entrada, carnes e laticínios a seguir, mercearia no meio, limpeza
              e higiene no fundo. Você entra, percorre uma vez, marca tudo sem voltar ao mesmo
              corredor duas vezes — e sai em menos tempo do que levaria sem lista. Compartilhar
              pelo WhatsApp antes de sair de casa garante que quem for junto compre exatamente
              o que a lista diz, sem ligações no meio do corredor.
            </p>
```

New:
```jsx
            <h2>{t('why.title')}</h2>
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p>{t('why.p3')}</p>
            <p>{t('why.p4')}</p>
```

- [ ] **Step 6: FAQ (visível) e CTA**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Perguntas diretas</div>
            <h2>O que as pessoas perguntam</h2>
          </div>
          <dl className="svc-faq-list reveal">
            <div className="svc-faq-item">
              <dt className="svc-faq-q">O app de lista de compras é gratuito?</dt>
              <dd className="svc-faq-a">Sim, 100% gratuito. Lista de compras, compartilhamento e organização por corredor funcionam sem pagar nada. Nenhuma funcionalidade essencial está bloqueada atrás de assinatura.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">Como compartilhar a lista de compras?</dt>
              <dd className="svc-faq-a">Você compartilha pelo WhatsApp com um link. Quem receber edita a mesma lista em tempo real — sem precisar instalar nada. Funciona pra casal, família ou qualquer pessoa que divide as compras.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">A lista funciona sem internet dentro do mercado?</dt>
              <dd className="svc-faq-a">Sim. O Mise é um PWA que carrega offline. A lista fica disponível mesmo com sinal ruim ou sem conexão — comum em mercado grande com subsolo.</dd>
            </div>
            <div className="svc-faq-item">
              <dt className="svc-faq-q">Como a lista de compras é organizada por corredor?</dt>
              <dd className="svc-faq-a">O app agrupa os itens automaticamente — hortifruti, carnes, mercearia, limpeza, higiene — na ordem que você encontra no supermercado. Você percorre os corredores uma vez e marca tudo sem precisar voltar.</dd>
            </div>
          </dl>
```

New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('faq.eyebrow')}</div>
            <h2>{t('faq.title')}</h2>
          </div>
          <dl className="svc-faq-list reveal">
            {[1, 2, 3, 4].map((n) => (
              <div className="svc-faq-item" key={n}>
                <dt className="svc-faq-q">{t(`faq.q${n}`)}</dt>
                <dd className="svc-faq-a">{t(`faq.a${n}`)}</dd>
              </div>
            ))}
          </dl>
```

CTA — old:
```jsx
            <h2>Pare de decidir o que comprar.<br /><em>Comece a cozinhar.</em></h2>
            <p>Sem cadastro na largada. Começa a usar agora.</p>
```
New:
```jsx
            <h2>{t.rich('cta.title', { br: () => <br />, em: (chunks) => <em>{chunks}</em> })}</h2>
            <p>{t('cta.sub')}</p>
```

O restante do bloco de CTA e o `<footer>` seguem exatamente o mesmo padrão já escrito no Task 6, Step 5 (`tc('ctaOpenMiseFree')`, `tc('footnoteNoSignup')`, `Link` na marca do footer, `tc('footerCopyright')`, `tc('openApp')`) — aplique a mesma substituição aqui.

- [ ] **Step 7: Build, checagem manual e commit**

Run: `npm run build` — limpo. Run: `npm run dev`, abrir `/pt/funcionalidades/lista-de-compras`, `/en/...`, `/es/...` — hero, 3 passos, 4 pontos + mockup, 4 parágrafos, FAQ (visível E ver o `<script type="application/ld+json">` no DevTools pra confirmar que o schema também traduziu), CTA. Testar o botão "← Todas as funcionalidades" mantém o locale.

```bash
git add "app/[locale]/funcionalidades/lista-de-compras/page.js"
git commit -m "feat(i18n): traduz funcionalidades/lista-de-compras"
```

---

### Task 8: Traduzir `funcionalidades/despensa`

**Files:**
- Modify: `app/[locale]/funcionalidades/despensa/page.js`

**Interfaces:**
- Consumes: namespace `svcDespensa` (Task 2).

Aplique exatamente o padrão do Task 7 (Steps 1, 3, 6 e o parágrafo final do Step 7) trocando `svcListaDeCompras` por `svcDespensa`, `ListaDeComprasPage` por `DespensaPage`, e a URL do `generateMetadata` por `.../funcionalidades/despensa`. Os pontos abaixo são as partes com conteúdo específico desta página.

- [ ] **Step 1: Imports + `generateMetadata` + `faqSchema` dinâmico**

Mesma estrutura do Task 7 Step 1 — troque:
```jsx
import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'
```
por (import relativo com a profundidade real de `app/[locale]/funcionalidades/despensa/page.js`):
```jsx
import { getTranslations } from 'next-intl/server'
import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import { Link } from '../../../../i18n/navigation'
```
E monte `generateMetadata`/`faqSchema`/assinatura async exatamente como no Task 7 Step 1, usando `svcDespensa.meta` e `svcDespensa` como namespaces.

- [ ] **Step 2: Hero**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Despensa</div>
            <h1 className="svc-hero-h1">
              Sempre tenha o que<br />
              precisa pra <span className="svc-hero-accent">cozinhar.</span>
            </h1>
            <p className="svc-hero-sub">
              Monta sua despensa ideal uma vez. O que acabou fica marcado —
              quando for fazer a lista, você já sabe o que comprar sem precisar abrir a geladeira.
            </p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Abrir o app grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/funcionalidades" className="btn btn-quiet">← Todas as funcionalidades</a>
            </div>
```

New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
            <div className="svc-hero-actions">
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                {tc('ctaOpenAppFree')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <Link href="/funcionalidades" className="btn btn-quiet">{tc('allFeatures')}</Link>
            </div>
```

- [ ] **Step 3: Como funciona (3 passos, tags `h4` nesta página — confira antes de editar, diferente de `h3` na lista-de-compras)**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Monta uma vez. Usa pra sempre.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Monta a despensa ideal</h4>
              <p>Adiciona os itens que sempre tem em casa — o app sugere os básicos. Arroz, feijão, azeite, alho, cebola. Em dois minutos, sua despensa está pronta.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>Marca o que acabou</h4>
              <p>Usou o último azeite? Um toque e tá marcado como esgotado. Tá quase acabando? Marca como "acabando". O app lembra por você.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Gera a lista automaticamente</h4>
              <p>Na hora de ir ao mercado, o que está esgotado ou acabando vira sugestão de lista com um toque. Sem abrir a geladeira, sem esquecer nada.</p>
            </div>
          </div>
```

New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>{t('how.step1Title')}</h4>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>{t('how.step2Title')}</h4>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>{t('how.step3Title')}</h4>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
```

- [ ] **Step 4: Funcionalidades (4 pontos) + mockup visual com box "Acabou"**

Cabeçalho — old:
```jsx
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Despensa conectada com lista e receitas.</h2>
              <p>
                Não é só um inventário. A despensa do Mise fala com a lista de compras e com as receitas —
                pra você saber o que falta comprar e o que já dá pra cozinhar hoje.
              </p>
```
New:
```jsx
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
```

Os 4 `.svc-point-title`/`.svc-point-desc` seguem o padrão do Task 7 Step 4, usando `feature.point1Title`..`feature.point4Desc`.

Mockup visual — old:
```jsx
                <div className="vm-hdr">
                  <span>Minha despensa</span>
                  <span className="ph-badge">8 itens</span>
                </div>
                <div className="vm-chips">
                  <span className="vm-chip">Alho</span>
                  <span className="vm-chip">Cebola</span>
                  <span className="vm-chip">Azeite</span>
                  <span className="vm-chip">Arroz</span>
                  <span className="vm-chip">Feijão</span>
                  <span className="vm-chip out">Sal</span>
                  <span className="vm-chip out">Leite</span>
                  <span className="vm-chip">Ovos</span>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'var(--tomate-claro)', borderRadius: '10px', border: '1px solid #F4CFC1' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--tomate)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Acabou</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>Sal</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>+ lista</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>Leite</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>+ lista</span>
                    </div>
                  </div>
                </div>
```
New:
```jsx
                <div className="vm-hdr">
                  <span>{t('feature.vmTitle')}</span>
                  <span className="ph-badge">{t('feature.vmCount')}</span>
                </div>
                <div className="vm-chips">
                  <span className="vm-chip">{t('feature.chip1')}</span>
                  <span className="vm-chip">{t('feature.chip2')}</span>
                  <span className="vm-chip">{t('feature.chip3')}</span>
                  <span className="vm-chip">{t('feature.chip4')}</span>
                  <span className="vm-chip">{t('feature.chip5')}</span>
                  <span className="vm-chip out">{t('feature.chip6')}</span>
                  <span className="vm-chip out">{t('feature.chip7')}</span>
                  <span className="vm-chip">{t('feature.chip8')}</span>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'var(--tomate-claro)', borderRadius: '10px', border: '1px solid #F4CFC1' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--tomate)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{t('feature.outLabel')}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>{t('feature.outItem1')}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>{t('feature.addToList')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--carvao)' }}>
                      <span>{t('feature.outItem2')}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--verde-folha)', cursor: 'pointer' }}>{t('feature.addToList')}</span>
                    </div>
                  </div>
                </div>
```

- [ ] **Step 5: "Por que funciona" — com link cruzado PT-only pro blog**

O parágrafo 3 do PT original tem um link embutido pro post `/blog/como-organizar-a-despensa`, que só existe em português (fase 1). Esse link só pode aparecer quando `locale === 'pt'` — adicione `const locale = await getTranslations` não serve pra pegar o locale; use `getLocale` como no Task 5 Step 13.

No Step 1 deste task, troque o import por:
```jsx
import { getTranslations, getLocale } from 'next-intl/server'
```
E dentro do componente, adicione `const locale = await getLocale()` junto de `t`/`tc`.

Old:
```jsx
            <h2>O custo de não saber o que tem em casa</h2>
            <p>
              A despensa desorganizada não é só questão estética — é financeira. Quando você não
              sabe o que tem em casa, compra duas vezes o mesmo produto, deixa itens vencerem
              no fundo da prateleira e ainda chega ao mercado sem saber o que realmente falta.
            </p>
            <p>
              Levantamentos sobre desperdício alimentar mostram que o Brasil descarta cerca de 41 kg
              de alimento por pessoa por ano — e boa parte desse desperdício começa na compra
              errada: você compra o que não precisa porque não sabia que ainda tinha.
            </p>
            <p>
              Com a despensa do Mise você monta sua lista ideal de estoque uma vez. Depois,
              basta marcar o que acabou no momento em que você percebe — não no dia do mercado,
              quando a memória já falhou. Na hora de ir às compras, a lista já está pré-preenchida
              com o que falta, sem precisar abrir cada armário pra conferir. Veja também como{' '}
              <a href="/blog/como-organizar-a-despensa">organizar a despensa do zero em 7 passos</a>.
            </p>
            <p>
              A diferença entre uma despensa organizada e uma despensa viva está no hábito de
              marcar o que acaba no momento em que você percebe — não na semana do mercado,
              quando você já esqueceu. O Mise torna esse hábito mínimo: um toque quando abre
              o armário e vê que o sal acabou. Na hora de ir ao mercado, a lista já está
              pré-preenchida com o que falta. Sem abrir cada armário, sem tentar lembrar o que
              tinha na última prateleira.
            </p>
```

New (o link só renderiza em `pt`; nos outros idiomas o parágrafo 3 termina sem ele):
```jsx
            <h2>{t('why.title')}</h2>
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p>
              {t('why.p3')}
              {locale === 'pt' && (
                <>
                  {' '}Veja também como{' '}
                  <a href="/pt/blog/como-organizar-a-despensa">organizar a despensa do zero em 7 passos</a>.
                </>
              )}
            </p>
            <p>{t('why.p4')}</p>
```

- [ ] **Step 6: FAQ (visível + schema) e CTA**

Mesmo padrão do Task 7 Step 6, usando as 4 chaves `faq.q1`-`q4`/`faq.a1`-`a4` de `svcDespensa` (nota: nesta página o HTML original usa `<div className="svc-faq-q">`/`<div className="svc-faq-a">`, não `<dt>`/`<dd>` — mantenha as tags `div` como estão, só troque o texto por `t(...)`). CTA usa `t.rich('cta.title', { br, em })` e `t('cta.sub')` exatamente como no Task 7.

- [ ] **Step 7: Build, checagem manual e commit**

Run: `npm run build` — limpo. Run: `npm run dev`, conferir `/pt/funcionalidades/despensa` (link pro post de organização de despensa aparece), `/en/...` e `/es/...` (sem o link, parágrafo termina limpo).

```bash
git add "app/[locale]/funcionalidades/despensa/page.js"
git commit -m "feat(i18n): traduz funcionalidades/despensa"
```

---

### Task 9: Traduzir `funcionalidades/cardapio-semanal`

**Files:**
- Modify: `app/[locale]/funcionalidades/cardapio-semanal/page.js`

**Interfaces:**
- Consumes: namespace `svcCardapioSemanal` (Task 2).

Aplique o padrão do Task 7 (Steps 1, 3, 6, footer) trocando `svcListaDeCompras` → `svcCardapioSemanal`, `ListaDeComprasPage` → `CardapioSemanalPage`, URL `.../funcionalidades/cardapio-semanal`. Import relativo com a profundidade de `app/[locale]/funcionalidades/cardapio-semanal/page.js` (mesma de despensa: `../../../../`).

- [ ] **Step 1: Hero**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Plano da semana</div>
            <h1 className="svc-hero-h1">
              App de cardápio semanal que gera<br />
              <span className="svc-hero-accent">lista de compras automática.</span>
            </h1>
            <p className="svc-hero-sub">
              Você monta o cardápio de segunda a domingo. O app cruza com o que tem na despensa
              e adiciona os ingredientes que faltam direto na lista. Acabou a surpresa de sexta-feira.
            </p>
```
New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
```
(botões da hero-actions seguem o mesmo padrão `tc('ctaOpenAppFree')` / `Link` + `tc('allFeatures')` do Task 8 Step 2.)

- [ ] **Step 2: Como funciona (3 passos, `h4`)**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Do cardápio à lista em três passos.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Escolhe as receitas da semana</h4>
              <p>Seleciona o que vai cozinhar de segunda a domingo usando as receitas salvas no app. Pode deixar dias livres sem problema.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>App cruza com a despensa</h4>
              <p>O Mise verifica o que você já tem em casa e separa só os ingredientes que faltam. Você não compra o que não precisa.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Lista gerada, mercado resolvido</h4>
              <p>Uma ida ao mercado cobre a semana inteira. Sem improvisar na quinta porque faltou um ingrediente da receita de sexta.</p>
            </div>
          </div>
```
New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>{t('how.step1Title')}</h4>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>{t('how.step2Title')}</h4>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>{t('how.step3Title')}</h4>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
```

- [ ] **Step 3: Funcionalidades (4 pontos) + mockup de 7 dias**

Cabeçalho — old:
```jsx
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Planejamento que conecta cardápio, despensa e lista.</h2>
              <p>
                Não é só um calendário de refeições. É um sistema que elimina o espaço entre
                "o que vou cozinhar" e "o que preciso comprar".
              </p>
```
New:
```jsx
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
```

Os 4 `.svc-point-title`/`.svc-point-desc` seguem `feature.point1Title`..`feature.point4Desc` como nos tasks anteriores.

Mockup — old:
```jsx
                <div className="vm-hdr">
                  <span>Plano da semana</span>
                  <span className="ph-badge">5 refeições</span>
                </div>
                <div className="vm-day"><span className="vm-day-lbl">SEG</span><span>Frango grelhado com arroz</span></div>
                <div className="vm-day"><span className="vm-day-lbl">TER</span><span>Macarrão ao sugo</span></div>
                <div className="vm-day"><span className="vm-day-lbl">QUA</span><span>Omelete de legumes</span></div>
                <div className="vm-day"><span className="vm-day-lbl">QUI</span><span>Feijão tropeiro</span></div>
                <div className="vm-day"><span className="vm-day-lbl">SEX</span><span>Peixe assado</span></div>
                <div className="vm-day"><span className="vm-day-lbl">SAB</span><span className="vm-day-empty">— livre —</span></div>
                <div className="vm-day"><span className="vm-day-lbl">DOM</span><span className="vm-day-empty">— livre —</span></div>
```
New:
```jsx
                <div className="vm-hdr">
                  <span>{t('feature.vmTitle')}</span>
                  <span className="ph-badge">{t('feature.vmCount')}</span>
                </div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day1Lbl')}</span><span>{t('feature.day1')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day2Lbl')}</span><span>{t('feature.day2')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day3Lbl')}</span><span>{t('feature.day3')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day4Lbl')}</span><span>{t('feature.day4')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day5Lbl')}</span><span>{t('feature.day5')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day6Lbl')}</span><span className="vm-day-empty">{t('feature.day6Empty')}</span></div>
                <div className="vm-day"><span className="vm-day-lbl">{t('feature.day7Lbl')}</span><span className="vm-day-empty">{t('feature.day7Empty')}</span></div>
```

- [ ] **Step 4: "Por que funciona" (4 parágrafos, sem link cruzado — sem casos especiais aqui)**

```jsx
            <h2>{t('why.title')}</h2>
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p>{t('why.p3')}</p>
            <p>{t('why.p4')}</p>
```

- [ ] **Step 5: FAQ (visível `div`s, igual despensa) + CTA + build + commit**

Mesmo padrão do Task 8 Step 6-7.

```bash
git add "app/[locale]/funcionalidades/cardapio-semanal/page.js"
git commit -m "feat(i18n): traduz funcionalidades/cardapio-semanal"
```

---

### Task 10: Traduzir `funcionalidades/receitas`

**Files:**
- Modify: `app/[locale]/funcionalidades/receitas/page.js`

**Interfaces:**
- Consumes: namespace `svcReceitas` (Task 2).

Mesmo padrão, `svcListaDeCompras` → `svcReceitas`, `ListaDeComprasPage` → `ReceitasPage`, URL `.../funcionalidades/receitas`.

- [ ] **Step 1: Hero**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Receitas</div>
            <h1 className="svc-hero-h1">
              App para anotar receitas e<br />
              <span className="svc-hero-accent">cozinhar com o que tem em casa.</span>
            </h1>
            <p className="svc-hero-sub">
              Salva as receitas que você já faz. O app filtra pelo que tem na despensa e mostra
              o que dá pra cozinhar hoje — sem precisar passar no mercado antes.
            </p>
```
New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.eyebrow')}</div>
            <h1 className="svc-hero-h1">
              {t.rich('hero.title', {
                br: () => <br />,
                accent: (chunks) => <span className="svc-hero-accent">{chunks}</span>,
              })}
            </h1>
            <p className="svc-hero-sub">{t('hero.sub')}</p>
```

- [ ] **Step 2: Como funciona (3 passos, `h4`)**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Como funciona</div>
            <h2>Da receita ao prato sem improvisos.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Anota suas receitas</h4>
              <p>Salva as receitas que você já faz com ingredientes, quantidades e modo de preparo. As suas, não as de influencer que você nunca vai fazer.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>Filtra pelo que tem em casa</h4>
              <p>O app cruza as receitas salvas com o conteúdo da despensa e mostra o que dá pra cozinhar hoje — sem ir ao mercado antes.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Ingredientes que faltam vão pra lista</h4>
              <p>Escolheu uma receita que falta ingrediente? Com um toque, o que está faltando entra direto na lista de compras.</p>
            </div>
          </div>
```
New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('how.eyebrow')}</div>
            <h2>{t('how.title')}</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-step">
              <div className="num">1</div>
              <h4>{t('how.step1Title')}</h4>
              <p>{t('how.step1Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>{t('how.step2Title')}</h4>
              <p>{t('how.step2Desc')}</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>{t('how.step3Title')}</h4>
              <p>{t('how.step3Desc')}</p>
            </div>
          </div>
```

- [ ] **Step 3: Funcionalidades (4 pontos) + mockup de receitas**

Cabeçalho — old:
```jsx
              <div className="eyebrow"><span className="dot"></span> O que tem</div>
              <h2>Receitas que funcionam com o que você tem. Não com o que deveria ter.</h2>
              <p>
                O problema não é falta de receitas na internet. É saber qual delas você consegue
                fazer hoje, com o que tem em casa, sem passar no mercado.
              </p>
```
New:
```jsx
              <div className="eyebrow"><span className="dot"></span> {t('feature.eyebrow')}</div>
              <h2>{t('feature.title')}</h2>
              <p>{t('feature.desc')}</p>
```

4 `.svc-point-title`/`.svc-point-desc` seguem `feature.point1Title`..`point4Desc`.

Mockup — old:
```jsx
                <div className="vm-hdr">
                  <span>Minhas receitas</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, background: 'var(--verde-claro)', color: 'var(--verde-musgo)', padding: '3px 9px', borderRadius: '999px' }}>Com o que tenho</span>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Frango xadrez</div>
                    <div className="vm-chips">
                      <span className="vm-chip">Frango</span>
                      <span className="vm-chip">Pimentão</span>
                      <span className="vm-chip">Shoyu</span>
                      <span className="vm-chip out">Castanha</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>+ lista</div>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Omelete de legumes</div>
                    <div className="vm-chips">
                      <span className="vm-chip">Ovos</span>
                      <span className="vm-chip">Cebola</span>
                      <span className="vm-chip">Tomate</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>+ lista</div>
                </div>
                <div className="vm-recipe" style={{ opacity: 0.45 }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Risoto de cogumelos</div>
                    <div className="vm-chips">
                      <span className="vm-chip out">Cogumelos</span>
                      <span className="vm-chip out">Vinho branco</span>
                    </div>
                  </div>
                </div>
```
New:
```jsx
                <div className="vm-hdr">
                  <span>{t('feature.vmTitle')}</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, background: 'var(--verde-claro)', color: 'var(--verde-musgo)', padding: '3px 9px', borderRadius: '999px' }}>{t('feature.vmBadge')}</span>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{t('feature.recipe1')}</div>
                    <div className="vm-chips">
                      <span className="vm-chip">{t('feature.recipe1Chip1')}</span>
                      <span className="vm-chip">{t('feature.recipe1Chip2')}</span>
                      <span className="vm-chip">{t('feature.recipe1Chip3')}</span>
                      <span className="vm-chip out">{t('feature.recipe1Chip4')}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>{t('feature.addToList')}</div>
                </div>
                <div className="vm-recipe">
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{t('feature.recipe2')}</div>
                    <div className="vm-chips">
                      <span className="vm-chip">{t('feature.recipe2Chip1')}</span>
                      <span className="vm-chip">{t('feature.recipe2Chip2')}</span>
                      <span className="vm-chip">{t('feature.recipe2Chip3')}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--verde-folha)', whiteSpace: 'nowrap', paddingLeft: 12 }}>{t('feature.addToList')}</div>
                </div>
                <div className="vm-recipe" style={{ opacity: 0.45 }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{t('feature.recipe3')}</div>
                    <div className="vm-chips">
                      <span className="vm-chip out">{t('feature.recipe3Chip1')}</span>
                      <span className="vm-chip out">{t('feature.recipe3Chip2')}</span>
                    </div>
                  </div>
                </div>
```

- [ ] **Step 4: "Por que funciona" (4 parágrafos) + FAQ (visível `div`s) + CTA**

```jsx
            <h2>{t('why.title')}</h2>
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p>{t('why.p3')}</p>
            <p>{t('why.p4')}</p>
```

FAQ e CTA seguem o mesmo padrão do Task 8/9.

- [ ] **Step 5: Build, checagem manual e commit**

```bash
git add "app/[locale]/funcionalidades/receitas/page.js"
git commit -m "feat(i18n): traduz funcionalidades/receitas"
```

---

### Task 11: Traduzir `blog` (layout + índice) com listagem filtrada por locale

**Files:**
- Modify: `app/[locale]/blog/layout.js`
- Modify: `app/[locale]/blog/page.js`

**Interfaces:**
- Consumes: namespace `blogIndex` (Task 2).
- Produces: `/en/blog` e `/es/blog` renderizam a mesma estrutura, mas com a grade de posts vazia (nenhum post tem campo `locales` incluindo `en`/`es` ainda) e um empty state; `/pt/blog` continua mostrando os 16 posts normalmente.

`app/[locale]/blog/layout.js` não muda de comportamento — só confirme que o `import './blog.css'` continua funcionando no novo caminho (sem alteração de conteúdo necessária, é só um passthrough).

- [ ] **Step 1: Cada post ganha um campo `locales`**

No array `posts` de `app/[locale]/blog/page.js`, adicione `locales: ['pt']` em cada uma das 16 entradas (todas idênticas nesta fase — é o gancho pra quando um post for traduzido, ele ganha `locales: ['pt', 'en']` etc. e passa a aparecer automaticamente nos idiomas certos).

Run este script pra inserir o campo em todas as 16 entradas de uma vez (evita 17 edições manuais idênticas — cada objeto do array termina com `dateLabel: '...',` seguido de `},`):

```bash
node -e "
const fs = require('fs');
const file = 'app/[locale]/blog/page.js';
let src = fs.readFileSync(file, 'utf8');
const before = (src.match(/locales: \['pt'\]/g) || []).length;
src = src.replace(/(dateLabel: '[^']+',)\n(  \},)/g, \"\$1\n    locales: ['pt'],\n\$2\");
fs.writeFileSync(file, src);
const after = (src.match(/locales: \['pt'\]/g) || []).length;
console.log('antes:', before, '| depois:', after, '(esperado: 16)');
"
```
Expected: `antes: 0 | depois: 16`. Confira manualmente o primeiro objeto do array pra garantir que a indentação ficou consistente com o resto do arquivo.

- [ ] **Step 2: Imports, `generateMetadata`, filtro por locale**

Old:
```jsx
import NavDropdown from '../../components/NavDropdown'
import { BrandIcon } from '../../components/Icon'

export const metadata = {
  title: 'Blog — Mise',
  description: 'Dicas de organização de cozinha, listas de compras e planejamento semanal.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog',
  },
}

const posts = [
```

New:
```jsx
import { getTranslations } from 'next-intl/server'
import SiteNav from '../../../components/SiteNav'
import { Link } from '../../../i18n/navigation'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogIndex.meta' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/blog`,
    },
  }
}

const posts = [
```

Note que o header duplicado (`<header className="nav">...`) desta página some no Step 4 abaixo em favor do componente `<SiteNav />` já usado pelas outras páginas — por isso o import de `NavDropdown`/`BrandIcon` é trocado por `SiteNav`/`Link`.

- [ ] **Step 3: Assinatura da função + filtro dos posts por locale**

Old:
```jsx
export default function BlogPage() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <nav className="nav-links">
            <NavDropdown />
            <a href="/blog" className="nav-link" style={{color: 'var(--carvao)'}}>Blog</a>
          </nav>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>

      <main>
```

New:
```jsx
export default async function BlogPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('blogIndex')
  const tc = await getTranslations('common')
  const localePosts = posts.filter((p) => p.locales.includes(locale))

  return (
    <>
      <SiteNav />

      <main>
```

- [ ] **Step 4: Hero e seção de temas**

Old:
```jsx
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h1>Dicas de quem faz lista de verdade</h1>
            <p className="blog-index-sub">Organização de cozinha, supermercado e planejamento semanal — sem frescura.</p>
            <p className="blog-hero-desc">
              Aqui você encontra guias práticos sobre listas de compras, organização de despensa
              e planejamento de refeições. Sem técnicas mirabolantes nem produtos caros — só o
              que funciona pra quem cozinha em casa de verdade. Cada artigo vem com listas pra
              copiar, estimativas de custo e respostas diretas às dúvidas mais comuns.
            </p>
```
New:
```jsx
            <div className="eyebrow"><span className="dot"></span> {t('hero.title')}</div>
            <h1>{t('hero.title')}</h1>
            <p className="blog-index-sub">{t('hero.sub')}</p>
            <p className="blog-hero-desc">{t('hero.desc')}</p>
```

**Nota:** o eyebrow original ("Blog") e o `<h1>` ("Dicas de quem faz lista de verdade") eram textos diferentes no PT original — o eyebrow curto é só a palavra "Blog" em todo idioma (não precisa de tradução, marca de seção). Corrija a linha do eyebrow acima para usar um literal fixo em vez de `t('hero.title')` duas vezes:
```jsx
            <div className="eyebrow"><span className="dot"></span> Blog</div>
```

Old (seção de temas):
```jsx
            <h2 className="blog-index-topics-title">O que você encontra aqui</h2>
            <div className="blog-index-topics-grid">
              <div className="blog-index-topic">
                <h3>Listas de compras</h3>
                <p>
                  Guias completos com itens organizados por grupo, estimativas de custo por perfil
                  de família e dicas práticas para diferentes situações — casa nova, mês apertado,
                  família grande, casal. Cada lista foi pensada para você copiar e adaptar, não
                  começar do zero toda semana.
                </p>
                <p>
                  Você vai encontrar desde a lista básica de supermercado com os 80 itens que
                  quase todo mundo precisa até listas específicas por situação: mudança, festa,
                  churrasco, cesta básica. Sem itens exóticos que você nunca vai usar.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Organização de despensa e geladeira</h3>
                <p>
                  Como organizar a despensa por zonas, que recipientes usar, como rotular, por onde
                  começar quando está tudo bagunçado — e como manter organizado no dia a dia sem
                  precisar de um domingo inteiro para reorganizar tudo de novo.
                </p>
                <p>
                  Sem produtos caros, sem estética de revista de decoração. O foco é funcional:
                  o que vai diminuir o desperdício, facilitar o acesso aos ingredientes mais usados
                  e fazer a despensa trabalhar pela sua rotina de cozinha.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Planejamento de refeições e economia</h3>
                <p>
                  Como montar um cardápio semanal que respeite o tempo disponível e o orçamento,
                  por que planejar antes de ir ao mercado faz diferença na conta do mês e quais
                  hábitos simples cortam o gasto sem abrir mão do que você gosta de comer.
                </p>
                <p>
                  Pesquisas de comportamento de consumo mostram que compras sem lista custam entre
                  20% e 30% a mais. Os artigos aqui explicam como esse dado se traduz na sua
                  rotina — e o que fazer a respeito.
                </p>
              </div>
            </div>
```
New:
```jsx
            <h2 className="blog-index-topics-title">{t('topics.title')}</h2>
            <div className="blog-index-topics-grid">
              <div className="blog-index-topic">
                <h3>{t('topics.t1Title')}</h3>
                <p>{t('topics.t1P1')}</p>
                <p>{t('topics.t1P2')}</p>
              </div>
              <div className="blog-index-topic">
                <h3>{t('topics.t2Title')}</h3>
                <p>{t('topics.t2P1')}</p>
                <p>{t('topics.t2P2')}</p>
              </div>
              <div className="blog-index-topic">
                <h3>{t('topics.t3Title')}</h3>
                <p>{t('topics.t3P1')}</p>
                <p>{t('topics.t3P2')}</p>
              </div>
            </div>
```

- [ ] **Step 5: Grid de posts com filtro + empty state**

Old:
```jsx
        <section className="blog-index-posts">
          <div className="container">
            <div className="blog-index-grid">
              {posts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
                  <div className="blog-index-img">
                    <img
                      src={post.img}
                      alt={post.imgAlt}
                      width="800"
                      height="480"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-index-body">
                    <div className="blog-index-meta">
                      <span className="blog-card-tag">{post.tag}</span>
                      <span className="blog-index-date">{post.dateLabel}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="blog-card-link">Ler artigo →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
```

New:
```jsx
        <section className="blog-index-posts">
          <div className="container">
            {localePosts.length > 0 ? (
              <div className="blog-index-grid">
                {localePosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
                    <div className="blog-index-img">
                      <img
                        src={post.img}
                        alt={post.imgAlt}
                        width="800"
                        height="480"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-index-body">
                      <div className="blog-index-meta">
                        <span className="blog-card-tag">{post.tag}</span>
                        <span className="blog-index-date">{post.dateLabel}</span>
                      </div>
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                      <span className="blog-card-link">{tc('readArticle')}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="blog-index-empty">
                <h2>{t('empty.title')}</h2>
                <p>{t('empty.desc')}</p>
              </div>
            )}
          </div>
        </section>
```

Adicione o estilo básico do empty state em `app/globals.css` (perto das outras regras `.blog-index-*`):
```css
.blog-index-empty {
  text-align: center;
  padding: var(--s-10) var(--s-4);
  color: var(--carvao-2);
}
.blog-index-empty h2 {
  margin-bottom: var(--s-2);
}
```

- [ ] **Step 6: CTA e footer**

Old:
```jsx
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>Já que você chegou até aqui — testa o app. É grátis.</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                Abrir o Mise →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
```

New:
```jsx
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>{t('cta.text')}</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                {t('cta.button')}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">{tc('footerCopy')}</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">{tc('openAppArrow')}</a>
        </div>
      </footer>
```

Isso usa `BrandIcon` — como o import mudou no Step 2 pra `SiteNav`/`Link` (`BrandIcon` não é mais importado diretamente), adicione de volta ao import list do Step 2:
```jsx
import { BrandIcon } from '../../../components/Icon'
```
(mantendo `SiteNav`, `Link` e `getTranslations` junto).

- [ ] **Step 7: Build, checagem manual e commit**

Run: `npm run build` — limpo. Run: `npm run dev`:
- `/pt/blog` → 16 posts na grade, tudo em português.
- `/en/blog`, `/es/blog` → grade vazia, empty state traduzido aparece, header e footer traduzidos, seção de temas traduzida.
- Confirmar que nenhum link do menu (`SiteNav`) ou dos posts individuais quebra o locale atual.

```bash
git add "app/[locale]/blog/page.js" "app/[locale]/blog/layout.js" app/globals.css
git commit -m "feat(i18n): traduz blog (indice) com listagem filtrada por locale"
```

---

### Task 12: hreflang (`alternates.languages`) nas páginas traduzidas

**Files:**
- Modify: `app/[locale]/funcionalidades/page.js`
- Modify: `app/[locale]/funcionalidades/lista-de-compras/page.js`
- Modify: `app/[locale]/funcionalidades/despensa/page.js`
- Modify: `app/[locale]/funcionalidades/cardapio-semanal/page.js`
- Modify: `app/[locale]/funcionalidades/receitas/page.js`
- Modify: `app/[locale]/blog/page.js`

**Interfaces:**
- Consumes: nenhuma chave nova — só estende o objeto retornado por `generateMetadata` já escrito nas Tasks 6, 7-10 e 11.
- Produces: cada página em escopo declara as 3 variantes de idioma (mais `x-default` → `pt`) no `<head>`, permitindo o Google entender que `/pt/funcionalidades`, `/en/funcionalidades` e `/es/funcionalidades` são a mesma página em idiomas diferentes (não conteúdo duplicado).

`app/[locale]/layout.js` (Task 3) já faz isso pra `/`. Este task replica o mesmo padrão de `alternates` em cada `generateMetadata` de página — o home layout não precisa mudar.

- [ ] **Step 1: `funcionalidades/page.js`**

No `generateMetadata` escrito no Task 6 Step 1, adicione a chave `alternates` ao objeto retornado:

Old (fim do return de `generateMetadata`):
```jsx
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades`,
    },
  }
}
```
New:
```jsx
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://www.miseemcasa.com.br/${locale}/funcionalidades`,
    },
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades',
      },
    },
  }
}
```

- [ ] **Step 2: `funcionalidades/lista-de-compras/page.js`**

Mesma edição, path `/funcionalidades/lista-de-compras`:
```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/lista-de-compras`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/lista-de-compras',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/lista-de-compras',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/lista-de-compras',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/lista-de-compras',
      },
    },
```

- [ ] **Step 3: `funcionalidades/despensa/page.js`**

```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/despensa`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/despensa',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/despensa',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/despensa',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/despensa',
      },
    },
```

- [ ] **Step 4: `funcionalidades/cardapio-semanal/page.js`**

```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/cardapio-semanal`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/cardapio-semanal',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/cardapio-semanal',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/cardapio-semanal',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/cardapio-semanal',
      },
    },
```

- [ ] **Step 5: `funcionalidades/receitas/page.js`**

```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/funcionalidades/receitas`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/funcionalidades/receitas',
        en: 'https://www.miseemcasa.com.br/en/funcionalidades/receitas',
        es: 'https://www.miseemcasa.com.br/es/funcionalidades/receitas',
        'x-default': 'https://www.miseemcasa.com.br/pt/funcionalidades/receitas',
      },
    },
```

- [ ] **Step 6: `blog/page.js`**

O `generateMetadata` deste arquivo (Task 11 Step 2) já tem uma chave `alternates.canonical` — estenda pra incluir `languages`:

Old:
```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/blog`,
    },
```
New:
```jsx
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/blog`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/blog',
        en: 'https://www.miseemcasa.com.br/en/blog',
        es: 'https://www.miseemcasa.com.br/es/blog',
        'x-default': 'https://www.miseemcasa.com.br/pt/blog',
      },
    },
```

- [ ] **Step 7: Verificar no browser + commit**

Run: `npm run dev`, abrir `/pt/funcionalidades` (ou qualquer página deste task), abrir DevTools → Elements → `<head>`, confirmar 4 tags `<link rel="alternate" hreflang="...">` (pt, en, es, x-default) apontando pras URLs certas.

```bash
git add "app/[locale]/funcionalidades" "app/[locale]/blog/page.js"
git commit -m "feat(i18n): hreflang alternates nas paginas traduzidas"
```

---

### Task 13: Atualizar `app/sitemap.js` (3 locales + fix dos posts faltando)

**Files:**
- Modify: `app/sitemap.js`

**Interfaces:**
- Consumes: nenhuma dependência de i18n em runtime — `sitemap.js` fica fora do segmento `[locale]` (é um metadata route global), então lista as URLs manualmente por locale.
- Produces: sitemap.xml com home/funcionalidades × 3 idiomas e todos os 16 posts de blog em `/pt/blog/*` (o sitemap atual só lista 4 dos 16 — esta task também fecha essa lacuna pré-existente, fora do escopo de i18n mas trivial de corrigir junto).

- [ ] **Step 1: Reescrever `app/sitemap.js`**

Read o arquivo atual primeiro (você já tem o conteúdo dele no contexto desta sessão — 4 posts listados) e substitua por:

```js
const BASE_URL = 'https://www.miseemcasa.com.br'
const LOCALES = ['pt', 'en', 'es']

const TRANSLATED_PATHS = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/funcionalidades', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/funcionalidades/lista-de-compras', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/despensa', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/cardapio-semanal', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/receitas', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
]

const BLOG_SLUGS_PT = [
  'lista-basica-de-compras',
  'lista-de-compras-para-casa-nova',
  'como-organizar-a-despensa',
  'como-economizar-no-mercado',
  'o-que-e-cranberry',
  'o-que-e-pistache',
  'caderno-de-receitas',
  'para-que-serve-oleo-de-linhaca',
  'o-que-e-chia',
  'o-que-e-curcuma',
  'lista-de-compras-do-mes',
  'alimentos-ricos-em-magnesio',
  'cardapio-semanal-simples-caseiro',
  'para-que-serve-noz-moscada',
  'o-que-e-gengibre',
  'o-que-e-pomelo',
]

export default function sitemap() {
  const translatedEntries = TRANSLATED_PATHS.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  )

  const blogEntries = BLOG_SLUGS_PT.map((slug) => ({
    url: `${BASE_URL}/pt/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...translatedEntries, ...blogEntries]
}
```

- [ ] **Step 2: Verificar contagem de entradas**

Run:
```bash
node -e "
process.env.NODE_ENV = 'production';
require('@babel/register')({ presets: ['next/babel'] });
" 2>/dev/null || true
```
Esse approach de rodar `sitemap.js` isolado via Node é frágil (depende de transpilar JSX/ESM fora do Next) — pule a execução direta e valide via build:

Run: `npm run build`, depois `npm run start` (ou `npm run dev`) e abrir `http://localhost:3000/sitemap.xml`.
Expected: 7 paths traduzidos × 3 locales = 21 URLs, mais 16 posts de blog em `/pt/blog/*` = 37 URLs no total. Confira visualmente que aparecem `/pt`, `/en`, `/es`, `/pt/funcionalidades`, `/en/funcionalidades` etc., e os 16 posts (a lista `BLOG_SLUGS_PT` tem 16 — confirme contra `ls "app/[locale]/blog"` que o total de diretórios de post bate; se o post `o-que-e-gengibre`/outro tiver sido publicado depois desta spec ter sido escrita, adicione o slug que estiver faltando na constante).

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.js
git commit -m "feat(i18n): sitemap com 3 locales + fix posts de blog faltando"
```

---

### Task 14: Verificação final end-to-end

**Files:** nenhum arquivo novo — só verificação.

**Interfaces:**
- Consumes: toda a feature (Tasks 1-13).

- [ ] **Step 1: Build limpo**

Run: `npm run build`
Expected: build passa sem erros nem warnings novos. Confira no output que as rotas estáticas geradas incluem `/pt`, `/en`, `/es` e as sub-rotas de `funcionalidades` nos 3 locales.

- [ ] **Step 2: Checklist manual no browser (`npm run dev`)**

Percorra cada item da seção "Testes / verificação" da spec (`docs/superpowers/specs/2026-07-17-landing-i18n-idiomas-design.md`):

1. Trocar entre os 3 idiomas no seletor do header em cada página no escopo (home, funcionalidades × 4, blog index) — conteúdo muda, URL atualiza com o prefixo certo, nenhum texto em branco ou chave crua tipo `home.hero.title` aparecendo.
2. Acessar as URLs antigas sem prefixo (`/`, `/blog/o-que-e-chia`, `/funcionalidades/despensa`) e confirmar redirect 301 para a versão `/pt/...` correspondente — não para `/en/...`. Usar DevTools → Network → conferir status 308/301 e o header `Location`.
3. Acessar `/en/blog` e `/es/blog` diretamente — confirmar empty state (nenhum post PT vazando misturado).
4. Inspecionar `<head>` de uma página em cada idioma — hreflang alternates presentes e apontando pros locais certos, `x-default` → `/pt/`.
5. Ratio texto/HTML das páginas traduzidas (regra do `CLAUDE.md` deste repo) — abrir view-source em cada idioma e conferir visualmente que EN/ES mantêm o mesmo volume de parágrafos de corpo que o PT (comparar contagem de `<p>` nas seções "Por que funciona"/"Como funciona").
6. Scroll na página inteira em cada um dos 3 idiomas, em todas as 6 páginas no escopo (home, funcionalidades × 5, blog index) — nenhuma seção quebrada, nenhum layout deslocado.
7. Testar o `LanguageSwitcher` a partir de uma página profunda (ex: `/pt/funcionalidades/receitas`) — trocar pra `/en` deve levar pra `/en/funcionalidades/receitas`, não pra `/en` (home).

- [ ] **Step 3: Rodar o script de completude dos dicionários novamente**

Run o mesmo script do Task 2 Step 4 pra garantir que nenhum task subsequente introduziu uma chave usada no código que não existe no dicionário (esse script só valida os 3 JSONs entre si — para achar chaves *usadas no código mas ausentes no JSON*, use o fallback visual do Step 2 acima: qualquer chave ausente aparece como texto cru tipo `svcDespensa.faq.q5` na tela).

- [ ] **Step 4: Atualizar `CLAUDE.md` do repo (opcional, mas recomendado)**

Se este plano for executado, considere adicionar uma nota breve em `.claude/CLAUDE.md` deste repo documentando a existência do sistema de i18n (namespaces em `messages/*.json`, padrão `getTranslations`/`useTranslations`, uso de `Link`/`useRouter` de `i18n/navigation.js` em vez de `next/link`/`next/navigation` para qualquer link interno) — isso evita que trabalho futuro (novos posts, novas páginas) reintroduza `<a href="/...">` hardcoded que quebra o locale atual.

- [ ] **Step 5: Commit final (se o Step 4 foi feito)**

```bash
git add .claude/CLAUDE.md
git commit -m "docs: documenta sistema de i18n no CLAUDE.md"
```
