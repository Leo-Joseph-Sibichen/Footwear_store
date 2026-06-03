import React, { useState, FormEvent } from 'react';
import { MailOpen, Send, Sparkles, Footprints, Clock } from 'lucide-react';
import { FOUNDER_QUOTE } from '../data';

export default function FounderMessage() {
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgText, setMsgText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgEmail || !msgText) {
      alert('Please fill out all fields of the founder message form.');
      return;
    }
    // Simulate direct contact
    setSubmitted(true);
    setMsgName('');
    setMsgEmail('');
    setMsgText('');
  };

  return (
    <section id="founder-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-neutral-100 bg-neutral-950 text-white rounded-3xl my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Hand: Quote */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-300">
            <Footprints className="h-3 w-3" />
            A NOTE TO COMFORT ENTHUSIASTS
          </div>

          <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl">
            Why We Engineered medofoot
          </h2>

          <div className="border-l-2 border-amber-500 pl-6 my-4">
            <blockquote>
              <p className="font-sans text-base text-neutral-300 italic leading-relaxed">
                "{FOUNDER_QUOTE.quote}"
              </p>
            </blockquote>
            <div className="mt-4">
              <p className="font-sans text-sm font-bold text-white">{FOUNDER_QUOTE.speaker}</p>
              <p className="font-sans text-xs text-neutral-500">{FOUNDER_QUOTE.title}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-900 text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-500" />
              <p className="font-sans text-xs">Direct review response index within 48h</p>
            </div>
            <div className="flex items-center gap-2">
              <Footprints className="h-4 w-4 text-emerald-500" />
              <p className="font-sans text-xs">Tested on 5,000+ orthotic silhouettes</p>
            </div>
          </div>
        </div>

        {/* Right Hand: Direct communication envelope */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-amber-500/20 rounded-lg p-2.5">
              <MailOpen className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-white">Direct Line to Ganesh</h3>
              <p className="font-sans text-xs text-neutral-400">Your concerns improve our orthotic foam counts.</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-5 text-center space-y-3">
              <span className="text-3xl">✉</span>
              <h4 className="font-sans text-sm font-bold text-emerald-400">Message Dispatched Directly</h4>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                Thank you! Your feedback has been queued. Ganesh reviews combined inquiries weekly alongside our senior physical biomechanics board to constantly tweak model hardness levels.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-sans text-xs text-amber-400 font-bold underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  placeholder="e.g. Priyesh Dev"
                  className="w-full rounded bg-neutral-950 border border-neutral-800 p-3 font-sans text-xs text-white outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={msgEmail}
                  onChange={(e) => setMsgEmail(e.target.value)}
                  placeholder="e.g. priyesh@googlemail.com"
                  className="w-full rounded bg-neutral-950 border border-neutral-800 p-3 font-sans text-xs text-white outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                  Describe Your Foot pain, Daily routine, or Sizing Query
                </label>
                <textarea
                  required
                  rows={4}
                  value={msgText}
                  onChange={(e) => setMsgText(e.target.value)}
                  placeholder="State if you stand heavily for retail/work, manage plantar swelling, or need custom density guidance..."
                  className="w-full rounded bg-neutral-950 border border-neutral-800 p-3 font-sans text-xs text-white outline-none focus:border-amber-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 font-sans text-xs font-bold uppercase tracking-widest py-3 text-neutral-950 transition hover:scale-101 active:scale-[0.99]"
              >
                <Send className="h-3.5 w-3.5" /> Submit Note to Founder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
