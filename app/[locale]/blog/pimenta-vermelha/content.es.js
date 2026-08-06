import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Tipos de chile rojo: picor, usos y beneficios',
  description: 'El chile rojo va del pimiento morrón dulce al habanero ardiente. Conoce los tipos, el nivel de picor, los beneficios y cómo usar cada uno en la cocina.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
      en: 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha',
      es: 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
    },
  },
  openGraph: {
    title: 'Tipos de chile rojo: picor, usos y beneficios',
    description: 'El chile rojo va del pimiento morrón dulce al habanero ardiente. Conoce los tipos, el nivel de picor, los beneficios y cómo usar cada uno en la cocina.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha',
    images: [
      {
        url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Pimientos morrones rojos frescos sobre una tabla de madera — variedades de chile rojo maduro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipos de chile rojo: picor, usos y beneficios',
    description: 'El chile rojo va del pimiento morrón dulce al habanero ardiente. Conoce los tipos, el nivel de picor, los beneficios y cómo usar cada uno en la cocina.',
    images: ['https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el chile rojo y el pimiento morrón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pimiento morrón es un tipo específico de chile rojo — el capsicum annuum maduro, sin picor, grande y carnoso. "Chile rojo" es el nombre genérico para cualquier fruto maduro del género Capsicum que llegó al color rojo. Incluye tanto el pimiento dulce como variedades picantes como el habanero, el jalapeño y la cayena. El color rojo indica maduración completa en todos los casos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El chile picante hace mal al estómago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los chiles picantes con capsaicina pueden irritar la mucosa gástrica en personas con gastritis, úlcera o intestino sensible. El pimiento morrón, sin capsaicina, rara vez causa problemas estomacales. Si tienes antecedentes de problemas gástricos, empieza con cantidades pequeñas de las variedades picantes y observa cómo reaccionas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál chile rojo es el más picante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre las variedades comunes: el habanero y la cayena son los más picantes, con alta concentración de capsaicina. El jalapeño rojo queda en un punto medio. Los mini pimientos dulces tienen un picor muy suave. El pimiento morrón no pica nada — cero capsaicina. La escala Scoville mide la concentración de capsaicina de cada variedad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cayena y el chile en hojuelas son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La cayena es un tipo específico de chile rojo — una variedad larga y delgada, muy picante, que casi siempre se vende seca y molida en polvo fino. El chile en hojuelas (red pepper flakes) es una mezcla más gruesa de chiles secos triturados, con semillas incluidas, y suele ser más suave y con más textura. Los dos vienen del chile rojo, pero se procesan y se usan de forma distinta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El chile rojo tiene más vitamina C que la naranja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pimiento morrón rojo sí. 100 g de pimiento morrón rojo crudo tienen cerca de 190 mg de vitamina C — casi cuatro veces más que la misma cantidad de naranja (53 mg). El calor destruye parte de la vitamina C, así que el pimiento crudo o apenas cocido aprovecha mejor este nutriente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda el chile rojo en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pimiento morrón fresco: en el refrigerador, en el cajón de verduras, dura de 1 a 2 semanas. Una vez cortado, úsalo en 3 a 4 días. Chiles frescos picantes (jalapeño, habanero): refrigerador en bolsa o recipiente, 1 a 2 semanas. Chile seco (en hojuelas, cayena en polvo): frasco cerrado lejos de la luz y la humedad, dura meses. El chile fresco se puede congelar — pierde algo de textura pero mantiene el picor.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tipos de chile rojo: picor, usos y beneficios',
  description: 'El chile rojo va del pimiento morrón dulce al habanero ardiente. Conoce los tipos, el nivel de picor, los beneficios y cómo usar cada uno en la cocina.',
  image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chile rojo', item: 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha' },
  ],
}

export default function ChileRojoEs() {
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
            <li className="breadcrumb-current" aria-current="page">Chile rojo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">6 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Chile rojo, explicado: del pimiento dulce al habanero que quema
          </h1>
          <p className="blog-desc">
            "Chile rojo" (o ají, o pimiento, según el país) suena simple hasta que estás en el mercado eligiendo entre pimiento morrón, jalapeño, cayena y habanero. Son plantas emparentadas, pero con picor, sabor y usos completamente distintos. Aquí está el mapa.
          </p>

          <div className="answer-box">
            <p>
              <strong>Chile rojo</strong> es el nombre genérico para cualquier fruto maduro del género <em>Capsicum</em> que llegó al color rojo.
              Cubre desde el pimiento morrón dulce (cero picor) hasta el habanero y la cayena (muy picantes).
              Lo que define el picor es la <strong>capsaicina</strong> — y es también la responsable de los principales beneficios nutricionales documentados.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Pimientos morrones rojos frescos sobre una tabla de madera — variedades de chile rojo maduro"
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
              <li><a href="#que-es">Qué es el chile rojo</a></li>
              <li><a href="#tipos">Tipos de chile rojo</a></li>
              <li><a href="#beneficios">Beneficios de la capsaicina</a></li>
              <li><a href="#nutricional">Valor nutricional</a></li>
              <li><a href="#como-usar">Cómo usarlo en la cocina</a></li>
              <li><a href="#paprika">Chile rojo vs paprika</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerlo en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Variedades de chile rojo fresco y seco lado a lado — jalapeño, cayena y habanero"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es el chile rojo</h2>

          <p>
            "Chile rojo" no es una especie. Es un color.
          </p>
          <p>
            Cuando un pimiento verde se queda en la planta el tiempo suficiente, madura. Pasa por el amarillo, por el naranja y llega al rojo. Lo mismo pasa con el jalapeño, el habanero y la cayena — todos empiezan verdes y se vuelven rojos con la maduración completa.
          </p>
          <p>
            Lo que cambia con la maduración: más azúcar, más vitamina C, más licopeno, más color. Por eso el pimiento morrón rojo es más dulce que el verde. Y por eso también sale más caro — se quedó más tiempo en la planta.
          </p>
          <p>
            La diferencia que de verdad importa en la cocina no es el color — es la capsaicina. El pimiento morrón no tiene capsaicina: puedes comerlo sin problema. El habanero y la cayena tienen concentraciones altas, con un picor que va desde "lo sentí" hasta "el agua no ayuda".
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de chile rojo</h2>

          <p>
            El chile existe en cientos de variedades en todo el mundo —desde el pimiento morrón suave hasta algunos de los más picantes que puedes meter en una olla. Esto es lo que te vas a encontrar en el mercado y en las recetas:
          </p>

          <h3>Pimiento morrón rojo</h3>
          <p>
            El más común y el más fácil de usar. Grande, carnoso, sin nada de picor. Sabor dulce con un toque umami sutil. Queda excelente salteado, relleno, asado a la parrilla o crudo en ensaladas. Es el mismo pimiento verde que maduró —misma planta, sabor completamente distinto.
          </p>

          <h3>Jalapeño rojo</h3>
          <p>
            Normalmente se vende verde, pero si se deja madurar se pone rojo y un poco más dulce sin perder mucho picor. Picor medio —se nota, pero la mayoría lo tolera bien. Es uno de los chiles más versátiles: funciona en salsas, marinadas, aderezos y encurtidos.
          </p>

          <h3>Habanero</h3>
          <p>
            Pequeño, con forma de farolito, muy picante. Es la base del picor detrás de la mayoría de las salsas del Caribe y de Yucatán. Se usa con moderación —un habanero entero en una olla de salsa para cuatro personas ya marca la diferencia. Muy popular en escabeche con ajo y aceite.
          </p>

          <h3>Chile cayena</h3>
          <p>
            Casi siempre se vende seco y molido en polvo fino. Alta concentración de capsaicina. Una pizca cambia por completo el perfil de un plato. Se usa en todo el mundo en salsas picantes, mezclas de especias y como base de la paprika picante.
          </p>

          <h3>Chile en hojuelas (red pepper flakes)</h3>
          <p>
            El del salero de la pizzería. Chiles rojos secos triturados en hojuelas gruesas, con semillas incluidas —ahí es donde se concentra la mayor parte del picor. El nivel de picor va de moderado a fuerte según la mezcla. Dura meses en un frasco cerrado y está en la alacena de cualquiera que cocine pasta, pizza o huevos.
          </p>

          <h3>Mini pimientos dulces</h3>
          <p>
            Pequeños, rojos, redondos o con puntita. Picor muy suave —casi dulce. Se comen mucho solos como botana, en escabeche o como aperitivo. Es uno de los pocos chiles que los niños suelen aceptar. Sabor complejo sin el picor de los demás.
          </p>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2893534/pexels-photo-2893534.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Chiles rojos frescos en una canasta de mimbre — capsaicina y nutrientes del chile rojo"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios de la capsaicina</h2>

          <p>
            La capsaicina es el compuesto bioactivo responsable del picor de los chiles. Y es también donde están los principales beneficios nutricionales documentados.
          </p>

          <h3>Metabolismo</h3>
          <p>
            La capsaicina aumenta temporalmente la temperatura corporal y el gasto energético —un proceso llamado termogénesis. El efecto es real, pero modesto: una comida picante no sustituye el ejercicio. Funciona como complemento dentro de una alimentación variada y regular.
          </p>

          <h3>Salud cardiovascular</h3>
          <p>
            Varios estudios asocian el consumo regular de capsaicina con niveles más bajos de colesterol LDL y triglicéridos. La capsaicina tiene acción vasodilatadora —aumenta el diámetro de los vasos sanguíneos, lo que facilita la circulación y reduce el riesgo de coágulos.
          </p>

          <h3>Acción antiinflamatoria</h3>
          <p>
            La capsaicina, junto con flavonoides y compuestos fenólicos del chile, tiene propiedades antiinflamatorias documentadas. En uso tópico (cremas y geles), la capsaicina se usa para tratar dolores musculares y articulares —funciona "cansando" los receptores de dolor de la zona con el uso repetido.
          </p>

          <h3>Vitamina C e inmunidad</h3>
          <p>
            El pimiento morrón rojo tiene una de las concentraciones de vitamina C más altas entre los alimentos comunes. La vitamina C es esencial para producir y mantener las células de defensa del sistema inmunológico. El pimiento morrón rojo maduro tiene más vitamina C que el verde —la maduración aumenta el contenido del nutriente.
          </p>

          <p>
            Una observación honesta: el chile no es medicina. Los beneficios aparecen con un consumo regular y moderado dentro de una dieta variada. Un plato ocasional no cambia nada —y exagerar con las versiones picantes puede irritar el estómago.
          </p>

          {/* VALOR NUTRICIONAL */}
          <h2 id="nutricional">Valor nutricional</h2>

          <p>
            Los números varían bastante entre el pimiento morrón (dulce, carnoso) y los chiles picantes (concentrados en capsaicina, consumidos en cantidades pequeñas). La siguiente tabla usa el pimiento morrón rojo como referencia —la variedad más consumida— según datos del{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>:
          </p>

          <ul className="item-list">
            <li><strong>Calorías:</strong> ~31 kcal por 100 g</li>
            <li><strong>Carbohidratos:</strong> ~6 g por 100 g</li>
            <li><strong>Vitamina C:</strong> ~190 mg por 100 g — más del 200% de la ingesta diaria recomendada</li>
            <li><strong>Licopeno y betacaroteno:</strong> los pigmentos que dan el color rojo, con acción antioxidante</li>
            <li><strong>Potasio:</strong> ~211 mg por 100 g</li>
            <li><strong>Fibra:</strong> ~2 g por 100 g</li>
          </ul>

          <p>
            Para comparar: 100 g de naranja tienen alrededor de 53 mg de vitamina C. El pimiento morrón rojo tiene casi cuatro veces más —y con menos calorías. Esto no es argumento para cambiar la fruta por el pimiento, pero es un dato que sorprende bastante la primera vez que lo ves.
          </p>
          <p>
            Los chiles picantes secos tienen un perfil distinto: más concentrados y calóricos por peso, pero consumidos en cantidades mucho menores. Una cucharadita de chile en hojuelas tiene mucha menos vitamina C que 100 g de pimiento morrón —pero mucha más capsaicina. Son ingredientes con funciones distintas en el plato.
          </p>

          {/* CÓMO USAR */}
          <h2 id="como-usar">Cómo usar el chile rojo en la cocina</h2>

          <p>
            Cada tipo de chile rojo tiene su lugar. Usar el equivocado en una receta da un resultado equivocado —y no es un problema de técnica, es no conocer el ingrediente.
          </p>

          <h3>Pimiento morrón rojo</h3>
          <p>
            Asado directo sobre la llama y pelado, se convierte en una salsa con mucho cuerpo. Salteado con cebolla y ajo, es la base de incontables platos en todo el mundo. Crudo en tiras funciona en ensaladas y como botana. Relleno de arroz y carne es una comida completa con poco esfuerzo.
          </p>

          <h3>Jalapeño rojo</h3>
          <p>
            Quítale las semillas y la membrana interior para bajarle el picor —si las dejas, pica más. Funciona bien picado fino en marinadas, salsas y como topping de arroz o tacos. Menos es más: empieza con medio chile y ajusta mientras cocinas.
          </p>

          <h3>Habanero</h3>
          <p>
            En escabeche con ajo y aceite, se suaviza con las semanas y mejora cada vez más. Un habanero entero en una olla de frijoles le da sabor sin volverse insoportable —sácalo antes de servir si quieres el sabor sin todo el picor. Para picor de verdad, pícalo fino y agrégalo al final.
          </p>

          <h3>Chile en hojuelas</h3>
          <p>
            El picor más fácil de tener a la mano. Una pizca en huevos revueltos, en pasta al ajo, en pizza casera —hace diferencia con esfuerzo cero. No necesita cocción: va directo al final del plato.
          </p>

          <h3>Cayena en polvo</h3>
          <p>
            Sustituye al chile en hojuelas con un picor más uniforme y menos textura visible. Bueno para salsas, marinadas y recetas donde no quieres que se vean las hojuelas. Cuidado: la cayena es más intensa que las hojuelas —usa menos de lo que usarías de hojuelas.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise lo resuelve.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* PAPRIKA */}
          <h2 id="paprika">Chile rojo vs paprika: cuál es la diferencia</h2>

          <p>
            La paprika viene del chile rojo. Es chile seco y molido —generalmente pimiento morrón rojo o variedades suaves de capsicum.
          </p>
          <p>
            La diferencia está en el procesamiento y en la variedad usada:
          </p>

          <ul className="item-list">
            <li><strong>Paprika dulce:</strong> pimiento morrón rojo seco y molido, sin picor. Color intenso, sabor suave y ligeramente dulce.</li>
            <li><strong>Paprika ahumada:</strong> chile secado con humo antes de moler. Sabor complejo, ligeramente amargo. Base de muchos platos españoles y húngaros.</li>
            <li><strong>Paprika picante:</strong> mezcla con un chile más picante en el proceso. Tiene picor real, cercano al chile en hojuelas.</li>
          </ul>

          <p>
            En la práctica: la paprika no sustituye al chile en polvo en recetas que piden picor de verdad, ni al revés. Son ingredientes distintos con funciones distintas. La paprika ahumada y el chile en hojuelas son complementarios, no intercambiables.
          </p>
          <p>
            Una buena despensa tiene los dos. Paprika dulce para color y sabor de fondo, chile en hojuelas para picor puntual. Es la misma lógica de tener orégano y tomillo —familias parecidas, funciones distintas en el plato.
          </p>

          {/* VALE LA PENA */}
          <h2 id="vale-la-pena">Vale la pena ponerlo en la lista</h2>

          <p>
            Depende de cuál chile rojo estés poniendo en la lista.
          </p>
          <p>
            <strong>Pimiento morrón rojo:</strong> sí, es un básico de la lista de compras. Es parte de la base aromática de incontables platos en todo el mundo. Suficientemente versátil para funcionar en salteados, ensaladas, rellenos y salsas. Precio accesible. Quien cocina seguido lo va a usar antes de que se eche a perder.
          </p>
          <p>
            <strong>Chile en hojuelas y cayena en polvo:</strong> se compran una vez y duran meses en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>.
            Son condimentos de terminación —usas poco cada vez. Vale la pena tenerlos aunque no cocines picante todas las semanas. Frasco cerrado lejos de la luz y la humedad: seis meses sin perder calidad. Es el tipo de ingrediente que solo notas que falta a la mitad de la receta.
          </p>
          <p>
            <strong>Chile fresco picante (jalapeño, habanero):</strong> se compra según el uso. No aguanta mucho tiempo en la despensa —una semana en el refrigerador, dos como máximo. Si tienes un plato específico que lo pide, cómpralo la semana en que lo vas a preparar.
          </p>
          <p>
            Un encurtido casero —habanero o jalapeño en aceite con ajo— es la solución de término medio para tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>. Compras varios cuando están baratos, los encurtes y tienes picor para meses. El aceite absorbe el sabor y también queda buenísimo por su cuenta.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el chile rojo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el chile rojo y el pimiento morrón?</p>
              <p className="faq-a">
                El pimiento morrón es un tipo de chile rojo —el capsicum annuum maduro, sin picor, grande y carnoso. "Chile rojo" es el nombre genérico para cualquier fruto maduro del género Capsicum que llegó al color rojo, incluyendo variedades picantes como el habanero, el jalapeño y la cayena.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El chile picante hace mal al estómago?</p>
              <p className="faq-a">
                Los chiles picantes con capsaicina pueden irritar la mucosa gástrica en personas con gastritis o intestino sensible. El pimiento morrón, sin capsaicina, rara vez causa problemas. Si tienes antecedentes de gastritis, empieza con cantidades pequeñas de las variedades picantes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál chile rojo es el más picante?</p>
              <p className="faq-a">
                Entre las variedades comunes: el habanero y la cayena son los más picantes. El jalapeño rojo queda en un punto medio. Los mini pimientos dulces tienen un picor muy suave. El pimiento morrón no pica nada. La escala Scoville mide la concentración de capsaicina de cada variedad.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La cayena y el chile en hojuelas son lo mismo?</p>
              <p className="faq-a">
                No. La cayena es un tipo específico de chile rojo —variedad larga y delgada, muy picante, casi siempre vendida seca y molida en polvo fino. El chile en hojuelas es una mezcla más gruesa de chiles secos con semillas, y suele ser más suave. Los dos vienen del chile rojo, pero se procesan distinto.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El chile rojo tiene más vitamina C que la naranja?</p>
              <p className="faq-a">
                El pimiento morrón rojo sí. 100 g de pimiento morrón rojo crudo tienen cerca de 190 mg de vitamina C —casi cuatro veces más que la misma cantidad de naranja (53 mg). El calor destruye parte de la vitamina C, así que el pimiento crudo o apenas cocido aprovecha mejor este nutriente.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda el chile rojo en casa?</p>
              <p className="faq-a">
                Pimiento morrón fresco: en el refrigerador, 1 a 2 semanas. Chile fresco picante (jalapeño, habanero): refrigerador en bolsa o recipiente, 1 a 2 semanas. Chile seco (en hojuelas, cayena en polvo): frasco cerrado lejos de la luz, dura meses. El chile fresco se puede congelar —pierde algo de textura pero mantiene el picor.
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
                Creador de Mise. Le puso un habanero entero a la olla de frijoles sin avisarle a nadie. Veredicto familiar: técnicamente comestible.
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
              Compras lo que realmente vas a usar —y el chile en hojuelas no desaparece en el fondo de la alacena sin que te des cuenta.
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
