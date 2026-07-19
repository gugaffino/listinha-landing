import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é maçã: tipos, calorias e como usar na cozinha',
  description: 'Maçã tem 56 kcal por 100g e é fonte de fibra solúvel e vitamina C. Conheça os tipos (fuji, gala, verde), qual usar na cozinha e se deve comer com casca.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
  },
  openGraph: {
    title: 'O que é maçã: tipos, calorias e como usar na cozinha',
    description: 'Maçã tem 56 kcal por 100g e é fonte de fibra solúvel e vitamina C. Conheça os tipos (fuji, gala, verde), qual usar na cozinha e se deve comer com casca.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
    images: [
      {
        url: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Maçã vermelha fresca em close-up sobre superfície escura — variedade gala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é maçã: tipos, calorias e como usar na cozinha',
    description: 'Maçã tem 56 kcal por 100g e é fonte de fibra solúvel e vitamina C. Conheça os tipos (fuji, gala, verde), qual usar na cozinha e se deve comer com casca.',
    images: ['https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Maçã pode comer com casca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, e é recomendado. A casca concentra boa parte da fibra e dos antioxidantes da maçã. A tabela TACO mede a maçã fuji com casca, e é essa versão que apresenta 1,3g de fibra por 100g. Lave bem antes de comer — água corrente e uma escovinha fina resolvem, já que a casca absorve resíduos de cera comercial usados para conservação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fuji, gala ou verde: qual é mais saudável?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As três têm perfil nutricional parecido — as diferenças de vitaminas e fibra entre variedades são pequenas. A verde (Granny Smith) tem levemente mais vitamina C e menos açúcar, o que pode fazer diferença pra quem controla glicemia. Fuji e gala são mais doces e práticas pra comer in natura. A escolha mais saudável costuma ser a que você vai comer de verdade, não a que vai murchar na fruteira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas maçãs por dia é o ideal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma por dia é o clássico — e faz sentido. Uma maçã média (180g) tem cerca de 100 kcal, 2,3g de fibra e é suficiente pra contribuir com a meta diária de fruta sem exagerar no açúcar. Duas por dia ainda é razoável. Mais do que isso começa a puxar a ingestão de frutose pra cima sem benefício adicional claro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Maçã faz engordar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maçã tem 56 kcal por 100g — é uma das frutas mais moderadas em caloria. O açúcar presente é frutose natural, que vem junto com fibra e água, o que retarda a absorção. Comer uma maçã não engorda. O que pode ocorrer é o efeito "permissão": comer a maçã e achar que ganhou passe livre pra o saco de biscoito depois. Esse problema não é da maçã.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar maçã em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maçã dura semanas na geladeira e apenas dias na temperatura ambiente. O ideal é guardar na gaveta de frutas e vegetais da geladeira, longe de outras frutas sensíveis — a maçã libera etileno, um gás que acelera o amadurecimento dos vizinhos. Se comprar em quantidade, geladeira é obrigatória. Fora dela, use em até 3 a 5 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pode congelar maçã?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas perde textura. Maçã congelada fica mole ao descongelar — não serve mais pra comer in natura ou em saladas. Mas funciona bem para smoothies, vitaminas, purê e recheio de torta (nesse caso, não precisa nem descongelar antes, vai direto ao forno). Descasque, fatie, espalhe numa assadeira para congelar separado e depois transfira para saco hermético.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual tipo de maçã usar em tortas e receitas assadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fuji é a melhor escolha para tortas: mantém a forma depois de assada, tem sabor equilibrado e não libera muita água. A verde (Granny Smith) também funciona bem — a acidez contrasta bem com a massa doce. Evite gala em tortas assadas, ela amolece demais e pode deixar o recheio aguado. Para purê e molho de maçã, qualquer variedade serve.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é maçã: tipos, calorias e como usar na cozinha',
  description: 'Maçã tem 56 kcal por 100g e é fonte de fibra solúvel e vitamina C. Conheça os tipos (fuji, gala, verde), qual usar na cozinha e se deve comer com casca.',
  image: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é maçã', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-maca' },
  ],
}

export default function OQueEMaca({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é maçã</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-10">10 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é maçã: guia de tipos, como escolher e usar na cozinha
          </h1>
          <p className="blog-desc">
            A fruta mais consumida no Brasil tem mais de 7.500 variedades no mundo, mas no mercado brasileiro você vai encontrar basicamente três. Cada uma serve pra uma coisa diferente — e comprar a errada é o motivo pelo qual a torta de maçã às vezes não fica boa.
          </p>

          <div className="answer-box">
            <p>
              <strong>Maçã</strong> é o fruto da macieira (<em>Malus domestica</em>), uma das frutas mais cultivadas e consumidas do planeta.
              Tem 56 kcal por 100g (Tabela TACO), com destaque para a pectina — fibra solúvel que contribui para saciedade e saúde intestinal.
              No Brasil, as variedades mais comuns são fuji, gala e verde (Granny Smith), cada uma com uso ideal na cozinha.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Maçã vermelha fresca em close-up sobre superfície escura — variedade gala"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é maçã</a></li>
              <li><a href="#tipos">Tipos de maçã no Brasil</a></li>
              <li><a href="#nutricional">Valor nutricional e calorias</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="#como-escolher">Como escolher no mercado</a></li>
              <li><a href="#como-guardar">Como guardar em casa</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Maçãs vermelhas e verdes misturadas sobre superfície rústica de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é maçã</h2>

          <p>
            Maçã é o fruto da <em>Malus domestica</em>, árvore da família das rosáceas — a mesma família do pêssego, da pera e da ameixa. É uma das frutas mais antigas cultivadas pelo ser humano: registros de plantio na Europa Central datam de mais de 4.000 anos, e o Cazaquistão é considerado o berço das variedades modernas.
          </p>
          <p>
            No Brasil, é a fruta temperada mais consumida. O país produz principalmente nos estados do Sul — Santa Catarina e Rio Grande do Sul respondem por mais de 95% da produção nacional, com colheita entre fevereiro e maio. Fora dessa janela, boa parte da maçã no mercado vem de câmara fria ou importação, o que explica a variação de preço e textura ao longo do ano.
          </p>
          <p>
            Botanicamente, a maçã é um falso fruto — o que a gente come é o receptáculo floral engrossado, não o ovário. Isso é mais curiosidade de aula de biologia do que informação útil pra compra no mercado, mas explica por que o "coração" duro no centro é diferente do resto.
          </p>
          <p>
            O sabor varia muito entre variedades: de muito doce (gala, fuji) a bem ácido (verde/Granny Smith), passando por perfis equilibrados. Essa variação importa na cozinha — não é só questão de preferência pessoal.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de maçã no Brasil</h2>

          <p>
            Existem mais de 7.500 variedades registradas no mundo. No supermercado brasileiro, você vai encontrar três com frequência — e ocasionalmente uma ou duas a mais em feiras e lojas especializadas.
          </p>

          <h3>Gala</h3>
          <p>
            A mais consumida no Brasil. Polpa branca, textura firme, sabor adocicado com leve acidez. A casca é vermelha com listras amarelas. É boa pra comer in natura e pra receitas cruas, como saladas de frutas e saladas de alface com maçã. No calor, perde textura mais rápido do que a fuji — compre em quantidade menor se não for conservar na geladeira.
          </p>

          <h3>Fuji</h3>
          <p>
            A favorita de quem cozinha. Polpa crocante e densa, sabor muito doce, pouca acidez. Aguenta bem o calor do forno — é a variedade certa pra tortas, maçã assada e crumble. Dura mais tempo na geladeira do que a gala. Vem do Japão (nome é contração de Fujisaki, cidade de origem), mas hoje é amplamente cultivada no Sul do Brasil.
          </p>

          <h3>Verde (Granny Smith)</h3>
          <p>
            A mais ácida das três. Casca verde-vivo, polpa firme e muito crocante. Tem menos açúcar natural do que fuji e gala, o que a torna uma opção melhor pra quem controla glicemia. Na cozinha, funciona bem em pratos salgados — salada com queijo, molhos, acompanhamento de carne de porco — e em tortas onde a acidez equilibra a massa doce. O suco de maçã verde é a versão com sabor mais marcante.
          </p>

          <h3>Golden delicious</h3>
          <p>
            Casca amarela, polpa macia e doce. Aparece menos nos mercados brasileiros, mas quando encontra é boa opção pra purê e molho de maçã — amolece mais rápido, o que facilita o cozimento. Não é a melhor pra tortas por soltar muita água.
          </p>

          {/* NUTRICIONAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fatias de maçã fresca sobre tábua de madeira — polpa branca firme em close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="nutricional" className="img-above">Valor nutricional e calorias da maçã</h2>

          <p>
            Dados da Tabela TACO (UNICAMP) para maçã fuji com casca, crua, por 100g:
          </p>

          <ul className="item-list">
            <li><strong>Calorias:</strong> 56 kcal</li>
            <li><strong>Carboidratos:</strong> 15,2 g (dos quais ~11 g são açúcares naturais)</li>
            <li><strong>Fibra alimentar:</strong> 1,3 g</li>
            <li><strong>Proteína:</strong> 0,3 g</li>
            <li><strong>Gordura total:</strong> 0,1 g</li>
            <li><strong>Vitamina C:</strong> 7,4 mg (8% da IDR)</li>
            <li><strong>Vitamina B6:</strong> 0,08 mg</li>
            <li><strong>Potássio:</strong> 109 mg</li>
            <li><strong>Água:</strong> 83,5 g</li>
          </ul>

          <p>
            Uma maçã média tem cerca de 180g, o que dá em torno de 100 kcal. A maior parte do peso é água — o que explica por que é saciante sem ser calórica. A fibra presente é principalmente pectina, uma fibra solúvel que forma gel no intestino e tem efeito comprovado na regulação do colesterol e no controle da glicemia pós-refeição.
          </p>
          <p>
            O teor de vitamina C é modesto comparado com acerola ou caju, mas é consistente. O ponto forte nutricional da maçã não está em nenhum nutriente isolado, mas na combinação de fibra, hidratação e antioxidantes com poucas calorias — uma combinação difícil de encontrar em lanches processados com o mesmo custo.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios da maçã</h2>

          <p>
            A maçã não é um superalimento. Não cura doença, não detoxifica nada, não substitui medicamento. O que ela faz é ser consistentemente boa dentro de uma alimentação variada — e isso tem valor.
          </p>
          <p>
            A pectina (fibra solúvel) é o componente com mais respaldo científico. Estudos observacionais associam consumo regular de maçã a menores níveis de LDL (o colesterol "ruim") — o mecanismo é a pectina se ligando a ácidos biliares no intestino e reduzindo a reabsorção de colesterol. Para ver efeito, o consumo precisa ser regular, não eventual.
          </p>
          <p>
            Os polifenóis da casca têm atividade antioxidante relevante. A quercetina, presente principalmente na casca, está associada a efeito anti-inflamatório em estudos laboratoriais. É mais um argumento pra comer com casca, não pra tomar suplemento de quercetina.
          </p>
          <p>
            Na prática do dia a dia, o maior benefício da maçã é pragmático: é uma fruta barata, disponível o ano inteiro, fácil de carregar, que não precisa de preparo e que a maioria das pessoas gosta. Para quem tenta comer mais fruta sem mudar muito a rotina, é um ponto de entrada razoável. Mas incluir maçã numa <a href="/blog/lista-de-compras-saudavel">lista de compras saudável</a> só faz sentido se ela de fato for consumida — fruta na fruteira que vira lixo não tem benefício nenhum.
          </p>

          <div className="blog-inline-cta">
            <p>Coloca a maçã (e tudo mais) na lista antes de ir ao mercado.</p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Abrir o Mise →
            </a>
          </div>

          {/* COMO ESCOLHER */}
          <h2 id="como-escolher">Como escolher maçã no mercado</h2>

          <p>
            Maçã ruim não melhora em casa. Vale gastar 30 segundos escolhendo melhor antes de colocar no carrinho.
          </p>

          <ul className="item-list">
            <li><strong>Firmeza:</strong> aperte levemente com o polegar. Deve resistir. Maçã mole já está passando do ponto.</li>
            <li><strong>Casca:</strong> sem amassados profundos, manchas escuras ou pontos macios. Pequenas imperfeições de cor são normais e não afetam o sabor.</li>
            <li><strong>Peso:</strong> maçã boa é pesada pra o tamanho. Maçã leve costuma estar desidratada por dentro.</li>
            <li><strong>Cheiro:</strong> maçã madura tem aroma doce e levemente floral. Sem cheiro = sem sabor. Cheiro fermentado = passou do ponto.</li>
            <li><strong>Época:</strong> a safra brasileira vai de fevereiro a maio. Nesse período, maçã nacional tende a ser mais fresca e barata. No resto do ano, vem de câmara fria ou importada.</li>
          </ul>

          <p>
            No mercado, as maçãs costumam vir enceradas comercialmente para conservação. A cera forma uma camada protetora que prolonga a validade — é segura para consumo, mas significa que você deve lavar bem antes de comer com casca.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar maçã em casa</h2>

          <p>
            Maçã é sensível ao etileno — um gás natural que as frutas liberam conforme amadurecem. O problema é que a maçã libera etileno <em>ativamente</em>, o que acelera o amadurecimento das frutas ao redor. Na geladeira, guarde na gaveta de frutas separada de folhas verdes, morangos e uvas, que são especialmente sensíveis ao gás.
          </p>
          <p>
            Fora da geladeira, a maçã dura de 3 a 5 dias dependendo da variedade e da temperatura. Na geladeira, pode durar de 4 a 6 semanas. Se você tem o hábito de comprar semanas de frutas de uma vez — o que a <a href="/funcionalidades/despensa">despensa do Mise</a> ajuda a controlar — a geladeira é obrigatória.
          </p>
          <p>
            Maçã cortada escurece rápido pela oxidação. Pinga um pouco de suco de limão nas fatias se não for usar imediatamente — a vitamina C retarda a reação.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar maçã na cozinha</h2>

          <p>
            A maçã vai muito além de comer na mão. É um ingrediente versátil que aparece bem em pratos doces, salgados e bebidas — mas cada variedade tem seu espaço.
          </p>

          <h3>Crua e in natura</h3>
          <p>
            O uso mais simples e mais nutritivo — a pectina e os antioxidantes da casca ficam intactos. Boa em saladas (com nozes, queijo e folhas amargas), em tabuadas de frios, fatiada com pasta de amendoim ou simplesmente como lanche. Qualquer variedade funciona, mas gala e fuji são as preferidas por conta do sabor mais doce.
          </p>

          <h3>Assada e cozida</h3>
          <p>
            Fuji é a escolha certa. Mantém a forma depois de assada, não vira purê, e o sabor aprofunda com o calor. Maçã assada com canela e aveia é um dos poucos sobremesas que leva 10 minutos e convence qualquer pessoa. Para tortas e crumbles, use fuji ou verde — nunca gala, que amolece demais e deixa o recheio aguado.
          </p>
          <p>
            Para um <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a> que inclua sobremesa simples, maçã assada entra fácil: não precisa de habilidade técnica e a maioria das pessoas tem canela em casa.
          </p>

          <h3>Em saladas e pratos salgados</h3>
          <p>
            A verde (Granny Smith) brilha aqui. A acidez corta a gordura de carnes e queijos, e a crocância aguenta bem molhos ácidos. Clássico com queijo gorgonzola, nozes e rúcula. Também funciona como acompanhamento de lombo e costela de porco — a acidez complementa a gordura da carne.
          </p>

          <h3>Suco e vitamina</h3>
          <p>
            Suco de maçã tem menos fibra do que comer a fruta inteira — a prensagem remove boa parte da pectina. Se o objetivo é manter a fibra, prefira a fruta. Para vitaminas e smoothies, a maçã inteira pode ir direto no liquidificador ou processador, casca inclusa, preservando o perfil nutricional completo.
          </p>

          <h3>Cozinha regional e receitas tradicionais</h3>
          <p>
            A torta de maçã é o uso mais clássico no Brasil — tanto a versão americana aberta quanto a versão fechada. O chutney de maçã (molho agridoce cozido com vinagre e especiarias) é ótimo acompanhamento de queijos e carnes curadas. Geleia de maçã é simples de fazer e usa as cascas e miolos que sobram de outras receitas, aproveitando a pectina natural como espessante.
          </p>
          <p>
            Se você compra maçã regularmente e quer garantir que está sempre na <a href="/funcionalidades/lista-de-compras">lista de compras</a> antes de acabar, o Mise mantém o histórico da sua despensa e avisa quando um item está acabando.
          </p>

          <p>
            Você comprou quatro fuji na segunda para fazer torta no sábado. Come tudo cru antes de quinta. A torta fica pra semana que vem.
          </p>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Perguntas frequentes sobre maçã</h2>
            <dl className="faq-list">

              <div className="faq-item">
                <dt className="faq-q">Maçã pode comer com casca?</dt>
                <dd className="faq-a">
                  Sim, e é recomendado. A casca concentra boa parte da fibra e dos antioxidantes da maçã. A Tabela TACO mede a maçã fuji com casca — é essa versão que apresenta 1,3g de fibra por 100g. Lave bem com água corrente antes de comer, pois a casca absorve resíduos da cera comercial usada na conservação.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Fuji, gala ou verde: qual é mais saudável?</dt>
                <dd className="faq-a">
                  As três têm perfil nutricional parecido. A verde tem levemente menos açúcar e mais vitamina C, o que pode fazer diferença pra quem controla glicemia. Fuji e gala são mais doces e práticas pra comer in natura. A mais saudável costuma ser a que você vai comer de fato, não a que vai murchar na fruteira.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Quantas maçãs por dia é o ideal?</dt>
                <dd className="faq-a">
                  Uma por dia é o clássico — e faz sentido. Uma maçã média (180g) tem cerca de 100 kcal e 2,3g de fibra. Duas por dia ainda é razoável. Mais do que isso começa a puxar a ingestão de frutose sem benefício adicional claro.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Maçã faz engordar?</dt>
                <dd className="faq-a">
                  Maçã tem 56 kcal por 100g — uma das frutas mais moderadas em caloria. O açúcar presente é frutose natural, que vem com fibra e água, o que retarda a absorção. Comer uma maçã não engorda. O efeito "permissão" (comer a maçã e achar que ganhou passe livre pro saco de biscoito) não é problema da maçã.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Como guardar maçã em casa?</dt>
                <dd className="faq-a">
                  Geladeira é o ideal — dura de 4 a 6 semanas na gaveta de frutas. Fora da geladeira, use em 3 a 5 dias. Guarde longe de folhas verdes e morangos, pois a maçã libera etileno, um gás que acelera o amadurecimento dos vizinhos.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Pode congelar maçã?</dt>
                <dd className="faq-a">
                  Pode, mas perde textura ao descongelar — não serve mais pra comer in natura. Funciona bem pra smoothies, purê e recheio de torta (vai direto ao forno sem descongelar). Descasque, fatie, congele espalhado numa assadeira e depois transfira pra saco hermético.
                </dd>
              </div>

              <div className="faq-item">
                <dt className="faq-q">Qual tipo de maçã usar em tortas e receitas assadas?</dt>
                <dd className="faq-a">
                  Fuji é a melhor escolha: mantém a forma depois de assada, sabor equilibrado, pouca liberação de água. A verde também funciona bem — a acidez contrasta com a massa doce. Evite gala em tortas assadas, pois amolece demais e pode deixar o recheio aguado.
                </dd>
              </div>

            </dl>
          </section>

          <div className="blog-author">
            <div className="blog-author-inner">
              <div className="blog-author-info">
                <span className="blog-author-name">Gus</span>
                <p className="blog-author-bio">
                  Criador do Mise. Comprou quatro maçãs fuji na segunda para fazer torta no sábado. Comeu todas antes de quinta. A torta nunca aconteceu. Fontes: <a href="https://www.tabelatacoonline.com.br/tabela-nutricional/taco/maca-fuji-com-casca-crua" target="_blank" rel="noopener">Tabela TACO (UNICAMP)</a> e <a href="https://www.abpm.org.br/valor-nutricional" target="_blank" rel="noopener">ABPM — Valor Nutricional da Maçã</a>.
                </p>
              </div>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <p className="blog-cta-title">A maçã já está na lista?</p>
          <p className="blog-cta-sub">O Mise mantém sua despensa atualizada e gera a lista antes de você ir ao mercado.</p>
          <a
            href="https://listinha-puce.vercel.app"
            className="btn btn-on-dark btn-lg"
            target="_blank"
            rel="noopener"
          >
            Comece grátis →
          </a>
        </div>

        <a href="#main-content" className="back-to-top" aria-label="Voltar ao topo">↑</a>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
    </>
  )
}
