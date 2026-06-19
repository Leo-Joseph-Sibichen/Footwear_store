import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown, Phone, Mail, MapPin, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({
  cart,
  onOpenCart,
  onSelectCategory,
  selectedCategory,
  searchQuery,
  onSearchChange
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'categories' | 'contact' | null>(null);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategoryClick = (cat: string) => {
    onSelectCategory(cat);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);

    // Smooth scroll to catalog
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSupportClick = (topic: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);

    // Smooth scroll to contact or footer
    const targetId = topic === 'founder' ? 'founder-section' : 'footer-section';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="app-navbar" className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-2" onClick={() => handleCategoryClick('all')}>
            <span className="font-sans text-xl font-black tracking-widest text-neutral-900 sm:text-2xl">
              Medofoot<span className="text-amber-500">.</span>
            </span>
            <span className="hidden rounded-full bg-[#87eb91] px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-950 sm:inline-block tracking-tight">
              ORTHOTICS
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8" onMouseLeave={() => setActiveMegaMenu(null)}>
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('categories')}
          >
            <button
              type="button"
              id="categories-mega-btn"
              className={`flex items-center gap-1 py-5 font-sans text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-amber-600 transition-colors ${activeMegaMenu === 'categories' ? 'text-amber-600' : ''
                }`}
            >
              Shop Categories
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMegaMenu === 'categories' ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Categories Dropdown */}
            {activeMegaMenu === 'categories' && (
              <div
                className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 border border-neutral-100 bg-white p-6 shadow-xl rounded-b-xl"
                onMouseEnter={() => setActiveMegaMenu('categories')}
              >
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                      Footwear
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => handleCategoryClick('indoor-slippers')}
                          className={`w-full text-left font-sans text-sm py-1 rounded transition-colors ${selectedCategory === 'indoor-slippers' ? 'font-medium text-amber-600' : 'text-neutral-600 hover:text-neutral-900'
                            }`}
                        >
                          Indoor Slippers
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('outdoor-slippers')}
                          className={`w-full text-left font-sans text-sm py-1 rounded transition-colors ${selectedCategory === 'outdoor-slippers' ? 'font-medium text-amber-600' : 'text-neutral-600 hover:text-neutral-900'
                            }`}
                        >
                          Outdoor Comfortable Slides
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('all')}
                          className="w-full text-left font-sans text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 group py-1"
                        >
                          View All Footwear <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                      Orthotic Insoles
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => handleCategoryClick('insoles')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          Dual-Gel Insoles (Foot Pain)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('insoles')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          Work-Day Heavy Cushioning
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('insoles')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          ActiveFit Sports Arch Support
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                      Therapeutic Socks
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => handleCategoryClick('socks')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          Arch Compression Socks
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('socks')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          Diabetic Cushioned Socks
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleCategoryClick('socks')}
                          className="w-full text-left font-sans text-sm text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          Anti-Fatigue Socks
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-50 pt-4 bg-amber-50/50 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <p className="font-sans text-xs text-neutral-600 font-medium">
                      Order via WhatsApp & Pay on Delivery. Unlocked!
                    </p>
                  </div>
                  <button
                    onClick={() => handleCategoryClick('all')}
                    className="font-sans text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                  >
                    View All Products <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('contact')}
          >
            <button
              type="button"
              id="contact-mega-btn"
              className={`flex items-center gap-1 py-5 font-sans text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-amber-600 transition-colors ${activeMegaMenu === 'contact' ? 'text-amber-600' : ''
                }`}
            >
              Contact & Support
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMegaMenu === 'contact' ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Contact Dropdown */}
            {activeMegaMenu === 'contact' && (
              <div
                className="absolute left-1/2 top-full z-50 w-[580px] -translate-x-1/2 border border-neutral-100 bg-white p-6 shadow-xl rounded-b-xl"
                onMouseEnter={() => setActiveMegaMenu('contact')}
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                      Get In Touch
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Phone className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-sans text-xs font-bold text-neutral-800">Support Hotline</p>
                          <a href="tel:+919108412345" className="font-sans text-sm text-neutral-600 hover:text-amber-600">
                            +91 91084 12345
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 border-t border-neutral-50 pt-3">
                        <Mail className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-sans text-xs font-bold text-neutral-800">Email Address</p>
                          <a href="mailto:support@medofoot.com" className="font-sans text-sm text-neutral-600 hover:text-amber-600">
                            support@Medofoot.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 border-t border-neutral-50 pt-3">
                        <MapPin className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-sans text-xs font-bold text-neutral-800">Corporate HQ</p>
                          <p className="font-sans text-xs text-neutral-500 leading-normal">
                            Medofoot Comfort Labs, Outer Ring Road, Kottayam, India - 686536.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50/70 p-4 rounded-lg flex flex-col justify-between">
                    <div>
                      <h5 className="font-sans text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-emerald-500" />
                        WhatsApp Support
                      </h5>
                      <p className="font-sans text-xs text-neutral-500 leading-normal">
                        Have chronic heel spur or flat arch troubles? Message our specialist on WhatsApp for a custom sizing fit diagnosis.
                      </p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <button
                        onClick={() => handleSupportClick('founder')}
                        className="w-full py-2 bg-white border border-neutral-200 hover:border-amber-500 rounded text-center text-xs font-bold text-neutral-700 transition-colors flex items-center justify-center gap-1"
                      >
                        <HelpCircle className="h-3.5 w-3.5 text-amber-500" /> Message Founder
                      </button>
                      <a
                        href="https://wa.me/919108412345?text=Hello%20medofoot,%20I'd%20love%20help%20with%20selecting%20the%20ideal%20cushions%20for%20my%20foot%20issue."
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-center text-xs font-bold transition-colors shadow-sm"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleCategoryClick('all')}
            className={`font-sans text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-amber-600 transition-colors py-5 ${selectedCategory === 'all' && searchQuery === '' ? 'text-amber-600 font-bold' : ''
              }`}
          >
            All Products
          </button>
        </nav>

        {/* Search & Shopping Bag */}
        <div className="flex flex-1 items-center justify-end gap-x-4 lg:flex-none">
          {/* Search box (desktop) */}
          <div className="relative hidden sm:block w-48 focus-within:w-64 transition-all duration-300">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="desktop-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search comfort..."
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-1.5 pl-9 pr-4 font-sans text-xs outline-none focus:border-amber-500 focus:bg-white transition-all text-neutral-800"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Cart Icon */}
          <button
            type="button"
            id="shopping-bag-btn"
            onClick={onOpenCart}
            className="group relative flex items-center p-2 text-neutral-600 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 rounded-full transition-all"
          >
            <ShoppingBag className="h-5 w-5 shrink-0" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white ring-2 ring-white">
                {totalItems}
              </span>
            )}
            <span className="sr-only">items in cart, view bag</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-4 py-4 space-y-4">
          {/* Mobile search bar */}
          <div className="relative w-full">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="mobile-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search slippers, insoles..."
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-8 font-sans text-sm outline-none focus:border-amber-500 focus:bg-white text-neutral-800"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-1">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-3 py-1">
              Shop Categories
            </p>
            <button
              onClick={() => handleCategoryClick('indoor-slippers')}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-sm text-neutral-700 hover:bg-neutral-50"
            >
              Indoor Slippers
            </button>
            <button
              onClick={() => handleCategoryClick('outdoor-slippers')}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-sm text-neutral-700 hover:bg-neutral-50"
            >
              Outdoor Comfortable Slippers
            </button>
            <button
              onClick={() => handleCategoryClick('insoles')}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-sm text-neutral-700 hover:bg-neutral-50"
            >
              Orthotic Insoles
            </button>
            <button
              onClick={() => handleCategoryClick('socks')}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-sm text-neutral-700 hover:bg-neutral-50"
            >
              Therapeutic Socks
            </button>
            <button
              onClick={() => handleCategoryClick('all')}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-sans text-sm font-semibold text-amber-600 hover:bg-amber-50"
            >
              View All Products
            </button>
          </div>

          <div className="border-t border-neutral-100 pt-3 space-y-1">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-3 py-1">
              Contact us
            </p>
            <a
              href="https://wa.me/919108412345?text=Hello%20medofoot,%20I'd%20love%20help%20with%20selecting%20the%20ideal%20cushions%25"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 font-sans text-sm text-emerald-600 font-semibold"
            >
              <MessageSquare className="h-4 w-4 shrink-0" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:support@medofoot.com"
              className="flex items-center gap-2 rounded-lg px-3 py-2 font-sans text-sm text-neutral-600"
            >
              <Mail className="h-4 w-4 shrink-0" /> support@medofoot.com
            </a>
            <a
              href="tel:+919108412345"
              className="flex items-center gap-2 rounded-lg px-3 py-2 font-sans text-sm text-neutral-600"
            >
              <Phone className="h-4 w-4 shrink-0" /> +91 91084 12345
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
