import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Chalota: qué es, diferencia con la cebolla y cómo usarla',
  description: 'La chalota es una cebolla pequeña y dulce, favorita de la cocina francesa. Qué es, en qué se diferencia de la cebolla y el ajo, y cómo cocinarla y guardarla.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-chalota',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-chalota',
    },
  },
  openGraph: {
    title: 'Chalota: qué es, diferencia con la cebolla y cómo usarla',
    description: 'La chalota es una cebolla pequeña y dulce, favorita de la cocina francesa. Qué es, en qué se diferencia de la cebolla y el ajo, y cómo cocinarla y guardarla.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
    images: [
      {
        url: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Variedad colorida de verduras frescas en un puesto de mercado — el tipo de puesto donde se encuentra la chalota',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalota: qué es, diferencia con la cebolla y cómo usarla',
    description: 'La chalota es una cebolla pequeña y dulce, favorita de la cocina francesa. Qué es, en qué se diferencia de la cebolla y el ajo, y cómo cocinarla y guardarla.',
    images: ['https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La chalota y la cebolla son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No exactamente. La chalota es una variedad cultivada de la cebolla común (Allium cepa var. aggregatum), antes clasificada como especie aparte. Crece en racimos como el ajo, tiene un bulbo más pequeño, piel cobriza-morada y un sabor más dulce y delicado, con un toque leve de ajo que la cebolla común no tiene.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo sustituir la chalota por cebolla común en una receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero el resultado cambia. Usa entre 3 y 4 chalotas para reemplazar 1 cebolla mediana, ya que son mucho más pequeñas. El sabor final queda más fuerte y menos dulce con cebolla común: funciona bien en preparaciones cocidas, pero pierde la delicadeza en salsas frías y vinagretas, donde la chalota cruda es insustituible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La chalota hace llorar menos que la cebolla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un poco menos, pero todavía libera el compuesto que irrita los ojos. El bulbo más pequeño suelta menos gas por corte, pero quien tiene más sensibilidad igual lo va a notar, sobre todo si corta varias de una vez. Un cuchillo bien afilado y un corte rápido ayudan más que cambiar de ingrediente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde consigo chalota y cuánto cuesta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se encuentra en mercados grandes, tiendas gourmet y algunos supermercados, generalmente cerca de la cebolla y el ajo. Suele costar bastante más por kilo que la cebolla común, porque la producción es menor y el cultivo toma más tiempo, algo constante en la mayoría de los países de la región.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer chalota cruda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y es justo ahí donde más brilla. Cortada bien fina en vinagretas, ensaladas y salsas frías, el sabor dulce aparece sin el ardor de la cebolla cruda. Es el uso clásico de la chalota en la cocina francesa; cocida, pierde parte de lo que la hace especial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo guardo la chalota para que dure más?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En un lugar fresco, seco, oscuro y ventilado, nunca en el refrigerador. Guardada así, junto con cebolla y ajo, lejos de la luz directa, dura de 3 a 4 semanas sin ablandarse ni brotar. La humedad y el frío del refrigerador aceleran la descomposición.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre chalota y cebollín?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son plantas distintas. El cebollín (cebolla de verdeo, cebollita china según el país) es la hierba de tallos finos y huecos que se pica y se agrega por encima del plato, sin bulbo relevante. La chalota es el bulbo entero, usado como base de la preparación. No son intercambiables en una receta.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chalota: qué es, diferencia con la cebolla y cómo usarla',
  description: 'La chalota es una cebolla pequeña y dulce, favorita de la cocina francesa. Qué es, en qué se diferencia de la cebolla y el ajo, y cómo cocinarla y guardarla.',
  image: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chalota', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-chalota' },
  ],
}

export default function ChalotaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Chalota</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-26">26 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Chalota: la cebolla pequeña que la cocina francesa no suelta
          </h1>
          <p className="blog-desc">
            Está en la sección de verduras del mercado, junto a la cebolla, como si fuera una versión en miniatura de ella. Casi nadie sabe qué hacer con ella, hasta que la prueba en una vinagreta y entiende por qué ningún cocinero la cambia por cebolla común. Aquí está qué es la chalota, para qué sirve y cómo usarla sin desperdiciarla.
          </p>

          <div className="answer-box">
            <p>
              <strong>La chalota</strong> (<em>Allium cepa var. aggregatum</em>) es una variedad cultivada de la cebolla común, con bulbo pequeño, piel cobriza-morada y sabor más dulce y delicado, con un toque leve de ajo.
              Crece en racimos, como el ajo, pero se pela y se corta como cebolla.
              En la cocina, entra donde la cebolla resultaría demasiado fuerte para el plato: salsas frías, vinagretas y preparaciones crudas.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Variedad colorida de verduras frescas en un puesto de mercado — el tipo de puesto donde se encuentra la chalota"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Muhamad Guruh Budi Hartono / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la chalota</a></li>
              <li><a href="#diferencia">Chalota, cebolla y ajo: cuál es la diferencia</a></li>
              <li><a href="#nutricion">Valor nutricional</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#comprar">Dónde comprarla y cuánto cuesta</a></li>
              <li><a href="#guardar">Cómo guardarla</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/12955498/pexels-photo-12955498.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Verduras frescas variadas exhibidas en un puesto de mercado, incluyendo hojas y raíces"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Atlantic Ambience / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la chalota</h2>

          <p>
            La chalota es una planta bulbosa del género <em>Allium</em>, la misma familia de la cebolla, el ajo y el puerro. A nivel científico, hoy se trata como una variedad cultivada de la cebolla común, <em>Allium cepa var. aggregatum</em>. Durante décadas se clasificó como especie propia, <em>Allium ascalonicum</em>, y ese nombre todavía aparece en algunas etiquetas y textos antiguos.
          </p>
          <p>
            El nombre viene de Ascalón, una antigua ciudad portuaria del Mediterráneo oriental. Soldados y comerciantes que pasaban por la región llevaron el bulbo a Europa, y el francés antiguo convirtió "cebolla de Ascalón" en <em>eschaloigne</em>, que más tarde se transformó en <em>échalote</em> —de ahí viene "chalota" en español. Es un caso poco común de un ingrediente que lleva el nombre de una ciudad entera dentro del suyo.
          </p>
          <p>
            Físicamente, el bulbo es pequeño, alargado, con piel fina de tono cobrizo-morado. A diferencia de la cebolla, que crece sola, la chalota se multiplica en racimos: si cortas un bulbo por la mitad, encuentras dos o tres "dientes" superpuestos, parecido al ajo. El sabor es más dulce y menos fuerte que el de la cebolla, con una nota sutil de ajo por debajo.
          </p>
          <p>
            Es un ingrediente base de la cocina francesa clásica, presente en salsas, vinagretas y salteados delicados donde la cebolla común resultaría demasiado tosca. Fuera de Francia, aparece cada vez más en la cocina del sudeste asiático: frita hasta quedar crujiente, es un toque final clásico en platos vietnamitas y tailandeses.
          </p>

          {/* DIFERENCIA */}
          <h2 id="diferencia">Chalota, cebolla y ajo: cuál es la diferencia</h2>

          <p>
            Las tres plantas pertenecen al mismo género botánico, pero cumplen papeles distintos en la cocina, y cambiar una por otra sin ajustar la receta transforma el plato entero.
          </p>
          <p>
            <strong>La cebolla</strong> es el ingrediente base, con sabor más fuerte que se suaviza bastante al cocinarse. Funciona como fundamento de casi cualquier sofrito. <strong>El ajo</strong> es todavía más concentrado, se usa en poca cantidad y su sabor domina el plato si te pasas. <strong>La chalota</strong> queda en el medio: más suave que los dos, más dulce, con un toque de ajo que aparece apenas.
          </p>
          <p>
            En la práctica: cuando la receta pide delicadeza —salsa de mantequilla, vinagreta, plato crudo— la chalota aporta sabor sin dominar. Cuando pide una base fuerte para un guiso largo, la cebolla común cumple mejor y cuesta menos. Confundir las dos no arruina la receta, pero cambia el resultado, y explica por qué mucha gente compra chalota, la usa como cebolla común y termina concluyendo que "no tiene nada de especial". Para conocer al pariente más fuerte de la familia, vale la pena leer sobre{' '}
            <a href="/es/blog/o-que-e-alho">qué es el ajo</a> y cómo se comporta en la cocina.
          </p>

          {/* NUTRICIÓN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Persona cortando verduras sobre una tabla mientras prepara una comida en una cocina doméstica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
          </div>

          <h2 id="nutricion" className="img-above">Valor nutricional</h2>

          <p>
            La chalota es fuente de vitamina C, vitamina B6, folato, potasio y manganeso, además de compuestos antioxidantes de la familia de los flavonoides —la misma clase que aparece en mayor concentración en la piel de la cebolla morada. Una porción de 30g (cerca de una chalota mediana) tiene unas 20 calorías.
          </p>
          <p>
            Vale la misma advertencia de cualquier ingrediente que se usa en poca cantidad: la chalota entra en la receta por unidad, no por porciones que cambien el perfil nutricional del plato. Su valor real está en el sabor, no como suplemento; aporta como parte de una alimentación variada, sin reemplazar la base de verduras y proteína del plato.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar chalota en la cocina</h2>

          <p>
            El uso cambia según si la chalota va cruda o cocida, y ahí es donde la mayoría de las recetas caseras se equivocan al tratarla como sustituto directo de la cebolla.
          </p>
          <p>
            <strong>Vinagretas y salsas frías.</strong> Pícala bien fina, déjala reposar 5-10 minutos en el vinagre o el limón antes de mezclar el aceite; eso suaviza el ardor residual. Es el uso donde la chalota más se diferencia de la cebolla común: el sabor está presente sin dominar la ensalada.
          </p>
          <p>
            <strong>Salsas de mantequilla.</strong> Salteada a fuego bajo hasta quedar translúcida, sin dorarse, es la base clásica de salsas francesas como el beurre blanc. La dulzura de la chalota equilibra la acidez del vino blanco sin competir con la mantequilla.
          </p>
          <p>
            <strong>Chalota asada entera.</strong> Envuelta en papel aluminio con un chorrito de aceite de oliva, con piel, al horno 40 minutos a 180°C. Queda suave y dulce, casi caramelizada por dentro; un acompañamiento simple para carnes a la parrilla.
          </p>
          <p>
            <strong>Frita crujiente.</strong> Cortada bien fina y frita en aceite caliente hasta dorar, se convierte en un toque final para sopas, arroz y platos de inspiración asiática. Guardada en un frasco cerrado, dura unos días y suma textura sin esfuerzo.
          </p>
          <p>
            Regla práctica de sustitución: 3-4 chalotas medianas equivalen a 1 cebolla mediana en volumen. Si la receta no pide chalota por un motivo específico —textura, sabor, tradición del plato— cambiarla por cebolla común funciona bien en la mayoría de los sofritos cocidos. Si la chalota se vuelve un ingrediente fijo de tu semana, entra fácil en un{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a> con salsas y vinagretas recurrentes.
          </p>

          {/* COMPRAR */}
          <h2 id="comprar">Dónde comprarla y cuánto cuesta</h2>

          <p>
            La chalota todavía no es un producto estándar en todos los supermercados. Mercados grandes, tiendas gourmet y supermercados de tamaño medio a grande suelen tenerla, casi siempre en la sección de verduras frescas o cerca de la cebolla y el ajo.
          </p>
          <p>
            El precio suele ser bastante más alto que el de la cebolla común, porque la producción a gran escala todavía es limitada en buena parte de la región y el cultivo toma más tiempo por planta.
          </p>
          <p>
            Al elegirla, busca bulbos firmes, sin partes blandas ni brotes visibles. Una piel demasiado seca o, al contrario, húmeda, es señal de una chalota vieja. Como el costo por kilo es alto, conviene comprar solo la cantidad que la receta necesita en vez de guardar de más como sueles hacer con la cebolla y el ajo.
          </p>

          {/* GUARDAR */}
          <h2 id="guardar">Cómo guardar la chalota</h2>

          <p>
            Igual que la cebolla y el ajo, la chalota no va al refrigerador. La humedad y el frío aceleran la descomposición y ablandan el bulbo mucho más rápido que a temperatura ambiente.
          </p>
          <p>
            Lo ideal es un lugar fresco, seco, oscuro y ventilado, lejos de la luz directa y de otras verduras que sueltan etileno, como la papa, que acelera el brote. Guardada así, en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>, junto con cebolla y ajo, dura de 3 a 4 semanas sin perder calidad.
          </p>
          <p>
            Una vez cortada, sí va al refrigerador: en un recipiente cerrado, dura 3-4 días. Pasado ese tiempo, empieza a perder textura y a tomar un sabor amargo; mejor cortar solo la cantidad que la receta del día realmente necesita.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la chalota</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La chalota y la cebolla son lo mismo?</p>
              <p className="faq-a">
                No exactamente. Es una variedad cultivada de la cebolla común, con bulbo más pequeño, piel cobriza-morada y sabor más dulce, con un toque leve de ajo. Crece en racimos como el ajo, pero se corta como cebolla.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Puedo sustituir la chalota por cebolla común?</p>
              <p className="faq-a">
                Sí. Usa entre 3 y 4 chalotas para reemplazar 1 cebolla mediana. El resultado queda más fuerte y menos dulce, funciona en preparaciones cocidas, pero pierde delicadeza en salsas frías y vinagretas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La chalota hace llorar menos que la cebolla?</p>
              <p className="faq-a">
                Un poco menos, pero todavía irrita los ojos. El bulbo más pequeño libera menos gas por corte, aunque quien tiene más sensibilidad lo va a notar igual, sobre todo si corta varias de una vez.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Dónde consigo chalota y cuánto cuesta?</p>
              <p className="faq-a">
                Mercados grandes, tiendas gourmet y supermercados de mayor tamaño suelen tenerla, cerca de la cebolla y el ajo. Cuesta más por kilo que la cebolla común, porque la producción es menor y toma más tiempo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer chalota cruda?</p>
              <p className="faq-a">
                Sí, y es justo ahí donde más brilla. Cortada fina en vinagretas y salsas frías, el sabor dulce aparece sin el ardor de la cebolla cruda: es el uso clásico en la cocina francesa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo guardo la chalota para que dure más?</p>
              <p className="faq-a">
                En un lugar fresco, seco, oscuro y ventilado, nunca en el refrigerador. Guardada así, dura de 3 a 4 semanas. La humedad y el frío aceleran la descomposición y el brote.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre chalota y cebollín?</p>
              <p className="faq-a">
                Son plantas distintas. El cebollín es la hierba de tallos finos que se pica y se agrega por encima del plato, sin bulbo relevante. La chalota es el bulbo entero, usado como base de la preparación. No son intercambiables.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador de Mise. Hace las compras cada semana y todavía se le olvida algún ingrediente.
                Construyó la app para resolver el problema que él mismo tenía en la cocina.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Chalota en la despensa. Vinagreta lista en cinco minutos.</p>
            <p className="blog-cta-desc">
              Con Mise sabes qué tienes en la <a href="/es/funcionalidades/despensa">despensa</a> antes de ir al súper —y armas la{' '}
              <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> sin olvidar lo que se acabó.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Empieza gratis
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Volver arriba">Volver arriba ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Hecho con cuidado en Brasil.</p>
          <nav className="footer-links" aria-label="Enlaces del pie de página">
            <a href="/es/blog" className="footer-link">Blog</a>
            <a href="/es/funcionalidades" className="footer-link">Funcionalidades</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
