import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Simple Weekly Meal Plan: How to Build One From Scratch',
  description: 'A simple weekly meal plan: a practical 7-day example with lunch and dinner, how to turn it into a shopping list, and tips to keep it going every week.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/cardapio-semanal-simples-caseiro',
      en: 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro',
      es: 'https://www.miseemcasa.com.br/es/blog/cardapio-semanal-simples-caseiro',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/cardapio-semanal-simples-caseiro',
    },
  },
  openGraph: {
    title: 'Simple Weekly Meal Plan: How to Build One From Scratch',
    description: 'A simple weekly meal plan: a practical 7-day example with lunch and dinner, how to turn it into a shopping list, and tips to keep it going every week.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro',
    images: [
      {
        url: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Family cooking together in a home kitchen — planning and prepping meals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Weekly Meal Plan: How to Build One From Scratch',
    description: 'A simple weekly meal plan: a practical 7-day example with lunch and dinner, how to turn it into a shopping list, and tips to keep it going every week.',
    images: ['https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a weekly meal plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A weekly meal plan is the list of meals mapped out for the seven days ahead — usually lunch and dinner, sometimes breakfast too. It works as a guide for what to cook each day, avoids the "what\'s for dinner?" scramble, and makes grocery shopping more efficient because you only buy what you\'ll actually use.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you build a simple weekly meal plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To build a simple weekly meal plan: 1) List 5 to 7 meals you already know how to cook; 2) Spread them across the week based on how much time you have each day — quick meals on the busiest days; 3) Check the pantry before you shop; 4) Build the shopping list from the plan. You don\'t need to plan every day right away — start with 3 days and expand from there.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an example of a simple homemade weekly meal plan look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A simple weekly meal plan example: Monday — grilled chicken with rice and salad; Tuesday — pasta with tomato sauce and a fried egg; Wednesday — seasoned beans with rice and sautéed vegetables; Thursday — omelet with roasted potatoes; Friday — baked fish with rice and carrots. Repeating proteins through the week cuts down the number of ingredients on the shopping list.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you turn a weekly meal plan into a shopping list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To turn a meal plan into a shopping list: go through each planned meal and write down the ingredients and quantities you need. Then cross-reference against what\'s already in the pantry and remove anything you don\'t need to buy. The result is an accurate list — no forgotten items and no unnecessary purchases. A shopping list app connected to your pantry does this matching automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a weekly meal plan work if you live alone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It works well and has an extra advantage: you can batch-cook larger portions on Sunday and split them across the week. A pot of beans, a batch of rice, and a protein cooked in bulk remove the need to cook every single day. Planning also cuts down on waste, which tends to be higher for people living alone who shop on impulse.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many meals do I need to plan for the week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You don\'t need to plan every meal of every day to get started. Planning just lunch or just dinner for the week already makes a real difference to your shopping list and food waste. Start with 3 or 4 days and add more once the habit feels natural. Trying to plan 100% from day one creates unnecessary pressure and makes it easier to give up.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Simple Weekly Meal Plan: How to Build One From Scratch',
  description: 'A simple weekly meal plan: a practical 7-day example with lunch and dinner, how to turn it into a shopping list, and tips to keep it going every week.',
  image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Simple Weekly Meal Plan', item: 'https://www.miseemcasa.com.br/en/blog/cardapio-semanal-simples-caseiro' },
  ],
}

export default function WeeklyMealPlanEn() {
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
            <li className="breadcrumb-current" aria-current="page">Simple Weekly Meal Plan</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-04">Aug 4, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Weekly Meal Plan: How to Plan Seven Days of Meals Without Losing Your Mind
          </h1>
          <p className="blog-desc">
            Building a simple weekly meal plan doesn&apos;t take a spreadsheet, a chef, or a whole Sunday. It takes 20 minutes, a list of meals you already know how to cook, and the will to stop opening the fridge with no idea what to make.
          </p>

          <div className="answer-box">
            <p>
              A <strong>weekly meal plan</strong> is the list of meals mapped out for the seven days ahead — usually lunch and dinner.
              It answers &quot;what&apos;s for dinner tonight?&quot; before the question even comes up,
              makes the shopping list more accurate, and cuts down on food waste.
              It doesn&apos;t have to be perfect: planning half the week already makes a difference.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Family cooking together in a home kitchen — planning and prepping meals"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: cottonbro studio / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#why">Why a weekly meal plan actually helps</a></li>
              <li><a href="#how-to-build">How to build one: step by step</a></li>
              <li><a href="#example">Example of a simple weekly meal plan</a></li>
              <li><a href="#shopping-list">Turning it into a shopping list</a></li>
              <li><a href="#when-plan-changes">When the plan doesn&apos;t go as scripted</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          <p>
            Wednesday, six in the evening, fridge door open. Half an onion, two eggs, a tub of yogurt, and something in the back that could be leftover chicken or could be from two weeks ago. That&apos;s not cooking — that&apos;s archaeology.
          </p>
          <p>
            A weekly meal plan exists to skip that exact moment. Not because you&apos;ll cook a perfect dinner every single night, but because without some kind of plan, every meal turns into a brand-new decision. And deciding what to eat once you&apos;re already hungry is the worst possible time to decide.
          </p>
          <p>
            The USDA estimates that 30 to 40 percent of the food supply in the US goes to waste, and a good share of that happens right at home — ingredients bought on a whim and never used. A weekly meal plan is the step that comes before the shopping list. Skip it, and the list ends up incomplete too.
          </p>

          {/* WHY */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Table set with a balanced homemade meal — rice, vegetables, and protein on colorful plates"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
          </div>

          <h2 id="why" className="img-above">Why a weekly meal plan actually makes a difference</h2>

          <p>
            The real payoff isn&apos;t that you suddenly eat healthier — it&apos;s that you stop burning mental energy every day deciding what to cook. Every &quot;what&apos;s for dinner&quot; question answered in advance is one less decision cluttering your day.
          </p>
          <p>
            At the grocery store, the effect shows up immediately. Someone shopping with a plan in hand knows exactly which ingredients they need — they don&apos;t grab ground beef when the week&apos;s recipe calls for chicken thighs. Research on shopping behavior consistently points the same way: people who shop without a list end up spending more, mostly on things they never planned to buy.
          </p>
          <p>
            On waste, the impact is even clearer. When you know the zucchini is going into Thursday&apos;s dinner, it doesn&apos;t sit forgotten in the crisper drawer until it turns to mush. Buying with a use already assigned to every item is the single biggest lever against food waste at home.
          </p>
          <p>
            A weekly plan also cuts down on how often you need to run back to the store. Most of those extra trips happen because something got forgotten, or because there was no plan to begin with. With a clear plan and a well-built{' '}
            <a href="/en/blog/lista-de-compras-do-mes">shopping list</a>,
            {' '}one trip a week is usually enough.
          </p>

          {/* HOW TO BUILD */}
          <h2 id="how-to-build">How to build a weekly meal plan: step by step</h2>

          <p>
            No need for a fancy template or a spreadsheet full of formulas. Four steps are enough to build a plan that actually holds up in the real world.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <div className="tip-num">1</div>
              <div className="tip-body">
                <strong>List what you already know how to cook</strong>
                <span>
                  This isn&apos;t the time to experiment. Write down 7 to 10 recipes that are already part of your routine — grilled chicken, pasta with tomato sauce, an omelet, rice and beans, baked fish. Familiar recipes run on autopilot and don&apos;t require any decision-making once you&apos;re at the stove.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">2</div>
              <div className="tip-body">
                <strong>Spread them across the days based on your actual time</strong>
                <span>
                  Mondays and Wednesdays tend to be the busiest — put the fastest recipes there. Fridays or weekends usually leave more room — save something with a bit more prep for those. Sunday can be batch day: rice, beans, and a protein cooked in bulk to cover two or three days.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">3</div>
              <div className="tip-body">
                <strong>Check the pantry before you shop</strong>
                <span>
                  Before building the shopping list, check what&apos;s already at home. Olive oil, rice, beans, spices — staples already sitting in the{' '}
                  <a href="/en/funcionalidades/despensa">pantry</a>{' '}
                  don&apos;t need to go on the list. This one step alone eliminates most duplicate purchases.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <div className="tip-num">4</div>
              <div className="tip-body">
                <strong>Generate the shopping list from the plan</strong>
                <span>
                  With the plan set and the pantry checked, the shopping list practically writes itself. Go meal by meal, mark what you already have, and what&apos;s left is what you actually need to buy. Mise&apos;s{' '}
                  <a href="/en/funcionalidades/cardapio-semanal">weekly plan</a>{' '}
                  does that matching automatically.
                </span>
              </div>
            </li>
          </ul>

          {/* EXAMPLE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5593102/pexels-photo-5593102.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Person writing a weekly meal plan on paper at a wooden table with a notebook and pen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: RDNE Stock project / Pexels</p>
          </div>

          <h2 id="example" className="img-above">Example of a simple homemade weekly meal plan</h2>

          <p>
            Below is a working example for one person or a couple — nothing exotic, nothing that needs a special technique. The only rule was realistic prep time: nothing over 30 minutes on a weeknight.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Lunch / Dinner</th>
                <th>Prep time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Grilled chicken, rice, and green salad</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Pasta with tomato sauce and a fried egg</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Seasoned beans, rice, and sautéed vegetables</td>
                <td>25 min</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Omelet with roasted potatoes and salad</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Baked fish with rice and carrots</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>

          <p>
            Some of these picks aren&apos;t random: chicken shows up early in the week, while it&apos;s still fresh. Beans land in the middle — either using what got batch-cooked on Sunday or a fresh pot that holds up for a couple of days. Fish is on Friday, bought same-day and cooked right away.
          </p>
          <p>
            Repeating proteins through the week also shrinks the number of different items on the shopping list. Chicken on Monday and again later in the week means one purchase covers two meals. Fewer distinct items means less time wandering the store and less chance of forgetting something.
          </p>
          <p>
            Weekends are left out of the example for a simple reason: Saturday and Sunday tend to run on a different rhythm — errands, takeout, family lunches. Planning the workweek is enough to feel the impact. Anyone who wants to extend the plan to the weekend can add it later.
          </p>

          {/* SHOPPING LIST */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6995262/pexels-photo-6995262.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Person checking a shopping list on their phone next to a grocery cart"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Mart Production / Pexels</p>
          </div>

          <h2 id="shopping-list" className="img-above">How to turn a weekly meal plan into a shopping list</h2>

          <p>
            This is the step most people skip — and it&apos;s exactly why they end up at the store with a generic list that has nothing to do with what they&apos;re actually cooking that week.
          </p>
          <p>
            The process is straightforward: take the plan, go meal by meal, and write down the ingredients and quantities each one needs. Grilled chicken Monday and rice-and-beans Wednesday — chicken: 1.5 lbs, rice: already have it, beans: already have it, spices: double-check. Then cross-reference against what&apos;s already in the pantry and cross off anything you don&apos;t need to buy.
          </p>
          <p>
            What&apos;s left is a{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            that&apos;s actually accurate — no forgotten items, no purchases that end up buried in the back of a cabinet, never used. That accuracy is the difference between one trip to the store a week and three trips because something is always missing.
          </p>
          <p>
            For anyone using Mise, that cross-check happens automatically: the week&apos;s meal plan generates the shopping list while accounting for what&apos;s already logged in the pantry. What you need to buy stays separate from what&apos;s already at home.
          </p>

          <div className="blog-inline-cta">
            <p>Plan&apos;s done. <em>Mise builds the list on its own.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* WHEN PLAN CHANGES */}
          <h2 id="when-plan-changes">When the plan doesn&apos;t go according to script</h2>

          <p>
            A weekly meal plan isn&apos;t a contract. Thursday you planned fish, but you left work late and the store had already closed. Wednesday you planned chicken, but there were Tuesday&apos;s leftovers that needed to get eaten first. That&apos;s normal — it&apos;s not a flaw in the system.
          </p>
          <p>
            The plan works as a reference, not an obligation. It handles most days. The ones that go off-script are the exception, and exceptions don&apos;t break the system. What breaks it is having no plan at all — then every day is an exception.
          </p>
          <p>
            Three practical adjustments for when the script changes:
          </p>

          <ul className="item-list">
            <li><strong>Proteins freeze.</strong> Chicken that didn&apos;t get used Monday goes in the freezer. Next week, it&apos;s already sitting in the pantry.</li>
            <li><strong>Leftovers become lunch.</strong> Planning slightly bigger dinner portions removes the need to cook again the next day at lunchtime.</li>
            <li><strong>Swap the day, not the recipe.</strong> If Thursday&apos;s recipe didn&apos;t happen, it moves to Friday — it doesn&apos;t disappear from the plan. The ingredients are already in the house.</li>
          </ul>

          <p>
            People who give up on weekly meal planning usually do it because they set the bar too high from the start: planning every meal of every day, trying a new recipe every night, never repeating anything. That&apos;s not a weekly meal plan — that&apos;s producing a cooking show. Start simple. Repeat what works. Adjust as you go.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about weekly meal plans</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What is a weekly meal plan?</p>
              <p className="faq-a">
                It&apos;s the list of meals mapped out for the seven days of the week — usually lunch and dinner. It works as a guide for what to cook each day, avoids the &quot;what&apos;s for dinner?&quot; scramble, and makes grocery shopping more efficient because you only buy what you&apos;ll actually use.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you build a simple weekly meal plan?</p>
              <p className="faq-a">
                List 5 to 7 meals you already know how to cook. Spread them across the days based on how much time you have. Check the pantry before you shop. Build the shopping list from the plan. You don&apos;t need to plan every day right away — start with 3 days and expand from there.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What does an example of a simple homemade weekly meal plan look like?</p>
              <p className="faq-a">
                Monday: grilled chicken with rice and salad. Tuesday: pasta with tomato sauce and a fried egg. Wednesday: beans, rice, and sautéed vegetables. Thursday: omelet with roasted potatoes. Friday: baked fish with rice and carrots. Repeating proteins through the week trims the shopping list and simplifies the trip to the store.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you turn a weekly meal plan into a shopping list?</p>
              <p className="faq-a">
                Go through each planned meal, write down the ingredients and quantities needed. Cross-reference against what&apos;s already in the pantry and remove anything you don&apos;t need to buy. The result is an accurate list — no forgotten items and no purchases that end up buried in the back of a cabinet.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does a weekly meal plan work if you live alone?</p>
              <p className="faq-a">
                It works, and it has an extra advantage: you can batch-cook bigger portions on Sunday — rice, beans, protein — and split them across the week. That removes the need to cook every day. It also cuts down on waste, which tends to be higher for people living alone who shop on impulse.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many meals do I need to plan for the week?</p>
              <p className="faq-a">
                You don&apos;t need to plan every meal of every day to get started. Planning just lunch or just dinner for the week already makes a real difference. Start with 3 or 4 days and add more once it feels natural. Trying to plan 100% from day one creates unnecessary pressure and makes it easier to give up.
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
                Creator of Mise. Kept a weekly meal plan on paper for years, lost the paper every single week. Now it lives in the app.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Plan done. List generated.<br />
              <em>Let&apos;s use Mise.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place.
              You plan the week, Mise builds the list — nothing gets left out.
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
