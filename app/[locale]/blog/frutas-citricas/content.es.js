import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Frutas cítricas: tipos, vitamina C y cómo usarlas',
  description: 'Naranja, limón, mandarina, toronja: qué frutas son realmente cítricas, cuánta vitamina C tiene cada una y cómo elegirlas, guardarlas y usarlas en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/frutas-citricas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/frutas-citricas',
      en: 'https://www.miseemcasa.com.br/en/blog/frutas-citricas',
      es: 'https://www.miseemcasa.com.br/es/blog/frutas-citricas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/frutas-citricas',
    },
  },
  openGraph: {
    title: 'Frutas cítricas: tipos, vitamina C y cómo usarlas',
    description: 'Naranja, limón, mandarina, toronja: qué frutas son realmente cítricas, cuánta vitamina C tiene cada una y cómo elegirlas, guardarlas y usarlas en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/frutas-citricas',
    images: [
      {
        url: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rodajas de naranja fresca en primer plano mostrando el interior jugoso y los gajos cítricos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frutas cítricas: tipos, vitamina C y cómo usarlas',
    description: 'Naranja, limón, mandarina, toronja: qué frutas son realmente cítricas, cuánta vitamina C tiene cada una y cómo elegirlas, guardarlas y usarlas en la cocina.',
    images: ['https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué son las frutas cítricas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las frutas cítricas vienen de plantas del género Citrus, de la familia Rutaceae. Lo que las une es el ácido cítrico, el compuesto detrás del sabor ácido de la naranja, el limón, la lima, la mandarina, la toronja y el pomelo. Todas aportan una cantidad relevante de vitamina C, y su cáscara concentra aceites esenciales aromáticos que se usan en la cocina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué frutas se consideran cítricos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las principales son naranja, limón amarillo, lima persa, mandarina, clementina, toronja, pomelo y cidra. En un supermercado normal de América Latina vas a encontrar con más frecuencia naranja, lima, limón amarillo, mandarina y toronja.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué fruta cítrica tiene más vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre los cítricos más comunes, la naranja es una de las mayores fuentes — una unidad mediana de 130 g tiene cerca de 70 mg, suficiente para cubrir la necesidad diaria de un adulto en una sola fruta. El limón concentra vitamina C sobre todo en la cáscara y en la parte blanca. El kiwi tiene más vitamina C que la naranja, pero no es una fruta cítrica — pertenece al género Actinidia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El kiwi y la fresa son frutas cítricas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El kiwi pertenece al género Actinidia y la fresa al género Fragaria — ninguno de los dos es del género Citrus. Ambos tienen vitamina C y algo de ácido cítrico, pero no se clasifican como cítricos. La confusión pasa porque a veces se usa "cítrico" de forma informal para describir cualquier fruta ácida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo elegir buenas frutas cítricas en el mercado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elige las que se sientan pesadas para su tamaño — eso indica más jugo. La cáscara de un buen limón o lima cede un poco al presionarla. Evita frutas con manchas oscuras, partes blandas o un olor fermentado. Una naranja con un tono ligeramente verdoso puede estar perfecta — el color de la cáscara no es un indicador confiable del sabor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo conservar las frutas cítricas en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enteras a temperatura ambiente, lejos del sol: 1 a 2 semanas. En el refrigerador: hasta un mes. Un limón o lima cortado y envuelto en plástico: 3 a 4 días. Jugo recién exprimido: máximo 24 horas en el refrigerador, porque la vitamina C se degrada con el tiempo. Congelado en cubos de hielo: hasta 3 meses.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden usar frutas cítricas en platillos salados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La lima y el limón son de los ingredientes más versátiles de la cocina salada — marinadas, vinagretas, salsas y toque final. La naranja y la mandarina funcionan bien con aves y pescado. La ralladura de limón o naranja en salsas y asados aporta aroma concentrado sin cambiar la textura del platillo.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frutas cítricas: tipos, vitamina C y cómo usarlas',
  description: 'Naranja, limón, mandarina, toronja: qué frutas son realmente cítricas, cuánta vitamina C tiene cada una y cómo elegirlas, guardarlas y usarlas en la cocina.',
  image: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/frutas-citricas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Frutas cítricas', item: 'https://www.miseemcasa.com.br/es/blog/frutas-citricas' },
  ],
}

export default function CitrusFruitsEs() {
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
            <li className="breadcrumb-current" aria-current="page">Frutas cítricas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Guía de las frutas cítricas: naranja, limón, mandarina y qué más entra en la lista
          </h1>
          <p className="blog-desc">
            Naranja, limón, mandarina. Las compras cada mes sin pensarlo mucho. Pero el grupo de los cítricos es más grande de lo que parece — y entender la diferencia cambia lo que eliges en el mercado y cómo lo usas en la cocina.
          </p>

          <div className="answer-box">
            <p>
              <strong>Las frutas cítricas</strong> son frutas de plantas del género <em>Citrus</em>, de la familia Rutaceae.
              El ácido cítrico es lo que las une — el compuesto detrás del sabor ácido de la naranja, el limón, la lima y sus variedades.
              Todas aportan una buena cantidad de vitamina C, y su cáscara concentra aceites aromáticos que se usan en la cocina.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Rodajas de naranja fresca en primer plano mostrando el interior jugoso y los gajos cítricos"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: freestocks.org / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-son">Qué son las frutas cítricas</a></li>
              <li><a href="#tipos">Los principales tipos de cítricos</a></li>
              <li><a href="#vitamina-c">Cuánta vitamina C tienen</a></li>
              <li><a href="#beneficios">Beneficios documentados</a></li>
              <li><a href="#como-usar">Cómo usarlas en la cocina</a></li>
              <li><a href="#elegir-guardar">Cómo elegirlas y guardarlas</a></li>
              <li><a href="#lista">Qué poner en tu lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ SON */}
          <h2 id="que-son">Qué son las frutas cítricas</h2>

          <p>
            Las frutas cítricas son frutas de plantas del género <em>Citrus</em>, de la familia Rutaceae. Lo que tienen en común es el ácido cítrico — responsable del sabor ácido característico. Algunas tienen más (la lima persa), otras menos (una naranja madura). El ácido cítrico es la firma del grupo, no una dosis fija.
          </p>
          <p>
            La cáscara concentra los aceites esenciales que dan el aroma. Es lo que termina en la ralladura de limón, el extracto de naranja y buena parte de los productos de limpieza con olor a cítricos. Tirar la cáscara es desperdiciar la mitad del ingrediente.
          </p>
          <p>
            Los cítricos también son un cultivo global importante. Brasil sigue siendo el mayor productor mundial de naranja, mientras que México es uno de los principales productores y exportadores de limón y lima del planeta (
            <a href="https://www.fao.org/faostat/en/#data/QCL" target="_blank" rel="noopener">FAO FAOSTAT, 2023</a>
            ). Esa escala explica en parte por qué la naranja y la lima siguen entre las frutas más accesibles del mercado durante buena parte del año.
          </p>
          <p>
            La acidez también hace química de verdad: el ácido cítrico ayuda a que el cuerpo absorba mejor el hierro no-hemo — el que está en alimentos vegetales como el frijol y la lenteja. Exprimir lima sobre una ensalada de frijoles no es solo cuestión de sabor. Es química a tu favor.
          </p>

          {/* TIPOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4038669/pexels-photo-4038669.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Naranjas y limones frescos sobre una superficie blanca — frutas cítricas en primer plano"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kaboompics.com / Pexels</p>
          </div>

          <h2 id="tipos" className="img-above">Los principales tipos de cítricos</h2>

          <h3>Naranja</h3>
          <p>
            La más consumida en casi toda América Latina. La naranja "de mesa" (para comer sola) suele ser más dulce y fácil de pelar; la naranja "de jugo" es más ácida y rinde más líquido. La naranja sanguina tiene un dulzor parecido al de una baya y un color que parece falso hasta que la cortas. El precio cambia con la temporada, pero la naranja sigue siendo de las mejores fuentes de vitamina C por lo que cuesta, todo el año.
          </p>

          <h3>Limón y lima: la confusión que vale la pena aclarar</h3>
          <p>
            En la mayoría de América Latina, cuando alguien dice "limón" casi siempre se refiere a la lima persa — la fruta verde, sin semillas, muy ácida, la del ceviche, el guacamole y casi cualquier plato mexicano o peruano. El limón amarillo (el que en inglés se llama <em>lemon</em>) es menos común en la cocina del día a día, pero aparece en repostería, en algunas salsas y se vende como "limón real" o "limón amarillo" en varios mercados.
          </p>
          <p>
            La lima persa es la de rendimiento más alto y sabor más ácido — la del vinagrete, la michelada y la marinada de carne. El limón amarillo tiene cáscara más gruesa y un aroma más floral, con más superficie aprovechable para ralladura — por eso se prefiere en repostería, como en un pay de limón.
          </p>

          <h3>Mandarina y clementina</h3>
          <p>
            Son las cítricas más fáciles de comer sin cuchillo, plato ni cocina. La clementina se pela con la mano y casi no tiene semillas; la mandarina es un poco más grande y dulce. Temporada típica de otoño e invierno — se encuentran mejores entre esos meses.
          </p>

          <h3>Toronja y pomelo</h3>
          <p>
            La toronja es más pequeña, más amarga, y conocida por interactuar con una lista sorprendentemente larga de medicamentos — incluyendo estatinas y algunos antihipertensivos. El pomelo es la fruta cítrica más grande que existe, más suave y menos amarga que la toronja, con una cáscara gruesa que se retira antes de comer los gajos.
          </p>

          <h3>Otros cítricos que vale la pena conocer</h3>
          <p>
            El yuzu (japonés, apreciado por su ralladura, casi nunca se exprime), el kumquat (tan pequeño que se come entero, con todo y cáscara) y la cidra (usada casi solo por su cáscara gruesa y confitada) completan la categoría. La mayoría de las personas solo se va a encontrar naranja, limón, lima, mandarina y toronja en el supermercado normal — el resto aparece en mercados especializados o en cocinas específicas.
          </p>

          {/* VITAMINA C */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7223306/pexels-photo-7223306.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rodajas de frutas cítricas — naranja, limón y toronja — sobre una superficie de colores vibrantes"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Alena Darmel / Pexels</p>
          </div>

          <h2 id="vitamina-c" className="img-above">Cuánta vitamina C tienen las frutas cítricas</h2>

          <p>
            Un adulto necesita entre 65 y 90 mg de vitamina C al día, con un límite superior seguro de 2.000 mg (
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK225480/" target="_blank" rel="noopener">Dietary Reference Intakes, NIH</a>
            ). Una naranja mediana de 130 g tiene aproximadamente 70 mg — suficiente para cubrir la necesidad diaria de un adulto en una sola fruta.
          </p>
          <p>
            El limón tiene menos vitamina C por fruta que la naranja, pero concentra más en la cáscara y en la parte blanca. El kiwi tiene más vitamina C que la naranja, pero no es una fruta cítrica — pertenece al género <em>Actinidia</em>. Más sobre esta confusión en las preguntas frecuentes.
          </p>
          <p>
            Es muy probable que ahora mismo tengas media lima envuelta en plástico en el refrigerador.
          </p>
          <p>
            El ácido cítrico de las frutas cítricas también mejora la absorción del hierro no-hemo — el de las leguminosas como el frijol y la lenteja. Comer frijoles con un chorrito de limón es una de las formas más simples de aprovechar ese efecto. No hace falta suplemento.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios documentados de las frutas cítricas</h2>

          <p>
            La evidencia más sólida está en tres áreas.
          </p>
          <p>
            <strong>Vitamina C:</strong> antioxidante, apoyo al sistema inmune y a la síntesis de colágeno. Es el nutriente más estudiado de las frutas cítricas — y la razón principal por la que se sigue recomendando su consumo regular.
          </p>
          <p>
            <strong>Flavonoides:</strong> compuestos como la hesperidina (naranja) y la naringenina (toronja) muestran efecto antiinflamatorio en estudios de laboratorio. Se concentran en la parte blanca entre la cáscara y los gajos — la parte que la mayoría tira cuando exprime el jugo.
          </p>
          <p>
            <strong>Fibra:</strong> sobre todo en la parte blanca y la pulpa. Un vaso de jugo de naranja tiene mucha menos fibra que la fruta entera. Comer la naranja con la parte blanca conserva ese componente.
          </p>
          <p>
            Una aclaración honesta: las frutas cítricas son nutritivas, no son medicina. El beneficio viene del consumo regular dentro de una alimentación variada — no de jugos detox ni protocolos puntuales.
          </p>

          {/* CÓMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3049465/pexels-photo-3049465.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cáscara de naranja enrollada junto a jugo recién exprimido — uso culinario de frutas cítricas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Jonas Mohamadi / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar las frutas cítricas en la cocina</h2>

          <h3>Jugos y bebidas</h3>
          <p>
            La vitamina C se degrada con el calor y el aire. Un jugo recién exprimido tiene bastante más vitamina C que uno hecho horas antes — incluso refrigerado, la vitamina C baja de forma notable en 6 a 8 horas. Exprime y toma de una vez.
          </p>

          <h3>Marinadas</h3>
          <p>
            La lima en una marinada ablanda la proteína y aporta acidez. La proporción clásica: jugo de una lima, aceite de oliva, ajo y hierbas. Funciona con pollo, pescado y cortes de res más delgados. Para pescado, no lo dejes en la marinada más de 2 horas — el ácido empieza a "cocinar" la proteína y la textura queda gomosa.
          </p>

          <h3>Vinagretas y aderezos</h3>
          <p>
            El limón puede sustituir al vinagre en la mayoría de las vinagretas sin problema. El perfil de acidez es distinto — más fresco, menos penetrante. Para ensaladas delicadas, el jugo de mandarina o de limón amarillo da un resultado más suave que la lima.
          </p>

          <h3>Ralladura</h3>
          <p>
            La ralladura de limón amarillo y de naranja es el ingrediente más fácil de olvidar que ya tienes. Es gratis — viene con la fruta — y aporta un aroma concentrado a pasteles, galletas, salsas y asados. Ralla la cáscara antes de exprimir el jugo, nunca después.
          </p>

          <h3>Platillos salados</h3>
          <p>
            El pescado con limón es el uso más obvio. Pero el pollo asado con ralladura de naranja, una glaseado de mandarina para pato, y camarones con limón amarillo son combinaciones que aparecen en la cocina clásica por una razón simple: la acidez corta la grasa y limpia el paladar entre bocados.
          </p>

          <div className="blog-inline-cta">
            <p>Menos decisiones. Más cocina. <em>Así es Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* ELEGIR Y GUARDAR */}
          <h2 id="elegir-guardar">Cómo elegir y guardar frutas cítricas</h2>

          <p>
            El peso es el mejor indicador al elegir cítricos. Las frutas pesadas para su tamaño tienen más jugo. La cáscara de una buena lima o limón cede un poco al presionarla — si está demasiado dura, suele significar menos jugo, no más frescura. Evita las que tengan manchas oscuras, partes blandas u olor fermentado.
          </p>
          <p>
            Algo que casi nadie sabe: una naranja con un tono ligeramente verdoso puede estar perfecta. El color de la cáscara depende de la temperatura de maduración, no del sabor ni de qué tan madura está la fruta.
          </p>
          <p>
            Para guardarlas: enteras duran de 1 a 2 semanas a temperatura ambiente, lejos del sol. En el refrigerador llegan hasta un mes. Un limón o lima cortado y envuelto en plástico dura de 3 a 4 días. El jugo exprimido: úsalo en menos de 24 horas en el refrigerador — la vitamina C se degrada rápido. Congelado en cubos de hielo: hasta 3 meses.
          </p>

          {/* LISTA */}
          <h2 id="lista">Qué poner en tu lista</h2>

          <p>
            Para la mayoría de las casas, tres cítricos cubren bien la semana: naranja para comer y para jugo, lima o limón para cocinar, y mandarina cuando está en temporada.
          </p>
          <p>
            Si horneas o haces postres seguido, vale la pena tener limón amarillo en la lista de forma regular — sobre todo cuando la receta pide ralladura. Es el ingrediente más fácil de olvidar y el más difícil de sustituir. La lima no funciona igual en un pay de limón. No es la misma fruta, aunque se parezcan en el anaquel.
          </p>
          <p>
            Mise conecta tu <a href="/es/funcionalidades/lista-de-compras">lista de compras</a> con tu <a href="/es/funcionalidades/despensa">despensa</a> — cuando se acaba la lima, aparece sola en la lista, antes de que te des cuenta de que ya no tienes.
          </p>
          <p>
            Lo difícil nunca fue saber qué fruta cítrica comprar. Es acordarte de ponerla en la lista antes de salir de casa.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre las frutas cítricas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué son las frutas cítricas?</p>
              <p className="faq-a">
                Las frutas cítricas vienen de plantas del género <em>Citrus</em>, de la familia Rutaceae. Lo que las une es el ácido cítrico, el compuesto detrás del sabor ácido de la naranja, el limón, la lima, la mandarina, la toronja y el pomelo. Todas aportan una cantidad relevante de vitamina C, y su cáscara concentra aceites esenciales aromáticos que se usan en la cocina.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué frutas se consideran cítricos?</p>
              <p className="faq-a">
                Las principales son naranja, limón amarillo, lima persa, mandarina, clementina, toronja, pomelo y cidra. En un supermercado normal de América Latina vas a encontrar con más frecuencia naranja, lima, limón amarillo, mandarina y toronja.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Qué fruta cítrica tiene más vitamina C?</p>
              <p className="faq-a">
                Entre los cítricos más comunes, la naranja es una de las mayores fuentes — una unidad mediana de 130 g tiene cerca de 70 mg, suficiente para cubrir la necesidad diaria de un adulto en una sola fruta. El limón concentra vitamina C sobre todo en la cáscara y en la parte blanca. El kiwi tiene más vitamina C que la naranja, pero no es una fruta cítrica — pertenece al género <em>Actinidia</em>.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El kiwi y la fresa son frutas cítricas?</p>
              <p className="faq-a">
                No. El kiwi pertenece al género <em>Actinidia</em> y la fresa al género <em>Fragaria</em> — ninguno de los dos es del género Citrus. Ambos tienen vitamina C y algo de ácido cítrico, pero no se clasifican como cítricos. La confusión pasa porque a veces se usa &quot;cítrico&quot; de forma informal para describir cualquier fruta ácida.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo elegir buenas frutas cítricas en el mercado?</p>
              <p className="faq-a">
                Elige las que se sientan pesadas para su tamaño — eso indica más jugo. La cáscara de un buen limón o lima cede un poco al presionarla. Evita frutas con manchas oscuras, partes blandas o un olor fermentado. Una naranja con un tono ligeramente verdoso puede estar perfecta — el color de la cáscara no es un indicador confiable del sabor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo conservar las frutas cítricas en casa?</p>
              <p className="faq-a">
                Enteras a temperatura ambiente, lejos del sol: 1 a 2 semanas. En el refrigerador: hasta un mes. Un limón o lima cortado y envuelto en plástico: 3 a 4 días. Jugo recién exprimido: máximo 24 horas en el refrigerador, porque la vitamina C se degrada con el tiempo. Congelado en cubos de hielo: hasta 3 meses.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se pueden usar frutas cítricas en platillos salados?</p>
              <p className="faq-a">
                Sí. La lima y el limón son de los ingredientes más versátiles de la cocina salada — marinadas, vinagretas, salsas y toque final. La naranja y la mandarina funcionan bien con aves y pescado. La ralladura de limón o naranja en salsas y asados aporta aroma concentrado sin cambiar la textura del platillo.
              </p>
            </li>
          </ul>

          {/* AUTOR */}
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
                Creador de Mise. Una vez compró limón amarillo pensando que era lima. La vinagreta le quedó rara. El pay de limón le quedó perfecto por accidente.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              La despensa se acuerda.<br />
              <em>La lista aparece sola.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              La lima se queda en la lista cada semana — sin que tengas que acordarte.
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
