import { getTranslations } from 'next-intl/server'
import SiteNav from '../../../components/SiteNav'
import { Link } from '../../../i18n/navigation'
import { BrandIcon } from '../../../components/Icon'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogIndex.meta' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://www.miseemcasa.com.br/${locale}/blog`,
      languages: {
        pt: 'https://www.miseemcasa.com.br/pt/blog',
        en: 'https://www.miseemcasa.com.br/en/blog',
        es: 'https://www.miseemcasa.com.br/es/blog',
        'x-default': 'https://www.miseemcasa.com.br/pt/blog',
      },
    },
  }
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
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
    locales: ['pt'],
  },
]

export default async function BlogPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('blogIndex')
  const tc = await getTranslations('common')
  const localePosts = posts.filter((p) => p.locales.includes(locale))

  return (
    <>
      <SiteNav />

      <main>
        {/* HERO DO BLOG */}
        <section className="blog-index-hero">
          <div className="container">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h1>{t('hero.title')}</h1>
            <p className="blog-index-sub">{t('hero.sub')}</p>
            <p className="blog-hero-desc">{t('hero.desc')}</p>
          </div>
        </section>

        {/* TEMAS */}
        <section className="blog-index-topics">
          <div className="container">
            <h2 className="blog-index-topics-title">{t('topics.title')}</h2>
            <div className="blog-index-topics-grid">
              <div className="blog-index-topic">
                <h3>{t('topics.t1Title')}</h3>
                <p>{t('topics.t1P1')}</p>
                <p>{t('topics.t1P2')}</p>
              </div>
              <div className="blog-index-topic">
                <h3>{t('topics.t2Title')}</h3>
                <p>{t('topics.t2P1')}</p>
                <p>{t('topics.t2P2')}</p>
              </div>
              <div className="blog-index-topic">
                <h3>{t('topics.t3Title')}</h3>
                <p>{t('topics.t3P1')}</p>
                <p>{t('topics.t3P2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* POSTS */}
        <section className="blog-index-posts">
          <div className="container">
            {localePosts.length > 0 ? (
              <div className="blog-index-grid">
                {localePosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
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
                      <span className="blog-card-link">{tc('readArticle')}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="blog-index-empty">
                <h2>{t('empty.title')}</h2>
                <p>{t('empty.desc')}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>{t('cta.text')}</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                {t('cta.button')}
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
          <p className="footer-copy">{tc('footerCopy')}</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">{tc('openAppArrow')}</a>
        </div>
      </footer>
    </>
  )
}
