# Listinha Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static landing page that converts visitors into Listinha PWA users through problem-first storytelling, clean feature demos, and founder authenticity.

**Architecture:** Single-page static HTML/CSS/JS — no framework, no build step. One `index.html`, one `styles.css`, one `script.js`. Vercel serves it directly. CSS is mobile-first with `min-width` media queries. Scroll animations via IntersectionObserver.

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla JS (ES2020), Vercel static hosting

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | All page sections, semantic HTML |
| `styles.css` | Design tokens, reset, all component styles (mobile-first) |
| `script.js` | Smooth scroll for anchor links, IntersectionObserver scroll reveals |
| `vercel.json` | Cache headers for static assets |
| `.gitignore` | Ignores `.superpowers/`, OS files |

---

## Task 1: Project Scaffold + Design Tokens

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `vercel.json`
- Create: `.gitignore`

- [ ] **Step 1: Create `.gitignore`**

```
.superpowers/
.DS_Store
Thumbs.db
```

- [ ] **Step 2: Create `vercel.json`**

```json
{
  "headers": [
    {
      "source": "/styles.css",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/script.js",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

- [ ] **Step 3: Create `styles.css` with design tokens and reset**

```css
/* ── Design tokens ─────────────────────────────────────── */
:root {
  --dark:        #1a1a2e;
  --dark-2:      #16213e;
  --green:       #63dc96;
  --green-dark:  #2daa60;
  --blue:        #4f7cff;
  --yellow:      #e08c00;
  --purple:      #7c3aed;

  --text-primary:   #1a1a1a;
  --text-secondary: #666;
  --text-muted:     #aaa;
  --bg:             #ffffff;
  --bg-soft:        #f7f7f7;
  --border:         #ebebeb;

  --radius-sm:  8px;
  --radius-md:  14px;
  --radius-lg:  20px;

  --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.12);

  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;

  --max-width: 1080px;
  --section-pad: 80px 20px;
}

/* ── Reset ──────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body { font-family: var(--font); color: var(--text-primary); background: var(--bg); line-height: 1.6; }
img, svg { display: block; max-width: 100%; }
button { cursor: pointer; font-family: inherit; }
a { color: inherit; text-decoration: none; }

/* ── Utilities ──────────────────────────────────────────── */
.container { width: 100%; max-width: var(--max-width); margin: 0 auto; padding: 0 20px; }

.eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--dark);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  border: none;
  transition: opacity 0.15s;
}
.btn-primary:hover { opacity: 0.88; }

.btn-primary.green {
  background: var(--green);
  color: var(--dark);
}

/* ── Scroll reveal ──────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```

- [ ] **Step 4: Create `index.html` skeleton**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Listinha — o app que conecta sua despensa, receitas e lista de compras. Grátis.">
  <title>Listinha — Nunca mais falte nada na sua cozinha</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- NAV -->
  <header id="nav"></header>

  <!-- HERO -->
  <section id="hero"></section>

  <!-- DORES -->
  <section id="dores"></section>

  <!-- FEATURES -->
  <section id="features"></section>

  <!-- FUNDADOR + CTA FINAL -->
  <section id="fundador"></section>

  <!-- FOOTER -->
  <footer id="footer"></footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 5: Create `script.js` placeholder**

```js
// Scroll reveal — populated in Task 8
```

- [ ] **Step 6: Open `index.html` in browser and confirm blank white page loads without console errors**

- [ ] **Step 7: Commit**

```bash
git add index.html styles.css script.js vercel.json .gitignore
git commit -m "feat: project scaffold with design tokens"
```

---

## Task 2: Navigation

**Files:**
- Modify: `index.html` — `#nav` section
- Modify: `styles.css` — append nav styles

- [ ] **Step 1: Replace `<header id="nav">` with full markup**

```html
<header class="nav">
  <div class="container nav__inner">
    <a href="/" class="nav__logo">Listinha</a>
    <a href="https://listinha-puce.vercel.app" class="btn-primary nav__cta" target="_blank" rel="noopener">
      Comece grátis →
    </a>
  </div>
</header>
```

- [ ] **Step 2: Append nav styles to `styles.css`**

```css
/* ── Nav ────────────────────────────────────────────────── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav__logo {
  font-size: 18px;
  font-weight: 800;
  color: var(--dark);
  letter-spacing: -0.5px;
}

.nav__cta {
  font-size: 13px;
  padding: 9px 18px;
}
```

- [ ] **Step 3: Verify in browser — nav sticks on scroll, logo left, CTA right, frosted glass effect visible when scrolling over content**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sticky navigation with logo and CTA"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — `#hero` section
- Modify: `styles.css` — append hero styles

- [ ] **Step 1: Replace `<section id="hero">` with full markup**

```html
<section class="hero">
  <div class="container hero__inner">
    <div class="hero__content">
      <span class="eyebrow" style="color: var(--blue)">Listinha</span>
      <div class="hero__trust-tag">✓ 100% gratuito</div>
      <h1 class="hero__headline">
        Já foi ao mercado e voltou sem o que
        <span class="hero__underline">precisava?</span>
      </h1>
      <p class="hero__sub">
        O app que conecta sua despensa, receitas e lista de compras —
        para nunca mais faltar nada.
      </p>
      <div class="hero__actions">
        <a href="https://listinha-puce.vercel.app" class="btn-primary" target="_blank" rel="noopener">
          Comece grátis →
        </a>
        <a href="#features" class="hero__link">Ver como funciona</a>
      </div>
    </div>

    <div class="hero__mockup" aria-hidden="true">
      <div class="phone">
        <div class="phone__screen">
          <div class="phone__header">Lista da semana</div>
          <div class="phone__item phone__item--done">
            <span class="phone__check phone__check--done"></span>
            <span>Leite integral</span>
            <span class="phone__qty">2x</span>
          </div>
          <div class="phone__item phone__item--done">
            <span class="phone__check phone__check--done"></span>
            <span>Ovos</span>
            <span class="phone__qty">12un</span>
          </div>
          <div class="phone__item">
            <span class="phone__check"></span>
            <span>Azeite extra virgem</span>
            <span class="phone__qty">1x</span>
          </div>
          <div class="phone__item">
            <span class="phone__check"></span>
            <span>Alho</span>
          </div>
          <div class="phone__item">
            <span class="phone__check"></span>
            <span>Peito de frango</span>
            <span class="phone__qty">1kg</span>
          </div>
          <div class="phone__share">
            <span>📤</span> Compartilhar lista
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append hero styles to `styles.css`**

```css
/* ── Hero ───────────────────────────────────────────────── */
.hero {
  padding: 64px 0 48px;
  overflow: hidden;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
}

.hero__trust-tag {
  display: inline-block;
  background: #f0fff5;
  color: var(--green-dark);
  font-size: 12px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid #c3f0d5;
  margin-bottom: 16px;
}

.hero__headline {
  font-size: clamp(28px, 5vw, 46px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.5px;
  color: var(--text-primary);
  margin-bottom: 16px;
  max-width: 560px;
}

.hero__underline {
  text-decoration: underline;
  text-decoration-color: var(--green);
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
}

.hero__sub {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 32px;
  line-height: 1.65;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.hero__link {
  font-size: 14px;
  color: var(--text-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.hero__link:hover { color: var(--text-secondary); }

/* Phone mockup */
.phone {
  width: 220px;
  flex-shrink: 0;
  background: var(--bg);
  border-radius: 32px;
  border: 2px solid var(--border);
  box-shadow: var(--shadow-lg);
  padding: 24px 16px 20px;
  position: relative;
}
.phone::before {
  content: '';
  display: block;
  width: 60px;
  height: 6px;
  background: var(--border);
  border-radius: 3px;
  margin: 0 auto 20px;
}

.phone__screen { display: flex; flex-direction: column; gap: 0; }

.phone__header {
  font-size: 12px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 12px;
}

.phone__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 12px;
  color: var(--text-primary);
}
.phone__item:last-of-type { border-bottom: none; }
.phone__item--done { color: var(--text-muted); }
.phone__item--done span:not(.phone__check):not(.phone__qty) {
  text-decoration: line-through;
}

.phone__check {
  width: 15px;
  height: 15px;
  border-radius: 4px;
  border: 2px solid var(--border);
  flex-shrink: 0;
}
.phone__check--done {
  background: var(--green-dark);
  border-color: var(--green-dark);
}

.phone__qty {
  margin-left: auto;
  font-size: 11px;
  color: var(--text-muted);
}

.phone__share {
  margin-top: 12px;
  background: #eef2ff;
  color: var(--blue);
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  padding: 7px;
  border-radius: var(--radius-sm);
}

/* Desktop: side-by-side */
@media (min-width: 768px) {
  .hero { padding: 80px 0 64px; }
  .hero__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }
  .phone { width: 240px; }
}
```

- [ ] **Step 3: Verify in browser**
  - Mobile (≤767px): headline full-width, phone mockup below, CTA button easily tappable
  - Desktop (≥768px): content left, phone mockup right, headline `clamp` scales gracefully

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: hero section with phone mockup"
```

---

## Task 4: Pain Amplification Section

**Files:**
- Modify: `index.html` — `#dores` section
- Modify: `styles.css` — append pain styles

- [ ] **Step 1: Replace `<section id="dores">` with full markup**

```html
<section class="pain">
  <div class="container">
    <div class="pain__header reveal">
      <p class="eyebrow" style="color: #e05252">Você já passou por isso</p>
      <h2 class="pain__headline">
        A cozinha perfeita existe.<br>Só que ela nunca tem o que precisa.
      </h2>
      <p class="pain__sub">Não é falta de organização. É que nenhum app foi feito para a sua rotina.</p>
    </div>

    <div class="pain__grid">
      <div class="pain__card reveal">
        <span class="pain__emoji">🛒</span>
        <h3>Chegou no mercado sem saber o que faltava</h3>
        <p>Você olha a gôndola e tenta lembrar de cabeça. Compra o que acha que precisa. Chega em casa e falta exatamente aquele ingrediente. <em>De novo.</em></p>
      </div>
      <div class="pain__card reveal">
        <span class="pain__emoji">📸</span>
        <h3>"É esse produto aqui mesmo?"</h3>
        <p>Alguém no mercado fica te mandando foto de 3 marcas diferentes perguntando qual é. Você para tudo, responde, e compram errado assim mesmo.</p>
      </div>
      <div class="pain__card reveal">
        <span class="pain__emoji">📋</span>
        <h3>Apps cheios de recursos que você não precisa</h3>
        <p>Fotos bonitas, planejamentos complexos — mas na hora de montar a lista rápida, você ainda abre o bloco de notas.</p>
      </div>
    </div>

    <div class="pain__transition reveal">
      <p class="pain__transition-label">Por isso criei o Listinha</p>
      <h3>Um app que entende <strong>sua cozinha do jeito que ela é.</strong><br>Sem complicação. Sem frescura.</h3>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append pain styles to `styles.css`**

```css
/* ── Pain ───────────────────────────────────────────────── */
.pain {
  padding: var(--section-pad);
  background: var(--bg-soft);
}

.pain__header {
  text-align: center;
  margin-bottom: 48px;
}

.pain__headline {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 12px;
}

.pain__sub {
  font-size: 16px;
  color: var(--text-secondary);
}

.pain__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 32px;
}

.pain__card {
  background: var(--bg);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  box-shadow: var(--shadow-sm);
}

.pain__emoji {
  font-size: 28px;
  display: block;
  margin-bottom: 14px;
}

.pain__card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
}

.pain__card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
}
.pain__card p em { color: var(--text-muted); }

.pain__transition {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark-2) 100%);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  color: #fff;
}

.pain__transition-label {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.pain__transition h3 {
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 700;
  line-height: 1.4;
  color: rgba(255,255,255,0.9);
}
.pain__transition h3 strong {
  color: var(--green);
  font-weight: 800;
}

@media (min-width: 640px) {
  .pain__grid { grid-template-columns: repeat(3, 1fr); }
  .pain__transition { padding: 48px 56px; }
}
```

- [ ] **Step 3: Verify in browser**
  - 3 cards stack on mobile, side-by-side on tablet+
  - Dark transition block renders with green accent on headline

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: pain amplification section"
```

---

## Task 5: Features Section

**Files:**
- Modify: `index.html` — `#features` section
- Modify: `styles.css` — append feature styles

- [ ] **Step 1: Replace `<section id="features">` with full markup**

```html
<section class="features" id="features">
  <div class="container">
    <div class="features__header reveal">
      <p class="eyebrow" style="color: var(--green-dark)">Tudo que você precisa</p>
      <h2 class="features__headline">Uma cozinha organizada começa por aqui.</h2>
      <p class="features__sub">Quatro ferramentas simples que se conversam — para você nunca mais improvisar.</p>
    </div>

    <div class="features__grid">

      <!-- Lista -->
      <div class="feat-card reveal">
        <div class="feat-mockup feat-mockup--lista" aria-hidden="true">
          <div class="fm-header">
            Lista da semana
            <span class="fm-badge fm-badge--blue">📤 Compartilhar</span>
          </div>
          <div class="fm-item fm-item--done"><span class="fm-check fm-check--done"></span><span>Leite integral</span><span class="fm-qty">2x</span></div>
          <div class="fm-item fm-item--done"><span class="fm-check fm-check--done"></span><span>Ovos</span><span class="fm-qty">12un</span></div>
          <div class="fm-item"><span class="fm-check"></span><span>Azeite extra virgem</span><span class="fm-qty">1x</span></div>
          <div class="fm-item"><span class="fm-check"></span><span>Alho</span></div>
          <div class="fm-item"><span class="fm-check"></span><span>Peito de frango</span><span class="fm-qty">1kg</span></div>
        </div>
        <div class="feat-body">
          <span class="feat-tag feat-tag--blue">Lista de compras</span>
          <h3>Compartilhe com um toque. Comprem certo.</h3>
          <p>Crie listas por mercado ou corredor, adicione quem vai às compras e compartilhe direto pelo WhatsApp — sem mensagem, sem foto, sem erro.</p>
          <ul class="feat-bullets">
            <li>Organização por loja ou corredor</li>
            <li>Compartilhamento via WhatsApp</li>
            <li>Histórico de compras anteriores</li>
          </ul>
        </div>
      </div>

      <!-- Despensa -->
      <div class="feat-card reveal">
        <div class="feat-mockup feat-mockup--despensa" aria-hidden="true">
          <div class="fm-header" style="color: var(--yellow)">Minha Despensa</div>
          <div class="fm-tags">
            <span class="fm-tag-item">Alho</span>
            <span class="fm-tag-item">Cebola</span>
            <span class="fm-tag-item">Azeite</span>
            <span class="fm-tag-item fm-tag-item--out">Sal</span>
            <span class="fm-tag-item">Ovos</span>
            <span class="fm-tag-item fm-tag-item--out">Farinha de trigo</span>
            <span class="fm-tag-item">Tomate</span>
            <span class="fm-tag-item fm-tag-item--add">+ Adicionar</span>
          </div>
        </div>
        <div class="feat-body">
          <span class="feat-tag feat-tag--yellow">Despensa</span>
          <h3>Sempre tenha o que precisa para cozinhar.</h3>
          <p>Monte sua despensa ideal uma vez. O que acabou fica marcado — na próxima vez que montar a lista, você já sabe exatamente o que comprar.</p>
          <ul class="feat-bullets">
            <li>Sugestões para montar uma despensa completa</li>
            <li>Adicione itens à lista com um toque</li>
            <li>Dicas de como melhorar sua despensa</li>
          </ul>
        </div>
      </div>

      <!-- Receitas -->
      <div class="feat-card reveal">
        <div class="feat-mockup feat-mockup--receitas" aria-hidden="true">
          <div class="fm-header" style="color: #a07830; font-style: italic">Minhas Receitas</div>
          <div class="fm-recipe-item"><span>Macarrão ao sugo</span><span class="fm-source">Instagram</span></div>
          <div class="fm-recipe-item"><span>Frango grelhado com limão</span><span class="fm-source">YouTube</span></div>
          <div class="fm-recipe-item"><span>Bolo de cenoura da vovó</span><span class="fm-source">manual</span></div>
          <div class="fm-recipe-item"><span>Salada caesar</span><span class="fm-source">Google</span></div>
        </div>
        <div class="feat-body">
          <span class="feat-tag feat-tag--green">Receitas</span>
          <h3>O caderno de receitas que você nunca teve.</h3>
          <p>Salve de qualquer lugar — Instagram, YouTube, Google ou digitando na mão. Simples como uma lista, sem fotos que atrapalham. Só o que importa: o nome e os ingredientes.</p>
          <ul class="feat-bullets">
            <li>Captura com um link de qualquer site</li>
            <li>Ingredientes integrados com a lista</li>
            <li>Visual limpo, sem distração</li>
          </ul>
        </div>
      </div>

      <!-- Plano da semana -->
      <div class="feat-card reveal">
        <div class="feat-mockup feat-mockup--plano" aria-hidden="true">
          <div class="fm-header" style="color: var(--purple)">
            Plano da Semana
            <span class="fm-badge" style="background:#f0e8ff;color:var(--purple)">→ Gerar lista</span>
          </div>
          <div class="fm-day"><span class="fm-day-label">SEG</span><span>Frango grelhado com limão</span></div>
          <div class="fm-day"><span class="fm-day-label">TER</span><span>Macarrão ao sugo</span></div>
          <div class="fm-day"><span class="fm-day-label">QUA</span><span class="fm-empty">Sem plano</span></div>
          <div class="fm-day"><span class="fm-day-label">QUI</span><span>Salada caesar</span></div>
          <div class="fm-day"><span class="fm-day-label">SEX</span><span>Omelete de legumes</span></div>
        </div>
        <div class="feat-body">
          <span class="feat-tag feat-tag--purple">Plano da Semana</span>
          <h3>Semana planejada, lista pronta.</h3>
          <p>Monte o cardápio da semana com suas receitas salvas. Com um toque, os ingredientes que faltam já vão para a sua lista de compras.</p>
          <ul class="feat-bullets">
            <li>Integrado com suas receitas</li>
            <li>Gera lista de compras automaticamente</li>
            <li>Evita a monotonia das mesmas refeições</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append feature styles to `styles.css`**

```css
/* ── Features ───────────────────────────────────────────── */
.features { padding: var(--section-pad); }

.features__header {
  text-align: center;
  margin-bottom: 52px;
}
.features__headline {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 800;
  margin-bottom: 10px;
}
.features__sub { font-size: 16px; color: var(--text-secondary); }

.features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .features__grid { grid-template-columns: repeat(2, 1fr); }
}

/* Feature card */
.feat-card {
  background: var(--bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Mockup area */
.feat-mockup {
  padding: 24px 24px 0;
  min-height: 160px;
  display: flex;
  flex-direction: column;
}

.feat-mockup--lista  { background: #f7f9ff; border-bottom: 1px solid #e8eeff; }
.feat-mockup--despensa { background: #fffbf0; border-bottom: 1px solid #fde8b0; }
.feat-mockup--receitas { background: #fffef5; border-left: 4px solid #d4a843; border-bottom: 1px solid #e8e0c8; }
.feat-mockup--plano  { background: #faf5ff; border-bottom: 1px solid #e0ccff; }

.fm-header {
  font-size: 11px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fm-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 20px;
  background: #eef2ff;
  color: var(--blue);
}

.fm-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0,0,0,0.04);
  font-size: 11px;
  color: var(--text-primary);
}
.fm-item:last-child { border-bottom: none; }
.fm-item--done { color: var(--text-muted); }
.fm-item--done span:not(.fm-check):not(.fm-qty) { text-decoration: line-through; }

.fm-check {
  width: 13px; height: 13px;
  border-radius: 3px;
  border: 1.5px solid var(--border);
  flex-shrink: 0;
}
.fm-check--done { background: var(--green-dark); border-color: var(--green-dark); }

.fm-qty { margin-left: auto; font-size: 10px; color: var(--text-muted); }

/* Pantry tags */
.fm-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.fm-tag-item {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: #fff3d0;
  color: #b86e00;
  border: 1px solid #fde8b0;
}
.fm-tag-item--out {
  background: #fff0f0;
  color: #cc3333;
  border-color: #ffd0d0;
  text-decoration: line-through;
  opacity: 0.75;
}
.fm-tag-item--add {
  background: var(--bg-soft);
  color: var(--text-muted);
  border: 1px dashed var(--border);
}

/* Recipe list */
.fm-recipe-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #f0e8d0;
  font-size: 11px;
  color: var(--text-primary);
}
.fm-recipe-item:last-child { border-bottom: none; }
.fm-source { font-size: 10px; color: var(--text-muted); }

/* Weekly plan */
.fm-day {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px solid rgba(124,58,237,0.08);
  font-size: 11px;
}
.fm-day:last-child { border-bottom: none; }
.fm-day-label { color: var(--text-muted); width: 28px; flex-shrink: 0; font-weight: 700; font-size: 10px; }
.fm-empty { color: #ccc; font-style: italic; }

/* Feature body */
.feat-body { padding: 20px 24px 24px; flex: 1; }

.feat-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}
.feat-tag--blue   { background: #eef2ff; color: var(--blue); }
.feat-tag--yellow { background: #fff3d0; color: var(--yellow); }
.feat-tag--green  { background: #e8f8ee; color: var(--green-dark); }
.feat-tag--purple { background: #f0e8ff; color: var(--purple); }

.feat-body h3 {
  font-size: 17px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 8px;
}
.feat-body p { font-size: 14px; color: var(--text-secondary); line-height: 1.65; margin-bottom: 14px; }

.feat-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.feat-bullets li {
  font-size: 13px;
  color: #555;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.feat-bullets li::before { content: '✓'; color: var(--green-dark); font-weight: 700; font-size: 12px; flex-shrink: 0; }
```

- [ ] **Step 3: Verify in browser**
  - Mobile: 1-column, each card mockup + body stacked cleanly
  - ≥640px: 2×2 grid
  - Receitas mockup has left gold border (caderno aesthetic), no icons
  - Despensa tags: green ones normal, Sal and Farinha are struck-through/red

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: features section with CSS app mockups"
```

---

## Task 6: Founder Story + Final CTA

**Files:**
- Modify: `index.html` — `#fundador` section
- Modify: `styles.css` — append founder + CTA styles

- [ ] **Step 1: Replace `<section id="fundador">` with full markup**

```html
<section class="founder-cta">
  <div class="container">

    <div class="founder reveal">
      <div class="founder__avatar" aria-hidden="true">G</div>
      <div class="founder__content">
        <p class="eyebrow" style="color: var(--text-muted)">Por que o Listinha existe</p>
        <blockquote class="founder__quote">
          "Eu sempre sofria com algo faltando em casa quando queria cozinhar. E os apps de lista de compras e planejamento nunca me agradaram — cheios de imagens, detalhes e coisas a mais que só me faziam perder tempo.
          <strong>Então criei o Listinha: um jeito fácil de organizar a despensa para quem gosta de cozinhar.</strong>"
        </blockquote>
        <p class="founder__name">Gus <span>— Criador do Listinha</span></p>
      </div>
    </div>

    <div class="cta-final reveal">
      <p class="eyebrow" style="color: var(--green)">Comece hoje</p>
      <h2 class="cta-final__headline">Sua cozinha organizada,<br>do jeito que você precisa.</h2>
      <p class="cta-final__sub">Grátis. Sem cartão de crédito. Sem cadastro longo. Começa em segundos.</p>
      <a href="https://listinha-puce.vercel.app" class="btn-primary green cta-final__btn" target="_blank" rel="noopener">
        Comece grátis →
      </a>
      <p class="cta-final__footnote">Funciona no celular e no computador</p>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Append founder + CTA styles to `styles.css`**

```css
/* ── Founder + CTA ──────────────────────────────────────── */
.founder-cta {
  padding: var(--section-pad);
  background: var(--bg-soft);
}

.founder { margin-bottom: 20px; }

.founder {
  background: var(--bg);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.founder__avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--dark), #2d4a8a);
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.founder__quote {
  font-size: 16px;
  font-style: italic;
  color: #444;
  line-height: 1.75;
  border: none;
  padding: 0;
  margin: 10px 0 14px;
}
.founder__quote strong { font-style: normal; font-weight: 700; color: var(--text-primary); }

.founder__name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
}
.founder__name span { font-weight: 400; color: var(--text-muted); margin-left: 4px; }

/* Final CTA block */
.cta-final {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark-2) 100%);
  border-radius: var(--radius-lg);
  padding: 52px 32px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.cta-final::before {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(99,220,150,0.12) 0%, transparent 65%);
  top: -150px; right: -100px;
  border-radius: 50%;
  pointer-events: none;
}

.cta-final__headline {
  font-size: clamp(22px, 4vw, 34px);
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
  margin: 10px 0 14px;
}
.cta-final__sub {
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  max-width: 400px;
  margin: 0 auto 32px;
  line-height: 1.6;
}
.cta-final__btn { font-size: 16px; padding: 16px 36px; }
.cta-final__footnote {
  font-size: 12px;
  color: rgba(255,255,255,0.3);
  margin-top: 14px;
}

@media (min-width: 768px) {
  .founder {
    flex-direction: row;
    padding: 40px 44px;
    gap: 24px;
    align-items: flex-start;
  }
}
```

- [ ] **Step 3: Verify in browser**
  - Founder block: avatar + quote side-by-side on desktop, stacked on mobile
  - CTA block: dark background, green glow visible, green button readable
  - "Comece grátis →" button opens `listinha-puce.vercel.app` in new tab

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: founder story and final CTA section"
```

---

## Task 7: Footer

**Files:**
- Modify: `index.html` — `#footer`
- Modify: `styles.css` — append footer styles

- [ ] **Step 1: Replace `<footer id="footer">` with full markup**

```html
<footer class="footer">
  <div class="container footer__inner">
    <span class="footer__logo">Listinha</span>
    <p class="footer__copy">Feito com carinho para quem gosta de cozinhar.</p>
    <a href="https://listinha-puce.vercel.app" class="footer__link" target="_blank" rel="noopener">Abrir app →</a>
  </div>
</footer>
```

- [ ] **Step 2: Append footer styles to `styles.css`**

```css
/* ── Footer ─────────────────────────────────────────────── */
.footer {
  background: var(--dark);
  padding: 32px 0;
}
.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.footer__logo { font-size: 16px; font-weight: 800; color: #fff; }
.footer__copy { font-size: 13px; color: rgba(255,255,255,0.4); }
.footer__link { font-size: 13px; color: var(--green); text-decoration: underline; }
.footer__link:hover { color: #fff; }

@media (min-width: 640px) {
  .footer__inner { flex-direction: row; justify-content: space-between; text-align: left; }
}
```

- [ ] **Step 3: Verify in browser — footer dark, logo left, copy center, link right (on desktop)**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: footer"
```

---

## Task 8: Scroll Reveal Animations

**Files:**
- Modify: `script.js`

- [ ] **Step 1: Replace `script.js` with full implementation**

```js
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((el, i) => {
    // Stagger sibling reveals (cards in same row)
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    observer.observe(el);
  });
});
```

- [ ] **Step 2: Verify in browser — scroll down slowly, sections and cards fade in with slight stagger. No flash of invisible content on initial load (hero is above fold, no delay needed).**

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: scroll reveal animations with IntersectionObserver"
```

---

## Task 9: Final Checks + Deploy

**Files:**
- Modify: `index.html` — add Open Graph meta tags

- [ ] **Step 1: Add OG meta tags inside `<head>` of `index.html`**

```html
  <!-- Open Graph -->
  <meta property="og:title" content="Listinha — Nunca mais falte nada na sua cozinha">
  <meta property="og:description" content="O app que conecta sua despensa, receitas e lista de compras. Grátis.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://listinha-landing.vercel.app">
  <meta name="twitter:card" content="summary_large_image">
```

- [ ] **Step 2: Run Lighthouse audit**

  Open Chrome DevTools → Lighthouse → select "Mobile" → run. Target scores:
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90

  Common fixes if scores are low:
  - Performance < 90: verify no render-blocking resources; `styles.css` and `script.js` are the only external files
  - Accessibility < 90: check that all interactive elements have labels; `aria-hidden="true"` on mockups is correct
  - SEO < 90: verify `<meta name="description">` is present and ≥ 70 chars

- [ ] **Step 3: Verify all CTA links work**
  - Nav "Comece grátis" → opens `https://listinha-puce.vercel.app` in new tab ✓
  - Hero "Comece grátis" → same ✓
  - Hero "Ver como funciona" → scrolls to `#features` ✓
  - Footer "Abrir app" → same ✓

- [ ] **Step 4: Verify on mobile viewport (375px width in DevTools)**
  - No horizontal scroll
  - Hero text readable, CTA button tappable (≥44px tall)
  - Feature cards full-width

- [ ] **Step 5: Final commit**

```bash
git add index.html
git commit -m "feat: OG meta tags and SEO"
```

- [ ] **Step 6: Push to GitHub and deploy on Vercel**

```bash
git push -u origin main
```

  Then in Vercel dashboard:
  1. Import repository `listinha-landing` from GitHub
  2. Framework Preset: **Other** (static site)
  3. Deploy — Vercel auto-detects `index.html` as root

- [ ] **Step 7: Open the Vercel production URL and do a final smoke check — all sections visible, CTAs work, mobile layout correct**
