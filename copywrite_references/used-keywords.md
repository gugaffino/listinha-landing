# Used Keywords

> Keywords já usadas como primária no site.
> **Regra:** antes de escolher keyword primária pra uma página nova, cheque aqui. Nunca reutilize uma primária — isso causa canibalização de keyword.

---

## Regra de seleção de keyword

Ao construir um cluster pra uma nova página:

1. **Primária deve vir do CSV de keywords** (`blog-keywords.csv` na raiz do projeto). Nunca inventa primária.
2. **Checa este arquivo primeiro** — nunca reutiliza primária.
3. **Keywords secundárias/cluster: CSV primeiro, inventa só o que falta.**
   - Varre o CSV pra variações de mesma intenção da primária.
   - Se o CSV tiver secundárias relevantes, usa (e marca ✓ CSV na tabela abaixo).
   - Se o CSV não tiver secundárias de mesma intenção, inventa 4–5 baseado em padrões de People-Also-Ask / Pesquisas Relacionadas (e marca `(inventado)`).
4. **Teste de mesma intenção** pra cada secundária: quem busca essa frase quer cair na mesma página de quem busca a primária? Se não, pertence a outro cluster.

---

## Primárias ativas

### 1. `lista basica de compras` → `/blog/lista-basica-de-compras`

- **Fonte primária:** ✓ CSV (vol 260, KD 21, Informational)
- **Usada na página:** `/blog/lista-basica-de-compras`
- **Cluster:**

| Keyword secundária | Fonte |
|---|---|
| lista de compras basica | ✓ CSV (vol 1.000, KD 20) |
| lista de compras básica | ✓ CSV (vol 480, KD 21) |
| lista de compras completa | ✓ CSV (vol 6.600, KD 18) |
| lista de compras supermercado | ✓ CSV (vol 9.900, KD 21) |
| lista de compras do mês | ✓ CSV (vol 5.400, KD 21) |
| lista de compras para copiar e colar | ✓ CSV (vol 390, KD 5) |
| como fazer lista de compras | ✓ CSV (vol 320, KD 21) |
| como economizar no mercado | ✓ CSV (vol 320, KD 21) |

---

### 2. `app lista de compras gratuito` → `/funcionalidades`

- **Fonte primária:** ✓ CSV (vol 90, KD 46, Transactional)
- **Usada na página:** `/funcionalidades`
- **Cluster:**

| Keyword secundária | Fonte |
|---|---|
| app de lista de compras compartilhada | ✓ CSV (vol 20) |
| app cardápio semanal com lista de compras | ✓ CSV (vol 20) |
| app para criar cardapio semanal | ✓ CSV (vol 20) |
| app para anotar receitas | ✓ CSV (vol 20) |
| app de receita com o que tem em casa | ✓ CSV (vol 20) |

---

## Primárias disponíveis (não usadas ainda)

Do cluster restante em `blog-keywords.csv` — alto volume, baixo KD, ainda sem página:

| Keyword | Vol | KD | Intenção |
|---|---|---|---|
| lista de compras saudavel | 590 | 12 | Informational |
| lista de compras para casa nova | 880 | 16 | Informational |
| lista de compras para 2 pessoas | 260 | 16 | Informational |
| lista de compras hortifruti | 110 | 13 | Informational |
| lista de compras limpeza | 140 | 17 | Informational |
| o que comprar no mercado | 320 | 20 | Informational |
| lista de compras mercado | 12.100 | 23 | Informational |

---

## Workflow para o próximo post

1. Abre o `blog-keywords.csv` na raiz do projeto
2. Filtra por volume × (1 / KD) ou similar
3. Pula qualquer primária já na tabela acima
4. Escolhe uma primária do CSV que ainda não foi usada
5. Varre o CSV por secundárias de mesma intenção — usa primeiro (marca ✓ CSV)
6. Completa slots restantes do cluster com secundárias inventadas (marca `(inventado)`)
7. Adiciona nova seção neste arquivo **antes** de escrever o post
8. Publica o post, atualiza "Usada na página"
