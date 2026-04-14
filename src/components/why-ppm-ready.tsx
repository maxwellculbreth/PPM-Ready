const reasons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Zero Hold Times",
    description:
      "We make the U-Haul calls, handle modifications, and confirm your reservation. You never have to sit on hold for 45 minutes trying to reach the right department.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17 7H3l2 10h10l2-10zM7 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Right-Sized Equipment",
    description:
      "Most self-booked PPMs use the wrong truck size. Our coordinators calculate your household weight and match you to the correct vehicle so you maximize your reimbursement.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v2H4zM4 9h12M4 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Documentation Guidance",
    description:
      "Weight tickets, move receipts, DD Form 2278 — we walk you through every document you need to submit a clean reimbursement claim to your finance office.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.5 4h4.5l-3.6 2.7 1.4 4.3L10 10.5l-3.8 2.5 1.4-4.3L4 7h4.5L10 2z" fill="currentColor" />
      </svg>
    ),
    title: "Veteran-Led Team",
    description:
      "Our advisors include a retired Brigadier General with 36+ years of service and a retired CW3 with over a decade of Army experience. They've done PPMs themselves.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 18s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Nationwide Coverage",
    description:
      "Whether you're moving from Fort Bragg to Fort Lewis or anywhere in between, we coordinate U-Haul reservations across the entire country.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No Cost to You",
    description:
      "PPM Ready charges nothing to service members. The PPM program already pays you — our job is to make sure you get the most from it without the headache.",
  },
];

export default function WhyPPMReady() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Why PPM Ready
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Built for military families.{" "}
            <br className="hidden sm:block" />
            Not logistics companies.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            The PPM process was designed to save the government money and put
            cash in your pocket. We exist to make sure you actually get it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-slate-100 hover:border-orange-50 hover:shadow-lg hover:shadow-orange-50 transition-all duration-200 bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
