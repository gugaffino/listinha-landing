import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Nutmeg: What It’s For and How to Use It in Cooking',
  description: 'Nutmeg deepens the flavor of creamy dishes and sweets — it’s not the star ingredient. See what it is, how much to use, and how to store it without losing the aroma.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
      en: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada',
      es: 'https://www.miseemcasa.com.br/es/blog/para-que-serve-noz-moscada',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/para-que-serve-noz-moscada',
    },
  },
  openGraph: {
    title: 'Nutmeg: What It’s For and How to Use It in Cooking',
    description: 'Nutmeg deepens the flavor of creamy dishes and sweets — it’s not the star ingredient. See what it is, how much to use, and how to store it without losing the aroma.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada',
    images: [
      {
        url: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Aromatic spices in white ceramic bowls — nutmeg among the warm spices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutmeg: What It’s For and How to Use It in Cooking',
    description: 'Nutmeg deepens the flavor of creamy dishes and sweets — it’s not the star ingredient. See what it is, how much to use, and how to store it without losing the aroma.',
    images: ['https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can nutmeg be used in savory dishes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and that’s where it shines most. Béchamel, mashed potatoes, gratins, creamy soups, and spinach fillings all taste different with a pinch of nutmeg. It doesn’t add a flavor you can point to; it deepens and rounds out the dish. It’s the kind of ingredient that, when missing, leaves something feeling unfinished — without you knowing exactly what.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much nutmeg should you use per recipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For dishes serving 4 to 6 people, a quarter teaspoon of ground nutmeg is a good starting point. Freshly grated, that’s about 5 to 8 passes on a fine grater. Start with less — it’s easier to add more than to fix an overdose. In sweets and hot drinks, the amount is usually even smaller: a pinch is enough for the aroma to come through.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s the difference between whole and ground nutmeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whole nutmeg holds its aroma much longer — several years in a sealed container, against a year or two for ground. Freshly grated, the aroma is more intense and fresher. Ground is more convenient, but fades faster. If you use nutmeg often, a whole nutmeg with a fine grater pays off. If you use it rarely, ground still works fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can nutmeg be harmful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cooking amounts, no. The problem shows up at doses far above anything a recipe calls for — upward of 5g (several whole teaspoons) can cause nausea, dizziness, and neurological effects. At the amounts used for cooking — a pinch or a quarter teaspoon — it’s completely safe. Pregnant women are often advised to avoid large amounts, but the normal cooking dose isn’t considered a risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What’s the difference between nutmeg and mace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mace is the reddish membrane that wraps around the nutmeg seed — both come from the same plant. Mace tastes milder and slightly floral. Nutmeg is more intense and earthy. Mace is uncommon outside specialty spice shops, so you likely won’t find it at a regular grocery store. For practical purposes, they’re interchangeable in recipes that call for one or the other, adjusting the amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you store nutmeg at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a sealed container, away from heat, light, and moisture. Avoid storing it above the stove or near a window — heat and light speed up how fast it loses aroma. Whole nutmeg holds up for several years under those conditions. Ground nutmeg starts fading after a year or so. The tell that ground nutmeg is past its prime: weak or absent smell when you open the jar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can you buy nutmeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At any grocery store, in the spice aisle. Ground nutmeg is the easiest to find, usually in small jars. Whole nutmeg is less common but shows up at larger grocery stores and specialty spice shops. It costs more per ounce than cinnamon or cumin, but since each use is such a small amount, one jar lasts a long time.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nutmeg: What It’s For and How to Use It in Cooking',
  description: 'Nutmeg deepens the flavor of creamy dishes and sweets — it’s not the star ingredient. See what it is, how much to use, and how to store it without losing the aroma.',
  image: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Nutmeg in the Kitchen', item: 'https://www.miseemcasa.com.br/en/blog/para-que-serve-noz-moscada' },
  ],
}

export default function NutmegEn() {
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
            <li className="breadcrumb-current" aria-current="page">Nutmeg in the Kitchen</li>
          </ol>
        </nav>

        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-meta-author">Gus</span>
            <span className="blog-meta-sep">·</span>
            <time className="blog-date" dateTime="2026-08-03">Aug 3, 2026</time>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min read</span>
            <span className="blog-meta-sep">·</span>
            <a href="/en/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Nutmeg in the Kitchen: What It&apos;s For and How Much to Use
          </h1>
          <p className="blog-desc">
            The recipe says &quot;nutmeg to taste.&quot; You don&apos;t know how much. Too little and nobody notices. Too much and the dish turns bitter. Here&apos;s what nutmeg actually does, where to use it, and why a quarter teaspoon changes everything.
          </p>

          <div className="answer-box">
            <p>
              <strong>Nutmeg</strong> is the dried seed of the <em>Myristica fragrans</em> tree, native to the Moluccas islands in Indonesia.
              It deepens and rounds out the flavor of creamy dishes, soups, and sweets — not as the headline flavor, but as the ingredient that makes everything else taste more finished.
              In normal cooking amounts, a quarter teaspoon is enough for 4 to 6 servings.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Aromatic spices in white ceramic bowls on a wooden surface"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Mareefe / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-nutmeg">What nutmeg is</a></li>
              <li><a href="#what-its-for">What nutmeg is for in cooking</a></li>
              <li><a href="#recipes">Recipes where it makes a difference</a></li>
              <li><a href="#how-to-use">How to use it: the right amount and when to add it</a></li>
              <li><a href="#benefits">Benefits and safety</a></li>
              <li><a href="#buying-and-storage">Buying and storing nutmeg</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS NUTMEG */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Four spices on wooden spoons over a rustic surface — a variety of warm spices"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Marta Branco / Pexels</p>
          </div>

          <h2 id="what-is-nutmeg" className="img-above">What nutmeg is</h2>

          <p>
            Nutmeg is the dried seed of <em>Myristica fragrans</em>, a tropical tree native to the Moluccas islands — what today is part of Indonesia. For centuries it was one of the most valuable spices in the world: at one point it was worth more than its weight in gold in Europe, and the fight for control of the producing islands reshaped the map of Southeast Asia.
          </p>
          <p>
            Today you can pick it up at any grocery store for a couple of dollars. But that historical value said something real about what it does: it&apos;s a spice that transforms dishes in a way that&apos;s hard to describe until you&apos;ve tasted it. It&apos;s not like chili, which you identify the second it hits your tongue. It&apos;s subtler than that. The dish just tastes more finished — and you don&apos;t necessarily know why.
          </p>
          <p>
            The seed comes wrapped in a reddish membrane called mace, which tastes similar but milder. Mace is uncommon in most grocery stores — you&apos;ll typically only find whole nutmeg or ground nutmeg on the shelf. They&apos;re two products from the same plant.
          </p>
          <p>
            The aroma of whole nutmeg is intense, warm, and slightly woody. In ground form, that aroma fades faster — which is why older recipes call for grating it fresh, and why that step still makes a difference today.
          </p>

          {/* WHAT ITS FOR */}
          <h2 id="what-its-for">What nutmeg is for in cooking</h2>

          <p>
            Nutmeg doesn&apos;t season — it deepens. That distinction matters, because it changes where and how you use it.
          </p>
          <p>
            When you add salt, pepper, or garlic to a dish, you&apos;re adding a flavor you can point to. Nutmeg works differently: it intensifies the other flavors, smooths out rough edges, and gives a sense of completeness that&apos;s hard to name but impossible to ignore once it&apos;s missing. It&apos;s the ingredient that gets people going back for seconds of mashed potatoes without quite knowing why.
          </p>
          <p>
            It works especially well in fat-rich dishes — white sauce, cream, butter — because nutmeg&apos;s aromatic compounds bind to fat molecules and spread through the dish more evenly. That&apos;s why a béchamel made with nutmeg has a completely different depth than the same sauce without it.
          </p>
          <p>
            In sweets, the mechanism is similar: it complements cinnamon, clove, and vanilla without competing with them, adding a warmer, more complex note underneath. Rice pudding, spice cookies, mulled wine, and eggnog all taste different — and better — with it.
          </p>

          {/* RECIPES */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/678412/pexels-photo-678412.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Cinnamon sticks and star anise on a dark surface — warm aromatic spices"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Mareefe / Pexels</p>
          </div>

          <h2 id="recipes" className="img-above">Recipes where nutmeg makes a difference</h2>

          <p>
            Nutmeg shows up in two culinary worlds: creamy savory dishes and spiced desserts. The recipes below are where it actually earns its place — not as decoration, but as a component that changes the result.
          </p>

          <h3>White sauce (béchamel)</h3>
          <p>
            The classic use, and the most transformative one. A pinch of nutmeg is standard in the original French béchamel — and in most Italian lasagna recipes. Without it, the sauce is fine. With it, it&apos;s finished. If you&apos;ve never tried it, this is the first place to test the difference.
          </p>

          <h3>Mashed potatoes</h3>
          <p>
            Alongside butter and warm milk, nutmeg is the third pillar of a mash that makes people ask what&apos;s different about it. The potatoes don&apos;t taste like nutmeg. They taste like good mashed potatoes.
          </p>

          <h3>Gratins and fillings</h3>
          <p>
            Any creamy gratin — potato, cauliflower, zucchini — pairs well with nutmeg. In spinach fillings with ricotta or cream cheese, it balances the vegetal note of the greens and deepens the creaminess of the cheese.
          </p>

          <h3>Creamy soups</h3>
          <p>
            Butternut squash soup, potato soup, cream of mushroom — all of them taste better with a pinch of nutmeg stirred in at the end. Add it after you take the pot off the heat to preserve the aroma.
          </p>

          <h3>Rice pudding and spiced desserts</h3>
          <p>
            Rice pudding practically calls for nutmeg. Spice cookies, apple cake, banana bread, and pumpkin pie do too. Paired with cinnamon and clove, it rounds out the trio of warm spices that defines the flavor profile of a lot of European baking and winter desserts.
          </p>

          <h3>Hot drinks</h3>
          <p>
            Eggnog, mulled wine, hot chocolate, and chai all get an extra layer of complexity from a pinch grated in right before serving. It&apos;s the kind of small detail that turns a everyday drink into something you made on purpose.
          </p>

          <div className="blog-inline-cta">
            <p>Cooking shouldn&apos;t be this much of a headache. <em>Mise fixes that.</em></p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
              Start free →
            </a>
          </div>

          {/* HOW TO USE */}
          <h2 id="how-to-use">How to use nutmeg: the right amount and when to add it</h2>

          <p>
            The recipe says &quot;nutmeg to taste&quot; and you end up staring at the jar. That happens to everyone. The vague instruction exists because taste varies — but there&apos;s a concrete starting point.
          </p>

          <h3>Reference dose</h3>
          <p>
            For dishes serving 4 to 6 people, start with a quarter teaspoon of ground nutmeg. Freshly grated, that&apos;s about 5 to 8 passes on a fine grater. It&apos;s less than you&apos;d think — and it&apos;s always easier to add more than to fix an overdose. Too much nutmeg takes over a dish and turns bitter.
          </p>

          <h3>Whole or ground</h3>
          <p>
            Whole nutmeg, freshly grated with a microplane or fine grater, has a noticeably fresher, more intense aroma. It&apos;s worth it if you use nutmeg with any regularity — a whole nutmeg keeps its punch for years, while ground nutmeg starts fading after about a year.
          </p>
          <p>
            For occasional use, ground still works fine. Just check that it still has aroma before you use it — open the jar and smell it. If the smell is weak, you&apos;ll need to use more to get the same effect.
          </p>

          <h3>When to add it during cooking</h3>
          <p>
            In sauces and mashes, add it near the end of cooking — or after you&apos;ve taken the pot off the heat. Prolonged heat weakens the aroma. In cake and cookie batters, it goes in with the other dry ingredients and holds up fine in the oven. In hot drinks, grate it straight into the cup right before serving.
          </p>

          {/* BENEFITS */}
          <h2 id="benefits">Benefits and safety</h2>

          <p>
            Nutmeg has antioxidant properties and compounds with anti-inflammatory activity — eugenol, myristicin, and elemicin are the main ones. In lab studies, these compounds have shown digestive and antimicrobial effects. In practice, the amounts used in cooking are too small to produce any measurable therapeutic effect.
          </p>
          <p>
            Use nutmeg because it improves the flavor of what you cook. Not because it&apos;s going to fix digestion or inflammation — those claims require doses far above what any recipe calls for.
          </p>
          <p>
            The real caution: nutmeg in excess is toxic. Above roughly 5g — the equivalent of several whole teaspoons — it can cause nausea, dizziness, hallucinations, and other neurological effects. That&apos;s well beyond any reasonable culinary use. A pinch or a quarter teaspoon in a family dinner is completely safe.
          </p>
          <p>
            Pregnant women are often advised to avoid large amounts, but the normal cooking dose isn&apos;t considered an established risk. If you have a specific concern, that&apos;s a question for a doctor, not a food blog.
          </p>

          {/* BUYING AND STORAGE */}
          <h2 id="buying-and-storage">Buying and storing nutmeg</h2>

          <p>
            Nutmeg is in the spice aisle of any grocery store. The ground version is the easiest to find, usually in small jars. Whole nutmeg is less common but shows up at larger grocery stores and specialty spice shops — worth seeking out if you use it regularly.
          </p>
          <p>
            It costs more per ounce than cinnamon or cumin, but since each use is such a small amount, one jar or a couple of whole nutmegs will last a long time. If you&apos;re shopping around, compare the price per ounce rather than the price per jar — jar sizes vary enough to make sticker prices misleading.
          </p>

          <h3>How to store it right</h3>
          <p>
            Keep it in a sealed container, away from heat, light, and moisture. The biggest mistake is storing it above the stove: the steam and heat from cooking wear down the aroma of any spice within weeks. A dry shelf, out of direct heat, is enough.
          </p>
          <p>
            Whole nutmeg holds up for several years under those conditions. Ground nutmeg starts losing potency after about a year — it doesn&apos;t necessarily &quot;go bad,&quot; but it loses aroma, and you&apos;ll need to use more to get the same result. The test is simple: open it and smell it. Weak aroma means it&apos;s time to replace it.
          </p>
          <p>
            If you organize your{' '}
            <a href="/en/funcionalidades/despensa">pantry</a>
            {' '}by zone, spices work best kept together — on a closed shelf or in a drawer, away from the stove. That makes it easier to remember what you have and to notice when something&apos;s running low before you&apos;re mid-recipe.
          </p>
          <p>
            Next time you build your{' '}
            <a href="/en/funcionalidades/lista-de-compras">shopping list</a>
            , it&apos;s worth checking on the nutmeg before you head out. It&apos;s the kind of item you find out is empty at the worst possible moment — when the sauce is already on the stove and the pinch you needed was sitting in an empty jar.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about nutmeg</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Can nutmeg be used in savory dishes?</p>
              <p className="faq-a">
                Yes — and that&apos;s where it shines most. Béchamel, mashed potatoes, gratins, creamy soups, and spinach fillings all taste different with a pinch. It doesn&apos;t add a flavor you can point to: it deepens and rounds out the dish. It&apos;s the kind of ingredient that, when missing, leaves something feeling unfinished — without you knowing exactly what.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How much nutmeg should you use per recipe?</p>
              <p className="faq-a">
                For dishes serving 4 to 6 people, a quarter teaspoon of ground nutmeg is a good starting point. Freshly grated, that&apos;s about 5 to 8 passes on a fine grater. Start with less — it&apos;s easier to add more than to fix an overdose. In sweets and hot drinks, a pinch is usually enough for the aroma to come through.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between whole and ground nutmeg?</p>
              <p className="faq-a">
                Whole nutmeg holds its aroma much longer — several years in a sealed container, against a year or so for ground. Freshly grated, the aroma is more intense and fresher. Ground is more convenient, but fades faster. If you use nutmeg often, a whole one with a fine grater pays off. If you use it rarely, ground still works fine.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can nutmeg be harmful?</p>
              <p className="faq-a">
                In cooking amounts, no. The problem shows up at doses far above anything a recipe calls for — upward of 5g, which is well beyond any normal recipe. A pinch or a quarter teaspoon in a family dinner is completely safe. Pregnant women are often advised to avoid large amounts, but the normal cooking dose isn&apos;t considered an established risk.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What&apos;s the difference between nutmeg and mace?</p>
              <p className="faq-a">
                Mace is the reddish membrane that wraps around the nutmeg seed — both come from the same plant. Mace tastes milder and slightly floral. Nutmeg is more intense and earthy. Mace is uncommon outside specialty spice shops. For practical purposes, they&apos;re interchangeable in recipes, adjusting the amount.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do you store nutmeg at home?</p>
              <p className="faq-a">
                In a sealed container, away from heat, light, and moisture — never above the stove. Whole nutmeg holds up for several years under those conditions; ground starts fading after about a year. The test: open it and smell it. Weak or absent aroma means it&apos;s time to replace it.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Where can you buy nutmeg?</p>
              <p className="faq-a">
                At any grocery store, in the spice aisle. Ground nutmeg is the easiest to find, usually in small jars. Whole nutmeg shows up at larger grocery stores and specialty spice shops. It costs more per ounce than cinnamon or cumin, but since each use is so small, one jar lasts a long time.
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
                Creator of Mise. The recipe said &quot;nutmeg to taste.&quot; He didn&apos;t know how much. Tried it a few times. The cookies came out strange.
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
              You check what you have before heading to the store — and you don&apos;t find out the nutmeg&apos;s gone in the middle of making mashed potatoes.
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
