import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Óleo de gergelim: benefícios e como usar na cozinha',
  description: 'Óleo de gergelim tem benefícios para coração, pele e inflamação. Entenda a diferença entre cru e torrado, como comprar e como usar na cozinha sem errar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/oleo-de-gergelim',
  },
  openGraph: {
    title: 'Óleo de gergelim: benefícios e como usar na cozinha',
    description: 'Óleo de gergelim tem benefícios para coração, pele e inflamação. Entenda a diferença entre cru e torrado, como comprar e como usar na cozinha sem errar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/oleo-de-gergelim',
    images: [
      {
        url: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sementes de gergelim douradas em close-up — base do óleo de gergelim torrado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Óleo de gergelim: benefícios e como usar na cozinha',
    description: 'Óleo de gergelim tem benefícios para coração, pele e inflamação. Entenda a diferença entre cru e torrado, como comprar e como usar na cozinha sem errar.',
    images: ['https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Óleo de gergelim torrado serve para fritar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O óleo de gergelim torrado tem ponto de fumaça baixo e aroma intenso que se destrói com o calor alto. Usado para fritar, fica amargo e perde todo o sabor característico. O correto é adicionar ao final do preparo — por cima de um prato pronto, em molhos, ou depois de refogar. O óleo de gergelim cru (claro) é que pode ir à frigideira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre óleo de gergelim e azeite de gergelim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São nomes diferentes para o mesmo produto. "Azeite de gergelim" é a denominação mais usada em Portugal e em algumas marcas importadas. No Brasil, o mais comum é "óleo de gergelim". Ambos são extraídos das sementes de gergelim (Sesamum indicum) e podem ser crus ou torrados. Leia o rótulo para saber qual dos dois está comprando.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de gergelim faz bem para pele?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tem vitamina E e ácidos graxos essenciais que contribuem para a hidratação e proteção da pele. É muito usado em cosméticos e em práticas da medicina ayurvédica. Na alimentação, os benefícios para a pele vêm do consumo regular, não da aplicação tópica — para isso existem produtos cosméticos específicos com gergelim.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde comprar óleo de gergelim no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em lojas de produtos orientais e japoneses (Bairro Liberdade em São Paulo, por exemplo), na seção de produtos internacionais de supermercados maiores como Extra, Pão de Açúcar e Carrefour, em lojas de produtos naturais e via e-commerce. A versão torrada é mais fácil de achar do que a cru.',
      },
    },
    {
      '@type': 'Question',
      name: 'Óleo de gergelim tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gergelim puro não tem glúten. O óleo de gergelim 100% puro também não. Mas verifique o rótulo em produtos que misturem outros ingredientes — marinadas e molhos prontos com base de gergelim podem ter glúten de outros componentes. Para intolerância severa, prefira marcas com certificação sem glúten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso substituir óleo de gergelim torrado em receitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O sabor não tem substituto direto — é muito característico. Em emergências, óleo de nozes torradas chega mais perto. Para receitas de marinada asiática, você pode omitir e compensar com mais shoyu e gengibre, mas o resultado será diferente. Para receitas onde o gergelim é o sabor central (como molho de tahine ou lamen), a substituição não funciona.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Óleo de gergelim: benefícios e como usar na cozinha',
  description: 'Óleo de gergelim tem benefícios para coração, pele e inflamação. Entenda a diferença entre cru e torrado, como comprar e como usar na cozinha sem errar.',
  image: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
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
    '@id': 'https://www.miseemcasa.com.br/blog/oleo-de-gergelim',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Óleo de gergelim', item: 'https://www.miseemcasa.com.br/blog/oleo-de-gergelim' },
  ],
}

export default function OleoDeGergelim() {
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
            <li className="breadcrumb-current" aria-current="page">Óleo de gergelim</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-27">27 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Óleo de gergelim: o que é, tipos e como usar de verdade na cozinha
          </h1>
          <p className="blog-desc">
            Tem uma garrafa escura na prateleira do supermercado com cheiro de wok. Você compra. Tenta fritar com ela. Fica amargo. Joga fora. O problema não é o óleo — é que torrado e cru são produtos completamente diferentes, com usos completamente diferentes.
          </p>

          <div className="answer-box">
            <p>
              <strong>Óleo de gergelim</strong> é extraído das sementes de gergelim (<em>Sesamum indicum</em>).
              Existe em duas versões: <strong>cru</strong> (claro, suave, pode ir ao fogo) e <strong>torrado</strong> (escuro, aroma intenso, só para finalizar — nunca para fritar).
              Tem alto teor de gorduras insaturadas, antioxidantes únicos como sesamina e sesamolina, e é um dos óleos mais usados na culinária asiática há mais de 5.000 anos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sementes de gergelim douradas espalhadas em superfície plana — base do óleo de gergelim"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é óleo de gergelim</a></li>
              <li><a href="#cru-ou-torrado">Cru ou torrado: a diferença que muda tudo</a></li>
              <li><a href="#beneficios">Benefícios do óleo de gergelim</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#comprar-guardar">Como comprar e guardar</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Óleo de gergelim em vidro com sementes ao redor — ingrediente versátil da culinária asiática"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é óleo de gergelim</h2>

          <p>
            Óleo de gergelim é extraído por prensagem a frio das sementes de gergelim (<em>Sesamum indicum</em>), uma planta originária da África e cultivada há milênios no sul da Ásia e no Oriente Médio. É um dos óleos vegetais mais antigos da história humana — há registros de uso na Mesopotâmia por volta de 3.000 a.C.
          </p>
          <p>
            No Brasil, chegou principalmente pela imigração japonesa. A colônia nikkei popularizou o óleo de gergelim torrado como tempero em pratos como guioza, yakisoba e sunomono. Hoje está disponível em supermercados maiores e em qualquer mercearia de bairro com produtos orientais.
          </p>
          <p>
            O que muita gente não sabe é que existem dois produtos com o mesmo nome que funcionam de formas completamente diferentes na cozinha. Um pode ir ao fogo. O outro não pode. Confundir os dois é o erro mais comum de quem compra óleo de gergelim pela primeira vez.
          </p>

          {/* CRU OU TORRADO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dois frascos de óleo de gergelim lado a lado — versão clara (cru) e versão escura (torrado)"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Castorly Stock / Pexels</p>
          </div>

          <h2 id="cru-ou-torrado" className="img-above">Cru ou torrado: a diferença que muda tudo na cozinha</h2>

          <p>
            São dois óleos distintos. Mesma origem, perfil de uso completamente diferente.
          </p>

          <h3>Óleo de gergelim cru</h3>
          <p>
            Cor dourada clara, aroma suave. Tem ponto de fumaça alto (cerca de 210°C) e pode ser usado para refogar, saltear e até fritar. É muito usado na culinária indiana e do Oriente Médio — também entra em receitas de tahine junto com pasta de gergelim. Mais difícil de achar no Brasil, mas existe em lojas de produtos naturais e empórios especializados.
          </p>

          <h3>Óleo de gergelim torrado</h3>
          <p>
            Cor âmbar escura, quase avermelhada. Aroma intenso de nozes tostadas — uma ou duas colheres de chá perfumam o prato inteiro. Tem ponto de fumaça mais baixo e, aquecido em temperatura alta, fica amargo e perde o que o torna especial. A regra é simples: <strong>sempre no final</strong>. Por cima do prato pronto, no molho, na marinada, na travessa que sai do fogo.
          </p>
          <p>
            O que está na maioria dos supermercados brasileiros é o torrado. Se o frasco for escuro (ou o óleo dentro for cor de âmbar), é torrado. Se for transparente e o óleo for amarelo pálido, é cru. Verifique o rótulo — geralmente diz "torrado" ou "tostado" com clareza.
          </p>
          <p>
            Usar o torrado pra fritar é o erro que faz a pessoa achar que não gosta de óleo de gergelim. Ela gosta. Só tá usando errado.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios do óleo de gergelim</h2>

          <p>
            Óleo de gergelim tem um perfil nutricional acima da média entre os óleos vegetais. A composição está bem documentada — o que variam são as pesquisas sobre a magnitude dos efeitos.
          </p>

          <h3>Gorduras insaturadas</h3>
          <p>
            Cerca de 82% da gordura do óleo de gergelim é insaturada — ácidos oleico (ômega-9) e linoleico (ômega-6), os mesmos tipos presentes no azeite de oliva e no óleo de canola. A composição está documentada na{' '}
            <a href="https://www.tbca.net.br/" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos (TBCA)</a>.
            Gorduras insaturadas estão associadas a menor risco cardiovascular quando substituem gorduras saturadas na dieta.
          </p>

          <h3>Antioxidantes únicos: sesamina e sesamolina</h3>
          <p>
            Esses dois lignanos são praticamente exclusivos do gergelim — não aparecem com a mesma concentração em outros alimentos. Revisões publicadas em periódicos indexados na{' '}
            <a href="https://www.scielo.br/" target="_blank" rel="noopener">SciELO</a>{' '}
            indicam ação antioxidante e potencial anti-inflamatório, mas a maioria dos estudos é em modelos animais. O suficiente pra saber que o óleo tem compostos bioativos interessantes, não para afirmar que "trata" qualquer condição.
          </p>

          <h3>Vitamina E e vitamina K</h3>
          <p>
            Vitamina E contribui para a proteção celular contra oxidação. Vitamina K tem papel na saúde óssea e na coagulação. O óleo de gergelim tem ambas em quantidades relevantes, especialmente para um óleo de cozinha — que geralmente não é visto como fonte de micronutrientes.
          </p>

          <h3>Propriedades anti-inflamatórias</h3>
          <p>
            A medicina ayurvédica usa óleo de gergelim há séculos em práticas como o oil pulling (bochecho com óleo) e massagem. Estudos mais recentes confirmam que a sesamina tem ação anti-inflamatória. Não é um medicamento. É um óleo com compostos bioativos que, usado regularmente em substituição a óleos mais processados, pode contribuir para uma dieta mais equilibrada.
          </p>

          <div className="blog-inline-cta">
            <p>Seu estoque de óleo de gergelim tá no controle? <em>A despensa do Mise lembra.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar óleo de gergelim na cozinha</h2>

          <p>
            A regra de ouro com o torrado (que é o que a maioria tem em casa): <strong>adicione por último</strong>. Nunca no início do preparo, nunca em fogo alto direto.
          </p>

          <h3>Molhos e temperos</h3>
          <p>
            Uma colher de chá de gergelim torrado com shoyu, gengibre ralado e um fio de limão: molho pra guioza, pra noodle frio, pra carne grelhada. Sem cozinhar — mistura e serve. O óleo emulsiona no líquido e distribui o aroma por igual.
          </p>
          <p>
            No arroz de ovo (aquele que a maioria das pessoas faz no dia seguinte com sobras): um fio de gergelim torrado antes de servir transforma o prato. Não é diferente do que os restaurantes japoneses fazem.
          </p>

          <h3>Marinadas</h3>
          <p>
            Misture com shoyu, alho e{' '}
            <a href="/blog/o-que-e-gengibre">gengibre</a>{' '}
            para marinar frango, peixe ou tofu. O óleo de gergelim traz profundidade sem precisar de muitos ingredientes. Para churrasco no estilo nikkei, é o que diferencia uma marinada comum de uma que as pessoas pedem receita.
          </p>

          <h3>Finalização em pratos quentes</h3>
          <p>
            Yakisoba, macarrão, legumes refogados, arroz frito: adicione o gergelim torrado depois que o fogo apagou ou no prato já servido. A quantidade correta é menor do que parece — comece com meia colher de chá e ajuste. É um óleo concentrado. Uma colher de sopa já é muito.
          </p>

          <h3>Saladas e bowls</h3>
          <p>
            Em salada de pepino no estilo sunomono, o óleo de gergelim entra junto com vinagre de arroz e shoyu. Em bowls frios com legumes crus e proteína, uma ou duas colheres de chá no molho fazem a diferença entre uma salada genérica e um prato que parece elaborado. É o mesmo princípio de usar{' '}
            <a href="/blog/o-que-e-amendoa">oleaginosas</a>{' '}
            como acabamento — um elemento de sabor concentrado que eleva tudo ao redor.
          </p>

          {/* COMO COMPRAR E GUARDAR */}
          <h2 id="comprar-guardar">Como comprar e guardar</h2>

          <h3>Onde encontrar</h3>
          <p>
            A versão torrada está em supermercados maiores (seção de produtos internacionais ou orientais), em lojas de produtos japoneses e asiáticos, em empórios e em lojas de produtos naturais. Online a variedade é maior — tanto de marcas quanto de formatos (100ml, 250ml, 500ml). A versão crua é mais rara no Brasil. Para achar, busque empórios especializados ou loja online.
          </p>

          <h3>O que olhar no rótulo</h3>
          <ul className="item-list">
            <li><strong>100% óleo de gergelim</strong> — sem blend com outros óleos. Alguns produtos mais baratos diluem em óleo de soja.</li>
            <li><strong>Torrado ou cru</strong> — sempre claramente identificado. Se não informar, observe a cor pelo frasco.</li>
            <li><strong>Frasco escuro</strong> — o óleo de gergelim é sensível à luz. Frascos de vidro escuro ou lata protegem melhor a qualidade.</li>
            <li><strong>Data de validade</strong> — um frasco aberto deve ser usado em até 6 meses para o melhor sabor.</li>
          </ul>

          <h3>Como guardar</h3>
          <p>
            Longe do fogão e longe da luz direta. Uma prateleira fechada ou armário funciona bem — não é necessário geladeira, mas em casas muito quentes ajuda a preservar o aroma. Frasco aberto: use em até 3 a 6 meses. O teste de qualidade é simples: óleo fresco cheira a nozes tostadas. Óleo rançoso cheira a graxa. Se ficou assim, descarta.
          </p>
          <p>
            Vale ter o óleo de gergelim na{' '}
            <a href="/blog/o-que-e-chia">despensa de especiarias</a>{' '}
            como você tem azeite — não em grande quantidade, mas sempre disponível. Uma garrafa pequena (100ml) dura meses porque você usa em colheres de chá, não em copos.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre óleo de gergelim</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Óleo de gergelim torrado serve para fritar?</p>
              <p className="faq-a">
                Não. O óleo torrado tem ponto de fumaça baixo e aroma que se destrói com calor alto. Aquecido em temperatura de fritura, fica amargo e perde o sabor característico. Use sempre como finalizador — por cima do prato pronto, em molhos ou marinadas. Quem quer fritar com óleo de gergelim precisa da versão crua (clara).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre óleo de gergelim e azeite de gergelim?</p>
              <p className="faq-a">
                São nomes diferentes para o mesmo produto. "Azeite de gergelim" é mais comum em Portugal e em algumas marcas importadas. No Brasil, o padrão é "óleo de gergelim". Ambos são extraídos das sementes de gergelim e podem ser crus ou torrados — leia o rótulo para saber qual dos dois está comprando.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de gergelim faz bem para pele?</p>
              <p className="faq-a">
                Tem vitamina E e ácidos graxos essenciais que contribuem para a saúde da pele quando consumidos regularmente. É usado em cosméticos e em práticas da medicina ayurvédica. Na alimentação, os benefícios vêm do consumo habitual — para aplicação direta na pele, existem produtos cosméticos específicos formulados pra isso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde comprar óleo de gergelim no Brasil?</p>
              <p className="faq-a">
                Em lojas de produtos orientais e japoneses, na seção internacional de supermercados maiores (Extra, Pão de Açúcar, Carrefour, Atacadão), em empórios de produtos naturais e online. A versão torrada é mais acessível. A crua exige mais pesquisa — empórios especializados e e-commerce têm mais variedade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Óleo de gergelim tem glúten?</p>
              <p className="faq-a">
                Gergelim puro não tem glúten, e o óleo 100% gergelim também não. Em molhos e marinadas prontas com base de gergelim, verifique os outros ingredientes — shoyu, por exemplo, tradicionalmente tem trigo. Para restrição severa, prefira marcas com certificação sem glúten.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso substituir óleo de gergelim torrado em receitas?</p>
              <p className="faq-a">
                O sabor não tem substituto direto. Em emergências, óleo de nozes torradas chega mais perto. Para marinadas asiáticas, você pode omitir e compensar com mais shoyu e gengibre — o resultado vai ser diferente, mas funciona. Para pratos onde o gergelim é o sabor central, a substituição não resolve.
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
                Criador do Mise. Comprou óleo de gergelim torrado, tentou fritar ovo com ele, achou que estava estragado. Não estava. Só errou o uso. Faz parte.
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
              Você compra o que vai usar — e o óleo de gergelim não fica parado esperando uma ocasião especial.
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
