import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Dieta mediterrânea cardápio: 7 dias prontos pra copiar',
  description: 'Dieta mediterrânea cardápio pra 7 dias com azeite, peixe, grãos integrais e vegetais. Veja o que comer, o que evitar e como montar a lista de compras certa.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/dieta-mediterranea-cardapio',
  },
  openGraph: {
    title: 'Dieta mediterrânea cardápio: 7 dias prontos pra copiar',
    description: 'Dieta mediterrânea cardápio pra 7 dias com azeite, peixe, grãos integrais e vegetais. Veja o que comer, o que evitar e como montar a lista de compras certa.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/dieta-mediterranea-cardapio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Marmitas com grão-de-bico, falafel, arroz e vegetais coloridos — refeições no estilo da dieta mediterrânea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dieta mediterrânea cardápio: 7 dias prontos pra copiar',
    description: 'Dieta mediterrânea cardápio pra 7 dias com azeite, peixe, grãos integrais e vegetais. Veja o que comer, o que evitar e como montar a lista de compras certa.',
    images: ['https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dieta mediterrânea emagrece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode ajudar a emagrecer, mas não é esse o objetivo principal — é um padrão alimentar pensado pra saúde cardiovascular a longo prazo. A perda de peso acontece como consequência de cortar ultraprocessado e açúcar, não porque a dieta conta caloria ou restringe porção. Se o objetivo é emagrecimento rápido, existem abordagens mais diretas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pode comer carne vermelha na dieta mediterrânea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas pouco — a recomendação é uma vez por semana, no máximo. O grosso da proteína vem de peixe, frango, ovo e leguminosas. Carne vermelha não é proibida, só não é o padrão do dia a dia como costuma ser no prato brasileiro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dieta mediterrânea tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tem, e bastante — pão integral, macarrão e cuscuz fazem parte do padrão clássico. Quem precisa evitar glúten consegue adaptar trocando por arroz, quinoa e batata doce sem perder o resto da estrutura (azeite, peixe, vegetais). O grão em si não é o ponto central da dieta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa seguir a dieta mediterrânea no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do quanto você troca carne vermelha por peixe fresco caro. Usando peixe em lata (sardinha, atum), grão-de-bico, ovo e vegetais da época, o custo fica parecido com o de uma alimentação comum. O azeite de oliva extra virgem é o item que mais pesa no orçamento — vale comprar em garrafa maior pra diluir o preço por litro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dieta mediterrânea e low carb são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A mediterrânea inclui pão, macarrão e grãos integrais em quantidade normal — carboidrato não é o vilão. O que ela corta é açúcar, ultraprocessado e excesso de carne vermelha. Dá pra comparar com a dieta low carb aqui: as duas cortam ultraprocessado, mas divergem completamente sobre carboidrato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Precisa comer peixe todo dia na dieta mediterrânea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não precisa. A recomendação usual é peixe 2 a 3 vezes por semana, incluindo peixes gordos como sardinha e atum. Nos outros dias, a proteína vem de frango, ovo, grão-de-bico, lentilha ou queijo. Comer peixe todo dia não é obrigatório nem é o que a maioria dos estudos originais da região mediterrânea mostrou.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva pra ver resultado na dieta mediterrânea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Melhora em disposição e digestão costuma aparecer nas primeiras semanas, só de cortar ultraprocessado. Resultados de saúde cardiovascular (colesterol, pressão) levam meses de consistência pra aparecer em exame. Não é dieta de resultado rápido — é um padrão pra manter, não pra fazer por 15 dias e voltar ao normal.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dieta mediterrânea cardápio: 7 dias prontos pra copiar',
  description: 'Dieta mediterrânea cardápio pra 7 dias com azeite, peixe, grãos integrais e vegetais. Veja o que comer, o que evitar e como montar a lista de compras certa.',
  image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/dieta-mediterranea-cardapio',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Dieta mediterrânea cardápio', item: 'https://www.miseemcasa.com.br/pt/blog/dieta-mediterranea-cardapio' },
  ],
}

export default function DietaMediterraneaCardapio({ params }) {
  const { locale } = params
  if (locale !== 'pt') {
    notFound()
  }
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
            <li><a href="/pt/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Dieta mediterrânea cardápio</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">3 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Dieta mediterrânea na prática: um cardápio de 7 dias pra testar antes de jurar fidelidade
          </h1>
          <p className="blog-desc">
            Não é dieta de contar caloria nem de cortar carboidrato. É comer mais peixe, mais azeite, mais grão e vegetal, e deixar a carne vermelha pro fim de semana. Aqui vai o que muda no prato, os benefícios que a ciência realmente sustenta e um cardápio de 7 dias pra começar sem inventar receita nova toda hora.
          </p>

          <div className="answer-box">
            <p>
              <strong>Dieta mediterrânea</strong> é um padrão alimentar baseado em azeite de oliva, peixe, grãos integrais, leguminosas, frutas e vegetais, com carne vermelha limitada a uma vez por semana.
              Não é dieta restritiva — é o jeito de comer com mais décadas de estudo confirmando benefício real pra saúde do coração.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Marmitas com grão-de-bico, falafel, arroz e vegetais coloridos — refeições no estilo da dieta mediterrânea"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é a dieta mediterrânea</a></li>
              <li><a href="#o-que-comer">O que entra no prato</a></li>
              <li><a href="#o-que-cortar">O que fica de fora</a></li>
              <li><a href="#beneficios">Benefícios que a ciência confirma</a></li>
              <li><a href="#cardapio">Cardápio de 7 dias</a></li>
              <li><a href="#lista-de-compras">Como virar lista de compras</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <h2 id="o-que-e">O que é a dieta mediterrânea</h2>

          <p>
            A dieta mediterrânea não nasceu em consultório nem em laboratório. Ela é o registro do que famílias da Grécia, do sul da Itália e de Creta comiam nas décadas de 1950 e 1960, antes do ultraprocessado virar padrão no mundo inteiro. Pesquisadores notaram que essas populações tinham muito menos doença cardíaca do que o esperado — e passaram décadas tentando entender por quê.
          </p>
          <p>
            A resposta não estava num único alimento milagroso. Estava no conjunto: azeite de oliva no lugar de manteiga e óleo processado, peixe e leguminosa como proteína principal, pão e massa feitos de grão integral, muita fruta e vegetal fresco, e carne vermelha reservada pra ocasiões — não pro almoço de segunda a sexta.
          </p>
          <p>
            Hoje a dieta mediterrânea é uma das mais estudadas em nutrição, com décadas de acompanhamento de grandes populações confirmando associação com menos doença cardiovascular. Não é moda passageira nem plano de emagrecimento de 30 dias. É um padrão pra manter, não pra terminar.
          </p>

          {/* O QUE COMER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5737246/pexels-photo-5737246.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Azeite de oliva sendo despejado em frigideira durante o preparo de uma refeição"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="o-que-comer" className="img-above">O que entra no prato</h2>

          <p>
            A base é vegetal, com peixe e azeite fazendo o trabalho que a manteiga e a carne fazem no prato tradicional brasileiro. Na prática, isso significa:
          </p>

          <ul className="item-list">
            <li><strong>Azeite de oliva extra virgem:</strong> gordura principal, usado pra refogar, temperar e finalizar prato — não só salada.</li>
            <li><strong>Peixe e frutos do mar:</strong> 2 a 3 vezes por semana, com destaque pra peixes gordos como sardinha, atum e cavala.</li>
            <li><strong>Leguminosas:</strong> grão-de-bico, lentilha e feijão como fonte de proteína no dia a dia, não só ocasional.</li>
            <li><strong>Grãos integrais:</strong> pão integral, macarrão integral, arroz integral e cuscuz — carboidrato não é cortado, é trocado pela versão menos refinada.</li>
            <li><strong>Frutas e vegetais frescos:</strong> em quase toda refeição, de preferência da estação.</li>
            <li><strong>Oleaginosas e sementes:</strong> punhado de nozes, amêndoas ou sementes como lanche ou complemento de salada.</li>
            <li><strong>Frango e ovo:</strong> proteína animal do dia a dia, com moderação — não é dieta vegetariana, mas usa menos carne do que o padrão comum.</li>
          </ul>

          <p>
            Quase todo item dessa lista já é comum na cozinha brasileira. A diferença real está na proporção: mais vegetal e peixe no prato, menos carne vermelha e menos fritura industrial.
          </p>

          {/* O QUE CORTAR */}
          <h2 id="o-que-cortar">O que fica de fora (ou vira raridade)</h2>

          <p>
            A dieta mediterrânea não tem lista de proibições rígida — mas tem uma hierarquia clara do que é exceção e do que é regra.
          </p>

          <ul className="item-list">
            <li><strong>Carne vermelha:</strong> não é proibida, mas some do cardápio diário. A recomendação usual é uma vez por semana.</li>
            <li><strong>Ultraprocessado:</strong> embutido, refrigerante, salgadinho e comida pronta de pacote ficam fora do padrão base.</li>
            <li><strong>Açúcar refinado:</strong> doce entra como exceção, não como sobremesa diária. Fruta faz o papel de doce do dia a dia.</li>
            <li><strong>Manteiga e gordura animal:</strong> substituída pelo azeite na maior parte das preparações — não é proibição total, é troca de padrão.</li>
            <li><strong>Farinha refinada em excesso:</strong> pão branco e massa comum viram exceção; a base passa a ser integral.</li>
          </ul>

          <p>
            Reparou que nada aqui é radical? Essa é a razão pela qual a dieta mediterrânea costuma durar mais do que dietas de corte total. Ninguém abandona um plano que ainda permite pão, queijo e uma taça de vinho de vez em quando.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Peixes frescos expostos em bandejas de mercado, com balança ao fundo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kindel Media / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios que a ciência confirma</h2>

          <h3>Saúde do coração</h3>
          <p>
            Esse é o benefício mais estudado e mais consistente. A combinação de azeite, peixe gordo e fibra de grão integral ajuda a reduzir colesterol ruim (LDL) e triglicerídeos. É o motivo original pelo qual pesquisadores começaram a estudar essa forma de comer há décadas.
          </p>

          <h3>Controle de açúcar no sangue</h3>
          <p>
            A troca de farinha refinada por grão integral, somada à fibra das leguminosas, desacelera a absorção de açúcar. Isso ajuda no controle glicêmico mesmo em quem não tem diagnóstico de diabetes — o corpo sofre menos picos e quedas de energia ao longo do dia.
          </p>

          <h3>Inflamação</h3>
          <p>
            Ômega-3 do peixe e polifenóis do azeite extra virgem têm ação anti-inflamatória reconhecida. Dieta rica em ultraprocessado tende a manter o corpo num estado de inflamação baixa e constante — a mediterrânea reduz esse padrão pela composição dos alimentos, não por suplemento.
          </p>

          <h3>Longevidade</h3>
          <p>
            Populações acompanhadas por décadas na região mediterrânea original mostraram menos doença crônica e maior expectativa de vida associada a esse padrão alimentar. Não é garantia individual — é correlação populacional forte, sustentada por muito tempo de observação.
          </p>

          <div className="blog-inline-cta">
            <p>Cardápio pronto não vale nada se some antes de virar lista. <em>O Mise conecta as duas coisas.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* CARDÁPIO 7 DIAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedade colorida de vegetais frescos expostos em banca de mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Muhamad Guruh Budi Hartono / Pexels</p>
          </div>

          <h2 id="cardapio" className="img-above">Cardápio de 7 dias pra testar</h2>

          <p>
            Um exemplo de semana, sem receita complicada e sem ingrediente impossível de achar no mercado brasileiro. Ajuste porção pelo seu apetite — o cardápio abaixo é referência de estrutura, não regra fixa.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Segunda</strong>
                <span>Café: iogurte natural com fruta e nozes. Almoço: salada de grão-de-bico, tomate e atum com azeite. Jantar: sopa de lentilha com pão integral.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Terça</strong>
                <span>Café: pão integral com azeite e tomate. Almoço: frango grelhado com legumes assados no azeite. Jantar: omelete de espinafre com salada verde.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Quarta</strong>
                <span>Café: frutas com aveia e canela. Almoço: sardinha grelhada com arroz integral e vegetais. Jantar: salada de folhas com queijo e oleaginosas.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Quinta</strong>
                <span>Café: iogurte com granola e mel. Almoço: cuscuz de legumes com grão-de-bico. Jantar: peixe assado com purê de batata doce.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">5</span>
              <div className="tip-body">
                <strong>Sexta</strong>
                <span>Café: torrada integral com abacate. Almoço: massa integral com molho de tomate, azeitona e azeite. Jantar: salada de atum com legumes crus.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">6</span>
              <div className="tip-body">
                <strong>Sábado</strong>
                <span>Café: ovos mexidos com tomate e ervas. Almoço: um dia com carne vermelha grelhada e salada — a exceção da semana. Jantar: sopa de legumes leve.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">7</span>
              <div className="tip-body">
                <strong>Domingo</strong>
                <span>Café: frutas variadas com queijo fresco. Almoço: peixe ao forno com legumes e arroz integral. Jantar: salada completa com grão-de-bico e azeite.</span>
              </div>
            </li>
          </ul>

          <p>
            Repare que o padrão se repete: proteína magra ou peixe, vegetal em quantidade, azeite como tempero principal, grão integral no lugar do refinado. Depois da primeira semana, você já sabe montar variações sem precisar seguir o roteiro à risca.
          </p>

          {/* LISTA DE COMPRAS */}
          <h2 id="lista-de-compras">Como transformar isso em lista de compras</h2>

          <p>
            Cardápio bonito no papel não resolve nada se a despensa não acompanha. Cerca de 62% dos brasileiros ainda fazem mercado "de cabeça", sem lista — e é exatamente aí que o grão-de-bico da receita de terça fica faltando na hora de cozinhar.
          </p>
          <p>
            O caminho mais direto é fixo: monte o{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a>{' '}
            primeiro, com os pratos que você realmente vai cozinhar, depois deixa o Mise puxar os ingredientes pra{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            automaticamente. Assim o azeite, o peixe em lata e o grão-de-bico chegam no carrinho junto — não ficam de fora porque você esqueceu de anotar.
          </p>
          <p>
            Vale também dar uma olhada em como funciona o{' '}
            <a href="/pt/blog/azeite-de-oliva">azeite de oliva</a>{' '}
            antes de comprar — extra virgem, virgem e refinado não são a mesma coisa, e a diferença de preço no mercado costuma refletir isso. Se você já testou outro padrão alimentar antes, o{' '}
            <a href="/pt/blog/dieta-low-carb-cardapio">cardápio low carb</a>{' '}
            é uma comparação direta de estrutura pra ver qual se encaixa melhor na sua rotina.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre a dieta mediterrânea</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Dieta mediterrânea emagrece?</p>
              <p className="faq-a">
                Pode ajudar a emagrecer, mas não é esse o objetivo principal — é um padrão pensado pra saúde cardiovascular a longo prazo. A perda de peso acontece como consequência de cortar ultraprocessado e açúcar, não porque a dieta conta caloria ou restringe porção. Se o objetivo é emagrecimento rápido, existem abordagens mais diretas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pode comer carne vermelha na dieta mediterrânea?</p>
              <p className="faq-a">
                Pode, mas pouco — a recomendação é uma vez por semana, no máximo. O grosso da proteína vem de peixe, frango, ovo e leguminosas. Carne vermelha não é proibida, só não é o padrão do dia a dia como costuma ser no prato brasileiro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dieta mediterrânea tem glúten?</p>
              <p className="faq-a">
                Tem, e bastante — pão integral, macarrão e cuscuz fazem parte do padrão clássico. Quem precisa evitar glúten consegue adaptar trocando por arroz, quinoa e batata doce sem perder o resto da estrutura. O grão em si não é o ponto central da dieta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto custa seguir a dieta mediterrânea no Brasil?</p>
              <p className="faq-a">
                Depende do quanto você troca carne vermelha por peixe fresco caro. Usando peixe em lata, grão-de-bico, ovo e vegetais da época, o custo fica parecido com o de uma alimentação comum. O azeite extra virgem é o item que mais pesa — vale comprar em garrafa maior pra diluir o preço por litro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dieta mediterrânea e low carb são a mesma coisa?</p>
              <p className="faq-a">
                Não. A mediterrânea inclui pão, macarrão e grãos integrais em quantidade normal — carboidrato não é o vilão. O que ela corta é açúcar, ultraprocessado e excesso de carne vermelha. As duas cortam ultraprocessado, mas divergem completamente sobre carboidrato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Precisa comer peixe todo dia na dieta mediterrânea?</p>
              <p className="faq-a">
                Não precisa. A recomendação usual é peixe 2 a 3 vezes por semana, incluindo peixes gordos como sardinha e atum. Nos outros dias, a proteína vem de frango, ovo, grão-de-bico ou lentilha.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto tempo leva pra ver resultado na dieta mediterrânea?</p>
              <p className="faq-a">
                Melhora em disposição e digestão costuma aparecer nas primeiras semanas, só de cortar ultraprocessado. Resultados de saúde cardiovascular levam meses de consistência pra aparecer em exame. Não é dieta de resultado rápido — é um padrão pra manter, não pra fazer por 15 dias e voltar ao normal.
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
                Criador do Mise. Tentou a dieta mediterrânea por três meses e descobriu que o problema nunca foi comer peixe — foi lembrar de comprar peixe fresco antes de ele estragar na geladeira.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              O cardápio funciona.<br />
              <em>Bora usar o Mise pra sustentar.</em>
            </h2>
            <p>
              Conecta cardápio, despensa e lista de compras num só lugar.
              Você planeja a semana uma vez — e o azeite não some antes da hora de cozinhar.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <span className="footer-copy">© 2026 Mise</span>
          <a href="/pt/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
