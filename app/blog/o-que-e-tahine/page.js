import RevealObserver from '../../../components/RevealObserver'
import { BrandIcon } from '../../../components/Icon'
import SiteNav from '../../../components/SiteNav'

export const metadata = {
  title: 'O que é tahine: pasta de gergelim, tipos e como usar',
  description: 'Tahine é pasta de gergelim puro. Saiba o que é tahine, a diferença entre branco e preto, como usar no homus, molhos e saladas — e se vale colocar na lista.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog/o-que-e-tahine',
  },
  openGraph: {
    title: 'O que é tahine: pasta de gergelim, tipos e como usar',
    description: 'Tahine é pasta de gergelim puro. Saiba o que é tahine, a diferença entre branco e preto, como usar no homus, molhos e saladas — e se vale colocar na lista.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/blog/o-que-e-tahine',
    images: [
      {
        url: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tigelas de homus cremoso com azeite e ervas — tahine é o ingrediente base da receita',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é tahine: pasta de gergelim, tipos e como usar',
    description: 'Tahine é pasta de gergelim puro. Saiba o que é tahine, a diferença entre branco e preto, como usar no homus, molhos e saladas — e se vale colocar na lista.',
    images: ['https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Tahine é o mesmo que pasta de gergelim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Tahine e pasta de gergelim são a mesma coisa — nomes diferentes para o mesmo produto. "Tahine" é a versão aportuguesada do árabe "tahini". Você pode ver os dois nomes na embalagem e em receitas. O produto é idêntico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre tahine branco e tahine preto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tahine branco é feito de gergelim descascado — sabor mais suave, cor mais clara, textura mais fina. O preto usa gergelim com casca, o que deixa a pasta mais escura e com sabor mais intenso e amargo. O branco é o mais comum no Brasil e o mais indicado para homus e molhos. O preto aparece mais na culinária japonesa e em confeitaria.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como conservar tahine depois de aberto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na geladeira, tahine aberto dura de 6 a 12 meses sem problema. O óleo que separa na superfície é normal — misture bem antes de usar. Mantenha sempre bem fechado. Fora da geladeira aguenta alguns meses se guardado em local fresco e seco, mas a geladeira é mais segura.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tahine tem glúten ou lactose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tahine puro não tem glúten e não tem lactose — é só gergelim. Mas verifique sempre o rótulo: algumas marcas processam em fábricas com trigo, o que pode causar contaminação cruzada. Para pessoa com doença celíaca, procure a informação "sem glúten" explícita na embalagem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tahine engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tahine é calórico — cerca de 90 calorias por colher de sopa (15g), com gordura insaturada como componente principal. Em porções razoáveis (1 a 2 colheres por refeição), é um ingrediente nutritivo. O problema costuma ser usar sem perceber o quanto — tahine some rápido em molhos e pastas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso substituir o tahine por outra pasta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende da receita. Em molhos e temperos, pasta de amendoim natural (sem açúcar) funciona como substituto em muitos casos — o sabor muda, mas a textura é parecida. No homus, a substituição altera bastante o resultado. Para babaganoush e pratos árabes, o tahine é central e não tem substituto com o mesmo perfil.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é tahine: pasta de gergelim, tipos e como usar',
  description: 'Tahine é pasta de gergelim puro. Saiba o que é tahine, a diferença entre branco e preto, como usar no homus, molhos e saladas — e se vale colocar na lista.',
  image: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/blog/o-que-e-tahine',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'O que é tahine', item: 'https://www.miseemcasa.com.br/blog/o-que-e-tahine' },
  ],
}

export default function OQueETahine() {
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
            <li className="breadcrumb-current" aria-current="page">O que é tahine</li>
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
            O que é tahine, como usar e se vale colocar na lista
          </h1>
          <p className="blog-desc">
            Pasta de gergelim que virou item de despensa no Brasil nos últimos anos. O que é tahine de verdade, por que fica com óleo por cima, a diferença entre o branco e o preto — e como usar além do homus.
          </p>

          <div className="answer-box">
            <p>
              <strong>Tahine</strong> é pasta feita de gergelim moído, sem mais nada. O resultado é um creme denso, levemente amargo e com cheiro característico de gergelim torrado. É o ingrediente base do homus, do babaganoush e de vários molhos da culinária árabe e mediterrânea. No Brasil, aparece como "tahine" ou "pasta de gergelim" — é o mesmo produto.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tigelas de homus cremoso com azeite e ervas — tahine é o ingrediente base da receita"
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
              <li><a href="#o-que-e">O que é tahine</a></li>
              <li><a href="#como-e-feito">Como o tahine é feito</a></li>
              <li><a href="#tipos">Tahine branco e preto</a></li>
              <li><a href="#nutrientes">O que tem dentro: nutrientes</a></li>
              <li><a href="#como-usar">Como usar tahine na cozinha</a></li>
              <li><a href="#onde-comprar">Onde comprar no Brasil</a></li>
              <li><a href="#vale-a-pena">Vale a pena colocar na lista</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5755536/pexels-photo-5755536.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sementes de gergelim branco em tigelinha de madeira — matéria-prima do tahine"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é tahine</h2>

          <p>
            Tahine é pasta de gergelim moído. O gergelim passa por uma torra leve e depois é triturado até virar um creme denso. Sabor terroso, levemente amargo, com aquele gosto de gergelim tostado que você reconhece na hora.
          </p>
          <p>
            O nome vem do árabe — "tahini" (طحينة) — e chegou ao português como "tahine" ou "tahini". Na embalagem, você pode encontrar "pasta de gergelim" também. Mesmo produto, nome diferente. Sem distinção prática.
          </p>
          <p>
            A culinária árabe usa há séculos. É ingrediente central do homus (grão-de-bico + tahine + limão + alho), do babaganoush (berinjela assada + tahine) e do ful medames (feijão-fava árabe). A popularidade do homus industrializado nos últimos anos trouxe o tahine junto para as prateleiras do supermercado brasileiro.
          </p>

          {/* COMO É FEITO */}
          <h2 id="como-e-feito">Como o tahine é feito — e por que fica com óleo em cima</h2>

          <p>
            O processo é direto. Gergelim é torrado levemente e depois triturado com equipamento industrial até virar pasta. Sem aditivos, sem conservante, sem sal na maioria das versões. O ingrediente único é o gergelim.
          </p>
          <p>
            O óleo que sobe à superfície do pote é natural — é o próprio óleo do gergelim se separando da pasta. Não significa que estragou. Muita gente descarta um pote inteiro por isso. Misture bem com uma colher antes de usar e está pronto. Nos primeiros usos o pote cheio dificulta misturar; com menos conteúdo, fica mais fácil.
          </p>
          <p>
            Tahine de qualidade tem textura uniforme depois de misturado, cor bege claro a bege médio (no caso do branco) e cheiro característico de gergelim. Textura muito granulada ou cheiro de ranço indicam produto velho ou mal armazenado.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tahine branco e preto: qual a diferença</h2>

          <p>
            Dois tipos chegam com frequência às prateleiras brasileiras.
          </p>

          <h3>Tahine branco</h3>
          <p>
            Feito de gergelim descascado, sem a casca externa. Sabor mais suave, cor mais clara, textura mais fina. É o mais comum no Brasil e o mais indicado para homus, molhos e receitas que precisam de sabor neutro de fundo. Se a receita não especifica o tipo, use o branco.
          </p>

          <h3>Tahine preto (ou integral)</h3>
          <p>
            Gergelim com casca, cor escura, sabor mais intenso e amargo. Aparece com mais frequência na culinária japonesa — em molhos de missô, temperos, alguns tipos de ramen — e em confeitaria, onde a cor é parte da apresentação. Mais difícil de achar e, em geral, mais caro. Para quem está começando, não é a primeira compra.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">O que tem dentro: nutrientes do tahine</h2>

          <p>
            Em duas colheres de sopa de tahine branco (30g), você tem aproximadamente 170 calorias, 5g de proteína, 15g de gordura e 6g de carboidrato. A gordura é majoritariamente insaturada — mesmo perfil do azeite de oliva.
          </p>
          <p>
            Tahine é uma fonte relevante de cálcio, ferro, vitamina E e vitaminas do complexo B, especialmente B1. Tem cobre em quantidade razoável, que contribui para a absorção de ferro. O tahine integral (com casca) tem ainda mais minerais do que o branco, porque parte dos nutrientes fica concentrada na casca.
          </p>
          <p>
            Para quem quer aumentar a ingestão de cálcio sem laticínios, tahine é uma das opções vegetais com quantidade relevante. Não chega a um copo de leite por porção, mas comparado a outras pastas vegetais, se destaca. O mesmo vale para o{' '}
            <a href="/blog/alimentos-ricos-em-proteinas">perfil de proteína</a>
            {' '}— não é alto como ovos ou frango, mas para uma pasta, 5g por colher de sopa é bom.
          </p>
          <p>
            Uma observação necessária: tahine é calórico. Duas colheres de sopa chegam a 170 calorias. Em molhos e homus, o volume por porção cresce rápido sem você perceber. É nutritivo, mas não é item de consumo sem atenção à quantidade.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6419747/pexels-photo-6419747.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedade de homus em pequenas tigelas com diferentes coberturas — tahine em várias apresentações"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Como usar tahine na cozinha</h2>

          <h3>No homus</h3>
          <p>
            A receita central. 400g de grão-de-bico cozido, 3 colheres de sopa de tahine, suco de meio limão, 1 dente de alho e sal. Bata no liquidificador ou processador, ajuste o limão e o sal. O tahine é o que dá cremosidade e o sabor de fundo — sem ele, é purê de grão-de-bico, não homus.
          </p>

          <h3>Como molho</h3>
          <p>
            A combinação mais versátil: tahine + suco de limão + água + sal. Misture até ficar cremoso — a água entra aos poucos para ajustar a textura. Vai em cima de falafel, legumes assados, frango grelhado, saladas com grãos. Adicione alho e salsinha se quiser mais sabor. É um molho que se faz em 2 minutos e muda completamente o prato.
          </p>

          <h3>No babaganoush</h3>
          <p>
            Berinjela inteira assada no forno, ou diretamente na chama do fogão para defumar, descascada e misturada com tahine, alho e limão. Amasse grosseiramente — não precisa virar pasta lisa. Serve como entrada, como acompanhamento, como mergulho para pão pita ou legumes.
          </p>

          <h3>Em sobremesas e no café da manhã</h3>
          <p>
            Tahine com mel é uma combinação simples que funciona bem — sobre iogurte, em cima de torradas, em sorvete de creme. A doçura do mel equilibra o amargor do gergelim. Em cookies e brownies, substitui parte da manteiga e adiciona sabor distinto. Uma colher de tahine com mel e uma pitada de sal sobre tigela de iogurte com frutas é um café da manhã diferente sem esforço.
          </p>

          <div className="blog-inline-cta">
            <p>Saber o que tem na despensa antes de ir ao mercado muda a lista. <em>O Mise resolve isso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* ONDE COMPRAR */}
          <h2 id="onde-comprar">Onde comprar tahine no Brasil</h2>

          <p>
            Tahine deixou de ser exclusividade de mercearia árabe. Hoje está em vários canais.
          </p>

          <h3>Supermercados grandes</h3>
          <p>
            A maioria dos supermercados com seção de produtos naturais tem pelo menos uma marca. Procure no corredor de produtos naturais ou no de pastas e manteigas vegetais — perto da pasta de amendoim. Nem sempre está em destaque, mas está lá.
          </p>

          <h3>Mercearias árabes e lojas especializadas</h3>
          <p>
            A melhor seleção. Tem marcas artesanais, versões importadas e tahine integral, que é mais difícil de achar em supermercado comum. Se você mora próximo a uma mercearia árabe, vale a visita só para comparar a qualidade com o que vende no supermercado.
          </p>

          <h3>Online</h3>
          <p>
            O maior volume de opções e marcas. Compare sempre o preço por grama — embalagens de 200g a 500g têm diferença significativa no custo por uso. O frete pode inviabilizar compra pequena, então vale combinar com outros itens da{' '}
            <a href="/blog/lista-de-compras-mercado">lista de compras</a>
            {' '}numa compra maior.
          </p>

          <p>
            Preço médio: R$18 a R$35 por pote de 200g a 300g, dependendo da marca e do canal. O artesanal importado pode custar mais. Para a primeira compra, um pote de 200g é suficiente para testar antes de comprar em quantidade.
          </p>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena colocar na lista</h2>

          <p>Se você vai fazer homus em casa: sim. Sem tahine, o homus não é homus — é só purê de grão-de-bico.</p>
          <p>
            Se você quer variar os molhos na cozinha, o molho de tahine (tahine + limão + água) é rápido, versátil e diferente de qualquer coisa que você faz normalmente. Vale ter um pote na{' '}
            <a href="/funcionalidades/despensa">despensa</a>
            {' '}— depois de aberto, dura de 6 a 12 meses na geladeira.
          </p>
          <p>
            Se é a primeira vez: compre um pote pequeno. Tahine tem sabor característico que nem todo mundo aprecia de imediato, especialmente o amargor residual. Teste antes de comprar em volume.
          </p>
          <p>
            Não é item de lista básica toda semana. Mas se você cozinha com grão-de-bico, berinjela ou procura variar os molhos, entra fácil na rotina e sai pouco — o pote dura.
          </p>
          <p>
            Tahine no armário por um ano, homus feito uma vez. Ainda assim valeu.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre tahine</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Tahine é o mesmo que pasta de gergelim?</p>
              <p className="faq-a">
                Sim. São nomes diferentes para o mesmo produto. "Tahine" é a versão aportuguesada do árabe "tahini". Na embalagem você pode ver qualquer um dos dois nomes — o produto é idêntico.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre tahine branco e tahine preto?</p>
              <p className="faq-a">
                Tahine branco usa gergelim descascado — sabor mais suave, cor clara. O preto usa gergelim com casca — mais escuro, mais amargo, mais intenso. Para homus e molhos, use o branco. O preto aparece mais na culinária japonesa e em confeitaria.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como conservar tahine depois de aberto?</p>
              <p className="faq-a">
                Na geladeira, aberto, dura de 6 a 12 meses. O óleo que sobe à superfície é normal — misture bem antes de usar. Mantenha sempre bem fechado. Fora da geladeira aguenta alguns meses em local fresco, mas a geladeira é mais segura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Tahine tem glúten ou lactose?</p>
              <p className="faq-a">
                Tahine puro não tem glúten nem lactose — é só gergelim. Mas verifique o rótulo: algumas marcas processam em fábricas com trigo, o que pode causar contaminação cruzada. Para pessoa com doença celíaca, procure "sem glúten" explícito na embalagem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Tahine engorda?</p>
              <p className="faq-a">
                É calórico — cerca de 90 calorias por colher de sopa (15g), com gordura insaturada como componente principal. Em porções razoáveis (1 a 2 colheres por refeição), é nutritivo. O problema costuma ser não perceber quanto está usando nos molhos e pastas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso substituir o tahine por outra pasta?</p>
              <p className="faq-a">
                Em molhos e temperos, pasta de amendoim natural (sem açúcar) funciona em muitos casos — o sabor muda, mas a textura é parecida. No homus, a substituição altera bastante o resultado. Para babaganoush e pratos árabes, o tahine é central e não tem substituto com o mesmo perfil.
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
                Criador do Mise. Comprou tahine pra fazer homus em 2023. Fez o homus uma vez. O pote ficou na porta da geladeira até ir embora sozinho no fim do ano.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa organizada.<br />
              <em>Lista que se monta sozinha.</em>
            </h2>
            <p>
              O Mise conecta o que você tem na despensa com a sua lista de compras. Você compra o que vai usar — e o tahine não vai embora esquecido numa prateleira.
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
