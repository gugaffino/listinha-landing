import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'Para que serve o orégano: usos, fresco, seco e como guardar',
  description: 'Para que serve o orégano além da pizza? Saiba as diferenças entre fresco e seco, quanto usar em receitas e como guardar em casa sem perder o aroma todo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/para-que-serve-o-oregano',
  },
  openGraph: {
    title: 'Para que serve o orégano: usos, fresco, seco e como guardar',
    description: 'Para que serve o orégano além da pizza? Saiba as diferenças entre fresco e seco, quanto usar em receitas e como guardar em casa sem perder o aroma todo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/para-que-serve-o-oregano',
    images: [
      {
        url: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Ramos de orégano fresco com folhas verdes sobre superfície rústica de madeira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Para que serve o orégano: usos, fresco, seco e como guardar',
    description: 'Para que serve o orégano além da pizza? Saiba as diferenças entre fresco e seco, quanto usar em receitas e como guardar em casa sem perder o aroma todo.',
    images: ['https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Para que serve orégano além da pizza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orégano vai bem em molhos de tomate, frango marinado, peixes no forno, legumes assados, sopas e até em vinagrete. É muito mais versátil do que a maioria das pessoas usa no dia a dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre orégano fresco e seco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O orégano seco é mais concentrado e funciona melhor em cozimentos longos — o calor vai liberando o aroma com o tempo. O fresco é mais suave e vai melhor como finalização ou cru em saladas. Uma colher de sopa de fresco equivale a cerca de um terço de colher de chá de seco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto orégano usar em molho de pizza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma colher de chá de orégano seco para um molho de 4 porções é um bom ponto de partida. A pizza aguenta bem o tempero, então pode ajustar a gosto sem medo de exagerar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso colocar orégano seco cru na salada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas a textura do orégano seco direto na salada costuma ficar estranha. Prefira o orégano fresco em saladas. Ou dissolva o orégano seco no azeite da vinagrete antes de misturar — o óleo hidrata e distribui melhor o sabor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber se o orégano que tenho em casa ainda está bom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esfrega um pouco entre os dedos e cheira. Se praticamente não tem aroma, já perdeu a potência — visualmente o orégano pode parecer normal, mas não vai temperar nada. Em pote fechado na despensa, o aroma vai diminuindo a partir de 1 ano e some quase por completo depois de 2 a 3 anos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Orégano pode substituir manjericão na receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não diretamente. Os sabores são diferentes: manjericão é mais fresco e floral; orégano é mais terroso e robusto. Em molhos de tomate encorpados, o orégano funciona bem sozinho. Mas em pratos que dependem do frescor do manjericão — como caprese ou pesto — a substituição vai mudar o resultado.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Para que serve o orégano: usos, fresco, seco e como guardar',
  description: 'Para que serve o orégano além da pizza? Saiba as diferenças entre fresco e seco, quanto usar em receitas e como guardar em casa sem perder o aroma todo.',
  image: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
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
    '@id': 'https://www.miseemcasa.com.br/blog/para-que-serve-o-oregano',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Para que serve o orégano', item: 'https://www.miseemcasa.com.br/blog/para-que-serve-o-oregano' },
  ],
}

export default function ParaQueServeOOregano() {
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
            <li className="breadcrumb-current" aria-current="page">Para que serve o orégano</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-24">24 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Para que serve o orégano na cozinha — fresco, seco e como usar de verdade
          </h1>
          <p className="blog-desc">
            Você usa toda semana em pizza. Mas quando alguém pergunta pra que serve o orégano, ninguém sabe responder muito bem além disso. É mais versátil do que parece — e funciona diferente dependendo de como você usa.
          </p>

          <div className="answer-box">
            <p>
              <strong>Orégano</strong> é uma erva mediterrânea usada principalmente pra temperar.
              Na cozinha, serve pra aromatizar molhos, pizzas, carnes, peixes e legumes assados.
              A versão seca é mais concentrada do que a fresca — e as duas funcionam de formas diferentes dependendo do calor e do tempo de cozimento.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Ramos de orégano fresco com folhas verdes sobre superfície rústica de madeira"
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
              <li><a href="#o-que-e">O que é orégano</a></li>
              <li><a href="#para-que-serve">Para que serve na cozinha</a></li>
              <li><a href="#fresco-ou-seco">Fresco ou seco: qual usar e quando</a></li>
              <li><a href="#quantidade">Quanto orégano usar em cada receita</a></li>
              <li><a href="#como-guardar">Como guardar em casa</a></li>
              <li><a href="#vale-a-pena">Vale a pena ter sempre em casa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <h2 id="o-que-e">O que é orégano</h2>

          <p>
            Orégano (<em>Origanum vulgare</em>) é uma erva perene da família da menta. Nativa do Mediterrâneo, cheiro forte, levemente amargo, com um calor que fica no fundo do paladar depois de engolir. Cresceu na cozinha brasileira pela influência italiana — chegou pela pizza e ficou na prateleira.
          </p>
          <p>
            No Brasil, a forma mais comum é o orégano seco em sachê. Aquele que você chacoalha em cima da pizza sem pensar muito. Mas existe também o fresco, vendido em maços no hortifruti, que funciona de um jeito completamente diferente.
          </p>
          <p>
            A planta tem folhas pequenas, ovais, de cor verde-escura. O aroma vem dos óleos essenciais, principalmente carvacrol e timol — os mesmos que fazem o tomilho ter cheiro parecido. É uma erva de cozimento, não de finalização: quanto mais tempo no calor, mais o sabor se desenvolve.
          </p>
          <p>
            O orégano grego tem sabor mais intenso do que o italiano ou o mexicano. O que você compra no mercado brasileiro não costuma discriminar a variedade na embalagem — geralmente é uma mistura de tipos mediterrâneos, o que funciona bem pra uso geral.
          </p>

          {/* PARA QUE SERVE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Orégano seco e outras ervas em pequenas tigelas de cerâmica sobre superfície de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="para-que-serve" className="img-above">Para que serve o orégano na cozinha</h2>

          <p>
            Orégano é um tempero aromático. Serve pra dar fundo herbal em pratos que precisam de estrutura de sabor. É diferente do sal, que realça o que já existe, e diferente da pimenta, que aquece. O orégano adiciona uma camada de sabor que não estava antes.
          </p>
          <p>
            Funciona bem com proteína animal, com tomate e com azeite. Essa combinação explica por que a pizza virou o vetor de divulgação do orégano no Brasil — os três estão no mesmo prato.
          </p>

          <p>Onde o orégano serve de verdade:</p>
          <ul className="item-list">
            <li>Molhos de tomate — pizza, macarrão, shakshuka</li>
            <li>Frango marinado ou grelhado</li>
            <li>Carnes vermelhas no forno ou na grelha</li>
            <li>Peixes brancos assados com azeite</li>
            <li>Legumes assados no forno — berinjela, abobrinha, cebola</li>
            <li>Sopas de legumes e feijão</li>
            <li>Vinagrete e molhos de salada com azeite</li>
          </ul>

          <p>Onde geralmente não funciona bem:</p>
          <ul className="item-list">
            <li>Pratos com sabores muito delicados — peixe cru, carpaccio</li>
            <li>Receitas que pedem frescor — como ceviche ou salada verde simples</li>
            <li>Como substituto direto de coentro ou salsinha em pratos que dependem do verde fresco</li>
          </ul>

          <p>
            Uma observação prática: orégano seco diretamente em proteínas sem marinada prévia tende a queimar antes de cozinhar. Se for grelhar frango com orégano, coloca na marinada — não direto na frigideira quente.
          </p>

          {/* FRESCO OU SECO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3944100/pexels-photo-3944100.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pizza assada com molho de tomate, queijo e ervas frescas vista de cima"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="fresco-ou-seco" className="img-above">Fresco ou seco: qual usar e quando</h2>

          <p>
            A principal diferença entre orégano fresco e seco não é de intensidade. É de tipo de sabor.
          </p>
          <p>
            O orégano seco passou pelo processo de desidratação, que concentra os óleos essenciais. O resultado é um sabor mais pungente e encorpado. Funciona bem em cozimentos longos — o calor vai liberando o aroma de forma gradual. É o que vai bem no molho de pizza, na marinada de frango, no feijão no começo do cozimento.
          </p>
          <p>
            O orégano fresco tem sabor mais suave e levemente verde. Perde parte do aroma com o calor prolongado. Funciona melhor adicionado no final do cozimento ou cru — em saladas, como finalização de pratos quentes, em molhos frios e pastinhas.
          </p>
          <p>
            A conversão entre os dois: 1 colher de sopa de orégano fresco equivale a ⅓ de colher de chá de orégano seco. É uma diferença de quase 3 para 1. Colocar a quantidade pedida em fresco sendo pedida em uma receita que pede seco vai dar um resultado muito mais fraco. E vice-versa — o seco numa receita que pede fresco vai encorpar demais.
          </p>
          <p>
            Regra prática: se a receita cozinha mais de 20 minutos, usa o seco. Se é finalização ou prato frio, usa o fresco.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* QUANTIDADE */}
          <h2 id="quantidade">Quanto orégano usar em cada receita</h2>

          <p>
            Orégano tem sabor dominante quando exagerado. Mas é difícil errar em pizzas e molhos de tomate — eles são robustos o suficiente pra aguentar. Em pratos mais delicados, o excesso aparece como amargor.
          </p>

          <p>Referências de quantidade para orégano seco:</p>
          <ul className="item-list">
            <li><strong>Molho de pizza ou macarrão (4 porções):</strong> 1 colher de chá</li>
            <li><strong>Frango marinado (por peça):</strong> ½ a 1 colher de sopa</li>
            <li><strong>Legumes assados (por bandeja):</strong> 1 colher de chá</li>
            <li><strong>Feijão ou sopa (panela de 2 litros):</strong> ½ colher de chá</li>
            <li><strong>Vinagrete (para 4 porções de salada):</strong> ¼ de colher de chá</li>
          </ul>

          <p>
            Para pizza, "a gosto" é o que todo mundo faz — e funciona. A pizza é o prato que mais aguenta orégano. Nunca houve uma pizza arruinada por excesso de orégano. É o único "a gosto" da cozinha que não precisa de calibração.
          </p>
          <p>
            Pra orégano fresco, os números são diferentes — multiplica por 3. Um prato que pede 1 colher de chá de seco vai precisar de 1 colher de sopa cheia de fresco.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Como guardar orégano em casa</h2>

          <p>
            Orégano seco é fácil de guardar. O inimigo é o trio: umidade, calor direto e luz. Em pote de vidro com tampa bem fechada, em despensa ou armário, dura de 1 a 3 anos. Longe do fogão — o vapor e as variações de temperatura enfraquecem o aroma mais rápido do que você imagina.
          </p>
          <p>
            Como testar se ainda está bom: esfrega uma pitada entre os dedos e cheira. Se o cheiro for fraco ou quase inexistente, acabou — visualmente o orégano pode parecer normal, mas não vai temperar nada. Depois de 2 anos em sachê ou pote, a chance de ainda ter aroma é pequena.
          </p>
          <p>
            O orégano que está há dois anos na prateleira desde a última vez que alguém fez pizza em casa. Esse.
          </p>
          <p>
            Orégano fresco é mais exigente. Envolto em papel-toalha levemente úmido e guardado em saco ou pote na geladeira, dura de 5 a 7 dias. Se comprou mais do que vai usar em uma semana, congela: lava, seca bem, pica grosso e coloca em forminhas de gelo com um fio de azeite. No freezer, dura até 6 meses — e vai direto da fôrma pra panela sem precisar descongelar.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena ter sempre em casa</h2>

          <p>
            Sim — orégano seco é um dos temperos com melhor custo-benefício da despensa. Barato, dura bastante e você usa pouco por receita. Não é um ingrediente de ocasião, é item de fundo de armário que você nota quando acaba.
          </p>
          <p>
            É diferente de açafrão, que custa caro e vai em pratos específicos. Ou de curry em pasta, que entra quando tem plano. Orégano entra na{' '}
            <a href="/blog/lista-de-compras-mercado">lista de compras</a>{' '}
            junto com sal, pimenta e alho — você não pensa duas vezes.
          </p>
          <p>
            A única situação em que não vale a pena comprar mais: quando o que está na despensa já passou de 2 anos. Nesse caso, joga fora e compra sachê novo. Manter orégano sem aroma na prateleira é acumular a ilusão de que você tem orégano. O frango vai sair sem gosto e você vai achar que é culpa da receita.
          </p>
          <p>
            Orégano fresco vale a pena quando você vai usá-lo em pratos onde ele aparece de verdade — finalização de massas, molhos frios, pratos mediterrâneos. Comprar maço inteiro pra usar em pizza uma vez na semana é receita pra jogar fora o resto.
          </p>
          <p>
            O orégano seco está na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>.
            O fresco entra quando tem receita com ele. Nessa ordem.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre orégano</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Para que serve orégano além da pizza?</p>
              <p className="faq-a">
                Vai bem em molhos de tomate, frango marinado, peixes no forno, legumes assados, sopas e vinagrete. É muito mais versátil do que a maioria das pessoas usa no dia a dia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre orégano fresco e seco?</p>
              <p className="faq-a">
                O seco é mais concentrado e funciona melhor em cozimentos longos. O fresco é mais suave e vai melhor como finalização ou cru em saladas. Uma colher de sopa de fresco equivale a cerca de ⅓ de colher de chá de seco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto orégano usar em molho de pizza?</p>
              <p className="faq-a">
                Uma colher de chá de orégano seco para um molho de 4 porções é um bom ponto de partida. A pizza aguenta bem o tempero — pode ajustar a gosto sem medo de exagerar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso colocar orégano seco cru na salada?</p>
              <p className="faq-a">
                Pode, mas a textura do orégano seco direto na salada fica estranha. Prefira o orégano fresco em saladas. Ou dissolva o orégano seco no azeite da vinagrete antes de misturar — o óleo hidrata e distribui melhor o sabor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como saber se o orégano ainda está bom?</p>
              <p className="faq-a">
                Esfrega um pouco entre os dedos e cheira. Se praticamente não tem aroma, já perdeu a potência — visualmente parece normal, mas não vai temperar nada. Em pote fechado, o aroma vai sumindo a partir de 1 ano e some quase por completo depois de 2 a 3 anos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Orégano pode substituir manjericão na receita?</p>
              <p className="faq-a">
                Não diretamente. Manjericão é mais fresco e floral; orégano é mais terroso e robusto. Em molhos de tomate encorpados, o orégano funciona bem sozinho. Mas em pratos que dependem do frescor do manjericão — como caprese ou pesto — a substituição muda o resultado.
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
                Criador do Mise. Tem orégano na despensa há mais tempo do que lembra. Já não sabe quando comprou. Cheirou agora enquanto escrevia — ainda serve.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem em casa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Despensa, receitas e lista de compras no mesmo lugar.
              O orégano não vai sumir da prateleira sem você saber — e quando acabar, já entra na lista.
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
