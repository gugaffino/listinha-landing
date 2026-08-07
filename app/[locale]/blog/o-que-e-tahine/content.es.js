import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Qué es el tahini: pasta de sésamo, tipos y cómo usarlo',
  description: 'El tahini es una pasta hecha con semillas de sésamo molidas. Descubre qué es, la diferencia entre el blanco y el negro, cómo conservarlo y cómo usarlo más allá del hummus.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-tahine',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-tahine',
    },
  },
  openGraph: {
    title: 'Qué es el tahini: pasta de sésamo, tipos y cómo usarlo',
    description: 'El tahini es una pasta hecha con semillas de sésamo molidas. Descubre qué es, la diferencia entre el blanco y el negro, cómo conservarlo y cómo usarlo más allá del hummus.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine',
    images: [
      {
        url: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tazones de hummus cremoso con aceite de oliva y hierbas — el tahini es el ingrediente base',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es el tahini: pasta de sésamo, tipos y cómo usarlo',
    description: 'El tahini es una pasta hecha con semillas de sésamo molidas. Descubre qué es, la diferencia entre el blanco y el negro, cómo conservarlo y cómo usarlo más allá del hummus.',
    images: ['https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El tahini es lo mismo que la pasta de sésamo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Tahini y pasta de sésamo (o ajonjolí) son el mismo producto, solo con nombres distintos. "Tahini" viene del árabe "tahini" (طحينة). Vas a ver los dos nombres en etiquetas y recetas — el producto es idéntico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el tahini blanco y el negro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tahini blanco se hace con semillas de sésamo peladas: sabor más suave, color más claro, textura más fina. El negro usa semillas con cáscara, lo que da una pasta más oscura, con sabor más intenso y ligeramente amargo. El blanco es el más común y el más indicado para hummus y salsas. El negro aparece más en la cocina japonesa y en repostería.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conserva el tahini después de abierto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el refrigerador, abierto, dura de 6 a 12 meses sin problema. El aceite que sube a la superficie es normal — mézclalo bien antes de usar. Mantenlo siempre bien cerrado. Fuera del refrigerador aguanta unos meses en un lugar fresco y oscuro, pero el refrigerador es la opción más segura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El tahini tiene gluten o lactosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tahini puro no tiene gluten ni lactosa —es solo sésamo molido. Aun así, revisa siempre la etiqueta: algunas marcas lo procesan en fábricas que también manejan trigo, lo que puede causar contaminación cruzada. Si tienes enfermedad celíaca, busca la indicación "sin gluten" explícita en el empaque.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El tahini engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es calórico —unas 90 calorías por cucharada (15 g), con grasa insaturada como componente principal. En porciones razonables (1 a 2 cucharadas por comida), es un ingrediente nutritivo. El problema suele ser no medir cuánto usas en una salsa o un dip: el tahini se acaba más rápido de lo que parece.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede sustituir el tahini por otra pasta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de la receta. En salsas y aderezos, la crema de almendra o de semillas de girasol sin azúcar funciona como reemplazo en muchos casos —el sabor cambia, pero la textura es parecida. En el hummus, la sustitución altera bastante el resultado. Para el baba ganoush y otros platos árabes, el tahini es central y no tiene un sustituto con el mismo perfil.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es el tahini: pasta de sésamo, tipos y cómo usarlo',
  description: 'El tahini es una pasta hecha con semillas de sésamo molidas. Descubre qué es, la diferencia entre el blanco y el negro, cómo conservarlo y cómo usarlo más allá del hummus.',
  image: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el tahini', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine' },
  ],
}

export default function TahiniEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el tahini</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Qué es el tahini, cómo usarlo y si vale la pena tenerlo en casa
          </h1>
          <p className="blog-desc">
            La pasta de sésamo detrás del hummus, esa que está entre la crema de almendra y la de maní en el súper. Qué es el tahini en realidad, por qué se separa el aceite, la diferencia entre el blanco y el negro —y qué hacer con el frasco cuando ya hiciste hummus tres veces.
          </p>

          <div className="answer-box">
            <p>
              <strong>El tahini</strong> es una pasta hecha con semillas de sésamo molidas, sin nada más. El resultado es una crema densa, ligeramente amarga, con ese aroma característico a sésamo tostado. Es el ingrediente base del hummus, del baba ganoush y de varias salsas de la cocina árabe y mediterránea. También lo vas a encontrar como "pasta de ajonjolí" o "pasta de sésamo" —es el mismo producto.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tazones de hummus cremoso con aceite de oliva y hierbas — el tahini es el ingrediente base"
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
              <li><a href="#que-es">Qué es el tahini</a></li>
              <li><a href="#como-se-hace">Cómo se hace el tahini</a></li>
              <li><a href="#blanco-y-negro">Tahini blanco y negro</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#como-usar">Cómo usar el tahini en la cocina</a></li>
              <li><a href="#donde-comprar">Dónde comprarlo</a></li>
              <li><a href="#vale-la-pena">Vale la pena tenerlo en casa</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5755536/pexels-photo-5755536.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Semillas de sésamo blanco en un tazón pequeño de madera — la materia prima del tahini"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el tahini</h2>

          <p>
            El tahini es una pasta de semillas de sésamo molidas. El sésamo pasa por un tostado ligero y después se muele hasta quedar como una crema densa. Sabor terroso, ligeramente amargo, con ese toque a sésamo tostado que se reconoce de inmediato.
          </p>
          <p>
            El nombre viene del árabe "tahini" (طحينة). En español lo vas a ver escrito como "tahini", y en algunos empaques aparece simplemente como "pasta de sésamo" o "pasta de ajonjolí". Mismo producto, distintos nombres —sin diferencia real entre ellos.
          </p>
          <p>
            La cocina árabe lo usa desde hace siglos. Es la base del hummus (garbanzo, tahini, limón y ajo), del baba ganoush (berenjena asada con tahini) y del ful medames. El auge del hummus en supermercados en la última década es buena parte de la razón por la que el tahini ahora se consigue en tiendas comunes y ya no solo en mercados especializados en comida de Medio Oriente.
          </p>

          {/* CÓMO SE HACE */}
          <h2 id="como-se-hace">Cómo se hace el tahini —y por qué se separa el aceite</h2>

          <p>
            El proceso es directo. El sésamo se tuesta ligeramente y luego se muele con equipo industrial hasta volverse pasta. Sin aditivos, sin conservantes, y la mayoría de las versiones no llevan sal. El único ingrediente es el sésamo.
          </p>
          <p>
            El aceite que sube a la superficie del frasco es completamente normal —es el propio aceite del sésamo separándose de la pasta, no una señal de que se echó a perder. Mucha gente tira un frasco entero por esto. Mézclalo bien con una cuchara antes de usarlo y listo. Al principio, con el frasco lleno, cuesta más mezclar; con menos contenido, se hace más fácil.
          </p>
          <p>
            Un tahini de buena calidad tiene textura uniforme una vez mezclado, color beige claro (en el caso del blanco) y aroma característico a sésamo. Una textura muy granulada o un olor rancio indican un producto viejo o mal guardado.
          </p>

          {/* BLANCO Y NEGRO */}
          <h2 id="blanco-y-negro">Tahini blanco y negro: cuál es la diferencia</h2>

          <p>
            Dos tipos aparecen con frecuencia en tiendas y recetas.
          </p>

          <h3>Tahini blanco</h3>
          <p>
            Hecho con semillas de sésamo peladas, sin la cáscara exterior. Sabor más suave, color más claro, textura más fina. Es el más común y el más indicado para hummus, salsas y recetas que necesitan un sabor de fondo neutro. Si la receta no especifica el tipo, usa el blanco.
          </p>

          <h3>Tahini negro (o integral)</h3>
          <p>
            Hecho con sésamo sin pelar, lo que le da un color oscuro y un sabor más intenso y ligeramente amargo. Aparece con más frecuencia en la cocina japonesa —salsas de miso, aderezos, algunos toppings de ramen— y en repostería, donde el color forma parte de la presentación. Más difícil de encontrar y, en general, más caro. No es la primera opción si estás empezando a usar tahini.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes del tahini</h2>

          <p>
            Dos cucharadas de tahini blanco (30 g) tienen aproximadamente 170 calorías, 5 g de proteína, 15 g de grasa y 6 g de carbohidratos. La grasa es mayoritariamente insaturada —el mismo perfil que el aceite de oliva.
          </p>
          <p>
            El tahini es una fuente relevante de calcio, hierro, vitamina E y vitaminas del complejo B, especialmente B1. Tiene cobre en cantidad razonable, que ayuda a la absorción del hierro. El tahini integral (sin pelar) tiene todavía más minerales que el blanco, porque parte de los nutrientes se concentra en la cáscara.
          </p>
          <p>
            Para quien busca aumentar el consumo de calcio sin lácteos, el tahini es una de las mejores opciones vegetales disponibles. No llega a lo que aporta un vaso de leche por porción, pero comparado con otras cremas vegetales, se destaca. Lo mismo aplica para su{' '}
            <a href="/es/blog/alimentos-ricos-em-proteinas">perfil de proteína</a>
            {' '}—no es tan alto como el del huevo o el pollo, pero 5 g por cucharada es bastante para una pasta.
          </p>
          <p>
            Una observación necesaria: el tahini es calórico. Dos cucharadas llegan a 170 calorías, y la cantidad que usas en una salsa o en hummus crece rápido sin que te des cuenta. Es nutritivo, pero no es algo para servir sin prestar atención a la cantidad.
          </p>

          {/* CÓMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6419747/pexels-photo-6419747.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedad de hummus en tazones pequeños con diferentes toppings — tahini en varias presentaciones"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el tahini en la cocina</h2>

          <h3>En el hummus</h3>
          <p>
            La receta principal. 400 g de garbanzo cocido, 3 cucharadas de tahini, jugo de medio limón, 1 diente de ajo y sal. Licúa o procesa, ajusta el limón y la sal. El tahini es lo que le da la cremosidad y el sabor de fondo —sin él, es puré de garbanzo, no hummus.
          </p>

          <h3>Como salsa</h3>
          <p>
            La combinación más versátil: tahini, jugo de limón, agua y sal. Mezcla hasta que quede cremoso, agregando el agua poco a poco para ajustar la textura. Va bien sobre falafel, verduras asadas, pollo a la parrilla, ensaladas con granos. Agrega ajo y perejil si quieres más sabor. Es una salsa que se hace en dos minutos y cambia el plato por completo.
          </p>

          <h3>En el baba ganoush</h3>
          <p>
            Berenjena entera asada al horno, o directamente sobre la flama para darle un toque ahumado, luego pelada y mezclada con tahini, ajo y limón. Machácala sin que quede totalmente lisa —no hace falta. Sirve como entrada, como acompañamiento o como dip para pan pita o verduras.
          </p>

          <h3>En postres y en el desayuno</h3>
          <p>
            El tahini con miel es una combinación simple que funciona muy bien —sobre yogur, en tostadas, en helado de vainilla. La dulzura de la miel equilibra el amargor del sésamo. En galletas y brownies, puede reemplazar parte de la mantequilla y aporta un sabor distinto. Una cucharada de tahini con miel y una pizca de sal sobre un tazón de yogur con fruta es un desayuno diferente sin esfuerzo.
          </p>

          <div className="blog-inline-cta">
            <p>Saber qué hay en la despensa antes de ir a comprar cambia la lista. <em>Mise se encarga de eso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* DÓNDE COMPRAR */}
          <h2 id="donde-comprar">Dónde comprar tahini</h2>

          <p>
            El tahini dejó de ser exclusivo de tiendas árabes especializadas. Hoy se encuentra en varios canales.
          </p>

          <h3>Supermercados grandes</h3>
          <p>
            La mayoría de los supermercados con sección de productos naturales o internacionales tiene al menos una marca. Busca en el pasillo de cremas vegetales o de productos naturales, cerca de la crema de maní. No siempre está en un lugar visible, pero suele estar.
          </p>

          <h3>Tiendas especializadas en comida de Medio Oriente</h3>
          <p>
            La mejor selección. Ahí encuentras marcas artesanales, versiones importadas y tahini integral, más difícil de conseguir en el supermercado normal. Si tienes una tienda árabe o mediterránea cerca, vale la pena comparar la calidad con lo que venden en el súper.
          </p>

          <h3>En línea</h3>
          <p>
            El mayor volumen de marcas y opciones. Compara siempre el precio por gramo —los frascos de 200 g a 500 g tienen diferencias importantes en el costo por uso. El envío puede hacer que no valga la pena una compra pequeña, así que conviene combinarlo con otros artículos de tu{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista de compras</a>
            {' '}en un pedido más grande.
          </p>

          <p>
            El precio varía bastante según el país y la marca, pero en general el tahini importado cuesta más que otras cremas vegetales locales. Para la primera compra, un frasco pequeño alcanza para probar antes de comprar en cantidad.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena tenerlo en casa</h2>

          <p>Si vas a hacer hummus casero: sí. Sin tahini, el hummus no es hummus —es solo puré de garbanzo.</p>
          <p>
            Si quieres variar tus salsas, la salsa de tahini (tahini + limón + agua) es rápida, versátil y distinta a cualquier cosa que hagas normalmente. Vale la pena tener un frasco en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>
            {' '}—una vez abierto, dura de 6 a 12 meses en el refrigerador.
          </p>
          <p>
            Si es tu primera vez, compra un frasco pequeño. El tahini tiene un sabor característico que no a todo el mundo le gusta de inmediato, sobre todo el amargor residual. Pruébalo antes de comprar en volumen.
          </p>
          <p>
            No es un básico de la{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista de compras</a>
            {' '}de todas las semanas. Pero si cocinas con garbanzo, berenjena o buscas variar tus salsas, entra fácil a la rutina y dura bastante en el frasco.
          </p>
          <p>
            Tahini en la alacena por un año, hummus hecho una vez. Aun así, valió la pena.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el tahini</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El tahini es lo mismo que la pasta de sésamo?</p>
              <p className="faq-a">
                Sí. Son nombres distintos para el mismo producto. "Tahini" viene del árabe "tahini". En el empaque puedes ver cualquiera de los dos nombres —el producto es idéntico.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el tahini blanco y el negro?</p>
              <p className="faq-a">
                El blanco usa sésamo pelado —sabor más suave, color claro. El negro usa sésamo con cáscara —más oscuro, más amargo, más intenso. Para hummus y salsas, usa el blanco. El negro aparece más en la cocina japonesa y en repostería.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conserva el tahini después de abierto?</p>
              <p className="faq-a">
                En el refrigerador, abierto, dura de 6 a 12 meses. El aceite que sube a la superficie es normal —mézclalo bien antes de usar. Mantenlo bien cerrado. Fuera del refrigerador aguanta unos meses en un lugar fresco, pero el refrigerador es más seguro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El tahini tiene gluten o lactosa?</p>
              <p className="faq-a">
                El tahini puro no tiene gluten ni lactosa —es solo sésamo. Revisa la etiqueta: algunas marcas lo procesan en fábricas con trigo, lo que puede causar contaminación cruzada. Si tienes enfermedad celíaca, busca "sin gluten" explícito en el empaque.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El tahini engorda?</p>
              <p className="faq-a">
                Es calórico —unas 90 calorías por cucharada (15 g), con grasa insaturada como componente principal. En porciones razonables (1 a 2 cucharadas por comida), es nutritivo. El problema suele ser no medir cuánto usas en salsas y pastas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede sustituir el tahini por otra pasta?</p>
              <p className="faq-a">
                En salsas y aderezos, la crema de almendra natural (sin azúcar) funciona en muchos casos —el sabor cambia, pero la textura es parecida. En el hummus, la sustitución altera bastante el resultado. Para el baba ganoush y platos árabes, el tahini es central y no tiene un sustituto con el mismo perfil.
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
                Creador de Mise. Compró tahini para hacer hummus en 2023. Hizo el hummus una vez. El frasco se quedó en la puerta del refrigerador hasta que desapareció solo a fin de año.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa organizada.<br />
              <em>La lista se arma sola.</em>
            </h2>
            <p>
              Mise conecta lo que tienes en la despensa con tu lista de compras. Compras lo que realmente vas a usar —y el tahini no se queda olvidado en el estante.
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
