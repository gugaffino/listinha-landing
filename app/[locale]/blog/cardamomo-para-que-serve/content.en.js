import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Cardamom: What It’s For, Types, and How to Use It',
  description: 'Cardamom is an intensely aromatic spice used in coffee, tea, curries, and baking. See green vs black cardamom, real benefits, and how to use it right.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/cardamomo-para-que-serve',
      en: 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve',
      es: 'https://www.miseemcasa.com.br/es/blog/cardamomo-para-que-serve',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/cardamomo-para-que-serve',
    },
  },
  openGraph: {
    title: 'Cardamom: What It’s For, Types, and How to Use It',
    description: 'Cardamom is an intensely aromatic spice used in coffee, tea, curries, and baking. See green vs black cardamom, real benefits, and how to use it right.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve',
    images: [
      {
        url: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Green cardamom pods on a rustic wood table — close-up detail of the spice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamom: What It’s For, Types, and How to Use It',
    description: 'Cardamom is an intensely aromatic spice used in coffee, tea, curries, and baking. See green vs black cardamom, real benefits, and how to use it right.',
    images: ['https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are green and black cardamom the same thing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. They are different plants in the same family. Green cardamom (Elettaria cardamomum) is the common one — floral, slightly citrusy, used in tea, desserts, and curry dishes. Black cardamom (Amomum subulatum) is bigger, drier, with a smoky, earthy aroma. It works better in hearty savory dishes like biryanis and meat stews. In most grocery stores, green is the one you will find without looking hard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you substitute cardamom with another spice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no direct substitute — the aroma is unique. In a pinch, a blend of ground ginger and a pinch of nutmeg gets you closer, but the result is different. In tea, ginger with cinnamon delivers a similar warmth without the floral note. For dishes where cardamom is the main flavor, using the real thing makes a noticeable difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ground cardamom or whole pods: which should you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whole pods carry a stronger, longer-lasting aroma — the husk protects the seeds until you crack them open. They are ideal for tea, stocks, and rice, where the pod simmers in the liquid and gets fished out before serving. Ground cardamom is more practical for cake batter, cookies, and dry spice mixes. Ground loses its punch faster — noticeably weaker after 6 to 8 months. Buying whole pods and grinding just before use gets you the best of both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can you buy cardamom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any well-stocked grocery store carries it in the spice aisle, ground or as whole pods. Middle Eastern, Indian, and Scandinavian specialty grocers usually stock both green and black, and often sell whole pods in bulk for less per gram. Online retailers have the widest selection, including single-origin and organic options, but shipping can add to the cost. Worth checking spice shops or international markets near you before defaulting to the smallest jar on the supermarket shelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store cardamom at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In an airtight container, away from light, heat, and moisture. Never store it near the stove — heat evaporates the essential oils that carry the aroma in the first place. Whole pods, stored well, keep for up to 2 years. Ground cardamom starts fading after 6 to 8 months. If you bought a large batch, the freezer works for the extra — it holds the aroma longer than a pantry shelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cardamom should you use in a recipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cardamom is strong — less is more. For tea: 2 to 3 crushed pods per 2 cups of water. For rice or stock: 3 to 4 pods per 4 servings. For cake or cookies: 1/4 to 1/2 teaspoon of ground cardamom is enough for an 8-serving batch. Overdo it and the flavor turns medicinal and takes over the whole dish. Start with less and adjust from there.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cardamom: What It’s For, Types, and How to Use It',
  description: 'Cardamom is an intensely aromatic spice used in coffee, tea, curries, and baking. See green vs black cardamom, real benefits, and how to use it right.',
  image: 'https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-26',
  dateModified: '2026-08-07',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cardamom', item: 'https://www.miseemcasa.com.br/en/blog/cardamomo-para-que-serve' },
  ],
}

export default function CardamomEn() {
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

      <a href="#main-content" className="skip-link">Skip to content</a>

      <SiteNav />

      <main id="main-content" className="blog-page">

        <nav className="breadcrumb" aria-label="You are here">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Cardamom</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-26">Jun 26, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Cardamom in the Kitchen: What It Is and How to Use It
          </h1>
          <p className="blog-desc">
            It shows up in chai, Arabic coffee, curry, and Scandinavian buns. The aroma is impossible to ignore — and impossible to fake with something else. So what actually is cardamom, which kind should you buy, and how much is too much?
          </p>

          <div className="answer-box">
            <p>
              <strong>Cardamom</strong> is a spice in the ginger family, native to South India and grown commercially in Guatemala, which now produces more of it than any other country.
              It comes as small pods holding aromatic seeds inside. The flavor is floral, slightly citrusy,
              with notes that resemble eucalyptus. It is used to flavor tea, coffee, curry dishes, desserts, and meat.
              Green cardamom is the type you will find in most stores, sold whole or ground.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Green cardamom pods on a rustic wood table — close-up detail of the spice"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Nidhin K S / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-cardamom">What is cardamom</a></li>
              <li><a href="#green-vs-black">Green vs black: what&apos;s the difference</a></li>
              <li><a href="#what-its-for">What cardamom is used for</a></li>
              <li><a href="#benefits">Health benefits</a></li>
              <li><a href="#how-to-use">How to use: pods, powder, and tea</a></li>
              <li><a href="#how-to-store">How to store it and where to buy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS CARDAMOM */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6086300/pexels-photo-6086300.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Green cardamom pods stacked in close-up, showing texture and vivid color"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="what-is-cardamom" className="img-above">What is cardamom</h2>

          <p>
            Cardamom (<em>Elettaria cardamomum</em>) is a plant in the same family as ginger and turmeric.
            What ends up in the kitchen are the pods — small, oval, about a half-inch long —
            holding aromatic seeds inside. The seeds are where the real fragrance lives.
            The husk keeps that aroma sealed in until the pod is cracked open.
          </p>
          <p>
            It is often called the third most expensive spice in the world, behind only saffron and vanilla.
            The price is not arbitrary: the plant takes 3 to 4 years before it starts producing,
            the pods are picked by hand one at a time, and the essential oils responsible for the smell are volatile.
            Any misstep in drying or processing and the cardamom that reaches the shelf is flat and forgettable.
          </p>
          <p>
            India grew nearly all the world&apos;s cardamom for most of history, but Guatemala has quietly overtaken it —
            introduced there in the early 1900s, cardamom now grows so well in the country&apos;s highlands that
            Guatemala exports more of it than any other nation, most of it headed to the Middle East, where demand for
            cardamom-spiced coffee is enormous.
          </p>
          <p>
            The aroma itself is hard to describe without overselling it. Floral, slightly citrusy, with notes
            of eucalyptus and a sweetness that does not show up in any other spice.
            There is no clean substitute — anyone who has made tea with real cardamom knows that ginger
            and cinnamon, however close on paper, just are not the same thing.
          </p>

          {/* GREEN VS BLACK */}
          <h2 id="green-vs-black">Green vs black: what&apos;s the difference</h2>

          <p>
            The two share a name and a family, which is exactly why people mix them up.
            They are different plants with different jobs in the kitchen.
          </p>

          <h3>Green cardamom</h3>
          <p>
            The one you will find almost everywhere. Small, with a thin, pale green husk and dark seeds inside.
            Floral and citrusy — it is the backbone of Indian chai, Arabic coffee, Middle Eastern sweets,
            and Scandinavian holiday baking, including the cardamom buns (kardemummabullar) that show up
            in every Swedish bakery. It is the cardamom you will find at a regular grocery store without
            hunting for a specialty shop.
          </p>

          <h3>Black cardamom</h3>
          <p>
            Bigger, darker, with a rough, dried-out husk. The aroma is a completely different animal:
            smoky, earthy, with notes that lean toward tar and campfire. It belongs in hearty savory dishes —
            biryanis, meat stews, dense curries. Do not swap one for the other: black cardamom in a recipe
            written for green is going to taste wrong, not just different.
          </p>
          <p>
            Black cardamom is harder to find outside Indian and Middle Eastern grocers, though it shows up
            online easily enough. If a recipe just says "cardamom" with no qualifier, assume it means green.
          </p>

          {/* WHAT IT'S FOR */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10126645/pexels-photo-10126645.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Plate with an assortment of spices including cardamom, cinnamon, and bay leaves"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Suvaiba / Pexels</p>
          </div>

          <h2 id="what-its-for" className="img-above">What cardamom is used for in the kitchen</h2>

          <p>
            Cardamom is built to add fragrance without taking over. A good spice does not dominate a dish —
            it deepens it. That is exactly what cardamom does: it adds a layer of aroma you notice
            before you can name it.
          </p>

          <h3>Coffee and tea</h3>
          <p>
            The most direct use, and the one most people run into first. Two or three crushed pods
            steeped in hot water with ginger and cinnamon make a chai that a tea bag cannot compete with.
            Classic Indian chai leans on it. So does Arabic coffee (qahwa), where a pod is often ground
            right into the grounds before brewing. If you have never had coffee with a cardamom pod
            dropped in, it is worth trying once.
          </p>

          <h3>Rice and curry dishes</h3>
          <p>
            In Indian and Middle Eastern cooking, whole pods go straight into hot oil with cinnamon and
            cloves before the rice goes in — the result is rice with enough aroma that it does not need
            a sauce to feel finished. In curry dishes, ground cardamom is one of the base spices in a
            masala blend, alongside coriander, cumin, and chili.
          </p>

          <h3>Baking and desserts</h3>
          <p>
            In Scandinavia, cardamom is the default spice for holiday and everyday baking — the way
            cinnamon works in the US, but more floral. Swedish cardamom buns are a bakery staple.
            In Middle Eastern cooking, it shows up in baklava, rice pudding, and custards.
            In South Asia, it flavors kheer (rice pudding) and sweets made with condensed milk.
          </p>

          <h3>Meat and marinades</h3>
          <p>
            Less obvious, but it works. In chicken and lamb marinades, cardamom adds depth without
            adding bitterness. It pairs well with yogurt, garlic, and cumin — a classic base for
            Lebanese-style roasted chicken. It also turns up in meatballs and kofta as part of the spice mix.
          </p>

          <div className="blog-inline-cta">
            <p>An organized pantry is half the work. <em>Mise handles the other half.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* BENEFITS */}
          <h2 id="benefits">Health benefits of cardamom</h2>

          <p>
            Cardamom carries antioxidant compounds — flavonoids, terpenes, and essential oils like cineole.
            Existing research links regular consumption to a handful of concrete effects.
          </p>

          <h3>Digestion</h3>
          <p>
            Cardamom stimulates the production of digestive enzymes and has a carminative effect —
            it helps reduce gas and bloating. That is why it has shown up in after-meal teas in
            Ayurvedic medicine for centuries. The scientific evidence is still early-stage but consistent:
            it works as a digestive aid, not a cure.
          </p>

          <h3>Oral health</h3>
          <p>
            The essential oils in cardamom have antibacterial properties. In parts of the Middle East,
            chewing a pod after a meal is a common habit — an aromatic, low-tech version of mouthwash.
            Cineole, the main compound behind the aroma, is part of why that works. It is also why
            cardamom appears in some digestive teas and in garlic-heavy Indian recipes meant to
            cut lingering breath.
          </p>

          <h3>Antioxidants</h3>
          <p>
            Like most intensely aromatic spices — oregano, turmeric, cloves — cardamom is rich in
            antioxidant compounds. Regular spice use in general correlates with a more varied diet and
            less reliance on salt and sugar to make food taste like something. That might be the most
            practical benefit of all.
          </p>

          <p>
            One honest caveat: cardamom is a spice, not a supplement. The amount used in a typical
            recipe is too small to have a measurable clinical effect on its own. The real benefit is
            that it adds flavor to dishes that would otherwise need more salt or sugar to taste interesting.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use cardamom: pods, powder, and tea</h2>

          <h3>Whole pods</h3>
          <p>
            Lightly crush the pod with the side of a knife before using it — that cracks the husk
            and releases more aroma. Add it whole to tea, stock, rice, and marinades.
            Fish it out before serving: the husk itself is not pleasant to eat.
            The aroma left behind in the liquid is enough to change the whole dish.
          </p>

          <h3>Ground cardamom</h3>
          <p>
            More practical for cake batter, cookies, and dry spice blends. Use it sparingly —
            1/4 teaspoon is plenty for an 8-serving cake recipe. Ground cardamom loses its aroma
            faster than whole pods: after 6 to 8 months, the flavor drops off noticeably.
            If you have a mortar and pestle, buying whole and grinding right before use is the best of both worlds.
          </p>

          <h3>Reference ratios</h3>
          <p>
            For tea: 2 to 3 crushed pods per 2 cups of water.
            For rice: 3 to 4 pods per 4 servings.
            For cake: 1/4 to 1/2 teaspoon of ground cardamom per recipe.
            Cardamom is strong — start with less. Overdo it and the flavor turns medicinal
            and takes over the whole dish. The difference is easy to taste.
          </p>

          <p>
            Cardamom is also one of those spices where the recipe calls for "2 pods" and the bag
            you bought has 50 in it. They will sit in your pantry for two years. But at the right
            moment, they will save the dish — and you will be glad you had them.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store cardamom and where to buy it</h2>

          <h3>How to store it</h3>
          <p>
            In an airtight container, away from light, heat, and moisture. Never store it near the stove —
            heat evaporates the essential oils that carry the aroma in the first place.
            Whole pods, stored well, keep for up to 2 years without losing quality.
            Ground cardamom starts fading after 6 to 8 months.
            If you bought a bulk amount, the freezer works well for the extra — it holds the aroma longer.
          </p>
          <p>
            It is worth logging what you have and when you bought it in a{' '}
            <a href="/en/funcionalidades/despensa">pantry tracker</a>. Old spices do not spoil,
            they just go flat. Without some kind of system, the same pod ends up buried at the
            bottom of three different jars.
          </p>

          <h3>Where to buy it</h3>
          <p>
            Larger grocery stores carry green cardamom, ground or whole, in the spice aisle.
            Middle Eastern, Indian, and Scandinavian specialty grocers usually sell it in bulk —
            cheaper per gram, and with faster turnover, which means fresher stock.
            Spice shops focused on international cooking tend to carry both types, green and black,
            as whole pods.
          </p>
          <p>
            Online, the selection is wider — including single-origin and organic options.
            If you buy online, check whether the seller lists a harvest date: old spice sold as fresh
            is a more common problem than people expect. The same attention you would give any{' '}
            <a href="/en/funcionalidades/lista-de-compras">item on a shopping list</a>{' '}
            applies here — knowing exactly what you are buying before you commit makes a real difference.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about cardamom</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Are green and black cardamom the same thing?</p>
              <p className="faq-a">
                No. They are different plants in the same family. Green cardamom has a floral,
                citrusy aroma — used in tea, desserts, and curry dishes. Black cardamom has a smoky,
                earthy aroma — used in hearty savory dishes. Green is the one you will find easily
                in most stores. If a recipe does not specify, assume green.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you substitute cardamom with another spice?</p>
              <p className="faq-a">
                There is no direct substitute — the aroma is unique. In a pinch, a pinch of ground
                ginger mixed with a pinch of{' '}
                <a href="/en/blog/para-que-serve-noz-moscada">nutmeg</a>{' '}
                gets you closer, but the result is different. For dishes where cardamom is the
                star, no substitute closes the gap completely.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Ground cardamom or whole pods: which should you use?</p>
              <p className="faq-a">
                Whole pods carry a stronger, longer-lasting aroma. Ideal for tea, stock, and rice.
                Ground is more practical for cake batter and dry spice mixes, but it loses aroma
                after 6 to 8 months. Buying whole pods and grinding just before use gets you the best of both.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Where can you buy cardamom?</p>
              <p className="faq-a">
                Grocery stores, Middle Eastern and Indian markets, Scandinavian specialty shops,
                and online retailers. Buying in bulk from a specialty grocer is usually cheaper
                and fresher than a small jar that has been sitting on a supermarket shelf.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store cardamom at home?</p>
              <p className="faq-a">
                In an airtight container, away from light, heat, and moisture. Never near the stove.
                Whole pods keep for up to 2 years stored well. Ground cardamom fades after 6 to 8 months.
                If you bought a bulk amount, freeze the extra to hold the aroma longer.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much cardamom should you use in a recipe?</p>
              <p className="faq-a">
                Use it with restraint: 2 to 3 pods for 2 cups of tea; 3 to 4 pods for a 4-serving
                rice dish; 1/4 to 1/2 teaspoon ground per cake recipe. Cardamom is strong.
                Start with less — you can always add more, but you cannot pull the excess back out.
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
                Creator of Mise. Bought whole cardamom pods to make chai, used two, still has 48 left in the jar. Will use them in the next Middle Eastern recipe, probably.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what&apos;s in the pantry.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place.
              You buy what you&apos;ll actually use — and the cardamom does not disappear at the bottom of three jars.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Start free
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Back to top
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
          <a href="/en/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
