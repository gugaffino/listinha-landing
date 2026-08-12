import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'How to Save Money on Groceries: 12 Habits That Actually Work',
  description: 'Saving money on groceries starts before you leave the house. 12 practical habits about lists, pantry, and meal planning that cut spending without cutting what you eat.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/como-economizar-no-mercado',
      en: 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado',
      es: 'https://www.miseemcasa.com.br/es/blog/como-economizar-no-mercado',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/como-economizar-no-mercado',
    },
  },
  openGraph: {
    title: 'How to Save Money on Groceries: 12 Habits That Actually Work',
    description: 'Saving money on groceries starts before you leave the house. A connected list, pantry, and meal plan cut spending without cutting what you eat.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado',
    images: [
      {
        url: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Family grocery shopping at the supermarket with a list in hand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Save Money on Groceries: 12 Habits That Actually Work',
    description: 'Saving money on groceries starts before you leave the house. A connected list, pantry, and meal plan cut spending without cutting what you eat.',
    images: ['https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I save money on groceries in practical terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The savings start at home: check your pantry so you don’t buy what you already have, plan the week’s meals, and build a full list organized by aisle group. Inside the store, eat before you go, stick to the list, skip endcap displays, and compare unit price instead of package price. Shoppers who plan ahead consistently report spending less than those who shop unplanned.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I actually save per month by using a grocery list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your current habits and household size, but the mechanism is well documented: unplanned purchases make up more than half of items bought on a typical shopping trip. Cutting duplicate purchases, impulse buys, and food that goes to waste can realistically save a household $50 to $150 a month — in the same range as the gap between the USDA’s Thrifty and Low-Cost food plans for a family of four.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it cheaper to grocery shop once a week or several times a week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a week with a complete list is cheaper. Every extra trip to the store is another exposure to retail merchandising — endcaps, eye-level placement, comparative pricing — all designed to raise your basket size. Shopping less often with a complete list reduces how many chances you give yourself to buy something you didn’t plan on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I do to stay within my grocery budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set the budget before you build the list. Plan the week’s meals first, then list only the ingredients you’re missing. Check your pantry before writing anything down — you’ll find you already have more than you think. At the store, shop on a full stomach and stick to the list. Skip aisles that aren’t on your route.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid food waste and save money at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest driver of household food waste is buying things without knowing what you already have. With an organized pantry connected to your list, you buy only what you’ll actually use. The USDA estimates the average American family of four loses about $1,500 a year to food that goes uneaten — and a lot of that starts with an unplanned trip to the store.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between unit price and package price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The price on the shelf tag is usually the price per package. The unit price — price per ounce, pound, or liter — is what lets you compare different brands and sizes fairly. The smaller package often looks cheaper, but the unit price is almost always higher. Most US stores are required to post the unit price on the shelf tag — look for it before choosing between two options.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Save Money on Groceries: 12 Habits That Actually Work',
  description: 'Saving money on groceries starts before you leave the house. 12 practical habits about lists, pantry, and meal planning that cut spending without cutting what you eat.',
  image: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
  datePublished: '2026-08-12',
  dateModified: '2026-08-12',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'How to Save Money on Groceries', item: 'https://www.miseemcasa.com.br/en/blog/como-economizar-no-mercado' },
  ],
}

export default function HowToSaveMoneyOnGroceriesEn() {
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
            <li className="breadcrumb-current" aria-current="page">How to Save Money on Groceries</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">Aug 12, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">10 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            12 grocery-saving habits that actually work
          </h1>
          <p className="blog-desc">
            One trip a week with a list beats three quick ones without. The &quot;just running in for a few things&quot; trip is the most expensive kind. Here are the habits that make a real difference &mdash; before, during, and after the store.
          </p>

          <div className="answer-box">
            <p>
              <strong>How do you save money on groceries?</strong> The savings start at home:{' '}
              check the pantry, plan the week&apos;s meals, and build a list organized by group.
              Inside the store: never shop hungry, stick to the list, and compare unit price instead of package price.
              Shoppers who plan ahead consistently spend less than shoppers who don&apos;t.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Family grocery shopping at the supermarket with a list in hand"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Gustavo Fring / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#why-you-overspend">Why most people spend more than they should</a></li>
              <li><a href="#before-you-leave">Before you leave the house: where the savings start</a></li>
              <li><a href="#in-the-store">Inside the store: habits that cut the bill</a></li>
              <li><a href="#list-that-works">The grocery list that actually works</a></li>
              <li><a href="#list-pantry-plan">List, pantry, and meal plan: the biggest savings</a></li>
              <li><a href="#how-much">How much you can actually save</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHY YOU OVERSPEND */}
          <h2 id="why-you-overspend">Why most people spend more than they should at the grocery store</h2>

          <p>
            Research tracking roughly 30,000 grocery purchases found that unplanned items make up
            <strong> 68% of what people buy on a big shopping trip</strong> and <strong>54% on a smaller one</strong>{' '}
            (Inman, Winer &amp; Ferraro, published via Wharton). Separate industry surveys put the share of
            shoppers who make at least one impulse purchase per visit somewhere between 20% and 50%.
            However you slice it, the pattern is the same: most of what ends up in the cart wasn&apos;t decided at home.
          </p>

          <p>
            That shows up as real money. Every item you didn&apos;t plan for is either something you&apos;ll
            actually use eventually (fine, but you paid for storage and shelf space you didn&apos;t need to)
            or something that ends up forgotten in the back of the fridge. The USDA estimates that food loss
            at the retail and consumer level runs around 31% of the supply &mdash; and a meaningful share of
            that starts with buying something without a plan for it.
          </p>

          <p>
            The problem isn&apos;t a lack of willpower. It&apos;s a lack of system. Grocery shopping without
            a plan is like shopping with your eyes closed &mdash; you get somewhere, but the path is crooked
            and the cart is full of surprises.
          </p>

          <p>
            And there&apos;s more to it: every extra trip to the store is another exposure to retail
            merchandising &mdash; endcap displays, comparative pricing, products placed at eye level, all
            engineered to raise the average basket size. Shopping less often with a complete list is, on
            its own, a defense against that.
          </p>

          {/* BEFORE YOU LEAVE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/6214370/pexels-photo-6214370.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Person writing a grocery list on paper with weekly meal planning"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Nataliya Vaitkevich / Pexels</p>
          </div>

          <h2 id="before-you-leave" className="img-above">Before you leave the house: where the savings start</h2>

          <p>
            Most grocery-saving advice focuses on what to do inside the store. But most of the money
            you save gets decided before you ever leave home.
          </p>

          <h3>1. Check the pantry before you write the list</h3>
          <p>
            It sounds obvious, but almost nobody does it. Open every cabinet, check the fridge and the
            freezer before you sit down to write the list. You&apos;ll find two cans of tomato paste, two
            weeks&apos; worth of rice, and that cheese that&apos;s still perfectly fine. Buying duplicates
            is the quietest form of waste there is. If your pantry is a mess to begin with, it&apos;s worth
            sorting it out first &mdash; grouping like items, labeling what you can, and giving everything
            a spot you&apos;ll actually remember.
          </p>

          <h3>2. Plan the week&apos;s meals before you go</h3>
          <p>
            Without knowing what you&apos;re cooking, the list is a guess. You end up buying proteins
            with no plan for them, vegetables that don&apos;t match anything else you bought, and still
            order delivery on Wednesday anyway.
          </p>
          <p>
            Spending 10 minutes picking 5 to 7 meals for the week turns the list into something precise:
            you know exactly which ingredients you need and how much of each. The{' '}
            <a href="/en/funcionalidades/cardapio-semanal">Mise weekly meal plan</a> does this automatically
            &mdash; you pick the recipes and the app builds the list of what you&apos;re missing.
          </p>

          <h3>3. Build the list by group, not by memory</h3>
          <p>
            A list organized by group (produce, meat, dairy, pantry staples, cleaning, personal care)
            covers every aisle without leaving gaps. When you write from memory, you forget entire
            categories &mdash; and end up making a second trip mid-week. If you need somewhere to start,
            keeping a running master list of your household staples saves you from rebuilding it from
            scratch every time.
          </p>

          <h3>4. Set a budget before you go</h3>
          <p>
            Knowing how much you&apos;re going to spend changes what goes on the list. With a budget set,
            you prioritize: the week&apos;s protein stays, the specialty yogurt waits for another trip.
            Without one, everything feels necessary in the moment.
          </p>

          <h3>5. Don&apos;t shop hungry</h3>
          <p>
            A classic because it&apos;s real. When you&apos;re hungry, everything feels urgent and necessary.
            You grab the chips on sale, the candy bar in the checkout line, the frozen pizza &quot;just this
            once.&quot; Eat before you go.
          </p>

          {/* IN THE STORE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/16211537/pexels-photo-16211537.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Supermarket aisle with organized shelves"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: ha ha / Pexels</p>
          </div>

          <h2 id="in-the-store" className="img-above">Inside the store: habits that cut the bill</h2>

          <h3>6. Follow the list, not the aisle</h3>
          <p>
            Grocery stores are laid out to make you walk through every aisle. Staples like milk, eggs,
            and bread sit at the back so you pass everything else before you get there. If it&apos;s not
            on the list, don&apos;t walk down the aisle. Every aisle is another chance for an impulse buy.
          </p>

          <h3>7. Compare unit price, not package price</h3>
          <p>
            The 12 oz bag looks cheaper than the 32 oz one, but the unit price almost always contradicts
            that instinct. Most US supermarkets are required to display the price per unit of measure
            (per ounce, per pound, per liter) on the shelf tag. Use that number &mdash; it&apos;s already there.
          </p>

          <h3>8. Skip endcaps and special displays</h3>
          <p>
            An endcap display isn&apos;t necessarily a deal. That space is sold to brands for visibility.
            Before grabbing something staged at the end of an aisle, compare it against the equivalent
            product sitting on the regular shelf in its actual category.
          </p>

          <h3>9. Choose store brands for commodities</h3>
          <p>
            Rice, flour, sugar, salt, dish soap: items with no real difference in taste or performance.
            Store brands are typically 20&ndash;40% cheaper and often come off the same production lines
            as the name brand. Save where you genuinely won&apos;t notice a difference.
          </p>

          <h3>10. Don&apos;t buy something unplanned just because it&apos;s on sale</h3>
          <p>
            A deal is only a saving if you were going to buy it anyway. Buying three jars of sauce because
            they&apos;re discounted, when you go through one a month, means spending money now that you
            would have spent months later &mdash; with none of the real financial upside of having kept
            that cash available in the meantime.
          </p>

          <div className="blog-inline-cta">
            <p>Fewer decisions. <em>More cooking.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* LIST THAT WORKS */}
          <h2 id="list-that-works">The grocery list that actually works</h2>

          <p>
            A good grocery list has three traits: it&apos;s organized by group (so you never backtrack
            down an aisle), it&apos;s based on the week&apos;s meal plan (so you only buy what you&apos;ll
            use), and it reflects what&apos;s already at home (so you don&apos;t buy duplicates).
          </p>

          <p>
            The most efficient format isn&apos;t a flat list of items &mdash; it&apos;s a list organized
            aisle by aisle. You hit produce, check everything off, move to meat, then dairy, then pantry
            staples. No backtracking. No forgotten item forcing a second trip.
          </p>

          <p>
            The <a href="/en/funcionalidades/lista-de-compras">Mise shopping list</a> already groups items
            by aisle automatically. You add what you need, the app sorts it by category, and you get out
            of the store faster &mdash; and stay on budget.
          </p>

          <h3>11. Shop once a week, not several times</h3>
          <p>
            Every trip to the store has a hidden cost beyond the cart itself: time, travel, and above
            all, exposure to more opportunities for unplanned purchases. Someone who runs to the store
            three times a week &quot;just to grab a few things&quot; tends to spend more overall than
            someone who goes once with a complete list.
          </p>

          <h3>12. Review the list afterward, not during</h3>
          <p>
            After you check out, look at what&apos;s left unchecked on the list (what you couldn&apos;t
            find or decided to skip) and what landed in the cart that wasn&apos;t on the list at all.
            That two-minute review reveals patterns: what you forget every week, what you buy on impulse
            every time, where your budget keeps slipping.
          </p>

          {/* LIST + PANTRY + MEAL PLAN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4443442/pexels-photo-4443442.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Well-organized fridge with fresh fruits and vegetables"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Polina Tankilevitch / Pexels</p>
          </div>

          <h2 id="list-pantry-plan" className="img-above">List, pantry, and meal plan: where the biggest savings live</h2>

          <p>
            Each of these habits helps on its own. But the real financial upside shows up when all three
            are connected.
          </p>

          <p>
            Here&apos;s how it works: you plan the week&apos;s meals based on what&apos;s already in the
            pantry. Whatever&apos;s missing goes to the list automatically. At the store, you buy only
            those items. Back home, you update the pantry. When something runs out, you flag it &mdash;
            not on shopping day, once memory has already failed you, but the moment you notice.
          </p>

          <p>
            That loop eliminates the two biggest culprits behind overspending: buying something you
            already had (because you didn&apos;t know you had it) and not buying something you needed
            (because it never made it onto the list). The <a href="/en/funcionalidades/despensa">Mise pantry</a>{' '}
            works as an inventory connected to the list &mdash; you know what you have without opening
            every cabinet to check.
          </p>

          <p>
            In practice, people who combine all three tend to spend less not because they&apos;re buying
            cheaper products, but because they&apos;re buying what they&apos;ll genuinely use. Nothing
            expiring in the back of the fridge. No mid-week second trip to grab what got forgotten.
          </p>

          {/* HOW MUCH */}
          <h2 id="how-much">How much you can actually save</h2>

          <p>
            The USDA publishes monthly food plan costs for a family of four at different spending levels
            &mdash; from the Thrifty Plan (around $1,000&ndash;$1,100) up to the Moderate Plan (around
            $1,350&ndash;$1,400). The gap between the tightest, most planned budget and a more relaxed one
            runs roughly <strong>$100 to $350 a month</strong> &mdash; a useful proxy for what better
            planning alone can realistically move.
          </p>

          <p>
            It isn&apos;t an abstract projection. It&apos;s the cost of the handful of unplanned items on
            every trip, of buying duplicates because the pantry wasn&apos;t checked, of a second trip
            because something essential got forgotten, of throwing out food that went bad before it got used.
            The USDA estimates the average American family of four loses about <strong>$1,500 a year</strong>{' '}
            to food that never gets eaten &mdash; money spent and then thrown in the trash.
          </p>

          <p>
            A family that shops without any real plan can realistically trim a meaningful slice of that
            with a fixed list, a weekly meal plan, and an organized pantry. The difference doesn&apos;t
            come from switching stores or cutting entire categories &mdash; it comes from buying, with
            precision, only what actually gets used.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about saving money on groceries</h2>

          <ul className="faq-list">

            <li className="faq-item">
              <p className="faq-q">How can I save money on groceries in practical terms?</p>
              <p className="faq-a">
                The savings start at home: check the pantry before building the list, plan the week&apos;s
                meals, and write everything organized by aisle group. Inside the store, eat before you go,
                stick to the list, and compare unit price &mdash; not package price. Shoppers who plan
                ahead consistently spend less than shoppers who don&apos;t.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">How much can I actually save per month by using a grocery list?</p>
              <p className="faq-a">
                It depends on your current habits and household size, but unplanned purchases make up
                more than half of what people buy on a typical trip. Cutting duplicates, impulse buys,
                and wasted food can realistically save a household <strong>$50 to $150 a month</strong> &mdash;
                in the same range as the gap between the USDA&apos;s Thrifty and Low-Cost food plans.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">Is it cheaper to grocery shop once a week or several times?</p>
              <p className="faq-a">
                Once a week with a complete list is cheaper. Every extra trip is another exposure to
                retail merchandising &mdash; and another opportunity for an impulse buy. Shoppers who
                consolidate their trips tend to spend less overall.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">What can I do to stay within my grocery budget?</p>
              <p className="faq-a">
                Set the budget before building the list. Plan meals first, then list only what&apos;s
                missing. Check the pantry before writing anything down. At the store, stick to the list
                and skip aisles that aren&apos;t on your route.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">How do I avoid food waste and save money at the same time?</p>
              <p className="faq-a">
                The biggest driver of household food waste is buying without knowing what you already
                have. With an organized pantry connected to the list, you buy only what you&apos;ll use.
                The USDA estimates the average American family of four loses about{' '}
                <strong>$1,500 a year</strong> to uneaten food &mdash; and a lot of that starts at the store.
              </p>
            </li>

            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between unit price and package price?</p>
              <p className="faq-a">
                The price on the shelf tag is usually per package. The unit price &mdash; per ounce, pound,
                or liter &mdash; is what lets you compare brands and sizes fairly. The smaller package
                often looks cheaper, but the unit price is almost always higher. Most stores are required
                to post it &mdash; look for it before choosing between two options.
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
                Creator of Mise. Has made a grocery list every week since he learned to cook &mdash; and still forgets the garlic sometimes.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              Stop winging it at the store.<br />
              <em>Use Mise.</em>
            </h2>
            <p>
              Shopping list, pantry, and weekly meal plan in one place.
              You decide what to cook, the app builds the list of what&apos;s missing.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Start free
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
