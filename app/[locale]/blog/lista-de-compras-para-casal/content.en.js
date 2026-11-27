import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Grocery List for Two: Quantities That Actually Work',
  description: 'A grocery list built for two people, not a family of four halved. What to buy weekly versus monthly, real quantities per category, a realistic monthly budget, and how to split it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casal',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casal',
    },
  },
  openGraph: {
    title: 'Grocery List for Two: Quantities That Actually Work',
    description: 'A grocery list built for two people, not a family of four halved. What to buy weekly versus monthly, real quantities per category, a realistic monthly budget, and how to split it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
    images: [
      {
        url: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'A couple cooking together in a bright kitchen — one chopping vegetables while the other cooks at the stove',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grocery List for Two: Quantities That Actually Work',
    description: 'A grocery list built for two people, not a family of four halved. What to buy weekly versus monthly, real quantities per category, a realistic monthly budget, and how to split it.',
    images: ['https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a two-person household spend on groceries a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'USDA\'s Cost of Food at Home reports put a moderate-cost grocery plan for two adults at roughly $800-$1,000 a month, before any dining out. The real number shifts with how much you cook at home versus order in, and whether you buy premium cuts versus everyday ones. Shopping without a list tends to push that number meaningfully higher.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to shop monthly or weekly for two people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both, split by shelf life. Shelf-stable staples — rice, pasta, oil, canned goods, cleaning supplies — go on a monthly run, bought in bigger quantities for a better per-unit price. Produce, bread, dairy, and fresh meat go on a weekly run, because at two-person quantities they spoil before a family-size pack gets used up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do two people split a grocery list without buying duplicates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A shared list, updated by whoever notices something ran out, fixes the duplicate-purchase problem. It is rarely a communication issue — it is a list that only exists in one person\'s head. Once it is written down and visible to both, whoever shops crosses off what is already covered, and nobody buys the same dish soap twice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What quantities should two people buy to avoid waste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The practical rule: buy fresh produce and protein for 4-5 days, not a full week. Family-size packs of perishables rarely pay off for two people — what does not get eaten in time gets thrown out before the lower per-unit price matters. Shelf-stable staples are the opposite: the bulk size is worth it because there is no clock running.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a grocery list for two different from a list for one person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, mostly around perishables. A single person shopping alone buys individual portions and risks wasting anything sold in a large pack. Two people already eat double that, which opens the door to slightly bigger packages — but it is still far from family-of-four quantities, which is what most generic grocery templates are built around.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you scale a recipe that serves 4 down to 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Halve the ingredients that have a measurement — meat, rice, vegetables, liquid. Seasonings like salt, garlic, and chili do not scale in a straight line — start with a bit more than half and adjust at the end. If a recipe still makes more than two people eat in one sitting, cook the full batch and freeze the extra in single portions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should never be missing from a two-person grocery list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rice or another grain, beans or a legume, cooking oil, eggs, one protein source, that week\'s produce, coffee, bread, basic cleaning supplies, and toilet paper. That is the base that carries a busy week before any elaborate recipe enters the picture.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Grocery List for Two: Quantities That Actually Work',
  description: 'A grocery list built for two people, not a family of four halved. What to buy weekly versus monthly, real quantities per category, a realistic monthly budget, and how to split it.',
  image: 'https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Grocery List for Two', item: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casal' },
  ],
}

export default function ListaCasalEn() {
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

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumb-nav">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Grocery List for Two</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-21">Aug 21, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Grocery list for two people: the right amount, not the leftover math
          </h1>
          <p className="blog-desc">
            Every generic grocery template online is calibrated for a family of four. Follow it as a couple and you end up with a half-eaten block of cheese going bad in the fridge, or no rice left by Wednesday. The right quantities for two people are a different calculation — here it is.
          </p>

          <div className="answer-box">
            <p>
              A <strong>grocery list for two</strong> splits what you buy every week (produce, fresh meat, bread, dairy) from what you buy once a month (rice, beans, oil, cleaning supplies).
              The practical rule is to buy perishables for 4-5 days, not a full week — at two-person quantities, a family-size pack goes bad before it gets used up.
              A two-person household spends roughly <strong>$800 to $1,000 a month</strong> on groceries with reasonable planning, per USDA's moderate-cost estimates.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="A couple cooking together in a bright kitchen — one chopping vegetables while the other cooks at the stove"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Amina Filkins / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Table of contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#diferenca">Why "family of four, halved" doesn't work</a></li>
              <li><a href="#semanal-mensal">Weekly shopping vs. monthly shopping</a></li>
              <li><a href="#quantidades">Real quantities by category</a></li>
              <li><a href="#quanto-custa">What it actually costs per month</a></li>
              <li><a href="#dividir">How to split the list without duplicates</a></li>
              <li><a href="#desperdicio">Mistakes that lead to waste</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHY IT'S DIFFERENT */}
          <h2 id="diferenca">Why "family of four, halved" doesn't work</h2>

          <p>
            Most generic grocery lists floating around online are built for a household of four. That is not an accident — it is the reference size used in most consumer research. The problem is that two people do not consume exactly half of what a family of four consumes, item by item.
          </p>
          <p>
            A 500g block of cheese splits fast if sandwiches happen every morning. The same block, bought on the assumption that "it's just the two of us, so buy less," can still sit half-used and moldy if actual consumption runs lower than expected.
          </p>
          <p>
            The question is never dividing the family-of-four amount by two. It is watching what your own household actually eats, category by category — and that shifts depending on who cooks more, who works long hours away from home, and how many meals you genuinely share in a week.
          </p>
          <p>
            Couples who try to run a family-of-four list unadjusted end up in one of two spots: a fridge packed with things nobody had time to eat, or an unplanned Wednesday grocery run because the rice ran out earlier than expected.
          </p>

          {/* WEEKLY VS MONTHLY */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8845104/pexels-photo-8845104.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="A woman in a pink shirt writing in a notebook on a kitchen counter, building a grocery list"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Yaroslav Shuraev / Pexels</p>
          </div>

          <h2 id="semanal-mensal" className="img-above">Weekly shopping vs. monthly shopping</h2>

          <p>
            The most useful split is not by food category — it is by shelf life. Items that hold up for weeks or months in the pantry belong on a bigger monthly run. Items that spoil in a matter of days belong on a smaller weekly run, sized to what you will actually cook.
          </p>
          <p>
            <strong>Monthly (once a month, bigger quantities):</strong> rice, beans, oil, sugar, coffee, pasta, canned tomatoes, cleaning supplies, toilet paper, toiletries. Nothing here spoils, and buying more at once usually costs less per unit.
          </p>
          <p>
            <strong>Weekly (every week, smaller quantities):</strong> produce, bread, dairy, fresh meat and fish, eggs. Bought in excess, these are exactly what turns into waste in the back of the fridge by Friday.
          </p>
          <p>
            One bigger baseline run plus smaller weekly top-ups of fresh food is what most couples who manage to keep their grocery budget under control already do, even if they never called it a "system."
          </p>

          {/* QUANTITIES */}
          <h2 id="quantidades">Real quantities by category</h2>

          <p>
            Reference numbers for two people, sized for an average week. Adjust up or down based on how many meals you actually cook at home.
          </p>
          <ul className="item-list">
            <li><strong>Rice or pasta:</strong> a 2lb bag lasts roughly 2-3 weeks for two people eating a starch most days</li>
            <li><strong>Protein (chicken, beef, fish):</strong> about 2-2.5lb a week, split across 3-4 meals with protein</li>
            <li><strong>Eggs:</strong> one dozen a week is a common baseline if eggs show up at breakfast a few times</li>
            <li><strong>Fresh produce:</strong> buy for 4-5 days, not 7 — leafy greens and soft vegetables wilt before that</li>
            <li><strong>Bread:</strong> a small loaf every 2-3 days if freezer space isn't part of the plan</li>
            <li><strong>Milk and dairy:</strong> half a gallon a week is a common reference for coffee and everyday cooking</li>
            <li><strong>Cleaning supplies:</strong> buy monthly — dish soap, laundry detergent, and disinfectant don't spoil waiting</li>
          </ul>
          <p>
            These are reference points, not fixed rules. A couple that hits the gym and cooks chicken daily eats differently than a couple that eats out three nights a week. The list exists to be adjusted to your routine, not the other way around.
          </p>

          {/* COST */}
          <h2 id="quanto-custa">What it actually costs per month</h2>

          <p>
            A two-person household's monthly grocery bill runs roughly <strong>$800 to $1,000</strong>, based on USDA's moderate-cost food plan for two adults. Where you land in that range depends on how often you cook at home versus order delivery, and whether premium cuts or everyday ones fill the cart.
          </p>
          <p>
            One number worth keeping in mind: shopping without a list tends to push per-trip spending up meaningfully — behavioral research puts the bump anywhere from 15% to 25% higher, largely from unplanned add-ons picked up in the aisle. Over a year, that difference adds up to hundreds of dollars for a two-person household. Sorting the <a href="/en/blog/lista-de-compras-mercado">list by store category</a> before you leave the house already cuts a good chunk of that.
          </p>
          <p>
            Comparing that to delivery helps put it in perspective: a typical delivery order runs $30-$45 once fees and tip are added, for one meal. Cooking at home costs a fraction of that per serving — the monthly gap between a couple that cooks and a couple that orders in regularly often outpaces the entire grocery budget for the month.
          </p>

          {/* SPLITTING */}
          <h2 id="dividir">How to split the list without duplicates</h2>

          <p>
            Dish soap bought twice in the same week is not a communication failure. It is a list that only existed in one person's head, while the other person also noticed it was running low and handled it separately.
          </p>
          <p>
            The fix is not assigning who buys what — it is keeping a list both people can see, that either one updates the moment something runs out. Once an item is checked off or crossed out, the second person does not buy it again.
          </p>
          <p>
            This works best when the list lives somewhere both of you actually check, not in one person's phone notes app. That is the whole point of a shared list: the garlic that ran out on Tuesday shows up for both of you, not just for whoever remembered to write it down.
          </p>
          <p>
            It also helps to agree on who shops which week, or split by shopping type — one person handles the weekly produce run, the other handles the <a href="/en/blog/lista-de-compras-do-mes">monthly restock</a>. What matters is that "who buys what" does not default to the same person every time.
          </p>

          {/* WASTE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="A colorful supermarket aisle with a shopping cart mid-grocery run"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Christian Naccarato / Pexels</p>
          </div>

          <h2 id="desperdicio" className="img-above">Mistakes that lead to waste</h2>

          <p>
            The USDA estimates that 30-40% of the U.S. food supply goes to waste, and a large share of that happens at the household level, not earlier in the supply chain. For a two-person home, that waste routinely adds up to several hundred dollars a year — quietly, a bit at a time, not in one dramatic clear-out.
          </p>
          <p>
            <strong>Mistake 1: buying the family-size pack because it looks cheaper.</strong> It is cheaper per ounce, not per ounce that actually makes it into a meal. If half of it spoils before use, the per-unit price stopped mattering.
          </p>
          <p>
            <strong>Mistake 2: doing one big produce run on Sunday to last the full week.</strong> Fresh produce for two people rarely holds up seven days at good quality. A small midweek top-up keeps the last head of lettuce from turning into soup.
          </p>
          <p>
            <strong>Mistake 3: shopping without checking what's already in the pantry.</strong> It is the single most common cause of duplicate purchases — or of finding a bag of pasta hiding behind the oil three weeks later. Checking the pantry before leaving the house takes under a minute.
          </p>
          <p>
            <strong>Mistake 4: skipping meal planning before the shopping trip.</strong> Buying without knowing what you will actually cook produces loose ingredients that never turn into a meal. A <a href="/en/blog/cardapio-semanal-simples-caseiro">simple weekly meal plan</a> settles that before you ever reach the store, not after.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about grocery lists for two</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How much does a two-person household spend on groceries a month?</p>
              <p className="faq-a">
                Roughly $800 to $1,000, based on USDA's moderate-cost estimates for two adults. The real number shifts with how much you cook at home and whether you shop with a list — shopping without one tends to push spending noticeably higher per trip.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is it better to shop monthly or weekly for two people?</p>
              <p className="faq-a">
                Both. Shelf-stable staples (rice, beans, cleaning supplies) go on a monthly run, bought bigger. Produce, bread, and fresh meat go on a weekly run, because at two-person quantities they spoil before a bigger pack gets used up.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do two people split a grocery list without buying duplicates?</p>
              <p className="faq-a">
                A shared list, updated by whoever notices something ran out. It is rarely a communication issue — it is a list that only exists in one person's head.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What quantities should two people buy to avoid waste?</p>
              <p className="faq-a">
                Buy fresh produce and protein for 4-5 days, not a full week. Family-size packs of perishables rarely pay off for two people. For shelf-stable staples, the bulk size is worth it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is a grocery list for two different from a list for one person?</p>
              <p className="faq-a">
                Yes, mostly around perishables. Two people eat double what one person eats alone, which opens the door to slightly bigger packages — but it is still far from family-of-four quantities, the size most generic templates assume.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you scale a recipe that serves 4 down to 2?</p>
              <p className="faq-a">
                Halve the ingredients that have a measurement — meat, rice, liquid. Seasonings like salt and garlic don't scale in a straight line — start with a bit more than half and adjust at the end.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What should never be missing from a two-person grocery list?</p>
              <p className="faq-a">
                Rice or another grain, beans, cooking oil, eggs, one protein source, that week's produce, coffee, bread, basic cleaning supplies, and toilet paper. That's the base that carries a busy week before anything more elaborate.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Founder of Mise. Still grocery shops every week and still forgets an ingredient sometimes.
                Built the app to fix the problem he kept having in his own kitchen.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <p className="blog-cta-title">One list, both of you, one place. Nobody buys the dish soap twice again.</p>
            <p className="blog-cta-desc">
              With Mise, the <a href="/en/funcionalidades/lista-de-compras">grocery list</a> is shared, and the{' '}
              <a href="/en/funcionalidades/despensa">pantry</a> shows what's already at home before you head to the store.
            </p>
            <a
              href="https://listinha-puce.vercel.app"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Start free
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">Back to top ↑</a>

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
          <p className="footer-copy">© 2026 Mise. Made with care in Brazil.</p>
          <nav className="footer-links" aria-label="Footer links">
            <a href="/en/blog" className="footer-link">Blog</a>
            <a href="/en/funcionalidades" className="footer-link">Features</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
