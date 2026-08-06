import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Menú semanal sencillo y casero: cómo armarlo desde cero',
  description: 'Menú semanal sencillo y casero: ejemplo práctico de 7 días con almuerzo y cena, cómo convertirlo en lista de compras y consejos para mantenerlo cada semana.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/cardapio-semanal-simples-caseiro',
      en: 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro',
      es: 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/cardapio-semanal-simples-caseiro',
    },
  },
  openGraph: {
    title: 'Menú semanal sencillo y casero: cómo armarlo desde cero',
    description: 'Menú semanal sencillo y casero: ejemplo práctico de 7 días con almuerzo y cena, cómo convertirlo en lista de compras y consejos para mantenerlo cada semana.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro',
    images: [
      {
        url: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Familia cocinando junta en la cocina de casa — escena de planeación y preparación de comidas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menú semanal sencillo y casero: cómo armarlo desde cero',
    description: 'Menú semanal sencillo y casero: ejemplo práctico de 7 días con almuerzo y cena, cómo convertirlo en lista de compras y consejos para mantenerlo cada semana.',
    images: ['https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el menú semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El menú semanal es la lista de comidas planeadas para los siete días de la semana — normalmente almuerzo y cena, a veces también desayuno. Funciona como guía para saber qué cocinar cada día, evita el dilema de "¿qué hay de comer hoy?" y hace que ir de compras sea más eficiente, porque solo compras lo que realmente vas a usar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo armar un menú semanal sencillo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para armar un menú semanal sencillo: 1) Haz una lista de 5 a 7 comidas que ya sabes cocinar; 2) Repártelas en los días según el tiempo que tengas — las más rápidas en los días más ajustados; 3) Revisa la despensa antes de ir de compras; 4) Arma la lista de compras a partir del menú. No necesitas planear el 100% desde el inicio — empieza con 3 días y ve ampliando.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es un ejemplo de menú semanal sencillo y casero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ejemplo de menú semanal sencillo: lunes — pollo a la plancha con arroz y ensalada; martes — pasta con salsa de tomate y huevo frito; miércoles — frijoles guisados con arroz y verduras salteadas; jueves — omelette con papa cocida; viernes — pescado al horno con arroz y zanahoria. Repetir proteínas a lo largo de la semana reduce la cantidad de ingredientes en la lista de compras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo convertir el menú semanal en lista de compras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para convertir el menú en lista de compras: revisa cada comida planeada y anota los ingredientes y las cantidades que necesitas. Después cruza con lo que ya tienes en la despensa y quita lo que no necesitas comprar. El resultado es una lista precisa, sin artículos olvidados y sin compras innecesarias. Una app de lista conectada a la despensa hace este cruce de forma automática.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El menú semanal funciona para quien vive solo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Funciona bien y tiene una ventaja extra: puedes preparar porciones más grandes el domingo y repartirlas en los días de la semana. Una olla de frijoles, arroz cocido y una proteína preparada en cantidad eliminan la necesidad de cocinar todos los días. Planear también reduce el desperdicio, que suele ser mayor para quien vive solo y compra por impulso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas comidas necesito planear en el menú semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No necesitas planear todas las comidas de todos los días para empezar. Planear solo el almuerzo o solo la cena de la semana ya genera un impacto real en la lista de compras y en el desperdicio. Empieza con 3 o 4 días y ve agregando conforme el ritmo se vuelva natural. Planear el 100% desde el inicio crea una presión innecesaria y aumenta la probabilidad de abandonar.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Menú semanal sencillo y casero: cómo armarlo desde cero',
  description: 'Menú semanal sencillo y casero: ejemplo práctico de 7 días con almuerzo y cena, cómo convertirlo en lista de compras y consejos para mantenerlo cada semana.',
  image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Menú semanal sencillo y casero', item: 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro' },
  ],
}

export default function MenuSemanalEs() {
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
            <li className="breadcrumb-current" aria-current="page">Menú semanal sencillo y casero</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">4 ago. 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Menú semanal: cómo planear siete días de comidas sin volverte loco
          </h1>
          <p className="blog-desc">
            Armar un menú semanal sencillo no requiere una hoja de cálculo, un chef ni un domingo entero. Necesitas 20 minutos, una lista de las recetas que ya sabes hacer y ganas de dejar de abrir el refrigerador sin saber qué cocinar.
          </p>

          <div className="answer-box">
            <p>
              El <strong>menú semanal</strong> es la lista de comidas planeadas para los siete días — normalmente almuerzo y cena.
              Resuelve el &quot;¿qué hay de comer hoy?&quot; antes de que la pregunta aparezca,
              hace que la lista de compras sea más precisa y reduce el desperdicio de comida.
              No tiene que ser perfecto: planear la mitad de la semana ya hace la diferencia.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Familia cocinando junta en la cocina de casa — escena de planeación y preparación de comidas"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: cottonbro studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#por-que">Por qué armar un menú semanal hace la diferencia</a></li>
              <li><a href="#como-armar">Cómo armarlo: paso a paso</a></li>
              <li><a href="#ejemplo">Ejemplo de menú semanal sencillo</a></li>
              <li><a href="#lista-de-compras">Cómo convertirlo en lista de compras</a></li>
              <li><a href="#cuando-cambia">Cuando el plan no sale como estaba pensado</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <p>
            Miércoles, seis de la tarde, refrigerador abierto. Media cebolla, dos huevos, un yogur y algo al fondo que puede ser pollo de la semana pasada o puede que no. Eso no es cocinar — es arqueología.
          </p>
          <p>
            El menú semanal existe justo para evitar ese momento. No porque vayas a cocinar un platillo perfecto todos los días, sino porque sin un plan mínimo cada comida se vuelve una decisión nueva. Y decidir qué comer cuando ya tienes hambre es el peor momento para decidir.
          </p>
          <p>
            La FAO estima que en América Latina y el Caribe cerca del 15% de los alimentos se pierde o se desperdicia a lo largo de la cadena — y buena parte de eso pasa en casa, con ingredientes comprados sin un plan que nunca llegan a usarse. El menú semanal es el paso anterior a la lista de compras: sin él, la lista también queda incompleta.
          </p>

          {/* POR QUE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Mesa servida con una comida casera equilibrada — arroz, verduras y proteína en platos de colores"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ella Olsson / Pexels</p>
          </div>

          <h2 id="por-que" className="img-above">Por qué armar un menú semanal hace la diferencia</h2>

          <p>
            La diferencia principal no es que la alimentación se vuelva más saludable — es dejar de gastar energía mental cada día decidiendo qué comer. Cada &quot;¿qué vamos a comer hoy?&quot; resuelto de antemano es una decisión menos en el día.
          </p>
          <p>
            En el súper, el efecto es directo. Quien va de compras con un menú definido sabe exactamente qué ingredientes necesita — y no compra pollo cuando la receta de la semana pide carne molida. Los estudios sobre hábitos de compra coinciden en algo: quien compra sin lista termina gastando más, sobre todo en cosas que no pensaba comprar.
          </p>
          <p>
            En el desperdicio, el impacto es todavía más claro. Cuando sabes que el calabacín va a usarse el jueves, no se queda olvidado en el cajón del refrigerador hasta echarse a perder. Comprar con un uso ya definido para cada cosa es la palanca más grande contra el desperdicio en casa.
          </p>
          <p>
            Además, el menú semanal reduce cuántas veces tienes que ir al súper. La mayoría de esas idas extra pasan porque se olvidó algo o porque no había ningún plan. Con un menú claro y una{' '}
            <a href="/es/blog/lista-de-compras-do-mes">lista de compras</a>{' '}
            bien hecha, una ida a la semana suele ser suficiente.
          </p>

          {/* COMO ARMAR */}
          <h2 id="como-armar">Cómo armar el menú semanal: paso a paso</h2>

          <p>
            No hace falta una plantilla sofisticada ni una hoja de cálculo con fórmulas. Cuatro pasos bastan para armar un menú que funcione de verdad.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>Haz una lista de lo que ya sabes cocinar</strong>
                <span>
                  No es momento de experimentar. Escribe de 7 a 10 recetas que ya forman parte de tu rutina — pollo a la plancha, pasta con salsa de tomate, omelette, arroz con frijoles, pescado al horno. Las recetas conocidas se cocinan casi en automático y no exigen decidir nada frente a la estufa.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Repártelas en los días según tu tiempo real</strong>
                <span>
                  Lunes y miércoles suelen ser los días más ajustados — pon ahí las recetas más rápidas. Viernes o fin de semana suelen dejar más margen — reserva algo con más preparación para esos días. El domingo puede ser el día de cocinar en cantidad: arroz, frijoles y una proteína que alcance para dos o tres días.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Revisa la despensa antes de ir de compras</strong>
                <span>
                  Antes de armar la lista de compras, revisa qué ya tienes en casa. Aceite, arroz, frijoles, especias — lo básico que ya está en la{' '}
                  <a href="/es/funcionalidades/despensa">despensa</a>{' '}
                  no necesita ir en la lista. Este paso solo ya elimina buena parte de las compras duplicadas.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Genera la lista de compras a partir del menú</strong>
                <span>
                  Con el menú listo y la despensa revisada, la lista prácticamente se escribe sola. Revisa ingrediente por ingrediente de cada comida planeada, marca lo que ya tienes, y lo que queda es lo que realmente necesitas comprar. El{' '}
                  <a href="/es/funcionalidades/cardapio-semanal">menú semanal de Mise</a>{' '}
                  hace ese cruce de forma automática.
                </span>
              </div>
            </li>
          </ul>

          {/* EJEMPLO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5593102/pexels-photo-5593102.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Persona escribiendo el menú semanal en papel sobre una mesa de madera con cuaderno y lápiz"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="ejemplo" className="img-above">Ejemplo de menú semanal sencillo y casero</h2>

          <p>
            A continuación, un ejemplo que funciona para una persona o una pareja — sin ingredientes raros, sin técnicas complicadas. El criterio fue el tiempo real de preparación: nada que pase de 30 minutos en un día entre semana.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Día</th>
                <th>Almuerzo / Cena</th>
                <th>Preparación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunes</td>
                <td>Pollo a la plancha, arroz y ensalada verde</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Martes</td>
                <td>Pasta con salsa de tomate y huevo frito</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>Miércoles</td>
                <td>Frijoles guisados, arroz y verduras salteadas</td>
                <td>25 min</td>
              </tr>
              <tr>
                <td>Jueves</td>
                <td>Omelette con papa cocida y ensalada</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Viernes</td>
                <td>Pescado al horno con arroz y zanahoria</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>

          <p>
            Algunas de estas elecciones tienen su lógica: el pollo aparece al inicio de la semana, cuando está más fresco. Los frijoles van a la mitad — aprovechando lo que se cocinó el domingo o preparando una cantidad que alcance para un par de días. El pescado va el viernes: se compra el mismo día y se cocina de inmediato.
          </p>
          <p>
            Repetir proteínas a lo largo de la semana también reduce la cantidad de artículos distintos en la lista de compras. Pollo el lunes y otra vez después en la semana: una sola compra alcanza para las dos comidas. Menos artículos distintos significa menos tiempo en el súper y menos probabilidad de que se te olvide algo.
          </p>
          <p>
            El fin de semana queda fuera del ejemplo por una razón simple: sábado y domingo suelen tener otra dinámica — salidas, comida para llevar, almuerzos familiares. Planear la semana laboral ya es suficiente para notar la diferencia. Quien quiera sumar el fin de semana después, lo suma.
          </p>

          {/* LISTA DE COMPRAS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6995262/pexels-photo-6995262.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Persona revisando la lista de compras en el celular junto a un carrito de supermercado"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Mart Production / Pexels</p>
          </div>

          <h2 id="lista-de-compras" className="img-above">Cómo convertir el menú semanal en lista de compras</h2>

          <p>
            Este es el paso que la mayoría se salta — y por eso termina en el súper con una lista genérica que no tiene nada que ver con lo que realmente va a cocinar esa semana.
          </p>
          <p>
            El proceso es directo: toma el menú, revisa cada comida y anota los ingredientes y las cantidades que necesita. Pollo a la plancha el lunes y arroz con frijoles el miércoles — pollo: 700 g, arroz: ya tienes, frijoles: ya tienes, especias: revisar. Después cruzas con lo que ya hay en la despensa y quitas lo que no necesitas comprar.
          </p>
          <p>
            El resultado es una{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            precisa — sin artículos olvidados y sin compras que terminan guardadas sin usarse en el fondo de la alacena. Esa precisión es lo que separa ir al súper una vez a la semana de ir tres veces porque siempre falta algo.
          </p>
          <p>
            Para quien usa Mise, ese cruce es automático: el menú de la semana genera la lista de compras tomando en cuenta lo que ya está registrado en la despensa. Lo que necesitas comprar queda separado de lo que ya tienes en casa.
          </p>

          <div className="blog-inline-cta">
            <p>Menú listo. <em>La lista sale sola en Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* CUANDO CAMBIA */}
          <h2 id="cuando-cambia">Cuando el plan no sale como estaba pensado</h2>

          <p>
            El menú semanal no es un contrato. El jueves planeaste pescado, pero saliste tarde del trabajo y la tienda ya había cerrado. El miércoles planeaste pollo, pero había sobras del martes que había que comerse primero. Eso es normal — no es una falla del sistema.
          </p>
          <p>
            El menú funciona como referencia, no como obligación. Resuelve la mayoría de los días. Los que se salen del plan son la excepción, y las excepciones no invalidan el sistema. Lo que sí lo invalida es no tener ningún plan — ahí cada día es una excepción.
          </p>
          <p>
            Tres ajustes prácticos para cuando el plan cambia:
          </p>

          <ul className="item-list">
            <li><strong>Las proteínas se congelan.</strong> El pollo que no se usó el lunes va al congelador. La semana siguiente, ya está en la despensa.</li>
            <li><strong>Las sobras se vuelven almuerzo.</strong> Planear porciones un poco más grandes en la cena elimina la necesidad de cocinar de nuevo al día siguiente.</li>
            <li><strong>Cambia el día, no la receta.</strong> Si la receta del jueves no se pudo hacer, pasa al viernes — no desaparece del menú. Los ingredientes ya están en casa.</li>
          </ul>

          <p>
            Quien abandona el menú semanal casi siempre lo hace porque se puso expectativas muy altas: planear todas las comidas de todos los días, incluir una receta nueva cada noche, no repetir nunca. Eso no es un menú semanal — es producir un programa de cocina. Empieza simple. Repite lo que funciona. Ajusta poco a poco.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el menú semanal</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Qué es el menú semanal?</p>
              <p className="faq-a">
                Es la lista de comidas planeadas para los siete días de la semana — normalmente almuerzo y cena. Funciona como guía para saber qué cocinar cada día, evita el dilema de &quot;¿qué hay de comer hoy?&quot; y hace que ir de compras sea más eficiente, porque solo compras lo que realmente vas a usar.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo armar un menú semanal sencillo?</p>
              <p className="faq-a">
                Haz una lista de 5 a 7 comidas que ya sabes cocinar. Repártelas en los días según el tiempo que tengas. Revisa la despensa antes de ir de compras. Arma la lista de compras a partir del menú. No necesitas planear el 100% desde el inicio — empieza con 3 días y ve ampliando.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es un ejemplo de menú semanal sencillo y casero?</p>
              <p className="faq-a">
                Lunes: pollo a la plancha con arroz y ensalada. Martes: pasta con salsa de tomate y huevo frito. Miércoles: frijoles, arroz y verduras salteadas. Jueves: omelette con papa cocida. Viernes: pescado al horno con arroz y zanahoria. Repetir proteínas a lo largo de la semana reduce los artículos en la lista de compras y simplifica la ida al súper.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo convertir el menú semanal en lista de compras?</p>
              <p className="faq-a">
                Revisa cada comida del menú, anota los ingredientes y las cantidades necesarias. Cruza con lo que ya tienes en la despensa y quita lo que no necesitas comprar. El resultado es una lista precisa — sin artículos olvidados y sin compras que terminan guardadas en el fondo de la alacena.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El menú semanal funciona para quien vive solo?</p>
              <p className="faq-a">
                Funciona y tiene una ventaja extra: puedes preparar porciones más grandes el domingo —arroz, frijoles, proteína— y repartirlas en los días de la semana. Eso elimina la necesidad de cocinar todos los días. También reduce el desperdicio, que suele ser mayor para quien vive solo y compra por impulso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántas comidas necesito planear en el menú semanal?</p>
              <p className="faq-a">
                No necesitas planear todas las comidas de todos los días para empezar. Planear solo el almuerzo o solo la cena de la semana ya genera un impacto real. Empieza con 3 o 4 días y ve agregando conforme el ritmo se vuelva natural. Planear el 100% desde el inicio crea una presión innecesaria y aumenta la probabilidad de abandonar.
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
                Creador de Mise. Hizo el menú semanal en papel durante años, perdía el papel cada semana. Ahora lo lleva en la app.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Menú listo. Lista generada.<br />
              <em>A usar Mise.</em>
            </h2>
            <p>
              Conecta despensa, recetas y lista de compras en un solo lugar.
              Tú planeas la semana, Mise arma la lista — sin que se te olvide nada.
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
