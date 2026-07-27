import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Ajo: beneficios, tipos y cómo conservarlo en casa',
  description: 'El ajo es un bulbo de la familia de la cebolla. Qué tipos existen, cómo usarlo en la cocina, los beneficios reales según la ciencia y cómo guardarlo para que dure.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
    },
  },
  openGraph: {
    title: 'Ajo: beneficios, tipos y cómo conservarlo en casa',
    description: 'El ajo es un bulbo de la familia de la cebolla. Qué tipos existen, cómo usarlo en la cocina, los beneficios reales según la ciencia y cómo guardarlo para que dure.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho',
    images: [
      {
        url: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Cabezas de ajo enteras sobre una superficie marrón — bulbos con dientes visibles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajo: beneficios, tipos y cómo conservarlo en casa',
    description: 'El ajo es un bulbo de la familia de la cebolla. Qué tipos existen, cómo usarlo en la cocina, los beneficios reales según la ciencia y cómo guardarlo para que dure.',
    images: ['https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El ajo crudo es mejor que el cocido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para aprovechar la alicina — el principal compuesto activo del ajo — sí, crudo o mínimamente procesado es más efectivo. El calor degrada la alicina rápido. Un truco ayuda: pica o machaca el ajo y déjalo reposar 10 minutos antes de cocinar. Eso le da tiempo a la alicina para formarse y la hace más resistente al calor. El ajo cocido igual tiene beneficios, solo que en menor concentración.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos dientes de ajo al día es seguro comer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la mayoría de los adultos, 1 a 2 dientes al día son suficientes para aprovechar los beneficios sin molestias. Cantidades mayores pueden causar malestar estomacal en algunas personas, sobre todo con el estómago vacío. No existe una dosis mágica establecida científicamente, y más cantidad no es automáticamente mejor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El ajo en polvo sustituye al ajo fresco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para el sabor, es un sustituto parcial — más suave y con un perfil aromático distinto al fresco. Para los beneficios nutricionales, es menos eficiente, porque el secado reduce los compuestos activos. En un apuro, ¼ de cucharadita de ajo en polvo equivale más o menos a 1 diente fresco. El fresco siempre rinde más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el ajo se pone verde o azul al cocinarlo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una reacción entre los compuestos de azufre y los aminoácidos del bulbo, provocada por calor alto o contacto con algún ácido. No significa que se echó a perder ni que se volvió tóxico — es química normal. El sabor puede quedar un poco más amargo. Para evitarlo, cocina a fuego medio con el aceite todavía tibio, no ardiendo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es peligroso guardar ajo en aceite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede serlo si se guarda mal. El ajo puede tener esporas que, cubiertas de aceite y a temperatura ambiente, crean el ambiente sin oxígeno ideal para que se desarrolle la bacteria que causa botulismo. La regla de seguridad: prepara solo la cantidad que vas a usar pronto, guárdala siempre en el refrigerador a 4°C o menos, y consúmela dentro de una semana. Para conservarlo más tiempo, congelar es la opción segura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo quitar el olor a ajo de las manos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frota las manos contra algo de acero inoxidable — una cuchara, el fregadero o una barra de jabón de inox — bajo agua fría durante unos segundos. El metal neutraliza los compuestos de azufre responsables del olor. El jabón normal ayuda poco, porque el olor queda en los poros de la piel. Con acero inoxidable, se va casi por completo.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ajo: beneficios, tipos y cómo conservarlo en casa',
  description: 'El ajo es un bulbo de la familia de la cebolla. Qué tipos existen, cómo usarlo en la cocina, los beneficios reales según la ciencia y cómo guardarlo para que dure.',
  image: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Qué es el ajo', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho' },
  ],
}

export default function GarlicEs() {
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
            <li className="breadcrumb-current" aria-current="page">Qué es el ajo</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">26 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Ajo: la guía sin vueltas para quien lo usa en la cocina cada semana
          </h1>
          <p className="blog-desc">
            Está en el sofrito, la salsa, la marinada y la sopa. Pero qué es el ajo en realidad, qué tipos existen, cómo usarlo sin perder el aroma — y por qué siempre falta justo cuando la receta lo pide.
          </p>

          <div className="answer-box">
            <p>
              <strong>El ajo</strong> (<em>Allium sativum</em>) es un bulbo comestible de la familia de las aliáceas —
              la misma familia de la cebolla, el puerro y el chalote.
              Su aroma y sabor intensos vienen de la <strong>alicina</strong>, un compuesto de azufre
              que se libera cuando el diente se machaca o se pica. Es uno de los ingredientes más
              usados en cocinas de todo el mundo.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Cabezas de ajo enteras sobre una superficie marrón — bulbos con dientes visibles"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Contenido del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es-el-ajo">Qué es el ajo</a></li>
              <li><a href="#tipos">Tipos de ajo</a></li>
              <li><a href="#como-usarlo">Cómo usar el ajo en la cocina</a></li>
              <li><a href="#beneficios">Qué dice la ciencia sobre sus beneficios</a></li>
              <li><a href="#como-guardarlo">Cómo guardar el ajo</a></li>
              <li><a href="#en-tu-lista">El ajo en tu lista de compras</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          {/* QUÉ ES EL AJO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13800740/pexels-photo-13800740.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dientes de ajo pelados en primer plano — interior blanco y firme"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="que-es-el-ajo" className="img-above">Qué es el ajo</h2>

          <p>
            El ajo no es una raíz ni un tubérculo — es un bulbo. La planta crece bajo tierra y
            forma una cabeza compuesta por varios dientes, cada uno envuelto en una piel fina,
            sostenidos juntos por una capa exterior más parecida al papel.
          </p>
          <p>
            El compuesto responsable del olor y el sabor es la alicina. No existe en el diente
            entero — se forma solo cuando cortas, machacas o picas el ajo. Antes de eso, los
            precursores están separados dentro de las células. El daño físico dispara la
            reacción, por eso el ajo picado sabe más fuerte que el ajo en láminas: más células
            rotas, más alicina liberada.
          </p>
          <p>
            El ajo es originario de Asia Central y forma parte de la cocina humana desde hace al
            menos 5.000 años. Aparece de una forma u otra en casi todas las cocinas del planeta —
            italiana, china, india, mexicana, coreana, la que se te ocurra. Junto con la cebolla,
            es el punto de partida de la mayoría de los platos salados, en cualquier parte del
            mundo.
          </p>
          <p>
            Un diente pesa entre 3 y 5 gramos y tiene menos de 5 calorías. Lo que sea que le haga
            a un plato, no lo hace por los macronutrientes.
          </p>

          {/* TIPOS */}
          <h2 id="tipos">Tipos de ajo</h2>

          <p>
            Los supermercados suelen vender un solo tipo de ajo y ya, pero hay más variedad de la
            que parece en la verdulería — y conocer la diferencia cambia cómo cocinas y cuánto
            dura una cabeza en tu cocina.
          </p>

          <h3>Ajo blanco</h3>
          <p>
            El más común en los mercados de América Latina. Dientes carnosos, piel casi
            plateada, cabezas con más dientes que otras variedades. Se conserva mejor y por más
            tiempo que el morado, que es exactamente la razón por la que domina el estante del
            supermercado casi todo el año.
          </p>

          <h3>Ajo morado</h3>
          <p>
            Madura antes que el blanco y tiene dientes más grandes, con sabor más picante e
            intenso. Se usa mucho en botanas y salsas en México, y aparece seguido en ferias y
            mercados populares en buena parte de la región. La contrapartida: se conserva menos
            tiempo que el blanco, así que conviene usarlo antes.
          </p>

          <h3>Ajo negro</h3>
          <p>
            Ajo común envejecido durante semanas bajo calor y humedad controlados, hasta que se
            pone negro y casi almibarado. El proceso convierte los compuestos picantes en algo
            dulce y con un fondo umami, parecido a un vinagre balsámico concentrado. No pica
            nada. Se usa en salsas, aderezos y untado directo sobre pan.
          </p>

          <h3>Ajo en pasta, en polvo y en conserva</h3>
          <p>
            Productos de conveniencia — ajo picado en aceite o en agua, pasta de ajo, ajo en
            polvo. Ahorran tiempo de verdad, pero el sabor no es el mismo que el fresco. La
            alicina se degrada rápido una vez procesada, así que el ajo en conserva sabe
            notablemente más plano que uno que picas cinco minutos antes de cocinar. Sirve como
            respaldo, no como primera opción.
          </p>

          {/* CÓMO USARLO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10258187/pexels-photo-10258187.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Trenza de ajo fresco con hojas — bulbos curados listos para usar"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="como-usarlo" className="img-above">Cómo usar el ajo en la cocina</h2>

          <p>
            La forma de cortarlo cambia lo que hace en la sartén. Picar, laminar, machacar o
            dejarlo entero no son técnicas intercambiables — cambian cuánta alicina se libera y
            cómo se comporta el sabor con el calor.
          </p>

          <h3>Picado o machacado</h3>
          <p>
            La opción por defecto en la mayoría de los sofritos. Mientras más rompes la
            estructura del diente, más alicina se libera y más fuerte queda el sabor. Un truco:
            aplasta el diente con el lado plano del cuchillo antes de picarlo — se pela más fácil
            y se acelera la preparación. A fuego medio, 30 a 60 segundos bastan antes de que
            empiece a quemarse.
          </p>

          <h3>En láminas</h3>
          <p>
            Sabor más suave, más textura. Funciona bien para saltear verduras de hoja, terminar
            una pasta o freír en aceite para hacer un aceite con sabor a ajo. A fuego alto, las
            láminas finas se doran y quedan crujientes rápido — pero la línea entre dorado y
            quemado es delgada, y el ajo quemado arruina el sabor de todo el plato.
          </p>

          <h3>Entero</h3>
          <p>
            Agregado a la sartén sin pelar, el ajo suelta sabor despacio. Funciona bien en
            guisos largos, caldos y asados. Después de suficiente tiempo en el horno, una cabeza
            entera se pone suave y casi dulce — el ajo asado es básicamente otro ingrediente, una
            pasta untable que va bien en pan, en puré de papas o mezclada en una salsa.
          </p>

          <h3>Crudo</h3>
          <p>
            Ensaladas, guacamole, salsa de tahini, cualquier cosa que se sirve fría. El sabor es
            fuerte — úsalo con moderación. Un truco que suaviza el sabor sin cocinarlo: deja el
            ajo picado en jugo de limón por 10 minutos antes de agregarlo al plato. El ácido baja
            la intensidad sin matar el aroma.
          </p>

          <h3>Ajo en polvo</h3>
          <p>
            La opción de conveniencia. Se disuelve bien en marinadas y sazonadores secos, aunque
            no se carameliza como el ajo fresco y le falta la misma profundidad. Úsalo cuando no
            tienes fresco a la mano o cuando la receta necesita una textura pareja, sin grumos.
            Conversión aproximada: 1 diente fresco equivale a ¼ de cucharadita de ajo en polvo.
          </p>

          <div className="blog-inline-cta">
            <p>Ajo en la despensa, lista armada sin pensarlo. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          {/* BENEFICIOS */}
          <h2 id="beneficios">Qué dice la ciencia sobre los beneficios del ajo</h2>

          <p>
            El ajo está entre los ingredientes de cocina más estudiados que existen. Algunas
            afirmaciones se sostienen bien. Otras siguen siendo preguntas abiertas. Esto es lo
            que está realmente establecido:
          </p>

          <h3>Salud cardiovascular</h3>
          <p>
            Es el área con más evidencia. Los estudios de revisión relacionan el consumo regular
            de ajo con reducciones modestas en la presión arterial sistólica y el colesterol
            LDL — normalmente unos pocos puntos, no un cambio dramático. No sustituye ningún
            medicamento, pero es un hábito alimentario razonable. El motor principal es la
            alicina, que inhibe enzimas involucradas en la síntesis del colesterol.
          </p>

          <h3>Acción antimicrobiana</h3>
          <p>
            La alicina tiene actividad antimicrobiana documentada en estudios de laboratorio —
            inhibe el crecimiento de varias bacterias y hongos in vitro. Eso no significa que el
            ajo reemplace a los antibióticos en la vida real. Pero explica por qué se ha usado
            como conservante durante siglos, y de dónde viene la creencia popular de que &ldquo;mata
            los microbios&rdquo;.
          </p>

          <h3>Propiedades antioxidantes</h3>
          <p>
            El ajo contiene compuestos que reducen el estrés oxidativo celular, lo que contribuye
            a los efectos antiinflamatorios observados en algunos estudios. El extracto de ajo
            envejecido — ajo fermentado durante semanas — tiene una concentración más alta de
            antioxidantes que el ajo fresco, por eso es la forma que más se usa en suplementos.
          </p>

          <h3>Lo que todavía no está probado</h3>
          <p>
            Tratamiento de cáncer, curas milagrosas, detox — hay investigación preliminar en
            algunas de estas áreas, pero nada concluyente todavía. El ajo no necesita el bombo.
            Tiene beneficios reales y bien documentados, y eso ya es motivo suficiente para
            tenerlo siempre en casa.
          </p>

          {/* CÓMO GUARDARLO */}
          <h2 id="como-guardarlo">Cómo guardar el ajo para que dure</h2>

          <p>
            Entero, sin pelar, en un lugar fresco y con buena ventilación — esa es la base. Nada
            de refrigerador para la cabeza entera: el frío y la humedad aceleran que brote y le
            cambian la textura. En una canasta, un frutero o un recipiente de cerámica con
            orificios, una cabeza dura semanas sin ningún cuidado especial.
          </p>

          <h3>Dientes pelados</h3>
          <p>
            Dientes sueltos y pelados, en un recipiente cerrado dentro del refrigerador, duran
            cerca de una semana. Después empiezan a secarse y perder sabor.
          </p>
          <p>
            Un dato de seguridad que vale la pena conocer: si cubres los dientes con aceite para
            conservarlos, guárdalos siempre en el refrigerador y consúmelos dentro de una semana.
            El ajo en aceite a temperatura ambiente puede desarrollar la toxina que causa
            botulismo, porque el ambiente sin oxígeno que se forma bajo el aceite es justo donde
            esa bacteria se desarrolla mejor. No es un riesgo teórico — organismos de seguridad
            alimentaria lo señalan puntualmente con ajo y hierbas frescas conservadas en aceite.
            Frío y en cantidades chicas, siempre.
          </p>

          <h3>Ajo picado</h3>
          <p>
            Dura cerca de 3 días en el refrigerador, en un recipiente cerrado. La alicina empieza
            a degradarse poco después de cortar el diente, así que el sabor se pierde rápido.
            Para cocinar seguido, picar en cantidades pequeñas justo antes de usar rinde mejor
            que preparar una tanda grande por adelantado.
          </p>

          <h3>Ajo brotado</h3>
          <p>
            No es basura. El brote verde del centro se pone amargo — sácalo antes de usar. El
            resto del diente funciona bien. El ajo brotado tiene un sabor un poco más suave que
            el fresco, pero todavía rinde en un sofrito o un asado.
          </p>

          <h3>Congelar ajo</h3>
          <p>
            Licúa los dientes pelados con un poco de aceite de oliva y congela en una cubeta de
            hielo. Cada cubito equivale más o menos a una cucharada de ajo picado. Directo del
            congelador a la sartén, sin descongelar. La textura cambia después de congelado, así
            que no sirve para comerlo crudo — pero para platos cocidos funciona bien hasta por 3
            meses.
          </p>

          {/* EN TU LISTA */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059593/pexels-photo-13059593.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Ajo sobre una mesa de madera — cabezas y dientes sueltos listos para cocinar"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="en-tu-lista" className="img-above">El ajo en tu lista de compras</h2>

          <p>
            El ajo es de los ingredientes que más se olvida comprar — no porque sea raro, sino
            porque es barato, chico y parece que va a durar para siempre. No dura. Una cabeza
            desaparece más rápido de lo que crees cuando cocinas casi todos los días.
          </p>
          <p>
            Una cabeza de ajo tiene en promedio de 10 a 14 dientes. Usa 2 dientes por comida y
            cocina 5 noches a la semana, y una cabeza dura menos de 2 semanas. Cocina para una
            familia de cuatro y se acaba dentro de la semana. Poner ajo en la lista cada semana
            no es exagerar — es ser realista.
          </p>
          <p>
            Para quien cocina con algún tipo de sistema, llevar el control del ajo en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>{' '}
            es más útil de lo que suena. Sabes exactamente cuántas cabezas tienes, cuándo se te
            está por acabar, y no terminas un jueves a media receta con la sartén al fuego y sin
            ajo.
          </p>
          <p>
            Un enfoque simple: compra 3 o 4 cabezas de una vez cuando el precio esté bien. El ajo
            entero, sin pelar, se conserva bien por 3 semanas sin ningún cuidado especial. A
            diferencia de las hojas verdes o los productos delicados, básicamente no hay riesgo
            de que se eche a perder antes de que lo uses.
          </p>
          <p>
            El ajo pertenece en cualquier{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>{' '}
            sólida — justo al lado de la cebolla, porque juntos aparecen en casi todo lo que vas
            a cocinar esta semana. Si falta uno, la receta cambia. Si faltan los dos, terminas
            improvisando, y improvisar no siempre sale bien.
          </p>
          <p>
            Nunca más se te va a olvidar el ajo en el camino a casa. A menos que se te olvide
            revisar la lista.
          </p>

          {/* FAQ */}
          <h2 id="faq">Preguntas frecuentes sobre el ajo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿El ajo crudo es mejor que el cocido?</p>
              <p className="faq-a">
                Para aprovechar la alicina — el principal compuesto activo — sí, crudo o
                mínimamente procesado es más efectivo. El calor la degrada rápido. Un truco
                ayuda: pica o machaca el ajo y déjalo reposar 10 minutos antes de cocinar. En ese
                tiempo la alicina se forma y queda más resistente al calor. El ajo cocido igual
                tiene beneficios, solo que en menor concentración.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántos dientes de ajo al día es seguro comer?</p>
              <p className="faq-a">
                Para la mayoría de los adultos, 1 a 2 dientes al día es una cantidad razonable
                para aprovechar los beneficios sin molestias estomacales. Cantidades mayores
                pueden causar ardor o irritación, sobre todo con el estómago vacío. Más no es
                automáticamente mejor — no hay una dosis mágica establecida por la ciencia.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿El ajo en polvo sustituye al ajo fresco?</p>
              <p className="faq-a">
                Para el sabor, es un sustituto parcial — más suave y con un perfil distinto. Para
                los beneficios, es menos eficiente porque el secado reduce los compuestos
                activos. En un apuro: ¼ de cucharadita de ajo en polvo equivale más o menos a 1
                diente fresco. El fresco siempre rinde más.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Por qué el ajo se pone verde o azul al cocinarlo?</p>
              <p className="faq-a">
                Es una reacción entre los compuestos de azufre y los aminoácidos del bulbo,
                provocada por calor alto o contacto con algún ácido. No significa que se echó a
                perder ni que se volvió tóxico — es química normal. El sabor puede quedar un poco
                más amargo. Para evitarlo, cocina a fuego medio con el aceite todavía tibio, nunca
                en una sartén sobrecalentada.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Es peligroso guardar ajo en aceite?</p>
              <p className="faq-a">
                Puede serlo si se guarda mal. El ajo puede tener esporas que, cubiertas de aceite
                y a temperatura ambiente, crean el ambiente sin oxígeno ideal para que se
                desarrolle la bacteria que causa botulismo. La regla de seguridad: prepara solo la
                cantidad que vas a usar pronto, guárdala en el refrigerador a 4°C o menos, y
                consúmela dentro de una semana. Para más tiempo, congelar es la opción segura.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo quitar el olor a ajo de las manos?</p>
              <p className="faq-a">
                Frota las manos contra algo de acero inoxidable — una cuchara, el fregadero o una
                barra de jabón de inox — bajo agua fría durante unos segundos. El metal neutraliza
                los compuestos de azufre responsables del olor. El jabón normal ayuda poco, porque
                el olor queda en los poros de la piel. Con acero inoxidable, se va casi por
                completo.
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
                Creador de Mise. Siempre está seguro de que hay ajo en casa. Se equivoca la
                mayoría de las veces.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Una despensa que se acuerda.<br />
              <em>Deja que Mise se encargue.</em>
            </h2>
            <p>
              Mise conecta tu despensa, tus recetas y tu lista de compras en un solo lugar. El
              ajo no se acaba sin avisar — vas a saber que se está terminando antes de quedarte
              sin él.
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
