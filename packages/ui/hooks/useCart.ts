'use client';

import { create } from 'zustand';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  boxSize?: number;
  image: string;
  quantity: number;
  flavor?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, boxSize?: number) => void;
  updateQuantity: (id: string, quantity: number, boxSize?: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getSubtotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (newItem) => {
    const quantity = newItem.quantity ?? 1;
    set((state) => {
      const existingIndex = state.items.findIndex(
        (i) => i.id === newItem.id && i.boxSize === newItem.boxSize
      );

      if (existingIndex > -1) {
        const next = [...state.items];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return { items: next, isOpen: true };
      }

      return {
        items: [...state.items, { ...newItem, quantity }],
        isOpen: true,
      };
    });
  },

  removeItem: (id, boxSize) => {
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.boxSize === boxSize)),
    }));
  },

  updateQuantity: (id, quantity, boxSize) => {
    if (quantity <= 0) {
      get().removeItem(id, boxSize);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.boxSize === boxSize
          ? { ...item, quantity }
          : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));
