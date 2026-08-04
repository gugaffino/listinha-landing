import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Nuez moscada: para qué sirve y cómo usarla en la cocina',
  description: 'La nuez moscada profundiza el sabor de platos cremosos y postres, no es el ingrediente principal. Qué es, cuánta usar y cómo guardarla sin que pierda el aroma.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
      en: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada',
      es: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
    },
  },
  openGraph: {
    title: 'Nuez moscada: para qué sirve y cómo usarla en la cocina',
    description: 'La nuez moscada profundiza el sabor de platos cremosos y postres, no es el ingrediente principal. Qué es, cuánta usar y cómo guardarla sin que pierda el aroma.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada',
    images: [
      {
        url: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Especias aromáticas en tazones de cerámica blanca — la nuez moscada entre las especias cálidas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuez moscada: para qué sirve y cómo usarla en la cocina',
    description: 'La nuez moscada profundiza el sabor de platos cremosos y postres, no es el ingrediente principal. Qué es, cuánta usar y cómo guardarla sin que pierda el aroma.',
    images: ['https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La nuez moscada se puede usar en platos salados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí —y ahí es donde más brilla. La salsa bechamel, el puré de papa, los gratinados, las sopas cremosas y los rellenos de espinaca cambian con una pizca. No agrega un sabor identificable: profundiza y redondea el plato. Es el tipo de ingrediente que, cuando falta, deja algo que se siente incompleto —sin que sepas bien qué es.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta nuez moscada se usa por receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para platos que rinden entre 4 y 6 porciones, un cuarto de cucharadita de nuez moscada molida es un buen punto de partida. Rallada al momento, son unas 5 a 8 pasadas por un rallador fino. Empieza con menos: es más fácil agregar que corregir el exceso. En postres y bebidas calientes, la cantidad suele ser todavía menor —una pizca alcanza para que el aroma aparezca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre la nuez moscada entera y la molida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La entera conserva el aroma mucho más tiempo —varios años en un frasco cerrado, contra uno o dos de la molida. Rallada al momento, el aroma es más intenso y más fresco. La molida es más práctica, pero pierde fuerza más rápido. Si la usas seguido, la entera con un rallador fino vale la pena. Si la usas poco, la molida funciona bien igual.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La nuez moscada puede hacer daño?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cantidades de cocina, no. El problema aparece en dosis muy por encima de lo que pide cualquier receta: más de 5 g —el equivalente a varias cucharaditas enteras— puede causar náuseas, mareo y efectos neurológicos. En las cantidades que se usan para cocinar —una pizca o un cuarto de cucharadita— es completamente segura. A las embarazadas suele recomendárseles evitar cantidades altas, pero la dosis normal de cocina no representa un riesgo establecido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre la nuez moscada y el macís?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El macís es la membrana rojiza que envuelve la semilla de la nuez moscada —las dos vienen de la misma planta. El sabor del macís es más suave y ligeramente floral. La nuez moscada es más intensa y terrosa. El macís es difícil de encontrar fuera de tiendas de especias especializadas. Para efectos prácticos, son intercambiables en recetas que piden uno u otro, ajustando la cantidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda la nuez moscada en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En un frasco cerrado, lejos del calor, la luz y la humedad. Evita guardarla arriba de la estufa o cerca de una ventana —el calor y la luz aceleran la pérdida de aroma. La nuez moscada entera aguanta varios años en esas condiciones. La molida empieza a perder fuerza después de un año, más o menos. La señal de que ya perdió calidad: aroma débil o ausente al abrir el frasco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde se compra la nuez moscada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cualquier supermercado, en el pasillo de especias. La versión molida es la más fácil de encontrar, normalmente en frascos pequeños. La entera es menos común, pero aparece en supermercados más grandes y tiendas de especias. El precio por gramo es más alto que el de la canela o el comino, pero como la dosis por uso es pequeña, un frasco dura bastante.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nuez moscada: para qué sirve y cómo usarla en la cocina',
  description: 'La nuez moscada profundiza el sabor de platos cremosos y postres, no es el ingrediente principal. Qué es, cuánta usar y cómo guardarla sin que pierda el aroma.',
  image: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Nuez moscada en la cocina', item: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada' },
  ],
}

export default function NuezMoscadaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Nuez moscada en la cocina</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">3 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Nuez moscada: para qué sirve y cómo usarla bien en la cocina
          </h1>
          <p className="blog-desc">
            La receta dice &quot;nuez moscada al gusto&quot;. No sabes cuánta poner. Si le pones poca, no se nota. Si le pones de más, amarga el plato. Aquí está lo que la nuez moscada realmente hace, dónde usarla y por qué un cuarto de cucharadita cambia todo.
          </p>

          <div className="answer-box">
            <p>
              <strong>La nuez moscada</strong> es la semilla seca del árbol <em>Myristica fragrans</em>, originario de las islas Molucas, en Indonesia.
              Sirve para profundizar y redondear el sabor de platos cremosos, sopas y postres —no como sabor principal, sino como el ingrediente que hace que los demás se noten más.
              En cantidades normales de cocina, un cuarto de cucharadita alcanza para 4 a 6 porciones.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Especias aromáticas en tazones de cerámica blanca sobre una superficie de madera"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Mareefe / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la nuez moscada</a></li>
              <li><a href="#para-que-sirve">Para qué sirve en la cocina</a></li>
              <li><a href="#recetas">En qué recetas usarla</a></li>
              <li><a href="#como-usar">Cómo usarla: la cantidad correcta y cuándo agregarla</a></li>
              <li><a href="#beneficios">Beneficios y cuidados</a></li>
              <li><a href="#comprar-y-guardar">Cómo comprarla y guardarla</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cuatro especias en cucharas de madera sobre una superficie rústica — variedad de condimentos aromáticos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marta Branco / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la nuez moscada</h2>

          <p>
            La nuez moscada es la semilla seca de <em>Myristica fragrans</em>, un árbol tropical originario de las islas Molucas —lo que hoy es parte de Indonesia. Durante siglos fue una de las especias más valiosas del mundo: llegó a valer más que su peso en oro en Europa, y las guerras por el control de las islas productoras cambiaron el mapa político del sureste asiático.
          </p>
          <p>
            Hoy la compras en cualquier supermercado por unos pesos. Pero ese valor histórico decía algo real sobre lo que hace: es una especia que transforma los platos de una forma difícil de explicar sin probarla. No es como el chile, que identificas de inmediato. Es más sutil. El plato se siente más terminado —y no necesariamente sabes por qué.
          </p>
          <p>
            La semilla viene envuelta en una membrana rojiza llamada macís, de sabor parecido pero más suave. El macís es poco común fuera de tiendas de especias especializadas —en el supermercado normal encuentras la nuez moscada entera o ya molida. Son dos productos de la misma planta.
          </p>
          <p>
            El aroma de la nuez moscada entera es intenso, cálido y ligeramente amaderado. En la versión molida, ese aroma se disipa más rápido —por eso las recetas más antiguas piden rallarla al momento, y por eso ese paso todavía marca la diferencia.
          </p>

          {/* PARA QUE SIRVE */}
          <h2 id="para-que-sirve">Para qué sirve la nuez moscada en la cocina</h2>

          <p>
            La nuez moscada no condimenta —profundiza. Esa distinción importa, porque cambia dónde y cómo la vas a usar.
          </p>
          <p>
            Cuando le pones sal, pimienta o ajo a un plato, agregas un sabor identificable. Con la nuez moscada el efecto es distinto: intensifica los demás sabores, suaviza asperezas y da una sensación de plato completo que es difícil de señalar pero imposible de ignorar cuando falta. Es el ingrediente que hace que la gente repita el puré sin saber exactamente por qué.
          </p>
          <p>
            Funciona especialmente bien en platos ricos en grasa —salsa blanca, crema, mantequilla— porque los compuestos aromáticos de la nuez moscada se unen a las moléculas de grasa y se distribuyen mejor por el plato. Por eso una bechamel con nuez moscada tiene una profundidad completamente distinta a la misma salsa sin ella.
          </p>
          <p>
            En los postres, el mecanismo es parecido: complementa la canela, el clavo y la vainilla sin competir con ellos, sumando una capa más cálida y compleja al fondo del sabor. El arroz con leche, las galletas de especias, el ponche y el chocolate caliente cambian —y mejoran— con ella.
          </p>

          {/* RECETAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/678412/pexels-photo-678412.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Canela en rama y anís estrella sobre una superficie oscura — especias cálidas aromáticas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mareefe / Pexels</p>
          </div>

          <h2 id="recetas" className="img-above">En qué recetas usar nuez moscada</h2>

          <p>
            La nuez moscada aparece en dos mundos culinarios: platos salados cremosos y postres de especias. Las recetas de abajo son los casos donde realmente hace diferencia —no como decoración, sino como componente que cambia el resultado.
          </p>

          <h3>Salsa blanca (bechamel)</h3>
          <p>
            El uso más clásico y el más transformador. Una pizca de nuez moscada es presencia obligada en la bechamel francesa original —y en la mayoría de las recetas de lasaña. Sin ella, la salsa queda correcta. Con ella, queda completa. Si nunca la has probado, este es el primer lugar para notar la diferencia.
          </p>

          <h3>Puré de papa</h3>
          <p>
            Junto con la mantequilla y la leche caliente, la nuez moscada es el tercer pilar de un puré que hace que la gente pregunte qué tiene de diferente. El puré no sabe a nuez moscada. Sabe a puré bueno.
          </p>

          <h3>Gratinados y rellenos</h3>
          <p>
            Cualquier gratinado con crema —papa, coliflor, calabacita— va bien con nuez moscada. En rellenos de espinaca con ricotta o queso crema, equilibra el sabor vegetal de la hoja y profundiza la cremosidad del queso.
          </p>

          <h3>Sopas cremosas</h3>
          <p>
            La sopa de calabaza, la sopa de papa, la crema de champiñones —todas mejoran con una pizca de nuez moscada al final. Agrégala después de apagar el fuego para conservar el aroma.
          </p>

          <h3>Arroz con leche y postres de especias</h3>
          <p>
            El arroz con leche prácticamente pide nuez moscada. Las galletas de especias, el pastel de manzana, el pan de plátano y el pay de calabaza también. Junto con la canela y el clavo, completa el trío de especias cálidas que define el perfil aromático de buena parte de la repostería europea y de las bebidas de invierno.
          </p>

          <h3>Bebidas calientes</h3>
          <p>
            El chocolate caliente, el ponche, el rompope y el chai ganan una capa extra de complejidad con una pizca rallada al momento. Es el tipo de detalle que convierte una bebida cualquiera en algo que hiciste a propósito.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMO USAR */}
          <h2 id="como-usar">Cómo usar la nuez moscada: la cantidad correcta y cuándo agregarla</h2>

          <p>
            La receta dice &quot;nuez moscada al gusto&quot; y te quedas mirando el frasco. Le pasa a todo el mundo. La instrucción vaga existe porque el gusto varía —pero hay un punto de partida concreto.
          </p>

          <h3>Dosis de referencia</h3>
          <p>
            Para platos que rinden entre 4 y 6 porciones, empieza con un cuarto de cucharadita de nuez moscada molida. Rallada al momento, son unas 5 a 8 pasadas por un rallador fino. Es menos de lo que imaginas —y siempre es más fácil agregar que corregir el exceso. Demasiada nuez moscada domina el plato y amarga.
          </p>

          <h3>Entera o molida</h3>
          <p>
            La nuez moscada entera, rallada al momento con un rallador fino o microplane, tiene un aroma notablemente más fresco e intenso. Vale la pena si la usas con cierta frecuencia —la entera conserva su fuerza durante años, mientras que la molida empieza a perder aroma después de un año, más o menos.
          </p>
          <p>
            Para uso ocasional, la molida funciona bien igual. Solo verifica que todavía tenga aroma antes de usarla —abre el frasco y huélela. Si el olor es débil, vas a necesitar más cantidad para lograr el mismo efecto.
          </p>

          <h3>Cuándo agregarla durante la cocción</h3>
          <p>
            En salsas y purés, agrégala cerca del final de la cocción —o después de apagar el fuego. El calor prolongado debilita el aroma. En masas de pastel y galletas, va junto con los demás ingredientes secos y aguanta bien el horno. En bebidas calientes, rállala directo en la taza justo antes de servir.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios y cuidados con la nuez moscada</h2>

          <p>
            La nuez moscada tiene propiedades antioxidantes y compuestos con acción antiinflamatoria —eugenol, miristicina y elemicina son los principales. En estudios de laboratorio, estos compuestos han mostrado efectos digestivos y antimicrobianos. En la práctica, las cantidades que se usan al cocinar son demasiado pequeñas para producir efectos terapéuticos medibles.
          </p>
          <p>
            Usa nuez moscada porque mejora el sabor de lo que cocinas. No porque vaya a resolver la digestión o la inflamación —esas afirmaciones requieren dosis muy por encima de lo que pide cualquier receta.
          </p>
          <p>
            El cuidado real: la nuez moscada en exceso es tóxica. Por encima de unos 5 g —el equivalente a varias cucharaditas enteras— puede causar náuseas, mareo, alucinaciones y otros efectos neurológicos. Eso está muy por encima de cualquier uso culinario razonable. Una pizca o un cuarto de cucharadita en un plato familiar es completamente seguro.
          </p>
          <p>
            A las embarazadas suele recomendárseles evitar cantidades altas, pero la dosis normal de cocina no representa un riesgo establecido. Si tienes una duda puntual, esa pregunta es para un médico, no para un blog de cocina.
          </p>

          {/* COMPRAR Y GUARDAR */}
          <h2 id="comprar-y-guardar">Cómo comprar y guardar la nuez moscada</h2>

          <p>
            La nuez moscada está en cualquier supermercado, en el pasillo de especias. La versión molida es la más fácil de encontrar, normalmente en frascos pequeños. La entera es menos común, pero aparece en supermercados más grandes y tiendas de especias —vale la pena buscarla si la usas seguido.
          </p>
          <p>
            Cuesta más por gramo que la canela o el comino, pero como la dosis por uso es tan pequeña, un frasco —o un par de nueces enteras— te dura bastante. Si estás comparando precios, fíjate en el precio por gramo y no en el precio del frasco: el tamaño de los envases varía tanto que compararlos directo puede engañar.
          </p>

          <h3>Cómo guardarla bien</h3>
          <p>
            Guárdala en un frasco cerrado, lejos del calor, la luz y la humedad. El error más común es dejarla arriba de la estufa: el vapor y el calor de las ollas desgastan el aroma de cualquier especia en semanas. Una repisa seca, fuera del alcance directo del calor, es suficiente.
          </p>
          <p>
            La nuez moscada entera aguanta varios años en esas condiciones. La molida empieza a perder fuerza después de un año, más o menos —no necesariamente se &quot;echa a perder&quot;, pero pierde aroma y vas a necesitar usar más cantidad para el mismo resultado. La prueba es simple: ábrela y huélela. Si el aroma es débil, es hora de cambiarla.
          </p>
          <p>
            Si organizas la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>
            {' '}por zonas, las especias funcionan mejor juntas —en una repisa cerrada o un cajón, lejos de la estufa. Eso ayuda a recordar qué tienes y a notar cuando algo se está acabando antes de estar a la mitad de una receta.
          </p>
          <p>
            La próxima vez que armes tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            , vale la pena revisar la nuez moscada antes de salir. Es el tipo de cosa que descubres que se acabó en el peor momento —cuando la salsa ya está en la estufa y la pizca que faltaba estaba en el fondo del frasco vacío.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la nuez moscada</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La nuez moscada se puede usar en platos salados?</p>
              <p className="faq-a">
                Sí —y ahí es donde más brilla. La bechamel, el puré de papa, los gratinados, las sopas cremosas y los rellenos de espinaca cambian con una pizca. No agrega un sabor identificable: profundiza y redondea el plato. Es el tipo de ingrediente que, cuando falta, deja algo que se siente incompleto —sin que sepas bien qué es.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánta nuez moscada se usa por receta?</p>
              <p className="faq-a">
                Para platos que rinden entre 4 y 6 porciones, un cuarto de cucharadita de nuez moscada molida es un buen punto de partida. Rallada al momento, 5 a 8 pasadas por un rallador fino. Empieza con menos —es más fácil agregar que corregir el exceso. En postres y bebidas calientes, una pizca suele bastar para que el aroma aparezca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre la nuez moscada entera y la molida?</p>
              <p className="faq-a">
                La entera conserva el aroma mucho más tiempo —varios años en un frasco cerrado, contra uno o dos de la molida. Rallada al momento, el aroma es más fresco e intenso. La molida es más práctica, pero pierde fuerza más rápido. Si la usas seguido, la entera con un rallador fino vale la pena. Si la usas poco, la molida funciona bien igual.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La nuez moscada puede hacer daño?</p>
              <p className="faq-a">
                En cantidades de cocina, no. El problema aparece en dosis muy por encima de lo que pide cualquier receta —más de 5 g, muy por encima de cualquier receta normal. Una pizca o un cuarto de cucharadita en un plato familiar es completamente segura. A las embarazadas suele recomendárseles evitar cantidades altas, pero la dosis normal de cocina no representa un riesgo establecido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre la nuez moscada y el macís?</p>
              <p className="faq-a">
                El macís es la membrana rojiza que envuelve la semilla de la nuez moscada —las dos vienen de la misma planta. El macís tiene sabor más suave y ligeramente floral. La nuez moscada es más intensa y terrosa. El macís es difícil de encontrar fuera de tiendas de especias especializadas. Para efectos prácticos, son intercambiables en recetas, ajustando la cantidad.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda la nuez moscada en casa?</p>
              <p className="faq-a">
                En un frasco cerrado, lejos del calor, la luz y la humedad —nunca arriba de la estufa. La entera aguanta varios años en esas condiciones; la molida empieza a perder fuerza después de un año, más o menos. La prueba: ábrela y huélela. Aroma débil o ausente es señal de que ya toca cambiarla.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde se compra la nuez moscada?</p>
              <p className="faq-a">
                En cualquier supermercado, en el pasillo de especias. La versión molida es la más fácil de encontrar, en frascos pequeños. La entera aparece en supermercados más grandes y tiendas de especias. Cuesta más por gramo que la canela o el comino, pero como la dosis por uso es pequeña, un frasco dura bastante.
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
                Creador de Mise. La receta pedía &quot;nuez moscada al gusto&quot;. No sabía cuánta. Lo intentó varias veces. Las galletas quedaron raras.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Revisas lo que tienes antes de ir al supermercado —y no descubres que se acabó la nuez moscada a mitad del puré.
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
