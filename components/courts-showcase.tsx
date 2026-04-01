export function CourtsShowcase() {
  return (
    <section id="courts" className="pt-12 pb-24 sm:pt-12 sm:pb-32 relative scroll-mt-16 md:scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Facility
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need all under one roof.
          </p>
        </div>

        <div className="mx-auto max-w-[820px] px-6">
          <svg viewBox="0 0 780 460" xmlns="http://www.w3.org/2000/svg" fontFamily="system-ui,sans-serif" className="w-full h-auto">

            {/* STREET */}
            <rect x="0" y="0" width="30" height="460" fill="rgba(204,255,0,0.03)"/>
            <line x1="30" y1="0" x2="30" y2="460" stroke="rgba(204,255,0,0.2)" strokeWidth="1.5"/>
            <text x="15" y="240" fontSize="9" fill="rgba(204,255,0,0.4)" textAnchor="middle" fontWeight="500" letterSpacing="1" transform="rotate(-90,15,240)">STREET</text>

            {/* FACILITY OUTER BOUNDARY */}
            <rect x="38" y="12" width="732" height="438" rx="9" fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

            {/* OUTDOOR CAFÉ (left) */}
            <rect x="46" y="20" width="158" height="100" rx="6" fill="rgba(255,160,50,0.06)" stroke="rgba(255,160,50,0.32)" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="125" y="52" fontSize="10" fill="rgba(255,160,50,0.85)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">OUTDOOR CAFÉ</text>
            <circle cx="98" cy="76" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="122" cy="72" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="146" cy="76" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <text x="125" y="108" fontSize="8" fill="rgba(255,255,255,0.2)" textAnchor="middle">Open seating</text>

            {/* INDOOR CAFÉ + FRONT DESK */}
            <rect x="210" y="20" width="158" height="100" rx="6" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.5)" strokeWidth="1.4"/>
            <text x="289" y="48" fontSize="10" fill="rgba(255,160,50,0.92)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">INDOOR CAFÉ</text>
            <text x="289" y="62" fontSize="8" fill="rgba(255,255,255,0.38)" textAnchor="middle">+ Front Desk</text>
            <rect x="226" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="260" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="294" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <text x="289" y="108" fontSize="8" fill="rgba(255,255,255,0.2)" textAnchor="middle">{"Counter · Tables · Reception"}</text>

            {/* OUTDOOR AREA (right) */}
            <rect x="374" y="20" width="148" height="100" rx="6" fill="rgba(255,160,50,0.04)" stroke="rgba(255,160,50,0.2)" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="448" y="52" fontSize="10" fill="rgba(255,160,50,0.6)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">OUTDOOR AREA</text>
            <circle cx="420" cy="76" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <circle cx="445" cy="72" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <circle cx="470" cy="76" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <text x="448" y="108" fontSize="8" fill="rgba(255,255,255,0.16)" textAnchor="middle">Open seating</text>

            {/* LOCKER ROOMS */}
            <rect x="534" y="20" width="228" height="100" rx="6" fill="rgba(120,160,255,0.06)" stroke="rgba(120,160,255,0.35)" strokeWidth="1.3"/>
            <text x="648" y="42" fontSize="10" fill="rgba(120,160,255,0.82)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">LOCKER ROOMS</text>
            <line x1="648" y1="48" x2="648" y2="112" stroke="rgba(120,160,255,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="591" y="76" fontSize="10" fill="rgba(120,160,255,0.65)" textAnchor="middle">{"Men's"}</text>
            <text x="591" y="90" fontSize="8" fill="rgba(255,255,255,0.22)" textAnchor="middle">Showers</text>
            <text x="705" y="76" fontSize="10" fill="rgba(120,160,255,0.65)" textAnchor="middle">{"Women's"}</text>
            <text x="705" y="90" fontSize="8" fill="rgba(255,255,255,0.22)" textAnchor="middle">Showers</text>

            {/* WALKWAY */}
            <rect x="38" y="128" width="732" height="32" fill="rgba(255,255,255,0.015)"/>
            <line x1="38" y1="128" x2="770" y2="128" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <line x1="38" y1="160" x2="770" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <line x1="80" y1="144" x2="520" y2="144" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6,4"/>
            <text x="400" y="149" fontSize="8" fill="rgba(255,255,255,0.18)" textAnchor="middle" letterSpacing="2">WALKWAY</text>

            {/* ENTRANCE */}
            <rect x="30" y="132" width="10" height="24" rx="2" fill="rgba(204,255,0,0.3)"/>
            <polygon points="40,138 54,144 40,150" fill="#ccff00" opacity="0.75"/>
            <text x="58" y="148" fontSize="8" fill="#ccff00" fontWeight="500" letterSpacing="0.5">ENTRANCE</text>

            {/* COURT 2 — STREETSIDE */}
            <rect x="46" y="168" width="158" height="272" rx="7" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="125" y="188" fontSize="9" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500" letterSpacing="0.5">{"COURT 2 · STREETSIDE"}</text>
            <rect x="62" y="198" width="126" height="222" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="62" y1="308" x2="188" y2="308" stroke="rgba(204,255,0,0.14)" strokeWidth="1" strokeDasharray="6,4"/>
            <line x1="125" y1="198" x2="125" y2="420" stroke="rgba(204,255,0,0.06)" strokeWidth="1"/>
            <line x1="62" y1="284" x2="188" y2="284" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <line x1="62" y1="332" x2="188" y2="332" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <rect x="62" y="284" width="126" height="48" fill="rgba(204,255,0,0.03)"/>
            <text x="125" y="430" fontSize="22" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">2</text>

            {/* COURT 1 — INTERIOR */}
            <rect x="210" y="168" width="158" height="272" rx="7" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="289" y="188" fontSize="9" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500" letterSpacing="0.5">{"COURT 1 · INTERIOR"}</text>
            <rect x="226" y="198" width="126" height="222" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="226" y1="308" x2="352" y2="308" stroke="rgba(204,255,0,0.14)" strokeWidth="1" strokeDasharray="6,4"/>
            <line x1="289" y1="198" x2="289" y2="420" stroke="rgba(204,255,0,0.06)" strokeWidth="1"/>
            <line x1="226" y1="284" x2="352" y2="284" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <line x1="226" y1="332" x2="352" y2="332" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <rect x="226" y="284" width="126" height="48" fill="rgba(204,255,0,0.03)"/>
            <text x="289" y="430" fontSize="22" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">1</text>

            {/* VERTICAL DASHED DIVIDER */}
            <line x1="374" y1="160" x2="374" y2="448" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="6,4"/>

            {/* N.A. SMALL BLOCK */}
            <rect x="382" y="168" width="140" height="272" rx="7" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="452" y="298" fontSize="11" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontWeight="500">N.A.</text>
            <rect x="406" y="316" width="92" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <text x="452" y="331" fontSize="8" fill="rgba(255,255,255,0.18)" textAnchor="middle">Coming soon</text>

            {/* N.A. LARGE BLOCK */}
            <rect x="534" y="168" width="228" height="272" rx="7" fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="648" y="298" fontSize="11" fill="rgba(255,255,255,0.18)" textAnchor="middle" fontWeight="500">N.A.</text>
            <rect x="580" y="316" width="136" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <text x="648" y="331" fontSize="8" fill="rgba(255,255,255,0.16)" textAnchor="middle">Coming soon</text>

            {/* NOT TO SCALE */}
            <text x="762" y="452" fontSize="8" fill="rgba(255,255,255,0.14)" textAnchor="end">Not to scale</text>

          </svg>
        </div>
      </div>
    </section>
  );
}
