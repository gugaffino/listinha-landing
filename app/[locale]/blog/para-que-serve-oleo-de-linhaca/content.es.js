import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Aceite de linaza: para qué sirve y cómo usarlo en la cocina',
  description: 'El aceite de linaza es una fuente concentrada de omega-3 vegetal. Conoce los beneficios reales para el corazón y la piel, por qué nunca debe ir a la sartén y cómo guardarlo bien.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-oleo-de-linhaca',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-oleo-de-linhaca',
      en: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-oleo-de-linhaca',
      es: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-oleo-de-linhaca',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-oleo-de-linhaca',
    },
  },
  openGraph: {
    title: 'Aceite de linaza: para qué sirve y cómo usarlo en la cocina',
    description: 'El aceite de linaza es una fuente concentrada de omega-3 vegetal. Conoce los beneficios reales para el corazón y la piel, por qué nunca debe ir a la sartén y cómo guardarlo bien.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-oleo-de-linhaca',
    images: [
      {
        url: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Frasco de aceite de linaza junto a semillas de lino sobre una superficie de madera clara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceite de linaza: para qué sirve y cómo usarlo en la cocina',
    description: 'El aceite de linaza es una fuente concentrada de omega-3 vegetal. Conoce los beneficios reales para el corazón y la piel, por qué nunca debe ir a la sartén y cómo guardarlo bien.',
    images: ['https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se puede cocinar con aceite de linaza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El punto de humo del aceite de linaza es muy bajo — alrededor de 107°C. Con el calor, los ácidos grasos omega-3 se degradan y el aceite puede liberar compuestos dañinos. Úsalo siempre en frío: en ensaladas, yogur, batidos o sobre platos ya listos, fuera del fuego.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre la semilla de lino y el aceite de linaza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La semilla tiene fibra, más lignanos y es más barata, pero necesita molerse para liberar sus nutrientes — entera, pasa por el intestino sin aportar el omega-3. El aceite concentra los ácidos grasos sin cambiar la textura de los platos, pero no tiene fibra y se echa a perder más rápido. Para la mayoría, la semilla molida es más versátil y económica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo es mejor tomar aceite de linaza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un horario específico respaldado por evidencia. Lo más práctico es incluirlo junto a una comida — en la ensalada del almuerzo, en el yogur del desayuno o en un batido. Lo que importa es la constancia: 1 cucharada al día, de forma regular, es más efectivo que una dosis mayor tomada de vez en cuando.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El aceite de linaza es bueno para el corazón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El ALA, el principal ácido graso del aceite de linaza, se asocia con triglicéridos más bajos y un mejor perfil lipídico en estudios observacionales. El efecto es menor que el del omega-3 del pescado, porque el cuerpo convierte el ALA con poca eficiencia. Aun así, es una de las pocas fuentes vegetales relevantes de omega-3 y encaja en una alimentación favorable para el corazón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda el aceite de linaza después de abierto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Siempre en el refrigerador, en un frasco oscuro u opaco, bien cerrado, lejos del calor y la luz. Úsalo dentro de 4 a 6 semanas tras abrirlo. Si el sabor se vuelve amargo o el olor es fuerte y desagradable, está rancio — deséchalo. Un aceite rancio tiene el efecto contrario al que buscas: sus compuestos oxidados son proinflamatorios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El aceite de linaza tiene efectos secundarios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cantidades normales (1 cucharada al día), es seguro para la mayoría de las personas. Dosis altas pueden causar molestias digestivas, náuseas o diarrea. Quienes tienen trastornos de coagulación o toman anticoagulantes deben consultar a un médico antes, ya que el omega-3 tiene un leve efecto anticoagulante. Personas embarazadas o en lactancia también deben consultarlo con un profesional de salud.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aceite de linaza: para qué sirve y cómo usarlo en la cocina',
  description: 'El aceite de linaza es una fuente concentrada de omega-3 vegetal. Conoce los beneficios reales para el corazón y la piel, por qué nunca debe ir a la sartén y cómo guardarlo bien.',
  image: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/para-que-serve-oleo-de-linhaca',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aceite de linaza', item: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-oleo-de-linhaca' },
  ],
}

export default function AceiteDeLinazaEs() {
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

      <a href="#main-content" className="skip-link">Ir al contenido</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="Estás aquí">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Aceite de linaza</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">27 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Para qué sirve el aceite de linaza — beneficios reales y cómo aprovechar el frasco
          </h1>
          <p className="blog-desc">
            El aceite de linaza cada vez ocupa más espacio en los supermercados. La mayoría lo compra sabiendo apenas que &quot;hace bien&quot;, sin un plan claro para usarlo — y así es como termina medio lleno, olvidado detrás de la mayonesa.
          </p>

          <div className="answer-box">
            <p>
              <strong>El aceite de linaza</strong> es una fuente concentrada de omega-3 vegetal — específicamente ácido alfa-linolénico (ALA) — asociado a menor inflamación, mejores marcadores cardiovasculares y piel más sana. También contiene lignanos, compuestos antioxidantes con un leve efecto similar al estrógeno, útiles sobre todo para la salud femenina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Frasco de aceite de linaza junto a semillas de lino doradas sobre superficie de madera"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Vie Studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el aceite de linaza</a></li>
              <li><a href="#beneficios">Para qué sirve — los beneficios principales</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina (y el error del punto de humo)</a></li>
              <li><a href="#semilla-o-aceite">Semilla o aceite: ¿cuál conviene más?</a></li>
              <li><a href="#guardar-comprar">Cómo guardarlo y dónde comprarlo</a></li>
              <li><a href="#vale-la-pena">¿Vale la pena ponerlo en la lista?</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7771989/pexels-photo-7771989.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Semillas de lino doradas y marrones en una cuchara de madera sobre tela neutra"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el aceite de linaza</h2>

          <p>
            El aceite de linaza se extrae de la semilla de la planta <em>Linum usitatissimum</em>, la misma que produce el lino textil. La extracción puede ser en frío (prensado en frío), que conserva más compuestos activos, o con solventes, más barata pero de menor calidad nutricional. Si lo compras para consumo, busca &quot;primera prensada en frío&quot; en la etiqueta.
          </p>
          <p>
            Lo que distingue al aceite de linaza de casi cualquier otro aceite vegetal es la cantidad de ALA que concentra. Cerca de la mitad de su contenido graso es ácido alfa-linolénico, un omega-3 de origen vegetal. El aceite de canola tiene alrededor de 10%. El aceite de oliva, menos de 1%.
          </p>
          <p>
            Pero hay un detalle que cambia cómo se usa: el ALA es inestable. Se oxida rápido con el calor, la luz y el aire. Por eso el aceite de linaza tiene una vida útil corta, va al refrigerador una vez abierto y nunca a la sartén — todo esto lo vemos más adelante.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Para qué sirve — los beneficios principales</h2>

          <h3>Salud cardiovascular</h3>
          <p>
            El omega-3 del aceite de linaza se asocia con triglicéridos más bajos y mejor colesterol HDL. El efecto es real, pero tiene un límite importante: el ALA no es lo mismo que el EPA y el DHA, los omega-3 que se encuentran en el pescado. El cuerpo convierte ALA en EPA y DHA, pero esa conversión es poco eficiente — apenas entre 5 y 15% en condiciones normales. En la práctica, el aceite de linaza no reemplaza al pescado. Lo complementa. Para quien no come pescado seguido, es una de las pocas fuentes vegetales relevantes de omega-3.
          </p>

          <h3>Control de la inflamación</h3>
          <p>
            El ALA compite con el ácido araquidónico, un ácido graso proinflamatorio presente en las grasas animales. Con más omega-3 en la dieta, la balanza se inclina menos hacia la inflamación crónica. Esto tiene relevancia en cuadros como artritis, enfermedades intestinales inflamatorias y piel sensible. Siempre como apoyo a un tratamiento, nunca como sustituto.
          </p>

          <h3>Salud femenina</h3>
          <p>
            El aceite de linaza contiene lignanos — compuestos con actividad fitoestrogénica que interactúan con los receptores de estrógeno del cuerpo. Pueden ayudar a reducir los bochornos de la menopausia y contribuir a la regularidad del ciclo menstrual. La semilla de lino es incluso más rica en lignanos que el aceite, porque buena parte se queda en el residuo sólido tras la extracción.
          </p>

          <h3>Piel</h3>
          <p>
            Los ácidos grasos esenciales del aceite de linaza contribuyen a la barrera cutánea — reducen la pérdida de agua a través de la piel y pueden ayudar con piel seca, eczema leve y psoriasis. El efecto es gradual y viene de adentro hacia afuera. No es un hidratante tópico.
          </p>

          {/* COMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10916613/pexels-photo-10916613.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ensalada verde con aceite siendo rociado por encima — la forma correcta de usar aceites en frío"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Juliano Couto / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el aceite de linaza — y el error del punto de humo</h2>

          <p>
            Aquí está el error más común con el aceite de linaza: ponerlo en la sartén.
          </p>
          <p>
            Su punto de humo está alrededor de 107°C. Las frituras ocurren por encima de 180°C. Un sofrito a fuego medio ya supera esa marca fácilmente. Calentar el aceite destruye los ácidos grasos que compraste para consumir — y puede liberar compuestos oxidados dañinos. El frasco bonito en la alacena se convierte en dinero tirado junto con el vapor de la estufa.
          </p>
          <p>
            El aceite de linaza es para usarse en frío. Algunos ejemplos prácticos:
          </p>
          <ul>
            <li>En ensaladas, mezclado con aceite de oliva o en lugar de parte de él</li>
            <li>Sobre yogur natural o kéfir</li>
            <li>Agregado a batidos (el sabor es suave, no domina la mezcla)</li>
            <li>En aderezos fríos — vinagreta, salsa de tahini, mostaza</li>
            <li>Sobre verduras ya cocidas, después de retirarlas del fuego</li>
          </ul>
          <p>
            La cantidad estándar usada en estudios y recomendada por nutricionistas es 1 cucharada al día. Más que eso aporta poco beneficio adicional y puede causar molestias digestivas.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* SEMILLA O ACEITE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9974497/pexels-photo-9974497.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Semillas de lino marrones y doradas lado a lado en cucharas de madera"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Marek Kupiec / Pexels</p>
          </div>

          <h2 id="semilla-o-aceite" className="img-above">Semilla o aceite de linaza: ¿cuál conviene más?</h2>

          <p>
            Depende de lo que busques. Esta es la diferencia concreta entre los dos:
          </p>

          <h3>Semilla de lino</h3>
          <p>
            Tiene fibra — algo que el aceite no tiene. Concentra más lignanos. Es más barata. La semilla dorada tiene un sabor más suave; la marrón, un poco más intenso. El detalle clave: la semilla necesita molerse para liberar sus nutrientes. Entera, pasa por el intestino casi intacta — terminas con una semilla de lino perfectamente conservada y sin haber aprovechado el omega-3. Muélela al momento o cómprala ya molida y guárdala en el refrigerador.
          </p>

          <h3>Aceite de linaza</h3>
          <p>
            Concentra los ácidos grasos sin alterar la textura del plato. Es útil para quien quiere aumentar su dosis de omega-3 sin cambiar lo que come. Pero no tiene fibra. Se echa a perder más rápido una vez abierto. Y cuesta más por la cantidad real de omega-3 que aporta.
          </p>

          <p>
            Para la mayoría de las personas que quiere incluir la linaza en su alimentación por primera vez, la semilla molida es el punto de partida más simple. Es más versátil — va en el yogur, la granola, el batido, el pan casero —, dura más y cuesta menos. El aceite tiene sentido cuando ya comes la semilla con regularidad y quieres una fuente adicional de omega-3 sin cambiar tu rutina.
          </p>
          <p>
            No tienen que excluirse. Mucha gente usa los dos: la semilla en el desayuno, el aceite en la ensalada del almuerzo.
          </p>

          {/* COMO GUARDAR Y DONDE COMPRAR */}
          <h2 id="guardar-comprar">Cómo guardarlo y dónde comprarlo</h2>

          <h3>Cómo guardarlo</h3>
          <p>
            El aceite de linaza se echa a perder rápido. Una vez abierto, va directo al refrigerador — de preferencia en un frasco oscuro, lejos del calor y la luz. Úsalo dentro de cuatro a seis semanas. Si el sabor se vuelve amargo o el olor es fuerte y desagradable, está rancio y va a la basura. Un aceite rancio tiene el efecto contrario al que buscabas: sus compuestos oxidados son proinflamatorios.
          </p>
          <p>
            Antes de abrirlo, puede quedarse en un lugar fresco y oscuro. Después de abierto, siempre en el refrigerador. Lo mismo aplica para la semilla molida — se oxida más rápido que la semilla entera.
          </p>

          <h3>Dónde comprarlo</h3>
          <p>
            Los supermercados grandes tienen el aceite de linaza en la sección de aceites y vinagres. Las farmacias lo venden en cápsulas — más práctico para quien no quiere medir con cuchara, pero más caro por dosis. Las tiendas naturistas y de suplementos suelen tener más opciones, incluido el prensado en frío. Online hay buena variedad y precios competitivos, pero revisa la fecha de vencimiento del lote antes de comprar.
          </p>
          <p>
            La etiqueta debe indicar si es prensado en frío. Prefiere ese tipo. Revisa también la fecha de vencimiento — los frascos con vida útil corta pueden llegar a tu casa ya parcialmente oxidados.
          </p>
          <p>
            La <a href="/es/funcionalidades/despensa">despensa de Mise</a> registra lo que tienes en casa y cuándo vence — útil para no olvidar el frasco abierto en el refrigerador más tiempo del que debería.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">¿Vale la pena ponerlo en la lista?</h2>

          <p>
            Si comes poco pescado y quieres incluir omega-3 vegetal en tu rutina, sí. Una cucharada al día en la ensalada o en el yogur no cambia el sabor del plato y basta para aprovechar los beneficios. Es un hábito simple de mantener — mientras no olvides el frasco fuera del refrigerador.
          </p>
          <p>
            Si la idea es comprarlo porque escuchaste que hace bien pero no tienes claro para qué lo vas a usar, probablemente todavía no vale la pena. El aceite de linaza exige una rutina de consumo y de almacenamiento. Sin eso, vas a encontrar un frasco con olor raro detrás de la mayonesa dentro de tres meses. Le ha pasado a casi todo el mundo.
          </p>
          <p>
            ¿Ya tienes un uso definido antes de comprarlo? Ponlo en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>.
            ¿Todavía no? Empieza por la semilla molida — es más fácil de incluir en el día a día, más difícil de desperdiciar y te permite comprobar si el hábito funciona antes de invertir en el aceite.
          </p>
          <p>
            Guardar el aceite de linaza en el refrigerador después de abierto es la única disciplina que este producto exige. Lo demás es solo ponerlo en la ensalada.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el aceite de linaza</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Se puede cocinar con aceite de linaza?</p>
              <p className="faq-a">
                No. Su punto de humo está alrededor de 107°C — muy por debajo de las temperaturas de fritura o sofrito. Al calentarlo, el omega-3 se degrada y puede liberar compuestos dañinos. Úsalo siempre en frío: en ensaladas, yogur, batidos o sobre platos ya listos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre la semilla de lino y el aceite de linaza?</p>
              <p className="faq-a">
                La semilla tiene fibra, más lignanos y es más barata, pero necesita molerse para liberar sus nutrientes. El aceite concentra los ácidos grasos sin cambiar la textura de los platos, pero no tiene fibra y se echa a perder más rápido tras abrirse. Para quien empieza, la semilla molida suele ser más versátil y económica.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuándo es mejor tomar aceite de linaza?</p>
              <p className="faq-a">
                No hay un horario específico respaldado por evidencia. Lo más práctico es incluirlo junto a una comida — en la ensalada del almuerzo, el yogur del desayuno o un batido. Lo importante es la constancia: 1 cucharada al día, de forma regular, es más efectivo que una dosis mayor tomada de vez en cuando.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El aceite de linaza es bueno para el corazón?</p>
              <p className="faq-a">
                El ALA del aceite de linaza se asocia con triglicéridos más bajos y mejor perfil lipídico. El efecto es menor que el del omega-3 del pescado, porque el cuerpo convierte el ALA con poca eficiencia. Aun así, es una fuente vegetal relevante y forma parte de una alimentación favorable para el corazón, sobre todo para quien no come pescado seguido.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda el aceite de linaza después de abierto?</p>
              <p className="faq-a">
                Siempre en el refrigerador, en un frasco oscuro u opaco, bien cerrado. Úsalo dentro de 4 a 6 semanas tras abrirlo. Si se pone amargo o huele fuerte, está rancio — deséchalo. Un aceite rancio tiene compuestos oxidados proinflamatorios, justo lo contrario de lo que buscas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El aceite de linaza tiene efectos secundarios?</p>
              <p className="faq-a">
                En 1 cucharada al día, es seguro para la mayoría de las personas. Dosis altas pueden causar molestias digestivas. Quienes tienen trastornos de coagulación o toman anticoagulantes deben consultar a un médico — el omega-3 tiene un leve efecto anticoagulante. Personas embarazadas o en lactancia también deben consultarlo con un profesional antes de usarlo.
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
                Creador de Mise. Compró aceite de linaza prensado en frío, lo usó una vez en la ensalada y encontró el frasco rancio seis semanas después. Ahora pone un recordatorio en la{' '}
                <a href="/es/funcionalidades/despensa">despensa</a>.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Sabes lo que tienes en la despensa.<br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Mise conecta despensa, recetas y lista de compras en un solo lugar.
              El aceite de linaza ya no desaparece detrás de la mayonesa.
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
