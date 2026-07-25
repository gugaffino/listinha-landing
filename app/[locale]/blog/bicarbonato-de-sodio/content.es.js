import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Bicarbonato de sodio: para qué sirve y cómo usarlo',
  description: 'El bicarbonato de sodio leuda masas, ablanda carne, acelera la cocción de frijoles y limpia ollas. Aprende la diferencia con el polvo de hornear y cómo guardarlo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/bicarbonato-de-sodio',
      en: 'https://www.miseemcasa.com.br/en/blog/bicarbonato-de-sodio',
      es: 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/bicarbonato-de-sodio',
    },
  },
  openGraph: {
    title: 'Bicarbonato de sodio: para qué sirve y cómo usarlo',
    description: 'El bicarbonato de sodio leuda masas, ablanda carne, acelera la cocción de frijoles y limpia ollas. Aprende la diferencia con el polvo de hornear y cómo guardarlo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio',
    images: [
      {
        url: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Vista aérea de un tazón con ingredientes de repostería sobre una superficie blanca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bicarbonato de sodio: para qué sirve y cómo usarlo',
    description: 'El bicarbonato de sodio leuda masas, ablanda carne, acelera la cocción de frijoles y limpia ollas. Aprende la diferencia con el polvo de hornear y cómo guardarlo.',
    images: ['https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El bicarbonato de sodio es lo mismo que el polvo de hornear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El bicarbonato de sodio es solo la base alcalina (NaHCO₃). El polvo de hornear es una mezcla que ya incluye bicarbonato, almidón y un agente ácido. El polvo de hornear funciona solo en cualquier masa. El bicarbonato necesita un ingrediente ácido en la receta — yogur, miel, cacao, limón o vinagre — para reaccionar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto bicarbonato uso en lugar de polvo de hornear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La proporción es 1:4 — usa ¼ de cucharadita de bicarbonato por cada cucharadita de polvo de hornear. Solo funciona si la receta tiene suficiente ácido: yogur, leche fermentada, miel, melaza, cacao en polvo, jugo de limón o vinagre. Sin ácido, el resultado no va a ser el mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el pastel queda con sabor raro cuando uso bicarbonato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Porque sobró bicarbonato sin ácido suficiente para neutralizarlo. Ese sabor amargo o ligeramente jabonoso es bicarbonato sin reaccionar. La solución es reducir la cantidad o asegurarte de que la receta tenga un ácido compatible — yogur, limón, miel o cacao en polvo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué sirve poner bicarbonato en el agua de los frijoles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para reducir los gases. El bicarbonato ayuda a romper los oligosacáridos — compuestos en los granos que causan fermentación intestinal. Pon una cucharadita en el agua de remojo, deja 8 horas y descarta esa agua antes de cocinar. Los compuestos quedaron en el agua que tiraste.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El bicarbonato de sodio caduca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Cerrado, dura entre 2 y 3 años. Una vez abierto, absorbe humedad y pierde eficacia más rápido de lo que dice el empaque. Para probarlo: mezcla una cucharadita con un poco de vinagre — si burbujea fuerte y rápido, todavía sirve. Si la reacción es débil, es hora de comprar otro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El bicarbonato de sodio y la sal de mesa son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El bicarbonato de sodio (NaHCO₃) y la sal de mesa (NaCl) son compuestos completamente distintos. El "sodio" en el nombre es el único punto en común. El bicarbonato es alcalino y funciona como leudante. La sal es neutra y funciona como condimento. No se sustituyen entre sí.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bicarbonato de sodio: para qué sirve y cómo usarlo',
  description: 'El bicarbonato de sodio leuda masas, ablanda carne, acelera la cocción de frijoles y limpia ollas. Aprende la diferencia con el polvo de hornear y cómo guardarlo.',
  image: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br/es' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Bicarbonato de sodio', item: 'https://www.miseemcasa.com.br/es/blog/bicarbonato-de-sodio' },
  ],
}

export default function BicarbonatoDeSodioContent() {
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
            <li><a href="/es">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Bicarbonato de sodio</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-25">25 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Bicarbonato de sodio en la cocina: para qué sirve de verdad
          </h1>
          <p className="blog-desc">
            Ese polvo blanco queda olvidado al fondo de la despensa, junto al polvo de hornear. La mayoría no sabe la diferencia entre los dos — ni por qué uno funciona donde el otro no.
          </p>

          <div className="answer-box">
            <p>
              <strong>El bicarbonato de sodio</strong> es una sal alcalina (NaHCO₃) que, en contacto con un ácido, libera CO₂ y hace crecer las masas. También sirve para ablandar carne, acelerar la cocción de granos y mantener las verduras verdes en la olla. Para leudar masas necesita un ingrediente ácido en la receta — yogur, limón, miel, cacao o vinagre.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Vista aérea de un tazón con ingredientes de repostería sobre una superficie blanca — harina, huevos y utensilios"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pavel Danilyuk / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el bicarbonato de sodio</a></li>
              <li><a href="#diferencia-polvo-hornear">Bicarbonato o polvo de hornear: la diferencia</a></li>
              <li><a href="#usos">Para qué sirve en la cocina</a></li>
              <li><a href="#como-guardar">Cómo guardarlo y cuánto dura</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5734741/pexels-photo-5734741.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Polvo blanco en un tazón blanco sobre una superficie rústica oscura — bicarbonato de sodio para uso culinario"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el bicarbonato de sodio</h2>

          <p>
            El bicarbonato de sodio (NaHCO₃) es una sal alcalina. No es la sal de mesa (NaCl) — son compuestos distintos, con funciones distintas. El "sodio" en ambos nombres es el único punto en común.
          </p>
          <p>
            Cuando el bicarbonato entra en contacto con un ácido y humedad, libera dióxido de carbono (CO₂). Ese gas crea burbujas en la masa, que queda más liviana y crece en el horno. Sin ácido, la reacción no ocurre — o pasa de forma incompleta, dejando un sabor ligeramente amargo al final.
          </p>
          <p>
            Los ácidos que activan el bicarbonato en las recetas: yogur natural, leche fermentada (buttermilk), miel, melaza, jugo de limón, vinagre, cacao en polvo (el no alcalinizado) e incluso la acidez natural de frutas maduras como el plátano. Si la receta no tiene ninguno de estos, el polvo de hornear es la opción correcta.
          </p>
          <p>
            Se quedó al fondo de la alacena por años sin que nadie supiera bien para qué servía. Ahora ya lo sabes.
          </p>

          {/* DIFERENCIA POLVO DE HORNEAR */}
          <h2 id="diferencia-polvo-hornear">Bicarbonato de sodio o polvo de hornear: cuál es la diferencia</h2>

          <p>
            El polvo de hornear es una mezcla lista: bicarbonato de sodio + almidón + uno o dos agentes ácidos. El ácido ya viene incluido en la fórmula. Por eso el polvo de hornear funciona solo en casi cualquier receta — no necesita un ingrediente ácido extra.
          </p>
          <p>
            El bicarbonato de sodio es solo la base alcalina. Necesita el ácido que ya existe en la receta para completar la reacción. Es más potente: cerca de 4 veces más fuerte que el polvo de hornear.
          </p>
          <p>
            Ahí está la razón de la proporción de sustitución: por cada cucharadita de polvo de hornear, usa ¼ de cucharadita de bicarbonato. Y la receta necesita tener ácido suficiente. Sin él, el exceso de bicarbonato sin reaccionar se queda en la masa — y eso es lo que da el sabor raro.
          </p>
          <p>
            Regla práctica: si la receta pide los dos juntos, hay un motivo. El polvo de hornear da un crecimiento constante. El bicarbonato reacciona rápido con el ácido de la receta y aporta un borde más crujiente — sobre todo en galletas.
          </p>

          {/* USOS EN LA COCINA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8107990/pexels-photo-8107990.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón de cerámica con polvo blanco y un huevo al lado — ingredientes de repostería sobre superficie clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: MART PRODUCTION / Pexels</p>
          </div>

          <h2 id="usos" className="img-above">Para qué sirve el bicarbonato de sodio en la cocina</h2>

          <p>
            Además de leudar masas, el bicarbonato tiene al menos seis usos prácticos que vale la pena conocer. La mayoría solo conoce el del pastel.
          </p>

          <h3>En masas, pasteles y panes</h3>
          <p>
            El uso más común. Funciona bien en recetas con un ingrediente ácido: pan de plátano, pastel de miel, panqueques con yogur, waffles, pan de centeno, muffins con leche fermentada. Las galletas hechas con bicarbonato quedan más extendidas y crujientes en el borde que las hechas con polvo de hornear — es una diferencia de textura, no un error.
          </p>

          <h3>Ablandar carne</h3>
          <p>
            Espolvorear bicarbonato sobre la carne y dejarlo actuar de 15 a 20 minutos antes de enjuagar sube el pH de la superficie. Eso dificulta que las proteínas se contraigan durante la cocción. El resultado es una carne más suave — útil sobre todo en cortes delgados para bistec o salteados.
          </p>
          <p>
            Suena a experimento de química escolar. Aun así funciona.
          </p>

          <h3>Frijoles, lentejas y garbanzos</h3>
          <p>
            Una cucharadita en el agua de remojo (8 horas antes de cocinar) ayuda a romper los oligosacáridos responsables de los gases. También acelera la cocción. El detalle importante: descarta el agua del remojo antes de poner los granos al fuego — ahí quedaron los compuestos que querías eliminar.
          </p>

          <h3>Mantener las verduras verdes durante la cocción</h3>
          <p>
            Una pizca de bicarbonato en el agua hirviendo conserva la clorofila del brócoli, las ejotes y la espinaca. El color queda más vivo. No te pases — en exceso, el bicarbonato ablanda las verduras antes de tiempo.
          </p>

          <h3>Lavar frutas y verduras</h3>
          <p>
            Dejarlas en remojo con una cucharadita de bicarbonato por 10 a 15 minutos quita parte de los residuos de pesticidas y la suciedad de la superficie. Enjuaga bien después. No elimina todo, pero es un paso sencillo antes de guardarlas en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>.
          </p>

          <h3>Bajar la acidez de la salsa de tomate</h3>
          <p>
            Una pizca pequeña en la salsa de tomate neutraliza parte de la acidez. Se nota cuando los tomates estaban muy ácidos o cuando alguien en casa sufre de reflujo. Cuidado con la cantidad — el exceso cambia el sabor y deja la salsa ligeramente amarga.
          </p>

          <h3>Limpiar ollas y superficies</h3>
          <p>
            Una pasta de bicarbonato con unas gotas de agua quita manchas oscuras del acero inoxidable, residuos de grasa de las bandejas y marcas de las superficies de la cocina. No raya. Funciona mejor de lo que parece — sobre todo en esas marcas que el detergente no saca.
          </p>

          <div className="blog-inline-cta">
            <p>Una despensa organizada empieza por saber qué hay adentro. <em>Mise se encarga de eso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar el bicarbonato de sodio y cuánto dura</h2>

          <p>
            Cerrado, el bicarbonato dura entre 2 y 3 años. Una vez abierto, empieza a absorber humedad y olores del ambiente — y pierde eficacia antes de la fecha impresa en el empaque.
          </p>
          <p>
            Guárdalo en un recipiente cerrado, lejos del refrigerador y de la estufa. Un estante seco en una despensa organizada funciona bien. No necesita temperatura especial.
          </p>
          <p>
            Para probar si todavía sirve: mezcla una cucharadita con un poco de vinagre. Si burbujea bastante y rápido, sigue activo. Si la reacción es débil o nula, es hora de comprar otro. La prueba toma 10 segundos y te ahorra el trabajo de un pastel que no sube.
          </p>
          <p>
            Es un producto que pertenece a la lista básica de compras de cualquier cocina. Cuesta poco, dura mucho y tiene al menos siete usos. El único problema era no saber qué hacer con él — y eso ya quedó resuelto.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el bicarbonato de sodio</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El bicarbonato de sodio es lo mismo que el polvo de hornear?</p>
              <p className="faq-a">
                No. El bicarbonato de sodio es solo la base alcalina (NaHCO₃). El polvo de hornear es una mezcla que ya incluye bicarbonato, almidón y un agente ácido. El polvo de hornear funciona solo en cualquier masa. El bicarbonato necesita ácido en la receta — yogur, miel, cacao, limón o vinagre — para reaccionar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto bicarbonato uso en lugar de polvo de hornear?</p>
              <p className="faq-a">
                La proporción es 1:4 — ¼ de cucharadita de bicarbonato por cada cucharadita de polvo de hornear. Solo funciona si la receta tiene suficiente ácido: yogur, leche fermentada, miel, melaza, cacao en polvo, jugo de limón o vinagre. Sin ácido, el resultado no va a ser el mismo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Por qué el pastel queda con sabor raro cuando uso bicarbonato?</p>
              <p className="faq-a">
                Sobró bicarbonato sin ácido suficiente para neutralizarlo. Ese sabor amargo o ligeramente jabonoso es bicarbonato sin reaccionar. La solución es reducir la cantidad o asegurarte de que la receta tenga un ácido compatible.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Para qué sirve poner bicarbonato en el agua de los frijoles?</p>
              <p className="faq-a">
                Para reducir los gases. El bicarbonato ayuda a romper los oligosacáridos — compuestos en los granos que causan fermentación intestinal. Pon una cucharadita en el agua de remojo antes de cocinar y descarta esa agua. Los compuestos quedan en el agua, no en los frijoles.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El bicarbonato de sodio caduca?</p>
              <p className="faq-a">
                Sí. Cerrado, dura entre 2 y 3 años. Una vez abierto, absorbe humedad y pierde eficacia más rápido. Prueba rápida: mezcla una cucharadita con vinagre — si burbujea fuerte, todavía sirve. Reacción débil o nula, descártalo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El bicarbonato de sodio y la sal de mesa son lo mismo?</p>
              <p className="faq-a">
                No. El bicarbonato de sodio (NaHCO₃) y la sal de mesa (NaCl) son compuestos completamente distintos. El "sodio" en el nombre es el único punto en común. El bicarbonato es alcalino y funciona como leudante. La sal es neutra y sirve como condimento. No se sustituyen entre sí.
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
                Creador de Mise. Ya usó bicarbonato para hacer subir un pastel, ablandar carne y limpiar una olla. Descubrió más tarde de lo que hubiera querido que son tres cosas distintas.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Todo en la despensa.<br />
              <em>Usa Mise para llevarlo.</em>
            </h2>
            <p>
              Conecta despensa, recetas y{' '}
              <a href="/es/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)'}}>lista de compras</a>{' '}
              en un solo lugar. El bicarbonato nunca más se acaba sin que te des cuenta.
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
          <a href="/es" className="brand">
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
