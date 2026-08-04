import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Radish Benefits: Nutrition, Uses, and Why It’s Worth Buying',
  description: 'Radish has vitamin C, fiber, and just 16 calories per 100g. See the health benefits, the nutrition facts, and how to actually use this cheap vegetable in the kitchen.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
      en: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete',
      es: 'https://www.miseemcasa.com.br/es/blog/beneficios-do-rabanete',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/beneficios-do-rabanete',
    },
  },
  openGraph: {
    title: 'Radish Benefits: Nutrition, Uses, and Why It’s Worth Buying',
    description: 'Radish has vitamin C, fiber, and just 16 calories per 100g. See the health benefits, the nutrition facts, and how to actually use this cheap vegetable in the kitchen.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete',
    images: [
      {
        url: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh red radishes next to carrots on a wooden surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radish Benefits: Nutrition, Uses, and Why It’s Worth Buying',
    description: 'Radish has vitamin C, fiber, and just 16 calories per 100g. See the health benefits, the nutrition facts, and how to actually use this cheap vegetable in the kitchen.',
    images: ['https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many calories does radish have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw radish has roughly 16 calories per 100g — one of the lowest-calorie vegetables you’ll find in the produce section. Almost all of it is water: about 95% of the vegetable is liquid. That’s why it fills you up without denting your calorie count.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat radish raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw is the most common way to eat it, and the way that keeps the most nutrients, especially vitamin C. Sliced thin in salads or cut into sticks with salt, the peppery bite mellows out. If the sharpness bothers you, soaking the slices in cold water for 10 minutes before serving takes the edge off.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does radish help you lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Radish doesn’t make you lose weight on its own, but it’s a useful tool if you’re watching calories. At 16 calories per 100g, with fiber that helps you feel full and a high water content, it swaps in well for higher-calorie ingredients in salads and snacks without giving up flavor or crunch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is radish good for digestion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Radish has dietary fiber that helps keep things moving and stimulates bile production, which makes it easier to digest fat. Compounds called glucosinolates also have a beneficial effect on gut bacteria, according to research on cruciferous vegetables in general.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store radish after buying it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cut the greens off before storing — they pull moisture from the root and make it go limp faster. Keep the root in the fridge, wrapped in a lightly damp paper towel inside a bag. It keeps for up to a week. The greens can be sauteed like spinach instead of thrown out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s the difference between radish and turnip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are cruciferous root vegetables, but they behave very differently. Radish is smaller, with bright red skin and an intense peppery bite — eating it raw is the main use. Turnip is larger, with white or purple skin, milder and slightly sweet once cooked. In recipes, they’re not interchangeable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does radish have vitamin C?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A 100g serving of raw radish provides about 15mg of vitamin C, roughly 17% of the recommended daily value. It’s a reasonable source — not in the same league as an orange or a bell pepper — but it adds up if you eat it raw regularly.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Radish Benefits: Nutrition, Uses, and Why It’s Worth Buying',
  description: 'Radish has vitamin C, fiber, and just 16 calories per 100g. See the health benefits, the nutrition facts, and how to actually use this cheap vegetable in the kitchen.',
  image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Radish Benefits', item: 'https://www.miseemcasa.com.br/en/blog/beneficios-do-rabanete' },
  ],
}

export default function RadishBenefitsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Radish Benefits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">Aug 3, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Radish: The Vegetable You Walk Past at the Store (and Shouldn&apos;t)
          </h1>
          <p className="blog-desc">
            Cheap, easy to find, almost calorie-free, and packing more nutritional value than most vegetables that get all the attention. Radish has spent years playing plate garnish when it deserves better. Here&apos;s what it actually is, what&apos;s in it, and how to use it for real.
          </p>

          <div className="answer-box">
            <p>
              <strong>Radish</strong> is a cruciferous vegetable with about <strong>16 calories per 100g</strong>.
              Rich in vitamin C, fiber, and isothiocyanates — compounds with antioxidant and anti-inflammatory effects —
              it&apos;s cheap, easy to find at any grocery store, and versatile raw or lightly cooked.
              The sharp bite that scares people off is exactly the sign that the beneficial compounds are doing their job.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh red radishes next to carrots on a wooden surface"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Wendy Wei / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-radish">What is radish</a></li>
              <li><a href="#nutrition">Nutrition facts</a></li>
              <li><a href="#benefits">Health benefits of radish</a></li>
              <li><a href="#how-to-use">How to use radish in the kitchen</a></li>
              <li><a href="#how-to-choose">How to choose and store it</a></li>
              <li><a href="#worth-it">Is it worth buying</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS RADISH */}
          <h2 id="what-is-radish">What is radish</h2>

          <p>
            Radish (<em>Raphanus sativus</em>) is a vegetable in the cruciferous family — a close relative of kale, broccoli, and mustard greens. You know it by the bright red skin and the firm white inside. Raw, the flavor is sharp and peppery; cooked briefly, it mellows out a lot.
          </p>
          <p>
            The heat comes from isothiocyanates, compounds that form when the vegetable is cut or chewed. It&apos;s the same mechanism behind mustard and wasabi — which explains why they share that same nose-tingling smell. Those compounds are part of what makes radish nutritionally interesting, not a defect to cook away.
          </p>
          <p>
            The small round red radish is the one you&apos;ll find at most grocery stores. Other varieties exist — daikon (white and long, common in Japanese cooking), black radish, watermelon radish — but red is what dominates the produce aisle. The benefits below apply to all varieties, with small differences in intensity.
          </p>

          {/* NUTRITION */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Purple and red radishes in a ceramic bowl — close-up of fresh vegetables"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Rarnie McCudden / Pexels</p>
          </div>

          <h2 id="nutrition" className="img-above">Nutrition facts of radish</h2>

          <p>
            In a 3.5-ounce (100g) serving of raw radish — about five or six medium radishes — you get:
          </p>

          <ul className="item-list">
            <li><strong>16 calories</strong> — barely registers</li>
            <li><strong>3.4g of carbs</strong> — 1.6g of which is fiber</li>
            <li><strong>0.7g of protein</strong></li>
            <li><strong>Vitamin C: ~15mg</strong> (about 17% of the daily value)</li>
            <li><strong>Potassium: ~233mg</strong> — useful for blood pressure</li>
            <li><strong>Folate</strong> — plays a role in cell metabolism</li>
            <li><strong>Water: ~95%</strong> of total weight</li>
          </ul>

          <p>
            The number that matters most is that 95% water. Radish hydrates, fills you up, and barely touches your calorie count. It has one of the best volume-to-calorie ratios you&apos;ll find in the produce section — better than cucumber, better than zucchini.
          </p>
          <p>
            The individual micronutrients aren&apos;t spectacular, but the combination of vitamin C, potassium, and the plant compounds unique to cruciferous vegetables is what sets radish apart from a random vegetable. If you&apos;re tracking{' '}
            <a href="/en/blog/alimentos-ricos-em-magnesio">micronutrients</a>{' '}
            in general, radish is a small but consistent contributor.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Health benefits of radish</h2>

          <p>
            Radish&apos;s benefits don&apos;t come from one miracle compound. They come from the combination of fiber, vitamin C, potassium, and the glucosinolates that define cruciferous vegetables. Each one works differently.
          </p>

          <h3>Digestion and gut health</h3>
          <p>
            The fiber in radish stimulates gut motility and adds bulk to stool. On top of that, radish contains compounds that stimulate bile production and flow — the digestive fluid that breaks down fat. If you have slow digestion or feel heavy after fattier meals, adding raw radish as a starter or side is worth trying.
          </p>

          <h3>Mild diuretic effect</h3>
          <p>
            Potassium helps balance sodium in the body and supports fluid elimination through urine. It&apos;s not a strong diuretic like medication, but for anyone who regularly eats salty food, radish contributes to that balance. The high water content amplifies the effect.
          </p>

          <h3>Antioxidant and anti-inflammatory</h3>
          <p>
            Vitamin C and anthocyanins — the pigments that give the skin its red color — have proven antioxidant activity. The isothiocyanates, the same compounds responsible for the sharp bite, have anti-inflammatory properties studied specifically in cruciferous vegetables. The deeper the red skin, the more anthocyanins present.
          </p>

          <h3>Weight management</h3>
          <p>
            16 calories per 100g, with fiber and high volume. Radish takes up space in your stomach with almost no calorie cost. In salads, it swaps in for higher-calorie ingredients — croutons, shredded cheese, too much chickpea — without the meal losing texture or flavor. It&apos;s the kind of swap that works without effort.
          </p>

          <h3>Heart health</h3>
          <p>
            Potassium relaxes blood vessel walls and helps manage blood pressure. The anthocyanins in the skin are linked to lower cardiovascular risk in studies on pigment-rich vegetables. The effect is real, but it depends on regular consumption, not one good week.
          </p>

          <h3>Liver health</h3>
          <p>
            This is the least-known benefit. Compounds in radish — especially the isothiocyanate sulforaphane — show protective effects on the liver in studies on cruciferous vegetables. The mechanism involves stimulating liver detox enzymes. Research on radish specifically is still early, but the results across the cruciferous family are consistent.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8805469/pexels-photo-8805469.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Woman selecting fresh radishes in the produce section at the market"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Mike Jones / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to use radish in the kitchen</h2>

          <p>
            Most posts about radish stop at the benefits. The problem is that without knowing what to do with it, the vegetable ends up wilting in the crisper drawer — which cancels out any benefit. Here&apos;s what actually works in a real kitchen.
          </p>

          <h3>Raw in salads</h3>
          <p>
            Slicing thin is the trick. Thick-cut radish is tough, and the bite takes over. Sliced into thin rounds — ideally with a mandoline or a sharp knife — it turns crisp and mildly peppery, and it pairs well with any green base. Mixes well with shredded carrot, cucumber, and cilantro or parsley.
          </p>

          <h3>As a snack with salt</h3>
          <p>
            Cut into sticks or thick rounds, with a bit of coarse salt and lime. It&apos;s the kind of thing that lands on the table while dinner is still cooking. It works better than you&apos;d expect, especially cold. People who try it without knowing what it is rarely guess radish.
          </p>

          <h3>Lightly sautéed</h3>
          <p>
            Two to three minutes over high heat with olive oil and garlic. The sharpness almost disappears, the flavor turns mild and slightly sweet, and the texture keeps its crunch. Works as a side in place of zucchini or green beans. Don&apos;t cook it past that point — mushy radish has nothing going for it.
          </p>

          <h3>Quick pickle</h3>
          <p>
            The simplest version: slice, put in a jar, cover with rice vinegar, a spoon of sugar, and a pinch of salt. Let it sit in the fridge for half an hour. The result is a light pickle that lasts up to five days and works on sandwiches, tacos, rice bowls, or alongside any grilled meat. No canning process needed.
          </p>

          <h3>Finishing hot dishes</h3>
          <p>
            This one surprises people: thinly sliced radish scattered over a hot dish — grilled chicken, lentils, soup — wilts slightly from the heat without losing its texture. It adds freshness, color, and a contrast that makes the plate look more put-together than it actually was.
          </p>

          <div className="blog-inline-cta">
            <p>Bought radish. Now don&apos;t let it disappear in the fridge. <em>Mise remembers.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO CHOOSE AND STORE */}
          <h2 id="how-to-choose">How to choose and store radish</h2>

          <p>
            Wilted radish in the crisper drawer is a classic. It arrives from the store firm, goes into the fridge without much thought, and by Thursday it&apos;s soft. There&apos;s a fix.
          </p>

          <h3>How to pick at the store</h3>
          <p>
            Press it with your thumb: it should be firm, with no give. The skin should be smooth, without cracks, and the red should be bright and even. Radishes with dark spots or soft patches are past their prime. If it still has the greens attached, they should look green and perky — wilted greens mean the vegetable has been losing moisture for a while.
          </p>

          <h3>How to store it at home</h3>
          <p>
            The most important rule: cut the greens off before storing. The greens pull moisture from the root and speed up wilting. With the greens removed, wrap the radishes in a lightly damp paper towel and put them in a sealed bag in the crisper drawer. That gets you up to a week.
          </p>
          <p>
            The greens don&apos;t have to go in the trash. Sauteed with olive oil and garlic, they taste a lot like spinach — slightly peppery, tender texture. Good with scrambled eggs or as the base of a frittata. If you&apos;re running a{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            to cut down on waste, that&apos;s exactly the kind of detail that adds up.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is radish worth buying</h2>

          <p>It depends on what you already eat.</p>
          <p>
            If you already buy carrots, cucumber, or zucchini every week, radish fits the same logic — a raw vegetable, easy, doesn&apos;t need cooking. The nutrition profile is solid, the price is low, and it&apos;s at every grocery store. It&apos;s not a{' '}
            weekly-shop staple the way onion or garlic is — but it earns a spot in a regular grocery run if you already eat raw vegetables.
          </p>
          <p>
            If you don&apos;t know what you&apos;ll do with it, don&apos;t buy it. A vegetable you don&apos;t use is waste — and wilted radish is beyond saving. The case is different if you already know you&apos;ll make a salad on Wednesday, a snack over the weekend, or that quick pickle mentioned above.
          </p>
          <p>
            The biggest obstacle is the sharpness. It scares off people who aren&apos;t used to it. But slicing thin, soaking for ten minutes in cold water, or cooking it briefly solves that. Once you adjust the prep, radish becomes a low-drama ingredient — cheap, versatile, and one that spoils fast if you don&apos;t plan the use. Exactly like any fresh vegetable worth buying.
          </p>
          <p>
            If you&apos;re building out a{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly menu</a>{' '}
            and want to vary the vegetables without spending more, radish is a solid choice. It slots into your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            alongside whatever you already buy — no special section needed.
          </p>
          <p>
            Radish is the vegetable everyone walks past. No good reason for it.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about radish</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">How many calories does radish have?</p>
              <p className="faq-a">
                Roughly 16 calories per 100g — one of the lowest-calorie vegetables in the produce section. It&apos;s almost all water (about 95%), which explains the volume with barely any calorie impact.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat radish raw?</p>
              <p className="faq-a">
                Yes, and it&apos;s the most common way. Raw keeps the most vitamin C and isothiocyanates intact. Sliced thin in salads or cut into sticks with salt, the sharpness is easier to handle. To cut it down further, soak the slices in cold water for 10 minutes before serving.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does radish help you lose weight?</p>
              <p className="faq-a">
                It doesn&apos;t make you lose weight on its own, but it helps: 16 calories per 100g, fiber that fills you up, and high water content that takes up stomach space without the calories. A useful swap in salads and snacks in place of higher-calorie ingredients.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is radish good for digestion?</p>
              <p className="faq-a">
                Yes. The fiber keeps digestion moving, and radish stimulates bile production, which makes it easier to digest fat. Glucosinolate compounds also have a beneficial effect on gut bacteria, according to research on cruciferous vegetables.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store radish after buying it?</p>
              <p className="faq-a">
                Cut the greens off before storing — they make the root wilt faster. Wrap in a damp paper towel, put in a sealed bag, and keep in the crisper drawer. It lasts up to a week. The greens can be sauteed like spinach.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between radish and turnip?</p>
              <p className="faq-a">
                Both are cruciferous root vegetables, but they&apos;re quite different in practice. Radish is smaller, with bright red skin and an intense peppery bite — eating it raw is the main use. Turnip is larger, with white or purple skin, milder and slightly sweet once cooked. Not interchangeable in recipes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does radish have vitamin C?</p>
              <p className="faq-a">
                Yes. 100g of raw radish provides about 15mg of vitamin C, roughly 17% of the recommended daily value. It&apos;s not a concentrated source like an orange or bell pepper, but it adds up for anyone eating raw vegetables regularly.
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
                Creator of Mise. Buys radish every week because it feels healthy. Uses it in Tuesday&apos;s salad and forgets the rest in the crisper until Friday. Work in progress.
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
              Radish makes it onto the list and actually ends up on the plate — not in the trash on Friday.
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
