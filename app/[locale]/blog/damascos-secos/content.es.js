import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Damasco seco: qué es, beneficios y cómo usarlo en la cocina',
  description: 'El damasco seco es el damasco fresco deshidratado — concentra hierro, potasio y betacaroteno. Qué es, sus beneficios reales y cómo usarlo más allá de un snack.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/damascos-secos',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/damascos-secos',
      en: 'https://www.miseemcasa.com.br/en/blog/damascos-secos',
      es: 'https://www.miseemcasa.com.br/es/blog/damascos-secos',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/damascos-secos',
    },
  },
  openGraph: {
    title: 'Damasco seco: qué es, beneficios y cómo usarlo en la cocina',
    description: 'El damasco seco es el damasco fresco deshidratado — concentra hierro, potasio y betacaroteno. Qué es, sus beneficios reales y cómo usarlo más allá de un snack.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/damascos-secos',
    images: [
      {
        url: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Damascos secos de color naranja en primer plano — textura y color característicos de la fruta deshidratada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damasco seco: qué es, beneficios y cómo usarlo en la cocina',
    description: 'El damasco seco es el damasco fresco deshidratado — concentra hierro, potasio y betacaroteno. Qué es, sus beneficios reales y cómo usarlo más allá de un snack.',
    images: ['https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El damasco seco engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El damasco seco tiene unas 240 kcal por cada 100 g — más calórico que el fresco porque el secado concentra el azúcar natural. En porciones razonables (30-40 g, unos 6 a 8 mitades), son cerca de 70-100 kcal, lo que no es problema dentro de una alimentación equilibrada. El riesgo es comerlo sin fijarte en la cantidad, como pasa con cualquier fruta seca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos damascos secos se pueden comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La porción razonable es de 6 a 8 mitades, unos 30-40 g. En esa cantidad aprovechas la fibra, el hierro y el potasio sin pasarte de azúcar. Si tienes diabetes o controlas el índice glucémico, consulta a un nutricionista para ajustar la porción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El damasco y el damasco seco son la misma fruta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es la misma fruta — el damasco seco es el damasco fresco (Prunus armeniaca) que pasó por un proceso de deshidratación. Ese proceso concentra los nutrientes y el azúcar, cambia la textura y estira mucho la vida útil, de días a meses. El fresco tiene una temporada corta, así que el seco es la versión que encuentras todo el año.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se rehidrata el damasco seco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cúbrelo con agua caliente (no hirviendo) y déjalo en remojo de 20 a 30 minutos. Absorbe líquido y queda más suave, cerca de la textura de la fruta fresca. El agua que sobra tiene un sabor concentrado — puedes usarla como base de una salsa o mezclarla con jugo. Para recetas frías, rehidratarlo en jugo de naranja ayuda a que el cuerpo absorba mejor el hierro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El damasco seco tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El damasco seco puro no tiene gluten. Pero revisa la etiqueta: algunas marcas lo procesan en fábricas que también manipulan trigo, lo que puede causar contaminación cruzada. Si tienes enfermedad celíaca, busca versiones con certificación libre de gluten en el empaque.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El damasco seco funciona en platos salados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona muy bien. En carnes guisadas —pollo, cerdo, cordero— el damasco seco aporta un toque agridulce sin necesidad de una salsa aparte. Es un ingrediente clásico de la cocina persa y marroquí. Picado fino, también va bien en cuscús, arroz con lentejas y ensaladas con queso fuerte.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Damasco seco: qué es, beneficios y cómo usarlo en la cocina',
  description: 'El damasco seco es el damasco fresco deshidratado — concentra hierro, potasio y betacaroteno. Qué es, sus beneficios reales y cómo usarlo más allá de un snack.',
  image: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/damascos-secos',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Damasco seco', item: 'https://www.miseemcasa.com.br/es/blog/damascos-secos' },
  ],
}

export default function DamascoSecoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Damasco seco</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Damasco seco: la fruta que aguanta meses en la despensa y casi nadie usa bien
          </h1>
          <p className="blog-desc">
            Aparece entre las pasas y los dátiles, casi siempre comprado para una receta y comido a la mitad antes de llegar a ella. El damasco seco (o albaricoque seco, chabacano seco según el país) concentra más hierro, potasio y betacaroteno que la mayoría de las frutas secas — y da para mucho más que un snack.
          </p>

          <div className="answer-box">
            <p>
              <strong>El damasco seco</strong> es el damasco fresco (<em>Prunus armeniaca</em>) deshidratado —también llamado albaricoque en Colombia, Venezuela y buena parte de Centroamérica, o chabacano en México— la fruta pierde agua en el proceso y concentra nutrientes y sabor.
              Dura meses en la despensa y funciona tanto en snacks y postres como en platos salados agridulces.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Damascos secos de color naranja en primer plano — textura y color característicos de la fruta deshidratada"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Engin Akyurt / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el damasco seco</a></li>
              <li><a href="#fresco-vs-seco">Fresco vs seco: qué cambia en realidad</a></li>
              <li><a href="#con-o-sin-azufre">Con azufre o sin azufre: cuál elegir</a></li>
              <li><a href="#nutrientes">Qué tiene por dentro: los nutrientes</a></li>
              <li><a href="#beneficios">Beneficios del damasco seco</a></li>
              <li><a href="#como-usar">Cómo usar el damasco seco en la cocina</a></li>
              <li><a href="#donde-comprar">Cómo guardarlo y dónde comprarlo</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/29060107/pexels-photo-29060107.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Damascos secos exhibidos en un puesto de mercado — fruta naranja a la venta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el damasco seco</h2>

          <p>
            El damasco es una fruta de carozo de la especie <em>Prunus armeniaca</em>, originaria de Asia Central y Medio Oriente. Según el país lo conoces como damasco (Argentina, Chile, Uruguay, Bolivia, Perú), albaricoque (Colombia, Venezuela, Ecuador, buena parte de Centroamérica) o chabacano (México) — es la misma fruta con nombre distinto.
          </p>
          <p>
            El damasco fresco es delicado: dura pocos días, tiene una temporada corta y fuera de ella es difícil de conseguir. El damasco seco resuelve eso: la misma fruta, sin el agua, con nutrientes y sabor concentrados, y una vida útil de meses en vez de días.
          </p>
          <p>
            En Argentina y Chile, donde el clima cordillerano se parece al de las zonas productoras del Mediterráneo, sí se cultiva damasco fresco a nivel comercial —Mendoza y San Juan, en Argentina, son zonas productoras conocidas, igual que el valle central chileno. En el resto de la región, el fresco casi no llega a los mercados y lo que vas a encontrar es prácticamente siempre el seco, en general importado de Turquía o Irán.
          </p>
          <p>
            El secado se hace al sol (el método tradicional, que da un damasco más oscuro) o en secadores industriales, que suelen usar dióxido de azufre para mantener el color naranja intenso —el aditivo que aparece en la etiqueta como sulfitos. La versión sin azufre queda más oscura, pero no es menos nutritiva.
          </p>

          {/* FRESCO VS SECO */}
          <h2 id="fresco-vs-seco">Fresco vs seco: qué cambia en realidad</h2>

          <p>
            La comparación no es solo "el seco tiene más calorías". Lo que cambia es la concentración de todo —para bien y para mal.
          </p>
          <p>
            En 100 g de damasco fresco: 48 kcal, 11 g de carbohidratos, 9 g de azúcar, 2 g de fibra, 1 mg de hierro, 259 mg de potasio.
          </p>
          <p>
            En 100 g de damasco seco: 241 kcal, 63 g de carbohidratos, 53 g de azúcar, 7,3 g de fibra, 2,7 mg de hierro, 1.160 mg de potasio.
          </p>
          <p>
            Una concentración de casi 4 veces. La fibra, el hierro y el potasio suben junto con el azúcar. La vitamina C, en cambio, cae bastante en el proceso —es inestable al calor.
          </p>
          <p>
            El punto práctico: 100 g de damasco seco no es una porción razonable. Una porción razonable son 30-40 g —unas 6 a 8 mitades. En esa cantidad: 70-100 kcal, 2-3 g de fibra, 0,8-1 mg de hierro y 350-460 mg de potasio. Con ese contexto, el damasco seco tiene más sentido del que parece en el empaque.
          </p>

          {/* CON O SIN AZUFRE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Damascos frescos de color naranja en un tazón — la fruta de la que viene el damasco seco"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="con-o-sin-azufre" className="img-above">Con azufre o sin azufre: cuál elegir</h2>

          <p>
            Es la diferencia que más confunde a quien compra damasco seco por primera vez, y no tiene nada que ver con la calidad.
          </p>
          <p>
            <strong>Con azufre (naranja):</strong> tratado con dióxido de azufre durante el secado, lo que mantiene el color naranja intenso y una textura más suave. Es la versión más común en supermercados y la que casi todas las recetas asumen cuando piden "damasco seco". Si eres sensible a los sulfitos o tienes asma, revisa la etiqueta —en un porcentaje pequeño de personas pueden causar reacción.
          </p>
          <p>
            <strong>Sin azufre (marrón oscuro):</strong> sin dióxido de azufre, la fruta se oxida y toma un tono marrón profundo. El sabor es más concentrado y notablemente más ácido. Suele venderse como orgánico, ya que el dióxido de azufre es uno de los aditivos que esa certificación excluye. La textura es un poco más firme.
          </p>
          <p>
            Ninguno gana en nutrientes —el contenido de fibra y minerales es prácticamente el mismo. Para hornear o comer como snack donde el color no importa, el sin azufre es una opción más natural. Para una receta donde el color sí cuenta, como un tayín o un arroz con frutas, el con azufre es el que se ve mejor en el plato.
          </p>

          {/* NUTRIENTES */}
          <h2 id="nutrientes">Qué tiene por dentro: los nutrientes del damasco seco</h2>

          <p>
            Por cada 100 g, el damasco seco entrega nutrientes en cantidades que superan a la mayoría de las frutas frescas, porque la concentración amplifica todo.
          </p>

          <ul className="item-list">
            <li><strong>Betacaroteno:</strong> unos 22.690 mcg por 100 g —uno de los alimentos vegetales más ricos. El cuerpo lo convierte en vitamina A.</li>
            <li><strong>Potasio:</strong> 1.160 mg —más que el plátano/banana (358 mg por 100 g). Importante para el control de la presión arterial y la función muscular.</li>
            <li><strong>Hierro:</strong> 2,7 mg —hierro no hemo (vegetal), que se absorbe menos que el de origen animal, pero es útil como fuente complementaria.</li>
            <li><strong>Fibra:</strong> 7,3 g, con buena presencia de pectina, una fibra soluble que alimenta a las bacterias buenas del intestino.</li>
            <li><strong>Calorías:</strong> 241 kcal por 100 g —alta, por el azúcar concentrado que deja el proceso de secado.</li>
          </ul>

          <p>
            El betacaroteno es el dato que más destaca. Pocas fuentes vegetales se acercan a ese número: la zanahoria cruda tiene 8.285 mcg por 100 g, y el damasco seco tiene casi el triple.
          </p>
          <p>
            Una aclaración importante: el hierro vegetal necesita vitamina C para absorberse bien. Si usas el damasco seco como fuente de hierro, combínalo con algo cítrico —un jugo de naranja, limón en una ensalada. Sin eso, buena parte del hierro se queda en la comida y no llega a la sangre.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios del damasco seco</h2>

          <h3>Salud visual</h3>
          <p>
            El betacaroteno se convierte en vitamina A en el cuerpo, y la vitamina A es clave para el funcionamiento de la retina —sobre todo para ver bien con poca luz. Es uno de los nutrientes más ligados a la salud visual disponibles en fuentes vegetales.
          </p>

          <h3>Funcionamiento intestinal</h3>
          <p>
            La pectina del damasco seco es fibra soluble. Forma un gel en el intestino, retrasa la absorción de azúcar y alimenta a las bacterias buenas del colon. Cuarenta gramos de damasco seco aportan cerca de 3 g de fibra —10 % de lo que necesita un adulto en un día.
          </p>

          <h3>Control de la presión arterial</h3>
          <p>
            El potasio y el sodio funcionan en equilibrio en el cuerpo. Una dieta con suficiente potasio ayuda a reducir la retención de sodio y favorece el control de la presión. El damasco seco tiene uno de los niveles de potasio más altos entre las frutas secas —más incluso que el dátil.
          </p>

          <h3>Un complemento para quien tiene riesgo de anemia</h3>
          <p>
            No reemplaza la carne roja ni un suplemento de hierro en casos de anemia diagnosticada. Pero como suma en la alimentación de alguien con riesgo, tiene sentido. La clave es combinarlo con vitamina C para mejorar la absorción —sin eso, el hierro se queda en la comida y no llega a donde tiene que llegar.
          </p>

          <h3>Piel</h3>
          <p>
            La vitamina A y el betacaroteno contribuyen a la renovación celular y a la producción de colágeno. No es un efecto inmediato ni milagroso —se acumula con el consumo regular a lo largo del tiempo, igual que con cualquier alimento con este perfil nutricional.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5498379/pexels-photo-5498379.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frutas secas variadas con canela en un tazón rústico — damascos secos entre los ingredientes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el damasco seco en la cocina</h2>

          <p>
            La mayoría compra damasco seco para picar entre comidas o porque lo vio en una receta, y ahí se queda. Es un ingrediente más versátil de lo que parece.
          </p>

          <h3>Como snack</h3>
          <p>
            El uso más directo. Un puñado en la mochila, sin refrigerar, sin empaque extra. Más nutritivo que una galleta, con un dulzor natural que aguanta bien entre comidas. Solo no te sientes a comer la bolsa entera —100 g de damasco seco de una sola vez es mucho.
          </p>

          <h3>Con yogur y granola</h3>
          <p>
            Picado grueso, va bien con{' '}
            <a href="/es/blog/o-que-e-granola">granola</a>{' '}
            y yogur natural. El dulzor del damasco hace innecesaria la miel —el conjunto ya tiene equilibrio de sabor. Es un desayuno que no necesita receta.
          </p>

          <h3>En carnes guisadas</h3>
          <p>
            Poca gente lo usa así, pero es donde el damasco seco realmente destaca. En pollo, cerdo o cordero guisado, aporta un toque agridulce sin necesitar una salsa aparte. La receta básica: sofríe cebolla y ajo, agrega el pollo en trozos, suma damascos picados y un poco de caldo, y cocina junto hasta que el pollo esté tierno. El damasco se deshace en el caldo y se convierte en salsa por sí solo.
          </p>
          <p>
            No es una combinación inventada ayer —es clásica de la cocina persa y marroquí desde hace siglos.
          </p>

          <h3>En ensaladas</h3>
          <p>
            Cortado en trozos pequeños, va bien en una ensalada de hojas con queso de cabra, nueces y vinagreta de mostaza. Su dulzor equilibra el amargor de la rúcula o los berros. Más interesante que la pasa de uva en ensalada, porque el sabor es menos predecible.
          </p>

          <h3>En panadería y repostería</h3>
          <p>
            Reemplaza la pasa de uva en casi cualquier receta. El sabor es más delicado y la textura después de hornear queda mejor. Pan de frutas, budín, tarta de damasco con almendras —todos funcionan bien.
          </p>

          <h3>Rehidratado</h3>
          <p>
            Cuando la receta pide una textura más suave, o quieres usarlo como base de una salsa: cúbrelo con agua caliente por 20-30 minutos. El damasco se acerca a la textura fresca y absorbe el líquido. El agua de rehidratación queda con sabor concentrado —sirve bien en salsas para carnes o mezclada con jugo.
          </p>

          <div className="blog-inline-cta">
            <p>Una despensa organizada es la mitad del trabajo. <em>Mise resuelve la otra mitad.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* DONDE COMPRAR */}
          <h2 id="donde-comprar">Cómo guardar el damasco seco y dónde comprarlo</h2>

          <p>
            En un frasco cerrado, lejos de la luz directa y del calor. En esas condiciones, el damasco seco dura de 3 a 6 meses sin perder calidad. En el refrigerador, hasta 1 año. En el congelador, todavía más —aunque la textura cambia un poco después de descongelar.
          </p>
          <p>
            Nunca lo guardes en la bolsa abierta. El damasco seco absorbe la humedad del ambiente y queda pegajoso, con el sabor alterado. Un frasco de vidrio o un envase hermético de plástico resuelve el problema.
          </p>

          <h3>Dónde comprarlo</h3>
          <p>
            El supermercado lo tiene casi siempre —en la sección de frutas secas, junto a la pasa de uva y el dátil. El precio por kilo suele ser más alto que en otros canales.
          </p>
          <p>
            Las tiendas naturistas y los negocios a granel suelen tener mejor precio por kilo. Compras la cantidad exacta que necesitas y puedes probar el producto antes de llevar más. En Argentina y Chile, además, es más fácil encontrar damasco de producción local, no solo importado.
          </p>
          <p>
            En línea es donde vas a encontrar la mayor variedad: damasco turco, iraniano, con o sin azufre, en distintos tamaños. El origen afecta el color, la textura y el dulzor —vale la pena comparar. Solo recuerda comparar por el peso neto, porque los empaques de tamaños distintos hacen que comparar el precio sea confuso.
          </p>
          <p>
            Si usas damasco seco con frecuencia, vale la pena tenerlo anotado en la{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>{' '}
            y sumarlo a tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            antes de que se acabe. Así sabes que va bajando antes de llegar al jueves con ganas de hacer pollo con damascos y descubrir que el frasco está vacío.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el damasco seco</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El damasco seco engorda?</p>
              <p className="faq-a">
                Tiene unas 240 kcal por cada 100 g —más calórico que el fresco porque el secado concentra el azúcar. En porciones razonables (30-40 g, 6 a 8 mitades), son cerca de 70-100 kcal, lo que no es problema dentro de una alimentación equilibrada. El riesgo es comerlo sin fijarte en la cantidad, como con cualquier fruta seca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántos damascos secos se pueden comer al día?</p>
              <p className="faq-a">
                La porción razonable es de 6 a 8 mitades, unos 30-40 g. En esa cantidad aprovechas la fibra, el hierro y el potasio sin pasarte de azúcar. Si tienes diabetes o controlas el índice glucémico, consulta a un nutricionista para ajustar la porción.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El damasco y el damasco seco son la misma fruta?</p>
              <p className="faq-a">
                Es la misma fruta —el seco es el fresco deshidratado. El proceso concentra los nutrientes y el azúcar, cambia la textura y estira mucho la vida útil. El fresco tiene una temporada corta, así que lo que casi siempre encuentras es el seco.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se rehidrata el damasco seco?</p>
              <p className="faq-a">
                Cúbrelo con agua caliente (no hirviendo) y déjalo en remojo 20-30 minutos. Absorbe el líquido y queda más suave, cerca de la textura fresca. El agua que sobra tiene sabor concentrado —úsala como base de una salsa o mézclala con jugo. Para recetas frías, rehidratarlo en jugo de naranja ayuda a absorber mejor el hierro.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El damasco seco tiene gluten?</p>
              <p className="faq-a">
                El damasco seco puro no tiene gluten. Pero revisa la etiqueta: algunas marcas lo procesan en fábricas que también manipulan trigo, lo que puede causar contaminación cruzada. Si tienes enfermedad celíaca, busca versiones con certificación libre de gluten.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El damasco seco funciona en platos salados?</p>
              <p className="faq-a">
                Funciona muy bien. En carnes guisadas —pollo, cerdo, cordero— aporta un toque agridulce sin necesitar una salsa aparte. Es un ingrediente clásico de la cocina persa y marroquí. Picado fino, también va bien en cuscús, arroz con lentejas y ensaladas con queso fuerte.
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
                Creador de Mise. Compró damasco seco para hacer pollo con salsa agridulce —se comió la mitad del paquete en el camino de vuelta a casa. El pollo quedó para la semana siguiente.
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
              Compras lo que realmente vas a usar —y el damasco seco no desaparece antes de volverse receta.
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
