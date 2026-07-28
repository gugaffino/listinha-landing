import RevealObserver from '../../../../components/RevealObserver'
import { BrandIcon } from '../../../../components/Icon'
import SiteNav from '../../../../components/SiteNav'

export const metadata = {
  title: 'Gluten-Free Foods: The Complete List for Grocery Shopping',
  description: 'Rice, corn, potatoes, fresh meat, and most fruits and vegetables are naturally gluten-free. See the full list, where gluten hides, and how to actually read a label.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten',
    languages: {
      pt: 'https://www.miseemcasa.com.br/pt/blog/alimentos-sem-gluten',
      en: 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten',
      es: 'https://www.miseemcasa.com.br/es/blog/alimentos-sem-gluten',
      'x-default': 'https://www.miseemcasa.com.br/pt/blog/alimentos-sem-gluten',
    },
  },
  openGraph: {
    title: 'Gluten-Free Foods: The Complete List for Grocery Shopping',
    description: 'Rice, corn, potatoes, fresh meat, and most fruits and vegetables are naturally gluten-free. See the full list, where gluten hides, and how to actually read a label.',
    type: 'article',
    url: 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten',
    images: [
      {
        url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Colorful bowls of rice, quinoa, and fresh vegetables — a selection of naturally gluten-free foods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gluten-Free Foods: The Complete List for Grocery Shopping',
    description: 'Rice, corn, potatoes, fresh meat, and most fruits and vegetables are naturally gluten-free. See the full list, where gluten hides, and how to actually read a label.',
    images: ['https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630'],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does rice have gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Rice — white, brown, or parboiled — is naturally gluten-free. Gluten comes from wheat, barley, and rye, not rice. The only exception is seasoned rice mixes or flavored packets, which can include gluten-containing additives. Plain rice with nothing added is safe for people with celiac disease.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can people with celiac disease eat oats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oats do not contain gluten on their own, but they are very often grown, transported, or processed alongside wheat, barley, or rye, which leads to cross-contact. People with celiac disease should only buy oats specifically labeled "certified gluten-free," which are tested and processed on dedicated lines. Regular oats from a shared facility are not a safe bet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is corn gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Corn on the cob, cornmeal, corn starch, popcorn, and corn flour are all naturally gluten-free. The risk shows up in processed corn products that add other ingredients — seasoned corn chips or pre-made mixes, for example. Always check the ingredient list on anything processed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should everyone avoid gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. For people without celiac disease or a diagnosed gluten sensitivity, cutting gluten has no proven health benefit and can mean eating less fiber and fewer nutrients found in whole grains. A gluten-free diet is medically necessary for celiac disease — for everyone else, it is a restriction, not an upgrade.',
      },
    },
    {
      '@type': 'Question',
      name: 'What surprising foods contain gluten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common culprits: regular soy sauce (made with wheat), canned soups and bouillon cubes thickened with wheat flour, deli meats using wheat starch as a binder, imitation crab (surimi), malt-flavored cereals, seasoning blends, and beer (made from malted barley). Always check the ingredient list — US law requires wheat to be declared as a major allergen.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if a product is actually gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the US, the FDA only allows a "gluten-free" label on foods that contain less than 20 parts per million of gluten — the lowest level reliably detectable with current testing. Look for that label, then double-check the ingredient list for wheat, barley, rye, malt, or oats without a gluten-free certification. "May contain wheat" on an allergen statement signals cross-contact risk, which matters most for celiac disease.',
      },
    },
  ],
}

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gluten-Free Foods: The Complete List for Grocery Shopping',
  description: 'Rice, corn, potatoes, fresh meat, and most fruits and vegetables are naturally gluten-free. See the full list, where gluten hides, and how to actually read a label.',
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630',
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
    '@id': 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten',
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.miseemcasa.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.miseemcasa.com.br/en/blog' },
    { '@type': 'ListItem', position: 3, name: 'Gluten-Free Foods', item: 'https://www.miseemcasa.com.br/en/blog/alimentos-sem-gluten' },
  ],
}

export default function AlimentosSemGlutenEn() {
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
            <li className="breadcrumb-current" aria-current="page">Gluten-Free Foods</li>
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
            Gluten-Free Foods: What&apos;s Naturally Safe, What to Watch For, and How to Shop Without Guessing
          </h1>
          <p className="blog-desc">
            The list of naturally gluten-free foods is bigger than most people expect. Rice, corn, potatoes, fresh meat, and nearly every fruit and vegetable are fair game. The real problem isn&apos;t what you already know to avoid — it&apos;s the gluten hiding in processed foods that look completely harmless.
          </p>

          <div className="answer-box">
            <p>
              <strong>Gluten-free foods</strong> are anything that doesn&apos;t contain wheat, barley, rye,
              or oats at risk of cross-contact: rice, corn, potatoes, legumes, fresh meat, eggs, plain
              dairy, and nearly every fruit and vegetable in its natural state. The hard part is processed
              food — soy sauce, canned soup, deli meat, and spice blends carry gluten more often than
              people expect.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630"
            alt="Colorful bowls of rice, quinoa, and fresh vegetables — a selection of naturally gluten-free foods"
            className="blog-hero-img"
            width="1200"
            height="630"
            loading="eager"
          />
          <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
        </div>

        <article className="prose">

          <nav className="toc" aria-label="Article contents">
            <p className="toc-title">In this article</p>
            <ol className="toc-list">
              <li><a href="#what-is-gluten">What gluten is and who actually needs to avoid it</a></li>
              <li><a href="#safe-foods">Naturally gluten-free foods</a></li>
              <li><a href="#hidden-gluten">What looks safe but isn&apos;t</a></li>
              <li><a href="#reading-labels">How to read a gluten-free label</a></li>
              <li><a href="#grocery-list">The gluten-free grocery list</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>

          {/* WHAT IS GLUTEN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Bread and wheat-based foods next to gluten-free alternatives like rice and corn"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
          </div>

          <h2 id="what-is-gluten" className="img-above">What gluten is and who actually needs to avoid it</h2>

          <p>
            Gluten is a group of proteins found naturally in wheat, barley, and rye. It&apos;s what gives
            bread dough its stretch — the ability to expand without tearing. For most people, it&apos;s
            completely harmless and has been part of the human diet for thousands of years.
          </p>
          <p>
            Two conditions turn gluten into a real problem: <strong>celiac disease</strong> and{' '}
            <strong>non-celiac gluten sensitivity</strong>. Celiac disease is an autoimmune condition —
            eating gluten triggers an immune response that attacks the small intestine, damaging its
            ability to absorb nutrients. It&apos;s estimated to affect about 1% of people in the US, and
            a large share are undiagnosed. Gluten sensitivity is a different condition: it causes real
            digestive discomfort, but without the autoimmune response or intestinal damage seen in
            celiac disease.
          </p>
          <p>
            For someone with celiac disease, cutting out gluten completely isn&apos;t a preference — it&apos;s
            treatment. Even a small amount can cause damage, which is why knowing exactly what&apos;s on the
            plate and in the cart matters so much.
          </p>
          <p>
            An honest note: cutting gluten without a diagnosis has no proven benefit for people without
            these conditions. It can actually mean eating fewer whole grains, and with them, less fiber
            and fewer nutrients. A gluten-free diet is treatment for some people — it&apos;s not a wellness
            upgrade for everyone else.
          </p>

          {/* SAFE FOODS */}
          <h2 id="safe-foods">Naturally gluten-free foods</h2>

          <p>
            The foundation of a gluten-free diet is wider than most people assume. The list of naturally
            safe, unprocessed foods is long — the trouble starts once something gets processed, blended,
            or manufactured on shared equipment with wheat.
          </p>

          <h3>Grains, flours, and starches that are safe</h3>

          <ul className="item-list">
            <li>Rice (white, brown, parboiled)</li>
            <li>Corn, cornmeal, and corn starch</li>
            <li>Quinoa</li>
            <li>Buckwheat (despite the name, no wheat at all)</li>
            <li>Millet</li>
            <li>Amaranth</li>
            <li>Sorghum</li>
            <li>Certified gluten-free oats</li>
            <li>Rice flour</li>
            <li>Almond flour</li>
            <li>Coconut flour</li>
            <li>Chickpea flour</li>
            <li>Tapioca and arrowroot starch</li>
          </ul>

          <p>
            These are the direct substitutes for wheat flour in recipes. Each behaves differently — rice
            flour is neutral, almond flour adds fat and moisture, tapioca starch gives a chewy texture.
            Most gluten-free baking works best by combining two or three of these rather than swapping
            in just one.
          </p>

          <h3>Animal protein</h3>

          <p>
            Fresh meat, poultry, fish, and seafood are naturally gluten-free. Same with eggs. The problem
            starts when protein is processed: breaded items use wheat flour, sausages and deli meats
            often use wheat starch as a binder, and traditional soy sauce is brewed with wheat.
          </p>

          <h3>Plain dairy</h3>

          <p>
            Milk, cheese, butter, and plain yogurt don&apos;t contain gluten. Watch out for flavored
            yogurts (thickeners can contain gluten), pre-sliced processed cheese, and malted milk drinks.
          </p>

          <h3>Produce and legumes</h3>

          <p>
            All fresh vegetables are safe. All fruit is safe. Beans, lentils, chickpeas, and peas in their
            dried or fresh state don&apos;t contain gluten. The exception is canned or processed versions —
            pre-made vegetable broths, boxed soups, and marinated vegetables can carry thickeners or
            additives with gluten.
          </p>

          <h3>Natural fats and seasonings</h3>

          <p>
            Olive oil, other vegetable oils, butter, and lard are gluten-free. Salt, sugar, honey, and
            plain vinegar are safe too. Fresh herbs and whole spices — garlic, onion, chili, cumin,
            turmeric — don&apos;t contain gluten. The risk is in pre-mixed seasoning blends and packets
            that combine several spices with a filler ingredient.
          </p>

          <div className="blog-inline-cta">
            <p>
              Building a gluten-free <a href="/en/funcionalidades/lista-de-compras">shopping list</a> gets
              a lot easier once you already have your safe staples saved. Mise lets you track your pantry
              and build the list straight from what you actually buy.
            </p>
            <a href="https://listinha-puce.vercel.app" className="btn btn-primary" rel="noopener">
              Open Mise
            </a>
          </div>

          {/* HIDDEN GLUTEN */}
          <div className="h2-img-block">
            <img
              src="https://images.pexels.com/photos/1640742/pexels-photo-1640742.jpeg?auto=compress&cs=tinysrgb&w=760&h=380"
              alt="Grocery store shelf with packaged foods — where hidden gluten usually turns up"
              className="blog-inline-img"
              width="760"
              height="380"
              loading="lazy"
            />
            <p className="blog-img-credit">Photo: Ella Olsson / Pexels</p>
          </div>

          <h2 id="hidden-gluten" className="img-above">What looks safe but isn&apos;t</h2>

          <p>
            This is the part that catches most people off guard. It&apos;s not the bread or the pasta that
            causes trouble — it&apos;s the ingredient list of products that seem to have nothing to do with
            wheat at all.
          </p>

          <h3>Soy sauce</h3>
          <p>
            Traditional soy sauce is brewed from wheat and soybeans — most bottles on a regular grocery
            shelf contain wheat. The gluten-free substitute is <strong>tamari</strong>, a Japanese-style
            soy sauce made without wheat, though not every tamari is automatically gluten-free either.
            If you cook a lot of Asian dishes, check the label or look specifically for one marked
            gluten-free.
          </p>

          <h3>Oats</h3>
          <p>
            Oats don&apos;t naturally contain gluten. But regular oats are commonly grown in rotation with
            wheat and processed on shared equipment, which makes cross-contact almost guaranteed unless
            the package says otherwise. For celiac disease, the only safe option is oats specifically
            labeled certified gluten-free — widely available at most grocery stores, just not the same
            box as regular oats.
          </p>

          <h3>Canned soup and bouillon</h3>
          <p>
            Bouillon cubes, canned soups, and pre-made broths frequently use wheat flour as a thickener.
            This is one of the most common sources of hidden gluten in an everyday kitchen. If you rely
            on packaged soup or broth often, read the label or switch to a homemade version.
          </p>

          <h3>Deli meat</h3>
          <p>
            Deli ham, salami, and processed sausages can contain wheat flour or wheat starch as a binder.
            Not all of them do — but enough that people with celiac disease need to check every brand.
            "Meat" on the front of the package doesn&apos;t guarantee gluten-free on the back.
          </p>

          <h3>Imitation crab (surimi)</h3>
          <p>
            A classic surprise: imitation crab, used in sushi rolls and seafood salad, is usually made
            from fish paste bound with wheat starch. Real crab is naturally gluten-free — the imitation
            version almost never is.
          </p>

          <h3>Seasoning packets and spice blends</h3>
          <p>
            Seasoning packets, taco mixes, and pre-made spice blends can use wheat flour as an
            anti-caking agent or filler. That&apos;s not always obvious from the front label. Check the
            ingredient list — wheat can show up as "wheat starch," "wheat flour," or simply "gluten."
          </p>

          <h3>Beer and malt beverages</h3>
          <p>
            Beer is made from malted barley — which contains gluten. Gluten-free beers exist, brewed from
            sorghum, rice, or corn instead, but they&apos;re still a smaller share of the market. Always
            check the label if the restriction is for celiac disease.
          </p>

          <h3>Licorice and some candy</h3>
          <p>
            Traditional black licorice often uses wheat flour in the recipe. It&apos;s one of the more
            surprising items on this list, since candy doesn&apos;t read as a wheat product. When in doubt,
            check the label — it applies to more of the candy aisle than people expect.
          </p>

          {/* HOW TO READ LABELS */}
          <h2 id="reading-labels">How to read a gluten-free label</h2>

          <p>
            In the US, the FDA&apos;s gluten-free labeling rule only allows the words "gluten-free," "no
            gluten," "free of gluten," or "without gluten" on a food that contains less than 20 parts
            per million (ppm) of gluten — the lowest level reliably detectable with current lab testing.
            That claim is regulated and enforceable, which makes it the fastest, most reliable check when
            you&apos;re standing in an aisle deciding.
          </p>

          <p>
            Beyond the gluten-free claim itself, it&apos;s worth checking the ingredient list and the
            allergen statement. Under US law, wheat is one of the nine major food allergens that must be
            clearly declared — usually in a "Contains: Wheat" line right under the ingredients. Gluten
            can also show up in the ingredient list as:
          </p>

          <ul className="item-list">
            <li>Wheat (wheat flour, wheat starch, wheat bran, wheat germ)</li>
            <li>Barley (barley malt, malt extract, malt flavoring)</li>
            <li>Rye</li>
            <li>Oats (unless certified gluten-free)</li>
            <li>Malt (usually derived from barley)</li>
          </ul>

          <p>
            A "may contain wheat" or "processed in a facility that also processes wheat" statement flags
            cross-contact risk — the product wasn&apos;t made with gluten on purpose, but it was made on
            equipment or in a facility that also handles gluten-containing grains. For mild sensitivity,
            that risk might be acceptable. For celiac disease, it&apos;s a real risk and worth avoiding.
          </p>
          <p>
            Certification logos from third-party organizations, like the Gluten-Free Certification
            Organization (GFCO), add an extra layer of confidence beyond the FDA claim. They&apos;re not
            legally required, but they mean the product has been independently tested, not just
            self-declared by the manufacturer.
          </p>

          {/* GROCERY LIST */}
          <h2 id="grocery-list">The gluten-free grocery list</h2>

          <p>
            Building a gluten-free <a href="/en/funcionalidades/lista-de-compras">shopping list</a> takes
            some attention the first few times. Once you&apos;ve mapped which brands are safe and where
            gluten tends to hide in your own cooking routine, it gets a lot more automatic.
          </p>

          <p>
            A useful way to think about it: split your groceries into three buckets — what goes in the
            cart with zero worry, what needs a label check, and what to swap when a recipe calls for it.
          </p>

          <h3>Goes in the cart without checking</h3>

          <ul className="item-list">
            <li>White, brown, or parboiled rice</li>
            <li>Potatoes, sweet potatoes, and yams</li>
            <li>Dried beans, lentils, chickpeas, and peas</li>
            <li>Fresh meat, poultry, fish, and seafood</li>
            <li>Eggs</li>
            <li>Milk, cheese, butter, and plain yogurt</li>
            <li>Fresh fruits and vegetables</li>
            <li>Olive oil and plain vegetable oils</li>
            <li>Sugar, salt, and honey</li>
            <li>Garlic, onion, fresh herbs, and whole spices</li>
            <li>Corn on the cob and plain popcorn</li>
            <li>Rice flour and corn flour</li>
          </ul>

          <h3>Needs a label check</h3>

          <ul className="item-list">
            <li>Deli meat and sausages</li>
            <li>Canned soup and bouillon</li>
            <li>Canned or boxed tomato sauce</li>
            <li>Seasoning packets and spice blends</li>
            <li>Soy sauce</li>
            <li>Oats (only buy certified gluten-free)</li>
            <li>Chips and packaged snacks</li>
            <li>Flavored yogurt and malted drinks</li>
            <li>Imitation crab and other processed seafood</li>
          </ul>

          <h3>Swaps for recipes</h3>

          <ul className="item-list">
            <li>All-purpose flour → rice flour, gluten-free flour blend</li>
            <li>Regular pasta → rice pasta or corn pasta</li>
            <li>Sandwich bread → certified gluten-free bread</li>
            <li>Soy sauce → tamari (check it&apos;s labeled gluten-free)</li>
            <li>Bouillon cube → homemade stock or certified gluten-free bouillon</li>
          </ul>

          <p>
            Keeping these items organized in your <a href="/en/funcionalidades/despensa">pantry</a> makes
            it easier to track what you have and avoid surprises mid-week. Knowing what&apos;s already at
            home before you shop matters even more when the dietary restriction is real — improvising can
            get expensive fast.
          </p>

          <p>
            Whether the reason is celiac disease, a diagnosed sensitivity, or you&apos;re cooking for
            someone who needs it, the approach is the same: lock in which brands are safe, keep the list
            organized by aisle, and cut down on the guesswork every time you shop.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently asked questions about gluten-free foods</h2>

          <ul className="faq-list">
            <li className="faq-item">
              <p className="faq-q">Does rice have gluten?</p>
              <p className="faq-a">
                No. Rice — white, brown, or parboiled — is naturally gluten-free. Gluten comes from
                wheat, barley, and rye, not rice. The only exception is seasoned rice mixes or flavored
                packets, which can include gluten-containing additives. Plain rice is safe for people
                with celiac disease.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Can people with celiac disease eat oats?</p>
              <p className="faq-a">
                Oats don&apos;t contain gluten on their own, but they&apos;re very often grown, transported,
                or processed alongside wheat, barley, or rye, leading to cross-contact. People with
                celiac disease should only buy oats specifically labeled certified gluten-free — tested
                and processed on dedicated lines.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Is corn gluten-free?</p>
              <p className="faq-a">
                Yes. Corn on the cob, cornmeal, corn starch, popcorn, and corn flour are all naturally
                gluten-free. The risk shows up in processed corn products that add other ingredients —
                seasoned corn chips or pre-made mixes, for example. Always check the ingredient list on
                anything processed.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">Should everyone avoid gluten?</p>
              <p className="faq-a">
                No. For people without celiac disease or a diagnosed gluten sensitivity, cutting gluten
                has no proven health benefit and can mean eating less fiber and fewer nutrients found in
                whole grains. A gluten-free diet is medically necessary for celiac disease — for everyone
                else, it&apos;s a restriction, not an upgrade.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">What surprising foods contain gluten?</p>
              <p className="faq-a">
                The most common culprits: regular soy sauce (made with wheat), canned soups and bouillon
                cubes thickened with wheat flour, deli meats using wheat starch as a binder, imitation
                crab, malt-flavored cereals, seasoning blends, and beer. Always check the ingredient list
                — US law requires wheat to be declared as a major allergen.
              </p>
            </li>
            <li className="faq-item">
              <p className="faq-q">How do I know if a product is actually gluten-free?</p>
              <p className="faq-a">
                In the US, the FDA only allows a "gluten-free" label on foods with less than 20 parts per
                million of gluten. Look for that label, then check the ingredient list for wheat, barley,
                rye, malt, or uncertified oats. "May contain wheat" signals cross-contact risk, which
                matters most for celiac disease.
              </p>
            </li>
          </ul>

          <div className="blog-author">
            <div className="blog-author-avatar">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="#E8F3DD" />
                <circle cx="20" cy="16" r="7" fill="#2D5F2F" />
                <ellipse cx="20" cy="34" rx="11" ry="8" fill="#2D5F2F" />
              </svg>
            </div>
            <div className="blog-author-info">
              <p className="blog-author-name">Gus</p>
              <p className="blog-author-bio">
                Mise&apos;s founder. Cooks most nights of the week and has learned the hard way that
                "wheat-free" on a label doesn&apos;t mean gluten-free. Built the app because showing up at
                the store without a plan — gluten-free or not — always ends up costing more.
              </p>
            </div>
          </div>

        </article>

        <div className="blog-cta reveal">
          <p className="blog-cta-title">Your gluten-free list, actually organized</p>
          <p className="blog-cta-sub">
            Build your shopping list around the foods you know are safe, keep track of what&apos;s in the
            pantry, and always know what needs restocking. No paper, nothing forgotten. Mise is free.
          </p>
          <a
            href="https://listinha-puce.vercel.app"
            className="btn btn-on-dark btn-lg"
            target="_blank"
            rel="noopener"
          >
            Start free →
          </a>
        </div>

        <a href="#main-content" className="back-to-top" aria-label="Back to top">↑</a>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Made with care for people who love to cook.</p>
          <a href="/en/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
