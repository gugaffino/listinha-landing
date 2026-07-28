import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Rábano picante: qué es, para qué sirve y cómo conservarlo',
  description: 'El rábano picante es la raíz detrás de la salsa de asado y el falso wasabi de sushi. Qué es, en qué se diferencia del wasabi real y cómo guardarlo para que dure.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-raiz-forte',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-raiz-forte',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-raiz-forte',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-raiz-forte',
    },
  },
  openGraph: {
    title: 'Rábano picante: qué es, para qué sirve y cómo conservarlo',
    description: 'El rábano picante es la raíz detrás de la salsa de asado y el falso wasabi de sushi. Qué es, en qué se diferencia del wasabi real y cómo guardarlo para que dure.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-raiz-forte',
    images: [
      {
        url: 'https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Planta de rábano picante con hojas verdes anchas — Armoracia rusticana creciendo en el campo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rábano picante: qué es, para qué sirve y cómo conservarlo',
    description: 'El rábano picante es la raíz detrás de la salsa de asado y el falso wasabi de sushi. Qué es, en qué se diferencia del wasabi real y cómo guardarlo para que dure.',
    images: ['https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El rábano picante es lo mismo que el wasabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Son plantas distintas. El rábano picante es Armoracia rusticana, originaria de Europa. El wasabi es Wasabia japonica, cultivado en Japón. El wasabi real es raro y caro incluso en Japón. Lo que llega como "wasabi" en la mayoría de los restaurantes fuera de Japón casi siempre es rábano picante con colorante verde — práctica estándar en casi todo el mundo, no un atajo exclusivo de ningún país.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer rábano picante crudo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y es la forma más común de usarlo. La raíz se ralla fresca y se mezcla en salsas o vinagretas, o se sirve tal cual. El calor destruye el picor, así que cocinarlo suaviza rápido esa ardencia característica. Para conservar el picor, se usa crudo o se agrega cuando la sartén ya está fuera del fuego.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo rallar rábano picante sin que te ardan los ojos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rállalo en un lugar ventilado, idealmente cerca de una ventana abierta. Mezcla vinagre blanco o jugo de limón justo después de rallarlo — eso neutraliza los compuestos volátiles y corta la ardencia. Trabaja rápido y mantén la cara un poco alejada del rallador. Es más fuerte que la cebolla, pero se pasa rápido una vez que los compuestos se neutralizan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El rábano picante necesita refrigerarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La raíz fresca necesita frío y humedad controlada para no resecarse — en el refrigerador, envuelta en una toalla de papel apenas húmeda, aguanta de uno a dos meses. Un frasco abierto de rábano picante preparado también va al refrigerador. No es un producto de alacena una vez abierto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El rábano picante es bueno para la salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiene vitamina C, potasio, calcio y magnesio, además de compuestos que muestran propiedades antimicrobianas en estudios de laboratorio. Pero es un condimento — la cantidad que se usa por porción es pequeña. Cualquier beneficio nutricional real viene de la alimentación en conjunto, no de una cucharada de una raíz picante.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué se puede preparar con rábano picante además de salsa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rábano picante rallado funciona en vinagretas con hojas amargas como rúcula o radicchio, mezclado en sopa de remolacha o de papa, sobre salmón a la parrilla o un huevo pasado por agua, y batido en mantequilla compuesta. El frasco preparado reemplaza a la mostaza en un sándwich de roast beef o pastrami. En la cocina asquenazí, el jrein — rábano picante con remolacha — es el condimento tradicional de Pésaj.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rábano picante: qué es, para qué sirve y cómo conservarlo',
  description: 'El rábano picante es la raíz detrás de la salsa de asado y el falso wasabi de sushi. Qué es, en qué se diferencia del wasabi real y cómo guardarlo para que dure.',
  image: 'https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-raiz-forte',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el rábano picante', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-raiz-forte' },
  ],
}

export default function HorseradishEs() {
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
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Qué es el rábano picante</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-28">28 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Rábano picante: la raíz que se esconde detrás del falso wasabi de sushi
          </h1>
          <p className="blog-desc">
            La raíz blanca y picante que aparece junto al asado, se mezcla en la salsa cóctel y hace de &quot;wasabi&quot; en casi cualquier barra de sushi que no esté en Japón. Qué es realmente, de dónde viene y cómo evitar que se convierta en un experimento científico en el cajón de las verduras.
          </p>

          <div className="answer-box">
            <p>
              El <strong>rábano picante</strong> (<em>Armoracia rusticana</em>) es una raíz de la familia de la mostaza, emparentada con el brócoli, el repollo y la col rizada.
              Rallada, libera un picor intenso que sube directo a la nariz y se va tan rápido como llegó.
              Se usa casi siempre como condimento — mezclada en salsas que acompañan carnes asadas, pescados ahumados y fiambres.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4173471/pexels-photo-4173471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Planta de rábano picante con hojas verdes anchas — Armoracia rusticana creciendo en el campo"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el rábano picante</a></li>
              <li><a href="#origen">De dónde viene</a></li>
              <li><a href="#vs-wasabi">Rábano picante vs. wasabi</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#donde-comprar">Dónde comprarlo</a></li>
              <li><a href="#como-conservar">Cómo conservarlo en casa</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5537267/pexels-photo-5537267.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Raíz de rábano picante cruda sobre una tabla de madera — raíz blanca gruesa con cáscara clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el rábano picante</h2>

          <p>
            El rábano picante es la raíz de una planta llamada <em>Armoracia rusticana</em>, de la misma familia que el brócoli, el repollo y la mostaza — las Brassicaceae. El nombre científico no dice mucho. El olfato tampoco, al principio.
          </p>
          <p>
            La raíz se ve como una chirivía gigante y retorcida: larga, gruesa, con cáscara entre beige y grisácea. Por dentro, la pulpa es blanca y firme. Casi no tiene olor — hasta que empiezas a rallarla. Ahí se liberan los compuestos volátiles (sobre todo el isotiocianato de alilo) y mandan un picor directo a los senos nasales. A diferencia del ají, que se queda en la lengua, el rábano picante va por la nariz. Cualquiera que lo haya rallado en una cocina cerrada aprende la diferencia en cuatro segundos.
          </p>
          <p>
            Es un ingrediente antiguo en la cocina europea, documentado desde al menos la Edad Media como raíz medicinal y condimento. Fue parte fija de las cocinas de Europa Central y del Este durante siglos, mucho antes de convertirse en el frasco de rigor en cualquier parrilla.
          </p>
          <p>
            Si alguna vez tomaste un Bloody Mary que te despejó la nariz más que el vodka, o mordiste lo que un menú de sushi llamaba &quot;wasabi&quot; y sentiste un ardor que no esperabas, ya conociste el rábano picante. Solo no sabías su nombre.
          </p>

          {/* ORIGEN */}
          <h2 id="origen">De dónde viene el rábano picante</h2>

          <p>
            La planta es originaria del sureste de Europa y Asia occidental, probablemente cultivada por primera vez en algún punto entre los Balcanes y el mar Caspio. Se extendió por el resto de Europa como raíz medicinal antes de convertirse en condimento de mesa — usada por egipcios y griegos, y luego adoptada ampliamente en Alemania, Polonia y Europa Central.
          </p>
          <p>
            Llegó a América con los colonos europeos y se afincó en un puñado de regiones productoras concretas. En Estados Unidos, el grueso se cultiva alrededor de Collinsville, Illinois, que hasta tiene un festival anual dedicado a la raíz. Europa del Este y China siguen siendo grandes productores a nivel mundial. En Latinoamérica, el cultivo es marginal y la raíz fresca rara vez aparece fuera de mercados especializados o huertas caseras.
          </p>
          <p>
            Esto explica por qué el rábano picante fresco no aparece en cualquier verdulería, incluso donde se cultiva a escala. El rábano picante preparado — rallado y conservado en vinagre — tiene una distribución mucho más amplia que la raíz cruda.
          </p>

          {/* VS WASABI */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5757480/pexels-photo-5757480.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasta verde de wasabi y rábano picante en un plato japonés junto a sushi — condimentos picantes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="vs-wasabi" className="img-above">Rábano picante vs. wasabi: qué es distinto en realidad</h2>

          <p>
            El wasabi real viene de otra planta por completo: <em>Wasabia japonica</em>, cultivada en Japón bajo condiciones específicas de agua, temperatura y sombra. Es difícil y lenta de cultivar. Fuera de Japón, el rizoma fresco de wasabi es casi imposible de conseguir — y cuando aparece, es caro.
          </p>
          <p>
            Lo que llega como &quot;wasabi&quot; en la mayoría de las barras de sushi — la pastita verde del paquete, el tubo de la heladera — casi siempre es rábano picante mezclado con colorante verde y un poco de mostaza en polvo. Esto no es un atajo exclusivo de ningún país. Es la norma en casi todas partes, incluida buena parte de los restaurantes dentro del propio Japón, fuera de los de alta gama.
          </p>
          <p>
            Las diferencias prácticas entre los dos:
          </p>
          <ul className="item-list">
            <li><strong>Origen:</strong> el rábano picante es europeo; el wasabi es japonés.</li>
            <li><strong>Planta:</strong> géneros y especies distintos, aunque ambos están en la familia Brassicaceae.</li>
            <li><strong>Picor:</strong> el ardor del rábano picante dura más en la boca. El del wasabi real es más fugaz, con un dulzor herbáceo de fondo.</li>
            <li><strong>Precio:</strong> el rábano picante es mucho más barato. El wasabi real puede costar decenas de veces más.</li>
            <li><strong>Disponibilidad:</strong> el rábano picante se consigue fácil, fresco o en frasco. El wasabi real es improbable fuera de restaurantes japoneses especializados.</li>
          </ul>
          <p>
            En la práctica: lo que vas a encontrar y cocinar es rábano picante, sin importar lo que diga la etiqueta.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el rábano picante en la cocina</h2>

          <p>
            El uso clásico es la salsa de rábano picante: raíz rallada mezclada con crema agria, mayonesa o crème fraîche, una pizca de sal y a veces un chorrito de vinagre. Combina con carnes asadas y ahumadas — sobre todo con el asado de tira o el roast beef. Es el condimento estándar en los asados alemanes y de Europa Central, y un clásico de cualquier parrilla estilo steakhouse.
          </p>
          <p>
            Otros usos que funcionan bien:
          </p>
          <ul className="item-list">
            <li>Recién rallado en una vinagreta para hojas amargas — rúcula, radicchio, berro.</li>
            <li>Una cucharadita en sopa de remolacha o de papa cambia por completo el perfil de sabor.</li>
            <li>Sobre salmón a la parrilla o un huevo pasado por agua, como reemplazo del wasabi.</li>
            <li>Batido en mantequilla blanda para terminar un bife — toma menos de dos minutos.</li>
            <li>El frasco preparado reemplaza a la mostaza en un sándwich de roast beef o pastrami.</li>
          </ul>
          <p>
            Una advertencia práctica: el rábano picante rallado se oscurece en minutos en cuanto toca el aire. Mezcla vinagre blanco o jugo de limón justo después de rallarlo — eso fija el color y frena la pérdida del picor. Si lo rallas y lo dejas reposar 20 minutos, te queda una pasta grisácea sin gracia y con una fracción del picor original.
          </p>
          <p>
            Lo otro que hay que saber: el calor mata el picor. No cocines el rábano picante si quieres que siga sabiendo a rábano picante. Agrégalo crudo, o mézclalo cuando la sartén ya esté fuera del fuego.{' '}
            <a href="/es/blog/o-que-e-gengibre">El jengibre</a> se comporta de forma parecida — sus compuestos aromáticos se degradan con calor prolongado. Con el rábano picante, el efecto es más rápido y más drástico.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería ser un dolor de cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* DÓNDE COMPRAR */}
          <h2 id="donde-comprar">Dónde comprar rábano picante</h2>

          <p>
            La raíz fresca no siempre está en la góndola de verduras, pero es más fácil de encontrar de lo que parece una vez que sabes dónde buscar:
          </p>
          <ul className="item-list">
            <li><strong>Verdulerías y supermercados grandes:</strong> algunas cadenas la tienen de forma estacional, cerca de otras raíces — busca una raíz retorcida de color claro, a veces envuelta en film.</li>
            <li><strong>Frasco preparado:</strong> la opción más común, cerca de la mostaza y el kétchup, o en la sección de fiambres refrigerados. Es lo que la mayoría de la gente tiene en mente cuando dice &quot;rábano picante&quot;.</li>
            <li><strong>Ferias y mercados de productores:</strong> una buena apuesta a fines de verano y en otoño, cuando la raíz está de temporada, sobre todo en zonas con tradición de inmigración centroeuropea o del este de Europa.</li>
            <li><strong>Tiendas especializadas o de productos importados:</strong> más probable encontrar la raíz fresca todo el año que en un supermercado convencional.</li>
          </ul>
          <p>
            Si encuentras ambas versiones, prueba la diferencia antes de comprar una raíz entera: el rábano picante recién rallado tiene un picor más vivo que cualquier cosa que lleve meses en un frasco de vinagre.
          </p>
          <p>
            El rábano picante no es un básico de todas las semanas — no vas a anotarlo en la lista de compras recurrente como la leche o los huevos. Es el tipo de ingrediente que solo recuerdas cuando una receta puntual lo pide, justo el tipo de cosa que es fácil olvidar que ya tienes. Tenerlo anotado en tu{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            {' '}evita que se venza en silencio en el fondo del refrigerador.
          </p>

          {/* CÓMO CONSERVAR */}
          <h2 id="como-conservar">Cómo conservar el rábano picante en casa</h2>

          <p>
            <strong>Raíz fresca:</strong> guárdala sin pelar — pelarla y rallarla expone la pulpa al aire y a la humedad, lo que acelera el deterioro. Envuélvela en una toalla de papel apenas húmeda, métela en una bolsa cerrada y guárdala en el cajón de verduras del refrigerador. Así aguanta de uno a dos meses. Si empieza a ablandarse o le salen manchas oscuras, es hora de usarla o descartarla.
          </p>
          <p>
            <strong>Rallada en casa:</strong> mezcla un chorrito de vinagre blanco justo después de rallarla (fija el color y el picor), pásala a un frasco de vidrio con tapa y refrigérala. Se conserva por unas semanas. También se puede congelar hasta 6 meses — la textura se ablanda un poco al descongelar, pero sigue siendo perfectamente usable en una salsa.
          </p>
          <p>
            <strong>Frasco preparado:</strong> sigue las instrucciones de la etiqueta. Una vez abierto, necesita refrigeración y en general dura de 3 a 6 meses así, gracias al vinagre. Revisa la fecha de vencimiento y descártalo si el olor o el color cambian de forma rara.
          </p>
          <p>
            Un apunte sobre el desperdicio: como el rábano picante se usa tan de vez en cuando, es fácil que una raíz o un frasco a medio usar desaparezca en el fondo del refrigerador durante semanas hasta terminar en la basura. Si compraste una raíz grande, rállala toda de una vez, mézclala con vinagre y congélala en porciones chicas — así la usas cuando la necesitas en vez de tirar la mayor parte.{' '}
            <a href="/es/blog/alcaparras">Las alcaparras</a> tienen exactamente el mismo problema: se compran para una receta, y el frasco queda a medio usar durante meses.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el rábano picante</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El rábano picante es lo mismo que el wasabi?</p>
              <p className="faq-a">
                No. Son plantas distintas. El rábano picante es <em>Armoracia rusticana</em>, de Europa. El wasabi es <em>Wasabia japonica</em>, de Japón. El wasabi real es raro y caro incluso en Japón — lo que llega en la mayoría de las barras de sushi casi siempre es rábano picante teñido de verde. Práctica estándar en casi todo el mundo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer rábano picante crudo?</p>
              <p className="faq-a">
                Sí, y es la forma más común de usarlo. Rallado fresco en salsas o vinagretas. El calor mata el picor — cocinarlo le quita esa ardencia que lo define. Úsalo crudo, o agrégalo cuando la sartén ya esté fuera del fuego.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo rallar rábano picante sin que te ardan los ojos?</p>
              <p className="faq-a">
                Rállalo en un lugar ventilado, idealmente cerca de una ventana abierta. Mezcla vinagre blanco o jugo de limón justo después de rallarlo — eso neutraliza los compuestos volátiles. Trabaja rápido y mantén la cara alejada del rallador. Es más fuerte que la cebolla, pero se pasa rápido con buena ventilación.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El rábano picante necesita refrigerarse?</p>
              <p className="faq-a">
                Sí. La raíz fresca necesita frío y humedad controlada para no resecarse — cajón de verduras, envuelta en una toalla de papel húmeda. Aguanta de uno a dos meses. Un frasco abierto de rábano picante preparado también va al refrigerador. No es un producto de alacena.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El rábano picante es bueno para la salud?</p>
              <p className="faq-a">
                Aporta{' '}
                <a href="https://www.foodspring.es/magazine/rabano-y-rabano-picante" target="_blank" rel="noopener">
                  vitamina C, potasio, calcio y magnesio
                </a>
                {', '}además de compuestos con propiedades antimicrobianas. Pero la porción que se usa como condimento es chica — el beneficio nutricional real viene de la alimentación en conjunto, no de una raíz picante puntual.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué se puede preparar con rábano picante además de salsa?</p>
              <p className="faq-a">
                Vinagreta con rúcula o radicchio, sopa de remolacha, sobre salmón a la parrilla, mantequilla compuesta para terminar un bife, en lugar de mostaza en un sándwich de fiambre. En la cocina asquenazí, el jrein — rábano picante rallado con remolacha — es el condimento tradicional de las fiestas religiosas.
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
                Creador de Mise. Su primer encuentro con el rábano picante fue en una cena de fin de año, sin ninguna advertencia. Lo ralló fresco en casa exactamente una vez. Nunca más sin un ventilador cerca.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Ya sabes qué hay en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Mise conecta tu despensa, tus recetas y tu lista de compras en un solo lugar.
              Compras lo que realmente vas a usar — y el rábano picante no termina olvidado en el fondo del refrigerador.
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
