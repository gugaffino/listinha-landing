import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é pistache: origem, tipos e se vale colocar na lista',
  description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
  },
  openGraph: {
    title: 'O que é pistache: origem, tipos e se vale colocar na lista',
    description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
    images: [
      {
        url: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pistaches frescos com casca entreaberta mostrando o interior verde — close-up detalhado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é pistache: origem, tipos e se vale colocar na lista',
    description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
    images: ['https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pistache é uma fruta ou uma castanha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tecnicamente, pistache é a semente de um fruto. A planta produz um drupa — fruto carnoso com caroço duro — e a parte que a gente come é a semente dentro desse caroço. Na prática culinária e no mercado, ele é classificado junto com as oleaginosas e castanhas, porque o perfil nutricional e o uso na cozinha são os mesmos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pistache faz engordar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pistache é calórico — como toda oleaginosa, a maior parte da energia vem das gorduras. Mas são gorduras insaturadas, do mesmo tipo do azeite de oliva. Em porções razoáveis (um punhado, cerca de 30g), o pistache é um snack mais nutritivo e mais saciante do que a maioria dos ultraprocessados. O problema costuma ser comer o pacote inteiro de uma vez.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos pistaches dá pra comer por dia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma porção padrão de oleaginosas é cerca de 30g — o equivalente a um punhado fechado ou uns 40 pistaches sem casca. É suficiente pra aproveitar os nutrientes sem exagerar nas calorias. Se você está comendo pra beliscar entre refeições, esse é um bom limite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pistache salgado é pior que o natural?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O pistache salgado tem mais sódio, o que pode ser um problema pra quem precisa controlar a pressão arterial. Nutricionalmente, os demais nutrientes são praticamente os mesmos. Para uso culinário em receitas doces ou salgadas, o pistache sem sal é mais versátil porque você controla o tempero. Para comer como snack, o salgado fica a gosto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como conservar pistache em casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pistache com casca dura mais tempo — em pote fechado fora da geladeira, mantém qualidade por meses. O sem casca é mais sensível à oxidação: guarde em vidro ou pote hermético e, se for durar mais de um mês, prefira a geladeira. Nunca deixe exposto ao ar ou na embalagem aberta por muito tempo — fica rançoso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pistache tem glúten ou lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pistache puro, in natura, não tem glúten nem lactose. Mas o pistache processado — salgado, temperado, granulado — pode ter contaminação cruzada com glúten dependendo da fábrica. Produtos como pasta de pistache ou sorvete de pistache costumam ter lactose se feitos com leite. Sempre verifique o rótulo.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é pistache: origem, tipos e se vale colocar na lista',
  description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
  image: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é pistache', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache' },
  ],
}

export default function OQueEPistache({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é pistache</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-27">27 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            O que é pistache: guia de origem, tipos e como escolher no mercado
          </h1>
          <p className="blog-desc">
            Aquela oleaginosa verde que aparece em sorvete, pasta e em todo lugar nos últimos anos. Mas o que é pistache de verdade, quais são os tipos disponíveis no Brasil e — mais importante — como escolher o certo no mercado?
          </p>

          <div className="answer-box">
            <p>
              <strong>Pistache</strong> é a semente da árvore <em>Pistacia vera</em>, nativa do Oriente Médio e da Ásia Central.
              Tem casca dura bege-rosada que se abre naturalmente quando maduro, revelando um interior verde característico.
              É uma das oleaginosas mais ricas em proteína e gorduras insaturadas — e uma das mais caras no mercado brasileiro por ser totalmente importada.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pistaches frescos com casca entreaberta mostrando o interior verde — close-up detalhado"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Engin Akyurt / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é pistache</a></li>
              <li><a href="#origem-e-preco">De onde vem e por que é tão caro</a></li>
              <li><a href="#nutrientes">O que tem dentro: os nutrientes</a></li>
              <li><a href="#tipos">Tipos de pistache no mercado</a></li>
              <li><a href="#como-usar">Como usar pistache na cozinha</a></li>
              <li><a href="#onde-comprar">Onde comprar no Brasil</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4931455/pexels-photo-4931455.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistaches salgados com casca em close-up mostrando textura e cor natural"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anton Uniqueton / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é pistache</h2>

          <p>
            Pistache (<em>Pistacia vera</em>) é uma oleaginosa de casca dura que se abre sozinha quando madura — esse é o detalhe que diferencia o pistache de qualidade do que não está pronto. A casca fica levemente entreaberta. Se estiver completamente fechada, foi colhido cedo.
          </p>
          <p>
            Tecnicamente, a parte que a gente come é uma semente, não uma castanha. A planta produz um pequeno fruto carnoso (um drupa), e o pistache está dentro do caroço desse fruto. Na cozinha e no mercado, porém, entra na mesma categoria das oleaginosas: amêndoa, castanha-de-caju, nozes.
          </p>
          <p>
            O interior verde é o traço mais reconhecível. A cor vem da clorofila — quanto mais verde, mais fresco e mais rico em antioxidantes. Pistaches mais amarelados costumam ser mais velhos ou de qualidade inferior.
          </p>
          <p>
            O sabor é suave, levemente adocicado e com uma riqueza que sustenta bem tanto em receitas doces quanto em pratos salgados. É por isso que funciona em sorvete, em pesto, em coalhada e em granola — ao mesmo tempo.
          </p>

          {/* ORIGEM E PREÇO */}
          <h2 id="origem-e-preco">De onde vem e por que é tão caro</h2>

          <p>
            A árvore do pistache é originária do Oriente Médio — Irã, Turquia, Síria e Afeganistão são os berços históricos. Hoje, os maiores produtores mundiais são o Irã e os Estados Unidos, especialmente a Califórnia. O Brasil não produz comercialmente: todo pistache que você vê no mercado é importado.
          </p>
          <p>
            E é caro por razões concretas. A árvore demora entre 7 e 10 anos pra começar a produzir de forma comercial. Depois de adulta, ela produz bem um ano e descansa no seguinte — o ciclo bianual reduz o volume disponível. A colheita é majoritariamente manual e sensível ao tempo. E o Irã, principal fornecedor histórico, enfrenta restrições de comércio que afetam o preço global.
          </p>
          <p>
            Resultado: pistache custa caro no mundo inteiro, e no Brasil mais ainda por causa de impostos de importação. Isso explica por que aparece em embalagens pequenas e por que o preço por quilo parece absurdo até você ver o de amêndoa importada na mesma gôndola.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">O que tem dentro: os nutrientes do pistache</h2>

          <p>
            Uma porção de 30g de pistache sem casca (cerca de 40 unidades) tem aproximadamente 160 calorias, 6g de proteína, 13g de gordura e 3g de fibra. Para uma oleaginosa, o percentual de proteína é alto — fica acima da amêndoa e da castanha de caju na mesma quantidade.
          </p>
          <p>
            As gorduras são majoritariamente insaturadas: monoinsaturadas (o mesmo tipo do azeite) e poli-insaturadas. Esse perfil está associado a menor risco cardiovascular com consumo regular e moderado.
          </p>
          <p>
            O pistache também tem luteína e zeaxantina, dois carotenoides que contribuem pra saúde ocular. É um dos poucos alimentos de origem vegetal com quantidade relevante desses compostos. Além disso, é uma boa fonte de vitamina B6, potássio e manganês.
          </p>
          <p>
            Uma observação honesta: pistache é nutritivo, mas não é um alimento milagroso. O benefício vem do consumo regular em quantidade razoável, dentro de uma alimentação variada. Não muda nada se for o único alimento saudável da semana.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11842170/pexels-photo-11842170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistaches em tigela verde rústica sobre superfície de mármore — apresentação para receita"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: eat kubba / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Tipos de pistache que você encontra no mercado</h2>

          <p>
            O mercado brasileiro vende pistache em vários formatos. Saber a diferença evita comprar errado pra receita — e pagar mais caro do que precisa.
          </p>

          <h3>Com casca (in shell)</h3>
          <p>
            O mais comum nas embalagens de snack. A casca protege o interior e prolonga a validade. É mais barato por embalagem, mas parte do peso é casca — você está comprando menos pistache de verdade do que parece. Bom pra comer na mão, direto.
          </p>

          <h3>Sem casca (shelled)</h3>
          <p>
            Mais caro por embalagem, mas mais prático pra cozinhar. Se a intenção é usar em receitas, granola ou iogurte, o sem casca poupa trabalho e ocupa menos espaço na despensa. É o formato ideal pra quem vai usar na cozinha com frequência.
          </p>

          <h3>Natural (cru)</h3>
          <p>
            Sem torração, sem sal. É o mais versátil: você controla o processo. Pode torrar em frigideira seca em casa — 3 a 5 minutos em fogo médio, mexendo sempre — e temperá-lo como quiser. O sabor aprofunda bastante depois de tostado.
          </p>

          <h3>Torrado</h3>
          <p>
            Já passou pelo processo de torração. Sabor mais intenso, textura mais crocante. Bom pra snack e pra finalizar pratos. Verifique se foi torrado a seco (dry roasted) ou com óleo — o a seco preserva melhor o perfil nutricional.
          </p>

          <h3>Salgado</h3>
          <p>
            O formato mais vendido no Brasil como snack. Prático, mas tem sódio. Não é a melhor escolha pra receitas doces, onde o sal desequilibra o resultado. Pra beliscar na frente da TV, porém, é a versão que some mais rápido do pacote.
          </p>

          <h3>Pasta e granulado</h3>
          <p>
            Pasta de pistache virou item de confeitaria nos últimos anos — aparece em recheios, cremes e coberturas. O granulado (triturado grosso) é ótimo pra finalizar sorvete, bolo e pratos árabes como baklava. Ambos costumam estar em lojas de confeitaria ou online.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10060931/pexels-photo-10060931.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistaches frescos espalhados sobre superfície branca — pronto para usar em receitas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: SC Studio / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar pistache na cozinha</h2>

          <p>
            A regra prática: pistache funciona onde amêndoa funciona, mas com sabor mais distinto. O verde também é decorativo — finalizações com pistache triturado ficam bonitas em quase qualquer prato.
          </p>

          <h3>Como snack</h3>
          <p>
            O uso mais simples. Um punhado com casca é mais satisfatório do que parece — a casca força você a desacelerar, o que reduz o quanto come. Você compra pra usar na receita, come metade assistindo série antes, e vai ter que comprar de novo. Isso acontece com todo mundo.
          </p>

          <h3>No café da manhã</h3>
          <p>
            Funciona bem triturado grosso em iogurte natural com mel, ou misturado à granola. Adiciona crocância, proteína e aquele sabor diferente do mix de castanhas de sempre.
          </p>

          <h3>Em sobremesas</h3>
          <p>
            Sorvete, bolo, brownie, mousse, baklava, pavê. O pistache tem sabor forte o suficiente pra aparecer mesmo em receitas com outros ingredientes intensos como chocolate. A pasta de pistache funciona como a pasta de amendoim — em recheios, coberturas e cremes.
          </p>

          <h3>Em pratos salgados</h3>
          <p>
            Menos óbvio, mas uma das melhores formas de usar. Pesto de pistache (no lugar do pinhão) vai bem com massas e frango. Pistache triturado como crosta de peixe ou frango assado é rápido e transforma o prato. No cuscuz marroquino e em pratos árabes com cordeiro, entra como componente tradicional — não como modinha.
          </p>

          <h3>Como tostar em casa</h3>
          <p>
            Se comprou o natural, toste antes de usar: frigideira seca, fogo médio, 3 a 5 minutos mexendo. O aroma muda completamente. Não deixe escurecer — pistache queimado tem amargor que não some.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde comprar pistache no Brasil e quanto custa</h2>

          <p>
            O preço de oleaginosa no Brasil varia bastante entre canais — mais do que a maioria das pessoas percebe. O mesmo pistache pode custar o dobro dependendo de onde você compra.
          </p>

          <h3>Supermercado</h3>
          <p>
            A opção mais acessível em termos de conveniência. A variedade costuma ser limitada — geralmente pistache com casca e salgado, em embalagens de 100g a 200g. O preço por quilo é mais alto do que em outros canais, mas você compra sem frete e sem esperar.
          </p>

          <h3>Empório e loja de granel</h3>
          <p>
            Geralmente mais barato por quilo. Você compra a quantidade que precisa, sem pagar pela embalagem. Bom pra quem usa regularmente e quer testar o produto antes de comprar em grande quantidade. Procure na seção de castanhas e frutas secas.
          </p>

          <h3>Online</h3>
          <p>
            A maior variedade de formatos — natural, sem casca, granulado, pasta — está online. Compare o peso <em>líquido</em> na hora de comparar preços: embalagens de tamanhos diferentes dificultam a comparação direta. O frete costuma inviabilizar compras pequenas, então vale esperar acumular uma lista maior antes de pedir.
          </p>

          <h3>Atacado e lojas de confeitaria</h3>
          <p>
            Se você usa pistache com frequência em receitas, comprar em quantidade maior no atacado costuma reduzir bastante o custo por quilo. Lojas especializadas em confeitaria têm granulado e pasta de pistache em volumes maiores.
          </p>

          <p>
            Uma dica simples: quando encontrar pistache por um preço bom, anote onde. Preço de oleaginosa muda com câmbio e safra — o que estava barato em março pode não estar em julho. Guardar o fornecedor certo é tão útil quanto guardar a{' '}
            <a href="/blog/lista-basica-de-compras">lista de compras</a>.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Depende do que você vai fazer com ele.</p>
          <p>
            Se você já tem o hábito de comer oleaginosas — amêndoa, castanha, nozes — pistache entra bem como variação. Perfil nutricional bom, sabor distinto, fácil de incluir no que você já come. A{' '}
            <a href="/funcionalidades/despensa">despensa</a>{' '}
            comporta bem: dura meses em pote fechado.
          </p>
          <p>
            Se a intenção é usar em receitas, compre sem casca e sem sal — você vai ter mais controle e vai usar de verdade. Pistache com casca e salgado tende a virar snack antes de chegar na receita.
          </p>
          <p>
            Se a ideia é comprar porque é o ingrediente do momento e você não tem muito claro onde vai usar: provavelmente vai acabar num pote na prateleira. Um ingrediente novo só entra na rotina quando tem um uso definido antes da compra. É diferente de comprar amêndoa sem saber por quê — todo mundo sabe o que faz com amêndoa.
          </p>
          <p>
            Não é item de{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {' '}— mas se você cozinha com variedade ou tem pelo menos um uso em mente, vale a pena entrar na lista quando o preço estiver bom.
          </p>
          <p>
            Pistache na lista. Só não coma tudo antes de chegar em casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre pistache</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Pistache é uma fruta ou uma castanha?</p>
              <p className="faq-a">
                Tecnicamente, é a semente de um fruto — a planta produz um drupa com caroço duro, e o pistache é a semente dentro desse caroço. Na prática culinária e no mercado, é classificado junto com as oleaginosas, porque o perfil nutricional e o uso na cozinha são os mesmos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pistache faz engordar?</p>
              <p className="faq-a">
                É calórico como toda oleaginosa — a maior parte da energia vem das gorduras, que são insaturadas (do mesmo tipo do azeite). Em porções razoáveis (cerca de 30g), é um snack mais nutritivo e saciante do que a maioria dos ultraprocessados. O problema costuma ser comer o pacote inteiro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantos pistaches dá pra comer por dia?</p>
              <p className="faq-a">
                Uma porção padrão de oleaginosas é cerca de 30g — um punhado fechado, equivalente a uns 40 pistaches sem casca. É suficiente pra aproveitar os nutrientes sem exagerar nas calorias. Se for snack entre refeições, esse é um bom limite.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pistache salgado é pior que o natural?</p>
              <p className="faq-a">
                Tem mais sódio, o que pode ser problema pra quem controla pressão arterial. Nutricionalmente, os demais nutrientes são praticamente os mesmos. Para receitas, prefira o sem sal — você controla o tempero. Para snack direto, fica a gosto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como conservar pistache em casa?</p>
              <p className="faq-a">
                Com casca, em pote fechado fora da geladeira, dura meses. Sem casca, guarde em vidro ou pote hermético — se for durar mais de um mês, prefira a geladeira. Exposto ao ar, fica rançoso. Nunca deixe na embalagem aberta por tempo longo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Pistache tem glúten ou lactose?</p>
              <p className="faq-a">
                O pistache puro não tem glúten nem lactose. Mas versões processadas — temperadas, misturadas — podem ter contaminação cruzada com glúten dependendo da fábrica. Pasta de pistache e sorvete de pistache costumam ter lactose se feitos com leite. Verifique sempre o rótulo.
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
                Criador do Mise. Comprou pistache sem casca pra fazer pesto, comeu metade no caminho de volta do mercado. O pesto ficou pra semana seguinte.
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
              Você compra o que vai usar — e o pistache não some antes de virar receita.
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
