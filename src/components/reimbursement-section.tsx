export default function ReimbursementSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Reimbursement
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              You earned it.
              <br />
              <span className="text-orange-500">Let&apos;s make sure you collect it.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Military members conducting a Personally Procured Move are
              reimbursed by the government based on their household weight and
              the distance of the move. The average service member earns{" "}
              <strong className="text-slate-900">$1,000 to $5,000+</strong> per
              PPM — but only if they do the paperwork right.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Most of the money left on the table comes from wrong truck sizes,
              missed weight tickets, or incomplete documentation. PPM Ready
              exists to close that gap.
            </p>

            <div className="space-y-3">
              {[
                "Correct truck size matched to your household weight",
                "Weight ticket locations and procedures explained",
                "Reimbursement form guidance from our coordinators",
                "Document checklist before you turn in your claim",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-orange-500 rounded-2xl p-8 text-white">
              <p className="text-orange-100 text-sm font-medium mb-2">Average PPM earnings</p>
              <p className="text-5xl font-bold tracking-tight mb-2">$2,500+</p>
              <p className="text-orange-100 text-sm">
                Per move, based on a standard 3-bedroom household
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-medium mb-1">~1,000 lbs</p>
              <p className="text-slate-900 font-bold text-lg">Per room</p>
              <p className="text-slate-400 text-xs mt-1">weight estimate</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-medium mb-1">Reimbursement rate</p>
              <p className="text-slate-900 font-bold text-lg">95% of</p>
              <p className="text-slate-400 text-xs mt-1">government cost</p>
            </div>
            <div className="col-span-2 bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.5a5.5 5.5 0 100 11A5.5 5.5 0 007 1.5zM7 4v3.5l2 2" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Time to reimbursement</span>
              </div>
              <p className="text-white text-base">
                Typically <strong>2–4 weeks</strong> after submitting your completed claim to finance.
                We help you avoid the delays that come from incomplete documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
