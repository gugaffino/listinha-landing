import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Para que serve noz-moscada: usos e como usar na cozinha',
  description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
  },
  openGraph: {
    title: 'Para que serve noz-moscada: usos e como usar na cozinha',
    description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
    images: [
      {
        url: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Especiarias aromáticas em tigelas de cerâmica branca — noz-moscada entre as especiarias quentes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Para que serve noz-moscada: usos e como usar na cozinha',
    description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
    images: ['https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Noz-moscada pode ser usada em pratos salgados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim — e é onde ela brilha mais. Béchamel, purê de batata, gratinados, sopas cremosas e recheios de espinafre ficam completamente diferentes com uma pitada de noz-moscada. Ela não adiciona um sabor identificável, mas aprofunda e arredonda o prato. É o tipo de ingrediente que, quando falta, algo parece incompleto — mas você não sabe exatamente o quê.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto de noz-moscada usar por receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para pratos que servem 4 a 6 pessoas, ¼ de colher de chá de noz-moscada em pó é o ponto de partida. Em ralada na hora, são 5 a 8 raspas de ralador fino. Comece com menos — é mais fácil adicionar do que corrigir o excesso. Em doces e bebidas quentes, a dose costuma ser ainda menor: uma pitada basta para o aroma aparecer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre noz-moscada inteira e em pó?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A noz-moscada inteira preserva o aroma por muito mais tempo — 2 a 4 anos em pote fechado, contra 6 a 12 meses do pó. Ralada na hora, o aroma é mais intenso e fresco. O pó é mais prático, mas perde força mais rápido. Se você usa noz-moscada com frequência, a inteira com ralador fino compensa. Se usa raramente, o pó já serve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Noz-moscada pode fazer mal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em quantidades culinárias, não. O problema aparece em doses muito acima do que qualquer receita pede: acima de 5g (o equivalente a várias colheres de chá) podem causar náusea, tontura e efeitos neurológicos. Nas quantidades usadas para cozinhar — uma pitada ou ¼ de colher de chá — é completamente seguro. Gestantes costumam ser orientadas a evitar o excesso, mas a quantidade culinária normal não representa risco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a diferença entre noz-moscada e macis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Macis é a membrana avermelhada que envolve a semente da noz-moscada — os dois vêm da mesma planta. O sabor do macis é mais suave e levemente floral. A noz-moscada é mais intensa e terrosa. Na cozinha brasileira, macis é raro — você dificilmente vai encontrar no supermercado. Para fins práticos, são intercambiáveis em receitas que pedem um ou outro, ajustando a quantidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar noz-moscada em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote fechado, longe de calor, luz e umidade. Evite guardar acima do fogão ou perto da janela — o calor e a luz aceleram a perda de aroma. A noz-moscada inteira dura 2 a 4 anos nessas condições. A em pó, 6 a 12 meses antes de perder força. O sinal de que o pó perdeu validade: aroma fraco ou ausente quando você abre o pote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde encontrar noz-moscada no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em qualquer supermercado, no corredor de especiarias e temperos. A versão em pó é a mais fácil de achar — vem em frascos pequenos de 30g a 50g. A inteira é menos comum mas aparece em supermercados maiores, empórios e lojas de especiarias. O preço por grama é mais alto que o da canela ou do cominho, mas como a dose por uso é pequena, um frasco dura bastante.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Para que serve noz-moscada: usos e como usar na cozinha',
  description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
  image: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Para que serve noz-moscada', item: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada' },
  ],
}

export default function ParaQueServeNozMoscada({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Para que serve noz-moscada</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-31">31 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Noz-moscada: o que é, para que serve e como usar do jeito certo
          </h1>
          <p className="blog-desc">
            A receita pede "noz-moscada a gosto". Você não sabe quanto. Coloca demais ou deixa de fora. Aqui vai o que você precisa saber: o que ela faz num prato, onde usar e por que um quarto de colher de chá muda tudo.
          </p>

          <div className="answer-box">
            <p>
              <strong>Noz-moscada</strong> é a semente seca da árvore <em>Myristica fragrans</em>, originária das Ilhas Molucas, na Indonésia.
              Serve para aprofundar e arredondar o sabor de pratos cremosos, sopas e doces — não como sabor principal, mas como o ingrediente que faz os outros aparecerem mais.
              Em doses culinárias normais, ¼ de colher de chá basta para 4 a 6 porções.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Especiarias aromáticas em tigelas de cerâmica branca sobre superfície de madeira"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Mareefe / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é noz-moscada</a></li>
              <li><a href="#para-que-serve">Para que serve na cozinha</a></li>
              <li><a href="#receitas">Em que receitas usar</a></li>
              <li><a href="#como-usar">Como usar: dose certa e hora de colocar</a></li>
              <li><a href="#beneficios">Benefícios e cuidados</a></li>
              <li><a href="#comprar-e-guardar">Como comprar e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Quatro especiarias em colheres de madeira sobre superfície rústica — variedade de temperos aromáticos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marta Branco / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é noz-moscada</h2>

          <p>
            Noz-moscada é a semente seca de <em>Myristica fragrans</em>, uma árvore tropical originária das Ilhas Molucas — no que hoje é a Indonésia. Durante séculos, foi uma das especiarias mais valiosas do mundo: chegou a valer mais que ouro em peso na Europa medieval, e as guerras pelo controle das ilhas produtoras mudaram o mapa político do Sudeste Asiático.
          </p>
          <p>
            Hoje você compra em qualquer supermercado por alguns reais. Mas o valor histórico dizia algo real sobre o que ela faz: é uma especiaria que transforma pratos de um jeito que é difícil de descrever sem provar. Não é como pimenta, que você identifica imediatamente. É mais sutil. O prato parece mais completo — e você não necessariamente sabe por quê.
          </p>
          <p>
            A semente vem envolta numa membrana avermelhada chamada macis, que tem sabor parecido mas mais suave. O macis é raro no Brasil — nos supermercados daqui, você encontra a noz-moscada inteira ou já em pó. São dois produtos, da mesma planta.
          </p>
          <p>
            O aroma da noz-moscada inteira é intenso, quente e levemente amadeirado. No pó, esse aroma se dissipa mais rápido — é o motivo pelo qual receitas mais antigas pediam a inteira ralada na hora, e por que isso ainda faz diferença.
          </p>

          {/* PARA QUE SERVE */}
          <h2 id="para-que-serve">Para que serve noz-moscada na cozinha</h2>

          <p>
            Noz-moscada não tempera — ela aprofunda. A distinção é importante porque muda onde e como você vai usá-la.
          </p>
          <p>
            Quando você coloca sal, pimenta ou alho num prato, você adiciona um sabor identificável. Com noz-moscada, o efeito é diferente: ela intensifica os outros sabores, arredonda arestas e dá uma sensação de completude que é difícil de apontar mas impossível de ignorar quando falta. É o ingrediente que faz as pessoas repetirem o purê e não saberem exatamente por quê.
          </p>
          <p>
            Ela funciona especialmente bem em pratos ricos em gordura — molho branco, creme de leite, manteiga — porque os compostos aromáticos da noz-moscada se ligam às moléculas de gordura e se distribuem melhor pelo prato. É por isso que um béchamel com noz-moscada tem uma profundidade completamente diferente do mesmo molho sem ela.
          </p>
          <p>
            Em doces, o mecanismo é parecido: ela complementa canela, cravo e baunilha sem competir com eles, adicionando uma camada mais quente e complexa ao fundo do sabor. Arroz-doce, biscoitos de especiarias, ponche e quentão ficam diferentes — e melhores — com ela.
          </p>

          {/* RECEITAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/678412/pexels-photo-678412.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Canela e anis estrelado sobre superfície escura — especiarias quentes aromáticas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mareefe / Pexels</p>
          </div>

          <h2 id="receitas" className="img-above">Em que receitas usar noz-moscada</h2>

          <p>
            Noz-moscada aparece em dois mundos culinários: pratos salgados cremosos e sobremesas de especiarias. As receitas abaixo são os casos onde ela realmente faz diferença — não como decoração, mas como componente que altera o resultado.
          </p>

          <h3>Molho branco (béchamel)</h3>
          <p>
            O uso mais clássico e o mais transformador. Uma pitada de noz-moscada no béchamel é presença obrigatória na receita original francesa — e na maioria das receitas italianas de lasanha. Sem ela, o molho fica correto. Com ela, fica completo. Se você nunca testou, essa é a primeira experiência a fazer.
          </p>

          <h3>Purê de batata</h3>
          <p>
            Junto com manteiga e leite quente, noz-moscada é o terceiro pilar de um purê que faz as pessoas perguntarem o que tem de diferente. O purê não fica com gosto de noz-moscada. Fica com gosto de purê bom.
          </p>

          <h3>Gratinados e recheios</h3>
          <p>
            Qualquer gratinado com creme — batata, couve-flor, abobrinha — vai bem com noz-moscada. Em recheios de espinafre com ricota ou cream cheese, ela equilibra o sabor vegetal da folha e aprofunda a cremosidade do queijo.
          </p>

          <h3>Sopas cremosas</h3>
          <p>
            Sopa de abóbora, sopa de batata-baroa, creme de cogumelo — todas ficam melhores com uma pitada de noz-moscada no final. Adicione depois de apagar o fogo para preservar o aroma.
          </p>

          <h3>Arroz-doce e sobremesas de especiarias</h3>
          <p>
            Arroz-doce pede noz-moscada. Biscoitos de especiarias, bolo de maçã, banana flambada e quentão também. Em combinação com canela e cravo, ela completa o trio de especiarias quentes que define o perfil aromático de boa parte da confeitaria europeia e das bebidas de inverno.
          </p>

          <h3>Bebidas quentes</h3>
          <p>
            Chocolate quente, leite com canela, ponche e cappuccino ficam com uma camada a mais de complexidade com uma pitada ralada na hora. É o tipo de detalhe que transforma uma bebida corriqueira em algo que você faz de propósito.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar noz-moscada: dose certa e hora de colocar</h2>

          <p>
            A receita pede "noz-moscada a gosto" e você fica olhando pro frasco. Isso acontece com todo mundo. A orientação vaga existe porque o gosto varia — mas dá pra ter um ponto de partida concreto.
          </p>

          <h3>Dose de referência</h3>
          <p>
            Para pratos que servem 4 a 6 pessoas, comece com ¼ de colher de chá de noz-moscada em pó. Em ralada na hora, são 5 a 8 raspas de ralador fino. É menos do que você imagina — e é sempre mais fácil adicionar do que corrigir o excesso. Noz-moscada em quantidade exagerada domina o prato e fica amarga.
          </p>

          <h3>Inteira ou em pó</h3>
          <p>
            A noz-moscada inteira, ralada na hora com um microplane ou ralador fino, tem aroma significativamente mais fresco e intenso. Vale a pena se você usa com alguma frequência — a noz inteira dura 2 a 4 anos sem perder força, enquanto o pó começa a enfraquecer depois de 6 a 12 meses.
          </p>
          <p>
            Para uso esporádico, o pó já funciona. Só verifique se ainda tem aroma antes de usar — abra o pote e cheire. Se o cheiro for fraco, vai precisar de mais quantidade para o mesmo efeito.
          </p>

          <h3>Quando adicionar durante o preparo</h3>
          <p>
            Em molhos e purês, adicione perto do fim do cozimento — ou depois de apagar o fogo. O calor prolongado diminui o aroma. Em massas de bolo e biscoitos, vai junto com os outros ingredientes secos e aguenta bem o forno. Em bebidas quentes, rale direto na xícara antes de servir.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios e cuidados com a noz-moscada</h2>

          <p>
            Noz-moscada tem propriedades antioxidantes e compostos com ação anti-inflamatória — eugenol, miristicina e elemicina são os principais. Em estudos de laboratório, esses compostos mostraram efeitos digestivos e antimicrobianos. Na prática, as quantidades usadas na culinária são pequenas demais para produzir efeitos terapêuticos mensuráveis.
          </p>
          <p>
            Use noz-moscada porque melhora o sabor do que você cozinha. Não porque vai resolver digestão ou inflamação — essas afirmações precisam de doses muito acima do que qualquer receita pede.
          </p>
          <p>
            O cuidado real: noz-moscada em quantidade exagerada é tóxica. Acima de 5g — o equivalente a várias colheres de chá inteiras — pode causar náusea, tontura, alucinações e outros efeitos neurológicos. Isso está muito além de qualquer uso culinário razoável. Uma pitada ou ¼ de colher de chá num prato familiar é completamente seguro.
          </p>
          <p>
            Gestantes costumam ser orientadas a evitar quantidades elevadas, mas a dose culinária normal não representa risco estabelecido. Se houver dúvida específica, a questão é pra médico, não pra blog de culinária.
          </p>

          {/* COMPRAR E GUARDAR */}
          <h2 id="comprar-e-guardar">Como comprar e guardar noz-moscada</h2>

          <p>
            Noz-moscada está em qualquer supermercado, no corredor de especiarias. A versão em pó vem em frascos de 30g a 50g e é a mais fácil de encontrar. A inteira aparece em supermercados maiores, empórios e lojas de especiarias — e vale procurar se você vai usar com regularidade.
          </p>
          <p>
            Quanto custa: o pó custa entre R$ 5 e R$ 15 por frasco, dependendo da marca e do tamanho. A inteira é um pouco mais cara por grama, mas como a dose de uso é pequena, um ou dois grãos duram meses. Compare o preço por grama se quiser a referência mais honesta.
          </p>

          <h3>Como guardar corretamente</h3>
          <p>
            Guarde em pote fechado, longe de calor, luz e umidade. O maior erro é deixar acima do fogão: o vapor e o calor das panelas destroem o aroma de qualquer especiaria em semanas. Uma prateleira seca, fora do alcance direto do calor, é o suficiente.
          </p>
          <p>
            A noz-moscada inteira dura 2 a 4 anos nessas condições. O pó começa a perder força depois de 6 a 12 meses — não necessariamente "estraga", mas perde aroma e você vai precisar usar mais quantidade para o mesmo resultado. O teste é simples: abra e cheire. Se o aroma for fraco, está na hora de trocar.
          </p>
          <p>
            Se você organiza a{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}por zonas, especiarias ficam melhor juntas — em prateleira fechada ou gaveta, longe do fogão. Isso ajuda a lembrar o que tem e a perceber quando algo está perto do fim antes de estar no meio de uma receita.
          </p>
          <p>
            Na próxima vez que montar a{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>
            , vale conferir a noz-moscada antes de sair. É o tipo de item que você descobre que acabou no momento errado — quando o molho já está pronto e a pitada que faltava estava no fundo do pote vazio.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre noz-moscada</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Noz-moscada pode ser usada em pratos salgados?</p>
              <p className="faq-a">
                Sim — e é onde ela brilha mais. Béchamel, purê de batata, gratinados, sopas cremosas e recheios de espinafre ficam diferentes com uma pitada. Ela não adiciona um sabor identificável: aprofunda e arredonda o prato. É o tipo de ingrediente que, quando falta, algo parece incompleto — mas você não sabe exatamente o quê.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto de noz-moscada usar por receita?</p>
              <p className="faq-a">
                Para pratos que servem 4 a 6 pessoas, ¼ de colher de chá de pó é o ponto de partida. Em ralada na hora, 5 a 8 raspas de ralador fino. Comece com menos — é mais fácil adicionar do que corrigir o excesso. Em doces e bebidas quentes, uma pitada já basta para o aroma aparecer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre noz-moscada inteira e em pó?</p>
              <p className="faq-a">
                A inteira preserva o aroma por 2 a 4 anos em pote fechado — contra 6 a 12 meses do pó. Ralada na hora, o aroma é mais fresco e intenso. O pó é mais prático, mas perde força mais rápido. Se você usa com frequência, a inteira com ralador fino compensa. Se usa raramente, o pó já serve.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Noz-moscada pode fazer mal?</p>
              <p className="faq-a">
                Em quantidades culinárias, não. O problema aparece acima de 5g — várias colheres de chá inteiras — o que está muito além de qualquer receita normal. Uma pitada ou ¼ de colher de chá num prato familiar é completamente seguro. Gestantes costumam ser orientadas a evitar excesso, mas a dose culinária não representa risco estabelecido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual é a diferença entre noz-moscada e macis?</p>
              <p className="faq-a">
                Macis é a membrana avermelhada que envolve a semente da noz-moscada — os dois vêm da mesma planta. O macis tem sabor mais suave e levemente floral. A noz-moscada é mais intensa e terrosa. No Brasil, macis é raro — dificilmente você vai encontrar no supermercado. Para fins práticos, são intercambiáveis em receitas, ajustando a quantidade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar noz-moscada em casa?</p>
              <p className="faq-a">
                Em pote fechado, longe de calor, luz e umidade — nunca acima do fogão. A inteira dura 2 a 4 anos nessas condições; o pó, 6 a 12 meses antes de perder força. O teste: abra e cheire. Aroma fraco ou ausente é sinal de que está na hora de trocar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde encontrar noz-moscada no mercado?</p>
              <p className="faq-a">
                Em qualquer supermercado, no corredor de especiarias. A versão em pó é a mais fácil de achar, em frascos de 30g a 50g. A inteira aparece em supermercados maiores, empórios e lojas de especiarias. O preço por grama é mais alto que canela ou cominho, mas como a dose por uso é pequena, um frasco dura bastante.
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
                Criador do Mise. A receita pedia "noz-moscada a gosto". Ele não sabia o quanto. Tentou várias vezes. O biscoito ficou estranho.
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
              Você confere o que tem antes de ir ao mercado — e não descobre que a noz-moscada acabou no meio do purê.
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
