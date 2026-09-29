import test from 'node:test';
import assert from 'node:assert/strict';

// Import brand configurations
import { sprinkleSpreeBrand } from '../config/brands/sprinklespree.ts';
import { glazeAndCoBrand } from '../config/brands/glaze-and-co.ts';
import { pureDonutBrand } from '../config/brands/puredonut.ts';
import { doughBoyzBrand } from '../config/brands/doughboyz.ts';
import { donutCounterBrand } from '../config/brands/donut-counter.ts';
import { getBrand, getAllBrands } from '../config/brands/activeBrand.ts';

// Import content
import { products } from '../content/products.ts';
import { articles } from '../content/articles.ts';
import { productCategories, blogCategories } from '../content/categories.ts';

test('5 Brand Configurations Integrity', () => {
  const brands = getAllBrands();
  assert.equal(brands.length, 5, 'Must have exactly 5 distinct commercial brand configurations');

  // Verify unique names and slugs
  const names = new Set(brands.map((b) => b.name));
  assert.equal(names.size, 5, 'Brand names must be distinct');

  const ids = new Set(brands.map((b) => b.id));
  assert.equal(ids.size, 5, 'Brand IDs must be distinct');

  // Verify layout mappings are non-repetitive
  const homeVariations = brands.map((b) => b.layoutMapping.homeVariation);
  assert.deepEqual(homeVariations.sort(), [1, 2, 3, 4, 5], 'Home variations must cover all 1-5 without duplicates');

  const aboutVariations = brands.map((b) => b.layoutMapping.aboutVariation);
  assert.deepEqual(aboutVariations.sort(), [1, 2, 3, 4, 5], 'About variations must cover all 1-5 without duplicates');

  const contactVariations = brands.map((b) => b.layoutMapping.contactVariation);
  assert.deepEqual(contactVariations.sort(), [1, 2, 3, 4, 5], 'Contact variations must cover all 1-5 without duplicates');

  const subscribeVariations = brands.map((b) => b.layoutMapping.subscribeVariation);
  assert.deepEqual(subscribeVariations.sort(), [1, 2, 3, 4, 5], 'Subscribe variations must cover all 1-5 without duplicates');

  const whyVariations = brands.map((b) => b.layoutMapping.whyVariation);
  assert.deepEqual(whyVariations.sort(), [1, 2, 3, 4, 5], 'Why variations must cover all 1-5 without duplicates');
});

test('Brand Resolver Fallback & Aliases', () => {
  assert.equal(getBrand('site-01').name, 'SprinkleSpree');
  assert.equal(getBrand('sprinklespree').name, 'SprinkleSpree');
  assert.equal(getBrand('site-02').name, 'Glaze & Co.');
  assert.equal(getBrand('glaze-and-co').name, 'Glaze & Co.');
  assert.equal(getBrand('site-03').name, 'PureDonut / KetoKreme');
  assert.equal(getBrand('puredonut').name, 'PureDonut / KetoKreme');
  assert.equal(getBrand('site-04').name, 'DoughBoyz');
  assert.equal(getBrand('doughboyz').name, 'DoughBoyz');
  assert.equal(getBrand('site-05').name, 'The Donut Counter');
  assert.equal(getBrand('the-donut-counter').name, 'The Donut Counter');

  // Unknown fallback
  assert.equal(getBrand('unknown-brand-xyz').name, 'SprinkleSpree');
});

test('Product Catalog & Nutrition Integrity', () => {
  assert.equal(products.length, 10, 'Must have exactly 10 canonical products');
  const canonicalSlugs = [
    'peanut-mcrunch',
    'chocoglaze',
    'chocolate-marsh',
    'froststrawberry',
    'jelipowder',
    'powderii',
    'raspberry-flake',
    'sprinkstrawey',
    'strawsprinkle',
    'vanillafrost',
  ];

  for (const slug of canonicalSlugs) {
    const p = products.find((prod) => prod.slug === slug);
    assert.ok(p, `Canonical product ${slug} must exist`);
    assert.ok(p.id, `Product ${slug} must have id`);
    assert.ok(p.name, `Product ${slug} must have name`);
    assert.ok(p.price > 0, `Product ${slug} price must be positive`);
    assert.ok(p.image, `Product ${slug} must have image`);
    assert.ok(p.nutrition.calories > 0, `Product ${slug} must have calories`);
    assert.ok(p.nutrition.protein, `Product ${slug} must have protein`);
    assert.ok(p.ingredients.length > 0, `Product ${slug} must have ingredients`);
  }
});

test('Article & Taxonomy Integrity (All 8 Canonical Webflow Articles)', () => {
  assert.ok(articles.length >= 8, 'Must have at least 8 articles covering the canonical template set');

  const canonicalArticleSlugs = [
    'how-donutland-got-started',
    'donut-recipes-to-try-at-home',
    'donutland-just-opened-5-new-stores',
    'donutland-was-named-top-five-best-donut-companies-in-the-us',
    'grand-opening-party-of-our-new-jersey-location',
    'grand-opening-party-of-our-new-york-location',
    'our-top-five-best-selling-donuts',
    'our-top-three-healthy-donut-recipes',
  ];

  for (const slug of canonicalArticleSlugs) {
    const art = articles.find((a) => a.slug === slug);
    assert.ok(art, `Canonical article ${slug} must exist`);
    assert.ok(art.id, `Article ${slug} must have id`);
    assert.ok(art.title, `Article ${slug} must have title`);
    assert.ok(art.content.length > 0, `Article ${slug} must have content paragraphs`);
    assert.ok(art.author.name, `Article ${slug} must have author name`);
  }

  assert.ok(productCategories.length >= 5, 'Must have product categories');
  assert.ok(blogCategories.length >= 3, 'Must have blog categories');
  assert.ok(productCategories.find((c) => c.slug === 'special'), 'Must have "special" category');
  assert.ok(blogCategories.find((c) => c.slug === 'event'), 'Must have "event" category');
});
