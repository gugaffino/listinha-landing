import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Benefícios da cebola roxa: nutrientes e como usar na cozinha',
  description: 'Cebola roxa tem antocianinas e quercetina que a amarela não tem. Veja os benefícios confirmados, se perde com o cozimento e como usar mais na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/beneficios-da-cebola-roxa',
  },
  openGraph: {
    title: 'Benefícios da cebola roxa: nutrientes e como usar na cozinha',
    description: 'Cebola roxa tem antocianinas e quercetina que a amarela não tem. Veja os benefícios confirmados, se perde com o cozimento e como usar mais na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/beneficios-da-cebola-roxa',
    images: [
      {
        url: 'https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cebolas roxas cortadas ao meio mostrando as camadas e a cor intensa — hortaliça rica em antocianinas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefícios da cebola roxa: nutrientes e como usar na cozinha',
    description: 'Cebola roxa tem antocianinas e quercetina que a amarela não tem. Veja os benefícios confirmados, se perde com o cozimento e como usar mais na cozinha.',
    images: ['https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cebola roxa é mais saudável que a cebola amarela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, em termos de antioxidantes. A cebola roxa tem antocianinas — compostos que dão a cor roxa e têm ação antioxidante e anti-inflamatória — que a cebola amarela não tem em quantidade relevante. Para consumo cru, a roxa sai na frente. Em refogados longos, a diferença diminui porque o calor destrói parte das antocianinas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais os principais benefícios da cebola roxa para a saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os benefícios mais documentados são: ação antioxidante (pelas antocianinas e quercetina), efeito anti-inflamatório, apoio à saúde cardiovascular, ação prebiótica (fibras que alimentam bactérias benéficas do intestino) e reforço da imunidade pela vitamina C. Os efeitos são cumulativos e dependem de consumo regular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cozinhar a cebola roxa elimina os antioxidantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parcialmente. As antocianinas são sensíveis ao calor e uma parte expressiva é destruída com cozimento longo. A quercetina é mais resistente e sobrevive a temperaturas moderadas. A fibra não é afetada pelo calor. Para aproveitar o diferencial, consuma crua ou marinada com limão ou vinagre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas cebolas roxas dá pra comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não há limite oficial. Meia cebola média (cerca de 50g) por refeição já oferece quantidade relevante de quercetina e antocianinas. Os benefícios são cumulativos — o consumo regular importa mais do que a quantidade por vez. Quem tem sensibilidade a FODMAPs pode sentir desconforto com grandes quantidades cruas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cebola roxa faz bem para o intestino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A cebola roxa tem frutooligossacarídeos (FOS), fibras prebióticas que alimentam as bactérias benéficas do intestino. Com consumo regular, contribui para a diversidade da microbiota intestinal. A ressalva: quem tem sensibilidade a FODMAPs pode sentir inchaço e gases, especialmente com cebola crua em grande quantidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como tirar o ardor da cebola roxa antes de servir crua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dois métodos funcionam. O primeiro: deixe a cebola fatiada de molho em água gelada por 10 a 15 minutos — o ardor reduz bastante sem perder textura. O segundo: tempere com limão ou vinagre e deixe descansar por 5 minutos — a acidez suaviza o sabor. Ambos preservam a cor e a maioria dos nutrientes.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Benefícios da cebola roxa: nutrientes e como usar na cozinha',
  description: 'Cebola roxa tem antocianinas e quercetina que a amarela não tem. Veja os benefícios confirmados, se perde com o cozimento e como usar mais na cozinha.',
  image: 'https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
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
    '@id': 'https://www.miseemcasa.com.br/blog/beneficios-da-cebola-roxa',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Benefícios da cebola roxa', item: 'https://www.miseemcasa.com.br/blog/beneficios-da-cebola-roxa' },
  ],
}

export default function BeneficiosDaCebolaRoxa() {
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
            <li className="breadcrumb-current" aria-current="page">Benefícios da cebola roxa</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-22">22 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que a cebola roxa tem que a amarela não tem: benefícios e como usar
          </h1>
          <p className="blog-desc">
            A cebola roxa vai na salada porque fica bonita. Mas tem algo além da cor: antocianinas, quercetina e um perfil de antioxidantes que a amarela não tem no mesmo nível. Aqui está o que está confirmado — e o que muda quando você cozinha.
          </p>

          <div className="answer-box">
            <p>
              <strong>Cebola roxa</strong> tem antocianinas — os pigmentos que dão a cor roxa — que a cebola amarela não tem em quantidade relevante.
              Esses compostos têm ação antioxidante e anti-inflamatória documentada em estudos.
              Além disso, tem quercetina, vitamina C, fibras prebióticas e cerca de 40 calorias por 100g.
              O detalhe: o calor destrói parte das antocianinas. Para aproveitar o diferencial, use crua.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cebolas roxas cortadas ao meio mostrando as camadas e a cor intensa — hortaliça rica em antocianinas"
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
              <li><a href="#o-que-e">O que tem de diferente na cebola roxa</a></li>
              <li><a href="#nutrientes">O que tem dentro: os nutrientes</a></li>
              <li><a href="#beneficios">Os principais benefícios</a></li>
              <li><a href="#crua-ou-cozida">Crua ou cozida: o que muda</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#escolher-e-guardar">Como escolher e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE TEM DE DIFERENTE */}
          <h2 id="o-que-e">O que tem de diferente na cebola roxa</h2>

          <p>
            A cebola roxa não é só uma variação estética. A cor vem das antocianinas — os mesmos pigmentos que tornam o mirtilo roxo e a jabuticaba preta. Cor e nutrição estão conectadas aqui: quanto mais intensa a cor, maior a concentração de antioxidantes.
          </p>
          <p>
            A cebola amarela tem quercetina também, mas em concentração menor. Não tem antocianinas em quantidade relevante. As duas são hortaliças nutritivas, mas o perfil de fitoquímicos é diferente — e essa diferença importa dependendo de como você vai usar.
          </p>
          <p>
            Na cozinha, a cebola roxa tem sabor mais suave quando crua. A amarela é mais pungente e funciona melhor no refogado. A roxa aguenta o calor, mas perde parte da cor vívida durante o cozimento. Parte das antocianinas vai junto.
          </p>
          <p>
            A regra prática: cebola roxa crua em salada, vinagrete e conserva. Cebola amarela para refogar, ensopado e fundo de panela. As duas têm espaço na{' '}
            <a href="/funcionalidades/despensa">despensa</a> — e um uso diferente.
          </p>

          {/* NUTRIENTES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7890176/pexels-photo-7890176.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cebola roxa fatiada em rodelas sobre tábua de madeira — detalhe das camadas internas roxas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="nutrientes" className="img-above">O que tem dentro: os nutrientes</h2>

          <p>
            Cem gramas de cebola roxa crua têm aproximadamente 40 calorias, 9g de carboidratos, 1,7g de fibra e 1g de proteína. Para comparação: uma fatia de pão de forma tem em torno do mesmo peso e mais do que o dobro das calorias.
          </p>
          <p>
            A vitamina C está presente em quantidade relevante — cerca de 9% da recomendação diária em 100g. Tem potássio, folato e vitamina B6 em quantidades menores. O sódio é baixíssimo.
          </p>
          <p>
            O que não aparece no rótulo nutricional convencional são os fitoquímicos: antocianinas e quercetina. Esses dois compostos são a razão principal pela qual a cebola roxa chama mais atenção de pesquisadores do que a amarela. Não é a composição de macronutrientes — é o que vem junto que diferencia.
          </p>
          <p>
            A quercetina da cebola é particularmente bem absorvida pelo corpo. Estudos mostram que a absorção é maior do que de outras fontes vegetais, como o chá. Não é o suplemento que muda a equação — é a cebola do mercado comum, crua, no vinagrete de quinta-feira.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Os principais benefícios da cebola roxa</h2>

          <p>
            Os benefícios documentados são consistentes com o que se sabe sobre antocianinas e quercetina em geral. Nenhum deles aparece em uma refeição — são efeitos de consumo regular ao longo do tempo.
          </p>

          <h3>Ação antioxidante</h3>
          <p>
            As antocianinas neutralizam radicais livres — moléculas instáveis que contribuem para o envelhecimento celular e para doenças crônicas. O consumo regular de alimentos ricos em antocianinas está associado a menor risco cardiovascular e metabólico em estudos de longa duração.
          </p>

          <h3>Efeito anti-inflamatório</h3>
          <p>
            A quercetina é um dos compostos anti-inflamatórios mais estudados na alimentação. Em ensaios clínicos, mostra redução de marcadores inflamatórios em comparação com placebo. Não é anti-inflamatório como medicamento — o efeito é preventivo e cumulativo.
          </p>

          <h3>Saúde cardiovascular</h3>
          <p>
            Estudos controlados mostram que o consumo regular de cebola pode contribuir para a redução de LDL (o colesterol "ruim") e para a pressão arterial. O mecanismo provável envolve os flavonoides — quercetina principalmente — e seu efeito sobre a oxidação do colesterol.
          </p>

          <h3>Efeito prebiótico</h3>
          <p>
            A cebola tem frutooligossacarídeos (FOS) — fibras não digeridas pelo corpo que servem de alimento para as bactérias benéficas do intestino. Com consumo regular, contribuem para a diversidade da microbiota intestinal, associada à imunidade e ao metabolismo.
          </p>

          <h3>Imunidade e saúde óssea</h3>
          <p>
            A vitamina C contribui para o sistema imunológico. A quercetina tem mostrado em estudos in vitro potencial para reduzir a atividade dos osteoclastos — as células que degradam o tecido ósseo. Os estudos em humanos ainda são limitados, mas é uma das frentes de pesquisa ativas com a cebola.
          </p>

          {/* CRUA OU COZIDA */}
          <h2 id="crua-ou-cozida">Crua ou cozida: o que muda</h2>

          <p>
            As antocianinas são termolábeis — sensíveis ao calor. Um refogado longo ou uma sopa que fica na panela por 20 minutos destrói uma parte expressiva delas. A quercetina é mais resistente e sobrevive a temperaturas moderadas. A fibra não é afetada pelo cozimento.
          </p>
          <p>
            Isso não significa que cebola roxa cozida seja ruim. Ainda tem fibra, vitamina C parcial, quercetina e minerais. Mas se a intenção é aproveitar o diferencial — as antocianinas — crua é a resposta.
          </p>

          <ul className="item-list">
            <li>Para antioxidantes máximos → cebola roxa crua em salada ou temperada com limão</li>
            <li>Para suavizar o ardor sem perder os nutrientes → marinada rápida em vinagre por 5 minutos</li>
            <li>Para refogado e fundo de panela → cebola amarela funciona igualmente e custa menos</li>
          </ul>

          <p>
            A distinção importa porque muda a decisão de compra. Se você compra cebola roxa só pra refogar, está pagando mais por algo que vai perder a principal vantagem no fogão. Faz mais sentido ter as duas na{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a> e usar cada uma no lugar certo.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7601442/pexels-photo-7601442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Salada com cebola roxa fatiada fina, tomate e folhas verdes — uso típico em refeição caseira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Los Muertos Crew / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar cebola roxa na cozinha</h2>

          <p>
            O uso mais óbvio é a salada — mas a cebola roxa tem mais espaço do que parece na cozinha do dia a dia.
          </p>

          <h3>Vinagrete rápido</h3>
          <p>
            Cebola roxa fatiada fina com limão, azeite e sal. Deixa descansar 10 minutos. Fica diferente do vinagrete com cebola amarela — mais suave, com cor mais vívida. Funciona em cima de arroz, feijão e frango grelhado.
          </p>

          <h3>Conserva rápida</h3>
          <p>
            Cebola roxa com vinagre de maçã, sal, pitada de açúcar e água quente. Espera 30 minutos na geladeira. Vai bem em hambúrguer, ovo mexido e sanduíche. Dura até uma semana e muda o sabor de qualquer coisa que você coloca por cima.
          </p>

          <h3>Crua em saladas de grão</h3>
          <p>
            Lentilha, grão-de-bico, feijão fradinho. A cebola roxa crua e fatiada fina aguenta o peso dos grãos e adiciona crocância. Se o ardor incomoda, molho em água gelada por 10 minutos resolve — a cor fica ainda mais vívida depois.
          </p>

          <h3>Caramelizada</h3>
          <p>
            O calor destrói as antocianinas, mas a cebola roxa caramelizada tem sabor diferente da amarela — mais adocicada, com cor que vai do roxo para o marrom dourado. Em sanduíche, com queijo, em massa. Se está fazendo de qualquer jeito, pode usar a roxa.
          </p>

          <h3>Em guacamole e pastas</h3>
          <p>
            Picada bem pequena, substitui a cebola branca sem o ardor intenso. Em homus, em pastas de grão, em molho de iogurte — a cebola roxa entra sem dominar o sabor.
          </p>

          <div className="blog-inline-cta">
            <p>A despensa organizada é a metade do trabalho. <em>O Mise cuida da outra.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ESCOLHER E GUARDAR */}
          <h2 id="escolher-e-guardar">Como escolher e guardar cebola roxa</h2>

          <p>
            Na hora de comprar, a cebola roxa boa é firme ao toque. Sem partes moles, sem aspecto murcho, com a casca íntegra e sem manchas escuras. Tamanho médio é mais prático do que a grande — menos desperdício por uso.
          </p>
          <p>
            Guardar inteira é simples: lugar fresco, seco e com boa ventilação. Não vai para a geladeira quando inteira — o frio e a umidade aceleram o murchamento. Longe de batatas, que liberam etileno e interferem no amadurecimento das duas.
          </p>
          <p>
            Cortada e sobrou metade? Geladeira em recipiente fechado. Dura de 3 a 5 dias. Não deixe em contato direto com alimentos de sabor delicado — a cebola contamina o aroma do que está por perto.
          </p>
          <p>
            A cebola roxa é uma das hortaliças mais fáceis de controlar na{' '}
            <a href="/blog/como-organizar-a-despensa">despensa organizada</a>
            {' '}— você vê quando está acabando antes de acabar. Diferente do alho, que some sem deixar rastro e só faz falta quando você já está na frente do fogão.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cebola roxa</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cebola roxa é mais saudável que a cebola amarela?</p>
              <p className="faq-a">
                Sim, em termos de antioxidantes. A cebola roxa tem antocianinas — compostos que dão a cor roxa e têm ação antioxidante e anti-inflamatória — que a cebola amarela não tem em quantidade relevante. Para consumo cru, a roxa sai na frente. Em refogados longos, a diferença diminui porque o calor destrói parte das antocianinas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quais os principais benefícios da cebola roxa para a saúde?</p>
              <p className="faq-a">
                Os benefícios mais documentados são: ação antioxidante (pelas antocianinas e quercetina), efeito anti-inflamatório, apoio à saúde cardiovascular, ação prebiótica (fibras que alimentam bactérias benéficas do intestino) e reforço da imunidade pela vitamina C. Os efeitos são cumulativos e dependem de consumo regular.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cozinhar a cebola roxa elimina os antioxidantes?</p>
              <p className="faq-a">
                Parcialmente. As antocianinas são sensíveis ao calor e uma parte expressiva é destruída com cozimento longo. A quercetina é mais resistente e sobrevive a temperaturas moderadas. A fibra não é afetada pelo calor. Para aproveitar o diferencial, consuma crua ou marinada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantas cebolas roxas dá pra comer por dia?</p>
              <p className="faq-a">
                Não há limite oficial. Meia cebola média (cerca de 50g) por refeição já oferece quantidade relevante de quercetina e antocianinas. Os benefícios são cumulativos — o consumo regular importa mais do que a quantidade por vez. Quem tem sensibilidade a FODMAPs pode sentir desconforto com grandes quantidades cruas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cebola roxa faz bem para o intestino?</p>
              <p className="faq-a">
                Sim. A cebola roxa tem frutooligossacarídeos (FOS), fibras prebióticas que alimentam as bactérias benéficas do intestino. Com consumo regular, contribui para a diversidade da microbiota intestinal. A ressalva: quem tem sensibilidade a FODMAPs pode sentir inchaço e gases, especialmente com cebola crua em grande quantidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como tirar o ardor da cebola roxa antes de servir crua?</p>
              <p className="faq-a">
                Dois métodos funcionam. O primeiro: deixe a cebola fatiada de molho em água gelada por 10 a 15 minutos — o ardor reduz bastante sem perder textura. O segundo: tempere com limão ou vinagre e deixe descansar por 5 minutos — a acidez suaviza o sabor. Ambos preservam a cor e a maioria dos nutrientes.
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
                Criador do Mise. Usou cebola roxa pela primeira vez num vinagrete numa sexta à noite — foi a versão que ficou. A amarela virou pra refogar; a roxa entrou como item fixo na lista.
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
              Você compra o que vai usar — e a cebola roxa entra na lista antes de faltar.
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
