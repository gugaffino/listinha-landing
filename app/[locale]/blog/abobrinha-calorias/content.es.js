import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Calabacín: calorías, tabla nutricional y beneficios',
  description: 'El calabacín tiene unas 17 calorías por 100g, casi nada de carbohidratos y sirve para casi cualquier receta. Tabla nutricional completa, tipos y cómo guardarlo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/abobrinha-calorias',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/abobrinha-calorias',
      en: 'https://www.miseemcasa.com.br/en/blog/abobrinha-calorias',
      es: 'https://www.miseemcasa.com.br/es/blog/abobrinha-calorias',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/abobrinha-calorias',
    },
  },
  openGraph: {
    title: 'Calabacín: calorías, tabla nutricional y beneficios',
    description: 'El calabacín tiene unas 17 calorías por 100g, casi nada de carbohidratos y sirve para casi cualquier receta. Tabla nutricional completa, tipos y cómo guardarlo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/abobrinha-calorias',
    images: [
      {
        url: 'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Calabacín verde creciendo en la planta con flores amarillas en el huerto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calabacín: calorías, tabla nutricional y beneficios',
    description: 'El calabacín tiene unas 17 calorías por 100g, casi nada de carbohidratos y sirve para casi cualquier receta. Tabla nutricional completa, tipos y cómo guardarlo.',
    images: ['https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántas calorías tiene un calabacín entero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un calabacín mediano (unos 200g) tiene aproximadamente 34 calorías en crudo. Uno pequeño (100g) tiene alrededor de 17 calorías. El valor varía un poco según la variedad, pero casi todos quedan entre 15 y 20 kcal por 100g.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El calabacín es carbohidrato o proteína?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ninguno de forma significativa. Por 100g, el calabacín tiene cerca de 3g de carbohidratos y 1,2g de proteína. Está compuesto principalmente de agua (alrededor del 95%). Por eso es una verdura habitual en dietas bajas en carbohidratos y keto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El calabacín engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con 17 kcal por 100g, es muy poco probable. Lo que suma calorías al plato es lo que le agregas: aceite, mantequilla, queso. El calabacín en sí tiene un impacto calórico bajísimo y es más probable que ayude a controlar el peso que lo contrario.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer calabacín crudo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Crudo tiene una textura crujiente y un sabor suave. Va bien en ensaladas cortado en láminas finas o convertido en fideos con espiralizador. Cocinarlo reduce un poco la vitamina C, pero no cambia mucho el resto del perfil nutricional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre calabacín y calabacita amarilla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El calabacín verde es alargado, de piel verde oscura y sabor neutro. La calabacita amarilla tiene la misma forma pero piel amarilla y un sabor un poco más dulce. Nutricionalmente son casi iguales: elige según la receta o lo que encuentres más fresco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda el calabacín en el refrigerador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entero, en el cajón de verduras, dura hasta 7 días. Cortado, guárdalo en un recipiente cerrado y úsalo dentro de 3 días. No hace falta lavarlo antes de guardarlo, solo lávalo justo antes de cocinarlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El calabacín tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El calabacín es naturalmente libre de gluten y puede comerse sin restricciones por personas con enfermedad celíaca o sensibilidad al gluten.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Calabacín: calorías, tabla nutricional y beneficios',
  description: 'El calabacín tiene unas 17 calorías por 100g, casi nada de carbohidratos y sirve para casi cualquier receta. Tabla nutricional completa, tipos y cómo guardarlo.',
  image: 'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/abobrinha-calorias',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Calabacín: calorías, tabla nutricional y beneficios', item: 'https://www.miseemcasa.com.br/es/blog/abobrinha-calorias' },
  ],
}

export default function CalabacinCaloriasEs() {
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
            <li className="breadcrumb-current" aria-current="page">Calabacín: calorías y valor nutricional</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Calabacín: calorías, tabla nutricional completa y por qué vale la pena
          </h1>
          <p className="blog-desc">
            17 calorías por 100g, casi nada de carbohidratos y una versatilidad que pocas verduras igualan. Todo lo que necesitas saber antes de sumarlo a la lista.
          </p>

          <div className="answer-box">
            <p>
              <strong>Calorías del calabacín:</strong> el calabacín crudo tiene alrededor de 17 calorías por 100g, según la base de datos del USDA (FoodData Central). Un calabacín mediano (200g) tiene aproximadamente 34 calorías, 6g de carbohidratos y 2g de fibra. El valor nutricional cambia poco al cocinarlo — lo que cambia es lo que le agregas durante la preparación.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Calabacín verde creciendo en la planta con flores amarillas en el huerto"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Karola G / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#calorias">Cuántas calorías tiene el calabacín</a></li>
              <li><a href="#tabla-nutricional">Tabla nutricional</a></li>
              <li><a href="#beneficios">Beneficios del calabacín</a></li>
              <li><a href="#tipos">Tipos de calabacín</a></li>
              <li><a href="#como-elegir">Cómo elegirlo en la tienda</a></li>
              <li><a href="#como-guardar">Cómo guardarlo en casa</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <p>
            El calabacín tiene 17 calorías por cada 100 gramos. Eso lo pone entre las verduras más ligeras que puedes comprar, al mismo nivel que el <a href="/es/blog/beneficios-do-pepino">pepino</a> y la lechuga. Lo interesante no es solo la caloría baja: es la combinación de agua, fibra y vitaminas lo que hace que valga la pena tenerlo en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            toda la semana.
          </p>
          <p>
            Es barato, se cocina rápido y entra en casi cualquier receta. Salteado, a la parrilla, al horno, crudo en ensalada o convertido en fideos. Es de esas verduras que rinden más de lo que parece.
          </p>

          <p>
            <em>Nota sobre el nombre:</em> este artículo usa "calabacín" (el término más reconocido en España, Colombia y buena parte de Latinoamérica), pero también lo vas a encontrar como <strong>calabacita</strong> en México y Centroamérica, y como <strong>zapallo italiano</strong> en Chile y Perú. Es la misma verdura en todos los casos.
          </p>

          <h2 id="calorias">Cuántas calorías tiene el calabacín</h2>

          <p>
            El calabacín crudo tiene <strong>alrededor de 17 kcal por 100g</strong>, según{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>.
            Cocido, el valor sube muy poco — cerca de 18 kcal por 100g — porque absorbe algo de agua durante la cocción en lugar de perder volumen.
          </p>
          <p>
            Un calabacín mediano pesa unos 200g. Crudo, eso equivale a unas 34 calorías. Una porción de 150g salteada con ajo y sal queda alrededor de 27 kcal.
          </p>
          <p>
            Lo que realmente cambia la cuenta calórica es lo que le agregas:
          </p>

          <ul className="item-list">
            <li>Calabacín crudo (100g): ~17 kcal</li>
            <li>Calabacín cocido (100g): ~18 kcal</li>
            <li>Salteado con 1 cucharada de aceite de oliva (100g + 5ml de aceite): ~57 kcal</li>
            <li>Gratinado con mozzarella (100g + 20g de queso): ~95 kcal</li>
          </ul>

          <p>
            El calabacín en sí no engorda. Lo que puede pesar en la cuenta calórica es el método de preparación, y eso se controla fácilmente.
          </p>

          <h2 id="tabla-nutricional">Tabla nutricional del calabacín</h2>

          <p>
            Valores por 100g de calabacín crudo, con cáscara, según datos del USDA:
          </p>

          <ul className="item-list">
            <li><strong>Energía:</strong> 17 kcal</li>
            <li><strong>Carbohidratos:</strong> 3,1g</li>
            <li><strong>Fibra:</strong> 1g</li>
            <li><strong>Proteína:</strong> 1,2g</li>
            <li><strong>Grasas totales:</strong> 0,3g</li>
            <li><strong>Agua:</strong> ~95g</li>
            <li><strong>Vitamina C:</strong> ~18mg (cerca del 20% del valor diario recomendado)</li>
            <li><strong>Potasio:</strong> ~261mg</li>
            <li><strong>Ácido fólico:</strong> ~24µg</li>
          </ul>

          <p>
            Noventa y cinco por ciento de agua. Por eso el calabacín tiene tan pocas calorías — y por eso llena sin pesar en el estómago.
          </p>
          <p>
            La mayor parte de la fibra está en la cáscara. Comerlo sin pelar hace diferencia para el tránsito intestinal.
          </p>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5419333/pexels-photo-5419333.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Rodajas de calabacín y tomate en un plato blanco de cerámica"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios del calabacín</h2>

          <p>
            El calabacín no es un superalimento. Es una verdura muy buena, y esa distinción importa para quien cocina de verdad.
          </p>

          <p>
            <strong>Saciedad con pocas calorías.</strong> Con un 95% de agua, el calabacín ocupa espacio en el estómago sin aportar calorías relevantes. Aumenta el volumen del plato sin aumentar el total calórico.
          </p>
          <p>
            <strong>Ayuda al tránsito intestinal.</strong> La fibra de la cáscara favorece el buen funcionamiento del intestino. Si tiendes al estreñimiento, comer calabacín con cáscara de forma regular —en rodajas o crudo— hace diferencia.
          </p>
          <p>
            <strong>Fácil de digerir.</strong> El calabacín cocido es suave para el estómago. Va bien en comidas ligeras cuando el estómago está sensible, como en casos de gastritis. Solo evita el exceso de aceite en la preparación.
          </p>
          <p>
            <strong>Vitamina C y antioxidantes.</strong> 100g de calabacín aportan cerca de 18mg de vitamina C —casi el 20% del valor diario recomendado. La cáscara verde también contiene betacaroteno, precursor de la vitamina A. El calabacín aparece de forma consistente entre las verduras de referencia por su aporte antioxidante en las bases de datos nutricionales del USDA.
          </p>
          <p>
            <strong>Potasio para la presión arterial.</strong> Con unos 261mg de potasio por 100g, el calabacín ayuda a equilibrar el sodio de la dieta. Algo relevante para quien consume mucha sal, que somos la mayoría.
          </p>

          <div className="blog-inline-cta">
            <p>
              El calabacín entra en la lista casi todas las semanas, pero es fácil olvidarlo cuando toda la despensa vive solo en tu cabeza.{' '}
              <em>Mise se acuerda por ti.</em>
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

          <h2 id="tipos">Tipos de calabacín que vas a encontrar</h2>

          <p>
            No todos son iguales. Lo que encuentras en la tienda varía más de lo que parece, y vale la pena saber la diferencia antes de elegir.
          </p>

          <ul className="item-list">
            <li><strong>Calabacín verde:</strong> el más común en cualquier tienda o supermercado. Verde oscuro, alargado, sabor neutro. Bueno para saltear, asar a la parrilla y convertir en fideos de calabacín.</li>
            <li><strong>Calabacita amarilla:</strong> misma forma que el calabacín verde, piel amarilla brillante, carne un poco más dulce y delicada. Funciona bien asada o rellena.</li>
            <li><strong>Calabacín redondo:</strong> una variedad más pequeña y redondeada, ideal para rellenar y hornear entera. Menos común, pero se encuentra en mercados de productores.</li>
            <li><strong>Calabaza pattypan (tipo platillo):</strong> forma de disco con bordes festoneados. Textura más firme, común en guisos y mezclas de verduras asadas.</li>
          </ul>

          <p>
            El calabacín crece rápido. Quien tiene huerta lo sabe: siembras una planta y en dos semanas tienes más de lo que puedes usar, y terminas regalándolo a los vecinos sin ningún problema.
          </p>
          <p>
            Para el día a día, el calabacín verde y la calabacita amarilla son los más fáciles de conseguir y los más intercambiables. La diferencia nutricional entre ambos es mínima: elige según la receta o el precio.
          </p>

          <h2 id="como-elegir">Cómo elegir un buen calabacín en la tienda</h2>

          <p>
            Un calabacín blando es un calabacín viejo. Parece obvio, pero es fácil pasarlo por alto cuando vas con prisa por el pasillo de verduras.
          </p>

          <ul className="item-list">
            <li><strong>Firme al tacto:</strong> presiona ligeramente con el pulgar. No debería ceder. Si se hunde con facilidad, ya pasó su punto.</li>
            <li><strong>Cáscara lisa y sin manchas:</strong> evita los que tienen marcas oscuras o la piel arrugada.</li>
            <li><strong>Tamaño mediano:</strong> los calabacines muy grandes suelen tener más agua y menos sabor. Los de tamaño mediano son los más versátiles.</li>
            <li><strong>Tallo húmedo y verde:</strong> un tallo que no está reseco indica que se cosechó hace poco.</li>
          </ul>

          <p>
            Un buen calabacín no necesita mucho condimento para saber bien. Uno pasado, ningún condimento lo salva.
          </p>
          <p>
            Vale la pena revisar la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            antes de salir de casa y anotar cuántos calabacines vas a necesitar en la semana. Así evitas comprar de más y encontrar dos marchitos en el fondo del refrigerador el jueves.
          </p>

          <h2 id="como-guardar">Cómo guardar el calabacín en casa</h2>

          <p>
            El calabacín no aguanta mucho fuera del refrigerador, sobre todo con calor. Lo básico:
          </p>

          <ul className="item-list">
            <li><strong>Entero, en el refrigerador:</strong> en el cajón de verduras, dura de 5 a 7 días. No hace falta envolverlo.</li>
            <li><strong>Cortado, en el refrigerador:</strong> guárdalo en un recipiente cerrado o envuelto bien en plástico. Úsalo dentro de 3 días.</li>
            <li><strong>En el congelador:</strong> cocínalo 2 minutos en agua hirviendo (escaldado), sécalo bien y congélalo en una bolsa. Dura hasta 3 meses. La textura cambia —queda más suave— pero funciona bien en sopas y salteados.</li>
          </ul>

          <p>
            No lo laves antes de guardarlo. Lávalo justo antes de cocinarlo. La humedad acelera que se eche a perder.
          </p>
          <p>
            Si sueles olvidar qué tienes en el refrigerador, la{' '}
            <a href="/es/funcionalidades/despensa">despensa de Mise</a>{' '}
            te ayuda a anotar lo que necesita usarse pronto, para que no te sorprenda un calabacín marchito tres días después de comprarlo.
          </p>
          <p>
            Una estrategia simple: comprar dos calabacines por semana y decidir de antemano en qué día usarás cada uno. El{' '}
            <a href="/es/funcionalidades/cardapio-semanal">plan de comidas semanal</a>{' '}
            funciona bien para esto —defines el menú antes de ir a comprar y llevas exactamente lo que vas a usar. Sin desperdicio y sin comprar la misma verdura que ya tienes en casa.
          </p>
          <p>
            Como comparación: la <a href="/es/blog/espinafre-beneficios">espinaca</a> tiene un perfil nutricional parecido (unas 23 kcal por 100g) y suele entrar en la misma compra semanal. Juntos son una buena base de verduras verdes para toda la semana.
          </p>

          <h2 id="faq">Preguntas frecuentes sobre el calabacín</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuántas calorías tiene un calabacín entero?</p>
              <p className="faq-a">Un calabacín mediano (unos 200g) tiene aproximadamente 34 calorías en crudo. Uno pequeño (100g) tiene alrededor de 17 calorías. El valor varía un poco según la variedad, pero casi todos quedan entre 15 y 20 kcal por 100g.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El calabacín es carbohidrato o proteína?</p>
              <p className="faq-a">Ninguno de forma significativa. Por 100g, tiene cerca de 3g de carbohidratos y 1,2g de proteína. Está compuesto principalmente de agua (alrededor del 95%). Por eso es habitual en dietas bajas en carbohidratos y keto.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El calabacín engorda?</p>
              <p className="faq-a">Con 17 kcal por 100g, es muy poco probable. Lo que suma calorías al plato es lo que le agregas: aceite, mantequilla, queso. El calabacín en sí tiene un impacto calórico bajísimo. Es más probable que ayude a controlar el peso que lo contrario.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer calabacín crudo?</p>
              <p className="faq-a">Sí. Crudo tiene una textura crujiente y sabor suave. Va bien en ensaladas cortado en láminas finas o convertido en "fideos" con espiralizador. Cocinarlo reduce un poco la vitamina C, pero no cambia mucho el resto del perfil nutricional.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre calabacín y calabacita amarilla?</p>
              <p className="faq-a">El calabacín verde es alargado, de piel verde oscura y sabor neutro. La calabacita amarilla tiene la misma forma pero piel amarilla y un sabor un poco más dulce. Nutricionalmente son casi iguales: elige según la receta.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda el calabacín en el refrigerador?</p>
              <p className="faq-a">Entero, en el cajón de verduras, dura hasta 7 días. Cortado, guárdalo en un recipiente cerrado y úsalo dentro de 3 días. No hace falta lavarlo antes de guardarlo, solo lávalo justo antes de cocinarlo.</p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El calabacín tiene gluten?</p>
              <p className="faq-a">No. El calabacín es naturalmente libre de gluten y puede comerse sin restricciones por personas con enfermedad celíaca o sensibilidad al gluten.</p>
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
                Creador de Mise. Compró calabacín el lunes con la mejor intención y lo salteó el jueves, justo cuando ya empezaba a ablandarse. Quedó buenísimo. El problema era la falta de planeación, no el calabacín.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Calabacín en la despensa,<br />
              <em>sin olvidar comprarlo.</em>
            </h2>
            <p>
              Mise conecta{' '}
              <a href="/es/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)', fontWeight: 500}}>lista de compras</a>,
              despensa y plan de comidas semanal. Compras lo que realmente vas a usar —y el calabacín no se marchita en el fondo del cajón.
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
