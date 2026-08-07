import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'What Is Tahini? Sesame Paste, White vs Black, How to Use It',
  description: 'Tahini is a paste made from ground sesame seeds. See white vs black tahini, how to store it after opening, and how to use it beyond hummus.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-tahine',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-tahine',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-tahine',
    },
  },
  openGraph: {
    title: 'What Is Tahini? Sesame Paste, White vs Black, How to Use It',
    description: 'Tahini is a paste made from ground sesame seeds. See white vs black tahini, how to store it after opening, and how to use it beyond hummus.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine',
    images: [
      {
        url: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Bowls of creamy hummus with olive oil and herbs — tahini is the base ingredient',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Tahini? Sesame Paste, White vs Black, How to Use It',
    description: 'Tahini is a paste made from ground sesame seeds. See white vs black tahini, how to store it after opening, and how to use it beyond hummus.',
    images: ['https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is tahini the same as sesame paste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tahini and sesame paste are the same product — just two names for it. "Tahini" comes from the Arabic "tahini" (طحينة), and you will see both terms on labels and in recipes. There is no practical difference between the two.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between white and black tahini?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'White tahini is made from hulled sesame seeds — milder flavor, lighter color, thinner texture. Black tahini uses unhulled seeds, which makes the paste darker with a stronger, slightly bitter flavor. White is the standard choice for hummus and most sauces. Black shows up more in Japanese cooking and in baking, where the color is part of the appeal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store tahini after opening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Refrigerated, opened tahini keeps well for 6 to 12 months. The oil that rises to the top is normal — stir it back in before using. Keep the jar sealed between uses. At room temperature, in a cool, dark spot, it holds for a few months, but the fridge is the safer bet, especially once you're past the first few uses.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is tahini gluten-free and dairy-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plain tahini has no gluten and no dairy — it's ground sesame, nothing else. Always check the label, though: some brands process it in facilities that also handle wheat, which can mean cross-contamination. If you're celiac, look for an explicit gluten-free label on the jar.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is tahini fattening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tahini is calorie-dense — about 90 calories per tablespoon (15g), mostly from unsaturated fat. In a reasonable serving (1 to 2 tablespoons per meal), it's a nutrient-dense ingredient. The usual issue is not tracking how much goes into a sauce or dip — tahini disappears into a dressing faster than it looks.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you substitute tahini with something else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the recipe. In sauces and dressings, unsweetened almond or sunflower seed butter works as a stand-in — the flavor shifts, but the texture is close. In hummus, swapping it out changes the result noticeably. In baba ganoush and other Middle Eastern dishes, tahini is central and nothing else matches its profile.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Tahini? Sesame Paste, White vs Black, How to Use It',
  description: 'Tahini is a paste made from ground sesame seeds. See white vs black tahini, how to store it after opening, and how to use it beyond hummus.',
  image: 'https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Tahini', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-tahine' },
  ],
}

export default function TahiniEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Tahini</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">Aug 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            What Tahini Actually Is, and How to Use the Whole Jar
          </h1>
          <p className="blog-desc">
            The sesame paste behind hummus, tucked between the almond butter and the sunflower seed butter at the store. What tahini really is, why the oil separates, the difference between white and black — and what to do with it once hummus season is over.
          </p>

          <div className="answer-box">
            <p>
              <strong>Tahini</strong> is a paste made from ground sesame seeds — nothing else added. The result is a dense, slightly bitter cream with a toasted, nutty smell. It is the base ingredient in hummus, baba ganoush, and a long list of Middle Eastern and Mediterranean sauces. You will also see it labeled "sesame paste" — same product, different name.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/6252678/pexels-photo-6252678.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Bowls of creamy hummus with olive oil and herbs — tahini is the base ingredient"
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
              <li><a href="#what-is-tahini">What tahini is</a></li>
              <li><a href="#how-its-made">How tahini is made</a></li>
              <li><a href="#white-vs-black">White tahini vs black tahini</a></li>
              <li><a href="#nutrition">What&apos;s inside: the nutrition</a></li>
              <li><a href="#how-to-use">How to cook with tahini</a></li>
              <li><a href="#how-to-store">How to store it so it lasts</a></li>
              <li><a href="#worth-it">Is it worth keeping in the pantry</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS TAHINI */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5755536/pexels-photo-5755536.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="White sesame seeds in a small wooden bowl — the raw ingredient behind tahini"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Eva Bronzini / Pexels</p>
          </div>

          <h2 id="what-is-tahini" className="img-above">What tahini is</h2>

          <p>
            Tahini is ground sesame seeds, lightly toasted first, then blended into a dense paste. The flavor is earthy and a little bitter, with that unmistakable toasted-sesame edge you recognize the moment it hits your tongue.
          </p>
          <p>
            The name comes from the Arabic "tahini" (طحينة). In English you will see it spelled "tahini" or, on some labels, listed simply as "sesame paste." Same product either way — no meaningful difference in the jar.
          </p>
          <p>
            Middle Eastern kitchens have used it for centuries. It is the backbone of hummus (chickpeas, tahini, lemon, garlic), of baba ganoush (roasted eggplant, tahini), and of ful medames. The global hummus boom of the last decade is largely why tahini now sits on regular grocery shelves instead of only at specialty Middle Eastern markets.
          </p>

          {/* HOW ITS MADE */}
          <h2 id="how-its-made">How tahini is made — and why the oil separates</h2>

          <p>
            The process is simple. Sesame seeds get a light toast, then go through an industrial grinder until they turn into paste. No additives, no preservatives, and most versions skip the salt entirely. One ingredient: sesame.
          </p>
          <p>
            The oil that rises to the top of the jar is completely normal — it is the sesame's own oil separating from the solids, not a sign anything went wrong. A lot of people toss a full jar because of this. Stir it back in with a spoon and it is ready to go. It is harder to mix when the jar is full; once you have used some, it gets easier.
          </p>
          <p>
            Good tahini has a smooth, even texture once stirred, a beige color (for the white kind), and a clean toasted-sesame smell. Grainy texture or a rancid smell means the jar is old or was stored badly.
          </p>

          {/* WHITE VS BLACK */}
          <h2 id="white-vs-black">White tahini vs black tahini</h2>

          <p>
            Two versions show up regularly on shelves and in recipes.
          </p>

          <h3>White tahini</h3>
          <p>
            Made from hulled sesame seeds — the outer husk removed before grinding. Milder flavor, lighter color, thinner texture. This is the standard for hummus, sauces, and any recipe that needs a neutral base flavor. If a recipe just says "tahini" with no qualifier, it means white.
          </p>

          <h3>Black tahini (or whole tahini)</h3>
          <p>
            Made from unhulled sesame seeds, which gives it a dark color and a more intense, slightly bitter flavor. It shows up more often in Japanese cooking — miso-based sauces, dressings, some ramen toppings — and in baking, where the dark color is part of the appeal. Harder to find and usually pricier. Not the first jar to buy if you are new to tahini.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">What&apos;s inside: the nutrition</h2>

          <p>
            Two tablespoons of white tahini (30g) has roughly 170 calories, 5g of protein, 15g of fat, and 6g of carbohydrate. Most of that fat is unsaturated — the same profile as olive oil.
          </p>
          <p>
            Tahini is a solid source of calcium, iron, vitamin E, and B-vitamins, especially B1. It also carries a fair amount of copper, which helps the body absorb iron. Whole (unhulled) tahini has even more minerals than the white version, since part of the nutrient content sits in the hull that gets removed.
          </p>
          <p>
            For anyone cutting back on dairy but still tracking calcium, tahini is one of the better plant-based options — not on par with a glass of milk, but notably ahead of most other seed and nut butters. The same goes for its{' '}
            <a href="/en/blog/alimentos-ricos-em-proteinas">protein content</a>
            {' '}— not high like eggs or chicken, but 5g per tablespoon is solid for a paste.
          </p>
          <p>
            One thing worth flagging: tahini is calorie-dense. Two tablespoons run about 170 calories, and the amount you use in a sauce or a bowl of hummus adds up fast without you noticing. Nutritious, yes — but not something to pour without paying attention to the amount.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6419747/pexels-photo-6419747.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="A variety of hummus in small bowls with different toppings — tahini in several forms"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to cook with tahini</h2>

          <h3>In hummus</h3>
          <p>
            The signature recipe. 400g cooked chickpeas, 3 tablespoons tahini, juice of half a lemon, 1 garlic clove, and salt. Blend in a food processor or blender, then adjust the lemon and salt to taste. Tahini is what gives hummus its creaminess and background flavor — skip it, and what you have is chickpea purée, not hummus.
          </p>

          <h3>As a sauce</h3>
          <p>
            The most versatile combination: tahini, lemon juice, water, and salt. Whisk until smooth, adding water gradually to hit the right consistency. It goes over falafel, roasted vegetables, grilled chicken, grain salads. Add garlic and parsley if you want more depth. It takes two minutes to make and changes the whole plate.
          </p>

          <h3>In baba ganoush</h3>
          <p>
            Whole eggplant, roasted in the oven or charred directly over a flame, peeled and mashed with tahini, garlic, and lemon. Keep it a little chunky — it does not need to be perfectly smooth. Works as a starter, a side, or a dip for pita and raw vegetables.
          </p>

          <h3>In desserts and at breakfast</h3>
          <p>
            Tahini with honey is a simple pairing that works well — over yogurt, on toast, on vanilla ice cream. The honey's sweetness balances the sesame's bitterness. In cookies and brownies, it can replace part of the butter and adds a distinct flavor. A spoonful of tahini and honey with a pinch of salt over a bowl of yogurt and fruit makes for an easy, different breakfast.
          </p>

          <div className="blog-inline-cta">
            <p>Knowing what&apos;s already in the pantry changes the whole shopping list. <em>Mise handles that part.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store tahini so it lasts</h2>

          <p>
            Tahini is mostly oil, which is exactly why storage matters more here than with a jar of jam.
          </p>

          <h3>In the fridge</h3>
          <p>
            The safest option once opened. Sealed and refrigerated, tahini keeps its quality for 6 to 12 months. It will thicken slightly in the cold — a few seconds at room temperature or a quick stir loosens it back up.
          </p>

          <h3>At room temperature</h3>
          <p>
            Fine for a few months if kept in a cool, dark cupboard, away from heat and direct light. If you go through a jar quickly — within a month or so — the pantry works. For anything slower than that, move it to the fridge.
          </p>
          <p>
            Either way, always reseal the jar tightly after use, and always stir before measuring. The oil separation on top is normal, not spoilage — it is the same thing that happens with natural peanut butter.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is tahini worth keeping in the pantry</h2>

          <p>If you make hummus at home: yes. Without tahini, hummus is not hummus — it is chickpea purée.</p>
          <p>
            If you want to vary your sauces, the tahini-lemon-water combination is fast, versatile, and unlike anything else in regular rotation. A jar is worth keeping in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {' '}— once opened, it lasts 6 to 12 months in the fridge.
          </p>
          <p>
            If this is your first jar, buy small. Tahini has a distinctive flavor that not everyone likes right away, especially the lingering bitterness. Test it before buying in bulk.
          </p>
          <p>
            It is not a weekly staple the way olive oil or garlic is. But if you cook with chickpeas or eggplant, or you are looking to switch up your sauces, it earns a spot on the{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            {' '}easily enough — and it lasts, so it does not need to be bought often.
          </p>
          <p>
            Tahini in the cabinet for a year, hummus made once. Still worth it.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about tahini</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is tahini the same as sesame paste?</p>
              <p className="faq-a">
                Yes — two names for the same product. "Tahini" comes from the Arabic "tahini." You will see either name on labels; the product inside is identical.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between white and black tahini?</p>
              <p className="faq-a">
                White tahini uses hulled sesame seeds — milder, lighter in color. Black uses unhulled seeds — darker, stronger, more bitter. Use white for hummus and most sauces. Black shows up more in Japanese cooking and baking.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store tahini after opening?</p>
              <p className="faq-a">
                Refrigerated, it keeps for 6 to 12 months. The oil rising to the top is normal — stir before using. Keep it sealed. At room temperature, in a cool spot, it holds for a few months, but the fridge is the safer bet.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is tahini gluten-free and dairy-free?</p>
              <p className="faq-a">
                Plain tahini has no gluten or dairy — just ground sesame. Check the label, though: some brands process it in facilities that also handle wheat. If you&apos;re celiac, look for an explicit gluten-free label.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is tahini fattening?</p>
              <p className="faq-a">
                It&apos;s calorie-dense — about 90 calories per tablespoon (15g), mostly unsaturated fat. In reasonable portions (1 to 2 tablespoons per meal), it&apos;s a nutrient-dense ingredient. The usual issue is not tracking how much goes into a sauce or dip.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you substitute tahini with something else?</p>
              <p className="faq-a">
                Depends on the recipe. In sauces, unsweetened almond or sunflower seed butter works in a pinch — the flavor shifts, but the texture is close. In hummus, the substitution changes the result noticeably. In baba ganoush and similar dishes, tahini has no real substitute.
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
                Creator of Mise. Bought tahini to make hummus once. Made the hummus once. The jar sat in the fridge door until it disappeared on its own by year&apos;s end.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Pantry organized.<br />
              <em>The list writes itself.</em>
            </h2>
            <p>
              Mise connects what&apos;s in your pantry with your shopping list. You buy what you&apos;ll actually use — and the tahini does not go forgotten on a shelf.
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
