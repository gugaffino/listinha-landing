import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: "Pomelo vs Grapefruit: What's Different and How to Eat One",
  description: "Pomelo is the largest citrus fruit on earth and grapefruit's direct ancestor, not the same fruit. What sets them apart, the nutrition facts, and how to eat one.",
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pomelo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-pomelo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-pomelo',
    },
  },
  openGraph: {
    title: "Pomelo vs Grapefruit: What's Different and How to Eat One",
    description: "Pomelo is the largest citrus fruit on earth and grapefruit's direct ancestor, not the same fruit. What sets them apart, the nutrition facts, and how to eat one.",
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo',
    images: [
      {
        url: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Citrus fruit slices arranged on marble — lemon, orange, and grapefruit in a flat lay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pomelo vs Grapefruit: What's Different and How to Eat One",
    description: "Pomelo is the largest citrus fruit on earth and grapefruit's direct ancestor, not the same fruit. What sets them apart, the nutrition facts, and how to eat one.",
    images: ['https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a pomelo the same thing as a grapefruit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Pomelo (Citrus maxima) is a pure species native to Southeast Asia. Grapefruit (Citrus paradisi) is an accidental hybrid of pomelo and sweet orange, first found in Barbados in the 1700s. Grapefruit is smaller, more acidic, and more bitter. Grocery store labels mix the two up constantly, which is most of the confusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does pomelo taste as bitter as grapefruit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, it is milder. Pomelo has a sweeter, more balanced citrus flavor without the sharp bitterness grapefruit is known for. Pink and red-fleshed pomelos tend to be sweeter; white and pale yellow ones lean slightly more acidic. If you find grapefruit too bitter to enjoy, pomelo is usually an easier sell.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat pomelo if you take medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check first if your prescription warns against grapefruit — statins and some blood pressure medications are the common ones. Pomelo contains furanocoumarins, the same compounds in grapefruit that interfere with how the body processes certain drugs. If the label says avoid grapefruit, it applies to pomelo too. Ask your doctor or pharmacist.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know when a pomelo is ripe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weight is the real test — it should feel heavy for its size. Skin color is not reliable, since pomelo can be green outside and perfectly ripe inside depending on the variety. Give it a light squeeze: it should yield slightly and spring back. Dark soft spots or a mushy feel mean it is past its prime.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store pomelo at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whole, at room temperature, it keeps for 1 to 2 weeks. In the fridge, it can last up to a month — the thick rind protects the fruit and slows moisture loss better than most citrus. Once cut, cover it and use it within 3 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can you buy pomelo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Asian grocery stores carry it reliably, especially in neighborhoods with a large Chinese or Southeast Asian community. Larger supermarkets and specialty produce stores stock it seasonally, usually fall through winter in the US. Farmers markets are hit or miss depending on the region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is pomelo actually good for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a solid source of vitamin C, fiber, and potassium, at around 38 calories per 100g of pulp. It also has antioxidants like naringenin and lycopene. Like any fruit, it fits into a varied diet — it is not a superfood, but it is a good pick when it is in season and you like the flavor.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pomelo vs Grapefruit: What's Different and How to Eat One",
  description: "Pomelo is the largest citrus fruit on earth and grapefruit's direct ancestor, not the same fruit. What sets them apart, the nutrition facts, and how to eat one.",
  image: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-07-27',
  dateModified: '2026-07-27',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pomelo vs Grapefruit', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-pomelo' },
  ],
}

export default function PomeloEn() {
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
            <li className="breadcrumb-current" aria-current="page">Pomelo vs grapefruit</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">Jul 27, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Pomelo Is Not a Big Grapefruit — Here's What It Actually Is
          </h1>
          <p className="blog-desc">
            Big fruit, thick rind, confusing label at the store. Here's what pomelo actually is, how it relates to grapefruit, and whether it belongs on your shopping list.
          </p>

          <div className="answer-box">
            <p>
              <strong>Pomelo</strong> (<em>Citrus maxima</em>) is the largest citrus fruit that exists — it can weigh up to 4.4 lbs, with a thick rind ranging from green to pale yellow.
              It's a pure species native to Southeast Asia, and it's <strong>grapefruit's direct ancestor</strong>, not the same fruit.
              The flavor is sweet-tart, milder than grapefruit, and the flesh can be white, yellow, pink, or red.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Citrus fruit slices — orange, grapefruit, and lemon arranged on white marble in a flat lay"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Aleksandar Pasaric / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-pomelo">What pomelo actually is</a></li>
              <li><a href="#vs-grapefruit">Pomelo vs grapefruit: the real difference</a></li>
              <li><a href="#nutrition">Nutrition facts per serving</a></li>
              <li><a href="#how-to-eat">How to eat pomelo</a></li>
              <li><a href="#choose-store">How to choose and store it</a></li>
              <li><a href="#where-to-buy">Where to find it and what it costs</a></li>
              <li><a href="#worth-it">Is it worth putting on your list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS POMELO */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9466718/pexels-photo-9466718.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Man holding a whole pomelo in front of his face, showing the fruit's actual size"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ron Lach / Pexels</p>
          </div>

          <h2 id="what-is-pomelo" className="img-above">What pomelo actually is</h2>

          <p>
            Pomelo is a citrus fruit — the largest one there is. Its scientific name is <em>Citrus maxima</em>, sometimes labeled <em>Citrus grandis</em>. A full-grown fruit weighs between 2 and 4.4 lbs, and a good chunk of that is rind: thick, spongy, and up to 1 to 2 inches deep.
          </p>
          <p>
            The flesh sits inside segments, the same way an orange or grapefruit does. Color depends on the variety. White and pale yellow are the most common. Pink and red pomelos are sweeter and less acidic.
          </p>
          <p>
            The taste is citrusy and refreshing — noticeably milder than the grapefruit most people already know. The thick peel carries aromatic essential oils, so it works as zest in recipes just like any other citrus.
          </p>
          <p>
            The tree is native to Southeast Asia, mainly Malaysia, Thailand, and southern China. In Chinese culture it has centuries of history and shows up at celebrations like Lunar New Year. In the US, most of what lands in stores is imported, though some domestic growers in California and Florida produce it in smaller volumes.
          </p>

          {/* VS GRAPEFRUIT */}
          <h2 id="vs-grapefruit">Pomelo vs grapefruit: the real difference</h2>

          <p>
            The produce sticker says "pomelo" but the fruit looks exactly like grapefruit. It might genuinely be grapefruit mislabeled — or it might be real pomelo in an unusual size. This mix-up happens constantly, in the US and everywhere else.
          </p>
          <p>
            They are two different fruits:
          </p>
          <ul className="item-list">
            <li><strong>Pomelo</strong> (<em>Citrus maxima</em>) — the pure, original species. Larger. Very thick rind. Milder, sweeter flavor.</li>
            <li><strong>Grapefruit</strong> (<em>Citrus paradisi</em>) — an accidental hybrid of pomelo and sweet orange, first documented in Barbados in the 1700s. Smaller. Thinner rind. More acidic and bitter.</li>
          </ul>
          <p>
            Pomelo is the ancestor. Grapefruit descends from it. They're related, not interchangeable.
          </p>
          <p>
            To make things worse, naming isn't consistent across languages or regions — in some countries "pomelo" is simply the local word for grapefruit, which exported the confusion into English-speaking markets too. When in doubt: real pomelo is visibly bigger and the rind is noticeably thicker, sometimes over an inch deep.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Nutrition facts per serving</h2>

          <p>
            Pomelo runs about 38 calories per 100g of pulp. For a fruit this size, that's low — the catch is that one whole fruit has far more than 100g of edible flesh once you peel it.
          </p>
          <p>
            It's a strong source of vitamin C — a reasonable serving covers a large share of the daily requirement. It also has fiber, potassium, and antioxidants, mainly naringenin and lycopene. Naringenin is the same flavonoid found in high concentration in grapefruit, tied to anti-inflammatory effects in lab studies.
          </p>
          <p>
            <strong>One important warning:</strong> pomelo contains furanocoumarins — the same compounds in grapefruit that interfere with how the liver processes certain medications. If you take statins for cholesterol, or any drug with a "avoid grapefruit" warning, avoid pomelo too. It's the same interaction. Check with your doctor or pharmacist first.
          </p>

          {/* HOW TO EAT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted citrus fruit halves on a wood cutting board — orange, grapefruit, and lemon"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Jane T D. / Pexels</p>
          </div>

          <h2 id="how-to-eat" className="img-above">How to eat pomelo</h2>

          <p>
            The thick rind has one real advantage: you can peel it by hand, no special knife required. Cut a cap about an inch deep off the top. Score the rind vertically from top to bottom, spaced out roughly like orange segments. Pull with your fingers — the rind comes away in large pieces.
          </p>
          <p>
            Then separate the segments. Each one has a membrane thicker than an orange's. You can eat it with the membrane on, or peel it back — without it, the flesh is noticeably softer and sweeter.
          </p>
          <p>
            Ways to use it:
          </p>
          <ul className="item-list">
            <li><strong>Fresh, on its own</strong> — the simplest option. Chilled, it's even better.</li>
            <li><strong>In salads</strong> — pairs well with bitter greens, goat cheese, and toasted nuts. The sweetness balances the bitterness of the leaves.</li>
            <li><strong>In juices and cocktails</strong> — mixes well with pineapple, green apple, and ginger. Straight pomelo juice can be intense on its own, so blend it with something else.</li>
            <li><strong>With seafood</strong> — a classic pairing in Thai cooking. Try it with grilled shrimp and fish sauce.</li>
          </ul>
          <p>
            The rind itself is technically edible. Candied, it works like a sweet; the zest fits into anything that calls for citrus. Most people, though, just eat the flesh and toss the rest.
          </p>
          <p>
            If pomelo isn't the citrus fruit you're most familiar with, it sits in the same family as{' '}
            <a href="/en/blog/frutas-citricas">oranges, lemons, and grapefruit</a>
            {' '}— worth knowing the full lineup before you decide what actually belongs in your fruit bowl.
          </p>

          {/* CHOOSE AND STORE */}
          <h2 id="choose-store">How to choose and store it</h2>

          <p>
            Pick it up and check the weight. It should feel heavy for its size — too light usually means it's dried out inside. Rind color is not a reliable ripeness indicator: pomelo can look green on the outside and be perfectly ripe inside, depending on the variety.
          </p>
          <p>
            Give it a light squeeze: it should yield slightly and spring back. Dark spots or a mushy texture mean it's past its prime.
          </p>
          <p>
            To store it: whole, it keeps for 1 to 2 weeks at room temperature. In the fridge, it can last up to a month — the thick rind slows moisture loss better than thin-skinned citrus, a real advantage. Once cut, cover it and use it within 3 days.
          </p>

          {/* WHERE TO BUY */}
          <h2 id="where-to-buy">Where to find it and what it costs</h2>

          <p>
            Distribution is uneven. Pomelo isn't a commodity fruit — it doesn't show up in every grocery store, in every city, year-round.
          </p>
          <p>
            Where to look:
          </p>
          <ul className="item-list">
            <li><strong>Asian grocery stores</strong> — the most reliable source in most US cities, especially where there's a large Chinese or Southeast Asian community.</li>
            <li><strong>Specialty and larger supermarkets</strong> — Whole Foods and similar chains carry it seasonally, usually fall through early winter.</li>
            <li><strong>Farmers markets</strong> — hit or miss, depending on region and season.</li>
          </ul>
          <p>
            Price swings quite a bit. The fruit looks huge, but a good part of that weight is rind. Compare by actual edible flesh, not by price per piece. One tip: when you find a good one at a fair price, remember where. Like any ingredient with spotty availability, keeping track of a reliable source is worth it — a{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            {' '}makes that easier to remember.
          </p>

          <div className="blog-inline-cta">
            <p>Seasonal fruit, an organized pantry. <em>Mise handles the rest.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth putting on your list</h2>

          <p>Depends on what you're planning to do with it.</p>
          <p>
            If you already eat citrus regularly and want variety, pomelo is a solid addition. Distinct flavor, low calorie, and it holds up well in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {' '}— weeks without spoiling, thanks to that thick rind.
          </p>
          <p>
            If the idea came from a recipe or curiosity at the store, buy one, try it, and decide from there. Pomelo isn't a fruit you buy every week on faith before knowing whether you like it.
          </p>
          <p>
            It's not an everyday staple — but when it's in season and the price is fair, it's worth trying at least once. It's one of the few citrus fruits that still surprises people the first time.
          </p>
          <p>
            The rind goes in the trash either way.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about pomelo</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is a pomelo the same thing as a grapefruit?</p>
              <p className="faq-a">
                No. Pomelo (<em>Citrus maxima</em>) is a pure species native to Southeast Asia. Grapefruit (<em>Citrus paradisi</em>) is an accidental hybrid of pomelo and sweet orange, first found in Barbados in the 1700s. Grapefruit is smaller, more acidic, and more bitter. Grocery store labels mix the two up constantly, which is most of the confusion.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does pomelo taste as bitter as grapefruit?</p>
              <p className="faq-a">
                No, it's milder. The flavor is a more balanced sweet-tart — citrusy and refreshing, without the sharp bitterness grapefruit is known for. Pink and red-fleshed pomelos tend to be sweeter; white and pale yellow ones lean slightly more acidic. If grapefruit is too bitter for you, pomelo is usually an easier sell.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat pomelo if you take medication?</p>
              <p className="faq-a">
                Check first if your prescription warns against grapefruit — statins and some blood pressure medications are the common ones. Pomelo has furanocoumarins, the same compounds that interfere with how the body processes certain drugs. If the label mentions grapefruit, it applies to pomelo too. Ask your doctor or pharmacist before eating it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you know when a pomelo is ripe?</p>
              <p className="faq-a">
                Weight is the real test — it should feel heavy for its size. Color isn't reliable: pomelo can be green outside and ripe inside. Give it a light squeeze: it should yield a bit and spring back. Too soft or spotted with dark marks means it's past its prime.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store pomelo at home?</p>
              <p className="faq-a">
                Whole, it keeps 1 to 2 weeks at room temperature. In the fridge, up to a month. The thick rind protects the fruit well and slows moisture loss. Once cut, cover it and use within 3 days.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Where can you buy pomelo?</p>
              <p className="faq-a">
                Asian grocery stores carry it most reliably, especially in cities with a large Chinese or Southeast Asian community. Larger supermarkets and specialty stores stock it seasonally, usually fall through winter. Farmers markets vary a lot by region.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is pomelo actually good for you?</p>
              <p className="faq-a">
                It's rich in vitamin C, fiber, and potassium, at around 38 calories per 100g of pulp. It has antioxidants like naringenin and lycopene. Like any fruit, it fits into a varied diet — not a superfood, but a good choice when it's in season and you enjoy the flavor.
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
                Runs Mise. Once grabbed a "pomelo" at the store, got it home excited, and it turned out to be grapefruit in a bigger costume. Still made juice out of it.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              You know what's in the pantry.<br />
              <em>Let Mise run with it.</em>
            </h2>
            <p>
              Pantry, recipes, and shopping list — all in one place.
              You buy what you'll actually use, so the pomelo doesn't end up forgotten in the crisper drawer.
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
