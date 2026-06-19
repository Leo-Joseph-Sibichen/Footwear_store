import React from 'react';
import { Footprints, Mail, Phone, MapPin, Instagram, Facebook, HelpCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer-section" className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-900">

          {/* About Column (Subpoints inside as requested!) */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white">
              About Medofoot
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-normal">
              Medofoot is India’s premium comfort-first orthotic engineering laboratory, redesigning daily slippers, insoles, and compression wear.
            </p>
            <ul className="space-y-2 text-xs font-sans">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <div>
                  <strong className="text-neutral-200 block">Our Comfort Mission</strong>
                  <span>Merging high-density orthopedic correction with stylish plush daily apparel.</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-neutral-900/40 pt-1">
                <span className="text-amber-500 font-bold">•</span>
                <div>
                  <strong className="text-neutral-200 block">Senior Medical Board</strong>
                  <span>Designed side-by-side with biomechanical experts and senior podiatric consulting editors.</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-neutral-900/40 pt-1">
                <span className="text-amber-500 font-bold">•</span>
                <div>
                  <strong className="text-neutral-200 block">Strict Sizing Guarantee</strong>
                  <span>30-Day pain reduction or easy diagnostic sizing swaps on direct orders.</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-neutral-900/40 pt-1">
                <span className="text-amber-500 font-bold">•</span>
                <div>
                  <strong className="text-neutral-200 block">Eco-Cushioning Initiative</strong>
                  <span>Our outsoles incorporate naturally sourced bio-cork extracts and organic combed wicking materials.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white">
              Explore Products
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => handleScrollToSection('catalog-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Indoor Orthopedic Slippers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('catalog-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Outdoor High-Contoured Slides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('catalog-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Doctor-Approved Gel Insoles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('catalog-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Compression Plantar Socks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('concern-section')}
                  className="hover:text-amber-400 text-left text-amber-500 font-semibold transition"
                >
                  Check Your Concern Filter
                </button>
              </li>
            </ul>
          </div>

          {/* Support / Quick Help Column */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white">
              Customer Support
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => handleScrollToSection('founder-section')}
                  className="hover:text-amber-400 text-left transition animate-pulse"
                >
                  Ask Mathew (Team Head)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('reviews-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Verified Posture Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('blog-section')}
                  className="hover:text-amber-400 text-left transition"
                >
                  Footwear Science Journal
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919108412345?text=Hello%20medofoot,%20I'd%20love%20help%20with%20selecting%20the%20ideal%20cushions"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 block transition"
                >
                  Returns & Exchange Policy
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Order Dispatch Lead-time: 24 - 48 Hours</span>
              </li>
            </ul>
          </div>

          {/* Contacts info Column */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white">
              Medofoot Labs Inquiries
            </h3>
            <ul className="space-y-3 font-sans text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-300">WhatsApp Hotlines</p>
                  <a href="tel:+919108412345" className="hover:text-amber-400">+91 91084 12345</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-300">Inquiry Email</p>
                  <a href="mailto:support@medofoot.com" className="hover:text-amber-400">support@medofoot.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Medofoot Comfort Labs, Outer Ring Road, Mamoodu, Kottayam, Kerala - 686536.
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:bg-neutral-900 transition">
                <Instagram className="h-4 w-4 text-neutral-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:bg-neutral-900 transition">
                <Facebook className="h-4 w-4 text-neutral-400 hover:text-white" />
              </a>
              <a href="https://wa.me/919108412345" target="_blank" rel="noreferrer" className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:bg-neutral-900 transition">
                <HelpCircle className="h-4 w-4 text-emerald-400 hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Sub bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-neutral-500">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-neutral-400">
            <span>Medofoot<span className="text-amber-500">.</span></span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="font-medium text-neutral-500 tracking-normal text-[11px] uppercase">Orthotics Lab</span>
          </div>
          <p>© 2026 Medofoot. Custom Orthotic Comfort Products. Direct WhatsApp Sales Enabled.</p>
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="font-mono text-[10px]">End-to-End Encrypted Connections</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
