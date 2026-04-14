const steps = [
  {
    number: "01",
    title: "Submit Your Move Details",
    description:
      "Share your PCS dates, origin and destination, household size, and preferred move window. It takes less than 5 minutes.",
    detail: "Online form or call us at (919) 443-0697",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M8 4v5M16 4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Reserve Your Equipment",
    description:
      "Our coordinators call U-Haul on your behalf, confirm the right truck size for your household weight, and lock in your reservation.",
    detail: "Right-sized truck + trailer for your load",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 12.5V16a1 1 0 001 1h1.5M1 12.5L4 8h11.5l2.5 4.5M1 12.5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.5 17H21a1 1 0 001-1v-2l-1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Move, Weigh, Collect",
    description:
      "Pick up your equipment on your timeline, complete your move, and submit your reimbursement claim with our step-by-step documentation guidance.",
    detail: "Weight ticket guidance included",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Three steps to a completed PPM
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            We built PPM Ready to eliminate the friction most service members
            face when trying to do a PPM on their own.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66.67%-4rem)] h-px bg-gradient-to-r from-transparent via-orange-100 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-orange-50 group-hover:border-orange-200 group-hover:shadow-lg group-hover:shadow-orange-50/50 transition-all duration-200 flex items-center justify-center text-orange-500 mb-6">
                  {step.icon}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-orange-300 tracking-widest uppercase mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-100 rounded-full px-3 py-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L5 8l-3-3" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-base transition-colors duration-150 shadow-md shadow-orange-500/20"
          >
            Start My Move
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
