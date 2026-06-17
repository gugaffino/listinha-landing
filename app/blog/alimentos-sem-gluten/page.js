import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Alimentos sem glúten: lista completa para o mercado',
  description: 'Arroz, milho, batata, legumes e carnes frescas são naturalmente sem glúten. Veja lista completa, o que evitar e como ler o rótulo na hora da compra.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/alimentos-sem-gluten',
  },
  openGraph: {
    title: 'Alimentos sem glúten: lista completa para o mercado',
    description: 'Arroz, milho, batata, legumes e carnes frescas são naturalmente sem glúten. Veja lista completa, o que evitar e como ler o rótulo na hora da compra.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/alimentos-sem-gluten',
    images: [
      {
        url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tigelas coloridas com arroz, quinoa e vegetais frescos — seleção de alimentos naturalmente sem glúten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alimentos sem glúten: lista completa para o mercado',
    description: 'Arroz, milho, batata, legumes e carnes frescas são naturalmente sem glúten. Veja lista completa, o que evitar e como ler o rótulo na hora da compra.',
    images: ['https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Arroz tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Arroz — branco, integral ou parboilizado — é naturalmente sem glúten. O glúten está no trigo, na cevada e no centeio, não no arroz. A única ressalva é arroz processado com tempero pronto ou misturas industrializadas, que podem conter aditivos com glúten. Arroz puro, sem mistura, é seguro para celíacos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Celíaco pode comer aveia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aveia em si não contém glúten, mas no Brasil quase toda aveia disponível no mercado é processada nas mesmas linhas que trigo, cevada ou centeio. A contaminação cruzada é praticamente certa. Celíacos precisam consumir apenas aveia com certificação específica de ausência de contaminação — que é mais difícil de encontrar nas redes de supermercado comuns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Milho tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Milho in natura não tem glúten. Fubá, farinha de milho, amido de milho, canjica e pipoca natural também são seguros. O problema aparece em produtos industrializados à base de milho que usam outros ingredientes com glúten — como salgadinhos temperados ou misturas prontas. Leia sempre o rótulo antes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Todo mundo deveria eliminar o glúten da dieta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Para quem não tem doença celíaca nem sensibilidade ao glúten diagnosticada, eliminar o glúten não traz nenhum benefício comprovado e pode dificultar a ingestão de fibras e nutrientes que estão em cereais integrais. A dieta sem glúten é necessária e benéfica para celíacos — para o restante da população, é mais restrição do que solução.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que tem glúten que surpreende?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os mais comuns: shoyu tradicional (feito de trigo e soja), caldos prontos em cubo, sopas industrializadas, temperos mistos em pó, algumas marcas de presunto e mortadela que usam trigo como ligante, aveia sem certificação e cerveja convencional (feita de cevada). A dica é sempre ler a lista de ingredientes — a lei brasileira obriga a declaração de glúten no rótulo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como identificar glúten no rótulo de um produto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No Brasil, a Lei 10.674/2003 obriga todos os alimentos industrializados a declarar se "contém glúten" ou se é "não contém glúten" no rótulo. Procure essa informação próxima à lista de ingredientes. Além disso, verifique os ingredientes: trigo, cevada, centeio, malte e aveia (sem certificação) indicam presença de glúten. O aviso "pode conter traços de glúten" sinaliza risco de contaminação cruzada.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alimentos sem glúten: lista completa para o mercado',
  description: 'Arroz, milho, batata, legumes e carnes frescas são naturalmente sem glúten. Veja lista completa, o que evitar e como ler o rótulo na hora da compra.',
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
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
    '@id': 'https://www.miseemcasa.com.br/blog/alimentos-sem-gluten',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alimentos sem glúten', item: 'https://www.miseemcasa.com.br/blog/alimentos-sem-gluten' },
  ],
}

export default function AlimentosSemGluten() {
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
            <li className="breadcrumb-current" aria-current="page">Alimentos sem glúten</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-17">17 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Alimentos sem glúten: o que pode, o que evitar e como não errar no mercado
          </h1>
          <p className="blog-desc">
            A lista de alimentos sem glúten é maior do que parece. Arroz, milho, batata, legumes, carnes e a maioria das frutas e verduras entram sem restrição. O problema não é o que você conhece — é o glúten escondido em produtos industrializados que parecem inofensivos.
          </p>

          <div className="answer-box">
            <p>
              <strong>Alimentos sem glúten</strong> são aqueles que não contêm trigo, cevada, centeio
              nem aveia com risco de contaminação cruzada: arroz, milho, batata, leguminosas, carnes
              frescas, ovos, laticínios puros e praticamente todas as frutas e verduras in natura.
              O desafio está nos industrializados — shoyu, caldos prontos, embutidos e temperos mistos
              costumam ter glúten mesmo quando não parece.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tigelas coloridas com arroz, quinoa e vegetais frescos — seleção de alimentos naturalmente sem glúten"
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
              <li><a href="#o-que-e-gluten">O que é glúten e quem precisa evitar</a></li>
              <li><a href="#alimentos-seguros">Alimentos naturalmente sem glúten</a></li>
              <li><a href="#gluten-escondido">O que parece inocente mas tem glúten</a></li>
              <li><a href="#como-ler-rotulo">Como ler o rótulo no Brasil</a></li>
              <li><a href="#lista-de-compras">Lista de compras sem glúten para o mercado</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É GLÚTEN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pães e alimentos com trigo ao lado de alternativas sem glúten como arroz e milho"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="o-que-e-gluten" className="img-above">O que é glúten e quem precisa evitar</h2>

          <p>
            Glúten é um conjunto de proteínas encontrado naturalmente no trigo, na cevada e no centeio.
            É o que dá elasticidade à massa de pão — a capacidade de esticar sem rasgar. Para a maioria
            das pessoas, é completamente inofensivo e está na dieta há milênios.
          </p>
          <p>
            Duas condições tornam o glúten um problema real: a <strong>doença celíaca</strong> e a
            <strong> sensibilidade ao glúten não celíaca</strong>. A doença celíaca é uma condição
            autoimune em que o consumo de glúten provoca uma resposta do sistema imunológico que ataca
            o intestino delgado, causando inflamação e danos sérios à absorção de nutrientes. Estima-se
            que afete entre 1% e 2% da população mundial — muitos sem diagnóstico. A sensibilidade ao
            glúten é uma condição diferente: causa desconforto digestivo real, mas sem a resposta
            autoimune e sem os danos intestinais da doença celíaca.
          </p>
          <p>
            Para celíacos, eliminar o glúten completamente não é escolha — é tratamento. Qualquer
            quantidade, por menor que seja, pode causar danos. Daí a importância de saber exatamente
            o que está no prato e no carrinho de compras.
          </p>
          <p>
            Uma nota honesta: eliminar o glúten sem diagnóstico não traz benefícios comprovados para
            quem não tem essas condições. Pode, inclusive, reduzir a ingestão de fibras e nutrientes
            presentes em cereais integrais. A dieta sem glúten é tratamento — não tendência.
          </p>

          {/* ALIMENTOS SEGUROS */}
          <h2 id="alimentos-seguros">Alimentos naturalmente sem glúten</h2>

          <p>
            A base da alimentação sem glúten é mais ampla do que parece. A lista de alimentos in natura
            seguros é longa — o problema começa quando o alimento é processado, misturado ou produzido
            em linhas compartilhadas com trigo.
          </p>

          <h3>Cereais, farinhas e amidos seguros</h3>

          <ul className="item-list">
            <li>Arroz (branco, integral, parboilizado)</li>
            <li>Milho, fubá e amido de milho (maisena)</li>
            <li>Tapioca e goma de tapioca</li>
            <li>Farinha de mandioca e polvilho (doce e azedo)</li>
            <li>Farinha de arroz</li>
            <li>Farinha de milho</li>
            <li>Farinha de amêndoa</li>
            <li>Farinha de coco</li>
            <li>Farinha de grão-de-bico</li>
            <li>Quinoa</li>
            <li>Amaranto</li>
            <li>Sorgo</li>
          </ul>

          <p>
            Esses são os substitutos diretos da farinha de trigo em receitas. Cada um tem propriedades
            diferentes — a farinha de arroz é mais neutra, o polvilho azedo fermenta naturalmente,
            a farinha de amêndoa adiciona gordura e umidade. Para cozinhar sem glúten, vale experimentar
            combinações.
          </p>

          <h3>Proteínas animais</h3>

          <p>
            Carnes, aves, peixes e frutos do mar <strong>frescos</strong> são naturalmente sem glúten.
            O mesmo vale para ovos. O problema aparece quando a proteína é processada: empanados usam
            farinha de trigo, linguiças e salsichas frequentemente têm trigo como ligante, e o molho
            de soja tradicional (shoyu) é feito com trigo.
          </p>

          <h3>Laticínios puros</h3>

          <p>
            Leite, queijo, manteiga, requeijão e iogurte natural não têm glúten. A atenção vai para
            iogurtes com sabor (podem ter espessantes com glúten), queijos processados em fatias e
            bebidas lácteas com adição de cereais.
          </p>

          <h3>Vegetais, frutas e leguminosas</h3>

          <p>
            Todos os legumes e verduras frescos são seguros. Frutas também. Feijão, lentilha,
            grão-de-bico e ervilha em estado natural e seco não têm glúten. A ressalva é o
            enlatado ou o industrializado — caldos de legumes prontos, sopas em caixa e vegetais
            marinados podem ter espessantes ou aditivos com glúten.
          </p>

          <h3>Gorduras e temperos naturais</h3>

          <p>
            Azeite, óleos vegetais, manteiga e banha não têm glúten. Sal, açúcar, mel e vinagre
            puro também são seguros. Ervas e especiarias in natura — alho, cebola, pimenta,
            cominho, cúrcuma — não têm glúten. O risco está nos temperos prontos e nas misturas
            em pó que combinam várias especiarias.
          </p>

          <div className="blog-inline-cta">
            <p>
              Montar uma <a href="/funcionalidades/lista-de-compras">lista de compras</a> sem glúten
              fica mais fácil quando você já tem os alimentos seguros salvos. O Mise deixa você
              organizar sua despensa e gerar a lista direto do que costuma usar.
            </p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" rel="noopener">
              Abrir o Mise
            </a>
          </div>

          {/* GLÚTEN ESCONDIDO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640742/pexels-photo-1640742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prateleira de supermercado com produtos industrializados — onde o glúten costuma se esconder"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="gluten-escondido" className="img-above">O que parece inocente mas tem glúten</h2>

          <p>
            Aqui está a parte que pega a maioria das pessoas. Não é o pão nem o macarrão que surpreende —
            é o que está nos ingredientes de produtos que parecem não ter nada a ver com trigo.
          </p>

          <h3>Molho de soja (shoyu)</h3>
          <p>
            O shoyu tradicional é feito de trigo e soja fermentados — e a maioria das marcas
            disponíveis no Brasil usa trigo na formulação. Existe substituto: o <strong>tamari</strong>,
            molho de soja japonês feito sem trigo. Mas não é o produto padrão na prateleira.
            Se você cozinha comida asiática e precisa evitar glúten, verifique o rótulo ou procure
            tamari especificamente.
          </p>

          <h3>Aveia</h3>
          <p>
            Aveia não contém glúten por natureza. Mas no Brasil, quase toda aveia disponível no
            mercado passa por linhas de processamento compartilhadas com trigo, cevada ou centeio.
            A contaminação cruzada é praticamente garantida nas marcas comuns. Para celíacos, o
            único caminho seguro é aveia com certificação específica de ausência de contaminação —
            que ainda é difícil de encontrar nas redes convencionais.
          </p>

          <h3>Caldos prontos e sopas industrializadas</h3>
          <p>
            Caldos em cubo, caldos líquidos e sopas prontas frequentemente usam farinha de trigo
            como espessante. Essa é uma das fontes mais comuns de glúten escondido na cozinha
            brasileira. Se você usa caldo industrializado com frequência, leia o rótulo ou substitua
            por caldo caseiro.
          </p>

          <h3>Embutidos e frios</h3>
          <p>
            Presunto, mortadela, salame e linguiça podem conter farinha de trigo ou amido de trigo
            como ligante na formulação. Nem todos têm — mas o suficiente para que celíacos
            precisem verificar cada marca. O fato de ser "carne" não garante ausência de glúten
            no produto industrializado.
          </p>

          <h3>Temperos prontos e misturas de especiarias</h3>
          <p>
            Temperos em sachê, misturas de especiarias e condimentos prontos podem conter farinha
            de trigo como anti-aglomerante ou espessante. Isso nem sempre está visível no rótulo
            da frente. Leia a lista de ingredientes — trigo pode aparecer como "amido de trigo",
            "farinha de trigo" ou simplesmente "glúten".
          </p>

          <h3>Cerveja convencional</h3>
          <p>
            Cerveja é feita de cevada maltada — que contém glúten. Cervejas sem glúten existem,
            feitas com outros cereais como sorgo, arroz ou milho, mas são exceção no mercado.
            Verifique sempre o rótulo se a restrição for por doença celíaca.
          </p>

          <h3>Molhos de tomate industrializados</h3>
          <p>
            Não todos, mas algumas marcas de molho de tomate usam farinha de trigo como espessante
            para dar consistência. O molho de tomate caseiro — tomate, azeite, sal e ervas — é
            naturalmente sem glúten e mais fácil de controlar.
          </p>

          {/* COMO LER O RÓTULO */}
          <h2 id="como-ler-rotulo">Como ler o rótulo no Brasil</h2>

          <p>
            No Brasil, a{' '}
            <a
              href="https://www.planalto.gov.br/ccivil_03/leis/2003/l10.674.htm"
              target="_blank"
              rel="noopener"
            >
              Lei 10.674/2003
            </a>{' '}
            obriga todos os alimentos industrializados a informar se "contém glúten" ou se é "não
            contém glúten" no rótulo. Essa informação deve estar próxima à lista de ingredientes
            e é legalmente exigida — não é opcional. É a forma mais rápida e confiável de
            verificar um produto no mercado.
          </p>

          <p>
            Além da declaração obrigatória, vale verificar a lista de ingredientes. Glúten pode
            aparecer como:
          </p>

          <ul className="item-list">
            <li>Trigo (farinha de trigo, amido de trigo, farelo de trigo, gérmen de trigo)</li>
            <li>Cevada (extrato de cevada, malte, farinha de cevada)</li>
            <li>Centeio</li>
            <li>Aveia (quando não certificada como livre de contaminação)</li>
            <li>Malte (geralmente de cevada)</li>
          </ul>

          <p>
            O aviso <strong>"pode conter traços de glúten"</strong> indica risco de contaminação
            cruzada durante a fabricação — o produto não foi formulado com glúten, mas foi
            processado em linhas ou instalações que também manipulam cereais com glúten. Para
            pessoas com sensibilidade leve, esse risco pode ser aceitável. Para celíacos, o risco
            é real e deve ser evitado.
          </p>
          <p>
            O símbolo da espiga de trigo riscada aparece em alguns produtos e indica certificação
            por entidades externas, como a{' '}
            <a
              href="https://www.acelbra.org.br"
              target="_blank"
              rel="noopener"
            >
              Associação dos Celíacos do Brasil (ACELBRA)
            </a>
            . É uma indicação adicional de segurança, mas não é exigência legal — a declaração
            no rótulo continua sendo o que tem valor jurídico.
          </p>

          {/* LISTA DE COMPRAS */}
          <h2 id="lista-de-compras">Lista de compras sem glúten para o mercado</h2>

          <p>
            Montar uma <a href="/funcionalidades/lista-de-compras">lista de compras sem glúten</a> exige
            atenção nas primeiras vezes. Depois que você mapeia quais marcas são seguras e onde
            o glúten se esconde na sua rotina de cozinha, fica mais automático.
          </p>

          <p>
            Uma boa abordagem é dividir o mercado em três categorias: o que entra sem preocupação,
            o que precisa de verificação e o que substituir quando necessário.
          </p>

          <h3>Pode colocar na lista sem verificação</h3>

          <ul className="item-list">
            <li>Arroz branco, integral ou parboilizado</li>
            <li>Batata, batata-doce, mandioca e inhame</li>
            <li>Feijão, lentilha, grão-de-bico e ervilha secos</li>
            <li>Carnes, frangos, peixes e frutos do mar frescos</li>
            <li>Ovos</li>
            <li>Leite, queijo, manteiga e iogurte natural</li>
            <li>Frutas e verduras frescas</li>
            <li>Azeite, óleos vegetais puros</li>
            <li>Açúcar, sal e mel</li>
            <li>Alho, cebola, ervas e especiarias in natura</li>
            <li>Milho em espiga, canjica e pipoca natural</li>
            <li>Tapioca, polvilho e farinha de mandioca</li>
          </ul>

          <h3>Precisa verificar o rótulo</h3>

          <ul className="item-list">
            <li>Embutidos e frios (presunto, mortadela, linguiça)</li>
            <li>Caldos prontos e sopas industrializadas</li>
            <li>Molho de tomate em caixa ou lata</li>
            <li>Temperos prontos e condimentos em sachê</li>
            <li>Molho de soja e shoyu</li>
            <li>Aveia (só comprar com certificação sem glúten)</li>
            <li>Snacks e salgadinhos</li>
            <li>Iogurtes com sabor e bebidas lácteas</li>
          </ul>

          <h3>Substitutos para receitas</h3>

          <ul className="item-list">
            <li>Farinha de trigo → farinha de arroz, farinha de mandioca ou polvilho</li>
            <li>Macarrão comum → massa de arroz ou macarrão de milho</li>
            <li>Pão de forma → pão certificado sem glúten</li>
            <li>Shoyu → tamari (molho de soja sem trigo)</li>
            <li>Caldo em cubo → caldo caseiro ou caldo em pó certificado</li>
          </ul>

          <p>
            Manter esses itens organizados na <a href="/funcionalidades/despensa">despensa</a> ajuda a
            controlar o estoque e evita surpresas no meio da semana. Saber o que tem em casa antes
            de ir ao mercado é especialmente importante quando a restrição alimentar é real —
            improvisar pode sair caro.
          </p>

          <p>
            Se você quer uma <a href="/blog/lista-de-compras-saudavel">lista de compras saudável</a> que
            já leve em conta restrições alimentares, o ponto de partida é sempre o mesmo: defina
            o que é fixo na sua dieta, quais marcas são seguras e organize por corredor. Menos
            imprevisto no mercado, menos chance de erro.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Arroz tem glúten?</p>
              <p className="faq-a">
                Não. Arroz — branco, integral ou parboilizado — é naturalmente sem glúten. O glúten
                está no trigo, na cevada e no centeio, não no arroz. A única ressalva é arroz processado
                com tempero pronto ou misturas industrializadas, que podem conter aditivos com glúten.
                Arroz puro, sem mistura, é seguro para celíacos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Celíaco pode comer aveia?</p>
              <p className="faq-a">
                Aveia em si não contém glúten, mas no Brasil quase toda aveia disponível no mercado é
                processada nas mesmas linhas que trigo, cevada ou centeio. A contaminação cruzada é
                praticamente certa. Celíacos precisam consumir apenas aveia com certificação específica
                de ausência de contaminação — que é mais difícil de encontrar nas redes de supermercado comuns.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Milho tem glúten?</p>
              <p className="faq-a">
                Milho in natura não tem glúten. Fubá, farinha de milho, amido de milho, canjica e pipoca
                natural também são seguros. O problema aparece em produtos industrializados à base de milho
                que usam outros ingredientes com glúten — como salgadinhos temperados ou misturas prontas.
                Leia sempre o rótulo antes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Todo mundo deveria eliminar o glúten da dieta?</p>
              <p className="faq-a">
                Não. Para quem não tem doença celíaca nem sensibilidade ao glúten diagnosticada, eliminar
                o glúten não traz nenhum benefício comprovado e pode dificultar a ingestão de fibras e
                nutrientes presentes em cereais integrais. A dieta sem glúten é necessária e benéfica
                para celíacos — para o restante da população, é mais restrição do que solução.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que tem glúten que surpreende?</p>
              <p className="faq-a">
                Os mais comuns: shoyu tradicional (feito de trigo e soja), caldos prontos em cubo, sopas
                industrializadas, temperos mistos em pó, algumas marcas de presunto e mortadela que usam
                trigo como ligante, aveia sem certificação e cerveja convencional (feita de cevada). A
                dica é sempre ler a lista de ingredientes — a lei brasileira obriga a declaração de glúten
                no rótulo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como identificar glúten no rótulo de um produto?</p>
              <p className="faq-a">
                No Brasil, a Lei 10.674/2003 obriga todos os alimentos industrializados a declarar se
                "contém glúten" ou se é "não contém glúten" no rótulo. Procure essa informação próxima
                à lista de ingredientes. Além disso, verifique os ingredientes: trigo, cevada, centeio,
                malte e aveia (sem certificação) indicam presença de glúten. O aviso "pode conter traços
                de glúten" sinaliza risco de contaminação cruzada — relevante especialmente para celíacos.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="#E8F3DD" />
                <circle cx="20" cy="16" r="7" fill="#2D5F2F" />
                <ellipse cx="20" cy="34" rx="11" ry="8" fill="#2D5F2F" />
              </svg>
            </div>
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador do Mise. Cozinha de segunda a sexta porque comer fora todo dia é caro e
                cansativo. Construiu o app porque a dor de ir ao mercado sem lista e voltar sem o
                que precisava era real — toda semana.
              </p>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <div className="blog-cta-inner">
            <p className="blog-cta-eyebrow">Mise</p>
            <h2 className="blog-cta-title">
              Sua lista sem glúten, organizada de verdade
            </h2>
            <p className="blog-cta-desc">
              Monte sua lista de compras com os alimentos seguros, controle o que tem na
              despensa e saiba sempre o que precisa repor. Sem papel, sem esquecimento.
              O <a href="/funcionalidades">Mise</a> é grátis.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary"
              rel="noopener"
            >
              Começar grátis
            </a>
          </div>
        </div>

        <a href="#top" className="back-to-top" aria-label="Voltar ao topo">↑</a>

        <footer className="blog-footer">
          <a href="/" className="blog-footer-brand">
            <BrandIcon size={20} />
            <span>Mise</span>
          </a>
          <nav className="blog-footer-nav" aria-label="Navegação do rodapé">
            <a href="/blog">Blog</a>
            <a href="/funcionalidades">Funcionalidades</a>
            <a href="https://listinha-puce.vercel.app" rel="noopener">Abrir o app</a>
          </nav>
        </footer>

      </main>
    </>
  )
}
