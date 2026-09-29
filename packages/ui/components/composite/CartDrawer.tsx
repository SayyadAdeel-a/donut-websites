'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash, ArrowRight, ShoppingBag } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../hooks/useCart';
import { QuantitySelector } from '../atomic/QuantitySelector';
import { PriceTag } from '../atomic/PriceTag';
import { Button } from '../atomic/Button';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal } = useCart();
  const subtotal = getSubtotal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative z-10 w-full max-w-[480px] bg-white h-full shadow-2xl flex flex-col border-l-4 border-black"
            role="dialog"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-[#f54f95] text-white border-b-2 border-black">
              <div className="flex items-center gap-2">
                <ShoppingBag size={24} weight="bold" />
                <h2 className="font-display text-2xl font-bold tracking-wide uppercase">Your Cart</h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Cart Items or Empty State */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-[#f5f6f4] border-2 border-black flex items-center justify-center mb-4 text-[#f54f95] shadow-[3px_3px_0_0_#000000]">
                    <ShoppingBag size={36} weight="duotone" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black mb-2">
                    Your Donut Box Is Empty!
                  </h3>
                  <p className="font-sans text-sm text-gray-600 mb-6 max-w-[260px]">
                    Treat yourself to freshly glazed confectioneries and artisan delights.
                  </p>
                  <Button
                    variant="pink"
                    size="pill"
                    onClick={closeCart}
                    className="flex items-center gap-2"
                  >
                    <span>Browse Donuts</span>
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.id}-${item.boxSize}`}
                    className="flex items-center gap-4 p-4 rounded-[16px] border-2 border-black bg-[#fafafa] shadow-[3px_3px_0_0_#000000]"
                  >
                    <div className="relative w-16 h-16 rounded-[12px] bg-white border border-black/10 overflow-hidden shrink-0 p-1 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-base font-bold uppercase tracking-tight text-black truncate">
                        {item.name}
                      </h4>
                      {item.boxSize && (
                        <span className="text-[11px] font-sans font-bold uppercase text-gray-500 block">
                          Box of {item.boxSize}
                        </span>
                      )}
                      <div className="mt-1">
                        <PriceTag price={item.price} size="sm" />
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.boxSize)}
                        className="text-gray-400 hover:text-[#f21d33] transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash size={16} weight="bold" />
                      </button>
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(qty) => updateQuantity(item.id, qty, item.boxSize)}
                        size="sm"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t-2 border-black bg-[#f5f6f4] space-y-4">
                <div className="flex items-center justify-between font-display text-xl uppercase font-bold text-black">
                  <span>Subtotal:</span>
                  <PriceTag price={subtotal} size="lg" />
                </div>
                <p className="font-sans text-xs text-gray-500">
                  Taxes, shipping, and promotional codes calculated during checkout.
                </p>
                <div className="pt-2">
                  <Link href="/checkout" onClick={closeCart} className="block w-full">
                    <Button
                      variant="pink"
                      size="lg"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <span>Continue to Checkout</span>
                      <ArrowRight size={18} weight="bold" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
