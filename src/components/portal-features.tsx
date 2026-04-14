const features = [
  {
    title: "Move Dashboard",
    description:
      "A centralized view of your reservation status, key dates, pickup location, and required action items — all in one place.",
    badge: "Track",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Equipment Coordination",
    description:
      "We estimate your household weight, select the right truck and trailer, and confirm availability at your origin location.",
    badge: "Reserve",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 14.5V18a1 1 0 001 1h1.5M2 14.5L5 9h13l2 5.5M2 14.5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Document Center",
    description:
      "Step-by-step checklists for weight tickets, DD Form 2278, move receipts, and everything your finance office needs to process your claim.",
    badge: "Docs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V9L13 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 2v7h7M9 12h4M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Reimbursement Guidance",
    description:
      "We walk you through the military's PPM reimbursement formula so you understand what to expect and how to submit a claim that doesn't get kicked back.",
    badge: "Pay",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v10M9 9h4.5a1.5 1.5 0 010 3H9m0 0h5a1.5 1.5 0 010 3H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function PortalFeatures() {
  return (
    <section id="portal" className="py-24 bg-[#0B1829] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-800/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-orange-300 text-sm font-semibold tracking-widest uppercase mb-3">
              PPM Portal
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Everything your move needs.
              <br />
              <span className="text-slate-400">In one place.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm leading-relaxed lg:text-right">
            The PPM Portal gives you visibility into every step of your move —
            from reservation to reimbursement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-orange-400/20 transition-all duration-200"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-orange-300 bg-orange-300/10 rounded-full px-2 py-0.5">
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portal mockup teaser */}
        <div className="mt-12 rounded-2xl border border-white/5 overflow-hidden bg-[#0F1F35]">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="ml-3 text-xs text-slate-500 font-mono">ppmready.com/portal</div>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Reservation Status", value: "Confirmed", color: "text-emerald-400", dot: "bg-emerald-400" },
              { label: "Pickup Date", value: "May 15, 2025", color: "text-orange-300", dot: "bg-orange-300" },
              { label: "Est. Reimbursement", value: "$2,400–$3,100", color: "text-yellow-400", dot: "bg-yellow-400" },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.dot} animate-pulse`} />
                  <p className={`font-semibold text-sm ${item.color}`}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
