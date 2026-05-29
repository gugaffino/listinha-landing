import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Óleo de linhaça: para que serve e como usar na cozinha',
  description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba os benefícios, como usar na cozinha sem perder os nutrientes e onde comprar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/para-que-serve-oleo-de-linhaca',
  },
  openGraph: {
    title: 'Óleo de linhaça: para que serve e como usar na cozinha',
    description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba os benefícios, como usar na cozinha sem perder os nutrientes e onde comprar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/para-que-serve-oleo-de-linhaca',
    images: [
      {
        url: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Frasco de óleo de linhaça ao lado de sementes de linhaça sobre superfície de madeira clara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Óleo de linhaça: para que serve e como usar na cozinha',
    description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba os benefícios, como usar na cozinha sem perder os nutrientes e onde comprar.',
    images: ['https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Óleo de linhaça pode ser aquecido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O ponto de fumaça do óleo de linhaça é muito baixo — em torno de 107°C. Ao aquecer, os ácidos graxos ômega-3 se degradam e o óleo pode liberar compostos prejudiciais. Use sempre a frio: em saladas, iogurte, smoothies ou regado sobre pratos já prontos, fora do fogo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre semente de linhaça e óleo de linhaça?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A semente tem fibra, lignanas em maior concentração e é mais barata. Precisa ser moída para liberar os nutrientes — inteira, passa pelo intestino sem entregar o ômega-3. O óleo concentra os ácidos graxos sem alterar textura dos pratos, mas não tem fibra, tem validade mais curta e custa mais. Para a maioria das pessoas, a semente moída é mais versátil e mais econômica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando tomar óleo de linhaça?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não há horário específico com evidência científica. O mais prático é incluir junto a uma refeição com outros alimentos — em saladas no almoço, no iogurte do café da manhã ou num smoothie. O importante é a consistência: 1 colher de sopa ao dia, de forma regular, é mais eficaz do que tomar quantidade maior de forma irregular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de linhaça é bom para o coração?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ALA (ácido alfa-linolênico), principal componente do óleo de linhaça, está associado a redução de triglicerídeos e melhora do perfil lipídico em estudos observacionais. O efeito é menor do que o do ômega-3 de peixe (EPA e DHA), porque o corpo converte ALA com pouca eficiência. Ainda assim, é uma das poucas fontes vegetais relevantes de ômega-3 e faz parte de uma alimentação equilibrada favorável à saúde cardiovascular.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar óleo de linhaça depois de aberto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sempre na geladeira, em frasco escuro ou opaco, bem fechado. Longe de calor e luz. Use em até 4 a 6 semanas após abrir. Se o óleo ficar com sabor amargo ou cheiro forte e desagradável, está rançoso — descarte. Óleo rançoso tem efeito oposto ao que você quer: os compostos oxidados são pró-inflamatórios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de linhaça tem efeito colateral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em quantidades normais (1 colher de sopa ao dia), é seguro para a maioria das pessoas. Doses altas podem causar desconforto gastrointestinal — fezes amolecidas, náusea ou diarreia. Pessoas com distúrbios de coagulação ou que tomam anticoagulantes devem consultar um médico antes, pois o ômega-3 tem efeito anticoagulante leve. Grávidas e lactantes também devem checar com profissional de saúde.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Óleo de linhaça: para que serve e como usar na cozinha',
  description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba os benefícios, como usar na cozinha sem perder os nutrientes e onde comprar.',
  image: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
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
    '@id': 'https://www.miseemcasa.com.br/blog/para-que-serve-oleo-de-linhaca',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Óleo de linhaça', item: 'https://www.miseemcasa.com.br/blog/para-que-serve-oleo-de-linhaca' },
  ],
}

export default function OleoDeLinhaca() {
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
            <li className="breadcrumb-current" aria-current="page">Óleo de linhaça</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-28">28 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Para que serve óleo de linhaça — benefícios reais e como não desperdiçar o frasco
          </h1>
          <p className="blog-desc">
            O óleo de linhaça virou item frequente nas prateleiras de supermercado e de farmácia. Mas muita gente compra sem saber exatamente o que faz, como usar e por que a maioria dos frascos termina indo pra lixeira com metade do conteúdo.
          </p>

          <div className="answer-box">
            <p>
              <strong>Para que serve óleo de linhaça:</strong> é uma fonte concentrada de ômega-3 vegetal — especificamente o ácido alfa-linolênico (ALA) — associado ao controle de inflamação, saúde cardiovascular e saúde da pele. Também contém lignanas, compostos com ação antioxidante e efeito semelhante ao estrogênio, úteis especialmente para saúde feminina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Frasco de óleo de linhaça ao lado de sementes de linhaça douradas sobre superfície de madeira"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é óleo de linhaça</a></li>
              <li><a href="#beneficios">Para que serve — os benefícios principais</a></li>
              <li><a href="#como-usar">Como usar na cozinha (e o erro do ponto de fumaça)</a></li>
              <li><a href="#semente-ou-oleo">Semente ou óleo: qual é melhor?</a></li>
              <li><a href="#guardar-comprar">Como guardar e onde comprar</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista?</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7771989/pexels-photo-7771989.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sementes de linhaça douradas e marrons em colher de pau sobre tecido neutro — close-up de ingrediente"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é óleo de linhaça</h2>

          <p>
            Óleo de linhaça é extraído da semente da planta <em>Linum usitatissimum</em>, a mesma que produz o linho têxtil. A extração pode ser a frio (cold-pressed), que preserva mais compostos ativos, ou por solventes, mais barata mas menos interessante do ponto de vista nutricional. Se você está comprando pra consumir, procure "primeira prensa a frio" no rótulo.
          </p>
          <p>
            O que diferencia o óleo de linhaça de praticamente qualquer outro óleo vegetal é a concentração de ALA — o ácido alfa-linolênico, um ômega-3 de origem vegetal. Cerca de metade do conteúdo de gordura do óleo de linhaça é ALA. Óleo de canola tem em torno de 10%. Azeite de oliva tem menos de 1%.
          </p>
          <p>
            Mas tem um detalhe que faz diferença na hora de usar: o ALA é instável. Oxida rápido com calor, luz e ar. Por isso o óleo de linhaça tem prazo de validade curto, vai para a geladeira depois de aberto e não entra na frigideira — assuntos que a gente vai detalhar mais adiante.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Para que serve — os benefícios principais</h2>

          <h3>Saúde cardiovascular</h3>
          <p>
            O ômega-3 do óleo de linhaça está associado à redução de triglicerídeos e à melhora do colesterol HDL. O efeito é real, mas tem um limite importante de conhecer: o ALA não é o mesmo que o EPA e o DHA, os ômega-3 presentes no peixe. O corpo converte ALA em EPA e DHA, mas essa conversão é pouco eficiente — em torno de 5 a 15% em condições normais. Ou seja, o óleo de linhaça não substitui o consumo de peixe. Complementa. Para quem não come peixe com frequência, é uma das poucas fontes vegetais relevantes de ômega-3.
          </p>

          <h3>Controle de inflamação</h3>
          <p>
            O ALA compete com o ácido araquidônico, um ácido graxo pró-inflamatório presente em gorduras animais. Com mais ômega-3 na dieta, o equilíbrio pende menos para inflamação crônica. Isso tem relevância em quadros como artrite, doenças intestinais inflamatórias e pele sensível. Sempre como suporte a um tratamento, nunca substituto.
          </p>

          <h3>Saúde feminina</h3>
          <p>
            O óleo de linhaça contém lignanas — compostos com atividade fitoestrogênica, que interagem com receptores de estrogênio no corpo. Podem ajudar a reduzir fogachos na menopausa e contribuir para a regularidade do ciclo menstrual. A semente de linhaça é ainda mais rica em lignanas do que o óleo, porque boa parte fica no resíduo sólido após a extração.
          </p>

          <h3>Pele</h3>
          <p>
            Os ácidos graxos essenciais do óleo de linhaça contribuem para a integridade da barreira cutânea — reduzem a perda de água transepidérmica e podem ajudar em pele seca, eczema leve e psoríase. O efeito é gradual e vem de dentro. Não é hidratante tópico.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10916613/pexels-photo-10916613.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Salada verde com azeite sendo regado por cima — forma de uso correto de óleos a frio na alimentação"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Juliano Couto / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar na cozinha — e o erro do ponto de fumaça</h2>

          <p>
            Aqui está o erro mais comum com óleo de linhaça: colocar na frigideira.
          </p>
          <p>
            O ponto de fumaça do óleo de linhaça é em torno de 107°C. Frituras acontecem acima de 180°C. Refogar em fogo médio já ultrapassa isso fácil. Aquecer o óleo destrói os ácidos graxos que você comprou exatamente pra consumir — e pode liberar compostos oxidados prejudiciais. O frasco bonito na prateleira vira um investimento jogado fora junto com o calor da boca do fogão.
          </p>
          <p>
            Óleo de linhaça é pra usar a frio. Exemplos práticos:
          </p>
          <ul>
            <li>Em saladas, misturado ao azeite ou no lugar de parte dele</li>
            <li>Regado sobre iogurte natural ou kefir</li>
            <li>Adicionado a smoothies (o sabor é suave, não interfere muito)</li>
            <li>Em molhos frios — vinagrete, tahine, molho de mostarda</li>
            <li>Regado sobre legumes já cozidos, depois de tirar do fogo</li>
          </ul>
          <p>
            A quantidade padrão usada em estudos e recomendada por nutricionistas é 1 colher de sopa ao dia. Mais do que isso tem pouco benefício adicional e pode causar desconforto gastrointestinal.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* SEMENTE OU ÓLEO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9974497/pexels-photo-9974497.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sementes de linhaça marrons e douradas lado a lado em colheres de madeira — comparação dos dois tipos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marek Kupiec / Pexels</p>
          </div>

          <h2 id="semente-ou-oleo" className="img-above">Semente ou óleo de linhaça: qual é melhor?</h2>

          <p>
            Depende do que você quer. Aqui está a diferença concreta entre os dois:
          </p>

          <h3>Semente de linhaça</h3>
          <p>
            Tem fibra — que o óleo não tem. Tem lignanas em maior concentração. É mais barata. A semente dourada tem sabor mais suave; a marrom, um pouco mais intenso. O detalhe fundamental: a semente precisa ser moída para liberar os nutrientes. Inteira, ela passa pelo intestino praticamente intacta — você vai ao banheiro com uma semente de linhaça perfeitamente preservada e sem ter aproveitado nada do ômega-3. Moa na hora ou compre já moída e guarde na geladeira.
          </p>

          <h3>Óleo de linhaça</h3>
          <p>
            Concentra os ácidos graxos sem alterar textura do prato. Bom pra quem quer aumentar a dose de ômega-3 sem mudar o que está comendo. Mas não tem fibra. Tem validade mais curta depois de aberto. Custa mais por daí quanto de ômega-3 você obtém na prática.
          </p>

          <p>
            Para a maioria das pessoas que está pensando em incluir linhaça na alimentação pela primeira vez, a semente moída é o ponto de partida mais simples. É mais versátil — vai no iogurte, na granola, na vitamina, no pão caseiro —, dura mais e custa menos. O óleo faz sentido quando você já come a semente regularmente e quer uma fonte adicional de ômega-3 sem mudar a rotina.
          </p>
          <p>
            Não precisam ser excludentes. Muita gente usa os dois: a semente no café da manhã, o óleo na salada do almoço.
          </p>

          {/* COMO GUARDAR E ONDE COMPRAR */}
          <h2 id="guardar-comprar">Como guardar e onde comprar</h2>

          <h3>Como guardar</h3>
          <p>
            O óleo de linhaça estraga rápido. Depois de aberto, vai direto pra geladeira — de preferência em frasco escuro, longe de calor e luz. Use em até quatro a seis semanas. Se o óleo ficar com sabor amargo ou cheiro forte e desagradável, está rançoso e vai pro lixo. Óleo rançoso tem efeito oposto ao que você comprou pra ter: os compostos oxidados são pró-inflamatórios.
          </p>
          <p>
            Antes de abrir, pode ficar em lugar fresco e escuro. Depois de aberto, geladeira sempre. Isso também vale pra semente moída — oxidação acontece mais rápido do que na semente inteira.
          </p>

          <h3>Onde comprar</h3>
          <p>
            Supermercados maiores têm o óleo de linhaça na seção de azeites e óleos vegetais. Farmácias vendem em cápsulas — formato mais prático pra quem não quer medir colher, mas mais caro por dose. Lojas de suplementos e alimentos naturais costumam ter mais opções, incluindo o cold-pressed. Online tem boa variedade e preço competitivo, mas verifique o prazo de validade do lote antes de comprar.
          </p>
          <p>
            O rótulo deve informar se é cold-pressed (prensa a frio). Prefira esse. Verifique também a data de validade — frascos com validade curta podem já estar parcialmente oxidados antes de chegar em casa.
          </p>
          <p>
            A <a href="/funcionalidades/despensa">despensa do Mise</a> registra o que você tem em casa e quando vai vencer — útil pra não esquecer o frasco aberto na geladeira por mais tempo do que devia.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista?</h2>

          <p>
            Se você come pouco peixe e quer incluir ômega-3 vegetal na rotina, sim. Uma colher de sopa por dia na salada ou no iogurte não muda o sabor do prato e é suficiente pra aproveitar os benefícios. É um hábito simples de manter — desde que você não esqueça o frasco na prateleira sem geladeira.
          </p>
          <p>
            Se a intenção é comprar porque ouviu falar mas não tem claro onde vai usar: provavelmente não vale. O óleo de linhaça exige uma rotina de consumo e de armazenamento. Sem isso, você vai encontrar um frasco com cheiro estranho atrás da maionese daqui a três meses. Já aconteceu com todo mundo.
          </p>
          <p>
            Tem um uso definido antes da compra? Coloca na{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>.
            Não tem? Começa pela semente moída — é mais fácil de incluir no dia a dia, mais difícil de desperdiçar e você aprende se o hábito fica antes de investir no óleo.
          </p>
          <p>
            Guardar o óleo de linhaça na geladeira depois de aberto é a única disciplina que o produto exige. O resto é só pôr na salada.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre óleo de linhaça</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Óleo de linhaça pode ser aquecido?</p>
              <p className="faq-a">
                Não. O ponto de fumaça é em torno de 107°C — bem abaixo da temperatura de frituras e refogados. Ao aquecer, o ômega-3 se degrada e o óleo pode liberar compostos prejudiciais. Use sempre a frio: em saladas, iogurte, smoothies ou regado sobre pratos já prontos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre semente de linhaça e óleo de linhaça?</p>
              <p className="faq-a">
                A semente tem fibra, lignanas em maior concentração e é mais barata — mas precisa ser moída para liberar os nutrientes. O óleo concentra os ácidos graxos sem alterar a textura dos pratos, mas não tem fibra e tem validade mais curta após aberto. Para quem está começando, a semente moída costuma ser mais versátil e econômica.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quando tomar óleo de linhaça?</p>
              <p className="faq-a">
                Não há horário específico com evidência científica. O mais prático é incluir junto a uma refeição — na salada do almoço, no iogurte do café da manhã ou num smoothie. O importante é a consistência: 1 colher de sopa ao dia, de forma regular, é mais eficaz do que tomar quantidade maior de forma esporádica.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de linhaça é bom para o coração?</p>
              <p className="faq-a">
                O ALA do óleo de linhaça está associado à redução de triglicerídeos e melhora do perfil lipídico. O efeito é menor do que o do ômega-3 de peixe, porque o corpo converte ALA com pouca eficiência. Ainda assim, é uma fonte vegetal relevante e compõe uma alimentação favorável à saúde cardiovascular — especialmente para quem não come peixe com frequência.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar óleo de linhaça depois de aberto?</p>
              <p className="faq-a">
                Sempre na geladeira, em frasco escuro ou opaco, bem fechado. Use em até 4 a 6 semanas após abrir. Se ficar com sabor amargo ou cheiro forte, está rançoso — descarte. Óleo rançoso tem compostos oxidados que são pró-inflamatórios, o oposto do que você quer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de linhaça tem efeito colateral?</p>
              <p className="faq-a">
                Em 1 colher de sopa ao dia, é seguro para a maioria das pessoas. Doses altas podem causar desconforto gastrointestinal. Pessoas com distúrbios de coagulação ou que tomam anticoagulantes devem consultar um médico — o ômega-3 tem efeito anticoagulante leve. Grávidas e lactantes também devem verificar com profissional de saúde antes de usar.
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
                Criador do Mise. Comprou óleo de linhaça cold-pressed, usou uma vez na salada e encontrou o frasco rançoso seis semanas depois. Agora bota lembrete na{' '}
                <a href="/funcionalidades/despensa">despensa</a>.
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
              O óleo de linhaça não some mais atrás da maionese.
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
