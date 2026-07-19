import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Benefícios do Cuscuz: Nutrição e Como Incluir na Rotina',
  description: 'Cuscuz de milho é rico em fibras, carboidratos complexos e selênio. Veja o que acontece com o seu corpo quando você inclui essa iguaria nordestina na semana.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz',
  },
  openGraph: {
    title: 'Benefícios do Cuscuz: Nutrição e Como Incluir na Rotina',
    description: 'Cuscuz de milho é rico em fibras, carboidratos complexos e selênio. Veja o que acontece com o seu corpo quando você inclui essa iguaria nordestina na semana.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz',
    images: [
      {
        url: 'https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pimentão verde recheado com cuscuz — prato colorido com grãos de cuscuz sobre superfície rústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefícios do Cuscuz: Nutrição e Como Incluir na Rotina',
    description: 'Cuscuz de milho é rico em fibras, carboidratos complexos e selênio. Veja o que acontece com o seu corpo quando você inclui essa iguaria nordestina na semana.',
    images: ['https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cuscuz é proteína ou carboidrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuscuz é principalmente um carboidrato. Em 100g de cuscuz de milho cozido há cerca de 16g de carboidratos e 1,8g de proteína. A proteína existe, mas em quantidade pequena — para aumentar o valor proteico da refeição, combine com ovo, queijo branco ou feijão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cuscuz de milho tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuscuz de milho não tem glúten na composição. É uma boa alternativa para pessoas com doença celíaca ou sensibilidade ao glúten. Mas confirme a embalagem: alguns produtos são processados em instalações que também processam trigo e podem conter traços por contaminação cruzada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre cuscuz nordestino e cuscuz marroquino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cuscuz nordestino é feito de farinha de milho flocada, vaporizado na cuscuzeira — é o prato típico brasileiro. O cuscuz marroquino é feito de semolina de trigo (grãos pequenos e finos), muito usado na culinária do norte da África e do Oriente Médio. São alimentos distintos, com sabores, texturas e composições diferentes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cuscuz faz bem para o intestino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O cuscuz de milho tem fibras alimentares que contribuem para o bom funcionamento intestinal, ajudam a prevenir constipação e aumentam a sensação de saciedade. A quantidade por porção não é altíssima, mas em uma alimentação com outras fontes de fibra, faz diferença.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cuscuz engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não mais do que outros carboidratos na mesma quantidade. Em 100g de cuscuz de milho cozido há cerca de 76 kcal — menos que arroz branco cozido na mesma porção. O cuscuz em si não é o problema. O que vai com ele — manteiga, queijo, toucinho — pode ser. Dentro de uma alimentação variada, não é item pra cortar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cuscuz de milho é o mesmo que fubá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Os dois são derivados de milho, mas são produtos diferentes. O fubá é farinha de milho fina, usada para fazer angu, bolo de fubá e polenta. O cuscuz de milho usa flocos de milho hidratados e vaporados, com textura granulada. O processo de preparo e o resultado final são distintos.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Benefícios do Cuscuz: Nutrição e Como Incluir na Rotina',
  description: 'Cuscuz de milho é rico em fibras, carboidratos complexos e selênio. Veja o que acontece com o seu corpo quando você inclui essa iguaria nordestina na semana.',
  image: 'https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-26',
  dateModified: '2026-06-26',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Benefícios do cuscuz', item: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz' },
  ],
}

export default function BeneficiosDoCuscuz({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Benefícios do cuscuz</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-26">26 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Benefícios do Cuscuz: o Que Muda Quando Você Inclui na Semana
          </h1>
          <p className="blog-desc">
            Cuscuz de milho é um dos carboidratos mais baratos e fáceis do Brasil. Mas além de sustento e preço, o que ele oferece? Fibra, selênio, ferro e uma certa praticidade que justifica a cuscuzeira no armário.
          </p>

          <div className="answer-box">
            <p>
              <strong>Benefícios do cuscuz de milho:</strong> oferece fibras, carboidratos complexos, selênio e ferro.
              Ajuda no funcionamento do intestino, libera energia de forma gradual e não tem glúten —
              o que o torna válido para quem tem doença celíaca.
              É também um dos carboidratos mais acessíveis do mercado brasileiro.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pimentão verde recheado com cuscuz — prato colorido com grãos de cuscuz sobre superfície rústica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lisa Fotios / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é cuscuz de milho</a></li>
              <li><a href="#nutricao">O que tem no cuscuz</a></li>
              <li><a href="#beneficios">Benefícios para a saúde</a></li>
              <li><a href="#engorda">Cuscuz engorda?</a></li>
              <li><a href="#rotina">Como incluir na rotina</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/21531611/pexels-photo-21531611.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cuscuz em garfo — grãos finos e soltos prontos para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é cuscuz de milho</h2>

          <p>
            No Brasil, &ldquo;cuscuz&rdquo; pode ser duas coisas distintas.
            O cuscuz marroquino é feito de semolina de trigo — pequenos grãos que chegam prontos em grandes supermercados e lojas de importados.
            O cuscuz nordestino é feito de farinha de milho flocada, vaporizado na cuscuzeira, e aparece no café da manhã de boa parte do país.
          </p>
          <p>
            Quando falamos dos benefícios do cuscuz neste texto, o foco é o nordestino.
            É o que você vai encontrar em qualquer mercearia, por menos de R$ 5 o quilo, e o que mais faz diferença na rotina de quem quer um carboidrato acessível e prático.
          </p>
          <p>
            O cuscuz nordestino tem origem nas populações indígenas do Nordeste e se consolidou como alimento de resistência — barato, fácil de preparar e capaz de sustentar manhãs longas.
            Hoje ainda é símbolo da culinária nordestina, mas chegou a cozinhas do Sul e Sudeste como alternativa ao pão e ao tapioca.
          </p>

          {/* O QUE TEM NO CUSCUZ */}
          <h2 id="nutricao">O que tem no cuscuz</h2>

          <p>
            Em 100g de cuscuz de milho cozido: cerca de 76 kcal, 16g de carboidratos, 1,7g de fibras, 1,8g de proteína e menos de 1g de gordura.
            Em comparação, arroz branco cozido na mesma quantidade tem em torno de 130 kcal — o cuscuz sai mais leve.
          </p>
          <p>
            O que chama atenção além dos carboidratos: o cuscuz tem <strong>selênio</strong>, mineral essencial para a função da tireoide e para o sistema imunológico como antioxidante.
            Tem <strong>ferro</strong>, necessário para a formação de hemoglobina.
            E vitaminas do complexo B, especialmente B1, que participam do metabolismo energético.
          </p>
          <p>
            Não é a fonte mais densa de proteína da cozinha brasileira — longe disso.
            Para quem quer aumentar proteína na refeição, o cuscuz combina bem com ovo cozido ou queijo branco.
            Esse já é o café da manhã nordestino tradicional, e faz sentido nutricionalmente.
          </p>
          <p>
            Os dados de composição nutricional do cuscuz de milho estão disponíveis na{' '}
            <a href="https://www.tbca.net.br/" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos (TBCA)</a>,
            mantida pela USP com dados oficiais por 100g de alimento.
          </p>

          {/* BENEFÍCIOS */}
          <h2 id="beneficios">Benefícios para a saúde</h2>

          <p>
            A fibra é o principal benefício prático do cuscuz de milho.
            Com 1,7g por 100g do produto cozido, contribui para o funcionamento do intestino e aumenta a sensação de saciedade.
            Isso ajuda a segurar o apetite entre as refeições sem precisar de mais calorias.
          </p>
          <p>
            O amido do milho tem digestão moderada — não é o carboidrato de liberação mais lenta disponível, mas sustenta melhor que pão branco refinado no café da manhã.
            Para quem sente queda de energia rápida depois de café com pão, pode ser uma alternativa válida.
          </p>
          <p>
            Para quem tem doença celíaca ou sensibilidade ao glúten, o cuscuz de milho é naturalmente livre de glúten.
            Diferente do marroquino de trigo, não apresenta risco para esse grupo.
            A ressalva: confirme sempre a embalagem, pois alguns produtos são processados em instalações que também processam trigo.
          </p>
          <p>
            Tem um aspecto que raramente entra na lista de benefícios mas deveria: o preço.
            Menos de R$ 5 o quilo em boa parte do Brasil coloca o cuscuz entre os carboidratos mais acessíveis do mercado.
            Para famílias que organizam a despensa com orçamento real, isso não é detalhe — é parte do benefício concreto do alimento.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* CUSCUZ ENGORDA? */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1618952/pexels-photo-1618952.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Prato com ensopado e cuscuz — refeição nordestina servida em tigela sobre mesa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="engorda" className="img-above">Cuscuz engorda?</h2>

          <p>
            Não mais do que qualquer carboidrato na mesma quantidade.
            Em 100g de cuscuz de milho cozido há cerca de 76 kcal — menos que arroz branco cozido na mesma porção.
            O teor de gordura é baixo e a proteína é moderada.
          </p>
          <p>
            O cuscuz nordestino com manteiga, queijo coalho, toucinho e ovo — o café da manhã completo — é calórico sim.
            Mas aí não é o cuscuz que pesa.
          </p>
          <p>
            A lógica de &ldquo;este alimento engorda&rdquo; raramente funciona bem para carboidratos isolados.
            O cuscuz, dentro de uma alimentação variada, não é item pra cortar.
            O que vai com ele, em que quantidade e com que frequência — esse é o conjunto que importa.
          </p>

          {/* COMO INCLUIR NA ROTINA */}
          <h2 id="rotina">Como incluir o cuscuz na rotina</h2>

          <p>
            Cuscuz de milho é um dos ingredientes mais simples de preparar.
            Na cuscuzeira: hidratar a farinha de milho flocada com água e sal por 10 minutos, vaporizar por 20 a 30 minutos.
            Sem cuscuzeira: existem versões industriais que ficam prontas com água fervente em poucos minutos.
          </p>
          <p>
            Para o café da manhã: uma fatia de cuscuz com ovo cozido ou queijo branco resolve proteína e carboidrato numa refeição simples.
            Adicione uma fruta ou iogurte natural e tem o básico nutritivo sem nenhuma complexidade de preparo.
          </p>
          <p>
            No almoço: substitui o arroz em dias que você quer variar.
            Funciona bem com feijão, proteína grelhada e salada — a mesma lógica do prato tradicional brasileiro.
            O{' '}
            <a href="/blog/feijao-preto-beneficios">feijão preto</a>
            {' '}combina especialmente bem, tanto em sabor quanto em perfil nutricional complementar.
          </p>
          <p>
            Dica de despensa: cuscuz de milho em pote fechado dura semanas sem precisar de geladeira.
            É um dos itens que vale comprar em quantidade quando estiver em promoção.
            E um dos que você mais fácil esquece que tem guardado — só descobre quando o arroz acaba.
          </p>
          <p>
            Para organizar os itens fixos da semana e não chegar ao mercado sem saber o que falta, ver a{' '}
            <a href="/blog/lista-de-compras-mercado">lista de mercado com os básicos</a>
            {' '}e a{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}com mais de 80 itens organizados por categoria.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre cuscuz</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Cuscuz é proteína ou carboidrato?</p>
              <p className="faq-a">
                É principalmente um carboidrato. Em 100g de cuscuz de milho cozido há cerca de 16g de carboidratos e 1,8g de proteína.
                A proteína existe, mas em quantidade pequena.
                Para aumentar o valor proteico da refeição, combine com ovo, queijo branco ou{' '}
                <a href="/blog/alimentos-ricos-em-proteinas">alimentos ricos em proteína</a>.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cuscuz de milho tem glúten?</p>
              <p className="faq-a">
                Não tem glúten na composição. É uma alternativa válida para pessoas com doença celíaca ou sensibilidade ao glúten.
                Mas confirme a embalagem: alguns produtos são processados em instalações que também processam trigo e podem ter traços por contaminação cruzada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre cuscuz nordestino e cuscuz marroquino?</p>
              <p className="faq-a">
                O cuscuz nordestino é feito de farinha de milho flocada, vaporizado na cuscuzeira — prato típico brasileiro.
                O cuscuz marroquino é feito de semolina de trigo, muito usado na culinária norte-africana e do Oriente Médio.
                São alimentos distintos, com sabores, texturas e composições diferentes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cuscuz faz bem para o intestino?</p>
              <p className="faq-a">
                Sim. As fibras do cuscuz de milho contribuem para o bom funcionamento intestinal e ajudam a prevenir constipação.
                A quantidade por porção não é altíssima, mas somada a outras fontes de fibra na alimentação, faz diferença real.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cuscuz engorda?</p>
              <p className="faq-a">
                Não mais do que outros carboidratos na mesma quantidade.
                Em 100g de cuscuz de milho cozido há cerca de 76 kcal — menos que arroz branco na mesma porção.
                O cuscuz isolado não é o problema. O que vai junto e em que quantidade é o que importa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Cuscuz de milho é o mesmo que fubá?</p>
              <p className="faq-a">
                Não. Os dois são derivados de milho, mas são produtos diferentes.
                O fubá é farinha de milho fina, usada em angu, bolo de fubá e polenta.
                O cuscuz usa flocos de milho hidratados e vaporados, com textura granulada.
                O processo de preparo e o resultado final são distintos.
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
                Criou o Mise porque comprava arroz toda semana e esquecia que tinha cuscuz na despensa. Só descobria na quarta, quando o arroz acabava.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa no lugar. Lista pronta.<br />
              <em>Bora cozinhar.</em>
            </h2>
            <p>
              O Mise conecta o que você tem em casa com o que vai comprar na semana.
              Sem descobrir que o cuscuz acabou quando você já planejou o café da manhã.
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
