import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Qué es la stevia: el edulcorante natural de la hoja dulce',
  description: 'La stevia es un edulcorante natural extraído de una planta, hasta 300 veces más dulce que el azúcar, sin calorías y sin impacto en la glucosa. Qué es, de dónde viene y cómo usarla en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-stevia',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-stevia',
    },
  },
  openGraph: {
    title: 'Qué es la stevia: el edulcorante natural de la hoja dulce',
    description: 'La stevia es un edulcorante natural extraído de una planta, hasta 300 veces más dulce que el azúcar, sin calorías y sin impacto en la glucosa. Qué es, de dónde viene y cómo usarla en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia',
    images: [
      {
        url: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Planta de stevia rebaudiana con hojas verdes ovaladas — arbusto endulzante natural originario de Paraguay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es la stevia: el edulcorante natural de la hoja dulce',
    description: 'La stevia es un edulcorante natural extraído de una planta, hasta 300 veces más dulce que el azúcar, sin calorías y sin impacto en la glucosa. Qué es, de dónde viene y cómo usarla en la cocina.',
    images: ['https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la stevia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La stevia es un edulcorante natural extraído de las hojas de la planta Stevia rebaudiana, originaria de Paraguay y el sur de Brasil. Sus compuestos activos —los glucósidos de esteviol— son entre 200 y 300 veces más dulces que el azúcar, sin calorías y sin impacto en la glucosa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La stevia es natural o artificial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La stevia viene de una planta, así que el origen es natural. Pero los extractos comerciales pasan por un proceso industrial de extracción y purificación. El resultado es distinto a masticar la hoja cruda, que tiene un sabor más tosco. Lo que compras en el supermercado es un extracto concentrado —natural en el origen, procesado en la producción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La stevia puede reemplazar al azúcar en todas las recetas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No en todas. La stevia endulza bien en bebidas, postres fríos y recetas sin levadura. Donde no funciona como reemplazo directo: salsa de caramelo (no se caramela), pan con levadura (la levadura no se alimenta de los glucósidos) y recetas que dependen del azúcar para la estructura o la humedad, como ciertos pasteles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La stevia hace mal a la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En consumo normal, no. En 2008, la FDA clasificó los extractos de stevia de alta pureza como "generalmente reconocidos como seguros" —la misma categoría que la sal y el azúcar. Estudios con dosis muy altas mostraron algunos efectos en animales, pero la cantidad necesaria está muy por encima de lo que cualquier persona consumiría en su día a día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La stevia tiene calorías?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prácticamente cero. Los glucósidos de esteviol no son metabolizados por el cuerpo para generar energía. Algunos productos con stevia contienen otros ingredientes (maltodextrina, eritritol) que suman calorías mínimas, pero el extracto puro de stevia tiene cero calorías.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta stevia equivale a una cucharadita de azúcar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del formato. La stevia para hornear en versión 1:1 reemplaza al azúcar en la misma medida —una cucharadita por una cucharadita. La stevia pura en polvo es mucho más concentrada: cerca de 1/4 de cucharadita equivale a una cucharadita de azúcar. Lee siempre la etiqueta del producto, porque la concentración varía entre marcas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Una mujer embarazada puede usar stevia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en el caso de extractos de alta pureza (rebaudiósido A refinado). La FDA no restringe el consumo durante el embarazo en esta forma. La hoja cruda de stevia y los extractos no purificados no tienen la misma evaluación de seguridad. Revisa la etiqueta: el producto debe especificar que contiene extracto de stevia purificado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué la stevia tiene un sabor amargo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El amargor viene del esteviósido, el compuesto más abundante en la hoja. El rebaudiósido A, también presente, tiene menos amargor y un sabor más limpio —por eso los productos premium usan una mayor proporción de rebaudiósido A. Si el producto que usas tiene un sabor muy amargo, prueba con una marca que tenga más rebaudiósido A en la composición.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es la stevia: el edulcorante natural de la hoja dulce',
  description: 'La stevia es un edulcorante natural extraído de una planta, hasta 300 veces más dulce que el azúcar, sin calorías y sin impacto en la glucosa. Qué es, de dónde viene y cómo usarla en la cocina.',
  image: 'https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es la stevia', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-stevia' },
  ],
}

export default function SteviaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es la stevia</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Stevia: el edulcorante que viene de una hoja, no de un laboratorio
          </h1>
          <p className="blog-desc">
            El pasillo de edulcorantes es confuso. La stevia aparece en sobre, en gotas, en polvo, mezclada con otras cosas que apenas se parecen entre sí. Qué es la stevia en realidad, de dónde sale el dulzor y cuándo vale la pena usarla en la cocina.
          </p>

          <div className="answer-box">
            <p>
              <strong>La stevia</strong> es un edulcorante natural extraído de las hojas de la planta{' '}
              <em>Stevia rebaudiana</em>, originaria de Paraguay y el sur de Brasil.
              Sus compuestos activos son entre 200 y 300 veces más dulces que el azúcar
              —sin calorías y sin impacto en la glucosa.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4198755/pexels-photo-4198755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Planta de stevia rebaudiana con hojas verdes ovaladas — arbusto endulzante natural originario de Paraguay"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la planta de stevia</a></li>
              <li><a href="#compuestos">Los compuestos que la endulzan</a></li>
              <li><a href="#vs-azucar">Stevia vs azúcar: qué cambia</a></li>
              <li><a href="#hace-mal">La stevia hace mal</a></li>
              <li><a href="#como-usar">Cómo usar la stevia en la cocina</a></li>
              <li><a href="#quien-puede">Quién puede usarla y quién debe tener cuidado</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5721978/pexels-photo-5721978.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Hojas frescas de stevia en primer plano sobre superficie rústica — textura de las hojas ovaladas de la planta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la planta de stevia</h2>

          <p>
            La <em>Stevia rebaudiana</em> es un arbusto pequeño de la familia de las margaritas —la misma del girasol.
            Crece de forma silvestre en Paraguay y el sur de Brasil, en la zona de frontera donde las comunidades guaraníes ya endulzaban bebidas con la hoja mucho antes de que llegaran los europeos.
            Ahí la conocen como <em>ka&apos;a he&apos;ê</em> —hierba dulce. No es una planta de laboratorio: crece en el patio de una casa.
          </p>
          <p>
            El naturalista suizo Moisés Bertoni describió la especie formalmente en 1899.
            El químico paraguayo Ovidio Rebaudi aisló los compuestos dulces al año siguiente —de ahí viene el nombre &quot;rebaudiana&quot; y el &quot;Reb A&quot; que aparece en la etiqueta del edulcorante.
          </p>
          <p>
            Las hojas son ovaladas, con bordes serrados, de un verde intenso, y la planta no pasa de la altura de la cintura.
            El dulzor está en la hoja —no en el tallo, no en la raíz.
            Hacer el edulcorante empieza por secar esas hojas y extraer los compuestos con agua.
          </p>
          <p>
            Paraguay sigue cultivando stevia, pero hoy China produce la mayor parte de la que se vende en el mundo, y también se cultiva bastante en Estados Unidos.
            Nada de eso aparece en la etiqueta del sobrecito que está junto a la cafetera.
          </p>

          {/* COMPUESTOS */}
          <h2 id="compuestos">Los compuestos que la endulzan: los glucósidos de esteviol</h2>

          <p>
            El dulzor viene de los glucósidos de esteviol —compuestos naturales concentrados en la hoja.
            Los dos más importantes son el esteviósido y el rebaudiósido A, conocido como Reb A.
          </p>
          <p>
            El esteviósido es el más abundante en la hoja, pero deja un regusto amargo notorio.
            El Reb A tiene un sabor más limpio y se disuelve mejor en agua —por eso los productos de mejor calidad indican en la etiqueta un alto porcentaje de Reb A.
            Si la stevia que usas deja un sabor amargo al final, probablemente tiene más esteviósido que Reb A.
          </p>
          <p>
            Tu cuerpo no metaboliza estos compuestos para generar energía, como sí hace con el azúcar.
            Por eso las calorías son cero —no es una promesa de marketing, es química básica.
          </p>
          <p>
            La concentración es lo que más confunde en la cocina.
            Una taza de azúcar se puede reemplazar con apenas una cucharadita de extracto puro de stevia —a veces menos.
            Cada marca formula su extracto de forma distinta, por eso la cantidad exacta depende del producto, no de una regla universal.
          </p>

          {/* VS AZÚCAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7369157/pexels-photo-7369157.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sobre de stevia junto a una cuchara con azúcar blanca — comparación visual de los dos edulcorantes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="vs-azucar" className="img-above">Stevia vs azúcar: qué cambia en la práctica</h2>

          <p>
            El azúcar de mesa tiene unas 4 calorías por gramo, un índice glucémico de alrededor de 65, y alimenta las bacterias de la boca que causan caries.
            La stevia: cero calorías, índice glucémico cero, no afecta la glucosa, no le da de comer a nada en la boca.
          </p>
          <p>
            Los números se ven limpios. El sabor es donde se complica.
          </p>
          <p>
            La stevia endulza bien, pero el regusto no es igual al del azúcar.
            Mucha gente ni lo nota en concentraciones normales.
            Otras personas —sobre todo en bebidas calientes como café o té— detectan enseguida un final amargo o parecido al regaliz.
            No hay forma de saber de qué lado estás sin probarlo, y el resultado cambia según la marca.
          </p>
          <p>
            El otro punto: el azúcar hace más que endulzar en la cocina.
            Retiene humedad en pasteles y galletas.
            Alimenta la levadura en la masa del pan.
            Se caramela en salsas, flanes y postres quemados.
            La stevia no hace nada de eso.
            Una receta que solo cambia azúcar por stevia, en la misma medida, suele salir más seca o con menos estructura.
          </p>
          <p>
            Para quien está trabajando en{' '}
            <a href="/es/blog/dieta-sem-acucar">reducir el azúcar de su alimentación</a>,{' '}
            la stevia es una herramienta realmente útil —solo que no reemplaza al azúcar en todo lo que hace.
          </p>

          {/* HACE MAL */}
          <h2 id="hace-mal">La stevia hace mal a la salud</h2>

          <p>
            Esta pregunta aparece en todo artículo sobre stevia, y tiene sentido —cualquier cosa que endulce sin calorías suena sospechosa.
          </p>
          <p>
            La respuesta corta: en consumo normal, no.
          </p>
          <p>
            En 2008, la FDA clasificó los extractos de stevia de alta pureza como &quot;generalmente reconocidos como seguros&quot; —la misma categoría que la sal de mesa.
            El JECFA, el comité conjunto de expertos de la FAO y la OMS en aditivos alimentarios, fijó una ingesta diaria aceptable de 4 mg de equivalente de esteviol por kilo de peso corporal.
            Para un adulto de 70 kg, eso equivale a decenas de sobrecitos al día —muy por encima de lo que cualquiera pondría en su café.
          </p>
          <p>
            Estudios con dosis muy altas en modelos animales sí mostraron algunos efectos.
            La dosis necesaria para acercarse a ese nivel está muy lejos de cómo cualquier persona usa la stevia en la vida real.
            No hay evidencia de riesgo de cáncer, efecto mutagénico ni alteración hormonal con dosis normales de consumo.
          </p>
          <p>
            Lo que esto no significa: que la stevia arregla todo por sí sola.
            Cambias el azúcar del café por stevia y no cambias nada más, y el ahorro de calorías es exactamente el de las calorías que tenía el azúcar —nada más.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Cómo usar la stevia en la cocina</h2>

          <p>
            El punto de partida es el formato que compraste.
          </p>

          <h3>Stevia líquida</h3>
          <p>
            Concentrada y fácil de dosificar —de una a tres gotas endulzan un vaso de agua o una taza de café.
            Funciona en bebidas frías y calientes.
            Se disuelve rápido, sin residuo granulado.
            El frasco pequeño dura meses.
          </p>

          <h3>Stevia en polvo pura</h3>
          <p>
            Muy concentrada —no reemplaza al azúcar en la misma medida.
            Para 1 taza de azúcar necesitas cerca de 1 cucharadita de extracto puro.
            El volumen menor cambia la textura de pasteles y galletas: la masa queda con menos estructura.
            Funciona mejor en recetas donde el azúcar solo endulza, sin función estructural.
          </p>

          <h3>Stevia para hornear (1:1)</h3>
          <p>
            El formato más fácil de usar en recetas.
            El fabricante diluye el extracto con otros ingredientes (eritritol, maltodextrina) para que la medida sea igual a la del azúcar: 1 taza de stevia para hornear equivale a 1 taza de azúcar.
            Resuelve el problema de la conversión.
            El resultado en pasteles y postres queda más cerca del original que con el extracto puro.
          </p>

          <h3>Dónde funciona bien</h3>
          <ul className="item-list">
            <li>Bebidas: café, té, jugo, licuados</li>
            <li>Postres fríos: mousse, gelatina, yogur</li>
            <li>Aderezos y salsas que necesitan un toque dulce</li>
            <li>Fruta macerada o ensalada de frutas</li>
            <li>Panes rápidos sin levadura, como el pastel de taza</li>
          </ul>

          <h3>Dónde no reemplaza bien al azúcar</h3>
          <ul className="item-list">
            <li>Salsa de caramelo —la stevia no se caramela</li>
            <li>Pan con levadura —la levadura no se alimenta de los glucósidos</li>
            <li>Merengue —la estructura depende del azúcar</li>
            <li>Recetas que necesitan textura crocante, como las galletas mantecosas clásicas</li>
          </ul>

          <p>
            Un consejo práctico: empieza reemplazando la mitad del azúcar por stevia.
            Prueba el sabor y la textura.
            Ajusta la próxima vez.
            Los reemplazos totales desde el primer intento suelen decepcionar en recetas donde el azúcar hace más que endulzar.
          </p>

          {/* QUIÉN PUEDE */}
          <h2 id="quien-puede">Quién puede usarla y quién debe tener cuidado</h2>

          <p>
            <strong>Personas con diabetes:</strong> la stevia es una de las mejores opciones que existen.
            No eleva la glucosa.
            No requiere una dosis extra de insulina por el edulcorante en sí.
            Igual hay que controlar el total de carbohidratos de la comida —la stevia no cambia lo demás que estás comiendo.
          </p>
          <p>
            <strong>Niños:</strong> sin restricción de edad para extractos de alta pureza.
            La recomendación de sentido común: no depender de ningún edulcorante, stevia incluida, como sustituto constante del azúcar en la alimentación infantil.
            El objetivo debería ser reducir el dulzor en general, no cambiar una fuente por otra.
          </p>
          <p>
            <strong>Embarazadas:</strong> sí, para extractos de alta pureza de rebaudiósido A refinado.
            La FDA no restringe el consumo durante el embarazo en esta forma.
            La hoja cruda y los extractos sin purificar no tienen la misma evaluación de seguridad.
            Revisa la etiqueta —el producto debe especificar extracto de stevia purificado.
          </p>
          <p>
            <strong>Personas con presión baja:</strong> atención.
            La stevia tiene un efecto leve para bajar la presión arterial.
            Eso es positivo para quien maneja hipertensión, pero puede causar mareo en quien ya tiene la presión baja, sobre todo con un consumo alto.
          </p>
          <p>
            <strong>Quien toma medicamentos para la diabetes o la presión:</strong> consulta con tu médico.
            La stevia puede potenciar el efecto de esos medicamentos, cambiando la dosis que necesitas.
          </p>
          <p>
            El resto: sin contraindicación relevante en uso normal.
            Tener stevia en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            como opción de edulcorante es razonable, sobre todo si ya tienes el hábito de endulzar bebidas.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la stevia</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué es la stevia?</p>
              <p className="faq-a">
                La stevia es un edulcorante natural extraído de las hojas de la planta <em>Stevia rebaudiana</em>, originaria de Paraguay y el sur de Brasil.
                Sus compuestos activos —los glucósidos de esteviol— son entre 200 y 300 veces más dulces que el azúcar, sin calorías y sin impacto en la glucosa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La stevia es natural o artificial?</p>
              <p className="faq-a">
                El origen es natural —viene de una planta.
                Los extractos comerciales pasan por un proceso industrial de extracción y purificación.
                El resultado es distinto a masticar la hoja cruda, que tiene un sabor más tosco.
                Natural en el origen, procesada en la producción.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La stevia puede reemplazar al azúcar en todas las recetas?</p>
              <p className="faq-a">
                No en todas.
                Funciona bien en bebidas, postres fríos y recetas sin levadura.
                No reemplaza al azúcar donde este cumple una función física: caramelizar, alimentar la levadura o dar estructura en masas que dependen del azúcar para la humedad y el volumen.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La stevia hace mal a la salud?</p>
              <p className="faq-a">
                En consumo normal, no.
                La FDA clasificó los extractos de alta pureza como generalmente reconocidos como seguros en 2008.
                Estudios con dosis muy altas mostraron algunos efectos en animales, pero la cantidad necesaria está muy por encima de lo que cualquier persona consumiría de forma realista.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La stevia tiene calorías?</p>
              <p className="faq-a">
                Prácticamente cero.
                Los glucósidos de esteviol no son metabolizados por el cuerpo para generar energía.
                Los productos que mezclan stevia con eritritol o maltodextrina pueden tener calorías mínimas, pero el extracto puro tiene cero.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta stevia equivale a una cucharadita de azúcar?</p>
              <p className="faq-a">
                Depende del formato.
                La stevia para hornear 1:1 reemplaza al azúcar en la misma medida.
                El extracto puro en polvo: cerca de 1/4 de cucharadita equivale a una cucharadita de azúcar.
                La concentración varía entre marcas —lee siempre la etiqueta antes de medir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Una mujer embarazada puede usar stevia?</p>
              <p className="faq-a">
                Sí, para extractos de alta pureza de rebaudiósido A refinado.
                La FDA no restringe el consumo durante el embarazo en esta forma.
                La hoja cruda y los extractos sin purificar no tienen la misma clasificación de seguridad.
                Revisa la etiqueta para confirmar que el producto especifica extracto purificado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Por qué la stevia tiene un sabor amargo?</p>
              <p className="faq-a">
                El amargor viene del esteviósido, el compuesto más abundante en la hoja.
                El rebaudiósido A, también presente, tiene un sabor más limpio.
                Los productos premium usan una mayor proporción de rebaudiósido A.
                Si lo que usas tiene un sabor muy amargo, prueba con una marca que tenga más rebaudiósido A en la composición.
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
                Creador de Mise. Cambió el azúcar del café por stevia. Se quedó con la galleta.
                El café salió bien.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Mise conecta despensa, recetas y lista de compras en un solo lugar.
              Dejas de comprar edulcorante que ya tienes —y de quedarte sin él a mitad de una receta.
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
