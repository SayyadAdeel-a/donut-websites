import test from 'node:test';
import assert from 'node:assert/strict';
import { useCart } from '../hooks/useCart.ts';

test('Cart Store: Initial state & basic addition', () => {
  const store = useCart.getState();
  store.clearCart();

  assert.equal(store.getTotalCount(), 0);
  assert.equal(store.getSubtotal(), 0);
  assert.deepEqual(store.items, []);

  // Add item
  store.addItem({
    id: 'prod-01',
    slug: 'peanut-mcrunch',
    name: 'Peanut Mcrunch',
    price: 4.5,
    image: '/donut.webp',
    boxSize: 1,
  });

  const updated = useCart.getState();
  assert.equal(updated.getTotalCount(), 1);
  assert.equal(updated.getSubtotal(), 4.5);
  assert.equal(updated.items.length, 1);
  assert.equal(updated.isOpen, true, 'Cart should open upon adding item');
});

test('Cart Store: Multiple quantities & different box sizes', () => {
  const store = useCart.getState();
  store.clearCart();

  // Add 2 of box 1
  store.addItem({
    id: 'prod-01',
    slug: 'peanut-mcrunch',
    name: 'Peanut Mcrunch',
    price: 4.5,
    image: '/donut.webp',
    boxSize: 1,
    quantity: 2,
  });

  // Add 1 of box 4 of the same product (should be separate item)
  store.addItem({
    id: 'prod-01',
    slug: 'peanut-mcrunch',
    name: 'Peanut Mcrunch',
    price: 16.0,
    image: '/donut.webp',
    boxSize: 4,
    quantity: 1,
  });

  const state = useCart.getState();
  assert.equal(state.items.length, 2);
  assert.equal(state.getTotalCount(), 3);
  assert.equal(state.getSubtotal(), 4.5 * 2 + 16.0);
});

test('Cart Store: Quantity decrement to zero or negative triggers removal', () => {
  const store = useCart.getState();
  store.clearCart();

  store.addItem({
    id: 'prod-02',
    slug: 'chocoglaze',
    name: 'Chocoglaze Deluxe',
    price: 4.25,
    image: '/donut-1.webp',
    boxSize: 1,
    quantity: 1,
  });

  assert.equal(useCart.getState().items.length, 1);

  // Update quantity to 0
  useCart.getState().updateQuantity('prod-02', 0, 1);
  assert.equal(useCart.getState().items.length, 0);
  assert.equal(useCart.getState().getTotalCount(), 0);

  // Add again and test negative quantity
  useCart.getState().addItem({
    id: 'prod-02',
    slug: 'chocoglaze',
    name: 'Chocoglaze Deluxe',
    price: 4.25,
    image: '/donut-1.webp',
    boxSize: 1,
  });
  useCart.getState().updateQuantity('prod-02', -3, 1);
  assert.equal(useCart.getState().items.length, 0);
});

test('Cart Store: Open/Close Drawer Toggle', () => {
  const store = useCart.getState();
  store.closeCart();
  assert.equal(useCart.getState().isOpen, false);

  store.openCart();
  assert.equal(useCart.getState().isOpen, true);

  store.toggleCart();
  assert.equal(useCart.getState().isOpen, false);
});
