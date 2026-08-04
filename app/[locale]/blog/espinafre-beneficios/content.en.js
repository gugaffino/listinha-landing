import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Spinach Benefits: Nutrition Facts, Raw vs Cooked, and How to Use It',
  description: 'Spinach has 23 calories per 100g and over 400% of your daily vitamin K in one serving. See the real benefits, what changes when you cook it, and how to use it without a salad every night.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/espinafre-beneficios',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/espinafre-beneficios',
      en: 'https://www.miseemcasa.com.br/en/blog/espinafre-beneficios',
      es: 'https://www.miseemcasa.com.br/es/blog/espinafre-beneficios',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/espinafre-beneficios',
    },
  },
  openGraph: {
    title: 'Spinach Benefits: Nutrition Facts, Raw vs Cooked, and How to Use It',
    description: 'Spinach has 23 calories per 100g and over 400% of your daily vitamin K in one serving. See the real benefits, what changes when you cook it, and how to use it without a salad every night.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/espinafre-beneficios',
    images: [
      {
        url: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh spinach leaves on a green background — close-up',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinach Benefits: Nutrition Facts, Raw vs Cooked, and How to Use It',
    description: 'Spinach has 23 calories per 100g and over 400% of your daily vitamin K in one serving. See the real benefits, what changes when you cook it, and how to use it without a salad every night.',
    images: ['https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is spinach high in iron? Does it help with anemia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spinach has iron, but it is non-heme iron (plant-based), which the body absorbs less efficiently than iron from animal sources. To improve absorption, pair spinach with vitamin C — a squeeze of lemon, tomato, or a piece of citrus. On its own it will not treat anemia, but it contributes to an iron-rich diet when combined with other sources.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I eat spinach every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most people, yes. The one caveat is for anyone with a history of calcium oxalate kidney stones: spinach is high in oxalate, which can make that condition worse. Without that history, daily consumption is considered safe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is oxalate in spinach? Is it dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Calcium oxalate is a natural compound in spinach that can reduce calcium absorption and, in people who are predisposed, contribute to kidney stones. Cooking reduces the oxalate content. For most people without a history of kidney stones, it does not pose a risk with regular consumption.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does raw or cooked spinach have more nutrients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the nutrient. Raw preserves more vitamin C, folate, and lutein, which are heat-sensitive. Cooked concentrates the minerals — you get more iron and calcium per serving because the volume shrinks so much. Cooking also lowers oxalate, improving calcium absorption. Varying how you prepare it is the most balanced approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I store fresh spinach so it lasts longer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wrap the leaves in a slightly damp paper towel and put them in a sealed bag in the fridge. Only wash right before using — washing before storing speeds up spoilage. Stored this way, it lasts 3 to 5 days. To keep it for months, blanch it quickly and freeze in portions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is frozen spinach as nutritious as fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For cooked recipes, yes. Freezing preserves minerals well and most of the vitamins, especially if it was blanched before freezing. The texture gets softer after thawing, so it does not work for raw salads — but it is great in sautés, soups, pasta, and omelets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is spinach fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. At 23 calories per 100g and 91% water, spinach has one of the lowest calorie densities of any food. The fiber also helps with fullness. What can add up is whatever goes with it — too much olive oil, cheese, or a heavy sauce.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Spinach Benefits: Nutrition Facts, Raw vs Cooked, and How to Use It',
  description: 'Spinach has 23 calories per 100g and over 400% of your daily vitamin K in one serving. See the real benefits, what changes when you cook it, and how to use it without a salad every night.',
  image: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-06-06',
  dateModified: '2026-06-06',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/espinafre-beneficios',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Spinach Benefits', item: 'https://www.miseemcasa.com.br/en/blog/espinafre-beneficios' },
  ],
}

export default function SpinachBenefitsEn() {
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
            <li className="breadcrumb-current" aria-current="page">Spinach Benefits</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-06-06">Jun 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">6 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Spinach in Real Life: Why It Deserves a Spot on the List Every Week
          </h1>
          <p className="blog-desc">
            One of the cheapest greens in the produce aisle, and one of the densest in micronutrients. What spinach actually delivers, what changes between raw and cooked, and how to use it without turning every dinner into a salad.
          </p>

          <div className="answer-box">
            <p>
              <strong>Spinach</strong> is a leafy green vegetable with just 23 calories per 100g, rich in vitamin K (over 400% of the daily recommended value), iron, calcium, folate, and antioxidants like lutein and zeaxanthin. It is one of the most nutrient-dense things you can pick up at a regular grocery store.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh spinach leaves on a green background — close-up"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: SHVETS production / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-spinach">What spinach is</a></li>
              <li><a href="#nutrition">Nutrition facts per 100g</a></li>
              <li><a href="#benefits">Health benefits of spinach</a></li>
              <li><a href="#raw-vs-cooked">Raw or cooked: what changes</a></li>
              <li><a href="#how-to-use">How to use it in the kitchen</a></li>
              <li><a href="#how-to-store">How to pick and store it</a></li>
              <li><a href="#worth-it">Is it worth adding to the list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS SPINACH */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/159094/pexels-photo-159094.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh spinach leaves in a wooden bowl on a dark surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pixabay / Pexels</p>
          </div>

          <h2 id="what-is-spinach" className="img-above">What spinach is</h2>

          <p>
            Spinach (<em>Spinacia oleracea</em>) is a leafy green native to Persia, now grown across most of the world year-round — it does best in cooler months, since heat slows leaf growth and pushes the plant to bolt. It shows up in nearly every grocery store, farmers market, and corner produce stand.
          </p>
          <p>
            The Popeye version of the story oversold it a little. Spinach will not turn anyone into a bodybuilder overnight. What it actually does is deliver a serious amount of vitamins and minerals for very few calories — which is reason enough to keep it in regular rotation.
          </p>
          <p>
            Two types show up most often: flat-leaf (milder, good raw) and curly-leaf/savoy (firmer texture, good in sautés). For hot dishes or smoothies, either one works equally well.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Spinach nutrition facts per 100g</h2>

          <p>
            100g of raw spinach has roughly 23 calories, 2.9g of protein, 3.6g of carbs, and 2.2g of fiber. The calorie density is about as low as it gets — nearly 91% of the weight is water.
          </p>
          <p>
            The real story is not in the macros. It is in the micros:
          </p>

          <ul className="item-list">
            <li><strong>Vitamin K:</strong> over 400% of the daily recommended value — one of the most concentrated sources in any common food</li>
            <li><strong>Vitamin A (beta-carotene):</strong> high, important for vision and immune function</li>
            <li><strong>Folate:</strong> especially relevant for anyone planning a pregnancy</li>
            <li><strong>Iron:</strong> 2.7 mg per 100g (non-heme iron, slower to absorb)</li>
            <li><strong>Calcium:</strong> around 99 mg per 100g</li>
            <li><strong>Magnesium, potassium, and phosphorus:</strong> present in meaningful amounts</li>
            <li><strong>Lutein and zeaxanthin:</strong> antioxidants for eye health, more concentrated when raw</li>
          </ul>

          <p>
            Few plant foods pack that profile into a leaf that costs a couple of dollars a bag.
          </p>

          {/* BENEFITS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="White bowl with fresh spinach — vibrant green leaves on a light surface"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Jacqueline Howell / Pexels</p>
          </div>

          <h2 id="benefits" className="img-above">Health benefits of spinach</h2>

          <h3>Eye health</h3>
          <p>
            Lutein and zeaxanthin are carotenoids that build up in the retina and protect against blue light and age-related macular degeneration. Spinach is one of the best sources of both. Absorption improves with a bit of fat — a drizzle of olive oil is enough.
          </p>

          <h3>Blood pressure support</h3>
          <p>
            Potassium helps balance out sodium in the body. Diets higher in potassium are linked to lower blood pressure. A serving of sautéed spinach with a light hand on the salt contributes to that balance without any extra effort.
          </p>

          <h3>Bone health</h3>
          <p>
            Vitamin K is essential for producing osteocalcin, the protein that helps bind calcium to bone. Spinach delivers both calcium and vitamin K together — a combination that is not that common in other foods. The oxalate it contains reduces some of the calcium absorption, but the effect is only partial.
          </p>

          <h3>Iron and energy</h3>
          <p>
            The iron in spinach is non-heme, which absorbs more slowly than iron from animal sources. To get more out of it, pair it with vitamin C: lemon in the salad, tomato in the dish, or a piece of fruit right after. That simple combination noticeably increases absorption.
          </p>

          <h3>Folate for anyone planning a pregnancy</h3>
          <p>
            Folate is essential in early pregnancy for the baby&apos;s neural tube development. Spinach is one of the most accessible sources of folate around. Anyone trying to conceive should keep dark leafy greens in the rotation — and talk to a doctor about supplementation, since diet alone rarely covers the recommended dose.
          </p>

          <h3>Digestion and fullness</h3>
          <p>
            Fiber keeps digestion moving and helps with fullness. At 23 calories with real volume, spinach takes up space on the plate without taking up much of the day&apos;s calorie budget.
          </p>

          {/* RAW OR COOKED */}
          <h2 id="raw-vs-cooked">Raw or cooked: what actually changes</h2>

          <p>
            The short answer: raw preserves more heat-sensitive vitamins; cooked concentrates more minerals. Both have value — you do not have to pick one.
          </p>
          <p>
            Raw keeps more vitamin C, folate, and lutein, which break down with heat. If the goal is to get the most out of the antioxidants, a raw salad with olive oil is the most direct route.
          </p>
          <p>
            With cooking, the volume drops a lot — 100g of raw leaves shrinks to about 30g once sautéed. That means you end up eating a lot more spinach in a cooked portion, and the minerals (iron, calcium, magnesium) end up more concentrated per bite. Cooking also lowers the oxalate content, which can improve how much of the available calcium your body absorbs.
          </p>
          <p>
            The most common mistake is cooking it too long. Three to four minutes in a hot pan is enough. Boiled for more than five minutes and it loses color, texture, and a good chunk of its vitamins.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use spinach in the kitchen</h2>

          <p>
            Spinach has one useful trait: it disappears. In smoothies, soups, and omelets, it vanishes visually and almost vanishes in flavor too. That makes it easy to work into a normal week without building a salad around it every time. If you are putting together a{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly meal plan</a>
            {' '}and want more greens without extra effort, it is the easiest entry point.
          </p>

          <h3>Quick sauté</h3>
          <p>
            Heat olive oil, add minced garlic, throw in the leaves and toss for 3 to 4 minutes. Season with salt. Done. Goes with rice, pasta, grilled chicken, or eggs. It is the fastest prep and the one that shows up most often in a real week.
          </p>

          <h3>In raw salads</h3>
          <p>
            Young, tender leaves work well raw. They hold up to a lemon vinaigrette — which also boosts iron absorption — along with tomato, red onion, and a protein. Spinach handles acidic dressing longer than lettuce without wilting.
          </p>

          <h3>In omelets and scrambled eggs</h3>
          <p>
            Add the leaves to the pan when the eggs are almost done. Two minutes is enough to wilt it without losing the color. It adds volume and micronutrients without changing the flavor much.
          </p>

          <h3>In pasta, risotto, and soups</h3>
          <p>
            Add it in the last two minutes of cooking. In creamy pasta, it disappears into the sauce. In soups, stir it in off the heat to keep the color. In risotto, it goes in at the end with the cheese.
          </p>

          <h3>In a green smoothie</h3>
          <p>
            Half a cup of raw spinach disappears in flavor when blended with banana and apple. The color turns green. The taste does not taste like a leaf. It is the fastest way to work it in if you are not used to eating greens.
          </p>

          <div className="blog-inline-cta">
            <p>Pantry connected to your list. <em>That&apos;s how Mise works.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to pick and store spinach</h2>

          <h3>How to pick it at the store</h3>
          <p>
            Look for firm, deep green leaves with no yellow or brown spots at the edges. Thin stems mean younger, more tender leaves. Limp leaves or a strong smell mean it is past its best. When in doubt, buy less and go more often — spinach is not something to stock up on for weeks.
          </p>

          <h3>How to store it in the fridge</h3>
          <p>
            Wrap the leaves in a slightly damp paper towel and put them in a sealed bag or container. Do not wash it before storing — the extra moisture speeds up spoilage. Wash right before using. Stored this way, it lasts 3 to 5 days. If you want to keep it longer in your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {', '}freezing is the move.
          </p>

          <h3>How to freeze it</h3>
          <p>
            Blanch it quickly — 30 seconds in boiling water, then straight into ice water. Drain well, portion it out, and freeze. It lasts up to 3 months and holds onto most of its minerals. The texture changes, so it is better for cooked recipes than raw salads.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth putting on the list</h2>

          <p>
            Yes. Not much hesitation needed.
          </p>
          <p>
            Spinach is cheap, it is everywhere, and it packs one of the highest nutrient densities of anything in the produce aisle. It is not an imported green powder with detox claims attached — it is a leaf you can sauté in 4 minutes and it goes with almost anything.
          </p>
          <p>
            The one real caveat is for anyone with a history of calcium oxalate kidney stones. Without that history, regular consumption is not a risk, and it delivers a real gain in micronutrients that most diets could use more of.
          </p>
          <p>
            If lettuce and arugula are already on your rotation, spinach fits right in as a variation. If you barely eat greens at all, it is the easiest place to start — it disappears into other dishes, it does not need its own plate, and it still shows up in the nutrition numbers.
          </p>
          <p>
            A food that earns a place on the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            {' '}without needing a sales pitch. That is rare for something this cheap.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about spinach</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is spinach high in iron? Does it help with anemia?</p>
              <p className="faq-a">
                It has iron — 2.7 mg per 100g — but it is non-heme (plant-based) iron, absorbed less efficiently than iron from animal sources. To improve absorption, pair it with vitamin C: lemon, tomato, or citrus in the same meal. On its own it will not treat anemia, but it contributes to an iron-rich diet when combined with other sources.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can I eat spinach every day?</p>
              <p className="faq-a">
                For most people, yes. The caveat is for anyone with a history of calcium oxalate kidney stones: spinach is high in oxalate, which can make that condition worse. Without that history, daily consumption is safe.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the oxalate in spinach? Is it dangerous?</p>
              <p className="faq-a">
                Calcium oxalate is a natural compound that can reduce calcium absorption and, in people predisposed to it, contribute to kidney stones. Cooking reduces some of the oxalate present. For most people without a history of kidney stones, it is not a risk with regular consumption.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does raw or cooked spinach have more nutrients?</p>
              <p className="faq-a">
                Raw preserves more vitamin C, folate, and lutein — compounds sensitive to heat. Cooked concentrates minerals per serving because the volume drops so much: 100g of raw leaves shrinks to about 30g once sautéed. Cooking also lowers oxalate, improving calcium absorption. Varying how you prepare it is the most balanced approach.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do I store fresh spinach so it lasts longer?</p>
              <p className="faq-a">
                Wrap the leaves in a slightly damp paper towel, put them in a sealed bag in the fridge, and wash only right before using. That way it lasts 3 to 5 days. Washing before storing speeds up spoilage.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is frozen spinach as nutritious as fresh?</p>
              <p className="faq-a">
                For cooked recipes, yes. Freezing preserves minerals well and most of the vitamins, especially if it was blanched before freezing. The texture changes — it does not work for raw salad — but it is great in sautés, soups, pasta, and omelets.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is spinach fattening?</p>
              <p className="faq-a">
                At 23 calories per 100g and 91% water, spinach has one of the lowest calorie densities of any food. The fiber helps with fullness too. What can add up is whatever goes with it — too much olive oil, cheese, or a heavy sauce.
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
                Creator of Mise. Bought spinach for a salad on Monday, sautéed all of it on Thursday when it was about to wilt. Turned out great. Not the plan, but it worked.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A pantry that never turns into a surprise.<br />
              <em>That&apos;s Mise.</em>
            </h2>
            <p>
              Connects pantry, recipes, and{' '}
              <a href="/en/funcionalidades/lista-de-compras" style={{color: 'rgba(251,249,242,0.85)', fontWeight: 500}}>shopping list</a>
              {' '}in one place. You buy what you&apos;ll actually use — and the spinach does not rot at the back of the fridge drawer.
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
