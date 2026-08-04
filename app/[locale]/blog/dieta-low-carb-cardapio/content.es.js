import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Menú low carb para 7 días: comidas listas para copiar',
  description: 'Menú low carb con 7 días de comidas listas para desayuno, almuerzo y cena. Incluye lista de compras y consejos para no abandonar el miércoles.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
      en: 'https://www.miseemcasa.com.br/en/blog/dieta-low-carb-cardapio',
      es: 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/dieta-low-carb-cardapio',
    },
  },
  openGraph: {
    title: 'Menú low carb para 7 días: comidas listas para copiar',
    description: 'Menú low carb con 7 días de comidas listas para desayuno, almuerzo y cena. Incluye lista de compras y consejos para no abandonar el miércoles.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flat-lay de alimentos low carb: aguacate, hojas verdes, frutos secos y vegetales frescos sobre fondo oscuro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menú low carb para 7 días: comidas listas para copiar',
    description: 'Menú low carb con 7 días de comidas listas para desayuno, almuerzo y cena. Incluye lista de compras y consejos para no abandonar el miércoles.',
    images: ['https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué desayunar en una dieta low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El huevo es la opción más práctica: revuelto, cocido o en tortilla, listo en menos de diez minutos. El yogur natural entero con nueces también funciona bien. Lo que sale es el pan, los cereales, el jugo industrializado y cualquier producto con azúcar añadida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer frijoles o lentejas en la dieta low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los frijoles y las lentejas tienen carbohidratos —más que el brócoli, menos que el arroz o la pasta. La mayoría de los enfoques low carb los reduce, pero no los elimina por completo. Una porción pequeña y ocasional no arruina el patrón de la semana. Depende del nivel de restricción que sigas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre low carb y dieta cetogénica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Low carb es cualquier alimentación que reduce carbohidratos de forma significativa, sin un límite estricto. La dieta cetogénica (keto) es una versión más restrictiva, con menos de 20 a 50 g de carbohidratos al día, que busca llevar al cuerpo a un estado de cetosis. Este menú es low carb genérico —no exige contar gramos ni una restricción extrema.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Comer low carb es caro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No necesariamente. El huevo, el pollo y los vegetales de temporada están entre los alimentos más accesibles del mercado. La idea de que low carb es caro viene de productos específicos, como la harina de almendra o los lácteos premium, que no son obligatorios. La proteína barata de la semana sigue siendo el huevo y el pollo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede hacer low carb sin cocinar todos los días?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, con un poco de preparación anticipada. Asar pollo y carne el domingo resuelve tres o cuatro días de almuerzo. Los huevos cocidos duran una semana en el refrigerador. El pollo deshebrado sirve en ensalada, en tortilla o directo en el plato. No hace falta cocinar desde cero cada día —solo tener lo básico listo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede seguir low carb solo entre semana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Algunas personas siguen el patrón entre semana y se relajan el fin de semana —es un enfoque común. El efecto varía según la persona. Lo importante es tener un patrón constante, no perfección diaria. Un día con arroz no arruina los otros seis.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo toma ver resultados con low carb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varía bastante según el metabolismo, el punto de partida y el resto de la alimentación. Este artículo es un plan de comidas —no una guía de resultados garantizados. Para un seguimiento individualizado, consulta a un nutricionista.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Menú low carb para 7 días: comidas listas para copiar',
  description: 'Menú low carb con 7 días de comidas listas para desayuno, almuerzo y cena. Incluye lista de compras y consejos para no abandonar el miércoles.',
  image: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Menú low carb para 7 días', item: 'https://www.miseemcasa.com.br/es/blog/dieta-low-carb-cardapio' },
  ],
}

export default function DietaLowCarbCardapioEs() {
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
            <li className="breadcrumb-current" aria-current="page">Menú low carb para 7 días</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">3 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Menú low carb semanal: 7 días de comidas sin reinventar el plato
          </h1>
          <p className="blog-desc">
            Ya decidiste hacer low carb. El menú de la semana todavía no existe. Esta guía resuelve eso: siete días completos de comidas, desde el desayuno hasta la cena, con la lista de compras incluida.
          </p>

          <div className="answer-box">
            <p>
              El <strong>menú low carb semanal</strong> se arma con proteína (huevo, carne, pollo, pescado),
              vegetales bajos en almidón (brócoli, coliflor, calabacita, hojas verdes) y grasas como aceite de oliva,
              mantequilla y aguacate. El arroz, el pan, la pasta, la papa y el azúcar salen del plato —o se quedan
              solo los días que tú decidas incluirlos.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Flat-lay de alimentos low carb: aguacate, hojas verdes, frutos secos y vegetales frescos sobre fondo oscuro"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Elle Hughes / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es low carb en la práctica</a></li>
              <li><a href="#que-comer">Qué entra y qué sale del plato</a></li>
              <li><a href="#menu">Menú de los 7 días</a></li>
              <li><a href="#lista">Lista de compras de la semana</a></li>
              <li><a href="#como-mantenerlo">Cómo no abandonar el miércoles</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <h2 id="que-es">Qué es low carb en la práctica</h2>

          <p>
            Low carb no tiene nombre de científico ni patente registrada. Es una instrucción simple:
            come menos carbohidratos. Cuánto menos depende del enfoque que elijas, pero el modelo
            más común funciona así —proteína y grasa en el centro del plato, vegetales que crecen
            sobre la tierra, y carbohidratos refinados fuera de la ecuación la mayor parte del tiempo.
          </p>
          <p>
            Lo difícil no es entender la regla. Es planear la semana alrededor de ella. Decidir cada
            día qué va en el plato agota antes que el hambre misma. Las encuestas sobre hábitos de
            compra muestran algo constante: cerca de la mitad de las personas entra al súper sin
            ninguna lista —ya ni hablar de un menú semanal completo. La fatiga de decisión hunde más
            intentos de low carb que cualquier antojo de pan.
          </p>
          <p>
            Este menú no intenta convencerte de hacer low carb. Asume que ya lo decidiste y resuelve
            el siguiente problema: qué vas a comer el lunes en la mañana, el miércoles en la noche, y
            el domingo cuando toda la semana todavía está por planear. El menú de los 7 días de abajo
            responde eso, plato por plato.
          </p>

          {/* QUÉ ENTRA Y QUÉ SALE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Flat-lay de alimentos nutritivos: vegetales de colores, proteína y frutos secos en tazones blancos"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
          </div>

          <h2 id="que-comer" className="img-above">Qué entra y qué sale del plato</h2>

          <p>
            La base del menú low carb usa ingredientes accesibles y disponibles en cualquier mercado.
            No hay nada exótico en la lista.
          </p>

          <h3>Proteína — el centro de cada comida</h3>
          <ul className="item-list">
            <li><strong>Huevo</strong> — revuelto, cocido, en tortilla o frito. El comodín del menú.</li>
            <li><strong>Pollo</strong> — pechuga, muslo, pollo molido. La proteína más barata de la semana.</li>
            <li><strong>Carne de res</strong> — bistec, carne molida, costillas.</li>
            <li><strong>Pescado</strong> — tilapia, merluza, cualquier filete blanco.</li>
            <li><strong>Lácteos</strong> — queso, yogur natural entero, mantequilla.</li>
            <li><strong>Otros</strong> — tocino, jamón, salchicha (con moderación).</li>
          </ul>

          <h3>Vegetales — sin restricción en hojas y crucíferas</h3>
          <ul className="item-list">
            <li><strong>Hojas verdes</strong> — lechuga, arúgula, espinaca, kale.</li>
            <li><strong>Crucíferas</strong> — brócoli y coliflor sustituyen el arroz en varios formatos.</li>
            <li><strong>Otros vegetales</strong> — calabacita, ejotes, pimiento, pepino.</li>
            <li><strong>Con moderación</strong> — jitomate, zanahoria, cebolla (tienen más carbohidratos).</li>
            <li><strong>Aguacate</strong> — rico en grasa buena, sacia bien entre comidas.</li>
          </ul>

          <h3>Lo que sale</h3>
          <ul className="item-list">
            <li>Arroz, pasta, pan y cualquier cosa hecha con harina de trigo</li>
            <li>Papa, camote, yuca</li>
            <li>Azúcar en cualquier forma —miel, jarabe, endulzantes calóricos</li>
            <li>Jugo industrializado, refresco, bebidas deportivas con azúcar</li>
            <li>Galletas y ultraprocesados con una lista de ingredientes interminable</li>
          </ul>

          <p>
            Una observación práctica: low carb no exige contar carbohidratos en gramos ni calcular
            porciones. Si los ingredientes de tu plato tienen nombre reconocible —pollo, brócoli,
            aceite de oliva— probablemente estás dentro del patrón. Si la etiqueta tiene doce
            ingredientes con nombre de laboratorio, probablemente no.
          </p>

          {/* MENÚ DE LOS 7 DÍAS */}
          <h2 id="menu">Menú de los 7 días</h2>

          <p>
            El menú de abajo asume tres comidas al día. Si te da hambre entre comidas, un puñado de
            nueces resuelve sin necesitar un snack elaborado. Las comidas se pensaron para repetir
            ingredientes durante la semana —el pollo asado de una comida se vuelve pollo deshebrado en
            otra. Menos desperdicio, menos tiempo en la cocina.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Lunes</strong>
                <span>
                  Desayuno: Huevo revuelto con queso<br />
                  Almuerzo: Pollo asado + ensalada de hojas verdes + calabacita salteada<br />
                  Cena: Tortilla de jamón y queso
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Martes</strong>
                <span>
                  Desayuno: Yogur natural con nueces<br />
                  Almuerzo: Carne molida con arroz de coliflor salteado<br />
                  Cena: Tilapia a la plancha con brócoli al ajo
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Miércoles</strong>
                <span>
                  Desayuno: Huevo cocido + aguacate con sal y limón<br />
                  Almuerzo: Pechuga de pollo con ejotes y pimiento salteados<br />
                  Cena: Costillas al horno con repollo salteado
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Jueves</strong>
                <span>
                  Desayuno: Tortilla de espinaca con queso<br />
                  Almuerzo: Carne molida con ejotes y zanahoria<br />
                  Cena: Pescado al horno con ensalada de jitomate y pepino
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">5</div>
              <div className="tip-body">
                <strong>Viernes</strong>
                <span>
                  Desayuno: Huevo revuelto con tocino<br />
                  Almuerzo: Pollo guisado con zanahoria y chayote<br />
                  Cena: Hamburguesa sin pan con ensalada de hojas verdes
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">6</div>
              <div className="tip-body">
                <strong>Sábado</strong>
                <span>
                  Desayuno: Yogur natural con chía y nueces<br />
                  Almuerzo: Bistec a la plancha con brócoli al ajo<br />
                  Cena: Pollo deshebrado con kale salteado
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">7</div>
              <div className="tip-body">
                <strong>Domingo</strong>
                <span>
                  Desayuno: Huevo revuelto con jitomate y queso<br />
                  Almuerzo: Costillas al horno con puré de coliflor<br />
                  Cena: Tortilla de queso y hierbas
                </span>
              </div>
            </li>
          </ol>

          <p>
            Este menú se puede —y se debe— adaptar. Si no comes pescado, cámbialo por pollo. Si no
            tienes costillas, usa bistec. Lo que importa es mantener la lógica: proteína más vegetal,
            sin la base de carbohidrato refinado. Para armar tu propio{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            y generar la lista de compras automáticamente, Mise hace justo eso.
          </p>

          {/* LISTA DE COMPRAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón colorido con ensalada de hojas verdes, jitomate y vegetales frescos — comida low carb sencilla"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="lista" className="img-above">Lista de compras de la semana</h2>

          <p>
            La lista de abajo cubre los siete días del menú de arriba. Las cantidades son estimadas
            para una persona —duplícalas si son dos. Para guardarla y adaptarla en tu propia{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>,
            solo abre Mise y marca lo que ya tienes en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista de compras — semana low carb</span>
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Proteína</h4>
                <ul>
                  <li>Pechuga o muslo de pollo (2 kg)</li>
                  <li>Carne molida (500 g)</li>
                  <li>Huevo (2 docenas)</li>
                  <li>Tilapia o pescado blanco (500 g)</li>
                  <li>Costillas (1 kg)</li>
                  <li>Tocino (200 g)</li>
                  <li>Jamón en rebanadas (200 g)</li>
                  <li>Hamburguesas (4 piezas)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Vegetales y hojas</h4>
                <ul>
                  <li>Lechuga y arúgula</li>
                  <li>Brócoli (2 piezas)</li>
                  <li>Coliflor (1 pieza)</li>
                  <li>Calabacita (3 piezas)</li>
                  <li>Ejotes (300 g)</li>
                  <li>Repollo (½ pieza)</li>
                  <li>Kale (1 manojo)</li>
                  <li>Espinaca, pimiento, jitomate</li>
                  <li>Pepino, zanahoria, chayote</li>
                  <li>Aguacate (3 piezas)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Lácteos y despensa</h4>
                <ul>
                  <li>Queso tipo panela o manchego</li>
                  <li>Yogur natural entero (2 envases)</li>
                  <li>Mantequilla</li>
                  <li>Nueces (200 g)</li>
                  <li>Semillas de chía</li>
                  <li>Aceite de oliva</li>
                  <li>Ajo, sal, especias</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO MANTENERLO */}
          <h2 id="como-mantenerlo">Cómo no abandonar el miércoles</h2>

          <p>
            La razón más común para dejar el low carb no es falta de voluntad. Es llegar a casa con
            hambre, el refrigerador vacío, y la app de comida a domicilio a tres toques de distancia.
            No es debilidad —es falta de infraestructura.
          </p>

          <ol className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Asa la proteína el domingo</strong>
                <span>
                  Pollo deshebrado, huevo cocido y carne molida sazonada duran de tres a cuatro días en
                  el refrigerador. Cuando el almuerzo está a quince minutos de estar listo, es mucho
                  más difícil ceder a la opción fácil.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Ten un plan de emergencia</strong>
                <span>
                  El huevo siempre está disponible. Una tortilla en tres minutos resuelve cualquier
                  comida de emergencia —y ya está en el menú de todos modos. Cuando no planeaste la
                  cena, la respuesta ya está definida.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Arma la lista antes de ir al mercado</strong>
                <span>
                  Un menú que solo existe en tu cabeza no sobrevive al pasillo de las galletas. Ir con
                  la{' '}
                  <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
                  de la semana ya armada evita decisiones por impulso —y evita llegar a casa sin
                  ningún vegetal y con tres bolsas de frituras.
                </span>
              </div>
            </li>
          </ol>

          <p>
            Para conectar el{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            con la lista de compras de forma automática, eso es justo lo que hace Mise: armas el menú
            y la lista sale lista, con los ingredientes agrupados por categoría. Sin copiar producto
            por producto de un papel arrugado.
          </p>

          <p>
            Ningún menú sobrevive intacto los siete días. Si comiste arroz el jueves, eso no arruina
            los otros seis. Low carb es un patrón, no una prueba de disciplina que se reinicia desde
            cero con el primer desliz.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el menú low carb</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué desayunar en una dieta low carb?</p>
              <p className="faq-a">
                El huevo es la opción más práctica: revuelto, cocido o en tortilla, listo en menos de
                diez minutos. El yogur natural entero con nueces también funciona bien. Lo que sale es
                el pan, los cereales, el jugo industrializado y cualquier producto con azúcar añadida.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer frijoles o lentejas en la dieta low carb?</p>
              <p className="faq-a">
                Tienen carbohidratos —más que el brócoli, menos que el arroz o la pasta. La mayoría de
                los enfoques low carb los reduce, pero no los elimina por completo. Una porción pequeña
                y ocasional no arruina el patrón de la semana. Depende del nivel de restricción que
                sigas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre low carb y dieta cetogénica?</p>
              <p className="faq-a">
                Low carb es cualquier alimentación que reduce carbohidratos de forma significativa, sin
                un límite estricto. La cetogénica (keto) es una versión más restrictiva, con menos de
                20 a 50 g de carbohidratos al día, que busca llevar al cuerpo a un estado de cetosis.
                Este menú es low carb genérico —no exige contar gramos ni una restricción extrema.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Comer low carb es caro?</p>
              <p className="faq-a">
                No necesariamente. El huevo, el pollo y los vegetales de temporada están entre los
                alimentos más accesibles del mercado. La idea de que es caro viene de productos
                específicos —harina de almendra, lácteos premium— que no son obligatorios. La proteína
                barata de la semana sigue siendo el huevo y el pollo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede hacer low carb sin cocinar todos los días?</p>
              <p className="faq-a">
                Sí, con un poco de preparación anticipada. Asar pollo y carne el domingo resuelve tres
                o cuatro días de almuerzo. Los huevos cocidos duran una semana en el refrigerador. El
                pollo deshebrado sirve en ensalada, en tortilla o directo en el plato. No hace falta
                cocinar desde cero cada día —solo tener lo básico listo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede seguir low carb solo entre semana?</p>
              <p className="faq-a">
                Sí. Algunas personas siguen el patrón entre semana y se relajan el fin de semana —es un
                enfoque común. El efecto varía según la persona. Lo importante es tener un patrón
                constante, no perfección diaria. Un día con arroz no arruina los otros seis.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto tiempo toma ver resultados con low carb?</p>
              <p className="faq-a">
                Varía bastante según el metabolismo, el punto de partida y el resto de la alimentación.
                Este artículo es un plan de comidas —no una guía de resultados garantizados. Para un
                seguimiento individualizado, consulta a un nutricionista.
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
                Creador de Mise. Hizo low carb durante tres semanas, le fue muy bien. En la cuarta
                semana, llegó a casa con hambre y sin nada en el refrigerador. Creó la app para
                resolver justo ese problema.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Menú armado.<br />
              <em>La lista sale sola.</em>
            </h2>
            <p>
              Con Mise armas el menú de la semana y la lista de compras aparece lista.
              Despensa conectada, sin copiar producto por producto.
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
