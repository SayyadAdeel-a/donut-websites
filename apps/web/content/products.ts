export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  description: string;
  image: string;
  bgColor: string;
  rating: number;
  reviewCount: number;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    sugar: string;
  };
  ingredients: string[];
}

export const products: ProductItem[] = [
  {
    id: 'prod-01',
    slug: 'peanut-mcrunch',
    name: 'Peanut Mcrunch',
    price: 4.5,
    originalPrice: 5.5,
    category: 'Crunch Series',
    badge: 'Bestseller',
    description:
      'A crunchy indulgence dipped in artisan milk chocolate glaze and topped with crushed roasted peanuts and golden toffee crunch bits.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/656a26b714ecd5c5b17edb33_donut.webp',
    bgColor: '#ffeedd',
    rating: 4.9,
    reviewCount: 142,
    nutrition: { calories: 290, protein: '6g', carbs: '28g', fat: '14g', sugar: '12g' },
    ingredients: ['Enriched Wheat Flour', 'Cultured Butter', 'Roasted Peanuts', 'Belgian Milk Chocolate', 'Pure Cane Sugar'],
  },
  {
    id: 'prod-02',
    slug: 'chocoglaze',
    name: 'Chocoglaze Deluxe',
    price: 4.25,
    category: 'Chocolate Series',
    badge: 'Artisan',
    description:
      'Double dark Belgian chocolate glaze over our signature 48-hour fermented sourdough brioche ring. Decadent, rich, and unforgettable.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263aac3297a804a0be99_donut-1.webp',
    bgColor: '#f2e8dc',
    rating: 5.0,
    reviewCount: 98,
    nutrition: { calories: 275, protein: '5g', carbs: '26g', fat: '13g', sugar: '11g' },
    ingredients: ['Sourdough Starter', 'Single-Origin Cacao (72%)', 'Grass-Fed Butter', 'Madagascar Vanilla Bean'],
  },
  {
    id: 'prod-03',
    slug: 'chocolate-marsh',
    name: 'Chocomarsh Dream',
    price: 4.75,
    originalPrice: 5.25,
    category: 'Gourmet',
    badge: 'New',
    description:
      'Smoked chocolate ganache with pillowy toasted marshmallow cream drizzle and graham cracker crumb crown.',
    image:
      'https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6574d4a02a805304abd2cdb8_pdp-image-1.webp',
    bgColor: '#ede3db',
    rating: 4.8,
    reviewCount: 67,
    nutrition: { calories: 310, protein: '5g', carbs: '32g', fat: '15g', sugar: '16g' },
    ingredients: ['Dark Chocolate Ganache', 'Toasted Marshmallow Mousse', 'Graham Flour', 'Organic Honey'],
  },
  {
    id: 'prod-04',
    slug: 'froststrawberry',
    name: 'Frostberry Delight',
    price: 4.0,
    category: 'Fruit Glaze',
    badge: 'Popular',
    description:
      'Infused with fresh organic Oregon strawberry reduction glaze and dusted with freeze-dried strawberry powder.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263a0e562be7548600e8_donut-2.webp',
    bgColor: '#ffdede',
    rating: 4.9,
    reviewCount: 112,
    nutrition: { calories: 240, protein: '4g', carbs: '24g', fat: '10g', sugar: '9g' },
    ingredients: ['Organic Strawberries', 'Pure Cane Glaze', 'Pasture-Raised Eggs', 'Lemon Zest'],
  },
  {
    id: 'prod-05',
    slug: 'jelipowder',
    name: 'Jelipowder Burst',
    price: 4.25,
    category: 'Filled Series',
    description:
      'Pillow brioche filled to bursting with house-made raspberry jam and dusted in snow-white confectioners sugar.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6571f30f53d3ee5637a07ced_single-angled-donut.webp',
    bgColor: '#fdf0f5',
    rating: 4.7,
    reviewCount: 84,
    nutrition: { calories: 280, protein: '5g', carbs: '30g', fat: '11g', sugar: '14g' },
    ingredients: ['Wild Raspberry Jam', 'Unbleached Flour', 'Powdered Confectionery Sugar', 'Vanilla Extract'],
  },
  {
    id: 'prod-06',
    slug: 'powderii',
    name: 'Powderii Classic',
    price: 3.75,
    category: 'Traditional',
    description:
      'Old-fashioned buttermilk donut gently fried and heavily dusted with triple-sifted powdered sugar.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6571f30f2a42b97d799d9ff7_single-angled-donut-1.webp',
    bgColor: '#f8f8f8',
    rating: 4.6,
    reviewCount: 53,
    nutrition: { calories: 230, protein: '4g', carbs: '22g', fat: '9g', sugar: '7g' },
    ingredients: ['Cultured Buttermilk', 'Nutmeg', 'Cinnamon', 'Pastry Flour', 'Powdered Sugar'],
  },
  {
    id: 'prod-07',
    slug: 'raspberry-flake',
    name: 'Raspberry Flake',
    price: 4.5,
    category: 'Fruit Glaze',
    badge: 'Seasonal',
    description:
      'Vibrant ruby red raspberry glaze accented with white chocolate curls and crisp wafer flakes.',
    image:
      'https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6574d4619f60d7965dc151a6_pdp-image-2.webp',
    bgColor: '#fbe9eb',
    rating: 4.8,
    reviewCount: 76,
    nutrition: { calories: 260, protein: '4g', carbs: '27g', fat: '12g', sugar: '10g' },
    ingredients: ['Ruby Raspberry Puree', 'Belgian White Chocolate', 'Wafer Crumbs', 'Sea Salt'],
  },
  {
    id: 'prod-08',
    slug: 'sprinkstrawey',
    name: 'Sprinkle Party Blast',
    price: 4.25,
    category: 'Party Series',
    badge: 'Kids Fave',
    description:
      'Hot pink bubblegum glaze overloaded with rainbow confetti sprinkles. Pure festive birthday happiness!',
    image:
      'https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/656b5d82ccb09777ebd75c88_pdp-image-3.webp',
    bgColor: '#ffe6f0',
    rating: 5.0,
    reviewCount: 230,
    nutrition: { calories: 250, protein: '4g', carbs: '25g', fat: '11g', sugar: '11g' },
    ingredients: ['All-Natural Rainbow Sprinkles', 'Strawberry Cream Glaze', 'Organic Cane Sugar', 'Butter'],
  },
  {
    id: 'prod-09',
    slug: 'strawsprinkle',
    name: 'Strawsprinkle Royale',
    price: 4.5,
    category: 'Party Series',
    description:
      'Sweet strawberry glaze with golden star sprinkles and white cream filled core.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/656a26b714ecd5c5b17edb33_donut.webp',
    bgColor: '#ffebf3',
    rating: 4.9,
    reviewCount: 165,
    nutrition: { calories: 270, protein: '5g', carbs: '28g', fat: '12g', sugar: '13g' },
    ingredients: ['Vanilla Custard Cream', 'Fresh Strawberry Glaze', 'Star Sprinkles', 'Enriched Brioche'],
  },
  {
    id: 'prod-10',
    slug: 'vanillafrost',
    name: 'Vanilla Frost Cloud',
    price: 3.95,
    category: 'Traditional',
    description:
      'Silky smooth Tahitian vanilla bean buttercream glaze on a light, golden yeast ring.',
    image:
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/6571f30f53d3ee5637a07ced_single-angled-donut.webp',
    bgColor: '#fff8ee',
    rating: 4.8,
    reviewCount: 89,
    nutrition: { calories: 245, protein: '4g', carbs: '23g', fat: '10g', sugar: '8g' },
    ingredients: ['Tahitian Vanilla Pods', 'Cultured Sweet Butter', 'Sea Salt Flakes', 'Pure Cane Sugar'],
  },
];
