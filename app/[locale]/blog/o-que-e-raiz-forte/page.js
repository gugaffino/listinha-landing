import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Raiz forte: o que é, para que serve e como usar na cozinha',
  description: 'Raiz forte é a raiz picante usada ralada em molho com carnes e peixes defumados. Saiba a diferença do wasabi, como usar na cozinha e onde comprar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte',
  },
  openGraph: {
    title: 'Raiz forte: o que é, para que serve e como usar na cozinha',
    description: 'Raiz forte é a raiz picante usada ralada em molho com carnes e peixes defumados. Saiba a diferença do wasabi, como usar na cozinha e onde comprar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte',
    images: [
      {
        url: 'https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Planta de raiz forte com folhas verdes largas — Armoracia rusticana no campo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raiz forte: o que é, para que serve e como usar na cozinha',
    description: 'Raiz forte é a raiz picante usada ralada em molho com carnes e peixes defumados. Saiba a diferença do wasabi, como usar na cozinha e onde comprar no Brasil.',
    images: ['https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Raiz forte é a mesma coisa que wasabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. São plantas diferentes. Raiz forte é Armoracia rusticana, nativa da Europa. Wasabi é Wasabia japonica, cultivada no Japão. O wasabi verdadeiro é raro e caro mesmo no Japão. O que chega como "wasabi" nos restaurantes brasileiros quase sempre é raiz forte com corante verde — prática padrão no mundo inteiro, não só no Brasil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Raiz forte pode ser usada crua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, e é a forma mais comum. A raiz é ralada in natura e misturada em molhos, vinagretes ou servida diretamente. O calor reduz o pungente — então cozinhar a raiz forte diminui bastante o sabor picante. Para preservar a ardência característica, use sempre crua ou adicione no final do preparo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como ralar raiz forte sem irritar os olhos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A raiz forte libera compostos voláteis ao ser ralada — parecido com cebola, mas mais intenso. Rale num ambiente ventilado, com janela aberta. Misture vinagre branco ou suco de limão logo depois de ralar: isso neutraliza os compostos e interrompe a irritação. Trabalhe rápido e mantenha o rosto a distância do ralador.',
      },
    },
    {
      '@type': 'Question',
      name: 'Raiz forte tem que ir pra geladeira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A raiz fresca precisa de frio e umidade controlada para não ressecar — geladeira, embrulhada em papel toalha levemente úmido, por até 3 semanas. O pote industrializado aberto também vai para a geladeira. Raiz forte não é item de prateleira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Raiz forte faz bem pra saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A raiz forte tem vitamina C, potássio, cálcio e magnésio, além de compostos com propriedades antimicrobianas. Mas é um condimento — a quantidade usada por porção é pequena. Os benefícios nutricionais vêm do conjunto da alimentação, não de um condimento específico.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que fazer com raiz forte além de molho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raiz forte ralada vai bem em vinagretes com folhas amargas (rúcula, chicória), sopas de beterraba, sobre salmão grelhado ou ovo cozido. O pote industrializado substitui a mostarda em sanduíches de carne fria. Na culinária judaica, o chrein (raiz forte com beterraba) é o condimento tradicional do Pessach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde encontrar raiz forte fresca no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em empórios especializados, feiras de produtores nas regiões Sul e Sudeste, e lojas online de temperos. O cultivo no Brasil se concentra nessas regiões. No supermercado convencional, o mais comum é a versão em pote — ralada e conservada em vinagre. Se você está numa região produtora, feiras menores podem ter a raiz fresca.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Raiz forte: o que é, para que serve e como usar na cozinha',
  description: 'Raiz forte é a raiz picante usada ralada em molho com carnes e peixes defumados. Saiba a diferença do wasabi, como usar na cozinha e onde comprar no Brasil.',
  image: 'https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é raiz forte', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte' },
  ],
}

export default function OQueERaizForte({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">O que é raiz forte</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-21">21 jun. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Raiz forte: o que é, de onde vem e como usar na cozinha
          </h1>
          <p className="blog-desc">
            O ingrediente picante que aparece no churrasco, no sushi quase-wasabi e na prateleira de empório sem muito mais explicação. O que é, de onde vem, para que serve — e como não chorar ao ralar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Raiz forte</strong> (<em>Armoracia rusticana</em>) é uma raiz da família do brócolis e da couve-flor, nativa da Europa.
              A parte comestível é a raiz — branca, espessa e de sabor picante intenso quando ralada.
              É usada principalmente como condimento: em molhos que acompanham carnes assadas, peixes defumados e embutidos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Planta de raiz forte com folhas verdes largas — Armoracia rusticana no campo"
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
              <li><a href="#o-que-e">O que é raiz forte</a></li>
              <li><a href="#origem">De onde vem</a></li>
              <li><a href="#wasabi">Raiz forte vs wasabi</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#onde-comprar">Onde comprar no Brasil</a></li>
              <li><a href="#conservar">Como conservar em casa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5537267/pexels-photo-5537267.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raiz forte crua sobre tábua de madeira — raiz branca espessa com casca marrom"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é raiz forte</h2>

          <p>
            Raiz forte é a raiz de uma planta chamada{' '}
            <a href="https://pt.wikipedia.org/wiki/Armoracia_rusticana" target="_blank" rel="noopener">
              <em>Armoracia rusticana</em>
            </a>
            {', '}da mesma família do brócolis, da couve-flor e da mostarda — as Brassicaceae. O nome científico não ajuda muito. O sabor sim.
          </p>
          <p>
            A raiz tem aparência de cenoura branca ou nabo comprido: longa, espessa, com casca marrom-acinzentada. Por dentro, a polpa é branca e firme. Sem cheiro aparente — até você começar a ralar. Nesse momento, os compostos voláteis (principalmente o alil-isotiocianato) são liberados e causam aquela ardência que sobe direto para o nariz. Diferente da pimenta vermelha, que fica na boca. Quem rala raiz forte sem ventilação descobre a diferença em segundos.
          </p>
          <p>
            É um condimento de uso antigo na Europa — documentado desde o século XIII como ingrediente medicinal e culinário. No Brasil, não é item de supermercado convencional, mas aparece em empórios, em feiras especializadas e, na versão em pote, em lojas gourmet.
          </p>
          <p>
            Se você já comeu um molho branco picante acompanhando rosbife em churrascaria ou descobriu aquele creme que dá ardência no nariz antes de ficar na boca, provavelmente já conhece a raiz forte — só não sabia o nome.
          </p>

          {/* ORIGEM */}
          <h2 id="origem">De onde vem a raiz forte</h2>

          <p>
            A planta é nativa da Europa Central e Oriental — da região do Danúbio até partes da Ásia. Por séculos, foi usada como planta medicinal antes de virar condimento. Os romanos a usavam. Os vikings a usavam. Chegou ao restante da Europa com o comércio e a culinária regional.
          </p>
          <p>
            No Brasil, o cultivo se concentra no Sul e no Sudeste, trazida por imigrantes europeus — poloneses, alemães e ucranianos que mantiveram o ingrediente na culinária doméstica. A raiz cresce bem em climas mais amenos e solos férteis. Não é uma cultura comercial expressiva, mas existe.
          </p>
          <p>
            Isso explica por que a raiz forte fresca não aparece em qualquer banca de feira — é ingrediente de nicho, mesmo nas regiões produtoras. A versão em pote industrializado, ralada e conservada em vinagre, tem distribuição um pouco mais ampla.
          </p>

          {/* WASABI */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5757480/pexels-photo-5757480.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasta verde de wasabi e raiz forte num prato japonês ao lado de sushi — condimentos picantes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="wasabi" className="img-above">Raiz forte e wasabi — qual é a diferença</h2>

          <p>
            O wasabi verdadeiro é de outra planta: <em>Wasabia japonica</em>, cultivada no Japão em condições específicas de umidade, temperatura e solo. É rara e difícil de cultivar. Fora do país, o wasabi fresco é quase inexistente — e quando aparece, é caro.
          </p>
          <p>
            O que chega no Brasil como "wasabi" — nos tubinhos verdes, nos sachês do restaurante de sushi — quase sempre é raiz forte misturada com corante verde e mostarda em pó. Isso não é fraude específica do Brasil: é o padrão no mundo inteiro, inclusive em boa parte do Japão fora dos restaurantes de alto padrão.
          </p>
          <p>
            As diferenças práticas entre os dois:
          </p>
          <ul className="item-list">
            <li><strong>Origem:</strong> raiz forte vem da Europa; wasabi vem do Japão.</li>
            <li><strong>Planta:</strong> espécies botânicas distintas, embora ambas sejam Brassicaceae.</li>
            <li><strong>Pungência:</strong> a ardência da raiz forte dura mais na boca. O wasabi real tem pungente mais fugaz e sabor levemente herbáceo.</li>
            <li><strong>Preço:</strong> raiz forte é muito mais acessível. Wasabi real custa dezenas de vezes mais.</li>
            <li><strong>Disponibilidade:</strong> raiz forte existe fresca ou em pote no Brasil. Wasabi real: improvável fora de restaurantes especializados.</li>
          </ul>
          <p>
            Para fins práticos: o que você vai encontrar e usar na cozinha é raiz forte, independentemente do nome na embalagem.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar raiz forte na cozinha</h2>

          <p>
            O uso clássico é o molho de raiz forte: a raiz ralada misturada com creme de leite fresco, maionese ou iogurte natural, sal e às vezes um pouco de vinagre. Combina com carnes assadas e defumadas — especialmente o rosbife. É o condimento tradicional do churrasco alemão e polonês.
          </p>
          <p>
            Outros usos que funcionam bem:
          </p>
          <ul className="item-list">
            <li>Ralada fresca em vinagretes para saladas com folhas amargas — rúcula, chicória, agrião.</li>
            <li>Uma colher de chá em sopa de beterraba ou cenoura transforma o perfil de sabor.</li>
            <li>Sobre salmão grelhado ou sashimi caseiro, como alternativa ao wasabi industrializado.</li>
            <li>Misturada com manteiga amolecida para finalizar carnes — leva menos de dois minutos.</li>
            <li>O pote industrializado substitui a mostarda em sanduíches de carne fria ou presunto.</li>
          </ul>
          <p>
            Uma advertência prática: raiz forte ralada escurece em minutos quando exposta ao ar. Misture vinagre branco ou suco de limão logo depois de ralar — isso preserva a cor e retarda a perda do pungente. Se você ralar e deixar de lado por 20 minutos, vai ter uma pasta marrom-acinzentada sem muita graça.
          </p>
          <p>
            Outro ponto: o calor mata o pungente. Não cozinhe a raiz forte se quiser manter o sabor. Adicione sempre cru ou no final, depois do fogo apagado.{' '}
            <a href="/blog/o-que-e-gengibre">O gengibre</a> tem comportamento parecido — os compostos aromáticos se degradam com calor prolongado. Com raiz forte, o efeito é mais rápido e mais drástico.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde comprar raiz forte no Brasil</h2>

          <p>
            A raiz fresca não é item de supermercado convencional. Para encontrar:
          </p>
          <ul className="item-list">
            <li><strong>Empórios especializados:</strong> a aposta mais segura nas capitais. Procure na seção de temperos e ingredientes importados.</li>
            <li><strong>Feiras de produtores rurais:</strong> nas regiões Sul e Sudeste, especialmente em cidades com tradição de imigração europeia, é possível encontrar a raiz fresca de produtores locais.</li>
            <li><strong>Lojas online de temperos:</strong> empórios que vendem online costumam ter tanto a raiz fresca (com prazo de validade curto) quanto o pote ralado.</li>
            <li><strong>Supermercados maiores:</strong> dificilmente a raiz fresca, mas o pote industrializado aparece na seção de condimentos de redes maiores.</li>
          </ul>
          <p>
            Se você vai a um empório e quer experimentar antes de comprar em quantidade, peça uma pequena amostra da versão ralada — a diferença entre a fresca ralada na hora e o pote industrializado é perceptível.
          </p>
          <p>
            Na{' '}
            <a href="/blog/lista-basica-de-compras">lista básica de compras</a>
            {', '}raiz forte não entra. É ingrediente de uso específico — você vai lembrar de colocar na lista quando tiver uma receita em mente, não como item de reposição regular. Para não esquecer quando precisar, vale registrar na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}e configurar um alerta de reposição.
          </p>

          {/* CONSERVAR */}
          <h2 id="conservar">Como conservar raiz forte em casa</h2>

          <p>
            <strong>Raiz fresca:</strong> embrulhe em papel toalha levemente úmido, coloque num saco plástico fechado e guarde na gaveta de vegetais da geladeira. Não lave antes de guardar — lave só na hora de usar. Dura de 2 a 3 semanas assim. Se começar a amolecer ou ganhar manchas escuras, é hora de usar ou descartar.
          </p>
          <p>
            <strong>Ralada em casa:</strong> misture com um pouco de vinagre branco logo depois de ralar (preserva a cor e o pungente), coloque em pote de vidro com tampa e leve à geladeira. Dura até 3 semanas. Dá para congelar por até 3 meses, mas a textura muda um pouco depois de descongelar — fica levemente mais mole, ainda utilizável.
          </p>
          <p>
            <strong>Pote industrializado:</strong> siga as instruções do fabricante. Em geral, precisa de geladeira após aberto e dura entre 4 e 6 semanas assim. Verifique a data de validade e descarte se o cheiro ou a cor mudar de forma estranha.
          </p>
          <p>
            Um ponto sobre desperdício: raiz forte, por ser ingrediente de uso esporádico, às vezes some na gaveta da geladeira por semanas até virar lixo. Se você comprou uma raiz grande, rale tudo de uma vez, misture com vinagre e congele em porções menores — assim usa quando precisar sem desperdiçar.{' '}
            <a href="/blog/alcaparras">Alcaparras</a> têm o mesmo problema: compra-se para uma receita, fica o pote pela metade.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre raiz forte</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Raiz forte é a mesma coisa que wasabi?</p>
              <p className="faq-a">
                Não. São plantas diferentes. Raiz forte é <em>Armoracia rusticana</em>, da Europa. Wasabi é <em>Wasabia japonica</em>, do Japão. O wasabi verdadeiro é raro e caro mesmo no Japão — o que vem nos sushis quase sempre é raiz forte com corante verde. Prática padrão no mundo inteiro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Raiz forte pode ser usada crua?</p>
              <p className="faq-a">
                Sim, e é a forma mais comum. Ralada in natura em molhos ou vinagretes. O calor destrói o pungente — cozinhar a raiz forte tira o sabor picante característico. Para preservar a ardência, use sempre crua ou adicione depois do fogo apagado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como ralar raiz forte sem irritar os olhos?</p>
              <p className="faq-a">
                Rale num ambiente ventilado, com janela aberta. Misture vinagre branco ou suco de limão logo depois de ralar — isso neutraliza os compostos voláteis. Trabalhe rápido e mantenha o rosto a distância. É mais intenso do que cebola, mas passa rápido com ventilação.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Raiz forte tem que ir pra geladeira?</p>
              <p className="faq-a">
                Sim. A raiz fresca precisa de frio e umidade controlada para não ressecar — gaveta de vegetais da geladeira, embrulhada em papel toalha. Dura até 3 semanas. O pote industrializado aberto também vai para a geladeira. Não é item de prateleira.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Raiz forte faz bem pra saúde?</p>
              <p className="faq-a">
                Tem{' '}
                <a href="https://www.agro20.com.br/raiz-forte/" target="_blank" rel="noopener">
                  vitamina C, potássio, cálcio e magnésio em quantidade relevante
                </a>
                {', '}além de compostos com propriedades antimicrobianas. Mas a porção usada como condimento é pequena — os benefícios nutricionais vêm do conjunto da alimentação, não de um ingrediente isolado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que fazer com raiz forte além de molho?</p>
              <p className="faq-a">
                Vinagrete com rúcula ou chicória, sopa de beterraba, sobre salmão grelhado, manteiga composta para finalizar carnes, em lugar de mostarda em sanduíche de frios. Na culinária do Leste Europeu, o chrein — raiz forte ralada com beterraba — é condimento tradicional de festas religiosas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde encontrar raiz forte fresca no Brasil?</p>
              <p className="faq-a">
                Em empórios especializados, feiras de produtores rurais no Sul e Sudeste, e lojas online de temperos. O supermercado convencional raramente tem a raiz fresca — mas o pote ralado e conservado em vinagre aparece em redes maiores, na seção de condimentos.
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
                Criador do Mise. Primeiro contato com raiz forte foi num churrasco de fim de ano, sem aviso prévio. Ralou uma vez em casa. Nunca mais sem ventilação.
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
              Você compra o que vai usar — e a raiz forte não vira lixo esquecida na gaveta.
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
