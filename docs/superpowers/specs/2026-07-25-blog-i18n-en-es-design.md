# Tradução dos posts de blog (EN/ES) — Design + Plano de Sessões

Data: 2026-07-25
Status: aprovado para execução incremental

## Contexto

A Fase 1 do i18n (`docs/superpowers/specs/2026-07-17-landing-i18n-idiomas-design.md`) deixou
explicitamente fora de escopo a tradução dos posts de blog individuais — só a home, as 4
páginas de `/funcionalidades` e a estrutura do índice do blog foram traduzidas. Os 63 posts
existentes em `app/[locale]/blog/<slug>/page.js` continuam só em `pt`, com guarda
`if (locale !== 'pt') notFound()`.

Este documento resolve a decisão de arquitetura pendente e mapeia os 63 posts em ordem de
prioridade, pra que uma nova sessão possa pegar o próximo lote e começar a trabalhar sem
precisar redescobrir o contexto.

## Decisão de arquitetura (aprovada)

Diferente das páginas institucionais (home, funcionalidades), que usam `messages/*.json` +
`getTranslations()`, cada post de blog é hoje **um arquivo JSX com o artigo inteiro escrito
diretamente no componente** — prosa, FAQ, JSON-LD, tudo hardcoded em PT (ver skill
`blog-post`, seção "Page structure"). Posts variam de ~450 a ~950 linhas.

Três opções foram avaliadas:

1. ~~Um arquivo só por post, com 3 blocos de retorno (if/else por locale)~~ — rejeitado:
   infla cada arquivo pra 1500–2800 linhas, difícil de revisar uma tradução isolada.
2. ~~Extrair pra `messages/{pt,en,es}.json`~~ — rejeitado: os dicionários globais viram
   repositório de 63 artigos inteiros de prosa, incompatível com o padrão de "chaves curtas
   de UI" que o resto do site usa via `next-intl`.
3. **✅ Arquivos de conteúdo separados por idioma, com `page.js` como roteador fino.**

### Estrutura de arquivos (por post, quando traduzido)

```
app/[locale]/blog/<slug>/
  page.js          → roteador fino: lê `params.locale`, importa e renderiza
                     o conteúdo do idioma certo; notFound() se o idioma
                     ainda não tiver conteúdo criado
  content.pt.js     → artigo PT (extraído do page.js atual, sem mudança de texto)
  content.en.js     → artigo EN (pesquisa + redação própria, não é tradução literal)
  content.es.js     → artigo ES (pesquisa + redação própria, não é tradução literal)
```

Cada `content.<locale>.js` exporta:
- `metadata` — title/description/OG/canonical/JSON-LD **daquele idioma** (canonical
  aponta pra `/<locale>/blog/<slug>`, não pra `/pt/...`)
- `faqSchema`, `articleSchema`, `breadcrumbSchema` — construídos com o texto daquele idioma
- Export default: o componente do corpo do artigo (JSX puro, como já é hoje)

`page.js` fica assim:

```jsx
import { notFound } from 'next/navigation'
import PtContent, { metadata as ptMeta, faqSchema as ptFaq, articleSchema as ptArticle, breadcrumbSchema as ptBreadcrumb } from './content.pt'
// import EnContent, { ... } from './content.en'   ← só depois que content.en.js existir
// import EsContent, { ... } from './content.es'   ← só depois que content.es.js existir

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (locale === 'pt') return ptMeta
  // if (locale === 'en') return enMeta
  // if (locale === 'es') return esMeta
  notFound()
}

export default async function Page({ params }) {
  const { locale } = await params
  if (locale === 'pt') return <PtContent />
  // if (locale === 'en') return <EnContent />
  // if (locale === 'es') return <EsContent />
  notFound()
}
```

**Regra importante:** não refatorar `page.js` de um post até que **os 3 idiomas** (pt
extraído + en novo + es novo) estejam prontos. Até lá, o post continua exatamente como está
hoje (arquivo único, guarda `notFound()` pra en/es). Isso evita deixar posts em estado
inconsistente (import de um arquivo que ainda não existe) se uma sessão for interrompida no
meio.

### Mudanças que acompanham cada post traduzido (checklist técnico)

Quando um post ganha `content.en.js` + `content.es.js` e o `page.js` é atualizado:

1. **`app/[locale]/blog/page.js`** — o campo `locales: ['pt']` daquele post no array `posts`
   vira `locales: ['pt', 'en', 'es']` (só depois que os 2 novos idiomas estiverem prontos e
   revisados — nunca parcial).
2. **`app/sitemap.js`** — hoje `BLOG_SLUGS_PT` é uma lista flat só de slugs em pt. Precisa
   virar uma estrutura que sabe quais locales cada slug tem (ex.: `{ slug, locales: [...] }`)
   pra emitir `/en/blog/<slug>` e `/es/blog/<slug>` quando existirem.
3. **hreflang** — `content.<locale>.js`'s `metadata` de cada post traduzido precisa de
   `alternates.languages` (pt/en/es + `x-default` → pt), no mesmo padrão que
   `app/[locale]/layout.js` e as páginas de funcionalidades já usam (ver Task 12 da Fase 1).
4. Rodar `npm run build` limpo e verificar manualmente (`/pt`, `/en`, `/es` do post + índice
   do blog no idioma) antes de considerar o post pronto.

### Limitação a documentar honestamente

`seo/blog-keywords.csv` é uma fonte de dados PT (volume/KD de uma ferramenta paga). **Não
existe CSV equivalente pra EN/ES neste projeto.** A pesquisa de keyword EN/ES vai ser
qualitativa — via `WebSearch`/SERP research (mesmo método do Step 2 do skill `blog-post`),
sem número de volume de busca real. Isso é esperado e aceitável (o design doc da Fase 1 já
previa isso: "a keyword em si pode não ser o termo de busca real naquele idioma"), mas a
priorização abaixo usa o **score em PT como proxy de popularidade do tópico**, não como
garantia de que o mesmo termo performa igual em inglês/espanhol.

## Mapeamento: os 63 posts, em ordem de prioridade

Critério: `score = volume PT ÷ KD PT` (mesma fórmula do skill `blog-post` pra escolher
keyword primária) — usado aqui como proxy de "tópico com mais apelo", não como dado real de
EN/ES. Fonte: `seo/references/used-keywords.md` + `seo/blog-keywords.csv`.

**Duas notas de dados encontradas ao compilar esta lista** (drift pré-existente, não deste
plano — só documentando pra não gerar confusão numa sessão futura):
- `como-economizar-no-mercado` está publicado mas **não tem entrada própria** em
  `used-keywords.md` (só aparece como secundária do cluster #1) — usei o dado direto do CSV
  (`como economizar no mercado`, vol 320, KD 21).
- `used-keywords.md` tem uma entrada #7 (`o que é amido de milho` →
  `/blog/o-que-e-amido-de-milho`) que **não corresponde a nenhum post real publicado** —
  ignorada nesta lista.
- `o-que-e-curcuma` foi escrito a pedido direto do usuário, sem keyword do CSV (score N/A) —
  fica por último na priorização por falta de dado, não por ser menos importante.

**Batch 1**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 1 | `o-que-e-gengibre` | gengibre | 60500 | 35 | 1728.6 |
| 2 | `bicarbonato-de-sodio` | bicarbonato de sódio | 60500 | 36 | 1680.6 |
| 3 | `o-que-e-arroz-parboilizado` | arroz parboilizado | 27100 | 24 | 1129.2 |
| 4 | `atum` | atum | 40500 | 36 | 1125.0 |
| 5 | `batata-doce` | batata doce | 40500 | 37 | 1094.6 |

**Batch 2**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 6 | `o-que-e-pistache` | o que é pistache | 27100 | 25 | 1084.0 |
| 7 | `o-que-e-nabo` | nabo | 33100 | 31 | 1067.7 |
| 8 | `o-que-e-maca` | maça | 40500 | 38 | 1065.8 |
| 9 | `alcaparras` | alcaparras | 22200 | 24 | 925.0 |
| 10 | `o-que-e-margarina` | margarina | 22200 | 26 | 853.8 |

**Batch 3**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 11 | `o-que-e-alho` | alho | 22200 | 42 | 528.6 |
| 12 | `lista-de-compras-mercado` | lista de compras mercado | 12100 | 23 | 526.1 |
| 13 | `frutas-citricas` | frutas citricas | 9900 | 22 | 450.0 |
| 14 | `oleo-de-canola` | oleo de canola | 8100 | 20 | 405.0 |
| 15 | `vinagre-balsamico` | vinagre balsamico | 8100 | 21 | 385.7 |

**Batch 4**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 16 | `para-que-serve-oleo-de-linhaca` | para que serve óleo de linhaça | 5400 | 14 | 385.7 |
| 17 | `caderno-de-receitas` | caderno de receitas | 3600 | 10 | 360.0 |
| 18 | `dieta-carnivora` | dieta carnivora | 9900 | 28 | 353.6 |
| 19 | `alimentos-ricos-em-magnesio` | alimentos ricos em magnésio | 8100 | 24 | 337.5 |
| 20 | `o-que-e-cavala` | cavala | 8100 | 28 | 289.3 |

**Batch 5**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 21 | `o-que-e-raiz-forte` | raiz forte | 3600 | 14 | 257.1 |
| 22 | `o-que-e-cranberry` | o que é cranberry | 3600 | 14 | 257.1 |
| 23 | `lista-de-compras-do-mes` | lista de compras do mês | 5400 | 21 | 257.1 |
| 24 | `alimentos-sem-gluten` | alimentos sem glúten | 5400 | 21 | 257.1 |
| 25 | `o-que-e-pomelo` | o que é pomelo | 8100 | 34 | 238.2 |

**Batch 6**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 26 | `arenque` | arenque | 8100 | 36 | 225.0 |
| 27 | `dieta-low-carb-cardapio` | dieta low carb cardápio | 2400 | 11 | 218.2 |
| 28 | `para-que-serve-noz-moscada` | noz moscada para que serve | 5400 | 25 | 216.0 |
| 29 | `beneficios-do-rabanete` | benefícios do rabanete | 3600 | 18 | 200.0 |
| 30 | `o-que-e-amendoa` | amêndoas | 6600 | 35 | 188.6 |

**Batch 7**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 31 | `o-que-e-cream-cheese` | o que é cream cheese | 5400 | 31 | 174.2 |
| 32 | `kiwi-beneficios` | kiwi benefícios | 5400 | 31 | 174.2 |
| 33 | `o-que-e-mirtilo` | o que é mirtilo | 5400 | 32 | 168.8 |
| 34 | `espinafre-beneficios` | espinafre beneficios | 3600 | 22 | 163.6 |
| 35 | `azeite-de-oliva` | azeite de oliva quais os beneficios | 2900 | 19 | 152.6 |

**Batch 8**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 36 | `dieta-sem-acucar` | dieta sem açúcar | 2400 | 16 | 150.0 |
| 37 | `cardapio-semanal-simples-caseiro` | cardápio semanal simples caseiro | 3600 | 24 | 150.0 |
| 38 | `beneficios-do-pepino` | benefícios do pepino | 6600 | 44 | 150.0 |
| 39 | `o-que-e-pao-branco` | pão branco | 2900 | 20 | 145.0 |
| 40 | `o-que-e-ricota` | ricota é queijo | 3600 | 26 | 138.5 |

**Batch 9**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 41 | `alimentos-ricos-em-proteinas` | 10 alimentos ricos em proteínas | 2900 | 21 | 138.1 |
| 42 | `quinoa-para-que-serve` | quinoa para que serve | 5400 | 40 | 135.0 |
| 43 | `pimenta-vermelha` | pimenta vermelha | 2400 | 18 | 133.3 |
| 44 | `o-que-e-granola` | o que é granola | 2400 | 18 | 133.3 |
| 45 | `abobrinha-calorias` | abobrinha calorias | 2400 | 18 | 133.3 |

**Batch 10**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 46 | `damascos-secos` | damascos secos | 2400 | 19 | 126.3 |
| 47 | `o-que-e-tahine` | tahine o que é | 2900 | 23 | 126.1 |
| 48 | `o-que-e-avela` | o que e avelã | 880 | 7 | 125.7 |
| 49 | `o-que-e-stevia` | o que e stevia | 1600 | 13 | 123.1 |
| 50 | `feijao-preto-beneficios` | feijão preto beneficios | 2400 | 21 | 114.3 |

**Batch 11**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 51 | `beneficios-da-cebola-roxa` | benefícios da cebola roxa | 2400 | 21 | 114.3 |
| 52 | `para-que-serve-o-oregano` | para que serve o orégano | 3600 | 32 | 112.5 |
| 53 | `beneficios-do-cuscuz` | benefícios do cuscuz | 2900 | 26 | 111.5 |
| 54 | `oleo-de-gergelim` | oleo de gergelim beneficios | 1000 | 9 | 111.1 |
| 55 | `cardamomo-para-que-serve` | cardamomo para que serve | 2900 | 28 | 103.6 |

**Batch 12**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 56 | `aveia-em-flocos-beneficios` | aveia em flocos beneficios | 2400 | 26 | 92.3 |
| 57 | `lista-de-compras-para-casa-nova` | lista de compras para casa nova | 880 | 16 | 55.0 |
| 58 | `o-que-e-chia` | chia tem proteina | 1300 | 25 | 52.0 |
| 59 | `lista-de-compras-saudavel` | lista de compras saudavel | 590 | 12 | 49.2 |
| 60 | `como-economizar-no-mercado` | como economizar no mercado | 320 | 21 | 15.2 |

**Batch 13**

| # | Slug | Keyword PT | Vol | KD | Score |
|---|---|---|---|---|---|
| 61 | `lista-basica-de-compras` | lista basica de compras | 260 | 21 | 12.4 |
| 62 | `como-organizar-a-despensa` | como organizar a despensa | 110 | 9 | 12.2 |
| 63 | `o-que-e-curcuma` | o que é cúrcuma | 0 | 0 | N/A |

## Cadência recomendada por sessão

Cada post traduzido = 2 artigos novos (EN + ES), cada um com pesquisa de SERP própria,
redação na voz do Mise (não tradução literal) e wiring técnico. Em esforço, é comparável a
escrever 2 posts novos do zero — bem mais pesado que uma tradução mecânica.

**Recomendação: 3 a 5 posts por sessão** (6 a 10 artigos novos), não os 63 de uma vez. A
tabela acima já está fatiada em **batches de 5**, na ordem de prioridade — uma sessão nova
pega o próximo batch não feito e segue.

## Workflow por post (adaptação do skill `blog-post`)

O skill `blog-post` (`~/.claude/skills/blog-post/SKILL.md`) cobre a escrita de posts novos em
PT. Pra traduzir um post existente, adaptar assim:

1. **Ler o post PT de referência** (`app/[locale]/blog/<slug>/page.js`) inteiro — título,
   ângulo, estrutura de H2, FAQ, tom.
2. **Pesquisa de keyword EN** — `WebSearch` do tema em inglês (não traduzir a keyword PT
   palavra por palavra). Abrir os top 3 resultados orgânicos, anotar estrutura/word count
   (mesmo método do Step 2 do skill, seção "SERP Research").
3. **Pesquisa de keyword ES** — mesma coisa, em espanhol (LatAm, não Espanha — ver
   `voice.md`/produto: EN é o idioma padrão do produto, ES é LatAm).
4. **Escrever `content.en.js`** — artigo adaptado (não traduzido), próprio ângulo se o gap de
   SERP em inglês for diferente do PT, mesma estrutura de arquivo (metadata, 3 JSON-LD
   schemas, corpo JSX) que os posts PT já seguem.
5. **Escrever `content.es.js`** — mesma coisa em espanhol.
6. **Extrair `content.pt.js`** — mover o corpo do `page.js` atual pra este arquivo, **sem
   alterar o texto** (é refatoração de estrutura, não reescrita).
7. **Reescrever `page.js`** como roteador fino (ver template acima), importando os 3.
8. **Rodar o checklist técnico** (seção acima): `locales` no índice, `sitemap.js`, hreflang.
9. `npm run build` limpo + verificação manual nos 3 idiomas (`/pt`, `/en`, `/es` do post) +
   índice do blog nos 3 idiomas (post deve aparecer agora em todos).
10. Commit + push.

## Pré-requisito antes de começar (dívida pequena, não deste plano)

O skill `blog-post` ainda referencia o caminho antigo pré-i18n (`app/blog/{slug}/page.js`,
`app/blog/page.js`) — desatualizado desde a Fase 1. Vale atualizar o skill pra
`app/[locale]/blog/{slug}/page.js` (e mencionar a nova estrutura de `content.<locale>.js`)
como primeiro passo da próxima sessão, antes de traduzir o primeiro post — evita reintroduzir
o caminho errado por hábito.

## Como retomar numa sessão nova

1. Ler este documento inteiro.
2. Ler o skill `blog-post` (e atualizá-lo primeiro, ver seção acima).
3. Checar `seo/references/used-keywords.md` — se algum post do próximo batch já foi
   traduzido por uma sessão anterior, pular (o campo `locales` no índice do blog já denuncia
   isso).
4. Pegar o próximo batch não feito na tabela acima.
5. Seguir o workflow por post, um de cada vez ou em paralelo via subagents dedicados (mesmo
   padrão de `subagent-driven-development` usado na Fase 1, se a sessão preferir) — a decisão
   de como executar (sequencial vs. subagents) é da sessão que for rodar, este documento só
   define o quê e em que ordem.
