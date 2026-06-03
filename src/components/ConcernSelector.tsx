import React from 'react';
import { Activity, TrendingDown, ShieldAlert, AlertCircle, Sparkles, Footprints, Check } from 'lucide-react';
import { CONCERNS } from '../data';
import { Concern } from '../types';

interface ConcernSelectorProps {
  selectedConcern: string | null;
  onSelectConcern: (concernName: string | null) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Activity':
      return <Activity className="h-6 w-6 text-emerald-500" />;
    case 'TrendingDown':
      return <TrendingDown className="h-6 w-6 text-indigo-500" />;
    case 'ShieldAlert':
      return <ShieldAlert className="h-6 w-6 text-rose-500" />;
    case 'AlertCircle':
      return <AlertCircle className="h-6 w-6 text-amber-500" />;
    default:
      return <Sparkles className="h-6 w-6 text-sky-500" />;
  }
};

export default function ConcernSelector({
  selectedConcern,
  onSelectConcern
}: ConcernSelectorProps) {
  return (
    <section id="concern-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-neutral-50/50 rounded-3xl my-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-800 mb-3">
          <Footprints className="h-3 w-3" />
          SHOP BY HEALTH CONCERN
        </div>
        <h2 className="font-sans text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
          What physical symptom are you managing?
        </h2>
        <p className="mt-4 font-sans text-sm text-neutral-500 leading-relaxed">
          Select your foot condition to discover customized orthopedic products and supportive insoles specifically calibrated to alleviate precise anatomical strain points.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {CONCERNS.map((concern) => {
          const isSelected = selectedConcern === concern.name;
          return (
            <button
              key={concern.id}
              onClick={() => onSelectConcern(isSelected ? null : concern.name)}
              className={`relative flex flex-col justify-between rounded-2xl p-5 text-left border-2 transition-all duration-300 hover:shadow-md cursor-pointer ${isSelected
                ? 'bg-amber-50/70 border-amber-500 ring-2 ring-amber-500/20'
                : 'bg-white border-neutral-100 hover:border-neutral-200'
                }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 bg-amber-500 text-white rounded-full p-0.5">
                  <Check className="h-3.5 w-3.5" />
                </span>
              )}

              <div className="mb-4 bg-neutral-50 rounded-xl p-3 inline-block self-start shrink-0">
                {getIcon(concern.icon)}
              </div>

              <div>
                <h3 className="font-sans text-sm font-bold text-neutral-900 leading-snug">
                  {concern.name}
                </h3>
                <p className="mt-1 font-sans text-xs text-neutral-500 leading-normal">
                  {concern.description}
                </p>
              </div>

              {/* Readability action link */}
              <div className="mt-4 pt-3 border-t border-dotted border-neutral-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                <span>{isSelected ? 'Filtering Active' : 'Filter Products'}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-amber-500' : 'bg-transparent'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {selectedConcern && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => onSelectConcern(null)}
            className="font-sans text-xs font-semibold text-neutral-500 hover:text-amber-600 underline cursor-pointer"
          >
            Clear concern filter (Show all products)
          </button>
        </div>
      )}
    </section>
  );
}
