import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Frutas cítricas: quais são, benefícios e como usar',
  description: 'Laranja, limão, tangerina, pomelo: quais são as frutas cítricas, os benefícios da vitamina C e como usar na cozinha com dicas para comprar no mercado.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/frutas-citricas',
  },
  openGraph: {
    title: 'Frutas cítricas: quais são, benefícios e como usar',
    description: 'Laranja, limão, tangerina, pomelo: quais são as frutas cítricas, os benefícios da vitamina C e como usar na cozinha com dicas para comprar no mercado.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/frutas-citricas',
    images: [
      {
        url: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fatias de laranja fresca dispostas em close-up mostrando o interior suculento e segmentos cítricos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frutas cítricas: quais são, benefícios e como usar',
    description: 'Laranja, limão, tangerina, pomelo: quais são as frutas cítricas, os benefícios da vitamina C e como usar na cozinha com dicas para comprar no mercado.',
    images: ['https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que são frutas cítricas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frutas cítricas são frutas produzidas por plantas do gênero Citrus, da família Rutaceae. O que as une é o ácido cítrico, responsável pelo sabor azedo característico. O grupo inclui laranja, limão, lima, tangerina, mexerica, toranja, pomelo e grapefruit. Todas têm vitamina C em quantidade relevante e casca com óleos essenciais aromáticos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais frutas são consideradas cítricas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As principais são laranja, limão tahiti, limão siciliano, mexerica, tangerina, pokan, toranja, pomelo, grapefruit, lima-da-pérsia e cidra. No supermercado brasileiro comum, você vai encontrar com mais frequência laranja, limão tahiti, limão siciliano, mexerica e tangerina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual fruta cítrica tem mais vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dentre as cítricas mais comuns, a laranja é uma das maiores fontes — uma unidade média de 130 g tem cerca de 70 mg, suficiente para cobrir a necessidade diária de um adulto. O limão concentra vitamina C especialmente na casca e no bagaço. O kiwi tem mais vitamina C do que a laranja, mas não é uma fruta cítrica — pertence ao gênero Actinidia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kiwi e morango são frutas cítricas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Kiwi pertence ao gênero Actinidia e morango ao gênero Fragaria — nenhum dos dois é do gênero Citrus. Ambos têm vitamina C e algum ácido cítrico, mas não são classificados como frutas cítricas. A confusão acontece porque "cítrico" às vezes é usado informalmente para descrever qualquer fruta azedinha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como escolher frutas cítricas no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dê preferência às frutas pesadas para o tamanho — isso indica mais suco. A casca do limão deve ceder levemente ao apertar. Evite frutas com manchas escuras, amolecimento localizado ou cheiro fermentado. Laranja com tom levemente esverdeado pode estar ótima — a coloração não é indicador confiável de sabor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como conservar frutas cítricas em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inteiras em temperatura ambiente, longe do sol: 1–2 semanas. Na geladeira: até um mês. Limão cortado embrulhado em plástico: use em até 3–4 dias. Suco espremido: máximo 24 horas na geladeira, pois a vitamina C se degrada com o tempo. Congelado em cubinhos: até 3 meses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá pra usar frutas cítricas em pratos salgados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Limão é o tempero mais versátil da cozinha salgada — marinadas, vinagretes, molhos e finalização. Laranja e tangerina entram bem em aves e peixe. Limão siciliano funciona bem com frutos do mar. Raspa de limão ou laranja em molhos e assados adiciona aroma concentrado sem mudar a textura do prato.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frutas cítricas: quais são, benefícios e como usar',
  description: 'Laranja, limão, tangerina, pomelo: quais são as frutas cítricas, os benefícios da vitamina C e como usar na cozinha com dicas para comprar no mercado.',
  image: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
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
    '@id': 'https://www.miseemcasa.com.br/blog/frutas-citricas',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Frutas cítricas', item: 'https://www.miseemcasa.com.br/blog/frutas-citricas' },
  ],
}

export default function FrutasCitricas() {
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
            <li className="breadcrumb-current" aria-current="page">Frutas cítricas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-16">16 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Guia das frutas cítricas: laranja, limão, mexerica e o que mais entra na lista
          </h1>
          <p className="blog-desc">
            Laranja, limão, tangerina. Você compra todo mês sem pensar muito. Mas o grupo das frutas cítricas é maior do que parece — e entender a diferença entre elas muda o que você escolhe no mercado e como usa na cozinha.
          </p>

          <div className="answer-box">
            <p>
              <strong>Frutas cítricas</strong> são frutas do gênero <em>Citrus</em>, da família Rutaceae.
              O ácido cítrico é o que as une — responsável pelo sabor azedo de laranja, limão, tangerina e suas variações.
              Todas têm vitamina C em quantidade relevante e casca com óleos essenciais aromáticos usados na cozinha.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fatias de laranja fresca dispostas em close-up mostrando o interior suculento e segmentos cítricos"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: freestocks.org / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-sao">O que são frutas cítricas</a></li>
              <li><a href="#quais-sao">Quais frutas são cítricas</a></li>
              <li><a href="#vitamina-c">O que têm de vitamina C</a></li>
              <li><a href="#beneficios">Benefícios documentados</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#escolher-guardar">Como escolher e guardar</a></li>
              <li><a href="#lista">O que colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE SÃO */}
          <h2 id="o-que-sao">O que são frutas cítricas</h2>

          <p>
            Frutas cítricas são frutas produzidas por plantas do gênero <em>Citrus</em>, da família Rutaceae. O que elas têm em comum é o ácido cítrico — responsável pelo sabor azedo característico. Algumas têm mais ácido (limão tahiti), outras têm menos (laranja baiana madura). Mas o ácido cítrico é a assinatura do grupo.
          </p>
          <p>
            A casca concentra óleos essenciais que dão o aroma. É o que vai pra raspa de limão, extrato de laranja e pra boa parte dos produtos de limpeza com cheiro de citrus. Jogar a casca fora é desperdiçar metade do ingrediente.
          </p>
          <p>
            O Brasil é o maior produtor mundial de laranja, com colheita concentrada nos estados de São Paulo e Minas Gerais (
            <a href="https://www.fao.org/faostat/en/#data/QCL" target="_blank" rel="noopener">FAO FAOSTAT, 2023</a>
            ). Não é à toa que laranja e limão tahiti estão entre as frutas mais baratas no hortifruti brasileiro durante boa parte do ano.
          </p>
          <p>
            A acidez das frutas cítricas também tem função química: o ácido cítrico favorece a absorção do ferro não-heme — o ferro presente em alimentos de origem vegetal, como feijão e lentilha. Comer feijão com vinagrete de limão não é só hábito. É química.
          </p>

          {/* QUAIS SÃO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4038669/pexels-photo-4038669.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Laranja e limão frescos dispostos sobre superfície branca — frutas cítricas em close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kaboompics.com / Pexels</p>
          </div>

          <h2 id="quais-sao" className="img-above">Quais frutas são cítricas</h2>

          <h3>Laranja</h3>
          <p>
            A mais consumida no Brasil. As variedades principais são a pera (a mais vendida em mercados), a baiana, a lima e a valência. A pera é azedinha e suculenta — ideal pra suco. A lima é mais doce e menos ácida, melhor pra comer na mão. O preço varia muito por safra e região, mas laranja pera está entre as frutas com melhor custo-benefício nutricional disponíveis no Brasil ao longo do ano.
          </p>

          <h3>Limão tahiti e limão siciliano</h3>
          <p>
            São as duas variedades que você encontra com mais frequência. O tahiti é o limão verde, sem caroço, com suco mais ácido e rendimento alto. É o limão do vinagrete, da caipirinha e da marinada de carne.
          </p>
          <p>
            O siciliano é amarelo, maior, com casca mais grossa e aroma mais floral. Tem mais casca utilizável — preferido em confeitaria: torta de limão, creme, raspa. Comprar um quando a receita pede o outro é erro de principiante. Depois de uma vez, você nunca mais confunde.
          </p>

          <h3>Mexerica, tangerina e pokan</h3>
          <p>
            São as frutas cítricas mais fáceis de comer sem precisar de faca, prato ou cozinha. A mexerica tem casca que sai com a mão; a tangerina é ligeiramente maior e mais doce; o pokan é menor, com sementes e sabor mais intenso. Temporada tipicamente de outono e inverno — ficam melhores entre abril e agosto.
          </p>

          <h3>Pomelo e toranja</h3>
          <p>
            O pomelo é a maior fruta do gênero <em>Citrus</em>. A toranja (ou grapefruit) é menor, mais amarga, e conhecida por interagir com alguns medicamentos — incluindo estatinas e alguns anti-hipertensivos. Para um guia mais completo sobre pomelo e suas diferenças em relação à toranja,{' '}
            <a href="/blog/o-que-e-pomelo">tem uma página específica</a>.
          </p>

          <h3>Lima-da-pérsia, cidra e outros</h3>
          <p>
            A lima-da-pérsia é o que muita gente chama de "limão galego" no norte e nordeste do Brasil — menor, mais redonda que o tahiti, com suco mais perfumado. A cidra é outra cítrica usada mais pela casca do que pelo suco. A maioria das pessoas vai encontrar principalmente laranja, limão tahiti, limão siciliano, mexerica e tangerina no supermercado comum.
          </p>

          {/* VITAMINA C */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7223306/pexels-photo-7223306.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de frutas cítricas — laranja, limão e toranja — sobre superfície colorida vibrante"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Alena Darmel / Pexels</p>
          </div>

          <h2 id="vitamina-c" className="img-above">O que as frutas cítricas têm de vitamina C</h2>

          <p>
            A necessidade diária de vitamina C para adultos é de 65–90 mg, com limite superior seguro de 2.000 mg por dia (
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK225480/" target="_blank" rel="noopener">Dietary Reference Intakes, NIH</a>
            ). Uma laranja média de 130 g tem aproximadamente 70 mg — suficiente para cobrir a necessidade diária de um adulto em uma fruta.
          </p>
          <p>
            O limão tahiti tem menos vitamina C do que a laranja por fruta, mas concentra mais na casca e no bagaço branco. O kiwi tem mais vitamina C do que a laranja, mas não é uma fruta cítrica — pertence ao gênero <em>Actinidia</em>. Mais sobre isso na seção de perguntas frequentes.
          </p>
          <p>
            Provavelmente tem meio limão tahiti enrolado em plástico na geladeira agora.
          </p>
          <p>
            O ácido cítrico presente nas frutas cítricas também melhora a absorção do ferro não-heme — o ferro de leguminosas como feijão e lentilha. Comer feijão com vinagrete de limão é uma das formas mais simples de aproveitar esse efeito. Não precisa de suplemento.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios documentados das frutas cítricas</h2>

          <p>
            Os benefícios com mais evidência estão em três áreas.
          </p>
          <p>
            <strong>Vitamina C:</strong> antioxidante, suporte imunológico e síntese de colágeno. É o nutriente mais estudado das frutas cítricas — e o que justifica o consumo regular.
          </p>
          <p>
            <strong>Flavonoides:</strong> compostos como hesperidina (laranja) e naringenina (toranja) têm efeito anti-inflamatório em estudos laboratoriais. Esses compostos se concentram no bagaço branco entre a casca e os gomos — a parte que a maioria das pessoas joga fora quando espreme suco.
          </p>
          <p>
            <strong>Fibras:</strong> especialmente no bagaço e na polpa. Um copo de suco de laranja tem muito menos fibra do que a fruta inteira. Comer a laranja com o bagaço preserva esse componente.
          </p>
          <p>
            Uma observação honesta: frutas cítricas são nutritivas, mas não são remédio. O benefício vem do consumo regular dentro de uma alimentação variada — não de sucos detox ou protocolos pontuais.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3049465/pexels-photo-3049465.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Casca de laranja enrolada ao lado de suco fresco espremido — uso culinário de frutas cítricas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jonas Mohamadi / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar frutas cítricas na cozinha</h2>

          <h3>Sucos e bebidas</h3>
          <p>
            Vitamina C se degrada com calor e exposição ao ar. Suco espremido na hora tem muito mais do que suco feito horas antes — mesmo armazenado em geladeira, a vitamina C cai significativamente em 6–8 horas. Espreme e toma logo.
          </p>

          <h3>Marinadas</h3>
          <p>
            Limão tahiti em marinada amacia proteína e adiciona acidez. A proporção clássica: suco de um limão, azeite, alho e ervas. Funciona para frango, peixe e cortes bovinos mais finos. Para peixe, não deixe na marinada por mais de 2 horas — o ácido começa a cozinhar a proteína e a textura fica borrachuda.
          </p>

          <h3>Vinagrete e molhos</h3>
          <p>
            Limão substitui vinagre na maioria das receitas de vinagrete sem problema. O perfil de acidez é diferente — mais fresco, menos penetrante. Para saladas mais delicadas, limão siciliano ou suco de tangerina dão resultado mais suave que o tahiti.
          </p>

          <h3>Raspa de limão e laranja</h3>
          <p>
            A raspa de limão siciliano e de laranja é o ingrediente mais fácil de ignorar. É grátis — vem com a fruta — e adiciona aroma concentrado a bolos, biscoitos, cremes e molhos. Rala a casca antes de espremer o suco, nunca depois.
          </p>

          <h3>Pratos salgados</h3>
          <p>
            Peixe com limão é o uso mais óbvio. Mas frango assado com raspas de laranja, molho de tangerina para pato e camarão com limão siciliano são combinações que aparecem na cozinha clássica por uma razão simples: a acidez equilibra a gordura e limpa o paladar entre garfadas.
          </p>

          <div className="blog-inline-cta">
            <p>Menos decisões. Mais comida. <em>É o Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO ESCOLHER E GUARDAR */}
          <h2 id="escolher-guardar">Como escolher e guardar frutas cítricas</h2>

          <p>
            Na hora de escolher, o peso é o melhor indicador. Frutas pesadas para o tamanho têm mais suco. A casca de limão bom cede levemente ao toque — dura demais geralmente significa pouco suco. Evite frutas com manchas escuras, amolecimento localizado ou cheiro fermentado.
          </p>
          <p>
            Uma coisa que muita gente não sabe: laranja com tom levemente esverdeado pode estar ótima. A coloração depende da temperatura de amadurecimento, não do sabor ou da maturidade da fruta.
          </p>
          <p>
            Para guardar: frutas inteiras duram 1–2 semanas em temperatura ambiente, longe do sol. Na geladeira (gaveta de legumes), chegam a um mês. Limão cortado embrulhado em plástico dura 3–4 dias. Suco espremido: use em até 24 horas na geladeira — vitamina C se degrada rapidamente. Congelado em cubinhos de gelo: até 3 meses.
          </p>

          {/* LISTA */}
          <h2 id="lista">O que colocar na lista</h2>

          <p>
            Para a maioria das casas, três cítricas cobrem bem a semana: laranja para consumo direto e suco, limão tahiti para cozinhar e temperar, mexerica ou tangerina quando estão na temporada.
          </p>
          <p>
            Se você cozinha receitas com confeitaria, limão siciliano vale entrar na lista regularmente — especialmente quando a receita pede raspa. É o item mais fácil de esquecer e mais difícil de substituir. Limão tahiti não funciona igual em torta de limão. Não é a mesma fruta.
          </p>
          <p>
            Para um guia mais completo do que vai na lista do mercado toda semana, tem referência em{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            {' '}O Mise conecta a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            com a{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            — quando o limão acaba, aparece na lista sem você precisar lembrar.
          </p>
          <p>
            O problema não é saber quais frutas cítricas comprar. É lembrar de colocar na lista antes de sair de casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre frutas cítricas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que são frutas cítricas?</p>
              <p className="faq-a">
                Frutas cítricas são frutas produzidas por plantas do gênero <em>Citrus</em>, da família Rutaceae. O que as une é o ácido cítrico, responsável pelo sabor azedo característico. O grupo inclui laranja, limão, lima, tangerina, mexerica, toranja, pomelo e grapefruit. Todas têm vitamina C em quantidade relevante e casca com óleos essenciais aromáticos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quais frutas são consideradas cítricas?</p>
              <p className="faq-a">
                As principais são laranja, limão tahiti, limão siciliano, mexerica, tangerina, pokan, toranja, pomelo, grapefruit, lima-da-pérsia e cidra. No supermercado brasileiro comum, você vai encontrar com mais frequência laranja, limão tahiti, limão siciliano, mexerica e tangerina.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual fruta cítrica tem mais vitamina C?</p>
              <p className="faq-a">
                Dentre as cítricas mais comuns, a laranja é uma das maiores fontes — uma unidade média de 130 g tem cerca de 70 mg, suficiente para cobrir a necessidade diária de um adulto. O limão concentra vitamina C especialmente na casca e no bagaço. O kiwi tem mais vitamina C do que a laranja, mas não é uma fruta cítrica — pertence ao gênero <em>Actinidia</em>.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Kiwi e morango são frutas cítricas?</p>
              <p className="faq-a">
                Não. Kiwi pertence ao gênero <em>Actinidia</em> e morango ao gênero <em>Fragaria</em> — nenhum dos dois é do gênero Citrus. Ambos têm vitamina C e algum ácido cítrico, mas não são classificados como frutas cítricas. A confusão acontece porque "cítrico" às vezes é usado informalmente pra descrever qualquer fruta azedinha.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como escolher frutas cítricas no mercado?</p>
              <p className="faq-a">
                Dê preferência às frutas pesadas para o tamanho — isso indica mais suco. A casca do limão deve ceder levemente ao apertar. Evite frutas com manchas escuras, amolecimento localizado ou cheiro fermentado. Laranja com tom levemente esverdeado pode estar ótima — a coloração não é indicador confiável de sabor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como conservar frutas cítricas em casa?</p>
              <p className="faq-a">
                Inteiras em temperatura ambiente, longe do sol: 1–2 semanas. Na geladeira: até um mês. Limão cortado embrulhado em plástico: use em até 3–4 dias. Suco espremido: máximo 24 horas na geladeira, pois a vitamina C se degrada com o tempo. Congelado em cubinhos: até 3 meses.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá pra usar frutas cítricas em pratos salgados?</p>
              <p className="faq-a">
                Sim. Limão é o tempero mais versátil da cozinha salgada — marinadas, vinagretes, molhos e finalização. Laranja e tangerina entram bem em aves e peixe. Limão siciliano funciona bem com frutos do mar. Raspa de limão ou laranja em molhos e assados adiciona aroma concentrado sem mudar a textura do prato.
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
                Criador do Mise. Já comprou limão siciliano achando que era tahiti. O vinagrete ficou errado. A torta de limão ficou ótima por acidente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A despensa lembra.<br />
              <em>A lista aparece.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras num só lugar.
              O limão tahiti fica na lista toda semana — sem você precisar lembrar.
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
