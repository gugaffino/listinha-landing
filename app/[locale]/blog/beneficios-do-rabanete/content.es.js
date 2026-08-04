import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Beneficios del rábano: nutrición, usos y si vale la pena comprarlo',
  description: 'El rábano tiene vitamina C, fibra y apenas 16 calorías por 100g. Conoce sus beneficios, su valor nutricional y cómo usarlo de verdad en la cocina sin desperdiciarlo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
    },
  },
  openGraph: {
    title: 'Beneficios del rábano: nutrición, usos y si vale la pena comprarlo',
    description: 'El rábano tiene vitamina C, fibra y apenas 16 calorías por 100g. Conoce sus beneficios, su valor nutricional y cómo usarlo de verdad en la cocina sin desperdiciarlo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete',
    images: [
      {
        url: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rábanos rojos frescos junto a zanahorias sobre una superficie de madera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios del rábano: nutrición, usos y si vale la pena comprarlo',
    description: 'El rábano tiene vitamina C, fibra y apenas 16 calorías por 100g. Conoce sus beneficios, su valor nutricional y cómo usarlo de verdad en la cocina sin desperdiciarlo.',
    images: ['https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántas calorías tiene el rábano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El rábano crudo tiene aproximadamente 16 calorías por 100g — una de las verduras más bajas en calorías que vas a encontrar en la verdulería. Casi todo es agua: cerca del 95% de su composición es líquido. Por eso llena bien sin pesar en las calorías del día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer rábano crudo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Crudo es la forma más común y la que mejor conserva los nutrientes, sobre todo la vitamina C. Cortado en láminas finas para ensaladas o en bastones con sal, el picor se vuelve más suave. Si el picor te incomoda, dejarlo en agua fría 10 minutos antes de servir ayuda a reducirlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El rábano ayuda a bajar de peso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El rábano no adelgaza por sí solo, pero es un buen aliado si estás controlando calorías. Tiene 16 calorías por 100g, fibra que ayuda a sentirte satisfecho y un alto contenido de agua. Reemplaza bien a ingredientes más calóricos en ensaladas y snacks sin que la comida pierda sabor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El rábano es bueno para la digestión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El rábano tiene fibra que ayuda al tránsito intestinal y estimula la producción de bilis, lo que facilita la digestión de las grasas. Compuestos como los glucosinolatos también tienen un efecto benéfico sobre la flora intestinal, según estudios con vegetales crucíferos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conserva el rábano después de comprarlo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quita las hojas antes de guardarlo — le quitan humedad a la raíz y hacen que se marchite más rápido. Guarda la raíz en el refrigerador, envuelta en papel toalla ligeramente húmedo dentro de una bolsa. Dura hasta una semana. Las hojas se pueden saltear como espinaca en vez de tirarlas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre rábano y nabo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los dos son verduras crucíferas de raíz, pero se comportan muy distinto. El rábano es más pequeño, con cáscara roja intensa y sabor picante fuerte — comerlo crudo es su uso principal. El nabo es más grande, de cáscara blanca o morada, sabor más suave y algo dulce cuando está cocido. En las recetas no son intercambiables.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El rábano tiene vitamina C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Una porción de 100g de rábano crudo aporta cerca de 15mg de vitamina C, alrededor del 17% del valor diario recomendado. Es una fuente razonable — no se compara con una naranja o un pimiento, pero suma si lo comes crudo con regularidad.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beneficios del rábano: nutrición, usos y si vale la pena comprarlo',
  description: 'El rábano tiene vitamina C, fibra y apenas 16 calorías por 100g. Conoce sus beneficios, su valor nutricional y cómo usarlo de verdad en la cocina sin desperdiciarlo.',
  image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Beneficios del rábano', item: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete' },
  ],
}

export default function BeneficiosDelRabanoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Beneficios del rábano</li>
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
            Rábano: la verdura que pasas de largo en la tienda y no deberías
          </h1>
          <p className="blog-desc">
            Barato, fácil de conseguir, casi sin calorías y con propiedades que la mayoría de las verduras más populares no tiene. El rábano lleva años cargando con la fama de simple decoración de plato, y no se la merece. Qué es, qué tiene por dentro y cómo usarlo de verdad en la cocina.
          </p>

          <div className="answer-box">
            <p>
              <strong>El rábano</strong> es una verdura crucífera con cerca de <strong>16 calorías por 100g</strong>.
              Rico en vitamina C, fibra e isotiocianatos — compuestos con acción antioxidante y antiinflamatoria —
              es barato, fácil de encontrar en cualquier verdulería y versátil, crudo o apenas cocido.
              El picor que espanta a algunos es justo la señal de que esos compuestos benéficos están presentes.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Rábanos rojos frescos junto a zanahorias sobre una superficie de madera"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Wendy Wei / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es el rábano</a></li>
              <li><a href="#valor-nutricional">Valor nutricional</a></li>
              <li><a href="#beneficios">Beneficios del rábano para la salud</a></li>
              <li><a href="#como-usar">Cómo usar el rábano en la cocina</a></li>
              <li><a href="#como-elegir">Cómo elegirlo y conservarlo</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerlo en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <h2 id="que-es">Qué es el rábano</h2>

          <p>
            El rábano (<em>Raphanus sativus</em>) es una verdura de la familia de las crucíferas — pariente directa del kale, el brócoli y la mostaza. Se reconoce por su cáscara roja intensa y su interior blanco firme. El sabor es picante y fresco en crudo, y bastante más suave si se cocina un momento.
          </p>
          <p>
            El picor viene de los isotiocianatos, compuestos que se forman al cortar o masticar la verdura. Es el mismo mecanismo de la mostaza y el wasabi — no es casualidad que compartan ese mismo olor característico que sube por la nariz. Esos compuestos son parte de lo que hace al rábano nutricionalmente interesante, no un defecto que haya que disimular.
          </p>
          <p>
            El rábano rojo redondo es el más común en las verdulerías. Existen otras variedades — el daikon (blanco y alargado, muy usado en la cocina japonesa), el negro, el sandía — pero la versión roja es la que más se consigue. Los beneficios que siguen aplican a todas las variedades, con pequeñas diferencias de intensidad.
          </p>

          {/* VALOR NUTRICIONAL */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rábanos morados y rojos en un bowl de cerámica — primer plano de verduras frescas"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Rarnie McCudden / Pexels</p>
          </div>

          <h2 id="valor-nutricional" className="img-above">Valor nutricional del rábano</h2>

          <p>
            En 100g de rábano crudo — el equivalente a cinco o seis rábanos medianos — tienes:
          </p>

          <ul className="item-list">
            <li><strong>16 calorías</strong> — casi no cuentan</li>
            <li><strong>3,4g de carbohidratos</strong> — 1,6g de los cuales son fibra</li>
            <li><strong>0,7g de proteína</strong></li>
            <li><strong>Vitamina C: ~15mg</strong> (17% del valor diario recomendado)</li>
            <li><strong>Potasio: ~233mg</strong> — bueno para la presión arterial</li>
            <li><strong>Folato</strong> — importante para el metabolismo celular</li>
            <li><strong>Agua: ~95%</strong> de la composición total</li>
          </ul>

          <p>
            El dato que más importa es ese 95% de agua. El rábano hidrata, sacia y prácticamente no pesa en las calorías del día. Tiene una de las mejores relaciones volumen-caloría que vas a encontrar en la verdulería — mejor que el pepino, mejor que el calabacín.
          </p>
          <p>
            Los micronutrientes no son espectaculares por separado, pero la combinación de vitamina C, potasio y los compuestos propios de las crucíferas es lo que diferencia al rábano de una verdura cualquiera. Si llevas la cuenta de tus{' '}
            <a href="/es/blog/alimentos-ricos-em-magnesio">micronutrientes</a>, el rábano suma su parte de forma constante.
          </p>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios del rábano para la salud</h2>

          <p>
            Los beneficios del rábano no vienen de un solo compuesto milagroso. Vienen de la combinación de fibra, vitamina C, potasio y los glucosinolatos característicos de las crucíferas. Cada uno actúa de forma distinta.
          </p>

          <h3>Digestión y tránsito intestinal</h3>
          <p>
            La fibra del rábano estimula el movimiento intestinal y le da volumen a las heces. Además, contiene compuestos que estimulan la producción y el flujo de bilis — el líquido digestivo que descompone la grasa. Si tienes digestión lenta o sientes pesadez después de comidas más grasosas, agregar rábano crudo como entrada o acompañamiento puede ayudar.
          </p>

          <h3>Efecto diurético suave</h3>
          <p>
            El potasio ayuda a equilibrar el sodio en el organismo y favorece la eliminación de líquidos por la orina. No es un diurético fuerte como un medicamento, pero para quien come mucha sal habitualmente, el rábano contribuye a ese equilibrio. El alto contenido de agua amplifica el efecto.
          </p>

          <h3>Antioxidante y antiinflamatorio</h3>
          <p>
            La vitamina C y las antocianinas — los pigmentos que le dan el color rojo a la cáscara — tienen acción antioxidante comprobada. Los isotiocianatos, los mismos responsables del picor, tienen propiedades antiinflamatorias estudiadas especialmente en verduras crucíferas. Mientras más intenso el rojo de la cáscara, más antocianinas contiene.
          </p>

          <h3>Control de peso</h3>
          <p>
            16 calorías por 100g, con fibra y buen volumen. El rábano ocupa espacio en el estómago con prácticamente ningún impacto calórico. En ensaladas, reemplaza ingredientes más calóricos — crutones, queso rallado, exceso de garbanzo — sin que la comida pierda textura ni sabor. Es el tipo de cambio que funciona sin esfuerzo.
          </p>

          <h3>Salud cardiovascular</h3>
          <p>
            El potasio relaja las paredes de los vasos sanguíneos y contribuye al control de la presión arterial. Las antocianinas de la cáscara se asocian con menor riesgo cardiovascular en estudios con verduras ricas en esos pigmentos. El efecto existe, pero depende de un consumo regular, no de una semana buena.
          </p>

          <h3>Salud del hígado</h3>
          <p>
            Este es el beneficio menos conocido. Compuestos del rábano —especialmente el isotiocianato sulforafano— muestran acción protectora sobre el hígado en estudios con verduras crucíferas. El mecanismo implica la estimulación de enzimas de desintoxicación hepática. La investigación específica sobre el rábano todavía es reciente, pero los resultados en toda la familia de las crucíferas son consistentes.
          </p>

          {/* CÓMO USAR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8805469/pexels-photo-8805469.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mujer eligiendo rábanos frescos en la sección de verduras del mercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mike Jones / Pexels</p>
          </div>

          <h2 id="como-usar" className="img-above">Cómo usar el rábano en la cocina</h2>

          <p>
            La mayoría de los artículos sobre rábano se quedan en los beneficios. El problema es que sin saber qué hacer con él, la verdura termina marchitándose en el cajón del refrigerador — lo que anula cualquier beneficio. Esto es lo que realmente funciona en la cocina de todos los días.
          </p>

          <h3>Crudo en ensaladas</h3>
          <p>
            Cortarlo fino es el secreto. El rábano grueso queda duro y el picor domina todo. Cortado en láminas finas —idealmente con una mandolina o un cuchillo afilado— queda crocante, apenas picante, y combina bien con cualquier base verde. Se lleva bien con zanahoria rallada, pepino y cilantro o perejil.
          </p>

          <h3>Como botana con sal</h3>
          <p>
            Cortado en bastones o rodajas gruesas, con un poco de sal gruesa y limón. Es de esas cosas que llegan a la mesa mientras la cena todavía se está cocinando. Funciona mejor de lo que parece, sobre todo bien frío. Quien lo prueba sin saber qué es raramente adivina que es rábano.
          </p>

          <h3>Ligeramente salteado</h3>
          <p>
            Dos o tres minutos a fuego alto con aceite de oliva y ajo. El picor casi desaparece, el sabor queda suave y algo dulce, y la textura conserva el crocante. Sirve como acompañamiento en lugar de calabacín o ejotes. No lo cocines más de eso — el rábano blando no tiene ninguna gracia.
          </p>

          <h3>Encurtido rápido</h3>
          <p>
            La versión más simple: corta en rodajas, coloca en un frasco, cubre con vinagre de arroz, una cucharada de azúcar y una pizca de sal. Deja en el refrigerador media hora. El resultado es un encurtido ligero que dura hasta cinco días y va bien en sándwiches, tacos, bowls de arroz o junto a cualquier carne a la parrilla. No necesita proceso de esterilización.
          </p>

          <h3>Como toque final en platos calientes</h3>
          <p>
            Este uso sorprende: rábano en láminas finas colocado sobre un plato caliente —pollo a la parrilla, lentejas, sopa— se marchita apenas con el calor sin perder la textura. Suma frescura, color y un contraste que hace que el plato se vea más elaborado de lo que en realidad costó hacerlo.
          </p>

          <div className="blog-inline-cta">
            <p>Compraste rábano. Que no desaparezca en el refrigerador. <em>Mise se acuerda.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CÓMO ELEGIR */}
          <h2 id="como-elegir">Cómo elegir y conservar el rábano</h2>

          <p>
            El rábano marchito en el cajón del refrigerador es un clásico. Llega firme de la tienda, entra al refrigerador sin ningún cuidado, y para el jueves ya está blando. Tiene solución.
          </p>

          <h3>Cómo elegirlo en la tienda</h3>
          <p>
            Presiónalo con el pulgar: tiene que estar firme, sin ceder. La cáscara debe verse lisa, sin grietas, y el rojo debe ser intenso y parejo. Los rábanos con manchas oscuras o partes blandas ya pasaron su punto. Si viene con las hojas, deben verse verdes y firmes — hojas marchitas indican que la verdura lleva tiempo perdiendo humedad.
          </p>

          <h3>Cómo guardarlo en casa</h3>
          <p>
            La regla más importante: quita las hojas antes de guardarlo. Las hojas le quitan humedad a la raíz y aceleran que se marchite. Con las hojas fuera, envuelve los rábanos en papel toalla ligeramente húmedo y colócalos en una bolsa cerrada en el cajón de verduras del refrigerador. Así duran hasta una semana.
          </p>
          <p>
            Las hojas no tienen que ir a la basura. Salteadas con aceite de oliva y ajo, saben bastante parecido a la espinaca — sabor apenas picante, textura suave. Van bien con huevo revuelto o como base de una frittata. Si estás organizando la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            para no desperdiciar, ese es justo el tipo de detalle que hace diferencia.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena ponerlo en la lista</h2>

          <p>Depende de lo que ya sueles comer.</p>
          <p>
            Si ya tienes el hábito de comprar zanahoria, pepino o calabacín para la semana, el rábano entra en la misma lógica — verdura cruda, fácil, no necesita cocinarse. El perfil nutricional es bueno, el precio es bajo y se consigue en cualquier verdulería. No es un básico de{' '}
            despensa como la cebolla o el ajo — pero encaja bien en una compra semanal si ya tienes el hábito de comer verduras crudas.
          </p>
          <p>
            Si no sabes qué vas a hacer con él, no lo compres. Una verdura que no usas es desperdicio — y el rábano marchito ya no tiene remedio. El caso es distinto si ya sabes que vas a hacer una ensalada el miércoles, una botana el fin de semana, o ese encurtido rápido que mencioné arriba.
          </p>
          <p>
            El mayor obstáculo es el picor. Espanta a quien no está acostumbrado. Pero cortarlo fino, dejarlo diez minutos en agua fría, o cocinarlo apenas resuelve el problema. Después de ajustar la preparación, el rábano se vuelve un ingrediente sin drama — barato, versátil y que se echa a perder rápido si no planeas su uso. Igual que cualquier verdura fresca que vale la pena comprar.
          </p>
          <p>
            Si estás armando un{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            y quieres variar las verduras sin gastar más, el rábano es una buena opción. Entra en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            junto con lo que ya compras, sin necesitar una sección aparte.
          </p>
          <p>
            El rábano es la verdura que todo el mundo pasa de largo. Sin ninguna razón válida.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el rábano</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuántas calorías tiene el rábano?</p>
              <p className="faq-a">
                Aproximadamente 16 calorías por 100g — una de las verduras más bajas en calorías de la verdulería. Su composición es casi toda agua (cerca del 95%), lo que explica el volumen con un impacto calórico mínimo.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer rábano crudo?</p>
              <p className="faq-a">
                Sí, y es la forma más común. Crudo conserva mejor la vitamina C y los isotiocianatos. Cortado fino en ensaladas o en bastones con sal, el picor queda más equilibrado. Para reducirlo aún más, déjalo en agua fría 10 minutos antes de servir.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El rábano ayuda a bajar de peso?</p>
              <p className="faq-a">
                No adelgaza por sí solo, pero ayuda: 16 calorías por 100g, fibra que sacia y alto contenido de agua que ocupa espacio en el estómago sin sumar calorías. Un buen reemplazo en ensaladas y botanas en lugar de ingredientes más calóricos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El rábano es bueno para la digestión?</p>
              <p className="faq-a">
                Sí. La fibra regula el tránsito intestinal y el rábano estimula la producción de bilis, lo que facilita la digestión de las grasas. Los glucosinolatos también tienen un efecto benéfico sobre la flora intestinal, según estudios con verduras de la familia de las crucíferas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se conserva el rábano después de comprarlo?</p>
              <p className="faq-a">
                Quita las hojas antes de guardarlo — hacen que la raíz se marchite más rápido. Envuélvelo en papel toalla húmedo, colócalo en una bolsa cerrada y guárdalo en el cajón de verduras del refrigerador. Dura hasta una semana. Las hojas se pueden saltear como espinaca.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre rábano y nabo?</p>
              <p className="faq-a">
                Los dos son verduras crucíferas de raíz, pero son bastante distintas en la práctica. El rábano es más pequeño, con cáscara roja intensa y sabor picante fuerte — comerlo crudo es su uso principal. El nabo es más grande, de cáscara blanca o morada, sabor más suave y algo dulce cuando está cocido. No son intercambiables en las recetas.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El rábano tiene vitamina C?</p>
              <p className="faq-a">
                Sí. 100g de rábano crudo aportan cerca de 15mg de vitamina C, alrededor del 17% del valor diario recomendado. No es una fuente concentrada como la naranja o el pimiento, pero suma para quien come verduras crudas con regularidad.
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
                Creador de Mise. Compra rábano todas las semanas porque se ve saludable. Lo usa en la ensalada del martes y olvida el resto en el refrigerador hasta el viernes. Trabajo en progreso.
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
              El rábano entra en la lista y de verdad llega al plato — no a la basura el viernes.
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
