# CLAUDE.md — Mise (landing)

Contexto pra Claude Code trabalhar neste repo.

---

## 🌐 i18n — PT/EN/ES (next-intl)

O site é multi-idioma via `next-intl`, com roteamento por prefixo sempre presente (`/pt/...`, `/en/...`, `/es/...` — inclusive PT). URLs antigas sem prefixo redirecionam (301) pra `/pt/...` em `next.config.js`, nunca pra `/en/`.

**Regras obrigatórias em qualquer página/componente sob `app/[locale]/`:**

1. **Nunca `<a href="/...">` pra rota interna** — sempre `<Link href="/...">` de `i18n/navigation.js` (não `next/link`). O `Link` do next-intl já resolve o locale atual no href. `<a>` só pra links externos (ex: `listinha-puce.vercel.app`).
2. **Nunca `useRouter`/`usePathname`/`redirect` de `next/navigation`** — sempre de `i18n/navigation.js`.
3. **Todo texto visível vem de `messages/{pt,en,es}.json`**, consumido via `getTranslations` (server component) ou `useTranslations` (client component, `'use client'`). Nunca hardcode string em PT numa página nova — adicione a chave nos 3 dicionários.
4. **Strings com tags embutidas** (itálico, negrito, quebra de linha, trecho destacado) usam `t.rich('chave', { tag: (chunks) => <jsx>{chunks}</jsx> })`, não `t()`.
5. **Namespace compartilhado**: strings repetidas entre páginas (ex: "Comece grátis") ficam em `common.*`, não duplicadas por página — pegue um segundo tradutor com `getTranslations('common')`.
6. **Marca "Mise" nunca é traduzida** — fica hardcoded, nunca vira chave de dicionário.
7. **FAQ com JSON-LD**: quando uma página tem `faqSchema` (structured data) junto de FAQ visível, os dois devem consumir as MESMAS chaves de tradução (nunca duplicar texto entre o schema e o `<dl>`/lista visível).
8. **Chave ausente num idioma** cai automaticamente pro texto em `pt` (fallback configurado em `i18n/request.js`) — nunca deixa em branco, mas se aparecer texto cru tipo `home.hero.title` na tela, é sinal de chave faltando nos 3 JSONs.

Posts de blog individuais (`app/[locale]/blog/<slug>/page.js`) existem só em `pt` por enquanto — têm guarda `if (locale !== 'pt') notFound()`. Traduzir posts é trabalho incremental separado (ver `docs/superpowers/specs/2026-07-17-landing-i18n-idiomas-design.md`).

---

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
3. **Testar antes de declarar pronto**: após `npm run build`, verificar se a página tem conteúdo textual suficiente.

**Seções que NÃO contam como texto para o ratio:**
- FAQ (perguntas/respostas são curtas)
- Mockups de UI (`.vm`, `.phone-screen` etc.)
- Tags e chips (`.svc-hub-tag`, `.feat-bullets`)
- Texto de botões e labels

**Seções que CONTAM:**
- Parágrafos de "Por que funciona" / "Como funciona"
- Textos de hero sub e seções editoriais
- Seções de conteúdo informativo (`.text-col`)

---

## ✅ Teste antes de declarar pronto

Toda mudança precisa passar por este check antes de dizer "feito":

1. `npm run dev` — abre no browser e confere o que foi alterado
2. Scroll na página inteira — nenhuma seção quebrada
3. `npm run build` — sem erros de build
4. Só então responde ao usuário

Nunca declare "pronto" sem ter testado no browser.

---

## 🏗️ Stack — Landing (este repo)

- **Framework:** Next.js 15, App Router, JavaScript (sem TypeScript)
- **CSS:** `app/globals.css` com tokens do design system inline
- **Fontes:** `next/font/google` (Bricolage Grotesque, Instrument Serif, JetBrains Mono)
- **Deploy:** Vercel (auto-deploy no push pra `master`)
- **Estrutura:**
  - `app/page.js` — landing page
  - `app/blog/page.js` — índice do blog (SEO)
  - `app/layout.js` — metadata + fontes
  - `app/globals.css` — todo o CSS
  - `components/RevealObserver.js` — IntersectionObserver (client component)

---

## 📦 O que é

App PWA de lista de compras com despensa, receitas e plano semanal.
Em produção: <https://listinha-puce.vercel.app>

- **Stack:** HTML5 + CSS3 + JS vanilla, **sem build step**
- **PWA:** `manifest.json` + `sw.js` (service worker mínimo)
- **Auth + dados:** Firebase Auth + Firestore (config inline no `index.html`)
- **Deploy:** Vercel (auto-deploy no push pra `main`)
- **Idioma:** Português (BR)

## 🗂️ Estrutura

```
listinha/
├── index.html          # APP INTEIRO num arquivo só (~144kb)
├── mock-desktop.html   # mockup desktop (descartável, mock antigo)
├── manifest.json       # PWA manifest
├── sw.js               # service worker
├── vercel.json         # config de deploy
├── data/
│   ├── catalog.json    # corredores + items da despensa (editável sem mexer no app)
│   └── tags.json       # tags de receita
└── icons/              # PNG icons 72..512
```

## 🔧 Convenções específicas

- **Tudo em `index.html`** — CSS `<style>` inline, JS `<script>` inline. Não fragmente sem motivo forte.
- **Backend stubs:** marcado com `// BACKEND STUB:` onde o Firebase entra. Mantenha esses marcadores ao editar.
- **CSS atual usa DM Sans + DM Serif Display.** Migrar pra Bricolage Grotesque (ver §Tipografia abaixo) quando refatorar — não criar deuda de fonte misturando as duas.
- **Paleta atual usa `#386A20`/`#2A5C30`/`#B7F397`.** Já está MUITO próximo do novo sistema (`--verde-folha #2D5F2F`, `--verde-broto #B8E89A`). Quando migrar, troque hex direto.
- **`catalog.json` e `tags.json` são fonte de verdade.** Edite eles, não hardcode lista no JS.
- **Sempre PT-BR.** Mesmo em mensagens internas/console.
- **Mobile-first.** O app é pensado pra ser usado *dentro do mercado*. Hit targets ≥ 44px sempre.
- **Animações `prefers-reduced-motion`** já estão respeitadas — mantenha.

## ⚠️ Antes de editar

1. Leia este CLAUDE.md inteiro.
2. Abra o sistema visual em [Mise — Design System.html](./Mise%20%E2%80%94%20Design%20System.html) (ou local).
3. Use os tokens CSS do bloco abaixo — **nunca invente cor, fonte ou espaçamento**.
4. Se faltar algo do sistema pra implementar a feature, **pergunte antes de improvisar**.

---

# 🎨 Mise — Design System

> Anexe este bloco ao seu `CLAUDE.md` existente em ambos os repos
> (`listinha` e `listinha-landing`). Sistema completo: marca, cores, tipo,
> componentes, tom de voz. Referência visual:
> [Mise — Design System.html](./Mise%20%E2%80%94%20Design%20System.html)

---

## 🧠 Filosofia (leia primeiro)

Mise é um app de lista de compras pra quem cozinha de verdade.
Tom: **prático, direto, anti-frescura**. Caseiro mas sem ser fofo.
Bem-humorado mas sem ser palhaço. Brasil de verdade — `Bora?`, `Tá show`.

**Quando em dúvida:**
- útil ganha de bonito
- pergunta curta ganha de afirmação longa
- "você" ganha de "o usuário"
- 1 cor primária ganha de 4 cores semânticas

---


## 🎯 Posicionamento

> **A oportunidade real do Mise é reduzir a carga mental alimentar da casa.**

Lista de compras é a tarefa visível. O que o Mise resolve de verdade é a **fadiga de decidir** — o que cozinhar, o que tem em casa, o que falta, o que comprar.

### Dois posicionamentos

| | Frase | Onde aparece |
|---|---|---|
| **Pra fora** (público) | "Cozinha em paz, do seu jeito." | Hero, app store, posts, ads |
| **Pra dentro** (time) | "Cozinha em piloto automático." | Decisões de produto, PRDs, conversas internas |

### Filtro de decisão para qualquer feature

Pergunta nessa ordem:
1. Isso **elimina** uma decisão? → ✓ priorize
2. Isso **automatiza** uma decisão recorrente? → ✓ inclua
3. Isso **pede** uma decisão nova ao usuário? → ✗ corta ou esconde
4. Isso **adiciona** trabalho manual recorrente? → ✗ descarta

### Frases-âncora (use em blog, posts, copy)

- **A cozinha não devia te custar tanta cabeça.** _(carga mental)_
- **Menos decisões. Mais comida.** _(economia cognitiva)_
- **Você não esquece o alho. O sistema esquece.** _(automação assumida)_
- **Sua cozinha em piloto automático — sem app de IA, sem frescura.** _(anti-hype)_
- **O sistema operacional da sua cozinha.** _(home OS)_
- **A despensa lembra. O plano se monta. A lista aparece.** _(features em ritmo)_
- **Comprar mercado virou planilha. Não devia.** _(contra complexidade)_
- **Pare de decidir o que comprar. Comece a cozinhar.** _(CTA)_

---

## 🚫 O que o Mise NÃO é

Definir o que não somos protege o produto de bons PRs com más ideias. Quando alguém propõe uma feature da lista abaixo, a resposta é **não**.

- **❌ Rede social de cozinha** — Sem feed, follow, like, comentário, perfil público.
- **❌ App de IA** — IA usa quando serve (sugestão, autocomplete, scan). Nunca vendemos IA.
- **❌ Marketplace** — Não vendemos comida, não fazemos delivery.
- **❌ Gamificação** — Sem streak, badge, ranking. Cozinhar já é a recompensa.
- **❌ Receita fotogênica** — Foto não importa por padrão. Ingrediente importa.
- **❌ Coach nutricional** — Não contamos caloria, não julgamos comida.

### Paisagem competitiva (como respondemos)

| Concorrente | O que eles são | O que somos a mais |
|---|---|---|
| **Samsung Food** | Completo + IA pesada | Leve, sem login Samsung, sem foto-receita |
| **Paprika** | Receitas + pantry, foco em chef | Cozinha do dia a dia, não chef de fim de semana |
| **AnyList** | Listas compartilhadas | Despensa + receitas integradas |
| **Cooklist** | Pantry + receita + lista | Brasileiro, mais leve, sem feed social |
| **Mealime** | Planejamento + receita | Despensa é o coração — sem ela, não somos |
| **Bring!** | Lista rápida + social + marcas | Sem patrocínio, sem marketplace |
| **Notion** | Customização total | Funciona em 1 minuto, sem montar template |

---

## ⚡ Regras de UX duras

Toda ação central tem que caber em **≤ 3 toques**. Se passar disso, o fluxo precisa ser repensado, não polido.

### 5 regras que valem mais que opinião

1. **≤ 3 toques pra qualquer ação central.** Adicionar item, marcar comprado, gerar lista. Se passar disso, refatora — não adiciona um tutorial.
2. **Autocomplete sempre.** Toda lista (item, receita, ingrediente, loja) tem autocomplete. Digitar do zero é último recurso.
3. **Entrada manual é morte.** Se uma feature pede pra o usuário digitar toda semana, está errado. Soluções: sugestão, repetição, scan, voz.
4. **Automação é religião.** Marcou comprado? Desconta da despensa. Plano feito? Gera lista. Nunca peça "salvar".
5. **Voz é ambição (V2).** "Acabou o leite" deveria virar item sem abrir o app. Não é V1, mas todo design deve deixar a porta aberta.

### Como testar uma tela antes de merge

1. Em quantos toques o usuário completa a ação principal? *Mais de 3 → volta pra prancheta.*
2. Tem campo de texto livre obrigatório? *Substitua por autocomplete ou sugestão.*
3. Eu uso isso TODA semana? *Se sim, tem que ser quase invisível.*
4. O que acontece se eu não fizer nada? *O Mise sugere, não exige. Inação é estado válido.*


## 🎨 Cores (tokens CSS)

Cole **tudo** no `:root`. Não invente cores fora desta lista.

```css
:root {
  /* Verdes — primário e estados ativos */
  --verde-folha:   #2D5F2F;   /* logo, headlines, CTA primário, links */
  --verde-musgo:   #3E7E40;   /* hover, eyebrows, ícones secundários */
  --verde-broto:   #B8E89A;   /* badge, item ativo, qty pill */
  --verde-claro:   #E8F3DD;   /* fundo de bloco verde sutil */

  /* Neutros quentes (creme — NUNCA branco puro fora de inputs/modals) */
  --creme:         #F5F1E8;   /* fundo da página, app shell */
  --papel:         #FBF9F2;   /* surface de cards, list items */
  --papel-2:       #F0EBDE;   /* hover surface, bloco sutil */

  /* Texto e linhas */
  --carvao:        #1A1D17;   /* texto principal */
  --carvao-2:      #5C5E55;   /* texto secundário */
  --carvao-3:      #8E8E82;   /* hint, placeholder, micro */
  --linha:         #E5E2D6;   /* borda padrão */
  --linha-2:       #D4D0BF;   /* borda de input/chip */

  /* Acentos semânticos — use com PARCIMÔNIA */
  --tomate:        #C8472E;   /* erro, delete, esgotado */
  --tomate-claro:  #FBE8E1;   /* fundo de erro */
  --manteiga:      #E8B547;   /* aviso "tá acabando" */
  --manteiga-claro:#FBF1D8;   /* sugestão suave */
}
```

**Regras de cor:**
- 1 verde primário por tela como CTA. Nunca 2 verde-folha brigando.
- Tomate é o único vermelho. Nada de `#FF0000`, `crimson`, etc.
- Roxo, azul, laranja **estão proibidos**. Se sentir falta de cor, use mais espaço.
- Backgrounds escuros: `--carvao` (#1A1D17), nunca preto puro.

---

## ✏️ Tipografia

**Uma família só: Bricolage Grotesque** (variable 300–800).
Instrument Serif para citações curtas. JetBrains Mono para labels técnicos.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
:root {
  --fonte-display: 'Bricolage Grotesque', system-ui, sans-serif;
  --fonte-texto:   'Bricolage Grotesque', system-ui, sans-serif;
  --fonte-serif:   'Instrument Serif', Georgia, serif;
  --fonte-mono:    'JetBrains Mono', ui-monospace, Menlo, monospace;
}

body {
  font-family: var(--fonte-texto);
  font-size: 16px;
  line-height: 1.55;
  color: var(--carvao);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--fonte-display);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
  text-wrap: balance;
}
```

**Escala:**

| token       | tamanho               | peso | line-height | uso                            |
| ----------- | --------------------- | ---- | ----------- | ------------------------------ |
| `--t-mega`  | clamp(56px,8vw,112px) | 600  | 1.15        | hero landing                   |
| `--t-h1`    | clamp(40px,5.5vw,72px)| 600  | 1.1         | título de página               |
| `--t-h2`    | clamp(28px,3.5vw,44px)| 600  | 1.15        | seção                          |
| `--t-h3`    | 22px                  | 600  | 1.2         | card title                     |
| `--t-h4`    | 17px                  | 600  | 1.3         | item de lista, lead            |
| `--t-body`  | 16px                  | 400  | 1.55        | texto                          |
| `--t-pe`    | 14px                  | 400  | 1.5         | small, captions                |
| `--t-micro` | 12px                  | 500  | 1.4         | mono uppercase, metadata       |
| `--t-eyebrow`| 11px                 | 700  | 1.4         | UPPER ls 0.15em, antes de h2   |

**Regras:**
- Tudo > 22px usa `letter-spacing: -0.025em`
- `text-wrap: balance` em headlines, `text-wrap: pretty` em parágrafos
- Itálico = `<em>` em Instrument Serif (só usar pra ênfase real, não decoração)
- Nunca use Helvetica, Arial, Inter, Roboto, system-ui sozinha

---

## 🥣 Logo · cumbuca

Mise tem **dois marks** que dividem o trabalho — não escolha um, use o certo pro contexto.

### Primary mark · cumbuca única

Cumbuca + um ingrediente flutuando acima. Funciona em **qualquer escala**, do favicon ao splash. **Use sempre** que precisar de uma marca compacta.

```html
<svg viewBox="0 0 24 24" fill="none" width="32" height="32">
  <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="#2D5F2F"/>
  <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
</svg>
```

### Extended mark · trio (3 cumbucas)

Três cumbucas em fila. **Só use em ≥ 80px de largura** — em tamanhos menores vira pontinhos.
Reservado pra hero, splash, posters, packaging.

```html
<svg viewBox="0 0 60 24" fill="none" width="120" height="48">
  <path d="M 1 11.5 L 17 11.5 Q 17 20.5 9 20.5 Q 1 20.5 1 11.5 Z" fill="#2D5F2F"/>
  <circle cx="9" cy="5" r="2" fill="#B8E89A"/>
  <path d="M 22 11.5 L 38 11.5 Q 38 20.5 30 20.5 Q 22 20.5 22 11.5 Z" fill="#2D5F2F"/>
  <circle cx="30" cy="5" r="2" fill="#B8E89A"/>
  <path d="M 43 11.5 L 59 11.5 Q 59 20.5 51 20.5 Q 43 20.5 43 11.5 Z" fill="#2D5F2F"/>
  <circle cx="51" cy="5" r="2" fill="#B8E89A"/>
</svg>
```

### Lockup oficial (mark + wordmark)

```html
<a href="/" class="brand">
  <div class="brand-mark">
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="#FBF9F2"/>
      <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
    </svg>
  </div>
  <span class="brand-name">Mise</span>
</a>
```

```css
.brand { display: flex; align-items: center; gap: 10px; }
.brand-mark {
  width: 32px; height: 32px;
  background: var(--verde-folha);
  border-radius: 9px;
  display: grid; place-items: center;
}
.brand-name {
  font-family: 'Bricolage Grotesque', system-ui, sans-serif;
  font-weight: 600; font-size: 19px;
  letter-spacing: -0.025em;
  color: var(--carvao);
}
```

### Quando usar qual

| Tamanho     | Mark           | Contexto                                 |
| ----------- | -------------- | ---------------------------------------- |
| **≥ 80px**  | trio           | hero da landing, splash, posters         |
| **40–80px** | cumbuca única  | app icon, header de tela, nav            |
| **24–40px** | cumbuca única  | brand dentro de lockup, tab bar          |
| **16–24px** | cumbuca única  | favicon, badge, mini-lockup              |

### Variações de cor

1. **Primary** — cumbuca `var(--papel)` + ingrediente `var(--verde-broto)` sobre fundo `var(--verde-folha)`
2. **Inverse** — cumbuca `var(--papel)` + ingrediente `var(--verde-broto)` sobre fundo escuro
3. **Mono** — cumbuca e ingrediente da mesma cor (impressão, carimbo)

Nunca pinte de outras combinações. Se faltar uma variação, peça.

## 📐 Espaço, raios, sombras

**Base 4.** Se você precisa de 13px, você não precisa.

```css
:root {
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 20px; --s-6: 24px; --s-7: 32px; --s-8: 40px;
  --s-9: 56px; --s-10: 80px; --s-11: 120px;

  --r-xs: 6px;   /* chip, checkbox */
  --r-sm: 10px;  /* qty pill */
  --r-md: 14px;  /* card, input, modal sheet */
  --r-lg: 20px;  /* modal grande */
  --r-xl: 28px;  /* bottom sheet */
  --r-pill: 999px; /* SEMPRE em botões e chips */

  --sh-1: 0 1px 2px rgba(26,29,23,0.04), 0 1px 0 var(--linha);
  --sh-2: 0 2px 8px rgba(26,29,23,0.06), 0 1px 2px rgba(26,29,23,0.04);
  --sh-3: 0 8px 24px rgba(26,29,23,0.08), 0 2px 4px rgba(26,29,23,0.04);
  --sh-4: 0 20px 60px rgba(26,29,23,0.12), 0 4px 8px rgba(26,29,23,0.04);
}
```

- `sh-1` cards estáticos · `sh-2` cards em hover
- `sh-3` dropdowns e popovers · `sh-4` modais e bottom sheets

---

## 🧩 Componentes

### Botões — sempre `border-radius: 999px`

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 22px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 15px; font-weight: 500;
  border: 1.5px solid transparent;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: transform .12s, background .15s, border-color .15s;
}
.btn:active           { transform: scale(0.98); }
.btn-primary          { background: var(--verde-folha); color: var(--papel); }
.btn-primary:hover    { background: var(--verde-musgo); }
.btn-secondary        { background: var(--verde-broto); color: #1F4B22; }
.btn-secondary:hover  { background: #A4D984; }
.btn-ghost            { background: transparent; color: var(--verde-folha); border-color: var(--verde-folha); }
.btn-ghost:hover      { background: var(--verde-claro); }
.btn-quiet            { background: transparent; color: var(--carvao-2); }
.btn-quiet:hover      { color: var(--carvao); background: var(--papel-2); }
.btn-danger           { background: var(--tomate); color: var(--papel); }
.btn-sm  { height: 36px; padding: 0 16px; font-size: 13px; }
.btn-lg  { height: 52px; padding: 0 28px; font-size: 16px; }
.btn-icon{ width: 44px; padding: 0; justify-content: center; }
```

**Regras:**
- **1 primário por tela.** Se tem 2, um vira `ghost` ou `quiet`.
- Texto **sem ponto final**. "Comece grátis", "Excluir", "Adicionar à lista".
- Ícone à esquerda em CTAs de ação, à direita em CTAs de navegação (`→`).

```jsx
// React
function Button({ variant = 'primary', size, icon, children, ...props }) {
  const cls = ['btn', `btn-${variant}`, size && `btn-${size}`].filter(Boolean).join(' ');
  return (
    <button className={cls} {...props}>
      {icon && <span className="btn-icon-slot">{icon}</span>}
      {children}
    </button>
  );
}
```

### Chips — para filtros, despensa, tags

```css
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  background: var(--papel);
  border: 1px solid var(--linha-2);
  color: var(--carvao);
  cursor: pointer;
}
.chip.on   { background: var(--verde-broto); border-color: var(--verde-folha); color: #1F4B22; font-weight: 600; }
.chip.off  { background: var(--tomate-claro); border-color: #F4CFC1; color: #842716; text-decoration: line-through; }
.chip.add  { background: transparent; border: 1px dashed var(--linha-2); color: var(--carvao-3); }
```

### Inputs

```css
.input {
  height: 46px;
  border-radius: 14px;
  border: 1.5px solid var(--linha-2);
  background: var(--papel);
  padding: 0 14px;
  font-size: 15px;
  color: var(--carvao);
  font-family: inherit;
  outline: none;
  transition: border-color .15s, box-shadow .15s, background .15s;
}
.input:focus {
  border-color: var(--verde-folha);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(45,95,47,0.12);
}
.input::placeholder { color: var(--carvao-3); }
```

### Item de lista (componente central do app)

```html
<div class="list-item">
  <div class="li-qty">2x</div>
  <div class="li-info">
    <div class="li-name">Alho</div>
    <div class="li-meta">Hortifruti · Atacadão</div>
  </div>
  <div class="li-check"></div>           <!-- por marcar -->
  <!-- ou <div class="li-check chk"></div> quando marcado -->
</div>
```

```css
.list-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 14px;
  background: var(--papel);
  border-radius: 14px;
  border: 1px solid var(--linha);
}
.li-qty {
  min-width: 34px; height: 34px;
  background: var(--verde-broto);
  border-radius: 9px;
  display: grid; place-items: center;
  font-weight: 600; font-size: 13px; color: #1F4B22;
}
.list-item.done .li-qty  { background: var(--linha); color: var(--carvao-3); }
.list-item.done .li-name { color: var(--carvao-3); text-decoration: line-through; }
.li-info  { flex: 1; min-width: 0; }
.li-name  { font-size: 15px; color: var(--carvao); }
.li-meta  { font-size: 13px; color: var(--carvao-3); }
.li-check { width: 26px; height: 26px; border-radius: 8px; border: 2px solid var(--linha-2); flex-shrink: 0; }
.li-check.chk { background: var(--verde-folha); border-color: var(--verde-folha); position: relative; }
.li-check.chk::after {
  content: '';
  position: absolute; inset: 5px 6px 5px 7px;
  border-right: 2.5px solid var(--papel);
  border-bottom: 2.5px solid var(--papel);
  transform: rotate(42deg) translate(0, -2px);
}
```

### Badges

```css
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: var(--verde-broto);
  color: #1F4B22;
}
.badge.warn   { background: var(--manteiga-claro); color: #8A6500; }
.badge.danger { background: var(--tomate-claro); color: #842716; }
.badge.quiet  { background: var(--papel-2); color: var(--carvao-2); }
```

---

## 🔣 Iconografia — só Lucide

**Regras absolutas:**
- Source: [Lucide](https://lucide.dev). Nunca desenhe ícones do zero.
- Line, nunca filled (exceto check dentro de qty-pill).
- Stroke **1.8px** a 24px · 2.2px a 32px+.
- Tamanhos permitidos: 16, 18, 20, 24, 28, 32. Nada de 19, 21.
- `color: currentColor` sempre.
- Emoji é proibido em ícones funcionais. Permitido em landing/empty states com moderação.

### Mapeamento das 4 features:

| Feature           | Lucide          | Uso                            |
| ----------------- | --------------- | ------------------------------ |
| Lista de compras  | `shopping-cart` | tab principal, hero da landing |
| Despensa          | `archive`       | tab, sugestões                 |
| Receitas          | `book-open`     | tab, modal de receita          |
| Plano da semana   | `calendar-days` | tab, weekly view               |
| **Marca / brand**  | _cumbuca_       | logo mark, splash, favicon — VER §Logo |

### SVGs prontos (24×24, stroke 1.8):

```html
<!-- shopping-cart -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
  <circle cx="9" cy="21" r="1"/>
  <circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
</svg>

<!-- archive (despensa) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
  <rect x="2" y="4" width="20" height="5" rx="1"/>
  <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/>
  <line x1="10" y1="13" x2="14" y2="13"/>
</svg>

<!-- book-open (receitas) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
</svg>

<!-- calendar-days (plano) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <path d="M8 14h2M14 14h2M8 18h2M14 18h2"/>
</svg>

<!-- BRAND mark (cumbuca + ingrediente) -->
<svg viewBox="0 0 24 24" fill="none" width="24" height="24">
  <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor"/>
  <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
</svg>

<!-- TRIO (extended, ≥80px wide) -->
<svg viewBox="0 0 60 24" fill="none" width="60" height="24">
  <path d="M 1 11.5 L 17 11.5 Q 17 20.5 9 20.5 Q 1 20.5 1 11.5 Z" fill="currentColor"/>
  <circle cx="9" cy="5" r="2" fill="#B8E89A"/>
  <path d="M 22 11.5 L 38 11.5 Q 38 20.5 30 20.5 Q 22 20.5 22 11.5 Z" fill="currentColor"/>
  <circle cx="30" cy="5" r="2" fill="#B8E89A"/>
  <path d="M 43 11.5 L 59 11.5 Q 59 20.5 51 20.5 Q 43 20.5 43 11.5 Z" fill="currentColor"/>
  <circle cx="51" cy="5" r="2" fill="#B8E89A"/>
</svg>
```

```jsx
// React — ícone padronizado
function Icon({ name, size = 24, ...rest }) {
  const stroke = size >= 32 ? 2.2 : 1.8;
  // import { ShoppingCart, Archive, BookOpen, CalendarDays, ShoppingBag } from 'lucide-react';
  // ou inline SVGs acima
  return <svg width={size} height={size} stroke="currentColor" strokeWidth={stroke} {...rest}/>;
}
```

---

## 🗣️ Tom de voz

**Imagina o Mise como um amigo no zap: direto, com humor seco quando cabe, sem rodeio.**

### Regras

| #   | Regra                                                                                       |
| --- | ------------------------------------------------------------------------------------------- |
| A   | **Sem ponto final** em botões e títulos curtos. "Comece grátis" não "Comece grátis."        |
| B   | **Pergunta > afirmação** quando cabe. "Bora?" / "Apagar mesmo?" / "Já comprou?"             |
| C   | **Números secos.** "4 itens" não "Você tem 4 itens na sua lista".                           |
| D   | **Emoji: 0 ou 1 por tela.** Nunca em alertas, erros, listas funcionais.                     |
| E   | **Erros falam como gente.** "Não rolou agora" não "Falha no servidor".                      |
| F   | **"Você" sem firula.** Nunca "Sr./Sra.", "prezado", "caro usuário".                         |
| G   | **Verbo curto.** "Salvar" > "Salvar receita" > "Salvar nova receita no caderno"             |

### ✓ Faça assim

- "Lista pronta. Bora?"
- "Esqueceu o alho de novo? Aqui não."
- "Tudo no lugar. Como deveria ser."
- "Sua despensa tá vazia. Hora de fazer mercado."
- "4 itens. Faltam 2."
- "Faltou o alho da sua despensa. Adicionar?"
- "Email ou senha não bateu. Tenta de novo."
- "Apagar essa receita mesmo?"
- "Comece grátis →"

### ✗ Evite

- "Sua experiência culinária organizada."          *(frescura corporativa)*
- "Adicione itens à sua lista de forma inteligente." *(SaaS genérico)*
- "Olá! Que tal organizarmos sua semana?"          *(infantil/forçado)*
- "⚡ Boost your kitchen game! 🍳"                 *(tech bro)*
- "Credenciais inválidas."                         *(corporativo)*
- "Erro 401: usuário não autenticado."             *(técnico não traduzido)*
- "Comece sua jornada culinária hoje mesmo."       *(coach-speak)*

### Biblioteca de microcopy (use como referência)

| Contexto              | ✓ Use                                       | ✗ Evite                              |
| --------------------- | ------------------------------------------- | ------------------------------------ |
| Botão salvar          | Salvar                                      | Salvar alterações no item            |
| Empty list            | Nenhum item. Bora encher?                   | Sua lista está vazia.                |
| Empty pantry          | Despensa vazia. O que sempre tem em casa?   | Você não possui itens no inventário. |
| Empty recipes         | Nenhuma receita salva. Adicione a primeira. | Lista de receitas vazia.             |
| Confirmar delete      | Apagar mesmo?                               | Tem certeza?                         |
| Erro login            | Email ou senha não bateu. Tenta de novo.    | Credenciais inválidas.               |
| Erro genérico         | Não rolou agora. Tenta de novo daqui pouco. | Erro inesperado no servidor.         |
| Loading               | Carregando…                                 | Aguarde, processando solicitação…    |
| Item adicionado       | Pronto, na lista.                           | Item adicionado com sucesso.         |
| Item check            | (sem toast — animação é suficiente)         | "Item marcado como comprado!"        |
| Sugestão              | Faltou X. Adicionar?                        | Detectamos um item ausente.          |
| CTA landing principal | Comece grátis →                             | Crie sua conta gratuita agora        |

---

## 🚫 Don'ts gerais

1. **Não use Helvetica/Arial/Inter/Roboto.** Bricolage Grotesque é a única.
2. **Não invente cores.** Use os tokens. Se faltar, peça antes de pintar.
3. **Não use 4 cores semânticas por feature.** Tudo é verde + ícone + nome.
4. **Não use sombras grandes em fundos creme.** Vira banner de e-commerce ruim.
5. **Não use border-radius assimétrico** (ex: `border-radius: 14px 14px 14px 0`).
6. **Não use gradientes** exceto no splash (`var(--verde-folha) sólido`).
7. **Não use uppercase em parágrafos.** UPPER só em eyebrows (`--t-eyebrow`).
8. **Não invente ícones.** Lucide ou peça.
9. **Não escreva "usuário".** Escreva "você" ou "pessoa".
10. **Não traduza errors técnicos pro usuário.** Reescreva como humano.

---

## 📦 Estrutura recomendada para novos arquivos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mise — {Página}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap" rel="stylesheet">
  <style>
    /* :root com tokens (cole o bloco completo do topo deste arquivo) */
  </style>
</head>
<body>
  <!-- conteúdo -->
</body>
</html>
```

```jsx
// React
import { ShoppingCart, Archive, BookOpen, CalendarDays } from 'lucide-react';

const tokens = {
  verde: { folha: '#2D5F2F', musgo: '#3E7E40', broto: '#B8E89A', claro: '#E8F3DD' },
  papel: { creme: '#F5F1E8', superficie: '#FBF9F2', alt: '#F0EBDE' },
  texto: { primario: '#1A1D17', secundario: '#5C5E55', hint: '#8E8E82' },
  linha: { padrao: '#E5E2D6', forte: '#D4D0BF' },
  semantico: { erro: '#C8472E', aviso: '#E8B547' },
};
```

---

## 📍 Onde tá o quê

- **Sistema visual completo:** [Mise — Design System.html](./Mise%20%E2%80%94%20Design%20System.html)
- **Logo assets:** [Mise — Logo Assets.html](./Mise%20%E2%80%94%20Logo%20Assets.html) (SVGs e PNGs prontos)
- **App:** `gugaffino/listinha` · `index.html` (PWA vanilla, será renomeado pra `mise`)
- **Landing:** `gugaffino/listinha-landing` · `index.html` + `styles.css` (será renomeado pra `mise-landing`)
- **Dados:** `gugaffino/listinha/data/catalog.json` (corredores) e `data/tags.json` (tags de receita)

Quando for alterar UI, **antes leia o sistema visual** e cole os tokens. Se algo do design system não couber, fale — não improvise.
