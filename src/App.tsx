import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ConcernSelector from './components/ConcernSelector';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Reviews from './components/Reviews';
import FounderMessage from './components/FounderMessage';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

import { Product, CartItem } from './types';
import { PRODUCTS } from './data';
import { Footprints, Sparkles, Filter, X, ChevronRight, Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Filtering & Discovery states
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open the side cart drawer immediately so user gets intuitive visual checkout feedback!
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedConcern(null);
    setSearchQuery('');
  };

  // Grid filtration calculation
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Category Filter
    if (selectedCategory !== 'all') {
      if (product.category !== selectedCategory) return false;
    }

    // 2. Concern / Symptom Filter
    if (selectedConcern !== null) {
      if (!product.concern.includes(selectedConcern)) return false;
    }

    // 3. Text Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchConcern = product.concern.some((item) => item.toLowerCase().includes(query));
      if (!matchName && !matchDesc && !matchConcern) return false;
    }

    return true;
  });

  const categoriesList = [
    { id: 'all', name: 'All Comfort' },
    { id: 'indoor-slippers', name: 'Indoor Slippers' },
    { id: 'outdoor-slippers', name: 'Outdoor Slides' },
    { id: 'insoles', name: 'Orthotic Insoles' },
    { id: 'socks', name: 'Therapeutic Socks' }
  ];

  return (
    <div id="shopping-app-root" className="min-h-screen bg-slate-50/30 text-neutral-800 antialiased selection:bg-amber-100 selection:text-neutral-900">

      {/* Top Interactive Promo Announcement Banner */}
      <div className="bg-neutral-950 text-white font-sans text-[10px] sm:text-xs text-center py-2 px-4 flex items-center justify-center gap-1.5 font-bold uppercase tracking-widest border-b border-neutral-900 select-none">
        <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
        <span>Direct WhatsApp Sales Active • Free post-support sizing exchanges</span>
        <span className="hidden md:inline">• Pay on Delivery (POD) Enabled</span>
      </div>

      {/* Embedded Component Navbar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setCartOpen(true)}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Immersive Rotating Hero Slides Section */}
      <HeroSlider />

      {/* "Shop by Concern" Interactive Anatomical Symptoms Panel */}
      <ConcernSelector
        selectedConcern={selectedConcern}
        onSelectConcern={setSelectedConcern}
      />

      {/* Main Interactive Product Discovery Interface / Grid */}
      <main id="catalog-section" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Dynamic header describing filtered lists */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-neutral-100 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded bg-neutral-100 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
              <Filter className="h-3 w-3 text-amber-500" />
              PRODUCT DISCOVERY FILTERED BY YOUR SELECTIONS
            </div>

            <h2 className="font-sans text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
              {selectedConcern ? `Orthotics targeting "${selectedConcern}"` : 'Best Sellers & Dynamic Comfort'}
            </h2>
            <p className="mt-1 font-sans text-xs text-neutral-500 max-w-xl">
              Fine-tune our models using concern selectors or the category pills below. Instant responsive feedback ensures perfect compatibility.
            </p>
          </div>

          {/* Sizing/POD Trust Badges */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 text-[10px] font-bold font-sans text-neutral-500 uppercase tracking-wider bg-neutral-50 p-2.5 rounded-lg border border-neutral-150/50">
            <span className="flex items-center gap-1">✔ Doctor Standardized</span>
            <span className="text-neutral-300">|</span>
            <span className="flex items-center gap-1 text-emerald-600">✔ WhatsApp Order Verified</span>
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categoriesList.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                // Clear query if navigating tabs
                if (searchQuery) setSearchQuery('');
              }}
              className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all ${selectedCategory === category.id
                ? 'bg-neutral-950 text-white shadow-md'
                : 'bg-white border border-neutral-250 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 border-neutral-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Filter Indicators Breadcrumb */}
        {(selectedConcern || selectedCategory !== 'all' || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-amber-50/50 border border-amber-200/50 p-3 rounded-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-amber-900">
              Active Filters:
            </span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-950 py-1 px-2.5 rounded text-xs font-medium">
                Category: <span className="font-bold">{categoriesList.find(c => c.id === selectedCategory)?.name}</span>
                <button onClick={() => setSelectedCategory('all')} className="hover:text-rose-500 font-bold ml-1">×</button>
              </span>
            )}

            {selectedConcern && (
              <span className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-950 py-1 px-2.5 rounded text-xs font-medium">
                Concern: <span className="font-bold">{selectedConcern}</span>
                <button onClick={() => setSelectedConcern(null)} className="hover:text-rose-500 font-bold ml-1">×</button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-950 py-1 px-2.5 rounded text-xs font-medium">
                Keyword: <span className="font-bold">"{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-rose-500 font-bold ml-1">×</button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="font-sans text-xs font-semibold text-rose-600 hover:text-rose-800 underline ml-auto transition cursor-pointer"
            >
              Clear All Selection Filters
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-neutral-200 bg-white rounded-3xl p-8 max-w-xl mx-auto my-12">
            <div className="text-3xl mb-3">☹</div>
            <h3 className="font-sans text-base font-bold text-neutral-900">No orthopedic models matched your criteria</h3>
            <p className="mt-1 font-sans text-sm text-neutral-500 leading-normal">
              We currently haven't mapped products combining these specific terms. Try adjusting your symptom concerns filters or explore all categories.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-6 rounded-full bg-neutral-900 hover:bg-amber-500 hover:text-neutral-900 px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              Show All Comfort Wear
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inCart = cart.some((item) => item.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isInCart={inCart}
                />
              );
            })}
          </div>
        )}
      </main>

      {/* Customer post-alignment review feedback */}
      <Reviews />

      {/* Interactive Founder Message block */}
      <FounderMessage />

      {/* Informative medical blogs list with overlay expandability */}
      <BlogSection />

      {/* Footer with subpoints */}
      <Footer />

      {/* Cart Drawer sliding sidebar layout */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
