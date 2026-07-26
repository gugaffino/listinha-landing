import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Are Pistachios? Raw vs Roasted, Uses, and Storage',
  description: 'Pistachios are seeds with a hard shell and a bright green center. See raw vs roasted, shelled vs unshelled, how many to eat, and how to store them.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pistache',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pistache',
    },
  },
  openGraph: {
    title: 'What Are Pistachios? Raw vs Roasted, Uses, and Storage',
    description: 'Pistachios are seeds with a hard shell and a bright green center. See raw vs roasted, shelled vs unshelled, how many to eat, and how to store them.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache',
    images: [
      {
        url: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh pistachios with shells slightly open, showing the bright green center — close-up',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Pistachios? Raw vs Roasted, Uses, and Storage',
    description: 'Pistachios are seeds with a hard shell and a bright green center. See raw vs roasted, shelled vs unshelled, how many to eat, and how to store them.',
    images: ['https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are pistachios a fruit or a nut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, a pistachio is a seed. The tree produces a drupe — a fleshy fruit with a hard pit — and the pistachio is the seed inside that pit. In cooking and at the grocery store, it is grouped with tree nuts like almonds and cashews, because the nutrition profile and the way you use it in the kitchen are the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pistachios make you gain weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pistachios are calorie-dense, like any nut — most of that energy comes from fat. But it is mostly unsaturated fat, the same kind found in olive oil. In a reasonable portion (about 1 ounce, roughly 49 kernels), pistachios are more filling and more nutritious than most packaged snacks. The problem is usually eating straight from the bag until it is empty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many pistachios should you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard serving is about 1 ounce (28g) — roughly 49 kernels, or a closed handful. That is enough to get the nutritional benefits without overdoing the calories. If you are eating them as a between-meal snack, that serving size is a solid limit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are salted pistachios worse than raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salted pistachios have more sodium, which matters if you are watching blood pressure. Otherwise, the nutrition is nearly identical. For cooking — sweet or savory recipes — unsalted is more versatile, since you control the seasoning yourself. For snacking straight from the bag, salted is a matter of taste.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store pistachios so they last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In-shell pistachios keep the longest — sealed at room temperature, they hold their quality for months. Shelled pistachios oxidize faster: keep them in an airtight container, and move them to the fridge or freezer if you need more than a month of storage. Never leave the bag open on the counter — that is how they turn rancid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are pistachios gluten-free and dairy-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain, raw pistachios have no gluten and no dairy. Processed versions — seasoned, flavored, or blended snack mixes — can pick up cross-contamination with gluten depending on the facility. Products like pistachio paste or pistachio ice cream usually contain dairy if made with milk. Always check the label on anything beyond the plain kernel.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Are Pistachios? Raw vs Roasted, Uses, and Storage',
  description: 'Pistachios are seeds with a hard shell and a bright green center. See raw vs roasted, shelled vs unshelled, how many to eat, and how to store them.',
  image: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Are Pistachios', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pistache' },
  ],
}

export default function PistachiosEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Are Pistachios</li>
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
            Pistachios in the Kitchen: What They Are and How to Use Them
          </h1>
          <p className="blog-desc">
            The green nut showing up in ice cream, pesto, and pastry shop windows everywhere. What a pistachio actually is, why raw and roasted taste different, and how to keep a bag from going stale before you use half of it.
          </p>

          <div className="answer-box">
            <p>
              <strong>Pistachios</strong> are the seeds of the <em>Pistacia vera</em> tree, native to the Middle East and Central Asia.
              They grow inside a hard, tan-pink shell that splits open naturally as they ripen, revealing the bright green kernel inside.
              They are one of the highest-protein nuts you can buy, and — unlike almonds or walnuts — the tree only produces a full crop every other year, which keeps the price up.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh pistachios with shells slightly open, showing the bright green center — close-up"
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
              <li><a href="#what-are-pistachios">What are pistachios</a></li>
              <li><a href="#where-they-come-from">Where they come from</a></li>
              <li><a href="#nutrition">What&apos;s inside: the nutrition</a></li>
              <li><a href="#raw-vs-roasted">Raw, roasted, shelled, salted — what&apos;s the difference</a></li>
              <li><a href="#how-to-use">How to cook with pistachios</a></li>
              <li><a href="#how-to-store">How to store them so they last</a></li>
              <li><a href="#worth-it">Are they worth keeping around</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT ARE PISTACHIOS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4931455/pexels-photo-4931455.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Salted pistachios in their shells, close-up showing natural color and texture"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Anton Uniqueton / Pexels</p>
          </div>

          <h2 id="what-are-pistachios" className="img-above">What are pistachios</h2>

          <p>
            A pistachio (<em>Pistacia vera</em>) is a seed with a hard shell that pops open on its own once it ripens — that&apos;s the detail that separates a good batch from an unripe one. The shell sits slightly ajar. If it&apos;s fully sealed shut, it was picked too early.
          </p>
          <p>
            Technically, what you&apos;re eating is a seed, not a nut. The tree produces a small, fleshy fruit (a drupe), and the pistachio sits inside the pit of that fruit. In the kitchen and at the store, though, it lands in the same bucket as tree nuts: almonds, cashews, walnuts.
          </p>
          <p>
            The green color is the most recognizable trait. It comes from chlorophyll — the greener the kernel, the fresher it is and the more antioxidants it carries. Kernels that lean yellow are usually older or lower grade.
          </p>
          <p>
            The flavor is mild, slightly sweet, and rich enough to hold its own in both dessert and savory cooking. That&apos;s why the same nut shows up in ice cream, pesto, yogurt bowls, and granola — sometimes in the same week.
          </p>

          {/* WHERE THEY COME FROM */}
          <h2 id="where-they-come-from">Where pistachios come from</h2>

          <p>
            The pistachio tree originated in the Middle East — Iran, Turkey, Syria, and Afghanistan are its historic home. Today, Iran and the United States are the two biggest producers, with California growing nearly all of the US crop in the Central Valley. Turkey, Iran, and California together account for most of the world&apos;s supply.
          </p>
          <p>
            The price stays high for reasons that have nothing to do with marketing. A pistachio tree takes 7 to 10 years before it produces commercially. Once mature, it tends to crop heavily one year and lightly the next — a natural cycle called alternate bearing that keeps annual supply uneven. Harvest is time-sensitive and labor-intensive. And Iran, historically a major exporter, has faced trade restrictions that ripple through global pricing.
          </p>
          <p>
            None of that makes pistachios cheap, but it does explain why they cost more per ounce than almost any other nut in the bulk bin — and why the price swings more than peanuts or almonds from one year to the next.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What&apos;s inside: the nutrition</h2>

          <p>
            A 1-ounce serving of shelled pistachios (about 49 kernels) has roughly 160 calories, 6g of protein, 13g of fat, and 3g of fiber. For a nut, that protein number is high — it beats almonds and cashews gram for gram, and pistachios are the lowest-calorie nut per serving of the common tree nuts.
          </p>
          <p>
            Most of that fat is unsaturated: monounsaturated (the same kind in olive oil) and polyunsaturated. That fat profile is linked to better cardiovascular markers with regular, moderate intake.
          </p>
          <p>
            Pistachios also carry lutein and zeaxanthin, two carotenoids tied to eye health. They&apos;re one of the few plant foods with a meaningful amount of both. On top of that, pistachios are a solid source of vitamin B6, potassium, and manganese.
          </p>
          <p>
            One honest note: pistachios are nutritious, not magic. The benefit comes from eating them regularly, in a reasonable portion, as part of a varied diet — not from one big handful making up for the rest of the week.
          </p>

          {/* RAW VS ROASTED */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11842170/pexels-photo-11842170.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Pistachios in a rustic green bowl on a marble surface — ready for a recipe"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: eat kubba / Pexels</p>
          </div>

          <h2 id="raw-vs-roasted" className="img-above">Raw, roasted, shelled, salted — what&apos;s the difference</h2>

          <p>
            The pistachio aisle sells more variations than most nuts. Knowing what each one is for keeps you from buying the wrong bag for the recipe.
          </p>

          <h3>In-shell vs shelled</h3>
          <p>
            Most snack bags sell pistachios in the shell — the shell protects the kernel and extends shelf life. Shelled pistachios cost more per ounce but save the work of cracking each one, which matters if you&apos;re baking or topping a dish rather than snacking by hand. Nutritionally, the kernel itself is identical either way — the shell doesn&apos;t add or take away anything.
          </p>

          <h3>Raw vs roasted</h3>
          <p>
            Raw pistachios are unroasted — most "raw" pistachios sold in stores are lightly steam-pasteurized for food safety, but that step doesn&apos;t roast them, so they still count as raw. Roasted pistachios go through actual heat processing, which deepens the flavor and adds crunch. Nutritionally the two are close, though raw holds onto slightly more of its antioxidants. If you plan to toast them yourself for a recipe, buy raw and control the process.
          </p>

          <h3>Salted vs unsalted</h3>
          <p>
            Salted is the most common snack format. It&apos;s fine for eating straight from the bag, but the added sodium makes it a poor fit for sweet recipes, where salt throws off the balance. For baking, pesto, or anything where you&apos;re controlling the seasoning yourself, buy unsalted.
          </p>

          <h3>Paste and chopped</h3>
          <p>
            Pistachio paste has shown up everywhere in pastry over the past few years — croissant filling, cake batter, cream. Chopped or crushed pistachios are the go-to for finishing ice cream, cakes, and dishes like baklava. Both are usually found at specialty grocers or ordered online rather than the regular nut aisle.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10060931/pexels-photo-10060931.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh pistachios scattered on a white surface, ready to use in a recipe"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: SC Studio / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to cook with pistachios</h2>

          <p>
            The rule of thumb: pistachios work anywhere almonds work, with a more distinct flavor. The green color also does a lot of visual work — a scattering of chopped pistachios makes almost any plate look finished.
          </p>

          <h3>As a snack</h3>
          <p>
            The simplest use, and the one that disappears fastest. A handful of in-shell pistachios is more satisfying than it sounds — cracking each one slows you down, which naturally caps how much you eat. You buy a bag for a recipe, snack through half of it before you even start cooking, and end up buying more. Everyone does this.
          </p>

          <h3>Breakfast</h3>
          <p>
            Roughly chopped pistachios work well stirred into plain yogurt with honey, or mixed into granola. They add crunch, protein, and a flavor that&apos;s a break from the usual almond-and-walnut mix.
          </p>

          <h3>Desserts</h3>
          <p>
            Ice cream, cake, brownies, mousse, baklava, biscotti. Pistachios have enough flavor to hold their own even next to something as intense as chocolate. Pistachio paste works the same way peanut butter does — in fillings, frostings, and creams.
          </p>

          <h3>Savory dishes</h3>
          <p>
            Less obvious, but one of the best uses. Pistachio pesto (swapped in for pine nuts) pairs well with pasta and chicken. Crushed pistachios make a fast, effective crust for baked fish or chicken. In Moroccan couscous and lamb dishes across the Middle East, pistachios are a traditional ingredient, not a trend.
          </p>

          <h3>Toasting them yourself</h3>
          <p>
            If you bought raw, toast before using: dry skillet, medium heat, 3 to 5 minutes, stirring the whole time. The aroma changes completely. Don&apos;t let them go past golden — burnt pistachios carry a bitterness that doesn&apos;t go away.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store pistachios so they don&apos;t go stale</h2>

          <p>
            Pistachios have a high fat content, which is exactly what makes them go rancid if you leave the bag open on the counter. Storage matters more with pistachios than with most pantry staples.
          </p>

          <h3>In the shell</h3>
          <p>
            The shell buys you time. Sealed in an airtight container at room temperature, in-shell pistachios hold their quality for several months — some sources say up to a year in good conditions. It&apos;s the lowest-maintenance format if you&apos;re not going through them fast.
          </p>

          <h3>Shelled</h3>
          <p>
            More exposed to air, so more prone to oxidizing. Keep shelled pistachios in a sealed jar or airtight container. If you won&apos;t finish the bag within a month, move them to the fridge — or the freezer for longer storage, where they&apos;ll keep for up to a year without losing much flavor.
          </p>
          <p>
            Either way, the enemy is air and light, not time by itself. A properly sealed container does more for shelf life than the date on the bag.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Are pistachios worth keeping in your pantry</h2>

          <p>It depends on what you&apos;re going to do with them.</p>
          <p>
            If you already snack on nuts — almonds, cashews, walnuts — pistachios are a solid rotation. Good protein-to-calorie ratio, distinct flavor, easy to fit into what you&apos;re already eating. A well-stocked{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            handles them fine: in the shell, they last for months without any special care.
          </p>
          <p>
            If the plan is to cook with them, buy shelled and unsalted — you&apos;ll get more control and actually use what you bought. Salted, in-shell pistachios tend to get eaten as a snack before they ever make it into a recipe.
          </p>
          <p>
            If you&apos;re buying them because they&apos;re the trendy ingredient of the moment and you don&apos;t have a clear use in mind, they&apos;ll probably end up forgotten in a jar. A new ingredient only earns a spot in your routine when it has a use attached before the purchase — different from almonds, which everyone already knows what to do with.
          </p>
          <p>
            Pistachios aren&apos;t a pantry basic the way olive oil or garlic are — but if you cook with any variety, or already have a recipe in mind, they&apos;re worth adding to the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            next time the price looks fair.
          </p>
          <p>
            Pistachios on the list. Just don&apos;t eat the whole bag before you get home.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about pistachios</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Are pistachios a fruit or a nut?</p>
              <p className="faq-a">
                Technically a seed — the tree produces a drupe with a hard pit, and the pistachio is the seed inside that pit. In cooking and at the store, it&apos;s grouped with tree nuts, since the nutrition and the way you use it in the kitchen are the same.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do pistachios make you gain weight?</p>
              <p className="faq-a">
                They&apos;re calorie-dense like any nut — most of the energy comes from fat, which is mostly unsaturated (the same kind in olive oil). In a reasonable portion (about 1 ounce), they&apos;re more filling and more nutritious than most packaged snacks. The problem is usually finishing the whole bag.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many pistachios should you eat a day?</p>
              <p className="faq-a">
                A standard serving is about 1 ounce (28g) — roughly 49 kernels, or one closed handful. That&apos;s enough to get the benefits without piling on calories. As a between-meal snack, that&apos;s a solid daily limit.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are salted pistachios worse than raw?</p>
              <p className="faq-a">
                They carry more sodium, which matters if you&apos;re watching blood pressure. Otherwise the nutrition is nearly the same. For recipes, unsalted gives you more control over seasoning. For snacking, salted is just a matter of taste.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store pistachios so they last?</p>
              <p className="faq-a">
                In the shell, sealed at room temperature, they last for months. Shelled, keep them in an airtight container — move to the fridge or freezer if you need more than a month of storage. Left exposed to air, they turn rancid. Never leave the bag open for long.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are pistachios gluten-free and dairy-free?</p>
              <p className="faq-a">
                Plain pistachios have no gluten and no dairy. Processed versions — seasoned or blended into snack mixes — can pick up cross-contamination with gluten depending on the facility. Pistachio paste and pistachio ice cream usually contain dairy if made with milk. Always check the label.
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
                Creator of Mise. Bought shelled pistachios for pesto, ate half of them on the walk home from the store. The pesto happened the following week.
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
              You buy what you&apos;ll actually use — and the pistachios don&apos;t disappear before they become dinner.
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
