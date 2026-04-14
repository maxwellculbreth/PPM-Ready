"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a Personally Procured Move (PPM)?",
    a: "A PPM (also called a DITY move) is when a military service member arranges and executes their own PCS move rather than using a government-contracted moving company. The government reimburses you based on the weight of your household goods and the distance of the move — typically at 100% of what it would have cost the government. The reimbursement often exceeds your actual moving costs, which means you can profit from the move.",
  },
  {
    q: "How much can I earn from a PPM move?",
    a: "Reimbursements vary based on your household weight and move distance. Most service members earn between $1,000 and $5,000+ per PPM. A general estimate is approximately 1,000 lbs per room. Our coordinators help you correctly estimate your weight to ensure you rent the right-sized truck and maximize your reimbursement.",
  },
  {
    q: "What equipment do you help me reserve?",
    a: "We coordinate U-Haul trucks and trailers. We assess your household size and weight estimate, then reserve the appropriate truck (10-ft, 15-ft, 20-ft, or 26-ft) along with any additional trailers needed. We handle all communication with U-Haul on your behalf.",
  },
  {
    q: "Is there any cost to use PPM Ready?",
    a: "No. PPM Ready is free for service members. The PPM program already compensates you for your move — our job is to help you navigate it correctly so you don't leave money on the table or submit an incomplete claim.",
  },
  {
    q: "What are weight tickets and why do I need them?",
    a: "Weight tickets are official measurements of your loaded and empty vehicle, taken at a certified scale. They are required documentation for your PPM reimbursement claim. You'll need a certified empty weight (before loading) and a certified loaded weight (after loading). Our team will tell you exactly where to get weighed, what paperwork to bring, and how to complete this step correctly.",
  },
  {
    q: "How far in advance should I contact PPM Ready?",
    a: "The earlier the better — especially during peak PCS season (May through August). We recommend reaching out at least 2–3 weeks before your desired pickup date. U-Haul availability can be limited in military-heavy areas during peak season, so advance planning significantly improves your options.",
  },
  {
    q: "Can you help with reservations in any state?",
    a: "Yes. We coordinate U-Haul reservations nationwide. Whether you're PCSing between posts across the country or moving across a few states, we can secure equipment for your move origin location.",
  },
  {
    q: "What if I need to change or cancel my reservation?",
    a: "We handle reservation modifications too. If your orders change or your move date shifts, contact us and we'll update your reservation. This is one of the most common sources of headaches with self-booked PPMs — holding times and transfer loops — and we absorb that on your behalf.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        className="flex items-start justify-between gap-4 w-full py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-slate-900 font-medium text-base group-hover:text-orange-500 transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-orange-200 group-hover:text-orange-400 transition-all">
          {open ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-8 divide-y divide-transparent">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm mb-3">Still have questions?</p>
          <a
            href="tel:9194430697"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.5 11.5l-2.5-2.5-1.5 1.5s-2-1-3.5-3.5L8.5 5.5 6 3 4 5c0 4.5 6.5 8 8 8l2-1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Call (919) 443-0697
          </a>
        </div>
      </div>
    </section>
  );
}
