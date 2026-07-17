# Multi-idioma (PT / EN / ES) na landing page — Design

Data: 2026-07-17
Status: aprovado para planejamento

## Contexto

A landing page (`listinha-landing`, Next.js 15 App Router) é hoje 100%
português (BR), com texto hardcoded em JSX espalhado pela home
(`app/page.js`), 4 páginas de `/funcionalidades`, e 16 posts de blog
otimizados para keywords de busca em PT-BR. Todo o tráfego orgânico atual
depende desse conteúdo PT-BR indexado.

O app irmão (`Lista_de_Compras`, vanilla JS) já recebeu suporte a PT/EN/ES
(ver `docs/superpowers/specs/2026-07-16-i18n-idiomas-design.md` naquele
repo). Este documento aplica o mesmo objetivo de produto — suportar
português, inglês (padrão do produto) e espanhol (LatAm) — à landing page,
adaptando a arquitetura para as características bem diferentes deste repo:
site multi-página server-rendered com Next.js App Router, focado em SEO,
sem estado de usuário/login.

## Decisão de faseamento (decomposição de escopo)

O volume total (16 posts × 2 idiomas novos = 32 posts, cada um exigindo
pesquisa de keyword própria em EN/ES, como cada post PT-BR já exigiu) é
grande demais para uma única spec/plano de implementação. Este documento
cobre apenas a **Fase 1**:

- Infraestrutura de i18n (roteamento, negociação de idioma, dicionários).
- Tradução completa da home (`app/page.js`).
- Tradução completa das 4 páginas de `/funcionalidades` + índice.
- Tradução da UI/estrutura do blog (índice `/blog`, layout, nav) — **não**
  dos 16 posts individuais.

Tradução dos posts de blog vira trabalho incremental separado, pós-Fase 1,
priorizado post a post (provavelmente via extensão do skill `blog-post`
existente), usando tradução adaptada (não literal) com keywords reais por
idioma — não faz sentido reaproveitar a keyword PT-BR de um post e traduzir
palavra por palavra para EN/ES, já que a keyword em si pode não ser o termo
de busca real naquele idioma.

## Decisões de arquitetura

### 1. Biblioteca: next-intl

Padrão do ecossistema Next.js App Router para i18n — roteamento por
`[locale]`, middleware de negociação de idioma, dicionários JSON por
namespace, integração com `generateMetadata`/hreflang/sitemap. Evita
reconstruir na mão o que a lib já resolve (negociação de idioma, formatação
de plural/data).

### 2. Estrutura de URL: prefixo sempre, incluindo PT

Todos os idiomas ganham prefixo explícito: `/pt/...`, `/en/...`, `/es/...`.
Mais limpo para SEO (hreflang simples, URL canônica clara por idioma), mas
quebra as URLs atuais em PT (`/blog/o-que-e-chia` → `/pt/blog/o-que-e-chia`)
— exige redirects das URLs antigas (ver seção 4).

### 3. Reestruturação de pastas

Tudo que hoje vive em `app/*` (exceto `robots.js` e `sitemap.js`, que
continuam globais, fora de qualquer locale) migra para `app/[locale]/*`:

- `app/layout.js` (raiz) vira um layout mínimo — só o que não depende de
  idioma: fontes (`next/font/google`), scripts do Google Analytics,
  `IconSprite`. Não define mais `<html lang="pt-BR">` fixo.
- `app/[locale]/layout.js` (novo) entra com `NextIntlClientProvider`,
  `<html lang={locale}>` dinâmico, e a `metadata`/`generateMetadata` por
  idioma (title, description, OpenGraph, hreflang alternates).
- `app/[locale]/page.js`, `app/[locale]/funcionalidades/**`,
  `app/[locale]/blog/**` — mesmo conteúdo de hoje, movido pra dentro do
  segmento de locale, com texto extraído para os dicionários (seção 5).

### 4. Negociação de idioma + proteção do SEO já acumulado

`middleware.js` na raiz usa `createMiddleware` do next-intl
(`localePrefix: 'always'`) para negociar idioma via cookie
(`NEXT_LOCALE`) → header `Accept-Language` (prefixo `pt` → `pt`, `es` →
`es`, qualquer outro → **`en`**, default do produto — mesmo padrão do app).

**Exceção deliberada:** as URLs já indexadas hoje (`/`,
`/funcionalidades`, `/funcionalidades/*`, `/blog`, `/blog/*`) carregam todo
o ranking orgânico atual — 100% conteúdo PT-BR. Deixar a negociação de
`Accept-Language` decidir o destino dessas URLs específicas seria
arriscado: um crawler sem sinal claro cairia no default `en`, arriscando o
Google indexar/servir conteúdo errado numa URL com histórico PT.

Por isso, essas URLs legadas recebem **redirect 301 determinístico direto
para `/pt/...`**, configurado em `redirects()` no `next.config.js` — não
passa pela negociação de idioma do middleware. O fallback `en` da
negociação só vale para tráfego em caminhos sem histórico (ex.: alguém
acessando `/en/...` ou `/es/...` diretamente, ou uma página nova futura sem
redirect explícito configurado).

`x-default` (hreflang) aponta para a versão `/pt/` de cada página — é a
âncora de autoridade do site.

### 5. Dicionários de tradução

`messages/pt.json`, `messages/en.json`, `messages/es.json` — chaves em
dot-notation por área: `nav.*`, `home.hero.*`, `home.features.*`,
`funcionalidades.*` (uma sub-área por página: `funcionalidades.lista.*`,
`funcionalidades.despensa.*`, etc.), `blog.*`, `footer.*`, `common.*`.

Consumidos via `useTranslations()` do next-intl nos componentes. Todo texto
hoje hardcoded em `app/page.js`, `components/SiteNav.js`,
`components/NavDropdown.js`, `app/funcionalidades/**/page.js`,
`app/blog/page.js` e `app/blog/layout.js` é extraído para chaves.

**Tom, não tradução literal** — mesmo princípio do app: EN e ES são
reescritos com equivalente natural em cada idioma, preservando a voz Mise
(direta, "você"/"you"/"tú", sem ponto final em botões curtos) — não
tradução palavra-por-palavra ("Bora?" → "Ready?" / "¿Vamos?", não "Let's
go?").

### 6. Seletor de idioma

Componente novo `LanguageSwitcher` — 3 chips PT/EN/ES (`.chip`/`.chip.on`
do design system, mesmo padrão visual do app Listinha), inserido no
`SiteNav`. Trocar o chip navega para a mesma página no novo locale
(`router.replace` do next-intl, preservando o path atual) e grava a escolha
em cookie `NEXT_LOCALE` — sem full reload, diferente do app (aqui é
SSR/roteamento por URL, não SPA com estado local pesado que precisa
recarregar pra re-renderizar tudo).

**Consolidação incidental:** `app/page.js` hoje duplica o markup do header
que também existe em `components/SiteNav.js` (não usa o componente). Como
ambos precisam do `LanguageSwitcher`, a home passa a usar `<SiteNav>`
diretamente em vez de repetir o markup — remove a duplicação existente.

### 7. Blog em EN/ES (Fase 1 — só a estrutura)

`/en/blog` e `/es/blog` renderizam o mesmo layout do índice, mas a
listagem filtra só posts com versão traduzida naquele idioma (nenhum na
Fase 1) — mostra um empty state ("New posts coming soon in English" /
"Nuevos posts próximamente en español") usando o padrão de empty state do
design system. Sem posts fantasma, sem link quebrado, sem mistura de
idioma na mesma página.

Os 16 posts continuam existindo só em `/pt/blog/<slug>` — sem rotas
`/en/blog/<slug>` / `/es/blog/<slug>` ainda. Quando um post for traduzido
(trabalho futuro), ele aparece automaticamente na listagem filtrada do
idioma correspondente.

### 8. Metadata e SEO

- `generateMetadata` por locale em cada página: `title`/`description`
  traduzidos, `alternates.languages` com hreflang para as 3 versões (mais
  `x-default` → `/pt/...`), `openGraph.locale` (`pt_BR`/`en_US`/`es`).
- `app/sitemap.js` (fora do segmento de locale, continua global) passa a
  emitir as entradas de home/funcionalidades nos 3 idiomas
  (`/pt/`, `/en/`, `/es/`, etc.) e as entradas de blog só em `/pt/blog/*`
  (únicos que existem). Aproveitamento: como parte desta task, corrigir
  também a lacuna já existente no sitemap atual (só lista 4 dos 16 posts).
- `app/robots.js` não muda — continua global, sem lógica de idioma.

## Erros e casos de borda

- Locale inválido na URL (`/fr/...`) → 404 padrão do Next.js (next-intl
  trata `[locale]` como segmento restrito aos 3 valores válidos via
  `generateStaticParams`/validação).
- Chave de dicionário ausente num idioma → next-intl lança erro em dev
  (sinal pra pegar chave esquecida); em produção, configurar fallback pro
  texto em `pt` da mesma chave (via `getMessageFallback` do next-intl) —
  nunca deixa texto em branco ou chave crua visível pro usuário final.
- Post de blog acessado via URL direta em idioma sem tradução
  (`/en/blog/o-que-e-chia`, que não existe) → 404, sem fallback pra versão
  PT (evita conteúdo em idioma errado indexado por engano).

## Testes / verificação

Sem suite automatizada de i18n neste projeto ainda. Verificação manual
depois de implementado:

1. Trocar entre os 3 idiomas no seletor do header em cada página no escopo
   (home, funcionalidades × 4, blog index) — conteúdo muda, URL atualiza
   com o prefixo certo, nenhum texto em branco ou chave crua aparecendo.
2. Acessar as URLs antigas sem prefixo (`/`, `/blog/o-que-e-chia`,
   `/funcionalidades/despensa`) e confirmar redirect 301 para a versão
   `/pt/...` correspondente — não para `/en/...`.
3. Acessar `/en/blog` e `/es/blog` diretamente — confirmar empty state
   (nenhum post PT vazando misturado).
4. `npm run build` limpo, checar `sitemap.xml` gerado tem as 3 variantes de
   home/funcionalidades e as entradas de blog corretas (16 posts, só PT).
5. Inspecionar `<head>` de uma página em cada idioma — hreflang alternates
   presentes e apontando pros locais certos, `x-default` → `/pt/`.
6. Ratio texto/HTML das páginas traduzidas (regra do `CLAUDE.md` deste
   repo) — conferir que EN/ES mantêm o mesmo volume de parágrafos de corpo
   que o PT, não versões resumidas.

## Fora de escopo desta feature (Fase 1)

- Tradução dos 16 posts de blog individuais para EN/ES — trabalho
  incremental separado, pós-Fase 1.
- Pesquisa de keywords EN/ES para os posts (parte do trabalho acima,
  quando chegar a vez de cada post).
- Detecção/tradução automática via IA em tempo real — dicionários são
  estáticos, editados manualmente em `messages/*.json`.
- Suporte a mais idiomas além de PT/EN/ES.
- Revisão de tradução por falante nativo — feito por mim (Claude) sem
  revisão humana adicional; mesmo risco documentado na spec do app.
