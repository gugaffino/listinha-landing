import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cuscuz brasileño: qué es, beneficios y cómo prepararlo',
  description: 'El cuscuz brasileño es harina de maíz al vapor, no sémola de trigo — sin gluten, con fibra, hierro y selenio. Qué es, sus beneficios reales y cómo incluirlo en tu semana.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-cuscuz',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-cuscuz',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-cuscuz',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-cuscuz',
    },
  },
  openGraph: {
    title: 'Cuscuz brasileño: qué es, beneficios y cómo prepararlo',
    description: 'El cuscuz brasileño es harina de maíz al vapor, no sémola de trigo — sin gluten, con fibra, hierro y selenio. Qué es, sus beneficios reales y cómo incluirlo en tu semana.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-cuscuz',
    images: [
      {
        url: 'https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pimiento verde relleno de cuscuz — plato colorido con granos de cuscuz brasileño sobre una superficie rústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuscuz brasileño: qué es, beneficios y cómo prepararlo',
    description: 'El cuscuz brasileño es harina de maíz al vapor, no sémola de trigo — sin gluten, con fibra, hierro y selenio. Qué es, sus beneficios reales y cómo incluirlo en tu semana.',
    images: ['https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El cuscuz brasileño es proteína o carbohidrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es principalmente un carbohidrato. En 100 g de cuscuz brasileño cocido hay unos 16 g de carbohidratos y 1,8 g de proteína. La proteína está presente, pero en poca cantidad — para subir el valor proteico del plato, combínalo con huevo, queso fresco o frijoles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cuscuz brasileño tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, el cuscuz de maíz no tiene gluten en su composición. Es una buena alternativa para personas con enfermedad celíaca o sensibilidad al gluten. Aun así, revisa la etiqueta: algunas marcas lo procesan en fábricas que también manipulan trigo y pueden tener trazas por contaminación cruzada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el cuscuz brasileño y el cuscús magrebí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son dos platos distintos que comparten nombre por casualidad histórica. El cuscuz brasileño se hace con harina de maíz en hojuelas, hidratada y cocida al vapor en un molde llamado cuscuzeira. El cuscús magrebí se hace con sémola de trigo en granos pequeños, cocida al vapor y luego separada con un tenedor. Cambia el grano, la textura y el sabor — lo único que realmente comparten es el paso de cocción al vapor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cuscuz brasileño hace bien para el intestino?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La fibra del cuscuz de maíz favorece el buen funcionamiento intestinal, ayuda a prevenir el estreñimiento y aumenta la sensación de saciedad. La cantidad por porción no es altísima, pero sumada a otras fuentes de fibra en la alimentación, sí marca una diferencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cuscuz brasileño engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No más que cualquier otro carbohidrato en la misma cantidad. En 100 g de cuscuz brasileño cocido hay unas 76 kcal — menos que el arroz blanco cocido en la misma porción. El cuscuz en sí no es el problema. Lo que le pones encima —mantequilla, queso, tocino— sí puede serlo. Dentro de una alimentación variada, no es un alimento que haya que eliminar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cuscuz de maíz es lo mismo que la polenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Los dos vienen del maíz, pero son productos diferentes. La polenta se hace con harina de maíz fina, cocida hasta quedar suave y cremosa. El cuscuz brasileño usa hojuelas de maíz más gruesas, hidratadas y cocidas al vapor, con una textura granulada que se compacta como un pastel firme, no como una papilla.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuscuz brasileño: qué es, beneficios y cómo prepararlo',
  description: 'El cuscuz brasileño es harina de maíz al vapor, no sémola de trigo — sin gluten, con fibra, hierro y selenio. Qué es, sus beneficios reales y cómo incluirlo en tu semana.',
  image: 'https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/beneficios-do-cuscuz',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuscuz brasileño', item: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-cuscuz' },
  ],
}

export default function CuscuzBrasilenoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Cuscuz brasileño</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-07">7 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cuscuz brasileño: no es el cuscús que conoces, y vale la pena conocerlo
          </h1>
          <p className="blog-desc">
            Si buscabas información nutricional sobre el cuscús y llegaste aquí, este no es el plato de sémola de trigo. El cuscuz brasileño es harina de maíz cocida al vapor — sin gluten, económico y un básico real en la despensa de Brasil. Esto es lo que realmente es y lo que aporta a tu cuerpo.
          </p>

          <div className="answer-box">
            <p>
              <strong>Beneficios del cuscuz brasileño:</strong> fibra, carbohidratos complejos, selenio y hierro.
              Favorece el funcionamiento intestinal, libera energía de forma gradual y no tiene gluten —lo que lo vuelve una opción válida para quienes tienen enfermedad celíaca.
              También es uno de los carbohidratos más baratos que se consiguen en Brasil, y una alternativa a base de maíz para quien evita el trigo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pimiento verde relleno de cuscuz — plato colorido con granos de cuscuz brasileño sobre una superficie rústica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Lisa Fotios / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es realmente el cuscuz brasileño</a></li>
              <li><a href="#vs-magrebi">Cuscuz brasileño vs. cuscús magrebí</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#beneficios">Beneficios para la salud</a></li>
              <li><a href="#engorda">¿Engorda?</a></li>
              <li><a href="#como-usar">Cómo incluirlo en tu rutina</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/21531611/pexels-photo-21531611.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Granos de cuscuz en un tenedor — granos finos y sueltos listos para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es realmente el cuscuz brasileño</h2>

          <p>
            &ldquo;Cuscús&rdquo; significa dos platos completamente distintos según de dónde vengas.
            En la mayor parte del mundo hispanohablante, es el cuscús magrebí: granos pequeños de sémola de trigo enrollada.
            En Brasil, &ldquo;cuscuz&rdquo; casi siempre es otra cosa: harina de maíz en hojuelas, hidratada y cocida al vapor en un molde llamado <em>cuscuzeira</em>, que se sirve caliente en el desayuno de buena parte del país.
          </p>
          <p>
            Este artículo habla de la versión brasileña —el cuscuz nordestino, a veces descrito en inglés como &ldquo;Brazilian corn couscous&rdquo; para diferenciarlo del de trigo. Es lo que vas a encontrar en cualquier mercado de Brasil por menos de un dólar el kilo, y es la versión que de verdad importa si buscas un carbohidrato económico y sin gluten.
          </p>
          <p>
            Su origen está en comunidades indígenas del nordeste brasileño, mucho antes de que los colonizadores portugueses llevaran el cuscús de trigo a la región. El maíz y la harina de mandioca reemplazaron al trigo, y el plato se volvió un alimento de resistencia —barato, fácil de preparar y capaz de sostener mañanas largas de trabajo. Sigue siendo símbolo de la cocina nordestina, pero hoy aparece en cocinas de todo Brasil como alternativa al pan.
          </p>

          {/* VS MAGREBÍ */}
          <h2 id="vs-magrebi">Cuscuz brasileño vs. cuscús magrebí</h2>

          <p>
            Vale la pena aclararlo bien, porque el nombre compartido genera confusión real —incluso en búsquedas sobre nutrición, donde aparecen datos del cuscús de trigo para un alimento completamente distinto.
          </p>
          <p>
            <strong>Cuscús magrebí (marroquí/argelino):</strong> hecho con sémola de trigo enrollada en granos pequeños, cocida al vapor y luego suelta con un tenedor. Tiene gluten, textura ligera y esponjosa, y suele servirse como acompañamiento de un guiso o de verduras.
          </p>
          <p>
            <strong>Cuscuz brasileño:</strong> hecho con harina de maíz en hojuelas, hidratada con agua y sal, y cocida al vapor hasta quedar firme y moldeable —más cerca de un pastel salado que de un grano suelto. No tiene gluten y suele comerse solo o relleno de huevo, queso o carne desmenuzada.
          </p>
          <p>
            Lo único que realmente comparten es el paso de cocción al vapor y el nombre que un marinero portugués les puso a ambos hace siglos. En nutrientes, textura y forma de prepararse y servirse, casi no se parecen —así que si una receta o una etiqueta dice &ldquo;cuscús&rdquo;, vale la pena confirmar a cuál de los dos se refiere antes de sustituir uno por el otro.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes</h2>

          <p>
            En 100 g de cuscuz brasileño cocido: unas 76 kcal, 16 g de carbohidratos, 1,7 g de fibra, 1,8 g de proteína y menos de 1 g de grasa.
            En comparación, la misma cantidad de arroz blanco cocido tiene cerca de 130 kcal —el cuscuz sale más liviano.
          </p>
          <p>
            Más allá de los carbohidratos, lo que llama la atención es el <strong>selenio</strong>, un mineral esencial para la función de la tiroides y para el sistema inmunológico como antioxidante.
            También aporta <strong>hierro</strong>, necesario para la formación de hemoglobina, y vitaminas del complejo B, en especial B1, que participan en el metabolismo energético.
          </p>
          <p>
            No es la fuente más densa de proteína de la cocina brasileña —ni cerca. Si buscas subir la proteína del plato, el cuscuz combina bien con huevo cocido o queso fresco —que es justamente el desayuno tradicional nordestino, y tiene sentido nutricional, no solo costumbre.
          </p>
          <p>
            Los datos de composición nutricional usados aquí vienen de la base de datos oficial de alimentos de Brasil, la{' '}
            <a href="https://www.tbca.net.br/" target="_blank" rel="noopener">Tabela Brasileira de Composição de Alimentos (TBCA)</a>,
            mantenida por la Universidad de São Paulo.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios para la salud</h2>

          <p>
            La fibra es el beneficio más práctico del cuscuz brasileño. Con 1,7 g por cada 100 g cocidos, favorece el funcionamiento intestinal y aumenta la sensación de saciedad. Eso ayuda a controlar el apetite entre comidas sin sumar más calorías.
          </p>
          <p>
            El almidón del maíz se digiere a un ritmo moderado —no es el carbohidrato de liberación más lenta que existe, pero sostiene mejor que el pan blanco refinado en el desayuno. Si sientes una bajada rápida de energía después de café con pan, puede ser una alternativa que valga la pena probar.
          </p>
          <p>
            Para quien tiene enfermedad celíaca o sensibilidad al gluten, el cuscuz brasileño es naturalmente libre de gluten. A diferencia del cuscús de trigo, no representa ningún riesgo para ese grupo. La salvedad: revisa siempre la etiqueta, porque algunas marcas se procesan en fábricas que también manipulan trigo.
          </p>
          <p>
            Hay un punto que rara vez entra en la lista de beneficios, pero debería: el precio. A menos de un dólar el kilo en buena parte de Brasil, está entre los carbohidratos más baratos del mercado. Para quien organiza la despensa con un presupuesto real, eso no es un detalle menor —es parte concreta del beneficio.
          </p>

          <div className="blog-inline-cta">
            <p>La cocina no debería costarte tanta cabeza. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ENGORDA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1618952/pexels-photo-1618952.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Plato con guiso y cuscuz — comida típica del nordeste brasileño servida en un tazón sobre la mesa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="engorda" className="img-above">¿El cuscuz brasileño engorda?</h2>

          <p>
            No más que cualquier carbohidrato en la misma cantidad. En 100 g de cuscuz brasileño cocido hay unas 76 kcal —menos que el arroz blanco cocido en la misma porción. El contenido de grasa es bajo y la proteína es moderada.
          </p>
          <p>
            El cuscuz brasileño con mantequilla, queso, tocino y huevo —el desayuno completo— sí es calórico. Pero ahí el que pesa no es el cuscuz.
          </p>
          <p>
            La idea de &ldquo;este alimento engorda&rdquo; casi nunca funciona bien para un carbohidrato solo. Dentro de una alimentación variada, el cuscuz no es un alimento que haya que eliminar. Lo que importa es qué le pones encima, en qué cantidad y con qué frecuencia.
          </p>

          {/* COMO USAR */}
          <h2 id="como-usar">Cómo incluir el cuscuz brasileño en tu rutina</h2>

          <p>
            El cuscuz brasileño es uno de los básicos más fáciles de preparar.
            Con cuscuzeira: hidrata la harina de maíz en hojuelas con agua y sal por 10 minutos, y cocina al vapor de 20 a 30 minutos.
            Sin cuscuzeira: existen versiones precocidas que quedan listas con agua hirviendo en pocos minutos.
          </p>
          <p>
            Para el desayuno: una rebanada de cuscuz con huevo cocido o queso fresco resuelve proteína y carbohidrato en un plato simple. Suma una fruta o yogur natural y tienes lo básico nutritivo sin ninguna complicación.
          </p>
          <p>
            Para el almuerzo: reemplaza el arroz los días que quieras variar. Funciona bien con frijoles, proteína a la plancha y ensalada —la misma lógica del plato tradicional brasileño.{' '}
            <a href="/es/blog/feijao-preto-beneficios">El frijol negro</a>
            {' '}combina especialmente bien, tanto en sabor como en perfil nutricional complementario.
          </p>
          <p>
            Truco de despensa: el cuscuz brasileño en un envase cerrado dura semanas sin necesidad de refrigeración. Es de esos productos que vale la pena comprar en cantidad cuando está en oferta —y de los que más fácil se olvidan, hasta que se acaba el arroz y sales a buscarlo.
          </p>
          <p>
            Para tener organizados los productos fijos de la semana y no llegar al mercado sin saber qué falta, revisa la{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista del súper organizada por categoría</a>.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el cuscuz brasileño</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El cuscuz brasileño es proteína o carbohidrato?</p>
              <p className="faq-a">
                Es principalmente un carbohidrato. En 100 g de cuscuz brasileño cocido hay unos 16 g de carbohidratos y 1,8 g de proteína.
                Hay algo de proteína, pero poca.
                Para subir el valor proteico del plato, combínalo con huevo, queso fresco o{' '}
                <a href="/es/blog/alimentos-ricos-em-proteinas">alimentos ricos en proteína</a>.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El cuscuz brasileño tiene gluten?</p>
              <p className="faq-a">
                No, no tiene gluten en su composición. Es una opción válida para personas con enfermedad celíaca o sensibilidad al gluten.
                Aun así, revisa la etiqueta: algunas marcas lo procesan en fábricas que también manipulan trigo y pueden tener trazas por contaminación cruzada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el cuscuz brasileño y el cuscús magrebí?</p>
              <p className="faq-a">
                El cuscuz brasileño se hace con harina de maíz en hojuelas, cocida al vapor en un molde llamado cuscuzeira —un plato propiamente brasileño.
                El cuscús magrebí se hace con sémola de trigo, un básico de la cocina del norte de África y Medio Oriente.
                Son alimentos distintos, con sabores, texturas y perfiles nutricionales diferentes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El cuscuz brasileño hace bien para el intestino?</p>
              <p className="faq-a">
                Sí. La fibra del cuscuz de maíz favorece el buen funcionamiento intestinal y ayuda a prevenir el estreñimiento.
                La cantidad por porción no es altísima, pero sumada a otras fuentes de fibra en la alimentación, sí marca una diferencia real.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El cuscuz brasileño engorda?</p>
              <p className="faq-a">
                No más que otros carbohidratos en la misma cantidad.
                En 100 g de cuscuz brasileño cocido hay unas 76 kcal —menos que el arroz blanco en la misma porción.
                El cuscuz solo no es el problema. Lo que va con él y en qué cantidad es lo que importa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El cuscuz de maíz es lo mismo que la polenta?</p>
              <p className="faq-a">
                No. Los dos vienen del maíz, pero son productos diferentes.
                La polenta se hace con harina de maíz fina, cocida hasta quedar suave y cremosa.
                El cuscuz brasileño usa hojuelas de maíz hidratadas y cocidas al vapor, con textura granulada.
                El proceso de preparación y el resultado final son distintos.
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
                Creó Mise porque compraba arroz todas las semanas y se olvidaba de que ya tenía cuscuz en la despensa. Solo se daba cuenta el miércoles, cuando se acababa el arroz.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Despensa en orden. Lista lista.<br />
              <em>A cocinar.</em>
            </h2>
            <p>
              Mise conecta lo que ya tienes en casa con lo que necesitas comprar esta semana.
              Sin sorpresas de que el cuscuz se acabó justo cuando ya planeaste el desayuno con él.
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
