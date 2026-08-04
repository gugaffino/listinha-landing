import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Qué es el arenque: beneficios, tipos y cómo cocinarlo',
  description: 'El arenque es un pescado azul pequeño, primo de la sardina, con más omega-3 y vitamina D. Qué es, dónde comprarlo y cómo usar el ahumado o en vinagre.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/arenque',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/arenque',
      en: 'https://www.miseemcasa.com.br/en/blog/arenque',
      es: 'https://www.miseemcasa.com.br/es/blog/arenque',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/arenque',
    },
  },
  openGraph: {
    title: 'Qué es el arenque: beneficios, tipos y cómo cocinarlo',
    description: 'El arenque es un pescado azul pequeño, primo de la sardina, con más omega-3 y vitamina D. Qué es, dónde comprarlo y cómo usar el ahumado o en vinagre.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/arenque',
    images: [
      {
        url: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Filete de pescado a la parrilla con vegetales en un plato',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es el arenque: beneficios, tipos y cómo cocinarlo',
    description: 'El arenque es un pescado azul pequeño, primo de la sardina, con más omega-3 y vitamina D. Qué es, dónde comprarlo y cómo usar el ahumado o en vinagre.',
    images: ['https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el arenque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El arenque es un pescado azul de agua salada de la familia Clupeidae —la misma de la sardina y la anchoa. La especie más común es la Clupea harengus, originaria de las aguas frías del Atlántico Norte, el Mar del Norte y el Báltico. Se vende sobre todo ahumado, en vinagre o enlatado, porque el arenque fresco casi no llega a mercados lejos de esa zona. Tiene un sabor más intenso que la sardina y es rico en omega-3, vitamina D y proteína.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el arenque y la sardina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son de la misma familia (Clupeidae), pero especies distintas. El arenque es más grande, tiene sabor más intenso —sobre todo ahumado— y un poco más de omega-3 por 100 g (cerca de 1,7 g frente a 1,0–1,5 g de la sardina). La sardina tiene más calcio y es mucho más fácil de conseguir y más barata. Para el día a día, sardina. Para variar o buscar más omega-3 por porción, arenque.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde se puede comprar arenque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En tiendas especializadas en productos escandinavos, alemanes o de delicatessen, en supermercados grandes en la sección de importados o enlatados, y en línea. El formato más común es el filete de arenque ahumado al vacío, sin espinas. El arenque en vinagre viene en frascos y es fácil de encontrar en tiendas de productos europeos o judíos. El precio varía bastante según el formato: el enlatado suele ser el más barato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arenque ahumado tiene espinas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El filete de arenque ahumado envasado al vacío casi siempre viene sin espinas —se filetea antes de ahumarlo. El arenque ahumado entero (el formato tradicional británico) sí conserva espinas pequeñas. Si quieres evitarlas por completo, compra el filete sin espinas en vez del pescado entero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se usa el arenque en la cocina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El arenque ahumado o en vinagre no necesita cocción —se come directo del envase. Funciona bien en pasta con aceite de oliva y limón, en tostadas con queso crema y alcaparras, en ensalada de papa con cebolla morada, mezclado en huevos revueltos (30–40 g cambian el plato) y procesado en paté con queso crema. El sabor es intenso, así que usa menos cantidad de la que usarías con sardina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arenque es bueno para la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Es rico en omega-3 (importante para la salud cardiovascular y cerebral), vitamina D (una de las mejores fuentes naturales), vitamina B12 y proteína. En 100 g de arenque ahumado hay cerca de 24 g de proteína y 1,7 g de omega-3. Las versiones ahumada y en vinagre tienen bastante sodio —entre 650 y 750 mg por 100 g—, algo a tener en cuenta si controlas la presión arterial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arenque tiene mucho sodio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las versiones ahumada y en vinagre sí —entre 650 y 750 mg por 100 g, que es bastante. El sodio forma parte del proceso de conservación. Si controlas el sodio en tu dieta, puedes limitar la porción a unos 50 g y equilibrar el resto de las comidas del día. El arenque fresco tiene mucho menos sodio, pero es prácticamente imposible de conseguir lejos de la costa.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es el arenque: beneficios, tipos y cómo cocinarlo',
  description: 'El arenque es un pescado azul pequeño, primo de la sardina, con más omega-3 y vitamina D. Qué es, dónde comprarlo y cómo usar el ahumado o en vinagre.',
  image: 'https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/arenque',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el arenque', item: 'https://www.miseemcasa.com.br/es/blog/arenque' },
  ],
}

export default function ArenqueEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el arenque</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">3 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Arenque: el pescado azul que casi nadie tiene en el radar
          </h1>
          <p className="blog-desc">
            El arenque aparece en frascos de importados, en el menú de Nochebuena en algunas casas mexicanas y en cualquier conversación sobre omega-3. Fuera de esos contextos, casi nadie sabe qué es en realidad. Qué es el arenque, dónde encontrarlo y cómo usar el ahumado o el que viene en vinagre sin complicarte.
          </p>

          <div className="answer-box">
            <p>
              <strong>El arenque</strong> es un pescado azul pequeño, de la misma familia que la sardina (<em>Clupeidae</em>),
              originario de las aguas frías del Atlántico Norte. Se vende sobre todo ahumado, en vinagre o enlatado
              —el arenque fresco casi no llega a Latinoamérica. Es rico en omega-3, vitamina D y proteína, con un
              sabor más intenso que la sardina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1510714/pexels-photo-1510714.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Filete de pescado a la parrilla con vegetales en un plato"
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
              <li><a href="#que-es">Qué es el arenque</a></li>
              <li><a href="#nutrientes">Por qué el arenque es tan nutritivo</a></li>
              <li><a href="#tipos">Ahumado, en vinagre o enlatado: lo que vas a encontrar</a></li>
              <li><a href="#como-usar">Cómo usar el arenque en la cocina</a></li>
              <li><a href="#arenque-o-sardina">Arenque o sardina: cuál elegir</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6839650/pexels-photo-6839650.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Primer plano de un plato de pescado preparado con guarniciones"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el arenque</h2>

          <p>
            El arenque (<em>Clupea harengus</em>) es un pescado azul de agua salada de la familia Clupeidae —la misma de la sardina, la anchoa y el sábalo. Cuerpo alargado, escamas plateadas, entre 20 y 40 cm de largo.
          </p>
          <p>
            Vive en cardúmenes en el Atlántico Norte, el Mar del Norte y el Báltico —aguas frías, cerca de la superficie. En cantidades enormes: el arenque es uno de los peces más pescados del mundo desde hace siglos. Por eso es barato y tan común en el norte de Europa, y por eso aparece en tantas recetas tradicionales de esa región.
          </p>
          <p>
            En Latinoamérica, la historia es distinta. El pescado no habita estas aguas, así que lo que llega es importado y casi siempre ya procesado: ahumado, en conserva o en salmuera. El arenque fresco prácticamente no existe en el mercado latinoamericano.
          </p>
          <p>
            La forma más común de encontrarlo es el filete de arenque ahumado envasado al vacío, sin espinas, listo para usar. A veces viene en aceite, a veces en salmuera. El sabor es más intenso que el de la sardina —más graso, más marcado.
          </p>
          <p>
            En México, el arenque tiene un lugar propio: el <em>arenque en vinagre</em> (o en escabeche) es un platillo tradicional de la cena de Nochebuena en muchas familias, sobre todo del centro del país. En el norte de Europa, en cambio, es un ingrediente de todos los días —ahumado en Escandinavia, marinado con cebolla en Holanda, entero en el desayuno británico. Fuera de esos contextos, sigue siendo un producto de nicho.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Por qué el arenque es tan nutritivo</h2>

          <p>
            Para ser un pescado barato en su origen, el arenque tiene un perfil nutricional que compite con ingredientes mucho más caros. Por 100 g de arenque ahumado:
          </p>

          <ul className="item-list">
            <li>Calorías: ~217 kcal</li>
            <li>Proteína: ~24 g</li>
            <li>Grasa total: ~12 g (mayoritariamente insaturada)</li>
            <li>Omega-3: ~1,7 g</li>
            <li>Vitamina D: ~16 µg —alrededor del 107% de la ingesta diaria recomendada</li>
            <li>Vitamina B12: ~13 µg —más de 5 veces la recomendación diaria</li>
            <li>Selenio: ~34 µg</li>
          </ul>

          <p>
            El omega-3 es el dato que más llama la atención. 1,7 g por 100 g supera lo que ofrece la sardina enlatada en promedio —entre 1,0 y 1,5 g, dependiendo de la especie y la conserva. Para comparar: el atún en agua tiene apenas 0,1 a 0,3 g de omega-3 por 100 g. La{' '}
            <a href="https://www.fao.org/fishery/en" target="_blank" rel="noopener noreferrer">FAO</a>{' '}
            incluye al arenque entre los pescados de mayor valor nutricional para el consumo humano.
          </p>
          <p>
            La vitamina D es el otro motivo para prestarle atención. Los alimentos con vitamina D natural en cantidad significativa son escasos —un huevo tiene apenas 2 µg por unidad. El arenque ahumado tiene cerca de 16 µg por cada 100 g, una de las fuentes alimentarias más concentradas que existen. Si buscas subir tu vitamina D sin suplemento, el arenque es una de las opciones más concretas.
          </p>
          <p>
            El punto de atención: la versión ahumada tiene bastante sodio, entre 650 y 750 mg por 100 g. Es parte del proceso de conservación. Quien controla el sodio en su dieta no necesita eliminar el arenque, pero sí definir una porción razonable.
          </p>
          <p>
            La comparación directa con pescados azules comunes:
          </p>

          <ul className="item-list">
            <li>Omega-3 en el arenque: ~1,7 g por 100 g</li>
            <li>Omega-3 en la sardina enlatada: ~1,0–1,5 g por 100 g</li>
            <li>Omega-3 en el atún en agua: ~0,1–0,3 g por 100 g</li>
            <li>Omega-3 en el salmón: ~2,0–2,5 g por 100 g —más, pero cuesta bastante más por kilo</li>
          </ul>

          <p>
            El arenque queda entre la sardina y el salmón en nutrientes, y muy por debajo del salmón en precio. No es el pescado más accesible del mercado, pero por porción entrega más omega-3 que cualquier lata de atún.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7426869/pexels-photo-7426869.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Empaque de producto ahumado sobre superficie de madera con hierbas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Ahumado, en vinagre o enlatado: lo que vas a encontrar</h2>

          <p>
            El arenque se vende en más formatos de los que parece, y cada uno sirve para algo distinto.
          </p>

          <h3>Ahumado</h3>
          <p>
            El más común. Viene entero (con espinas pequeñas) o como filete sin espinas, envasado al vacío. El filete sin espinas es el punto de partida más fácil si lo estás probando por primera vez —listo para comer directo del envase.
          </p>

          <h3>En vinagre</h3>
          <p>
            Viene en frascos, curado en una salmuera de vinagre, a veces con cebolla, mostaza o una salsa de crema o vino. Es el formato tradicional en tiendas escandinavas, alemanas y judías —y también el que se usa en el arenque en escabeche que se sirve en Nochebuena en México. El sabor es más ácido y punzante que el ahumado, más cerca de un condimento que de un ingrediente principal.
          </p>

          <h3>Enlatado</h3>
          <p>
            En aceite, salsa de tomate o mostaza. El formato más barato y el que dura más tiempo en la alacena sin refrigeración —parecido a la sardina enlatada. Se abre y se usa directo.
          </p>

          <p>Dónde encontrarlo:</p>
          <ul className="item-list">
            <li><strong>Tiendas especializadas en productos europeos</strong> —busca "delicatessen escandinava" o "productos alemanes" en tu ciudad; suele haber más opciones en capitales grandes</li>
            <li><strong>Supermercados grandes</strong>, en la sección de enlatados o importados —el arenque en vinagre también aparece cerca de Navidad en algunos países</li>
            <li><strong>En línea</strong> —la mayor variedad de formatos está ahí; compara el precio por 100 g, no por el envase</li>
          </ul>

          {/* COMO USAR */}
          <h2 id="como-usar">Cómo usar el arenque en la cocina</h2>

          <p>
            El arenque tiene sabor fuerte. La regla práctica: empieza con menos cantidad de la que crees que necesitas, sobre todo la primera vez. El pescado se impone en el plato —no hace falta mucho para que se note.
          </p>

          <h3>Pasta con arenque</h3>
          <p>
            El uso más directo. Cocina la pasta. Corta los filetes en trozos pequeños. Mezcla con aceite de oliva, jugo de limón y eneldo picado. Listo en 20 minutos. El sabor del arenque sostiene el plato sin necesitar mucho más —funciona bien con espagueti, fettuccine o penne.
          </p>

          <h3>En tostadas</h3>
          <p>
            Queso crema como base, filete de arenque encima, alcaparras y cebollín. Funciona como entrada o cena rápida. La grasa del queso crema equilibra la intensidad del pescado. Con eneldo fresco queda mejor, pero sin él también funciona.
          </p>

          <h3>Ensalada de papa</h3>
          <p>
            Combinación clásica del norte de Europa. Papa cocida, cebolla morada, arenque en trozos, mostaza y un poco de mayonesa o yogur natural. La grasa del arenque equilibra el almidón de la papa. Rinde, es fácil de armar y aguanta en el refrigerador —se puede preparar con anticipación.
          </p>

          <h3>Huevos revueltos</h3>
          <p>
            30 a 40 g de arenque en trozos pequeños dentro de los huevos revueltos cambia el plato por completo. Funciona igual que el salmón ahumado en desayunos escandinavos —suma proteína y sabor con casi ningún esfuerzo extra. Tienes arenque, tienes huevos, el desayuno está resuelto.
          </p>

          <h3>Paté de arenque</h3>
          <p>
            Procesa arenque ahumado con queso crema, jugo de limón y pimienta. El paté dura tres o cuatro días en el refrigerador y va bien con galletas o vegetales crudos. Si te sobró arenque del envase y no sabes qué hacer con él, el paté es la salida más rápida.
          </p>

          <p>
            Un uso que no funciona: el arenque como ingrediente principal en un plato delicado o de sabores suaves. El sabor es demasiado marcado para platos que dependen de la sutileza. Funciona cuando el plato aguanta intensidad, no cuando la idea es algo ligero.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ARENQUE O SARDINA */}
          <h2 id="arenque-o-sardina">Arenque o sardina: cuál elegir</h2>

          <p>
            La comparación más directa: la sardina gana en practicidad, el arenque gana en densidad nutricional.
          </p>
          <p>
            La sardina enlatada está en cualquier supermercado, cuesta poco y aporta buen omega-3, proteína y calcio de las espinas blandas. Es una de las proteínas más completas y accesibles que puedes tener en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>.
            El arenque cuesta más, es más difícil de conseguir y tiene sabor más intenso —lo que limita en qué platos lo usas.
          </p>

          <p>Dónde gana el arenque:</p>
          <ul className="item-list">
            <li>Un poco más de omega-3 por 100 g (~1,7 g frente a ~1,0–1,5 g de la sardina)</li>
            <li>Más vitamina D natural por porción</li>
            <li>Sin espinas en el filete envasado —la sardina enlatada a veces las tiene</li>
            <li>Listo para comer sin preparación adicional</li>
            <li>Sabor más marcado —hace falta menos cantidad para que se note</li>
          </ul>

          <p>Dónde gana la sardina:</p>
          <ul className="item-list">
            <li>Disponibilidad —en cualquier supermercado</li>
            <li>Precio —bastante más barata por 100 g</li>
            <li>Vida útil en la alacena —una lata aguanta mucho tiempo</li>
            <li>Versatilidad —funciona en más tipos de receta</li>
          </ul>

          <p>
            La conclusión práctica: la sardina es el producto que compras cada mes. El arenque es la compra para variar, para probar algo distinto o para buscar más omega-3 por porción sin cambiar todo el menú.
          </p>
          <p>
            Si la sardina ya funciona bien en tu{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            no hace falta cambiarla. El arenque entra cuando quieres ampliar el repertorio de pescado en casa —no como reemplazo, sino como suma ocasional.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el arenque</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué es el arenque?</p>
              <p className="faq-a">
                Es un pescado azul de agua salada de la familia Clupeidae —la misma de la sardina y la anchoa. La especie más común es la <em>Clupea harengus</em>, originaria del Atlántico Norte. Se vende sobre todo ahumado, en vinagre o enlatado. Tiene sabor más intenso que la sardina y es rico en omega-3, vitamina D y proteína.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el arenque y la sardina?</p>
              <p className="faq-a">
                Son de la misma familia, pero especies distintas. El arenque es más grande, tiene sabor más intenso —sobre todo ahumado— y un poco más de omega-3 por 100 g (~1,7 g frente a 1,0–1,5 g de la sardina). La sardina tiene más calcio, es más fácil de conseguir y más barata. Para el día a día, sardina. Para variar o buscar más nutrientes por porción, arenque.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde se puede comprar arenque?</p>
              <p className="faq-a">
                En tiendas especializadas en productos escandinavos o europeos, en supermercados grandes en la sección de enlatados o importados, y en línea. El formato más común es el filete ahumado envasado al vacío, sin espinas. El precio varía bastante según el formato —el enlatado suele ser el más barato.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El arenque ahumado tiene espinas?</p>
              <p className="faq-a">
                El filete ahumado envasado al vacío casi siempre viene sin espinas —se filetea antes de ahumarlo. El arenque ahumado entero sí conserva espinas pequeñas. Para evitarlas por completo, compra el filete en vez del pescado entero.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se usa el arenque en la cocina?</p>
              <p className="faq-a">
                No necesita cocción —se come directo del envase. Funciona bien en pasta con aceite de oliva y limón, en tostadas con queso crema y alcaparras, en ensalada de papa con cebolla morada, en huevos revueltos y en paté. El sabor es intenso —usa menos cantidad de la que usarías con sardina.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El arenque es bueno para la salud?</p>
              <p className="faq-a">
                Sí. Es rico en omega-3, vitamina D (una de las mejores fuentes naturales), vitamina B12 y proteína. En 100 g hay cerca de 24 g de proteína y 1,7 g de omega-3. Las versiones ahumada y en vinagre tienen bastante sodio (~650–750 mg por 100 g), algo a considerar si controlas la presión arterial.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El arenque tiene mucho sodio?</p>
              <p className="faq-a">
                Las versiones ahumada y en vinagre sí —entre 650 y 750 mg por 100 g. El sodio forma parte del proceso de conservación. Si controlas el sodio, limita la porción a unos 50 g y equilibra el resto de las comidas del día. El fresco tiene mucho menos sodio, pero es casi imposible de conseguir lejos de la costa.
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
                Creador de Mise. Compró arenque ahumado por curiosidad, no supo qué hacer con él durante una semana y terminó metiéndolo en la pasta. Quedó bien. Todavía le queda medio paquete en el refrigerador.
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
              Sabes lo que tienes en casa antes de ir al mercado —y dejas de comprar lo que ya tenías.
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
