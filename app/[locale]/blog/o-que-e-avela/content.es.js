import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Avellanas: qué son, beneficios y cómo usarlas en la cocina',
  description: 'La avellana es un fruto seco rico en vitamina E y grasas buenas — la misma de la Nutella. Qué es, beneficios, cuántas comer al día y cómo usarla en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-avela',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-avela',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-avela',
    },
  },
  openGraph: {
    title: 'Avellanas: qué son, beneficios y cómo usarlas en la cocina',
    description: 'La avellana es un fruto seco rico en vitamina E y grasas buenas — la misma de la Nutella. Qué es, beneficios, cuántas comer al día y cómo usarla en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela',
    images: [
      {
        url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Avellanas enteras en un tazón de madera, mostrando la textura y el color natural del fruto seco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avellanas: qué son, beneficios y cómo usarlas en la cocina',
    description: 'La avellana es un fruto seco rico en vitamina E y grasas buenas — la misma de la Nutella. Qué es, beneficios, cuántas comer al día y cómo usarla en la cocina.',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la avellana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avellana es la semilla comestible del avellano (Corylus avellana), un árbol nativo de Europa y Asia Menor. Es un fruto seco —de la misma familia que la almendra, la nuez y el anacardo— rico en grasas monoinsaturadas, vitamina E y fibra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas avellanas se pueden comer al día?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La recomendación es de unos 28 g al día —entre 20 y 21 avellanas, lo que cabe en un puño cerrado. Eso aporta cerca de 176 kcal, grasas buenas, fibra y vitamina E sin pasarte de calorías.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La avellana engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es calórica —628 kcal por cada 100 g. Consumida en la porción correcta (28 g al día), la grasa buena y la fibra dan saciedad. El problema es comerla sin control: la avellana cubierta de azúcar o chocolate tiene un perfil calórico muy distinto al de la avellana natural.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La avellana tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avellana natural no tiene gluten —es un fruto seco, no un cereal. Pero los productos industrializados con avellana pueden tener gluten por contaminación cruzada. Revisa siempre la etiqueta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Avellana cruda o tostada: cuál es mejor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cruda conserva un poco más de vitamina E. La tostada en seco (sin sal, sin aceite) tiene más sabor y es más práctica para cocinar. La diferencia nutricional es pequeña —lo que más importa es comerla con regularidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conserva la avellana en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con cáscara dura hasta 1 año en un lugar seco y fresco. Pelada y cruda: hasta 3 meses en el refrigerador en un frasco hermético. Tostada: hasta 2 semanas a temperatura ambiente en un recipiente cerrado. El calor y la humedad aceleran la oxidación de la grasa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre avellana y almendra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son frutos secos de especies distintas. La avellana viene del Corylus avellana, la almendra del Prunus dulcis. La avellana tiene un sabor más intenso y aceitoso, la almendra un sabor más neutro. Ambas son ricas en grasas buenas y vitamina E, pero la avellana tiene más manganeso y un sabor más marcado. En las recetas, son intercambiables en muchos casos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se le puede dar avellana a los niños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, con cuidado. La avellana es un alérgeno del grupo de los frutos secos —introdúcela poco a poco y observa señales de alergia. Para menores de 3 años, evita la avellana entera (riesgo de atragantamiento) y usa molida o en pasta. Consulta al pediatra antes de introducir frutos secos si hay antecedentes familiares de alergia.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Avellanas: qué son, beneficios y cómo usarlas en la cocina',
  description: 'La avellana es un fruto seco rico en vitamina E y grasas buenas — la misma de la Nutella. Qué es, beneficios, cuántas comer al día y cómo usarla en la cocina.',
  image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Avellanas', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-avela' },
  ],
}

export default function AvellanasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Avellanas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Avellana: qué es y por qué ya la comiste sin saberlo
          </h1>
          <p className="blog-desc">
            El fruto seco detrás de medio menú de postres del mundo —el que la mayoría reconoce por el sabor, no por el nombre en la bolsa.
          </p>

          <div className="answer-box">
            <p>
              <strong>La avellana</strong> es la semilla comestible del avellano (<em>Corylus avellana</em>), un árbol nativo de Europa y Asia Menor.
              Rica en grasas monoinsaturadas, vitamina E y fibra —y el ingrediente principal de la Nutella.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Avellanas enteras en un tazón de madera, mostrando la textura y el color natural del fruto seco"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pixabay / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la avellana en realidad</a></li>
              <li><a href="#nutricion">Valor nutricional</a></li>
              <li><a href="#beneficios">Beneficios de la avellana</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#cruda-o-tostada">Cruda o tostada</a></li>
              <li><a href="#como-conservar">Cómo conservarla</a></li>
              <li><a href="#cuanto-comer">Cuántas avellanas al día</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <h2 id="que-es">Qué es la avellana en realidad</h2>

          <p>
            La avellana es la semilla comestible del avellano, árbol de nombre científico <em>Corylus avellana</em>, nativo de los bosques templados de Europa y Asia Menor. El árbol produce frutos pequeños de cáscara dura —del tamaño de una canica grande— que al abrirse revelan una semilla ovalada, de color crema, aceitosa y de sabor suave y ligeramente dulce.
          </p>

          <p>
            Botánicamente, la avellana pertenece a la misma familia que la{' '}
            <a href="/es/blog/o-que-e-amendoa">almendra</a>, la nuez y la castaña de Pará. Lo que todas tienen en común: cáscara dura, semilla rica en grasa buena y ninguna relación con la fruta de la frutería.
          </p>

          <p>
            Seguramente ya comiste avellana sin saber el nombre. La Nutella es pasta de avellana con cacao y azúcar —el fruto seco representa más del 13% de la receta. El Ferrero Rocher tiene una avellana entera en el centro. Muchos helados, bombones y coberturas "gourmet" del supermercado están hechos con la misma semilla, que en su mayoría viene de Turquía, responsable de más del 70% de la producción mundial.
          </p>

          <div className="blog-inline-cta">
            <p>
              ¿Vas a usar avellana en una receta esta semana? Agrégala a la lista y regístrala en tu despensa antes de ir a comprar.{' '}
              <em>Mise te avisa cuando se está acabando.</em>
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Empieza gratis →
            </a>
          </div>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4453193/pexels-photo-4453193.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Avellanas enteras y partidas a la mitad sobre una superficie rústica, mostrando la semilla interior"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>
          <h2 id="nutricion" className="img-above">Valor nutricional de la avellana</h2>

          <p>
            La avellana es densa en calorías —628 kcal por cada 100 g— y la mayor parte viene de la grasa. Pero es del tipo correcto. Casi el 75% de la grasa de la avellana es monoinsaturada, el mismo perfil que el del aceite de oliva. El resto es poliinsaturada, con una fracción pequeña de saturada.
          </p>

          <p>
            Valores de referencia por 100 g de avellana cruda (USDA):
          </p>

          <div className="copy-box">
            <p>
              <strong>Calorías:</strong> 628 kcal<br />
              <strong>Grasa total:</strong> 61 g (monoinsaturada: 46 g)<br />
              <strong>Proteína:</strong> 15 g<br />
              <strong>Carbohidratos:</strong> 17 g<br />
              <strong>Fibra:</strong> 10 g<br />
              <strong>Vitamina E:</strong> 15 mg — 100% del valor diario<br />
              <strong>Manganeso:</strong> 6.2 mg — 269% del valor diario<br />
              <strong>Cobre:</strong> 1.7 mg — 189% del valor diario<br />
              <strong>Magnesio:</strong> 163 mg — 39% del valor diario
            </p>
          </div>

          <p>
            La porción práctica del día a día es de 28 g —entre 20 y 21 avellanas, lo que cabe en un puño cerrado. Aporta cerca de 176 kcal, 17 g de grasa buena, 3 g de fibra y una buena parte de la vitamina E, el manganeso y el cobre que necesitas al día.
          </p>

          <h2 id="beneficios">Beneficios de la avellana respaldados por estudios</h2>

          <p>
            La avellana no es un medicamento. Pero tiene un perfil nutricional que aparece de forma constante en estudios sobre alimentación y salud cardiovascular:
          </p>

          <ul className="item-list">
            <li>
              <strong>Salud cardiovascular.</strong> Las grasas monoinsaturadas están asociadas a una reducción del colesterol LDL (el "malo") y a la protección de las arterias. Los estudios con frutos secos en general muestran una reducción de marcadores inflamatorios con un consumo regular dentro de una dieta equilibrada.
            </li>
            <li>
              <strong>Protección antioxidante.</strong> La avellana es una de las mayores fuentes alimentarias de vitamina E, que actúa contra el estrés oxidativo —el proceso ligado al envejecimiento celular y a la inflamación crónica. Una porción de 28 g cubre buena parte de la necesidad diaria.
            </li>
            <li>
              <strong>Salud intestinal.</strong> Con 10 g de fibra por cada 100 g, la avellana ayuda al tránsito intestinal y al funcionamiento de la microbiota. No reemplaza a las verduras de hoja, pero ayuda a cerrar la meta diaria de fibra.
            </li>
            <li>
              <strong>Saciedad real.</strong> La combinación de grasa, proteína y fibra hace de la avellana un snack más satisfactorio que la mayoría de los ultraprocesados en el mismo rango de calorías.
            </li>
          </ul>

          <p>
            Lo que la avellana no hace: no adelgaza por sí sola, no trata ninguna enfermedad y no compensa una mala alimentación el resto del día. Los beneficios aparecen en el contexto de una dieta variada y constante —no de forma aislada.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5939765/pexels-photo-5939765.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pasta de avellana casera en una cuchara de madera junto a avellanas enteras sobre una mesada"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>
          <h2 id="como-usar" className="img-above">Cómo usar la avellana en la cocina</h2>

          <p>
            La avellana tiene una versatilidad que buena parte de los otros frutos secos no tiene. El sabor es lo bastante marcado para notarse incluso en pequeñas cantidades, pero sin ser invasivo —combina con lo dulce, con lo salado y con el café.
          </p>

          <ul className="item-list">
            <li>
              <strong>Como botana.</strong> Cruda o tostada en seco, sin sal, sin azúcar. Un tazón de 20 a 25 unidades entre comidas. Sin complicaciones.
            </li>
            <li>
              <strong>En el desayuno.</strong> Picada sobre avena, yogur natural o granola. Una cucharada ya basta para sumar textura y grasa buena.
            </li>
            <li>
              <strong>En postres.</strong> Pasta de avellana casera (procesa por 8 a 10 minutos hasta que quede lisa), brownie con avellana picada, ganache de chocolate. Cualquier receta que pida almendra picada funciona con avellana.
            </li>
            <li>
              <strong>En ensaladas.</strong> Avellana tostada y picada sobre una ensalada de hojas verdes con queso suave y vinagreta balsámica —una combinación clásica de bistró europeo que funciona muy bien en cualquier lado.
            </li>
            <li>
              <strong>En repostería.</strong> La harina de avellana (avellana molida) reemplaza parte de la harina de trigo en pasteles y galletas, dejando el resultado más húmedo y con más sabor.
            </li>
          </ul>

          <p>
            Con qué combina bien: chocolate amargo, café, canela, miel, pera, higo, queso brie. Con qué no combina tanto: los sabores muy ácidos (limón, maracuyá) tienden a tapar el sabor delicado de la avellana.
          </p>

          <p>
            Un consejo práctico: si vas a usar avellana con frecuencia, cómprala pelada. Pelarla en casa da trabajo —la tuestas 10 minutos, la dejas enfriar, la frotas con un paño seco para soltar la piel interior. Funciona, pero es el tipo de paso que quita las ganas de usarla. La pelada te ahorra ese paso cada vez.
          </p>

          <h2 id="cruda-o-tostada">Cruda o tostada: cuál es mejor</h2>

          <p>
            Tostar la avellana reduce ligeramente su contenido de vitamina E y algunos compuestos antioxidantes. La diferencia real es pequeña —entre un 10 y un 15%, según la temperatura y el tiempo en el horno. Lo que más importa es la constancia: comer 28 g de avellana tostada todos los días es mejor que comer avellana cruda una vez a la semana.
          </p>

          <p>
            El argumento práctico a favor de la tostada: el sabor se vuelve más intenso, la piel interior (ligeramente amarga) se desprende más fácil, y la textura crujiente es más agradable, tanto como botana como para terminar un plato.
          </p>

          <p>
            Cómo tostarla en casa: repártela en una bandeja, horno a 150°C durante 10 a 12 minutos. Déjala enfriar por completo antes de guardarla —el calor atrapado dentro del recipiente genera humedad y acelera la oxidación.
          </p>

          <p>
            Qué evitar: avellana con sal, caramelizada o cubierta de chocolate. El perfil nutricional cambia por completo. Una avellana salada no es una versión saludable de la avellana natural —es un snack procesado que usa avellana como ingrediente.
          </p>

          <h2 id="como-conservar">Cómo conservar la avellana para que no se eche a perder</h2>

          <p>
            La avellana tiene un alto contenido de grasa, y eso es justo lo que la vuelve rancia si queda expuesta al aire y al calor. Cómo la guardas importa más que con la mayoría de los básicos de despensa.
          </p>

          <ul className="item-list">
            <li>
              <strong>Con cáscara:</strong> aguanta hasta 1 año en un lugar seco y fresco. La cáscara hace la mayor parte del trabajo de protección.
            </li>
            <li>
              <strong>Pelada y cruda:</strong> se oxida más rápido —guárdala en un frasco hermético en el refrigerador, donde mantiene calidad por unos 3 meses.
            </li>
            <li>
              <strong>Tostada:</strong> mejor consumirla dentro de 2 semanas, a temperatura ambiente en un recipiente cerrado. Tostarla acelera cómo se echa a perder la grasa.
            </li>
          </ul>

          <p>
            Si usas avellana con regularidad y compras en cantidad, vale la pena registrarla en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            con la fecha en que abriste la bolsa —así sabes cuándo se está por vencer.
          </p>

          <h2 id="cuanto-comer">Cuántas avellanas se pueden comer al día</h2>

          <p>
            La referencia estándar —compartida con otros frutos secos— es una porción de 28 g al día. Son entre 20 y 21 avellanas, lo que cabe en un puño cerrado. Aporta cerca de 176 kcal, 17 g de grasa buena, 3 g de fibra y suficiente vitamina E para cubrir buena parte de la necesidad diaria.
          </p>

          <p>
            Comer más de eso no trae un beneficio proporcional —solo suma calorías sin mucha ganancia. La avellana es densa. Un puñado pequeño rinde bastante.
          </p>

          <p>
            Como sustituto de snack: cambiar una barra de cereal ultraprocesada de 28 g por el mismo peso en avellana aporta más proteína, más fibra y menos azúcar. La{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            de Mise ayuda a planear antes de ir al mercado —pones la avellana en la lista y no se te olvida en el pasillo de frutos secos.
          </p>

          <p>
            Una nota para quien tiene alergia a los frutos secos: la avellana está en el mismo grupo de alérgenos que la almendra, la nuez y el anacardo. Si reaccionas a alguno de ellos, consulta a un médico antes de introducir avellana.
          </p>

          <h2 id="faq">Preguntas frecuentes sobre la avellana</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué es la avellana?</p>
              <p className="faq-a">
                La avellana es la semilla comestible del avellano (<em>Corylus avellana</em>), un árbol nativo de Europa y Asia Menor. Es un fruto seco —de la misma familia que la almendra, la nuez y el anacardo— rico en grasas monoinsaturadas, vitamina E y fibra.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántas avellanas se pueden comer al día?</p>
              <p className="faq-a">
                La recomendación es de unos 28 g al día —entre 20 y 21 avellanas, lo que cabe en un puño cerrado. Eso aporta cerca de 176 kcal, grasas buenas, fibra y vitamina E sin pasarte de calorías.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La avellana engorda?</p>
              <p className="faq-a">
                Es calórica —628 kcal por cada 100 g. Consumida en la porción correcta (28 g al día), la grasa buena y la fibra dan saciedad. El problema es comerla sin control: la avellana cubierta de azúcar o chocolate tiene un perfil calórico muy distinto al de la avellana natural.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La avellana tiene gluten?</p>
              <p className="faq-a">
                La avellana natural no tiene gluten —es un fruto seco, no un cereal. Los productos industrializados con avellana pueden tener gluten por contaminación cruzada. Revisa siempre la etiqueta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Avellana cruda o tostada: cuál es mejor?</p>
              <p className="faq-a">
                La cruda conserva un poco más de vitamina E. La tostada en seco (sin sal, sin aceite) tiene más sabor y es más práctica para cocinar. La diferencia nutricional es pequeña —lo que más importa es comerla con regularidad.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conserva la avellana en casa?</p>
              <p className="faq-a">
                Con cáscara, hasta 1 año en un lugar seco y fresco. Pelada y cruda: hasta 3 meses en el refrigerador en un frasco hermético. Tostada: hasta 2 semanas a temperatura ambiente en un recipiente cerrado. El calor y la humedad aceleran la oxidación de la grasa.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre avellana y almendra?</p>
              <p className="faq-a">
                Son frutos secos de especies distintas. La avellana tiene un sabor más intenso y aceitoso, la almendra un sabor más neutro. Ambas son ricas en grasas buenas y vitamina E, pero la avellana tiene más manganeso y un sabor más marcado. En las recetas, son intercambiables en muchos casos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se le puede dar avellana a los niños?</p>
              <p className="faq-a">
                Sí, con cuidado. La avellana es un alérgeno del grupo de los frutos secos —introdúcela poco a poco y observa señales de alergia. Para menores de 3 años, evita la avellana entera (riesgo de atragantamiento) y usa molida o en pasta. Consulta al pediatra antes de introducir frutos secos si hay antecedentes familiares de alergia.
              </p>
            </li>
          </ul>

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
                Creador de Mise. Cocina de lunes a viernes y hace el mercado el sábado —cuando se acuerda. Creó Mise para dejar de volver a casa sin lo que realmente necesitaba.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Tu despensa sabe que tiene avellanas.
              <br />
              <em>Deja que Mise haga el resto.</em>
            </h2>
            <p>
              Anota lo que tienes, arma la lista de lo que falta y no vuelvas a descubrir que se acabaron las avellanas a mitad de la receta.
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
