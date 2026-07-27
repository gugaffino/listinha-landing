import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cuaderno de recetas: cómo organizarlo y no abandonarlo',
  description: 'Un cuaderno de recetas solo funciona si lo sigues usando después de la segunda semana. Qué anotar, cómo organizarlo por categorías y cuándo pasar a digital.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/caderno-de-receitas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/caderno-de-receitas',
      en: 'https://www.miseemcasa.com.br/en/blog/caderno-de-receitas',
      es: 'https://www.miseemcasa.com.br/es/blog/caderno-de-receitas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/caderno-de-receitas',
    },
  },
  openGraph: {
    title: 'Cuaderno de recetas: cómo organizarlo y no abandonarlo',
    description: 'Un cuaderno de recetas solo funciona si lo sigues usando después de la segunda semana. Qué anotar, cómo organizarlo por categorías y cuándo pasar a digital.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/caderno-de-receitas',
    images: [
      {
        url: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cuaderno de recetas abierto con escritura a mano sobre una mesa de madera, rodeado de ingredientes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuaderno de recetas: cómo organizarlo y no abandonarlo',
    description: 'Un cuaderno de recetas solo funciona si lo sigues usando después de la segunda semana. Qué anotar, cómo organizarlo por categorías y cuándo pasar a digital.',
    images: ['https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué debo anotar en cada receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo mínimo útil: nombre de la receta, ingredientes con cantidades, pasos numerados y tiempo total. Vale la pena agregar si tienes la costumbre: rendimiento (para cuántas personas), variaciones que ya probaste y notas personales sobre ajustes. La foto solo suma si de verdad la tomas mientras cocinas — si no, solo ocupa espacio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo organizo un cuaderno de recetas por categorías?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organiza según cómo lo usas, no según lo que se ve más completo. Las categorías más prácticas: desayunos, comida, sopas, guarniciones, postres. Si cocinas mucho de algo específico — pastas, sin gluten, para congelar — dale su propia sección. Evita categorías que nunca van a tener más de una receta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Vale más la pena un cuaderno físico o digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El físico es más fácil de empezar y tiene el ritual de escribir a mano. El digital es más fácil de mantener, de buscar y de conectar con lo que ya tienes en casa. El problema del físico es que no se sincroniza con la lista de compras — tienes que releerlo antes de ir al mercado. Si vas a usar las recetas para planear qué comprar, el digital vale la pena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué app usar para un cuaderno de recetas digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de lo que necesites. Notion y Google Docs funcionan si quieres personalización total y no necesitas integración con la lista de compras. Las apps específicas de recetas — como Mise — conectan la receta directamente con la lista de compras y la despensa, lo que elimina el paso de releer la receta antes de ir al mercado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evito perder las recetas del cuaderno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En físico: toma fotos de las páginas y guárdalas en una carpeta en el celular o en la nube. Evita anotar en hojas sueltas o notas dentro del cuaderno — se pierden. En digital: prefiere apps con respaldo automático antes que archivos locales. La mayor causa de pérdida no es el formato, es anotar en varios lugares y no volver a encontrarlo. Un solo lugar, bien mantenido, vale más que varios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo armo un cuaderno de recetas familiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza pidiendo que cada persona anote una receta que hace seguido — no la especial de fin de año, la del día a día. El cuaderno familiar se enriquece con las recetas reales, con las adaptaciones de cada uno. Anota el nombre de quien la pasó y cualquier historia detrás. El digital facilita que quien vive lejos también aporte.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuaderno de recetas: cómo organizarlo y no abandonarlo',
  description: 'Un cuaderno de recetas solo funciona si lo sigues usando después de la segunda semana. Qué anotar, cómo organizarlo por categorías y cuándo pasar a digital.',
  image: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/caderno-de-receitas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuaderno de recetas', item: 'https://www.miseemcasa.com.br/es/blog/caderno-de-receitas' },
  ],
}

export default function CuadernoDeRecetasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Cuaderno de recetas</li>
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
            Cuaderno de recetas: guía práctica para armarlo y mantenerlo organizado
          </h1>
          <p className="blog-desc">
            Todos tenemos recetas regadas por todos lados: en el video de YouTube que guardaste, en la captura de pantalla, en el grupo de la familia, en la nota pegada en el refrigerador. Un cuaderno de recetas resuelve eso. El problema es que la mayoría lo arma y lo abandona a la segunda semana.
          </p>

          <div className="answer-box">
            <p>
              <strong>Un cuaderno de recetas</strong> es el único lugar donde guardas las recetas que ya probaste y que van a ser parte de tu rutina en la cocina. Puede ser físico (cuaderno, carpeta) o digital (app, hoja de cálculo). Lo que lo hace funcionar no es el formato — es tener un criterio claro de qué entra y una estructura que puedas mantener.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cuaderno de recetas abierto con escritura a mano sobre una mesa de madera clara, con ingredientes y utensilios alrededor"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Katya Wolf / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#por-que-tenerlo">Por qué tener un cuaderno de recetas</a></li>
              <li><a href="#que-incluir">Qué incluir en cada receta</a></li>
              <li><a href="#categorias">Cómo organizar por categorías</a></li>
              <li><a href="#papel-o-digital">Físico o digital: la diferencia real</a></li>
              <li><a href="#recetas-y-lista">Recetas y lista de compras: qué cambia cuando están conectadas</a></li>
              <li><a href="#vale-la-pena">¿Vale la pena armar uno?</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* POR QUE TENERLO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5124880/pexels-photo-5124880.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Persona hojeando un libro de recetas abierto en la cocina mientras cocina — organización en la cocina"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: cottonbro studio / Pexels</p>
          </div>

          <h2 id="por-que-tenerlo" className="img-above">Por qué tener un cuaderno de recetas</h2>

          <p>
            Tu carpeta de recetas guardadas no es un cuaderno de recetas. Es una fila de videos que vas a &quot;ver después&quot;. Después no existe en YouTube. La receta que viste el martes, te encantó y querías hacer el sábado, la vas a buscar veinte minutos antes de rendirte y terminar haciendo huevos revueltos.
          </p>
          <p>
            El problema no es falta de recetas. Es exceso de recetas guardadas en el lugar equivocado. Todo el mundo tiene cientos de recetas guardadas, marcadas, capturadas. Casi ninguna se repite. El cuaderno de recetas resuelve justo eso: guarda solo lo que ya hiciste y vas a volver a hacer.
          </p>
          <p>
            Esa es la diferencia entre una colección y un repertorio. La colección crece sin criterio. El repertorio es lo que realmente cocinas. Un cuaderno de recetas debería ser un repertorio — no una biblioteca de ambiciones de domingo.
          </p>
          <p>
            Hay otro beneficio concreto: planear las comidas de la semana. Cuando tus recetas están en un solo lugar, armar el menú semanal toma minutos. Ves qué tienes, eliges, y de ahí sale la lista de ingredientes. Sin eso, planear empieza de cero cada semana.
          </p>

          {/* QUE INCLUIR */}
          <h2 id="que-incluir">Qué incluir en cada receta</h2>

          <p>
            El error más común es copiar la receta tal como aparece en el sitio — con toda la introducción, la historia de la abuela, los tres párrafos antes de los ingredientes. Eso funciona en un blog. En tu cuaderno la vas a abrir cocinando, con las manos ocupadas, y necesitas encontrar la información en dos segundos.
          </p>
          <p>
            Lo mínimo que funciona:
          </p>
          <ul>
            <li><strong>Nombre de la receta</strong> — como realmente la vas a buscar, no el nombre elegante del original</li>
            <li><strong>Ingredientes con cantidades</strong> — en el orden en que se usan, si es posible</li>
            <li><strong>Pasos numerados y cortos</strong> — &quot;sofreír la cebolla hasta dorar&quot; es suficiente</li>
            <li><strong>Tiempo de preparación y rendimiento</strong> — para cuántas personas alcanza, cuánto tarda en total</li>
          </ul>
          <p>
            Vale la pena agregar si tienes la costumbre: variaciones que probaste (&quot;mejor con poro&quot;), sustituciones que funcionan, errores que ya cometiste. Eso no está en la receta original y es lo que hace que el cuaderno sea tuyo.
          </p>
          <p>
            Foto: solo si de verdad la tomas mientras cocinas. La foto por obligación ocupa espacio y no ayuda. El cuaderno que realmente usas casi nunca es el más bonito.
          </p>

          {/* CATEGORIAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8367791/pexels-photo-8367791.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cuaderno abierto con recetas organizadas y separadores de colores sobre una superficie clara"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vlada Karpovich / Pexels</p>
          </div>

          <h2 id="categorias" className="img-above">Cómo organizar por categorías</h2>

          <p>
            Organiza según cómo lo usas, no según lo que se ve más completo. Un índice bonito con doce categorías vacías es peor que tres categorías llenas.
          </p>
          <p>
            Un punto de partida que funciona:
          </p>
          <ul>
            <li><strong>Desayunos y snacks</strong> — avena, huevos, hotcakes, licuados</li>
            <li><strong>Comida — platos principales</strong> — pollo, carne, pescado, vegetariano</li>
            <li><strong>Sopas y caldos</strong> — sobre todo cuando baja la temperatura</li>
            <li><strong>Guarniciones</strong> — arroz, frijoles, ensaladas, verduras</li>
            <li><strong>Postres</strong> — pasteles, dulces, fruta preparada</li>
          </ul>
          <p>
            Si cocinas mucho de una categoría específica — pastas, sin gluten, para congelar — dale su propia sección. Si nunca vas a tener más de dos recetas en una categoría, no necesitas la sección.
          </p>
          <p>
            En físico, usa pestañas o separadores. En digital, carpetas o etiquetas. Lo que importa es encontrar la receta en menos de 30 segundos sin acordarte del nombre exacto.
          </p>

          {/* PAPEL O DIGITAL */}
          <h2 id="papel-o-digital">Físico o digital: la diferencia real</h2>

          <p>
            No hay uno correcto. Hay el que realmente vas a mantener.
          </p>

          <h3>Cuaderno físico</h3>
          <p>
            Más fácil de empezar. Sin configuración, sin cuenta, sin app que aprender a usar. Escribir a mano tiene un efecto real: filtras mejor qué vale la pena copiar cuando anotarlo cuesta tiempo. Los cuadernos físicos suelen tener las recetas más usadas porque el criterio para entrar es más alto.
          </p>
          <p>
            Los problemas: no tiene buscador. No se sincroniza con nada. Y esa receta de pollo que sabes que está ahí en algún lado te va a tomar tres minutos encontrar si ya llevas 80 páginas. Toma fotos de las páginas de vez en cuando como respaldo.
          </p>

          <h3>Cuaderno digital</h3>
          <p>
            Más fácil de mantener a largo plazo. Buscas por ingrediente, por nombre, por categoría. Editar es simple — pruebas una variación, la actualizas, sin tachar ni reescribir la página. Y dependiendo de la app, puedes conectar la receta con lo que ya tienes en la despensa y con tu lista de compras.
          </p>
          <p>
            El problema es la fricción para empezar: hay que elegir una herramienta, configurarla y crear el hábito de abrirla en vez de seguir en el celular. Si usas Notion, Google Docs o una hoja de cálculo, la búsqueda sigue siendo manual y no hay integración automática con lo que compras.
          </p>

          {/* RECETAS Y LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6996156/pexels-photo-6996156.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Persona escribiendo la lista de compras en un cuaderno mientras mira una receta abierta en la mesa"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pavel Danilyuk / Pexels</p>
          </div>

          <h2 id="recetas-y-lista" className="img-above">Recetas y lista de compras: qué cambia cuando están conectadas</h2>

          <p>
            Este es el paso que la mayoría de los cuadernos de recetas — físicos o digitales — no dan.
          </p>
          <p>
            El flujo normal sin integración: decides qué vas a cocinar en la semana, abres cada receta una por una, anotas los ingredientes en un papel aparte, vas al mercado. Eso toma tiempo y es fácil equivocarse — sobre todo cuando olvidas revisar qué ya tienes en la despensa antes de comprar más.
          </p>
          <p>
            El flujo con recetas conectadas a la lista y la despensa es distinto. Eliges qué vas a cocinar. El sistema cruza los ingredientes de la receta con lo que ya tienes en casa. La lista sale con solo lo que falta. Vas al mercado con lo que realmente necesitas, no con lo que creías que necesitabas.
          </p>
          <p>
            En <a href="/es/funcionalidades/receitas">Mise</a>, las recetas están en el mismo lugar que tu{' '}
            <a href="/es/funcionalidades/despensa">despensa</a> y tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>. Eliges la receta, ya sabe qué tienes en casa y arma la lista con lo que falta. Eso es lo que convierte un cuaderno de recetas de repositorio en herramienta de cocina de verdad.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">¿Vale la pena armar un cuaderno de recetas?</h2>

          <p>
            Si cocinas seguido y repites recetas, sí. El cuaderno elimina el tiempo de búsqueda, reduce el desperdicio de ingredientes comprados por error y hace más rápido el plan semanal.
          </p>
          <p>
            Si cocinas poco y sigues una receta nueva cada vez, mantener un cuaderno puede costar más de lo que ahorra. En ese caso, una carpeta de favoritos bien organizada ya resuelve.
          </p>
          <p>
            El criterio de entrada hace toda la diferencia. Un cuaderno de 20 recetas que realmente usas vale más que 200 que nunca vas a hacer. Empieza chico. Anota solo lo que ya probaste y vas a repetir. El cuaderno crece con tu rutina — no con tu ambición culinaria del domingo.
          </p>
          <p>
            Una receta anotada que nunca hiciste no es un cuaderno de recetas. Es una lista de intenciones.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el cuaderno de recetas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué debo anotar en cada receta?</p>
              <p className="faq-a">
                Lo mínimo útil: nombre, ingredientes con cantidades, pasos numerados, tiempo y rendimiento. Vale la pena agregar si tienes la costumbre: variaciones que probaste, sustituciones que funcionan y errores que ya cometiste. La foto solo si tienes el hábito de tomarla — si no, solo ocupa espacio.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo organizo un cuaderno de recetas por categorías?</p>
              <p className="faq-a">
                Organiza según cómo lo usas, no según lo más bonito. Categorías prácticas: desayunos, comida, sopas, guarniciones, postres. Si cocinas mucho de algo específico — pastas, sin gluten, congelados — dale su propia sección. Evita categorías que nunca van a tener más de una receta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Vale más la pena un cuaderno físico o digital?</p>
              <p className="faq-a">
                El físico es más fácil de empezar y filtra mejor qué entra. El digital es más fácil de mantener, de buscar y de conectar con la lista de compras. Si vas a usar las recetas para planear qué comprar, el digital vale la pena. El mejor es el que realmente vas a mantener.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué app usar para un cuaderno de recetas digital?</p>
              <p className="faq-a">
                Notion y Google Docs funcionan si quieres personalización y no necesitas integración con la lista de compras. Mise conecta la receta directamente con la lista de compras y la despensa, eliminando el paso de releer la receta antes de ir al mercado.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo evito perder las recetas del cuaderno?</p>
              <p className="faq-a">
                En físico: toma fotos de las páginas y guárdalas en la nube. Evita anotar en hojas sueltas — se pierden. En digital: prefiere apps con respaldo automático. La mayor causa de pérdida no es el formato, es anotar en varios lugares y no volver a encontrarlo. Un solo lugar, bien mantenido, vale más que varios.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo armo un cuaderno de recetas familiar?</p>
              <p className="faq-a">
                Empieza pidiendo que cada persona anote una receta del día a día — no la especial de fin de año. Anota el nombre de quien la pasó y cualquier detalle que solo esa persona sabe. El digital facilita que quien vive lejos también aporte. El físico tiene el encanto de la letra de cada uno.
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
                Creador de Mise. Tiene un cuaderno físico con 12 recetas — todas probadas, todas repetidas. El resto vive en la{' '}
                <a href="/es/funcionalidades/receitas">app</a>.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Tus recetas, tu despensa, tu lista.<br />
              <em>Todo junto en Mise.</em>
            </h2>
            <p>
              Eliges la receta, Mise ya sabe qué tienes en casa y arma la lista con lo que falta.
              Sin papel, sin olvidar ingredientes, sin sorpresas en la caja.
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
