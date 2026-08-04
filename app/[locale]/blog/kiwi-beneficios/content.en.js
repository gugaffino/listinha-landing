import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Kiwi Fruit Benefits: Nutrition, Vitamin C, and How to Eat It',
  description: 'Kiwi has more vitamin C than an orange, an enzyme that helps digest protein, and just 61 calories per 100g. See the real benefits, green vs gold, and how to store it.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/kiwi-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/kiwi-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/kiwi-beneficios',
    },
  },
  openGraph: {
    title: 'Kiwi Fruit Benefits: Nutrition, Vitamin C, and How to Eat It',
    description: 'Kiwi has more vitamin C than an orange, an enzyme that helps digest protein, and just 61 calories per 100g. See the real benefits, green vs gold, and how to store it.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh kiwis sliced in half showing the bright green interior with black seeds — detailed close-up',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiwi Fruit Benefits: Nutrition, Vitamin C, and How to Eat It',
    description: 'Kiwi has more vitamin C than an orange, an enzyme that helps digest protein, and just 61 calories per 100g. See the real benefits, green vs gold, and how to store it.',
    images: ['https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many kiwis should you eat a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two kiwis a day comfortably cover an adult’s daily vitamin C needs. Eating more than that doesn’t add proportional benefit and can cause digestive discomfort from the fiber. One or two a day is enough to get the nutrients without overdoing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does kiwi make you gain weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kiwi has only 61 calories per 100g and 3g of fiber, which increases satiety. It doesn’t cause weight gain in normal portions. The problem is never the kiwi — it’s the rest of the diet. As a snack or part of breakfast, it’s one of the best calorie-to-nutrient ratios you can find in the fruit aisle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat kiwi skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The skin of green kiwi is technically edible — it carries extra fiber and antioxidants — but the fuzzy texture puts most people off. Gold kiwi has a thinner, smoother skin that’s easier to eat whole. If you want to try the green one with skin on, wash it well and taste a small piece first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is gold kiwi more nutritious than green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The nutrition profiles are close. Gold kiwi has slightly more vitamin C and less acidity, and its skin is easier to eat. Green kiwi has more vitamin K. Day to day, the difference is small — gold usually costs more and is harder to find. Use whichever one is in front of you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s the best time of day to eat kiwi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There’s no required time. Kiwi is digestive when eaten after protein-heavy meals, thanks to actinidin. Small studies suggest eating it in the evening because of its serotonin content — but the effect on sleep is modest. Eat it whenever it fits your routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can kiwi be frozen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Peel it, slice or cube it, spread the pieces on a lined tray and freeze for two hours, then move them to an airtight container. It keeps for up to three months. The texture softens after thawing, which works fine in smoothies but not on a plate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn’t raw kiwi work in gelatin desserts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw kiwi contains actinidin, an enzyme that breaks down the protein in gelatin and stops it from setting. If you want to use kiwi in a gelatin dessert, cook the fruit first — a few minutes in a pan or oven deactivates the enzyme. After that, it mixes in normally.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kiwi Fruit Benefits: Nutrition, Vitamin C, and How to Eat It',
  description: 'Kiwi has more vitamin C than an orange, an enzyme that helps digest protein, and just 61 calories per 100g. See the real benefits, green vs gold, and how to store it.',
  image: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Kiwi Fruit Benefits', item: 'https://www.miseemcasa.com.br/en/blog/kiwi-beneficios' },
  ],
}

export default function KiwiBeneficiosEn() {
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
            <li className="breadcrumb-current" aria-current="page">Kiwi Fruit Benefits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">Aug 4, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Kiwi: What It Is, Why It&apos;s Worth Eating, and How to Use It
          </h1>
          <p className="blog-desc">
            A fruit native to China, renamed and marketed worldwide by New Zealand, that now shows up in grocery stores everywhere. It has more vitamin C than an orange, an enzyme that helps digest protein, and only 61 calories per 100g. Here&apos;s what actually matters before you add it to the list.
          </p>

          <div className="answer-box">
            <p>
              <strong>Kiwi</strong> (<em>Actinidia deliciosa</em>) is a fruit native to China that New Zealand growers turned into a global export starting in the 1950s.
              The bright green interior with a ring of black seeds and the fuzzy brown skin are its most recognizable traits.
              It&apos;s one of the fruits with the highest vitamin C concentration — more than an orange — and contains actinidin, an enzyme that helps break down protein during digestion.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh kiwis sliced in half showing the bright green interior with black seeds — detailed close-up"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: AS Photography / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-kiwi">What kiwi is</a></li>
              <li><a href="#vitamin-c">The vitamin C number that surprises people</a></li>
              <li><a href="#nutrition">What&apos;s inside: the nutrition</a></li>
              <li><a href="#benefits">Health benefits of kiwi</a></li>
              <li><a href="#types">Green vs gold kiwi</a></li>
              <li><a href="#how-to-eat">How to eat kiwi</a></li>
              <li><a href="#how-to-store">How to pick and store it</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT IS KIWI */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/14083854/pexels-photo-14083854.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Whole kiwi and a kiwi cut in half on a rustic wooden table — detailed view"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Chasity Campbell / Pexels</p>
          </div>

          <h2 id="what-is-kiwi" className="img-above">What kiwi is</h2>

          <p>
            Kiwi is the name New Zealand growers gave to a fruit that came from China. In the 1950s they rebranded the &quot;Chinese gooseberry&quot; to make it easier to sell in the US market, which wasn&apos;t exactly warming up to anything with &quot;Chinese&quot; in the name during the Cold War. The new name stuck for good.
          </p>
          <p>
            The plant is a woody vine (<em>Actinidia deliciosa</em>) that needs a cold winter and a warm summer to fruit well. Most of the kiwi sold in North America and Europe comes from New Zealand, Italy, Chile, or California, depending on the season — the supply chain flips between hemispheres to keep kiwi on shelves year-round.
          </p>
          <p>
            The bright green interior with black seeds arranged in a ring around a white core is the most recognizable trait. The texture is soft and juicy, with a balance of tart and sweet that doesn&apos;t really have a substitute — nothing else tastes quite like a kiwi.
          </p>
          <p>
            It&apos;s a fruit most people have known their whole lives but still only buy occasionally. That&apos;s not a quality problem — it&apos;s a habit problem. That changes once you see what it actually delivers per 100g.
          </p>

          {/* VITAMIN C */}
          <h2 id="vitamin-c">The vitamin C number that surprises people</h2>

          <p>
            100g of kiwi has about 92.7mg of vitamin C. An orange has around 53mg. That&apos;s the detail that flips the script: the fruit famous for vitamin C isn&apos;t actually the richest one in it — kiwi is.
          </p>
          <p>
            Adult daily recommendations sit between 75 and 90mg depending on sex. Two kiwis cover that without a supplement, without juice, without a chewable vitamin. Just fruit.
          </p>
          <p>
            Vitamin C breaks down with heat and oxidation. Kiwi eaten fresh — cut right before you eat it — delivers close to everything the fruit holds. Processed kiwi juice has already lost part of that. The most efficient way to get it is also the simplest.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What&apos;s inside: the nutrition</h2>

          <p>
            Per 100g of green kiwi, the main nutrients break down like this:
          </p>

          <ul className="item-list">
            <li><strong>Calories:</strong> 61 kcal</li>
            <li><strong>Fiber:</strong> 3g — helps with satiety and digestion</li>
            <li><strong>Vitamin C:</strong> 92.7mg — over 100% of the recommended daily intake</li>
            <li><strong>Vitamin K:</strong> 40µg — about 34% of the daily value, relevant for blood clotting and bone health</li>
            <li><strong>Potassium:</strong> 312mg — supports healthy blood pressure</li>
            <li><strong>Folate:</strong> 25µg — especially relevant during pregnancy</li>
            <li><strong>Vitamin E:</strong> 1.5mg — an antioxidant that complements vitamin C</li>
          </ul>

          <p>
            It&apos;s a balanced package. No single nutrient is off the charts, but several show up at meaningful levels at the same time — which does more for you than one nutrient in a huge dose.
          </p>
          <p>
            If you&apos;ve read about which foods pack the most{' '}
            <a href="/en/blog/alimentos-ricos-em-magnesio">magnesium</a>: kiwi has some too, though in a modest amount (17mg per 100g). Not the main source, but it adds up inside a varied diet.
          </p>

          {/* BENEFITS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1414134/pexels-photo-1414134.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Slices of kiwi, lemon, and orange arranged on a marble surface — fresh, colorful fruit"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Lukas / Pexels</p>
          </div>

          <h2 id="benefits" className="img-above">Health benefits of kiwi</h2>

          <p>
            Kiwi&apos;s benefits don&apos;t come from one miracle compound. They come from vitamin C, fiber, vitamin K, and actinidin working together. Here are the effects with the most solid evidence behind them:
          </p>

          <h3>Immune system</h3>
          <p>
            More than a full day&apos;s vitamin C requirement in a single piece of fruit. The effect on immunity isn&apos;t instant — it&apos;s about consistency over time. People who eat kiwi regularly keep a steady reserve of vitamin C without relying on a supplement or a bottle of juice.
          </p>

          <h3>Digestion</h3>
          <p>
            Actinidin is a proteolytic enzyme — it breaks down protein chains. In practice, that means kiwi eaten after a protein-heavy meal (meat, chicken, eggs) can make digestion easier. Insoluble fiber does its part too, regulating bowel movement and helping prevent constipation.
          </p>
          <p>
            One detail most people don&apos;t know: raw kiwi in gelatin stops the gel from setting. Actinidin breaks down the collagen protein that gives gelatin its structure. If you want kiwi in a gelatin dessert, cook the fruit first — heat deactivates the enzyme.
          </p>

          <h3>Heart health</h3>
          <p>
            Fiber and potassium have well-documented links to healthier blood pressure and cholesterol. It&apos;s not a one-dose effect — it&apos;s about regular consumption over weeks and months. Kiwi doesn&apos;t replace treatment, but it fits well into a diet that protects the heart.
          </p>

          <h3>Skin and antioxidants</h3>
          <p>
            Vitamin C is required for collagen synthesis. Vitamin E protects cell membranes from oxidative damage. The two together, in the amount kiwi delivers, do more than either one taken separately as a high-dose supplement.
          </p>

          <h3>Sleep</h3>
          <p>
            Small studies show that eating two kiwis an hour before bed can shorten the time it takes to fall asleep. The likely mechanism is the serotonin naturally present in the fruit. The research base is still limited — it&apos;s an interesting lead, not a settled conclusion.
          </p>

          <div className="blog-inline-cta">
            <p>Your pantry, connected to your shopping list. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* TYPES */}
          <h2 id="types">Green vs gold kiwi</h2>

          <p>
            Most grocery stores carry two versions with reasonably wide availability. Knowing the difference keeps you from being surprised by the taste — or how to eat it.
          </p>

          <h3>Green kiwi (Hayward)</h3>
          <p>
            The most common variety. Fuzzy brown skin, vivid green interior with black seeds circling a white core. Tarter flavor, with sweetness that balances it out. This is the reference kiwi — when someone says &quot;kiwi&quot; without specifying, this is what they mean.
          </p>
          <p>
            The skin is edible, but the fuzzy texture puts most people off. Most peel it before eating. If you want to try the skin, wash it thoroughly and start with a small bite.
          </p>

          <h3>Gold kiwi (SunGold)</h3>
          <p>
            Newer to most markets. Smooth, yellow-brown skin without the fuzz of the green one. Golden-yellow interior, with fewer visible seeds around the core. Sweeter, less acidic — it lands somewhere between mango and peach.
          </p>
          <p>
            It usually costs more and can be harder to find, showing up mostly in larger supermarkets and specialty produce sections. The skin is easier to eat than the green kiwi&apos;s and works fine like an apple&apos;s. Nutritionally, the two are close.
          </p>

          {/* HOW TO EAT */}
          <h2 id="how-to-eat">How to eat kiwi</h2>

          <p>
            The simplest way: cut it in half crosswise and scoop it out with a spoon, right from the skin. No mess, no plate, no special tools needed. It&apos;s how most people eat kiwi at breakfast, and the habit rarely changes once it sticks.
          </p>
          <p>
            Peeled and sliced, it works in yogurt, granola, fruit salad, and smoothies. In a smoothie, the flavor still comes through even mixed with other ingredients — it&apos;s one of the few fruits that doesn&apos;t disappear in the blender.
          </p>
          <p>
            In savory dishes, sliced kiwi works well in a fruit carpaccio with prosciutto, in a white fish ceviche, or paired with cheese. The acidity cuts through fat nicely.
          </p>
          <p>
            In baked desserts — crumbles, tarts — kiwi loses some antioxidants but keeps its flavor and an interesting texture. Pair it with strawberry or mango to balance out the tartness.
          </p>
          <p>
            About the skin: technically edible on both types, more pleasant on the gold one. Green kiwi skin carries extra fiber and antioxidants in its outer layers, but the texture doesn&apos;t win most people over. Eating it is optional, never required.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to pick and store kiwi</h2>

          <p>
            At the store, press gently on the kiwi with your thumb. A ripe one gives slightly — similar to a ripe peach or avocado. Completely firm means it needs another 2 to 5 days at room temperature. If it gives too much or has soft spots, it&apos;s past its prime.
          </p>
          <p>
            Skin color isn&apos;t a reliable ripeness indicator on green kiwi — they all carry the same fuzzy brown color regardless of ripeness. Go by touch instead.
          </p>

          <h3>How to store it</h3>
          <p>
            Firm kiwi: room temperature, away from direct sun, until it ripens. Don&apos;t store it next to bananas or apples — they release ethylene and speed up ripening for anything nearby. If you actually want it to ripen faster, that trick works in your favor: put it next to a banana on purpose.
          </p>
          <p>
            Ripe kiwi: refrigerator, in a bag or sealed container. It keeps for up to three weeks without losing quality. It&apos;s a low-maintenance fruit once it&apos;s stored — unlike strawberries, which sulk the second you look away.
          </p>
          <p>
            You can freeze it: peel, slice, spread the pieces on a tray for two hours, then transfer to an airtight container. Works well in smoothies or as a base for homemade ice cream. The texture after thawing changes — it gets softer — but the flavor holds up.
          </p>
          <p>
            Kiwi is a fruit worth keeping in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            on a regular basis. It holds up well, it&apos;s versatile, and it fits on any{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            without taking up much mental space. The hard part is remembering to add it back once last week&apos;s batch runs out without you noticing.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about kiwi</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How many kiwis should you eat a day?</p>
              <p className="faq-a">
                Two kiwis a day comfortably cover an adult&apos;s daily vitamin C needs. Eating more than that doesn&apos;t add proportional benefit and can cause digestive discomfort from the fiber. One or two a day is enough.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does kiwi make you gain weight?</p>
              <p className="faq-a">
                Kiwi has 61 calories per 100g and 3g of fiber that increase satiety. It doesn&apos;t cause weight gain in normal portions. As a snack or part of breakfast, it&apos;s one of the best calorie-to-nutrient ratios on the market.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat kiwi skin?</p>
              <p className="faq-a">
                Green kiwi skin is edible — it carries extra fiber and antioxidants — but the fuzzy texture puts most people off. Gold kiwi has a thinner, easier skin. If you want to try the green one, wash it well and taste a bite first. No obligation either way.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is gold kiwi more nutritious than green?</p>
              <p className="faq-a">
                The profiles are close. Gold has slightly more vitamin C and an easier skin. Green has more vitamin K. The day-to-day difference is small — gold costs more and is harder to find. Use whichever is available.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the best time of day to eat kiwi?</p>
              <p className="faq-a">
                There&apos;s no required time. After protein-heavy meals, actinidin helps with digestion. Small studies suggest evening consumption because of the serotonin content — but the effect on sleep is modest. Eat it whenever it fits your routine.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can kiwi be frozen?</p>
              <p className="faq-a">
                Yes. Peel it, slice it, spread the pieces on a tray, and freeze for two hours. Then transfer to an airtight container. It keeps for up to three months. The texture softens after thawing, which works fine in smoothies.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Why doesn&apos;t raw kiwi work in gelatin desserts?</p>
              <p className="faq-a">
                Raw kiwi contains actinidin, an enzyme that breaks down the protein in gelatin and stops it from setting. To use kiwi in a gelatin dessert, cook the fruit first — a few minutes in a pan or oven deactivates the enzyme. After that, it mixes in normally.
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
                Creator of Mise. Spent years convinced he had kiwi at home. He didn&apos;t. Built an app to fix that problem — and a few worse ones.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Never forget the kiwi again.<br />
              <em>Let Mise handle it.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and{' '}
              <a href="/en/funcionalidades/lista-de-compras" style={{color: 'var(--verde-broto)'}}>shopping list</a>{' '}
              in one place. You buy what you&apos;ll actually use — and the kiwi doesn&apos;t rot in the drawer before it becomes a smoothie.
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
