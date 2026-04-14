const members = [
  {
    name: "Max Culbreth",
    title: "Founder",
    bio: "Entrepreneur and UNC Economics student. Built PPM Ready to give military families a better way to manage the logistical side of a PCS move.",
    initials: "MC",
    accent: "bg-orange-500",
  },
  {
    name: "Ferd Irizarry",
    title: "Senior Advisor",
    bio: "Brigadier General (Ret.) with 36+ years of military service. Brings deep institutional knowledge of the military move process and DoD logistics.",
    initials: "FI",
    accent: "bg-slate-700",
    badge: "BG (Ret.)",
  },
  {
    name: "Tanner Port",
    title: "Senior Coordinator",
    bio: "Retired CW3 with over a decade of Army experience. Has navigated the PPM process firsthand and brings that perspective to every customer interaction.",
    initials: "TP",
    accent: "bg-slate-700",
    badge: "CW3 (Ret.)",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            People who&apos;ve been there
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Our team includes veterans who have personally navigated the PPM
            process. We're not guessing — we've done this.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl ${m.accent} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                {m.initials}
              </div>

              {/* Badge */}
              {m.badge && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 mb-2">
                  {m.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-slate-900 mb-1">{m.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">{m.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
