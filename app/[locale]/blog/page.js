import { getTranslations } from 'next-intl/server'
import SiteNav from '../../../components/SiteNav'
import LanguageSwitcher from '../../../components/LanguageSwitcher'
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
    tag: { pt: 'Lista de compras', en: 'Shopping List', es: 'Lista de compras' },
    title: {
      pt: 'Lista básica de compras: guia com 80+ itens pra copiar',
      en: 'Basic Grocery List: The Complete Guide (80+ Items)',
      es: 'Lista básica del supermercado: guía con más de 80 productos',
    },
    description: {
      pt: 'Lista básica de compras com os 7 grupos essenciais, 80+ itens pra copiar, como adaptar ao seu perfil, quanto custa por mês e 5 dicas pra economizar no supermercado.',
      en: 'A basic grocery list covering all 7 essential categories, 80+ items to copy, how to adjust it to your household, monthly cost by household size, and 5 tips to save at checkout.',
      es: 'Lista básica del supermercado con las 7 categorías esenciales, más de 80 productos para copiar, cómo adaptarla a tu hogar, cuánto cuesta al mes y 5 consejos para ahorrar.',
    },
    img: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Carrinho de compras em supermercado',
    date: '2025-03-10',
    dateLabel: 'Mar 2025',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'lista-de-compras-para-casa-nova',
    tag: { pt: 'Casa nova', en: 'New Home', es: 'Casa nueva' },
    title: {
      pt: 'Lista de compras para casa nova: o que não pode faltar',
      en: 'New Home Checklist: 60+ Things You Actually Need (Room by Room)',
      es: 'Lista de compras para casa nueva: 60+ cosas que sí necesitas',
    },
    description: {
      pt: 'Lista de compras para casa nova: 60+ itens organizados por cômodo, o que comprar no primeiro dia, estimativa de custo por perfil e lista pronta pra copiar.',
      en: 'A room-by-room new home checklist with 60+ essentials, what to buy on day one, the items everyone forgets, and a real cost estimate by household size.',
      es: 'Lista de compras para casa nueva con 60+ artículos por habitación, qué comprar el primer día, lo que la gente siempre olvida y cuánto cuesta según cada perfil.',
    },
    img: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher carregando caixa ao entrar em apartamento novo',
    date: '2025-04-02',
    dateLabel: 'Abr 2025',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'como-organizar-a-despensa',
    tag: { pt: 'Organização', en: 'Organization', es: 'Organización' },
    title: {
      pt: 'Como organizar a despensa: guia prático em 7 passos',
      en: 'How to Organize a Pantry: A Practical 7-Step Guide',
      es: 'Cómo organizar la despensa: guía práctica en 7 pasos',
    },
    description: {
      pt: 'Como organizar a despensa do zero: 7 passos pra esvaziar, agrupar, rotular e manter tudo no lugar — com dicas extras pra geladeira organizada.',
      en: 'Learn how to organize a pantry from scratch: empty it out, group by category, apply FIFO, and label everything — plus a simple system for the fridge too.',
      es: 'Cómo organizar la despensa desde cero: 7 pasos para vaciarla, agrupar por categorías, rotular y mantener todo en su lugar — más un sistema simple para el refrigerador.',
    },
    img: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Despensa organizada com potes transparentes e prateleiras bem distribuídas',
    date: '2026-05-21',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'como-economizar-no-mercado',
    tag: { pt: 'Economia', en: 'Savings', es: 'Ahorro' },
    title: {
      pt: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
      en: 'How to Save Money on Groceries: 12 Habits That Actually Work',
      es: 'Cómo ahorrar en el supermercado: 12 hábitos que sí funcionan',
    },
    description: {
      pt: 'Como economizar no mercado começa antes de sair de casa. Descubra 12 hábitos práticos sobre lista, despensa e cardápio semanal que cortam o gasto sem sacrificar o que você come.',
      en: 'Saving money on groceries starts before you leave the house. 12 practical habits about lists, pantry, and meal planning that cut spending without cutting what you eat.',
      es: 'Ahorrar en el súper empieza antes de salir de casa. 12 hábitos prácticos de lista, despensa y menú semanal que reducen el gasto sin sacrificar lo que comes.',
    },
    img: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família fazendo compras no supermercado com lista na mão',
    date: '2026-05-22',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-cranberry',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é cranberry: para que serve e como usar no dia a dia',
      en: 'Cranberry Benefits: What the Science Actually Says',
      es: 'Arándano rojo: para qué sirve y si vale la pena comprarlo',
    },
    description: {
      pt: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
      en: 'Cranberry is famous for UTI prevention, but does it work? Here’s what fresh, dried, juice, and supplements actually do — and how to use the fruit itself, not just the marketing around it.',
      es: 'El arándano rojo (cranberry) es una fruta ácida asociada a la salud urinaria. Qué es, para qué sirve realmente, dónde conseguirlo en América Latina y si vale la pena sumarlo a tu lista.',
    },
    img: 'https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cranberries frescos em bandejas no mercado — fruta vermelha da América do Norte',
    date: '2026-05-25',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-pistache',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é pistache: origem, tipos e se vale colocar na lista',
      en: 'What Are Pistachios? Raw vs Roasted, Uses, and Storage',
      es: 'Pistacho: qué es, tipos y si vale la pena comprarlo',
    },
    description: {
      pt: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
      en: 'Pistachios are seeds with a hard shell and a bright green center. See raw vs roasted, shelled vs unshelled, how many to eat, and how to store them.',
      es: 'El pistacho es un fruto seco de cáscara dura con centro verde y sabor único. Qué es, los tipos que encuentras en tiendas, dónde comprarlo y si vale el precio.',
    },
    img: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pistaches frescos com casca entreaberta mostrando o interior verde',
    date: '2026-05-27',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'caderno-de-receitas',
    tag: { pt: 'Organização', en: 'Organization', es: 'Organización' },
    title: {
      pt: 'Caderno de receitas: como organizar e não perder a que funciona',
      en: 'Recipe Notebook: How to Organize It and Keep Using It',
      es: 'Cuaderno de recetas: cómo organizarlo y no abandonarlo',
    },
    description: {
      pt: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
      en: 'A recipe notebook only works if you keep using it past week two. What to write down, how to organize it by category, and when digital beats paper for good.',
      es: 'Un cuaderno de recetas solo funciona si lo sigues usando después de la segunda semana. Qué anotar, cómo organizarlo por categorías y cuándo pasar a digital.',
    },
    img: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Caderno de receitas aberto com escrita à mão sobre mesa de madeira com ingredientes ao redor',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'para-que-serve-oleo-de-linhaca',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Óleo de linhaça: para que serve e como usar na cozinha',
      en: 'Flaxseed Oil: Benefits, How to Use It, and How to Store It',
      es: 'Aceite de linaza: para qué sirve y cómo usarlo en la cocina',
    },
    description: {
      pt: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba como usar sem errar, a diferença da semente e como guardar do jeito certo.',
      en: 'Flaxseed oil is a concentrated plant source of omega-3. See the real heart and skin benefits, why it should never touch a hot pan, and how to store it so it lasts.',
      es: 'El aceite de linaza es una fuente concentrada de omega-3 vegetal. Conoce los beneficios reales para el corazón y la piel, por qué nunca debe ir a la sartén y cómo guardarlo bien.',
    },
    img: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Frasco de óleo de linhaça ao lado de sementes de linhaça douradas sobre superfície de madeira',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-chia',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Chia tem proteína? O que é, para que serve e como usar',
      en: 'Chia Seeds: Protein, Benefits, and How to Use Them',
      es: 'Semillas de chía: ¿tienen proteína? Beneficios y cómo usarlas',
    },
    description: {
      pt: 'Chia é uma semente pequena com muito ômega-3, fibras e proteína. Entenda o que é, para que serve, como fazer o gel, e quando vale mais que a linhaça.',
      en: 'Chia seeds pack fiber, omega-3, and a rare plant-based complete protein. See the real numbers, how the gel works, and when chia beats flaxseed.',
      es: 'La chía tiene fibra, omega-3 y una proteína vegetal casi completa. Conoce las cifras reales, cómo funciona el gel y cuándo conviene más que la linaza.',
    },
    img: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sementes de chia pretas em close-up sobre superfície branca — textura detalhada',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-curcuma',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é cúrcuma: benefícios, como usar e onde comprar',
      en: 'Turmeric: What It Actually Does, and How to Use It Right',
      es: 'Cúrcuma: para qué sirve, cómo usarla y cómo guardarla',
    },
    description: {
      pt: 'Cúrcuma é o tempero amarelo que colore curry, arroz e sopas. Saiba o que é, para que serve a curcumina, como absorver melhor e onde comprar no Brasil.',
      en: 'Turmeric is the earthy yellow spice behind curry and golden milk. What curcumin really does, why black pepper matters for absorption, and how to cook, buy, and store it.',
      es: 'La cúrcuma es la especia amarilla del curry y la leche dorada. Qué es la curcumina, por qué necesita pimienta negra para absorberse y cómo cocinar, comprar y guardarla.',
    },
    img: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pó de cúrcuma amarelo-alaranjado em colher de madeira sobre superfície escura',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'lista-de-compras-do-mes',
    tag: { pt: 'Lista de compras', en: 'Shopping list', es: 'Lista de compras' },
    title: {
      pt: 'Lista de compras do mês: quantidades e como gastar menos',
      en: 'Monthly Grocery List: Quantities and How to Spend Less',
      es: 'Lista del súper para el mes: cantidades y cómo ahorrar',
    },
    description: {
      pt: 'Organize a compra mensal por categoria, estime as quantidades certas por tamanho de família e evite as idas extras ao mercado no meio da semana.',
      en: 'A monthly grocery list with quantities by household size, what to buy once a month versus every week, and practical ways to keep the checkout total under control.',
      es: 'Lista de mercado mensual con cantidades según el tamaño de la familia, qué comprar una vez al mes y qué comprar cada semana, y cómo no pasarte del presupuesto.',
    },
    img: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher empurrando carrinho de compras em corredor de supermercado com frutas e verduras',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'alimentos-ricos-em-magnesio',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
      en: 'Foods High in Magnesium: Full List and Daily Amounts',
      es: 'Alimentos ricos en magnesio: lista y cantidades diarias',
    },
    description: {
      pt: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
      en: 'Magnesium hides in pumpkin seeds, black beans, and dark chocolate. See 12 foods with mg per serving and how to fit more into your week without a supplement.',
      es: 'El magnesio está en semillas de calabaza, frijol negro y chocolate amargo. Mira 12 fuentes con la cantidad por porción y cómo sumarlas sin necesitar suplemento.',
    },
    img: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flatlay de amêndoas, sementes, lentilhas e nozes em tigelas de porcelana sobre superfície de madeira',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'cardapio-semanal-simples-caseiro',
    tag: { pt: 'Organização', en: 'Organization', es: 'Organización' },
    title: {
      pt: 'Cardápio semanal simples caseiro: como montar do zero',
      en: 'Simple Weekly Meal Plan: How to Build One From Scratch',
      es: 'Menú semanal sencillo y casero: cómo armarlo desde cero',
    },
    description: {
      pt: 'Cardápio semanal simples caseiro: exemplo prático de 7 dias com almoço e jantar, como transformar em lista de compras e dicas pra manter funcionando toda semana.',
      en: 'A simple weekly meal plan: a practical 7-day example with lunch and dinner, how to turn it into a shopping list, and tips to keep it going every week.',
      es: 'Menú semanal sencillo y casero: ejemplo práctico de 7 días con almuerzo y cena, cómo convertirlo en lista de compras y consejos para mantenerlo cada semana.',
    },
    img: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família cozinhando juntos na cozinha de casa — cardápio semanal simples caseiro',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'para-que-serve-noz-moscada',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Para que serve noz-moscada: usos e como usar na cozinha',
      en: 'Nutmeg: What It’s For and How to Use It in Cooking',
      es: 'Nuez moscada: para qué sirve y cómo usarla en la cocina',
    },
    description: {
      pt: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
      en: 'Nutmeg deepens the flavor of creamy dishes and sweets — it’s not the star ingredient. See what it is, how much to use, and how to store it without losing the aroma.',
      es: 'La nuez moscada profundiza el sabor de platos cremosos y postres, no es el ingrediente principal. Qué es, cuánta usar y cómo guardarla sin que pierda el aroma.',
    },
    img: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Especiarias aromáticas em tigelas de cerâmica branca sobre superfície de madeira',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-gengibre',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é gengibre: tipos, usos na cozinha e como guardar',
      en: 'Ginger 101: Fresh vs Ground, Uses, and How to Store It',
      es: 'Jengibre: fresco o en polvo, usos en la cocina y cómo conservarlo',
    },
    description: {
      pt: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
      en: 'Ginger is a spicy, fragrant rhizome used fresh, dried, or ground. See the real difference between fresh and ground ginger, how to cook with it, and how to store it.',
      es: 'El jengibre es un rizoma de sabor picante y aroma intenso. La diferencia real entre fresco y en polvo, cómo usarlo en tus recetas y cómo guardarlo sin que se eche a perder.',
    },
    img: 'https://images.pexels.com/photos/161556/pexels-photo-161556.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Raízes de gengibre fresco ao lado de pó de gengibre em recipiente metálico',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-pomelo',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é pomelo: diferença da toranja e como comer',
      en: "Pomelo vs Grapefruit: What's Different and How to Eat One",
      es: 'Pomelo chino: qué es y en qué se diferencia del pomelo o la toronja',
    },
    description: {
      pt: 'Pomelo é a maior fruta cítrica do mundo. Saiba o que é, a diferença pra toranja, como comer, onde comprar no Brasil e se vale colocar na lista.',
      en: "Pomelo is the largest citrus fruit on earth and grapefruit's direct ancestor, not the same fruit. What sets them apart, the nutrition facts, and how to eat one.",
      es: 'El pomelo chino es la fruta cítrica más grande del mundo y el ancestro directo de tu pomelo (o toronja) de siempre, pero no es la misma fruta. Diferencias, nutrición y cómo comerlo.',
    },
    img: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de frutas cítricas dispostas em mármore branco — limão, laranja e toranja em flatlay',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-granola',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é granola: composição, tipos e como escolher',
      en: 'What Is Granola? Nutrition, Sugar, and How to Pick a Good One',
      es: 'Qué es la granola: composición, tipos y cómo elegirla',
    },
    description: {
      pt: 'Granola é uma mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e o que olhar no rótulo antes de comprar.',
      en: 'Granola is toasted oats mixed with nuts, seeds, and dried fruit. See what’s actually in it, how many calories per serving, and what to check on the label before buying.',
      es: 'La granola es una mezcla de cereales tostados con frutos secos y fruta deshidratada. Qué es, sus tipos, cómo consumirla y qué revisar en la etiqueta antes de comprarla.',
    },
    img: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Granola com aveia, sementes e frutas secas em close-up — textura detalhada',
    date: '2026-06-02',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'oleo-de-canola',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Óleo de canola: o que é, para que serve e como usar',
      en: 'Is Canola Oil Bad for You? Smoke Point, Uses & Facts',
      es: 'Aceite de Canola: ¿Es Malo para la Salud? Guía y Usos',
    },
    description: {
      pt: 'O que é óleo de canola, se faz mal, qual o ponto de fumaça e quando usar no lugar do azeite — guia direto ao ponto.',
      en: 'Canola oil has the lowest saturated fat of any common cooking oil and a smoke point around 400°F. Here is what the "seed oil" debate actually gets right — and wrong.',
      es: 'El aceite de canola tiene la grasa saturada más baja entre los aceites comunes y un punto de humo de 204 °C. Qué dice la ciencia sobre si es malo, y cómo usarlo en la cocina.',
    },
    img: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Óleo vegetal sendo vertido em frigideira durante cozimento em cozinha doméstica',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'dieta-low-carb-cardapio',
    tag: { pt: 'Organização', en: 'Organization', es: 'Organización' },
    title: {
      pt: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
      en: '7-Day Low Carb Meal Plan: Meals Ready to Copy',
      es: 'Menú low carb para 7 días: comidas listas para copiar',
    },
    description: {
      pt: '7 dias de refeições low carb do café ao jantar, com lista de compras pronta e dicas para não abandonar na quarta-feira.',
      en: 'A 7-day low carb meal plan with breakfast, lunch, and dinner ready to go. Includes a shopping list and tips for not quitting by Wednesday.',
      es: 'Menú low carb con 7 días de comidas listas para desayuno, almuerzo y cena. Incluye lista de compras y consejos para no abandonar el miércoles.',
    },
    img: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flat-lay de alimentos low carb: abacate, folhas verdes, oleaginosas e vegetais frescos',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'bicarbonato-de-sodio',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Bicarbonato de sódio: o que é, usos na cozinha e dicas',
      en: 'Baking Soda: Kitchen Uses, Storage & Substitution Tips',
      es: 'Bicarbonato de sodio: para qué sirve y cómo usarlo',
    },
    description: {
      pt: 'Bicarbonato de sódio serve para fermentar massas, amaciar carne, cozinhar feijão e limpar panelas. Saiba a diferença do fermento e como usar certo.',
      en: 'Baking soda leavens batter, tenderizes meat, speeds up bean cooking, and scrubs pots. Learn how it differs from baking powder and how long it actually lasts.',
      es: 'El bicarbonato de sodio leuda masas, ablanda carne, acelera la cocción de frijoles y limpia ollas. Aprende la diferencia con el polvo de hornear y cómo guardarlo.',
    },
    img: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Vista de cima de tigela com ingredientes de confeitaria em superfície branca',
    date: '2026-06-04',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'lista-de-compras-saudavel',
    tag: { pt: 'Lista de compras', en: 'Shopping List', es: 'Lista de compras' },
    title: {
      pt: 'Lista de compras saudável: guia completo e o que incluir',
      en: 'Healthy Grocery List: What to Buy by Food Group (+ Budget)',
      es: 'Lista de compras saludable: qué incluir por grupo de alimentos',
    },
    description: {
      pt: 'Lista de compras saudável organiza verduras, proteínas e grãos antes de ir ao mercado. Guia com categorias, custo por mês e dicas pra não sair do plano.',
      en: 'A healthy grocery list organizes produce, protein, and whole grains before you ever hit the store. Categories, a realistic monthly budget, and tips to stick to the plan.',
      es: 'Una lista de compras saludable organiza verduras, proteínas y granos antes de ir al súper. Guía con categorías, presupuesto mensual y tips para no salirte del plan.',
    },
    img: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Verduras e frutas frescas dispostas sobre mesa — vista de cima para lista de compras saudável',
    date: '2026-06-04',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'dieta-carnivora',
    tag: { pt: 'Organização', en: 'Organization', es: 'Organización' },
    title: {
      pt: 'Dieta carnívora: o que é, alimentos e como começar',
      en: 'Carnivore Diet: What to Eat, 7-Day Menu, and the Risks',
      es: 'Dieta carnívora: qué comer, menú de 7 días y riesgos',
    },
    description: {
      pt: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
      en: 'The carnivore diet cuts out every plant food and keeps only meat, fish, and eggs. What to eat, what to skip, a 7-day sample menu, and the risks worth knowing first.',
      es: 'La dieta carnívora elimina todo alimento vegetal y deja solo carne, pescado y huevo. Qué puedes comer, qué queda fuera, un menú de 7 días y los riesgos que debes conocer.',
    },
    img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Bife suculento grelhado com molho em prato — dieta carnívora',
    date: '2026-06-05',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'batata-doce',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Batata doce: o que é, valor nutricional e como usar',
      en: 'Sweet Potato: Nutrition Facts, Types, and How to Cook It',
      es: 'Camote: información nutricional, tipos y cómo cocinarlo',
    },
    description: {
      pt: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo IG. Tipos, como escolher no mercado e como usar de verdade na cozinha.',
      en: 'Sweet potatoes pack beta-carotene, fiber, and slow-digesting carbs. See the nutrition breakdown, main varieties, and how to store and cook them without waste.',
      es: 'El camote (batata, boniato) aporta betacaroteno, fibra y carbohidratos de absorción lenta. Descubre su valor nutricional, variedades y cómo guardarlo y cocinarlo sin desperdiciar nada.',
    },
    img: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Batatas doces laranjas frescas em close-up sobre superfície escura',
    date: '2026-06-05',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'beneficios-do-rabanete',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Benefícios do rabanete: o que é e como usar na cozinha',
      en: 'Radish Benefits: Nutrition, Uses, and Why It’s Worth Buying',
      es: 'Beneficios del rábano: nutrición, usos y si vale la pena comprarlo',
    },
    description: {
      pt: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Veja os benefícios, o valor nutricional e como usar esse legume barato sem desperdício.',
      en: 'Radish has vitamin C, fiber, and just 16 calories per 100g. See the health benefits, the nutrition facts, and how to actually use this cheap vegetable in the kitchen.',
      es: 'El rábano tiene vitamina C, fibra y apenas 16 calorías por 100g. Conoce sus beneficios, su valor nutricional y cómo usarlo de verdad en la cocina sin desperdiciarlo.',
    },
    img: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Rabanetes vermelhos frescos ao lado de cenouras sobre superfície de madeira',
    date: '2026-06-06',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'espinafre-beneficios',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Espinafre: benefícios, valor nutricional e como usar',
      en: 'Spinach Benefits: Nutrition Facts, Raw vs Cooked, and How to Use It',
      es: 'Espinaca: beneficios, propiedades nutricionales y cómo usarla',
    },
    description: {
      pt: 'Espinafre tem 23 kcal por 100g e vitamina K acima de 400% do VD. Conheça os benefícios, o que muda entre cru e cozido e como usar de verdade na cozinha.',
      en: 'Spinach has 23 calories per 100g and over 400% of your daily vitamin K in one serving. See the real benefits, what changes when you cook it, and how to use it without a salad every night.',
      es: 'La espinaca tiene 23 kcal por cada 100 g y más del 400% del valor diario de vitamina K. Conoce sus beneficios, qué cambia entre cruda y cocida, y cómo usarla sin volverte loco.',
    },
    img: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Folhas frescas de espinafre sobre fundo verde — close-up detalhado',
    date: '2026-06-06',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'alcaparras',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
      en: 'Capers: What They Are, How to Use Them, and Substitutes',
      es: 'Alcaparras: qué son, tipos y cómo usarlas en la cocina',
    },
    description: {
      pt: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
      en: 'Capers are pickled flower buds with a salty, briny bite. Learn what they are, how to use them in cooking, the best substitutes, and how to store them.',
      es: 'Las alcaparras son botones florales encurtidos, de sabor salado y ácido. Descubre qué son, la diferencia con los alcaparrones, y cómo usarlas en la cocina.',
    },
    img: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Alcaparras em pote de vidro — botões florais conservados em salmoura',
    date: '2026-06-07',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'kiwi-beneficios',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
      en: 'Kiwi Fruit Benefits: Nutrition, Vitamin C, and How to Eat It',
      es: 'Beneficios del kiwi: nutrientes, vitamina C y cómo comerlo',
    },
    description: {
      pt: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e apenas 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
      en: 'Kiwi has more vitamin C than an orange, an enzyme that helps digest protein, and just 61 calories per 100g. See the real benefits, green vs gold, and how to store it.',
      es: 'El kiwi tiene más vitamina C que la naranja, una enzima que ayuda a digerir proteína y solo 61 kcal por 100 g. Beneficios reales, kiwi verde vs dorado y cómo guardarlo.',
    },
    img: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Kiwis frescos fatiados ao meio mostrando o interior verde com sementes pretas',
    date: '2026-06-08',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-cream-cheese',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é cream cheese: tipos, usos e diferença do requeijão',
      en: 'What Is Cream Cheese? Types, Uses, and Cream Cheese vs Neufchâtel',
      es: 'Qué es el queso crema: tipos, usos y diferencia con el mascarpone',
    },
    description: {
      pt: 'Cream cheese é um queijo cremoso macio com sabor levemente ácido, vindo dos EUA. Saiba o que é, tipos, como usar na cozinha e a diferença do requeijão.',
      en: 'Cream cheese is a soft, mildly tangy fresh cheese invented in the US in 1872. See the types you’ll find at the store, how it compares to Neufchâtel, and how to cook with it.',
      es: 'El queso crema es un queso suave y untable, de sabor ligeramente ácido, originario de Estados Unidos. Qué es, sus tipos, cómo usarlo y en qué se diferencia del mascarpone.',
    },
    img: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sanduíche com cream cheese e tomates — queijo cremoso macio sobre pão',
    date: '2026-06-08',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-mirtilo',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é mirtilo: tipos, benefícios e se vale o preço',
      en: 'Blueberry Benefits: Nutrition, Fresh vs Frozen, and How to Store Them',
      es: 'Arándano azul: beneficios, nutrición y si es mejor fresco o congelado',
    },
    description: {
      pt: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
      en: 'Blueberries are small, dark berries packed with anthocyanins. See the real nutrition numbers, whether fresh or frozen is better, and how to keep a carton from going soft in three days.',
      es: 'El arándano azul es una fruta pequeña y oscura, rica en antocianinas. Conoce los datos nutricionales reales, si el congelado es tan bueno como el fresco y cómo conservarlo sin que se eche a perder en tres días.',
    },
    img: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mirtilos frescos em close-up — fruta azul-arroxeada rica em antocianinas',
    date: '2026-06-09',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-maca',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é maçã: tipos, calorias e como usar na cozinha',
      en: 'Apples: Types, Nutrition Facts, and Best Uses in the Kitchen',
      es: 'Manzana: tipos, valor nutricional y usos en la cocina',
    },
    description: {
      pt: 'Fuji, gala ou verde: cada tipo tem uso diferente na cozinha. Veja calorias, benefícios e como escolher no mercado.',
      en: 'A medium apple has about 95 calories and 4g of fiber. Learn the differences between Honeycrisp, Granny Smith, Fuji, and Gala — and which one to bake, cook, or eat raw.',
      es: 'La manzana tiene unas 52 kcal por 100g y aporta fibra soluble y vitamina C. Conoce los tipos (gala, verde, roja, amarilla), cuál usar en cada receta y cómo guardarla.',
    },
    img: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Maçã vermelha fresca em close-up sobre superfície escura — fruta da variedade gala',
    date: '2026-06-10',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-arroz-parboilizado',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
      en: 'Parboiled Rice: What It Is, Benefits, and How to Cook It',
      es: 'Arroz parbolizado: qué es, beneficios y cómo cocinarlo',
    },
    description: {
      pt: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
      en: 'Parboiled rice is steamed under pressure before milling, which keeps more nutrients than white rice. See how it compares to brown rice and how to cook it right.',
      es: 'El arroz parbolizado se cocina al vapor con cáscara antes de pulirse, lo que conserva más nutrientes que el arroz blanco. Diferencias con el integral y cómo prepararlo.',
    },
    img: 'https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Bowl de arroz cozido com grãos soltos sobre superfície de madeira clara',
    date: '2026-06-10',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'azeite-de-oliva',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Azeite de oliva extra virgem: benefícios e como usar',
      en: 'Extra Virgin Olive Oil: Benefits, Types, and Can You Fry With It',
      es: 'Aceite de oliva extra virgen: beneficios, tipos y cómo usarlo',
    },
    description: {
      pt: 'Azeite de oliva extra virgem tem gorduras insaturadas e ação anti-inflamatória comprovada. Veja os tipos, como usar, quanto consumir por dia e como guardar.',
      en: 'Extra virgin olive oil is rich in monounsaturated fat and polyphenols with real cardiovascular benefits. See the types, whether you can fry with it, how much to use daily, and how to store it.',
      es: 'El aceite de oliva extra virgen tiene grasas insaturadas y acción antiinflamatoria comprobada. Los tipos, si se puede freír con él, cuánto tomar al día y cómo guardarlo.',
    },
    img: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pessoa despejando azeite de oliva extra virgem sobre salada fresca com tomates',
    date: '2026-06-11',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-alho',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Alho: o que é, benefícios e como usar na cozinha',
      en: 'Garlic 101: Health Benefits, Types, and How to Store It',
      es: 'Ajo: beneficios, tipos y cómo conservarlo en casa',
    },
    description: {
      pt: 'Saiba o que é alho, os tipos disponíveis, como usar cru ou cozido, os benefícios comprovados e como guardar sem perder o aroma.',
      en: 'Garlic is a pungent bulb in the onion family. See what it is, the main types, how to cook with it, the benefits backed by science, and how to store it right.',
      es: 'El ajo es un bulbo de la familia de la cebolla. Qué tipos existen, cómo usarlo en la cocina, los beneficios reales según la ciencia y cómo guardarlo para que dure.',
    },
    img: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cabeças de alho sobre superfície marrom — bulbos inteiros com dentes visíveis',
    date: '2026-06-12',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'beneficios-do-pepino',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Benefícios do pepino: tabela nutricional e como usar',
      en: 'Cucumber Nutrition: Calories, Benefits, and How to Use It',
      es: 'Beneficios del pepino: tabla nutricional y cómo usarlo',
    },
    description: {
      pt: 'Pepino tem 16 kcal por 100g e 95% de água. Conheça os benefícios para saúde, o valor nutricional completo, os tipos no Brasil e como usar na cozinha.',
      en: 'Cucumber is about 15 calories per 100g and 95% water. See the full nutrition breakdown, health benefits, cucumber types, and how to use it beyond salad.',
      es: 'El pepino tiene entre 12 y 16 kcal por 100 g y más del 95% de agua. Conoce sus beneficios, el valor nutricional completo, los tipos que existen y cómo usarlo en la cocina.',
    },
    img: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pepinos frescos inteiros empilhados em close-up — vegetais verdes brilhantes',
    date: '2026-06-13',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-ricota',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Ricota: o que é, diferença do cottage e como usar',
      en: 'What Is Ricotta? Ricotta vs Cottage Cheese and How to Use It',
      es: 'Qué es la ricota: diferencia con el requesón y cómo usarla',
    },
    description: {
      pt: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
      en: 'Ricotta is made from whey, not curdled milk — that is what separates it from cottage cheese. See the real differences, the nutrition numbers, and how to cook with it.',
      es: 'La ricota se hace con el suero de la leche, no con la leche cuajada. Descubre la diferencia real con el requesón, su valor nutricional y cómo usarla en la cocina.',
    },
    img: 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Close-up de queijo fresco branco e cremoso — ricota fresca para receitas',
    date: '2026-06-13',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'lista-de-compras-mercado',
    tag: { pt: 'Lista de compras', en: 'Shopping list', es: 'Lista de compras' },
    title: {
      pt: 'Lista de compras mercado: como organizar e gastar menos',
      en: 'Grocery List by Category: How to Shop Faster and Spend Less',
      es: 'Lista del súper por categorías: cómo organizarla y ahorrar',
    },
    description: {
      pt: 'Lista de compras para o mercado por categoria: hortifruti, carnes, laticínios, limpeza. Guia completo com dicas para gastar menos no supermercado.',
      en: 'A grocery list organized by category — produce, meat, dairy, pantry, household — plus what to check before you shop and five habits that keep the checkout total in check.',
      es: 'Lista del súper organizada por categoría — frutas y verduras, carnes, lácteos, despensa, limpieza — más lo que revisar antes de salir y cinco hábitos para no gastar de más.',
    },
    img: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família fazendo compras no supermercado com lista de compras na mão',
    date: '2026-06-14',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-cavala',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
      en: 'Mackerel Nutrition: More Omega-3 Than Salmon, Half the Price',
      es: 'Caballa: valor nutricional, mercurio y cómo prepararla',
    },
    description: {
      pt: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão e o atum em conserva. Saiba o que é, onde comprar e como preparar.',
      en: 'Mackerel is an oily fish with about 5,100mg of omega-3 per 100g — more than salmon. What it is, fresh vs canned, the mercury question, and how to cook it.',
      es: 'La caballa es un pescado azul con unos 5.100mg de omega-3 por cada 100g — más que el salmón. Qué es, fresca o en lata, el tema del mercurio y cómo cocinarla.',
    },
    img: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cavala azul fresca sobre gelo em peixaria — peixe inteiro com coloração azul metálica',
    date: '2026-06-14',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'alimentos-ricos-em-proteinas',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: '10 alimentos ricos em proteínas para o dia a dia',
      en: '10 High-Protein Foods You Probably Already Have',
      es: '10 alimentos ricos en proteína que ya tienes en casa',
    },
    description: {
      pt: 'Os 10 alimentos ricos em proteínas mais práticos para quem cozinha em casa: ovos, frango, feijão e mais. Quantidade por porção e como incluir sem complicar.',
      en: 'The 10 most practical high-protein foods for home cooking: eggs, chicken, beans, and more. Protein per serving and how to fit more in without overhauling your diet.',
      es: 'Los 10 alimentos con más proteína para cocinar en casa: huevo, pollo, frijoles y más. Cuánta proteína aporta cada uno y cómo sumarla sin complicarte.',
    },
    img: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flatlay de alimentos nutritivos variados — fontes de proteínas incluindo ovos e nozes',
    date: '2026-06-15',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-margarina',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Margarina: o que é, diferença da manteiga e quando usar',
      en: 'Margarine vs. Butter: The Real Difference, Explained',
      es: 'Margarina vs. mantequilla: la diferencia real, explicada',
    },
    description: {
      pt: 'Margarina é feita de óleos vegetais hidrogenados. Saiba a diferença da manteiga, os tipos disponíveis e quando usar cada uma em receitas.',
      en: "Margarine is made from vegetable oils, not milk fat. See how it actually differs from butter, whether it's healthier since the trans fat ban, and when to use each.",
      es: 'La margarina se hace con aceites vegetales, no con crema de leche. Te contamos en qué se diferencia de la mantequilla, si es más sana desde la prohibición de grasas trans y cuándo usar cada una.',
    },
    img: 'https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pessoa espalhando manteiga ou margarina sobre fatia de pão — spread cremoso no café da manhã',
    date: '2026-06-15',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'frutas-citricas',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Frutas cítricas: quais são, benefícios e como usar',
      en: 'Citrus Fruits: Types, Vitamin C, and How to Use Them',
      es: 'Frutas cítricas: tipos, vitamina C y cómo usarlas',
    },
    description: {
      pt: 'Laranja, limão, tangerina, pomelo: guia completo das frutas cítricas com benefícios da vitamina C e dicas para escolher no mercado.',
      en: 'Oranges, lemons, limes, mandarins, and grapefruit: what actually counts as citrus, how much vitamin C each one has, and how to pick, store, and cook with them.',
      es: 'Naranja, limón, mandarina, toronja: qué frutas son realmente cítricas, cuánta vitamina C tiene cada una y cómo elegirlas, guardarlas y usarlas en la cocina.',
    },
    img: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de laranja fresca em close-up mostrando o interior suculento e segmentos cítricos',
    date: '2026-06-16',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-amendoa',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Amêndoa: o que é, benefícios e como usar na cozinha',
      en: 'Almonds: Raw vs Roasted, Nutrition, and How Many to Eat',
      es: 'Almendras: qué son, beneficios y cuántas comer al día',
    },
    description: {
      pt: 'O que é amêndoa, para que serve, quantas comer por dia, a diferença entre crua e torrada e como guardar em casa.',
      en: 'What almonds actually are, the real difference between raw and roasted, how many to eat a day, and how to store a bag so it never goes stale.',
      es: 'Qué son las almendras, sus beneficios reales, cuántas comer al día, la diferencia entre crudas y tostadas, y cómo guardarlas en casa sin que se echen a perder.',
    },
    img: 'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Amêndoas cruas espalhadas em close, mostrando a textura natural da semente',
    date: '2026-06-17',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'alimentos-sem-gluten',
    tag: { pt: 'Alimentação', en: 'Food', es: 'Alimentación' },
    title: {
      pt: 'Alimentos sem glúten: lista completa para o mercado',
      en: 'Gluten-Free Foods: The Complete List for Grocery Shopping',
      es: 'Alimentos sin gluten: la lista completa para hacer las compras',
    },
    description: {
      pt: 'Arroz, milho, batata e carnes frescas são sem glúten. Veja lista completa, o que evitar e como ler o rótulo na hora da compra.',
      en: 'Rice, corn, potatoes, fresh meat, and most fruits and vegetables are naturally gluten-free. See the full list, where gluten hides, and how to actually read a label.',
      es: 'El arroz, el maíz, la papa, las carnes frescas y casi todas las frutas y verduras son naturalmente sin gluten. Mira la lista completa, dónde se esconde el gluten y cómo leer una etiqueta.',
    },
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Tigelas coloridas com arroz, quinoa e vegetais frescos — alimentos naturalmente sem glúten',
    date: '2026-06-17',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'dieta-sem-acucar',
    tag: { pt: 'Alimentação', en: 'Nutrition', es: 'Alimentación' },
    title: {
      pt: 'Dieta sem açúcar: o que comer, evitar e como fazer',
      en: 'No-Sugar Diet: What to Eat, What to Cut, and How to Start',
      es: 'Dieta sin azúcar: qué comer, qué evitar y cómo empezar',
    },
    description: {
      pt: 'Guia completo sobre dieta sem açúcar: alimentos permitidos, o que evitar no supermercado e como começar sem sofrimento. Dicas práticas para o dia a dia.',
      en: 'A practical guide to a no-sugar diet: what you can eat, where added sugar hides on labels, and how to cut it out without giving up in a week.',
      es: 'Guía práctica sobre la dieta sin azúcar: qué puedes comer, dónde se esconde el azúcar añadido en las etiquetas y cómo dejarlo sin abandonar a la primera semana.',
    },
    img: 'https://images.pexels.com/photos/3621169/pexels-photo-3621169.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mesa com alimentos naturais sem açúcar adicionado — frutas frescas, legumes e grãos integrais',
    date: '2026-06-18',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-pao-branco',
    tag: { pt: 'Alimentação', en: 'Nutrition', es: 'Alimentación' },
    title: {
      pt: 'Pão branco: o que é, calorias e como escolher no mercado',
      en: 'White Bread: Nutrition, Calories, and How to Choose It Well',
      es: 'Pan blanco: qué es, calorías y cómo elegirlo bien',
    },
    description: {
      pt: 'Pão branco é feito de farinha refinada — menos fibra, índice glicêmico mais alto. Saiba quantas calorias tem, o que muda pro integral e como escolher bem.',
      en: 'White bread is made from refined flour — less fiber, higher glycemic index. See how many calories it has, how it compares to whole wheat, and how to pick a good loaf.',
      es: 'El pan blanco se hace con harina refinada — menos fibra, índice glucémico más alto. Cuántas calorías tiene, qué cambia frente al integral y cómo elegir bien.',
    },
    img: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de pão branco sobre prato branco',
    date: '2026-06-18',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-nabo',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Nabo: o que é, para que serve e como usar na cozinha',
      en: 'Turnip 101: Nutrition, Benefits, and How to Cook It',
      es: 'Nabo: qué es, sus beneficios y cómo cocinarlo bien',
    },
    description: {
      pt: 'Nabo é um legume raiz com 35 calorias por 100g, vitamina C e fibras. Aprenda o que é, como usar em sopas, purês e assados — e quando vale a pena comprar.',
      en: 'Turnip is a low-calorie root vegetable with vitamin C and fiber that most people walk past at the store. What it is, its benefits, and how to cook it well.',
      es: 'El nabo es una verdura de raíz con pocas calorías, vitamina C y fibra que casi nadie compra en la verdulería. Qué es, sus beneficios y cómo cocinarlo bien.',
    },
    img: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Nabo fresco com casca branco-arroxeada sobre superfície clara',
    date: '2026-06-19',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'vinagre-balsamico',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Vinagre balsâmico: o que é, como usar e o que vale comprar',
      en: 'Balsamic Vinegar: Real vs. Fake and How to Use It',
      es: 'Vinagre balsámico: qué es, tipos y cómo usarlo bien',
    },
    description: {
      pt: 'Não é vinagre de vinho com corante. Entenda o que diferencia o balsâmico, como usar em saladas, carnes e morangos — e o que olhar no rótulo antes de comprar.',
      en: 'Balsamic vinegar is aged grape must, not wine vinegar with caramel color. Learn to spot the real thing, how to use it, substitutes, and how to store it.',
      es: 'El vinagre balsámico es mosto de uva cocido y añejado en barricas, no vinagre de vino con caramelo. Qué es, cómo distinguirlo, usos y sustitutos.',
    },
    img: 'https://images.pexels.com/photos/18754796/pexels-photo-18754796.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mesa com culinária italiana — ingredientes mediterrâneos, vinagre e azeite',
    date: '2026-06-19',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'atum',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Atum: o que é, valor nutricional e como usar na cozinha',
      en: 'Tuna: Nutrition Facts, Canned vs Fresh, and How to Cook It',
      es: 'Atún: valor nutricional, fresco vs en lata y cómo usarlo en la cocina',
    },
    description: {
      pt: 'Atum tem 26g de proteína por 100g e ômega-3 de verdade. Saiba a diferença entre sólido e ralado, em óleo ou água, e como usar em casa.',
      en: 'Canned tuna packs 24g of protein per 100g and real omega-3s. Learn the difference between fresh and canned, oil vs water, chunk vs flaked, and how to cook it.',
      es: 'El atún en lata tiene 25g de proteína por cada 100g y omega-3 de verdad. La diferencia entre fresco y enlatado, en aceite o en agua, en trozos o desmenuzado, y cómo usarlo.',
    },
    img: 'https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mão fatiando atum fresco em tábua de corte — preparação de peixe na cozinha',
    date: '2026-06-20',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'quinoa-para-que-serve',
    tag: { pt: 'Nutrição', en: 'Nutrition', es: 'Nutrición' },
    title: {
      pt: 'Quinoa: para que serve, benefícios e como cozinhar',
      en: 'Quinoa: Benefits, Nutrition Facts, and How to Cook It Right',
      es: 'Quinoa: para qué sirve, beneficios y cómo cocinarla sin que amargue',
    },
    description: {
      pt: 'Quinoa é um pseudocereal com proteína vegetal completa, fibras e sem glúten. Descubra para que serve, como cozinhar sem ficar amargo e os benefícios reais.',
      en: 'Quinoa is a complete-protein pseudocereal from the Andes. What it is good for, how to rinse it so it does not turn bitter, and the real nutrition facts.',
      es: 'La quinoa es un pseudocereal originario de los Andes con proteína vegetal completa. Para qué sirve, cómo lavarla bien y los beneficios reales, sin exagerar.',
    },
    img: 'https://images.pexels.com/photos/17597408/pexels-photo-17597408.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Bowl colorido com quinoa, abacate, grão-de-bico e legumes frescos vistos de cima',
    date: '2026-06-20',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-tahine',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é tahine: pasta de gergelim, tipos e como usar',
      en: 'What Is Tahini? Sesame Paste, White vs Black, How to Use It',
      es: 'Qué es el tahini: pasta de sésamo, tipos y cómo usarlo',
    },
    description: {
      pt: 'Tahine é pasta de gergelim puro. Saiba o que é tahine, a diferença entre branco e preto, como usar no homus, molhos e saladas — e se vale colocar na lista.',
      en: 'Tahini is a paste made from ground sesame seeds. See white vs black tahini, how to store it after opening, and how to use it beyond hummus.',
      es: 'El tahini es una pasta hecha con semillas de sésamo molidas. Descubre qué es, la diferencia entre el blanco y el negro, cómo conservarlo y cómo usarlo más allá del hummus.',
    },
    img: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Tigelas de homus cremoso com azeite e ervas — tahine é o ingrediente base da receita',
    date: '2026-06-21',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-raiz-forte',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Raiz forte: o que é, para que serve e como usar',
      en: 'Horseradish 101: What It Is, Uses, and How to Store It',
      es: 'Rábano picante: qué es, para qué sirve y cómo conservarlo',
    },
    description: {
      pt: 'Raiz forte é a raiz picante usada ralada em molho com carnes e peixes defumados. Saiba a diferença do wasabi, como usar na cozinha e onde comprar no Brasil.',
      en: 'Horseradish is the pungent root behind steakhouse sauce and fake wasabi. What it is, how it differs from real wasabi, and how to store it so it lasts.',
      es: 'El rábano picante es la raíz detrás de la salsa de asado y el falso wasabi de sushi. Qué es, en qué se diferencia del wasabi real y cómo guardarlo para que dure.',
    },
    img: 'https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Planta de raiz forte com folhas verdes largas — Armoracia rusticana no campo',
    date: '2026-06-21',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'feijao-preto-beneficios',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Feijão preto: benefícios, nutrição e como usar toda semana',
      en: 'Black Beans: Nutrition, Benefits, and How to Cook Them',
      es: 'Frijol negro: beneficios, nutrición y cómo cocinarlo bien',
    },
    description: {
      pt: 'Feijão preto é fonte de proteína vegetal, ferro e fibras em cada porção. Veja os benefícios, diferença do feijão carioca e como sempre ter na despensa.',
      en: 'Black beans pack plant protein, iron, and fiber into every serving. See the health benefits, how they compare to pinto beans, and how to cook a pot from scratch.',
      es: 'El frijol negro aporta proteína vegetal, hierro y fibra en cada porción. Conoce sus beneficios, la diferencia con el frijol rojo y cómo tenerlo siempre listo.',
    },
    img: 'https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Feijão preto seco em close-up — grãos escuros e brilhantes sobre superfície rústica',
    date: '2026-06-22',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'beneficios-da-cebola-roxa',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Benefícios da cebola roxa: nutrientes e como usar na cozinha',
      en: 'Red Onion Benefits: Nutrition, Antioxidants, and How to Use It',
      es: 'Beneficios de la cebolla morada: nutrientes y cómo usarla en la cocina',
    },
    description: {
      pt: 'Cebola roxa tem antocianinas e quercetina que a amarela não tem. Veja os benefícios confirmados, se perde com o cozimento e como usar mais na cozinha.',
      en: 'Red onion has anthocyanins and quercetin that yellow onion barely has. See the real benefits, what cooking destroys, and how to use it more in the kitchen.',
      es: 'La cebolla morada tiene antocianinas y quercetina que la blanca casi no tiene. Los beneficios confirmados, qué se pierde al cocinarla y cómo usarla más.',
    },
    img: 'https://images.pexels.com/photos/10159434/pexels-photo-10159434.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cebolas roxas cortadas ao meio mostrando as camadas e a cor intensa — hortaliça rica em antocianinas',
    date: '2026-06-22',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-stevia',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'O que é stevia: o adoçante natural da planta Stevia rebaudiana',
      en: 'What Is Stevia? The Plant Behind the Zero-Calorie Sweetener',
      es: 'Qué es la stevia: el edulcorante natural de la hoja dulce',
    },
    description: {
      pt: 'Stevia é um adoçante natural 200 vezes mais doce que o açúcar, com zero calorias e índice glicêmico zero. Saiba o que é, de onde vem e como usar na cozinha.',
      en: 'Stevia is a natural sweetener from a plant, up to 300 times sweeter than sugar, with zero calories and no effect on blood sugar. What it is, how it is made, and how to use it in the kitchen.',
      es: 'La stevia es un edulcorante natural extraído de una planta, hasta 300 veces más dulce que el azúcar, sin calorías y sin impacto en la glucosa. Qué es, de dónde viene y cómo usarla en la cocina.',
    },
    img: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Planta de stevia rebaudiana com folhas verdes ovais — arbusto adoçante natural nativo do Paraguai',
    date: '2026-06-23',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'para-que-serve-o-oregano',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Para que serve o orégano: usos, fresco, seco e como guardar',
      en: 'Fresh vs. Dried Oregano: How to Use, Store, and Substitute',
      es: 'Orégano seco vs. fresco: para qué sirve y cómo usarlo',
    },
    description: {
      pt: 'Para que serve o orégano além da pizza? Saiba as diferenças entre fresco e seco, quanto usar em receitas e como guardar em casa sem perder o aroma todo.',
      en: 'Fresh and dried oregano are not just different strengths — they behave differently in a dish. The 3:1 substitution ratio, how much to use, and how to store oregano so it keeps its punch.',
      es: 'El orégano seco y el fresco no solo cambian de intensidad — se comportan distinto en la olla. La proporción 3:1, cuánto usar por receta y cómo guardarlo sin que pierda el aroma.',
    },
    img: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Ramos de orégano fresco com folhas verdes sobre superfície rústica de madeira',
    date: '2026-06-24',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'abobrinha-calorias',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Abobrinha: calorias, valor nutricional e benefícios',
      en: 'Zucchini Calories: Nutrition Facts, Benefits, and Storage',
      es: 'Calabacín: calorías, tabla nutricional y beneficios',
    },
    description: {
      pt: 'Abobrinha tem 17 kcal por 100g, baixo carboidrato e é uma das hortaliças mais versáteis da cozinha brasileira. Tabela nutricional, tipos e como guardar.',
      en: 'Zucchini has about 17 calories per 100g, almost no carbs, and works in nearly any recipe. Full nutrition table, types, and how to pick and store it.',
      es: 'El calabacín tiene unas 17 calorías por 100g, casi nada de carbohidratos y sirve para casi cualquier receta. Tabla nutricional completa, tipos y cómo guardarlo.',
    },
    img: 'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Abobrinha italiana verde crescendo com flores amarelas no jardim',
    date: '2026-06-24',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'arenque',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Arenque: o que é, benefícios e como usar o defumado',
      en: 'What Is Herring? Nutrition, Benefits, and How to Cook It',
      es: 'Qué es el arenque: beneficios, tipos y cómo cocinarlo',
    },
    description: {
      pt: 'Arenque é primo da sardinha, mas com mais ômega-3 e vitamina D. O que é, onde comprar no Brasil, como usar o defumado e a diferença pra sardinha.',
      en: 'Herring is a small, oily fish loaded with omega-3 and vitamin D. What it is, how it compares to sardines, and how to cook with smoked or pickled herring.',
      es: 'El arenque es un pescado azul pequeño, primo de la sardina, con más omega-3 y vitamina D. Qué es, dónde comprarlo y cómo usar el ahumado o en vinagre.',
    },
    img: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Filé de peixe grelhado com legumes em prato sobre mesa',
    date: '2026-06-25',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'beneficios-do-cuscuz',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Benefícios do Cuscuz: Nutrição e Como Incluir na Rotina',
      en: 'Brazilian Couscous (Cuscuz): Nutrition, Benefits, and How to Cook It',
      es: 'Cuscuz brasileño: qué es, beneficios y cómo prepararlo',
    },
    description: {
      pt: 'Cuscuz de milho é rico em fibras, carboidratos complexos e selênio. Veja o que acontece com o seu corpo quando você inclui essa iguaria nordestina na semana.',
      en: 'Brazilian couscous is steamed corn flour, not wheat semolina — naturally gluten-free, rich in fiber, iron, and selenium. What it is, real benefits, and how to use it.',
      es: 'El cuscuz brasileño es harina de maíz al vapor, no sémola de trigo — sin gluten, con fibra, hierro y selenio. Qué es, sus beneficios reales y cómo incluirlo en tu semana.',
    },
    img: 'https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pimentão verde recheado com cuscuz sobre superfície rústica',
    date: '2026-06-26',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'cardamomo-para-que-serve',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Cardamomo para que serve: tipos, usos e benefícios',
      en: 'Cardamom: What It’s For, Types, and How to Use It',
      es: 'Cardamomo: para qué sirve, tipos y cómo usarlo',
    },
    description: {
      pt: 'Cardamomo é uma especiaria de aroma intenso e sabor único, usada em chás, doces e pratos árabes. Saiba para que serve, tipos e como usar na cozinha.',
      en: 'Cardamom is an intensely aromatic spice used in coffee, tea, curries, and baking. See green vs black cardamom, real benefits, and how to use it right.',
      es: 'El cardamomo es una especia de aroma intenso usada en café, té, curry y repostería. Tipos, beneficios reales y cómo usarlo sin pasarte de la mano.',
    },
    img: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Vagens de cardamomo verde sobre mesa de madeira rústica',
    date: '2026-06-26',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'oleo-de-gergelim',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Óleo de gergelim: benefícios e como usar na cozinha',
      en: 'Sesame Oil: Toasted vs Raw, Benefits, and How to Use It',
      es: 'Aceite de sésamo (ajonjolí): beneficios y cómo usarlo en la cocina',
    },
    description: {
      pt: 'Óleo de gergelim tem benefícios para coração, pele e inflamação. Entenda a diferença entre cru e torrado, como comprar e como usar na cozinha sem errar.',
      en: 'Sesame oil comes in two very different products — toasted and raw. The real difference, the science-backed benefits, and how to use each one without ruining a dish.',
      es: 'El aceite de sésamo tiene beneficios para el corazón, la piel y la inflamación. La diferencia real entre crudo y tostado, cómo comprarlo y usarlo sin arruinar el plato.',
    },
    img: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sementes de gergelim douradas espalhadas — base do óleo de gergelim',
    date: '2026-06-27',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'pimenta-vermelha',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Pimenta vermelha: tipos, benefícios e como usar na cozinha',
      en: 'Types of Red Peppers: Heat Levels, Uses, and Benefits',
      es: 'Tipos de chile rojo: picor, usos y beneficios',
    },
    description: {
      pt: 'Pimenta vermelha cobre desde o pimentão doce até a caiena e a malagueta. Conheça os tipos, os benefícios da capsaicina e como usar cada variedade.',
      en: 'Red peppers range from sweet bell peppers to fiery habaneros. See the types, heat levels, nutrition, and how to use each one in the kitchen.',
      es: 'El chile rojo va del pimiento morrón dulce al habanero ardiente. Conoce los tipos, el nivel de picor, los beneficios y cómo usar cada uno en la cocina.',
    },
    img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pimentões vermelhos frescos sobre tábua de madeira — variedades de pimenta vermelha madura',
    date: '2026-06-27',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'aveia-em-flocos-beneficios',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Aveia em flocos: benefícios e como usar na cozinha',
      en: 'Rolled Oats Benefits: What Beta-Glucan Actually Does',
      es: 'Avena en hojuelas: beneficios reales y cómo usarla en la cocina',
    },
    description: {
      pt: 'Aveia em flocos tem betaglucana, fibra que reduz colesterol LDL e controla glicemia. Saiba os benefícios e como incluir aveia na rotina semanal de cozinha.',
      en: 'Rolled oats are rich in beta-glucan, a fiber shown to lower LDL cholesterol and blunt blood sugar spikes. See the real benefits, the right dose, and which oat type to buy.',
      es: 'La avena en hojuelas tiene betaglucano, una fibra que reduce el colesterol LDL y controla el azúcar en la sangre. Beneficios reales, la dosis correcta y qué tipo comprar.',
    },
    img: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Tigela com aveia em flocos servida no café da manhã com frutas frescas',
    date: '2026-06-28',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-avela',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Avelã: o que é, para que serve e como usar na cozinha',
      en: 'Hazelnuts: Nutrition, Benefits, and How to Use Them in the Kitchen',
      es: 'Avellanas: qué son, beneficios y cómo usarlas en la cocina',
    },
    description: {
      pt: 'Avelã é uma oleaginosa rica em vitamina E e gorduras boas — a mesma da pasta de Nutella. Saiba o que é, benefícios, quantas comer e como usar na cozinha.',
      en: 'Hazelnuts are a nutrient-dense tree nut rich in vitamin E and healthy fats — the same one behind Nutella. What they are, benefits, how many to eat, and how to cook with them.',
      es: 'La avellana es un fruto seco rico en vitamina E y grasas buenas — la misma de la Nutella. Qué es, beneficios, cuántas comer al día y cómo usarla en la cocina.',
    },
    img: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Avelãs inteiras numa tigela de madeira, mostrando a textura e cor natural da oleaginosa',
    date: '2026-06-28',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'damascos-secos',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Damascos secos: o que são, benefícios e como usar na cozinha',
      en: 'Dried Apricots: Nutrition, Benefits, and How to Use Them',
      es: 'Damasco seco: qué es, beneficios y cómo usarlo en la cocina',
    },
    description: {
      pt: 'Damasco seco é o damasco fresco desidratado — concentra ferro, potássio e betacaroteno. Veja o que é, os benefícios reais e como usar além do chazinho.',
      en: 'Dried apricots are fresh apricots with the water removed — concentrating iron, potassium, and beta-carotene. What they are, real benefits, and how to cook with them.',
      es: 'El damasco seco es el damasco fresco deshidratado — concentra hierro, potasio y betacaroteno. Qué es, sus beneficios reales y cómo usarlo más allá de un snack.',
    },
    img: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Damascos secos laranjas em close-up mostrando a textura e cor características da fruta desidratada',
    date: '2026-06-29',
    dateLabel: 'Jun 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-agua-tonica',
    tag: 'Ingredientes',
    title: 'O que é água tônica: benefícios, calorias e como usar',
    description: 'Água tônica nasceu como remédio contra malária e virou refrigerante de bar. Veja o que é, se faz mal, quantas calorias tem e como usar no gim-tônica.',
    img: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Garrafa de água tônica sobre superfície neutra',
    date: '2026-08-03',
    dateLabel: 'Ago 2026',
    locales: ['pt'],
  },
  {
    slug: 'dieta-mediterranea-cardapio',
    tag: 'Organização',
    title: 'Dieta mediterrânea cardápio: 7 dias prontos pra copiar',
    description: 'Dieta mediterrânea cardápio pra 7 dias com azeite, peixe, grãos integrais e vegetais. Veja o que comer, o que evitar e como montar a lista de compras certa.',
    img: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Marmitas com grão-de-bico, falafel, arroz e vegetais coloridos — refeições no estilo da dieta mediterrânea',
    date: '2026-08-03',
    dateLabel: 'Ago 2026',
    locales: ['pt'],
  },
  {
    slug: 'lista-de-aniversario-o-que-comprar',
    tag: { pt: 'Lista de compras', en: 'Shopping List', es: 'Lista de compras' },
    title: {
      pt: 'Lista de aniversário: o que comprar e quanto gastar',
      en: 'Birthday Party Checklist: What to Buy, How Much to Spend',
      es: 'Lista de cumpleaños: qué comprar sin gastar de más',
    },
    description: {
      pt: 'Lista de aniversário: o que comprar em comida, bebida, descartáveis e decoração por convidado, com dica de orçamento e o que cortar primeiro se apertar.',
      en: 'A birthday party shopping list covering food, drinks, paper goods, and decor by guest count, with a simple budget split and what to cut first if money is tight.',
      es: 'Lista de cumpleaños: qué comprar en comida, bebida, desechables y decoración por invitado, con un reparto de presupuesto simple y qué recortar si falta dinero.',
    },
    img: 'https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher escrevendo lista de compras de aniversário em caderno sobre balcão de cozinha',
    date: '2026-11-27',
    dateLabel: 'Nov 2026',
    locales: ['pt', 'en', 'es'],
  },
  {
    slug: 'o-que-e-chalota',
    tag: { pt: 'Ingredientes', en: 'Ingredients', es: 'Ingredientes' },
    title: {
      pt: 'Chalota: o que é, diferença da cebola e como usar na cozinha',
      en: 'Shallots: What They Are, and How They Differ from Onion',
      es: 'Chalota: qué es, diferencia con la cebolla y cómo usarla',
    },
    description: {
      pt: 'Chalota é uma cebola pequena e adocicada, queridinha da cozinha francesa. Saiba o que é, a diferença pra cebola e alho, como usar e onde comprar no Brasil.',
      en: 'A shallot is a small, sweet member of the onion family loved in French cooking. What it is, how it differs from onion and garlic, and how to cook and store it.',
      es: 'La chalota es una cebolla pequeña y dulce, favorita de la cocina francesa. Qué es, en qué se diferencia de la cebolla y el ajo, y cómo cocinarla y guardarla.',
    },
    img: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Variedade colorida de legumes e vegetais frescos em banca de mercado',
    date: '2026-08-26',
    dateLabel: 'Ago 2026',
    locales: ['pt', 'en', 'es'],
  },
]

export default async function BlogPage({ params }) {
  const { locale } = await params
  const t = await getTranslations('blogIndex')
  const tc = await getTranslations('common')
  const localePosts = posts.filter((p) => p.locales.includes(locale))
  const localize = (field, loc) => (typeof field === 'object' ? field[loc] ?? field.pt : field)

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
                        <span className="blog-card-tag">{localize(post.tag, locale)}</span>
                        <span className="blog-index-date">{post.dateLabel}</span>
                      </div>
                      <h2>{localize(post.title, locale)}</h2>
                      <p>{localize(post.description, locale)}</p>
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
          <LanguageSwitcher />
        </div>
      </footer>
    </>
  )
}
