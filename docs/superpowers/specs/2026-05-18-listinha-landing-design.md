# Listinha Landing Page — Design Spec
_Data: 2026-05-18_

## Objetivo

Converter visitantes em usuários do Listinha (PWA) através de uma landing page que:
- Gera identificação imediata com a dor do usuário
- Demonstra o produto de forma simples e direta
- Remove objeções sem prometer o que não pode cumprir

---

## Público-alvo

Qualquer pessoa que cozinha em casa — casais, famílias, cozinheiros solo. A persona narrativa é o casal onde um gerencia a cozinha e o outro faz as compras, mas o conteúdo ressoa com qualquer perfil.

---

## CTA Principal

**"Comece grátis →"** — aponta para o PWA em `listinha-puce.vercel.app`.

- Não usar "gratuito para sempre" (possibilidade de features pagas no futuro, ex: assistente de IA)
- Usar "Grátis" ou "100% gratuito" sem promessa de prazo
- Linha de apoio: "Funciona no celular e no computador"

---

## Estratégia Narrativa

**Estrutura C + A:** Problema como gancho no hero, storytelling do fundador antes do CTA final.

**Prova social:** Inexistente no lançamento. Substituída por:
1. História autêntica do fundador
2. "Grátis" como eliminador de risco
3. Qualidade visual do produto como credibilidade implícita

---

## Estrutura de Seções

### 1. Hero

- **Eyebrow:** Listinha
- **Headline:** "Já foi ao mercado e voltou sem o que precisava?"
- **Subheadline:** "O app que conecta sua despensa, receitas e lista de compras — para nunca mais faltar nada."
- **CTA:** "Comece grátis →" + "Ver como funciona" (âncora para a seção de Features)
- **Tag de confiança:** "✓ 100% gratuito"
- **Visual:** Mockup do app no lado direito
- **Estilo:** Fundo branco, headline com underline verde na palavra-chave, tom conversacional

---

### 2. Amplificação da Dor

- **Eyebrow:** "Você já passou por isso"
- **Headline:** "A cozinha perfeita existe. Só que ela nunca tem o que precisa."
- **Subheadline:** "Não é falta de organização. É que nenhum app foi feito para a sua rotina."

**3 cards de dor:**

| Card | Título | Descrição |
|------|--------|-----------|
| 🛒 | Chegou no mercado sem saber o que faltava | Tenta lembrar de cabeça, compra o que acha, chega em casa e falta exatamente aquele ingrediente. De novo. |
| 📸 | "É esse produto aqui mesmo?" | Alguém no mercado fica te mandando foto de 3 marcas diferentes. Você para tudo, responde, e compram errado assim mesmo. |
| 📋 | Apps cheios de recursos que você não precisa | Fotos bonitas, planejamentos complexos — mas na hora de montar a lista rápida, você ainda abre o bloco de notas. |

**Bloco de transição** (fundo escuro #1a1a2e):
> "Por isso criei o Listinha — Um app que entende **sua cozinha do jeito que ela é.** Sem complicação. Sem frescura."

---

### 3. Features

- **Eyebrow:** "Tudo que você precisa"
- **Headline:** "Uma cozinha organizada começa por aqui."
- **Subheadline:** "Quatro ferramentas simples que se conversam — para você nunca mais improvisar."

**Grid 2×2, cada card com mini-mockup da interface real:**

#### Lista de Compras
- **Tag:** azul
- **Título:** "Compartilhe com um toque. Comprem certo."
- **Copy:** Crie listas por mercado ou corredor, adicione quem vai às compras e compartilhe direto pelo WhatsApp — sem mensagem, sem foto, sem erro.
- **Bullets:** Organização por loja ou corredor · Compartilhamento via WhatsApp · Histórico de compras anteriores
- **Mockup:** Lista com checkboxes, botão "Compartilhar"

#### Despensa
- **Tag:** amarelo
- **Título:** "Sempre tenha o que precisa para cozinhar."
- **Copy:** Monte sua despensa ideal uma vez. O que acabou fica marcado — na próxima vez que montar a lista, você já sabe exatamente o que comprar.
- **Bullets:** Sugestões para montar uma despensa completa · Adicione itens à lista com um toque · Dicas de como melhorar sua despensa
- **Mockup:** Tags de ingredientes (tem = verde, acabou = tachado/vermelho). **Sistema binário — sem rastreamento de quantidade.**

#### Receitas
- **Tag:** verde
- **Título:** "O caderno de receitas que você nunca teve."
- **Copy:** Salve de qualquer lugar — Instagram, YouTube, Google ou digitando na mão. Simples como uma lista, sem fotos que atrapalham. Só o que importa: o nome e os ingredientes.
- **Bullets:** Captura com um link de qualquer site · Ingredientes integrados com a lista · Visual limpo, sem distração
- **Mockup:** Lista de texto estilo caderno (fundo creme, borda lateral dourada). **Sem ícones ou fotos — referência ao caderno de receitas da vovó.**

#### Plano da Semana
- **Tag:** roxo
- **Título:** "Semana planejada, lista pronta."
- **Copy:** Monte o cardápio da semana com suas receitas salvas. Com um toque, os ingredientes que faltam já vão para a sua lista de compras.
- **Bullets:** Integrado com suas receitas · Gera lista de compras automaticamente · Evita a monotonia das mesmas refeições
- **Mockup:** Grade semanal com refeições por dia + botão "Gerar lista"

---

### 4. Fundador + CTA Final

#### Bloco do Fundador

- **Avatar:** Inicial "G" em gradiente escuro
- **Eyebrow:** "Por que o Listinha existe"
- **Alias:** Gus (não usar nome completo)
- **Citação:**
  > "Eu sempre sofria com algo faltando em casa quando queria cozinhar. E os apps de lista de compras e planejamento nunca me agradaram — cheios de imagens, detalhes e coisas a mais que só me faziam perder tempo. **Então criei o Listinha: um jeito fácil de organizar a despensa para quem gosta de cozinhar.**"

#### CTA Final

- **Eyebrow:** "Comece hoje"
- **Headline:** "Sua cozinha organizada, do jeito que você precisa."
- **Subheadline:** "Grátis. Sem cartão de crédito. Sem cadastro longo. Começa em segundos."
- **Botão:** "Comece grátis →"
- **Linha de apoio:** "Funciona no celular e no computador"
- **Estilo:** Fundo escuro (#1a1a2e) com glow verde sutil

---

## Identidade Visual

Base no PWA atual. Paleta de cores aprovada:

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-dark` | `#1a1a2e` | Fundo hero escuro, CTA final |
| `--color-green` | `#63dc96` | Accent, CTAs primários, checkmarks |
| `--color-green-dark` | `#2daa60` | Tags, ícones de features |
| `--color-blue` | `#4f7cff` | Tag Lista, destaques |
| `--color-yellow` | `#e08c00` | Tag Despensa |
| `--color-purple` | `#7c3aed` | Tag Plano da Semana |

Tipografia: system font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`) — sem Google Fonts para manter carregamento rápido.

---

## Princípios de Design

- **Não parece feito por IA:** copy com voz humana, sem hipérboles, sem "revolucionário"
- **Mobile-first:** hero com layout empilhado, CTAs grandes
- **Sem prometer demais:** "grátis" sem "para sempre"
- **Ritmo narrativo:** tensão (dores) → alívio (solução) → confiança (fundador) → ação (CTA)

---

## O que está fora de escopo

- App Store / Play Store links (SDK pronto mas não publicado ainda — adicionar quando disponível)
- Seção de preços (plano pago ainda indefinido)
- Blog ou conteúdo editorial
- Internacionalização (PT-BR apenas no lançamento)
