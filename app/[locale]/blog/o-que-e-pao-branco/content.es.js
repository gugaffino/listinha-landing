import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Pan blanco: qué es, calorías y cómo elegirlo bien',
  description: 'El pan blanco se hace con harina refinada — menos fibra, índice glucémico más alto. Cuántas calorías tiene, qué cambia frente al integral y cómo elegir bien.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
    },
  },
  openGraph: {
    title: 'Pan blanco: qué es, calorías y cómo elegirlo bien',
    description: 'El pan blanco se hace con harina refinada — menos fibra, índice glucémico más alto. Cuántas calorías tiene, qué cambia frente al integral y cómo elegir bien.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco',
    images: [
      {
        url: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rebanadas de pan blanco sobre un plato blanco — primer plano mostrando la textura suave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pan blanco: qué es, calorías y cómo elegirlo bien',
    description: 'El pan blanco se hace con harina refinada — menos fibra, índice glucémico más alto. Cuántas calorías tiene, qué cambia frente al integral y cómo elegir bien.',
    images: ['https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El pan blanco tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El pan blanco se hace con harina de trigo refinada, que contiene gluten. No es apto para personas con enfermedad celíaca o sensibilidad al gluten. Para ellas, la opción es pan hecho con harina de arroz, tapioca u otras harinas sin gluten — y conviene revisar si hay contaminación cruzada en la producción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pan de molde blanco y el pan blanco son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Están hechos con el mismo tipo de harina —refinada— pero el pan de molde tiene una forma industrial estandarizada, suele llevar conservantes para durar más en el estante y muchas veces tiene azúcar y grasa vegetal en la receta. Pan blanco es el nombre genérico para cualquier pan hecho con harina blanca: el de molde, el de panadería, la baguette.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pan blanco se puede guardar en el refrigerador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se puede, pero no se recomienda. El refrigerador le quita humedad al pan y acelera la retrogradación del almidón —el pan se pone duro y reseco más rápido que a temperatura ambiente. Lo ideal es guardarlo a temperatura ambiente en una bolsa cerrada por hasta 5 días. Para que dure más, el congelador es la mejor opción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa "harina de trigo enriquecida" en la etiqueta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La harina de trigo enriquecida es harina refinada a la que se le agregaron hierro y vitaminas del complejo B —obligatorio por ley en la mayoría de los países de la región. No es harina integral. Si el primer ingrediente de la etiqueta es "harina de trigo enriquecida", el pan es blanco, aunque tenga semillas encima o en el nombre del empaque.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pan es mejor para hacer tostadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para tostadas, el pan blanco suele quedar más crocante y parejo. El pan integral, por tener más fibra y humedad, tiende a tostarse de forma menos uniforme y puede quedar duro en algunas partes. Para la textura clásica de tostada, el pan de molde blanco sigue siendo la opción más práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El pan blanco tiene fibra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiene, pero poca. Una porción de 100 g de pan blanco tiene en promedio 2,5 g de fibra —mientras que el integral llega a 6-7 g en la misma cantidad. La OMS recomienda al menos 25 g de fibra al día. Para llegar a esa cifra solo con pan blanco habría que comer cantidades mucho mayores que con el integral.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pan blanco: qué es, calorías y cómo elegirlo bien',
  description: 'El pan blanco se hace con harina refinada — menos fibra, índice glucémico más alto. Cuántas calorías tiene, qué cambia frente al integral y cómo elegir bien.',
  image: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el pan blanco', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco' },
  ],
}

export default function PanBlancoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el pan blanco</li>
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
            Qué es el pan blanco: cómo se hace, calorías y diferencia con el integral
          </h1>
          <p className="blog-desc">
            El pan blanco está en el desayuno de casi todo el mundo. Pero qué es exactamente, qué le hace el refinado al trigo y cuándo conviene elegir el integral en su lugar.
          </p>

          <div className="answer-box">
            <p>
              <strong>El pan blanco</strong> se hace con harina de trigo refinada — el proceso de molienda quita el salvado y el germen del grano, dejando solo el endospermo.
              El resultado es un pan más suave y de sabor neutro, con menos fibra y vitaminas que el integral.
              En calorías, la diferencia es pequeña. Lo que realmente cambia es el índice glucémico y cuánto tiempo te mantiene satisfecho.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Rebanadas de pan blanco sobre un plato blanco — primer plano mostrando la textura suave"
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
              <li><a href="#que-es">Qué es y cómo se hace</a></li>
              <li><a href="#calorias">Cuántas calorías tiene</a></li>
              <li><a href="#vs-integral">Pan blanco vs. integral</a></li>
              <li><a href="#engorda">¿El pan blanco engorda?</a></li>
              <li><a href="#como-elegir">Cómo elegirlo en la tienda</a></li>
              <li><a href="#como-guardar">Cómo guardarlo en casa</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerlo en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pan blanco entero recién horneado sobre una superficie clara — textura de la corteza y la miga visibles"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el pan blanco y cómo se hace</h2>

          <p>
            El pan blanco empieza con harina de trigo refinada. El grano de trigo tiene tres partes: el salvado (la cáscara externa), el germen (la parte interna germinativa) y el endospermo (el centro con almidón). En el refinado, el molino retira el salvado y el germen —y queda solo el endospermo.
          </p>
          <p>
            Esa separación tiene una razón práctica: el salvado contiene aceites que se echan a perder rápido. La harina integral se daña en semanas; la harina blanca dura meses. Para la industria panadera es mucho más viable. Para ti, significa pan de molde que aguanta más tiempo en el estante de la tienda.
          </p>
          <p>
            El problema es que el salvado y el germen cargan la mayor parte de los nutrientes del grano —fibra, vitaminas del complejo B (sobre todo B1, B3 y B6), vitamina E, hierro, zinc y magnesio. El endospermo que queda tiene almidón y proteína, pero se queda muy por debajo del grano entero en términos nutricionales.
          </p>
          <p>
            En muchos países de América Latina —Argentina, Colombia, Ecuador, Chile, Costa Rica y varios más— la ley exige que la harina de trigo refinada se enriquezca con hierro y vitaminas del complejo B, y en algunos casos también con ácido fólico. Así que el pan blanco recupera parte de lo que el refinado le quitó, agregado de forma sintética. Lo que no vuelve es la fibra.
          </p>
          <p>
            El resultado en la práctica: pan suave, sabor neutro, fácil de combinar con lo que sea. Funciona bien para tostadas, para quien tiene el estómago sensible y para quien simplemente prefiere el sabor suave. No es el villano de la historia —es una elección con ventajas y desventajas claras.
          </p>

          {/* CALORÍAS */}
          <h2 id="calorias">Cuántas calorías tiene el pan blanco</h2>

          <p>
            100 g de pan blanco común tienen aproximadamente <strong>253 kcal</strong>. Eso equivale a 3-4 rebanadas medianas de pan de molde.
          </p>

          <ul className="item-list">
            <li>Calorías: ~253 kcal por 100 g</li>
            <li>Carbohidratos: ~50 g por 100 g</li>
            <li>Proteína: ~8 g por 100 g</li>
            <li>Grasa: ~3 g por 100 g</li>
            <li>Fibra: ~2,5 g por 100 g</li>
          </ul>

          <p>
            Para comparar: el pan integral se queda en un rango parecido, alrededor de 250 kcal también. La diferencia calórica entre blanco e integral es lo bastante pequeña como para ser irrelevante en el día a día.
          </p>
          <p>
            Lo que cambia es el índice glucémico. El pan blanco tiene un índice glucémico de alrededor de 70-75; el integral se queda entre 50-65. Esto significa que el pan blanco sube el azúcar en sangre más rápido, genera un pico de insulina más marcado y, como consecuencia, el hambre vuelve antes.
          </p>
          <p>
            Traducido: no es que el pan blanco engorde más por caloría. Es que sacia por menos tiempo —y eso afecta cuánto comes el resto del día.
          </p>

          {/* VS INTEGRAL */}
          <h2 id="vs-integral">Pan blanco vs. integral: qué cambia de verdad</h2>

          <p>
            La diferencia principal no es la caloría —es la fibra y la saciedad.
          </p>

          <ul className="item-list">
            <li><strong>Fibra:</strong> el pan blanco tiene ~2,5 g/100 g; el integral tiene ~6-7 g/100 g —dos o tres veces más</li>
            <li><strong>Índice glucémico:</strong> blanco ~70-75; integral ~50-65</li>
            <li><strong>Saciedad:</strong> el integral sacia por más tiempo gracias a la fibra</li>
            <li><strong>Vitaminas del complejo B:</strong> el integral conserva más B1, B3, B6 y vitamina E</li>
            <li><strong>Sabor:</strong> el blanco es más suave y neutro; el integral es más denso y algo más terroso</li>
            <li><strong>Textura:</strong> el blanco es más suave; el integral es más firme</li>
          </ul>

          <p>
            Hay un detalle que mucha gente no nota en el estante: "multigrano" y "pan con semillas" no son automáticamente integral. Lees "multigrano" en el empaque y crees que estás comprando algo nutricionalmente distinto. Casi siempre no es así. Basta con mirar el primer ingrediente de la etiqueta —si dice "harina de trigo enriquecida", es pan blanco. Las semillas encima son decoración.
          </p>
          <p>
            El pan integral de verdad tiene "harina de trigo integral" como primer ingrediente. Suele costar más porque la producción es más cara y dura menos tiempo en el estante.
          </p>
          <p>
            Si quieres anotar el tipo exacto antes de salir de casa, la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras de Mise</a>{' '}
            te deja registrar el detalle —sin depender de la memoria cuando ya estás frente al estante.
          </p>

          <div className="blog-inline-cta">
            <p>Anota el tipo de pan correcto antes de ir a comprar. <em>Mise se encarga del resto.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ENGORDA */}
          <h2 id="engorda">¿El pan blanco engorda?</h2>

          <p>
            No por sí solo. Lo que engorda es el exceso de calorías —y el pan blanco entra en eso igual que cualquier otro alimento.
          </p>
          <p>
            El argumento en contra del pan blanco no es que tenga más calorías. Es que sacia menos, lo que lleva a comer más a lo largo del día. Si desayunas con pan blanco y sientes hambre una hora después, no es tu imaginación —es el índice glucémico más alto haciendo su trabajo.
          </p>
          <p>
            Esto importa más en algunas situaciones que en otras. Si el desayuno va seguido de una rutina con hora fija de almuerzo, el impacto es menor. Si la mañana es larga y necesitas saciedad por 3-4 horas, el integral tiene una ventaja real.
          </p>
          <p>
            Para quien sigue una dieta con control de azúcar, el índice glucémico del pan blanco es un punto a tener en cuenta —pero no es necesariamente un motivo para eliminarlo por completo. Depende de la cantidad y de qué comas junto con él.
          </p>

          {/* CÓMO ELEGIR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rebanadas de pan sobre una superficie gris — mostrando textura y miga del pan"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-elegir" className="img-above">Cómo elegir el pan en la tienda</h2>

          <p>
            La etiqueta del pan es donde ocurre la mayoría de las confusiones. Cuatro puntos para revisar antes de ponerlo en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            :
          </p>

          <h3>Primer ingrediente en la etiqueta</h3>
          <p>
            Los ingredientes aparecen en orden decreciente de cantidad. Si el primero es "harina de trigo enriquecida", es pan blanco. Si es "harina de trigo integral", es integral. Todo empieza ahí —el nombre bonito en el frente del empaque es secundario.
          </p>

          <h3>Multigrano no es integral</h3>
          <p>
            Multigrano significa que tiene más de un tipo de grano en la composición —pero la base puede ser harina blanca con semillas decorativas encima. El nombre en el empaque es marketing. La tabla nutricional es lo que cuenta.
          </p>

          <h3>Contenido de fibra por porción</h3>
          <p>
            Una porción de pan (2 rebanadas, ~50 g) con menos de 1,5 g de fibra es pan blanco o muy cerca de serlo. Con 2 g o más por porción, ya estás en territorio del integral o enriquecido con fibra. Ese número aparece en la tabla nutricional —se revisa en segundos.
          </p>

          <h3>Lista de ingredientes corta</h3>
          <p>
            Un pan con 5-6 ingredientes suele ser más simple que uno con 15. Los conservantes, emulsionantes y estabilizantes no son necesariamente peligrosos, pero una lista larga suele indicar un producto más industrializado —con más duración en el estante y, generalmente, menos fibra real por rebanada.
          </p>

          {/* CÓMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar el pan blanco en casa</h2>

          <p>
            Guardar pan parece simple, pero tiene una regla contraintuitiva que vale la pena conocer.
          </p>

          <h3>Temperatura ambiente</h3>
          <p>
            La mejor opción para el corto plazo. El pan blanco dura 3-5 días a temperatura ambiente, dentro de la bolsa original bien cerrada o en un recipiente hermético. Lejos de la humedad y el calor directo.
          </p>

          <h3>Refrigerador: no se recomienda</h3>
          <p>
            El refrigerador le quita humedad al pan y acelera la retrogradación del almidón —el pan se pone duro y reseco antes de tiempo. Quien guarda el pan en el refrigerador "para que dure más" está logrando justo lo contrario: el pan se endurece dos días antes de lo que pasaría fuera. Para que dure, el congelador es la elección correcta.
          </p>

          <h3>Congelador</h3>
          <p>
            El congelador funciona bien hasta por 3 meses. Antes de congelar, rebana el pan y separa las rebanadas con papel encerado, o guárdalas en una bolsa con el aire extraído. Así descongelas solo lo que vas a usar —rebanada por rebanada, directo al tostador o dejándola reposar 10 minutos a temperatura ambiente.
          </p>
          <p>
            El pan de molde blanco se congela especialmente bien: la textura suave aguanta el ciclo de congelado y descongelado sin perder mucho. La{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>{' '}
            te deja anotar dónde está guardado cada producto y cuándo vence —útil para no olvidar el pan en el congelador durante 4 meses.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena ponerlo en la lista</h2>

          <p>Depende de para qué lo vayas a usar.</p>
          <p>
            Para tostadas, el pan blanco gana en textura —queda más crocante y parejo. Para quien tiene hijos que rechazan el integral, el pan blanco es el que de verdad se van a comer. Para quien tiene el estómago sensible o usa el pan en momentos puntuales, sin necesitar saciedad prolongada, tiene sentido.
          </p>
          <p>
            Para quien necesita un desayuno que aguante hasta el almuerzo —sobre todo en rutinas apuradas sin nada para picar a media mañana— el integral tiene una ventaja real. Sentir menos hambre a las 10:30 no es una aspiración de blog de salud; es la fibra haciendo su trabajo.
          </p>
          <p>
            La elección más honesta: si vas a usar el pan solo para tostadas con mantequilla el domingo por la mañana, compra el blanco. Si es el desayuno de lunes a viernes, considera el integral —o compra los dos y ve cuál se acaba primero. Lo que pasa en la despensa es un dato real sobre lo que realmente comes.
          </p>
          <p>
            El pan blanco tiene un lugar en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}de mucha gente. No es un error ni una concesión —es la realidad de cómo come la mayoría. Lo que cambia con la información es comprarlo sabiendo qué estás eligiendo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el pan blanco</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El pan blanco tiene gluten?</p>
              <p className="faq-a">
                Sí. Se hace con harina de trigo refinada, que contiene gluten. No es apto para personas con enfermedad celíaca o sensibilidad al gluten. Para ellas, la opción es pan hecho con harina de arroz, tapioca u otras harinas sin gluten —y conviene revisar si hay contaminación cruzada en la producción.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pan de molde blanco y el pan blanco son lo mismo?</p>
              <p className="faq-a">
                Están hechos con el mismo tipo de harina —refinada— pero el pan de molde tiene una forma industrial estandarizada, suele llevar conservantes para durar más en el estante y muchas veces tiene azúcar y grasa vegetal en la receta. Pan blanco es el nombre genérico para cualquier pan hecho con harina blanca: el de molde, el de panadería, la baguette.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pan blanco se puede guardar en el refrigerador?</p>
              <p className="faq-a">
                Se puede, pero no se recomienda. El refrigerador le quita humedad al pan y acelera la retrogradación del almidón —el pan se pone duro y reseco más rápido que a temperatura ambiente. Lo ideal es guardarlo a temperatura ambiente en una bolsa cerrada por hasta 5 días. Para que dure más, el congelador es la mejor opción.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué significa "harina de trigo enriquecida" en la etiqueta?</p>
              <p className="faq-a">
                Es harina refinada a la que se le agregaron hierro y vitaminas del complejo B —obligatorio por ley en la mayoría de los países de la región. No es harina integral. Si el primer ingrediente de la etiqueta es "harina de trigo enriquecida", el pan es blanco, aunque tenga semillas encima o en el nombre del empaque.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué pan es mejor para hacer tostadas?</p>
              <p className="faq-a">
                Para tostadas, el pan blanco suele quedar más crocante y parejo. El pan integral, por tener más fibra y humedad, tiende a tostarse de forma menos uniforme y puede quedar duro en algunas partes. Para la textura clásica de tostada, el pan de molde blanco sigue siendo la opción más práctica.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El pan blanco tiene fibra?</p>
              <p className="faq-a">
                Tiene, pero poca. Una porción de 100 g tiene en promedio 2,5 g de fibra —mientras que el integral llega a 6-7 g en la misma cantidad. La{' '}
                <a href="https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">
                  OMS recomienda al menos 25 g de fibra al día
                </a>
                . Para llegar a esa cifra solo con pan blanco habría que comer cantidades mucho mayores que con el integral.
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
                Creador de Mise. Durante años compró pan de molde "multigrano" pensando que era la opción más sana. El primer ingrediente siempre era harina blanca enriquecida.
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
              Compras el pan correcto —y no se te olvida anotar qué tipo antes de salir de casa.
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
