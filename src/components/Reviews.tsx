import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-neutral-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800 mb-3">
          <Heart className="h-3 w-3 fill-emerald-600 stroke-none" />
          VERIFIED PAIN RELIEF REPORTS
        </span>
        <h2 className="font-sans text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
          What our patients and runners say
        </h2>
        <p className="mt-4 font-sans text-sm text-neutral-500 leading-relaxed">
          More than 45,000 orthopedic customers have corrected their lower posture balance, eliminated heavy morning foot shocks, and recovered athletic gait alignment using medofoot technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-6 shadow-xs hover:shadow-md transition-shadow relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-neutral-200'
                        }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-neutral-400 font-medium">
                  {review.date}
                </span>
              </div>

              <p className="font-sans text-sm text-neutral-600 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-50 flex items-center justify-between">
              <div>
                <h4 className="font-sans text-sm font-bold text-neutral-900 flex items-center gap-1">
                  {review.name}
                  {review.verified && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 font-sans tracking-wide uppercase border border-emerald-100 shrink-0">
                      ✔ Verified Buyer
                    </span>
                  )}
                </h4>
                <p className="font-mono text-[10px] text-neutral-400 font-semibold tracking-wider mt-0.5">
                  Purchased: {review.productName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
