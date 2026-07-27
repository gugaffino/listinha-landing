import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Alimentos ricos en magnesio: lista y cantidades diarias',
  description: 'El magnesio está en semillas de calabaza, frijol negro y chocolate amargo. Mira 12 fuentes con la cantidad por porción y cómo sumarlas sin necesitar suplemento.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-magnesio',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-magnesio',
      en: 'https://www.miseemcasa.com.br/en/blog/alimentos-ricos-em-magnesio',
      es: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-magnesio',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-magnesio',
    },
  },
  openGraph: {
    title: 'Alimentos ricos en magnesio: lista y cantidades diarias',
    description: 'El magnesio está en semillas de calabaza, frijol negro y chocolate amargo. Mira 12 fuentes con la cantidad por porción y cómo sumarlas sin necesitar suplemento.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-magnesio',
    images: [
      {
        url: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Almendras, semillas, lentejas y nueces en tazones de porcelana sobre una superficie de madera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alimentos ricos en magnesio: lista y cantidades diarias',
    description: 'El magnesio está en semillas de calabaza, frijol negro y chocolate amargo. Mira 12 fuentes con la cantidad por porción y cómo sumarlas sin necesitar suplemento.',
    images: ['https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué alimento tiene más magnesio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las semillas de calabaza son la fuente más concentrada: 30 g tienen cerca de 160 mg de magnesio, casi 40% de lo que necesita un adulto al día. Después vienen las almendras (80 mg por 30 g), la espinaca cocida (78 mg por taza) y el frijol negro cocido (60 mg por media taza).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto magnesio necesita una persona al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La recomendación para adultos va de 310 a 420 mg diarios, según sexo y edad. Las mujeres embarazadas necesitan más. Ese rango se alcanza con una dieta variada — semillas, frutos secos, verduras de hoja oscura y leguminosas repartidas a lo largo del día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los síntomas de falta de magnesio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las primeras señales suelen ser calambres musculares, cansancio, irritabilidad y dificultad para dormir. En casos más severos puede haber palpitaciones y hormigueo en las extremidades. Son síntomas que parecen no tener relación entre sí, por eso la deficiencia tarda en detectarse.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El chocolate amargo de verdad tiene magnesio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. 30 g de chocolate con 70% de cacao o más tienen cerca de 65 mg de magnesio. Es una fuente real, no una excusa para comerlo. El chocolate de leche tiene mucho menos porque su porcentaje de cacao es más bajo. Para que cuente, tiene que ser el amargo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cocinar reduce el magnesio de los alimentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hervir en agua y tirar el caldo sí — parte del mineral se va al líquido. Saltear, cocinar al vapor o al horno pierde mucho menos. En el caso del frijol, el caldo de cocción conserva buena parte del magnesio, así que vale la pena aprovecharlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vale la pena suplementar magnesio sin indicación médica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por lo general no. Para la mayoría de las personas sin una condición médica específica, ajustar la alimentación ya resuelve el tema. Suplementar sin necesidad puede causar molestias gastrointestinales, sobre todo diarrea. Si sospecha de una deficiencia, lo correcto es un análisis de sangre con su médico.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alimentos ricos en magnesio: lista y cantidades diarias',
  description: 'El magnesio está en semillas de calabaza, frijol negro y chocolate amargo. Mira 12 fuentes con la cantidad por porción y cómo sumarlas sin necesitar suplemento.',
  image: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-27',
  dateModified: '2026-07-27',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-magnesio',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alimentos ricos en magnesio', item: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-magnesio' },
  ],
}

export default function AlimentosRicosEmMagnesioEs() {
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
            <li className="breadcrumb-current" aria-current="page">Alimentos ricos en magnesio</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">27 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            12 alimentos con magnesio que le faltan a tu lista del súper
          </h1>
          <p className="blog-desc">
            El magnesio es uno de esos minerales de los que todo el mundo habla y casi nadie compra a propósito. No es raro ni caro. Es cuestión de saber en qué alimentos está de verdad.
          </p>

          <div className="answer-box">
            <p>
              <strong>Los alimentos ricos en magnesio</strong> incluyen semillas de calabaza, almendras, espinaca cocida, frijol negro, avena en hojuelas, arroz integral y chocolate amargo con más de 70% de cacao. La necesidad diaria en un adulto es de{' '}
              <a href="https://together.stjude.org/es-us/medical-care/clinical-nutrition/high-magnesium-foods.html" target="_blank" rel="noopener">310 a 420 mg</a>{' '}
              — se alcanza con una alimentación variada, sin suplemento en la mayoría de los casos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Almendras, semillas, lentejas, quinoa y nueces en tazones de porcelana sobre una superficie de madera"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el magnesio y por qué falta en la dieta</a></li>
              <li><a href="#lista">12 alimentos ricos en magnesio</a></li>
              <li><a href="#absorcion">Qué reduce la absorción</a></li>
              <li><a href="#suplemento">Suplemento o alimentación</a></li>
              <li><a href="#como-incluir">Cómo sumar más magnesio en la semana</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <h2 id="que-es">Qué es el magnesio y por qué falta en la dieta de tanta gente</h2>

          <p>
            El magnesio participa en más de 300 reacciones del cuerpo: producción de energía, contracción muscular, regulación de la presión arterial, síntesis de proteínas. Es un mineral de fondo — cuando está equilibrado, no lo notas. Cuando falta, el cuerpo avisa de maneras que parecen no tener nada que ver entre sí.
          </p>
          <p>
            El problema está en la dieta típica. Arroz blanco, pan refinado, carnes procesadas y ultraprocesados son naturalmente bajos en magnesio. El arroz blanco tiene apenas una fracción del magnesio del integral. El pan blanco, menos que el de grano entero. La tendencia a comer más industrializado fue sacando las fuentes naturales del plato sin que la mayoría se diera cuenta.
          </p>
          <p>
            No hace falta cambiarlo todo de un día para otro. Pero conviene saber qué alimentos aportan el mineral de verdad — y cuáles parecen saludables pero no suman tanto como aparentan.
          </p>

          {/* LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Alimentos nutritivos — almendras, semillas de girasol, linaza, lentejas y nueces en tazones blancos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
          </div>

          <h2 id="lista" className="img-above">12 alimentos ricos en magnesio para agregar a la lista</h2>

          <p>
            Todas las fuentes de abajo se consiguen en cualquier súper. Las cantidades por porción son aproximadas — cambian según la preparación, el origen y la marca.
          </p>

          <h3>Semillas de calabaza</h3>
          <p>
            La fuente más concentrada de la lista. 30 g de semillas de calabaza tostadas tienen cerca de 160 mg de magnesio — casi 40% de lo que necesita un adulto al día. Se comen como snack, se agregan al yogur o se espolvorean sobre la ensalada. Precio bajo, impacto alto.
          </p>

          <h3>Almendras</h3>
          <p>
            30 g de almendras tienen aproximadamente 80 mg de magnesio. No necesitan refrigeración, son fáciles de llevar y funcionan a cualquier hora. El detalle: la bolsa suele acabarse antes de lo planeado. Eso no es problema del magnesio.
          </p>

          <h3>Espinaca cocida</h3>
          <p>
            Una taza de espinaca cocida aporta cerca de 78 mg de magnesio. Al cocinarse, el volumen se reduce y terminas comiendo más hoja por taza. Salteada en aceite de oliva, la absorción es buena. La espinaca cruda en ensalada también cuenta, aunque en menor cantidad por porción.
          </p>

          <h3>Frijol negro cocido</h3>
          <p>
            Media taza de frijol negro cocido tiene aproximadamente 60 mg de magnesio — la leguminosa que debería estar en la mayoría de las mesas latinoamericanas. El frijol pinto tiene un poco menos, pero sigue siendo buena fuente. Bono: el caldo de cocción conserva parte del mineral.
          </p>

          <h3>Avena en hojuelas</h3>
          <p>
            40 g de avena cruda en el desayuno entregan cerca de 70 mg de magnesio. Fácil de incluir, combina bien con fruta y frutos secos en la misma comida. Si ya desayunas avena de forma regular, ya estás sumando sin darte cuenta.
          </p>

          <h3>Arroz integral</h3>
          <p>
            Una taza de arroz integral cocido tiene cerca de 84 mg de magnesio. Compáralo con el arroz blanco — la misma porción tiene apenas 19 mg. La diferencia es grande. No hace falta dejar el blanco del todo, pero mezclar los dos ya marca diferencia a lo largo de la semana.
          </p>

          <h3>Nuez de la India (anacardo)</h3>
          <p>
            30 g de nuez de la India tienen alrededor de 75 mg de magnesio. Versátil: se come sola, en recetas o con yogur. A la hora de comprar, compara el precio por kilo — las bolsas chicas suelen salir más caras sin ninguna razón real.
          </p>

          <h3>Cacahuate (maní)</h3>
          <p>
            30 g de cacahuate tienen cerca de 50 mg de magnesio. La mayoría olvida que el cacahuate es técnicamente una leguminosa — y uno de los frutos secos más baratos que hay. La crema de cacahuate natural, sin azúcar añadida, también cuenta y es fácil de sumar al desayuno.
          </p>

          <h3>Quinoa cocida</h3>
          <p>
            Una taza de quinoa cocida aporta cerca de 118 mg de magnesio, más que la misma porción de arroz blanco, con proteína completa incluida. Si ya la comes seguido, mejor. Si no, no es obligatoria — hay otras fuentes igual de buenas y más baratas en esta lista.
          </p>

          <h3>Chocolate amargo (70%+)</h3>
          <p>
            30 g de chocolate amargo con más de 70% de cacao tienen cerca de 65 mg de magnesio. Es una fuente real, no una excusa. El chocolate de leche tiene mucho menos porque su porcentaje de cacao es más bajo. Para que cuente como fuente de magnesio, tiene que ser el amargo de verdad.
          </p>

          <h3>Plátano</h3>
          <p>
            Un plátano mediano tiene cerca de 32 mg de magnesio — menos que los frutos secos y las semillas, pero es fácil de comer y de llevar. Bueno para completar el total, no para ser la fuente principal.
          </p>

          <h3>Aguacate</h3>
          <p>
            Medio aguacate mediano tiene cerca de 58 mg de magnesio. No es el número más alto de la lista, pero viene con grasa buena y fibra en la misma porción. Si ya forma parte de tu dieta, cuenta, y cuenta bien.
          </p>

          {/* ABSORCIÓN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8230033/pexels-photo-8230033.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón con fruta, nueces y semillas de colores sobre la mesa — desayuno nutritivo con fuentes de magnesio"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Los Muertos Crew / Pexels</p>
          </div>

          <h2 id="absorcion" className="img-above">Qué reduce la absorción de magnesio</h2>

          <p>
            Saber qué alimentos tienen magnesio es la mitad del tema. La otra mitad es lo que puede estorbar el aprovechamiento del mineral en el cuerpo.
          </p>
          <p>
            El alcohol en exceso interfiere con la absorción y aumenta la eliminación del mineral por la orina. Una dieta rica en ultraprocesados tiende a ser pobre en magnesio por naturaleza. Hervir verduras en mucha agua y tirar el caldo elimina parte del mineral — saltear o cocinar al vapor pierde mucho menos. El café y el té en cantidad moderada tienen un impacto menor y no requieren preocupación especial.
          </p>
          <p>
            Condiciones como diabetes tipo 2, enfermedades intestinales inflamatorias y alcoholismo aumentan el riesgo de deficiencia sin importar lo que se coma. En esos casos, la suplementación puede estar indicada — siempre con guía médica.
          </p>

          {/* SUPLEMENTO */}
          <h2 id="suplemento">Suplemento o alimentación: qué funciona de verdad</h2>

          <p>
            Para la mayoría de las personas sin una condición médica específica, ajustar la alimentación ya resuelve el tema. La suplementación de magnesio puede estar indicada para quien tiene síndromes de mala absorción, diabetes no controlada, alcoholismo o toma ciertos medicamentos — pero siempre con seguimiento médico.
          </p>
          <p>
            El problema de suplementar sin necesidad: el exceso de magnesio causa molestias gastrointestinales, sobre todo diarrea. No es grave, pero sí incómodo. Y no tiene sentido suplementar si la alimentación ya lo resuelve con ajustes simples.
          </p>
          <p>
            Si estás pensando en un suplemento porque &quot;comes mal&quot;, lo más práctico es arreglar lo que compras antes de agregar una cápsula. Actualizar dos o tres cosas en tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            — cambiar el arroz blanco por integral, sumar frutos secos — ya genera una diferencia real a lo largo del mes.
          </p>

          <div className="blog-inline-cta">
            <p>Una despensa organizada es el punto de partida para comer mejor. <em>Mise se encarga de eso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMO INCLUIR */}
          <h2 id="como-incluir">Cómo sumar más magnesio en la semana — sin cambiar todo</h2>

          <p>
            No hace falta rediseñar toda la dieta. Son ajustes de compra que suman a lo largo de la semana sin exigir más tiempo en la cocina.
          </p>

          <ul className="item-list">
            <li>Cambia el arroz blanco por el integral — o mézclalos mitad y mitad para empezar.</li>
            <li>Agrega semillas de calabaza a la mezcla de frutos secos que ya compras.</li>
            <li>Elige chocolate amargo 70%+ en vez del de leche cuando quieras algo dulce.</li>
            <li>Si el desayuno es pan, suma crema de cacahuate natural sin azúcar.</li>
            <li>Incluye espinaca u otra hoja verde oscura en al menos tres comidas por semana.</li>
            <li>Mantén el frijol negro en{' '}
              <a href="/es/funcionalidades/lista-de-compras">tu lista de compras</a>{' '}
              — y la{' '}
              <a href="/es/funcionalidades/despensa">despensa</a>{' '}
              siempre surtida con leguminosas.
            </li>
          </ul>

          <p>
            Ninguno de estos cambios exige más presupuesto. Solo exige actualizar la lista antes de salir de casa.
          </p>
          <p>
            Cuando sabes lo que ya tienes en casa, dejas de comprar por duplicado y empiezas a comprar lo que de verdad falta — incluyendo los alimentos que hacen diferencia en el día a día. Para eso existe la{' '}
            <a href="/es/funcionalidades">despensa de Mise</a>.
          </p>
          <p>
            El magnesio ya está en el súper. Solo falta decidir qué versión del alimento te llevas a casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre alimentos con magnesio</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué alimento tiene más magnesio?</p>
              <p className="faq-a">
                Las semillas de calabaza son la fuente más concentrada: 30 g tienen cerca de 160 mg de magnesio, casi 40% de la necesidad diaria de un adulto. Después vienen las almendras (80 mg por 30 g), la espinaca cocida (78 mg por taza) y el frijol negro cocido (60 mg por media taza).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto magnesio necesita una persona al día?</p>
              <p className="faq-a">
                La recomendación para adultos va de 310 a 420 mg diarios, según sexo y edad. Las mujeres embarazadas necesitan más. Ese rango se alcanza con una alimentación variada — frutos secos, semillas, hojas verdes oscuras y leguminosas repartidas a lo largo del día.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuáles son los síntomas de falta de magnesio?</p>
              <p className="faq-a">
                Las primeras señales suelen ser calambres musculares, cansancio, irritabilidad y dificultad para dormir. En casos más severos puede haber palpitaciones y hormigueo en las extremidades. Son síntomas que parecen no tener relación entre sí — por eso la deficiencia tarda en detectarse.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El chocolate amargo de verdad tiene magnesio?</p>
              <p className="faq-a">
                Sí. 30 g de chocolate con 70% de cacao o más tienen cerca de 65 mg de magnesio — una fuente real, no una excusa. El chocolate de leche tiene mucho menos por su menor porcentaje de cacao. Para que cuente como fuente del mineral, tiene que ser el amargo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cocinar reduce el magnesio de los alimentos?</p>
              <p className="faq-a">
                Hervir en agua y tirar el caldo sí — parte del mineral se va al líquido. Saltear, cocinar al vapor o al horno pierde mucho menos. En el caso del frijol, el caldo de cocción conserva buena parte del magnesio — el caldito cuenta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Vale la pena suplementar magnesio sin indicación médica?</p>
              <p className="faq-a">
                Por lo general no. Para la mayoría de las personas sin una condición específica, ajustar la alimentación ya resuelve el tema. Suplementar sin necesidad puede causar molestias gastrointestinales, sobre todo diarrea. Si sospecha de una deficiencia, lo correcto es un análisis de sangre con su médico — no ensayo y error con una cápsula.
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
                Creador de Mise. Cambió el arroz blanco por el integral hace tres años. El arroz integral siguió siendo arroz.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              La despensa recuerda.<br />
              <em>Tú solo tienes que comprar lo correcto.</em>
            </h2>
            <p>
              Mise conecta despensa, recetas y lista de compras. Sabes qué tienes en casa antes de ir al súper — y dejas de comprar mal.
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
