import RevealObserver from '../../../../components/RevealObserver'
import { notFound } from 'next/navigation'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'O que é água tônica: para que serve e se faz mal à saúde',
  description: 'Água tônica é bebida gaseificada com quinino, criada contra a malária. Veja o que é, se faz bem ou mal, quantas calorias tem e como usar no gim-tônica.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-agua-tonica',
  },
  openGraph: {
    title: 'O que é água tônica: para que serve e se faz mal à saúde',
    description: 'Água tônica é bebida gaseificada com quinino, criada contra a malária. Veja o que é, se faz bem ou mal, quantas calorias tem e como usar no gim-tônica.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-agua-tonica',
    images: [
      {
        url: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Garrafa de água tônica sobre superfície neutra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O que é água tônica: para que serve e se faz mal à saúde',
    description: 'Água tônica é bebida gaseificada com quinino, criada contra a malária. Veja o que é, se faz bem ou mal, quantas calorias tem e como usar no gim-tônica.',
    images: ['https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Água tônica faz mal à saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não é "mal" no sentido de perigosa, mas também não faz bem no sentido que muita gente espera. É um refrigerante: tem tanto açúcar quanto uma cola comum, cerca de 9-10g por 100ml. Consumida com moderação, como qualquer refrigerante, não é problema. Tomada todo dia, entra na mesma conta de qualquer bebida açucarada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Água tônica tem álcool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Água tônica pura não tem álcool nenhum — é um refrigerante gaseificado com quinino. O álcool entra quando ela vira mixer, como no gim-tônica ou no vodka tônica. Sozinha, dá pra beber sem nenhum problema, inclusive por quem não bebe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre água tônica e soda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Soda (água com gás) é só água carbonatada, sem açúcar e sem sabor. Água tônica tem açúcar (ou adoçante na versão diet) e quinino, o que dá o amargor característico por trás do doce. Uma mata a sede sem calorias. A outra é, na prática, um refrigerante de sabor específico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas calorias tem uma lata de água tônica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma lata de 350ml de água tônica tradicional tem entre 120 e 140 kcal, valor parecido com o de uma lata de refrigerante de cola. Na versão diet ou zero açúcar, a mesma lata fica entre 0 e 4 kcal, porque o açúcar é trocado por adoçante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Água tônica zero existe e vale a pena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Existe, e é a versão mais vendida hoje em bares. Troca o açúcar por adoçante, mantém o quinino e o amargor. Vale a pena se você quer o gim-tônica sem as calorias do açúcar — o sabor final muda pouco, porque o amargor do quinino continua sendo o protagonista.',
      },
    },
    {
      '@type': 'Question',
      name: 'Criança pode tomar água tônica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em quantidade pequena e ocasional, não há motivo técnico para proibir — é um refrigerante como outro qualquer, dentro do padrão regulado pela Anvisa. O ponto de atenção é o mesmo de qualquer refrigerante: açúcar em excesso não é hábito recomendado para criança, então vale tratar como exceção, não como bebida do dia a dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para que mais serve a água tônica além do gim-tônica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona como base de qualquer drink que peça um amargor gaseificado — vodka tônica, drinks sem álcool com suco de frutas vermelhas, ou só ela com limão e gelo. Fora do copo, o uso é raro: o amargor residual não combina bem com a maioria das receitas doces ou salgadas.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'O que é água tônica: para que serve e se faz mal à saúde',
  description: 'Água tônica é bebida gaseificada com quinino, criada contra a malária. Veja o que é, se faz bem ou mal, quantas calorias tem e como usar no gim-tônica.',
  image: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
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
    '@id': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-agua-tonica',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/pt/blog' },
    { '@type': 'ListItem', position: 3, name: 'Água tônica', item: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-agua-tonica' },
  ],
}

export default function OQueEAguaTonica({ params }) {
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
            <li><a href="/pt/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Água tônica</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">3 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/pt/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Água tônica não é remédio nem detox — é refrigerante com uma história e tanto
          </h1>
          <p className="blog-desc">
            Aparece no gim-tônica e em toda festa que tem bar improvisado, mas quase ninguém sabe o que tem dentro da garrafa. Água tônica nasceu como remédio contra malária — hoje, é só amargor com açúcar e gás.
          </p>

          <div className="answer-box">
            <p>
              <strong>Água tônica</strong> é uma bebida gaseificada feita com água, açúcar (ou adoçante) e quinino — composto amargo extraído da casca da cinchona, árvore da América do Sul.
              Foi criada para disfarçar o gosto de um remédio antimalárico. Hoje, sozinha, é essencialmente um refrigerante amargo — sem efeito medicinal e com o mesmo açúcar de qualquer soda.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Garrafa de água tônica sobre superfície neutra"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice do artigo">
            <p className="toc-title">Neste artigo</p>
            <ol className="toc-list">
              <li><a href="#o-que-e">O que é água tônica</a></li>
              <li><a href="#historia">De onde veio o amargor</a></li>
              <li><a href="#faz-mal">Faz bem ou faz mal à saúde</a></li>
              <li><a href="#calorias">Calorias: tradicional vs zero</a></li>
              <li><a href="#como-usar">Para que serve na prática</a></li>
              <li><a href="#guardar">Como guardar depois de aberta</a></li>
              <li><a href="#faq">Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* O QUE É */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1556381/pexels-photo-1556381.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bebida gaseificada transparente servida em copo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ray Piedra / Pexels</p>
          </div>

          <h2 id="o-que-e" className="img-above">O que é água tônica</h2>

          <p>
            Água tônica é uma bebida gaseificada com quatro ingredientes-base: água, gás carbônico, açúcar (ou adoçante, na versão diet) e quinino. O quinino vem da casca da cinchona, árvore nativa dos Andes, e é ele o responsável pelo amargor que fica por trás do doce — a característica que separa a tônica de qualquer refrigerante comum.
          </p>
          <p>
            No Brasil, a quantidade de quinino é regulada: o padrão de identidade e qualidade de refrigerantes da Anvisa exige entre 3mg e 7mg de quinino a cada 100ml da bebida. É pouco — muito menos do que a dose usada como remédio contra malária no século 19, que ficava na casa de centenas de miligramas por dose.
          </p>
          <p>
            Isso explica por que a tônica de hoje não tem efeito medicinal nenhum. O quinino que sobrou é só sabor. Quem compra achando que está levando uma bebida "mais saudável" porque tem um nome de remédio está comprando refrigerante com marketing melhor.
          </p>

          {/* HISTÓRIA */}
          <h2 id="historia">De onde veio o amargor da água tônica</h2>

          <p>
            A história começa com os povos andinos, que já usavam a casca da cinchona contra febre havia séculos. Colonizadores europeus levaram o conhecimento para a Europa e, mais tarde, para a Índia — colônia britânica onde a malária era um problema sério para soldados e funcionários do império.
          </p>
          <p>
            O quinino em pó, sozinho, é amargo a ponto de ser quase impossível de engolir. A solução prática foi dissolver o pó em água com açúcar e um pouco de gás — o remédio virou bebida. A versão comercial da{' '}
            <a href="https://pt.wikipedia.org/wiki/%C3%81gua_t%C3%B4nica" target="_blank" rel="noopener">água tônica</a>{' '}
            foi patenteada na Inglaterra em 1858, já pensada para o consumo do dia a dia, não só como remédio.
          </p>
          <p>
            O gim entrou na história por conta prática: soldados britânicos misturavam a própria ração de gim ao remédio amargo para deixar o gosto mais tolerável. O gim-tônica nasceu como jeito de tomar remédio, não como drink de bar. Séculos depois, ninguém mais bebe pela malária — mas a combinação ficou.
          </p>

          {/* FAZ MAL */}
          <h2 id="faz-mal">Água tônica faz bem ou faz mal à saúde</h2>

          <p>
            A resposta direta: nem uma coisa, nem outra. Água tônica não é veneno, mas também não é a bebida "mais leve" que muita gente imagina por causa do nome. Na prática, é um refrigerante — com o mesmo tipo de açúcar e as mesmas calorias de uma cola comum.
          </p>
          <p>
            O quinino, na quantidade regulada hoje, não tem efeito terapêutico comprovado. Não trata cãibra, não substitui remédio, não "desincha". O que ele faz de verdade é dar sabor amargo — e é só isso.
          </p>
          <p>
            Isso é a piada recorrente de quem trabalha com nutrição: alguém pede água tônica achando que está fazendo escolha mais saudável do que um refrigerante de cola, e está tomando basicamente a mesma coisa com um nome mais sofisticado.
          </p>

          {/* CALORIAS */}
          <h2 id="calorias">Calorias: tradicional vs zero açúcar</h2>

          <p>
            A diferença de calorias entre a versão tradicional e a diet é onde a escolha realmente importa. Por 100ml:
          </p>

          <div className="blog-img-block" style={{ overflowX: 'auto' }}>
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Bebida (100ml)</th>
                  <th>Açúcar</th>
                  <th>Calorias</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Água tônica tradicional</td>
                  <td>9-10g</td>
                  <td>34-40 kcal</td>
                </tr>
                <tr>
                  <td>Refrigerante de cola comum</td>
                  <td>10-11g</td>
                  <td>40-42 kcal</td>
                </tr>
                <tr>
                  <td>Água tônica diet/zero</td>
                  <td>0g</td>
                  <td>0-1 kcal</td>
                </tr>
                <tr>
                  <td>Água com gás</td>
                  <td>0g</td>
                  <td>0 kcal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Numa dose de gim-tônica com 150ml de tônica tradicional, você adiciona cerca de 50-60 kcal só da bebida — antes de contar o gim. Trocar pela versão zero corta praticamente todo esse valor, sem mudar o amargor característico do drink.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4485382/pexels-photo-4485382.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bartender preparando coquetel com água tônica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Antoni Shkraba Studio / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Para que serve água tônica na prática</h2>

          <p>
            O uso mais comum, de longe, é como mixer. A proporção clássica do gim-tônica é 1 parte de gim para 2-3 partes de tônica, com bastante gelo e uma rodela de limão ou lima. É simples de acertar, e é basicamente impossível estragar a receita.
          </p>
          <p>
            Vodka tônica segue a mesma lógica, trocando o gim pela vodka — resultado mais neutro, menos aromático. Para quem não bebe, a tônica funciona sozinha com limão e folhas de hortelã, ou misturada a suco de frutas vermelhas para um mocktail rápido antes de qualquer festa.
          </p>
          <p>
            Fora do copo, o uso é raro. O amargor residual do quinino não combina bem com a maioria das receitas doces ou salgadas — é uma bebida de bar, não um ingrediente de cozinha no sentido tradicional.
          </p>

          <div className="blog-inline-cta">
            <p>Bebida esquecida na despensa some da lista. <em>O Mise lembra antes de você comprar duas.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Comece grátis →
            </a>
          </div>

          {/* GUARDAR */}
          <h2 id="guardar">Como guardar água tônica depois de aberta</h2>

          <p>
            Garrafa lacrada dura meses num armário fresco, longe de luz direta e calor — igual qualquer refrigerante. O problema começa depois de aberta: o gás começa a sair na hora, e em algumas horas na geladeira a tônica já perde parte da efervescência que faz diferença no copo.
          </p>
          <p>
            Se você só usa uma dose por vez, vale considerar as latinhas individuais em vez da garrafa grande — evita abrir uma tônica de 1 litro pra usar 150ml e esquecer o resto até ela ficar choca. É o mesmo raciocínio de qualquer refrigerante que só sai de vez em quando: comprar do tamanho certo evita desperdício.
          </p>
          <p>
            Se a água tônica é presença ocasional na sua casa — só quando tem visita ou festa —, vale manter na{' '}
            <a href="/funcionalidades/despensa">despensa do Mise</a>{' '}
            e na{' '}
            <a href="/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            como item avulso, não fixo. Assim você sabe se ainda tem uma garrafa fechada antes de comprar outra que vai sobrar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Perguntas frequentes sobre água tônica</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Água tônica faz mal à saúde?</p>
              <p className="faq-a">
                Não é "mal" no sentido de perigosa, mas também não faz bem no sentido que muita gente espera. É um refrigerante: tem tanto açúcar quanto uma cola comum, cerca de 9-10g por 100ml. Consumida com moderação, não é problema. Tomada todo dia, entra na mesma conta de qualquer bebida açucarada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Água tônica tem álcool?</p>
              <p className="faq-a">
                Não. Água tônica pura não tem álcool nenhum — é um refrigerante gaseificado com quinino. O álcool entra quando ela vira mixer, como no gim-tônica ou no vodka tônica. Sozinha, dá pra beber sem problema, inclusive por quem não bebe.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Qual a diferença entre água tônica e soda?</p>
              <p className="faq-a">
                Soda (água com gás) é só água carbonatada, sem açúcar e sem sabor. Água tônica tem açúcar (ou adoçante na versão diet) e quinino, o que dá o amargor característico por trás do doce. Uma mata a sede sem calorias. A outra é, na prática, um refrigerante de sabor específico.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Quantas calorias tem uma lata de água tônica?</p>
              <p className="faq-a">
                Uma lata de 350ml de água tônica tradicional tem entre 120 e 140 kcal, valor parecido com o de uma lata de refrigerante de cola. Na versão diet ou zero açúcar, a mesma lata fica entre 0 e 4 kcal, porque o açúcar é trocado por adoçante.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Água tônica zero existe e vale a pena?</p>
              <p className="faq-a">
                Existe, e é a versão mais vendida hoje em bares. Troca o açúcar por adoçante, mantém o quinino e o amargor. Vale a pena se você quer o gim-tônica sem as calorias do açúcar — o sabor final muda pouco, porque o amargor do quinino continua sendo o protagonista.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Criança pode tomar água tônica?</p>
              <p className="faq-a">
                Em quantidade pequena e ocasional, não há motivo técnico para proibir — é um refrigerante como outro qualquer, dentro do padrão regulado pela Anvisa. O ponto de atenção é o mesmo de qualquer refrigerante: açúcar em excesso não é hábito recomendado para criança, então vale tratar como exceção.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Para que mais serve a água tônica além do gim-tônica?</p>
              <p className="faq-a">
                Funciona como base de qualquer drink que peça um amargor gaseificado — vodka tônica, drinks sem álcool com suco de frutas vermelhas, ou só ela com limão e gelo. Fora do copo, o uso é raro: o amargor residual não combina bem com a maioria das receitas doces ou salgadas.
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
                Criador do Mise. Comprou uma garrafa de água tônica pra fazer gim-tônica pros amigos, usou dois dedos da garrafa e o resto ficou sem gás na geladeira até a visita seguinte.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe o que tem na despensa.<br />
              <em>Bora usar o Mise.</em>
            </h2>
            <p>
              Conecta despensa,{' '}
              <a href="/pt/blog/lista-basica-de-compras" style={{ color: 'inherit', textDecoration: 'underline' }}>lista de compras</a>{' '}
              e{' '}
              <a href="/pt/blog/lista-de-compras-mercado" style={{ color: 'inherit', textDecoration: 'underline' }}>mercado</a>{' '}
              num só lugar. Você compra o que vai usar — e a tônica não fica choca na geladeira.
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
          <a href="/pt/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
