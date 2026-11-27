import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Chalota: o que é, diferença da cebola e como usar na cozinha',
  description: 'Chalota é uma cebola pequena e adocicada, queridinha da cozinha francesa. Saiba o que é, a diferença pra cebola e alho, como usar e onde comprar no Brasil.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
    },
  },
  openGraph: {
    title: 'Chalota: o que é, diferença da cebola e como usar na cozinha',
    description: 'Chalota é uma cebola pequena e adocicada, queridinha da cozinha francesa. Saiba o que é, a diferença pra cebola e alho, como usar e onde comprar no Brasil.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
    images: [
      {
        url: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Variedade colorida de legumes e vegetais frescos em banca de mercado — hortifruti onde se encontra chalota',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalota: o que é, diferença da cebola e como usar na cozinha',
    description: 'Chalota é uma cebola pequena e adocicada, queridinha da cozinha francesa. Saiba o que é, a diferença pra cebola e alho, como usar e onde comprar no Brasil.',
    images: ['https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Chalota e cebola são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não exatamente. A chalota é uma variedade cultivada da cebola comum (Allium cepa var. aggregatum), antigamente classificada como espécie separada. Ela cresce em cachos como o alho, tem bulbo menor, casca cobre-arroxeada e sabor mais doce e delicado — com um leve toque de alho que a cebola comum não tem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso substituir chalota por cebola comum na receita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, mas o resultado muda. Use cerca de 3-4 chalotas para substituir 1 cebola média, já que elas são bem menores. O sabor final fica mais forte e menos doce com cebola comum — funciona bem em preparos cozidos, mas perde a delicadeza em molhos frios e vinagretes, onde a chalota crua é insubstituível.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chalota faz chorar menos que a cebola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um pouco menos, mas ainda solta o composto que irrita os olhos. A diferença é sutil: bulbo menor libera menos gás por corte. Quem tem sensibilidade alta ainda vai sentir o efeito, especialmente cortando várias de uma vez. Faca bem afiada e corte rápido ajudam mais do que trocar de ingrediente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde encontrar chalota no Brasil e quanto custa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hortifrutis maiores, empórios e alguns supermercados de grande porte costumam ter. É mais rara em mercados de bairro pequenos. O preço gira em torno de R$ 25-40 o quilo — bem mais caro que a cebola comum, porque a produção brasileira ainda é pequena e concentrada em poucas regiões.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá pra comer chalota crua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dá, e é justamente onde ela brilha mais. Fatiada fina em vinagretes, saladas e molhos frios, o sabor doce e o toque de alho aparecem sem o ardor da cebola crua. É o uso clássico da chalota na cozinha francesa — cozida, ela perde parte dessa característica que a torna especial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como guardar chalota pra durar mais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em local fresco, seco, escuro e ventilado — nunca na geladeira. Guardada assim, junto com cebola e alho fora da luz direta, dura 3-4 semanas sem murchar ou brotar. Umidade e frio da geladeira aceleram o apodrecimento e fazem o bulbo amolecer bem mais rápido do que fora dela.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre chalota e cebolinha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São plantas diferentes. Cebolinha (Allium schoenoprasum ou Allium fistulosum, dependendo da região) é a erva de folhas finas e ocas usada picada por cima do prato, sem bulbo relevante. Chalota é o bulbo inteiro, usado como base de preparo — picado, refogado ou fatiado cru. Não são intercambiáveis na receita.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chalota: o que é, diferença da cebola e como usar na cozinha',
  description: 'Chalota é uma cebola pequena e adocicada, queridinha da cozinha francesa. Saiba o que é, a diferença pra cebola e alho, como usar e onde comprar no Brasil.',
  image: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chalota', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota' },
  ],
}

export default function ChalotaPt() {
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
            <li><a href="/pt/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Chalota</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-26">26 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Chalota: a cebola pequena que a cozinha francesa não larga
          </h1>
          <p className="blog-desc">
            Fica na gaveta de legumes do mercado, do lado da cebola, parecendo uma versão em miniatura dela. Quase ninguém sabe o que fazer com ela — até experimentar num vinagrete e entender por que chef nenhum troca por cebola comum. Aqui está o que é chalota, pra que serve e como usar sem desperdiçar.
          </p>

          <div className="answer-box">
            <p>
              <strong>Chalota</strong> (<em>Allium cepa var. aggregatum</em>) é uma variedade cultivada da cebola comum, com bulbo pequeno, casca cobre-arroxeada e sabor mais doce e delicado — com um leve toque de alho.
              Cresce em cachos, como o alho, mas se descasca e se corta como cebola.
              Na cozinha, entra onde a cebola pesaria demais no prato: molhos frios, vinagretes e preparos crus.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Variedade colorida de legumes e vegetais frescos em banca de mercado — hortifruti onde se encontra chalota"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Muhamad Guruh Budi Hartono / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é chalota</a></li>
              <li><a href="#diferenca">Chalota, cebola e alho: qual a diferença</a></li>
              <li><a href="#beneficios">Valor nutricional</a></li>
              <li><a href="#como-usar">Como usar na cozinha</a></li>
              <li><a href="#comprar">Onde comprar e quanto custa no Brasil</a></li>
              <li><a href="#guardar">Como guardar na despensa</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/12955498/pexels-photo-12955498.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Legumes frescos variados expostos em banca de mercado, incluindo folhas e raízes — seção de hortifruti"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Atlantic Ambience / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é chalota</h2>

          <p>
            Chalota é uma planta bulbosa do gênero <em>Allium</em> — a mesma família da cebola, do alho e do alho-poró. Cientificamente, é tratada hoje como uma variedade cultivada da cebola comum, <em>Allium cepa var. aggregatum</em>. Por décadas foi classificada como espécie própria, <em>Allium ascalonicum</em>, e ainda aparece assim em bulas antigas e alguns rótulos.
          </p>
          <p>
            O nome vem de Ascalon, cidade portuária do Mediterrâneo oriental na Antiguidade. Soldados e viajantes que passavam pela região levaram o bulbo pra Europa, e o francês transformou "cebola de Ascalon" em <em>échalote</em> — que virou chalota em português. É um raro caso de ingrediente que carrega uma cidade inteira no próprio nome.
          </p>
          <p>
            Fisicamente, o bulbo é pequeno, alongado, com casca fina cobre-arroxeada. Diferente da cebola, que cresce sozinha, a chalota se multiplica em cachos — corta um bulbo ao meio e encontra dois ou três "dentes" superpostos, parecido com o alho. O sabor é mais doce e menos pungente que o da cebola, com uma nota sutil de alho no fundo.
          </p>
          <p>
            É o ingrediente-base da cozinha francesa clássica, presente em molhos, vinagretes e refogados finos onde a cebola comum deixaria o sabor grosseiro demais. Fora da França, aparece cada vez mais em cozinhas asiáticas — frita crocante, é finalização clássica em pratos vietnamitas e tailandeses.
          </p>

          {/* DIFERENÇA */}
          <h2 id="diferenca">Chalota, cebola e alho: qual a diferença</h2>

          <p>
            As três plantas são do mesmo gênero botânico, mas cumprem papéis diferentes na cozinha — e trocar uma pela outra sem ajustar muda o prato inteiro.
          </p>
          <p>
            <strong>Cebola</strong> é o ingrediente-base, com sabor mais forte e pungente, que suaviza bastante ao cozinhar. Funciona como fundamento de praticamente qualquer refogado. <strong>Alho</strong> é mais concentrado ainda, usado em quantidade pequena, com sabor que domina o prato se exagerar. <strong>Chalota</strong> fica no meio: mais suave que os dois, mais doce, com um toque de alho que aparece só de leve.
          </p>
          <p>
            Na prática: quando a receita pede delicadeza — molho de manteiga, vinagrete, prato cru — a chalota entrega sabor sem dominar. Quando pede base robusta pra um ensopado longo, a cebola comum cumpre melhor e custa menos. Confundir os dois não estraga a receita, mas muda o resultado — e explica por que muita gente compra chalota, usa como cebola comum e conclui que "não tem nada de especial". Pra entender melhor o parente mais forte da família, vale ler sobre{' '}
            <a href="/pt/blog/o-que-e-alho">o que é alho</a> e como ele se comporta na cozinha.
          </p>

          {/* BENEFÍCIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa picando vegetais na tábua durante o preparo de uma refeição em cozinha doméstica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Valor nutricional</h2>

          <p>
            Chalota é fonte de vitamina C, vitamina B6, folato, potássio e manganês, além de compostos antioxidantes da família dos flavonoides — a mesma classe presente em maior concentração na casca da cebola roxa. Uma porção de 30g (cerca de uma chalota média) tem cerca de 20 calorias.
          </p>
          <p>
            Vale o mesmo alerta de todo ingrediente usado em quantidade pequena: chalota entra na receita em uma ou duas unidades, não em porções que mudam o perfil nutricional do prato. O valor real dela é de sabor, não de suplemento — contribui como parte de uma alimentação variada, sem substituir a base de vegetais e proteína do prato.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Como usar chalota na cozinha</h2>

          <p>
            O uso muda dependendo se a chalota vai crua ou cozida — e é aí que a maioria das receitas caseiras erra ao tratá-la como substituto direto de cebola.
          </p>
          <p>
            <strong>Vinagrete e molhos frios.</strong> Pique bem fininho, deixe descansar 5-10 minutos no vinagre ou limão antes de misturar o azeite — isso suaviza o ardor residual. É o uso onde a chalota mais se diferencia da cebola comum: o sabor fica presente sem dominar a salada.
          </p>
          <p>
            <strong>Molhos de manteiga.</strong> Refogada em fogo baixo até ficar translúcida, sem dourar, é a base clássica de molhos franceses como o beurre blanc. A doçura da chalota equilibra a acidez do vinho branco sem competir com a manteiga.
          </p>
          <p>
            <strong>Chalota confitada.</strong> Assada inteira, com casca, embrulhada em papel-alumínio com um fio de azeite, por 40 minutos a 180°C. Fica macia e adocicada, quase caramelizada por dentro — acompanhamento simples pra carnes grelhadas.
          </p>
          <p>
            <strong>Frita crocante.</strong> Fatiada bem fina e frita em óleo quente até dourar, vira finalização pra sopas, arroz e pratos de inspiração asiática. Guardada em pote fechado, dura alguns dias e adiciona textura sem esforço.
          </p>
          <p>
            Regra prática de substituição: 3-4 chalotas médias equivalem a 1 cebola média em volume. Se a receita não especificar chalota por um motivo — textura, sabor, tradição do prato — trocar por cebola comum funciona na maioria dos refogados cozidos. Se chalota vira ingrediente fixo da sua semana, ela entra fácil num{' '}
            <a href="/pt/funcionalidades/cardapio-semanal">cardápio semanal</a> com molhos e vinagretes recorrentes.
          </p>

          {/* COMPRAR */}
          <h2 id="comprar">Onde comprar e quanto custa no Brasil</h2>

          <p>
            Chalota ainda não é item padrão de toda gôndola de supermercado. Hortifrutis maiores, empórios e redes de supermercado de porte médio a grande costumam ter, geralmente na seção de temperos frescos ou perto da cebola e do alho.
          </p>
          <p>
            O preço gira em torno de R$ 25-40 o quilo — bem mais caro que a cebola comum, que costuma custar R$ 5-8 o quilo. A diferença reflete produção menor: a maior parte da chalota vendida no Brasil ainda vem de cultivo em escala reduzida, concentrado em algumas regiões produtoras.
          </p>
          <p>
            Ao escolher, prefira bulbos firmes, sem partes moles ou brotando. Casca ressecada ou úmida demais são sinais de chalota velha. Como o preço por quilo é alto, vale comprar a quantidade certa pra receita em vez de estocar — ela não é item de compra mensal como cebola e alho costumam ser.
          </p>

          {/* GUARDAR */}
          <h2 id="guardar">Como guardar chalota na despensa</h2>

          <p>
            Assim como cebola e alho, chalota não vai pra geladeira. Umidade e frio aceleram o apodrecimento e amolecem o bulbo bem mais rápido do que em temperatura ambiente.
          </p>
          <p>
            O ideal é um local fresco, seco, escuro e ventilado — longe da luz direta e de outros vegetais que soltam etileno, como batata, que acelera o brotamento. Guardada assim, na{' '}
            <a href="/pt/funcionalidades/despensa">despensa</a>, junto com cebola e alho, dura de 3 a 4 semanas sem perder qualidade.
          </p>
          <p>
            Uma vez cortada, sim, vai pra geladeira: em pote fechado, dura 3-4 dias. Passado esse prazo, começa a perder textura e ganhar sabor amargo — melhor cortar só a quantidade que a receita do dia realmente precisa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre chalota</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Chalota e cebola são a mesma coisa?</p>
              <p className="faq-a">
                Não exatamente. É uma variedade cultivada da cebola comum, com bulbo menor, casca cobre-arroxeada e sabor mais doce e delicado, com leve toque de alho. Cresce em cachos como o alho, mas se corta como cebola.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Posso substituir chalota por cebola comum na receita?</p>
              <p className="faq-a">
                Pode. Use cerca de 3-4 chalotas para substituir 1 cebola média. O resultado fica mais forte e menos doce — funciona em preparos cozidos, mas perde delicadeza em molhos frios e vinagretes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Chalota faz chorar menos que a cebola?</p>
              <p className="faq-a">
                Um pouco menos, mas ainda irrita os olhos. O bulbo menor libera menos gás por corte, mas quem tem sensibilidade alta ainda sente o efeito, principalmente cortando várias de uma vez.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Onde encontrar chalota no Brasil e quanto custa?</p>
              <p className="faq-a">
                Hortifrutis maiores, empórios e supermercados de grande porte costumam ter. O preço fica em torno de R$ 25-40 o quilo, mais caro que a cebola comum por causa da produção brasileira ainda pequena.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Dá pra comer chalota crua?</p>
              <p className="faq-a">
                Dá, e é onde ela brilha mais. Fatiada fina em vinagretes e molhos frios, o sabor doce aparece sem o ardor da cebola crua — é o uso clássico dela na cozinha francesa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como guardar chalota pra durar mais?</p>
              <p className="faq-a">
                Em local fresco, seco, escuro e ventilado, nunca na geladeira. Guardada assim, dura de 3 a 4 semanas. Umidade e frio aceleram o apodrecimento e o brotamento.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre chalota e cebolinha?</p>
              <p className="faq-a">
                São plantas diferentes. Cebolinha é a erva de folhas finas usada picada por cima do prato, sem bulbo relevante. Chalota é o bulbo inteiro, usado como base do preparo. Não são intercambiáveis.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador do Mise. Faz mercado toda semana e ainda esquece ingrediente às vezes.
                Construiu o app pra resolver a dor que ele mesmo tinha na cozinha.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Chalota na despensa. Vinagrete pronto em cinco minutos.</p>
            <p className="blog-cta-desc">
              Com o Mise, você sabe o que tem na <a href="/pt/funcionalidades/despensa">despensa</a> antes de ir ao mercado — e monta a{' '}
              <a href="/pt/funcionalidades/lista-de-compras">lista de compras</a> sem esquecer o que acabou.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Comece grátis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">Voltar ao topo ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Feito com cuidado no Brasil.</p>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="/pt/blog" className="footer-link">Blog</a>
            <a href="/pt/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
