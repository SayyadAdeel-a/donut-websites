'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { GlobalHeader, GlobalFooter, Button, Input, PriceTag, useCart } from '@donutland/ui';
import { CheckCircle, ShoppingBag, ShieldCheck, ArrowRight } from '@phosphor-icons/react';

export default function CheckoutPage() {
  const { items, getSubtotal, clearCart } = useCart();
  const subtotal = getSubtotal();
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  const [orderComplete, setOrderComplete] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
    setOrderComplete(true);
    clearCart();
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader />

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 flex-1 w-full">
        {orderComplete ? (
          <div className="max-w-xl mx-auto p-10 md:p-12 rounded-[32px] border-4 border-black bg-white shadow-[10px_10px_0_0_#000000] text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#1ac500]/10 text-[#1ac500] flex items-center justify-center mx-auto border-2 border-[#1ac500]">
              <CheckCircle size={44} weight="fill" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-black">
              Sweet! Order Placed!
            </h1>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Your donuts are queued in tomorrow morning&apos;s 4:00 AM fresh bake. A confirmation email and tracking link have been dispatched.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button variant="pink" size="lg" rounded="full" className="flex items-center justify-center gap-2 mx-auto">
                  <span>Return to Donutland</span>
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-8">
              Checkout & Order Confirmation
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 rounded-[28px] border-4 border-black p-8 md:p-10 bg-white shadow-[8px_8px_0_0_#000000] space-y-6">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                  1. Shipping Destination
                </h2>

                <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">First Name</label>
                      <Input required placeholder="Jane" />
                    </div>
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">Last Name</label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">Street Address</label>
                    <Input required placeholder="742 Evergreen Terrace" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">City</label>
                      <Input required placeholder="Springfield" />
                    </div>
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">State</label>
                      <Input required placeholder="NY" />
                    </div>
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1">ZIP Code</label>
                      <Input required placeholder="10001" />
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-black/10">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black mb-4">
                      2. Payment Method
                    </h2>
                    <div className="p-4 rounded-[16px] bg-[#fafafa] border-2 border-black space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm uppercase font-bold">Credit / Debit Card</span>
                        <ShieldCheck size={20} className="text-[#1ac500]" />
                      </div>
                      <Input required placeholder="Card Number (4000 1234 5678 9010)" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input required placeholder="MM / YY" />
                        <Input required placeholder="CVC" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="pink"
                      size="lg"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={items.length === 0}
                    >
                      <span>Complete Order • ${total.toFixed(2)}</span>
                      <ArrowRight size={18} weight="bold" />
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 rounded-[28px] border-4 border-black p-8 bg-white shadow-[8px_8px_0_0_#000000] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b-2 border-black/10">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                    Order Summary
                  </h2>
                  <span className="font-sans text-xs font-bold uppercase text-gray-500">
                    {items.length} items
                  </span>
                </div>

                <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
                  {items.length === 0 ? (
                    <p className="font-sans text-sm text-gray-500 text-center py-6">
                      Your cart is empty. Add donuts from the shop menu to proceed.
                    </p>
                  ) : (
                    items.map((item) => (
                      <div key={`${item.id}-${item.boxSize}`} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[10px] bg-white border border-black/10 shrink-0 p-1 flex items-center justify-center">
                          <Image src={item.image} alt={item.name} width={40} height={40} className="object-contain w-full h-full" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-sm font-bold uppercase truncate">{item.name}</h4>
                          <span className="text-[11px] font-sans text-gray-500 block">Qty: {item.quantity}</span>
                        </div>
                        <PriceTag price={item.price * item.quantity} size="sm" />
                      </div>
                    ))
                  )}
                </div>

                <div className="pt-4 border-t-2 border-black/10 space-y-2 font-sans text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Fresh Delivery:</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-display text-xl font-bold uppercase text-black pt-2 border-t border-black/10">
                    <span>Total Due:</span>
                    <PriceTag price={total} size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <GlobalFooter />
    </div>
  );
}
