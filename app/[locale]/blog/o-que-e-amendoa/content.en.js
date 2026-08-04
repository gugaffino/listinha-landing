import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Almonds: Raw vs Roasted, Nutrition, and How Many to Eat',
  description:
    'What almonds actually are, the real difference between raw and roasted, how many to eat a day, and how to store a bag so it never goes stale.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-amendoa',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-amendoa',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-amendoa',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-amendoa',
    },
  },
  openGraph: {
    title: 'Almonds: Raw vs Roasted, Nutrition, and How Many to Eat',
    description:
      'What almonds actually are, the real difference between raw and roasted, how many to eat a day, and how to store a bag so it never goes stale.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-amendoa',
    images: [
      {
        url: 'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Raw almonds scattered up close, showing the natural texture of the seed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almonds: Raw vs Roasted, Nutrition, and How Many to Eat',
    description:
      'What almonds actually are, the real difference between raw and roasted, how many to eat a day, and how to store a bag so it never goes stale.',
    images: [
      'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
    ],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many almonds should you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard serving is about 1 ounce (28g), roughly 23 almonds. That is the amount used in most studies showing a benefit for cholesterol and blood sugar. More than that does not add extra benefit — almonds are calorie-dense, and the sweet spot is that one handful.',
      },
    },
    {
      '@type': 'Question',
      name: 'Raw or roasted almonds: which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw almonds hold onto slightly more vitamin E and thiamin. Dry-roasted, with no oil or salt, loses very little of that and tastes better to most people. Either one works — what does not work is the roasted version coated in honey, salt, or chocolate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do almonds have gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plain almonds have no gluten. Anyone with celiac disease can eat them without issue. The exception is processed products — almond cookies or granola can pick up cross-contamination depending on the facility. Always check the label on anything beyond the plain nut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are almonds dairy-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Almonds are plant-based and contain no dairy or lactose. Almond milk is naturally lactose-free too, which makes it a common substitute for cow’s milk for people with intolerance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store almonds so they last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a sealed container, away from light and heat, almonds keep for up to 12 months. In the fridge, they last up to 2 years. If you bought them in bulk, transfer them to a jar with a lid as soon as you get home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do almonds help you lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almonds do not cause weight loss on their own. A 1-ounce serving has about 164 calories — not a food to eat without limit. What studies do show is that people who snack on almonds tend to eat less at their next meal, thanks to the fiber and healthy fat keeping them full.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Almonds: Raw vs Roasted, Nutrition, and How Many to Eat',
  description:
    'What almonds actually are, the real difference between raw and roasted, how many to eat a day, and how to store a bag so it never goes stale.',
  image:
    'https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-amendoa',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Almonds: What They Are and Their Benefits',
      item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-amendoa',
    },
  ],
}

export default function AlmondsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Almonds: What They Are and Their Benefits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">Aug 3, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Almonds: What They Are, Real Benefits, and How to Use Them Daily
          </h1>
          <p className="blog-desc">
            Almonds show up in granola, plant milk, and every gym bag on the planet. What they actually are, how many you should eat, and whether raw or roasted even matters — the straight answer, no supplement-aisle spin.
          </p>

          <div className="answer-box">
            <p>
              <strong>Almonds</strong> are the edible seed of the almond tree (<em>Prunus dulcis</em>), native to the Mediterranean and the Middle East.
              Rich in healthy fats, vitamin E, magnesium, and fiber, they are naturally gluten-free and dairy-free — eaten raw, roasted, or turned into milk and butter.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4051132/pexels-photo-4051132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Raw almonds scattered up close, showing the natural texture of the seed"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels</p>
        </div>

        <article className="prose">
          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-are-almonds">What almonds are</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#benefits">Real benefits</a></li>
              <li><a href="#raw-vs-roasted">Raw or roasted</a></li>
              <li><a href="#how-many">How many a day</a></li>
              <li><a href="#how-to-store">How to store them</a></li>
              <li><a href="#gluten-dairy">Gluten and dairy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          <h2 id="what-are-almonds">What almonds are</h2>

          <p>
            An almond is the seed inside the fruit of the almond tree. The tree produces a drupe that looks a lot like an unripe, fuzzy peach — what you eat is the pit inside that fruit, the part that looks like a nut.
          </p>
          <p>
            Technically, an almond is not a tree nut at all. It is a seed. Every grocery store on the planet still files it under &quot;nuts,&quot; and no one is going to argue about it in the baking aisle.
          </p>
          <p>
            The almond tree is native to the Mediterranean and the Middle East. Today, the United States — specifically California — grows the vast majority of the world&apos;s supply. Almost everywhere else, what you find on the shelf was shipped in.
          </p>
          <p>
            There are two varieties: sweet and bitter. Sweet is what you eat. Bitter contains compounds toxic in quantity and is not sold raw.
          </p>

          <h2 id="nutrition">Almond nutrition facts</h2>

          <p>
            The standard serving is 1 ounce (28g) — about 23 almonds. According to the{' '}
            <a href="https://fdc.nal.usda.gov" target="_blank" rel="noopener">
              USDA FoodData Central
            </a>
            , that amount gets you:
          </p>
          <ul className="item-list">
            <li><strong>Calories:</strong> 164 kcal</li>
            <li><strong>Total fat:</strong> 14g (mostly monounsaturated)</li>
            <li><strong>Protein:</strong> 6g</li>
            <li><strong>Fiber:</strong> 3.5g</li>
            <li><strong>Vitamin E:</strong> 7.3mg (about 48% of daily needs)</li>
            <li><strong>Magnesium:</strong> 76mg (about 18% of daily needs)</li>
            <li><strong>Carbs:</strong> 6g</li>
          </ul>
          <p>A calorie-dense, nutrient-dense food. Small amount, a lot delivered.</p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8758386/pexels-photo-8758386.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Almonds next to a glass of milk on a wooden board, showing different ways to use them"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Anna Tarazevich / Pexels</p>
          </div>
          <h2 id="benefits" className="img-above">
            Real benefits of almonds, day to day
          </h2>

          <p>
            Here is what the research actually shows — no cure claims, no supplement-marketing exaggeration.
          </p>
          <p>
            <strong>Cholesterol.</strong> The monounsaturated fats in almonds help lower LDL. The effect shows up in studies using a regular 1-ounce serving for at least four weeks straight — not one handful and never again.
          </p>
          <p>
            <strong>Blood sugar.</strong> Almonds have a low glycemic index. Eaten alongside a carb-heavy meal, they blunt the blood sugar spike. That matters more for people managing insulin resistance, but it helps anyone.
          </p>
          <p>
            <strong>Fullness.</strong> Fiber plus healthy fat is a real satiety combo. A handful mid-afternoon and you are not walking into dinner starving.
          </p>
          <p>
            <strong>Vitamin E.</strong> An antioxidant that protects cells from oxidative damage. A single ounce of almonds delivers nearly half your daily need — a rare amount of concentration for something that fits in a coat pocket.
          </p>
          <p>
            <strong>Plant protein.</strong> At 6g per serving, almonds fit well into a diet that is cutting back on meat without giving anything up on protein.
          </p>
          <p>
            <strong>Bone health.</strong> Magnesium and phosphorus support bone density. Not the only source you need, but a practical one you eat without cooking anything.
          </p>

          <h2 id="raw-vs-roasted">Raw vs roasted almonds: what actually changes</h2>

          <p>
            Raw almonds hold onto a bit more vitamin E and thiamin. Light dry-roasting — no oil, no salt — loses very little of that and tastes noticeably better to most people.
          </p>
          <p>
            The problem is not roasted almonds. The problem is roasted with honey, salt, sugar, or a chocolate coating. That is where you add calories and sodium you did not need.
          </p>
          <p>
            Simple rule: raw or dry-roasted with no coating. For anything else packaged as &quot;healthy,&quot; read the label before buying — plenty of what is sold as almonds in the snack aisle is basically candy with a nut inside.
          </p>

          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7420934/pexels-photo-7420934.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Almonds and walnuts on a flat surface, showing the variety of nuts available"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Vie Studio / Pexels</p>
          </div>
          <h2 id="how-many" className="img-above">
            How many almonds a day is enough
          </h2>

          <p>
            The most consistent recommendation in the literature is 20 to 25 almonds a day — about 1 ounce. That is the dose used in most of the studies that show an effect on cholesterol and blood sugar.
          </p>
          <p>
            More than that does not add proportional benefit. A single ounce already runs about 164 calories, so doubling to 2 ounces doubles the calories without doubling the effect. Same logic as any nutrient-dense food: the right dose matters.
          </p>
          <p>
            There is no single best time to eat them. Between meals makes sense because that is when the fullness effect does the most work — but stirred into yogurt in the morning, chopped over a salad, or straight from the jar all work the same.
          </p>
          <p>
            Almonds share this trait with the{' '}
            <a href="/en/blog/o-que-e-pistache">pistachio</a>: both nuts pay off more once eating them is a habit than they do eaten once in a while.
          </p>

          <div className="blog-inline-cta">
            <p>
              Almonds are the kind of thing that vanishes from the pantry without you noticing. Track the stock and never get home for a snack that is not there.{' '}
              <em>With Mise.</em>
            </p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          <h2 id="how-to-store">How to store almonds at home</h2>

          <p>
            Almonds go bad from rancidity — the fat oxidizes when exposed to heat, light, or humidity. Not from the printed expiration date, but from how they are stored.
          </p>
          <p>
            <strong>In the pantry:</strong> sealed container, away from the stove and any window. Lasts up to 12 months this way.
          </p>
          <p>
            <strong>In the fridge:</strong> sealed container, lasts up to 2 years. Worth it if you buy in bulk.
          </p>
          <p>
            <strong>In the freezer:</strong> lasts even longer, but flavor and texture shift slightly after thawing. Not necessary for most people.
          </p>
          <p>
            If you bought them in bulk, never leave them in the thin plastic bag from the bin. Transfer to a jar with a lid the same day. An open plastic bag is an invitation for rancid nuts, fast.
          </p>
          <p>
            Knowing what you already have — and how much — keeps you from buying more of something that is still there, or running out without noticing. That is what a{' '}
            <a href="/en/funcionalidades/despensa">pantry tracker</a>{' '}
            solves: you see the stock before you build the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>.
          </p>

          <h2 id="gluten-dairy">Do almonds have gluten or dairy</h2>

          <p>
            Plain almonds have no gluten and no dairy. It is a plant-based seed — no wheat, no milk, no dairy derivatives.
          </p>
          <p>
            Anyone with celiac disease can eat almonds without issue. Same for anyone with lactose intolerance.
          </p>
          <p>
            The exception is processed products. Almond cookies, almond-flecked granola, and almond flour milled on lines that also process wheat can pick up cross-contamination. If you have a serious restriction, always check the label.
          </p>
          <p>
            Almond milk is lactose-free, but it does not nutritionally replace cow&apos;s milk — it has far less protein and calcium unless it is fortified. For your morning coffee, it works fine. For anyone relying on it for calcium, it is not a full substitute.{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">
              The WHO recommends diversifying your calcium sources
            </a>{' '}
            — almond milk is one of them, not the only one.
          </p>

          <h2 id="faq">Frequently asked questions about almonds</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How many almonds should you eat a day?</p>
              <p className="faq-a">
                The standard serving is about 1 ounce (28g), roughly 23 almonds. That is the amount used in most studies showing a benefit for cholesterol and blood sugar. More than that does not add extra benefit — almonds are calorie-dense, and the sweet spot is that one handful.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Raw or roasted almonds: which is better?</p>
              <p className="faq-a">
                Raw almonds hold onto slightly more vitamin E and thiamin. Dry-roasted, with no oil or salt, loses very little of that and tastes better to most people. Either one works — what does not work is the roasted version coated in honey, salt, or chocolate.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do almonds have gluten?</p>
              <p className="faq-a">
                Plain almonds have no gluten. Anyone with celiac disease can eat them without issue. The exception is processed products — almond cookies or granola can pick up cross-contamination depending on the facility. Always check the label.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are almonds dairy-free?</p>
              <p className="faq-a">
                Yes. Almonds are plant-based and contain no dairy or lactose. Almond milk is naturally lactose-free too, which makes it a common substitute for cow&apos;s milk for people with intolerance.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store almonds so they last?</p>
              <p className="faq-a">
                In a sealed container, away from light and heat, almonds keep for up to 12 months. In the fridge, they last up to 2 years. If you bought them in bulk, transfer them to a jar with a lid as soon as you get home — an open bag speeds up rancidity.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do almonds help you lose weight?</p>
              <p className="faq-a">
                Almonds do not cause weight loss on their own. A 1-ounce serving has about 164 calories — not a food to eat without limit. What studies do show is that people who snack on almonds tend to eat less at their next meal, thanks to the fiber and healthy fat keeping them full.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
                <path d="M 3 11.5 L 21 11.5 Q 21 20.5 12 20.5 Q 3 20.5 3 11.5 Z" fill="#2D5F2F" />
                <circle cx="12" cy="5.5" r="2.4" fill="#B8E89A" />
              </svg>
            </div>
            <div>
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Founder of Mise. Keeps almonds in the pantry ever since finding out they last 12 months sealed — meaning the bag bought in February is probably still good in December.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Almonds bought.
              <br />
              <em>Now they stop disappearing from the pantry.</em>
            </h2>
            <p>
              With Mise, you track what is in the pantry and build the shopping list before you leave the house. No buying more of what you still have. No getting home to find out it is gone.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Start free{' '}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#top" className="back-to-top" aria-label="Back to top">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
              aria-hidden="true"
            >
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
