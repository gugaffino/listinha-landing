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
  'abobrinha-calorias',
  'alcaparras',
  'alimentos-ricos-em-proteinas',
  'alimentos-sem-gluten',
  'arenque',
  'atum',
  'aveia-em-flocos-beneficios',
  'azeite-de-oliva',
  'batata-doce',
  'beneficios-da-cebola-roxa',
  'beneficios-do-cuscuz',
  'beneficios-do-pepino',
  'beneficios-do-rabanete',
  'bicarbonato-de-sodio',
  'cardamomo-para-que-serve',
  'damascos-secos',
  'dieta-carnivora',
  'dieta-low-carb-cardapio',
  'dieta-sem-acucar',
  'espinafre-beneficios',
  'feijao-preto-beneficios',
  'frutas-citricas',
  'kiwi-beneficios',
  'lista-de-compras-mercado',
  'lista-de-compras-saudavel',
  'oleo-de-canola',
  'oleo-de-gergelim',
  'o-que-e-alho',
  'o-que-e-amendoa',
  'o-que-e-arroz-parboilizado',
  'o-que-e-avela',
  'o-que-e-cavala',
  'o-que-e-cream-cheese',
  'o-que-e-granola',
  'o-que-e-maca',
  'o-que-e-margarina',
  'o-que-e-mirtilo',
  'o-que-e-nabo',
  'o-que-e-pao-branco',
  'o-que-e-raiz-forte',
  'o-que-e-ricota',
  'o-que-e-stevia',
  'o-que-e-tahine',
  'para-que-serve-o-oregano',
  'pimenta-vermelha',
  'quinoa-para-que-serve',
  'vinagre-balsamico',
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
