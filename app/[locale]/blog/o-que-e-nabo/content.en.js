import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Turnip 101: Nutrition, Benefits, and How to Cook It',
  description: 'Turnip is a low-calorie root vegetable with vitamin C and fiber that most people walk past at the store. What it is, its benefits, and how to cook it well.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-nabo',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-nabo',
    },
  },
  openGraph: {
    title: 'Turnip 101: Nutrition, Benefits, and How to Cook It',
    description: 'Turnip is a low-calorie root vegetable with vitamin C and fiber that most people walk past at the store. What it is, its benefits, and how to cook it well.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo',
    images: [
      {
        url: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh turnip on a light surface — white and purple root vegetable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turnip 101: Nutrition, Benefits, and How to Cook It',
    description: 'Turnip is a low-calorie root vegetable with vitamin C and fiber that most people walk past at the store. What it is, its benefits, and how to cook it well.',
    images: ['https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is turnip a fruit or a vegetable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turnip is a vegetable — technically, the taproot of a herbaceous plant. Fruit is the reproductive part of a plant, where the seeds sit. A turnip is the root, which the plant uses to store energy. In the kitchen, it belongs in the same category as carrots, beets, and potatoes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat turnip raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw turnip has a sharper, peppery bite and a crisp texture similar to radish. Thinly sliced or grated, it works well in a salad. If the bitterness bothers you, soak the slices in water with a squeeze of lemon or a splash of vinegar for 15 minutes before using.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a turnip and a rutabaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are related but not the same vegetable. Turnip (Brassica rapa) is smaller, with white-and-purple skin and a peppery bite. Rutabaga (Brassica napus) is a hybrid of turnip and cabbage — larger, with yellow-and-purple skin often coated in wax, denser flesh, and a sweeter, milder flavor. Both work in soups and roasts, but rutabaga takes longer to cook through.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are turnips fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At around 22 calories per 100g cooked, turnip is one of the lightest vegetables you can put on a plate. It does not add weight any more than any food eaten in excess does. The combination of fiber and high water content adds fullness for very few calories. The real risk is what gets added on top — butter, cream, heavy sauces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat turnip greens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and they are nutritious. The greens carry more vitamin K, vitamin C, beta-carotene, and calcium than the root itself. Sautéed with garlic and olive oil, they taste similar to collard or mustard greens. The flavor is more bitter than the root — if you are not into that, simmer them into a broth, where they mellow out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get rid of the bitter taste in turnips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooking is the simplest fix — the longer it cooks, the milder it gets. To eat it raw, soak the slices in water with a bit of vinegar or lemon for 15 to 20 minutes. Roasting mellows the bitterness and brings out natural sweetness. Pairing it with olive oil, butter, or something acidic also helps balance the flavor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can turnips be frozen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with a bit of prep. Freeze it cooked: blanch for 1 minute in boiling water, cool it in ice water, dry it, and freeze in portions. It keeps for 3 to 4 months. Raw does not freeze well — the texture turns mushy once thawed. If you cook soup often, freezing pre-cooked portions is a useful shortcut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are turnips gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Plain, fresh turnip is naturally gluten-free. The only thing to watch is processed products made with turnip — pickles, canned soups, prepared condiments — which can carry cross-contamination risk depending on the facility. Check the label if you have a serious restriction.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Turnip 101: Nutrition, Benefits, and How to Cook It',
  description: 'Turnip is a low-calorie root vegetable with vitamin C and fiber that most people walk past at the store. What it is, its benefits, and how to cook it well.',
  image: 'https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Turnip', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-nabo' },
  ],
}

export default function TurnipEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Turnip</li>
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
            Turnips: The Vegetable Every Grocery Store Has and Nobody Buys
          </h1>
          <p className="blog-desc">
            It sits in the produce aisle of pretty much every grocery store, right next to the carrots, doing nothing to earn a spot in your cart. What turnip actually is, what it does for you nutritionally, how to cook it without wasting it — and whether it deserves a spot on your list.
          </p>

          <div className="answer-box">
            <p>
              <strong>Turnip</strong> is a root vegetable in the crucifer family — the same family as broccoli, cabbage, and kale.
              It has white-and-purple skin, firm white flesh, and a mildly bitter bite when raw.
              At around 22 calories per 100g cooked, it works well in soups, mash, roasts, and salads.
              It is sold year-round at most grocery stores — and it is one of the most overlooked vegetables on the shelf.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5758690/pexels-photo-5758690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh turnip on a light surface — root vegetable with white-and-purple skin"
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
              <li><a href="#what-is-turnip">What is a turnip</a></li>
              <li><a href="#turnip-vs-rutabaga">Turnip vs. rutabaga: how to tell them apart</a></li>
              <li><a href="#nutrition">What&apos;s actually inside a turnip</a></li>
              <li><a href="#types">Types of turnip you&apos;ll find at the store</a></li>
              <li><a href="#how-to-cook">How to cook turnips</a></li>
              <li><a href="#buy-store">How to buy and store turnips</a></li>
              <li><a href="#worth-it">Is it worth putting on your list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS A TURNIP */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/7988009/pexels-photo-7988009.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assortment of fresh root vegetables on a rustic surface — turnip, carrot, and others"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-is-turnip" className="img-above">What is a turnip</h2>

          <p>
            Turnip (<em>Brassica rapa</em> subsp. <em>rapa</em>) is a root vegetable in the crucifer family.
            Same family as broccoli, kale, cabbage, and radish — a family known for bitterness and heavy nutrition in roughly equal measure.
          </p>
          <p>
            The part you eat is the root: round to slightly oval, white skin at the base, shading into purple at the top where it was exposed to sunlight.
            Inside, it is white, firm, and crisp — similar to a radish, but larger and with a more earthy edge.
          </p>
          <p>
            The flavor shifts a lot depending on how it is cooked. Raw, it is sharp and peppery. Cooked, it mellows out.
            Roasted, it turns almost sweet, with edges that caramelize. Heat is what turns this vegetable from something people avoid into something people ask for seconds of.
          </p>
          <p>
            The greens are edible too, and this is where things get regional. In Southern US cooking, turnip greens are a staple — simmered low and slow, often with ham hock or bacon, and served alongside cornbread. Most home cooks outside that tradition throw them straight in the trash without a second thought.
          </p>
          <p>
            Turnip is not the same thing as rutabaga, even though the two get mixed up constantly at the store and on menus. That mix-up is common enough that it deserves its own section — next.
          </p>

          {/* TURNIP VS RUTABAGA */}
          <h2 id="turnip-vs-rutabaga">Turnip vs. rutabaga: how to tell them apart</h2>

          <p>
            If you have ever grabbed what you thought was a turnip and ended up with something bigger, waxier, and sweeter, you already know the confusion is real. Here is the actual difference.
          </p>
          <p>
            Turnip (<em>Brassica rapa</em>) has been cultivated in Europe since at least 600 BC. It is smaller, with white skin that turns purple near the top, and a mild-radish, slightly peppery flavor.
          </p>
          <p>
            Rutabaga (<em>Brassica napus</em>) is actually a hybrid — a natural cross between turnip and cabbage first documented in Bohemia in 1620. It is larger, denser, with yellow-and-purple skin usually coated in food-grade wax to survive shipping, golden flesh, and a milder, slightly sweet flavor.
          </p>
          <p>
            In the kitchen, they are largely interchangeable in soups, stews, and roasts. The main practical difference is cook time — rutabaga is denser and takes longer to soften. If a recipe calls for one and you only have the other, swap it, just adjust the timing.
          </p>
          <p>
            There is a third lookalike worth mentioning: daikon, sometimes called Japanese or Chinese radish. It is not a turnip or a rutabaga at all — it is a different species (<em>Raphanus sativus</em>), long, entirely white, with a much milder flavor. It shows up in Asian cooking, pickles, and salads, and it is a good entry point if you tried regular turnip and found it too sharp.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What&apos;s actually inside a turnip</h2>

          <p>
            100g of cooked turnip has roughly:
          </p>
          <ul className="item-list">
            <li><strong>22 kcal</strong></li>
            <li><strong>5g</strong> carbohydrates</li>
            <li><strong>1.8g</strong> fiber</li>
            <li><strong>12mg</strong> vitamin C (about 13% of daily value)</li>
            <li><strong>191mg</strong> potassium</li>
            <li><strong>9mcg</strong> folate</li>
          </ul>
          <p>
            Low in calories, decent in fiber, a solid source of vitamin C and potassium.
            Nothing dramatic — it is an ordinary vegetable, not a superfood.
            But for a light, nutrient-dense soup or mash, it is a genuinely good option.
          </p>
          <p>
            The greens outdo the root on several nutrients: more vitamin K, vitamin C, beta-carotene, and calcium.
            If you buy a turnip with the greens still attached, use them. Sautéed with garlic, they hold their own.
            Throwing them out means tossing free nutrition that already came bundled with the purchase.
          </p>
          <p>
            An honest note: these numbers are estimates based on USDA FoodData Central and comparable nutrition databases.
            Actual values shift with size, variety, and how it was cooked.
          </p>

          {/* TYPES */}
          <h2 id="types">Types of turnip you&apos;ll find at the store</h2>

          <p>
            At most grocery stores, you will run into a couple of variations on the same vegetable:
          </p>

          <h3>Standard turnip (<em>Brassica rapa</em>)</h3>
          <p>
            The purple-top, white-bottom turnip most people picture when they hear the word.
            Apple-sized, mildly bitter raw, mellow when cooked. Works in soup, mash, stew, and roasts.
            It is the cheapest and easiest to find, sold loose or in small bags year-round.
          </p>

          <h3>Baby or salad turnips</h3>
          <p>
            Smaller, sweeter, more tender — often sold in bunches with the greens still attached at farmers markets.
            These are the ones worth eating raw: thin slices with a bit of olive oil and salt, no cooking required.
            If regular turnip put you off in the past, this is the version to try before giving up on the vegetable entirely.
          </p>

          <h3>Rutabaga and daikon</h3>
          <p>
            Not technically turnips, but close enough in use that they are worth knowing about — see the comparison section above for the full breakdown. Rutabaga works anywhere turnip does, just with a longer cook time. Daikon is milder and shows up more in Asian dishes and quick pickles.
          </p>

          {/* HOW TO COOK */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Assorted vegetables at a produce stand — carrots, beets, and fresh root vegetables"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="how-to-cook" className="img-above">How to cook turnips</h2>

          <p>
            Turnip is versatile. The most common mistake is trying it raw with zero prep and deciding you do not like it.
            Raw is the sharpest version of this vegetable. With heat, it turns into something else entirely.
          </p>

          <h3>Raw — in salads</h3>
          <p>
            Thinly sliced or grated, turnip works well raw in a salad.
            The bitterness is more present here. Pair it with something acidic — vinegar, lemon — to balance it out.
            A useful trick: soak the slices in water with a squeeze of lemon or a splash of vinegar for 15 minutes before using.
            The bitterness drops noticeably.
          </p>

          <h3>Cooked — in soups and broths</h3>
          <p>
            The most common use, and the easiest way to win someone over. In soups, broths, and stews, turnip mellows and soaks up whatever the broth is seasoned with.
            Cut into medium cubes and add it alongside carrots, potatoes, and celery.
            Turnip cooks a bit faster than potato, so add it a little later if you want matching textures.
          </p>

          <h3>Roasted — the version that converts skeptics</h3>
          <p>
            Cubed turnip, olive oil, salt, and rosemary. 425°F (220°C) for 25 to 30 minutes.
            The edges turn golden and slightly caramelized. The flavor sweetens.
            This is the version that wins over anyone who tried it raw and wrote it off.
            Good alongside roast chicken or as part of a mixed roasted-vegetable tray.
          </p>

          <h3>Mashed — lighter than potato</h3>
          <p>
            Cook the turnip until soft, then mash or process with butter, salt, and pepper.
            The result is close to mashed potato, but lighter.
            A combination that works well: half potato, half turnip.
            Creamier texture, fewer calories per serving.
          </p>

          <h3>Quick-pickled</h3>
          <p>
            Thin slices in a brine of water, vinegar, and salt are ready in 24 hours in the fridge.
            Good alongside grilled meat, in place of a standard dill pickle.
            Keeps for up to 2 weeks in a sealed jar in the fridge.
          </p>

          <div className="blog-inline-cta">
            <p>Less deciding what to cook. <em>Mise handles that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* BUY AND STORE */}
          <h2 id="buy-store">How to buy and store turnips</h2>

          <h3>At the store</h3>
          <ul className="item-list">
            <li><strong>Firm root</strong> — no soft or wrinkled spots to the touch</li>
            <li><strong>Skin without dark blemishes</strong> or visible mold</li>
            <li><strong>Medium size</strong> (about apple-sized) — smaller ones tend to taste milder</li>
            <li><strong>Fresh, green tops</strong> if attached signal a recent harvest — yellowed leaves mean it has been sitting a while</li>
          </ul>
          <p>
            Go smaller when you plan to eat it raw. Larger turnips do better cooked or roasted.
          </p>

          <h3>How to store it</h3>
          <p>
            Without the greens, turnip keeps for 1 to 2 weeks in the crisper drawer.
            With the greens attached, store the root and the leaves separately — the greens wilt faster than the root spoils.
            Cut and stored in a sealed container, it lasts 3 to 4 days.
          </p>
          <p>
            To freeze: cook it, blanch briefly (1 minute in boiling water, then straight into ice water), dry it well, and freeze in portions.
            It keeps for 3 to 4 months. Raw does not freeze well — the texture turns mushy once thawed.
          </p>
          <p>
            If you keep track of what&apos;s in your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            before heading to the store, turnip is an ingredient that slips out of memory fast — easy to forget you have it, easy to let it go soft in the back of the drawer.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth putting on your list</h2>

          <p>Depends on what you&apos;re actually trying to solve.</p>
          <p>
            If you want to add a cheap vegetable with a different flavor profile to your weekly soup rotation, turnip is a solid pick.
            Cheap, available year-round, and it makes a broth taste more interesting than carrot and potato alone.
            A pound of turnip typically runs $1 to $2 at most grocery stores — at that price, it costs almost nothing to try.
          </p>
          <p>
            If you have never cooked with it and have no plan for it yet, the risk is buying it, letting it sit, and tossing it.
            Before adding it to your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>,
            have a use in mind — even something as simple as &quot;goes in Wednesday&apos;s soup.&quot;
            A new ingredient only sticks in the rotation when it has a destination before the purchase.
          </p>
          <p>
            Turnip also makes sense if you want to cut calories without cutting the volume on your plate.
            Swapping half the potatoes in a stew for turnip cuts calories without cutting how full the dish feels.
            Not a diet promise — just vegetable math.
          </p>
          <p>
            It is not a pantry staple. But if you cook soup regularly or want more variety in your weekly rotation, turnip earns a spot in the cart at least once a month.
          </p>
          <p>
            It has been sitting there in the produce aisle every week you have shopped. You just never looked twice.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about turnip</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is turnip a fruit or a vegetable?</p>
              <p className="faq-a">
                Vegetable — technically, the taproot of a herbaceous plant. Fruit is the reproductive part of a plant, where the seeds sit. Turnip is the root, which the plant uses to store energy. In the kitchen, it belongs with carrots, beets, and potatoes.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat turnip raw?</p>
              <p className="faq-a">
                Yes. Raw turnip has a sharper, peppery bite and a crisp texture similar to radish. Thinly sliced or grated, it works well in a salad. If the bitterness bothers you, soak the slices in water with lemon juice for 15 minutes before using.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What is the difference between a turnip and a rutabaga?</p>
              <p className="faq-a">
                They are related but different vegetables. Turnip is smaller, with white-and-purple skin and a peppery bite. Rutabaga is a hybrid of turnip and cabbage — larger, waxier, denser, and sweeter. Both work well cooked, but rutabaga takes longer to soften.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are turnips fattening?</p>
              <p className="faq-a">
                At around 22 calories per 100g cooked, turnip is one of the lightest vegetables you can eat. It does not add weight any more than anything eaten in excess does. Fiber and water content add fullness for very few calories. The risk is what gets added on top — butter, cream, heavy sauces.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you eat turnip greens?</p>
              <p className="faq-a">
                Yes — and they are nutritious. The greens carry more vitamin K, vitamin C, beta-carotene, and calcium than the root. Sautéed with garlic and olive oil, they taste close to collard greens. The flavor is more bitter than the root — simmered into a broth, they mellow out.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you get rid of the bitter taste in turnips?</p>
              <p className="faq-a">
                Cooking is the simplest fix — the longer it cooks, the milder it gets. To eat it raw, soak the slices in water with vinegar or lemon for 15 to 20 minutes. Roasting mellows the bitterness and adds natural sweetness. Pairing it with olive oil, butter, or something acidic helps balance it too.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can turnips be frozen?</p>
              <p className="faq-a">
                Yes, with some prep. Freeze it cooked: blanch for 1 minute in boiling water, cool it in ice water, dry it, and freeze in portions. It keeps for 3 to 4 months. Raw does not freeze well — it turns mushy once thawed. If you cook soup often, freezing pre-cooked turnip is a useful shortcut.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are turnips gluten-free?</p>
              <p className="faq-a">
                Yes. Plain, fresh turnip is naturally gluten-free. Watch out for processed products made with turnip — pickles, canned soups — which can carry cross-contamination risk depending on the facility. Check the label if you have a serious restriction.
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
                Creator of Mise. Has walked past the turnip bin at the grocery store every week since forever. Finally grabbed one this week — mostly out of guilt.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Soup&apos;s sorted. List&apos;s done.<br />
              <em>Let Mise handle the rest.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place.
              You know what&apos;s in the fridge — so the turnip doesn&apos;t disappear, forgotten, in the crisper drawer.
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
