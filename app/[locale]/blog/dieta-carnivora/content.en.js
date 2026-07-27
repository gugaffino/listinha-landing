import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Carnivore Diet: What to Eat, 7-Day Menu, and the Risks',
  description: 'The carnivore diet cuts out every plant food and keeps only meat, fish, and eggs. What to eat, what to skip, a 7-day sample menu, and the risks worth knowing first.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/dieta-carnivora',
      en: 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora',
      es: 'https://www.miseemcasa.com.br/es/blog/dieta-carnivora',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/dieta-carnivora',
    },
  },
  openGraph: {
    title: 'Carnivore Diet: What to Eat, 7-Day Menu, and the Risks',
    description: 'The carnivore diet cuts out every plant food and keeps only meat, fish, and eggs. What to eat, what to skip, a 7-day sample menu, and the risks worth knowing first.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora',
    images: [
      {
        url: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Juicy grilled steak with dark sauce on a plate — carnivore diet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnivore Diet: What to Eat, 7-Day Menu, and the Risks',
    description: 'The carnivore diet cuts out every plant food and keeps only meat, fish, and eggs. What to eat, what to skip, a 7-day sample menu, and the risks worth knowing first.',
    images: ['https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the carnivore diet safe long-term?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is not enough long-term research to answer that with confidence. The diet removes fiber and several nutrients found mainly in plants — vitamin C, potassium, and magnesium among them — which is a real concern for dietitians. Anyone planning to stay on it for months needs regular bloodwork and a doctor tracking the numbers, not just how they feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until you see results on the carnivore diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people who report weight loss notice changes in the first 2 to 4 weeks, mostly from dropped water weight and a smaller appetite. More consistent changes in weight and body composition tend to show up after 4 to 8 weeks of strict adherence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to eat organ meat on the carnivore diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, but most people who stick with it long-term end up adding organ meat back in. Muscle meat alone is low in a few nutrients — vitamin C and copper among them — that liver and other organs supply in useful amounts. It is not a requirement on day one, more of a fix once the basics are dialed in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you drink coffee on the carnivore diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coffee is plant-derived, so it sits outside the strict version of the diet. In practice, plenty of people keep it, especially early on — cutting caffeine and carbs at the same time tends to be rough. Where you draw that line is a personal call, not a rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the carnivore diet cause high cholesterol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A high intake of saturated fat can raise LDL in some people. The effect is individual — some report improved lipid markers, others see them get worse. Regular bloodwork is non-negotiable. Anyone with a history of high cholesterol should talk to a doctor before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dairy allowed on the carnivore diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the version. Aged cheese and butter are low in lactose and tolerated by most people following the diet. Milk, cream, and yogurt carry more lactose and get cut by a lot of practitioners, either for digestion reasons or to keep the diet as strict as possible. There is no single official rule — it varies by tolerance.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Carnivore Diet: What to Eat, 7-Day Menu, and the Risks',
  description: 'The carnivore diet cuts out every plant food and keeps only meat, fish, and eggs. What to eat, what to skip, a 7-day sample menu, and the risks worth knowing first.',
  image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carnivore Diet', item: 'https://www.miseemcasa.com.br/en/blog/dieta-carnivora' },
  ],
}

export default function DietaCarnivoraEn() {
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
            <li><a href="/en">Home</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li><a href="/en/blog">Blog</a></li>
            <li aria-hidden="true" className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current" aria-current="page">Carnivore Diet</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-07-27">Jul 27, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Carnivore Diet: The No-Nonsense Guide to Food, Menu, and Risks
          </h1>
          <p className="blog-desc">
            A diet that cuts out everything that is not animal-based. No fruit, no vegetables, no grains. Just meat, eggs, and a bit of dairy. Here is how it works, what you can eat, what is off the table, and what the science actually says about the risks.
          </p>

          <div className="answer-box">
            <p>
              The <strong>carnivore diet</strong> is an eating pattern built entirely around animal foods — meat, fish, eggs, and low-lactose dairy.
              Every plant food is removed: fruit, vegetables, grains, legumes, sugar, and vegetable oils are all off the table.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Juicy grilled steak with dark sauce on a plate — carnivore diet"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Snapwire / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article index">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-it">What the carnivore diet is</a></li>
              <li><a href="#how-it-works">How it works in practice</a></li>
              <li><a href="#what-to-eat">What you can eat</a></li>
              <li><a href="#what-to-cut">What is off the table</a></li>
              <li><a href="#meal-plan">7-day sample menu</a></li>
              <li><a href="#benefits">Reported benefits</a></li>
              <li><a href="#risks">Risks you need to know</a></li>
              <li><a href="#worth-it">Is it worth it?</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* WHAT IS IT */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Grilled bone-in steak served with vegetables and sauce on a rustic plate"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Malidate Van / Pexels</p>
          </div>

          <h2 id="what-is-it" className="img-above">What the carnivore diet is</h2>

          <p>
            The <strong>carnivore diet</strong> is an eating pattern that removes every plant-based food. People who follow it eat exclusively animal products: beef, chicken, pork, fish, seafood, eggs, and some dairy. No fruit, no vegetables, no grains or legumes, no exceptions.
          </p>
          <p>
            It is a more extreme version of a low-carb diet. Keto still leaves room for leafy greens and low-carb vegetables — carnivore removes the entire category. The premise: the body can run fine on protein and fat alone, and a lot of modern health problems trace back to compounds found in plants.
          </p>
          <p>
            The diet's popularity took off over the last several years, driven largely by fitness and health influencers on YouTube and podcasts, with a small but vocal community of practitioners reporting results. It has no backing from mainstream nutrition guidelines, and most registered dietitians recommend against it as a long-term approach.
          </p>

          {/* HOW IT WORKS */}
          <h2 id="how-it-works">How it works in practice</h2>

          <p>
            The mechanics are simple. Eat when hungry, stop when full, animal foods only. No calorie counting, no portion control, no required eating windows. The idea is that protein and animal fat regulate appetite on their own, which naturally leads to eating less without any conscious effort.
          </p>
          <p>
            During the adjustment period — usually the first 2 to 4 weeks — fatigue, headaches, and changes in digestion are common. This happens because the body is switching from carbs to fat as its main fuel source, the same process that happens on a ketogenic diet. Some call this stretch "carnivore flu," borrowing the term from keto.
          </p>
          <p>
            Water intake is unrestricted — drink as much as you want. Unsweetened sparkling water is fine by most practitioners' standards. Coffee and tea are technically plant-derived, and where people draw the line on those varies: many keep coffee, especially early on, others cut it entirely.
          </p>

          {/* WHAT TO EAT */}
          <h2 id="what-to-eat">What you can eat on the carnivore diet</h2>

          <p>
            The list of allowed foods is intentionally short. That is part of the appeal: no exception lists to memorize, no labels to check, no glycemic index to calculate. The only question that matters is "does this come from an animal?"
          </p>

          <h3>Meat and poultry</h3>
          <ul className="item-list">
            <li><strong>Beef:</strong> ribeye, sirloin, ground beef, chuck roast, brisket, short rib</li>
            <li><strong>Pork:</strong> pork shoulder, loin, ribs, bacon (without added sugar)</li>
            <li><strong>Poultry:</strong> chicken, turkey, duck — whole or by the cut</li>
            <li><strong>Lamb and goat:</strong> fattier cuts are preferred</li>
          </ul>

          <h3>Fish and seafood</h3>
          <ul className="item-list">
            <li>Salmon, sardines, mackerel, herring — fattier fish have a richer nutrient profile</li>
            <li>Tuna, tilapia, cod, swordfish</li>
            <li>Shrimp, squid, octopus, mussels, oysters</li>
          </ul>

          <h3>Organ meats</h3>
          <p>
            Liver, heart, kidney, tongue, bone marrow. Many long-term practitioners include organ meat regularly because of its nutrient density — beef liver in particular carries meaningful amounts of vitamin B12, iron, copper, and vitamin A.
          </p>

          <h3>Eggs and dairy</h3>
          <ul className="item-list">
            <li>Eggs: no limit — one of the most nutritionally complete foods on the diet</li>
            <li>Aged cheese and butter: accepted by most, since they are low in lactose</li>
            <li>Heavy cream and whole milk: kept by some, cut by others</li>
            <li>Yogurt and regular milk: usually avoided because of the lactose</li>
          </ul>

          <h3>Animal fats</h3>
          <p>
            Lard, tallow, and butter are the go-to cooking fats. Vegetable oils — canola, sunflower, corn — are completely off the table.
          </p>

          {/* WHAT TO CUT */}
          <h2 id="what-to-cut">What is off the table</h2>

          <p>
            The cut list is longer than it looks at first glance. It includes plenty of foods most other diets consider healthy.
          </p>
          <ul className="item-list">
            <li>Fruit — all of it, no exceptions, including "low-sugar" ones like lemon</li>
            <li>Vegetables — leafy greens, roots, tubers, tomato, onion, garlic</li>
            <li>Grains — rice, oats, wheat, corn, barley</li>
            <li>Legumes — beans, lentils, chickpeas, soy</li>
            <li>Nuts and seeds — almonds, cashews, walnuts, peanuts</li>
            <li>Vegetable oils — olive, canola, sunflower, coconut</li>
            <li>Sugar and sweeteners — honey, syrup, artificial sweeteners</li>
            <li>Drinks — juice, soda, plant-based milks</li>
            <li>Condiments with plant ingredients — ketchup, mustard, bottled sauces</li>
          </ul>
          <p>
            The grocery list gets a lot shorter. Meat, eggs, butter, a few cheeses. Easy to remember, harder to explain to the rest of the household.
          </p>

          {/* MEAL PLAN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Sliced steak on a wooden cutting board — carnivore diet meal plan"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Terje Sollie / Pexels</p>
          </div>

          <h2 id="meal-plan" className="img-above">7-day sample menu</h2>

          <p>
            A sample weekly menu for anyone starting out. Lean toward fattier cuts — they fill you up more and deliver more energy than lean cuts. Building your{' '}
            <a href="/en/funcionalidades/cardapio-semanal">weekly menu</a>{' '}
            in advance makes the shopping trip a lot simpler.
          </p>

          <ul className="item-list">
            <li><strong>Monday:</strong> Scrambled eggs with bacon (morning) · Grilled sirloin (lunch) · Baked salmon (dinner)</li>
            <li><strong>Tuesday:</strong> Cheese omelet (morning) · Beef short rib (lunch) · Roasted chicken thighs (dinner)</li>
            <li><strong>Wednesday:</strong> Hard-boiled eggs (morning) · Ribeye in butter (lunch) · Sardines with eggs (dinner)</li>
            <li><strong>Thursday:</strong> Poached eggs with bacon (morning) · Grilled beef liver (lunch) · Grilled sirloin (dinner)</li>
            <li><strong>Friday:</strong> Omelet (morning) · Whole roasted chicken (lunch) · Ground beef with cheese (dinner)</li>
            <li><strong>Saturday:</strong> Eggs with bacon (morning) · Pork shoulder (lunch) · Sirloin or short rib (dinner)</li>
            <li><strong>Sunday:</strong> Cheese and ham omelet (morning) · Baked fish (lunch) · Ribeye in butter (dinner)</li>
          </ul>

          <p>
            No required snacks. If hunger hits between meals, hard-boiled eggs, slices of aged cheese, or cold cuts do the job. Most people report that the urge to snack fades within the first few weeks.
          </p>

          <div className="blog-inline-cta">
            <p>Plan the menu before you hit the store. <em>Mise keeps it organized.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* BENEFITS */}
          <h2 id="benefits">Reported benefits</h2>

          <p>
            The benefits below come mostly from practitioner reports and small studies — the carnivore diet has very few long-term clinical trials behind it. Treat this as preliminary evidence, not a settled conclusion.
          </p>

          <h3>Appetite control and weight loss</h3>
          <p>
            Protein is the most satiating macronutrient. Fat is also highly satiating. Put together, they lead many people to eat fewer total calories without tracking portions — appetite just drops. Weight loss shows up as a side effect, not a direct target.
          </p>

          <h3>Blood sugar stability</h3>
          <p>
            With no carbs, there are no glucose spikes. People with insulin resistance or type 2 diabetes report improved blood sugar readings. That does not replace medical supervision or medication adjustments — but the underlying mechanism holds up physiologically.
          </p>

          <h3>Fewer food decisions</h3>
          <p>
            What's for dinner tonight? Meat. Which one? Doesn't matter much. That drop in daily food decisions shows up constantly in practitioner accounts. It is not a clinical benefit, but it is real for anyone tired of deciding what to eat every single day. The{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            ends up under 10 fixed items.
          </p>

          {/* RISKS */}
          <h2 id="risks">Risks you need to know</h2>

          <p>
            This is where things get more serious. The carnivore diet eliminates entire food groups with well-documented health benefits — and that has consequences.
          </p>

          <h3>Fiber and gut health</h3>
          <p>
            There is zero dietary fiber on this diet. Fiber feeds the beneficial bacteria in your gut and keeps digestion regular. Without it, constipation is common in the first few weeks, and the long-term effect on gut microbiota is still not well understood. Many practitioners report things normalize after a while, but the science on microbiome impact is genuinely concerning.
          </p>

          <h3>Vitamin C and micronutrients</h3>
          <p>
            Vitamin C is mostly found in fruit and vegetables. Raw meat has small amounts, but cooking destroys much of it. Severe vitamin C deficiency causes scurvy — a disease that sounds medieval but is very real. Practitioners who cook their meat thoroughly and skip organ meats carry the highest risk. Regular bloodwork is non-negotiable.
          </p>

          <h3>Saturated fat and cholesterol</h3>
          <p>
            A high intake of saturated fat can raise LDL in some people. The effects vary — some practitioners see improved lipid markers, others see them worsen. The link between saturated fat and cardiovascular disease is an active debate in nutrition science with no firm consensus, but individual risk cannot be ignored without regular testing.
          </p>

          <h3>Long-term sustainability</h3>
          <p>
            Eating out gets hard. Social events get complicated. The diet demands constant commitment and can lead to food isolation. On top of that, a{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            stocked exclusively with meat runs more expensive than average — quality cuts do not come cheap. A monthly grocery run for a two-person household on this diet can easily run well past what a typical grocery budget covers, just on animal protein.
          </p>

          {/* WORTH IT */}
          <h2 id="worth-it">Is it worth it?</h2>

          <p>It depends on what you are trying to fix.</p>
          <p>
            If you have a specific condition — insulin resistance, inflammatory bowel disease, sensitivity to plant compounds — and are considering the diet under medical supervision, it is worth exploring. There are consistent reports of improvement in autoimmune and inflammatory conditions, though the evidence is still preliminary.
          </p>
          <p>
            If the goal is losing weight without counting calories, there are less restrictive ways to get there — low-carb, or a well-structured healthy grocery list — with fewer risks and better long-term sustainability. The carnivore diet works for some people because it removes decisions and cuts appetite. But that same effect can be achieved with a much less extreme approach.
          </p>
          <p>
            What the carnivore diet gets right: satiating protein, fewer ultra-processed foods, less added sugar, whole cuts instead of packaged products. Those principles work inside almost any eating pattern, without needing to cut out everything that grows from the ground.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about the carnivore diet</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is the carnivore diet safe long-term?</p>
              <p className="faq-a">
                There is not enough long-term research to say for sure. It removes fiber and several nutrients found mainly in plants — vitamin C and magnesium among them. Anyone staying on it long-term needs regular bloodwork and medical supervision.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How long until you see results on the carnivore diet?</p>
              <p className="faq-a">
                Early changes show up in the first 2 to 4 weeks — mostly dropped water weight and a smaller appetite. More consistent results tend to appear after 4 to 8 weeks of strict adherence.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Do you have to eat organ meat on the carnivore diet?</p>
              <p className="faq-a">
                No, but most long-term practitioners add it back in. Muscle meat alone is low in a few nutrients — vitamin C and copper among them — that liver and other organs supply. It is a fix once the basics are dialed in, not a day-one requirement.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you drink coffee on the carnivore diet?</p>
              <p className="faq-a">
                Coffee is plant-derived and technically outside the strict version. Plenty of practitioners keep it anyway, especially early on. Where you draw the line depends on how strict you want to be.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does the carnivore diet cause high cholesterol?</p>
              <p className="faq-a">
                A high intake of saturated fat can raise LDL in some people. Effects vary individually. Regular bloodwork is non-negotiable — anyone with a history of high cholesterol should talk to a doctor before starting.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is dairy allowed on the carnivore diet?</p>
              <p className="faq-a">
                Depends on the version. Aged cheese and butter are low-lactose and tolerated by most. Milk, cream, and yogurt carry more lactose and get cut by many practitioners, either for digestion or to keep the diet strict.
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
                Mise's founder. Tried the carnivore diet for three days, missed broccoli by day four. Would not recommend attempting it during a busy work week.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Decide what to buy.<br />
              <em>Mise remembers for you.</em>
            </h2>
            <p>
              Connects menu, pantry, and shopping list in one place.
              Carnivore, low-carb, or just weeknight dinner — whatever you cook, the list is already done.
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
          <a href="/en" className="brand">
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
