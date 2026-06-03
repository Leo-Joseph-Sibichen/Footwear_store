import React, { useState, FormEvent } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, Truck, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) {
  // Checkout Details Form
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1500;
  const isFreeShipping = subTotal >= freeShippingThreshold;
  const remainingForFreeShipping = freeShippingThreshold - subTotal;

  const handleWhatsAppCheckout = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert('Please fill out your Name, Phone Number, and Delivery Address to complete your order draft.');
      return;
    }

    // Build WhatsApp message content
    const storeWhatsAppNumber = '919108412345'; // Configured Support Line
    let message = `Hello Medofoot team! 👣\n\nI would like to place an order for the following orthotic comfort products:\n\n`;

    cart.forEach((item, index) => {
      const itemSubtotal = item.product.price * item.quantity;
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Qty: ${item.quantity} | Price: ₹${item.product.price} each\n`;
      message += `   Subtotal: ₹${itemSubtotal}\n\n`;
    });

    message += `*Cart Summary*\n`;
    message += `----------------------------\n`;
    message += `Subtotal: ₹${subTotal}\n`;
    message += `Delivery Fee: ${isFreeShipping ? 'FREE' : '₹99'}\n`;
    message += `*Total Order Value: ₹${isFreeShipping ? subTotal : subTotal + 99}*\n\n`;

    message += `*Delivery Details*\n`;
    message += `----------------------------\n`;
    message += `👤 Name: ${name}\n`;
    message += `📞 Phone: ${phone}\n`;
    message += `📍 Shipping Address: ${address}\n`;
    if (notes) {
      message += `✉️ Customer Notes/Foot Concerns: ${notes}\n`;
    }
    message += `\nThank you! Please share the payment QR code and confirm my order.`;

    // Encode URL
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeWhatsAppNumber}?text=${encodedText}`;

    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
    setOrderPlaced(true);
  };

  return (
    <div id="cart-drawer-backdrop" className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity">
      {/* Outer Click Dismiss wrapper */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer layout */}
      <div className="relative z-60 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 p-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-neutral-900" />
            <h2 className="font-sans text-lg font-bold text-neutral-900">
              Your Comfort Bag
            </h2>
            <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-sans text-xs font-semibold text-neutral-600">
              {cart.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Shipping Goal Indicator */}
        {cart.length > 0 && (
          <div className="bg-amber-50/70 p-4 border-b border-amber-100">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <Truck className="h-4 w-4 text-emerald-600 animate-bounce" />
                <span>Congratulations! Your order qualifies for FREE physical courier delivery.</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <p className="font-sans text-xs font-semibold text-amber-900 text-center sm:text-left">
                  Add <span className="font-bold">₹{remainingForFreeShipping}</span> more to unlock FREE super-fast shipping!
                </p>
                <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${Math.min((subTotal / freeShippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="flex h-3/4 flex-col items-center justify-center text-center">
              <div className="rounded-full bg-neutral-50 p-6 mb-4 select-none">
                <ShoppingBag className="h-12 w-12 text-neutral-300" />
              </div>
              <h3 className="font-sans text-base font-bold text-neutral-900">Your bag is empty</h3>
              <p className="mt-1 font-sans text-sm text-neutral-500 max-w-xs">
                Browse our ergonomic slippers, comfort insoles & protective socks to find the perfect fit.
              </p>
              <button
                onClick={onClose}
                className="mt-6 rounded-full bg-neutral-900 hover:bg-amber-500 hover:text-neutral-900 px-6 py-2.5 font-sans text-xs font-bold tracking-widest text-white uppercase transition-colors"
              >
                Go Shop Pain Relief
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Product items list */}
              <div className="divide-y divide-neutral-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex py-4 gap-4 first:pt-0 last:pb-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-lg object-cover bg-neutral-100 shrink-0 border border-neutral-100"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-sans text-xs font-bold text-neutral-900 leading-tight">
                          {item.product.name}
                        </h4>
                        <p className="font-sans text-xs text-neutral-500 mt-0.5">
                          ₹{item.product.price} each
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 px-2.5 text-neutral-500 hover:text-neutral-900 leading-none font-bold"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-mono text-xs font-bold px-1 text-neutral-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 px-2.5 text-neutral-500 hover:text-neutral-900 leading-none font-bold"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Remove item */}
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="flex items-center gap-1 font-sans text-[10px] uppercase font-bold tracking-wider text-rose-500 hover:text-rose-700 transition"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Checkout Form */}
              <div className="border-t border-neutral-100 pt-5 mt-6">
                <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-100">
                  <h3 className="font-sans text-xs font-bold text-neutral-900 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                    <MessageSquare className="h-4.5 w-4.5 text-emerald-600" />
                    Delivery Details (Order on WhatsApp)
                  </h3>

                  <form onSubmit={handleWhatsAppCheckout} className="space-y-3">
                    <div>
                      <label className="block font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded bg-white border border-neutral-200 p-2 font-sans text-xs outline-none focus:border-amber-500 transition text-neutral-800"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        Contact Phone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded bg-white border border-neutral-200 p-2 font-sans text-xs outline-none focus:border-amber-500 transition text-neutral-800"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        Shipping Address *
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="House Number, Street Name, City, Pincode"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded bg-white border border-neutral-200 p-2 font-sans text-xs outline-none focus:border-amber-500 transition text-neutral-800 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        Anatomical Concerns / Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. heel spurs, pronated flat arches"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full rounded bg-white border border-neutral-200 p-2 font-sans text-xs outline-none focus:border-amber-500 transition text-neutral-800"
                      />
                    </div>

                    <div className="mt-4 pt-2">
                      <button
                        type="submit"
                        className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 py-3 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Send Order to WhatsApp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer with pricing summaries */}
        {cart.length > 0 && (
          <div className="border-t border-neutral-100 bg-neutral-50 p-5">
            <div className="space-y-1.5 font-sans text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-mono text-neutral-900 font-semibold">₹{subTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span className="font-mono text-neutral-900 font-semibold">
                  {isFreeShipping ? 'FREE' : '₹99'}
                </span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2 text-sm font-bold text-neutral-950">
                <span>Final Order Amount:</span>
                <span className="font-mono text-lg font-black text-neutral-950">
                  ₹{isFreeShipping ? subTotal : subTotal + 99}
                </span>
              </div>
            </div>

            <div className="mt-4 bg-emerald-50 rounded-lg p-2.5 border border-emerald-100 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <p className="font-sans text-[10px] text-emerald-800 leading-snug">
                <strong>WhatsApp Checkout Guard:</strong> Direct messages are entirely confidential. No third-party tracking or automated gateways.
              </p>
            </div>

            {orderPlaced && (
              <div className="mt-3 bg-blue-50 border border-blue-100 p-3 rounded-lg text-center font-sans text-xs text-blue-800">
                🚀 Order Draft generated! Confirm sending in your opened WhatsApp browser.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
