export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B1829]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse" />
            <span className="text-orange-200 text-xs font-medium tracking-wide uppercase">
              PPM Coordination &amp; Portal
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Your PPM.{" "}
            <span className="text-orange-300">Planned,</span>
            <br />
            Reserved, Reimbursed.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            PPM Ready handles your U-Haul reservation, weight tickets, and
            reimbursement documentation — so you can focus on the move, not the
            logistics. No hold times. No guesswork. Just results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-base transition-all duration-150 shadow-lg shadow-orange-500/20"
            >
              Start My Move
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base transition-all duration-150"
            >
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5L9.5 6h4.5l-3.6 2.7 1.4 4.3L8 10.5l-3.8 2.5 1.4-4.3L2 6h4.5L8 1.5z" fill="#60A5FA" />
              </svg>
              <span>No cost to service members</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11l-3-3" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Veteran-led team</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11l-3-3" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>PCS &amp; PPM specialists</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {[
            { value: "$1K–$5K+", label: "Average PPM reimbursement", sub: "per move" },
            { value: "36+", label: "Years military experience", sub: "on our advisory team" },
            { value: "Zero", label: "Hold times", sub: "we handle U-Haul for you" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors px-8 py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
