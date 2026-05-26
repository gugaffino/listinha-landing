import RevealObserver from '../../../components/RevealObserver'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
  description: 'Como economizar no mercado começa antes de sair de casa. Descubra 12 hábitos práticos sobre lista, despensa e cardápio semanal que cortam o gasto sem sacrificar o que você come.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/como-economizar-no-mercado',
  },
  openGraph: {
    title: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
    description: 'Como economizar no mercado começa antes de sair de casa. Lista, despensa e cardápio conectados cortam até 27% do gasto.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/como-economizar-no-mercado',
    images: [
      {
        url: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Família fazendo compras no supermercado com lista na mão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
    description: 'Como economizar no mercado começa antes de sair de casa. Lista, despensa e cardápio conectados cortam até 27% do gasto.',
    images: ['https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como economizar no mercado de forma prática?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Economizar no mercado começa antes de sair de casa: checar a despensa pra não comprar o que já tem, planejar o cardápio da semana e montar uma lista completa por grupos. Dentro do mercado, comer antes de ir, seguir a lista, ignorar pontas de gôndola e comparar o preço por quilo ou litro. Quem faz lista gasta em média 27% menos que quem vai sem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto dá pra economizar por mês fazendo lista de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para um casal que gasta em média R$ 1.200–1.800 por mês no mercado, fazer lista fixa pode economizar entre R$ 320 e R$ 490 mensais — só eliminando compras duplicadas e itens por impulso. Num ano, isso representa R$ 3.800–5.900 de diferença.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale mais a pena ir ao mercado uma vez por semana ou várias vezes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma vez por semana com lista é mais barato. Toda visita ao supermercado é uma oportunidade de compra por impulso. Pesquisas mostram que compradores frequentes tendem a gastar mais no total do que quem concentra as compras. Ir menos vezes com uma lista completa reduz a exposição às estratégias de venda do varejo.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que fazer para não gastar mais do que o orçamento no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Defina o orçamento antes de montar a lista. Planeje o cardápio da semana primeiro, depois liste os ingredientes que faltam. Cheque a despensa antes de escrever a lista — você vai descobrir que já tem boa parte. No mercado, compre sem fome e siga a lista. Evite corredores que não são da sua lista.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar desperdício de alimentos e economizar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O principal causador de desperdício doméstico é comprar itens sem saber o que já tem em casa. Com uma despensa organizada e conectada à lista, você compra só o que vai usar. O Brasil descarta cerca de 41 kg de alimento por pessoa por ano — e boa parte começa nas compras do supermercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre preço por unidade e preço por quilo no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço exibido na etiqueta costuma ser por unidade ou embalagem. O preço por quilo ou litro é o que permite comparação real entre marcas e tamanhos diferentes. A embalagem menor parece mais barata, mas o preço por quilo quase sempre é maior. Olhe sempre o preço por kilo/litro — por lei, ele deve estar na etiqueta.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
  description: 'Como economizar no mercado começa antes de sair de casa. Descubra 12 hábitos práticos sobre lista, despensa e cardápio semanal que cortam o gasto sem sacrificar o que você come.',
  image: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
  datePublished: '2026-05-22',
  dateModified: '2026-05-22',
  author: {
    '@type': 'Person',
    name: 'Gus',
    url: 'https://www.miseemcasa.com.br',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mise',
    url: 'https://www.miseemcasa.com.br',
    logo: {
      '@type': 'ImageObject',
      url: 'https://listinha-puce.vercel.app/icons/icon-192.png',
      width: 192,
      height: 192,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.miseemcasa.com.br/blog/como-economizar-no-mercado',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Como economizar no mercado', item: 'https://www.miseemcasa.com.br/blog/como-economizar-no-mercado' },
  ],
}

export default function ComoEconomizarNoMercado() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RevealObserver />

      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Como economizar no mercado</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-22">22 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">10 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Como economizar no mercado: 12 hábitos que realmente funcionam
          </h1>
          <p className="blog-desc">
            Fazer mercado uma vez por semana com lista é mais barato do que ir três vezes rapidinho. A compra rápida é a mais cara. Aqui estão os hábitos que fazem diferença de verdade — antes, durante e depois do supermercado.
          </p>

          <div className="answer-box">
            <p>
              <strong>Como economizar no mercado?</strong> A economia começa em casa:{' '}
              checar a despensa, planejar o cardápio da semana e montar uma lista por grupos.
              Dentro do supermercado: nunca ir com fome, seguir a lista e comparar o preço por quilo.
              Quem usa lista fixa gasta em média <strong>27% menos</strong> do que quem vai sem.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Família fazendo compras no supermercado com lista na mão"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que-gasta-mais">Por que a maioria das pessoas gasta mais do que deveria</a></li>
              <li><a href="#antes-de-sair">Antes de sair de casa: onde a economia começa</a></li>
              <li><a href="#dentro-do-mercado">Dentro do mercado: hábitos que cortam o gasto</a></li>
              <li><a href="#lista-que-funciona">A lista de compras que realmente funciona</a></li>
              <li><a href="#lista-despensa-cardapio">Lista, despensa e cardápio: a maior economia</a></li>
              <li><a href="#quanto-economizar">Quanto você pode economizar por mês</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* POR QUE GASTA MAIS */}
          <h2 id="por-que-gasta-mais">Por que a maioria das pessoas gasta mais do que deveria no mercado</h2>

          <p>
            Segundo levantamento da Nielsen (2022), <strong>62% dos brasileiros fazem mercado sem uma lista fixa</strong>.
            O resultado aparece no carrinho: em média 3 a 5 itens por impulso por ida — produto em promoção
            que parecia útil, algo que você "achava que estava acabando", aquela sobremesa que não estava
            no plano.
          </p>

          <p>
            Compra sem lista sai, em média, <strong>27% mais cara</strong>. Não porque você compra mais
            do que precisa necessariamente, mas porque compra o que não vai usar — e aí vem o desperdício.
            O Brasil descarta cerca de 41 kg de alimento por pessoa por ano (Embrapa, 2023). Boa parte
            desse descarte começa no supermercado, na compra feita sem saber o que já tem em casa.
          </p>

          <p>
            O problema não é falta de disciplina. É falta de sistema. Ir ao mercado de cabeça é
            como fazer compras de olhos fechados: você até chega em algum lugar, mas o caminho
            é torto e o carrinho cheio de surpresas.
          </p>

          <p>
            E tem mais: toda visita extra ao supermercado é uma exposição às estratégias de venda
            do varejo. Ponta de gôndola, precificação comparativa, produtos posicionados na altura
            dos olhos — tudo projetado pra aumentar o ticket médio. Ir menos vezes com uma lista
            completa é, por si só, uma defesa.
          </p>

          {/* ANTES DE SAIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6214370/pexels-photo-6214370.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Pessoa escrevendo lista de compras no papel com planejamento semanal"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nataliya Vaitkevich / Pexels</p>
          </div>

          <h2 id="antes-de-sair" className="img-above">Antes de sair de casa: onde a economia começa</h2>

          <p>
            A maioria das dicas de economia no mercado fala sobre o que fazer dentro do supermercado.
            Mas a maior parte do dinheiro economizado é decidida antes de você sair de casa.
          </p>

          <h3>1. Cheque a despensa antes de escrever a lista</h3>
          <p>
            Parece óbvio, mas poucos fazem. Abra cada armário, olhe a geladeira e o freezer antes de
            sentar pra fazer a lista. Você vai descobrir que tem dois potes de extrato de tomate,
            arroz pra duas semanas e aquele queijo que ainda dá pra usar. Comprar duplicado é
            o desperdício mais silencioso de todos. Se a sua despensa ainda está bagunçada,
            vale ler antes o guia de{' '}
            <a href="/blog/como-organizar-a-despensa">como organizar a despensa em 7 passos</a>.
          </p>

          <h3>2. Planeje o cardápio da semana antes de ir</h3>
          <p>
            Sem saber o que vai ser cozinhado, a lista é um chute. Você vai comprar proteínas sem
            saber o que vai fazer com elas, legumes que não combinam com nada planejado e vai acabar
            pedindo entrega na quarta-feira mesmo assim.
          </p>
          <p>
            Dedicar 10 minutos pra escolher 5 a 7 refeições da semana transforma a lista em algo
            preciso: você sabe exatamente quais ingredientes precisa e em qual quantidade.
            O <a href="/funcionalidades/cardapio-semanal">cardápio semanal do Mise</a> faz isso
            automaticamente — você escolhe as receitas e o app monta a lista dos ingredientes que faltam.
          </p>

          <h3>3. Monte a lista por grupos, não por memória</h3>
          <p>
            Lista por grupos (hortifruti, carnes, laticínios, mercearia, limpeza, higiene) cobre
            todos os corredores sem deixar buracos. Quando você escreve por memória, esquece categorias
            inteiras — e aí faz uma segunda viagem no meio da semana. Se precisar de um ponto de partida,
            veja a <a href="/blog/lista-basica-de-compras">lista básica de compras com 80+ itens pra copiar</a>.
          </p>

          <h3>4. Defina o orçamento antes de ir</h3>
          <p>
            Saber quanto vai gastar muda o que você coloca na lista. Com orçamento definido, você
            prioriza: proteína da semana toda fica, o iogurte especial fica pra outra vez. Sem
            orçamento, tudo parece necessário no momento.
          </p>

          <h3>5. Não vá com fome</h3>
          <p>
            Clássico porque é real. Com fome, tudo parece necessário e urgente. Você pega o salgadinho
            da promoção, o chocolate que estava na fila do caixa, a pizza congelada "só por essa vez".
            Coma antes de ir.
          </p>

          {/* DENTRO DO MERCADO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/16211537/pexels-photo-16211537.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Corredor de supermercado com prateleiras organizadas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: ha ha / Pexels</p>
          </div>

          <h2 id="dentro-do-mercado" className="img-above">Dentro do mercado: hábitos que cortam o gasto</h2>

          <h3>6. Siga a lista. Não o corredor</h3>
          <p>
            Supermercados são projetados pra você andar por todos os corredores. Os itens essenciais
            (leite, ovos, pão) ficam no fundo pra você passar por tudo antes de chegar lá. Se não
            está na lista, não entre no corredor. Cada corredor é uma oportunidade de compra por impulso.
          </p>

          <h3>7. Compare o preço por quilo, não o preço da embalagem</h3>
          <p>
            A embalagem de 400 g parece mais barata que a de 1 kg, mas o preço por quilo quase sempre
            contradiz a intuição. Por lei, o supermercado é obrigado a exibir o preço por unidade de
            medida na etiqueta. Use essa informação — ela está lá.
          </p>

          <h3>8. Evite pontas de gôndola e displays especiais</h3>
          <p>
            Ponta de gôndola não é necessariamente promoção. O espaço é vendido para as marcas como
            destaque. Antes de pegar algo exposto em local especial, compare com o produto equivalente
            na prateleira normal do corredor correspondente.
          </p>

          <h3>9. Prefira marcas próprias em commodities</h3>
          <p>
            Arroz, feijão, farinha, açúcar, sal, detergente: itens sem diferenciação real de sabor
            ou performance. A marca própria do supermercado costuma ser 20–40% mais barata e vem
            da mesma fábrica que a marca premium. Economize onde não vai sentir diferença.
          </p>

          <h3>10. Não compre o que não estava planejado só porque está em promoção</h3>
          <p>
            Promoção só é economia se você ia comprar de qualquer forma. Comprar 3 potes de molho
            porque estava com desconto, sendo que você usa 1 por mês, é gastar dinheiro agora
            que você ia gastar meses depois — sem o benefício financeiro real de ter esse dinheiro
            disponível no intervalo.
          </p>

          {/* LISTA QUE FUNCIONA */}
          <h2 id="lista-que-funciona">A lista de compras que realmente funciona</h2>

          <p>
            Uma boa lista de compras tem três características: é organizada por grupos (pra evitar
            voltar no corredor), é baseada no cardápio da semana (pra comprar só o que vai usar)
            e reflete o que já tem em casa (pra não comprar duplicado).
          </p>

          <p>
            O formato mais eficiente não é uma lista corrida de itens — é uma lista por corredor.
            Você entra no hortifruti, marca tudo ali, segue pra carnes, depois laticínios, depois
            mercearia. Sem voltar. Sem esquecimento que obriga uma segunda volta.
          </p>

          <p>
            A <a href="/funcionalidades/lista-de-compras">lista de compras do Mise</a> já organiza
            os itens por corredor automaticamente. Você adiciona o que precisa, o app agrupa por
            categoria e você sai do mercado mais rápido — e sem sair do orçamento.
          </p>

          <h3>11. Compre uma vez por semana, não várias vezes</h3>
          <p>
            Toda ida ao mercado tem um custo invisível além do carrinho: deslocamento, tempo e, principalmente,
            exposição a mais oportunidades de compra não planejada. Quem vai ao mercado três vezes por
            semana "só pegar umas coisinhas" costuma gastar mais no total do que quem vai uma vez com
            uma lista completa.
          </p>

          <h3>12. Revise a lista depois, não durante</h3>
          <p>
            Ao terminar o mercado, olhe o que sobrou na lista (o que você não achou ou decidiu não
            comprar) e o que entrou no carrinho que não estava na lista. Esse exercício de 2 minutos
            revela padrões: o que você esquece toda semana, o que compra por impulso sempre, onde
            está saindo do orçamento.
          </p>

          {/* LISTA + DESPENSA + CARDÁPIO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Geladeira bem organizada com frutas e vegetais frescos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="lista-despensa-cardapio" className="img-above">Lista, despensa e cardápio: onde está a maior economia</h2>

          <p>
            Cada um desses elementos sozinho já ajuda. Mas o maior ganho financeiro aparece quando
            os três estão conectados.
          </p>

          <p>
            Funciona assim: você planeja o cardápio da semana com base no que já tem na despensa.
            O que falta vai automaticamente pra lista. No mercado, você compra só esses itens.
            Na volta, você atualiza a despensa. Quando algo acaba, você marca — não no dia do mercado,
            quando a memória já falhou, mas no momento em que percebe.
          </p>

          <p>
            Esse ciclo elimina os dois maiores vilões do gasto no mercado: comprar o que já tem
            (porque não sabia que tinha) e não comprar o que precisa (porque esqueceu de colocar
            na lista). A <a href="/funcionalidades/despensa">despensa do Mise</a> funciona
            como inventário conectado à lista — você sabe o que tem sem precisar abrir cada armário.
          </p>

          <p>
            Na prática, quem combina os três elementos tende a gastar menos não porque compra produtos
            mais baratos, mas porque compra o que vai usar de verdade. Sem itens vencendo no fundo
            da geladeira. Sem segunda viagem no meio da semana pra buscar o que esqueceu.
          </p>

          {/* QUANTO ECONOMIZAR */}
          <h2 id="quanto-economizar">Quanto você pode economizar por mês</h2>

          <p>
            A compra mensal média de um casal fica entre R$ 1.200 e R$ 1.800 (estimativa FIPE/IBGE, 2024).
            Considerando que compra sem lista sai 27% mais cara, o gasto extra por falta de planejamento
            pode chegar a <strong>R$ 320–490 por mês</strong> — ou <strong>R$ 3.800–5.900 por ano</strong>.
          </p>

          <p>
            Não é uma projeção abstrata. É o custo de 3 a 5 itens por impulso por ida, de comprar
            duplicado porque não checou a despensa, de fazer segunda viagem porque esqueceu itens essenciais,
            de jogar fora alimento vencido porque comprou sem plano.
          </p>

          <p>
            Uma família de 4 pessoas que gasta R$ 2.500/mês sem planejamento pode chegar a R$ 1.800
            com lista fixa, cardápio semanal e despensa organizada. A diferença não vem de trocar de
            supermercado nem de cortar categorias — vem de comprar com precisão o que vai ser usado.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre como economizar no mercado</h2>

          <ul className="faq-list">

            <li className="faq-item">
              <p className="faq-q">Como economizar no mercado de forma prática?</p>
              <p className="faq-a">
                A economia começa em casa: checar a despensa antes de montar a lista, planejar o
                cardápio da semana e escrever tudo organizado por grupos de corredor. Dentro do
                supermercado, comer antes de ir, seguir a lista e comparar o preço por quilo —
                não o preço da embalagem. Quem usa lista fixa gasta, em média, <strong>27% menos</strong>.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">Quanto dá pra economizar por mês fazendo lista de compras?</p>
              <p className="faq-a">
                Para um casal com gasto mensal de R$ 1.200–1.800, o planejamento pode economizar
                entre <strong>R$ 320 e R$ 490 por mês</strong> — só eliminando compras duplicadas e itens por impulso.
                Num ano, a diferença pode passar de R$ 5.000.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">Vale mais a pena ir ao mercado uma vez por semana ou várias vezes?</p>
              <p className="faq-a">
                Uma vez por semana com lista completa é mais barato. Cada visita extra é uma exposição
                a mais às estratégias de venda do varejo — e mais oportunidades de compra por impulso.
                Quem concentra as compras tende a gastar menos no total.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">O que fazer para não gastar mais do que o orçamento no mercado?</p>
              <p className="faq-a">
                Defina o orçamento antes de montar a lista. Planeje o cardápio primeiro, depois liste
                os ingredientes que faltam. Cheque a despensa antes de escrever qualquer coisa. No
                mercado, siga a lista e evite corredores que não são da sua rota.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">Como evitar desperdício de alimentos e economizar?</p>
              <p className="faq-a">
                O principal causador de desperdício doméstico é comprar sem saber o que já tem em casa.
                Com despensa organizada e conectada à lista, você compra só o que vai usar. O Brasil
                descarta cerca de <strong>41 kg de alimento por pessoa por ano</strong> — boa parte começa no mercado.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre preço por unidade e preço por quilo?</p>
              <p className="faq-a">
                O preço exibido na etiqueta costuma ser por embalagem. O preço por quilo ou litro é o
                que permite comparação real entre marcas e tamanhos. Por lei, ele deve estar na etiqueta
                — olhe sempre esse número antes de escolher entre duas opções.
              </p>
            </li>

          </ul>

          {/* AUTHOR */}
          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Criador do Mise. Faz lista de compras toda semana desde que aprendeu a cozinhar — e ainda assim esquece o alho de vez em quando.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Chega de mercado no improviso.<br />
              <em>Usa o Mise.</em>
            </h2>
            <p>
              Lista de compras, despensa e cardápio semanal num só lugar.
              Você define o que vai cozinhar, o app monta a lista do que falta.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Voltar ao topo
          </a>

        </article>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="currentColor"/>
              <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A"/>
            </svg>
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2026 Mise</span>
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
