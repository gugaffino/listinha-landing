import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Caderno de receitas: como organizar e não perder a que funciona',
  description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/caderno-de-receitas',
  },
  openGraph: {
    title: 'Caderno de receitas: como organizar e não perder a que funciona',
    description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/caderno-de-receitas',
    images: [
      {
        url: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Caderno de receitas aberto com escrita à mão sobre mesa de madeira com ingredientes ao redor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caderno de receitas: como organizar e não perder a que funciona',
    description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
    images: ['https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que colocar num caderno de receitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O mínimo útil: nome da receita, lista de ingredientes com quantidades, modo de preparo em passos numerados, e o tempo de preparo. Opcional mas valioso: rendimento (para quantas pessoas), variações que você já testou, e observações pessoais sobre ajustes. Foto só vale se você tiver costume de tirar — caso contrário ocupa espaço sem usar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como organizar um caderno de receitas por categorias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organize do jeito que você usa, não do jeito que parece mais bonito. As categorias mais práticas: café da manhã, almoço (pratos principais), sopas e caldos, lanches, sobremesas. Se você cozinha muito uma categoria específica — massas, frango, sem glúten — cria uma seção pra ela. Evite categorias que nunca vão ter mais de uma receita.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale mais a pena caderno de receitas físico ou digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Físico é mais fácil de começar e tem o ritual da escrita. Digital é mais fácil de manter, de buscar e de conectar aos ingredientes que você tem em casa. O problema do físico é que não sincroniza com a lista de compras — você precisa relê-lo antes de ir ao mercado. Se você vai usar receitas para planejar o que comprar, o digital compensa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual app usar para caderno de receitas digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do que você precisa. Notion e Google Docs funcionam se você quer personalização total e não precisa de integração com lista de compras. Apps específicos de receitas — como o Mise — conectam a receita diretamente à lista de compras e à despensa, o que elimina a etapa de reler antes de ir ao mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como não perder as receitas do caderno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No físico: tire fotos das páginas e guarde em pasta no celular ou nuvem. Evite anotar em papel solto ou post-it dentro do caderno — somem. No digital: prefira apps com backup automático a arquivos locais. A maior causa de perda não é o suporte, é anotar num lugar e nunca mais encontrar. Ter um só lugar é mais importante do que ter o suporte certo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como fazer um caderno de receitas da família?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comece pedindo que cada pessoa anote uma receita que faz regularmente — não as especiais de fim de ano, mas as do dia a dia. O caderno de família fica mais rico quando tem as receitas de verdade, com as adaptações de cada um. Anote o nome de quem passou a receita e qualquer história por trás. O digital facilita contribuições remotas.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Caderno de receitas: como organizar e não perder a que funciona',
  description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
  image: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
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
    '@id': 'https://www.miseemcasa.com.br/blog/caderno-de-receitas',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Caderno de receitas', item: 'https://www.miseemcasa.com.br/blog/caderno-de-receitas' },
  ],
}

export default function CadernoDeReceitas({ params }) {
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
            <li className="breadcrumb-current" aria-current="page">Caderno de receitas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-05-28">28 mai. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Caderno de receitas: guia prático de como montar e manter organizado
          </h1>
          <p className="blog-desc">
            Todo mundo tem receitas espalhadas — no YouTube favorito, no print do Instagram, no grupo da família, no post-it colado na geladeira. Um caderno de receitas resolve isso. O problema é que a maioria das pessoas cria o caderno e abandona na segunda semana.
          </p>

          <div className="answer-box">
            <p>
              <strong>Caderno de receitas</strong> é o lugar único onde você guarda as receitas que já testou e vão fazer parte da sua rotina de cozinha. Pode ser físico (caderno, fichário) ou digital (app, planilha). O que faz funcionar não é o formato — é ter um critério claro pra o que entra e uma estrutura que você consegue manter.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Caderno de receitas aberto com escrita à mão sobre mesa de madeira clara com ingredientes e utensílios ao redor"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Katya Wolf / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#por-que-ter">Por que ter um caderno de receitas</a></li>
              <li><a href="#o-que-incluir">O que incluir em cada receita</a></li>
              <li><a href="#categorias">Como organizar por categorias</a></li>
              <li><a href="#fisico-ou-digital">Físico ou digital: diferença prática</a></li>
              <li><a href="#receitas-e-lista">Receitas e lista de compras: o que muda quando estão conectados</a></li>
              <li><a href="#vale-a-pena">Vale a pena montar um?</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* POR QUE TER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5124880/pexels-photo-5124880.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa folheando livro de receitas aberto sobre mesa enquanto cozinha — organização na cozinha"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: cottonbro studio / Pexels</p>
          </div>

          <h2 id="por-que-ter" className="img-above">Por que ter um caderno de receitas</h2>

          <p>
            O favorito do YouTube não é caderno de receitas. É uma fila de vídeos que você vai "assistir depois". Depois não existe no YouTube. A receita que você viu na terça, achou incrível e quis fazer no sábado — você vai passar 20 minutos procurando antes de desistir e fazer ovo mexido.
          </p>
          <p>
            O problema não é falta de receita. É excesso de receita no lugar errado. Todo mundo tem centenas de receitas salvas, marcadas, printadas. Quase nenhuma delas foi feita mais de uma vez. O caderno de receitas resolve exatamente isso: guarda só o que você já fez e vai fazer de novo.
          </p>
          <p>
            Essa é a diferença entre uma coleção e um repertório. Coleção cresce sem critério. Repertório é o que você realmente usa na cozinha. Um caderno de receitas deveria ser um repertório — não uma biblioteca de aspirações culinárias.
          </p>
          <p>
            Outro benefício concreto: planejamento de refeições. Quando você tem suas receitas num lugar só, montar um cardápio semanal leva minutos. Você olha o que tem, escolhe, e a lista de ingredientes sai dali. Sem isso, o planejamento começa do zero toda semana.
          </p>

          {/* O QUE INCLUIR */}
          <h2 id="o-que-incluir">O que incluir em cada receita</h2>

          <p>
            O erro mais comum é copiar a receita como ela está no site — com toda a introdução, a história do avô, os três parágrafos antes dos ingredientes. Isso funciona no blog. No caderno, você vai abrir na hora de cozinhar com as mãos sujas e vai precisar encontrar a informação em dois segundos.
          </p>
          <p>
            O mínimo que funciona:
          </p>
          <ul>
            <li><strong>Nome da receita</strong> — do jeito que você vai procurar, não o nome elegante do original</li>
            <li><strong>Ingredientes com quantidades</strong> — em ordem de uso, se possível</li>
            <li><strong>Modo de preparo em passos numerados</strong> — curtos. "Refogar a cebola até dourar" é suficiente</li>
            <li><strong>Tempo de preparo e rendimento</strong> — quantas pessoas serve, quanto tempo leva no total</li>
          </ul>
          <p>
            O que vale adicionar se você tem costume: variações que testou ("fica melhor com alho-poró"), substituições que funcionam, e erros que já cometeu. Esses detalhes não estão no original e fazem o caderno ser seu.
          </p>
          <p>
            Foto: só se você tira foto de verdade enquanto cozinha. Foto por obrigação ocupa espaço e não ajuda. O caderno que você realmente usa raramente é o mais bonito.
          </p>

          {/* CATEGORIAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8367791/pexels-photo-8367791.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Caderno aberto com receitas organizadas e marcadores coloridos sobre superfície clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vlada Karpovich / Pexels</p>
          </div>

          <h2 id="categorias" className="img-above">Como organizar por categorias</h2>

          <p>
            Organize do jeito que você usa, não do jeito que parece mais completo. Um índice bonito com doze categorias que ficam vazias é pior do que três categorias cheias.
          </p>
          <p>
            Um ponto de partida funcional:
          </p>
          <ul>
            <li><strong>Café da manhã e lanches</strong> — mingau, ovos, panqueca, vitamina</li>
            <li><strong>Almoço — pratos principais</strong> — frango, carne, peixe, vegetariano</li>
            <li><strong>Sopas, caldos e cremes</strong> — especialmente para o inverno</li>
            <li><strong>Guarnições e acompanhamentos</strong> — arroz, feijão, saladas, legumes</li>
            <li><strong>Sobremesas</strong> — bolos, doces, frutas preparadas</li>
          </ul>
          <p>
            Se você cozinha muito uma categoria específica — massas, receitas sem glúten, pratos para congelar — cria uma seção só pra ela. Se você nunca vai ter mais de duas receitas numa categoria, não precisa de seção.
          </p>
          <p>
            No físico, use abas ou divisórias. No digital, pastas ou tags. O que importa é encontrar a receita em menos de 30 segundos sem lembrar o nome exato.
          </p>

          {/* FÍSICO OU DIGITAL */}
          <h2 id="fisico-ou-digital">Físico ou digital: diferença prática</h2>

          <p>
            Não existe o certo. Existe o que você vai manter.
          </p>

          <h3>Caderno físico</h3>
          <p>
            Mais fácil de começar. Nenhuma configuração, nenhuma conta, nenhum app pra aprender. O ato de escrever à mão tem um efeito real: você filtra melhor o que vale copiar quando custa tempo anotar. Cadernos físicos tendem a ter receitas mais usadas porque o critério de entrada é mais alto.
          </p>
          <p>
            Os problemas: não tem busca. Não sincroniza com nada. E a receita do frango que você sabe que está lá em algum lugar vai demorar três minutos pra achar se você tiver 80 páginas. Tire fotos das páginas periodicamente para backup.
          </p>

          <h3>Caderno digital</h3>
          <p>
            Mais fácil de manter no longo prazo. Você busca por ingrediente, por nome, por categoria. Editar é trivial — quando testar uma variação da receita, você atualiza sem riscar ou reescrever a página. E, dependendo do app, dá pra conectar a receita com o que você tem na despensa e com a lista de compras.
          </p>
          <p>
            O problema é o atrito pra começar: requer escolher uma ferramenta, configurar, e criar o hábito de abrir ela em vez do YouTube. Quem usa Notion, Google Docs ou planilha precisa aceitar que a busca é manual e que não tem integração automática com compras.
          </p>

          {/* RECEITAS E LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6996156/pexels-photo-6996156.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pessoa fazendo lista de compras no caderno enquanto olha para a receita aberta na mesa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pavel Danilyuk / Pexels</p>
          </div>

          <h2 id="receitas-e-lista" className="img-above">Receitas e lista de compras: o que muda quando estão conectados</h2>

          <p>
            Esse é o passo que a maioria dos cadernos de receitas — físicos ou digitais — não dá.
          </p>
          <p>
            O fluxo normal sem integração: você decide o que vai cozinhar na semana, abre cada receita uma por uma, anota os ingredientes num papel à parte, vai ao mercado. Isso leva tempo e é fácil de errar — especialmente quando você esquece de checar o que já tem na despensa antes de comprar.
          </p>
          <p>
            O fluxo com receitas conectadas à lista e à despensa é diferente. Você escolhe o que vai cozinhar. O sistema cruza os ingredientes das receitas com o que você já tem em casa. A lista sai com só o que falta. Você vai ao mercado com o que precisa de verdade, não com a memória do que achava que precisava.
          </p>
          <p>
            No <a href="/funcionalidades/receitas">Mise</a>, as receitas ficam no mesmo lugar que a{' '}
            <a href="/funcionalidades/despensa">despensa</a> e a{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>. Você escolhe a receita, ele já sabe o que tem em casa e monta a lista do que falta. É o que transforma um caderno de receitas de repositório em ferramenta de cozinha de verdade.
          </p>

          <div className="blog-inline-cta">
            <p>A cozinha não devia te custar tanta cabeça. <em>O Mise resolve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* VALE A PENA */}
          <h2 id="vale-a-pena">Vale a pena montar um caderno de receitas?</h2>

          <p>
            Se você cozinha com frequência e tem receitas que repete, sim. O caderno elimina o tempo de busca, reduz o desperdício de ingredientes comprados errados e torna o planejamento semanal mais rápido.
          </p>
          <p>
            Se você cozinha raramente e segue receita nova toda vez, o custo de manter um caderno pode ser maior do que o benefício. Nesse caso, uma pasta de favoritos bem organizada no YouTube já resolve.
          </p>
          <p>
            O critério de entrada faz toda a diferença. Um caderno de 20 receitas que você realmente usa é mais valioso do que 200 receitas que você nunca vai fazer. Comece pequeno. Anote só o que já testou e vai repetir. O caderno cresce com a sua rotina — não com a sua ambição culinária do domingo.
          </p>
          <p>
            Receita anotada que você nunca fez não é caderno de receitas. É lista de intenções.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre caderno de receitas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">O que colocar num caderno de receitas?</p>
              <p className="faq-a">
                O mínimo útil: nome, lista de ingredientes com quantidades, modo de preparo em passos numerados, tempo e rendimento. Opcional mas valioso: variações que você testou, substituições que funcionam e erros que já cometeu. Foto só se você tiver o hábito de tirar — senão ocupa espaço sem ajudar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como organizar um caderno de receitas por categorias?</p>
              <p className="faq-a">
                Organize do jeito que você usa, não do jeito mais bonito. Categorias práticas: café da manhã, almoço, sopas, guarnições, sobremesas. Se você cozinha muito uma categoria específica — massas, sem glúten, congelados — cria seção pra ela. Evite categorias que nunca vão ter mais de uma receita.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Vale mais a pena caderno físico ou digital?</p>
              <p className="faq-a">
                Físico é mais fácil de começar e filtra melhor o que entra. Digital é mais fácil de manter, de buscar e de conectar à lista de compras. Se você vai usar receitas para planejar o que comprar, o digital compensa. O melhor é o que você vai realmente manter.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual app usar para caderno de receitas digital?</p>
              <p className="faq-a">
                Notion e Google Docs funcionam se você quer personalização e não precisa de integração com lista de compras. O Mise conecta a receita diretamente à lista de compras e à despensa, eliminando a etapa de reler a receita antes de ir ao mercado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como não perder as receitas do caderno?</p>
              <p className="faq-a">
                No físico: tire fotos das páginas e guarde na nuvem. Evite anotar em papel solto — somem. No digital: prefira apps com backup automático. A maior causa de perda não é o suporte, é anotar em vários lugares e não encontrar mais. Um único lugar, bem mantido, vale mais do que vários.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Como fazer um caderno de receitas da família?</p>
              <p className="faq-a">
                Comece pedindo que cada pessoa anote uma receita do dia a dia — não as especiais de natal, as do cotidiano. Anote o nome de quem passou e qualquer detalhe que só essa pessoa sabe. O digital facilita contribuições de quem mora longe. O físico tem o charme da letra de cada um.
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
                Criador do Mise. Tem um caderno físico com 12 receitas — todas testadas, todas repetidas. O resto fica no{' '}
                <a href="/funcionalidades/receitas">app</a>.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Suas receitas, sua despensa, sua lista.<br />
              <em>Tudo junto no Mise.</em>
            </h2>
            <p>
              Escolhe a receita, o Mise já sabe o que tem em casa e monta a lista do que falta.
              Sem papel, sem esquecer ingrediente, sem surpresa no mercado.
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
