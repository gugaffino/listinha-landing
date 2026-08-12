import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Avena en hojuelas: beneficios reales y cómo usarla en la cocina',
  description: 'La avena en hojuelas tiene betaglucano, una fibra que reduce el colesterol LDL y controla el azúcar en la sangre. Beneficios reales, la dosis correcta y qué tipo comprar.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/aveia-em-flocos-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/aveia-em-flocos-beneficios',
    },
  },
  openGraph: {
    title: 'Avena en hojuelas: beneficios reales y cómo usarla en la cocina',
    description: 'La avena en hojuelas tiene betaglucano, una fibra que reduce el colesterol LDL y controla el azúcar en la sangre. Beneficios reales, la dosis correcta y qué tipo comprar.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Tazón de avena en hojuelas servido en el desayuno con fruta fresca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avena en hojuelas: beneficios reales y cómo usarla en la cocina',
    description: 'La avena en hojuelas tiene betaglucano, una fibra que reduce el colesterol LDL y controla el azúcar en la sangre. Beneficios reales, la dosis correcta y qué tipo comprar.',
    images: ['https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La avena en hojuelas engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No por sí sola. La avena tiene cerca de 380 kcal por 100g —similar al arroz— pero el betaglucano genera mucha saciedad. Una porción regular no engorda más que otros carbohidratos. El problema suele ser lo que se le agrega encima: azúcar en exceso, mucha miel o granola industrial cargada de jarabe.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La avena en hojuelas tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avena en sí no tiene gluten, pero suele procesarse en las mismas instalaciones que el trigo, lo que puede causar contaminación cruzada. Si tienes celiaquía o sensibilidad al gluten, busca avena con certificación "libre de gluten", que pasa por un procesamiento separado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo comer avena en hojuelas todos los días?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El consumo diario es seguro y es justo lo que hace efectivo al betaglucano. La dosis para el efecto sobre el colesterol es de 3g de betaglucano al día, equivalente a unas 3 cucharadas soperas de hojuelas gruesas (40g). No hace falta comer más que eso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La avena cruda o cocida tiene los mismos beneficios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El betaglucano funciona tanto crudo como cocido. En el overnight oats (avena hidratada cruda en el refrigerador) o en la avena cocida en la estufa, el efecto sobre la saciedad y el colesterol es comparable. La diferencia está en la textura y el tiempo de preparación, no en la eficacia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre avena en hojuelas finas y gruesas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las hojuelas gruesas están menos procesadas y conservan mejor la estructura del betaglucano. Las finas tienen una textura más cremosa y se cocinan más rápido, pero con menos fibra soluble. Para el efecto sobre el colesterol y la saciedad, las hojuelas gruesas son más efectivas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La avena sirve para una dieta baja en carbohidratos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La avena tiene carbohidratos —no es un alimento bajo en carbohidratos. Pero su índice glucémico es bajo gracias al betaglucano: el azúcar se absorbe más lento, sin picos bruscos de insulina. Para una dieta cetogénica estricta, la avena no entra. Para dietas de control moderado de glucosa, se puede incluir en una porción medida.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Avena en hojuelas: beneficios reales y cómo usarla en la cocina',
  description: 'La avena en hojuelas tiene betaglucano, una fibra que reduce el colesterol LDL y controla el azúcar en la sangre. Beneficios reales, la dosis correcta y qué tipo comprar.',
  image: 'https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-12',
  dateModified: '2026-08-12',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Avena en hojuelas', item: 'https://www.miseemcasa.com.br/es/blog/aveia-em-flocos-beneficios' },
  ],
}

export default function AvenaEnHojuelasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Avena en hojuelas</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">12 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Avena en hojuelas: beneficios reales y cómo usarla todos los días
          </h1>
          <p className="blog-desc">
            La avena en hojuelas es famosa por sus beneficios —y esta vez la fama está bien ganada. Pero hay una diferencia importante entre los tipos que existen. Esto es lo que realmente importa saber antes de comprar la próxima bolsa.
          </p>

          <div className="answer-box">
            <p>
              <strong>La avena en hojuelas</strong> es rica en <strong>betaglucano</strong>, una fibra soluble que reduce el colesterol LDL,
              controla el azúcar en la sangre y aumenta la saciedad. Para notar el efecto, el consumo debe ser constante —
              unas 3 cucharadas soperas de hojuelas gruesas al día son suficientes.
              Las hojuelas gruesas conservan más betaglucano que las finas o la avena instantánea.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6133456/pexels-photo-6133456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Tazón de avena en hojuelas servido en el desayuno con fruta fresca"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Regina Ferraz / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la avena en hojuelas</a></li>
              <li><a href="#betaglucano">Betaglucano: la fibra detrás de los beneficios</a></li>
              <li><a href="#otros-beneficios">Otros beneficios documentados</a></li>
              <li><a href="#tipos-de-avena">Hojuelas, salvado o harina: cuál usar</a></li>
              <li><a href="#como-usar">Cómo usarla en la cocina</a></li>
              <li><a href="#cuanto-consumir">Cuánto consumir al día</a></li>
              <li><a href="#despensa">La avena y la despensa</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2290077/pexels-photo-2290077.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Avena en hojuelas y semillas en primer plano mostrando la textura y el color natural del grano"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la avena en hojuelas</h2>

          <p>
            La avena en hojuelas es el grano de avena (<em>Avena sativa</em>) procesado en láminas. El proceso es simple: el grano pasa por vapor y luego por rodillos que lo aplanan. Según el grosor que quede, se obtiene avena en hojuelas gruesas, hojuelas finas o avena instantánea.
          </p>
          <p>
            Esto no es un detalle de etiqueta. El grosor cambia la cantidad de betaglucano que sobrevive al proceso —la fibra responsable de la mayoría de los beneficios por los que la avena es famosa. Cuanto menos procesada, más betaglucano se conserva.
          </p>
          <p>
            El grano entero de avena (avena integral) tiene la mayor concentración. Las hojuelas gruesas quedan justo debajo. La avena instantánea —la de sobre— es el extremo más procesado: conveniente, pero con menos de la fibra que realmente importa.
          </p>

          {/* BETAGLUCANO */}
          <h2 id="betaglucano">Betaglucano: lo que está detrás de los beneficios</h2>

          <p>
            El betaglucano es una fibra soluble. En el intestino, absorbe agua y forma un gel espeso. Ese gel hace dos cosas a la vez: atrapa parte del colesterol LDL antes de que se absorba y retrasa la entrada de azúcar al torrente sanguíneo.
          </p>
          <p>
            El efecto sobre el colesterol está bien documentado —tan bien, que la FDA de Estados Unidos aprobó una declaración de propiedades saludables que permite a los productos con avena afirmar que 3g o más de betaglucano al día pueden reducir el riesgo de enfermedad cardíaca. No es promesa de influencer. Es evidencia suficiente para que un organismo regulador la respalde.
          </p>
          <p>
            Un metaanálisis de 28 ensayos clínicos controlados encontró que al menos 3g de betaglucano de avena al día redujeron el colesterol LDL en cerca de un 6%. El mecanismo: el betaglucano prácticamente secuestra parte del colesterol en el intestino y lo saca del cuerpo antes de que se absorba.
          </p>
          <p>
            Para llegar a la cantidad efectiva, la referencia es <strong>3g de betaglucano al día</strong>. Eso equivale a unas 3 cucharadas soperas de hojuelas gruesas (40g) o 2 cucharadas de salvado de avena. Una porción en el desayuno ya lo resuelve. No hace falta comer avena en cada comida.
          </p>

          {/* OTROS BENEFICIOS */}
          <h2 id="otros-beneficios">Otros beneficios documentados</h2>

          <p>
            El colesterol es el más estudiado. Pero el mismo betaglucano actúa en otros frentes:
          </p>

          <h3>Control del azúcar en sangre</h3>
          <p>
            El gel que se forma en el intestino retrasa la absorción de azúcar. La glucosa sube más despacio después de una comida con avena —un pico de insulina más bajo y una sensación de energía más estable. Para quien tiene diabetes tipo 2 o prediabetes, esto es especialmente relevante. Para cualquier persona, evita esa bajada de energía a media mañana.
          </p>

          <h3>Saciedad</h3>
          <p>
            El gel ocupa espacio en el estómago y retrasa el vaciado gástrico. Un tazón de avena a las 8am puede sostenerte hasta el almuerzo sin necesidad de picar una galleta a las 10:30.
          </p>
          <p>
            Ya sabes de cuál galleta estoy hablando.
          </p>

          <h3>Salud intestinal</h3>
          <p>
            Las fibras de la avena alimentan a las bacterias buenas del intestino —función prebiótica— y ayudan a regular el tránsito. Funciona a mediano plazo, con consumo constante. No resuelve nada en dos días.
          </p>

          <h3>Presión arterial y otros nutrientes</h3>
          <p>
            El consumo regular de avena está asociado a pequeñas reducciones en la presión sistólica. Además del betaglucano, el grano tiene avenantramidas —antioxidantes casi exclusivos de la avena con acción antiinflamatoria. También aporta magnesio, hierro, zinc y vitaminas del complejo B. La avena es uno de los{' '}
            <a href="/es/blog/alimentos-ricos-em-magnesio">alimentos ricos en magnesio</a>{' '}
            que puedes comprar en cualquier supermercado por poco dinero.
          </p>

          {/* TIPOS DE AVENA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5604832/pexels-photo-5604832.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Tazón de avena con frutos rojos frescos —overnight oats listo para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: thea a / Pexels</p>
          </div>

          <h2 id="tipos-de-avena" className="img-above">Hojuelas, salvado o harina: cuál usar</h2>

          <p>
            Los tres vienen del mismo grano. Pero difieren en procesamiento, cantidad de fibra soluble y uso en la cocina. Comprar el tipo equivocado para la receta equivocada es la forma más fácil de desperdiciar dinero en un ingrediente que debería ser barato.
          </p>

          <h3>Hojuelas gruesas</h3>
          <p>
            Menos procesadas. Conservan mejor la estructura del betaglucano. Son las más versátiles: funcionan en la avena cocida, el overnight oats, la granola casera y los panqueques. Si vas a comprar un solo tipo de avena, que sea este.
          </p>

          <h3>Hojuelas finas</h3>
          <p>
            Se cocinan más rápido, textura más cremosa. Se usan en licuados, yogur y recetas donde la textura no importa tanto. Menos concentración de betaglucano por el procesamiento más intenso.
          </p>

          <h3>Salvado de avena</h3>
          <p>
            El más concentrado en betaglucano —es el extracto fibroso del grano. Funciona bien en licuados, yogur y sopas. Su textura casi pulverizada limita su uso en preparaciones que necesitan estructura.
          </p>

          <h3>Harina de avena</h3>
          <p>
            Se usa en pasteles, panqueques y panes. Pierde la mayor parte del betaglucano en el procesamiento. Es nutritiva y tiene menos gluten que la harina de trigo, pero no es la opción correcta si el objetivo es el efecto sobre el colesterol o la glucosa.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar la avena en hojuelas en la cocina</h2>

          <p>
            La avena no necesita una receta elaborada. Las formas más simples son las que realmente se quedan en la rutina.
          </p>

          <h3>Overnight oats</h3>
          <p>
            La preparación más práctica: avena en hojuelas + leche o yogur + plátano machacado o fruta picada. Mezcla en un frasco, tapa y deja en el refrigerador la noche anterior. Por la mañana está listo. Puedes agregar miel, canela o frutos secos. No necesita fuego. La preparas mientras cenas y la comes al día siguiente.
          </p>

          <h3>Avena cocida</h3>
          <p>
            Una taza de avena + leche + una pizca de canela + fuego medio por 5 minutos. Así de simple. Agrega miel al final si la quieres dulce.
          </p>

          <h3>Granola casera</h3>
          <p>
            Avena en hojuelas mezclada con miel, aceite de oliva, nueces y coco rallado, extendida en una bandeja y horneada 20 minutos a 180°C. El resultado es mucho mejor que la granola de caja —y tú controlas el azúcar. Si quieres el paso a paso completo, está la{' '}
            <a href="/es/blog/o-que-e-granola">guía de granola casera</a>{' '}
            con proporciones y variaciones.
          </p>

          <h3>Panqueques rápidos</h3>
          <p>
            Dos cucharadas de avena + 1 huevo + 1 plátano machacado. Licúa o mezcla en un tazón con un tenedor. Cocina en un sartén antiadherente. No es el panqueque francés —es el panqueque de alguien con 10 minutos por la mañana.
          </p>

          <h3>En sopas y caldos</h3>
          <p>
            La avena en hojuelas finas espesa caldos de forma natural. Agrega 2 cucharadas a la sopa cremosa en lugar de maicena. No cambia el sabor, solo la textura.
          </p>

          <div className="blog-inline-cta">
            <p>Avena en la despensa, lista siempre actualizada. <em>Mise se encarga de eso.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CUÁNTO CONSUMIR */}
          <h2 id="cuanto-consumir">Cuánto consumir al día</h2>

          <p>
            La dosis de referencia para el efecto sobre el colesterol es <strong>3g de betaglucano al día</strong>. En la práctica:
          </p>

          <ul className="item-list">
            <li>3 cucharadas soperas de hojuelas gruesas (unos 40g)</li>
            <li>o 2 cucharadas soperas de salvado de avena (unos 30g)</li>
          </ul>

          <p>
            No hace falta dividirlo en varias comidas. Una porción al día, consumida con regularidad, produce los efectos documentados. El efecto sobre el colesterol empieza a notarse entre 4 y 8 semanas de consumo constante —no es un resultado de una semana.
          </p>
          <p>
            La avena tiene cerca de 380 kcal por 100g —una densidad calórica similar al arroz. No es un alimento "libre". Pero la saciedad que genera tiende a compensar: comes menos en las horas siguientes.
          </p>

          {/* DESPENSA */}
          <h2 id="despensa">La avena y la despensa</h2>

          <p>
            La avena en hojuelas es uno de esos productos que tiene sentido tener siempre en casa —junto con arroz, frijoles, aceite de oliva y pasta. Dura mucho tiempo, cuesta poco y resuelve varios tipos de comida, desde el desayuno hasta una cena ligera.
          </p>
          <p>
            El único problema es que solo notas que se acabó justo cuando la necesitas. Lunes por la mañana, sin avena para el overnight oats. La avena debería ser un producto fijo en la lista —de los que repones antes de que se acaben, no después.
          </p>
          <p>
            Para guardarla bien: la avena en hojuelas en un frasco cerrado, fuera del refrigerador, dura hasta 12 meses. Una vez abierta, verifica que no huela a rancio —señal de oxidación. Si quieres organizar los granos y cereales de casa de forma más sistemática, la{' '}
            <a href="/es/blog/quinoa-para-que-serve">guía de la quinoa</a>{' '}
            cubre un producto básico de la misma categoría.
          </p>
          <p>
            Junto con otros granos funcionales como la quinoa, la avena forma parte del stock básico de una cocina que funciona durante la semana. La diferencia es que la avena tiene más usos en el desayuno —y cuesta bastante menos por kilo.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la avena en hojuelas</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La avena en hojuelas engorda?</p>
              <p className="faq-a">
                No por sí sola. La avena tiene cerca de 380 kcal por 100g, pero el betaglucano genera mucha saciedad —te quedas satisfecho por más tiempo. Una porción regular no engorda más que otros carbohidratos. El problema suele ser lo que se le agrega encima: azúcar en exceso, granola industrial por arriba, mucha miel.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La avena en hojuelas tiene gluten?</p>
              <p className="faq-a">
                La avena en sí no tiene gluten. Pero suele procesarse en las mismas instalaciones que el trigo, lo que puede generar contaminación cruzada. Si tienes celiaquía o sensibilidad al gluten, busca avena con certificación "libre de gluten", que pasa por un procesamiento y empaque separados del trigo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Puedo comer avena en hojuelas todos los días?</p>
              <p className="faq-a">
                Sí. El consumo diario es seguro y es justo lo que hace efectivo al betaglucano. La dosis efectiva para el control del colesterol es 3g de betaglucano al día —unas 3 cucharadas soperas de hojuelas gruesas. No hace falta consumir más que eso. El efecto aparece con constancia a lo largo de varias semanas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La avena cruda o cocida tiene diferencia en los beneficios?</p>
              <p className="faq-a">
                El betaglucano funciona tanto crudo como cocido. En el overnight oats —avena hidratada cruda en el refrigerador— o en la avena cocida en la estufa, el efecto sobre la saciedad y el colesterol es comparable. La diferencia está en la textura y el tiempo de preparación, no en la eficacia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre avena en hojuelas finas y gruesas?</p>
              <p className="faq-a">
                Las hojuelas gruesas están menos procesadas y conservan mejor la estructura del betaglucano. Las finas tienen una textura más cremosa y se cocinan más rápido, pero con menos fibra soluble. Para el efecto sobre el colesterol y la saciedad, las gruesas son más efectivas. Para licuados y recetas cremosas, las finas funcionan mejor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La avena sirve para una dieta baja en carbohidratos?</p>
              <p className="faq-a">
                La avena tiene carbohidratos —no es un alimento bajo en carbohidratos. Pero su índice glucémico es bajo gracias al betaglucano: el azúcar se absorbe más lento, sin picos bruscos de insulina. Para una dieta cetogénica estricta, la avena no entra. Para dietas de control moderado de glucosa, se puede incluir en una porción medida (1 a 2 cucharadas).
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
                Creador de Mise. Tiene avena en hojuelas gruesas en la despensa desde hace dos años. La usó cada semana durante tres meses, luego pasó un mes sin comprar más y se quedó sin avena. Es exactamente ese tipo de cosa la que Mise existe para evitar.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Avena en la lista.<br />
              <em>Nunca más falta en la despensa.</em>
            </h2>
            <p>
              Con Mise, la avena en hojuelas se queda como producto fijo de la despensa. Cuando se acaba, aparece automáticamente en la lista de compras. Sin sorpresas el lunes por la mañana.
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
