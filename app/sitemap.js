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

const BLOG_POSTS = [
  { slug: 'lista-basica-de-compras', locales: ['pt'] },
  { slug: 'lista-de-compras-para-casa-nova', locales: ['pt'] },
  { slug: 'como-organizar-a-despensa', locales: ['pt'] },
  { slug: 'como-economizar-no-mercado', locales: ['pt'] },
  { slug: 'o-que-e-cranberry', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-pistache', locales: ['pt', 'en', 'es'] },
  { slug: 'caderno-de-receitas', locales: ['pt', 'en', 'es'] },
  { slug: 'para-que-serve-oleo-de-linhaca', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-chia', locales: ['pt'] },
  { slug: 'o-que-e-curcuma', locales: ['pt'] },
  { slug: 'lista-de-compras-do-mes', locales: ['pt', 'en', 'es'] },
  { slug: 'alimentos-ricos-em-magnesio', locales: ['pt', 'en', 'es'] },
  { slug: 'cardapio-semanal-simples-caseiro', locales: ['pt', 'en', 'es'] },
  { slug: 'para-que-serve-noz-moscada', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-gengibre', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-pomelo', locales: ['pt', 'en', 'es'] },
  { slug: 'abobrinha-calorias', locales: ['pt', 'en', 'es'] },
  { slug: 'alcaparras', locales: ['pt', 'en', 'es'] },
  { slug: 'alimentos-ricos-em-proteinas', locales: ['pt', 'en', 'es'] },
  { slug: 'alimentos-sem-gluten', locales: ['pt', 'en', 'es'] },
  { slug: 'arenque', locales: ['pt', 'en', 'es'] },
  { slug: 'atum', locales: ['pt', 'en', 'es'] },
  { slug: 'aveia-em-flocos-beneficios', locales: ['pt'] },
  { slug: 'azeite-de-oliva', locales: ['pt', 'en', 'es'] },
  { slug: 'batata-doce', locales: ['pt', 'en', 'es'] },
  { slug: 'beneficios-da-cebola-roxa', locales: ['pt', 'en', 'es'] },
  { slug: 'beneficios-do-cuscuz', locales: ['pt', 'en', 'es'] },
  { slug: 'beneficios-do-pepino', locales: ['pt', 'en', 'es'] },
  { slug: 'beneficios-do-rabanete', locales: ['pt', 'en', 'es'] },
  { slug: 'bicarbonato-de-sodio', locales: ['pt', 'en', 'es'] },
  { slug: 'cardamomo-para-que-serve', locales: ['pt', 'en', 'es'] },
  { slug: 'damascos-secos', locales: ['pt', 'en', 'es'] },
  { slug: 'dieta-carnivora', locales: ['pt', 'en', 'es'] },
  { slug: 'dieta-low-carb-cardapio', locales: ['pt', 'en', 'es'] },
  { slug: 'dieta-sem-acucar', locales: ['pt', 'en', 'es'] },
  { slug: 'espinafre-beneficios', locales: ['pt', 'en', 'es'] },
  { slug: 'feijao-preto-beneficios', locales: ['pt', 'en', 'es'] },
  { slug: 'frutas-citricas', locales: ['pt', 'en', 'es'] },
  { slug: 'kiwi-beneficios', locales: ['pt', 'en', 'es'] },
  { slug: 'lista-de-compras-mercado', locales: ['pt', 'en', 'es'] },
  { slug: 'lista-de-compras-saudavel', locales: ['pt'] },
  { slug: 'o-que-e-agua-tonica', locales: ['pt'] },
  { slug: 'oleo-de-canola', locales: ['pt', 'en', 'es'] },
  { slug: 'oleo-de-gergelim', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-alho', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-amendoa', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-arroz-parboilizado', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-avela', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-cavala', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-cream-cheese', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-granola', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-maca', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-margarina', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-mirtilo', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-nabo', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-pao-branco', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-raiz-forte', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-ricota', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-stevia', locales: ['pt', 'en', 'es'] },
  { slug: 'o-que-e-tahine', locales: ['pt', 'en', 'es'] },
  { slug: 'para-que-serve-o-oregano', locales: ['pt', 'en', 'es'] },
  { slug: 'pimenta-vermelha', locales: ['pt', 'en', 'es'] },
  { slug: 'quinoa-para-que-serve', locales: ['pt', 'en', 'es'] },
  { slug: 'vinagre-balsamico', locales: ['pt', 'en', 'es'] },
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

  const blogEntries = BLOG_POSTS.flatMap(({ slug, locales }) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  )

  return [...translatedEntries, ...blogEntries]
}
