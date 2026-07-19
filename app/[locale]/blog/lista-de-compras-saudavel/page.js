import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras saudável: guia completo e o que incluir',
  description: 'Lista de compras saudável organiza verduras, proteínas e grãos antes de ir ao mercado. Guia com categorias, custo por mês e dicas pra não sair do plano.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel',
  },
  openGraph: {
    title: 'Lista de compras saudável: guia completo e o que incluir',
    description: 'Lista de compras saudável organiza verduras, proteínas e grãos antes de ir ao mercado. Guia com categorias, custo por mês e dicas pra não sair do plano.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel',
    images: [
      {
        url: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Verduras e frutas frescas dispostas sobre mesa — vista de cima para lista de compras saudável',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras saudável: guia completo e o que incluir',
    description: 'Lista de compras saudável organiza verduras, proteínas e grãos antes de ir ao mercado. Guia com categorias, custo por mês e dicas pra não sair do plano.',
    images: ['https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é uma lista de compras saudável?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma lista de compras saudável organiza alimentos por grupo nutricional — verduras, proteínas, grãos, leguminosas e gorduras boas — antes de ir ao mercado. O objetivo não é eliminar nada, mas garantir que você compre o que vai alimentar a semana de forma equilibrada, sem decidir no corredor o que parece saudável naquele momento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o custo médio de uma lista de compras saudável por mês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para duas pessoas, uma lista de compras saudável custa entre R$ 540 e R$ 770 por mês, concentrando o gasto em hortifruti, ovos, frango, feijão e laticínios básicos. Esse valor costuma ficar abaixo do ticket médio de uma compra mensal que inclui ultraprocessados e itens de impulso — a diferença vai exatamente para esses itens.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que nunca pode faltar em uma lista de compras saudável?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A base é: ovos, feijão, arroz, pelo menos três verduras e três frutas, e uma proteína para a semana (frango, carne, peixe ou alternativa vegetal). Esses itens cobrem as principais necessidades nutricionais. O restante é variação por preferência e orçamento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como fazer uma lista de compras saudável e barata ao mesmo tempo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priorize alimentos da estação, proteínas acessíveis como ovo e feijão, e grãos a granel quando possível. Evite versões processadas dos mesmos alimentos — granola industrializada custa mais do que aveia pura com frutas. O item mais nutritivo na maioria dos grupos alimentares costuma ser também o mais barato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lista de compras saudável e lista fit são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não necessariamente. Uma lista fit tende a focar em alto teor de proteína e corte de carboidrato — é mais direcionada a quem tem meta específica de composição corporal. Uma lista saudável é mais ampla: inclui carboidratos integrais, leguminosas, frutas e laticínios. Se você não está em dieta restritiva, a lista saudável cobre a maioria das necessidades.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar compras por impulso no mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coma antes de ir, organize a lista por corredor e decida antes de entrar: item que não está na lista não vai pro carrinho. Os 3 a 5 itens de impulso que a maioria das pessoas compra a cada ida representam, ao longo do ano, mais de R$ 1.000 em gastos que não estavam no plano (estimativa com base em dados de comportamento de compra).',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência preciso ir ao mercado para comer saudável?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dois modelos funcionam: uma compra mensal para itens secos (grãos, leguminosas, enlatados) e uma ou duas idas semanais para hortifruti e proteínas. Verduras e frutas não duram o mês inteiro, então comprar tudo de uma vez não é prático. Planejar o cardápio da semana antes de ir reduz as idas extras.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras saudável: guia completo e o que incluir',
  description: 'Lista de compras saudável organiza verduras, proteínas e grãos antes de ir ao mercado. Guia com categorias, custo por mês e dicas pra não sair do plano.',
  image: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-04',
  dateModified: '2026-06-04',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras saudável', item: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel' },
  ],
}

export default function ListaDeComprasSaudavel({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Lista de compras saudável</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-04">4 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que colocar na lista de compras saudável — e como seguir o plano no mercado
          </h1>
          <p className="blog-desc">
            Montar uma lista de compras saudável não é sobre proibir nada. É sobre decidir antes de chegar na gôndola o que vai alimentar a semana — e não depois, com fome, na frente do biscoito recheado.
          </p>

          <div className="answer-box">
            <p>
              Uma <strong>lista de compras saudável</strong> organiza os alimentos por grupo — verduras, proteínas, grãos integrais, leguminosas e gorduras boas — antes de você entrar no mercado. Com ela, você compra o que vai usar, evita os 3–5 itens de impulso da ida típica e não volta pra casa com o carrinho cheio mas a despensa sem nada pra cozinhar.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Verduras e frutas frescas dispostas sobre mesa — vista de cima para lista de compras saudável"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que define uma lista saudável</a></li>
              <li><a href="#categorias">Categorias essenciais: o que vai na lista</a></li>
              <li><a href="#por-corredor">Como organizar por corredor</a></li>
              <li><a href="#custo">Quanto custa por mês</a></li>
              <li><a href="#dicas">5 dicas para não sair do plano</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE DEFINE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5620875/pexels-photo-5620875.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up de legumes frescos coloridos — brócolis, pimentão e cenoura para lista saudável"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que define uma lista de compras saudável</h2>

          <p>
            Uma lista de compras saudável não é uma dieta disfarçada. Não tem a ver com cortar tudo que tem prazer, nem com encher o carrinho de quinoa e superalimentos que você não vai usar.
          </p>
          <p>
            É sobre comprar alimentos que têm algo a oferecer — fibra, proteína, vitamina, energia de qualidade — antes de comprar os que não têm quase nada além de calorias e praticidade.
          </p>
          <p>
            Pesquisa da Nielsen (2022) mostra que apenas 38% dos brasileiros fazem lista regularmente. Os outros 62% vão ao mercado "de cabeça" e gastam em média 27% a mais. Grande parte desse gasto extra vai para itens que não estavam no plano. Uma lista saudável resolve dois problemas ao mesmo tempo: o que você compra e o que você não compra.
          </p>
          <p>
            O ponto de partida não é saber quais são os alimentos mais saudáveis do mundo. É saber o que você já tem em casa e o que vai cozinhar na semana. Sem essa base, a lista fica abstrata — cheia de intenções, vazia de uso real.
          </p>

          {/* CATEGORIAS */}
          <h2 id="categorias">Categorias essenciais: o que vai na lista</h2>

          <p>
            Organizar a <a href="/blog/lista-basica-de-compras">lista de compras</a> por grupo alimentar garante variedade nutricional sem precisar checar cada item do zero toda semana. Com os grupos certos, você varia os itens dentro de cada categoria conforme o que está na estação — ou o que estava em promoção.
          </p>

          <h3>Verduras e legumes</h3>
          <ul className="item-list">
            <li><strong>Folhas:</strong> couve, espinafre, rúcula, alface — base de almoços e jantares</li>
            <li><strong>Legumes:</strong> cenoura, abobrinha, chuchu, vagem, beterraba</li>
            <li><strong>Temperos frescos:</strong> alho, cebola, salsinha, cebolinha</li>
          </ul>
          <p>
            Compre o que vai usar em 5 dias. Folha começa a murchar mais rápido do que qualquer cardápio bem-intencionado.
          </p>

          <h3>Frutas</h3>
          <ul className="item-list">
            <li>Banana, maçã, laranja, mamão — base da semana</li>
            <li>Fruta da estação: mais barata, mais nutritiva, menos chance de estragar antes de comer</li>
          </ul>

          <h3>Proteínas</h3>
          <ul className="item-list">
            <li>Ovos — a proteína mais versátil e acessível do mercado</li>
            <li>Frango, carne bovina ou peixe — conforme orçamento e preferência</li>
            <li>Tofu ou grão-de-bico — pra quem quer reduzir carne sem abrir mão de proteína</li>
          </ul>

          <h3>Grãos e cereais</h3>
          <ul className="item-list">
            <li>Arroz integral ou parboilizado</li>
            <li>Aveia em flocos — café da manhã e mingau</li>
            <li>Macarrão integral ou comum</li>
          </ul>

          <h3>Leguminosas</h3>
          <ul className="item-list">
            <li>Feijão carioca ou preto</li>
            <li>Lentilha — cozinha rápido, não precisa deixar de molho</li>
            <li>Grão-de-bico — versátil em saladas, sopas e homus</li>
          </ul>

          <h3>Gorduras e oleaginosas</h3>
          <ul className="item-list">
            <li>Azeite de oliva extra virgem</li>
            <li>Um punhado de castanha-do-pará, amêndoa ou nozes por dia</li>
          </ul>

          <h3>Laticínios</h3>
          <ul className="item-list">
            <li>Iogurte natural — sem adição de açúcar, o rótulo mostra a diferença</li>
            <li>Queijo branco ou ricota — proteína e gordura em equilíbrio</li>
          </ul>

          {/* POR CORREDOR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6740849/pexels-photo-6740849.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela colorida com alimentos saudáveis — grãos, legumes e proteínas organizados"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mikhail Nilov / Pexels</p>
          </div>

          <h2 id="por-corredor" className="img-above">Como organizar a lista por corredor</h2>

          <p>
            Lista organizada por grupo alimentar é boa pra planejar. Lista organizada por corredor é boa pra executar. O ideal é ter os dois — você monta por grupo, reorganiza pelo caminho do mercado.
          </p>
          <p>
            Uma sugestão de ordem que funciona na maioria dos supermercados brasileiros:
          </p>
          <ul className="item-list">
            <li><strong>1. Hortifruti</strong> — verduras e frutas primeiro, enquanto você ainda está com a cabeça fria</li>
            <li><strong>2. Carnes e proteínas</strong> — açougue ou seção de frios</li>
            <li><strong>3. Laticínios</strong> — iogurte, queijo, ovos</li>
            <li><strong>4. Corredor seco</strong> — grãos, leguminosas, cereais, azeite</li>
            <li><strong>5. Higiene e limpeza</strong> — último, longe da tentação alimentar</li>
          </ul>
          <p>
            Passar pelo corredor de biscoitos com o carrinho já cheio é psicologicamente mais fácil de ignorar. Passar nele logo no começo, com fome, é onde a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras saudável</a> vai por água abaixo.
          </p>

          <div className="blog-inline-cta">
            <p>Sabe o que tem na despensa antes de sair de casa. <em>É o que o Mise faz.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* CUSTO */}
          <h2 id="custo">Quanto custa uma lista de compras saudável por mês</h2>

          <p>
            Uma lista saudável não precisa ser cara. Os alimentos mais nutritivos tendem a ser os mais acessíveis: feijão, ovo, arroz, banana, couve, cenoura.
          </p>
          <p>
            Estimativa para duas pessoas com base em dados da FIPE/IBGE (2024):
          </p>
          <ul className="item-list">
            <li><strong>Hortifruti básico</strong> (verduras + frutas): R$ 150–200/mês</li>
            <li><strong>Proteínas</strong> (frango + ovos + grão-de-bico): R$ 200–280/mês</li>
            <li><strong>Grãos e leguminosas</strong>: R$ 60–90/mês</li>
            <li><strong>Laticínios básicos</strong>: R$ 80–120/mês</li>
            <li><strong>Óleos e temperos</strong>: R$ 50–80/mês</li>
          </ul>
          <p>
            Total estimado: R$ 540–770/mês. Bem abaixo do ticket médio de R$ 1.200–1.800 de uma compra mensal sem planejamento. A diferença vai para os 3–5 itens de impulso que a maioria das pessoas compra a cada ida — e que somam mais do que parece no fim do mês.
          </p>
          <p>
            Se o orçamento estiver apertado, comece pelos grupos mais baratos: leguminosas, ovos e hortifruti da estação. Esses três já cobrem boa parte das necessidades nutricionais da semana.
          </p>

          {/* DICAS */}
          <h2 id="dicas">5 dicas para não sair do plano no mercado</h2>

          <p>
            Saber o que colocar na lista é a parte fácil. Seguir o plano quando você está no corredor é onde a lista de compras saudável costuma virar lista de intenções.
          </p>

          <h3>1. Coma antes de ir</h3>
          <p>
            Ir ao mercado com fome é a única situação em que você decide que precisa de três tipos de biscoito recheado. Come qualquer coisa antes — um ovo, uma fruta, qualquer coisa. A diferença no carrinho é real.
          </p>

          <h3>2. Revise a despensa antes de montar a lista</h3>
          <p>
            O que você já tem determina o que falta. Montar a lista sem checar a{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            é comprar feijão pela quarta semana seguida enquanto o arroz integral de novembro ainda está lá.
          </p>

          <h3>3. Conecte a lista ao cardápio da semana</h3>
          <p>
            Cada refeição planejada gera um conjunto de ingredientes. Com um{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a>{' '}
            definido antes de ir ao mercado, você compra o que vai usar. Sem ele, a lista fica cheia de alimentos sem destino — nutritivos no papel, desperdício na prática.
          </p>
          <p>
            Se quiser um exemplo de como estruturar isso, veja o guia de{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal simples caseiro</a>.
          </p>

          <h3>4. Priorize a fruta da estação</h3>
          <p>
            Mais barata, mais nutritiva e menos chance de estragar antes de comer. Manga em plena safra é diferente de manga em julho — tanto no sabor quanto no preço. A sazonalidade existe a seu favor.
          </p>

          <h3>5. Item fora da lista não entra no carrinho</h3>
          <p>
            Essa é a regra que parece óbvia e que quase ninguém segue. Se o item era importante, vai estar na próxima lista. Se você vai comprar mesmo assim, pelo menos decida conscientemente — não deixe a gôndola decidir por você.
          </p>

          <p>
            A lista de compras saudável começa antes do mercado — no que você já tem em casa. Esse é o passo que a maioria pula.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre lista de compras saudável</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que é uma lista de compras saudável?</p>
              <p className="faq-a">
                Uma lista de compras saudável organiza alimentos por grupo nutricional — verduras, proteínas, grãos, leguminosas e gorduras boas — antes de você ir ao mercado. O objetivo não é eliminar nada, mas garantir que você compre o que vai alimentar a semana de forma equilibrada, sem decidir no corredor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual o custo médio de uma lista de compras saudável por mês?</p>
              <p className="faq-a">
                Para duas pessoas, entre R$ 540 e R$ 770 por mês, focando em hortifruti, ovos, frango, feijão e laticínios básicos. Esse valor costuma ficar abaixo do ticket médio de uma compra mensal que inclui ultraprocessados e itens de impulso. A diferença vai exatamente para esses itens.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que nunca pode faltar em uma lista de compras saudável?</p>
              <p className="faq-a">
                A base é: ovos, feijão, arroz, pelo menos três verduras e três frutas, e uma proteína para a semana. Esses itens cobrem as principais necessidades nutricionais. O restante é variação por preferência e orçamento disponível.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como fazer lista de compras saudável e barata ao mesmo tempo?</p>
              <p className="faq-a">
                Priorize alimentos da estação, proteínas acessíveis como ovo e feijão, e grãos a granel quando possível. Evite versões processadas dos mesmos alimentos — granola industrializada custa mais do que aveia pura. O item mais nutritivo em cada grupo costuma ser também o mais barato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Lista de compras saudável e lista fit são a mesma coisa?</p>
              <p className="faq-a">
                Não. Uma lista fit tende a focar em alto teor de proteína e corte de carboidrato — é mais direcionada a quem tem meta de composição corporal. Uma lista saudável é mais ampla: inclui carboidratos integrais, leguminosas, frutas e laticínios. Se você não está em dieta restritiva, a lista saudável cobre a maioria das necessidades.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como evitar compras por impulso no mercado?</p>
              <p className="faq-a">
                Coma antes de ir, organize a lista por corredor e decida antes de entrar: item que não está na lista não vai pro carrinho. Os 3–5 itens de impulso que a maioria das pessoas compra a cada ida representam, ao longo do ano, mais de R$ 1.000 em gastos que não estavam no plano.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Com que frequência preciso ir ao mercado para comer saudável?</p>
              <p className="faq-a">
                Dois modelos funcionam: uma compra mensal para itens secos (grãos, leguminosas, enlatados) e uma ou duas idas semanais para hortifruti e proteínas. Verduras e frutas não duram o mês inteiro — comprar tudo de uma vez não é prático. Planejar o cardápio antes de ir reduz as idas extras.
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
                Criador do Mise. Voltou do mercado com três tipos de iogurte diferente e sem cenoura. A cenoura estava na lista.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa conectada à lista.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Você monta o cardápio da semana, o Mise gera a lista de compras.
              O que já está na despensa sai da lista automaticamente.
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
