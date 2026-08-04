import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Qué es el queso crema: tipos, usos y diferencia con el mascarpone',
  description: 'El queso crema es un queso suave y untable, de sabor ligeramente ácido, originario de Estados Unidos. Qué es, sus tipos, cómo usarlo y en qué se diferencia del mascarpone.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cream-cheese',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cream-cheese',
    },
  },
  openGraph: {
    title: 'Qué es el queso crema: tipos, usos y diferencia con el mascarpone',
    description: 'El queso crema es un queso suave y untable, de sabor ligeramente ácido, originario de Estados Unidos. Qué es, sus tipos, cómo usarlo y en qué se diferencia del mascarpone.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese',
    images: [
      {
        url: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sándwich con queso crema y tomates — queso suave y untable sobre pan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es el queso crema: tipos, usos y diferencia con el mascarpone',
    description: 'El queso crema es un queso suave y untable, de sabor ligeramente ácido, originario de Estados Unidos. Qué es, sus tipos, cómo usarlo y en qué se diferencia del mascarpone.',
    images: ['https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El queso crema es lo mismo que el mascarpone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No son lo mismo. El mascarpone es un queso italiano con más grasa, sabor más dulce y sin la acidez del queso crema. El queso crema se cultiva con bacterias lácticas, lo que le da ese toque ácido característico y una textura más firme. En dips y untables fríos suelen funcionar parecido, pero en cheesecake el queso crema da un resultado más estable.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El queso crema tiene lactosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Al ser un queso fresco sin maduración, conserva la lactosa. Los quesos con maduración larga pierden casi toda la lactosa durante el proceso —el queso crema nunca pasa por esa etapa. Si tienes intolerancia, revisa tu tolerancia individual o busca alguna de las versiones sin lactosa que ya venden algunas marcas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El queso crema se puede hornear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Aguanta bien el horno hasta unos 180°C, que es justo lo que explica su éxito en el cheesecake. A temperatura muy alta durante mucho tiempo puede soltar algo de líquido. Para salsas en la estufa, agrégalo cuando el fuego ya esté bajo, para que la textura quede uniforme.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto queso crema hay en una cucharada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una cucharada colmada tiene cerca de 15 g de queso crema —unas 50 calorías, 1 g de proteína y 5 g de grasa. La mayoría de la gente unta más de una cucharada en el pan, así que una porción real ronda las 100 calorías.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué se puede sustituir el queso crema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de la receta. Para untables y dips fríos, el requesón cremoso o una ricota bien condimentada funcionan bien. Para cheesecake, el mascarpone es el sustituto más cercano en grasa y estructura. No hay un reemplazo perfecto para todas las recetas —la acidez y la firmeza del queso crema afectan el resultado de formas que otros quesos no replican.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El queso crema light es tan bueno como el tradicional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En platos fríos como dips y untables, el resultado es parecido. En recetas horneadas o calientes, la versión light tiene más agua y menos grasa —puede soltar líquido o quedar con una textura menos firme. Para cheesecake y coberturas, usa el tradicional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El queso crema tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El queso crema puro no tiene gluten. Las versiones condimentadas con hierbas o especias pueden tener contaminación cruzada según el procesamiento de la fábrica. Revisa siempre la etiqueta, sobre todo si tienes enfermedad celíaca.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es el queso crema: tipos, usos y diferencia con el mascarpone',
  description: 'El queso crema es un queso suave y untable, de sabor ligeramente ácido, originario de Estados Unidos. Qué es, sus tipos, cómo usarlo y en qué se diferencia del mascarpone.',
  image: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el queso crema', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cream-cheese' },
  ],
}

export default function QuesoCremaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el queso crema</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">4 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Queso crema: la guía directa sobre el queso suave que aparece en todo
          </h1>
          <p className="blog-desc">
            Pasó del cheesecake al bagel, del relleno de tarta a la cobertura de pastel. El queso crema se metió en medio mundo de recetas en los últimos años. Pero qué es en realidad, y en qué se diferencia del mascarpone que está justo al lado en el refrigerador de la tienda.
          </p>

          <div className="answer-box">
            <p>
              <strong>El queso crema</strong> es un queso fresco y suave hecho con leche y crema de leche, sin pasar por maduración.
              Tiene un sabor ligeramente ácido y una textura firme, suficiente para dar estructura a recetas como el cheesecake y las coberturas de pastel.
              Se inventó en Estados Unidos en 1872 y llegó para quedarse en las cocinas de todo el continente.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Sándwich con queso crema y tomates — queso suave y untable sobre pan"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el queso crema</a></li>
              <li><a href="#como-se-hace">Cómo se hace</a></li>
              <li><a href="#tipos">Tipos que vas a encontrar</a></li>
              <li><a href="#nutricion">Información nutricional</a></li>
              <li><a href="#vs-mascarpone">Queso crema vs mascarpone</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#como-guardar">Cómo guardarlo</a></li>
              <li><a href="#vale-la-pena">Vale la pena tenerlo siempre</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6529639/pexels-photo-6529639.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Queso crema untado sobre un bagel cortado a la mitad — textura suave y cremosa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el queso crema</h2>

          <p>
            El queso crema es un queso fresco y suave hecho con leche de vaca y crema de leche. No pasa por maduración —va directo del proceso de fabricación al envase. Eso explica su textura suave, su sabor ligeramente ácido y su vida útil más corta comparada con quesos madurados.
          </p>
          <p>
            El nombre en inglés (<em>cream cheese</em>) lo dice todo: literalmente, queso de crema. Y la composición lo confirma —tiene más crema que la mayoría de los quesos frescos. Ese alto contenido de grasa es lo que le da la cremosidad característica y la capacidad de sostener la forma en recetas como el cheesecake, sin colapsar.
          </p>
          <p>
            En Latinoamérica entró de la mano del cheesecake y se quedó. Hoy aparece en recetas dulces y saladas, en botanas, en rellenos de tarta y en salsas cremosas. El queso crema se metió en todo en los últimos años. Alguien debió avisar que vendría en tantas presentaciones.
          </p>

          {/* CÓMO SE HACE */}
          <h2 id="como-se-hace">Cómo se hace el queso crema</h2>

          <p>
            La producción arranca con leche y crema mezcladas, cultivadas con bacterias lácticas. El cultivo coagula la mezcla y desarrolla el sabor ácido —el mismo proceso básico de otros quesos frescos, pero con una proporción mucho mayor de grasa.
          </p>
          <p>
            La cuajada resultante se calienta, se sala y se envasa. Sin prensado, sin maduración. El producto final es homogéneo y estable en refrigeración, pero empieza a cambiar de textura rápido si se deja a temperatura ambiente.
          </p>
          <p>
            Entender el proceso ayuda en la cocina. El queso crema tolera el horno a temperatura moderada sin descomponerse —por eso funciona tan bien horneado en un cheesecake. A fuego directo muy alto, la grasa puede separarse. Si lo agregas con el fuego ya bajo, la textura se mantiene uniforme.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de queso crema que vas a encontrar</h2>

          <p>
            El refrigerador de la tienda suele tener unas cuantas presentaciones básicas. Saber la diferencia evita comprar la que no sirve para tu receta.
          </p>

          <h3>Tradicional (en bloque)</h3>
          <p>
            El estándar. Textura más densa, sabor más marcado. Es la presentación correcta para cheesecake, coberturas y cualquier receta que necesite estructura. Funciona bien tanto frío como horneado.
          </p>

          <h3>Light o bajo en grasa</h3>
          <p>
            Menos grasa, más agua. Funciona bien como untable frío —en pan tostado, galletas o como base de un dip. En recetas calientes u horneadas puede soltar líquido y quedar con una textura menos firme. Para cheesecake, el resultado queda por debajo de lo esperado.
          </p>

          <h3>Batido (whipped)</h3>
          <p>
            Tiene más aire incorporado, así que se unta directo del refrigerador sin esfuerzo. Práctico para una botana rápida. Menos recomendado para recetas donde la estructura importa —la textura más ligera juega en contra del resultado final.
          </p>

          <h3>Condimentado</h3>
          <p>
            Las versiones con hierbas, salmón ahumado o frutas ya vienen listas para servir como botana. Prácticas, pero con poca utilidad en recetas —el condimento incorporado limita lo que puedes hacer con ellas.
          </p>

          {/* NUTRICIÓN */}
          <h2 id="nutricion">Información nutricional del queso crema</h2>

          <p>
            El queso crema tradicional tiene alrededor de 342 kcal por 100 g. En una porción real —una cucharada colmada, unos 15 g— eso equivale a cerca de 50 kcal.
          </p>
          <p>
            La mayor parte viene de la grasa: cerca de 34 g por 100 g, en su mayoría saturada. El contenido de proteína es bajo para un queso: aproximadamente 7 g por 100 g. El sodio es relativamente bajo para un lácteo procesado: alrededor de 107 mg por 100 g.
          </p>
          <p>
            El queso crema no es un alimento para eliminar —es un queso rico que tiene sentido consumir con moderación. Una cucharada en el desayuno no es el problema. El problema es tratarlo como si fuera una botana entera.
          </p>

          {/* VS MASCARPONE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3957501/pexels-photo-3957501.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bagel con queso crema y salmón ahumado — combinación clásica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="vs-mascarpone" className="img-above">Queso crema vs mascarpone</h2>

          <p>
            Es la comparación que más confunde, y tiene sentido: los dos son quesos frescos, cremosos, de color blanco, y aparecen en las mismas recetas de repostería.
          </p>
          <p>
            El mascarpone es un queso italiano hecho con crema de leche coagulada con ácido cítrico o tartárico, sin cultivo bacteriano. Tiene más grasa que el queso crema, sabor más dulce y ninguna acidez notable. El queso crema, en cambio, se cultiva con bacterias lácticas —el mismo proceso que le da su sabor ácido característico.
          </p>
          <p>
            Esa diferencia de proceso cambia cómo se comportan en la cocina. El mascarpone es más delicado: si lo bates de más, pierde estructura y se vuelve líquido. El queso crema aguanta mejor el manejo y el calor, por eso es la elección clásica para cheesecake horizontal tipo Nueva York.
          </p>
          <p>
            En la práctica: para un tiramisú o una crema italiana, el mascarpone es insustituible por su dulzura y suavidad. Para cheesecake, dip o relleno con un toque ácido, el queso crema es la opción correcta. En muchos postres se pueden combinar los dos para balancear dulzura y acidez.
          </p>

          <div className="blog-inline-cta">
            <p>Sabes lo que tienes en el refrigerador antes de armar la lista. <em>Mise se encarga de eso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el queso crema en la cocina</h2>

          <p>
            Los usos más comunes —y algunos menos obvios que vale la pena probar.
          </p>

          <h3>Como untable y botana</h3>
          <p>
            El uso más simple: directo en pan tostado, galletas o bagel. Con hierbas frescas, aceite de oliva o chile en polvo funciona como botana por sí solo. Lo compras para una receta y te comes la mitad parado frente al refrigerador. Le pasa a todo el mundo.
          </p>

          <h3>En recetas dulces</h3>
          <p>
            El cheesecake es el clásico —horneado o de refrigerador. También aparece en la cobertura del pastel de zanahoria y el red velvet, en mousses y en rellenos de repostería. La acidez del queso crema equilibra el dulzor del azúcar y distingue el sabor frente a rellenos hechos solo con crema.
          </p>

          <h3>En recetas saladas</h3>
          <p>
            Relleno de tartas y quiches, dip de espinaca horneada, salsas cremosas para pasta. En cualquier receta que pida crema para batir, el queso crema la reemplaza con más cuerpo y estructura —la salsa queda más espesa y aguanta mejor si se recalienta.
          </p>

          <h3>En platos calientes</h3>
          <p>
            En el horno hasta unos 180°C funciona bien, sin soltar mucho líquido. En la estufa, agrégalo cuando ya bajaste el fuego. El calor directo muy alto puede granularlo o separar la grasa. No arruina el plato —solo cambia la textura, y no para bien.
          </p>

          <p>
            Si organizas las recetas de la semana con anticipación, vale la pena incluir el queso crema en el{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            cuando tengas al menos dos usos planeados. Un envase abierto sin un uso claro se echa a perder antes de tiempo.
          </p>

          {/* CÓMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar el queso crema</h2>

          <p>
            Siempre en el refrigerador —no es un producto de alacena una vez abierto. En su envase original cerrado, dura hasta la fecha indicada. Una vez abierto, úsalo dentro de los siguientes 7 a 10 días.
          </p>
          <p>
            Se puede congelar, pero cambia la textura. Después de descongelarse, queda más granulado y no se unta bien. En recetas cocidas u horneadas todavía funciona. Como untable, ya no. Si vas a congelarlo, planea usarlo en un platillo caliente.
          </p>
          <p>
            Señales de que ya no sirve: color amarillento en los bordes, líquido separado en la superficie o un olor agrio fuera de lo normal. Si aparece cualquiera de estas señales, descártalo. El queso crema que ya se echó a perder no se recupera con calor.
          </p>

          <p>
            Mantener la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            actualizada con lo que tienes y su fecha de caducidad evita ese tipo de desperdicio. Saber que hay un envase de queso crema abierto en el refrigerador hace la diferencia a la hora de armar la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            de la semana.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena tenerlo siempre en el refrigerador</h2>

          <p>Depende de qué cocines.</p>
          <p>
            Si haces cheesecake, coberturas o cualquier receta que pida queso crema específicamente, no existe un sustituto con el mismo resultado. Ponlo en la lista cuando lo vayas a usar —sin un uso definido, se convierte en gasto olvidado al fondo del refrigerador.
          </p>
          <p>
            Si solo quieres un untable para el desayuno, el requesón cremoso funciona igual de bien y suele costar menos. El queso crema es más caro por envase, y su sabor más ácido no es del gusto de todos.
          </p>
          <p>
            Si cocinas recetas variadas con frecuencia, tiene sentido tener siempre uno en el refrigerador. El queso crema entra en salsas, rellenos y postres sin necesitar mucha planeación —siempre que sepas que está ahí. Si guardas recetas seguido, un{' '}
            <a href="/es/blog/caderno-de-receitas">cuaderno de recetas</a>{' '}
            con los ingredientes anotados ayuda a no comprar de más.
          </p>
          <p>
            No es un básico de despensa como el ajo o el aceite de oliva —pero gana su lugar en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            cuando hay una receta esperando por él. El queso crema no entra a la lista por costumbre. Entra porque tiene destino.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el queso crema</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El queso crema es lo mismo que el mascarpone?</p>
              <p className="faq-a">
                No son lo mismo. El mascarpone tiene más grasa, sabor más dulce y no tiene la acidez del queso crema. El queso crema se cultiva con bacterias lácticas, lo que le da su toque ácido y una textura más firme. En dips y untables fríos funcionan parecido, pero en cheesecake el queso crema da mejor resultado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El queso crema tiene lactosa?</p>
              <p className="faq-a">
                Sí. Al ser un queso fresco sin maduración, conserva la lactosa. Los quesos madurados pierden casi toda la lactosa durante el proceso —el queso crema nunca pasa por esa etapa. Si tienes intolerancia, revisa tu tolerancia individual o busca una versión sin lactosa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El queso crema se puede hornear?</p>
              <p className="faq-a">
                Sí. Aguanta bien el horno hasta unos 180°C, lo que explica su éxito en el cheesecake. A temperatura muy alta por mucho tiempo puede soltar algo de líquido. Para salsas en la estufa, agrégalo con el fuego ya bajo para mantener la textura uniforme.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto queso crema hay en una cucharada?</p>
              <p className="faq-a">
                Una cucharada colmada tiene cerca de 15 g —unas 50 calorías, 1 g de proteína y 5 g de grasa. La mayoría unta más de una cucharada, así que una porción real ronda las 100 calorías.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Con qué se puede sustituir el queso crema?</p>
              <p className="faq-a">
                Depende de la receta. Para untables fríos, el requesón cremoso o una ricota bien condimentada funcionan bien. Para cheesecake, el mascarpone es el sustituto más cercano en grasa y estructura. No hay un reemplazo perfecto para todas las recetas —la acidez y la firmeza afectan el resultado de formas que otros quesos no replican.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El queso crema light es tan bueno como el tradicional?</p>
              <p className="faq-a">
                En platos fríos como dips y untables, el resultado es parecido. En recetas horneadas o calientes, la versión light tiene más agua y menos grasa —puede soltar líquido o quedar menos firme. Para cheesecake y coberturas, usa el tradicional.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El queso crema tiene gluten?</p>
              <p className="faq-a">
                El queso crema puro no tiene gluten. Las versiones condimentadas con hierbas o especias pueden tener contaminación cruzada según el procesamiento de la fábrica. Revisa siempre la etiqueta, sobre todo si tienes enfermedad celíaca.
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
                Creador de Mise. Compró queso crema para hacer un cheesecake, usó la mitad en el bagel del desayuno. El cheesecake quedó para el fin de semana siguiente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa conectada. Lista armada.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Sabes lo que tienes antes de ir a comprar —y el queso crema no aparece duplicado en el refrigerador.
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
