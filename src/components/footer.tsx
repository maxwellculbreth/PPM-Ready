export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                PPM Ready
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Helping military service members and their families navigate
              Personally Procured Moves from reservation to reimbursement.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a href="tel:9194430697" className="hover:text-slate-300 transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12.5 10l-2-2-1.5 1.5S7.5 8.5 6 7 4.5 4.5 4.5 4.5L6 3 4 1 2.5 2.5C2.5 7 7 11.5 9.5 12L12.5 10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                (919) 443-0697
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Why PPM Ready", href: "#why" },
                { label: "PPM Portal", href: "#portal" },
                { label: "Meet the Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Resources</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "PPM Overview", href: "#" },
                { label: "Reimbursement Guide", href: "#" },
                { label: "Weight Ticket FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} PPM Ready. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            PPM Ready is not affiliated with the U.S. Department of Defense or
            any branch of the military.
          </p>
        </div>
      </div>
    </footer>
  );
}
