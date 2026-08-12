import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'
import CopyButton from '../../../../components/CopyButton'

export const metadata = {
  title: 'New Home Checklist: 60+ Things You Actually Need (Room by Room)',
  description: 'A room-by-room new home checklist with 60+ essentials, what to buy on day one, the items everyone forgets, and a real cost estimate by household size.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casa-nova',
      en: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova',
      es: 'https://www.miseemcasa.com.br/es/blog/lista-de-compras-para-casa-nova',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/lista-de-compras-para-casa-nova',
    },
  },
  openGraph: {
    title: 'New Home Checklist: 60+ Things You Actually Need (Room by Room)',
    description: '60+ items by room, what to buy first, a real cost estimate, and a ready-to-copy checklist.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova',
    images: [
      {
        url: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Woman carrying a moving box into a bright new apartment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Home Checklist: 60+ Things You Actually Need (Room by Room)',
    description: '60+ items by room, what to buy first, a real cost estimate, and a ready-to-copy checklist.',
    images: ['https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should you buy first for a new home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the survival kit: bedding (sheets, pillowcase, pillow), towels, toilet paper, soap, toothpaste, a pot, a pan, basic plates and utensils, dish soap, and trash bags. These are the items you need for the first night — before any furniture or decor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be on a new home checklist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The checklist covers four areas: kitchen (cookware, appliances, and a starter pantry), bedroom and bathroom (bedding, towels, and toiletries), cleaning and laundry (supplies and equipment), and general items (light bulbs, extension cords, curtains). Toilet paper, a can opener, and a shower curtain are the three most commonly forgotten items in the rush of moving.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to furnish a new home from scratch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first shopping trip — cookware, bedding, cleaning supplies, and a starter pantry — runs about $300 to $500 for one person, $500 to $900 for a couple, and $800 to $1,400 for a family with kids. These estimates do not include furniture or major appliances like a refrigerator, stove, or washing machine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you organize new home shopping in stages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Split it into three waves: Day 1 (before you sleep there) — survival items: bedding, bathroom basics, a minimal kitchen, and basic cleaning supplies. Week 1 — round out the kitchen, extra bedding, the right light bulbs, and extension cords. Month 1 — the appliances you are still missing and bedroom or bathroom extras. Decor and comfort items come after the dust settles.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you avoid forgetting things on a moving checklist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organize the list by room, not by product type. Mentally walk through each space and note what you will need there. Use a shared list app if more than one person is shopping, so you do not duplicate items or skip whole categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can wait when setting up a new home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decor, artwork, area rugs, specialty kitchen gadgets (juicer, air fryer, stand mixer), extra comfort items, and anything you will not use in the first week. Buying everything at once leads to impulse spending — you find out what you actually need after living in the place for a few days.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Home Checklist: 60+ Things You Actually Need (Room by Room)',
  description: 'A new home checklist with 60+ items by room, what to buy on day one, a real cost estimate by household size, and a ready-to-copy list.',
  image: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'New Home Checklist', item: 'https://www.miseemcasa.com.br/en/blog/lista-de-compras-para-casa-nova' },
  ],
}

const copyText = `NEW HOME CHECKLIST

DAY ONE — SURVIVAL KIT
- Pillow (1 per person)
- Sheets and pillowcase
- Bath towel
- Toilet paper
- Soap, toothpaste, and toothbrush
- Large pot + frying pan
- Plates, cups, and basic utensils
- Dish soap + sponge + trash bags

KITCHEN — COOKWARE
- Large pot
- Medium pot
- Frying pan
- Kettle
- Cutting board
- Chef's knife
- Ladle and spatula
- Colander
- Plates (6)
- Bowls (6)
- Glasses (6)
- Flatware (6 full sets)
- Can opener and bottle opener

KITCHEN — APPLIANCES
- Blender
- Coffee maker
- Microwave

STARTER PANTRY
- Olive oil or cooking oil
- Salt and pepper
- Garlic and onion
- Rice and canned beans
- Pasta and tomato sauce
- Coffee and sugar
- Milk and eggs

BEDROOM
- Sheet sets (2 per bed)
- Pillows (2 per person)
- Comforter or duvet
- Hangers (20 minimum)

BATHROOM
- Bath towel (2 per person)
- Hand towel (2 per person)
- Bath mat
- Shower curtain, liner, and rings
- Shampoo and conditioner
- Soap
- Toothpaste and toothbrush
- Deodorant
- Toilet paper (stock up)
- Plunger and toilet brush

CLEANING AND LAUNDRY
- Broom + dustpan
- Mop and bucket
- Laundry detergent
- Disinfectant spray or wipes
- Dish soap
- Sponges
- Trash bags (multiple sizes)
- Laundry hamper
- Pest control spray

GENERAL
- Extra light bulbs
- Power strip or extension cords
- Curtains or blackout shades (bedroom first)
- Flashlight and batteries`

export default function NewHomeChecklistEn() {
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
            <li className="breadcrumb-current" aria-current="page">New Home Checklist</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-12">Aug 12, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">8 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            New Home Checklist: What You Actually Need, Room by Room
          </h1>
          <p className="blog-desc">
            Moving into a new place and realizing there&apos;s no toilet paper. It happens to everyone who shops without a list.
            This guide has 60+ items organized by room, what to buy on day one, and a checklist ready to copy and use.
          </p>

          <div className="answer-box">
            <p>
              A <strong>new home checklist</strong> covers four areas:{' '}
              <strong>kitchen</strong> (cookware, appliances, and a starter pantry),{' '}
              <strong>bedroom and bathroom</strong> (bedding, towels, and toiletries),{' '}
              <strong>cleaning and laundry</strong> (supplies and equipment), and{' '}
              <strong>general items</strong> (light bulbs, extension cords, curtains).
              Start with the survival kit — what you need for the first night — and buy the rest in waves.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Woman carrying a moving box into a bright, newly furnished apartment"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Kampus Production / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#day-one">What to buy on day one</a></li>
              <li><a href="#kitchen">Room by room: kitchen</a></li>
              <li><a href="#bedroom-bathroom">Room by room: bedroom and bathroom</a></li>
              <li><a href="#living-room">Room by room: living room</a></li>
              <li><a href="#cleaning">Cleaning and laundry</a></li>
              <li><a href="#copy-list">Full copy-paste checklist</a></li>
              <li><a href="#stages">What can wait: shopping in stages</a></li>
              <li><a href="#cost">How much it will cost</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* DAY ONE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/30811284/pexels-photo-30811284.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Colorful fresh fruit and produce at a market, representing the first grocery run for a new home"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: TBD Traveller / Pexels</p>
          </div>

          <h2 id="day-one" className="img-above">What to buy on day one (top priority)</h2>

          <p>
            Before anything about how the place looks, there&apos;s level zero: what you need to make it through the first night.
            Without these, nothing else matters yet.
          </p>
          <p>
            Most people forget at least one essential in the chaos of moving day. Toilet paper is the most common miss.
            Runner-up: nobody remembers a shower curtain until they&apos;re standing in the tub holding one.
          </p>

          <h3>The survival kit</h3>
          <ul className="item-list">
            <li><strong>Bedding:</strong> sheets, a pillowcase, and at least one pillow per person</li>
            <li><strong>Bath towel</strong> — one per person</li>
            <li><strong>Minimal toiletries:</strong> toilet paper, soap, toothpaste, and a toothbrush</li>
            <li><strong>Survival kitchen:</strong> one large pot, one pan, plates, cups, and basic utensils</li>
            <li><strong>Starter pantry:</strong> eggs, coffee, bread — enough that you&apos;re not stuck ordering delivery right away</li>
            <li><strong>Basic cleaning:</strong> dish soap, a sponge, and trash bags</li>
          </ul>
          <p>
            Everything not on this list can wait. The couch can wait. The floating shelf can wait.
            Toilet paper can&apos;t.
          </p>

          {/* KITCHEN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/11295908/pexels-photo-11295908.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Modern organized kitchen with a stove and counter, representing the new home kitchen"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Vidal Balielo Jr. / Pexels</p>
          </div>

          <h2 id="kitchen" className="img-above">Room by room: kitchen</h2>

          <p>
            The kitchen needs more items than any other room — and it&apos;s the easiest one to underestimate.
            You remember the pot. You forget the can opener. You remember the coffee. You forget the mugs.
          </p>

          <h3>Cookware and tools</h3>
          <ul className="item-list">
            <li>Large pot + medium pot</li>
            <li>Frying pan</li>
            <li>Kettle</li>
            <li>Cutting board</li>
            <li>Chef&apos;s knife + a couple of smaller knives</li>
            <li>Ladle, spatula, and wooden spoon</li>
            <li>Colander</li>
            <li>Plates (6), bowls (6), glasses (6)</li>
            <li>Flatware — 6 full sets</li>
            <li>Can opener and bottle opener</li>
          </ul>

          <h3>Basic appliances</h3>
          <ul className="item-list">
            <li>Blender</li>
            <li>Coffee maker</li>
            <li>Microwave (if it doesn&apos;t come with the unit)</li>
          </ul>

          <h3>Starter pantry</h3>
          <p>
            This isn&apos;t the full month&apos;s grocery run — it&apos;s the minimum to have something to eat while you&apos;re
            still unpacking boxes. Once the kitchen is up and running, that&apos;s when you build out a complete pantry.
          </p>
          <ul className="item-list">
            <li>Olive oil or cooking oil, salt and pepper</li>
            <li>Garlic and onion</li>
            <li>Rice, canned beans, and pasta</li>
            <li>Tomato sauce</li>
            <li>Coffee, sugar, milk, and eggs</li>
          </ul>

          {/* BEDROOM AND BATHROOM */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32173692/pexels-photo-32173692.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cozy bedroom with a made bed and light decor, representing the new home bedroom"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: paulo remorini / Pexels</p>
          </div>

          <h2 id="bedroom-bathroom" className="img-above">Room by room: bedroom and bathroom</h2>

          <p>
            Two sheet sets per bed make a real difference. When one is in the wash, the other is already on the bed.
            It sounds obvious, and it&apos;s exactly the kind of thing everyone forgets to buy in duplicate.
          </p>

          <h3>Bedroom</h3>
          <ul className="item-list">
            <li>Sheet sets — 2 per bed (one in use, one spare)</li>
            <li>Pillows — 2 per person</li>
            <li>Comforter or duvet</li>
            <li>Hangers — start with 20, you&apos;ll need more</li>
          </ul>

          <h3>Bathroom</h3>
          <ul className="item-list">
            <li>Bath towel — 2 per person</li>
            <li>Hand towel — 2 per person</li>
            <li>Bath mat</li>
            <li>Shower curtain, liner, and rings — apartments rarely include one</li>
            <li>Shampoo, conditioner, soap, toothpaste, deodorant</li>
            <li>Toilet paper — buy more than you think. You&apos;ll use it.</li>
          </ul>

          <p>
            A detail almost everyone misses: a plunger and a toilet brush. It sounds unnecessary — until it isn&apos;t,
            and the nearest store closes in twenty minutes.
          </p>

          {/* LIVING ROOM */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/32922272/pexels-photo-32922272.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Woman arranging a minimalist living room with cushions and neutral decor"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Letícia Alvares / Pexels</p>
          </div>

          <h2 id="living-room" className="img-above">Room by room: living room</h2>

          <p>
            The living room is where people overspend on impulse and need the least right away.
            The couch can wait a week. What can&apos;t wait:
          </p>
          <ul className="item-list">
            <li><strong>Power strips or extension cords</strong> — a new place rarely has enough outlets where you actually need them</li>
            <li><strong>Light bulbs</strong> — check the wattage and base type before buying. Every fixture is a little different.</li>
            <li><strong>Curtains or blackout shades</strong> — at least in the bedroom. The first sunrise straight in your face at 6 a.m. settles any debate about priority.</li>
          </ul>

          <p>
            Living room styling, artwork, and comfort items: not week two. Wait until you know where everything is actually going to go.
          </p>

          {/* CLEANING */}
          <h2 id="cleaning">Cleaning and laundry</h2>

          <p>
            Not glamorous, but it&apos;s what keeps the place livable in the first few days.
            A recently vacated home collects dust — and if it sat empty for a while, possibly more than dust.
          </p>
          <ul className="item-list">
            <li>Broom and dustpan</li>
            <li>Mop and bucket</li>
            <li>Laundry detergent</li>
            <li>Disinfectant spray or wipes</li>
            <li>Dish soap</li>
            <li>Sponges</li>
            <li>Trash bags — buy a few sizes</li>
            <li>Laundry hamper — an easy one to forget until laundry starts piling on the floor</li>
            <li>Pest control spray, especially if the unit sat empty for a while</li>
          </ul>

          <p>
            Shopping without a checklist is one of the fastest ways moving-day spending gets out of hand — you end up
            buying duplicates of what&apos;s already in the cart, or making three extra trips for what you forgot.
            Having the right supplies from day one builds the habit before the chaos of unpacking takes over.
          </p>

          {/* COPY LIST */}
          <h2 id="copy-list">Full copy-paste checklist</h2>
          <p>
            Click &quot;Copy list,&quot; paste it into Notes or a group chat, and cross off what you already own.
            Whatever&apos;s left is what you buy.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">New home checklist (60+ items)</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Survival kit</h4>
                <ul>
                  <li>Sheets and pillowcase</li><li>Pillow</li><li>Bath towel</li>
                  <li>Toilet paper</li><li>Soap + toothpaste</li><li>Pot + pan</li>
                  <li>Plates + utensils</li><li>Dish soap + trash bags</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Kitchen</h4>
                <ul>
                  <li>Large and medium pot</li><li>Kettle</li><li>Cutting board</li>
                  <li>Knives</li><li>Ladle and spatula</li><li>Colander</li>
                  <li>Plates (6) + glasses (6)</li><li>Flatware (6)</li><li>Can opener</li>
                  <li>Blender</li><li>Coffee maker</li><li>Microwave</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Pantry</h4>
                <ul>
                  <li>Olive or cooking oil</li><li>Salt and pepper</li><li>Garlic and onion</li>
                  <li>Rice and beans</li><li>Pasta</li><li>Tomato sauce</li>
                  <li>Coffee and sugar</li><li>Milk and eggs</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Bedroom</h4>
                <ul>
                  <li>Sheet sets (×2)</li><li>Pillows (×2)</li>
                  <li>Comforter or duvet</li><li>Hangers (20+)</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Bathroom</h4>
                <ul>
                  <li>Bath towel (×2)</li><li>Hand towel (×2)</li>
                  <li>Bath mat</li><li>Shower curtain + liner</li>
                  <li>Shampoo + conditioner</li><li>Soap</li><li>Toilet paper (stock up)</li>
                  <li>Plunger + toilet brush</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Cleaning</h4>
                <ul>
                  <li>Broom + dustpan</li><li>Mop + bucket</li><li>Laundry detergent</li>
                  <li>Disinfectant</li><li>Dish soap</li><li>Sponges</li>
                  <li>Trash bags</li><li>Laundry hamper</li><li>Pest control spray</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>General</h4>
                <ul>
                  <li>Extra light bulbs</li><li>Power strip</li>
                  <li>Curtains or blackout shades</li><li>Flashlight + batteries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-inline-cta">
            <p>Stop deciding what to buy. <em>Start cooking.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* STAGES */}
          <h2 id="stages">What can wait: shopping in stages</h2>

          <p>
            The biggest trap when setting up a new place is trying to buy everything at once.
            It doesn&apos;t save time — it just makes the bill land all at once. Shopping without a plan is one of the
            most reliable ways to overspend, and doing the whole home&apos;s first shopping trip with no plan makes it worse.
          </p>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Day 1 — before you sleep there</strong>
                <span>
                  Survival kit: bedding, bathroom basics, a minimal kitchen, and essential cleaning supplies.
                  Nothing more.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Week 1 — round out the essentials</strong>
                <span>
                  A complete kitchen, extra bedding, the right light bulbs, extension cords where you need them.
                  You can already cook and live without relying on delivery.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Month 1 — what you&apos;ll actually use</strong>
                <span>
                  After living there a few days, you find out what&apos;s genuinely missing.
                  Comfort appliances, bedroom and bathroom extras — buy them once you know you&apos;ll use them.
                </span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Later — decor and comfort</strong>
                <span>
                  Artwork, area rugs, specialty kitchen gadgets, décor pieces.
                  The place tells you what it needs after a while. Not before.
                </span>
              </div>
            </li>
          </ul>

          <p>
            With{' '}
            <a href="/en/funcionalidades/lista-de-compras">Mise&apos;s shopping list</a>{' '}
            you organize shopping waves by category, share the list with whoever&apos;s helping you move, and avoid buying doubles.
          </p>

          {/* COST */}
          <h2 id="cost">How much it will cost: estimate by household</h2>

          <p>
            It depends on what you already own, the quality you choose, and the size of the place.
            The estimates below cover cookware, bedding, cleaning supplies, and a starter pantry — not furniture or major
            appliances like a refrigerator, stove, or washing machine.
          </p>

          <table className="cost-table">
            <thead>
              <tr>
                <th>Household</th>
                <th>First shopping trip estimate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single person</td>
                <td>$300–500</td>
              </tr>
              <tr>
                <td>Couple</td>
                <td>$500–900</td>
              </tr>
              <tr>
                <td>Family with kids</td>
                <td>$800–1,400</td>
              </tr>
            </tbody>
          </table>

          <p>
            To spend less: start with basic brands on utility items (cookware, cleaning cloths),
            buy larger sizes on cleaning products (cheaper per unit), and save the quality items for
            once you know what you&apos;ll actually use often. The monthly grocery bill — once the kitchen
            is set up — typically runs{' '}
            <strong>$700–1,000 for a couple on a moderate budget</strong>{' '}
            (
              <a href="https://www.usda.gov/" target="_blank" rel="noopener">USDA Cost of Food Reports</a>
            ).
            With{' '}
            <a href="/en/funcionalidades/despensa">Mise&apos;s pantry</a>,
            you track what&apos;s running low before you need it — and avoid buying what you already have.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about new home checklists</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">What should you buy first for a new home?</p>
              <p className="faq-a">
                Start with the survival kit:{' '}
                <strong>bedding, towels, toilet paper, soap, toothpaste, a pot, a pan, basic plates and utensils, dish soap, and trash bags.</strong>{' '}
                These are the items you need for the first night — before any furniture or decor.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What should be on a new home checklist?</p>
              <p className="faq-a">
                The checklist covers four areas: <strong>kitchen</strong> (cookware, appliances, and a starter pantry),{' '}
                <strong>bedroom and bathroom</strong> (bedding, towels, and toiletries),{' '}
                <strong>cleaning and laundry</strong>, and <strong>general items</strong> (light bulbs, extension cords, curtains).
                The three most commonly forgotten items in the rush of moving: toilet paper, a shower curtain, and a can opener.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much does it cost to furnish a new home from scratch?</p>
              <p className="faq-a">
                The first shopping trip — cookware, bedding, cleaning supplies, and a starter pantry — runs about{' '}
                <strong>$300–500 for one person</strong>, <strong>$500–900 for a couple</strong>, and{' '}
                <strong>$800–1,400 for a family with kids</strong>. These estimates don&apos;t include furniture or
                major appliances like a refrigerator, stove, or washing machine.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you organize new home shopping in stages?</p>
              <p className="faq-a">
                Split it into three waves: <strong>Day 1</strong> — survival items (bedding, bathroom basics, a minimal kitchen).{' '}
                <strong>Week 1</strong> — round out the kitchen, extra bedding, light bulbs, and extension cords.{' '}
                <strong>Month 1</strong> — the appliances you&apos;re still missing and room-by-room extras.
                Decor and comfort items come once you know what the place actually needs.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you avoid forgetting things on a moving checklist?</p>
              <p className="faq-a">
                Organize the list by room, not by product type. Mentally walk through each space and note what you&apos;ll
                need there. If more than one person is shopping, use a{' '}
                <a href="/en/funcionalidades/lista-de-compras">real-time shared list</a>{' '}
                to avoid duplicate items or skipped categories entirely.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What can wait when setting up a new home?</p>
              <p className="faq-a">
                Decor, artwork, area rugs, specialty kitchen gadgets (air fryer, stand mixer, juicer),
                and anything you won&apos;t use in the first week. You find out what you actually need
                after living there a few days — not before you move in.
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
                Creator of Mise. Once moved into a new apartment without toilet paper. Only had to happen once.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              New place, new list.<br />
              <em>Use Mise.</em>
            </h2>
            <p>
              Connect your pantry, recipes, and shopping list in one place.
              You&apos;ll never find out the olive oil ran out mid-recipe again.
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
