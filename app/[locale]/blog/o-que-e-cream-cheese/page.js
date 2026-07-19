import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é cream cheese: tipos, usos e diferença do requeijão',
  description: 'Cream cheese é um queijo cremoso macio com sabor levemente ácido, vindo dos EUA. Saiba o que é, tipos, como usar na cozinha e a diferença do requeijão.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
  },
  openGraph: {
    title: 'O que é cream cheese: tipos, usos e diferença do requeijão',
    description: 'Cream cheese é um queijo cremoso macio com sabor levemente ácido, vindo dos EUA. Saiba o que é, tipos, como usar na cozinha e a diferença do requeijão.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
    images: [
      {
        url: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sanduíche com cream cheese e tomates — queijo cremoso macio sobre pão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é cream cheese: tipos, usos e diferença do requeijão',
    description: 'Cream cheese é um queijo cremoso macio com sabor levemente ácido, vindo dos EUA. Saiba o que é, tipos, como usar na cozinha e a diferença do requeijão.',
    images: ['https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cream cheese é a mesma coisa que requeijão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não são a mesma coisa. O requeijão brasileiro é fundido com creme de leite, tem sabor mais neutro e menos gordura. O cream cheese é fermentado por mais tempo, tem sabor mais ácido e textura mais firme. Em receitas frias são muitas vezes intercambiáveis, mas em cheesecake e frosting o cream cheese faz diferença no resultado final.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cream cheese tem lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Como queijo fresco sem maturação, o cream cheese retém lactose. Queijos com maturação longa perdem quase toda a lactose no processo — o cream cheese não passa por esse estágio. Quem tem intolerância deve verificar a tolerância individual ou optar por versões sem lactose, que já existem em algumas marcas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cream cheese pode ir ao forno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Funciona bem em forno a até 180°C, o que explica o sucesso no cheesecake. Em temperatura muito alta por muito tempo, pode soltar um pouco de líquido. Para molhos no fogão, adicione com o fogo já reduzido para manter a textura homogênea.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto cream cheese tem em uma colher de sopa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma colher de sopa cheia tem cerca de 30g de cream cheese — aproximadamente 100 kcal, 3g de proteína e 10g de gordura. É uma porção razoável para usar como pasta em torradas ou como base de um dip rápido.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como substituir cream cheese em receitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende da receita. Para pastas e aperitivos frios, requeijão cremoso ou ricota temperada funcionam bem. Para cheesecake, mascarpone é o substituto mais próximo em estrutura e gordura. Não existe substituto perfeito para todas as receitas — a acidez e a firmeza do cream cheese afetam o resultado de formas que outros queijos não replicam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cream cheese light é tão bom quanto o tradicional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pratos frios como dip e pasta, o resultado é parecido. Em receitas quentes e assadas, a versão light tem mais água e menos gordura — pode soltar líquido ou resultar em textura menos firme. Para cheesecake e frosting, use o tradicional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cream cheese tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cream cheese puro não tem glúten. Versões temperadas com ervas e especiarias podem ter contaminação cruzada dependendo do processamento. Verifique sempre o rótulo, especialmente em caso de doença celíaca.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é cream cheese: tipos, usos e diferença do requeijão',
  description: 'Cream cheese é um queijo cremoso macio com sabor levemente ácido, vindo dos EUA. Saiba o que é, tipos, como usar na cozinha e a diferença do requeijão.',
  image: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é cream cheese', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese' },
  ],
}

export default function OQueECreamCheese({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é cream cheese</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-08">8 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cream cheese: o guia direto sobre o queijo macio que aparece em tudo
          </h1>
          <p className="blog-desc">
            Foi do cheesecake pro bagel, do recheio de torta pro frosting de bolo. O cream cheese tomou conta das receitas nos últimos anos. Mas o que é, de verdade, e o que o diferencia do requeijão que já estava na geladeira?
          </p>

          <div className="answer-box">
            <p>
              <strong>Cream cheese</strong> é um queijo fresco e macio feito com leite e creme de leite, sem passar por maturação.
              Tem sabor levemente ácido — mais marcado que o requeijão — e textura firme o suficiente para estruturar receitas como cheesecake e frosting.
              Foi inventado nos Estados Unidos em 1872 e chegou ao Brasil para ficar.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sanduíche com cream cheese e tomates — queijo cremoso macio sobre pão"
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
              <li><a href="#o-que-e">O que é cream cheese</a></li>
              <li><a href="#como-e-feito">Como é feito</a></li>
              <li><a href="#tipos">Tipos no mercado</a></li>
              <li><a href="#nutricao">Informação nutricional</a></li>
              <li><a href="#diferenca-requeijao">A diferença do requeijão</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#como-guardar">Como guardar</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6529639/pexels-photo-6529639.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cream cheese sobre bagel cortado ao meio — textura cremosa e macia do queijo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cream cheese</h2>

          <p>
            Cream cheese é um queijo fresco e macio, feito com leite de vaca e creme de leite. Não passa por maturação — vai direto do processo de fabricação pra embalagem. É isso que explica a textura suave, o sabor levemente ácido e a validade curta comparada a queijos curados.
          </p>
          <p>
            O nome em inglês significa literalmente "queijo de creme", e a composição reflete isso: mais creme do que a maioria dos queijos frescos. O alto teor de gordura é o que dá a cremosidade característica e a capacidade de segurar a forma em receitas como cheesecake.
          </p>
          <p>
            No Brasil, o cream cheese entrou pelo cheesecake e foi ficando. Hoje aparece em receitas doces e salgadas, em lanches, em recheios de tortas e em massas cremosas. Cream cheese apareceu em tudo nos últimos anos. Alguém deveria ter avisado que viria em tantos formatos.
          </p>

          {/* COMO É FEITO */}
          <h2 id="como-e-feito">Como é feito</h2>

          <p>
            A produção começa com leite e creme de leite misturados, fermentados com bactérias láticas. A fermentação coagula a mistura e desenvolve o sabor ácido — o mesmo processo básico de outros queijos frescos, mas com proporção maior de gordura.
          </p>
          <p>
            A coalhada formada é aquecida, salgada e embalada. Sem prensagem, sem maturação. O produto final é homogêneo e estável na geladeira, mas começa a alterar a textura rapidamente em temperatura ambiente.
          </p>
          <p>
            Entender o processo ajuda na cozinha. Cream cheese tolera forno em temperatura moderada sem desmontar — daí funcionar tão bem em cheesecake. Em fogo alto direto, a gordura pode separar. Adicionando em fogo baixo, a textura se mantém.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de cream cheese no mercado</h2>

          <p>
            O supermercado costuma ter três formatos básicos. Saber a diferença evita comprar errado pra receita.
          </p>

          <h3>Tradicional</h3>
          <p>
            O padrão. Textura mais densa, sabor mais marcado. É o formato certo para cheesecake, frosting e qualquer receita que precise de estrutura. Funciona bem tanto frio quanto no forno.
          </p>

          <h3>Light ou Reduzido em Gordura</h3>
          <p>
            Menos gordura, mais água. Funciona bem como pasta fria — em torrada, bagel ou como dip. Em receitas quentes ou assadas, pode soltar líquido e resultar em textura menos firme. Para cheesecake, o resultado fica abaixo do esperado.
          </p>

          <h3>Cremoso ou Para Espalhar</h3>
          <p>
            Tem mais ar incorporado, mais fácil de espalhar direto da geladeira. Prático para lanche rápido. Menos indicado para receitas onde a estrutura importa — a textura mais leve prejudica o resultado final.
          </p>

          <h3>Temperado</h3>
          <p>
            Versões com ervas, salmão defumado ou frutas já vêm prontas para servir como aperitivo. Práticas, mas com pouca utilidade em receitas — o tempero embutido limita o que dá pra fazer com elas.
          </p>

          {/* NUTRIÇÃO */}
          <h2 id="nutricao">Informação nutricional</h2>

          <p>
            Cream cheese tradicional tem cerca de 342 kcal por 100g. Em porção real — uma colher de sopa cheia, aproximadamente 30g — isso dá em torno de 100 kcal.
          </p>
          <p>
            A maior parte vem das gorduras: cerca de 34g por 100g, predominantemente saturadas. O teor de proteína é baixo para um queijo: aproximadamente 7g por 100g. O sódio é relativamente baixo para um laticínio processado: em torno de 107mg por 100g.
          </p>
          <p>
            Em comparação: o requeijão tem mais sódio (cerca de 227mg por 100g), menos gordura e menos calorias. Cream cheese não é um alimento a eliminar — é um queijo rico que faz sentido consumir com moderação. Uma colher de sopa no café da manhã não é o problema.
          </p>

          {/* DIFERENÇA REQUEIJÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3957501/pexels-photo-3957501.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bagel com cream cheese e salmão defumado — combinação clássica do queijo cremoso americano"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="diferenca-requeijao" className="img-above">A diferença do requeijão</h2>

          <p>
            É a dúvida mais comum — e faz sentido, porque os dois têm aparência parecida e ocupam o mesmo espaço na gôndola.
          </p>
          <p>
            O requeijão brasileiro é produzido com leite desnatado coalhado, depois fundido com creme de leite e sal. O processo de fusão dá aquela consistência pastosa, quase fluida, característica. O pH final é mais neutro — por isso o sabor é suave, sem a acidez do cream cheese.
          </p>
          <p>
            O cream cheese passa por fermentação mais intensa, o que eleva a acidez. Resultado: sabor mais marcado, textura mais firme e comportamento diferente no calor. O requeijão tende a derreter mais rápido; o cream cheese mantém mais a forma.
          </p>
          <p>
            Na prática: em torrada, sanduíche e dip frios, os dois funcionam quase igual — escolha pelo preço ou preferência de sabor. Em cheesecake e frosting de bolo, o cream cheese é necessário. A firmeza e a acidez afetam o resultado de formas que o requeijão não consegue replicar.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe o que tem na despensa antes de montar a lista. <em>O Mise cuida disso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar cream cheese na cozinha</h2>

          <p>
            Os usos mais comuns — e os menos óbvios que valem experimentar.
          </p>

          <h3>Como pasta e aperitivo</h3>
          <p>
            O uso mais simples: direto em torradas, crackers, pão de forma ou bagel. Com ervas frescas, azeite ou pimenta funciona como aperitivo. Você compra pra usar na receita e come metade assim, antes de qualquer coisa. Acontece com todo mundo.
          </p>

          <h3>Em receitas doces</h3>
          <p>
            Cheesecake é o clássico — tanto assado quanto o de geladeira. Também entra em frosting de bolo de cenoura e red velvet, mousse, recheio de bombons e casadinhos. A acidez do cream cheese equilibra o dulçor do açúcar e diferencia o sabor dos recheios feitos com creme de leite.
          </p>

          <h3>Em receitas salgadas</h3>
          <p>
            Recheio de tortas, empadão e quiche. Dip de espinafre assado. Molho cremoso para massas. Em qualquer receita que pede creme de leite, o cream cheese substitui com mais corpo e estrutura — o molho fica mais denso e aguenta melhor o reaquecimento.
          </p>

          <h3>Em pratos quentes</h3>
          <p>
            No forno até 180°C funciona bem, sem soltar muito líquido. No fogão, adicione depois que o fogo foi reduzido. Alta temperatura direta pode granular o queijo ou separar a gordura. Não estraga o prato — só muda a textura, e não pra melhor.
          </p>

          <p>
            Para quem organiza as receitas da semana antecipadamente, vale incluir cream cheese no{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>{' '}
            quando tiver pelo menos dois usos planejados. Embalagem aberta sem uso claro some antes do prazo.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar cream cheese</h2>

          <p>
            Geladeira sempre — não é produto de prateleira depois de aberto. Na embalagem original fechada, dura até a data de validade indicada. Depois de aberto, use em até 7 a 10 dias.
          </p>
          <p>
            Congelar é possível, mas altera a textura. Depois de descongelado, fica mais granulado e não espalha bem. Em receitas cozidas e assadas ainda funciona. Como pasta, não mais. Se vai congelar, já planeje o uso em receita quente.
          </p>
          <p>
            Sinais de que passou: coloração amarelada nas bordas, líquido separado na superfície ou cheiro azedo além do normal. Se aparecer qualquer um desses sinais, descarta. Cream cheese que passou do ponto não é recuperável com aquecimento.
          </p>

          <p>
            Manter a{' '}
            <a href="/funcionalidades/despensa">despensa atualizada</a>{' '}
            com o que tem e o prazo de validade evita esse tipo de perda. Saber que o cream cheese aberto está na geladeira faz diferença na hora de montar a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            da semana.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você cozinha.</p>
          <p>
            Se você faz cheesecake, frosting ou qualquer receita que pede cream cheese especificamente, não existe substituto com o mesmo resultado. Coloca na lista quando for usar — sem uso definido, vira despesa esquecida na gaveta da geladeira.
          </p>
          <p>
            Se você quer uma pasta para o café da manhã, o requeijão funciona igualmente e costuma ser mais barato. Cream cheese é mais caro por embalagem, e o sabor mais ácido não é preferência de todo mundo.
          </p>
          <p>
            Se você cozinha receitas variadas com frequência, faz sentido ter sempre um no fundo da geladeira. Cream cheese entra em molhos, recheios e sobremesas sem precisar de muito planejamento — desde que você saiba que ele está lá. Para quem salva receitas com frequência, um{' '}
            <a href="/blog/caderno-de-receitas">caderno de receitas</a>{' '}
            com os ingredientes anotados ajuda a não comprar errado.
          </p>
          <p>
            Não é item da{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}— mas tem espaço garantido quando tem receita esperando por ele. Cream cheese não entra na lista por hábito. Entra com destino.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cream cheese</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cream cheese é a mesma coisa que requeijão?</p>
              <p className="faq-a">
                Não são a mesma coisa. O requeijão brasileiro é fundido com creme de leite, tem sabor mais neutro e menos gordura. O cream cheese é fermentado por mais tempo, tem sabor mais ácido e textura mais firme. Em receitas frias muitas vezes são intercambiáveis, mas em cheesecake e frosting o cream cheese faz diferença no resultado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cream cheese tem lactose?</p>
              <p className="faq-a">
                Sim. Como queijo fresco sem maturação, retém lactose. Queijos com maturação longa perdem quase toda a lactose no processo — o cream cheese não passa por esse estágio. Quem tem intolerância deve verificar a tolerância individual ou optar por versões sem lactose, que já existem em algumas marcas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cream cheese pode ir ao forno?</p>
              <p className="faq-a">
                Sim. Funciona bem em forno a até 180°C, o que explica o sucesso no cheesecake. Em temperatura muito alta por muito tempo, pode soltar um pouco de líquido. Para molhos no fogão, adicione com o fogo já reduzido para manter a textura homogênea.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto cream cheese tem em uma colher de sopa?</p>
              <p className="faq-a">
                Uma colher de sopa cheia tem cerca de 30g — aproximadamente 100 kcal, 3g de proteína e 10g de gordura. É uma porção razoável para usar como pasta em torradas ou como base de um dip rápido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como substituir cream cheese em receitas?</p>
              <p className="faq-a">
                Depende da receita. Para pastas e aperitivos frios, requeijão cremoso ou ricota temperada funcionam bem. Para cheesecake, mascarpone é o substituto mais próximo em estrutura e gordura. Não existe substituto perfeito para todas as receitas — a acidez e a firmeza afetam o resultado de formas que outros queijos não replicam.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cream cheese light é tão bom quanto o tradicional?</p>
              <p className="faq-a">
                Em pratos frios como dip e pasta, o resultado é parecido. Em receitas quentes e assadas, a versão light tem mais água e menos gordura — pode soltar líquido ou resultar em textura menos firme. Para cheesecake e frosting, use o tradicional.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cream cheese tem glúten?</p>
              <p className="faq-a">
                O cream cheese puro não tem glúten. Versões temperadas com ervas e especiarias podem ter contaminação cruzada dependendo do processamento. Verifique sempre o rótulo, especialmente em caso de doença celíaca.
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
                Criador do Mise. Comprou cream cheese para fazer cheesecake, usou metade no bagel do café da manhã. O cheesecake ficou para o fim de semana seguinte.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa conectada. Lista montada.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              Você sabe o que tem antes de ir ao mercado — e o cream cheese não aparece duplicado na geladeira.
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
