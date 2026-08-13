import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'Basic Grocery List: The Complete Guide (80+ Items)',
  description: 'A basic grocery list covering all 7 essential categories, 80+ items to copy, how to adjust it to your household, monthly cost by household size, and 5 tips to save at checkout.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-basica-de-compras',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-basica-de-compras',
    },
  },
  openGraph: {
    title: 'Basic Grocery List: The Complete Guide (80+ Items)',
    description: 'The 7 essential categories, 80+ items to copy, household profiles, and what it costs per month.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras',
    images: [
      {
        url: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Shopping cart in a grocery store aisle with basic grocery list items',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basic Grocery List: The Complete Guide (80+ Items)',
    description: 'The 7 essential categories, 80+ items to copy, household profiles, and what it costs per month.',
    images: ['https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should be on a basic grocery list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic grocery list should cover 7 categories: produce (onion, garlic, tomato, fruit), meat and protein (chicken, eggs, canned tuna), dairy (milk, cheese, yogurt), pantry staples (rice, pasta, olive oil, coffee), spices and condiments (pepper, oregano, broth), cleaning supplies (dish soap, laundry detergent, disinfectant), and personal care (shampoo, toothpaste, toilet paper).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a basic grocery list cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a couple, groceries typically run $600-$785 per month under the USDA Thrifty and Moderate Food Plans (April 2026), plus roughly $100-140 for household basics like cleaning and personal care. For one person, expect $295-500 for food. For a family of four, USDA food plans range from about $1,013 to $1,380 per month, before household basics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you organize a grocery list by aisle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most efficient order: produce (usually near the entrance) → bakery and deli → dry pantry goods → dairy and beverages → cleaning and personal care → meat and seafood → frozen foods (always last, so nothing thaws in the cart on the way to checkout).',
      },
    },
    {
      '@type': 'Question',
      name: 'Why make a grocery list before shopping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shoppers who use a list consistently spend less than those who shop without one — impulse purchases made without a plan tend to run meaningfully higher per trip. A list also cuts time in the store and prevents forgetting staples you only notice are missing mid-week.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you make a grocery list for two people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a couple, scale down quantities: about 2 lbs of rice and 1 lb of dried beans or lentils cover a week, protein for 8-10 meals, and enough produce for daily cooking. Weekly grocery spend for two lands around $140-180 using the 7 basic categories as the baseline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you stop forgetting items at the grocery store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective method is a fixed list organized by category, checked against your pantry before you leave. That way you know what ran out before you need it, not after. Connecting your list, pantry, and recipes in one place is what actually prevents the gaps.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Basic Grocery List: The Complete Guide (80+ Items)',
  description: 'A basic grocery list covering all 7 essential categories, 80+ items to copy, how to adjust it to your household, monthly cost by household size, and 5 tips to save at checkout.',
  image: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Basic Grocery List', item: 'https://www.miseemcasa.com.br/en/blog/lista-basica-de-compras' },
  ],
}

const copyText = `BASIC GROCERY LIST

PRODUCE
- Lettuce
- Tomato
- Onion
- Garlic
- Potato
- Carrot
- Lemon/Lime
- Banana
- Apple
- Orange
- Papaya or seasonal fruit

MEAT AND PROTEIN
- Chicken breast
- Ground beef
- Fish fillet
- Eggs (dozen)
- Canned tuna

DAIRY
- Milk
- Plain yogurt
- Shredded or sliced cheese
- Butter
- Cream cheese

PANTRY STAPLES
- Rice
- Dried beans or lentils
- Pasta
- All-purpose flour
- Sugar
- Salt
- Coffee
- Olive oil or cooking oil
- Canned tomatoes
- Tomato sauce

SPICES AND CONDIMENTS
- Black pepper
- Cumin
- Oregano
- Broth (bouillon or stock)
- Vinegar
- Mustard
- Mayonnaise

CLEANING
- Dish soap
- Laundry detergent
- Disinfectant
- All-purpose cleaner
- Sponges
- Trash bags

PERSONAL CARE
- Shampoo and conditioner
- Bar soap or body wash
- Toothpaste
- Deodorant
- Toilet paper`

export default function BasicGroceryListEn() {
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
            <li className="breadcrumb-current" aria-current="page">Basic Grocery List</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">Aug 12, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">9 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            The Only Basic Grocery List You Need: 80+ Items, Organized by Category
          </h1>
          <p className="blog-desc">
            Grocery shopping without a list isn&apos;t spontaneity — it&apos;s improvising with a price tag. You come home with things you didn&apos;t need and without the one thing you did. This guide covers the 7 essential categories, 80+ items you can copy straight into your phone, and how to size it to your household.
          </p>

          <div className="answer-box">
            <p>
              A <strong>basic grocery list</strong> covers 7 categories:{' '}
              <strong>produce, meat and protein, dairy, pantry staples, spices and condiments, cleaning supplies, and personal care</strong>.
              With those 7 covered, most households have what they need for the week — without relying on memory.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Shopping cart in a grocery store aisle with basic grocery list items"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Jan van der Wolf / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#why-a-list">Why a basic grocery list changes everything</a></li>
              <li><a href="#the-7-categories">The 7 categories of a complete grocery list</a></li>
              <li><a href="#copy-list">Grocery list to copy and paste (80+ items)</a></li>
              <li><a href="#household">How to adjust the list to your household</a></li>
              <li><a href="#by-aisle">How to organize your list by store aisle</a></li>
              <li><a href="#list-pantry">Why your list, pantry, and recipes need to be connected</a></li>
              <li><a href="#save-money">5 tips to save money at the grocery store</a></li>
              <li><a href="#monthly-cost">What it costs per month</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHY A LIST */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/4959907/pexels-photo-4959907.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Grocery list handwritten on paper on a kitchen table"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Kaboompics / Pexels</p>
          </div>

          <h2 id="why-a-list" className="img-above">Why a basic grocery list changes everything at the store</h2>

          <p>
            A basic grocery list isn&apos;t a meal plan. It&apos;s the floor — the items your household needs
            regardless of what gets cooked that particular week.
          </p>
          <p>
            Without one, you shop off memory. Memory lies. It swears there&apos;s still olive oil
            (there&apos;s a film at the bottom of the bottle), that the beans aren&apos;t out (they ran out
            Tuesday), and that you don&apos;t need toilet paper (you always need toilet paper). Shoppers
            without a list are far more likely to buy on impulse, and impulse purchases tend to run
            noticeably more expensive per trip than planned ones.
          </p>
          <p>
            A list scribbled in a phone note under a wall of unrelated reminders isn&apos;t really a list.
            A list organized by category — reviewed against what&apos;s actually in the kitchen before you
            leave — is different. You cover the essentials without a second trip two days later for
            what you forgot.
          </p>

          {/* THE 7 CATEGORIES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Colorful fresh fruits and vegetables in the produce section of a grocery store"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Muhamad Guruh Budi Hartono / Pexels</p>
          </div>

          <h2 id="the-7-categories" className="img-above">The 7 categories of a complete grocery list</h2>
          <p>
            Most households run fine on the same 7 categories. What changes from house to house
            is quantity — not the categories themselves.
          </p>

          <h3>1. Produce</h3>
          <p>
            Fruits and vegetables vary by taste and season. But a handful of items show up in
            almost every recipe — and they&apos;re the first to run out:
          </p>
          <ul className="item-list">
            <li>Lettuce</li>
            <li>Tomato</li>
            <li>Onion</li>
            <li>Garlic</li>
            <li>Potato</li>
            <li>Carrot</li>
            <li>Lemon or lime</li>
            <li>Banana, apple, or orange</li>
            <li>Papaya or whatever fruit is in season</li>
          </ul>

          <h3>2. Meat and protein</h3>
          <ul className="item-list">
            <li>Chicken breast</li>
            <li>Ground beef</li>
            <li>Fish fillet</li>
            <li>Eggs (a dozen or two)</li>
            <li>Canned tuna</li>
          </ul>

          <h3>3. Dairy</h3>
          <ul className="item-list">
            <li>Whole or low-fat milk</li>
            <li>Plain yogurt</li>
            <li>Shredded or sliced cheese</li>
            <li>Butter or margarine</li>
            <li>Cream cheese</li>
          </ul>

          <h3>4. Pantry staples</h3>
          <p>The dry-goods floor that shouldn&apos;t run out:</p>
          <ul className="item-list">
            <li>Rice</li>
            <li>Dried beans or lentils</li>
            <li>Pasta</li>
            <li>All-purpose flour</li>
            <li>Sugar</li>
            <li>Salt</li>
            <li>Coffee</li>
            <li>Olive oil or cooking oil</li>
            <li>Canned tomatoes</li>
            <li>Tomato sauce</li>
          </ul>

          <h3>5. Spices and condiments</h3>
          <ul className="item-list">
            <li>Black pepper</li>
            <li>Cumin</li>
            <li>Oregano</li>
            <li>Broth (bouillon or stock)</li>
            <li>Vinegar</li>
            <li>Mustard</li>
            <li>Mayonnaise</li>
          </ul>

          <h3>6. Cleaning supplies</h3>
          <ul className="item-list">
            <li>Dish soap</li>
            <li>Laundry detergent</li>
            <li>Disinfectant</li>
            <li>All-purpose cleaner</li>
            <li>Sponges</li>
            <li>Trash bags</li>
          </ul>

          <h3>7. Personal care</h3>
          <ul className="item-list">
            <li>Shampoo and conditioner</li>
            <li>Bar soap or body wash</li>
            <li>Toothpaste</li>
            <li>Deodorant</li>
            <li>Toilet paper</li>
          </ul>

          {/* COPY LIST */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/8580727/pexels-photo-8580727.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Organized home pantry shelves with the essential grocery categories"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: RDNE Stock project / Pexels</p>
          </div>

          <div className="blog-inline-cta">
            <p>Grocery shopping turned into a spreadsheet. <em>It shouldn&apos;t have.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          <h2 id="copy-list" className="img-above">Basic grocery list to copy and paste</h2>
          <p>
            Click &quot;Copy list&quot; and paste it straight into a text or notes app. Cross off what
            you already have at home before you leave — whatever&apos;s left is what you buy.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Basic grocery list — 80+ items</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Produce</h4>
                <ul>
                  <li>Lettuce</li><li>Tomato</li><li>Onion</li><li>Garlic</li>
                  <li>Potato</li><li>Carrot</li><li>Lemon/lime</li><li>Banana</li>
                  <li>Apple</li><li>Orange</li><li>Papaya</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Meat</h4>
                <ul>
                  <li>Chicken breast</li><li>Ground beef</li>
                  <li>Fish fillet</li><li>Eggs</li><li>Canned tuna</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Dairy</h4>
                <ul>
                  <li>Milk</li><li>Plain yogurt</li><li>Shredded cheese</li>
                  <li>Butter</li><li>Cream cheese</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Pantry</h4>
                <ul>
                  <li>Rice</li><li>Beans/lentils</li><li>Pasta</li>
                  <li>Flour</li><li>Sugar</li><li>Salt</li>
                  <li>Coffee</li><li>Olive/cooking oil</li>
                  <li>Canned tomatoes</li><li>Tomato sauce</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Spices</h4>
                <ul>
                  <li>Black pepper</li><li>Cumin</li><li>Oregano</li>
                  <li>Broth</li><li>Vinegar</li>
                  <li>Mustard</li><li>Mayonnaise</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Cleaning</h4>
                <ul>
                  <li>Dish soap</li><li>Laundry detergent</li><li>Disinfectant</li>
                  <li>All-purpose cleaner</li><li>Sponges</li><li>Trash bags</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Personal care</h4>
                <ul>
                  <li>Shampoo</li><li>Conditioner</li><li>Soap</li>
                  <li>Toothpaste</li><li>Deodorant</li><li>Toilet paper</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADJUST TO HOUSEHOLD */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/5427305/pexels-photo-5427305.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Family cooking together in a home kitchen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Amina Filkins / Pexels</p>
          </div>

          <h2 id="household" className="img-above">How to adjust the grocery list to your household</h2>
          <p>
            The basic list is the starting point. What changes from house to house is mostly
            quantity — plus a handful of adjustments depending on how you actually cook.
          </p>

          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="profile-card-name">Living alone</span>
              </div>
              <ul>
                <li>Half the quantities of the basic categories</li>
                <li>Smaller package sizes to cut down on waste</li>
                <li>More canned tuna and eggs, less fresh meat (it spoils faster)</li>
                <li>Loose produce instead of pre-bagged multipacks</li>
                <li>Estimate: $295-500 a month, food only</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="profile-card-name">Couple</span>
              </div>
              <ul>
                <li>About 2 lbs of rice and 1 lb of beans or lentils cover the week</li>
                <li>Protein for 8-10 meals a week</li>
                <li>Enough produce for daily cooking</li>
                <li>Cleaning and personal care in larger sizes (it pays off)</li>
                <li>Estimate: $612-785 a month, food only</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="profile-card-name">Family with kids</span>
              </div>
              <ul>
                <li>More milk and yogurt in the dairy category</li>
                <li>Widen the produce section — kids eat more fruit than adults assume</li>
                <li>Simple snacks: banana, carrot sticks, plain crackers</li>
                <li>Protein in cuts kids actually eat (chicken, eggs)</li>
                <li>Estimate: $1,013-1,380 a month, food only (family of 4)</li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="profile-card-head">
                <div className="profile-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.28 6.28C13.6 5 16 4 18 3c0 2 0 6-3 9.5" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span className="profile-card-name">Eating healthier</span>
              </div>
              <ul>
                <li>Widen produce: broccoli, spinach, zucchini, beets</li>
                <li>Swap some of the pasta for quinoa, lentils, or chickpeas</li>
                <li>Add nuts and seeds (almonds, peanuts) to the pantry</li>
                <li>Plain, unsweetened yogurt in the dairy category</li>
                <li>Extra-virgin olive oil instead of refined vegetable oil</li>
              </ul>
            </div>
          </div>

          {/* BY AISLE */}
          <h2 id="by-aisle">How to organize your list by store aisle</h2>
          <p>
            Organizing by aisle saves time inside the store. Instead of crisscrossing the same
            floor twice, you follow one logical path and get out faster. The order that works
            in most standard grocery stores:
          </p>
          <ul className="item-list">
            <li><strong>Produce</strong> — usually right by the entrance. Start here.</li>
            <li><strong>Bakery and deli</strong> — cheese, cold cuts, sliced bread.</li>
            <li><strong>Dry pantry goods</strong> — center aisles (rice, beans, pasta, oil).</li>
            <li><strong>Dairy and beverages</strong> — milk, yogurt, juice.</li>
            <li><strong>Cleaning and personal care</strong> — usually the last aisles before checkout.</li>
            <li><strong>Meat and seafood</strong> — fresh cuts.</li>
            <li><strong>Frozen foods</strong> — always last. Nothing thaws in the cart on the way out.</li>
          </ul>
          <p>
            The <a href="/en/funcionalidades/lista-de-compras">Mise shopping list app</a>{' '}
            sorts your items by aisle automatically — no reordering by hand at the store.
          </p>

          {/* LIST + PANTRY + RECIPES */}
          <h2 id="list-pantry">Why your list, pantry, and recipes need to be connected</h2>
          <p>
            The problem with forgetting garlic isn&apos;t the list. It&apos;s the disconnect between what
            you actually have, what you&apos;re cooking, and what you need to buy.
          </p>
          <p>
            Most households have a pantry nobody really tracks. There&apos;s a film of olive oil at the
            bottom of the bottle, an open bag of pasta from a brand that was on sale once, and two
            half-used containers of the same spice. What&apos;s actually missing, you only find out
            while cooking — not before you go to the store. Food waste at the household level in
            the U.S. runs into hundreds of dollars a year per household{' '}
            (
              <a href="https://www.usda.gov/media/blog/2016/09/20/food-waste-and-its-links-global-food-security-and-climate-change" target="_blank" rel="noopener">USDA, food waste research</a>
            ). A meaningful share of it starts right here: buying without knowing what you have,
            buying without knowing what you&apos;ll cook.
          </p>
          <p>
            Whoever plans the week&apos;s meals before writing the grocery list buys exactly what
            they&apos;ll use. Whoever writes the list without knowing what they&apos;re cooking buys
            &quot;stuff that seems useful&quot; — and finds out on Friday that Monday&apos;s chicken doesn&apos;t
            match anything left in the pantry. The{' '}
            <a href="/en/funcionalidades/cardapio-semanal">Mise weekly meal plan</a>{' '}
            connects recipes and the grocery list to fix exactly that.
          </p>
          <p>
            The basic list covers the floor. Connecting list, pantry, and recipes — knowing what
            ran out before you need it — handles the rest.{' '}
            <a href="/en/funcionalidades">See how Mise connects the two in practice.</a>
          </p>

          {/* SAVE MONEY */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/9929281/pexels-photo-9929281.jpeg?auto=compress&cs=tinysrgb&h=380&w=760"
              alt="Person calculating grocery spending with a notebook and pen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Towfiqu barbhuiya / Pexels</p>
          </div>

          <h2 id="save-money" className="img-above">5 tips to save money at the grocery store</h2>

          <p>
            Want the full playbook? We have a complete guide on{' '}
            <a href="/en/blog/como-economizar-no-mercado">how to save money on groceries</a>{' '}
            with 12 habits that actually move the needle — before, during, and after the trip.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Check the pantry before you leave</strong>
                <span>
                  5 minutes at home beats a 30-minute trip back for what you forgot. Look for
                  what&apos;s running low — not just what&apos;s already gone. If you want to get your
                  pantry fully organized, a fixed system for grouping and labeling shelves makes
                  this check take seconds instead of minutes.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Don&apos;t shop hungry</strong>
                <span>
                  Cliché, but it holds up. Impulse buying happens more on an empty stomach than
                  a full wallet. Hungry, everything looks necessary — especially the chip aisle.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Compare unit price, not sticker price</strong>
                <span>
                  The bigger package isn&apos;t always cheaper per ounce. Divide price by weight
                  before deciding. Most store shelf tags already show unit price — use it instead
                  of eyeballing the total.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Store brands on the basics</strong>
                <span>
                  Rice, beans, sugar, salt, flour — store brands typically cost 20-30% less than
                  national brands with comparable quality. Brand loyalty matters for seasoning,
                  not for rice.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">5</span>
              <div className="tip-body">
                <strong>Plan meals before you go</strong>
                <span>
                  Knowing what you&apos;re cooking that week kills the &quot;ingredients that seem
                  useful&quot; purchase. You buy what you&apos;ll actually use — and whatever isn&apos;t on
                  the menu doesn&apos;t make it into the cart.
                </span>
              </div>
            </li>
          </ul>

          {/* MONTHLY COST */}
          <h2 id="monthly-cost">What a basic grocery list costs per month</h2>
          <p>
            Cost varies with household size and where you shop. The figures below come from the{' '}
            <a href="https://www.fns.usda.gov/resource/usda-food-plans-cost-food-reports" target="_blank" rel="noopener">USDA Food Plans</a>{' '}
            (April 2026, Thrifty and Moderate levels — food only), plus a modest allowance for
            cleaning and personal care based on average household spending in the{' '}
            <a href="https://www.bls.gov/cex/" target="_blank" rel="noopener">BLS Consumer Expenditure Survey</a> (2024).
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>1 person</th>
                <th>Couple</th>
                <th>Family (4 people)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Food (USDA Thrifty–Moderate)</td>
                <td>$295-500</td>
                <td>$612-785</td>
                <td>$1,013-1,380</td>
              </tr>
              <tr>
                <td>Cleaning supplies</td>
                <td>$30-45</td>
                <td>$50-70</td>
                <td>$70-100</td>
              </tr>
              <tr>
                <td>Personal care</td>
                <td>$35-55</td>
                <td>$60-90</td>
                <td>$90-130</td>
              </tr>
              <tr>
                <td>Total monthly estimate</td>
                <td>$360-600</td>
                <td>$722-945</td>
                <td>$1,173-1,610</td>
              </tr>
            </tbody>
          </table>

          <p>
            These are national averages — your actual total shifts with where you live, which
            store you shop at, and how many meals you cook versus buy pre-made. To cut costs
            without dropping any of the 7 categories: default to store brands on the basics,
            watch for sales on non-perishable pantry items, and avoid the quick &quot;just one
            thing&quot; trip. That one is always the most expensive per item.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about grocery lists</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What should be on a basic grocery list?</p>
              <p className="faq-a">
                A basic list needs to cover 7 categories:{' '}
                <strong>produce</strong> (garlic, onion, tomato, fruit),{' '}
                <strong>meat and protein</strong> (chicken, eggs, tuna),{' '}
                <strong>dairy</strong> (milk, cheese, yogurt),{' '}
                <strong>pantry staples</strong> (rice, beans, pasta, olive oil, coffee),{' '}
                <strong>spices and condiments</strong> (pepper, oregano, broth),{' '}
                <strong>cleaning supplies</strong> (dish soap, detergent, disinfectant), and{' '}
                <strong>personal care</strong> (shampoo, toothpaste, toilet paper).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much does a basic grocery list cost per month?</p>
              <p className="faq-a">
                For a couple, groceries typically run{' '}
                <strong>$612-785 a month</strong> under the USDA Thrifty and Moderate Food Plans
                (April 2026), plus roughly $100-140 for cleaning and personal care. For one
                person, expect $295-500 for food. For a family of four, USDA food plans range
                from about $1,013 to $1,380 a month, before household basics.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you organize a grocery list by aisle?</p>
              <p className="faq-a">
                The most efficient order: <strong>produce</strong> (near the entrance) →{' '}
                <strong>bakery and deli</strong> → <strong>dry pantry goods</strong> →{' '}
                <strong>dairy and beverages</strong> → <strong>cleaning and personal care</strong> →{' '}
                <strong>meat and seafood</strong> → <strong>frozen foods</strong> (always last, so
                nothing thaws in the cart).
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Why make a grocery list before shopping?</p>
              <p className="faq-a">
                Shoppers with a list consistently spend <strong>less</strong> than those who go
                without one. It cuts impulse purchases, saves time in the store, and prevents
                forgetting staples you only notice are gone mid-week.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you make a grocery list for two people?</p>
              <p className="faq-a">
                For a couple, scale down quantities:{' '}
                <strong>about 2 lbs of rice and 1 lb of beans or lentils</strong> cover the week,
                protein for 8-10 meals, and enough produce for daily cooking. Weekly spend for
                two lands around <strong>$140-180</strong> using the 7 basic categories as the
                baseline.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you stop forgetting items at the grocery store?</p>
              <p className="faq-a">
                The most effective method is a <strong>fixed list organized by category</strong>{' '}
                checked against your pantry before you leave. That way you know what ran out
                before you need it, not after. Connecting your list, pantry, and recipes in one
                place is what actually closes the gap — and gets the garlic home.
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
                Founder of Mise. Has forgotten garlic at the store more times than he&apos;d like
                to admit — and built an app to fix that.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              No more grocery lists in a random notes app.<br />
              <em>Use Mise.</em>
            </h2>
            <p>
              Connects your pantry, recipes, and grocery list in one place.
              You&apos;ll never again find out the beans are gone right when it&apos;s time to cook dinner.
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
