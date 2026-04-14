"use client";

import { useEffect, useState } from "react";

type Step = "form" | "result";

export default function CalculatorPopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [rooms, setRooms] = useState("3");
  const [miles, setMiles] = useState("");
  const [estimate, setEstimate] = useState({ low: 0, high: 0 });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function calculate() {
    const r = parseInt(rooms);
    const m = parseInt(miles) || 500;
    const weight = r * 1000;
    const low = Math.round((weight * m * 0.00058) / 100) * 100;
    const high = Math.round((weight * m * 0.00088) / 100) * 100;
    setEstimate({ low, high });
    setStep("result");
  }

  function reset() {
    setStep("form");
    setMiles("");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#0F1F35] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-white text-sm font-semibold">PPM Reimbursement Calculator</span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {step === "form" ? (
          <div className="px-6 py-6">
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Estimate how much you could earn from your PPM move. Takes 10 seconds.
            </p>

            {/* Rooms */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                Bedrooms in your household
              </label>
              <div className="grid grid-cols-5 gap-2">
                {["1", "2", "3", "4", "5+"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setRooms(v === "5+" ? "5" : v)}
                    className={`py-2.5 rounded-lg text-sm font-semibold border transition-all duration-150 ${
                      rooms === (v === "5+" ? "5" : v)
                        ? "bg-orange-500 border-orange-500 text-white"
                        : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-orange-500/40 hover:text-white"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-1.5">~{parseInt(rooms) * 1000} lbs estimated weight</p>
            </div>

            {/* Distance */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                Approximate move distance (miles)
              </label>
              <input
                type="number"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                placeholder="e.g. 1200"
                className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors"
              />
              <p className="text-slate-500 text-xs mt-1.5">Not sure? Enter your best estimate</p>
            </div>

            <button
              onClick={calculate}
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
            >
              Calculate My Estimate
            </button>
          </div>
        ) : (
          <div className="px-6 py-6">
            <div className="text-center mb-6">
              <p className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2">Your estimated reimbursement</p>
              <div className="text-4xl font-bold text-white tracking-tight mb-1">
                ${estimate.low.toLocaleString()}
                <span className="text-slate-400 font-normal text-2xl mx-1">–</span>
                ${estimate.high.toLocaleString()}
              </div>
              <p className="text-slate-400 text-sm">
                Based on {parseInt(rooms) * 1000} lbs &middot; {parseInt(miles) || 500} miles
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-5 space-y-2.5">
              {[
                { label: "Estimated household weight", value: `${(parseInt(rooms) * 1000).toLocaleString()} lbs` },
                { label: "Move distance", value: `${(parseInt(miles) || 500).toLocaleString()} miles` },
                { label: "Reimbursement basis", value: "95% of gov't cost" },
                { label: "Truck rental (est.)", value: "$800–$1,500" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{row.label}</span>
                  <span className="text-white font-medium">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-3 mb-5">
              <p className="text-orange-200 text-xs leading-relaxed">
                <strong className="text-orange-300">This is an estimate.</strong> Your actual reimbursement depends on official weight tickets, current government rates, and your move distance. PPM Ready helps you maximize every dollar.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={reset}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors"
              >
                Recalculate
              </button>
              <a
                href="#contact"
                onClick={() => setVisible(false)}
                className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold text-center transition-colors shadow-md shadow-orange-500/20"
              >
                Start My Move
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
