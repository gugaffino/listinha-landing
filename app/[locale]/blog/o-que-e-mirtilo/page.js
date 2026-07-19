import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é mirtilo: tipos, benefícios e se vale o preço',
  description: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
  },
  openGraph: {
    title: 'O que é mirtilo: tipos, benefícios e se vale o preço',
    description: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mirtilos frescos em close-up — fruta azul-arroxeada rica em antocianinas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é mirtilo: tipos, benefícios e se vale o preço',
    description: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
    images: ['https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mirtilo é a mesma coisa que blueberry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No contexto do mercado brasileiro, sim. Os dois termos referem ao mesmo produto: o highbush blueberry (Vaccinium corymbosum), cultivado comercialmente nos Estados Unidos, Chile e Argentina. O mirtilo europeu (Vaccinium myrtillus) é uma espécie diferente — menor e mais escura — mas não é o que você encontra nas caixinhas do supermercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a melhor forma de consumir mirtilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do uso. Para comer como snack ou misturar em iogurte, o fresco é melhor. Para smoothies e receitas, o congelado funciona igual e custa menos. O desidratado tem mais açúcar e calorias concentradas — é para usar em pequenas quantidades em granola ou mix de castanhas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mirtilo congelado perde nutrientes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não de forma significativa. As antocianinas são estáveis ao congelamento. Comparações entre fresco e congelado mostram perfis nutricionais muito semelhantes. Para smoothies e receitas quentes, o congelado é equivalente ao fresco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mirtilo pode ser consumido por diabéticos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O índice glicêmico do mirtilo é baixo, em torno de 40, e a presença de fibras ajuda a moderar a resposta glicêmica. Estudos indicam que o consumo regular pode melhorar a sensibilidade à insulina. Toda adaptação de dieta para diabetes deve ser acompanhada por profissional de saúde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tem mirtilo plantado no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, em menor escala, principalmente no Rio Grande do Sul e em Santa Catarina. A temporada brasileira vai de novembro a março. Mas a maioria do que está no supermercado o ano inteiro é importado do Chile ou da Argentina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa mirtilo fresco no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Caixinhas de 125g (importado) custam em torno de R$15-25 em supermercados convencionais. O preço varia com a estação e o canal de compra. Congelado em embalagens de 300g sai entre R$25-45.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais frutas têm o mesmo perfil antioxidante do mirtilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amora, jabuticaba e açaí têm perfis de antocianinas comparáveis ao mirtilo. A jabuticaba tem safra abundante no Brasil e costuma ser mais barata. Frutas vermelhas como morango e framboesa também são ricas em antioxidantes, com perfis diferentes mas complementares.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é mirtilo: tipos, benefícios e se vale o preço',
  description: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
  image: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é mirtilo', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-mirtilo' },
  ],
}

export default function OQueEMirtilo({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é mirtilo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-09">9 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é mirtilo: guia de benefícios, como consumir e se vale o preço
          </h1>
          <p className="blog-desc">
            Aquela frutinha azul que aparece em potes de 125g nos supermercados. O que é mirtilo de verdade, por que é tão caro e — mais importante — vale colocar na lista toda semana?
          </p>

          <div className="answer-box">
            <p>
              <strong>Mirtilo</strong> é uma fruta pequena, azul-arroxeada, com sabor doce e levemente ácido.
              Cresce em arbustos baixos e é uma das frutas com maior concentração de antocianinas — os antioxidantes responsáveis pela cor característica.
              No Brasil, é vendido como mirtilo ou blueberry: são o mesmo produto.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mirtilos frescos em close-up — fruta azul-arroxeada rica em antocianinas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lisa / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é mirtilo</a></li>
              <li><a href="#mirtilo-blueberry">Mirtilo e blueberry: é a mesma coisa?</a></li>
              <li><a href="#origem">Origem: tem mirtilo no Brasil?</a></li>
              <li><a href="#nutricao">Nutrição: o que tem dentro</a></li>
              <li><a href="#beneficios">Benefícios do mirtilo</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#onde-comprar">Onde comprar e qual formato escolher</a></li>
              <li><a href="#vale-a-pena">Vale colocar na lista?</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Close-up de mirtilos frescos mostrando a cor azul-arroxeada característica da fruta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kelly / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é mirtilo</h2>

          <p>
            Mirtilo é uma fruta pequena, do tamanho de uma uva pequena, com casca fina e polpa firme. A cor vai do azul ao roxo-escuro, dependendo da variedade e do grau de maturação. O sabor equilibra doce e ácido — suave o suficiente para funcionar em qualquer combinação, do iogurte ao bolo.
          </p>
          <p>
            A cor azul intensa não é decoração. Vem das antocianinas, um grupo de antioxidantes que se concentram na casca da fruta. Quanto mais escuro e uniforme o mirtilo, maior a concentração. Um fruto desbotado ou murcho já passou do ponto — e perdeu parte dos compostos que fazem a diferença.
          </p>
          <p>
            Ao contrário de outras frutas pequenas, não há semente visível nem parte descartável. Você lava e come — ou lava e usa na receita. A casca faz parte do consumo e é onde está a maior parte dos nutrientes de interesse.
          </p>

          {/* MIRTILO VS BLUEBERRY */}
          <h2 id="mirtilo-blueberry">Mirtilo e blueberry: é a mesma coisa?</h2>

          <p>
            Na prática, no Brasil: sim. Os dois termos referem ao mesmo produto nas gôndolas dos supermercados — o highbush blueberry (<em>Vaccinium corymbosum</em>), cultivado comercialmente nos Estados Unidos, Chile e Argentina.
          </p>
          <p>
            Tecnicamente há diferença. O mirtilo europeu (<em>Vaccinium myrtillus</em>) é uma espécie distinta — menor, mais escuro, com polpa também arroxeada. O americano tem polpa clara. O europeu tem concentração levemente maior de antocianinas por grama, mas não existe em escala comercial. O que você compra é o americano, independente do nome no rótulo.
          </p>
          <p>
            Você vai ao mercado e vê "blueberry importado" na caixinha. O nome em português, embaixo, diz "mirtilo". Às vezes os dois nomes no mesmo rótulo. Não é erro — é que o produto chegou ao Brasil com dois nomes ao mesmo tempo e ambos ficaram.
          </p>

          {/* ORIGEM */}
          <h2 id="origem">Origem: tem mirtilo no Brasil?</h2>

          <p>
            O blueberry é nativo da América do Norte. O mirtilo europeu vem da Europa e da Ásia. Os maiores produtores mundiais hoje são EUA, Chile e Canadá, que dominam o mercado global.
          </p>
          <p>
            O Brasil produz mirtilo em escala pequena, principalmente no Rio Grande do Sul e em Santa Catarina — regiões com invernos rigorosos o suficiente para o desenvolvimento da planta.{' '}
            <a href="https://ceagesp.gov.br/guia-ceagesp/mirtilo/" target="_blank" rel="noopener">O CEAGESP lista mirtilo</a>{' '}
            entre as frutas frescas comercializadas no mercado paulistano, mas o volume produzido internamente ainda é pequeno. A maioria do que chega ao supermercado é importado do Chile ou da Argentina.
          </p>
          <p>
            A temporada de produção brasileira vai de novembro a março. Fora desse período, é importado — e chega o ano inteiro. Mirtilo congelado está disponível durante todos os 12 meses, independente da estação.
          </p>

          {/* NUTRIÇÃO */}
          <h2 id="nutricao">Nutrição: o que tem dentro</h2>

          <p>
            Cem gramas de mirtilo fresco têm aproximadamente 57 kcal, 14g de carboidratos (dos quais 10g de açúcares naturais), 2,4g de fibras e 0,7g de proteína. É uma fruta de baixo índice glicêmico — em torno de 40 — o que significa resposta mais lenta da insulina comparada a frutas como banana ou manga.
          </p>
          <p>
            Os micronutrientes notáveis são vitamina K (saúde óssea e coagulação), vitamina C em quantidade moderada, manganês e potássio. O que distingue o mirtilo de outras frutas, porém, não é nenhum desses. É o perfil de antocianinas: o mirtilo tem uma das maiores concentrações entre as frutas comuns, e essa é a base da maior parte das pesquisas sobre seus benefícios.
          </p>
          <p>
            Para quem já inclui{' '}
            <a href="/blog/alimentos-ricos-em-magnesio">alimentos ricos em magnésio</a>
            {' '}na alimentação, como castanhas e sementes, o mirtilo complementa com antocianinas que essas fontes não têm. São compostos diferentes com efeitos complementares.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada com lista de compras. <em>O Mise faz isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7937520/pexels-photo-7937520.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mirtilos e amoras sobre iogurte em tigela de cerâmica — forma prática de consumir a fruta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nicola Barts / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Benefícios do mirtilo: o que a pesquisa diz</h2>

          <p>
            O interesse científico no mirtilo vem principalmente das antocianinas. Os efeitos mais estudados e com mais evidências consistentes são estes:
          </p>

          <ul className="item-list">
            <li>
              <strong>Memória e função cognitiva:</strong> estudos associam o consumo regular a menor declínio cognitivo em adultos mais velhos. As antocianinas se acumulam em tecidos cerebrais e têm efeito anti-inflamatório local.
            </li>
            <li>
              <strong>Saúde cardiovascular:</strong> consumo regular está associado a redução da pressão arterial sistólica e melhora do perfil lipídico. O efeito parece vir da influência das antocianinas na flexibilidade dos vasos sanguíneos.
            </li>
            <li>
              <strong>Controle de açúcar no sangue:</strong> o índice glicêmico baixo e as fibras moderaram a resposta de insulina em estudos com pré-diabéticos. Não substitui medicamento, mas faz parte de uma alimentação que ajuda no controle.
            </li>
            <li>
              <strong>Saúde ocular:</strong> as antocianinas se acumulam na retina e podem reduzir fadiga visual e proteger contra estresse oxidativo — mecanismo semelhante ao da luteína e zeaxantina.
            </li>
          </ul>

          <p>
            Uma ressalva honesta: os benefícios aparecem com consumo regular por semanas, não com uma caixinha ocasional. E mirtilo nutritivo dentro de uma dieta ruim não resolve nada. O efeito é cumulativo e depende do contexto geral da alimentação.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar mirtilo na cozinha</h2>

          <p>
            O mirtilo funciona bem onde outras frutas pequenas entram — e melhor onde a cor e o sabor ácido fazem diferença. A regra prática: onde vai morango, provavelmente vai mirtilo.
          </p>

          <h3>Como snack</h3>
          <p>
            A forma mais simples. Fresco, direto, sem preparo. Você compra pra usar no bolo do fim de semana, belisca a metade enquanto guarda e depois vai ter que comprar de novo. Acontece com todo mundo.
          </p>

          <h3>Com iogurte e aveia</h3>
          <p>
            O uso mais comum. O ácido do mirtilo contrasta bem com a gordura do iogurte natural. Em granola ou aveia no café da manhã, adiciona cor e sabor sem esforço. Congelado funciona bem aqui se você não se importar com a textura levemente mais mole depois de descongelar.
          </p>

          <h3>Em smoothies</h3>
          <p>
            O congelado funciona igual ao fresco. Bata com banana, iogurte ou bebida vegetal. O mirtilo escurece o smoothie para um roxo-escuro intenso. O sabor não é agressivo e vai bem com qualquer combinação de frutas.
          </p>

          <h3>Em receitas de forno</h3>
          <p>
            Muffin de mirtilo é clássico por uma razão — funciona. Bolo, panqueca, cheesecake e coberturas. O calor altera parte das antocianinas, mas o sabor fica ótimo de qualquer jeito. Nos EUA, o muffin de blueberry é presença garantida em qualquer padaria. Não por acidente.
          </p>

          <h3>Em pratos salgados</h3>
          <p>
            Menos óbvio, mas funciona melhor do que parece. Mirtilo em salada verde com rúcula, queijo de cabra e nozes é uma combinação que surpreende na boa. Molho de mirtilo com carne de porco ou pato é receita clássica da culinária nórdica e europeia. O ácido da fruta corta a gordura da carne.
          </p>

          <p>
            Para planejar receitas com mirtilo e gerar a lista automaticamente, o{' '}
            <a href="/funcionalidades/cardapio-semanal">cardápio semanal</a>
            {' '}do Mise conecta cada receita com a lista de compras. Você não precisa lembrar o que comprar.
          </p>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde comprar e qual formato escolher</h2>

          <h3>Fresco</h3>
          <p>
            Caixinhas de 125g, quase sempre importadas do Chile ou Argentina. Preço em torno de R$15-25 em supermercados convencionais. Vida útil de 7-10 dias na geladeira, se estiver no ponto na hora da compra. Melhor para comer in natura e uso imediato.
          </p>

          <h3>Congelado</h3>
          <p>
            A melhor opção de custo-benefício. Embalagens de 300g a 500g por R$25-45. Retém praticamente todos os nutrientes — as antocianinas são estáveis ao congelamento. Para smoothies, o resultado é idêntico ao fresco. Para iogurte e receitas quentes, funciona sem problema.
          </p>

          <h3>Desidratado</h3>
          <p>
            Mais concentrado em açúcar e calorias, mais caro por grama do que o congelado. Útil em pequenas quantidades em granola ou mix de castanhas. Não é pra beliscar à vontade — o teor de açúcar acumula rápido. Menos versátil que o congelado para uso geral.
          </p>

          <p>
            Supermercados maiores têm fresco e às vezes congelado. Hortifruti e lojas de produtos naturais têm as três versões. Online (Amazon, Berry House) tem melhores variedades de congelado em volume maior. O frete não compensa em compras pequenas — vale esperar acumular uma lista antes de pedir.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale colocar na lista?</h2>

          <p>
            Se você já come frutas variadas no dia a dia: sim, o mirtilo entra bem. Não é barato na versão fresca, mas o congelado é acessível e funciona na maioria dos usos. Manter um pacote na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}— ou melhor, no freezer — é mais prático do que comprar fresco toda semana sem plano de uso.
          </p>
          <p>
            Se você nunca comeu: compre uma caixinha de 125g fresco. Não é compromisso de R$100. É suficiente para saber se gosta do sabor e vai usar de verdade. Mirtilo esquecido na geladeira não serve nem pra smoothie depois de dez dias.
          </p>
          <p>
            Uma alternativa para quem quer o mesmo perfil antioxidante gastando menos: amora, jabuticaba e açaí têm concentrações de antocianinas comparáveis. A jabuticaba é brasileira, tem safra abundante e custa menos. Antes de colocar mirtilo na{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>
            {' '}toda semana, vale ver se já tem outra fruta roxa que você come com regularidade.
          </p>
          <p>
            O mirtilo não é essencial. Mas é uma das poucas frutas azuis com respaldo real de pesquisa, disponível o ano inteiro na versão congelada e com um sabor que funciona em praticamente qualquer contexto. A versão congelada resolve — e o pote vazio no freezer vai acontecer muito antes de você perceber.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre mirtilo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Mirtilo é a mesma coisa que blueberry?</p>
              <p className="faq-a">
                No mercado brasileiro, sim. Os dois termos referem ao highbush blueberry (<em>Vaccinium corymbosum</em>), o cultivar comercial americano. O mirtilo europeu (<em>Vaccinium myrtillus</em>) é uma espécie diferente, menor e mais escura, mas não é o que você encontra nas caixinhas do supermercado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual é a melhor forma de consumir mirtilo?</p>
              <p className="faq-a">
                Depende do uso. Para snack e iogurte, o fresco é melhor. Para smoothies e receitas, o congelado funciona igual e custa menos. O desidratado tem mais açúcar concentrado — use em pequenas quantidades em granola ou mix de castanhas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Mirtilo congelado perde nutrientes?</p>
              <p className="faq-a">
                Não de forma significativa. As antocianinas são estáveis ao congelamento e o perfil nutricional do fresco e congelado são muito semelhantes. Para smoothies e receitas quentes, o resultado é equivalente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Mirtilo pode ser consumido por diabéticos?</p>
              <p className="faq-a">
                O índice glicêmico do mirtilo é baixo, em torno de 40, e as fibras ajudam a moderar a resposta glicêmica. Estudos indicam melhora na sensibilidade à insulina com consumo regular. Qualquer adaptação de dieta para diabetes deve ser acompanhada por profissional de saúde.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Tem mirtilo plantado no Brasil?</p>
              <p className="faq-a">
                Sim, em menor escala, principalmente no Rio Grande do Sul e em Santa Catarina. A temporada brasileira vai de novembro a março. Fora disso, o que está no mercado é importado do Chile ou da Argentina.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quanto custa mirtilo fresco no Brasil?</p>
              <p className="faq-a">
                Caixinhas de 125g importadas custam em torno de R$15-25 em supermercados. O preço varia com a estação e o canal. Congelado em embalagens de 300g sai entre R$25-45 — melhor custo por grama.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quais frutas têm o mesmo perfil antioxidante do mirtilo?</p>
              <p className="faq-a">
                Amora, jabuticaba e açaí têm perfis de antocianinas comparáveis. A jabuticaba é brasileira, tem safra abundante e custa menos. Morango e framboesa também são ricas em antioxidantes, com perfis diferentes mas complementares.
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
                Criador do Mise. Comprou mirtilo fresco pra usar num bolo no fim de semana. Comeu tudo direto da caixinha em dois dias. O bolo ficou pra semana que vem.
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
              O mirtilo entra na lista quando você precisa — e some da despensa só quando você usou de verdade.
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
