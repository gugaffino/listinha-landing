import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Lista de compras para pareja: cantidades que sí funcionan',
  description: 'Lista de compras para pareja con cantidades reales para 2 personas: qué comprar cada semana, qué comprar una vez al mes, cuánto cuesta y cómo dividir la lista sin duplicar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
    },
  },
  openGraph: {
    title: 'Lista de compras para pareja: cantidades que sí funcionan',
    description: 'Lista de compras para pareja con cantidades reales para 2 personas: qué comprar cada semana, qué comprar una vez al mes, cuánto cuesta y cómo dividir la lista sin duplicar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
    images: [
      {
        url: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Una pareja cocinando junta en una cocina luminosa — ella corta verduras mientras él cocina en la estufa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lista de compras para pareja: cantidades que sí funcionan',
    description: 'Lista de compras para pareja con cantidades reales para 2 personas: qué comprar cada semana, qué comprar una vez al mes, cuánto cuesta y cómo dividir la lista sin duplicar.',
    images: ['https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto gasta una pareja en el supermercado al mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En América Latina, los hogares destinan en promedio entre 25% y 35% de sus ingresos a la alimentación, según cifras regionales de CEPAL y FAO. El monto exacto varía según el país y su moneda, pero el porcentaje se mantiene como referencia. Cocinar en casa versus pedir delivery, y comprar con o sin lista, mueven bastante esa cifra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Conviene hacer la compra mensual o semanal para dos personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las dos, cada una con su función. Los productos que no se echan a perder — arroz, frijoles, aceite, artículos de limpieza — se compran una vez al mes, en mayor cantidad y con mejor precio por unidad. Las frutas, verduras, pan, lácteos y carne fresca se compran cada semana, porque en cantidad para dos personas se dañan antes de terminarse si se compran en exceso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo dividir la lista de compras entre los dos sin comprar duplicado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lista compartida, que cualquiera de los dos actualiza en cuanto nota que algo se acabó, resuelve el problema de comprar duplicado. Rara vez es falta de comunicación — es una lista que solo existe en la cabeza de una persona. Cuando ya está escrita y visible para ambos, quien va al supermercado tacha lo que ya está resuelto y nadie compra el mismo detergente dos veces.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cantidades comprar para no desperdiciar siendo solo dos personas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La regla práctica: compra frutas, verduras y proteína fresca para 4-5 días, no para la semana completa. Los paquetes de "tamaño familiar" de productos perecederos casi nunca compensan para dos personas — lo que sobra se echa a perder antes de usarse. Para productos no perecederos (arroz, frijoles, pasta), el tamaño familiar sí compensa, porque no hay fecha límite apretada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Una lista de compras para pareja es diferente de una lista para una sola persona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, sobre todo en productos perecederos. Una persona que vive sola compra en porción individual y corre el riesgo real de desperdiciar cualquier cosa vendida en paquete grande. Una pareja ya consume el doble, lo que permite comprar algunos productos en empaque un poco más grande — pero sigue lejos de la cantidad de una familia de 4, que es la referencia más común en las listas genéricas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo adaptar una receta de 4 porciones para 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divide entre dos los ingredientes que tienen una medida clara (carne, arroz, verduras, líquido). Los condimentos como sal, ajo y chile no se dividen en la misma proporción — empieza con un poco más de la mitad y ajusta al final. Si la receta rinde más de lo que la pareja come en una sola comida, prepara la receta completa y congela lo que sobra en porciones individuales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué no puede faltar en la lista de compras de una pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arroz o algún grano, frijoles o alguna legumbre, aceite, huevos, una fuente de proteína, frutas y verduras de la semana, café, pan, artículos básicos de limpieza y papel higiénico. Es la base que sostiene la semana antes de pensar en cualquier receta más elaborada.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lista de compras para pareja: cantidades que sí funcionan',
  description: 'Lista de compras para pareja con cantidades reales para 2 personas: qué comprar cada semana, qué comprar una vez al mes, cuánto cuesta y cómo dividir la lista sin duplicar.',
  image: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lista de compras para pareja', item: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal' },
  ],
}

export default function ListaCasalEs() {
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

        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Lista de compras para pareja</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-21">21 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista de compras para pareja: la cantidad justa para 2, sin que sobre ni falte
          </h1>
          <p className="blog-desc">
            Toda lista genérica en internet está pensada para una familia de 4. Si una pareja la sigue al pie de la letra, termina con medio bloque de queso echándose a perder en el refrigerador, o sin arroz para el miércoles. Las cantidades correctas para 2 personas son otra cuenta — aquí está.
          </p>

          <div className="answer-box">
            <p>
              Una <strong>lista de compras para pareja</strong> separa lo que compras cada semana (frutas y verduras, carne fresca, pan, lácteos) de lo que compras una vez al mes (arroz, frijoles, aceite, limpieza).
              La regla práctica es comprar productos perecederos para 4-5 días, no para la semana completa — en cantidad para dos personas, un paquete "tamaño familiar" se echa a perder antes de terminarse.
              Un hogar de dos personas destina en promedio entre <strong>25% y 35% de sus ingresos</strong> a la comida, según cifras regionales de CEPAL y FAO.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Una pareja cocinando junta en una cocina luminosa — ella corta verduras mientras él cocina en la estufa"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Amina Filkins / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#diferencia">Por qué no es "la lista familiar dividida entre dos"</a></li>
              <li><a href="#semanal-mensual">Compra semanal vs. compra mensual</a></li>
              <li><a href="#cantidades">Cantidades correctas por categoría</a></li>
              <li><a href="#cuanto-cuesta">Cuánto cuesta al mes</a></li>
              <li><a href="#dividir">Cómo dividir la lista sin duplicar</a></li>
              <li><a href="#desperdicio">Errores que hacen que sobre (y se dañe) la comida</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* DIFERENCIA */}
          <h2 id="diferencia">Por qué no es "la lista familiar dividida entre dos"</h2>

          <p>
            La mayoría de las listas de compras genéricas que circulan en internet están pensadas para un hogar de 4 personas. No es casualidad — es el tamaño de referencia que usan la mayoría de los estudios de consumo. El problema es que dos personas no consumen exactamente la mitad de lo que consume una familia de 4, producto por producto.
          </p>
          <p>
            Un paquete de queso de 500g se termina rápido si el sándwich es parte del desayuno todos los días. Ese mismo paquete, comprado pensando que "somos solo dos, así que hay que comprar menos", puede quedar a medio usar y dañarse si el consumo real termina siendo más bajo de lo esperado.
          </p>
          <p>
            La pregunta nunca es dividir entre dos la cantidad de una familia de 4. Es observar lo que tu hogar realmente consume, categoría por categoría — y eso cambia según quién cocina más, quién pasa más horas fuera de casa y cuántas comidas comparten de verdad en la semana.
          </p>
          <p>
            Las parejas que intentan usar la lista de una familia de 4 sin ajustarla terminan en uno de dos extremos: un refrigerador lleno de cosas que nadie tuvo tiempo de comer, o una compra extra el miércoles porque el arroz se acabó antes de lo previsto.
          </p>

          {/* SEMANAL VS MENSUAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mujer con camisa rosa escribiendo en un cuaderno sobre la barra de la cocina — armando la lista de compras"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Yaroslav Shuraev / Pexels</p>
          </div>

          <h2 id="semanal-mensual" className="img-above">Compra semanal vs. compra mensual</h2>

          <p>
            La división más útil no es por categoría de alimento, sino por tiempo de conservación. Los productos que aguantan semanas o meses en la despensa van en una compra mensual más grande. Los que se dañan en cuestión de días van en una compra semanal más pequeña, ajustada a lo que realmente vas a cocinar.
          </p>
          <p>
            <strong>Compra mensual (una vez al mes, en mayor cantidad):</strong> arroz, frijoles, aceite, azúcar, café, pasta, salsa de tomate, artículos de limpieza, papel higiénico, artículos de higiene. No se echan a perder, y comprar en mayor cantidad suele salir más barato por unidad.
          </p>
          <p>
            <strong>Compra semanal (cada semana, en menor cantidad):</strong> frutas y verduras, pan, lácteos, carne y pescado frescos, huevos. Compradas en exceso, son justo lo que termina desperdiciándose en el refrigerador antes del fin de semana.
          </p>
          <p>
            Una compra grande de base más reposiciones semanales de productos frescos es lo que ya hacen la mayoría de las parejas que logran mantener el presupuesto bajo control, aunque nunca lo hayan llamado "sistema".
          </p>

          {/* CANTIDADES */}
          <h2 id="cantidades">Cantidades correctas por categoría</h2>

          <p>
            Números de referencia para dos personas, pensados para una semana de consumo promedio. Ajusta hacia arriba o hacia abajo según cuántas comidas realmente preparan en casa.
          </p>
          <ul className="item-list">
            <li><strong>Arroz o pasta:</strong> 1kg dura entre 2 y 3 semanas para dos personas que comen algún carbohidrato la mayoría de los días</li>
            <li><strong>Proteína (pollo, carne, pescado):</strong> entre 1 y 1,2kg por semana, repartido en 3-4 comidas con proteína</li>
            <li><strong>Huevos:</strong> una docena a la semana es una referencia común si aparecen en el desayuno algunas veces</li>
            <li><strong>Frutas y verduras frescas:</strong> compra para 4-5 días, no para 7 — las hojas verdes y verduras suaves se marchitan antes de eso</li>
            <li><strong>Pan:</strong> paquete pequeño o compra en panadería cada 2-3 días, si no hay espacio disponible en el congelador</li>
            <li><strong>Leche y lácteos:</strong> 2 litros de leche por semana es una referencia común para café y recetas del día a día</li>
            <li><strong>Artículos de limpieza:</strong> compra al mes — detergente, jabón en polvo y desinfectante no se dañan esperando</li>
          </ul>
          <p>
            Estas son referencias, no una regla fija. La pareja que va al gimnasio y cocina pollo todos los días consume proteína distinto a la pareja que come fuera tres veces por semana. La lista existe para ajustarse a tu rutina, no al revés.
          </p>

          {/* CUÁNTO CUESTA */}
          <h2 id="cuanto-cuesta">Cuánto cuesta al mes</h2>

          <p>
            En América Latina, los hogares destinan en promedio entre <strong>25% y 35% de sus ingresos</strong> a la alimentación, según cifras regionales de CEPAL y FAO. El monto exacto en moneda local varía mucho según el país, pero ese porcentaje se mantiene como referencia útil para comparar el gasto propio.
          </p>
          <p>
            Un dato que pesa en esa cuenta: ir al supermercado sin lista suele elevar el gasto por visita de forma notable, casi siempre por productos que nadie tenía planeado comprar y que terminan en el carrito por impulso. A lo largo de un año, esa diferencia representa una parte considerable del presupuesto de comida de un hogar de dos personas. Organizar la <a href="/es/blog/lista-de-compras-mercado">lista por categoría</a> antes de salir de casa ya reduce buena parte de eso.
          </p>
          <p>
            Compararlo con pedir comida a domicilio ayuda a ponerlo en perspectiva: un pedido típico de delivery cuesta varias veces más por porción que la misma comida preparada en casa. La diferencia mensual entre una pareja que cocina y una que pide con frecuencia suele superar el presupuesto entero del supermercado del mes.
          </p>

          {/* DIVIDIR */}
          <h2 id="dividir">Cómo dividir la lista sin duplicar</h2>

          <p>
            El detergente comprado dos veces en la misma semana no es un problema de comunicación. Es una lista que solo existía en la cabeza de una persona, mientras la otra también notó que faltaba y lo resolvió por su cuenta.
          </p>
          <p>
            La solución no es asignar quién compra qué — es tener una lista visible para los dos, que cualquiera actualiza en cuanto nota que algo se acabó. Cuando el producto ya está tachado o marcado como resuelto, la segunda persona no lo vuelve a comprar.
          </p>
          <p>
            Funciona mejor cuando la lista vive en un lugar que ambos consultan, no en las notas del teléfono de una sola persona. Ese es justo el punto de una lista compartida: el ajo que faltó el martes aparece para los dos, no solo para quien se acordó de anotarlo.
          </p>
          <p>
            También ayuda acordar quién va al supermercado en qué semana, o dividir por tipo de compra — uno se encarga de las frutas y verduras semanales, el otro de la <a href="/es/blog/lista-de-compras-do-mes">reposición mensual</a>. Lo importante es que la decisión de "quién compra qué" no recaiga siempre en la misma persona por defecto.
          </p>

          {/* DESPERDICIO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasillo colorido de supermercado con un carrito de compras a mitad de la compra"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="desperdicio" className="img-above">Errores que hacen que sobre (y se dañe) la comida</h2>

          <p>
            La FAO estima que en América Latina y el Caribe se pierde o desperdicia cerca del 15% de los alimentos en las etapas de venta y consumo doméstico. Para una pareja, ese desperdicio se traduce en una parte nada despreciable del presupuesto de comida cada año — poco a poco, no de golpe.
          </p>
          <p>
            <strong>Error 1: comprar el tamaño familiar pensando que sale más barato.</strong> Sale más barato por gramo, no por lo que realmente termina en el plato. Si la mitad se echa a perder antes de usarse, el precio por gramo dejó de importar.
          </p>
          <p>
            <strong>Error 2: hacer toda la compra de la semana el domingo para que rinda hasta el sábado siguiente.</strong> Las frutas y verduras para dos personas rara vez aguantan 7 días con buena calidad. Una reposición a mitad de semana, aunque sea pequeña, evita que la última hoja de lechuga termine en caldo.
          </p>
          <p>
            <strong>Error 3: comprar sin saber qué hay ya en la despensa.</strong> Es la causa más común de comprar duplicado — o de encontrar, tres semanas después, un paquete de pasta escondido detrás del aceite. Revisar la despensa antes de salir de casa resuelve esto en menos de un minuto.
          </p>
          <p>
            <strong>Error 4: no planear el menú antes de ir a comprar.</strong> Comprar sin saber qué van a cocinar genera ingredientes sueltos que nunca se convierten en una comida. Un <a href="/es/blog/cardapio-semanal-simples-caseiro">menú semanal sencillo</a> resuelve esto antes de entrar al supermercado, no después.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre lista de compras para pareja</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuánto gasta una pareja en el supermercado al mes?</p>
              <p className="faq-a">
                En promedio, entre 25% y 35% de los ingresos del hogar, según cifras regionales de CEPAL y FAO. El monto exacto varía según el país, pero cocinar en casa versus pedir delivery, y comprar con lista, mueven bastante esa cifra.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Conviene hacer la compra mensual o semanal para dos personas?</p>
              <p className="faq-a">
                Las dos. Los productos no perecederos (arroz, frijoles, limpieza) se compran una vez al mes, en mayor cantidad. Las frutas, verduras, pan y carne fresca se compran cada semana, porque en cantidad para dos personas se dañan antes de terminarse si se compran en exceso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo dividir la lista de compras entre los dos sin comprar duplicado?</p>
              <p className="faq-a">
                Una lista compartida, actualizada por cualquiera en cuanto algo se acaba. Rara vez es falta de comunicación — es una lista que solo existe en la cabeza de una persona.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué cantidades comprar para no desperdiciar siendo solo dos personas?</p>
              <p className="faq-a">
                Compra frutas, verduras y proteína fresca para 4-5 días, no para la semana completa. Los paquetes "tamaño familiar" de perecederos casi nunca compensan para dos personas. Para no perecederos, el tamaño familiar sí compensa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Una lista de compras para pareja es diferente de una para una sola persona?</p>
              <p className="faq-a">
                Sí, sobre todo en perecederos. Una pareja consume el doble de una persona sola, lo que permite empaques un poco más grandes — pero sigue lejos de la cantidad de una familia de 4, la referencia más común en las listas genéricas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo adaptar una receta de 4 porciones para 2?</p>
              <p className="faq-a">
                Divide entre dos los ingredientes con medida clara (carne, arroz, líquido). Los condimentos como sal y ajo no se dividen en la misma proporción — empieza con un poco más de la mitad y ajusta al final.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué no puede faltar en la lista de compras de una pareja?</p>
              <p className="faq-a">
                Arroz, frijoles, aceite, huevos, una proteína, frutas y verduras de la semana, café, pan, artículos básicos de limpieza y papel higiénico. Es la base que sostiene la semana antes de cualquier receta más elaborada.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Fundador de Mise. Va al supermercado cada semana y todavía se le olvida algún ingrediente.
                Creó la app para resolver el problema que él mismo tenía en su cocina.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">Una lista para los dos, en un solo lugar. Nadie vuelve a comprar el detergente por duplicado.</p>
            <p className="blog-cta-desc">
              Con Mise, la <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> es compartida y la{' '}
              <a href="/es/funcionalidades/despensa">despensa</a> muestra qué ya tienes en casa antes de ir al supermercado.
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
