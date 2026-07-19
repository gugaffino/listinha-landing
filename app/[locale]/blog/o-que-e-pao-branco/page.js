import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Pão branco: o que é, calorias e como escolher no mercado',
  description: 'Pão branco é feito de farinha refinada — menos fibra, índice glicêmico mais alto. Saiba quantas calorias tem, o que muda pro integral e como escolher bem.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
  },
  openGraph: {
    title: 'Pão branco: o que é, calorias e como escolher no mercado',
    description: 'Pão branco é feito de farinha refinada — menos fibra, índice glicêmico mais alto. Saiba quantas calorias tem, o que muda pro integral e como escolher bem.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
    images: [
      {
        url: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fatias de pão branco sobre prato branco — close-up mostrando textura macia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pão branco: o que é, calorias e como escolher no mercado',
    description: 'Pão branco é feito de farinha refinada — menos fibra, índice glicêmico mais alto. Saiba quantas calorias tem, o que muda pro integral e como escolher bem.',
    images: ['https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pão branco tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Pão branco é feito de farinha de trigo refinada, que contém glúten. Não é indicado para pessoas com doença celíaca ou sensibilidade ao glúten. Para essas pessoas, é preciso buscar pães feitos com farinha de arroz, tapioca ou outras farinhas sem glúten — e verificar se não há contaminação cruzada na produção.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pão de forma branco e pão branco são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São feitos do mesmo tipo de farinha — refinada — mas o pão de forma tem formato industrial padronizado, costuma ter conservantes para durar mais na prateleira e muitas vezes tem açúcar e gordura vegetal na composição. Pão branco é o nome genérico para qualquer pão feito com farinha branca, incluindo o francês, o de forma e o de padaria.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pão branco pode ir para a geladeira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas não é recomendado. A geladeira retira umidade do pão e acelera o processo de retrogradação do amido — o pão fica duro e ressecado mais rápido do que ficaria em temperatura ambiente. O ideal é guardar em temperatura ambiente em saco fechado por até 5 dias. Para durar mais, o freezer é melhor opção.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que significa "farinha de trigo enriquecida" no rótulo do pão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Farinha de trigo enriquecida é farinha refinada à qual foram adicionados ferro e ácido fólico — obrigatório por lei no Brasil (Resolução RDC 150/2017 da Anvisa). Não é farinha integral. Se o primeiro ingrediente do rótulo for "farinha de trigo enriquecida com ferro e ácido fólico", o pão é branco, mesmo que tenha grãos na tampa ou no nome.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual pão é melhor para torrada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para torrada, o pão branco costuma resultar em textura mais crocante e uniforme. O pão integral, por ter mais fibra e umidade, tende a ficar menos crocante e pode endurecer de forma desigual. Para quem quer a textura clássica de torrada, o de forma branco ainda é a opção mais prática.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pão branco tem fibras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tem, mas pouco. Uma porção de 100g de pão branco tem em média 2,5g de fibra — enquanto o integral chega a 4,9g na mesma quantidade, segundo a TACO (Tabela Brasileira de Composição de Alimentos). A recomendação diária da OMS é 25g de fibra. Para atingir isso só com pão branco seria necessário comer quantidades muito maiores do que com o integral.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pão branco: o que é, calorias e como escolher no mercado',
  description: 'Pão branco é feito de farinha refinada — menos fibra, índice glicêmico mais alto. Saiba quantas calorias tem, o que muda pro integral e como escolher bem.',
  image: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-18',
  dateModified: '2026-06-18',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é pão branco', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco' },
  ],
}

export default function OQueEPaoBranco({ params }) {
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
            <li><a href="/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">O que é pão branco</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-18">18 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é pão branco: como é feito, calorias e diferença pro integral
          </h1>
          <p className="blog-desc">
            O pão branco tá em todo café da manhã brasileiro. Mas o que é exatamente, o que o refino faz com o trigo e quando vale escolher o integral em vez dele?
          </p>

          <div className="answer-box">
            <p>
              <strong>Pão branco</strong> é feito de farinha de trigo refinada — o processo de moagem remove o farelo e o germe do grão, deixando só o endosperma.
              O resultado é um pão mais macio e de sabor neutro, com menor teor de fibra e vitaminas do que o integral.
              Em calorias, a diferença é pequena. O que muda de verdade é o índice glicêmico e a saciedade.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fatias de pão branco sobre prato branco — close-up mostrando textura macia"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é e como é feito</a></li>
              <li><a href="#calorias">Quantas calorias tem</a></li>
              <li><a href="#diferenca-integral">Pão branco vs. integral</a></li>
              <li><a href="#engorda">Pão branco engorda?</a></li>
              <li><a href="#como-escolher">Como escolher no mercado</a></li>
              <li><a href="#como-armazenar">Como armazenar em casa</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pão branco assado inteiro sobre superfície clara — textura da casca e miolo macio visíveis"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é pão branco e como é feito</h2>

          <p>
            Pão branco começa com farinha de trigo refinada. O grão de trigo tem três partes: o farelo (casca externa), o germe (parte interna germinativa) e o endosperma (o centro amiláceo). No refino, o moinho retira o farelo e o germe — e fica só o endosperma.
          </p>
          <p>
            Essa separação tem um motivo prático: o farelo contém óleos que envelhecem rápido. Farinha integral estraga em semanas; farinha branca dura meses. Para a indústria alimentícia, é muito mais viável. Para você, significa pão de forma que fica na prateleira do mercado por mais tempo.
          </p>
          <p>
            O problema é que o farelo e o germe carregam a maior parte dos nutrientes do grão — fibra, vitaminas do complexo B (especialmente B1, B3 e B6), vitamina E, ferro, zinco e magnésio. O endosperma que sobra tem amido e proteína, mas fica nutricionalmente atrás do grão inteiro.
          </p>
          <p>
            No Brasil, a lei exige que a farinha de trigo refinada seja enriquecida com ferro e ácido fólico —{' '}
            <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener">
              Resolução RDC 150/2017 da Anvisa
            </a>
            . Então o pão branco tem esses dois nutrientes adicionados de volta. Mas o restante que o refino retirou não retorna com eles.
          </p>
          <p>
            O resultado na prática: pão macio, sabor neutro, fácil de combinar com qualquer coisa. Funciona bem pra torrada, pra quem tem estômago sensível e pra quem simplesmente prefere o sabor suave. Não é vilão — é uma escolha com trade-offs claros.
          </p>

          {/* CALORIAS */}
          <h2 id="calorias">Quantas calorias tem o pão branco</h2>

          <p>
            Segundo a TACO (Tabela Brasileira de Composição de Alimentos, UNICAMP), 100g de pão branco comum têm aproximadamente <strong>253 kcal</strong>. Isso equivale a 3–4 fatias médias de pão de forma.
          </p>

          <ul className="item-list">
            <li>Calorias: ~253 kcal por 100g</li>
            <li>Carboidratos: ~50g por 100g</li>
            <li>Proteína: ~8g por 100g</li>
            <li>Gordura: ~3g por 100g</li>
            <li>Fibra: ~2,5g por 100g</li>
          </ul>

          <p>
            Para comparar: o pão integral fica em torno de 253 kcal também — mesma faixa. A diferença calórica entre branco e integral é pequena o suficiente pra ser irrelevante na prática cotidiana.
          </p>
          <p>
            O que muda é o índice glicêmico. O pão branco tem índice glicêmico em torno de 70–75; o integral fica entre 55–65. Isso significa que o pão branco eleva o açúcar no sangue mais rápido, gera um pico de insulina mais acentuado e, consequentemente, a fome volta antes.
          </p>
          <p>
            Traduzindo: não é que pão branco engorda mais por caloria. É que ele sacia por menos tempo — e isso afeta quanto você come no restante do dia.
          </p>

          {/* DIFERENÇA INTEGRAL */}
          <h2 id="diferenca-integral">Pão branco vs. integral: o que muda de verdade</h2>

          <p>
            A diferença principal não é caloria — é fibra e saciedade.
          </p>

          <ul className="item-list">
            <li><strong>Fibra:</strong> pão branco tem ~2,5g/100g; integral tem ~4,9g/100g — quase o dobro</li>
            <li><strong>Índice glicêmico:</strong> branco ~70–75; integral ~55–65</li>
            <li><strong>Saciedade:</strong> integral sacia por mais tempo pelo teor de fibra</li>
            <li><strong>Vitaminas do complexo B:</strong> integral retém mais B1, B3, B6 e vitamina E</li>
            <li><strong>Sabor:</strong> branco é mais suave e neutro; integral é mais denso e levemente terroso</li>
            <li><strong>Textura:</strong> branco é mais macio; integral é mais firme</li>
          </ul>

          <p>
            Tem um detalhe que muita gente não percebe na gôndola: "multigrãos" e "pão com sementes" não são necessariamente integral. Você lê "multigrãos" na embalagem e acha que está comprando algo nutritivamente diferente. Geralmente não está. Basta olhar o primeiro ingrediente no rótulo — se for "farinha de trigo enriquecida com ferro e ácido fólico", é pão branco. Os grãos na tampa são decorativos.
          </p>
          <p>
            Pão integral de verdade tem "farinha de trigo integral" como primeiro ingrediente. Costuma custar mais porque a produção é mais cara e a validade menor.
          </p>
          <p>
            Para quem quer anotar o tipo exato antes de sair de casa, a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras do Mise</a>{' '}
            deixa registrar o detalhe — sem depender de memória na hora de pegar na gôndola.
          </p>

          <div className="blog-inline-cta">
            <p>Anota o tipo certo de pão antes de ir ao mercado. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ENGORDA */}
          <h2 id="engorda">Pão branco engorda?</h2>

          <p>
            Não por si só. O que engorda é o excesso calórico — e pão branco entra nisso da mesma forma que qualquer outro alimento.
          </p>
          <p>
            O argumento contra o pão branco não é que ele tem mais caloria. É que ele sacia menos, o que leva a comer mais ao longo do dia. Se você toma café da manhã com pão branco e sente fome uma hora depois, não é imaginação — é o índice glicêmico mais alto fazendo seu papel.
          </p>
          <p>
            Isso importa mais em algumas situações do que em outras. Se o café da manhã é seguido de uma rotina com hora certa de almoço, o impacto é menor. Se a manhã é longa e você precisa de saciedade por 3–4 horas, o integral tem vantagem real.
          </p>
          <p>
            Para quem segue uma{' '}
            <a href="/blog/dieta-sem-acucar">dieta com controle de açúcar</a>
            , o índice glicêmico do pão branco é um ponto de atenção — mas não necessariamente um motivo pra cortar completamente. Depende da quantidade e do que você come junto.
          </p>

          {/* COMO ESCOLHER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de pão sobre superfície cinza — mostrando textura e miolo do pão"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-escolher" className="img-above">Como escolher pão no mercado</h2>

          <p>
            O rótulo do pão é onde a maioria das confusões acontece. Quatro pontos pra checar antes de colocar na{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>
            :
          </p>

          <h3>Primeiro ingrediente no rótulo</h3>
          <p>
            Os ingredientes aparecem em ordem decrescente de quantidade. Se o primeiro for "farinha de trigo enriquecida com ferro e ácido fólico", é pão branco. Se for "farinha de trigo integral", é integral. Tudo começa aí — o nome bonito na frente da embalagem é secundário.
          </p>

          <h3>Multigrãos não é integral</h3>
          <p>
            Multigrãos significa que tem mais de um tipo de grão na composição — mas a base pode ser farinha branca com grãos decorativos. O nome na embalagem é marketing. O rótulo nutricional é o que conta.
          </p>

          <h3>Teor de fibra por porção</h3>
          <p>
            Uma porção de pão (2 fatias, ~50g) com menos de 1,5g de fibra é pão branco ou muito próximo disso. Com 2g ou mais por porção, está no território do integral ou enriquecido com fibra. Esse número aparece na tabela nutricional — é rápido de checar.
          </p>

          <h3>Lista de ingredientes curta</h3>
          <p>
            Pão com 3–5 ingredientes tende a ser mais simples do que pão com 15. Conservantes, emulsificantes e estabilizantes não são necessariamente perigosos, mas uma lista longa indica produto mais industrializado — com validade maior e, geralmente, menos fibra real por fatia.
          </p>

          {/* COMO ARMAZENAR */}
          <h2 id="como-armazenar">Como armazenar pão branco em casa</h2>

          <p>
            Guardar pão parece simples, mas tem uma regra contraintuitiva que vale conhecer.
          </p>

          <h3>Temperatura ambiente</h3>
          <p>
            A melhor opção para o curto prazo. Pão branco dura 3–5 dias em temperatura ambiente, dentro do saco original bem fechado ou em pote hermético. Longe de umidade e calor direto.
          </p>

          <h3>Geladeira: não recomendado</h3>
          <p>
            A geladeira retira umidade e acelera a retrogradação do amido — o pão fica duro e ressecado antes do prazo. Quem guarda pão na geladeira "pra durar mais" está fazendo o oposto: o pão endurece dois dias antes do que ficaria fora. Para durabilidade, o freezer é a escolha certa.
          </p>

          <h3>Freezer</h3>
          <p>
            O freezer funciona bem por até 3 meses. Antes de congelar, fatie e separe as fatias com papel manteiga ou coloque em ziplock com o ar retirado. Assim você descongela só o que vai usar — fatia por fatia, direto na torradeira ou deixando descansar 10 minutos em temperatura ambiente.
          </p>
          <p>
            Pão de forma branco congela especialmente bem: a textura macia suporta o ciclo de congelamento e descongelamento sem perder muito. A{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>{' '}
            deixa anotar onde cada item está guardado e quando vence — útil pra não esquecer o pão no freezer por 4 meses.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você vai fazer com ele.</p>
          <p>
            Para torrada, pão branco ganha na textura — fica mais crocante e uniforme. Para quem tem filhos que recusam integral, pão branco é o que realmente vai ser comido. Para quem tem estômago sensível ou usa o pão em momentos pontuais, sem precisar de saciedade prolongada, faz sentido.
          </p>
          <p>
            Para quem precisa de um café da manhã que segure até o almoço — especialmente em rotinas corridas sem onde beliscar no meio da manhã — o integral tem vantagem real. Menos fome às 10h30 não é aspiração de blog de saúde; é fisiologia de fibra.
          </p>
          <p>
            A escolha mais honesta: se você vai usar pão só pra torrada com manteiga no domingo de manhã, compra o branco. Se é o café da manhã de segunda a sexta, considera o integral — ou compra os dois e vê qual some primeiro. O que acontece na despensa é um dado real sobre o que você realmente come.
          </p>
          <p>
            Pão branco tem lugar na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}de muita gente. Não é erro nem concessão — é a realidade de como a maioria dos brasileiros come. O que muda com a informação é comprar sabendo o que está escolhendo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre pão branco</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Pão branco tem glúten?</p>
              <p className="faq-a">
                Sim. É feito de farinha de trigo refinada, que contém glúten. Não é indicado para pessoas com doença celíaca ou sensibilidade ao glúten. Para essas pessoas, é preciso buscar pães feitos com farinha de arroz, tapioca ou outras farinhas sem glúten — e verificar se não há contaminação cruzada na produção.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pão de forma branco e pão branco são a mesma coisa?</p>
              <p className="faq-a">
                São feitos do mesmo tipo de farinha — refinada — mas o pão de forma tem formato industrial padronizado, costuma ter conservantes pra durar mais na prateleira e muitas vezes tem açúcar e gordura vegetal na composição. Pão branco é o nome genérico pra qualquer pão feito com farinha branca: o francês, o de forma, o de padaria.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pão branco pode ir para a geladeira?</p>
              <p className="faq-a">
                Pode, mas não é recomendado. A geladeira retira umidade do pão e acelera o processo de retrogradação do amido — o pão fica duro e ressecado mais rápido do que ficaria em temperatura ambiente. O ideal é guardar em temperatura ambiente em saco fechado por até 5 dias. Para durar mais, o freezer é melhor opção.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que significa "farinha de trigo enriquecida" no rótulo?</p>
              <p className="faq-a">
                Farinha de trigo enriquecida é farinha refinada com ferro e ácido fólico adicionados — obrigatório por lei no Brasil. Não é farinha integral. Se o primeiro ingrediente do rótulo for "farinha de trigo enriquecida com ferro e ácido fólico", o pão é branco, mesmo que tenha grãos na tampa ou no nome da embalagem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual pão é melhor para torrada?</p>
              <p className="faq-a">
                Para torrada, o pão branco costuma resultar em textura mais crocante e uniforme. O pão integral, por ter mais fibra e umidade, tende a ficar menos crocante e pode endurecer de forma desigual. Para a textura clássica de torrada, o de forma branco ainda é a opção mais prática.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pão branco tem fibras?</p>
              <p className="faq-a">
                Tem, mas pouco. Uma porção de 100g tem em média 2,5g de fibra — enquanto o integral chega a 4,9g na mesma quantidade, segundo a TACO. A{' '}
                <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">
                  OMS recomenda 25g de fibra por dia
                </a>
                . Para atingir isso só com pão branco seria necessário comer quantidades muito maiores do que com o integral.
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
                Criador do Mise. Por anos foi ao mercado de cabeça e voltava com pão de forma multigrãos achando que tinha feito a escolha certa. O primeiro ingrediente era farinha branca.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você compra o pão certo — e não esquece de anotar qual tipo antes de sair de casa.
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
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
