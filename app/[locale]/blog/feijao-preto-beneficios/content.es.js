import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Frijol negro: beneficios, nutrición y cómo cocinarlo bien',
  description: 'El frijol negro aporta proteína vegetal, hierro y fibra en cada porción. Conoce sus beneficios, la diferencia con el frijol rojo y cómo tenerlo siempre listo.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/feijao-preto-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/feijao-preto-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/feijao-preto-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/feijao-preto-beneficios',
    },
  },
  openGraph: {
    title: 'Frijol negro: beneficios, nutrición y cómo cocinarlo bien',
    description: 'El frijol negro aporta proteína vegetal, hierro y fibra en cada porción. Conoce sus beneficios, la diferencia con el frijol rojo y cómo tenerlo siempre listo.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/feijao-preto-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Frijoles negros secos en primer plano — granos oscuros y brillantes sobre superficie rústica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frijol negro: beneficios, nutrición y cómo cocinarlo bien',
    description: 'El frijol negro aporta proteína vegetal, hierro y fibra en cada porción. Conoce sus beneficios, la diferencia con el frijol rojo y cómo tenerlo siempre listo.',
    images: ['https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El frijol negro engorda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El frijol negro tiene cerca de 130 calorías por 100 g cocido. No es un alimento bajo en calorías, pero la fibra aumenta la saciedad y reduce el total calórico de la comida. El consumo regular de leguminosas se asocia con menor índice de masa corporal en estudios poblacionales — lo contrario de engordar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre el frijol negro y el frijol rojo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El frijol negro tiene más antioxidantes — flavonoides y polifenoles concentrados en la cáscara oscura. El perfil de proteína y fibra es similar entre los dos. El frijol negro tiene sabor más terroso; el rojo es más suave y cremoso al cocinarse. En nutrición, el negro tiene ventaja en antioxidantes. En sabor, depende de la receta y del gusto de cada quien.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede comer frijol negro todos los días?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. No hay restricción conocida para el consumo diario en cantidad razonable — una taza de frijol cocido por comida. Quien tiene el intestino sensible puede empezar con porciones más pequeñas e ir aumentando poco a poco. Dejarlo en remojo de 8 a 12 horas antes de cocinar reduce los compuestos que causan gases.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo reducir el gas del frijol negro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dejarlo en remojo de 8 a 12 horas y desechar el agua antes de cocinar. Esto reduce los oligosacáridos responsables de la fermentación intestinal. Cocinarlo bien también ayuda — el frijol mal cocido fermenta más. Quien no tiene el hábito de comer frijol seguido puede introducirlo poco a poco: el organismo se adapta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El frijol negro tiene gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El frijol negro natural no tiene gluten. Quien tiene enfermedad celíaca o sensibilidad debe revisar la etiqueta de marcas industrializadas — puede haber contaminación cruzada en el procesamiento según la fábrica. El frijol enlatado y condimentado también puede tener aditivos — revisa siempre los ingredientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se guarda el frijol negro en casa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seco: en un frasco cerrado fuera del refrigerador, dura meses — respeta la fecha del empaque. Cocido: en el refrigerador hasta 4 días, en un recipiente tapado. En el congelador, en porciones separadas, hasta 3 meses. Se congela bien y se descongela rápido a baño María o directo en la olla.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frijol negro: beneficios, nutrición y cómo cocinarlo bien',
  description: 'El frijol negro aporta proteína vegetal, hierro y fibra en cada porción. Conoce sus beneficios, la diferencia con el frijol rojo y cómo tenerlo siempre listo.',
  image: 'https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/feijao-preto-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Frijol negro: beneficios', item: 'https://www.miseemcasa.com.br/es/blog/feijao-preto-beneficios' },
  ],
}

export default function FrijolNegroEs() {
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
            <li className="breadcrumb-current" aria-current="page">Frijol negro: beneficios</li>
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
            Frijol negro: qué tiene por dentro y por qué vale la pena tenerlo siempre en casa
          </h1>
          <p className="blog-desc">
            Un grano barato, fácil de guardar y con más nutrición de la que la mayoría se imagina. Proteína vegetal, hierro, fibra y antioxidantes — todo junto en el mismo frijol que ya debería estar en tu despensa toda la semana.
          </p>

          <div className="answer-box">
            <p>
              <strong>El frijol negro</strong> concentra proteína vegetal, hierro y fibra en un solo grano.
              Por 100 g cocido: cerca de 8 g de proteína, 8 g de fibra y 2 mg de hierro.
              Es el frijol con mayor concentración de antioxidantes entre los tipos más comunes — la cáscara oscura es la señal.
              Cuesta poco, se congela sin perder calidad y combina con prácticamente cualquier condimento.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7772002/pexels-photo-7772002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Frijoles negros secos en primer plano — granos oscuros y brillantes sobre superficie rústica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Anna Tarazevich / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#nutrientes">Qué tiene el frijol negro</a></li>
              <li><a href="#beneficios">Beneficios para la salud</a></li>
              <li><a href="#frijol-rojo">Frijol negro o frijol rojo</a></li>
              <li><a href="#como-preparar">Cómo prepararlo en casa</a></li>
              <li><a href="#frecuencia">Cuánto y con qué frecuencia</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ TIENE EL FRIJOL NEGRO */}
          <h2 id="nutrientes">Qué tiene el frijol negro</h2>

          <p>
            El frijol negro tiene un perfil nutricional mejor de lo que la mayoría se imagina. No es un alimento especial ni difícil de conseguir — es el grano barato que ya está en la despensa de medio continente.
          </p>
          <p>
            Por 100 g de frijol negro cocido, según bases de datos nutricionales como el{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>:
          </p>

          <ul className="item-list">
            <li>~8 g de proteína vegetal</li>
            <li>~8 g de fibra (incluyendo almidón resistente)</li>
            <li>~2 mg de hierro</li>
            <li>~60 mg de magnesio</li>
            <li>~130 kcal</li>
          </ul>

          <p>
            La proteína es vegetal — incompleta por sí sola. Pero combinada con arroz, los dos granos se complementan. Los aminoácidos que le faltan al frijol están en el arroz, y al revés. El plato de arroz con frijol que se repite de México a Argentina no es tradición por casualidad.
          </p>
          <p>
            La fibra incluye almidón resistente: un tipo que no se digiere en el estómago. Llega intacto al intestino grueso y se convierte en alimento para las bacterias buenas. Resultado: mejor absorción de nutrientes y menos inflamación con el tiempo.
          </p>
          <p>
            El hierro del frijol es no-hemo — más difícil de absorber que el de la carne. El truco: comerlo junto con vitamina C. Una naranja de postre o pimiento en el condimento ya ayudan a la absorción.
          </p>
          <p>
            La cáscara oscura tiene alta concentración de flavonoides y polifenoles — antioxidantes que combaten radicales libres. Justo eso es lo que distingue al frijol negro de otros tipos en cuanto a nutrición. Mientras más oscura la cáscara, mayor la concentración de estos compuestos.
          </p>

          {/* BENEFICIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5388653/pexels-photo-5388653.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Frijol negro cocido en un tazón oscuro — listo para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Ruslan Khmelevsky / Pexels</p>
          </div>

          <h2 id="beneficios" className="img-above">Beneficios del frijol negro para la salud</h2>

          <p>
            Con ese perfil nutricional, los beneficios son directos. No hace falta promesa — los datos ya están en el grano.
          </p>

          <h3>Salud intestinal</h3>
          <p>
            La fibra regula el tránsito intestinal y alimenta el microbioma. El almidón resistente es especialmente importante para la diversidad bacteriana. Una dieta cargada de ultraprocesados destruye esa diversidad con el tiempo. El frijol va en dirección contraria.
          </p>

          <h3>Control de la glucosa</h3>
          <p>
            La fibra reduce la velocidad de absorción de los carbohidratos. Eso evita un pico de glucosa después de comer. Es relevante para quien quiere mantener energía estable durante el día — y más aún para quien tiene resistencia a la insulina.
          </p>

          <h3>Colesterol</h3>
          <p>
            La fibra soluble se une al colesterol LDL en el intestino y ayuda a eliminarlo. No sustituye ningún tratamiento médico, pero es un apoyo constante y barato.
          </p>

          <h3>Hierro y anemia</h3>
          <p>
            El frijol negro es una de las mejores fuentes de hierro vegetal que puedes comprar en cualquier tienda. Es relevante especialmente para mujeres en edad reproductiva, vegetarianos y veganos. Recuerda: el hierro no-hemo necesita vitamina C cerca para absorberse mejor.
          </p>

          <h3>Proteína vegetal accesible</h3>
          <p>
            Cerca de 8 g por 100 g cocido. En una porción de 200 g, son 16 g de proteína. No es pollo, pero es mucho más de lo que la mayoría se imagina. Quien busca{' '}
            <a href="/es/blog/alimentos-ricos-em-proteinas">alimentos ricos en proteína</a>{' '}
            casi siempre pasa de largo por el frijol — y paga más caro por opciones peores.
          </p>

          <h3>Antioxidantes</h3>
          <p>
            Los polifenoles de la cáscara oscura tienen acción antioxidante documentada. La concentración es mayor en el frijol negro que en el rojo o el blanco. No es milagro — es un efecto acumulativo del consumo regular a lo largo de los años.
          </p>

          <p>
            Una porción a la semana no cambia nada. Todos los días, durante años — ahí sí lo notan tus próximos análisis de sangre.
          </p>

          {/* FRIJOL NEGRO O ROJO */}
          <h2 id="frijol-rojo">Frijol negro o frijol rojo: ¿cuál elegir?</h2>

          <p>
            La pregunta aparece seguido en las cocinas donde los dos conviven en la despensa. La respuesta corta: los dos son buenos. Pero tienen diferencias reales que vale la pena conocer.
          </p>
          <p>
            El frijol negro tiene más antioxidantes. La cáscara oscura indica mayor concentración de flavonoides y polifenoles — compuestos que el frijol rojo, de cáscara más clara, tiene en menor cantidad. Esa diferencia es real y aparece documentada en análisis comparativos de composición nutricional.
          </p>
          <p>
            El perfil de proteína y fibra es similar entre los dos. La diferencia está en los micronutrientes y antioxidantes, donde el negro lleva ventaja.
          </p>
          <p>
            El frijol rojo tiene sabor más suave y se deshace en una textura más cremosa — por eso es el preferido para frijoles refritos en buena parte de México. El frijol negro mantiene mejor su forma y tiene un sabor más terroso y marcado — funciona bien con comino, laurel y ajo, y es el estándar en Cuba, el sureste de México, Centroamérica y buena parte del Caribe.
          </p>
          <p>
            ¿Cuál usar? Depende de lo que vayas a cocinar. Si la elección es solo nutricional, el frijol negro tiene ventaja en antioxidantes. Pero esa diferencia no justifica cambiar de hábito si ya comes frijol rojo toda la semana. Comer el frijol que más te gusta es mejor que comer el "más saludable" con menos frecuencia.
          </p>

          <div className="blog-inline-cta">
            <p>Frijol negro siempre en la despensa. <em>Mise te avisa cuando se está acabando.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* COMO PREPARAR */}
          <h2 id="como-preparar">Cómo preparar frijol negro en casa</h2>

          <p>
            No tiene secreto. Sí tiene una forma de quedar mejor — y una forma de arruinarlo.
          </p>

          <h3>En remojo (no te saltes este paso)</h3>
          <p>
            Deja el frijol negro en remojo de 8 a 12 horas antes de cocinar. Desecha el agua del remojo. Esto reduce los oligosacáridos — los azúcares responsables de producir gases. No los elimina por completo, pero hace suficiente diferencia como para valer el trabajo extra.
          </p>

          <h3>En olla de presión</h3>
          <p>
            20 a 25 minutos después de que la olla llegue a presión. Frijol ya remojado, agua suficiente para cubrir bien. No hace falta medir con precisión — el frijol absorbe agua y se hincha solo. Resultado: granos suaves, caldo espeso.
          </p>

          <h3>En olla normal</h3>
          <p>
            1 hora y media a 2 horas a fuego medio con tapa. Misma regla del remojo. Toma más tiempo, pero da más control — vas viendo la textura mientras cocina y decides cuándo parar.
          </p>

          <h3>La sal va al final</h3>
          <p>
            La sal desde el principio endurece la cáscara. Agrégala solo cuando el frijol ya esté suave — en los últimos 5 minutos. La textura queda pareja y el caldo absorbe mejor el condimento.
          </p>

          <h3>El condimento base</h3>
          <p>
            Ajo, hoja de laurel y cebolla: lo mínimo que convierte un frijol simple en algo que vale la pena comer. Comino y pimienta negra son opcionales que mejoran el resultado. Tomate ya cocido, si quieres algo más espeso.
          </p>

          <h3>Cocina en cantidad y congela</h3>
          <p>
            El frijol cocido se congela bien. Sepáralo en porciones de una o dos tazas, en recipientes, al congelador. Dura hasta 3 meses sin perder calidad. Vas a agradecerlo el día que no tengas tiempo de cocinar nada desde cero.
          </p>

          <p>
            El momento en que decides cocinar frijol suele ser el mismo momento en que descubres que se acabó. Una{' '}
            <a href="/es/funcionalidades/despensa">despensa que muestra lo que tienes</a>{' '}
            te avisa antes de que lo necesites — sin tener que abrir la alacena para descubrirlo.
          </p>

          {/* FRECUENCIA */}
          <h2 id="frecuencia">Cuánto frijol negro comer y con qué frecuencia</h2>

          <p>
            No hay restricción conocida para comer frijol negro todos los días. En una cantidad razonable —una taza de frijol cocido (unos 200 g) por comida— es uno de los mejores hábitos alimenticios para quien cocina en casa.
          </p>
          <p>
            La combinación de arroz con frijol que se repite de México a Argentina no es casualidad. Es eficiente: costo bajo, proteína complementaria, fibra, minerales, antioxidantes. La combinación que los investigadores en nutrición tardaron décadas en "descubrir" como ideal ya estaba en la mesa de la mayoría de las familias latinoamericanas desde hace generaciones.
          </p>
          <p>
            Quien tiene gases con frecuencia puede intentar reducir la cantidad inicial y aumentarla poco a poco. El organismo se adapta — y el remojo previo ayuda.
          </p>
          <p>
            La cantidad razonable es de 150 a 200 g de frijol cocido por comida. Más que eso es mucho de una sola vez. Menos, está bien — pero si es la única fuente de proteína vegetal del día, vale la pena revisar el resto del menú.
          </p>
          <p>
            Un bote de proteína en polvo de marca cara no aporta mucho más que 8 g de proteína por 100 g de frijol que cuesta una fracción del precio. La cuenta es simple.
          </p>
          <p>
            Frijol negro en la{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            toda la semana. Junto al arroz, donde siempre debería estar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el frijol negro</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El frijol negro engorda?</p>
              <p className="faq-a">
                Tiene cerca de 130 calorías por 100 g cocido — no es un alimento bajo en calorías.
                Pero la fibra aumenta la saciedad y reduce el total calórico de la comida.
                El consumo regular de leguminosas se asocia con menor índice de masa corporal en estudios poblacionales.
                El problema nunca es el frijol: es lo que lo acompaña.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre el frijol negro y el frijol rojo?</p>
              <p className="faq-a">
                El frijol negro tiene más antioxidantes — flavonoides y polifenoles concentrados en la cáscara oscura.
                El perfil de proteína y fibra es similar entre los dos.
                El frijol negro tiene sabor más terroso; el rojo es más suave y cremoso.
                En la práctica: el negro mantiene mejor su forma, el rojo se deshace mejor para hacer frijoles refritos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Se puede comer frijol negro todos los días?</p>
              <p className="faq-a">
                Sí. No hay restricción conocida para el consumo diario en cantidad razonable.
                Quien tiene el intestino sensible puede empezar con porciones más pequeñas e ir aumentando poco a poco.
                Dejarlo en remojo antes de cocinar y desechar el agua reduce los compuestos que causan gases.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo reducir el gas del frijol negro?</p>
              <p className="faq-a">
                Dejarlo en remojo de 8 a 12 horas y desechar el agua del remojo.
                Esto reduce los oligosacáridos responsables de la fermentación intestinal.
                Cocinarlo bien también ayuda — el frijol mal cocido fermenta más.
                El organismo se adapta con el consumo regular: quien come frijol cada semana tiene menos gases que quien lo come una vez al mes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El frijol negro tiene gluten?</p>
              <p className="faq-a">
                El frijol negro natural no tiene gluten.
                Quien tiene enfermedad celíaca debe revisar la etiqueta de marcas industrializadas — puede haber contaminación cruzada según la fábrica.
                El frijol enlatado y condimentado puede tener aditivos con gluten. Revisa siempre los ingredientes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo se guarda el frijol negro en casa?</p>
              <p className="faq-a">
                Seco: en un frasco cerrado fuera del refrigerador, dura meses — respeta la fecha del empaque.
                Cocido: en el refrigerador hasta 4 días, en un recipiente tapado.
                En el congelador, en porciones separadas, hasta 3 meses.
                Se congela bien y se descongela rápido a baño María o directo en la olla.
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
                Creador de Mise. Siempre tiene frijol negro en la despensa. Una vez salió a comprar más pensando que se había acabado — no era cierto, estaba atrás del arroz.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Frijol negro en la despensa.<br />
              <em>Vamos a ver qué más hay.</em>
            </h2>
            <p>
              Mise conecta despensa, recetas y{' '}
              <a href="/es/funcionalidades/lista-de-compras" className="cta-link">lista de compras</a>{' '}
              en un solo lugar. Compras lo que realmente vas a usar — y nunca descubres a media semana que se acabó.
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
