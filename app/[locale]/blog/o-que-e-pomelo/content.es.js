import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Pomelo chino: qué es y en qué se diferencia del pomelo o la toronja',
  description: 'El pomelo chino es la fruta cítrica más grande del mundo y el ancestro directo de tu pomelo (o toronja) de siempre, pero no es la misma fruta. Diferencias, nutrición y cómo comerlo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pomelo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pomelo',
    },
  },
  openGraph: {
    title: 'Pomelo chino: qué es y en qué se diferencia del pomelo o la toronja',
    description: 'El pomelo chino es la fruta cítrica más grande del mundo y el ancestro directo de tu pomelo (o toronja) de siempre, pero no es la misma fruta. Diferencias, nutrición y cómo comerlo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rodajas de frutas cítricas sobre mármol — limón, naranja y toronja en una composición plana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pomelo chino: qué es y en qué se diferencia del pomelo o la toronja',
    description: 'El pomelo chino es la fruta cítrica más grande del mundo y el ancestro directo de tu pomelo (o toronja) de siempre, pero no es la misma fruta. Diferencias, nutrición y cómo comerlo.',
    images: ['https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Pomelo, toronja y pomelo chino son la misma fruta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No exactamente. En la mayoría de los países de habla hispana, "pomelo" (Argentina, Chile, España) y "toronja" (México) son dos nombres para la misma fruta: Citrus paradisi, grapefruit en inglés. El pomelo chino es otra especie — Citrus maxima —, la fruta cítrica más grande que existe, nativa del sudeste asiático y ancestro directo del pomelo o toronja que ya conoces. Mismo árbol genealógico, fruta distinta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pomelo chino es tan amargo como el pomelo o la toronja de siempre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, es más suave. Tiene un sabor agridulce más equilibrado — cítrico y refrescante, sin el amargor intenso que caracteriza al pomelo o la toronja de todos los días. Las variedades de pulpa rosada o roja suelen ser más dulces; las blancas y amarillas, un poco más ácidas. Si el pomelo o la toronja te resultan demasiado amargos, el pomelo chino suele ser más fácil de disfrutar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer pomelo chino si tomo medicamentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fíjate primero si tu receta advierte evitar toronja o pomelo — estatinas y algunos medicamentos para la presión son los casos más comunes. El pomelo chino tiene furanocumarinas, los mismos compuestos que interfieren en cómo el cuerpo procesa ciertos fármacos. Si la advertencia menciona pomelo o toronja, aplica también al pomelo chino. Consulta con tu médico o farmacéutico antes de comerlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo saber si el pomelo chino está maduro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El peso es la prueba real — tiene que sentirse pesado para su tamaño. El color no es confiable: puede estar verde por fuera y maduro por dentro, según la variedad. Apriétalo suavemente: debe ceder un poco y volver a su forma. Si está blando o tiene manchas oscuras, ya pasó su punto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda el pomelo chino en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entero, a temperatura ambiente, dura de 1 a 2 semanas. En la heladera, hasta un mes — la cáscara gruesa lo protege y frena la pérdida de humedad mejor que la mayoría de los cítricos. Una vez cortado, tápalo y úsalo dentro de los 3 días.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde se puede comprar pomelo chino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los supermercados y verdulerías asiáticas lo tienen con más regularidad, sobre todo en ciudades con comunidad china o del sudeste asiático grande. Supermercados grandes y tiendas especializadas lo ofrecen de forma estacional, generalmente entre otoño e invierno. En ferias de productores depende mucho de la región.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pomelo chino es realmente bueno para la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una buena fuente de vitamina C, fibra y potasio, con unas 38 calorías cada 100 g de pulpa. También tiene antioxidantes como naringenina y licopeno. Como cualquier fruta, forma parte de una alimentación variada — no es un superalimento, pero es una buena opción cuando está en temporada y te gusta el sabor.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pomelo chino: qué es y en qué se diferencia del pomelo o la toronja',
  description: 'El pomelo chino es la fruta cítrica más grande del mundo y el ancestro directo de tu pomelo (o toronja) de siempre, pero no es la misma fruta. Diferencias, nutrición y cómo comerlo.',
  image: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pomelo chino vs toronja', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo' },
  ],
}

export default function PomeloEs() {
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

        <nav className="breadcrumb" aria-label="Estás en">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Pomelo chino vs toronja</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-28">28 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            El pomelo chino no es un pomelo gigante — esto es lo que es en realidad
          </h1>
          <p className="blog-desc">
            Fruta enorme, cáscara bien gruesa y un nombre que confunde en cualquier país donde lo busques. Qué es en realidad el pomelo chino, qué relación tiene con el pomelo (o la toronja) de siempre, y si vale la pena sumarlo a tu lista de compras.
          </p>

          <div className="answer-box">
            <p>
              El <strong>pomelo chino</strong> (<em>Citrus maxima</em>) es la fruta cítrica más grande que existe — puede llegar a pesar 2 kg, con una cáscara gruesa que va del verde al amarillo pálido.
              Es una especie pura, nativa del sudeste asiático, y es el <strong>ancestro directo del pomelo o la toronja</strong> que ya conoces — no la misma fruta.
              Sabor agridulce, menos amargo que el pomelo o la toronja de todos los días, con pulpa que puede ser blanca, amarilla, rosada o roja.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Rodajas de frutas cítricas — naranja, toronja y limón dispuestas sobre mármol blanco en flatlay"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Aleksandar Pasaric / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el pomelo chino en realidad</a></li>
              <li><a href="#vs-toronja">Pomelo, toronja y pomelo chino: quién es quién</a></li>
              <li><a href="#nutricion">Información nutricional por porción</a></li>
              <li><a href="#como-comer">Cómo comer pomelo chino</a></li>
              <li><a href="#como-elegir">Cómo elegirlo y guardarlo</a></li>
              <li><a href="#donde-comprar">Dónde comprarlo y cuánto cuesta</a></li>
              <li><a href="#vale-la-pena">Vale la pena sumarlo a tu lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9466718/pexels-photo-9466718.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Hombre sosteniendo un pomelo chino entero frente a su rostro, mostrando el tamaño real de la fruta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ron Lach / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el pomelo chino en realidad</h2>

          <p>
            El pomelo chino es una fruta cítrica — la más grande de todas. Su nombre científico es <em>Citrus maxima</em>, aunque en algunos países también se lo conoce como pamplemusa o limonzón. Una pieza adulta pesa entre 1 y 2 kg, y buena parte de ese peso es cáscara: gruesa, esponjosa, de 3 a 5 cm de espesor.
          </p>
          <p>
            La pulpa está dividida en gajos, igual que en una naranja o en el pomelo de todos los días. El color varía según la variedad: blanco y amarillo pálido son los más comunes; rosado y rojo tienden a ser más dulces y menos ácidos.
          </p>
          <p>
            El sabor es cítrico y refrescante — bastante más suave que el pomelo o la toronja que probablemente ya conoces. La cáscara gruesa tiene aceites esenciales aromáticos, así que funciona como ralladura en recetas igual que cualquier cítrico.
          </p>
          <p>
            El árbol es nativo del sudeste asiático — sobre todo Malasia, Tailandia y el sur de China. En la cultura china tiene siglos de historia y aparece en celebraciones como el Año Nuevo Lunar. En Latinoamérica y España, casi toda la fruta que llega al mercado es importada, y en volúmenes chicos.
          </p>

          {/* VS TORONJA */}
          <h2 id="vs-toronja">Pomelo, toronja y pomelo chino: quién es quién</h2>

          <p>
            Acá está la parte que genera más confusión, y tiene que ver con el idioma más que con la fruta. En Argentina, Chile y España, "pomelo" es la palabra de todos los días para esa fruta cítrica ácida y algo amarga que ya conoces — la misma que en México se llama "toronja". Mismo fruto, nombre distinto según el país.
          </p>
          <p>
            Esa fruta de todos los días —le digas pomelo o toronja— es <em>Citrus paradisi</em>, conocida en inglés como <em>grapefruit</em>. No es la fruta gigante de la que habla este artículo.
          </p>
          <p>
            El pomelo chino es otra cosa. Son frutas diferentes:
          </p>
          <ul className="item-list">
            <li><strong>Pomelo chino</strong> (<em>Citrus maxima</em>) — especie pura y original. Mucho más grande. Cáscara muy gruesa. Sabor más suave y dulce.</li>
            <li><strong>Pomelo / toronja</strong> (<em>Citrus paradisi</em>) — híbrido accidental entre pomelo chino y naranja dulce, documentado en Barbados en el siglo 18. Más chico. Cáscara más fina. Más ácido y amargo.</li>
          </ul>
          <p>
            El pomelo chino es el ancestro. El pomelo o toronja que comes todas las semanas desciende de él. Son parientes — no la misma fruta.
          </p>
          <p>
            Si en la verdulería ves una fruta enorme etiquetada simplemente como "pomelo", fíjate bien: lo más probable es que sea el pomelo chino, no tu pomelo de siempre. El tamaño y el grosor de la cáscara son la pista más confiable.
          </p>

          {/* NUTRICION */}
          <h2 id="nutricion">Información nutricional por porción</h2>

          <p>
            El pomelo chino tiene unas 38 calorías cada 100 g de pulpa. Para una fruta de este tamaño es poco — el detalle es que una pieza entera tiene mucho más de 100 g comestibles una vez que le sacas la cáscara.
          </p>
          <p>
            Es una buena fuente de vitamina C — una porción razonable cubre buena parte de lo que necesitas por día. También tiene fibra, potasio y antioxidantes, principalmente naringenina y licopeno. La naringenina es el mismo flavonoide presente en alta concentración en el pomelo o la toronja de todos los días, asociado a efectos antiinflamatorios en estudios de laboratorio.
          </p>
          <p>
            <strong>Un aviso importante:</strong> el pomelo chino tiene furanocumarinas — los mismos compuestos del pomelo o la toronja que interfieren en cómo el hígado procesa ciertos medicamentos. Si tomas estatinas para el colesterol, o cualquier remedio con advertencia de evitar toronja o pomelo, evita el pomelo chino también. Es la misma interacción. Consulta con tu médico o farmacéutico antes.
          </p>

          {/* COMO COMER */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mitades de frutas cítricas variadas sobre una tabla de madera — naranja, toronja y limón"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jane T D. / Pexels</p>
          </div>

          <h2 id="como-comer" className="img-above">Cómo comer pomelo chino</h2>

          <p>
            La cáscara gruesa tiene una ventaja práctica: se puede pelar a mano, sin cuchillo especial. Corta una tapa de unos 3 cm en la parte de arriba. Haz cortes verticales en la cáscara, de arriba a abajo, separados más o menos como los gajos de una naranja. Tira con los dedos — la cáscara sale en pedazos grandes.
          </p>
          <p>
            Después separa los gajos. Cada uno tiene una membrana más gruesa que la de una naranja. Puedes comerlo con membrana o sacarla — sin ella, la pulpa queda notablemente más suave y dulce.
          </p>
          <p>
            Formas de usarlo:
          </p>
          <ul className="item-list">
            <li><strong>Solo, fresco</strong> — la opción más simple. Frío está todavía mejor.</li>
            <li><strong>En ensaladas</strong> — combina bien con hojas amargas, queso de cabra y frutos secos tostados. El dulzor equilibra el amargor de las hojas.</li>
            <li><strong>En jugos y cócteles</strong> — mezcla bien con ananá, manzana verde y jengibre. El jugo puro puede ser intenso solo — mejor combinarlo con otra fruta.</li>
            <li><strong>Con mariscos</strong> — combinación clásica en la cocina tailandesa. Pruébalo con camarones a la plancha y salsa de pescado.</li>
          </ul>
          <p>
            La cáscara en sí es técnicamente comestible. En almíbar funciona como un dulce, y la ralladura sirve en cualquier receta que pida cítricos. Pero la mayoría de la gente come solo la pulpa y tira el resto.
          </p>
          <p>
            Si el pomelo chino no es el cítrico que más conoces, forma parte de la misma familia que{' '}
            <a href="/es/blog/frutas-citricas">naranjas, limones y pomelos</a>
            {' '}— vale la pena conocer toda la familia antes de decidir qué entra de verdad en tu frutero.
          </p>

          {/* COMO ELEGIR */}
          <h2 id="como-elegir">Cómo elegirlo y guardarlo</h2>

          <p>
            Levántalo y fíjate el peso. Tiene que sentirse pesado para su tamaño — si es muy liviano, probablemente esté seco por dentro. El color de la cáscara no es un indicador confiable de madurez: el pomelo chino puede verse verde por fuera y estar perfectamente maduro por dentro, según la variedad.
          </p>
          <p>
            Apriétalo suavemente: debe ceder un poco y volver a su forma. Manchas oscuras o una textura demasiado blanda significan que ya pasó su punto.
          </p>
          <p>
            Para guardarlo: entero, dura de 1 a 2 semanas a temperatura ambiente. En la heladera, hasta un mes — la cáscara gruesa protege la fruta y frena la pérdida de humedad mejor que la mayoría de los cítricos. Una vez cortado, tápalo y úsalo dentro de los 3 días.
          </p>

          {/* DONDE COMPRAR */}
          <h2 id="donde-comprar">Dónde comprarlo y cuánto cuesta</h2>

          <p>
            La distribución es despareja. El pomelo chino no es una fruta de góndola habitual — no aparece en cualquier supermercado, de cualquier ciudad, todo el año.
          </p>
          <p>
            Dónde buscarlo:
          </p>
          <ul className="item-list">
            <li><strong>Verdulerías y supermercados asiáticos</strong> — la fuente más confiable en la mayoría de las ciudades grandes, sobre todo donde hay comunidad china o del sudeste asiático.</li>
            <li><strong>Supermercados grandes y tiendas gourmet</strong> — algunas cadenas lo tienen de forma estacional, generalmente entre otoño e invierno.</li>
            <li><strong>Ferias y mercados de productores</strong> — depende mucho de la región y la temporada.</li>
          </ul>
          <p>
            El precio varía bastante. La fruta se ve enorme, pero buena parte de ese peso es cáscara. Compara por la pulpa real, no por el precio de la pieza. Un tip: cuando encuentras uno bueno a buen precio, anota dónde fue. Como con cualquier ingrediente de disponibilidad irregular, llevar registro del lugar confiable ayuda — una{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}hace que sea más fácil de recordar.
          </p>

          <div className="blog-inline-cta">
            <p>Fruta de estación, despensa organizada. <em>Mise se encarga del resto.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena sumarlo a tu lista</h2>

          <p>Depende de qué piensas hacer con él.</p>
          <p>
            Si ya comes cítricos con regularidad y quieres variar, el pomelo chino es una buena opción. Sabor distinto, pocas calorías, y aguanta bien en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>
            {' '}— semanas sin echarse a perder, gracias a esa cáscara gruesa.
          </p>
          <p>
            Si la idea surgió de una receta o de la curiosidad en la verdulería, compra uno, pruébalo y después decides. El pomelo chino no es una fruta que compres todas las semanas sin saber si te gusta.
          </p>
          <p>
            No es un básico de todos los días — pero cuando está en temporada y el precio es justo, vale la pena probarlo al menos una vez. Es una de las pocas frutas cítricas que todavía sorprende a quien la prueba por primera vez.
          </p>
          <p>
            La cáscara termina en la basura de todas formas.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el pomelo chino</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Pomelo, toronja y pomelo chino son la misma fruta?</p>
              <p className="faq-a">
                No exactamente. En la mayoría de los países de habla hispana, "pomelo" (Argentina, Chile, España) y "toronja" (México) son dos nombres para la misma fruta: <em>Citrus paradisi</em>, grapefruit en inglés. El pomelo chino es otra especie — <em>Citrus maxima</em> —, la fruta cítrica más grande que existe, nativa del sudeste asiático y ancestro directo del pomelo o toronja que ya conoces. Mismo árbol genealógico, fruta distinta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pomelo chino es tan amargo como el pomelo o la toronja de siempre?</p>
              <p className="faq-a">
                No, es más suave. Tiene un sabor agridulce más equilibrado — cítrico y refrescante, sin el amargor intenso que caracteriza al pomelo o la toronja de todos los días. Las variedades de pulpa rosada o roja suelen ser más dulces; las blancas y amarillas, un poco más ácidas. Si el pomelo o la toronja te resultan demasiado amargos, el pomelo chino suele ser más fácil de disfrutar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer pomelo chino si tomo medicamentos?</p>
              <p className="faq-a">
                Fíjate primero si tu receta advierte evitar toronja o pomelo — estatinas y algunos medicamentos para la presión son los casos más comunes. El pomelo chino tiene furanocumarinas, los mismos compuestos que interfieren en cómo el cuerpo procesa ciertos fármacos. Si la advertencia menciona pomelo o toronja, aplica también al pomelo chino. Consulta con tu médico o farmacéutico antes de comerlo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo saber si el pomelo chino está maduro?</p>
              <p className="faq-a">
                El peso es la prueba real — tiene que sentirse pesado para su tamaño. El color no es confiable: puede estar verde por fuera y maduro por dentro. Apriétalo suavemente: debe ceder un poco y volver a su forma. Si está blando o tiene manchas oscuras, ya pasó su punto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda el pomelo chino en casa?</p>
              <p className="faq-a">
                Entero, a temperatura ambiente, dura de 1 a 2 semanas. En la heladera, hasta un mes. La cáscara gruesa lo protege y frena la pérdida de humedad. Una vez cortado, tápalo y úsalo dentro de los 3 días.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde se puede comprar pomelo chino?</p>
              <p className="faq-a">
                Los supermercados y verdulerías asiáticas lo tienen con más regularidad, sobre todo en ciudades con comunidad china o del sudeste asiático grande. Supermercados grandes y tiendas especializadas lo ofrecen de forma estacional, generalmente entre otoño e invierno. En ferias de productores depende mucho de la región.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pomelo chino es realmente bueno para la salud?</p>
              <p className="faq-a">
                Es una buena fuente de vitamina C, fibra y potasio, con unas 38 calorías cada 100 g de pulpa. También tiene antioxidantes como naringenina y licopeno. Como cualquier fruta, forma parte de una alimentación variada — no es un superalimento, pero es una buena opción cuando está en temporada y te gusta el sabor.
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
                Lidera Mise. Una vez compró "pomelo" en la verdulería convencido de que era la fruta gigante, y resultó ser la toronja de toda la vida. Igual hizo jugo.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que hay en la despensa.<br />
              <em>Deja que Mise se encargue del resto.</em>
            </h2>
            <p>
              Despensa, recetas y lista de compras en un solo lugar.
              Compras lo que realmente vas a usar, así el pomelo chino no termina olvidado en el cajón de las verduras.
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
