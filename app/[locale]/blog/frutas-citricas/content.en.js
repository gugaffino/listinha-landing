import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Citrus Fruits: Types, Vitamin C, and How to Use Them',
  description: 'Oranges, lemons, limes, mandarins, and grapefruit: what actually counts as citrus, how much vitamin C each one has, and how to pick, store, and cook with them.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/frutas-citricas',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/frutas-citricas',
      en: 'https://www.miseemcasa.com.br/en/blog/frutas-citricas',
      es: 'https://www.miseemcasa.com.br/es/blog/frutas-citricas',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/frutas-citricas',
    },
  },
  openGraph: {
    title: 'Citrus Fruits: Types, Vitamin C, and How to Use Them',
    description: 'Oranges, lemons, limes, mandarins, and grapefruit: what actually counts as citrus, how much vitamin C each one has, and how to pick, store, and cook with them.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/frutas-citricas',
    images: [
      {
        url: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh orange slices in close-up showing the juicy inside and citrus segments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citrus Fruits: Types, Vitamin C, and How to Use Them',
    description: 'Oranges, lemons, limes, mandarins, and grapefruit: what actually counts as citrus, how much vitamin C each one has, and how to pick, store, and cook with them.',
    images: ['https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are citrus fruits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citrus fruits come from plants in the genus Citrus, part of the Rutaceae family. What ties them together is citric acid, the compound behind the sharp, sour taste of oranges, lemons, limes, mandarins, grapefruit, and pomelo. All of them carry a meaningful amount of vitamin C, and their peels hold aromatic essential oils used in cooking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fruits count as citrus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main ones are oranges, lemons, limes, mandarins, tangerines, clementines, grapefruit, pomelo, and citron. In a regular grocery store, you will most often find oranges, lemons, limes, mandarins, and grapefruit. Yuzu, kumquats, and other specialty citrus mostly show up at specialty markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which citrus fruit has the most vitamin C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Among the common citrus fruits, oranges are one of the biggest sources — a medium orange (about 130g) has roughly 70mg, enough to cover a full day of vitamin C for an adult in one piece of fruit. Lemons concentrate vitamin C especially in the peel and pith. Kiwi actually has more vitamin C than an orange, but it is not a citrus fruit — it belongs to the genus Actinidia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are kiwi and strawberries citrus fruits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Kiwi belongs to the genus Actinidia and strawberries to the genus Fragaria — neither is part of the Citrus genus. Both have vitamin C and some citric acid, but neither is classified as citrus. The mix-up happens because people sometimes use "citrusy" loosely to describe any tart-tasting fruit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you pick good citrus fruit at the store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go for fruit that feels heavy for its size — that usually means more juice. A good lemon or lime gives slightly when you press it. Skip anything with dark spots, soft patches, or a fermented smell. An orange with a slightly greenish tint can still be perfectly good — peel color is not a reliable indicator of flavor.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store citrus fruit at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whole fruit at room temperature, out of direct sun: 1 to 2 weeks. In the fridge: up to a month. A cut lemon or lime wrapped in plastic: 3 to 4 days. Squeezed juice: use within 24 hours in the fridge, since vitamin C breaks down over time. Frozen in ice cube trays: up to 3 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you cook with citrus fruit in savory dishes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lemon and lime are some of the most versatile ingredients in savory cooking — marinades, vinaigrettes, sauces, and finishing touches. Orange and mandarin work well with poultry and fish. Zest from lemon or orange adds concentrated aroma to sauces and roasts without changing the texture of the dish.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Citrus Fruits: Types, Vitamin C, and How to Use Them',
  description: 'Oranges, lemons, limes, mandarins, and grapefruit: what actually counts as citrus, how much vitamin C each one has, and how to pick, store, and cook with them.',
  image: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/frutas-citricas',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Citrus Fruits', item: 'https://www.miseemcasa.com.br/en/blog/frutas-citricas' },
  ],
}

export default function CitrusFruitsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Citrus Fruits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-26">Jul 26, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            The Citrus Fruit Guide: Oranges, Lemons, Limes, and What Else Belongs on the List
          </h1>
          <p className="blog-desc">
            Oranges, lemons, limes. You buy them every month without thinking twice. But the citrus family is bigger than it looks — and knowing the difference changes what you pick at the store and how you use it in the kitchen.
          </p>

          <div className="answer-box">
            <p>
              <strong>Citrus fruits</strong> come from plants in the genus <em>Citrus</em>, part of the Rutaceae family.
              Citric acid is what ties them together — the compound behind the sharp, sour taste of oranges, lemons, limes, and everything in between.
              All of them carry a meaningful amount of vitamin C, and their peels hold aromatic oils used throughout the kitchen.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh orange slices in close-up showing the juicy inside and citrus segments"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: freestocks.org / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-are-citrus">What citrus fruits actually are</a></li>
              <li><a href="#types">The main types of citrus</a></li>
              <li><a href="#vitamin-c">How much vitamin C they have</a></li>
              <li><a href="#benefits">Documented benefits</a></li>
              <li><a href="#how-to-use">How to use them in the kitchen</a></li>
              <li><a href="#choose-store">How to choose and store</a></li>
              <li><a href="#shopping-list">What to put on your list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT ARE CITRUS FRUITS */}
          <h2 id="what-are-citrus">What citrus fruits actually are</h2>

          <p>
            Citrus fruits come from plants in the genus <em>Citrus</em>, part of the Rutaceae family. What they have in common is citric acid — the compound behind that sharp, sour bite. Some carry more of it (key lime), some carry less (a fully ripe navel orange). Citric acid is the group's signature, not a fixed dose.
          </p>
          <p>
            The peel holds most of the aroma. Essential oils packed into the rind are what end up in lemon zest, orange extract, and most citrus-scented cleaning products. Tossing the peel in the trash wastes half the ingredient.
          </p>
          <p>
            Citrus is also a major global crop. Brazil remains the world's largest orange producer, while in the U.S., Florida and California lead domestic output (
            <a href="https://www.fao.org/faostat/en/#data/QCL" target="_blank" rel="noopener">FAO FAOSTAT, 2023</a>
            ). That scale is part of why oranges and limes stay some of the most affordable fruit in the produce aisle most of the year.
          </p>
          <p>
            The acidity does real chemistry, too: citric acid helps your body absorb non-heme iron — the iron found in plant foods like beans and lentils. Squeezing lime over a bean salad isn't just a flavor choice. It's chemistry doing you a favor.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4038669/pexels-photo-4038669.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh oranges and lemons on a white surface — citrus fruit close-up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Kaboompics.com / Pexels</p>
          </div>

          <h2 id="types" className="img-above">The main types of citrus</h2>

          <h3>Oranges</h3>
          <p>
            The most common citrus in any produce section, and for good reason. Navel oranges are seedless and easy to peel — the default for eating out of hand. Valencia oranges are juicier and better for squeezing. Blood oranges bring a berry-like sweetness and a color that looks almost fake until you cut one open. Price swings with the season, but oranges are consistently one of the best-value sources of vitamin C you can buy year-round.
          </p>

          <h3>Lemons</h3>
          <p>
            The workhorse of the citrus family. Eureka lemons are the standard yellow lemon at most grocery stores — high acid, sturdy skin, reliable juice yield. Meyer lemons are smaller, sweeter, and less acidic, with a thin, fragrant peel better suited to desserts and zest-heavy recipes.
          </p>
          <p>
            Reaching for a Eureka when a recipe calls for Meyer, or the reverse, is a beginner mistake. Once you've made it, you don't make it twice.
          </p>

          <h3>Limes</h3>
          <p>
            Persian limes — the standard green, seedless lime at most supermarkets — are juicy and reliably acidic. It's the lime of margaritas, guacamole, and most Southeast Asian and Mexican cooking. Key limes are smaller, more aromatic, and more work to juice, worth it specifically for key lime pie and not much else. Kaffir lime leaves, from a different variety entirely, are used whole in Thai cooking, never juiced.
          </p>

          <h3>Mandarins, tangerines, and clementines</h3>
          <p>
            The citrus you can eat without a knife, a plate, or a kitchen. Clementines are seedless and easy to peel by hand; tangerines run slightly bigger and sweeter; mandarin is the catch-all term that covers both, plus satsumas and a handful of other loose-skinned varieties. Peak season runs late fall through winter — that's when the boxes show up stacked at the front of the store.
          </p>

          <h3>Grapefruit and pomelo</h3>
          <p>
            Grapefruit is smaller, more bitter, and known for interacting with a surprisingly long list of medications, including statins and some blood pressure drugs. Pomelo is the largest citrus fruit that exists — milder and less bitter than grapefruit, with a thick pith you peel away before eating the segments underneath.
          </p>

          <h3>Other citrus worth knowing</h3>
          <p>
            Yuzu (Japanese, prized for its zest, rarely juiced), kumquats (small enough to eat whole, peel included), and citron (used almost exclusively for its thick, candied peel) round out the category. Most people will only ever run into oranges, lemons, limes, mandarins, and grapefruit at a regular grocery store — the rest show up at specialty markets or in specific cuisines.
          </p>

          {/* VITAMIN C */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7223306/pexels-photo-7223306.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Citrus fruit slices — orange, lemon, and grapefruit — on a vibrant colorful surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Alena Darmel / Pexels</p>
          </div>

          <h2 id="vitamin-c" className="img-above">How much vitamin C citrus fruits actually have</h2>

          <p>
            Adults need about 65–90mg of vitamin C a day, with a safe upper limit of 2,000mg (
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK225480/" target="_blank" rel="noopener">Dietary Reference Intakes, NIH</a>
            ). A medium orange, around 130g, has roughly 70mg — enough to cover a full day's requirement in one piece of fruit.
          </p>
          <p>
            Lemons have less vitamin C per fruit than oranges, but concentrate more of it in the peel and pith — the parts most people throw away. Kiwi actually has more vitamin C than an orange, but it isn't citrus at all — it belongs to the genus <em>Actinidia</em>. More on that mix-up in the FAQ below.
          </p>
          <p>
            There's a decent chance half a lime is sitting in your fridge in plastic wrap right now.
          </p>
          <p>
            The citric acid in citrus fruit also helps your body absorb non-heme iron from foods like beans and lentils. A squeeze of lime over a bean dish is one of the simplest ways to get that benefit. No supplement required.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Documented benefits of citrus fruit</h2>

          <p>
            The evidence is strongest in three areas.
          </p>
          <p>
            <strong>Vitamin C:</strong> an antioxidant that supports immune function and collagen synthesis. It's the most studied nutrient in citrus fruit, and the main reason it keeps getting recommended.
          </p>
          <p>
            <strong>Flavonoids:</strong> compounds like hesperidin (in oranges) and naringenin (in grapefruit) show anti-inflammatory effects in lab studies. They concentrate in the white pith between the peel and the segments — the part most people discard when they juice a fruit.
          </p>
          <p>
            <strong>Fiber:</strong> mostly in the pith and pulp. A glass of orange juice has a fraction of the fiber a whole orange does. Eating the fruit with the pith intact keeps that fiber where it belongs.
          </p>
          <p>
            One honest caveat: citrus fruit is nutritious, not medicine. The benefit comes from eating it regularly as part of a varied diet, not from a juice cleanse or a weekend detox.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3049465/pexels-photo-3049465.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Orange peel curled next to freshly squeezed juice — citrus fruit in the kitchen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Jonas Mohamadi / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to use citrus fruit in the kitchen</h2>

          <h3>Juice and drinks</h3>
          <p>
            Vitamin C breaks down with heat and air exposure. Juice squeezed right before drinking has meaningfully more of it than juice made hours earlier — even refrigerated, vitamin C drops significantly within 6 to 8 hours. Squeeze it, drink it, don't let it sit.
          </p>

          <h3>Marinades</h3>
          <p>
            Lime juice in a marinade tenderizes protein and adds acidity. The classic ratio: juice of one lime, olive oil, garlic, herbs. It works for chicken, fish, and thinner cuts of beef. For fish specifically, don't marinate longer than 2 hours — the acid starts "cooking" the protein and the texture turns rubbery.
          </p>

          <h3>Dressings and vinaigrettes</h3>
          <p>
            Lemon can replace vinegar in most vinaigrette recipes without a hitch. The acid profile is different — brighter, less sharp. For delicate salads, Meyer lemon or tangerine juice gives a softer result than a standard lemon.
          </p>

          <h3>Zest</h3>
          <p>
            Lemon and orange zest is the easiest ingredient to forget you already have. It's free — it comes with the fruit — and adds concentrated aroma to cakes, cookies, sauces, and roasts. Zest the fruit before you juice it, never after.
          </p>

          <h3>Savory dishes</h3>
          <p>
            Fish with lemon is the obvious move. But roast chicken with orange zest, a tangerine glaze for duck, and shrimp with Meyer lemon are combinations that show up in classic cooking for a simple reason: acid cuts through fat and resets your palate between bites.
          </p>

          <div className="blog-inline-cta">
            <p>Less deciding. More cooking. <em>That's Mise.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* CHOOSE & STORE */}
          <h2 id="choose-store">How to choose and store citrus fruit</h2>

          <p>
            Weight is the best indicator when picking citrus. Fruit that's heavy for its size has more juice inside. A good lemon or lime gives slightly when you press it — one that feels rock-hard usually means less juice, not more freshness. Skip anything with dark spots, soft patches, or a fermented smell.
          </p>
          <p>
            Something most people don't know: an orange with a slightly greenish tint can still be perfectly good. Peel color depends on the temperature it ripened in, not the fruit's flavor or ripeness.
          </p>
          <p>
            For storage: whole fruit keeps 1 to 2 weeks at room temperature, out of direct sun. In the fridge crisper drawer, that stretches to about a month. A cut lemon wrapped in plastic lasts 3 to 4 days. Squeezed juice: use within 24 hours in the fridge, since vitamin C degrades fast. Frozen in ice cube trays: up to 3 months.
          </p>

          {/* SHOPPING LIST */}
          <h2 id="shopping-list">What to put on your list</h2>

          <p>
            For most households, three citrus fruits cover a normal week: oranges for eating and juicing, limes or lemons for cooking, and mandarins or tangerines when they're in season.
          </p>
          <p>
            If you bake or make desserts regularly, Meyer lemon is worth keeping on the list — especially for anything that calls for zest. It's the easiest ingredient to forget and the hardest to swap for something else. A regular lemon doesn't behave the same way in a lemon tart. It's not the same fruit, even if it looks close enough on the shelf.
          </p>
          <p>
            Mise connects your <a href="/en/funcionalidades/lista-de-compras">shopping list</a> to your <a href="/en/funcionalidades/despensa">pantry</a> — when the limes run out, they show up on the list automatically, before you notice you're out.
          </p>
          <p>
            The hard part was never knowing which citrus fruit to buy. It's remembering to put it on the list before you leave the house.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about citrus fruit</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What are citrus fruits?</p>
              <p className="faq-a">
                Citrus fruits come from plants in the genus <em>Citrus</em>, part of the Rutaceae family. What ties them together is citric acid, the compound behind the sharp, sour taste of oranges, lemons, limes, mandarins, grapefruit, and pomelo. All of them carry a meaningful amount of vitamin C, and their peels hold aromatic essential oils used in cooking.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What fruits count as citrus?</p>
              <p className="faq-a">
                The main ones are oranges, lemons, limes, mandarins, tangerines, clementines, grapefruit, pomelo, and citron. In a regular grocery store, you will most often find oranges, lemons, limes, mandarins, and grapefruit. Yuzu, kumquats, and other specialty citrus mostly show up at specialty markets.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Which citrus fruit has the most vitamin C?</p>
              <p className="faq-a">
                Among the common citrus fruits, oranges are one of the biggest sources — a medium orange (about 130g) has roughly 70mg, enough to cover a full day of vitamin C for an adult in one piece of fruit. Lemons concentrate vitamin C especially in the peel and pith. Kiwi actually has more vitamin C than an orange, but it isn't a citrus fruit — it belongs to the genus <em>Actinidia</em>.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are kiwi and strawberries citrus fruits?</p>
              <p className="faq-a">
                No. Kiwi belongs to the genus <em>Actinidia</em> and strawberries to the genus <em>Fragaria</em> — neither is part of the Citrus genus. Both have vitamin C and some citric acid, but neither is classified as citrus. The mix-up happens because people sometimes use &quot;citrusy&quot; loosely to describe any tart-tasting fruit.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you pick good citrus fruit at the store?</p>
              <p className="faq-a">
                Go for fruit that feels heavy for its size — that usually means more juice. A good lemon or lime gives slightly when you press it. Skip anything with dark spots, soft patches, or a fermented smell. An orange with a slightly greenish tint can still be perfectly good — peel color is not a reliable indicator of flavor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store citrus fruit at home?</p>
              <p className="faq-a">
                Whole fruit at room temperature, out of direct sun: 1 to 2 weeks. In the fridge: up to a month. A cut lemon or lime wrapped in plastic: 3 to 4 days. Squeezed juice: use within 24 hours in the fridge, since vitamin C breaks down over time. Frozen in ice cube trays: up to 3 months.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you cook with citrus fruit in savory dishes?</p>
              <p className="faq-a">
                Yes. Lemon and lime are some of the most versatile ingredients in savory cooking — marinades, vinaigrettes, sauces, and finishing touches. Orange and mandarin work well with poultry and fish. Zest from lemon or orange adds concentrated aroma to sauces and roasts without changing the texture of the dish.
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
                Creator of Mise. Once grabbed a Meyer lemon thinking it was a regular one. The vinaigrette came out too sweet. The lemon bars turned out great by accident.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              The pantry remembers.<br />
              <em>The list shows up.</em>
            </h2>
            <p>
              Connects pantry, recipes, and shopping list in one place.
              Limes stay on the list every week — without you having to remember.
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
