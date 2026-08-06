import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: '10 alimentos ricos en proteína que ya tienes en casa',
  description: 'Los 10 alimentos con más proteína para cocinar en casa: huevo, pollo, frijoles y más. Cuánta proteína aporta cada uno y cómo sumarla sin complicarte.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-proteinas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas',
      en: 'https://www.miseemcasa.com.br/en/blog/alimentos-ricos-em-proteinas',
      es: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-proteinas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alimentos-ricos-em-proteinas',
    },
  },
  openGraph: {
    title: '10 alimentos ricos en proteína que ya tienes en casa',
    description: 'Los 10 alimentos con más proteína para cocinar en casa: huevo, pollo, frijoles y más. Cuánta proteína aporta cada uno y cómo sumarla sin complicarte.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-proteinas',
    images: [
      {
        url: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Variedad de alimentos nutritivos sobre superficie clara — fuentes de proteína como huevo, nueces y legumbres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 alimentos ricos en proteína que ya tienes en casa',
    description: 'Los 10 alimentos con más proteína para cocinar en casa: huevo, pollo, frijoles y más. Cuánta proteína aporta cada uno y cómo sumarla sin complicarte.',
    images: ['https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánta proteína necesito comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La recomendación general es de 0,8 g de proteína por kilo de peso corporal para adultos sedentarios. Si haces ejercicio con regularidad, el rango sube a 1,2–2 g por kilo. Una persona sedentaria de 70 kg necesita unos 56 g al día — dos huevos, una porción de pollo en el almuerzo y un yogur griego ya cubren buena parte de eso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el alimento con más proteína del día a día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre los alimentos accesibles, la pechuga de pollo tiene una de las concentraciones más altas: unos 31 g por 100 g a la plancha. El atún en lata queda cerca, con 26 g por 100 g. El maní (cacahuate) tiene 26 g por 100 g y es la fuente vegetal más concentrada que encuentras fácilmente en cualquier tienda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El huevo tiene mucha proteína?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un huevo mediano tiene unos 6 g de proteína. Dos huevos ya suman 12 g — una base sólida para el desayuno. Lo que distingue al huevo es la calidad: contiene todos los aminoácidos esenciales en buenas proporciones, lo que lo convierte en una de las proteínas más aprovechables por el cuerpo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los frijoles tienen suficiente proteína para reemplazar la carne?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los frijoles tienen proteína, pero no todos los aminoácidos esenciales en la proporción ideal por sí solos. La solución es combinarlos con un grano como el arroz — juntos forman un perfil de aminoácidos más completo. Para quien no come carne, frijoles con arroz son una base sólida, siempre que la cantidad total del día sea suficiente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sumo más proteína en el desayuno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las opciones más prácticas: huevo revuelto o cocido (6 g por unidad), yogur griego natural (8–10 g por 100 g), queso cottage o requesón (11 g por 100 g), o crema de maní en pan (26 g por 100 g). Cualquier combinación de dos de estos ya te da una buena base de proteína antes del almuerzo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la fuente de proteína más económica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El huevo y el frijol seco suelen ser, en la mayoría de los mercados, de las fuentes de proteína más baratas por gramo. El huevo aporta 6 g de proteína a un costo bajo por unidad, y el frijol seco cuesta poco por kilo con unos 8 g de proteína por 100 g cocido. Si controlas el gasto sin renunciar a la proteína, esos dos son el punto de partida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La proteína vegetal es tan buena como la animal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La proteína animal tiene un perfil de aminoácidos más completo y es más fácil de absorber. Eso no significa que la proteína vegetal sea mala — significa que necesitas variar las fuentes. Combinar legumbres con granos a lo largo del día cubre bien las necesidades de quien no come carne.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 alimentos ricos en proteína que ya tienes en casa',
  description: 'Los 10 alimentos con más proteína para cocinar en casa: huevo, pollo, frijoles y más. Cuánta proteína aporta cada uno y cómo sumarla sin complicarte.',
  image: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-proteinas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: '10 alimentos ricos en proteína', item: 'https://www.miseemcasa.com.br/es/blog/alimentos-ricos-em-proteinas' },
  ],
}

export default function AlimentosRicosEnProteinaEs() {
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
            <li className="breadcrumb-current" aria-current="page">10 alimentos ricos en proteína</li>
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
            Alimentos ricos en proteína: los 10 que ya están en tu cocina
          </h1>
          <p className="blog-desc">
            No necesitas suplementos ni una dieta cara. Los alimentos con más proteína por porción son casi todos los que ya compras cada semana — solo que todavía no sabes cuánta proteína tiene cada uno.
          </p>

          <div className="answer-box">
            <p>
              Los <strong>10 alimentos con más proteína</strong> del día a día son: pechuga de pollo (~31 g/100 g), atún en lata (~26 g/100 g), maní o cacahuate (~26 g/100 g), carne de res magra (~21–26 g/100 g), queso cottage (~11 g/100 g), lentejas (~9 g/100 g cocidas), garbanzos (~9 g/100 g cocidos), frijoles (~8 g/100 g cocidos), yogur griego (~8–10 g/100 g) y huevo (~6 g por unidad). Cinco de origen animal, cinco de origen vegetal — todos de la tienda de la esquina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Variedad de alimentos nutritivos sobre superficie clara — fuentes de proteína como huevo, nueces y legumbres"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vanessa Loring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la proteína y por qué importa</a></li>
              <li><a href="#fuentes-animales">Fuentes animales: las más concentradas</a></li>
              <li><a href="#fuentes-vegetales">Fuentes vegetales: proteína sin carne</a></li>
              <li><a href="#cuanto">Cuánta proteína al día</a></li>
              <li><a href="#como-sumar">Cómo sumar más proteína sin complicarte</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES LA PROTEÍNA */}
          <h2 id="que-es">Qué es la proteína y por qué importa</h2>

          <p>
            La proteína es un nutriente esencial — el cuerpo la usa para construir y reparar tejido, producir enzimas y hormonas, y mantener el sistema inmune funcionando. A diferencia de los carbohidratos y la grasa, el cuerpo no guarda proteína de reserva. Eso significa que necesitas consumir suficiente todos los días.
          </p>
          <p>
            La sensación de saciedad también está ligada directamente a la proteína. Las comidas con más proteína quitan el hambre por más tiempo que las comidas con las mismas calorías provenientes de carbohidratos. Por eso un desayuno de solo pan dura menos que uno con huevo.
          </p>
          <p>
            En la práctica, el problema casi nunca es no saber qué comer — es no tener los alimentos correctos en casa. Una <a href="/es/funcionalidades/despensa">despensa</a> con huevo, frijoles y atún ya cubre buena parte de la proteína de la semana, sin ninguna planificación elaborada.
          </p>

          {/* FUENTES ANIMALES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6544260/pexels-photo-6544260.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Plato con atún, ejotes y huevo cocido cortado a la mitad — combinación de fuentes de proteína animal"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Alesia Kozik / Pexels</p>
          </div>

          <h2 id="fuentes-animales" className="img-above">Fuentes animales: las más concentradas</h2>

          <p>
            Las proteínas animales tienen un perfil de aminoácidos más completo y el cuerpo las absorbe con más facilidad. No significa que las vegetales sean malas — pero, por porción, las fuentes animales suelen aportar más proteína.
          </p>

          <h3>1. Pechuga de pollo — ~31 g por 100 g</h3>
          <p>
            La más concentrada de la lista entre los alimentos accesibles. La pechuga a la plancha, sin condimentar, tiene unos 31 g de proteína por 100 g, con poca grasa. Es fácil de preparar en cantidad y se conserva bien fría para el almuerzo del día siguiente. La forma más económica de conseguir mucha proteína por caloría.
          </p>

          <h3>2. Atún en lata — ~26 g por 100 g</h3>
          <p>
            El atún en agua tiene unos 26 g de proteína por 100 g ya escurrido. No necesita preparación, dura meses en la despensa y es una de las fuentes de proteína más baratas por gramo. El atún en aceite tiene la misma proteína, con más grasa — es cuestión de gusto. Una lata estándar entrega cerca de 40 g de proteína lista en 30 segundos.
          </p>

          <h3>3. Carne de res magra — ~21–26 g por 100 g</h3>
          <p>
            Cortes magros como el bola o el pulpa quedan entre 21 g y 26 g de proteína por 100 g a la plancha. Los cortes más grasosos tienen proporcionalmente menos proteína, porque el peso de la grasa diluye el porcentaje. Si el objetivo es proteína, elige cortes con poca grasa visible.
          </p>

          <h3>4. Queso cottage — ~11 g por 100 g</h3>
          <p>
            Subestimado. El queso cottage (o requesón) tiene unos 11 g de proteína por 100 g, con poca grasa y menos calorías que la mayoría de los quesos. Va bien en el desayuno con fruta, en pan, o como sustituto de la crema en salsas. No compite en sabor con otros quesos, pero cumple.
          </p>

          <h3>5. Yogur griego natural — ~8–10 g por 100 g</h3>
          <p>
            El yogur normal tiene menos de la mitad de la proteína del griego. El griego natural entero tiene entre 8 g y 10 g por 100 g. Con granola y fruta, arrancas el día con proteína sin ningún esfuerzo. Revisa la etiqueta — productos "estilo griego" o con mucho azúcar añadido pueden tener bastante menos de lo que sugiere el empaque.
          </p>

          <h3>6. Huevo — ~6 g por unidad</h3>
          <p>
            Un huevo mediano tiene unos 6 g de proteína. Dos huevos suman 12 g. No es el número más alto por 100 g, pero el huevo tiene una de las proteínas de mayor calidad disponibles: todos los aminoácidos esenciales en buenas proporciones. Por eso se volvió la referencia con la que se compara el resto de las proteínas. A un costo bajo por unidad, es difícil de superar en relación calidad-precio.
          </p>

          {/* FUENTES VEGETALES */}
          <h2 id="fuentes-vegetales">Fuentes vegetales: proteína sin carne</h2>

          <p>
            La proteína vegetal suele tener un perfil de aminoácidos incompleto comparada con la animal. Pero eso se resuelve con variedad — combinar distintas fuentes a lo largo del día cubre las necesidades sin suplementos. Frijoles con arroz, lentejas con pan, hummus con pita: son combinaciones que ya resolvían esto mucho antes de que "proteína completa" fuera una palabra de moda.
          </p>

          <h3>7. Maní (cacahuate) — ~26 g por 100 g</h3>
          <p>
            La mayor concentración de proteína entre los vegetales de la lista. El maní y la crema de maní tienen unos 26 g de proteína por 100 g. Es calórico —la mayor parte del peso es grasa—, pero en cantidad moderada es uno de los snacks más nutritivos y saciantes que existen. Crema de maní en pan integral es difícil de superar en practicidad y costo.
          </p>

          <h3>8. Lentejas — ~9 g por 100 g cocidas</h3>
          <p>
            Las lentejas cocidas tienen unos 9 g de proteína por 100 g y se cocinan rápido — en 20 minutos, sin necesidad de remojo previo, a diferencia del frijol seco. Son de las legumbres más prácticas. Van bien en sopa, ensalada o como sustituto de la carne molida en una salsa. También aportan hierro, algo relevante para quien no come carne.
          </p>

          <h3>9. Garbanzos — ~9 g por 100 g cocidos</h3>
          <p>
            Mismo porcentaje que la lenteja. El garbanzo horneado conserva la proteína con una textura crujiente. Tarda más en cocinarse que la lenteja si es seco, pero comprado en lata queda listo de inmediato. Una lata estándar tiene, escurrida, cerca de 240 g de garbanzo — cerca de 22 g de proteína por lata.
          </p>

          <h3>10. Frijoles — ~8 g por 100 g cocidos</h3>
          <p>
            El clásico. Los frijoles (porotos, alubias, según el país) cocidos tienen unos 8 g de proteína por 100 g. No es el número más alto, pero los frijoles entran en casi cualquier comida sin esfuerzo, lo que hace que el total del día sume rápido. Junto con arroz, el perfil de aminoácidos mejora bastante — una combinación que funciona en casi cualquier cocina, no solo en una.
          </p>

          {/* CUÁNTO POR DÍA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/162712/pexels-photo-162712.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Huevos color café en un tazón de madera sobre fondo oscuro — fuente de proteína accesible y versátil"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
          </div>

          <h2 id="cuanto" className="img-above">Cuánta proteína al día</h2>

          <p>
            La recomendación general de la{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">OMS</a>
            {' '}para adultos sedentarios es de 0,8 g de proteína por kilo de peso corporal al día. Una persona de 70 kg necesita unos 56 g al día. Si haces ejercicio con regularidad, el rango sube a 1,2–2 g por kilo.
          </p>
          <p>
            Para ver cómo se ven 56 g en un día normal de comidas:
          </p>

          <ul className="item-list">
            <li>Desayuno: 2 huevos + 100 g de yogur griego → ~20 g</li>
            <li>Almuerzo: 100 g de pollo a la plancha + 50 g de frijoles cocidos → ~25 g</li>
            <li>Merienda: 2 cucharadas de crema de maní → ~7 g</li>
            <li>Cena: 1 lata de atún → ~22 g</li>
          </ul>

          <p>
            Ese ejemplo pasa de 70 g — suficiente para la mayoría de las personas. Sin suplementos, sin proteína en polvo, sin nada que no encuentres en cualquier tienda de barrio. Lo que traba no es el acceso — es no tener esos alimentos en casa cuando los necesitas.
          </p>

          {/* CÓMO SUMAR */}
          <h2 id="como-sumar">Cómo sumar más proteína a la rutina sin complicarte</h2>

          <p>
            Lo difícil casi nunca es el almuerzo, que ya suele tener pollo o carne. El problema es el desayuno y la merienda, que suelen ser puro carbohidrato. Pan, galletas, cereal. Está bien, pero no aguanta el hambre hasta el almuerzo. Llegas a la comida principal con hambre de dos comidas juntas.
          </p>
          <p>
            Tres cambios simples que suman bastante a lo largo de la semana:
          </p>

          <ul className="item-list">
            <li>Sumar un huevo al desayuno — frito, revuelto, cocido, como sea. Son 6 g más al día sin esfuerzo extra.</li>
            <li>Cambiar las galletas por maní o crema de maní como merienda. Más proteína, mejor grasa, más saciedad hasta la cena.</li>
            <li>Tener atún en lata fijo en la <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>. Proteína lista en 30 segundos para ensalada, pan tostado o arroz.</li>
          </ul>

          <p>
            Lo que realmente cambia las cosas no es la comida principal — es lo que comes entre ellas. Quien tiene proteína en la merienda termina comiendo menos en la cena sin darse cuenta. El problema es que estos alimentos se acaban de la despensa sin que nadie los apunte en la lista. El maní se acaba. El atún se acaba. Y justo cuando lo necesitas, solo queda paquete de galletas.
          </p>

          <div className="blog-inline-cta">
            <p>Despensa organizada es proteína que ya está resuelta. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre alimentos ricos en proteína</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuánta proteína necesito comer al día?</p>
              <p className="faq-a">
                La recomendación general es de 0,8 g por kilo de peso corporal para adultos sedentarios. Si haces ejercicio con regularidad, el rango sube a 1,2–2 g por kilo. Una persona sedentaria de 70 kg necesita unos 56 g al día — dos huevos, una porción de pollo en el almuerzo y un yogur griego ya cubren buena parte de eso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es el alimento con más proteína del día a día?</p>
              <p className="faq-a">
                Entre los alimentos accesibles, la pechuga de pollo tiene una de las concentraciones más altas: unos 31 g por 100 g a la plancha. El atún en lata queda cerca, con 26 g por 100 g. El maní tiene 26 g por 100 g y es la fuente vegetal más concentrada que encuentras fácilmente en cualquier tienda.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El huevo tiene mucha proteína?</p>
              <p className="faq-a">
                Un huevo mediano tiene unos 6 g de proteína. Dos huevos ya suman 12 g — una base sólida para el desayuno. Lo que distingue al huevo es la calidad: contiene todos los aminoácidos esenciales en buenas proporciones, lo que lo convierte en una de las proteínas más aprovechables por el cuerpo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Los frijoles tienen suficiente proteína para reemplazar la carne?</p>
              <p className="faq-a">
                Los frijoles tienen proteína, pero no todos los aminoácidos esenciales en la proporción ideal por sí solos. La solución es combinarlos con un grano como el arroz — juntos forman un perfil de aminoácidos más completo. Para quien no come carne, frijoles con arroz son una base sólida, siempre que la cantidad total del día sea suficiente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo sumo más proteína en el desayuno?</p>
              <p className="faq-a">
                Las opciones más prácticas: huevo revuelto o cocido (6 g por unidad), yogur griego natural (8–10 g por 100 g), queso cottage o requesón (11 g por 100 g), o crema de maní en pan (26 g por 100 g). Cualquier combinación de dos de estos ya te da una buena base de proteína antes del almuerzo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la fuente de proteína más económica?</p>
              <p className="faq-a">
                El huevo y el frijol seco suelen ser, en la mayoría de los mercados, de las fuentes de proteína más baratas por gramo. El huevo aporta 6 g de proteína a un costo bajo por unidad, y el frijol seco cuesta poco por kilo con unos 8 g de proteína por 100 g cocido. Si controlas el gasto sin renunciar a la proteína, esos dos son el punto de partida.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La proteína vegetal es tan buena como la animal?</p>
              <p className="faq-a">
                La proteína animal tiene un perfil de aminoácidos más completo y es más fácil de absorber. Eso no significa que la proteína vegetal sea mala — significa que necesitas variar las fuentes. Combinar legumbres con granos a lo largo del día cubre bien las necesidades de quien no come carne.
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
                Creador de Mise. Se sabe de memoria cuánta proteína tiene un huevo, pero todavía se olvida de comprar frijoles. Está trabajando en eso.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              La proteína en su lugar.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Despensa, lista de compras y recetas conectadas en un solo lugar. Sabes lo que tienes en casa — y el atún no desaparece de la despensa sin quedar apuntado en la lista.
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
