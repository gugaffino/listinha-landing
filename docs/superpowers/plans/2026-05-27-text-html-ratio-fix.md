# Text-to-HTML Ratio Fix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir o ratio texto/HTML das 7 páginas que estão abaixo de 10% e criar o processo padrão para novas páginas nunca caírem abaixo do threshold.

**Architecture:** Duas frentes em paralelo. (1) Adicionar conteúdo textual descritivo às páginas com ratio fraco — esta é a principal alavanca, pois os payloads de script do Next.js são fixos e a forma mais rápida de mover o ratio é aumentar o denominador "text". (2) Criar componente `<Icon>` + sprite SVG para reduzir o overhead de markup de ícones inline e documentar o processo para novas páginas não repetirem o problema.

**Tech Stack:** Next.js 15 App Router, JavaScript, CSS Modules via `globals.css`, SVG sprites via `<symbol>` + `<use href>`.

---

## Diagnóstico dos ratios medidos

| Página | Ratio | Causa principal |
|---|---|---|
| Blog index | 0.07 | Pouco texto corrido (só cards com 2 frases cada) |
| Homepage | 0.08 | 15+ SVGs inline + seções curtas de marketing |
| Funcionalidades hub | 0.08 | Pouco texto além dos 4 cards |
| Cardápio semanal | 0.09 | 4 SVGs inline no svc-points |
| Despensa | 0.09 | 4 SVGs inline no svc-points |
| Lista | 0.09 | 4 SVGs inline no svc-points |
| Receitas | 0.09 | 4 SVGs inline no svc-points |

---

## Mapa de arquivos

| Arquivo | Ação |
|---|---|
| `components/IconSprite.js` | **Criar** — sprite SVG com todos os símbolos de ícone |
| `components/Icon.js` | **Criar** — wrapper `<svg><use href>` |
| `app/layout.js` | **Modificar** — adicionar `<IconSprite />` |
| `components/NavDropdown.js` | **Modificar** — substituir 4 SVGs inline por `<Icon>` |
| `app/blog/page.js` | **Modificar** — adicionar seção "O que você encontra aqui" (~400 palavras) |
| `app/page.js` | **Modificar** — adicionar seção "Para quem é o Mise" (~200 palavras) |
| `app/funcionalidades/page.js` | **Modificar** — expandir seção de conexão (+150 palavras) |
| `app/funcionalidades/cardapio-semanal/page.js` | **Modificar** — adicionar §4 em "Por que funciona" (+100 palavras) |
| `app/funcionalidades/despensa/page.js` | **Modificar** — adicionar §4 em "Por que funciona" (+100 palavras) |
| `app/funcionalidades/lista-de-compras/page.js` | **Modificar** — adicionar §4 em "Por que funciona" (+100 palavras) |
| `app/funcionalidades/receitas/page.js` | **Modificar** — adicionar §4 em "Por que funciona" (+100 palavras) |
| `.claude/CLAUDE.md` | **Modificar** — documentar regras de processo para novas páginas |

---

## Task 1: Criar sistema de ícones (sprite + componente)

**Files:**
- Create: `components/IconSprite.js`
- Create: `components/Icon.js`
- Modify: `app/layout.js`

- [ ] **Step 1.1: Criar `components/IconSprite.js`**

```jsx
// components/IconSprite.js
// Sprite SVG com todos os ícones do projeto.
// Renderizado uma vez no layout; referenciado por <Icon> com <use href="#icon-X">.
// Para adicionar ícone: copiar paths do Lucide (stroke 1.8, sem fill nos shapes).
export default function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <defs>

        {/* ── Marca Mise (cumbuca) ── */}
        <symbol id="icon-brand" viewBox="0 0 24 24">
          <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor" stroke="none"/>
          <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A" stroke="none"/>
        </symbol>

        {/* ── Navegação e UI ── */}
        <symbol id="icon-arrow-right" viewBox="0 0 24 24">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6"/>
        </symbol>
        <symbol id="icon-check" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5"/>
        </symbol>
        <symbol id="icon-check-lg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"/>
        </symbol>
        <symbol id="icon-plus" viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </symbol>
        <symbol id="icon-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </symbol>

        {/* ── Features principais ── */}
        <symbol id="icon-cart" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </symbol>
        <symbol id="icon-archive" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="5" rx="1"/>
          <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9"/>
          <line x1="10" y1="13" x2="14" y2="13"/>
        </symbol>
        <symbol id="icon-book" viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </symbol>
        <symbol id="icon-calendar" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
        </symbol>

        {/* ── Funcionalidades específicas ── */}
        <symbol id="icon-share" viewBox="0 0 24 24">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </symbol>
        <symbol id="icon-phone" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </symbol>
        <symbol id="icon-map" viewBox="0 0 24 24">
          <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/>
          <path d="M8 2v16"/>
          <path d="M16 6v16"/>
        </symbol>
        <symbol id="icon-alert" viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </symbol>
        <symbol id="icon-package" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </symbol>
        <symbol id="icon-activity" viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </symbol>
        <symbol id="icon-arrows-expand" viewBox="0 0 24 24">
          <polyline points="16 3 21 3 21 8"/>
          <line x1="4" y1="20" x2="21" y2="3"/>
          <polyline points="21 16 21 21 16 21"/>
          <line x1="15" y1="15" x2="21" y2="21"/>
        </symbol>

      </defs>
    </svg>
  )
}
```

- [ ] **Step 1.2: Criar `components/Icon.js`**

```jsx
// components/Icon.js
// Wrapper para ícones do sprite SVG.
// Uso: <Icon name="cart" size={24} strokeWidth={1.8} />
// strokeWidth padrão: 2.2 para size >= 28, 1.8 para menores.
// SEMPRE use este componente — nunca inline SVG com paths.
export default function Icon({ name, size = 24, strokeWidth, className, style, ...props }) {
  const sw = strokeWidth ?? (size >= 28 ? 2.2 : 1.8)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
      {...props}
    >
      <use href={`#icon-${name}`} />
    </svg>
  )
}

// Para o brand mark (cumbuca), que tem fills fixos — não usa stroke:
export function BrandIcon({ size = 24, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <use href="#icon-brand" />
    </svg>
  )
}
```

- [ ] **Step 1.3: Adicionar `<IconSprite />` ao `app/layout.js`**

Substituir o conteúdo atual do layout por:

```jsx
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import IconSprite from '../components/IconSprite'

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

export const metadata = {
  metadataBase: new URL('https://www.miseemcasa.com.br'),
  title: 'Mise — Cozinha em paz, do seu jeito.',
  description: 'O app que conecta despensa, receitas e lista de compras. Pra nunca mais faltar nada.',
  verification: {
    google: 'YhW2K5hJ2UdND5GjgGfhPogP5MFaybFqoDpbCIlaKIc',
  },
  openGraph: {
    title: 'Mise — Cozinha em paz, do seu jeito.',
    description: 'O app que conecta despensa, receitas e lista de compras. Grátis.',
    type: 'website',
    url: 'https://www.miseemcasa.com.br',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <IconSprite />
        <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 1.4: Commit**

```bash
git add components/IconSprite.js components/Icon.js app/layout.js
git commit -m "feat(icons): add SVG sprite + Icon component"
```

---

## Task 2: Atualizar NavDropdown para usar Icon

**Files:**
- Modify: `components/NavDropdown.js`

O NavDropdown tem 4 SVGs inline (cart, archive, book, calendar) que aparecem em todas as páginas que usam SiteNav. Trocá-los por `<Icon>` reduz o HTML gerado em cada página.

- [ ] **Step 2.1: Atualizar `components/NavDropdown.js`**

Substituir o arquivo inteiro por:

```jsx
'use client'
import { useState, useRef } from 'react'
import { BrandIcon } from './Icon'
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

const MENU_ID = 'nav-features-menu'

export default function NavDropdown() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const menuRef = useRef(null)

  function enter() {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function leave() {
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }

  function handleTriggerKeyDown(e) {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(true)
      setTimeout(() => menuRef.current?.querySelector('[role="menuitem"]')?.focus(), 0)
    }
  }

  function handleMenuKeyDown(e) {
    const items = Array.from(menuRef.current?.querySelectorAll('[role="menuitem"]') ?? [])
    const idx = items.indexOf(document.activeElement)
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(idx + 1) % items.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(idx - 1 + items.length) % items.length]?.focus()
    }
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
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
          name="chevron-down"
          size={14}
          strokeWidth={2.2}
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform .2s',
            transformBox: 'fill-box',
            transformOrigin: 'center',
          }}
        />
      </a>
      <div
        id={MENU_ID}
        ref={menuRef}
        className={`nav-dropdown-menu${open ? ' is-open' : ''}`}
        role="menu"
        onKeyDown={handleMenuKeyDown}
      >
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
      </div>
    </div>
  )
}
```

- [ ] **Step 2.2: Verificar que o dropdown ainda funciona**

```bash
npm run dev
```

Abrir http://localhost:3000, passar o mouse em "Funcionalidades" e confirmar que o dropdown abre com os 4 itens e ícones.

- [ ] **Step 2.3: Commit**

```bash
git add components/NavDropdown.js
git commit -m "refactor(nav): replace inline SVGs with Icon component in NavDropdown"
```

---

## Task 3: Expandir conteúdo do blog index (ratio 0.07 → meta 0.12+)

**Files:**
- Modify: `app/blog/page.js`

O blog index tem o ratio mais baixo (0.07) porque só tem cards de post com 2 frases cada. A solução é adicionar uma seção editorial descritiva com os temas cobertos.

- [ ] **Step 3.1: Adicionar seção editorial ao `app/blog/page.js`**

Localizar o bloco:
```jsx
        {/* POSTS */}
        <section className="blog-index-posts">
```

E inserir antes dele (após o fechamento do `<section className="blog-index-hero">`):

```jsx
        {/* TEMAS */}
        <section className="blog-index-topics">
          <div className="container">
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
          </div>
        </section>
```

- [ ] **Step 3.2: Adicionar CSS para a nova seção em `app/globals.css`**

Adicionar ao final do arquivo (antes do último comentário de seção, ou no final):

```css
/* Blog index — temas */
.blog-index-topics {
  padding: var(--s-9) 0 0;
  border-top: 1px solid var(--linha);
  margin-top: var(--s-8);
}
.blog-index-topics-title {
  font-size: var(--t-h2);
  font-weight: 600;
  letter-spacing: -0.025em;
  margin-bottom: var(--s-8);
  color: var(--carvao);
}
.blog-index-topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--s-8);
}
.blog-index-topic h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--carvao);
  margin-bottom: var(--s-4);
}
.blog-index-topic p {
  font-size: var(--t-body);
  line-height: 1.6;
  color: var(--carvao-2);
  margin-bottom: var(--s-4);
  text-wrap: pretty;
}
.blog-index-topic p:last-child {
  margin-bottom: 0;
}
```

- [ ] **Step 3.3: Verificar build**

```bash
npm run build
```

Expected: zero erros de build.

- [ ] **Step 3.4: Commit**

```bash
git add app/blog/page.js app/globals.css
git commit -m "content(blog): add editorial topics section to improve text-HTML ratio"
```

---

## Task 4: Expandir conteúdo da homepage (ratio 0.08 → meta 0.11+)

**Files:**
- Modify: `app/page.js`

A homepage tem muitos SVGs inline (phone mockup com 4 tabs, float cards, feat-tags etc.). A adição de uma seção textual descritiva é mais impactante e menos arriscada do que refatorar os mockups.

- [ ] **Step 4.1: Adicionar seção "Para quem é" ao `app/page.js`**

Localizar o bloco do founder section:

```jsx
      {/* FUNDADOR */}
      <section className="section" id="founder">
```

Inserir DEPOIS do fechamento do `</section>` do founder e ANTES do bloco `{/* BLOG */}`:

```jsx
      {/* PARA QUEM É */}
      <section className="section section-pad-0">
        <div className="container">
          <div className="text-col">
            <h2>Para quem é o Mise</h2>
            <p>
              O Mise foi feito para quem cozinha em casa com alguma frequência e já cansou
              de improvisar. Não é para chef, não é para quem quer montar a cozinha perfeita —
              é para quem quer sair do mercado com o que precisa e entrar na cozinha sabendo
              o que vai fazer.
            </p>
            <p>
              Funciona bem para casais que dividem as compras, famílias que planejam a semana
              juntos, quem mora sozinho e tenta não desperdiçar, repúblicas que precisam de
              lista compartilhada. A lógica é a mesma: saber o que tem em casa, planejar o que
              vai cozinhar e comprar só o que falta — sem voltar ao mercado no meio da semana.
            </p>
            <p>
              Quem usa o Mise há mais de um mês normalmente reduz de três para uma a quantidade
              de viagens semanais ao supermercado. A lista gerada pelo cardápio elimina os itens
              por impulso. A despensa elimina a compra duplicada. O resultado aparece na conta
              do mercado — não num tutorial de organização que você nunca vai terminar.
            </p>
          </div>
        </div>
      </section>
```

- [ ] **Step 4.2: Verificar no browser**

```bash
npm run dev
```

Abrir http://localhost:3000 e confirmar que a seção "Para quem é o Mise" aparece entre o bloco do fundador e a seção de blog. Scroll completo na página — nenhuma seção quebrada.

- [ ] **Step 4.3: Commit**

```bash
git add app/page.js
git commit -m "content(home): add 'Para quem é o Mise' section to improve text-HTML ratio"
```

---

## Task 5: Expandir conteúdo do hub de funcionalidades (ratio 0.08 → meta 0.11+)

**Files:**
- Modify: `app/funcionalidades/page.js`

- [ ] **Step 5.1: Adicionar parágrafo à seção de conexão em `app/funcionalidades/page.js`**

Localizar o bloco `{/* COMO TUDO SE CONECTA */}` e dentro do `<div className="text-col svc-feature-text reveal">`, adicionar um 4º parágrafo após os três existentes:

```jsx
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
```

- [ ] **Step 5.2: Verificar no browser**

```bash
npm run dev
```

Abrir http://localhost:3000/funcionalidades e confirmar que o parágrafo extra aparece corretamente na seção "Como as quatro ferramentas funcionam juntas".

- [ ] **Step 5.3: Commit**

```bash
git add app/funcionalidades/page.js
git commit -m "content(funcionalidades): expand connecting section for text-HTML ratio"
```

---

## Task 6: Expandir conteúdo das páginas de feature (ratio 0.09 → meta 0.11+)

**Files:**
- Modify: `app/funcionalidades/cardapio-semanal/page.js`
- Modify: `app/funcionalidades/despensa/page.js`
- Modify: `app/funcionalidades/lista-de-compras/page.js`
- Modify: `app/funcionalidades/receitas/page.js`

Cada página de feature tem uma seção "Por que funciona" com 3 parágrafos. Adicionar um 4º parágrafo a cada uma.

- [ ] **Step 6.1: Adicionar §4 ao cardápio semanal**

Em `app/funcionalidades/cardapio-semanal/page.js`, localizar o `{/* POR QUE FUNCIONA */}` e adicionar após o 3º `<p>`:

```jsx
            <p>
              Quem experimenta planejar o cardápio antes de ir ao mercado na primeira semana
              já percebe a diferença na conta e no improvisos do meio da semana. O hábito de
              cinco minutos de planejamento no domingo — montar o cardápio com o que tem na
              despensa e gerar a lista automática — resolve quatro perguntas de "o que a gente
              come hoje?" e economiza pelo menos uma ida extra ao mercado por semana.
            </p>
```

- [ ] **Step 6.2: Adicionar §4 à despensa**

Em `app/funcionalidades/despensa/page.js`, localizar o `{/* POR QUE FUNCIONA */}` e adicionar após o 3º `<p>`:

```jsx
            <p>
              A diferença entre uma despensa organizada e uma despensa viva está no hábito de
              marcar o que acaba no momento em que você percebe — não na semana do mercado,
              quando você já esqueceu. O Mise torna esse hábito mínimo: um toque quando abre
              o armário e vê que o sal acabou. Na hora de ir ao mercado, a lista já está
              pré-preenchida com o que falta. Sem abrir cada armário, sem tentar lembrar o que
              tinha na última prateleira.
            </p>
```

- [ ] **Step 6.3: Adicionar §4 à lista de compras**

Em `app/funcionalidades/lista-de-compras/page.js`, localizar o `{/* POR QUE FUNCIONA */}` e adicionar após o 3º `<p>`:

```jsx
            <p>
              A organização por corredor do Mise segue o fluxo real de um supermercado:
              hortifruti na entrada, carnes e laticínios a seguir, mercearia no meio, limpeza
              e higiene no fundo. Você entra, percorre uma vez, marca tudo sem voltar ao mesmo
              corredor duas vezes — e sai em menos tempo do que levaria sem lista. Compartilhar
              pelo WhatsApp antes de sair de casa garante que quem for junto compre exatamente
              o que a lista diz, sem ligações no meio do corredor.
            </p>
```

- [ ] **Step 6.4: Adicionar §4 às receitas**

Em `app/funcionalidades/receitas/page.js`, localizar o `{/* POR QUE FUNCIONA */}` e adicionar após o 3º `<p>`:

```jsx
            <p>
              Manter as receitas que você já faz no app — e não num caderno, numa foto ou numa
              aba do Chrome que você fecha sem salvar — elimina o "vamos fazer aquele frango
              mas eu não lembro os ingredientes". Em dois minutos, os ingredientes que faltam
              estão na lista. Em três toques, a receita está no cardápio da semana. Sem
              depender de sinal pra acessar site de receita no meio do cozimento.
            </p>
```

- [ ] **Step 6.5: Verificar no browser as quatro páginas**

```bash
npm run dev
```

Abrir cada URL e confirmar que o parágrafo extra aparece sem quebrar o layout:
- http://localhost:3000/funcionalidades/cardapio-semanal
- http://localhost:3000/funcionalidades/despensa
- http://localhost:3000/funcionalidades/lista-de-compras
- http://localhost:3000/funcionalidades/receitas

- [ ] **Step 6.6: Commit**

```bash
git add app/funcionalidades/cardapio-semanal/page.js app/funcionalidades/despensa/page.js app/funcionalidades/lista-de-compras/page.js app/funcionalidades/receitas/page.js
git commit -m "content(features): add 4th paragraph to each feature page to improve text-HTML ratio"
```

---

## Task 7: Documentar processo em CLAUDE.md

**Files:**
- Modify: `.claude/CLAUDE.md`

- [ ] **Step 7.1: Adicionar seção de processo ao `.claude/CLAUDE.md`**

Localizar o bloco `## ✅ Teste antes de declarar pronto` e adicionar logo acima dele:

```markdown
## 🖼️ Ícones — use sempre o componente Icon

Nunca adicione SVG inline em páginas. Use o componente `<Icon>`:

```jsx
import Icon, { BrandIcon } from '@/components/Icon'

// Ícone de feature
<Icon name="cart" size={24} strokeWidth={1.8} />

// Marca Mise (cumbuca) — tem fills fixos, usa BrandIcon
<BrandIcon size={24} />
```

Para adicionar um ícone novo: inclua o `<symbol>` no `components/IconSprite.js` e use `<Icon name="novo-nome">` nos componentes. Consulte o Lucide (lucide.dev) para os paths — stroke, nunca filled.

## 📊 Ratio texto/HTML — obrigatório em páginas novas

Toda página nova (feature, landing, hub) deve ter ratio texto/HTML acima de 10%. Regras:

1. **Mínimo 3 parágrafos de texto corrido** na seção de conteúdo principal (não contar FAQ, listas ou mockups).
2. **Nunca usar SVG inline** — cada ícone inline infla o HTML sem adicionar texto.
3. **Testar antes de declarar pronto**: após `npm run build`, checar o HTML gerado e estimar o ratio. Se a página tiver menos de 400 palavras de texto corrido em páginas de feature, adicionar uma seção editorial.

**Seções que NÃO contam como texto para o ratio:**
- FAQ (perguntas/respostas são curtas)
- Mockups de UI (`.vm`, `.phone-screen` etc.)
- Tags e chips (`.svc-hub-tag`, `.feat-bullets`)
- Texto de botões e labels

**Seções que CONTAM:**
- Parágrafos de "Por que funciona" / "Como funciona"
- Textos de hero sub e seções editoriais
- Seções de conteúdo informativo (`.text-col`)

```

- [ ] **Step 7.2: Commit**

```bash
git add .claude/CLAUDE.md
git commit -m "docs(process): add Icon component rules and text-HTML ratio requirements"
```

---

## Task 8: Build final, verificação e push

- [ ] **Step 8.1: Build limpo**

```bash
npm run build
```

Expected: zero erros e zero warnings de build. Se houver erro, investigar antes de prosseguir.

- [ ] **Step 8.2: Smoke test nas 7 páginas**

```bash
npm run dev
```

Abrir e verificar scroll completo em cada uma das 7 páginas que tinham ratio baixo:
- http://localhost:3000/
- http://localhost:3000/blog
- http://localhost:3000/funcionalidades
- http://localhost:3000/funcionalidades/cardapio-semanal
- http://localhost:3000/funcionalidades/despensa
- http://localhost:3000/funcionalidades/lista-de-compras
- http://localhost:3000/funcionalidades/receitas

Checklist por página:
- [ ] Nenhuma seção quebrada visualmente
- [ ] Ícones aparecem (NavDropdown dropdown funciona)
- [ ] Novo conteúdo textual aparece sem sobreposição
- [ ] Links e botões funcionam

- [ ] **Step 8.3: Push para produção**

```bash
git push origin master
```

O Vercel faz auto-deploy no push para `master`. Aguardar o deploy completar e verificar em https://www.miseemcasa.com.br.

---

## Notas de implementação

**Por que sprite SVG e não `@/components/Icon.js` com paths hard-coded?**
O sprite define cada ícone UMA vez no `<head>` do documento (via layout). Todas as referências `<use href="#icon-x">` no body reutilizam essa definição. Resultado: o HTML de cada página não carrega os paths SVG — eles existem uma vez no layout. Isso reduz de 300-500 chars por ícone-use para ~50 chars por ícone-use.

**Por que o brand mark usa `BrandIcon` separado?**
O brand mark (cumbuca) tem `fill="#B8E89A"` hardcoded no círculo — cor que não deve herdar `currentColor`. O `BrandIcon` renderiza o mesmo `<use href="#icon-brand">` mas o `<svg>` pai não define `stroke="currentColor"`, então os fills explícitos dentro do symbol são respeitados integralmente.

**Impacto esperado no ratio:**
- SVG sprite (NavDropdown): -4 SVG complexos do HTML de cada página que usa SiteNav
- Conteúdo adicionado: +100 a +400 palavras por página
- Estimativa de melhoria: ratio de 0.07-0.09 → 0.11-0.15 nas páginas afetadas

**O que NÃO foi alterado:**
- SVGs dentro dos mockups de UI (`.vm`, `.phone-screen`, `.float-card`) — são decorativos, aria-hidden, e refatorá-los tem custo/risco alto pra benefício pequeno
- SVGs de botão (arrow-right) — são 1 `<path>` só, overhead mínimo
- Brand mark nos navs e footers embutidos em `app/page.js` e `app/blog/page.js` — esses arquivos não importam SiteNav, e a refatoração completa escapa do escopo da correção de ratio
