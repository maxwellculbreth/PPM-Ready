export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-[#0B1829] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-xs font-medium">
            Accepting moves now
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Ready to start
          <br />
          your PPM?
        </h2>

        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Tell us your move details and we&apos;ll take it from there. No hold
          times, no guesswork — just a coordinator who handles the logistics so
          you don&apos;t have to.
        </p>

        {/* Lead form */}
        <form className="w-full max-w-2xl mx-auto mb-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Phone Number</label>
            <input
              type="tel"
              placeholder="(555) 000-0000"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              placeholder="jane@email.com"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Move Date (Est.)</label>
            <input
              type="text"
              placeholder="June 2025"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Origin → Destination</label>
            <input
              type="text"
              placeholder="Fort Bragg, NC → Fort Lewis, WA"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors duration-150 shadow-lg shadow-orange-500/20"
            >
              Submit My Move Details
            </button>
          </div>
        </form>

        <p className="text-slate-500 text-xs mb-8">Or reach us directly</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="tel:9194430697"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-base transition-all duration-150 shadow-lg shadow-orange-500/25"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M16.5 13l-3-3-2 2s-2.5-1.5-4-4l2-2-3-3-2 2.5c0 5.5 7.5 10 10.5 10L16.5 13z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Call (919) 443-0697
          </a>
          <a
            href="mailto:info@ppmready.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base transition-all duration-150"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 7l7 4 7-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Email Us
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          No cost to service members &middot; Nationwide coverage &middot;
          Veteran-led team
        </p>
      </div>
    </section>
  );
}
