import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras saludable: qué incluir por grupo de alimentos',
  description: 'Una lista de compras saludable organiza verduras, proteínas y granos antes de ir al súper. Guía con categorías, presupuesto mensual y tips para no salirte del plan.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-saudavel',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-saudavel',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-saudavel',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-saudavel',
    },
  },
  openGraph: {
    title: 'Lista de compras saludable: qué incluir por grupo de alimentos',
    description: 'Una lista de compras saludable organiza verduras, proteínas y granos antes de ir al súper. Guía con categorías, presupuesto mensual y tips para no salirte del plan.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-saudavel',
    images: [
      {
        url: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Verduras y frutas frescas sobre una mesa, vista desde arriba, para una lista de compras saludable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras saludable: qué incluir por grupo de alimentos',
    description: 'Una lista de compras saludable organiza verduras, proteínas y granos antes de ir al súper. Guía con categorías, presupuesto mensual y tips para no salirte del plan.',
    images: ['https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una lista de compras saludable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lista de compras saludable organiza los alimentos por grupo nutricional —verduras, proteínas, granos integrales, legumbres y grasas buenas— antes de entrar al súper. El objetivo no es eliminar nada, sino asegurarte de comprar lo que va a alimentar la semana de forma equilibrada, sin decidir en el pasillo qué parece saludable en ese momento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una lista de compras saludable al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para dos personas, entre 260 y 320 dólares al mes aproximadamente, según datos regionales de la FAO sobre el costo de una dieta saludable en América Latina. El gasto se concentra en verduras, frutas, huevo, pollo, frijoles o leguminosas y lácteos básicos. El costo exacto varía bastante según el país, pero suele quedar por debajo de una compra mensual sin planear que incluye ultraprocesados y compras de impulso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué nunca puede faltar en una lista de compras saludable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La base es: huevo, una leguminosa (frijol, lenteja o garbanzo), un grano integral, al menos tres verduras y tres frutas, y una proteína para la semana (pollo, carne, pescado o una opción vegetal). Con eso cubres la mayoría de las necesidades nutricionales. Lo demás es variación según preferencia y presupuesto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo hago una lista de compras saludable y barata al mismo tiempo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prioriza los alimentos de temporada, las proteínas accesibles como el huevo y el frijol, y compra granos a granel cuando puedas. Evita las versiones procesadas del mismo alimento —una granola industrial casi siempre cuesta más por porción que la avena simple con fruta fresca. En la mayoría de los grupos alimentarios, la opción más nutritiva suele ser también la más barata.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Lista de compras saludable y lista fit son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No necesariamente. Una lista fit tiende a enfocarse en alto contenido de proteína y menos carbohidrato —está más dirigida a quien tiene una meta específica de composición corporal. Una lista saludable es más amplia: incluye carbohidratos integrales, legumbres, fruta y lácteos junto con la proteína. Si no estás en una dieta restrictiva, la lista saludable cubre la mayoría de tus necesidades.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evito las compras por impulso en el súper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Come algo antes de salir, organiza la lista por pasillo y decide antes de entrar: lo que no está en la lista no va al carrito. Los 3 a 5 productos de impulso que la mayoría de la gente compra en cada visita representan, a lo largo del año, un gasto considerable que nunca estuvo en el plan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia hay que ir al súper para comer sano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funcionan bien dos modelos combinados: una compra mensual para productos secos (granos, legumbres, enlatados) y una o dos visitas semanales para verduras, fruta y proteína fresca. Las verduras y frutas no duran todo el mes, así que comprar todo de una sola vez no es práctico. Planear el menú de la semana antes de ir reduce las visitas extra.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras saludable: qué incluir por grupo de alimentos',
  description: 'Una lista de compras saludable organiza verduras, proteínas y granos antes de ir al súper. Guía con categorías, presupuesto mensual y tips para no salirte del plan.',
  image: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-12',
  dateModified: '2026-08-12',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-saudavel',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras saludable', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-saudavel' },
  ],
}

export default function ListaDeComprasSaludableEs() {
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

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Estás aquí">
          <ol className="breadcrumb-nav">
            <li><a href="/">Inicio</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista de compras saludable</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">12 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Qué poner en la lista de compras saludable —y cómo seguir el plan dentro del súper
          </h1>
          <p className="blog-desc">
            Armar una lista de compras saludable no se trata de prohibir nada. Se trata de decidir antes de llegar al pasillo qué vas a comer esta semana —y no decidirlo después, con hambre, frente a las galletas.
          </p>

          <div className="answer-box">
            <p>
              Una <strong>lista de compras saludable</strong> organiza los alimentos por grupo —verduras, proteínas, granos integrales, legumbres y grasas buenas— antes de que entres al súper. Con ella compras lo que realmente vas a usar, evitas los 3 a 5 productos de impulso de una visita típica y no vuelves a casa con el carrito lleno pero la despensa sin nada para cocinar.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Verduras y frutas frescas sobre una mesa, vista desde arriba, para una lista de compras saludable"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-define">Qué define una lista saludable</a></li>
              <li><a href="#categorias">Categorías esenciales: qué va en la lista</a></li>
              <li><a href="#por-pasillo">Cómo organizarla por pasillo</a></li>
              <li><a href="#presupuesto">Cuánto cuesta al mes</a></li>
              <li><a href="#tips">5 tips para no salirte del plan</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ DEFINE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5620875/pexels-photo-5620875.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Primer plano de verduras frescas y coloridas —brócoli, pimiento y zanahoria para una lista saludable"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="que-define" className="img-above">Qué define una lista de compras saludable</h2>

          <p>
            Una lista de compras saludable no es una dieta disfrazada. No tiene que ver con eliminar todo lo que te gusta, ni con llenar el carrito de quinoa y superalimentos que nunca vas a cocinar.
          </p>
          <p>
            Se trata de comprar alimentos que aportan algo —fibra, proteína, vitaminas, energía de calidad— antes de comprar los que casi no aportan nada más allá de calorías y comodidad.
          </p>
          <p>
            Según datos de la FAO, el costo de una dieta saludable en América Latina y el Caribe es el más alto del mundo en proporción al ingreso —una razón más para planear antes de comprar, en lugar de decidir sobre la marcha y terminar gastando en productos que no aportan valor nutricional. Una lista saludable resuelve dos problemas a la vez: qué compras y qué dejas de comprar.
          </p>
          <p>
            El punto de partida no es memorizar cuáles son los alimentos más saludables del mundo. Es saber qué tienes ya en casa y qué vas a cocinar esta semana. Sin esa base, la lista queda abstracta —llena de buenas intenciones, vacía de uso real.
          </p>

          {/* CATEGORÍAS */}
          <h2 id="categorias">Categorías esenciales: qué va en la lista</h2>

          <p>
            Organizar la lista de compras por grupo de alimentos garantiza variedad nutricional sin tener que revisar cada producto desde cero cada semana. Con los grupos correctos definidos, vas rotando lo que hay dentro de cada categoría según la temporada —o según lo que esté en oferta.
          </p>

          <h3>Verduras</h3>
          <ul className="item-list">
            <li><strong>Hojas verdes:</strong> espinaca, acelga, lechuga, arúgula —la base de almuerzos y cenas</li>
            <li><strong>Verduras:</strong> zanahoria, calabacita, ejotes, brócoli, betabel</li>
            <li><strong>Aromáticos:</strong> ajo, cebolla, cilantro, perejil</li>
          </ul>
          <p>
            Compra lo que vas a usar en 5 días. Las hojas verdes se marchitan más rápido que cualquier plan de comidas bien intencionado.
          </p>

          <h3>Frutas</h3>
          <ul className="item-list">
            <li>Plátano, manzana, naranja, papaya —la base de la semana</li>
            <li>Fruta de temporada: más barata, más nutritiva y con menos riesgo de echarse a perder antes de comerla</li>
          </ul>

          <h3>Proteínas</h3>
          <ul className="item-list">
            <li>Huevo —la proteína más versátil y accesible del súper</li>
            <li>Pollo, res o pescado —según presupuesto y preferencia</li>
            <li>Tofu o garbanzo —para quien quiere reducir la carne sin sacrificar proteína</li>
          </ul>

          <h3>Granos</h3>
          <ul className="item-list">
            <li>Arroz integral</li>
            <li>Avena en hojuelas —desayuno y repostería</li>
            <li>Pasta integral o convencional</li>
          </ul>

          <h3>Legumbres</h3>
          <ul className="item-list">
            <li>Frijol negro o pinto</li>
            <li>Lenteja —se cocina rápido, no necesita remojo</li>
            <li>Garbanzo —versátil en ensaladas, sopas y hummus</li>
          </ul>

          <h3>Grasas buenas</h3>
          <ul className="item-list">
            <li>Aceite de oliva extra virgen</li>
            <li>Un puñado de nuez, almendra o cacahuate al día</li>
          </ul>

          <h3>Lácteos</h3>
          <ul className="item-list">
            <li>Yogur natural —sin azúcar añadida, la etiqueta lo deja claro</li>
            <li>Queso fresco o requesón —proteína y grasa en equilibrio</li>
          </ul>

          {/* POR PASILLO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6740849/pexels-photo-6740849.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bowl colorido con alimentos saludables —granos, verduras y proteína organizados"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mikhail Nilov / Pexels</p>
          </div>

          <h2 id="por-pasillo" className="img-above">Cómo organizar la lista por pasillo</h2>

          <p>
            Una lista organizada por grupo de alimentos es buena para planear. Una lista organizada por pasillo es buena para ejecutar. Lo ideal es tener las dos —la armas por grupo en casa y la reordenas mentalmente según el recorrido del súper.
          </p>
          <p>
            Un orden que funciona en la mayoría de los supermercados:
          </p>
          <ul className="item-list">
            <li><strong>1. Frutas y verduras</strong> —primero, mientras todavía tienes la cabeza fría</li>
            <li><strong>2. Carnes y pescado</strong> —carnicería o sección de refrigerados</li>
            <li><strong>3. Lácteos y huevo</strong> —yogur, queso, leche, huevo</li>
            <li><strong>4. Pasillo seco</strong> —granos, legumbres, cereales, aceite</li>
            <li><strong>5. Snacks y limpieza</strong> —al final, lejos de la tentación</li>
          </ul>
          <p>
            Pasar por el pasillo de galletas con el carrito ya lleno es psicológicamente más fácil de ignorar. Pasar por ahí al principio, con hambre, es justo donde la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras saludable</a> se viene abajo.
          </p>

          <div className="blog-inline-cta">
            <p>Sabes lo que hay en la despensa antes de salir de casa. <em>Eso es lo que hace Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* PRESUPUESTO */}
          <h2 id="presupuesto">Cuánto cuesta una lista de compras saludable al mes</h2>

          <p>
            Una lista saludable no tiene que ser cara. Los alimentos más nutritivos suelen ser también los más accesibles: frijol, huevo, arroz, plátano, verduras de hoja, zanahoria.
          </p>
          <p>
            El costo varía bastante según el país, pero como referencia regional, datos de la FAO y el PMA sobre el costo de una dieta saludable en América Latina apuntan a un estimado para dos personas de:
          </p>
          <ul className="item-list">
            <li><strong>Verduras y frutas</strong>: US$ 73–90/mes</li>
            <li><strong>Proteínas</strong> (pollo, huevo, garbanzo): US$ 91–112/mes</li>
            <li><strong>Granos y legumbres</strong>: US$ 31–38/mes</li>
            <li><strong>Lácteos básicos</strong>: US$ 39–48/mes</li>
            <li><strong>Aceites y condimentos</strong>: US$ 26–32/mes</li>
          </ul>
          <p>
            Total estimado: US$ 260–320/mes. Esa cifra suele quedar por debajo de una compra mensual sin planear que incluye ultraprocesados y compras de impulso. La diferencia se va justamente en esos 3 a 5 productos de impulso que la mayoría de la gente compra en cada visita —y que al final del mes suman más de lo que parece.
          </p>
          <p>
            Si el presupuesto está ajustado, empieza por los grupos más baratos: legumbres, huevo y verduras de temporada. Esos tres ya cubren buena parte de las necesidades nutricionales de la semana.
          </p>

          {/* TIPS */}
          <h2 id="tips">5 tips para no salirte del plan en el súper</h2>

          <p>
            Saber qué poner en la lista es la parte fácil. Seguir el plan cuando ya estás en el pasillo es donde la lista de compras saludable suele convertirse en una lista de buenas intenciones.
          </p>

          <h3>1. Come algo antes de ir</h3>
          <p>
            Ir al súper con hambre es la única situación en la que decides que necesitas tres tipos distintos de galletas. Come algo antes —un huevo, una fruta, lo que sea. La diferencia en el carrito es real.
          </p>

          <h3>2. Revisa la despensa antes de armar la lista</h3>
          <p>
            Lo que ya tienes determina lo que realmente falta. Armar la lista sin revisar la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            es comprar frijol por cuarta semana consecutiva mientras el arroz integral del mes pasado sigue ahí, sin abrir.
          </p>

          <h3>3. Conecta la lista con el menú de la semana</h3>
          <p>
            Cada comida planeada genera su propio conjunto de ingredientes. Con un{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            definido antes de ir al súper, compras exactamente lo que vas a usar. Sin él, la lista se llena de alimentos sin destino —nutritivos en el papel, desperdicio en la práctica.
          </p>
          <p>
            Si quieres un ejemplo de cómo estructurar esto, revisa la guía de{' '}
            <a href="/es/blog/cardapio-semanal-simples-caseiro">menú semanal sencillo y casero</a>.
          </p>

          <h3>4. Prioriza la fruta de temporada</h3>
          <p>
            Es más barata, más nutritiva y tiene menos riesgo de echarse a perder antes de que la comas. Un mango en plena temporada no se parece en nada a uno fuera de ella —ni en sabor ni en precio. La estacionalidad juega a tu favor si la aprovechas.
          </p>

          <h3>5. Lo que no está en la lista no va al carrito</h3>
          <p>
            Esta es la regla que suena obvia y que casi nadie sigue. Si el producto era importante, va a estar en la próxima lista. Si de todos modos lo vas a comprar, al menos decídelo de forma consciente —no dejes que el estante decida por ti.
          </p>

          <p>
            La lista de compras saludable empieza antes del súper —en lo que ya tienes en casa. Ese es el paso que la mayoría se salta.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de compras saludable</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué es una lista de compras saludable?</p>
              <p className="faq-a">
                Una lista de compras saludable organiza los alimentos por grupo nutricional —verduras, proteínas, granos, legumbres y grasas buenas— antes de ir al súper. El objetivo no es eliminar nada, sino asegurarte de comprar lo que va a alimentar la semana de forma equilibrada, sin decidir en el pasillo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto cuesta una lista de compras saludable al mes?</p>
              <p className="faq-a">
                Para dos personas, entre 260 y 320 dólares al mes aproximadamente (el costo real varía mucho según el país), enfocándote en verduras, frutas, huevo, pollo, frijol y lácteos básicos. Esa cifra suele quedar por debajo de una compra mensual sin planear que incluye ultraprocesados. La diferencia se va justo en esos productos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué nunca puede faltar en una lista de compras saludable?</p>
              <p className="faq-a">
                La base es: huevo, frijol o lenteja, un grano integral, al menos tres verduras y tres frutas, y una proteína para la semana. Esos productos cubren las necesidades nutricionales principales. Lo demás es variación según preferencia y presupuesto disponible.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo hago una lista de compras saludable y barata al mismo tiempo?</p>
              <p className="faq-a">
                Prioriza los alimentos de temporada, las proteínas accesibles como el huevo y el frijol, y compra granos a granel cuando puedas. Evita las versiones procesadas del mismo alimento —una granola industrial casi siempre cuesta más por porción que la avena simple. En la mayoría de los grupos, la opción más nutritiva suele ser también la más barata.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Lista de compras saludable y lista fit son lo mismo?</p>
              <p className="faq-a">
                No. Una lista fit tiende a enfocarse en alto contenido de proteína y menos carbohidrato —está más dirigida a quien tiene una meta de composición corporal. Una lista saludable es más amplia: incluye carbohidratos integrales, legumbres, fruta y lácteos. Si no estás en una dieta restrictiva, la lista saludable cubre la mayoría de tus necesidades.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo evito las compras por impulso en el súper?</p>
              <p className="faq-a">
                Come antes de ir, organiza la lista por pasillo y decide antes de entrar: lo que no está en la lista no va al carrito. Los 3 a 5 productos de impulso que la mayoría compra en cada visita representan, a lo largo del año, un gasto considerable que nunca estuvo en el plan.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Con qué frecuencia hay que ir al súper para comer sano?</p>
              <p className="faq-a">
                Funcionan bien dos modelos combinados: una compra mensual para productos secos (granos, legumbres, enlatados) y una o dos visitas semanales para verduras, fruta y proteína fresca. Las verduras y frutas no duran todo el mes —comprar todo de una vez no es práctico. Planear el menú antes de ir reduce las visitas extra.
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
                Creador de Mise. Volvió del súper con tres tipos distintos de yogur y sin zanahoria. La zanahoria sí estaba en la lista.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              La despensa conectada con la lista.<br />
              <em>Usa Mise.</em>
            </h2>
            <p>
              Armas el menú de la semana y Mise genera la lista de compras.
              Lo que ya está en la despensa se quita de la lista automáticamente.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Empieza gratis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Volver arriba
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
          <a href="/es/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
