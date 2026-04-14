"use client";

import { useState } from "react";

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOVE = {
  name: "SGT Marcus Webb",
  branch: "U.S. Army",
  origin: "Fort Bragg, NC",
  destination: "Fort Lewis, WA",
  distance: 2847,
  pickupDate: "May 15, 2026",
  returnDate: "May 22, 2026",
  coordinatorName: "Tanner Port",
  coordinatorTitle: "CW3 (Ret.) · Senior Coordinator",
  coordinatorPhone: "(919) 443-0697",
  truck: '20-ft U-Haul Truck',
  trailer: "Auto Transport Trailer",
  pickupLocation: "U-Haul of Fayetteville — 1842 Owen Dr, Fayetteville, NC",
  reservationId: "PPM-2026-0412",
  estLow: 4200,
  estHigh: 5800,
  weight: 7000,
};

const STEPS = [
  { id: 1, label: "Move Details Submitted", date: "Apr 10, 2026", done: true },
  { id: 2, label: "Equipment Reserved", date: "Apr 11, 2026", done: true },
  { id: 3, label: "Pre-Move Weight Ticket", date: "May 15, 2026", done: false, active: true },
  { id: 4, label: "Move Completed", date: "May 22, 2026", done: false },
  { id: 5, label: "Reimbursement Filed", date: "Est. Jun 1, 2026", done: false },
];

const DOCS: { id: number; label: string; status: "complete" | "pending" | "upcoming"; note: string }[] = [
  { id: 1, label: "PCS Orders", status: "complete", note: "Received Apr 10" },
  { id: 2, label: "DD Form 2278 (PPM Authorization)", status: "complete", note: "Verified Apr 11" },
  { id: 3, label: "Empty Weight Ticket", status: "pending", note: "Required before loading — May 15" },
  { id: 4, label: "Loaded Weight Ticket", status: "upcoming", note: "Required after loading" },
  { id: 5, label: "Fuel & Toll Receipts", status: "upcoming", note: "Collect during move" },
  { id: 6, label: "Move Completion Statement", status: "upcoming", note: "Sign at destination" },
  { id: 7, label: "Reimbursement Claim (DD 2278 Final)", status: "upcoming", note: "Submit to finance office" },
];

const UPDATES = [
  { time: "Apr 11 · 2:14 PM", text: "Reservation confirmed at U-Haul of Fayetteville. 20-ft truck + auto transport secured.", type: "success" },
  { time: "Apr 11 · 9:30 AM", text: "Coordinator Tanner Port assigned to your move. You can reach him directly at (919) 443-0697.", type: "info" },
  { time: "Apr 10 · 4:52 PM", text: "Move details received. Household estimated at 7,000 lbs (7 rooms). Coordinator review in progress.", type: "info" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: "complete" | "pending" | "upcoming" }) {
  if (status === "complete")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-0.5">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Complete
      </span>
    );
  if (status === "pending")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-300 bg-orange-400/10 rounded-full px-2 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Action Required
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white/5 rounded-full px-2 py-0.5">
      Upcoming
    </span>
  );
}

function Sidebar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const nav = [
    { id: "overview", label: "Overview", icon: <path d="M3 3h5v5H3zM9 3h5v5H9zM3 9h5v5H3zM9 9h5v5H9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /> },
    { id: "documents", label: "Documents", icon: <><path d="M9 2H5a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V7L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M9 2v5h5M6 10h5M6 13h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></> },
    { id: "equipment", label: "Equipment", icon: <><path d="M1 10V13a1 1 0 001 1h1M1 10l2.5-4H13l2 4M1 10h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="12" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M15 13h1a1 1 0 001-1v-2l-1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></>},
    { id: "reimbursement", label: "Reimbursement", icon: <><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M8 5v6M6 6.5h3a1 1 0 010 2H6m0 0h3.5a1 1 0 010 2H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></> },
    { id: "updates", label: "Updates", icon: <><path d="M12 8a4 4 0 10-8 0c0 3-1 4-1 4h10s-1-1-1-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 15a1 1 0 01-2 0" stroke="currentColor" strokeWidth="1.3" /></> },
  ];

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col bg-[#0B1829] border-r border-white/5 min-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/5">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="8" cy="8" r="2" fill="white" />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">PPM Ready</span>
        </a>
      </div>

      {/* User */}
      <div className="px-4 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center justify-center">
            MW
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none mb-0.5">{MOVE.name}</p>
            <p className="text-slate-500 text-[11px]">{MOVE.branch}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
              active === item.id
                ? "bg-orange-500/10 text-orange-300 border border-orange-500/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              {item.icon}
            </svg>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Coordinator card */}
      <div className="px-3 pb-4">
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3">
          <p className="text-slate-500 text-[10px] uppercase tracking-wide font-medium mb-2">Your Coordinator</p>
          <p className="text-white text-xs font-semibold">{MOVE.coordinatorName}</p>
          <p className="text-slate-500 text-[10px] mb-2">{MOVE.coordinatorTitle}</p>
          <a
            href={`tel:${MOVE.coordinatorPhone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 text-orange-400 text-xs font-medium hover:text-orange-300 transition-colors"
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M12.5 10l-2-2-1.5 1.5S7.5 8.5 6 7 4.5 4.5 4.5 4.5L6 3 4 1 2.5 2.5C2.5 7 7 11.5 9.5 12L12.5 10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {MOVE.coordinatorPhone}
          </a>
        </div>
      </div>
    </aside>
  );
}

function OverviewTab() {
  const currentStep = STEPS.findIndex((s) => s.active) + 1 || STEPS.filter((s) => s.done).length;

  return (
    <div className="space-y-6">
      {/* Move header */}
      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-slate-500 font-mono">{MOVE.reservationId}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
            <h2 className="text-white font-bold text-xl tracking-tight">
              {MOVE.origin} → {MOVE.destination}
            </h2>
            <p className="text-slate-400 text-sm mt-0.5">{MOVE.distance.toLocaleString()} miles · Pickup {MOVE.pickupDate}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-slate-400 text-xs mb-0.5">Estimated reimbursement</p>
            <p className="text-orange-300 font-bold text-2xl tracking-tight">
              ${MOVE.estLow.toLocaleString()}–${MOVE.estHigh.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-1">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex-1 flex flex-col items-center gap-1.5">
              <div className={`h-1 w-full rounded-full transition-colors ${
                step.done ? "bg-orange-500" : step.active ? "bg-orange-500/40" : "bg-white/5"
              }`} />
              <span className={`text-[10px] font-medium hidden sm:block text-center leading-tight ${
                step.done ? "text-orange-300" : step.active ? "text-orange-200" : "text-slate-600"
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Reservation", value: "Confirmed", sub: MOVE.truck, color: "text-emerald-400", dot: "bg-emerald-400" },
          { label: "Pickup Date", value: MOVE.pickupDate, sub: "Fort Bragg U-Haul", color: "text-orange-300", dot: "bg-orange-400" },
          { label: "Est. Weight", value: `${MOVE.weight.toLocaleString()} lbs`, sub: "7 rooms · verified", color: "text-white", dot: null },
          { label: "Docs Complete", value: "2 / 7", sub: "5 remaining", color: "text-white", dot: null },
        ].map((card, i) => (
          <div key={i} className="bg-[#0F1F35] border border-white/5 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">{card.label}</p>
            <div className="flex items-center gap-2 mb-0.5">
              {card.dot && <span className={`w-2 h-2 rounded-full ${card.dot} animate-pulse`} />}
              <p className={`font-bold text-sm ${card.color}`}>{card.value}</p>
            </div>
            <p className="text-slate-500 text-xs">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-sm mb-5">Move Timeline</h3>
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  step.done
                    ? "bg-orange-500 border-orange-500"
                    : step.active
                    ? "bg-[#0F1F35] border-orange-500"
                    : "bg-[#0F1F35] border-white/10"
                }`}>
                  {step.done ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : step.active ? (
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-px flex-1 my-1 ${step.done ? "bg-orange-500/30" : "bg-white/5"}`} style={{ minHeight: "24px" }} />
                )}
              </div>
              <div className="pb-5">
                <p className={`text-sm font-medium leading-none mb-1 ${
                  step.done ? "text-white" : step.active ? "text-orange-300" : "text-slate-500"
                }`}>
                  {step.label}
                  {step.active && (
                    <span className="ml-2 text-[10px] font-bold text-orange-400 bg-orange-400/10 rounded-full px-2 py-0.5">
                      Next Step
                    </span>
                  )}
                </p>
                <p className="text-xs text-slate-500">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentsTab() {
  return (
    <div className="space-y-4">
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl px-5 py-4">
        <div className="flex items-start gap-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-orange-300">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <p className="text-orange-200 text-sm leading-relaxed">
            <strong className="text-orange-300">Action required:</strong> Your empty weight ticket must be obtained before loading your truck on May 15. Find a certified scale near your pickup location.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Document Checklist</h3>
          <span className="text-xs text-slate-400">2 of 7 complete</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {DOCS.map((doc) => (
            <div key={doc.id} className="flex items-center gap-4 px-6 py-4">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                doc.status === "complete"
                  ? "bg-emerald-500 border-emerald-500"
                  : doc.status === "pending"
                  ? "border-orange-400 bg-orange-400/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}>
                {doc.status === "complete" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {doc.status === "pending" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${
                  doc.status === "complete" ? "text-slate-300" : doc.status === "pending" ? "text-white" : "text-slate-500"
                }`}>
                  {doc.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{doc.note}</p>
              </div>
              <StatusBadge status={doc.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EquipmentTab() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-300 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 11V14a1 1 0 001 1h1.5M1 11L4 6h11l3 5M1 11h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="6" cy="15" r="2" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold">{MOVE.truck}</h3>
            <p className="text-slate-400 text-sm">+ {MOVE.trailer}</p>
          </div>
          <div className="ml-auto">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Reserved
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Pickup Location", value: MOVE.pickupLocation },
            { label: "Pickup Date", value: MOVE.pickupDate },
            { label: "Return By", value: MOVE.returnDate },
            { label: "Reservation ID", value: MOVE.reservationId },
            { label: "Estimated Weight Capacity", value: "10,000 lbs (20-ft truck)" },
            { label: "Your Estimated Load", value: `${MOVE.weight.toLocaleString()} lbs — within capacity` },
          ].map((row, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">{row.label}</p>
              <p className="text-white text-sm font-medium">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-sm mb-4">Weight Scale Locations Near Pickup</h3>
        <div className="space-y-3">
          {[
            { name: "CAT Scales — Flying J Travel Center", address: "2501 Gillespie St, Fayetteville, NC 28306", distance: "2.1 mi from pickup", hours: "Open 24 hours" },
            { name: "North Carolina DOT Weigh Station", address: "I-95 S, near Fayetteville", distance: "4.8 mi from pickup", hours: "Mon–Fri 6am–6pm" },
          ].map((loc, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1a4 4 0 00-4 4c0 3.5 4 8 4 8s4-4.5 4-8a4 4 0 00-4-4z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{loc.name}</p>
                <p className="text-slate-400 text-xs">{loc.address}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-orange-300 text-xs font-medium">{loc.distance}</span>
                  <span className="text-slate-500 text-xs">{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReimbursementTab() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-slate-400 text-sm mb-1">Estimated reimbursement range</p>
            <p className="text-4xl font-bold text-white tracking-tight">
              ${MOVE.estLow.toLocaleString()}
              <span className="text-slate-500 font-normal text-2xl mx-2">–</span>
              ${MOVE.estHigh.toLocaleString()}
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-white/5 rounded-lg px-3 py-1.5">Estimate · Not finalized</span>
        </div>

        <div className="space-y-3">
          {[
            { label: "Household weight estimate", value: `${MOVE.weight.toLocaleString()} lbs`, note: "Based on 7 rooms × 1,000 lbs" },
            { label: "Move distance", value: `${MOVE.distance.toLocaleString()} miles`, note: "Fort Bragg → Fort Lewis" },
            { label: "Reimbursement basis", value: "95% of gov't cost", note: "Standard PPM incentive rate" },
            { label: "Estimated truck cost", value: "$900–$1,400", note: "Deducted from gross reimbursement" },
            { label: "Net estimated profit", value: `$${(MOVE.estLow - 900).toLocaleString()}–$${(MOVE.estHigh - 900).toLocaleString()}`, note: "After rental cost" },
          ].map((row, i) => (
            <div key={i} className="flex items-start justify-between py-3 border-b border-white/[0.04] last:border-0">
              <div>
                <p className="text-slate-300 text-sm">{row.label}</p>
                <p className="text-slate-500 text-xs">{row.note}</p>
              </div>
              <p className="text-white font-semibold text-sm ml-4">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0F1F35] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-sm mb-4">Reimbursement Steps</h3>
        <ol className="space-y-3">
          {[
            "Obtain empty weight ticket before loading (certified scale)",
            "Load household goods and secure truck",
            "Obtain loaded weight ticket after loading (same or different scale)",
            "Complete move to destination",
            "Collect all receipts (fuel, tolls, lodging if applicable)",
            "Submit DD Form 2278 + weight tickets + receipts to your finance office",
            "Receive reimbursement — typically within 2–4 weeks",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-slate-400">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function UpdatesTab() {
  return (
    <div className="bg-[#0F1F35] border border-white/5 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/5">
        <h3 className="text-white font-semibold text-sm">Activity &amp; Updates</h3>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {UPDATES.map((u, i) => (
          <div key={i} className="px-6 py-4 flex items-start gap-4">
            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${u.type === "success" ? "bg-emerald-400" : "bg-orange-400"}`} />
            <div>
              <p className="text-slate-500 text-xs mb-1">{u.time}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{u.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortalPage() {
  const [active, setActive] = useState("overview");

  const tabs: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    documents: <DocumentsTab />,
    equipment: <EquipmentTab />,
    reimbursement: <ReimbursementTab />,
    updates: <UpdatesTab />,
  };

  return (
    <div className="flex min-h-screen bg-[#070F1A] font-sans">
      <Sidebar active={active} setActive={setActive} />

      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-[#070F1A]/90 backdrop-blur border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-semibold text-base capitalize">{active}</h1>
            <p className="text-slate-500 text-xs">Move Portal · {MOVE.reservationId}</p>
          </div>
          <a
            href="tel:9194430697"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M12.5 10l-2-2-1.5 1.5S7.5 8.5 6 7 4.5 4.5 4.5 4.5L6 3 4 1 2.5 2.5C2.5 7 7 11.5 9.5 12L12.5 10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Call Coordinator
          </a>
        </div>

        {/* Content */}
        <div className="px-8 py-8 max-w-4xl">
          {tabs[active]}
        </div>
      </main>
    </div>
  );
}
