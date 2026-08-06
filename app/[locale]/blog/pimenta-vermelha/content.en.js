import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Types of Red Peppers: Heat Levels, Uses, and Benefits',
  description: 'Red peppers range from sweet bell peppers to fiery habaneros. See the types, heat levels, nutrition, and how to use each one in the kitchen.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
      en: 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha',
      es: 'https://www.miseemcasa.com.br/es/blog/pimenta-vermelha',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/pimenta-vermelha',
    },
  },
  openGraph: {
    title: 'Types of Red Peppers: Heat Levels, Uses, and Benefits',
    description: 'Red peppers range from sweet bell peppers to fiery habaneros. See the types, heat levels, nutrition, and how to use each one in the kitchen.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha',
    images: [
      {
        url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh red bell peppers on a wooden board — ripe red pepper varieties',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Types of Red Peppers: Heat Levels, Uses, and Benefits',
    description: 'Red peppers range from sweet bell peppers to fiery habaneros. See the types, heat levels, nutrition, and how to use each one in the kitchen.',
    images: ['https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between a chili pepper and a bell pepper?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bell pepper is a specific type of red pepper — a mature capsicum annuum with no heat, large and fleshy. "Red pepper" is the general name for any ripe fruit of the Capsicum genus that has turned red. That covers everything from sweet bell peppers to hot varieties like habanero, jalapeño, and cayenne. The red color signals full ripeness in every case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are spicy peppers bad for your stomach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hot peppers with capsaicin can irritate the stomach lining in people with gastritis, ulcers, or a sensitive gut. Bell peppers, which have no capsaicin, rarely cause any stomach issues. If you have a history of stomach problems, start with small amounts of the hot varieties and see how you tolerate them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which red pepper is the hottest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Among common varieties: habanero and cayenne are the hottest, with high capsaicin concentration. Red jalapeño lands in the middle. Sweet mini peppers (cherry peppers) have very mild heat. Bell peppers have no heat at all — zero capsaicin. The Scoville scale measures the capsaicin concentration of each variety.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cayenne pepper the same thing as red pepper flakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Cayenne is a specific type of red pepper — a long, thin, very hot variety usually sold dried and ground into a fine powder. Red pepper flakes (crushed red pepper) are a coarser blend of dried chilies, seeds included, and often milder and more textured than pure cayenne. Both come from red peppers, but they're processed and used differently.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do red peppers have more vitamin C than oranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red bell peppers do. 100g of raw red bell pepper has about 190mg of vitamin C — nearly four times more than the same amount of orange (53mg). Heat destroys some vitamin C, so raw or lightly cooked bell pepper gets you the most of this nutrient.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store red peppers at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fresh bell peppers: in the fridge crisper drawer, they last 1 to 2 weeks. Once cut, use within 3 to 4 days. Fresh hot peppers (jalapeño, habanero): fridge in a bag or container, 1 to 2 weeks. Dried peppers (crushed red pepper, ground cayenne): sealed container away from light and moisture, lasts months. Fresh peppers can be frozen — they lose some texture but keep the heat.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Types of Red Peppers: Heat Levels, Uses, and Benefits',
  description: 'Red peppers range from sweet bell peppers to fiery habaneros. See the types, heat levels, nutrition, and how to use each one in the kitchen.',
  image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Red Peppers', item: 'https://www.miseemcasa.com.br/en/blog/pimenta-vermelha' },
  ],
}

export default function RedPeppersEn() {
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
            <li className="breadcrumb-current" aria-current="page">Red Peppers</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-06">Aug 6, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Red Peppers, Explained: From Sweet Bell to Blazing Habanero
          </h1>
          <p className="blog-desc">
            "Red pepper" sounds simple until you're standing in the produce aisle choosing between bell pepper, jalapeño, cayenne, and habanero. They're related plants with completely different heat, flavor, and uses. Here's the map.
          </p>

          <div className="answer-box">
            <p>
              <strong>Red pepper</strong> is the general name for any ripe fruit of the <em>Capsicum</em> genus that has turned red.
              That covers everything from sweet bell peppers (zero heat) to habanero and cayenne (very hot).
              What determines the heat is <strong>capsaicin</strong> — and it's also behind most of the documented nutritional benefits.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Fresh red bell peppers on a wooden board — ripe red pepper varieties"
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
              <li><a href="#what-are-red-peppers">What red peppers are</a></li>
              <li><a href="#types">Types of red peppers</a></li>
              <li><a href="#benefits">Benefits of capsaicin</a></li>
              <li><a href="#nutrition">Nutritional value</a></li>
              <li><a href="#how-to-use">How to use them in the kitchen</a></li>
              <li><a href="#paprika">Red pepper vs paprika</a></li>
              <li><a href="#worth-it">Worth keeping on the list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT ARE RED PEPPERS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh and dried red pepper varieties side by side — jalapeño, cayenne, and habanero"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="what-are-red-peppers" className="img-above">What red peppers are</h2>

          <p>
            "Red pepper" isn't one species. It's a color.
          </p>
          <p>
            When a green bell pepper stays on the plant long enough, it ripens. It moves through yellow, through orange, and lands on red. The same thing happens to jalapeños, habaneros, and cayenne peppers — all of them start green and turn red once fully mature.
          </p>
          <p>
            What changes along the way: more sugar, more vitamin C, more lycopene, more color. That's why a red bell pepper tastes sweeter than a green one. It's also why it costs more — it spent longer on the plant before harvest.
          </p>
          <p>
            The distinction that actually matters in the kitchen isn't the color — it's capsaicin. Bell peppers have none: eat as much as you want. Habanero and cayenne carry high concentrations, with heat ranging from "noticed it" to "water isn't helping."
          </p>

          {/* TYPES */}
          <h2 id="types">Types of red peppers</h2>

          <p>
            Peppers come in hundreds of varieties worldwide — from mild bell peppers to some of the hottest things you can legally put in a pot. Here's what you'll actually run into at the grocery store and in recipes:
          </p>

          <h3>Red bell pepper</h3>
          <p>
            The most common and easiest to cook with. Large, fleshy, no heat at all. Sweet flavor with a subtle umami edge. Excellent sautéed, stuffed, roasted, or eaten raw in a salad. It's the same plant as a green bell pepper — just left on the vine longer, with a completely different flavor to show for it.
          </p>

          <h3>Red jalapeño</h3>
          <p>
            Usually sold green, jalapeños turn red and slightly sweeter as they fully ripen, without losing much of their kick. Medium heat — noticeable, but manageable for most people. One of the most versatile chilies around: works in salsa, marinades, sauces, and pickles.
          </p>

          <h3>Habanero</h3>
          <p>
            Small, lantern-shaped, seriously hot. It's the base heat behind most Caribbean and Yucatán hot sauces. Use sparingly — one whole habanero in a pot of sauce for four people already makes a difference. Very popular pickled in oil with garlic.
          </p>

          <h3>Cayenne pepper</h3>
          <p>
            Almost always sold dried and ground into a fine powder. High capsaicin concentration — a pinch changes the whole profile of a dish. Used worldwide in hot sauces, spice blends, and as the base for hot paprika. In the US, it shows up in Cajun seasoning and bottled hot sauces.
          </p>

          <h3>Crushed red pepper flakes</h3>
          <p>
            The pizza-shop shaker. Dried red peppers crushed into coarse flakes, seeds included — that's where most of the heat concentrates. Heat ranges from moderate to sharp depending on the blend. Keeps for months in a sealed jar and lives in the spice rack of anyone who cooks pasta, pizza, or eggs.
          </p>

          <h3>Sweet mini peppers (cherry peppers)</h3>
          <p>
            Small, red, round or slightly pointed. Very mild heat — almost sweet. Popular eaten straight as a snack, pickled in oil, or as an appetizer. One of the few hot-pepper-adjacent foods kids will actually eat. Complex flavor without the burn of the others.
          </p>

          {/* BENEFITS */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/2893534/pexels-photo-2893534.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Fresh red peppers in a wicker basket — capsaicin and nutrients in red peppers"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels</p>
          </div>

          <h2 id="benefits" className="img-above">Benefits of capsaicin</h2>

          <p>
            Capsaicin is the bioactive compound behind the burn in hot peppers. It's also where most of the documented nutritional benefits live.
          </p>

          <h3>Metabolism</h3>
          <p>
            Capsaicin temporarily raises body temperature and energy expenditure — a process called thermogenesis. The effect is real but modest: a spicy meal doesn't replace exercise. It works as a complement inside a varied, regular diet.
          </p>

          <h3>Cardiovascular health</h3>
          <p>
            Studies link regular capsaicin intake to lower LDL cholesterol and triglycerides. Capsaicin also has a vasodilating effect — it widens blood vessels, which improves circulation and may reduce clotting risk.
          </p>

          <h3>Anti-inflammatory action</h3>
          <p>
            Capsaicin, along with flavonoids and phenolic compounds in peppers, has documented anti-inflammatory properties. Used topically (creams and gels), capsaicin treats muscle and joint pain — it works by "tiring out" the local pain receptors over repeated use.
          </p>

          <h3>Vitamin C and immunity</h3>
          <p>
            Red bell peppers carry one of the highest vitamin C concentrations of any common food. Vitamin C is essential for producing and maintaining the cells your immune system relies on. A ripe red bell pepper has more vitamin C than a green one — ripening increases the nutrient content.
          </p>

          <p>
            An honest note: peppers aren't medicine. The benefits show up with regular, moderate consumption inside a varied diet. One spicy meal changes nothing — and overdoing the hot varieties can irritate your stomach.
          </p>

          {/* NUTRITION */}
          <h2 id="nutrition">Nutritional value</h2>

          <p>
            The numbers vary a lot between bell peppers (sweet, fleshy) and hot chilies (concentrated in capsaicin, eaten in tiny amounts). The table below uses red bell pepper as the reference — the most commonly eaten red pepper, according to{' '}
            <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener">USDA FoodData Central</a>:
          </p>

          <ul className="item-list">
            <li><strong>Calories:</strong> ~31 kcal per 100g</li>
            <li><strong>Carbs:</strong> ~6g per 100g</li>
            <li><strong>Vitamin C:</strong> ~190mg per 100g — well over 200% of the recommended daily intake</li>
            <li><strong>Lycopene and beta-carotene:</strong> the pigments behind the red color, with antioxidant activity</li>
            <li><strong>Potassium:</strong> ~211mg per 100g</li>
            <li><strong>Fiber:</strong> ~2g per 100g</li>
          </ul>

          <p>
            For direct comparison: 100g of orange has around 53mg of vitamin C. Red bell pepper has nearly four times that — with fewer calories. That's not an argument for swapping fruit for bell pepper, but it's a number that surprises most people the first time they see it.
          </p>
          <p>
            Dried hot peppers have a different profile: more concentrated and calorie-dense by weight, but eaten in much smaller amounts. A teaspoon of crushed red pepper flakes has far less vitamin C than 100g of bell pepper — but far more capsaicin. They're ingredients doing different jobs on the plate.
          </p>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use red peppers in the kitchen</h2>

          <p>
            Each type of red pepper has its place. Using the wrong one in a recipe gives you the wrong result — and that's not a technique problem, it's just not knowing the ingredient.
          </p>

          <h3>Red bell pepper</h3>
          <p>
            Charred directly over an open flame and peeled, it turns into a rich sauce base. Sautéed with onion and garlic, it's the backbone of countless dishes worldwide. Raw in strips, it works in salads and as a snack. Stuffed with rice and meat, it's a full meal with very little effort.
          </p>

          <h3>Red jalapeño</h3>
          <p>
            Remove the seeds and inner membrane to cut the heat — leave them in and it gets noticeably spicier. Works well diced fine in marinades, salsas, and as a topping for rice or tacos. Less is more: start with half a pepper and adjust as you cook.
          </p>

          <h3>Habanero</h3>
          <p>
            Pickled in oil with garlic, it mellows out over weeks and just keeps getting better. One whole habanero simmered in a pot of beans adds flavor without becoming unbearable — fish it out before serving if you want the flavor without the full heat. For serious heat, chop it fine and add it right at the end.
          </p>

          <h3>Crushed red pepper flakes</h3>
          <p>
            The easiest heat to keep on hand. A pinch on scrambled eggs, in garlic pasta, on homemade pizza — a noticeable difference for zero effort. No cooking required: it goes on right at the end.
          </p>

          <h3>Ground cayenne</h3>
          <p>
            Swaps in for pepper flakes with more even heat and less visible texture. Good for sauces, marinades, and recipes where you don't want flecks showing. Careful: cayenne is more intense than flakes — use less than you'd use of flakes.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* PAPRIKA */}
          <h2 id="paprika">Red pepper vs paprika: what's the difference</h2>

          <p>
            Paprika comes from red peppers. It's dried, ground pepper — usually red bell pepper or mild capsicum varieties.
          </p>
          <p>
            The difference is in the processing and the variety used:
          </p>

          <ul className="item-list">
            <li><strong>Sweet paprika:</strong> dried, ground red bell pepper, no heat. Deep color, mild and slightly sweet flavor.</li>
            <li><strong>Smoked paprika:</strong> peppers smoked before grinding. Complex, slightly bitter flavor. The backbone of many Spanish and Hungarian dishes.</li>
            <li><strong>Hot paprika:</strong> made with a hotter pepper mixed in. Has real heat, closer to crushed red pepper flakes.</li>
          </ul>

          <p>
            In practice: paprika doesn't substitute for chili powder in recipes that need real heat, and it doesn't go the other way either. They're different ingredients doing different jobs. Smoked paprika and crushed red pepper flakes are complementary, not interchangeable.
          </p>
          <p>
            A well-stocked pantry has both: sweet paprika for color and background flavor, crushed red pepper for a hit of heat when you need it. Same logic as keeping both oregano and thyme — related, but not the same job on the plate.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Worth keeping on the list</h2>

          <p>
            Depends on which red pepper you're putting on the list.
          </p>
          <p>
            <strong>Red bell pepper:</strong> yes, it's a basic shopping list item. It's part of the aromatic base in countless dishes worldwide. Versatile enough to work in stir-fries, salads, stuffing, and sauces. Reasonably priced. Anyone who cooks regularly will use it before it goes bad.
          </p>
          <p>
            <strong>Crushed red pepper flakes and ground cayenne:</strong> buy once, they last months in the{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>.
            These are finishing spices — you use a little at a time. Worth having even if you don't cook with heat every week. Sealed, away from light and moisture: six months without losing quality. The kind of ingredient you only notice is missing halfway through a recipe.
          </p>
          <p>
            <strong>Fresh hot peppers (jalapeño, habanero):</strong> buy as needed. They don't hold up in the pantry — a week in the fridge, two at most. If you've got a specific dish that calls for one, buy it the week you're actually making it.
          </p>
          <p>
            A homemade pickle — habanero or jalapeño in oil with garlic — is the middle-ground solution for your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>. Buy a batch when peppers are cheap, pickle them, and you've got heat for months. The oil picks up the flavor and works great on its own too.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about red peppers</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What's the difference between a chili pepper and a bell pepper?</p>
              <p className="faq-a">
                A bell pepper is a type of red pepper — a mature capsicum annuum with no heat, large and fleshy. "Red pepper" is the general name for any ripe fruit of the Capsicum genus that has turned red, including hot varieties like habanero, jalapeño, and cayenne.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Are spicy peppers bad for your stomach?</p>
              <p className="faq-a">
                Hot peppers with capsaicin can irritate the stomach lining in people with gastritis or a sensitive gut. Bell peppers, with no capsaicin, rarely cause problems. If you have a history of stomach issues, start with small amounts of the hot varieties.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Which red pepper is the hottest?</p>
              <p className="faq-a">
                Among common varieties: habanero and cayenne are the hottest. Red jalapeño lands in the middle. Sweet mini peppers have very mild heat. Bell peppers have no heat at all. The Scoville scale measures the capsaicin concentration of each variety.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is cayenne pepper the same thing as red pepper flakes?</p>
              <p className="faq-a">
                No. Cayenne is a specific type of red pepper — a long, thin, very hot variety usually sold dried and ground into fine powder. Red pepper flakes are a coarser blend of dried chilies with seeds, and often milder. Both come from red peppers but are processed differently.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do red peppers have more vitamin C than oranges?</p>
              <p className="faq-a">
                Red bell peppers do. 100g of raw red bell pepper has about 190mg of vitamin C — nearly four times more than the same amount of orange (53mg). Heat destroys some vitamin C, so raw or lightly cooked bell pepper gets you the most of it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store red peppers at home?</p>
              <p className="faq-a">
                Fresh bell peppers keep 1 to 2 weeks in the fridge crisper. Fresh hot peppers (jalapeño, habanero): fridge, 1 to 2 weeks. Dried peppers (crushed red pepper, ground cayenne): sealed container away from light, lasts months. Fresh peppers can be frozen — they lose some texture but keep the heat.
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
                Creator of Mise. Added a whole habanero to the bean pot without warning anyone. Family verdict: technically edible.
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
              You buy what you&apos;ll actually use — and the crushed red pepper doesn&apos;t disappear in the back of the cabinet without you noticing.
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
