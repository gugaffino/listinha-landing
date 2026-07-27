import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Garlic 101: Health Benefits, Types, and How to Store It',
  description: 'Garlic is a pungent bulb in the onion family. See what it is, the main types, how to cook with it, the benefits backed by science, and how to store it right.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
      en: 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho',
      es: 'https://www.miseemcasa.com.br/es/blog/o-que-e-alho',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/o-que-e-alho',
    },
  },
  openGraph: {
    title: 'Garlic 101: Health Benefits, Types, and How to Store It',
    description: 'Garlic is a pungent bulb in the onion family. See what it is, the main types, how to cook with it, the benefits backed by science, and how to store it right.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho',
    images: [
      {
        url: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Whole garlic bulbs on a brown surface — heads and visible cloves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garlic 101: Health Benefits, Types, and How to Store It',
    description: 'Garlic is a pungent bulb in the onion family. See what it is, the main types, how to cook with it, the benefits backed by science, and how to store it right.',
    images: ['https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is raw garlic better than cooked garlic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For allicin — garlic\'s main active compound — yes, raw or lightly processed is more effective. Heat breaks allicin down fast. One trick helps: mince or crush the garlic and let it sit for 10 minutes before cooking. That gives allicin time to form and makes it more heat-stable. Cooked garlic still has benefits, just at a lower concentration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cloves of garlic a day is safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most adults, 1 to 2 cloves a day is enough to get the benefits without side effects. Larger amounts can cause stomach discomfort in some people, especially on an empty stomach. There is no scientifically established magic dose, and more is not automatically better.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does garlic powder work as well as fresh garlic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For flavor, it is a partial substitute — milder and with a different aromatic profile than fresh. For nutritional benefits, it is less efficient, since the drying process reduces the active compounds. In a pinch, ¼ teaspoon of garlic powder is roughly equivalent to 1 fresh clove. Fresh always delivers more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does garlic turn blue-green when you cook it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a reaction between the sulfur compounds and amino acids in the bulb, triggered by high heat or contact with acid. It does not mean the garlic went bad or turned toxic — it is a normal chemical reaction. The flavor can turn slightly more bitter. To avoid it, cook over medium heat with oil that is still warm, not screaming hot.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get garlic smell off your hands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rub your hands on stainless steel — a spoon, the sink, or a stainless soap bar — under cold water for a few seconds. The metal neutralizes the sulfur compounds responsible for the smell. Regular soap barely helps, since the odor sits in your skin\'s pores. Stainless steel gets rid of almost all of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze garlic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is a good call if you buy in bulk or want convenience. The easiest method: blend peeled cloves with a little olive oil and freeze in an ice cube tray. Each cube equals about 1 tablespoon of minced garlic. Texture softens after freezing, so skip it for raw uses — but flavor and active compounds hold up well for up to 3 months.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garlic 101: Health Benefits, Types, and How to Store It',
  description: 'Garlic is a pungent bulb in the onion family. See what it is, the main types, how to cook with it, the benefits backed by science, and how to store it right.',
  image: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'What Is Garlic', item: 'https://www.miseemcasa.com.br/en/blog/o-que-e-alho' },
  ],
}

export default function GarlicEn() {
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
            <li className="breadcrumb-current" aria-current="page">What Is Garlic</li>
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
            Garlic: The No-Nonsense Guide for Anyone Who Cooks With It Every Week
          </h1>
          <p className="blog-desc">
            It&apos;s in the sauté, the sauce, the marinade, and the soup. But what is garlic, really — what types are out there, how do you use it without losing the aroma, and where does it disappear to whenever the recipe needs it and you&apos;re out again?
          </p>

          <div className="answer-box">
            <p>
              <strong>Garlic</strong> (<em>Allium sativum</em>) is an edible bulb in the allium family —
              the same family as onions, leeks, and shallots.
              Its sharp aroma and flavor come from <strong>allicin</strong>, a sulfur compound
              released when a clove is crushed or chopped. It&apos;s one of the most
              widely used ingredients in kitchens around the world.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Whole garlic bulbs on a brown surface — heads and visible cloves"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Pexels / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-garlic">What is garlic</a></li>
              <li><a href="#types">Types of garlic</a></li>
              <li><a href="#how-to-use">How to use garlic in cooking</a></li>
              <li><a href="#benefits">What the science says about the benefits</a></li>
              <li><a href="#how-to-store">How to store garlic</a></li>
              <li><a href="#on-your-list">Garlic on your shopping list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS GARLIC */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13800740/pexels-photo-13800740.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Peeled garlic cloves in close-up — firm white interior"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="what-is-garlic" className="img-above">What is garlic</h2>

          <p>
            Garlic isn&apos;t a root and it isn&apos;t a tuber — it&apos;s a bulb. The plant grows underground
            and forms a head made up of individual cloves, each wrapped in a thin skin, with a papery
            outer layer holding the whole thing together.
          </p>
          <p>
            The compound behind the smell and the flavor is allicin. It doesn&apos;t exist in a whole
            clove — it only forms once you cut, crush, or chop the garlic. Until then, the precursor
            compounds sit separated inside the cell walls. Physical damage is what triggers the
            reaction, which is why minced garlic tastes sharper than sliced garlic. More cells broken,
            more allicin released.
          </p>
          <p>
            Garlic is native to Central Asia and has been part of human cooking for at least 5,000
            years. It shows up in some form in nearly every cuisine on the planet — Italian, Chinese,
            Indian, Mexican, Korean, you name it. Along with onion, it&apos;s the starting point for the
            majority of savory cooking, everywhere.
          </p>
          <p>
            One clove weighs about 3 to 5 grams and has fewer than 5 calories. Whatever it does to a
            dish, it isn&apos;t doing it through macros.
          </p>

          {/* TYPES */}
          <h2 id="types">Types of garlic</h2>

          <p>
            Grocery stores mostly stock one type of garlic and call it a day, but there&apos;s more
            variety than the produce aisle lets on — and knowing the difference changes how you cook
            and how long a bulb lasts in your kitchen.
          </p>

          <h3>Softneck garlic</h3>
          <p>
            The kind you&apos;ll find in almost every supermarket. No hard central stem, which lets the
            plant produce more cloves per head — often 12 to 20 — in tighter, overlapping layers. It
            stores longer than hardneck varieties, sometimes 6 months or more in the right conditions,
            which is exactly why it dominates commercial supply.
          </p>

          <h3>Hardneck garlic</h3>
          <p>
            Grows a stiff central stalk (the &ldquo;neck&rdquo;) that produces fewer, larger cloves
            arranged in a single ring — usually 4 to 12 per head. Flavor tends to run bolder and more
            complex than softneck. It also produces scapes, the curly flower stalks, which are edible
            and taste like a milder, greener version of garlic. The tradeoff: it doesn&apos;t store as
            long, closer to 3 to 4 months.
          </p>

          <h3>Elephant garlic</h3>
          <p>
            Not actually garlic — it&apos;s a relative of the leek that just looks like an oversized
            garlic bulb. Cloves can be the size of a whole regular garlic head. The flavor is much
            milder, closer to a mild onion than true garlic. Good for roasting whole, not a real
            substitute when a recipe wants garlic&apos;s actual punch.
          </p>

          <h3>Black garlic</h3>
          <p>
            Regular garlic aged for weeks under controlled heat and humidity until it turns black and
            syrupy. The process converts the sharp, pungent compounds into something sweet and tangy,
            almost like balsamic vinegar with an umami backbone. No raw bite at all. Used in sauces,
            dressings, and spread straight onto bread.
          </p>

          <h3>Pre-minced, paste, and jarred garlic</h3>
          <p>
            Convenience products — jarred minced garlic in oil or water, garlic paste, garlic powder.
            Real time-savers, but the flavor profile isn&apos;t the same as fresh. Allicin breaks down
            fast once it&apos;s processed, so jarred minced garlic tastes noticeably flatter than
            garlic you mince yourself five minutes before cooking. Fine as a backup, not a first choice.
          </p>

          {/* HOW TO USE */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/10258187/pexels-photo-10258187.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="A whole braid of fresh garlic with leaves — cured bulbs ready to use"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="how-to-use" className="img-above">How to use garlic in cooking</h2>

          <p>
            How you cut garlic changes what it does in the pan. Mincing, slicing, crushing, and
            leaving it whole are not interchangeable techniques — they change how much allicin gets
            released and how the flavor behaves under heat.
          </p>

          <h3>Minced or crushed</h3>
          <p>
            The default for most sautéed dishes. The more you break down the clove&apos;s structure,
            the more allicin gets released and the sharper the flavor. One trick: smash the clove with
            the flat side of a knife before mincing — it loosens the skin and speeds up prep. Over
            medium heat, 30 to 60 seconds is enough before it starts to burn.
          </p>

          <h3>Sliced</h3>
          <p>
            Milder flavor, more texture. Good for sautéing greens, finishing a pasta dish, or frying
            in oil to make a garlic-infused oil. At high heat, thin slices turn golden and crisp fast
            — but the line between golden and burnt is thin, and burnt garlic turns bitter enough to
            ruin the whole dish.
          </p>

          <h3>Whole</h3>
          <p>
            Tossed into the pan unpeeled, garlic releases flavor slowly. Works well in long braises,
            stocks, and roasts. After enough time in the oven, a whole head turns soft and almost
            sweet — roasted garlic is basically a different ingredient, a spreadable paste that&apos;s
            good on bread, stirred into mashed potatoes, or blended into a sauce.
          </p>

          <h3>Raw</h3>
          <p>
            Salads, guacamole, tahini sauce, anything finished cold. The flavor is sharp — use it
            sparingly. One trick that takes the edge off without cooking it: soak minced garlic in
            lemon juice for 10 minutes before adding it to the dish. The acid mellows the bite without
            killing the aroma.
          </p>

          <h3>Garlic powder</h3>
          <p>
            The convenience option. Dissolves cleanly into marinades and dry rubs, though it
            doesn&apos;t caramelize the way fresh garlic does and lacks the same depth. Use it when
            fresh isn&apos;t on hand or when a recipe needs an even, grit-free texture. Rough
            conversion: 1 fresh clove is about ¼ teaspoon of garlic powder.
          </p>

          <div className="blog-inline-cta">
            <p>Garlic in the pantry, list built without thinking about it. <em>Mise handles it.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* BENEFITS */}
          <h2 id="benefits">What the science says about garlic&apos;s benefits</h2>

          <p>
            Garlic has been studied more than almost any other kitchen ingredient. Some claims hold up
            well. Others are still open questions. Here&apos;s what&apos;s actually established:
          </p>

          <h3>Heart health</h3>
          <p>
            This is the area with the strongest evidence. Review studies link regular garlic intake to
            modest reductions in systolic blood pressure and LDL cholesterol — typically a few points,
            not a dramatic swing. It doesn&apos;t replace medication, but it&apos;s a reasonable
            dietary habit. The main driver is allicin, which inhibits enzymes involved in cholesterol
            synthesis.
          </p>

          <h3>Antimicrobial activity</h3>
          <p>
            Allicin has documented antimicrobial activity in lab studies — it inhibits the growth of a
            range of bacteria and fungi in vitro. That doesn&apos;t mean garlic replaces antibiotics in
            real life. But it explains why garlic has been used as a preservative for centuries, and
            where the old folk belief that it &ldquo;fights off&rdquo; illness actually comes from.
          </p>

          <h3>Antioxidant properties</h3>
          <p>
            Garlic contains compounds that reduce cellular oxidative stress, which contributes to the
            anti-inflammatory effects seen in some studies. Aged garlic extract — garlic fermented over
            weeks — has a higher concentration of antioxidants than fresh garlic, which is why it&apos;s
            the form most often used in supplements.
          </p>

          <h3>What&apos;s not proven yet</h3>
          <p>
            Cancer treatment, detox claims, miracle cures — there&apos;s early, preliminary research in
            some of these areas, but nothing conclusive. Garlic doesn&apos;t need the hype. It has
            real, well-documented benefits, and that&apos;s plenty of reason to keep it around.
          </p>

          {/* HOW TO STORE */}
          <h2 id="how-to-store">How to store garlic so it lasts</h2>

          <p>
            Whole, unpeeled, in a cool spot with decent airflow — that&apos;s the baseline. No fridge
            for a whole head; cold and humidity speed up sprouting and mess with the texture. In a
            basket, a bowl, or a ceramic garlic keeper, a bulb lasts weeks without any special effort.
          </p>

          <h3>Peeled cloves</h3>
          <p>
            Loose, peeled cloves in a sealed container in the fridge keep for about a week. After that
            they start drying out and losing flavor. To stretch it further, cover them in olive oil —
            the garlic-infused oil left over is good for cooking too.
          </p>

          <h3>Minced garlic</h3>
          <p>
            Lasts about 3 days in the fridge in a sealed container. Allicin starts breaking down soon
            after the clove is cut, so the flavor fades fast. For regular cooking, mincing small
            batches right before you need them beats prepping a big batch in advance.
          </p>

          <h3>Sprouted garlic</h3>
          <p>
            Not trash. The green sprout in the center turns bitter — cut it out before using. The rest
            of the clove works fine. Sprouted garlic has a slightly milder flavor than fresh, but it
            still holds up in a sauté or a roast.
          </p>

          <h3>Freezing garlic</h3>
          <p>
            Blend peeled cloves with a little olive oil and freeze in an ice cube tray. Each cube is
            roughly one tablespoon of minced garlic. Straight from the freezer to the pan, no thawing
            needed. Texture changes after freezing, so it&apos;s not for eating raw once thawed — but
            for cooked dishes, it works well for up to 3 months.
          </p>

          {/* ON YOUR LIST */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/13059593/pexels-photo-13059593.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Garlic on a wooden table — loose heads and cloves ready for cooking"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Pexels / Pexels</p>
          </div>

          <h2 id="on-your-list" className="img-above">Garlic on your shopping list</h2>

          <p>
            Garlic is one of the items people forget most often — not because it&apos;s rare, but
            because it&apos;s cheap, small, and feels like it should last forever. It doesn&apos;t. A
            head disappears faster than you&apos;d think once you&apos;re cooking most nights.
          </p>
          <p>
            One head of garlic has 10 to 14 cloves on average. Use 2 cloves a meal and cook 5 nights a
            week, and a head lasts under 2 weeks. Cook for a family of four, and it&apos;s gone within
            the week. Putting garlic on the list every single week isn&apos;t overkill — it&apos;s just
            accurate.
          </p>
          <p>
            For anyone who cooks with any kind of system, tracking garlic in your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>{' '}
            is more useful than it sounds. You know exactly how many heads you have, when you&apos;re
            about to run out, and you don&apos;t end up mid-recipe on a Thursday night with an empty
            pan and no garlic.
          </p>
          <p>
            One simple approach: buy 3 to 4 heads at a time when the price is decent. Whole, unpeeled
            garlic keeps well for 3 weeks without any special care. Unlike leafy greens or delicate
            produce, there&apos;s basically no risk of it going bad before you get to it.
          </p>
          <p>
            Garlic belongs on any solid{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>{' '}
            — right next to onion, since together they show up in almost everything you&apos;ll cook
            this week. Run out of one and the recipe changes. Run out of both and you&apos;re
            improvising, and improvising doesn&apos;t always go well.
          </p>
          <p>
            You&apos;ll never forget garlic on the way home again. Unless you forget to check the list.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about garlic</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Is raw garlic better than cooked garlic?</p>
              <p className="faq-a">
                For allicin — garlic&apos;s main active compound — yes, raw or lightly processed is
                more effective. Heat breaks allicin down fast. One trick helps: mince or crush the
                garlic and let it sit for 10 minutes before cooking. That gives allicin time to form
                and makes it more heat-stable. Cooked garlic still has benefits, just at a lower
                concentration.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How many cloves of garlic a day is safe?</p>
              <p className="faq-a">
                For most adults, 1 to 2 cloves a day is a reasonable amount to get the benefits
                without stomach discomfort. Larger amounts can cause burning or irritation,
                especially on an empty stomach. More isn&apos;t automatically better — there&apos;s no
                scientifically established magic dose.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Does garlic powder work as well as fresh garlic?</p>
              <p className="faq-a">
                For flavor, it&apos;s a partial substitute — milder and with a different profile.
                For benefits, it&apos;s less efficient because drying reduces the active compounds.
                In a pinch: ¼ teaspoon of garlic powder is roughly equivalent to 1 fresh clove. Fresh
                always delivers more.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Why does garlic turn blue-green when you cook it?</p>
              <p className="faq-a">
                A reaction between the sulfur compounds and amino acids in the bulb, triggered by high
                heat or acid. It doesn&apos;t mean it went bad or turned toxic — it&apos;s normal
                chemistry. The flavor can turn slightly more bitter. To avoid it, cook over medium heat
                with oil that&apos;s still warm, never in an overheated pan.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you get garlic smell off your hands?</p>
              <p className="faq-a">
                Rub your hands on any stainless steel surface — a spoon, the sink, or a stainless soap
                bar — under cold water for a few seconds. The metal neutralizes the sulfur compounds.
                Regular soap barely helps, since the odor sits in your skin&apos;s pores. Stainless
                steel gets rid of almost all of it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can you freeze garlic?</p>
              <p className="faq-a">
                Yes. Blend peeled cloves with olive oil and freeze in an ice cube tray. Each cube
                equals about 1 tablespoon. Straight from the freezer to the pan, no thawing needed.
                Skip it raw once thawed — the texture changes. It holds up well for up to 3 months.
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
                Creator of Mise. Always sure there&apos;s garlic in the house. Wrong more often than not.
              </p>
            </div>
          </div>

          <div className="blog-cta reveal">
            <h2>
              A pantry that remembers.<br />
              <em>Let Mise handle it.</em>
            </h2>
            <p>
              Mise connects your pantry, recipes, and shopping list in one place. Garlic doesn&apos;t
              run out without warning — you&apos;ll know it&apos;s running low before you&apos;re stuck
              without it.
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
