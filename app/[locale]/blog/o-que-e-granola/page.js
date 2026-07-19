import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é granola: composição, tipos e como escolher',
  description: 'Granola é uma mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e o que olhar no rótulo antes de comprar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
  },
  openGraph: {
    title: 'O que é granola: composição, tipos e como escolher',
    description: 'Granola é uma mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e o que olhar no rótulo antes de comprar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
    images: [
      {
        url: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Granola com aveia, sementes e frutas secas em close-up — textura detalhada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é granola: composição, tipos e como escolher',
    description: 'Granola é uma mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e o que olhar no rótulo antes de comprar.',
    images: ['https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Granola engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Granola é calórica — a maior parte da energia vem de carboidratos, gorduras das oleaginosas e açúcar. Em porções de 30g (3–4 colheres de sopa), faz parte de uma alimentação equilibrada. O problema costuma ser comer o dobro ou o triplo da porção indicada, especialmente nas versões industrializadas com alto teor de açúcar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a porção certa de granola por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A porção padrão nos rótulos é 30g — equivalente a 3–4 colheres de sopa, cerca de 130–145 calorias. Usada como cobertura de iogurte ou frutas, a porção é mais fácil de controlar do que servida como prato principal de uma tigela funda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Granola tem glúten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aveia convencional pode ter contaminação cruzada com glúten no processamento industrial. Para celíacos, o seguro é granola com aveia certificada sem glúten ou versões com base de arroz, quinoa ou amaranto. O rótulo precisa indicar o selo de certificação — "sem glúten" escrito apenas no marketing não é suficiente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre granola doce e granola salgada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Granola doce tem frutas secas, mel ou açúcar e vai bem no café da manhã com iogurte ou leite. Granola salgada substitui os adoçantes por ervas, pimenta e oleaginosas — funciona em saladas, sopas e como snack. A base de aveia torrada é a mesma nos dois tipos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Granola caseira é melhor que a industrializada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Granola caseira dá controle total sobre ingredientes e açúcar. A industrial é prática, mas muitas versões levam mais açúcar e conservantes do que o necessário. Ler o rótulo resolve: uma granola industrial com poucos ingredientes reconhecíveis pode ser boa escolha sem precisar ligar o forno.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como conservar granola em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em pote de vidro ou recipiente hermético, em local seco e longe da luz direta, a granola dura bem por 2–3 meses. Umidade é o inimigo: granola exposta ao ar amolece e azeda mais rápido. A geladeira não é necessária para versões industrializadas, mas ajuda para granola caseira com ingredientes mais frescos.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é granola: composição, tipos e como escolher',
  description: 'Granola é uma mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e o que olhar no rótulo antes de comprar.',
  image: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-02',
  dateModified: '2026-06-02',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é granola', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-granola' },
  ],
}

export default function OQueEGranola({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é granola</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-02">2 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Granola: o que é, do que é feita e como escolher no mercado
          </h1>
          <p className="blog-desc">
            Está em todo café da manhã com iogurte, vai bem no açaí e some do pote antes do esperado. Mas o que é granola de verdade, do que é feita e como escolher uma boa no supermercado?
          </p>

          <div className="answer-box">
            <p>
              <strong>Granola</strong> é uma mistura de cereais torrados — principalmente aveia — combinada com oleaginosas,
              sementes e frutas secas, e ligada por um adoçante como mel ou açúcar.
              Existe em versões industrializadas e caseiras. No Brasil, é mais usada no café da manhã com iogurte ou leite,
              mas aparece também em receitas salgadas e como snack.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Granola com aveia, sementes e frutas secas em close-up — textura detalhada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é granola</a></li>
              <li><a href="#composicao">Do que é feita</a></li>
              <li><a href="#nutrientes">Os nutrientes</a></li>
              <li><a href="#tipos">Tipos no mercado</a></li>
              <li><a href="#como-consumir">Como consumir</a></li>
              <li><a href="#como-escolher">Como escolher no supermercado</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3551698/pexels-photo-3551698.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Granola em colher de madeira sobre tigela — cereais misturados com frutas secas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Fallon Michael / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é granola</h2>

          <p>
            Granola é uma mistura de cereais — aveia é sempre a base — torrados com óleo e adoçante até ficarem crocantes.
            Depois do forno, recebe frutas secas, oleaginosas e sementes.
            O resultado é um produto que aguenta meses guardado e vai bem em qualquer coisa cremosa.
          </p>
          <p>
            É diferente de muesli, que é cru e não passa pelo processo de torração.
            Granola tem textura mais crocante, sabor mais intenso e mais caloria por grama — exatamente por causa do açúcar e do óleo da torração.
          </p>
          <p>
            O produto foi criado pelo médico americano James Jackson em 1863.
            Ele fazia um farelo chamado "granula" para pacientes com dietas restritas.
            John Kellogg adaptou a receita, adicionou mais cereais e renomeou para granola.
            Virou popular de verdade nos anos 1960, quando se tornou símbolo da alimentação natural.
          </p>
          <p>
            Hoje é um item de café da manhã tão comum que muita gente coloca no carrinho sem parar para ler o que tem dentro.
            Vale parar.
          </p>

          {/* COMPOSIÇÃO */}
          <h2 id="composicao">Do que é feita a granola</h2>

          <p>
            Uma granola básica tem cinco componentes: cereal base, gordura, adoçante, oleaginosas e frutas secas.
            A proporção entre eles determina a qualidade — e a caloria.
          </p>

          <p>Os ingredientes típicos de uma granola simples e honesta:</p>

          <ul className="item-list">
            <li><strong>Aveia em flocos</strong> — base de quase toda granola, principal fonte de fibra</li>
            <li><strong>Óleo vegetal</strong> (canola, coco ou azeite) — garante a crocância na torração</li>
            <li><strong>Adoçante</strong> — mel, xarope de bordo, açúcar demerara ou mascavo</li>
            <li><strong>Oleaginosas</strong> — amêndoa, castanha de caju, nozes, avelã</li>
            <li><strong>Sementes</strong> — linhaça, girassol, abóbora, chia</li>
            <li><strong>Frutas secas</strong> — uva passa, banana passa, tâmara, cranberry</li>
          </ul>

          <p>
            Granola industrializada pode adicionar conservantes, aromatizantes e gordura vegetal hidrogenada.
            Versões mais baratas às vezes substituem as oleaginosas por mais flocos e mais açúcar.
            Você vê isso na lista de ingredientes — e é o primeiro lugar para olhar antes de comprar.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">O que tem dentro: os nutrientes</h2>

          <p>
            Em 30g de granola — a porção padrão indicada nos rótulos, equivalente a 3–4 colheres de sopa — você tem em média:
          </p>

          <ul className="item-list">
            <li><strong>~130–145 kcal</strong> — concentrado, vindo principalmente de carboidratos e gordura</li>
            <li><strong>3–4g de proteína</strong> — contribuição da aveia e das oleaginosas</li>
            <li><strong>4–6g de gordura</strong> — predominantemente insaturada, quando há oleaginosas de verdade</li>
            <li><strong>2–3g de fibra</strong> — ajuda na saciedade e na saúde digestiva</li>
          </ul>

          <p>
            O problema é que 30g parece muito pouco quando você está servindo na tigela.
            Na prática, a maioria das pessoas coloca o dobro sem perceber.
          </p>
          <p>
            A contribuição real da granola é a fibra — especialmente da aveia, que tem beta-glucana, uma fibra solúvel
            associada à saciedade e ao controle do colesterol.
            As oleaginosas entram com gordura boa e micronutrientes como{' '}
            <a href="/blog/alimentos-ricos-em-magnesio">magnésio</a>, zinco e vitamina E.
            As frutas secas adicionam antioxidantes e, também, açúcar — é o balanço que importa.
          </p>
          <p>
            Uma observação honesta: granola é um complemento nutritivo, não um superalimento.
            O benefício aparece quando faz parte de um café da manhã variado e equilibrado,
            não quando é o único elemento saudável do dia.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Barras de granola caseiras com aveia e frutas secas sobre superfície de madeira"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de granola que você encontra no mercado</h2>

          <p>
            A versão mais comum no Brasil é a granola doce com frutas secas e mel.
            Mas existem outras variações que muita gente não conhece — e que valem o espaço na despensa.
          </p>

          <h3>Granola doce</h3>
          <p>
            A mais vendida. Com frutas secas, mel ou açúcar, vai bem com iogurte, leite e açaí.
            O teor de açúcar varia muito entre marcas — compare o rótulo, não o nome do produto.
          </p>

          <h3>Granola salgada</h3>
          <p>
            Sem adoçante. Leva ervas, pimenta, alho desidratado e oleaginosas.
            Funciona como cobertura de saladas e sopas, ou como snack puro.
            É menos conhecida no Brasil, mas aparece em lojas de produtos naturais e online.
            Se você ainda não tentou granola salgada em salada de folhas, é a semana pra isso.
          </p>

          <h3>Granola sem glúten</h3>
          <p>
            Usa aveia certificada sem glúten ou substitui a base por arroz, quinoa ou amaranto.
            Indicada para quem tem doença celíaca ou sensibilidade ao glúten.
            O rótulo precisa ter o selo de certificação — "sem glúten" no design da embalagem não basta.
          </p>

          <h3>Granola sem açúcar</h3>
          <p>
            Adoçada só com frutas ou sem nenhum adoçante.
            Tem menos caloria e é opção para quem controla carboidrato simples.
            O sabor é menos intenso do que a versão doce, mas funciona bem misturada com frutas frescas.
          </p>

          <h3>Granola caseira</h3>
          <p>
            Feita em casa com ingredientes escolhidos por você.
            Controle total: tipo de açúcar, quantidade de oleaginosas, sem conservantes.
            O trabalho é baixo — 20 a 25 minutos no forno a 160°C, mexendo de vez em quando.
            É uma boa opção para encaixar no{' '}
            <a href="/blog/cardapio-semanal-simples-caseiro">cardápio semanal</a>{' '}
            do fim de semana.
          </p>

          {/* COMO CONSUMIR */}
          <h2 id="como-consumir">Como consumir granola no dia a dia</h2>

          <p>
            Granola vai bem em qualquer coisa cremosa, líquida ou que precise de crocância.
            As combinações mais comuns no Brasil:
          </p>

          <ul className="item-list">
            <li><strong>Com iogurte natural</strong> — a combinação mais clássica, equilibrada em proteína e fibra</li>
            <li><strong>Com leite ou bebida vegetal</strong> — absorve o líquido, fica menos crocante, parecido com cereal</li>
            <li><strong>No açaí</strong> — adiciona crocância e proteína à tigela</li>
            <li><strong>Com frutas frescas</strong> — banana, morangos, manga, qualquer fruta da estação</li>
            <li><strong>Como snack seco</strong> — direto do pote, sem nada em volta</li>
          </ul>

          <p>
            Granola salgada abre outras possibilidades: salada de folhas com granola no lugar dos croutons,
            sopa de abóbora com granola de ervas por cima.
            Menos óbvio, mas funciona bem.
          </p>

          <div className="blog-inline-cta">
            <p>Granola todo café da manhã. <em>Bota na lista antes de acabar.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* COMO ESCOLHER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8892364/pexels-photo-8892364.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tigela de iogurte com granola e frutas vermelhas vista de cima — café da manhã saudável"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anastasia Belousova / Pexels</p>
          </div>

          <h2 id="como-escolher" className="img-above">Como escolher granola no supermercado</h2>

          <p>
            O nome do produto não diz nada útil. "Natural", "original", "premium", "artesanal" são palavras sem
            regulação específica no rótulo brasileiro.
            O que conta é a lista de ingredientes e a tabela nutricional.
          </p>

          <h3>O primeiro ingrediente é o mais importante</h3>
          <p>
            Ingredientes aparecem no rótulo em ordem decrescente de quantidade.
            Se o primeiro for "aveia" ou qualquer cereal, boa base.
            Se for "açúcar", "xarope de glicose" ou "farinha enriquecida", o produto é mais sobre doce do que sobre cereal.
          </p>

          <h3>Quanto açúcar é muito?</h3>
          <p>
            Na porção de 30g: até 5g de açúcar total é razoável para uma granola doce.
            Acima de 8g já é bastante — você está comprando doce com aveia, não o contrário.
            Muitas granolas de supermercado popular ficam entre 6g e 9g por 30g.
          </p>

          <h3>Gordura trans e fibras</h3>
          <p>
            Gordura trans deve aparecer como 0g. Se tiver, descarta — muita granola barata usa gordura vegetal
            hidrogenada para dar crocância sem gastar em oleaginosas de verdade.
            Para fibra: mínimo de 2,5g por 30g. Abaixo disso, a aveia é pouca.
            Proteína de 3g ou mais indica que há oleaginosas de verdade na composição.
          </p>

          <h3>Reconheça os ingredientes</h3>
          <p>
            Granola boa é simples: você consegue reconhecer tudo na lista.
            Aveia, mel, amêndoa, uva passa — faz sentido.
            "Xarope de glicose, maltodextrina, aromatizante artificial de baunilha" — já é outra história.
          </p>

          <p>
            Depois de escolher, guarde em pote fechado longe da umidade.
            A granola perde a crocância rápido se ficar exposta ao ar.
            Na <a href="/funcionalidades/despensa">despensa</a> organizada, ela dura até três meses sem problema.
          </p>
          <p>
            Quando acabar — o que acontece antes do esperado — é só adicionar na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a> antes de ir ao mercado.
            Ou na sua <a href="/blog/lista-basica-de-compras">lista básica de supermercado</a> de uma vez, como item fixo.
          </p>
          <p>
            Granola boa começa no rótulo, não no nome do produto.
            O resto é bom café da manhã.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre granola</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Granola engorda?</p>
              <p className="faq-a">
                Granola é calórica — a maior parte da energia vem de carboidratos, gorduras e açúcar. Em porções de 30g (3–4 colheres de sopa), faz parte de uma alimentação equilibrada. O problema costuma ser comer o dobro ou o triplo da porção indicada, especialmente nas versões industrializadas com alto teor de açúcar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a porção certa de granola por dia?</p>
              <p className="faq-a">
                A porção padrão nos rótulos é 30g — equivalente a 3–4 colheres de sopa, entre 130 e 145 calorias dependendo da composição. Usada como cobertura de iogurte ou frutas, a porção é mais fácil de controlar do que servida em tigela funda como prato principal.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Granola tem glúten?</p>
              <p className="faq-a">
                Aveia convencional pode ter contaminação cruzada com glúten no processamento industrial. Para celíacos, o seguro é granola com aveia certificada sem glúten ou versões com base de arroz, quinoa ou amaranto. O rótulo precisa ter o selo de certificação — "sem glúten" no design da embalagem não é suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre granola doce e granola salgada?</p>
              <p className="faq-a">
                Granola doce tem frutas secas, mel ou açúcar e vai bem no café da manhã com iogurte ou leite. Granola salgada substitui adoçantes por ervas, pimenta e oleaginosas — funciona em saladas, sopas e como snack. A base de aveia torrada é a mesma; o que muda são os complementos e o uso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Granola caseira é melhor que a industrializada?</p>
              <p className="faq-a">
                Granola caseira dá controle total sobre ingredientes e açúcar. A industrial é mais prática, mas muitas versões levam mais açúcar e conservantes do que o necessário. Ler o rótulo resolve: uma granola industrial com poucos ingredientes reconhecíveis pode ser boa escolha sem precisar ligar o forno.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como conservar granola em casa?</p>
              <p className="faq-a">
                Em pote de vidro ou recipiente hermético, em local seco e fora da luz direta, dura bem por 2–3 meses. Umidade é o inimigo: granola exposta ao ar amolece e azeda mais rápido. A geladeira não é necessária para versões industrializadas, mas ajuda para granola caseira com ingredientes mais frescos.
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
                Criador do Mise. Compra granola toda semana para colocar no iogurte. Come metade antes de chegar em casa. O iogurte ainda espera.
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
              Você compra o que vai usar — e a granola não some antes de virar café da manhã.
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
