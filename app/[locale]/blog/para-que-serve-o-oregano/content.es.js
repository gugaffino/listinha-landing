import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Orégano seco vs. fresco: para qué sirve y cómo usarlo',
  description: 'El orégano seco y el fresco no solo cambian de intensidad — se comportan distinto en la olla. La proporción 3:1, cuánto usar por receta y cómo guardarlo sin que pierda el aroma.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-o-oregano',
      en: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-o-oregano',
      es: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-o-oregano',
    },
  },
  openGraph: {
    title: 'Orégano seco vs. fresco: para qué sirve y cómo usarlo',
    description: 'El orégano seco y el fresco no solo cambian de intensidad — se comportan distinto en la olla. La proporción 3:1, cuánto usar por receta y cómo guardarlo sin que pierda el aroma.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano',
    images: [
      {
        url: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Ramitas de orégano fresco con hojas verdes sobre una superficie rústica de madera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orégano seco vs. fresco: para qué sirve y cómo usarlo',
    description: 'El orégano seco y el fresco no solo cambian de intensidad — se comportan distinto en la olla. La proporción 3:1, cuánto usar por receta y cómo guardarlo sin que pierda el aroma.',
    images: ['https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Para qué sirve el orégano además de la pizza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona bien en salsas de tomate, pollo marinado, pescado al horno, verduras asadas, sopas y vinagretas. Es mucho más versátil de lo que la mayoría usa en el día a día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el orégano fresco y el seco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El orégano seco está más concentrado y funciona mejor en cocciones largas, porque el calor libera el aroma poco a poco. El fresco es más suave y va mejor crudo o como toque final. Una cucharada de orégano fresco equivale a cerca de una cucharadita de seco — una proporción de casi 3 a 1.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto orégano seco usar en salsa de pizza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una cucharadita de orégano seco para una salsa que cubre una pizza de 4 porciones es un buen punto de partida. La salsa de pizza es generosa, así que puedes ajustar al gusto sin miedo a pasarte.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo poner orégano seco crudo directo en la ensalada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes, pero la textura del orégano seco crudo suele quedar arenosa. Es mejor usar orégano fresco en ensaladas. O disuelve el orégano seco en el aceite de la vinagreta antes de mezclar — el aceite lo hidrata y reparte mejor el sabor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo saber si el orégano que tengo en casa todavía sirve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frota un poco entre los dedos y huele. Si casi no tiene aroma, ya perdió la potencia — puede verse normal, pero no va a condimentar nada. En un frasco bien cerrado, el aroma empieza a bajar después de 1 año y casi desaparece después de 2 o 3 años.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El orégano puede reemplazar a la albahaca en una receta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No de forma directa. Los sabores son distintos: la albahaca es más fresca y floral; el orégano es más terroso e intenso. En salsas de tomate con cuerpo, el orégano funciona bien solo. Pero en platos que dependen del frescor de la albahaca — como el caprese o el pesto — el cambio se nota.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Orégano seco vs. fresco: para qué sirve y cómo usarlo',
  description: 'El orégano seco y el fresco no solo cambian de intensidad — se comportan distinto en la olla. La proporción 3:1, cuánto usar por receta y cómo guardarlo sin que pierda el aroma.',
  image: 'https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Orégano seco vs. fresco', item: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-o-oregano' },
  ],
}

export default function OreganoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Orégano seco vs. fresco</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-07">7 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Orégano en la cocina: fresco, seco y cómo usarlo de verdad
          </h1>
          <p className="blog-desc">
            Lo espolvoreas en la pizza sin pensarlo. Pero si alguien pregunta para qué más sirve el orégano, casi nadie responde con seguridad. Es más versátil de lo que parece — y funciona distinto según cómo lo uses.
          </p>

          <div className="answer-box">
            <p>
              <strong>El orégano</strong> es una hierba mediterránea que se usa sobre todo para condimentar.
              En la cocina sirve para dar aroma a salsas, pizzas, carnes, pescados y verduras asadas.
              La versión seca es mucho más concentrada que la fresca — y las dos funcionan distinto según el calor y el tiempo de cocción.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4099241/pexels-photo-4099241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Ramitas de orégano fresco con hojas verdes sobre una superficie rústica de madera"
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
              <li><a href="#que-es">Qué es el orégano</a></li>
              <li><a href="#para-que-sirve">Para qué sirve en la cocina</a></li>
              <li><a href="#fresco-o-seco">Fresco o seco: cuál usar y cuándo</a></li>
              <li><a href="#cuanto-usar">Cuánto orégano usar en cada receta</a></li>
              <li><a href="#como-guardar">Cómo guardarlo en casa</a></li>
              <li><a href="#vale-la-pena">Vale la pena tenerlo siempre a mano</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <h2 id="que-es">Qué es el orégano</h2>

          <p>
            El orégano (<em>Origanum vulgare</em>) es una hierba perenne de la familia de la menta. Es originaria del Mediterráneo, tiene un olor fuerte, ligeramente amargo, con un calor que queda en el fondo del paladar después de tragar. Se volvió parte de la cocina latinoamericana sobre todo por la influencia italiana — llegó con la pizza y se quedó en la alacena.
          </p>
          <p>
            La forma más común es el orégano seco, en frasco o sobre. Ese que espolvoreas sobre la pizza sin pensarlo dos veces. Pero también existe el fresco, que se vende en manojos en la verdulería, y funciona de una manera completamente distinta.
          </p>
          <p>
            La planta tiene hojas pequeñas, ovaladas, de color verde oscuro. Su aroma viene de los aceites esenciales, sobre todo carvacrol y timol — los mismos compuestos que le dan al tomillo un olor parecido. Es una hierba de cocción, no de acabado: mientras más tiempo pasa al calor, más se desarrolla su sabor.
          </p>
          <p>
            El orégano griego tiene un sabor más intenso que el italiano o el mexicano. Lo que encuentras en el supermercado suele ser una mezcla de variedades mediterráneas sin especificar cuál — y funciona bien para el uso diario.
          </p>

          {/* PARA QUE SIRVE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Orégano seco y otras hierbas en pequeños cuencos de cerámica sobre una superficie de madera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="para-que-sirve" className="img-above">Para qué sirve el orégano en la cocina</h2>

          <p>
            El orégano es un condimento aromático. Le da fondo herbal a platos que necesitan estructura de sabor. Es distinto de la sal, que realza lo que ya está, y distinto del chile, que aporta calor. El orégano agrega una capa de sabor que antes no estaba.
          </p>
          <p>
            Combina bien con carne, tomate y aceite de oliva. Esa combinación explica por qué la pizza terminó siendo la puerta de entrada del orégano en tantas cocinas — los tres ingredientes conviven en el mismo plato.
          </p>

          <p>Dónde el orégano sirve de verdad:</p>
          <ul className="item-list">
            <li>Salsas de tomate — pizza, pasta, shakshuka</li>
            <li>Pollo marinado o a la parrilla</li>
            <li>Carnes rojas al horno o a la parrilla</li>
            <li>Pescados blancos horneados con aceite de oliva</li>
            <li>Verduras asadas al horno — berenjena, calabacín, cebolla</li>
            <li>Sopas de verduras y de frijoles</li>
            <li>Vinagretas y aderezos con aceite de oliva</li>
          </ul>

          <p>Dónde generalmente no funciona bien:</p>
          <ul className="item-list">
            <li>Platos de sabor muy delicado — pescado crudo, carpaccio</li>
            <li>Recetas que dependen del frescor — como un ceviche o una ensalada verde simple</li>
            <li>Como sustituto directo de cilantro o perejil en platos que dependen del verde fresco</li>
          </ul>

          <p>
            Un detalle práctico: el orégano seco puesto directo sobre proteína sin marinar antes tiende a quemarse antes de que el resto se cocine. Si vas a asar pollo con orégano, agrégalo a la marinada — no lo espolvorees directo en el sartén caliente.
          </p>

          <p>
            Aparte de la cocina, el orégano tiene un uso tradicional como infusión digestiva y para aliviar molestias respiratorias leves — por eso circula tanto en remedios caseros. Ese uso no reemplaza ningún tratamiento médico; aquí nos importa lo que hace en la olla, no en la taza.
          </p>

          {/* FRESCO O SECO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3944100/pexels-photo-3944100.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pizza horneada con salsa de tomate, queso y hierbas frescas vista desde arriba"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="fresco-o-seco" className="img-above">Fresco o seco: cuál usar y cuándo</h2>

          <p>
            La diferencia principal entre el orégano fresco y el seco no es de intensidad. Es de tipo de sabor.
          </p>
          <p>
            El orégano seco pasó por un proceso de deshidratación que concentra sus aceites esenciales. El resultado es un sabor más intenso y con más cuerpo. Funciona bien en cocciones largas — el calor va liberando el aroma poco a poco. Por eso va bien en la salsa de pizza, en la marinada del pollo, en los frijoles desde el arranque de la cocción.
          </p>
          <p>
            El orégano fresco tiene un sabor más suave y ligeramente verde. Pierde parte del aroma con el calor prolongado. Funciona mejor agregado al final de la cocción o crudo — en ensaladas, como toque final en platos calientes, en salsas frías y dips.
          </p>
          <p>
            La conversión entre los dos: 1 cucharada de orégano fresco equivale a ⅓ de cucharadita de orégano seco. Es una diferencia de casi 3 a 1. Si pones la cantidad de fresco que pide una receta pensada para seco, el resultado va a quedar muy suave. Y al revés — el seco en una receta pensada para fresco va a quedar demasiado intenso.
          </p>
          <p>
            Regla práctica: si la receta cocina más de 20 minutos, usa el seco. Si es un toque final o un plato frío, usa el fresco.
          </p>

          <div className="blog-inline-cta">
            <p>La cocina no debería costarte tanta cabeza. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CUANTO USAR */}
          <h2 id="cuanto-usar">Cuánto orégano usar en cada receta</h2>

          <p>
            El orégano domina el sabor cuando te pasas de la mano. Pero es difícil equivocarse en pizzas y salsas de tomate — son lo bastante robustas para sostenerlo. En platos más delicados, el exceso se nota como amargor.
          </p>

          <p>Referencias de cantidad para orégano seco:</p>
          <ul className="item-list">
            <li><strong>Salsa de pizza o pasta (4 porciones):</strong> 1 cucharadita</li>
            <li><strong>Pollo marinado (por pieza):</strong> ½ a 1 cucharada</li>
            <li><strong>Verduras asadas (por bandeja):</strong> 1 cucharadita</li>
            <li><strong>Frijoles o sopa (olla de 2 litros):</strong> ½ cucharadita</li>
            <li><strong>Vinagreta (para 4 porciones de ensalada):</strong> ¼ de cucharadita</li>
          </ul>

          <p>
            Para la pizza, "al gusto" es lo que hace todo el mundo — y funciona. Es el plato que más orégano aguanta. Nunca se ha arruinado una pizza por exceso de orégano. Es el único "al gusto" de la cocina que no necesita calibración.
          </p>
          <p>
            Para orégano fresco, las cantidades cambian — multiplica por 3. Una receta que pide 1 cucharadita de seco va a necesitar 1 cucharada bien llena de fresco.
          </p>

          {/* COMO GUARDAR */}
          <h2 id="como-guardar">Cómo guardar el orégano en casa</h2>

          <p>
            El orégano seco es fácil de guardar. Sus tres enemigos son la humedad, el calor directo y la luz. En un frasco de vidrio bien cerrado, en la alacena o el armario, dura de 1 a 3 años. Lejos de la estufa — el vapor y los cambios de temperatura debilitan el aroma más rápido de lo que crees.
          </p>
          <p>
            Cómo saber si todavía sirve: frota una pizca entre los dedos y huele. Si el olor es débil o casi inexistente, ya se acabó — puede verse normal, pero no va a condimentar nada. Después de 2 años en frasco o sobre, es poco probable que aún tenga aroma.
          </p>
          <p>
            Ese orégano que lleva dos años en la alacena desde la última vez que alguien hizo pizza casera. Ese mismo.
          </p>
          <p>
            El orégano fresco es más exigente. Envuelto en papel de cocina ligeramente húmedo y guardado en una bolsa o recipiente en el refrigerador, dura de 5 a 7 días. Si compraste más de lo que vas a usar en una semana, congélalo: lava, seca bien, pica grueso y coloca en una cubetera con un chorrito de aceite de oliva. En el congelador dura hasta 6 meses — y pasa directo del molde a la olla sin necesidad de descongelar.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena tenerlo siempre en casa</h2>

          <p>
            Sí — el orégano seco es uno de los condimentos con mejor relación costo-beneficio de la alacena. Es barato, dura bastante y usas poco por receta. No es un ingrediente de ocasión, es de esos que solo notas cuando se acaba.
          </p>
          <p>
            Es distinto del azafrán, que cuesta caro y va en platos específicos. O de la pasta de curry, que entra cuando ya tienes un plan. El orégano entra en la{' '}
            <a href="/es/blog/lista-de-compras-mercado">lista del súper</a>{' '}
            junto con la sal, la pimienta y el ajo — sin pensarlo dos veces.
          </p>
          <p>
            La única situación en la que no vale la pena comprar más: cuando lo que tienes en la alacena ya pasó los 2 años. En ese caso, tíralo y compra uno nuevo. Guardar orégano sin aroma en la repisa es acumular la ilusión de que tienes orégano. El pollo va a salir sin sabor y vas a pensar que fue culpa de la receta.
          </p>
          <p>
            El orégano fresco vale la pena cuando lo vas a usar en platos donde realmente se nota — pastas al final de la cocción, salsas frías, platos mediterráneos. Comprar un manojo entero para usarlo una vez en la pizza es la receta perfecta para tirar el resto.
          </p>
          <p>
            El orégano seco se queda en la{' '}
            <a href="/es/funcionalidades/despensa">lista fija de la despensa en Mise</a>. El fresco entra a la lista solo cuando hay una receta que lo pide. En ese orden.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el orégano</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Para qué sirve el orégano además de la pizza?</p>
              <p className="faq-a">
                Funciona bien en salsas de tomate, pollo marinado, pescado al horno, verduras asadas, sopas y vinagretas. Es mucho más versátil de lo que la mayoría usa en el día a día.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el orégano fresco y el seco?</p>
              <p className="faq-a">
                El seco está más concentrado y funciona mejor en cocciones largas. El fresco es más suave y va mejor crudo o como toque final. Una cucharada de fresco equivale a cerca de ⅓ de cucharadita de seco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto orégano seco usar en salsa de pizza?</p>
              <p className="faq-a">
                Una cucharadita de orégano seco para una salsa de 4 porciones es un buen punto de partida. La salsa de pizza es generosa — puedes ajustar al gusto sin miedo a pasarte.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Puedo poner orégano seco crudo directo en la ensalada?</p>
              <p className="faq-a">
                Puedes, pero la textura suele quedar arenosa. Es mejor usar orégano fresco en ensaladas. O disuelve el orégano seco en el aceite de la vinagreta antes de mezclar — el aceite lo hidrata y reparte mejor el sabor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo saber si el orégano todavía sirve?</p>
              <p className="faq-a">
                Frota un poco entre los dedos y huele. Si casi no tiene aroma, ya perdió la potencia — puede verse normal, pero no va a condimentar nada. En un frasco cerrado, el aroma empieza a bajar después de 1 año y casi desaparece después de 2 o 3 años.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El orégano puede reemplazar a la albahaca en una receta?</p>
              <p className="faq-a">
                No de forma directa. La albahaca es más fresca y floral; el orégano es más terroso e intenso. En salsas de tomate con cuerpo, el orégano funciona bien solo. Pero en platos que dependen del frescor de la albahaca — como el caprese o el pesto — el cambio se nota.
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
                Creador de Mise. Tiene orégano en la alacena desde hace más tiempo del que recuerda. Ya ni sabe cuándo lo compró. Lo olió mientras escribía esto — todavía sirve.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que tienes en casa.<br />
              <em>Usa Mise.</em>
            </h2>
            <p>
              Despensa, recetas y lista del súper en un solo lugar.
              El orégano no va a desaparecer de la repisa sin que te enteres — y cuando se acabe, ya entra en la lista.
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
