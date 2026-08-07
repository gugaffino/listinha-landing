import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Dried Apricots: Nutrition, Benefits, and How to Use Them',
  description: 'Dried apricots are fresh apricots with the water removed — concentrating iron, potassium, and beta-carotene. What they are, real benefits, and how to cook with them.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/damascos-secos',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/damascos-secos',
      en: 'https://www.miseemcasa.com.br/en/blog/damascos-secos',
      es: 'https://www.miseemcasa.com.br/es/blog/damascos-secos',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/damascos-secos',
    },
  },
  openGraph: {
    title: 'Dried Apricots: Nutrition, Benefits, and How to Use Them',
    description: 'Dried apricots are fresh apricots with the water removed — concentrating iron, potassium, and beta-carotene. What they are, real benefits, and how to cook with them.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/damascos-secos',
    images: [
      {
        url: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Orange dried apricots in close-up — the texture and color of the sulfured, sun-dried fruit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dried Apricots: Nutrition, Benefits, and How to Use Them',
    description: 'Dried apricots are fresh apricots with the water removed — concentrating iron, potassium, and beta-carotene. What they are, real benefits, and how to cook with them.',
    images: ['https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do dried apricots make you gain weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dried apricots run about 240 calories per 100g — more calorie-dense than fresh, because drying concentrates the natural sugar. In a reasonable portion (30-40g, roughly 6 to 8 halves), that is closer to 70-100 calories, which fits fine into a balanced diet. The problem is usually eating straight from the bag without noticing how much adds up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many dried apricots can you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reasonable portion is 6 to 8 halves, about 30-40g. That is enough to get the fiber, iron, and potassium without overdoing the sugar. If you have diabetes or watch your glycemic load, check with a dietitian to size the portion correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are apricots and dried apricots the same fruit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same fruit — dried apricots are fresh apricots (Prunus armeniaca) with the water removed. The process concentrates the nutrients and sugar, changes the texture, and stretches the shelf life from days to months. Fresh apricots have a short summer season in most places, which is exactly why the dried version is the one you find on shelves year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you rehydrate dried apricots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cover them with hot (not boiling) water and let them sit for 20 to 30 minutes. They soak up the liquid and soften close to fresh-fruit texture. The soaking liquid turns out surprisingly flavorful — use it as a base for a pan sauce or stir it into juice. For cold dishes, rehydrating in orange juice instead of water helps your body absorb more of the iron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are dried apricots gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain dried apricots have no gluten. Check the label anyway: some brands process them in facilities that also handle wheat, which opens the door to cross-contamination. If you have celiac disease, look for a certified gluten-free label on the bag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do dried apricots work in savory cooking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They work very well. Stirred into a braise with chicken, pork, or lamb, dried apricots build a sweet-and-sour edge without needing a separate sauce. It is a staple move in Persian and Moroccan cooking. Chopped fine, they also work in couscous, lentil rice, and salads with a sharp cheese.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dried Apricots: Nutrition, Benefits, and How to Use Them',
  description: 'Dried apricots are fresh apricots with the water removed — concentrating iron, potassium, and beta-carotene. What they are, real benefits, and how to cook with them.',
  image: 'https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/damascos-secos',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Dried Apricots', item: 'https://www.miseemcasa.com.br/en/blog/damascos-secos' },
  ],
}

export default function DriedApricotsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Dried Apricots</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">Aug 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Dried Apricots in the Kitchen: What They Are and How to Use Them
          </h1>
          <p className="blog-desc">
            The bag sitting between the raisins and the dates, usually bought for one recipe and half-eaten before it gets there. Dried apricots pack more iron, potassium, and beta-carotene than most dried fruit — and they do more than trail mix.
          </p>

          <div className="answer-box">
            <p>
              <strong>Dried apricots</strong> are fresh apricots (<em>Prunus armeniaca</em>) with the water removed — the drying process concentrates both nutrients and flavor.
              Fresh apricots have a short summer season, which is exactly why the dried version is what you find on shelves the rest of the year.
              They keep for months in the pantry and work in snacks, baking, and savory dishes alike.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/10111994/pexels-photo-10111994.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Orange dried apricots in close-up — the texture and color of the sulfured, sun-dried fruit"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Engin Akyurt / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-are-dried-apricots">What are dried apricots</a></li>
              <li><a href="#fresh-vs-dried">Fresh vs dried: what actually changes</a></li>
              <li><a href="#sulfured-vs-unsulfured">Sulfured vs unsulfured: which to buy</a></li>
              <li><a href="#nutrition">What&apos;s inside: the nutrition</a></li>
              <li><a href="#benefits">Benefits of dried apricots</a></li>
              <li><a href="#how-to-use">How to cook with dried apricots</a></li>
              <li><a href="#how-to-store">How to store them and where to buy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT ARE DRIED APRICOTS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/29060107/pexels-photo-29060107.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Dried apricots displayed at a market stall — orange fruit laid out for sale"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-are-dried-apricots" className="img-above">What are dried apricots</h2>

          <p>
            The apricot (<em>Prunus armeniaca</em>) is a stone fruit native to Central Asia, grown commercially today mostly in Turkey, Iran, Uzbekistan, and — in the US — California, which produces nearly all of the domestic crop.
          </p>
          <p>
            Fresh apricots have a short, finicky window: they ripen fast, bruise easily, and the season runs roughly June through August depending on the region. Outside that window, dried is what you get. Drying removes most of the water, which is also why a small handful of dried apricots packs the nutrition of a much larger amount of fresh fruit.
          </p>
          <p>
            The drying method matters for both color and taste. Sun-drying, still common with Turkish apricots, produces the familiar bright orange fruit — helped along by sulfur dioxide, a preservative that also slows browning. Apricots dried without sulfur turn a darker, mahogany-brown and taste more tart and concentrated. Neither is more nutritious than the other; it is mostly a matter of color, texture, and whether you react to sulfites.
          </p>
          <p>
            In the US, the bright orange dried apricots on the shelf are almost always the sulfured, Turkish-style kind. The darker, chewier ones — often labeled organic or unsulfured — are the other common option, and worth knowing apart before you commit to a bag for baking versus snacking.
          </p>

          {/* FRESH VS DRIED */}
          <h2 id="fresh-vs-dried">Fresh vs dried: what actually changes</h2>

          <p>
            The comparison is not just "dried has more calories." Drying concentrates everything — the good and the less good.
          </p>
          <p>
            Per 100g of fresh apricot: about 48 calories, 11g carbs, 9g sugar, 2g fiber, 1mg iron, 259mg potassium.
          </p>
          <p>
            Per 100g of dried apricot: about 241 calories, 63g carbs, 53g sugar, 7.3g fiber, 2.7mg iron, 1,160mg potassium.
          </p>
          <p>
            Roughly a fourfold concentration. Fiber, iron, and potassium climb right along with the sugar. Vitamin C, on the other hand, drops sharply — it does not survive the drying process well.
          </p>
          <p>
            The practical takeaway: 100g of dried apricots is not a normal portion. A reasonable one is 30-40g — about 6 to 8 halves. At that size: 70-100 calories, 2-3g fiber, 0.8-1mg iron, and 350-460mg potassium. With that context, dried apricots make a lot more sense than the calorie count on the bag suggests.
          </p>

          {/* SULFURED VS UNSULFURED */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh orange apricots in a bowl — the fruit dried apricots are made from"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="sulfured-vs-unsulfured" className="img-above">Sulfured vs unsulfured: which one to buy</h2>

          <p>
            This is the split that trips up most first-time buyers standing in the dried fruit aisle, and it has nothing to do with quality.
          </p>
          <p>
            <strong>Sulfured (orange):</strong> treated with sulfur dioxide during drying, which locks in the bright orange color and a softer, plumper texture. This is the most common style sold in the US and matches what most recipes assume when they say "dried apricots." People with sulfite sensitivity or asthma should read the label — sulfites can trigger reactions in a small percentage of people.
          </p>
          <p>
            <strong>Unsulfured (dark brown):</strong> no sulfur dioxide, so the fruit oxidizes and turns a deep mahogany color. The flavor is more concentrated and noticeably more tart. Often labeled organic, since sulfur dioxide is one of the few additives organic certification rules out. Texture is a little firmer and chewier.
          </p>
          <p>
            Neither one wins nutritionally — the mineral and fiber content is nearly identical. For baking or snacking where color does not matter, unsulfured is a fine, more natural choice. For a recipe built around bright color, like a tagine or a fruit-studded rice, sulfured is the one that photographs well.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What&apos;s inside: the nutrition</h2>

          <p>
            Per 100g, dried apricots deliver nutrients in amounts that outpace most fresh fruit, simply because drying concentrates everything into a smaller package.
          </p>

          <ul className="item-list">
            <li><strong>Beta-carotene:</strong> about 22,690mcg per 100g — one of the richest plant sources available. The body converts it to vitamin A.</li>
            <li><strong>Potassium:</strong> 1,160mg — more than a banana (358mg/100g). Plays a role in blood pressure regulation and muscle function.</li>
            <li><strong>Iron:</strong> 2.7mg — non-heme (plant-based) iron, less efficiently absorbed than the animal-based kind, but useful as a supplementary source.</li>
            <li><strong>Fiber:</strong> 7.3g, including a meaningful amount of pectin, a soluble fiber that feeds beneficial gut bacteria.</li>
            <li><strong>Calories:</strong> 241 per 100g — high, mostly because of the concentrated natural sugar left behind after drying.</li>
          </ul>

          <p>
            Beta-carotene is the real standout. Few plant foods come close to this number — raw carrots have about 8,285mcg per 100g, and dried apricots carry nearly three times that.
          </p>
          <p>
            One honest caveat: plant-based iron needs vitamin C to absorb well. If you are counting on dried apricots as an iron source, pair them with something citrusy — a glass of orange juice, or lemon in a salad. Without that, a good portion of the iron just passes through without making it into your bloodstream.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Benefits of dried apricots</h2>

          <h3>Eye health</h3>
          <p>
            Beta-carotene converts to vitamin A in the body, and vitamin A is essential for retina function — particularly for seeing well in low light. It is one of the nutrients most closely tied to eye health in any plant-based food.
          </p>

          <h3>Digestion</h3>
          <p>
            The pectin in dried apricots is a soluble fiber. It forms a gel in the gut, slows down sugar absorption, and feeds the beneficial bacteria in your colon. A 40g serving delivers about 3g of fiber — roughly 10% of an adult&apos;s daily need.
          </p>

          <h3>Blood pressure support</h3>
          <p>
            Potassium and sodium work in balance in the body. A diet with adequate potassium helps offset sodium retention and supports healthy blood pressure. Dried apricots have one of the highest potassium counts of any dried fruit — higher even than dates.
          </p>

          <h3>A supplement for anemia risk</h3>
          <p>
            This will not replace red meat or an iron supplement if you already have diagnosed anemia. But as an addition for someone at risk, it makes sense. The key move is pairing it with vitamin C to improve absorption — without that step, the iron mostly stays in the food instead of reaching your bloodstream.
          </p>

          <h3>Skin</h3>
          <p>
            Vitamin A and beta-carotene support cell turnover and collagen production. This is not an overnight or dramatic effect — it builds with regular intake over time, the same as with any food carrying this nutrient profile.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5498379/pexels-photo-5498379.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted dried fruit with cinnamon in a rustic bowl — dried apricots among the ingredients"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to cook with dried apricots</h2>

          <p>
            Most people buy dried apricots for one recipe, or to snack on, and stop there. It is a more versatile ingredient than that.
          </p>

          <h3>As a snack</h3>
          <p>
            The most direct use. A handful in a bag, no fridge required, no extra packaging. More nutritious than a granola bar, with a natural sweetness that holds you over between meals. Just do not sit down with the whole 8oz bag — 100g of dried apricots at once is a lot.
          </p>

          <h3>With yogurt and granola</h3>
          <p>
            Roughly chopped, dried apricots go well with{' '}
            <a href="/en/blog/o-que-e-granola">granola</a>{' '}
            and plain yogurt. Their sweetness means you can skip the honey — the combination already balances itself. It is a breakfast that does not need a recipe.
          </p>

          <h3>In braised meat</h3>
          <p>
            Underused, and exactly where dried apricots earn their place. Braised into chicken, pork, or lamb, they build a sweet-and-sour edge without needing a separate sauce. The basic move: sauté onion and garlic, add cubed chicken, toss in chopped dried apricots and a splash of chicken stock, and simmer until the chicken is tender. The apricots break down into the braising liquid and turn into their own sauce.
          </p>
          <p>
            This is not a modern food-blog invention — it is a centuries-old staple of Persian and Moroccan cooking.
          </p>

          <h3>In salads</h3>
          <p>
            Cut into small pieces, dried apricots work well in a leafy salad with goat cheese, walnuts, and a mustard vinaigrette. Their sweetness balances the bitterness of arugula or watercress. More interesting than raisins in a salad, because the flavor is less obvious and less expected.
          </p>

          <h3>In baking</h3>
          <p>
            Swap in for raisins in almost any recipe. The flavor is more delicate, and the texture holds up better after baking. Fruitcake, tea bread, apricot-almond tart — all of them work.
          </p>

          <h3>Rehydrated</h3>
          <p>
            When a recipe calls for a softer texture, or you want to use apricots as the base of a sauce: cover with hot water for 20-30 minutes. They come close to fresh-fruit texture and soak up the liquid. The soaking water has a concentrated flavor of its own — good stirred into a pan sauce or mixed into juice.
          </p>

          <div className="blog-inline-cta">
            <p>An organized pantry is half the work. <em>Mise handles the other half.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store dried apricots and where to buy them</h2>

          <p>
            A sealed container, away from direct light and heat. Under those conditions, dried apricots keep their quality for 3 to 6 months. In the fridge, up to a year. In the freezer, even longer — though the texture shifts a bit after thawing.
          </p>
          <p>
            Never store them in an open bag. Dried apricots absorb moisture from the air and turn sticky, with the flavor drifting off. A sealed jar or an airtight plastic container solves the problem.
          </p>

          <h3>Where to buy</h3>
          <p>
            Every regular grocery store carries them — usually in the dried fruit aisle, next to raisins and dates. Bulk bins at a natural foods store or co-op tend to run cheaper per pound, and let you buy exactly the amount you need before committing to a bigger bag.
          </p>
          <p>
            Online is where you will find the widest range: Turkish, California-grown, organic and unsulfured, in different sizes. Origin affects color, texture, and sweetness, so it is worth comparing. Just check the net weight when comparing prices — bags of different sizes make side-by-side comparisons misleading.
          </p>
          <p>
            If you go through dried apricots regularly, it is worth keeping them on your{' '}
            <a href="/en/funcionalidades/despensa">pantry list in Mise</a>{' '}
            and adding them to your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            before you run out. That way you know they are low before Thursday night, when you are halfway through a chicken-and-apricot braise and realize the bag is empty.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about dried apricots</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Do dried apricots make you gain weight?</p>
              <p className="faq-a">
                They run about 240 calories per 100g — more calorie-dense than fresh, since drying concentrates the natural sugar. In a reasonable portion (30-40g, 6 to 8 halves), that is closer to 70-100 calories, which fits fine into a balanced diet. The problem is usually eating straight from the bag without tracking the amount.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many dried apricots can you eat a day?</p>
              <p className="faq-a">
                A reasonable portion is 6 to 8 halves, about 30-40g. That gets you the fiber, iron, and potassium without overdoing the sugar. If you have diabetes or watch glycemic load, check with a dietitian on portion size.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are apricots and dried apricots the same fruit?</p>
              <p className="faq-a">
                Same fruit — dried apricots are fresh apricots with the water removed. The process concentrates the nutrients and sugar, changes the texture, and stretches the shelf life from days to months. Fresh apricots only show up for a few weeks each summer, which is exactly why the dried version is what you see year-round.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you rehydrate dried apricots?</p>
              <p className="faq-a">
                Cover with hot (not boiling) water and let sit for 20-30 minutes. They soak up the liquid and soften close to fresh-fruit texture. The leftover soaking water has a concentrated flavor — use it as a sauce base or mix it into juice. For cold dishes, rehydrating in orange juice helps your body absorb more of the iron.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are dried apricots gluten-free?</p>
              <p className="faq-a">
                Plain dried apricots have no gluten. Check the label anyway: some brands process them in facilities that also handle wheat, which opens the door to cross-contamination. If you have celiac disease, look for a certified gluten-free label.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do dried apricots work in savory cooking?</p>
              <p className="faq-a">
                Very well. Braised with chicken, pork, or lamb, dried apricots build a sweet-and-sour edge without a separate sauce. It is a staple in Persian and Moroccan cooking. Chopped fine, they also work in couscous, lentil rice, and salads with a sharp cheese.
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
                Creator of Mise. Bought dried apricots to braise with chicken, ate half the bag on the walk home from the store. The chicken happened the following week.
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
              You buy what you&apos;ll actually use — and the dried apricots don&apos;t disappear before they become dinner.
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
