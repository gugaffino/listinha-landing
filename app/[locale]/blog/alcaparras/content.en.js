import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Capers: What They Are, How to Use Them, and Substitutes',
  description: 'Capers are pickled flower buds with a salty, briny bite. Learn what they are, how to use them in cooking, the best substitutes, and how to store them.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/alcaparras',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
      en: 'https://www.miseemcasa.com.br/en/blog/alcaparras',
      es: 'https://www.miseemcasa.com.br/es/blog/alcaparras',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alcaparras',
    },
  },
  openGraph: {
    title: 'Capers: What They Are, How to Use Them, and Substitutes',
    description: 'Capers are pickled flower buds with a salty, briny bite. Learn what they are, how to use them in cooking, the best substitutes, and how to store them.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/alcaparras',
    images: [
      {
        url: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Capers in a glass jar — pickled flower buds in brine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capers: What They Are, How to Use Them, and Substitutes',
    description: 'Capers are pickled flower buds with a salty, briny bite. Learn what they are, how to use them in cooking, the best substitutes, and how to store them.',
    images: ['https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are capers, exactly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capers are the unopened flower buds of Capparis spinosa, a shrub native to the Mediterranean. Picked by hand before they bloom, then cured in brine, vinegar, or salt, they turn salty, tangy, and slightly bitter. Used as a seasoning, not a vegetable — a small amount adds a sharp, briny hit to sauces, fish, and pasta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to rinse capers before using them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brined and vinegar-packed capers just need a quick rinse or a drain — they are ready to use straight from the jar. Salt-packed capers need a real soak: 15 to 20 minutes in cold water, changing the water once, before they go anywhere near a pan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best substitute for capers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chopped green olives are the closest match — same brininess, similar bite. Kalamata olives work in heartier dishes. Chopped dill pickle covers the acidity and crunch in a pinch, and a squeeze of extra lemon plus a pinch of salt gets you most of the way there when nothing pickled is in the fridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are capers good for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capers carry vitamin K, some vitamin A and C, and flavonoids like quercetin and rutin, which have anti-inflammatory properties. The catch is sodium — even rinsed, a serving still carries a real amount of salt. Used the way they are meant to be used, a tablespoon at a time, that is rarely an issue. Anyone watching sodium intake should rinse well and go easy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do capers last once the jar is open?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Months, as long as they stay in the fridge and stay covered by their brine. If the liquid level drops, top it off with a bit of lightly salted water. Never pour out all the brine to store them dry — without it, capers lose their texture and shrivel fast.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between capers and caper berries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capers are the unopened flower bud. Caper berries are the fruit that forms after the flower blooms and gets pollinated — bigger, with a stem still attached, milder flavor, and a seedy, juicier bite. They are cured the same way but used differently: caper berries usually go on a cheese board or a cocktail pick, not chopped into a sauce.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Capers: What They Are, How to Use Them, and Substitutes',
  description: 'Capers are pickled flower buds with a salty, briny bite. Learn what they are, how to use them in cooking, the best substitutes, and how to store them.',
  image: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/alcaparras',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Capers', item: 'https://www.miseemcasa.com.br/en/blog/alcaparras' },
  ],
}

export default function AlcaparrasEn() {
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
            <li><a href="/en">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Capers</li>
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
            What Are Capers? A No-Nonsense Guide to Using Them in the Kitchen
          </h1>
          <p className="blog-desc">
            That small jar sitting next to the olives and pickles. You have seen it a hundred times and used it maybe twice. Capers are flower buds, not a fruit and not a spice blend — and knowing that changes how much you actually put on the plate.
          </p>

          <div className="answer-box">
            <p>
              <strong>Capers</strong> are the unopened flower buds of <em>Capparis spinosa</em>, a shrub native to the Mediterranean.
              Cured in brine, vinegar, or salt, they turn salty, tangy, and slightly bitter.
              They work as a seasoning — a small, sharp hit that gives sauces, fish, and pasta a point of depth.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Capers in a glass jar — pickled flower buds in brine"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-are-capers">What capers actually are</a></li>
              <li><a href="#types">Brined, vinegar, or salt-packed</a></li>
              <li><a href="#how-to-use">How to use capers in cooking</a></li>
              <li><a href="#nutrition">Nutrition and the sodium question</a></li>
              <li><a href="#substitutes">The best substitutes for capers</a></li>
              <li><a href="#storage">How to store them once opened</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT ARE CAPERS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Small capers in close-up — green flower buds of the Capparis spinosa plant"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-are-capers" className="img-above">What capers actually are</h2>

          <p>
            Capers are flower buds — not a fruit, not a seed, not something ground into a jar. They are the buds of <em>Capparis spinosa</em>, picked by hand before the flower opens.
            Once it blooms, the window has passed. Harvest happens fast, bud by bud.
          </p>
          <p>
            The plant grows where almost nothing else wants to: dry, rocky slopes, cracks in old stone walls, cliffs along the southern Mediterranean coast.
            It is native to that region and the Middle East, and it thrives on neglect. Harvest is still entirely manual — every bud picked by hand, one at a time, before it opens.
          </p>
          <p>
            Fresh off the plant, a caper bud is nearly flavorless. Curing is what does the work: brine, vinegar, or dry salt.
            That process is where the salty, tangy, faintly bitter flavor comes from — the one people either love immediately or need a second try to appreciate.
          </p>
          <p>
            Size is a real variable. The smaller the bud, the more delicate the flavor and the higher the price.
            <em>Nonpareil</em> capers — under 7mm — are the smallest and most prized in European kitchens. Larger grades (surfines, capucines, grusas) taste stronger and cost less.
            Most grocery store labels do not bother listing the grade, so you are usually buying by brand, not by size.
          </p>

          {/* TYPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3297902/pexels-photo-3297902.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Jars of Mediterranean pickled goods on a shelf — olives, capers, and antipasti"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="types" className="img-above">Brined, vinegar, or salt-packed</h2>

          <p>
            Three formats show up on grocery shelves. Knowing the difference saves a ruined recipe — and money spent on the wrong jar.
          </p>

          <h3>Brined</h3>
          <p>
            The default at most grocery stores: water, salt, sometimes a splash of vinegar.
            Ready to use straight from the jar — a quick rinse knocks off the extra salt.
            This is the low-effort option, in the best sense of low-effort.
            The right pick if you cook with capers often and want zero prep.
            Store the unopened jar in the <a href="/en/funcionalidades/despensa">pantry</a>; once opened, it goes in the fridge.
          </p>

          <h3>Vinegar-packed</h3>
          <p>
            Sharper and more acidic than brine. Shows up more in gourmet jars and imported antipasti.
            Works well anywhere extra acidity is welcome — tomato sauce, fish, salads.
            Go easy in dishes that are already acidic; the vinegar starts competing instead of helping.
          </p>

          <h3>Salt-packed</h3>
          <p>
            The traditional method from the Mediterranean islands — Pantelleria, off Sicily, is the best-known source.
            More complex flavor, firmer texture. The pick for anyone cooking Italian food seriously.
            They need a real soak before use: 15 to 20 minutes in cold water, changed once.
            Taste before adding more salt to the dish — residual salt is already doing some of the seasoning.
            Harder to find outside specialty stores or online, but worth it when texture matters most.
          </p>

          <p>
            A shortcut worth knowing: if a recipe just says "capers" with no qualifier, assume brined. It works in almost everything.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use capers in cooking</h2>

          <p>
            A caper is a seasoning, not a main ingredient.
            It works as a flavor amplifier — a hit of salt and acid in a dish that needs depth without adding bulk.
          </p>

          <h3>Puttanesca sauce</h3>
          <p>
            The classic use. Canned tomato, black olives, capers, anchovy, garlic — all pantry items, 20 minutes start to finish.
            It is the dish that comes together on a night the fridge is nearly empty.
            Every ingredient is shelf-stable and the sauce itself takes ten minutes.
            If your <a href="/en/funcionalidades/lista-de-compras">shopping list</a> is built right, this dish shows up without a special trip to the store.
          </p>

          <h3>With fish</h3>
          <p>
            Smoked salmon, cream cheese, red onion, and capers is a Scandinavian staple.
            With <a href="/en/blog/atum">canned tuna</a>, capers stand in for regular pickle relish.
            On roasted cod or a grilled white fish, they finish the plate — capers, olive oil, and lemon, nothing more.
          </p>

          <h3>Cold sauces</h3>
          <p>
            In tartar sauce, capers get chopped fine alongside pickle and fresh herbs.
            Pairs well with a burger, breaded chicken, or fried fish.
            Canned tuna, chopped capers, and a squeeze of lemon makes a five-minute lunch.
            It reads as lazy. It is Mediterranean. It can be both.
          </p>

          <h3>As a finishing touch</h3>
          <p>
            Whole capers scattered over carpaccio, an arugula salad, or a charcuterie board.
            Finely chopped into herb butter, spread over fish or chicken right before serving.
            Fried briefly in olive oil, they turn crisp and the flavor concentrates — a garnish with real punch.
          </p>

          <p>
            One detail worth remembering: drain and rinse before using, even from a mild brine.
            The curing salt is strong — skip the rinse and the dish can end up over-salted without you meaning to.
            The caper is already going to season the plate. Let it do that job, then adjust at the end.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t cost you this much headspace. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* NUTRITION */}
          <h2 id="nutrition">Nutrition and the sodium question</h2>

          <p>
            Capers carry anti-inflammatory properties from two flavonoids: quercetin and rutin.
            They are also a source of vitamin K, plus some vitamin A and vitamin C.
            The fiber content is notable for a condiment — small per serving, but there.
          </p>
          <p>
            The catch is sodium. Pickled capers carry real salt — it is what preserves them and what builds the flavor.
            Even rinsed, a serving still carries a meaningful amount.
            For most people that is not an issue: the quantity used in a dish is small, the same as any other seasoning.
            Anyone managing blood pressure or watching sodium should rinse well and use them with restraint.
          </p>
          <p>
            Capers are not a superfood. They are a condiment with genuinely interesting nutrients — like most Mediterranean seasonings.
            The difference is that a caper carries enough flavor to use sparingly, and using it sparingly is the correct way to use it.
            That same logic applies to anything worth keeping in a well-stocked{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {': '}buy it once, it lasts months, it seasons dozens of dishes.
          </p>

          {/* SUBSTITUTES */}
          <h2 id="substitutes">The best substitutes for capers</h2>

          <p>
            No jar in the house and the recipe calls for capers anyway. A few options actually work, not just technically fit.
          </p>
          <p>
            <strong>Chopped green olives</strong> are the closest match — same brine, same salt, similar bite. Chop them roughly the size of a caper and use the same amount.
            <strong>Kalamata olives</strong> work in heartier, saucier dishes where a bolder flavor fits.
            <strong>Chopped dill pickle</strong> covers the acidity and adds crunch, useful in cold sauces and spreads.
            <strong>Pickled red onion</strong> brings the vinegar snap without the salt overload — good in salads.
          </p>
          <p>
            In a pinch, with nothing pickled in the house: a squeeze of lemon juice plus a small pinch of salt gets a dish most of the way there.
            It skips the texture a caper adds, but the acid-and-salt balance a recipe is actually chasing still lands.
          </p>
          <p>
            None of these are a perfect swap — a caper has a flavor of its own that nothing else fully replicates.
            But for the job a caper is doing in most recipes (salt, acid, a small burst of texture), these get close enough that the dish still works.
          </p>

          {/* STORAGE */}
          <h2 id="storage">How to store capers once opened</h2>

          <p>
            Keep the jar in the fridge, always covered by its brine.
            If the liquid drops below the capers, top it off with lightly salted water — do not let them sit exposed to air.
          </p>
          <p>
            Stored right, an opened jar lasts months. The brine is doing real preservation work, not just holding flavor.
            Never pour out all the liquid to store them dry in a container: without brine, capers lose texture fast and shrivel within days.
          </p>
          <p>
            Salt-packed capers keep even longer unopened, since dry salt is a stronger preservative than liquid brine.
            Once soaked and rinsed for use, treat leftovers the same way as the brined kind — fridge, covered, used within a couple of weeks.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about capers</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What are capers, exactly?</p>
              <p className="faq-a">
                Capers are the unopened flower buds of <em>Capparis spinosa</em>, a shrub native to the Mediterranean.
                Cured in brine, vinegar, or salt, they turn salty, tangy, and slightly bitter.
                Used as a seasoning, not a vegetable — a small amount adds a sharp, briny hit to sauces, fish, and pasta.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do I need to rinse capers before using them?</p>
              <p className="faq-a">
                Brined and vinegar-packed capers just need a quick rinse or a drain — they are ready to use straight from the jar.
                Salt-packed capers need a real soak: 15 to 20 minutes in cold water, changing the water once, before they go anywhere near a pan.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the best substitute for capers?</p>
              <p className="faq-a">
                Chopped green olives are the closest match — same brininess, similar bite.
                Kalamata olives work in heartier dishes. Chopped dill pickle covers the acidity and crunch in a pinch, and a squeeze of extra lemon plus a pinch of salt gets you most of the way there when nothing pickled is in the fridge.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are capers good for you?</p>
              <p className="faq-a">
                Capers carry vitamin K, some vitamin A and C, and flavonoids like quercetin and rutin, which have anti-inflammatory properties.
                The catch is sodium — even rinsed, a serving still carries a real amount of salt. Used a tablespoon at a time, that is rarely an issue.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long do capers last once the jar is open?</p>
              <p className="faq-a">
                Months, as long as they stay in the fridge and stay covered by their brine.
                If the liquid level drops, top it off with a bit of lightly salted water. Never pour out all the brine to store them dry — without it, capers lose their texture and shrivel fast.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between capers and caper berries?</p>
              <p className="faq-a">
                Capers are the unopened flower bud. Caper berries are the fruit that forms after the flower blooms and gets pollinated — bigger, with a stem attached, milder flavor, and a seedy, juicier bite.
                They are cured the same way but used differently: caper berries usually go on a cheese board, not chopped into a sauce.
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
                Mise&apos;s founder. Has had an open jar of capers in the fridge since November. Will use it in the next puttanesca — as soon as he remembers it&apos;s there.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Know what&apos;s in the pantry.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Connects pantry, recipes, and shopping list in one place.
              You buy what you&apos;ll actually use — and the capers don&apos;t sit forgotten since November.
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
          <a href="/en" className="brand">
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
