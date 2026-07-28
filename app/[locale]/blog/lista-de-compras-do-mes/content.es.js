import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista del súper para el mes: cantidades y cómo ahorrar',
  description: 'Lista de mercado mensual con cantidades según el tamaño de la familia, qué comprar una vez al mes y qué comprar cada semana, y cómo no pasarte del presupuesto.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-do-mes',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-do-mes',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-do-mes',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-do-mes',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-do-mes',
    },
  },
  openGraph: {
    title: 'Lista del súper para el mes: cantidades y cómo ahorrar',
    description: 'Lista de mercado mensual con cantidades según el tamaño de la familia, qué comprar una vez al mes y qué comprar cada semana, y cómo no pasarte del presupuesto.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-do-mes',
    images: [
      {
        url: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mujer empujando un carrito de compras en el pasillo del supermercado con frutas y verduras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista del súper para el mes: cantidades y cómo ahorrar',
    description: 'Lista de mercado mensual con cantidades según el tamaño de la familia, qué comprar una vez al mes y qué comprar cada semana, y cómo no pasarte del presupuesto.',
    images: ['https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en una lista de mercado mensual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los grupos que no pueden faltar son los de despensa (arroz, pasta, aceite, azúcar, sal, café), proteínas (pollo, huevo, carne) y limpieza e higiene (jabón para trastes, detergente, papel higiénico). Esos grupos forman la base de cualquier compra mensual, sin importar el tamaño de la familia. Frutas, verduras y lácteos se resuelven con reposición semanal porque no aguantan el mes completo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto gasta una familia de 4 personas en el súper al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En México, el INEGI calcula que la canasta básica alimentaria le cuesta a una persona en zona urbana cerca de 2,571 pesos al mes — para una familia de cuatro, alrededor de 10,284 pesos solo en alimentos. La cifra exacta cambia según el país y la ciudad, pero la escala es parecida en buena parte de la región. Quien planea con lista y evita las compras por impulso suele quedarse en la parte baja de ese rango.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto gasta una pareja de 2 personas en el súper al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para dos personas, el gasto mensual suele rondar la mitad de lo que gasta una familia de cuatro en alimentos — en México, tomando como referencia al INEGI, cerca de 5,000 a 5,500 pesos al mes solo en comida. Varía según los hábitos, la ciudad y dónde se compra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cada cuánto conviene ir al súper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo ideal es una compra grande al mes o cada quince días para despensa y limpieza, más una o dos idas cortas por semana para reponer frutas, verduras y lácteos. Ir muy seguido sin lista tiende a disparar el gasto por impulso — es justo lo que la compra mensual busca evitar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre la lista semanal y la lista mensual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La lista semanal cubre lo que vas a cocinar esa semana y los productos perecederos. La lista mensual cubre los artículos de despensa y limpieza que duran más tiempo, con cantidades ya definidas. Las dos funcionan juntas: la mensual garantiza que la despensa no se quede vacía, y la semanal garantiza que todo esté fresco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo calculo las cantidades para la lista de mercado del mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El punto de partida es estimar el consumo mensual por persona. Para arroz, la referencia es de 1.5 a 2 kg por persona. Para pollo, entre 1.5 y 2 kg. Para huevo, una docena por persona. Anota qué se te acabó antes de lo esperado durante el primer mes — tres semanas de seguimiento ya muestran el patrón real de tu casa.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista del súper para el mes: cantidades y cómo ahorrar',
  description: 'Lista de mercado mensual con cantidades según el tamaño de la familia, qué comprar una vez al mes y qué comprar cada semana, y cómo no pasarte del presupuesto.',
  image: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-do-mes',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista del súper para el mes', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-do-mes' },
  ],
}

export default function ListaDeMercadoMesEs() {
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
            <li className="breadcrumb-current" aria-current="page">Lista del súper para el mes</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">27 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cómo armar la lista de mercado del mes sin volver al súper a media semana
          </h1>
          <p className="blog-desc">
            La lista semanal cubre el menú. La lista de mercado del mes cubre lo que la casa consume — arroz, detergente, papel higiénico — con cantidad definida. Una la haces por costumbre. La otra la extrañas el día que no la hiciste.
          </p>

          <div className="answer-box">
            <p>
              La <strong>lista de mercado del mes</strong> es la versión planeada de la lista semanal: en vez de solo anotar los productos, define cuánto comprar de cada uno para no tener que volver al súper antes de tiempo.
              Funciona cuando calculas el consumo por categoría — despensa, proteínas, frutas y verduras, lácteos, limpieza — según cuántas personas viven en casa.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Mujer empujando un carrito de compras en el pasillo del supermercado con frutas y verduras"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#mensual-vs-semanal">Lista mensual vs. lista semanal</a></li>
              <li><a href="#por-categoria">Cómo organizarla por categoría</a></li>
              <li><a href="#cantidades">Cantidades según el tamaño de la familia</a></li>
              <li><a href="#no-puede-faltar">Lo que no puede faltar</a></li>
              <li><a href="#presupuesto">Cómo no pasarte del presupuesto</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* MENSUAL VS SEMANAL */}
          <h2 id="mensual-vs-semanal">La lista mensual y la semanal no son lo mismo</h2>

          <p>
            La lista semanal resuelve el menú. Decides qué vas a cocinar, anotas lo que falta y vas al súper. Funciona bien — siempre que ya sepas qué tienes en casa.
          </p>
          <p>
            La lista de mercado del mes resuelve la despensa. Cubre lo que la casa consume sin importar el menú de esa semana: arroz, aceite, detergente, papel higiénico. No se trata de qué vas a cocinar hoy, sino de lo que la casa gasta cada mes, con un ritmo ya definido.
          </p>
          <p>
            La mayoría se salta esta capa por completo. Ir al súper sin ningún plan es la norma más que la excepción, y buena parte de lo que termina en el carrito no estaba pensado desde antes de entrar. La lista mensual no te va a ahorrar dinero en una sola visita. Te ahorra la vuelta al súper el martes porque se acabó el papel higiénico.
          </p>
          <p>
            Las dos listas funcionan juntas. La mensual garantiza la despensa. La semanal garantiza que todo esté fresco. Si te saltas la mensual, puedes hacer perfecto el menú de la semana y quedarte sin jabón para trastes a media quincena. Pasa más seguido de lo que se admite.
          </p>

          {/* POR CATEGORÍA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6837789/pexels-photo-6837789.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Lista de compras escrita a mano en papel con una pluma — checklist de productos por comprar"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Nataliya Vaitkevich / Pexels</p>
          </div>

          <h2 id="por-categoria" className="img-above">Cómo organizar la lista de mercado del mes por categoría</h2>

          <p>
            Organizar por categoría hace dos cosas a la vez: sigues el recorrido de la tienda sin volver dos veces al mismo pasillo, y dejas de perder grupos enteros de productos por descuido.
          </p>

          <h3>Despensa — se compra una vez al mes</h3>
          <ul className="item-list">
            <li>Arroz, pasta, frijol seco o de lata, harina</li>
            <li>Aceite para cocinar, aceite de oliva, vinagre</li>
            <li>Azúcar, sal, café</li>
            <li>Tomate en lata, puré de tomate, caldo en cubo o sobre</li>
            <li>Atún en lata, elote y chícharo en lata</li>
            <li>Leche en polvo, si la usas</li>
          </ul>
          <p>
            Estos productos son la base de la despensa. Se compran una vez y duran. Si llevas el control de lo que tienes en casa con{' '}
            <a href="/es/funcionalidades/despensa">la despensa de Mise</a>, sabes exactamente qué se está acabando antes de entrar al súper — sin tener que abrir cada alacena para revisar.
          </p>

          <h3>Proteínas — compra mensual o quincenal</h3>
          <ul className="item-list">
            <li>Pollo entero, pierna o pechuga — el que más cocines</li>
            <li>Carne molida, bistec o lo que entre en tu rotación de comidas</li>
            <li>Huevo (no se congela, pero aguanta unas 3 semanas)</li>
            <li>Pescado fresco o congelado, según la costumbre</li>
            <li>Salchicha, jamón, atún — lo que uses seguido</li>
          </ul>
          <p>
            La carne se congela bien. Puedes comprar la del mes completo de una vez, porcionarla en bolsas y guardarla en el congelador. El huevo no se congela, pero aguanta bastante en el refrigerador y de todos modos vas a necesitar más antes de que termine el mes.
          </p>

          <h3>Frutas y verduras — compra semanal</h3>
          <ul className="item-list">
            <li>Ajo, cebolla, papa, zanahoria — estos aguantan más, se compran en cantidad</li>
            <li>Tomate, pimiento, calabacita — duran 1 a 2 semanas</li>
            <li>Verduras de hoja, fruta — compra semanal, no mensual</li>
          </ul>
          <p>
            Aquí no hay forma de cubrir el mes completo en una sola ida. Ajo, cebolla y papa aguantan. Lo demás necesita reposición semanal. Intenta entrar al área de frutas y verduras ya con un plan de comidas de la semana — el{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            resuelve justo eso.
          </p>

          <h3>Lácteos — compra semanal</h3>
          <ul className="item-list">
            <li>Leche o bebida vegetal, yogur, queso, mantequilla o margarina</li>
          </ul>
          <p>
            Duran poco. Van en la reposición semanal, no en la compra mensual.
          </p>

          <h3>Limpieza e higiene — se compra una vez al mes</h3>
          <ul className="item-list">
            <li>Jabón para trastes, detergente para ropa, suavizante</li>
            <li>Desinfectante, multiusos, fibra, jerga o trapeador</li>
            <li>Jabón de baño, shampoo, acondicionador, pasta de dientes</li>
            <li>Papel higiénico, toallas de papel</li>
          </ul>
          <p>
            Esta categoría se pierde fácil entre la proteína y las verduras. Es también, justo, el grupo que te hace volver al súper a media semana cuando se acaba. El papel higiénico no es un artículo de emergencia — es un artículo de planeación.
          </p>

          {/* CANTIDADES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/27926903/pexels-photo-27926903.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasillo de supermercado con frutas y verduras de colores organizadas en exhibidor"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Markus Winkler / Pexels</p>
          </div>

          <h2 id="cantidades" className="img-above">Cantidades: cuánto comprar según el tamaño de la familia</h2>

          <p>
            No existe una cantidad exacta universal. Depende de las costumbres, de lo que cocinas y de cuántas comidas hace la familia en casa. Pero puedes partir de referencias y ajustar con el tiempo.
          </p>

          <h3>Para 2 personas</h3>
          <ul className="item-list">
            <li>Arroz: 1.5–2 kg al mes</li>
            <li>Frijol: 1–1.5 kg al mes</li>
            <li>Pollo: 3–4 kg al mes</li>
            <li>Huevo: 2 docenas al mes</li>
            <li>Aceite: 1 botella de 900 ml al mes</li>
            <li>Papel higiénico: 12 rollos al mes</li>
            <li>Detergente para ropa: 1 kg al mes</li>
          </ul>
          <p>
            En México, tomando como referencia al INEGI, dos personas gastan alrededor de 5,000 a 5,500 pesos al mes solo en alimentos de la canasta básica. La cifra cambia según el país y la ciudad, pero la proporción se repite en buena parte de la región.
          </p>

          <h3>Para 4 personas</h3>
          <ul className="item-list">
            <li>Arroz: 3–4 kg al mes</li>
            <li>Frijol: 2–3 kg al mes</li>
            <li>Pollo: 6–8 kg al mes</li>
            <li>Huevo: 4 docenas al mes</li>
            <li>Aceite: 2 botellas al mes</li>
            <li>Papel higiénico: 24 rollos al mes</li>
            <li>Detergente para ropa: 2 kg al mes</li>
          </ul>
          <p>
            Para una familia de cuatro, el INEGI calcula alrededor de 10,284 pesos al mes solo en alimentos básicos. La mejor forma de calibrar las cantidades es anotar qué se te acabó antes de lo esperado durante los primeros meses. Tres semanas de seguimiento ya muestran el patrón real de consumo de tu casa. Lo de arriba es punto de partida, no regla fija.
          </p>

          {/* NO PUEDE FALTAR */}
          <h2 id="no-puede-faltar">Lo que no puede faltar en la lista de mercado del mes</h2>

          <p>
            Sin importar el tamaño de la familia o las costumbres alimentarias, algunos productos deben entrar en cualquier lista mensual. Son los que, cuando se acaban, afectan todas las comidas al mismo tiempo.
          </p>
          <ul>
            <li><strong>Arroz y frijol</strong> — la base. Si faltan, no hay cena fácil</li>
            <li><strong>Aceite</strong> — entra en casi todo</li>
            <li><strong>Sal, azúcar, café</strong> — consumo constante y difícil de notar hasta que se acaba</li>
            <li><strong>Huevo</strong> — versátil, barato y resuelve cualquier comida rápida</li>
            <li><strong>Ajo y cebolla</strong> — base del sazón, se acaban rápido</li>
            <li><strong>Jabón para trastes y detergente</strong> — limpieza básica</li>
            <li><strong>Papel higiénico</strong> — no necesita explicación</li>
          </ul>
          <p>
            Estos productos son también el núcleo de una{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista del súper organizada por categorías</a>.
            Si tu lista mensual empieza por ellos y avanza hacia lo específico de tu rutina, ya cerraste los espacios en blanco que provocan las idas extra al súper.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa conectada a la lista de compras. <em>Eso hace Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* PRESUPUESTO */}
          <h2 id="presupuesto">Cómo no pasarte del presupuesto en el súper</h2>

          <p>
            Hay una escena que todos hemos vivido: entras al súper sin lista, tomas el carrito y empiezas a caminar por los pasillos. Todo parece necesario. Sales con tres cosas que no necesitabas y sin la que sí.
          </p>
          <p>
            Una lista escrita antes de salir ya resuelve buena parte de esto. Pero una lista armada contra lo que ya tienes en casa lo resuelve mejor — porque dejas de comprar lo que ya tienes. Buena parte del gasto de más en el súper viene precisamente de comprar sin saber qué había en la despensa.
          </p>
          <p>
            Algunos hábitos que reducen el gasto sin pedir sacrificios:
          </p>
          <ul>
            <li>Ve al súper después de comer — nunca con hambre</li>
            <li>Compara el precio por kilo, no por empaque</li>
            <li>Compra según el menú de la semana — si sabes qué vas a cocinar, sabes qué necesitas</li>
            <li>Evita los pasillos que no están en la lista</li>
          </ul>
          <p>
            Conectar la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            con la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            hace justo eso: cuando sabes qué se está acabando en casa, compras lo que realmente falta — no lo que crees que falta.
          </p>
          <p>
            La lista de mercado del mes no resuelve todo. Pero resuelve el martes sin papel higiénico.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la lista de mercado del mes</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en una lista de mercado mensual?</p>
              <p className="faq-a">
                Los grupos que no pueden faltar son los de despensa (arroz, pasta, aceite, azúcar, sal, café), proteínas (pollo, huevo, carne) y limpieza e higiene (jabón para trastes, detergente, papel higiénico). Frutas, verduras y lácteos se resuelven con reposición semanal porque no aguantan el mes completo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto gasta una familia de 4 personas en el súper al mes?</p>
              <p className="faq-a">
                En México, el INEGI calcula que una familia de cuatro gasta cerca de 10,284 pesos al mes solo en alimentos básicos. La cifra cambia según el país y la ciudad, pero la escala se repite en buena parte de la región. Quien planea con lista suele quedarse en la parte baja de ese rango.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto gasta una pareja de 2 personas en el súper al mes?</p>
              <p className="faq-a">
                Para dos personas, el gasto mensual en alimentos suele rondar la mitad de lo que gasta una familia de cuatro — en México, cerca de 5,000 a 5,500 pesos al mes según el INEGI. Varía según los hábitos y dónde se compra.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cada cuánto conviene ir al súper?</p>
              <p className="faq-a">
                Lo ideal es una compra grande al mes o cada quince días para despensa y limpieza, más una o dos idas cortas por semana para frutas, verduras y lácteos. Ir muy seguido sin lista tiende a disparar el gasto por impulso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre la lista semanal y la lista mensual?</p>
              <p className="faq-a">
                La lista semanal cubre el menú de la semana y los perecederos. La mensual cubre los artículos de despensa y limpieza con cantidades ya definidas. Las dos funcionan juntas: la mensual garantiza que la despensa no se quede vacía, y la semanal garantiza que todo esté fresco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo calculo las cantidades para la lista de mercado del mes?</p>
              <p className="faq-a">
                El punto de partida es estimar el consumo mensual por persona: arroz, de 1.5 a 2 kg; pollo, de 1.5 a 2 kg; huevo, una docena. Anota qué se te acabó antes de lo esperado durante el primer mes — tres semanas de seguimiento ya muestran el patrón real de tu casa.
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
                Creador de Mise. Volvió al súper un martes por el papel higiénico. Al mes siguiente lo puso en la lista mensual y no ha vuelto a media semana por eso desde entonces.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabe qué hay en la despensa.<br />
              <em>Usa Mise para el resto.</em>
            </h2>
            <p>
              Conecta la despensa, el menú semanal y la lista de compras en un solo lugar.
              Compras lo que realmente vas a usar — y el papel higiénico no se vuelve a acabar un martes.
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
