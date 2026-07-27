import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Dieta carnívora: qué comer, menú de 7 días y riesgos',
  description: 'La dieta carnívora elimina todo alimento vegetal y deja solo carne, pescado y huevo. Qué puedes comer, qué queda fuera, un menú de 7 días y los riesgos que debes conocer.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/dieta-carnivora',
      en: 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora',
      es: 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/dieta-carnivora',
    },
  },
  openGraph: {
    title: 'Dieta carnívora: qué comer, menú de 7 días y riesgos',
    description: 'La dieta carnívora elimina todo alimento vegetal y deja solo carne, pescado y huevo. Qué puedes comer, qué queda fuera, un menú de 7 días y los riesgos que debes conocer.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora',
    images: [
      {
        url: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bistec jugoso a la parrilla con salsa oscura en un plato — dieta carnívora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dieta carnívora: qué comer, menú de 7 días y riesgos',
    description: 'La dieta carnívora elimina todo alimento vegetal y deja solo carne, pescado y huevo. Qué puedes comer, qué queda fuera, un menú de 7 días y los riesgos que debes conocer.',
    images: ['https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La dieta carnívora es segura a largo plazo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay suficientes estudios de largo plazo para responder esto con certeza. La dieta elimina la fibra y varios nutrientes que vienen principalmente de plantas — vitamina C, potasio y magnesio entre ellos — lo que genera preocupación real entre nutricionistas. Quien decide seguirla por meses necesita análisis de sangre periódicos y seguimiento médico, no solo guiarse por cómo se siente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en verse resultados con la dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de quienes reportan pérdida de peso empieza a notar cambios en las primeras 2 a 4 semanas, sobre todo por menor retención de líquidos y menos apetito. Cambios más consistentes en el peso y la composición corporal suelen aparecer después de 4 a 8 semanas de seguirla al pie de la letra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es obligatorio comer vísceras en la dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, pero la mayoría de quienes la mantienen a largo plazo terminan agregándolas. La carne muscular sola es baja en algunos nutrientes — vitamina C y cobre entre ellos — que el hígado y otras vísceras aportan en cantidades útiles. No es un requisito del primer día, más bien un ajuste una vez que lo básico ya está resuelto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede tomar café en la dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El café es de origen vegetal, así que queda fuera de la versión estricta. En la práctica, muchos lo mantienen, sobre todo al inicio — cortar cafeína y carbohidratos al mismo tiempo suele complicarse. Dónde trazas esa línea es decisión personal, no una regla fija.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La dieta carnívora puede subir el colesterol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un consumo alto de grasa saturada puede elevar el colesterol LDL en algunas personas. El efecto varía según cada organismo — algunos reportan mejores marcadores lipídicos, otros ven que empeoran. Los análisis periódicos no son opcionales. Quien ya tiene historial de colesterol alto debe consultar a un médico antes de empezar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer lácteos en la dieta carnívora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de la versión. El queso curado y la mantequilla tienen poca lactosa y son aceptados por la mayoría. La leche, la crema y el yogur tienen más lactosa y muchos practicantes los eliminan, ya sea por digestión o para mantener la dieta lo más estricta posible. No hay una regla única — varía según la tolerancia de cada quien.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dieta carnívora: qué comer, menú de 7 días y riesgos',
  description: 'La dieta carnívora elimina todo alimento vegetal y deja solo carne, pescado y huevo. Qué puedes comer, qué queda fuera, un menú de 7 días y los riesgos que debes conocer.',
  image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Dieta carnívora', item: 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora' },
  ],
}

export default function DietaCarnivoraEs() {
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
            <li><a href="/es">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/es/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Dieta carnívora</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">27 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Dieta carnívora: la guía sin vueltas de alimentos, menú y riesgos
          </h1>
          <p className="blog-desc">
            Una dieta que elimina todo lo que no sea de origen animal. Sin fruta, sin verduras, sin granos. Solo carne, huevo y algo de lácteos. Cómo funciona, qué puedes comer, qué queda fuera y qué dice la ciencia sobre los riesgos.
          </p>

          <div className="answer-box">
            <p>
              La <strong>dieta carnívora</strong> es un patrón alimenticio basado exclusivamente en alimentos de origen animal — carnes, pescados, huevo y lácteos bajos en lactosa.
              Todo alimento vegetal queda fuera: fruta, verduras, granos, legumbres, azúcar y aceites vegetales no entran.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bistec jugoso a la parrilla con salsa oscura en un plato — dieta carnívora"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Snapwire / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la dieta carnívora</a></li>
              <li><a href="#como-funciona">Cómo funciona en la práctica</a></li>
              <li><a href="#que-comer">Qué puedes comer</a></li>
              <li><a href="#que-queda-fuera">Qué queda fuera</a></li>
              <li><a href="#menu">Menú de 7 días</a></li>
              <li><a href="#beneficios">Beneficios reportados</a></li>
              <li><a href="#riesgos">Riesgos que debes conocer</a></li>
              <li><a href="#vale-la-pena">¿Vale la pena?</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUE ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bistec con hueso a la parrilla acompañado de verduras y salsa en plato rústico"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Malidate Van / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la dieta carnívora</h2>

          <p>
            La <strong>dieta carnívora</strong> es un patrón alimenticio que elimina todo alimento de origen vegetal. Quien la sigue come exclusivamente productos animales: res, pollo, cerdo, pescado, mariscos, huevo y algunos lácteos. Nada de fruta, nada de verduras, nada de granos ni legumbres.
          </p>
          <p>
            Es una versión más radical de una dieta baja en carbohidratos. El keto todavía deja espacio para hojas verdes y verduras bajas en carbohidratos — la dieta carnívora elimina la categoría entera. La premisa es que el cuerpo puede funcionar solo con proteína y grasa, y que buena parte de los problemas de salud modernos viene de compuestos presentes en las plantas.
          </p>
          <p>
            La popularidad de la dieta creció fuerte en los últimos años, impulsada sobre todo por creadores de contenido de fitness y salud en YouTube y podcasts, con una comunidad pequeña pero muy activa de practicantes que reportan resultados. No tiene respaldo de las guías nutricionales oficiales, y la mayoría de los nutricionistas no la recomienda como estrategia de largo plazo.
          </p>

          {/* COMO FUNCIONA */}
          <h2 id="como-funciona">Cómo funciona en la práctica</h2>

          <p>
            La mecánica es simple. Comes cuando tienes hambre, hasta quedar satisfecho, y solo consumes alimentos de origen animal. Sin contar calorías, sin controlar porciones, sin horarios obligatorios. La idea es que la proteína y la grasa animal regulan el apetito de forma natural, lo que lleva a comer menos sin ningún esfuerzo consciente.
          </p>
          <p>
            Durante el periodo de adaptación — normalmente las primeras 2 a 4 semanas — es común sentir cansancio, dolor de cabeza y cambios en la digestión. Esto pasa porque el cuerpo está cambiando de carbohidratos a grasa como su combustible principal, el mismo proceso que ocurre con la dieta cetogénica. Algunos le dicen "gripe carnívora", tomando el término prestado del keto.
          </p>
          <p>
            El agua no tiene límite: toma la cantidad que quieras. El agua con gas sin azúcar es aceptada por la mayoría de quienes siguen la dieta. El café y el té son técnicamente de origen vegetal — dónde cada quien traza esa línea varía: muchos mantienen el café, sobre todo al inicio, otros lo eliminan por completo.
          </p>

          {/* QUE COMER */}
          <h2 id="que-comer">Qué puedes comer en la dieta carnívora</h2>

          <p>
            La lista de alimentos permitidos es intencionalmente corta. Eso es parte del atractivo: no hay listas de excepciones que memorizar, ni etiquetas que revisar, ni índice glucémico que calcular. La única pregunta que importa es "¿esto viene de un animal?".
          </p>

          <h3>Carnes y aves</h3>
          <ul className="item-list">
            <li><strong>Res:</strong> ribeye, sirloin, carne molida, arrachera, falda, costilla</li>
            <li><strong>Cerdo:</strong> pierna, lomo, costillas, tocino (sin azúcar añadida)</li>
            <li><strong>Aves:</strong> pollo, pavo, pato — enteros o por piezas</li>
            <li><strong>Cordero y cabrito:</strong> se prefieren los cortes más grasosos</li>
          </ul>

          <h3>Pescados y mariscos</h3>
          <ul className="item-list">
            <li>Salmón, sardina, caballa, arenque — los pescados grasos tienen mejor perfil nutricional</li>
            <li>Atún, tilapia, bacalao, pez espada</li>
            <li>Camarón, calamar, pulpo, mejillón, ostra</li>
          </ul>

          <h3>Vísceras</h3>
          <p>
            Hígado, corazón, riñón, lengua, tuétano. Muchos practicantes de largo plazo las incluyen de forma regular por su alta densidad de nutrientes — el hígado de res, en particular, aporta cantidades significativas de vitamina B12, hierro, cobre y vitamina A.
          </p>

          <h3>Huevo y lácteos</h3>
          <ul className="item-list">
            <li>Huevo: sin límite de cantidad — uno de los alimentos más completos de la dieta</li>
            <li>Queso curado y mantequilla: aceptados por la mayoría, por su bajo contenido de lactosa</li>
            <li>Crema de leche y leche entera: algunos los mantienen, otros los eliminan</li>
            <li>Yogur y leche líquida: generalmente evitados por la lactosa</li>
          </ul>

          <h3>Grasas animales</h3>
          <p>
            Manteca de cerdo, sebo de res y mantequilla son las grasas de cocción preferidas. Los aceites vegetales — canola, girasol, maíz — quedan completamente fuera.
          </p>

          {/* QUE QUEDA FUERA */}
          <h2 id="que-queda-fuera">Qué queda fuera</h2>

          <p>
            La lista de lo que se elimina es más larga de lo que parece a primera vista. Incluye alimentos que la mayoría de las dietas consideran saludables.
          </p>
          <ul className="item-list">
            <li>Fruta — toda, sin excepción, incluso las de "bajo azúcar" como el limón</li>
            <li>Verduras — hojas verdes, raíces, tubérculos, jitomate, cebolla, ajo</li>
            <li>Granos — arroz, avena, trigo, maíz, cebada</li>
            <li>Legumbres — frijol, lenteja, garbanzo, soya</li>
            <li>Frutos secos — almendra, nuez, cacahuate</li>
            <li>Aceites vegetales — oliva, canola, girasol, coco</li>
            <li>Azúcar y endulzantes — miel, jarabe, endulzantes artificiales</li>
            <li>Bebidas — jugos, refrescos, bebidas de origen vegetal</li>
            <li>Condimentos con ingredientes vegetales — cátsup, mostaza, salsas industrializadas</li>
          </ul>
          <p>
            La lista de compras queda mucho más corta. Carne, huevo, mantequilla, algunos quesos. Fácil de recordar, difícil de explicarle al resto de la casa.
          </p>

          {/* MENU */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Filete de carne rebanado sobre tabla de madera — menú de la dieta carnívora"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Terje Sollie / Pexels</p>
          </div>

          <h2 id="menu" className="img-above">Menú de 7 días</h2>

          <p>
            Un ejemplo de menú semanal para quien está empezando. Prioriza los cortes más grasosos, que sacian más y dan más energía que los cortes magros. Lo ideal es armar tu{' '}
            <a href="/es/funcionalidades/cardapio-semanal">menú semanal</a>{' '}
            con anticipación para simplificar las compras.
          </p>

          <ul className="item-list">
            <li><strong>Lunes:</strong> Huevo revuelto con tocino (mañana) · Sirloin a la parrilla (comida) · Salmón al horno (cena)</li>
            <li><strong>Martes:</strong> Omelet de queso (mañana) · Costilla de res (comida) · Muslos de pollo al horno (cena)</li>
            <li><strong>Miércoles:</strong> Huevo cocido (mañana) · Ribeye con mantequilla (comida) · Sardina con huevo (cena)</li>
            <li><strong>Jueves:</strong> Huevo poché con tocino (mañana) · Hígado de res a la parrilla (comida) · Sirloin a la parrilla (cena)</li>
            <li><strong>Viernes:</strong> Omelet (mañana) · Pollo entero al horno (comida) · Carne molida con queso (cena)</li>
            <li><strong>Sábado:</strong> Huevo con tocino (mañana) · Pierna de cerdo (comida) · Sirloin o costilla (cena)</li>
            <li><strong>Domingo:</strong> Omelet de queso y jamón (mañana) · Pescado al horno (comida) · Ribeye con mantequilla (cena)</li>
          </ul>

          <p>
            No hay colación obligatoria. Si te da hambre entre comidas, huevo cocido, rebanadas de queso curado o carne fría resuelven. La mayoría reporta que las ganas de picar entre comidas bajan en las primeras semanas.
          </p>

          <div className="blog-inline-cta">
            <p>Arma el menú antes de ir al súper. <em>Mise lo organiza todo.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Beneficios reportados</h2>

          <p>
            Los beneficios de abajo vienen sobre todo de relatos de practicantes y estudios pequeños — la dieta carnívora tiene muy pocos ensayos clínicos de largo plazo. Tómalo como evidencia preliminar, no como conclusión definitiva.
          </p>

          <h3>Control del apetito y pérdida de peso</h3>
          <p>
            La proteína es el macronutriente que más sacia. La grasa también tiene alta saciedad. La combinación hace que muchas personas coman menos calorías en total sin controlar porciones — el apetito simplemente baja. La pérdida de peso llega como consecuencia, no como meta directa.
          </p>

          <h3>Estabilidad en el azúcar en sangre</h3>
          <p>
            Sin carbohidratos, no hay picos de glucosa. Personas con resistencia a la insulina o diabetes tipo 2 reportan mejoras en sus niveles de azúcar en sangre. Esto no reemplaza el seguimiento médico ni el ajuste de medicamentos, pero el mecanismo tiene sentido fisiológicamente.
          </p>

          <h3>Menos decisiones sobre comida</h3>
          <p>
            ¿Qué cocinar hoy? Carne. ¿Cuál? Cualquiera. Esa reducción de decisiones sobre qué comer aparece todo el tiempo en los relatos de quienes la siguen. No es un beneficio clínico, pero es real para quien está cansado de decidir qué comer cada semana. La{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            termina con menos de 10 productos fijos.
          </p>

          {/* RIESGOS */}
          <h2 id="riesgos">Riesgos que debes conocer</h2>

          <p>
            Aquí la conversación se pone más seria. La dieta carnívora elimina grupos de alimentos enteros con beneficios bien documentados para la salud — y eso tiene consecuencias.
          </p>

          <h3>Fibra y salud intestinal</h3>
          <p>
            La dieta no tiene fibra alimentaria. La fibra alimenta a las bacterias buenas del intestino y regula el tránsito. Sin ella, el estreñimiento es común en las primeras semanas, y el efecto a largo plazo sobre la microbiota intestinal todavía no se conoce bien. Muchos practicantes reportan que esto se normaliza después de un tiempo, pero la evidencia científica sobre el impacto en el microbioma es genuinamente preocupante.
          </p>

          <h3>Vitamina C y micronutrientes</h3>
          <p>
            La vitamina C está principalmente en la fruta y la verdura. La carne cruda tiene cantidades pequeñas, pero cocinarla destruye buena parte. Una deficiencia grave de vitamina C provoca escorbuto — una enfermedad que suena medieval pero existe de verdad. Quienes cocinan bien la carne y evitan las vísceras corren más riesgo. Los análisis periódicos no son opcionales.
          </p>

          <h3>Grasa saturada y colesterol</h3>
          <p>
            Un consumo alto de grasa saturada puede subir el LDL en algunas personas. Los efectos varían — algunos practicantes mejoran sus marcadores lipídicos, otros los empeoran. La relación entre grasa saturada y enfermedad cardiovascular es un debate activo en la ciencia nutricional, sin consenso definitivo, pero el riesgo individual no se puede ignorar sin análisis de por medio.
          </p>

          <h3>Sostenibilidad a largo plazo</h3>
          <p>
            Comer fuera de casa se complica. Los eventos sociales se vuelven un problema. La dieta exige un compromiso constante y puede generar aislamiento alimenticio. Además, una{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            exclusivamente carnívora sale más cara que el promedio — los cortes de buena calidad no son baratos. La compra mensual de una casa de dos adultos con esta dieta puede superar fácilmente lo que gastaría una casa promedio, solo en proteína animal.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">¿Vale la pena?</h2>

          <p>Depende de qué estés tratando de resolver.</p>
          <p>
            Si tienes una condición específica — resistencia a la insulina, enfermedad inflamatoria intestinal, sensibilidad a compuestos vegetales — y estás considerando la dieta con seguimiento médico, tiene sentido explorarla. Hay relatos consistentes de mejora en condiciones autoinmunes e inflamatorias, aunque la evidencia todavía es preliminar.
          </p>
          <p>
            Si el objetivo es bajar de peso sin contar calorías, existen formas menos restrictivas de lograrlo — como el low carb o una lista de compras saludable bien armada — con menos riesgos y más sostenibilidad en el día a día. La dieta carnívora funciona para algunas personas porque elimina decisiones y baja el apetito. Pero ese mismo efecto se puede lograr con una dieta bastante menos extrema.
          </p>
          <p>
            Lo que la dieta carnívora enseña de válido: proteína que sacia, menos ultraprocesados, menos azúcar, cortes enteros en vez de productos empaquetados. Esos principios funcionan dentro de casi cualquier patrón alimenticio, sin necesidad de eliminar todo lo que crece de la tierra.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre la dieta carnívora</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿La dieta carnívora es segura a largo plazo?</p>
              <p className="faq-a">
                No hay suficientes estudios de largo plazo para responder esto con certeza. Elimina la fibra y varios nutrientes que vienen sobre todo de plantas — vitamina C y magnesio entre ellos. Quien la sigue por mucho tiempo necesita análisis de sangre periódicos y seguimiento médico.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuánto tarda en verse resultados con la dieta carnívora?</p>
              <p className="faq-a">
                Los primeros cambios aparecen en las primeras 2 a 4 semanas — sobre todo menor retención de líquidos y menos apetito. Resultados más consistentes suelen aparecer después de 4 a 8 semanas siguiéndola al pie de la letra.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Es obligatorio comer vísceras en la dieta carnívora?</p>
              <p className="faq-a">
                No, pero la mayoría de quienes la mantienen a largo plazo las terminan agregando. La carne muscular sola es baja en algunos nutrientes — vitamina C y cobre entre ellos — que el hígado y otras vísceras sí aportan. Es un ajuste, no un requisito del primer día.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede tomar café en la dieta carnívora?</p>
              <p className="faq-a">
                El café es de origen vegetal y queda fuera de la versión estricta. Muchos lo mantienen de todas formas, sobre todo al inicio. Dónde trazas esa línea depende de qué tan estricto quieras ser.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La dieta carnívora puede subir el colesterol?</p>
              <p className="faq-a">
                Un consumo alto de grasa saturada puede elevar el LDL en algunas personas. Los efectos varían de una persona a otra. Los análisis periódicos no son opcionales — quien tiene historial de colesterol alto debe consultar a un médico antes de empezar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer lácteos en la dieta carnívora?</p>
              <p className="faq-a">
                Depende de la versión. El queso curado y la mantequilla tienen poca lactosa y la mayoría los tolera. La leche, la crema y el yogur tienen más lactosa y muchos practicantes los eliminan, ya sea por digestión o para mantener la dieta más estricta.
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
                Creador de Mise. Probó la dieta carnívora tres días, al cuarto extrañaba el brócoli. No la recomienda para una semana con juntas importantes.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Decide qué comprar.<br />
              <em>Mise se acuerda por ti.</em>
            </h2>
            <p>
              Conecta menú, despensa y lista de compras en un solo lugar.
              Dieta carnívora, low carb o la cena de siempre — lo que sea que cocines, la lista ya está lista.
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
          <a href="/es" className="brand">
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
