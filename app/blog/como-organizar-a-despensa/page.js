import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Como organizar a despensa: guia prático em 7 passos',
  description: 'Como organizar a despensa do zero: 7 passos pra esvaziar, agrupar, rotular e manter tudo no lugar — com dicas extras pra geladeira organizada.',
  alternates: {
    canonical: 'https://listinha-landing-delta.vercel.app/blog/como-organizar-a-despensa',
  },
  openGraph: {
    title: 'Como organizar a despensa: guia prático em 7 passos',
    description: 'Como organizar a despensa do zero: 7 passos pra esvaziar, agrupar, rotular e manter tudo no lugar.',
    type: 'article',
    url: 'https://listinha-landing-delta.vercel.app/blog/como-organizar-a-despensa',
    images: [
      {
        url: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Despensa organizada com potes transparentes e prateleiras bem distribuídas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como organizar a despensa: guia prático em 7 passos',
    description: 'Como organizar a despensa do zero: 7 passos pra esvaziar, agrupar, rotular e manter tudo no lugar.',
    images: ['https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como organizar uma despensa pequena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em despensas pequenas, verticalize. Use prateleiras extras, organizadores de porta e caixas empilháveis. Agrupe por categoria e coloque o mais usado na altura dos olhos. Potes transparentes economizam espaço e permitem ver o estoque sem tirar nada do lugar.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é o método PEPS e como usar na despensa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PEPS significa Primeiro que Entra, Primeiro que Sai. Na prática: quando guardar um produto novo, coloque o que já tinha na frente e o novo atrás. Assim você consome sempre o mais antigo primeiro, evitando vencimentos e desperdício.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar a geladeira por zonas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divida a geladeira em zonas fixas: prateleira de cima para sobras e laticínios abertos, meio para carnes e proteínas, baixo para frutas que precisam de frio, gavetas para legumes, e porta para condimentos, manteiga e ovos. Use potes transparentes para identificar conteúdo sem abrir tudo.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que deve ficar na despensa e o que vai para a geladeira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na despensa ficam: grãos secos (arroz, feijão, macarrão), enlatados, farinhas, açúcar, sal, café, azeite, temperos secos e produtos de limpeza e higiene. Na geladeira ficam: carnes, laticínios, ovos, frutas e verduras sensíveis ao calor, e qualquer produto que indica "manter refrigerado" na embalagem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber o que está faltando na despensa sem fazer inventário toda semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O hábito mais eficaz é marcar o que acabou no momento em que você usa o último. Não depender de memória para o dia do mercado. Você pode fazer isso com um caderninho dentro da despensa, uma lista no celular, ou um app como o Listinha, que conecta despensa e lista de compras automaticamente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como manter a despensa organizada depois de arrumar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manutenção semanal de 10 minutos resolve. Antes de fazer o mercado, abra a despensa e confira o que está acabando. Aplique sempre o método PEPS ao guardar. Tenha um lugar fixo para cada categoria e devolva os itens ao mesmo lugar sempre. O maior erro é guardar "qualquer coisa em qualquer lugar" na pressa.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Como organizar a despensa: guia prático em 7 passos',
  description: 'Como organizar a despensa do zero: 7 passos pra esvaziar, agrupar, rotular e manter tudo no lugar — com dicas extras pra geladeira organizada.',
  image: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
  author: {
    '@type': 'Person',
    name: 'Gus',
    url: 'https://listinha-landing-delta.vercel.app',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Listinha',
    url: 'https://listinha-landing-delta.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://listinha-puce.vercel.app/icons/icon-192.png',
      width: 192,
      height: 192,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://listinha-landing-delta.vercel.app/blog/como-organizar-a-despensa',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://listinha-landing-delta.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://listinha-landing-delta.vercel.app/blog' },
    { '@type': 'ListItem', position: 3, name: 'Como organizar a despensa', item: 'https://listinha-landing-delta.vercel.app/blog/como-organizar-a-despensa' },
  ],
}

export default function ComoOrganizarADespensa() {
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

      <header id="top" className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Você está aqui">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Como organizar a despensa</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-21">21 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Como organizar a despensa: guia prático em 7 passos
          </h1>
          <p className="blog-desc">
            A maioria das despensas não está bagunçada por falta de espaço. Está bagunçada por falta de sistema. Sete passos resolvem isso — e mantêm organizado sem virar rotina pesada.
          </p>

          <div className="answer-box">
            <p>
              Para <strong>organizar a despensa</strong>: esvazie tudo, descarte vencidos, limpe as prateleiras, agrupe por categoria (cereais, conservas, temperos, limpeza), aplique o método PEPS — mais antigo na frente — e rotule os potes. O processo leva 2 a 4 horas. A manutenção semanal leva 10 minutos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Despensa organizada com potes transparentes e prateleiras bem distribuídas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Kaboompics / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que-bagunca">Por que a despensa vira bagunça</a></li>
              <li><a href="#7-passos">Os 7 passos pra organizar a despensa</a></li>
              <li><a href="#geladeira">Como organizar a geladeira por zonas</a></li>
              <li><a href="#manter">Como manter organizado depois</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* POR QUE BAGUNÇA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5490824/pexels-photo-5490824.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Armário de cozinha com alimentos em caixas e prateleiras organizadas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Rachel Claire / Pexels</p>
          </div>

          <h2 id="por-que-bagunca" className="img-above">Por que a despensa vira bagunça</h2>

          <p>
            "Eu sei o que tenho em casa." Essa é a frase mais cara da cozinha brasileira.
          </p>
          <p>
            Ela leva a comprar duas garrafas de azeite quando ainda tem uma. A deixar macarrão
            vencendo atrás das latas. A chegar no mercado sem lista e voltar sem o alho — de novo.
          </p>
          <p>
            Dados da Embrapa indicam que o Brasil desperdiça cerca de{' '}
            <strong>46 milhões de toneladas de alimento por ano</strong>. Uma boa parte começa em
            casa. Na prateleira do fundo que ninguém abre. No produto comprado duas vezes porque
            ninguém lembrava que tinha.
          </p>
          <p>
            Despensa bagunçada não é problema de espaço. É problema de sistema. Você não vê o
            que tem — então não sabe o que falta — então compra errado. A organização quebra esse
            ciclo.
          </p>

          {/* OS 7 PASSOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8580763/pexels-photo-8580763.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa organizando alimentos em potes transparentes na cozinha"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="7-passos" className="img-above">Os 7 passos pra organizar a despensa</h2>

          <h3>Passo 1: Tire tudo do lugar</h3>
          <p>
            Tudo. Não "a maioria". Tudo, sem exceção. Coloque no chão ou na mesa. Com a despensa
            vazia, você enxerga o espaço real que tem. Descarte o que venceu. Descarte o produto
            que você não lembra ter comprado e não vai usar. Esse passo é desconfortável — e é o
            mais importante.
          </p>

          <h3>Passo 2: Limpe as prateleiras</h3>
          <p>
            Com a despensa vazia, passe um pano úmido com água e sabão neutro. Migalhas, gordura
            e resíduos de embalagem acumulam ali há mais tempo do que você imagina. Deixe secar
            antes de devolver qualquer coisa.
          </p>

          <h3>Passo 3: Agrupe por categoria antes de devolver</h3>
          <p>
            Não devolva no modo "vai indo". Separe os itens em grupos primeiro: cereais e farinhas,
            conservas e enlatados, temperos e condimentos, snacks, limpeza, higiene. Cada grupo vai
            ter um espaço fixo. Quando você abre a despensa, sabe onde olhar — sem revirar tudo pra
            achar o extrato de tomate que estava atrás do caldo de galinha.
          </p>

          <h3>Passo 4: Aplique o método PEPS</h3>
          <p>
            PEPS: Primeiro que Entra, Primeiro que Sai. Coloque o que já tinha na frente e o
            recém-comprado atrás. É o inverso do que a maioria faz — joga o novo na frente por
            preguiça, e a lata de milho do fundo vence enquanto a nova é consumida. O método
            elimina esse desperdício.
          </p>

          <h3>Passo 5: Use potes e rótulos</h3>
          <p>
            Grãos, farinhas e cereais abertos perdem qualidade rápido. Potes fechados resolvem —
            não precisam ser caros. Escreva no rótulo o nome do produto e a data de validade
            original. Parece trabalhoso na primeira vez. Vira automático a partir da segunda.
          </p>
          <p>
            Alguém em algum momento decidiu guardar o sal na segunda prateleira de cima. Ninguém
            sabe por quê. O sal continua lá. O rótulo existe justamente pra não depender de
            memória coletiva sobre onde fica cada coisa.
          </p>

          <h3>Passo 6: Posicione por frequência de uso</h3>
          <p>
            O que você usa todo dia fica na altura dos olhos, no centro. Arroz, feijão, azeite,
            temperos fixos — fácil de alcançar. O que você usa uma vez por mês fica no alto ou
            embaixo. Reservas, produtos de limpeza e suprimentos mensais ficam nas extremidades.
          </p>

          <h3>Passo 7: Marque o que acabou na hora</h3>
          <p>
            Aqui está onde a maioria falha. A despensa fica bonita por duas semanas. Depois volta
            a bagunçar. Motivo: ninguém registra o que acaba. Você nota que o arroz está no fim
            numa quarta à noite. Pensa "vou lembrar". Na sexta, no mercado, não lembra.
          </p>
          <p>
            A solução é simples: registre no momento. Um caderninho dentro da despensa, uma lista
            no celular, ou um app conectado. O que importa é que o registro aconteça na hora que
            o produto acaba — não quando você já está na fila do caixa.
          </p>

          {/* GELADEIRA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Geladeira organizada com potes transparentes e alimentos separados por zona"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="geladeira" className="img-above">Como organizar a geladeira por zonas</h2>

          <p>
            A <strong>geladeira organizada</strong> segue a mesma lógica da despensa: zonas fixas
            por categoria, mais antigo na frente, e visibilidade. O que muda é a temperatura —
            cada zona tem uma faixa diferente, e isso importa.
          </p>

          <ul>
            <li><strong>Prateleira de cima</strong> (mais quente): sobras, alimentos prontos, laticínios abertos, bebidas</li>
            <li><strong>Prateleira do meio</strong>: carnes e proteínas cruas — separadas dos alimentos prontos</li>
            <li><strong>Prateleira de baixo</strong> (mais fria): frutas que precisam de frio, iogurte, queijo</li>
            <li><strong>Gavetas</strong>: legumes e verduras — sem umidade direta</li>
            <li><strong>Porta</strong> (menos fria): condimentos, manteiga, ovos, sucos</li>
          </ul>

          <p>
            Um erro comum: guardar tudo em recipientes fechados escuros. Você não sabe o que tem
            sem abrir um por um. Potes transparentes resolvem — identifica o conteúdo de longe,
            sem tirar nada do lugar.
          </p>
          <p>
            Geladeira organizada não é geladeira vazia. É geladeira onde você sabe o que tem sem
            colocar a cabeça lá dentro pra procurar.
          </p>

          {/* COMO MANTER */}
          <h2 id="manter">Como manter organizado depois de arrumar</h2>

          <p>
            Organizar uma vez leva algumas horas. Manter leva 10 minutos por semana — se você
            tiver um sistema.
          </p>
          <p>
            O hábito que mais funciona: antes de ir ao mercado, abra a despensa e a geladeira.
            Olhe o que está acabando. Registre. Não confie na memória — ela vai dizer que tem
            azeite quando não tem. Ela sempre diz que tem azeite.
          </p>
          <p>
            No <a href="/funcionalidades/despensa">Listinha</a>, esse processo fica automático. Você
            monta sua despensa ideal no app uma vez — os produtos que sempre precisam ter em casa.
            O que você marca como "acabou" vai direto pra{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>. Na hora de montar o
            cardápio da semana, o app cruza com o que tem e já aponta o que falta comprar. É o
            passo 7 com sistema.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre como organizar a despensa</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Como organizar uma despensa pequena?</p>
              <p className="faq-a">
                Em despensas pequenas, verticalize. Use prateleiras extras, organizadores de porta
                e caixas empilháveis. Agrupe por categoria e coloque o mais usado na altura dos
                olhos. Potes transparentes economizam espaço e permitem ver o estoque sem tirar
                nada do lugar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que é o método PEPS e como usar na despensa?</p>
              <p className="faq-a">
                PEPS significa Primeiro que Entra, Primeiro que Sai. Quando guardar um produto
                novo, coloque o que já tinha na frente e o novo atrás. Você consome sempre o mais
                antigo primeiro — sem vencimentos acidentais.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">O que vai na despensa e o que vai pra geladeira?</p>
              <p className="faq-a">
                Na despensa: grãos secos, enlatados, farinhas, açúcar, sal, café, azeite, temperos
                secos, limpeza e higiene. Na geladeira: carnes, laticínios, ovos, frutas e verduras
                sensíveis ao calor, e qualquer produto com "manter refrigerado" na embalagem.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como saber o que está faltando na despensa sem fazer inventário toda semana?</p>
              <p className="faq-a">
                Marque o que acabou no momento em que você usa o último. Não dependa de memória
                para o dia do mercado. Um caderninho dentro da despensa, uma lista no celular ou
                um app como o Listinha — o que importa é o registro acontecer na hora, não depois.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como manter a despensa organizada depois de arrumar?</p>
              <p className="faq-a">
                Manutenção de 10 minutos antes do mercado resolve. Confira o que está acabando,
                aplique o PEPS ao guardar e devolva cada item ao lugar fixo. O maior erro é guardar
                qualquer coisa em qualquer lugar na pressa — em duas semanas a despensa volta ao
                estado original.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como organizar a despensa para aproveitar melhor as receitas?</p>
              <p className="faq-a">
                Mantenha a despensa atualizada com o que você realmente tem. Quando for cozinhar,
                você sabe o que tem disponível sem precisar checar tudo. Conectar despensa e
                receitas — saber o que tem e filtrar o que dá pra cozinhar com isso — é o que
                transforma uma despensa organizada em cozinha funcional.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <span className="blog-author-name">Gus</span>
              <span className="blog-author-bio">
                Criador do Listinha. Cuida da parte de cozinha, lista e despensa no dia a dia —
                e escreve sobre o que aprende no processo.
              </span>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-text">Despensa organizada. Lista automática. Grátis.</p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-lg" target="_blank" rel="noopener">
              Abrir o Listinha
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <p className="blog-cta-footnote">sem cadastro · sem cartão · funciona offline</p>
          </div>

          <a href="#top" className="back-to-top" aria-label="Voltar ao topo">
            Voltar ao topo
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>

        </article>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <span className="footer-copy">© 2026 Listinha</span>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app</a>
        </div>
      </footer>
    </>
  )
}
