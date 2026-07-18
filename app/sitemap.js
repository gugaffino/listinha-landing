const BASE_URL = 'https://www.miseemcasa.com.br'
const LOCALES = ['pt', 'en', 'es']

const TRANSLATED_PATHS = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/funcionalidades', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/funcionalidades/lista-de-compras', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/despensa', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/cardapio-semanal', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/funcionalidades/receitas', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
]

const BLOG_SLUGS_PT = [
  'lista-basica-de-compras',
  'lista-de-compras-para-casa-nova',
  'como-organizar-a-despensa',
  'como-economizar-no-mercado',
  'o-que-e-cranberry',
  'o-que-e-pistache',
  'caderno-de-receitas',
  'para-que-serve-oleo-de-linhaca',
  'o-que-e-chia',
  'o-que-e-curcuma',
  'lista-de-compras-do-mes',
  'alimentos-ricos-em-magnesio',
  'cardapio-semanal-simples-caseiro',
  'para-que-serve-noz-moscada',
  'o-que-e-gengibre',
  'o-que-e-pomelo',
]

export default function sitemap() {
  const translatedEntries = TRANSLATED_PATHS.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  )

  const blogEntries = BLOG_SLUGS_PT.map((slug) => ({
    url: `${BASE_URL}/pt/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...translatedEntries, ...blogEntries]
}
