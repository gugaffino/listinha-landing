import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Benefícios do pepino: tabela nutricional e como usar',
  description: 'Pepino tem 16 kcal por 100g e 95% de água. Conheça os benefícios para saúde, o valor nutricional completo, os tipos no Brasil e como usar na cozinha.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
  },
  openGraph: {
    title: 'Benefícios do pepino: tabela nutricional e como usar',
    description: 'Pepino tem 16 kcal por 100g e 95% de água. Conheça os benefícios para saúde, o valor nutricional completo, os tipos no Brasil e como usar na cozinha.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
    images: [
      {
        url: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pepinos frescos inteiros empilhados em close-up — vegetais verdes brilhantes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefícios do pepino: tabela nutricional e como usar',
    description: 'Pepino tem 16 kcal por 100g e 95% de água. Conheça os benefícios para saúde, o valor nutricional completo, os tipos no Brasil e como usar na cozinha.',
    images: ['https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pepino emagrece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nenhum alimento emagrece por si só. Mas com 16 kcal por 100g e 95% de água, pepino adiciona volume à refeição sem adicionar calorias. Isso ajuda na saciedade e facilita o controle do total calórico ao longo do dia — o que contribui pra perda de peso dentro de uma dieta equilibrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pode comer pepino com casca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A casca é comestível e tem mais fibra do que a polpa. No japonês e no persa, é fina e praticamente imperceptível. No caipira, pode ter leve amargor — nesse caso, descasca se incomodar. Sempre lava bem antes de comer com casca.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre pepino japonês e caipira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O caipira é maior, com casca mais grossa, mais sementes e polpa firme — bom pra saladas e picles. O japonês é mais comprido, com casca fina, poucas sementes e sabor mais suave — melhor pra preparações delicadas. O caipira costuma ser mais barato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pepino é fruta ou legume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Botanicamente é um fruto — se desenvolve a partir da flor e tem sementes. Na culinária e no mercado, é tratado como vegetal pelo sabor neutro e uso salgado. As duas respostas estão corretas dependendo do contexto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo o pepino dura na geladeira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inteiro, 7 a 10 dias na gaveta de vegetais. Não lave antes de guardar — umidade acelera o amolecimento. Cortado, usa em até 2 dias coberto com plástico-filme. Para estender a validade, faz conserva rápida com sal e vinagre — dura até 2 semanas em vidro fechado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pepino tem vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tem — 2,9 mg por 100g, conforme a Tabela Brasileira de Composição de Alimentos (TBCA/USP). Não é uma fonte expressiva comparada ao pimentão ou à laranja, mas contribui com o total da dieta. Está presente tanto na casca quanto na polpa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pepino faz bem para a pele?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A vitamina C participa da síntese de colágeno e a alta concentração de água contribui pra hidratação. Colocar rodelas de pepino no rosto é um hábito popular, mas o efeito é temporário e superficial. O benefício real vem de comer o pepino — não de usá-lo topicamente.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Benefícios do pepino: tabela nutricional e como usar',
  description: 'Pepino tem 16 kcal por 100g e 95% de água. Conheça os benefícios para saúde, o valor nutricional completo, os tipos no Brasil e como usar na cozinha.',
  image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Benefícios do pepino', item: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-pepino' },
  ],
}

export default function BeneficiosDoPepino({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Benefícios do pepino</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-13">13 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pepino: por que vale colocar na lista toda semana
          </h1>
          <p className="blog-desc">
            Aquele vegetal que todo mundo compra pra salada e esquece na gaveta. Com 16 kcal por 100g e 95% de água, pepino é um dos mais versáteis da hortifruti — e um dos menos aproveitados. O que tem dentro, quais são os tipos e como usar de verdade na cozinha.
          </p>

          <div className="answer-box">
            <p>
              <strong>Pepino</strong> (<em>Cucumis sativus</em>) é um fruto da família das cucurbitáceas com 95% de água e apenas 16 kcal por 100g.
              Tem casca verde, polpa branca e sementes centrais. Disponível o ano inteiro no Brasil em diferentes variedades — caipira, japonês e persa são as mais comuns.
              É barato, dura bem na geladeira e funciona em muito mais do que salada.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pepinos frescos inteiros empilhados em close-up — vegetais verdes brilhantes"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lo / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é pepino</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#beneficios">Benefícios do pepino</a></li>
              <li><a href="#tipos">Tipos de pepino no Brasil</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#como-guardar">Como escolher e guardar</a></li>
              <li><a href="#vale-a-pena">Vale colocar na lista?</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4929719/pexels-photo-4929719.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de pepino e cenoura em prato branco — preparação para salada leve"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Justin Doherty / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é pepino</h2>

          <p>
            Pepino (<em>Cucumis sativus</em>) é um fruto, não um legume — botanicamente falando. A confusão é velha e não muda nada na prática. Na cozinha, é sempre tratado como vegetal. O que importa: é da mesma família da abobrinha, do melão e da melancia. Isso explica a textura aquosa e o sabor neutro.
          </p>
          <p>
            A polpa é branca ou levemente esverdeada, com sementes centrais que variam em quantidade dependendo da variedade. A casca é comestível na maioria dos casos. O sabor é suave, com um frescor que funciona bem como base neutra e em combinações mais intensas — molho de iogurte, shoyu, vinagre.
          </p>
          <p>
            Tem mais de 100 variedades no mundo. No Brasil, as mais comuns nas bancas são o caipira, o japonês e o persa — cada um com características que afetam o uso na cozinha.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="valor-nutricional">Valor nutricional do pepino</h2>

          <p>
            Abaixo, os principais nutrientes do pepino cru com casca, por 100g, conforme a{' '}
            <a href="http://www.tbca.fcf.usp.br/" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos (TBCA/USP)</a>.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Nutriente</th>
                <th>Por 100g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energia</td>
                <td>16 kcal</td>
              </tr>
              <tr>
                <td>Água</td>
                <td>95%</td>
              </tr>
              <tr>
                <td>Proteína</td>
                <td>0,7 g</td>
              </tr>
              <tr>
                <td>Carboidratos</td>
                <td>3,8 g</td>
              </tr>
              <tr>
                <td>Fibras</td>
                <td>0,5 g</td>
              </tr>
              <tr>
                <td>Gordura total</td>
                <td>{'<'}0,1 g</td>
              </tr>
              <tr>
                <td>Potássio</td>
                <td>152,9 mg</td>
              </tr>
              <tr>
                <td>Magnésio</td>
                <td>13,5 mg</td>
              </tr>
              <tr>
                <td>Vitamina C</td>
                <td>2,9 mg</td>
              </tr>
            </tbody>
          </table>

          <p>
            Esses números explicam por que pepino aparece com frequência em dietas com controle calórico: é possível comer 300g e consumir menos de 50 kcal. O volume é real, a caloria é mínima.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do pepino para a saúde</h2>

          <p>
            Com 95% de água por peso, pepino é um dos vegetais mais hidratantes. Comer alimentos ricos em água contribui pra hidratação geral — não substitui água, mas soma. Em dias quentes ou com atividade física, faz diferença real.
          </p>
          <p>
            O potássio — 152,9 mg por 100g — tem papel no controle da pressão arterial. O mecanismo é direto: potássio ajuda os rins a eliminar sódio. Para quem tem dieta com muito sódio, incluir alimentos ricos em potássio ao longo do dia é uma forma prática de compensar.
          </p>
          <p>
            As fibras (0,5 g/100g) contribuem pro funcionamento intestinal. A quantidade não é alta comparada a outros vegetais, mas somada ao alto teor de água, facilita o trânsito digestivo. Pepino fatiado com casca tem mais fibra do que sem casca.
          </p>
          <p>
            Existe a narrativa de que pepino faz milagres pra pele. A vitamina C presente (2,9 mg/100g) participa da síntese de colágeno — isso é real. O que o pepino não faz é "desintoxicar". Desintoxicação é função do fígado e do rim, que trabalham bem sem precisar de vegetal específico.
          </p>
          <p>
            Três quartas partes dos pepinos comprados no Brasil foram comprados pra salada. Metade nunca virou salada. É o vegetal que mais aparece amolecendo no fundo da gaveta — não por falta de benefício, mas por falta de plano.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Salada colorida com pepino fatiado em prato — combinação fresca de vegetais"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Chan Walrus / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de pepino no Brasil</h2>

          <p>
            Saber qual pepino comprar muda o resultado na cozinha. A diferença entre japonês e caipira não é só tamanho — é textura, quantidade de sementes e pra qual uso cada um serve melhor.
          </p>

          <h3>Caipira</h3>
          <p>
            O pepino tradicional brasileiro. Maior, com casca mais grossa, mais sementes e polpa firme. Bom pra salada com vinagrete e para picles. É o mais barato e o mais fácil de achar o ano inteiro. A casca pode ter leve amargor — se incomodar, descasca ou escolhe um pepino menor.
          </p>

          <h3>Japonês</h3>
          <p>
            Mais comprido, casca fina, poucas sementes e sabor mais suave. Entra bem em saladas delicadas, combinações com shoyu e preparações de culinária japonesa. Custa um pouco mais do que o caipira, mas a diferença de textura compensa pra usos específicos.
          </p>

          <h3>Persa (mini)</h3>
          <p>
            Pequeno, quase sem sementes, casca tenra. O mais prático dos três: come inteiro como snack, sem precisar descascar nem retirar sementes. Ótimo pra conserva rápida e pra cortar em palitos. Encontra com mais facilidade em mercados maiores e feiras.
          </p>

          <h3>Inglês (long)</h3>
          <p>
            Comprido e fino, geralmente embalado em plástico no mercado. Sem sementes perceptíveis, casca fina, sabor muito suave. Bom pra fatiar fino em saladas ou usar em aperitivos. O plástico existe pra proteger a casca, que é onde parte do sabor e da textura estão.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar pepino na cozinha</h2>

          <p>
            Pepino vai muito além da salada com sal. Conhecer os outros usos ajuda a garantir que o que você comprou vai ser usado de verdade — não descartado na quinta-feira.
          </p>

          <h3>Em saladas</h3>
          <p>
            O uso mais óbvio, mas fácil de errar. Pepino fatiado fino retém mais textura e mistura melhor com molho. Fatia grossa fica aquosa rápido se ficar muito tempo temperada. Tempere na hora de comer, não antes.
          </p>

          <h3>Como snack</h3>
          <p>
            Palitos de pepino persa ou japonês com homus, pasta de alho ou molho de iogurte são um lanche rápido sem precisar cozinhar. Corta, tempera com sal e limão se quiser. Funciona bem pra quem quer algo leve entre refeições.
          </p>

          <h3>Em molhos e preparações frias</h3>
          <p>
            Tzatziki, raita indiana, molho de iogurte — todas essas preparações levam pepino como base. A lógica é a mesma: a água e o frescor do pepino equilibram gordura e acidez. Rala o pepino, esprema bem pra tirar o excesso de água, mistura com iogurte, alho e ervas.
          </p>

          <h3>Em picles e conservas</h3>
          <p>
            A forma mais eficiente de aproveitar pepino sobrando. Fatie, cubra com mistura de água, vinagre, sal e açúcar. Deixa na geladeira por pelo menos 2 horas. Dura até 2 semanas em vidro fechado. Combina com sanduíche, churrasco e com o arroz e feijão do dia a dia.
          </p>

          <h3>Cozido</h3>
          <p>
            Pouco usual no Brasil, mas funciona. Pepino refogado fica com textura parecida com abobrinha — faz sentido, são da mesma família. Em refogados rápidos com alho e azeite, fica bom. Não precisa mais de 3 a 4 minutos no fogo pra ficar macio sem desmanchar.
          </p>

          <div className="blog-inline-cta">
            <p>Organiza despensa e lista de compras num só lugar. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como escolher e guardar pepino</h2>

          <p>
            Na bancada do mercado, prefira o pepino firme e com cor uniforme. Amolecimento na ponta ou manchas amarelas indicam que passou do ponto. A casca deve ter brilho leve — opaca é sinal de tempo.
          </p>
          <p>
            Em casa, guarda na gaveta de vegetais da geladeira, sem lavar antes. Pepino absorve umidade e amolece se ficar molhado. Inteiro, dura 7 a 10 dias. Cortado, cobre com plástico-filme e usa em até 2 dias — depois a polpa começa a soltar água e a textura piora.
          </p>
          <p>
            Se comprou mais do que vai usar, faz conserva rápida: fatie, cubra com vinagre, sal e um pouco de açúcar. Em vidro fechado na geladeira, dura até 2 semanas. É a forma mais simples de aproveitar o excesso antes que vire descarte.
          </p>
          <p>
            O Brasil desperdiça cerca de{' '}
            <a href="https://www.embrapa.br/" target="_blank" rel="noopener">46 milhões de toneladas de alimento por ano (Embrapa, 2023)</a>.
            {' '}Parte significativa desse desperdício acontece dentro de casa, por compra sem planejamento de uso. Saber quanto pepino você vai usar antes de comprar é a decisão mais simples — e que faz diferença real.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale colocar na lista?</h2>

          <p>
            Sim. Esse é um dos casos mais diretos. Pepino é barato, disponível o ano inteiro, dura bem na geladeira e funciona em mais usos do que a maioria das pessoas explora.
          </p>
          <p>
            O único cuidado é comprar na quantidade certa. Se você cozinha pra 1 ou 2 pessoas, 2 a 3 pepinos já cobrem uma semana. Mais do que isso começa a correr o risco de ver a gaveta fazendo seleção natural.
          </p>
          <p>
            Pepino entra bem como item fixo da{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}de quem cozinha durante a semana. É daqueles vegetais que servem pra várias refeições diferentes sem esforço extra.
          </p>
          <p>
            Quem mantém a{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}atualizada compra melhor. Saber que ainda tem pepino evita comprar de novo na próxima ida ao mercado — e evita o cenário clássico de dois pepinos amolecendo ao mesmo tempo, sem plano de uso pra nenhum dos dois.
          </p>
          <p>
            Na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>
            , pepino entra com mais intenção quando você já sabe o que vai fazer com ele. "Pepino pra salada de segunda" fecha o motivo antes do mercado — e reduz a chance do pepino fazer solitário na gaveta até sexta.
          </p>
          <p>
            O pepino não some da gaveta por magia. Ele some porque você esquece que comprou.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre pepino</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Pepino emagrece?</p>
              <p className="faq-a">
                Nenhum alimento emagrece por si só. Mas com 16 kcal por 100g e 95% de água, pepino adiciona volume à refeição sem adicionar calorias. Isso ajuda na saciedade e facilita o controle do total calórico ao longo do dia — o que contribui pra perda de peso dentro de uma alimentação equilibrada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pode comer pepino com casca?</p>
              <p className="faq-a">
                Sim. A casca é comestível e tem mais fibra do que a polpa. No japonês e no persa, é fina e praticamente imperceptível. No caipira, pode ter leve amargor — nesse caso, descasca se incomodar. Sempre lava bem antes de comer com casca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre pepino japonês e caipira?</p>
              <p className="faq-a">
                O caipira é maior, com casca mais grossa, mais sementes e polpa firme — bom pra saladas e picles. O japonês é mais comprido, com casca fina, poucas sementes e sabor mais suave — melhor pra preparações delicadas. O caipira costuma ser mais barato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pepino é fruta ou legume?</p>
              <p className="faq-a">
                Botanicamente é um fruto — se desenvolve a partir da flor e tem sementes. Na culinária e no mercado, é tratado como vegetal pelo sabor neutro e uso salgado. As duas respostas estão corretas dependendo do contexto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto tempo o pepino dura na geladeira?</p>
              <p className="faq-a">
                Inteiro, 7 a 10 dias na gaveta de vegetais. Não lave antes de guardar — umidade acelera o amolecimento. Cortado, usa em até 2 dias coberto com plástico-filme. Para estender, faz conserva rápida com sal e vinagre — dura até 2 semanas em vidro fechado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pepino tem vitamina C?</p>
              <p className="faq-a">
                Tem — 2,9 mg por 100g, conforme a TBCA/USP. Não é uma fonte expressiva comparada ao pimentão ou à laranja, mas contribui com o total da dieta. Está presente tanto na casca quanto na polpa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pepino faz bem para a pele?</p>
              <p className="faq-a">
                A vitamina C participa da síntese de colágeno e a alta concentração de água contribui pra hidratação. Colocar rodelas de pepino no rosto é um hábito popular, mas o efeito é temporário e superficial. O benefício real vem de comer o pepino — não de usá-lo topicamente.
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
                Criador do Mise. Compra pepino toda semana com intenção de fazer salada. Encontra o pepino na sexta, amolecendo na gaveta. Fez conserva rápida uma vez e funcionou. Esqueceu que funcionou. Vai repetir esse ciclo indefinidamente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Despensa, receitas e lista de compras num só lugar.
              O pepino entra na lista quando você precisa — e sai da gaveta antes de amolecer.
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
