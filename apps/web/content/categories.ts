export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export const productCategories: CategoryItem[] = [
  {
    id: 'cat-01',
    slug: 'special',
    name: 'Specialty Glazes',
    description: 'Our most unique, seasonal and chef-crafted signature donuts.',
  },
  {
    id: 'cat-02',
    slug: 'crunch',
    name: 'Crunch & Nuts',
    description: 'Crisp toffee, roasted peanuts, and praline crunch layers.',
  },
  {
    id: 'cat-03',
    slug: 'chocolate',
    name: 'Belgian Chocolate',
    description: 'Double dipped in single-origin cacao ganache.',
  },
  {
    id: 'cat-04',
    slug: 'fruit',
    name: 'Fresh Fruit',
    description: 'Real berry reductions, citrus zest, and tropical infusions.',
  },
  {
    id: 'cat-05',
    slug: 'party',
    name: 'Party & Kids',
    description: 'Confetti, sprinkles, and celebration favorites.',
  },
];

export const blogCategories: CategoryItem[] = [
  {
    id: 'bcat-01',
    slug: 'event',
    name: 'Events & Drops',
    description: 'Bakery openings, pop-up truck stops, and midnight drop club releases.',
  },
  {
    id: 'bcat-02',
    slug: 'craft',
    name: 'Baking Craft',
    description: 'Deep dives into sourdough fermentation, dough hydrology, and glazes.',
  },
  {
    id: 'bcat-03',
    slug: 'nutrition',
    name: 'Health & Science',
    description: 'Macro nutritional breakdowns, keto flour science, and allergen safety.',
  },
];
