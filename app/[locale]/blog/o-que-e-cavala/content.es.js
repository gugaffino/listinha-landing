import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Caballa: valor nutricional, mercurio y cómo prepararla',
  description: 'La caballa es un pescado azul con unos 5.100mg de omega-3 por cada 100g — más que el salmón. Qué es, fresca o en lata, el tema del mercurio y cómo cocinarla.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-cavala',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-cavala',
    },
  },
  openGraph: {
    title: 'Caballa: valor nutricional, mercurio y cómo prepararla',
    description: 'La caballa es un pescado azul con unos 5.100mg de omega-3 por cada 100g — más que el salmón. Qué es, fresca o en lata, el tema del mercurio y cómo cocinarla.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala',
    images: [
      {
        url: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Caballa fresca sobre hielo en una pescadería — pescado entero de piel azul metálica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caballa: valor nutricional, mercurio y cómo prepararla',
    description: 'La caballa es un pescado azul con unos 5.100mg de omega-3 por cada 100g — más que el salmón. Qué es, fresca o en lata, el tema del mercurio y cómo cocinarla.',
    images: ['https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Caballa y macarela son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Según la región, el mismo pescado (Scomber spp.) se conoce como caballa o macarela — en México y Colombia es común escuchar los dos nombres. Distinto es el caso de la carite o "king mackerel", un pez mucho más grande con niveles de mercurio altos. No hay que confundirlos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre caballa y atún?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Caballa y atún son de la misma familia (Scombridae), pero especies distintas. La caballa es más pequeña, tiene más omega-3 por cada 100g y suele costar menos. El atún claro en lata que se vende normalmente es barrilete, con menos grasa y menos omega-3 que la caballa. El sabor de la caballa es más intenso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La caballa en lata tiene los mismos nutrientes que la fresca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En gran parte, sí. El proceso de enlatado conserva bien las proteínas y el omega-3. El sodio es más alto en la conserva con sal — si te preocupa, busca la versión sin sal añadida o escurre y enjuaga antes de servir. La vitamina D y la B12 también se mantienen bien después del proceso industrial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas veces por semana puedo comer caballa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La recomendación general es comer pescado al menos dos veces por semana. La caballa del Atlántico tiene bajo contenido de mercurio — distinto de especies grandes como el atún de aleta azul o el pez espada. Porciones de 85 a 100g, de dos a tres veces por semana, son seguras y nutritivas para adultos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La caballa tiene mercurio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La caballa del Atlántico (Scomber scombrus) tiene bajo contenido de mercurio y se considera segura para consumo frecuente. Las especies con mercurio elevado son las de gran tamaño — atún de aleta azul, carite y pez espada. No hay que confundir la caballa común con la carite (a veces llamada "caballa rey" o "king mackerel" en inglés).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo saber si la caballa fresca está en buen estado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ojos brillantes y transparentes (no opacos), agallas rojas o rosadas, carne firme al tacto y olor a mar — no a pescado viejo. La piel azul metálica brillante es señal de frescura. Cuando ese brillo empieza a apagarse, ya pasó su mejor momento. Pregunta al pescadero qué llegó ese día.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Caballa: valor nutricional, mercurio y cómo prepararla',
  description: 'La caballa es un pescado azul con unos 5.100mg de omega-3 por cada 100g — más que el salmón. Qué es, fresca o en lata, el tema del mercurio y cómo cocinarla.',
  image: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Caballa', item: 'https://www.miseemcasa.com.br/es/blog/o-que-e-cavala' },
  ],
}

export default function OQueECavalaEs() {
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
            <li className="breadcrumb-current" aria-current="page">Caballa</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">27 jul 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de lectura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/es/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Qué es la caballa: el pescado azul con más omega-3 que el salmón
          </h1>
          <p className="blog-desc">
            La caballa es de la misma familia que el atún, y le gana al salmón en omega-3 por una fracción del precio. Se consigue fresca en pescaderías y en lata en cualquier supermercado, y queda fuera de muchas alacenas sin ningún motivo real.
          </p>

          <div className="answer-box">
            <p>
              <strong>La caballa</strong> (<em>Scomber</em> spp.) es un pescado de mar de la familia Scombridae — la misma del atún y el bonito.
              Se clasifica como pescado azul por su alto contenido de grasas insaturadas, y aporta cerca de <strong>5.100mg de omega-3 por cada 100g</strong>.
              Se encuentra fresca en pescaderías y en conserva en casi cualquier supermercado.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Caballa fresca sobre hielo en una pescadería — pescado entero de piel azul metálica"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Índice del artículo">
            <p className="toc-title">En este artículo</p>
            <ol className="toc-list">
              <li><a href="#que-es">Qué es la caballa</a></li>
              <li><a href="#omega-3">Por qué le gana al salmón en omega-3</a></li>
              <li><a href="#nutricion">El valor nutricional completo</a></li>
              <li><a href="#mercurio">El tema del mercurio</a></li>
              <li><a href="#fresca-o-en-lata">Fresca, en lata o ahumada</a></li>
              <li><a href="#como-cocinar">Cómo cocinar caballa en casa</a></li>
              <li><a href="#vale-la-pena">Vale la pena ponerla en la lista</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8351649/pexels-photo-8351649.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pescados frescos variados sobre hielo en una pescadería — pescados azules enteros a la venta"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Pexels / Pexels</p>
          </div>

          <h2 id="que-es" className="img-above">Qué es la caballa</h2>

          <p>
            La caballa es un pescado de agua salada del género <em>Scomber</em>, dentro de la familia Scombridae — la misma del atún y el bonito. Lo que la mayoría de los supermercados vende simplemente como "caballa" es la caballa del Atlántico (<em>Scomber scombrus</em>), una especie más pequeña y de vida corta.
          </p>
          <p>
            Vale la pena distinguirla de la carite (<em>Scomberomorus cavalla</em>, conocida en inglés como "king mackerel"), un pez mucho más grande y longevo que comparte parte del nombre pero no el mismo perfil de seguridad — más sobre esto en la sección de mercurio.
          </p>
          <p>
            La caballa se clasifica como <strong>pescado azul</strong> por su alta concentración de grasas insaturadas en el músculo. La carne es oscura y firme, con un sabor más intenso que la tilapia o la merluza — menos neutro, más marcado. Para quien ya come salmón seguido, la caballa cae en territorio conocido.
          </p>
          <p>
            El color azul metálico de la piel es su rasgo más característico. Los pescados frescos tienen un brillo intenso — cuando ese color empieza a apagarse, ya pasó su punto ideal. En la caballa, la piel delata el estado de conservación más rápido que en otros pescados.
          </p>

          <h2 id="omega-3">Por qué le gana al salmón en omega-3</h2>

          <p>
            El dato que siempre sorprende: la caballa tiene cerca de 5.100mg de omega-3 por cada 100g. El salmón ronda los 1.600mg. El atún en lata, entre 300 y 400mg. La caballa gana las dos comparaciones con margen de sobra. El salmón simplemente tiene mejor prensa.
          </p>
          <p>
            El motivo está en el estilo de vida del pez. La caballa es migratoria, nada en mar abierto en aguas frías y se alimenta de peces pequeños ricos en grasa. Ese perfil — pez activo, de agua fría — es justo el que más acumula omega-3 en el músculo.
          </p>
          <p>
            El omega-3 de la caballa viene en forma de <strong>EPA y DHA</strong> — listos para que el cuerpo los use directamente. Es distinto de las fuentes vegetales como la linaza y la chía, donde el omega-3 llega como ALA y necesita conversión, un proceso de eficiencia variable. Para la salud cardiovascular y la función cerebral, EPA y DHA son las formas con más respaldo clínico.
          </p>

          <h2 id="nutricion">El valor nutricional completo</h2>

          <p>
            Por cada 100g de caballa: aproximadamente 205 kcal, 19g de proteína y 14g de grasa — la mayor parte insaturada. La cantidad de proteína es comparable a la de la pechuga de pollo, con la ventaja de un perfil de grasa completamente distinto.
          </p>
          <p>
            La caballa es una de las mejores fuentes de vitamina D — difícil de conseguir en cantidad relevante en la comida de todos los días. También aporta vitamina B12 en cantidad alta, selenio y niacina. Para quien come poca carne roja, es una combinación que vale la pena.
          </p>
          <p>
            En porciones de 85 a 100g, de dos a tres veces por semana, la caballa del Atlántico no acumula mercurio como sí lo hacen los pescados más grandes. Esa es una historia distinta para la carite, el pez espada y el atún de aleta azul — el tema de la próxima sección.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2597565/pexels-photo-2597565.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Primer plano de pescado cocido en rodajas — filete de pescado azul a la parrilla listo para servir"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Oleksandr Pidvalnyi / Pexels</p>
          </div>

          <h2 id="mercurio" className="img-above">El tema del mercurio</h2>

          <p>
            Aquí es donde el nombre "caballa" genera confusión, y vale la pena aclararlo. La caballa del Atlántico tiene bajo contenido de mercurio y se ubica entre las opciones más recomendadas, junto con la sardina y la anchoa — segura para consumo frecuente, incluso en embarazadas y niños.
          </p>
          <p>
            La carite es un pez completamente distinto. Crece mucho más, vive mucho más tiempo y está más arriba en la cadena alimentaria — lo que significa que acumula bastante más mercurio. Junto con el pez espada y el tiburón, es de las especies que conviene evitar o limitar mucho.
          </p>
          <p>
            La conclusión práctica: si la etiqueta solo dice "caballa" en un supermercado normal, casi siempre es caballa del Atlántico — la segura. Si compras pescado entero en una pescadería especializada o lo pides en un restaurante, vale la pena preguntar qué especie es.
          </p>

          <h2 id="fresca-o-en-lata">Fresca, en lata o ahumada</h2>

          <p>
            Fresca, se encuentra en pescaderías y supermercados grandes con sección de pescados, a un precio bastante menor que el salmón. La disponibilidad varía según la región — en zonas costeras es más fácil conseguirla de forma constante.
          </p>
          <p>
            En lata es donde la caballa se vuelve realmente práctica. Enlatada en aceite, en agua o en su propio jugo, está en los supermercados de toda la región — junto al atún y la sardina en la góndola. El proceso de conserva preserva bien las proteínas y el omega-3, algo que no pasa con la fritura, que oxida parte de las grasas insaturadas.
          </p>
          <p>
            Ahumada aparece en tiendas especializadas y delicatessen. Buena para untar sobre tostadas, con{' '}
            <a href="/es/funcionalidades/despensa">lo que ya tengas de queso crema en la despensa</a>
            {', '}o mezclada en un paté rápido. Es un producto de uso ocasional, no de compra semanal.
          </p>

          <div className="blog-inline-cta">
            <p>Cocinar no debería costarte tanta cabeza. <em>Mise se encarga.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Empieza gratis →
            </a>
          </div>

          <h2 id="como-cocinar">Cómo cocinar caballa en casa</h2>

          <p>
            La forma más simple es la que mejor conserva los nutrientes: a la parrilla o al horno. En filete, de 4 a 5 minutos por lado en sartén con aceite de oliva, sal y ajo. El sabor es lo bastante intenso como para no necesitar salsa. Limón al final, si quieres.
          </p>

          <h3>Al horno en papillote</h3>
          <p>
            Envuelta en papel aluminio con rodajas de limón, hierbas y aceite de oliva. Horno a 200°C durante 20 minutos. Queda tierna, sin resecarse, y casi sin olor a pescado en la cocina — útil si prefieres no anunciar la cena por todo el pasillo del edificio.
          </p>

          <h3>En escabeche</h3>
          <p>
            Preparación tradicional: sella el filete a la parrilla, luego cúbrelo con cebolla en rodajas, vinagre, aceite de oliva, pimienta negra y laurel. Deja reposar al menos 4 horas en el refrigerador. Se sirve fría, con pan o arroz. Es una de las pocas preparaciones de pescado que mejora al día siguiente.
          </p>

          <h3>En lata, directo del envase</h3>
          <p>
            La preparación más práctica: abre, escurre, sirve. Sobre arroz, en ensalada verde, mezclada con papa cocida. Proteína y omega-3 en menos de 10 minutos. Si ya la tienes en la{' '}
            <a href="/es/funcionalidades/despensa">despensa</a>
            {', '}es el recurso para cuando falló el plan de comidas de la semana — y va a fallar.
          </p>

          <h2 id="vale-la-pena">Vale la pena ponerla en la lista</h2>

          <p>
            En lata, sin discusión. Es una de las opciones de proteína con mejor relación costo-beneficio del supermercado. Dura en la alacena, se prepara rápido y entrega el mismo perfil nutricional que el salmón cobra bastante más caro.
          </p>
          <p>
            Si ya compras{' '}
            <a href="/es/blog/atum">atún</a>
            {' '}en lata, la caballa lo reemplaza directamente. El sabor es un poco más intenso, pero el cambio tiene sentido: más omega-3 por el mismo precio, o menos. Vale la pena probarla primero en una receta que ya hagas con atún — ensalada, wrap, pasta — antes de reemplazarlo del todo.
          </p>
          <p>
            Fresca, entra en tu{' '}
            <a href="/es/funcionalidades/lista-de-compras">lista de compras</a>
            {' '}cuando pases por una buena pescadería o la encuentres a buen precio. En filete, funciona en cualquier receta pensada para un pescado de sabor más marcado. No reemplaza a la tilapia (más neutra), pero rinde donde usarías merluza o mero.
          </p>
          <p>
            La caballa en lata es de esos productos que no deberían faltar en ninguna lista básica de compras — proteína, omega-3 y alacena, todo junto. Así de simple.
          </p>

          <h2 id="faq">Preguntas frecuentes sobre la caballa</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">¿Caballa y macarela son lo mismo?</p>
              <p className="faq-a">
                Sí. Según la región, el mismo pescado (Scomber spp.) se conoce como caballa o macarela — en México y Colombia es común escuchar los dos nombres. Distinto es el caso de la carite ("king mackerel"), un pez mucho más grande con niveles de mercurio altos. No hay que confundirlos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuál es la diferencia entre caballa y atún?</p>
              <p className="faq-a">
                Caballa y atún son de la misma familia (Scombridae), pero especies distintas. La caballa es más pequeña, tiene más omega-3 por cada 100g y suele costar menos. El atún claro en lata suele ser barrilete, con menos grasa y menos omega-3 que la caballa. El sabor de la caballa es más intenso.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La caballa en lata tiene los mismos nutrientes que la fresca?</p>
              <p className="faq-a">
                En gran parte, sí. El enlatado conserva bien las proteínas y el omega-3. El sodio es más alto en la conserva con sal — busca la versión sin sal añadida o escurre y enjuaga antes de servir si eso te preocupa. La vitamina D y la B12 también se mantienen bien tras el proceso industrial.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cuántas veces por semana puedo comer caballa?</p>
              <p className="faq-a">
                La recomendación general es comer pescado al menos dos veces por semana. La caballa del Atlántico tiene bajo contenido de mercurio — distinto de especies grandes como el atún de aleta azul o el pez espada. Porciones de 85 a 100g, dos a tres veces por semana, son seguras y nutritivas para adultos.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿La caballa tiene mercurio?</p>
              <p className="faq-a">
                La caballa del Atlántico tiene bajo contenido de mercurio y se considera segura para consumo frecuente. Las especies con mercurio elevado son las de gran tamaño — atún de aleta azul, carite y pez espada. No hay que confundir la caballa común con la carite.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">¿Cómo saber si la caballa fresca está en buen estado?</p>
              <p className="faq-a">
                Ojos brillantes y transparentes, agallas rojas o rosadas, carne firme al tacto y olor a mar — no a pescado viejo. La piel azul metálica brillante es señal de frescura. Cuando ese brillo se apaga, ya pasó su mejor momento. Pregunta al pescadero qué llegó ese día.
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
                Creador de Mise. Compró caballa en lata porque estaba barata, descubrió que tiene más omega-3 que el salmón, y le dio un poco de vergüenza no haberlo sabido antes.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Caballa en la lista.<br />
              <em>Una despensa que no olvida.</em>
            </h2>
            <p>
              Mise conecta despensa, recetas y lista de compras en un solo lugar.
              Compras lo que de verdad vas a usar — y la caballa no se queda fuera por falta de memoria.
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
