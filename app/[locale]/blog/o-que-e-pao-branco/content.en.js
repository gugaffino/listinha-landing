import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'White Bread: Nutrition, Calories, and How to Choose It Well',
  description: 'White bread is made from refined flour — less fiber, higher glycemic index. See how many calories it has, how it compares to whole wheat, and how to pick a good loaf.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pao-branco',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pao-branco',
    },
  },
  openGraph: {
    title: 'White Bread: Nutrition, Calories, and How to Choose It Well',
    description: 'White bread is made from refined flour — less fiber, higher glycemic index. See how many calories it has, how it compares to whole wheat, and how to pick a good loaf.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco',
    images: [
      {
        url: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Slices of white bread on a white plate — close-up showing the soft texture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Bread: Nutrition, Calories, and How to Choose It Well',
    description: 'White bread is made from refined flour — less fiber, higher glycemic index. See how many calories it has, how it compares to whole wheat, and how to pick a good loaf.',
    images: ['https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does white bread have gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. White bread is made from refined wheat flour, which contains gluten. It is not suitable for people with celiac disease or gluten sensitivity. For them, bread made with rice flour, tapioca, or other gluten-free flours is the option — and it is worth checking for cross-contamination during production.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sandwich bread the same thing as white bread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are made from the same type of flour — refined — but sandwich bread has a standardized, machine-baked shape, usually contains preservatives to extend shelf life, and often has added sugar and vegetable oil in the recipe. White bread is the umbrella term for anything made with white flour, including sandwich loaves, dinner rolls, and bakery bread.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can white bread go in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can, but it is not recommended. The fridge pulls moisture out of bread and speeds up starch retrogradation — the process that makes bread go stale. Bread stored in the fridge actually goes stale faster than bread left at room temperature. The best option is room temperature in a sealed bag for up to about a week; for longer storage, the freezer is the better call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "enriched flour" mean on a bread label?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enriched flour is refined flour that has had iron, thiamin, riboflavin, niacin, and folic acid added back in — a standard set by the FDA since the 1940s. It is not whole wheat flour. If the first ingredient on the label is "enriched wheat flour," the bread is white, even if it has grains on top or in the name.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which bread makes better toast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For toast, white bread usually comes out crisper and more evenly browned. Whole wheat, with more fiber and moisture, tends to toast less evenly and can end up unevenly hard. For the classic toast texture, sliced white bread is still the more reliable option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does white bread have fiber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A little, but not much. A 28g slice has roughly 0.6-1g of fiber, compared to about 2-3g in a same-size slice of whole wheat. The WHO recommends at least 25g of fiber a day. Hitting that number on white bread alone would mean eating far more slices than with whole wheat.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'White Bread: Nutrition, Calories, and How to Choose It Well',
  description: 'White bread is made from refined flour — less fiber, higher glycemic index. See how many calories it has, how it compares to whole wheat, and how to pick a good loaf.',
  image: 'https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'White Bread', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pao-branco' },
  ],
}

export default function WhiteBreadEn() {
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
            <li className="breadcrumb-current" aria-current="page">White Bread</li>
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
            White Bread: How It&apos;s Made, Calories, and How It Compares to Whole Wheat
          </h1>
          <p className="blog-desc">
            White bread shows up in some form in almost every kitchen — sandwich loaves, dinner rolls, hamburger buns. But what actually happens when wheat gets refined, and when does whole wheat make more sense?
          </p>

          <div className="answer-box">
            <p>
              <strong>White bread</strong> is made from refined wheat flour — milling strips away the bran and the germ, leaving only the starchy endosperm.
              The result is a softer, milder-tasting bread with less fiber and fewer vitamins than whole wheat.
              The calorie difference is small. What actually changes is the glycemic index and how long the bread keeps you full.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5566227/pexels-photo-5566227.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Slices of white bread on a white plate — close-up showing the soft texture"
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
              <li><a href="#what-it-is">What it is and how it&apos;s made</a></li>
              <li><a href="#calories">How many calories it has</a></li>
              <li><a href="#vs-whole-wheat">White bread vs. whole wheat</a></li>
              <li><a href="#weight-gain">Does white bread cause weight gain?</a></li>
              <li><a href="#how-to-choose">How to choose bread at the store</a></li>
              <li><a href="#how-to-store">How to store it at home</a></li>
              <li><a href="#worth-it">Is it worth keeping on the list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IT IS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="A whole baked loaf of white bread on a light surface — crust and soft crumb visible"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-it-is" className="img-above">What white bread is and how it&apos;s made</h2>

          <p>
            White bread starts with refined wheat flour. A wheat kernel has three parts: the bran (the outer layer), the germ (the nutrient-dense core), and the endosperm (the starchy center). Milling strips out the bran and the germ, leaving only the endosperm behind.
          </p>
          <p>
            There&apos;s a practical reason for that split. The bran holds oils that go rancid fast — whole wheat flour spoils within weeks, white flour keeps for months. For a bakery or a food company, that&apos;s the difference between a viable product and a logistics problem. For you, it means sandwich bread that survives a full week on the shelf without going stale.
          </p>
          <p>
            The catch is that the bran and the germ carry most of the grain&apos;s nutrients — fiber, B vitamins (especially B1, B3, and B6), vitamin E, iron, zinc, and magnesium. What&apos;s left, the endosperm, is mostly starch and protein. Nutritionally, it&apos;s a step down from the whole grain.
          </p>
          <p>
            In the US, wheat flour sold as &quot;enriched flour&quot; has met a federal standard since the 1940s —{' '}
            <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-137/subpart-B/section-137.165" target="_blank" rel="noopener">
              FDA regulations require iron, thiamin, riboflavin, and niacin to be added back in
            </a>
            , with folic acid added to the requirement in the 1990s. So white bread gets some of what refining took out, put back in synthetically. What doesn&apos;t come back is the fiber.
          </p>
          <p>
            The result in practice: soft bread, mild flavor, easy to pair with anything. It works well for toast, for sensitive stomachs, and for anyone who just prefers the milder taste. It&apos;s not a villain — it&apos;s a trade-off with clear terms.
          </p>

          {/* CALORIES */}
          <h2 id="calories">How many calories white bread has</h2>

          <p>
            A standard slice of white sandwich bread (about 28g) has roughly <strong>75–80 calories</strong>. Two slices — a typical sandwich — land around 150–160 calories, mostly from carbohydrate.
          </p>

          <ul className="item-list">
            <li>Calories: ~75–80 kcal per slice (28g)</li>
            <li>Carbs: ~14g per slice</li>
            <li>Protein: ~2g per slice</li>
            <li>Fat: under 1g per slice</li>
            <li>Fiber: ~0.6–1g per slice</li>
          </ul>

          <p>
            For comparison, a slice of whole wheat bread lands in almost the same range — often just a couple of calories more. The calorie gap between white and whole wheat is small enough to be irrelevant in day-to-day terms.
          </p>
          <p>
            What actually changes is the glycemic index. White bread sits around 70–75 on the glycemic index; whole wheat runs lower, often in the 50s to mid-60s depending on how coarse the grind is. That means white bread raises blood sugar faster, produces a sharper insulin response, and — as a direct result — leaves you hungry again sooner.
          </p>
          <p>
            Translation: white bread doesn&apos;t pack more calories per slice. It just keeps you full for less time — and that shapes how much you end up eating for the rest of the day.
          </p>

          {/* VS WHOLE WHEAT */}
          <h2 id="vs-whole-wheat">White bread vs. whole wheat: what actually changes</h2>

          <p>
            The real difference isn&apos;t calories — it&apos;s fiber and how long the bread keeps you satisfied.
          </p>

          <ul className="item-list">
            <li><strong>Fiber:</strong> white bread ~0.6–1g per slice; whole wheat ~2–3g — two to three times more</li>
            <li><strong>Glycemic index:</strong> white ~70–75; whole wheat ~50–65</li>
            <li><strong>Fullness:</strong> whole wheat holds you longer thanks to the fiber</li>
            <li><strong>B vitamins:</strong> whole wheat retains more B1, B3, B6, and vitamin E</li>
            <li><strong>Flavor:</strong> white is milder and more neutral; whole wheat is denser with a slightly nutty edge</li>
            <li><strong>Texture:</strong> white is softer; whole wheat is firmer</li>
          </ul>

          <p>
            There&apos;s a detail a lot of shoppers miss in the bread aisle: &quot;multigrain&quot; and &quot;seeded bread&quot; aren&apos;t automatically whole wheat. You read &quot;multigrain&quot; on the bag and assume you&apos;re buying something nutritionally different. Often you&apos;re not. Check the first ingredient on the label — if it says &quot;enriched wheat flour,&quot; it&apos;s white bread. The seeds on top are decoration.
          </p>
          <p>
            Real whole wheat bread lists &quot;100% whole wheat flour&quot; as the first ingredient. It usually costs more, because it&apos;s more expensive to produce and doesn&apos;t sit on the shelf as long.
          </p>
          <p>
            If you want to keep track of the exact type before you leave the house, the{' '}
            <a href="/en/funcionalidades/lista-de-compras">Mise shopping list</a>{' '}
            lets you note the detail — no relying on memory once you&apos;re standing in the bread aisle.
          </p>

          <div className="blog-inline-cta">
            <p>Note the right kind of bread before you go shopping. <em>Mise handles the rest.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* WEIGHT GAIN */}
          <h2 id="weight-gain">Does white bread cause weight gain?</h2>

          <p>
            Not on its own. What causes weight gain is a calorie surplus — and white bread contributes to that the same way any other food does.
          </p>
          <p>
            The case against white bread isn&apos;t that it has more calories. It&apos;s that it keeps you full for less time, which tends to mean eating more over the course of the day. If you have white toast for breakfast and you&apos;re hungry again an hour later, that&apos;s not in your head — that&apos;s the higher glycemic index doing its job.
          </p>
          <p>
            This matters more in some situations than others. If breakfast is followed by a routine with a fixed lunchtime, the effect is smaller. If your morning runs long and you need to stay full for 3–4 hours, whole wheat has a real edge.
          </p>
          <p>
            For anyone following a{' '}
            low-sugar diet, the glycemic index of white bread is worth paying attention to — but it&apos;s not automatically a reason to cut it out entirely. It depends on the amount and what you&apos;re eating alongside it.
          </p>

          {/* HOW TO CHOOSE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Slices of bread on a gray surface — showing texture and crumb"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="how-to-choose" className="img-above">How to choose bread at the store</h2>

          <p>
            The bread label is where most of the confusion happens. Four things worth checking before it goes on the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            :
          </p>

          <h3>First ingredient on the label</h3>
          <p>
            Ingredients are listed by weight, heaviest first. If the first one is &quot;enriched wheat flour,&quot; it&apos;s white bread. If it&apos;s &quot;100% whole wheat flour,&quot; it&apos;s whole wheat. Everything starts there — the design on the front of the bag is secondary.
          </p>

          <h3>Multigrain isn&apos;t whole wheat</h3>
          <p>
            Multigrain means the bread has more than one type of grain in it — but the base can still be white flour with a few decorative seeds on top. The name on the bag is marketing. The Nutrition Facts label is what actually counts.
          </p>

          <h3>Fiber per serving</h3>
          <p>
            A serving of bread (2 slices, about 56g) with less than 2g of fiber is white bread or close to it. At 3g or more per serving, you&apos;re in whole wheat or fiber-enriched territory. That number is right there on the label — it takes a few seconds to check.
          </p>

          <h3>Short ingredient list</h3>
          <p>
            Bread with 5–6 ingredients tends to be simpler than bread with 15. Preservatives, emulsifiers, and dough conditioners aren&apos;t necessarily dangerous, but a long list usually signals a more processed product — longer shelf life and, generally, less real fiber per slice.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store white bread at home</h2>

          <p>
            Storing bread seems simple, but there&apos;s a counterintuitive rule worth knowing.
          </p>

          <h3>Room temperature</h3>
          <p>
            The best option for the short term. White bread keeps for about 4–6 days at room temperature, sealed in its original bag or an airtight container, away from humidity and direct heat.
          </p>

          <h3>Fridge: not recommended</h3>
          <p>
            The fridge pulls moisture out of bread and speeds up starch retrogradation — the process that makes bread go stale. Bread stored in the fridge &quot;to make it last&quot; actually goes stale faster than bread left on the counter. For real longevity, the freezer is the right call.
          </p>

          <h3>Freezer</h3>
          <p>
            The freezer works well for up to 3 months. Before freezing, slice the loaf and separate the slices with parchment paper, or use a freezer bag with the air pressed out. That way you thaw only what you need — one slice at a time, straight into the toaster or left to sit for 10 minutes at room temperature.
          </p>
          <p>
            Sliced white bread freezes especially well — the soft texture holds up through the freeze-thaw cycle better than denser loaves. The{' '}
            <a href="/en/funcionalidades/despensa">Mise pantry</a>{' '}
            lets you log where each item is stored and when it expires — useful for not losing a loaf in the freezer for four months.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth keeping on the list</h2>

          <p>Depends on what you&apos;re using it for.</p>
          <p>
            For toast, white bread wins on texture — it comes out crisper and more even. For kids who won&apos;t touch whole wheat, white bread is the loaf that actually gets eaten. For anyone with a sensitive stomach, or who only eats bread occasionally without needing lasting fullness, it makes sense.
          </p>
          <p>
            For a breakfast that needs to carry you to lunch — especially on a busy morning with nothing to snack on in between — whole wheat has a real advantage. Feeling less hungry at 10:30am isn&apos;t a health-blog aspiration; it&apos;s fiber doing its job.
          </p>
          <p>
            The honest answer: if bread is just for weekend toast with butter, buy white. If it&apos;s breakfast Monday through Friday, whole wheat is worth considering — or buy both and see which one disappears first. What actually happens in the pantry is a more honest signal than any intention.
          </p>
          <p>
            White bread has a place on a lot of people&apos;s{' '}
            <a href="/en/funcionalidades/lista-de-compras">grocery list</a>
            {' '}. It&apos;s not a mistake or a compromise — it&apos;s how most people actually eat. What changes with the information is buying it knowing exactly what you&apos;re choosing.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about white bread</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Does white bread have gluten?</p>
              <p className="faq-a">
                Yes. It&apos;s made from refined wheat flour, which contains gluten. It&apos;s not suitable for people with celiac disease or gluten sensitivity. For them, bread made with rice flour, tapioca, or other gluten-free flours is the option — and it&apos;s worth checking for cross-contamination during production.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is sandwich bread the same thing as white bread?</p>
              <p className="faq-a">
                They&apos;re made from the same type of flour — refined — but sandwich bread has a standardized, machine-baked shape, usually contains preservatives to extend shelf life, and often has added sugar and vegetable oil in the recipe. White bread is the umbrella term for anything made with white flour: sandwich loaves, dinner rolls, bakery bread.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can white bread go in the fridge?</p>
              <p className="faq-a">
                It can, but it&apos;s not recommended. The fridge pulls moisture out of bread and speeds up starch retrogradation — the bread goes stale faster than it would at room temperature. Best to keep it at room temperature, sealed, for up to about a week. For longer storage, the freezer is the better call.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What does &quot;enriched flour&quot; mean on the label?</p>
              <p className="faq-a">
                Enriched flour is refined flour that&apos;s had iron, thiamin, riboflavin, niacin, and folic acid added back in — a standard set by the FDA. It&apos;s not whole wheat flour. If the first ingredient on the label is &quot;enriched wheat flour,&quot; the bread is white, even if it has grains on top or in the name.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Which bread makes better toast?</p>
              <p className="faq-a">
                For toast, white bread usually comes out crisper and more evenly browned. Whole wheat, with more fiber and moisture, tends to toast less evenly and can end up unevenly hard. For the classic toast texture, sliced white bread is still the more reliable option.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does white bread have fiber?</p>
              <p className="faq-a">
                A little, but not much. A 28g slice has roughly 0.6–1g of fiber, compared to about 2–3g in a same-size slice of whole wheat. The{' '}
                <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">
                  WHO recommends at least 25g of fiber a day
                </a>
                . Hitting that number on white bread alone would mean eating far more slices than with whole wheat.
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
                Creator of Mise. Bought &quot;multigrain&quot; sandwich bread for years thinking it was the healthier pick. The first ingredient was always enriched white flour.
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
              You buy the right loaf — and you don&apos;t forget to note the type before you leave the house.
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
