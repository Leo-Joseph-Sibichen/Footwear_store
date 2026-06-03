import React from 'react';
import { Star, ShieldCheck, Heart, Footprints } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
  key?: string;
}

export default function ProductCard({
  product,
  onAddToCart,
  isInCart
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Badge or tags */}
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-neutral-900 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
          {product.badge}
        </span>
      )}

      {/* Product Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors pointer-events-none" />

        {/* Dynamic decorative category tag inside the card corner */}
        <span className="absolute right-3 bottom-3 rounded bg-white/90 backdrop-blur-xs px-2 py-0.5 font-mono text-[9px] font-bold text-neutral-600 tracking-wider uppercase border border-neutral-150">
          {product.category.replace('-', ' ')}
        </span>
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-neutral-200'
                  }`}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] font-medium text-neutral-500">
            {product.rating} ({product.reviewsCount} reviews)
          </span>
        </div>

        <h3 className="font-sans text-base font-bold text-neutral-950 group-hover:text-amber-600 transition-colors line-clamp-1 leading-snug">
          {product.name}
        </h3>

        <p className="mt-2 text-xs font-sans text-neutral-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Feature List */}
        <div className="mt-4 space-y-1">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-sans text-[10px] text-neutral-600 uppercase font-semibold">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Foot health concerns targeted */}
        <div className="mt-4 flex flex-wrap gap-1 border-t border-dashed border-neutral-100 pt-3">
          {product.concern.map((item, idx) => (
            <span
              key={idx}
              className="rounded-md bg-neutral-50 border border-neutral-100 px-2 py-0.5 font-sans text-[10px] font-medium text-neutral-500"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Price and Add to Cart action */}
        <div className="mt-6 flex items-center justify-between border-t border-neutral-50 pt-4">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="font-sans text-xs text-neutral-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="font-sans text-lg font-black text-neutral-950">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`cursor-pointer rounded-full font-sans text-xs font-bold uppercase tracking-widest px-4 py-2.5 transition-all text-center ${isInCart
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100'
                : 'bg-neutral-900 text-white hover:bg-amber-500 hover:text-neutral-950 hover:shadow-md'
              }`}
          >
            {isInCart ? 'Added to Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
