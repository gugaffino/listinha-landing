import NavDropdown from '../../components/NavDropdown'
import { BrandIcon } from '../../components/Icon'

export const metadata = {
  title: 'Blog — Mise',
  description: 'Dicas de organização de cozinha, listas de compras e planejamento semanal.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog',
  },
}

const posts = [
  {
    slug: 'lista-basica-de-compras',
    tag: 'Lista de compras',
    title: 'Lista básica de compras: guia com 80+ itens pra copiar',
    description: 'Os 7 grupos essenciais, quanto custa por mês por perfil de família e dicas pra economizar no supermercado.',
    img: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Carrinho de compras em supermercado',
    date: '2025-03-10',
    dateLabel: 'Mar 2025',
  },
  {
    slug: 'lista-de-compras-para-casa-nova',
    tag: 'Casa nova',
    title: 'Lista de compras para casa nova: o que não pode faltar',
    description: '60+ itens organizados por cômodo, o que comprar no primeiro dia e estimativa de custo por perfil.',
    img: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher carregando caixa ao entrar em apartamento novo',
    date: '2025-04-02',
    dateLabel: 'Abr 2025',
  },
  {
    slug: 'como-organizar-a-despensa',
    tag: 'Organização',
    title: 'Como organizar a despensa: guia prático em 7 passos',
    description: '7 passos pra esvaziar, agrupar, rotular e manter organizado — incluindo como organizar a geladeira por zonas.',
    img: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Despensa organizada com potes transparentes e prateleiras bem distribuídas',
    date: '2026-05-21',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'como-economizar-no-mercado',
    tag: 'Economia',
    title: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
    description: 'Economizar no mercado começa antes de sair de casa. Lista, despensa e cardápio conectados cortam até 27% do gasto mensal.',
    img: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família fazendo compras no supermercado com lista na mão',
    date: '2026-05-22',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-cranberry',
    tag: 'Ingredientes',
    title: 'O que é cranberry: para que serve e como usar no dia a dia',
    description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
    img: 'https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cranberries frescos em bandejas no mercado — fruta vermelha da América do Norte',
    date: '2026-05-25',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-pistache',
    tag: 'Ingredientes',
    title: 'O que é pistache: origem, tipos e se vale colocar na lista',
    description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
    img: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pistaches frescos com casca entreaberta mostrando o interior verde',
    date: '2026-05-27',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'caderno-de-receitas',
    tag: 'Organização',
    title: 'Caderno de receitas: como organizar e não perder a que funciona',
    description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
    img: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Caderno de receitas aberto com escrita à mão sobre mesa de madeira com ingredientes ao redor',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'para-que-serve-oleo-de-linhaca',
    tag: 'Ingredientes',
    title: 'Óleo de linhaça: para que serve e como usar na cozinha',
    description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba como usar sem errar, a diferença da semente e como guardar do jeito certo.',
    img: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Frasco de óleo de linhaça ao lado de sementes de linhaça douradas sobre superfície de madeira',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-chia',
    tag: 'Ingredientes',
    title: 'Chia tem proteína? O que é, para que serve e como usar',
    description: 'Chia é uma semente com ômega-3, fibras e proteína. Veja o que é, para que serve, como fazer o gel e o pudim, e quando vale mais que a linhaça.',
    img: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sementes de chia pretas em close-up sobre superfície branca — textura detalhada',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-curcuma',
    tag: 'Ingredientes',
    title: 'O que é cúrcuma: benefícios, como usar e onde comprar',
    description: 'Cúrcuma é o tempero amarelo do curry e do arroz. Saiba o que é, para que serve a curcumina, por que precisa de pimenta preta e como guardar na despensa.',
    img: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pó de cúrcuma amarelo-alaranjado em colher de madeira sobre superfície escura',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'lista-de-compras-do-mes',
    tag: 'Lista de compras',
    title: 'Lista de compras do mês: quantidades e como gastar menos',
    description: 'Organize a compra mensal por categoria, estime as quantidades certas por tamanho de família e evite as idas extras ao mercado no meio da semana.',
    img: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher empurrando carrinho de compras em corredor de supermercado com frutas e verduras',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'alimentos-ricos-em-magnesio',
    tag: 'Ingredientes',
    title: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
    description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
    img: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flatlay de amêndoas, sementes, lentilhas e nozes em tigelas de porcelana sobre superfície de madeira',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'cardapio-semanal-simples-caseiro',
    tag: 'Organização',
    title: 'Cardápio semanal simples caseiro: como montar do zero',
    description: 'Como montar um cardápio da semana: exemplo de 7 dias, como transformar em lista de compras e dicas pra não abandonar.',
    img: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família cozinhando juntos na cozinha de casa — cardápio semanal simples caseiro',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'para-que-serve-noz-moscada',
    tag: 'Ingredientes',
    title: 'Para que serve noz-moscada: usos e como usar na cozinha',
    description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
    img: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Especiarias aromáticas em tigelas de cerâmica branca sobre superfície de madeira',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-gengibre',
    tag: 'Ingredientes',
    title: 'O que é gengibre: tipos, usos na cozinha e como guardar',
    description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
    img: 'https://images.pexels.com/photos/161556/pexels-photo-161556.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Raízes de gengibre fresco ao lado de pó de gengibre em recipiente metálico',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-pomelo',
    tag: 'Ingredientes',
    title: 'O que é pomelo: diferença da toranja e como comer',
    description: 'Pomelo é a maior fruta cítrica do mundo. Saiba o que é, a diferença pra toranja, como comer, onde comprar no Brasil e se vale colocar na lista.',
    img: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de frutas cítricas dispostas em mármore branco — limão, laranja e toranja em flatlay',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-granola',
    tag: 'Ingredientes',
    title: 'O que é granola: composição, tipos e como escolher',
    description: 'Granola é mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e como escolher no mercado.',
    img: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Granola com aveia, sementes e frutas secas em close-up — textura detalhada',
    date: '2026-06-02',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'oleo-de-canola',
    tag: 'Ingredientes',
    title: 'Óleo de canola: o que é, para que serve e como usar',
    description: 'O que é óleo de canola, se faz mal, qual o ponto de fumaça e quando usar no lugar do azeite — guia direto ao ponto.',
    img: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Óleo vegetal sendo vertido em frigideira durante cozimento em cozinha doméstica',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'dieta-low-carb-cardapio',
    tag: 'Organização',
    title: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
    description: '7 dias de refeições low carb do café ao jantar, com lista de compras pronta e dicas para não abandonar na quarta-feira.',
    img: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flat-lay de alimentos low carb: abacate, folhas verdes, oleaginosas e vegetais frescos',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <nav className="nav-links">
            <NavDropdown />
            <a href="/blog" className="nav-link" style={{color: 'var(--carvao)'}}>Blog</a>
          </nav>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>

      <main>
        {/* HERO DO BLOG */}
        <section className="blog-index-hero">
          <div className="container">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h1>Dicas de quem faz lista de verdade</h1>
            <p className="blog-index-sub">Organização de cozinha, supermercado e planejamento semanal — sem frescura.</p>
            <p className="blog-hero-desc">
              Aqui você encontra guias práticos sobre listas de compras, organização de despensa
              e planejamento de refeições. Sem técnicas mirabolantes nem produtos caros — só o
              que funciona pra quem cozinha em casa de verdade. Cada artigo vem com listas pra
              copiar, estimativas de custo e respostas diretas às dúvidas mais comuns.
            </p>
          </div>
        </section>

        {/* TEMAS */}
        <section className="blog-index-topics">
          <div className="container">
            <h2 className="blog-index-topics-title">O que você encontra aqui</h2>
            <div className="blog-index-topics-grid">
              <div className="blog-index-topic">
                <h3>Listas de compras</h3>
                <p>
                  Guias completos com itens organizados por grupo, estimativas de custo por perfil
                  de família e dicas práticas para diferentes situações — casa nova, mês apertado,
                  família grande, casal. Cada lista foi pensada para você copiar e adaptar, não
                  começar do zero toda semana.
                </p>
                <p>
                  Você vai encontrar desde a lista básica de supermercado com os 80 itens que
                  quase todo mundo precisa até listas específicas por situação: mudança, festa,
                  churrasco, cesta básica. Sem itens exóticos que você nunca vai usar.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Organização de despensa e geladeira</h3>
                <p>
                  Como organizar a despensa por zonas, que recipientes usar, como rotular, por onde
                  começar quando está tudo bagunçado — e como manter organizado no dia a dia sem
                  precisar de um domingo inteiro para reorganizar tudo de novo.
                </p>
                <p>
                  Sem produtos caros, sem estética de revista de decoração. O foco é funcional:
                  o que vai diminuir o desperdício, facilitar o acesso aos ingredientes mais usados
                  e fazer a despensa trabalhar pela sua rotina de cozinha.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Planejamento de refeições e economia</h3>
                <p>
                  Como montar um cardápio semanal que respeite o tempo disponível e o orçamento,
                  por que planejar antes de ir ao mercado faz diferença na conta do mês e quais
                  hábitos simples cortam o gasto sem abrir mão do que você gosta de comer.
                </p>
                <p>
                  Pesquisas de comportamento de consumo mostram que compras sem lista custam entre
                  20% e 30% a mais. Os artigos aqui explicam como esse dado se traduz na sua
                  rotina — e o que fazer a respeito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POSTS */}
        <section className="blog-index-posts">
          <div className="container">
            <div className="blog-index-grid">
              {posts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
                  <div className="blog-index-img">
                    <img
                      src={post.img}
                      alt={post.imgAlt}
                      width="800"
                      height="480"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-index-body">
                    <div className="blog-index-meta">
                      <span className="blog-card-tag">{post.tag}</span>
                      <span className="blog-index-date">{post.dateLabel}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="blog-card-link">Ler artigo →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>Já que você chegou até aqui — testa o app. É grátis.</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                Abrir o Mise →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
    </>
  )
}
