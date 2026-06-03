import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, X } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <section id="blog-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-neutral-100">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-800 mb-3">
            <BookOpen className="h-3 w-3" />
            THE FOOTWEAR SCIENCE DICTIONARY
          </span>
          <h2 className="font-sans text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
            Read up on Biomechanical Health
          </h2>
          <p className="mt-2 font-sans text-sm text-neutral-500 leading-relaxed">
            Written by leading Indian podiatrists and wellness consultants to clear up common misconceptions about posture alignment, joint impact protection, and orthopedic footbeds.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 font-sans text-[10px] uppercase font-bold text-neutral-400">
                  <span className="bg-neutral-50 border border-neutral-150 px-2 py-0.5 rounded text-neutral-500">
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {blog.date}
                  </span>
                </div>

                <h3 className="font-sans text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="font-sans text-xs text-neutral-500 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 mt-2 border-t border-dotted border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-700">
              <span className="text-[11px] font-semibold text-neutral-400 uppercase">{blog.readTime}</span>
              <span className="flex items-center gap-1 group-hover:text-amber-600 transition-colors uppercase tracking-wider text-[11px]">
                Read Article <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="absolute inset-0" onClick={() => setSelectedBlog(null)} />

          <div className="relative z-60 bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl p-6 md:p-8">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {selectedBlog.category} • {selectedBlog.readTime}
            </span>

            <h3 className="font-sans text-2xl font-black text-neutral-950 mt-4 leading-tight">
              {selectedBlog.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium py-3 border-b border-neutral-100 mt-2">
              <span className="font-bold text-neutral-800">Medofoot Comfort Editorial Board</span>
              <span>•</span>
              <span>Updated {selectedBlog.date}</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 my-5">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-sm font-sans text-neutral-600 leading-relaxed">
              <p>
                Proper skeletal alignment begins at the feet. When we take a step, several kilograms of micro-kinetic vibration travel upward through the ankle, tibia, knee joints, and pelvic bone. If the sole structure does not correctly guide and disperse this collision energy, the plantar ligament undergoes excessive stretching. This creates microscopic tears, causing the sharp pain known as Plantar Fasciitis, usually worst during the first steps in the morning prior to warm blood circulation.
              </p>
              <p className="font-bold text-neutral-950 bg-neutral-50 p-4 border-l-4 border-amber-500 rounded-r-lg">
                Medical studies demonstrate that orthopedic support structures must utilize dual-gel shock absorption zones alongside deep heel cup stabilizers to prevent lower back misalignment.
              </p>
              <p>
                Medofoot designed our comfort wear to incorporate dense polyurethane support blocks beneath the arch, balanced with cushioning layers to distribute body weight uniformly across the metatarsal. We recommend transitioning slowly over 3-5 days to let your ligaments align with the correct orthopedic profile.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-neutral-950 hover:bg-amber-500 hover:text-neutral-950 px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white transition-colors"
              >
                Close Article Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
