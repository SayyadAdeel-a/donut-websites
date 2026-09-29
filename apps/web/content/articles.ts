export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  content: string[];
}

export const articles: ArticleItem[] = [
  // 1. Canonical Article from Webflow Template
  {
    id: 'art-01',
    slug: 'how-donutland-got-started',
    title: 'How Donutland Got Started: The Flour, The Fire & The Frosting',
    excerpt:
      'The journey of reviving 1950s heritage sourdough baking in the heart of modern patisserie culture.',
    category: 'Story',
    date: 'Jan 12, 2026',
    readTime: '4 min read',
    author: {
      name: 'Chef Marcus Glaze',
      role: 'Master Baker & Co-Founder',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp',
    content: [
      'It began with a century-old cast iron kettle and a wild sourdough starter saved from an old roadside bakery in rural Maine.',
      'We spent fourteen months testing fermentation curves, flour moisture absorption, and single-origin chocolate varieties before our very first test donut emerged with the perfect airy honeycomb structure.',
      'Today, every single batch continues to rest for 48 full hours in humidity-controlled proofing chambers before meeting our signature fruit-infused glazes.',
    ],
  },
  // 2. Canonical Article from Webflow Template
  {
    id: 'art-02',
    slug: 'donut-recipes-to-try-at-home',
    title: 'Donut Recipes To Try At Home: The Baker’s Essential Guide',
    excerpt:
      'Master the art of pillowy brioche dough, yeast temperature control, and hand-dipped fruit reductions in your home kitchen.',
    category: 'Recipes',
    date: 'Jan 20, 2026',
    readTime: '6 min read',
    author: {
      name: 'Claire Fontaine',
      role: 'Pastry Instructor',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp',
    content: [
      'Baking artisanal donuts at home begins with respecting the yeast fermentation window. Cold overnight proofing in the refrigerator slows gas production, allowing the gluten network to soften.',
      'For our signature glaze, reduce fresh crushed raspberries with cane sugar and a hint of lemon juice until it coats the back of a wooden spoon. Dip while the donut is just warm to the touch.',
      'Remember: maintain your frying oil temperature strictly at 360°F (182°C) to ensure a golden exterior without oil absorption.',
    ],
  },
  // 3. Canonical Article from Webflow Template
  {
    id: 'art-03',
    slug: 'donutland-just-opened-5-new-stores',
    title: 'Donutland Just Opened 5 New Stores Across The Northeast!',
    excerpt:
      'Expanding our small-batch kitchens to Brooklyn, Philadelphia, Boston, Providence, and Portland.',
    category: 'News',
    date: 'Feb 01, 2026',
    readTime: '3 min read',
    author: {
      name: 'Marcus Glaze',
      role: 'Founder & CEO',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp',
    content: [
      'We are thrilled to bring authentic 48-hour slow proofed sourdough donuts to five new neighborhood communities this month.',
      'Each new location features an open viewing kitchen where visitors can watch dough kneading, proofing, and hand-glazing in real time every morning.',
      'Stop by during opening week to receive a complimentary box of our signature Sprinkle Blast minis with any specialty coffee purchase.',
    ],
  },
  // 4. Canonical Article from Webflow Template
  {
    id: 'art-04',
    slug: 'donutland-was-named-top-five-best-donut-companies-in-the-us',
    title: 'Donutland Was Named Top Five Best Donut Companies in The US',
    excerpt:
      'National recognition from culinary editors celebrating our commitment to organic ingredients and heritage fermentation.',
    category: 'Awards',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    author: {
      name: 'Culinary Review Editorial',
      role: 'Food & Wine Panel',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp',
    content: [
      'In a nationwide poll of over 200 artisanal bakeries, Donutland was ranked #3 among the top donut destinations across the country.',
      'Judges praised our refusal to use artificial stabilizers, powdered eggs, or hydrogenated oils, highlighting the crisp crunch and melt-in-your-mouth brioche interior.',
      'We dedicate this honor to our team of dedicated bakers who wake up at 3:00 AM every single morning to ensure uncompromising freshness.',
    ],
  },
  // 5. Canonical Article from Webflow Template
  {
    id: 'art-05',
    slug: 'grand-opening-party-of-our-new-jersey-location',
    title: 'Grand Opening Party Of Our New Jersey Location',
    excerpt:
      'Over 2,000 donut enthusiasts gathered in Hoboken for live music, hot glazes, and limited edition gift boxes.',
    category: 'Events',
    date: 'Feb 18, 2026',
    readTime: '4 min read',
    author: {
      name: 'Sarah Jenkins',
      role: 'Event Coordinator',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/657d94a61eee1bef26d6f5b9_finger-donut.webp',
    content: [
      'The energy in Hoboken was electric as lines wrapped around Washington Street before sunrise.',
      'Guests were treated to fresh hot samples of our limited-edition Salted Caramel Pretzel donut and cold brew iced coffees on tap.',
      'Thank you to the entire community for welcoming Donutland to the Garden State with so much warmth and enthusiasm!',
    ],
  },
  // 6. Canonical Article from Webflow Template
  {
    id: 'art-06',
    slug: 'grand-opening-party-of-our-new-york-location',
    title: 'Grand Opening Party Of Our New York Location',
    excerpt:
      'Bringing our flagship bakery counter to the vibrant heart of SoHo with bespoke streetwear collaborations.',
    category: 'Events',
    date: 'Feb 25, 2026',
    readTime: '4 min read',
    author: {
      name: 'Sarah Jenkins',
      role: 'Event Coordinator',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp',
    content: [
      'SoHo, welcome to Donutland! Our Manhattan flagship storefront officially opened its doors this weekend.',
      'In partnership with local artists, the space showcases custom neon installations and a limited capsule collection of skate decks and crewnecks.',
      'Our exclusive Big Apple Spiced Cruller sold out within ninety minutes of doors opening.',
    ],
  },
  // 7. Canonical Article from Webflow Template
  {
    id: 'art-07',
    slug: 'our-top-five-best-selling-donuts',
    title: 'Our Top Five Best Selling Donuts: Customer Favorites Ranked',
    excerpt:
      'From Peanut Mcrunch to Strawsprinkle Royale, discover the iconic recipes our guests order time and time again.',
    category: 'Highlights',
    date: 'Mar 02, 2026',
    readTime: '5 min read',
    author: {
      name: 'Chef Marcus Glaze',
      role: 'Master Baker',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/656a26b714ecd5c5b17edb33_donut.webp',
    content: [
      'With thousands of donuts fried fresh each week, certain creations have cemented their status as all-time classics.',
      'Taking the #1 spot is Peanut Mcrunch, beloved for its contrast of crunchy roasted nuts and silky dark chocolate glaze. Close behind is Frostberry Delight, made with real wild strawberry reduction.',
      'Rounding out the top five are Chocoglaze Deluxe, Jelipowder Burst with homemade jam, and the festive Sprinkle Party Blast.',
    ],
  },
  // 8. Canonical Article from Webflow Template
  {
    id: 'art-08',
    slug: 'our-top-three-healthy-donut-recipes',
    title: 'Our Top Three Healthy Donut Recipes: Guilt-Free & Full of Flavor',
    excerpt:
      'How we engineered grain-free, keto-friendly pastries with only 2g net carbs and zero added sugar.',
    category: 'Nutrition',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Elena Sourdough',
      role: 'Food Biochemist',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp',
    content: [
      'Healthy eating should never mean deprivation. By pairing cold-milled California almond flour with natural prebiotic fibers, we recreated the authentic brioche crumb.',
      'Our monk-fruit sweetened Cinnamon Glaze delivers the familiar warmth of autumn without insulin spikes, making it ideal for keto athletes and diabetics.',
      'Try baking them at home using stone-ground almond flour and grass-fed ghee for an extraordinary texture.',
    ],
  },
  // 9. Additional Editorial / Multi-Brand Article
  {
    id: 'art-09',
    slug: 'the-secret-behind-48-hour-fermentation',
    title: 'The Secret Behind 48-Hour Slow Fermentation',
    excerpt:
      'Why speed is the enemy of flavor: a deep dive into natural yeast cultures and gluten breakdown.',
    category: 'Craft',
    date: 'Jan 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Elena Sourdough',
      role: 'Food Biochemist',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp',
    content: [
      'Commercial bakeries rely on artificial leavening agents and flash-fry oil to pump out donuts in under 45 minutes.',
      'Our 48-hour slow proofing allows wild lactobacilli to break down complex carbohydrates into natural prebiotic starches, creating an exceptionally light and easy-to-digest treat.',
    ],
  },
  // 10. Additional Editorial / Multi-Brand Article
  {
    id: 'art-10',
    slug: 'sustainable-single-origin-cacao',
    title: 'Single-Origin Cacao: Sourcing Directly From Ecuadorian Smallholders',
    excerpt:
      'Fair-trade relationships that bring deep floral notes and ethical sourcing to our chocolate ganache.',
    category: 'Sourcing',
    date: 'Feb 02, 2026',
    readTime: '5 min read',
    author: {
      name: 'Marcus Glaze',
      role: 'Head of Sourcing',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp',
    content: [
      'Our dark chocolate does not come from industrial conglomerate pellets. We partner directly with three family cooperative farms in the Esmeraldas province of Ecuador.',
      'By paying 40% above fair-trade market minimums, we help support regenerative agroforestry while obtaining the finest Arriba Nacional beans on earth.',
    ],
  },
  // 11. Additional Editorial / Multi-Brand Article
  {
    id: 'art-11',
    slug: 'keto-donuts-food-science-breakthrough',
    title: 'Zero Guilt: How Food Science Created The Perfect Keto Donut',
    excerpt:
      'Replacing wheat with stone-ground almond flour and erythritol without losing the golden crunch.',
    category: 'Nutrition',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Elena Sourdough',
      role: 'Nutrition Scientist',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp',
    content: [
      'Crafting a donut with only 2g of net carbs used to mean accepting a sponge-like texture with an unpleasant chemical aftertaste.',
      'By pairing organic monk fruit with cold-milled California almond flour and soluble tapioca fiber, our Keto series delivers the golden brioche chew you love.',
    ],
  },
  // 12. Additional Editorial / Multi-Brand Article
  {
    id: 'art-12',
    slug: 'donutland-announces-drop-club',
    title: 'Introducing Drop Club: Limited Edition Streetwear & Midnight Glazes',
    excerpt:
      'Exclusive skater apparel, holographic collectible boxes, and monthly secret midnight releases.',
    category: 'Events',
    date: 'Feb 22, 2026',
    readTime: '3 min read',
    author: {
      name: 'DoughBoyz Crew',
      role: 'Streetwear Lead',
    },
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/657d94a61eee1bef26d6f5b9_finger-donut.webp',
    content: [
      'Every first Friday of the month at 11:59 PM, Drop Club members receive access to our numbered, limited-batch donut boxes and matching streetwear gear.',
      'Once a drop sells out, it will never be restocked. Sign up now to receive your drop code.',
    ],
  },
];
