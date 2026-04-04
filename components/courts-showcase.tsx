'use client';

import { useLanguage } from '@/lib/language-context';

export function CourtsShowcase() {
  const { t } = useLanguage();

  return (
    <section id="courts" className="pt-12 pb-8 sm:pt-12 sm:pb-10 relative scroll-mt-16 md:scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {t.facility.header}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.facility.subheader}
          </p>
        </div>

        <div className="mx-auto max-w-[820px] px-6">
          <div className="facility-map-desktop">
          <svg viewBox="0 0 780 460" xmlns="http://www.w3.org/2000/svg" fontFamily="system-ui,sans-serif" className="w-full h-auto" role="img" aria-labelledby="facility-map-desktop-title facility-map-desktop-desc">
            <title id="facility-map-desktop-title">Courtyard facility floor plan</title>
            <desc id="facility-map-desktop-desc">Floor plan of Courtyard Pickle at 27 Th&#7883; Xu&#226;n Qu&#253;, Ng&#361; H&#224;nh S&#417;n, Da Nang.
  The facility features two covered pickleball courts, an indoor caf&#233; with front desk and reception, an outdoor caf&#233; with open seating, an outdoor area, and locker rooms with separate showers.
            </desc>

            <rect x="0" y="0" width="30" height="460" fill="rgba(204,255,0,0.03)"/>
            <line x1="30" y1="0" x2="30" y2="460" stroke="rgba(204,255,0,0.2)" strokeWidth="1.5"/>
            <text x="15" y="240" fontSize="9" fill="rgba(204,255,0,0.4)" textAnchor="middle" fontWeight="500" letterSpacing="1" transform="rotate(-90,15,240)">STREET</text>

            <rect x="38" y="12" width="732" height="438" rx="9" fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

            <rect x="46" y="20" width="158" height="100" rx="6" fill="rgba(255,160,50,0.06)" stroke="rgba(255,160,50,0.32)" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="125" y="52" fontSize="10" fill="rgba(255,160,50,0.85)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">{t.facility.outdoorCafe}</text>
            <circle cx="98" cy="76" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="122" cy="72" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="146" cy="76" r="8" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <text x="125" y="108" fontSize="8" fill="rgba(255,255,255,0.2)" textAnchor="middle">{t.facility.openSeating}</text>

            <rect x="210" y="20" width="158" height="100" rx="6" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.5)" strokeWidth="1.4"/>
            <text x="289" y="48" fontSize="10" fill="rgba(255,160,50,0.92)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">{t.facility.indoorCafe}</text>
            <text x="289" y="62" fontSize="8" fill="rgba(255,255,255,0.38)" textAnchor="middle">+ Front Desk</text>
            <rect x="226" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="260" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="294" y="72" width="28" height="18" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <text x="289" y="108" fontSize="8" fill="rgba(255,255,255,0.2)" textAnchor="middle">{t.facility.counterTablesReception}</text>

            <rect x="374" y="20" width="148" height="100" rx="6" fill="rgba(255,160,50,0.04)" stroke="rgba(255,160,50,0.2)" strokeWidth="1.2" strokeDasharray="5,3"/>
            <text x="448" y="52" fontSize="10" fill="rgba(255,160,50,0.6)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">{t.facility.outdoorArea}</text>
            <circle cx="420" cy="76" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <circle cx="445" cy="72" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <circle cx="470" cy="76" r="8" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.18)" strokeWidth="1"/>
            <text x="448" y="108" fontSize="8" fill="rgba(255,255,255,0.16)" textAnchor="middle">{t.facility.openSeating}</text>

            <rect x="534" y="20" width="228" height="100" rx="6" fill="rgba(120,160,255,0.06)" stroke="rgba(120,160,255,0.35)" strokeWidth="1.3"/>
            <text x="648" y="42" fontSize="10" fill="rgba(120,160,255,0.82)" textAnchor="middle" fontWeight="500" letterSpacing="0.3">{t.facility.lockerRooms}</text>
            <line x1="648" y1="48" x2="648" y2="112" stroke="rgba(120,160,255,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="591" y="76" fontSize="10" fill="rgba(120,160,255,0.65)" textAnchor="middle">{t.facility.mens}</text>
            <text x="591" y="90" fontSize="8" fill="rgba(255,255,255,0.22)" textAnchor="middle">{t.facility.showers}</text>
            <text x="705" y="76" fontSize="10" fill="rgba(120,160,255,0.65)" textAnchor="middle">{t.facility.womens}</text>
            <text x="705" y="90" fontSize="8" fill="rgba(255,255,255,0.22)" textAnchor="middle">{t.facility.showers}</text>

            <rect x="38" y="128" width="732" height="32" fill="rgba(255,255,255,0.015)"/>
            <line x1="38" y1="128" x2="770" y2="128" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <line x1="38" y1="160" x2="770" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <line x1="80" y1="144" x2="520" y2="144" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6,4"/>
            <text x="400" y="149" fontSize="8" fill="rgba(255,255,255,0.18)" textAnchor="middle" letterSpacing="2">{t.facility.walkway}</text>

            <rect x="30" y="132" width="10" height="24" rx="2" fill="rgba(204,255,0,0.3)"/>
            <polygon points="40,138 54,144 40,150" fill="#ccff00" opacity="0.75"/>
            <text x="58" y="148" fontSize="8" fill="#ccff00" fontWeight="500" letterSpacing="0.5">{t.facility.entrance}</text>

            <rect x="46" y="168" width="158" height="272" rx="7" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="125" y="188" fontSize="9" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500" letterSpacing="0.5">{t.facility.court2}</text>
            <rect x="62" y="198" width="126" height="222" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="62" y1="308" x2="188" y2="308" stroke="rgba(204,255,0,0.14)" strokeWidth="1" strokeDasharray="6,4"/>
            <line x1="125" y1="198" x2="125" y2="420" stroke="rgba(204,255,0,0.06)" strokeWidth="1"/>
            <line x1="62" y1="284" x2="188" y2="284" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <line x1="62" y1="332" x2="188" y2="332" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <rect x="62" y="284" width="126" height="48" fill="rgba(204,255,0,0.03)"/>
            <text x="125" y="430" fontSize="22" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">2</text>

            <rect x="210" y="168" width="158" height="272" rx="7" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="289" y="188" fontSize="9" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500" letterSpacing="0.5">{t.facility.court1}</text>
            <rect x="226" y="198" width="126" height="222" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="226" y1="308" x2="352" y2="308" stroke="rgba(204,255,0,0.14)" strokeWidth="1" strokeDasharray="6,4"/>
            <line x1="289" y1="198" x2="289" y2="420" stroke="rgba(204,255,0,0.06)" strokeWidth="1"/>
            <line x1="226" y1="284" x2="352" y2="284" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <line x1="226" y1="332" x2="352" y2="332" stroke="rgba(204,255,0,0.28)" strokeWidth="1.2"/>
            <rect x="226" y="284" width="126" height="48" fill="rgba(204,255,0,0.03)"/>
            <text x="289" y="430" fontSize="22" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">1</text>

            <line x1="374" y1="160" x2="374" y2="448" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="6,4"/>

            <rect x="382" y="168" width="140" height="272" rx="7" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="452" y="298" fontSize="11" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontWeight="500">N.A.</text>

            <rect x="534" y="168" width="228" height="272" rx="7" fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="648" y="298" fontSize="11" fill="rgba(255,255,255,0.18)" textAnchor="middle" fontWeight="500">N.A.</text>

            <text x="762" y="452" fontSize="8" fill="rgba(255,255,255,0.14)" textAnchor="end">Not to scale</text>

          </svg>
          </div>

          <div className="facility-map-mobile">
          <svg viewBox="0 0 260 520" xmlns="http://www.w3.org/2000/svg" fontFamily="system-ui,sans-serif" className="w-full h-auto" role="img" aria-labelledby="facility-map-mobile-title facility-map-mobile-desc">
            <title id="facility-map-mobile-title">Courtyard facility floor plan</title>
            <desc id="facility-map-mobile-desc">Floor plan of Courtyard Pickle at 27 Th&#7883; Xu&#226;n Qu&#253;, Ng&#361; H&#224;nh S&#417;n, Da Nang.
  The facility features two covered pickleball courts, an indoor caf&#233; with front desk and reception, an outdoor caf&#233; with open seating, an outdoor area, and locker rooms with separate showers.</desc>

            <rect width="260" height="520" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

            <rect x="0" y="500" width="260" height="20" fill="rgba(204,255,0,0.03)"/>
            <line x1="0" y1="500" x2="260" y2="500" stroke="rgba(204,255,0,0.2)" strokeWidth="1.2"/>
            <text x="130" y="513" fontSize="7" fill="rgba(204,255,0,0.4)" textAnchor="middle" fontWeight="500" letterSpacing="2">STREET</text>

            <polygon points="98,492 102,480 106,492" fill="#ccff00" opacity="0.75"/>
            <text x="102" y="477" fontSize="7" fill="#ccff00" fontWeight="500" textAnchor="middle" letterSpacing="0.3">{t.facility.entrance}</text>

            <rect x="2" y="8" width="86" height="100" rx="5" fill="rgba(120,160,255,0.06)" stroke="rgba(120,160,255,0.35)" strokeWidth="1.2"/>
            <text x="45" y="22" fontSize="7.5" fill="rgba(120,160,255,0.82)" textAnchor="middle" fontWeight="500">{t.facility.lockerRooms}</text>
            <line x1="2" y1="58" x2="88" y2="58" stroke="rgba(120,160,255,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="45" y="44" fontSize="8" fill="rgba(120,160,255,0.65)" textAnchor="middle">{t.facility.womens}</text>
            <text x="45" y="55" fontSize="7" fill="rgba(255,255,255,0.22)" textAnchor="middle">{t.facility.showers}</text>
            <text x="45" y="72" fontSize="8" fill="rgba(120,160,255,0.65)" textAnchor="middle">{t.facility.mens}</text>
            <text x="45" y="83" fontSize="7" fill="rgba(255,255,255,0.22)" textAnchor="middle">{t.facility.showers}</text>

            <rect x="2" y="116" width="86" height="100" rx="5" fill="rgba(255,160,50,0.04)" stroke="rgba(255,160,50,0.18)" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="45" y="145" fontSize="7" fill="rgba(255,160,50,0.6)" textAnchor="middle" fontWeight="500">{t.facility.outdoorArea}</text>
            <circle cx="30" cy="168" r="7" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.16)" strokeWidth="1"/>
            <circle cx="45" cy="164" r="7" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.16)" strokeWidth="1"/>
            <circle cx="60" cy="168" r="7" fill="rgba(255,160,50,0.05)" stroke="rgba(255,160,50,0.16)" strokeWidth="1"/>
            <text x="45" y="204" fontSize="7" fill="rgba(255,255,255,0.14)" textAnchor="middle">{t.facility.openSeating}</text>

            <rect x="2" y="224" width="86" height="140" rx="5" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.5)" strokeWidth="1.2"/>
            <text x="45" y="246" fontSize="7" fill="rgba(255,160,50,0.92)" textAnchor="middle" fontWeight="500">{t.facility.indoorCafe}</text>
            <text x="45" y="257" fontSize="7" fill="rgba(255,255,255,0.35)" textAnchor="middle">+ Front Desk</text>
            <rect x="16" y="268" width="18" height="12" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="38" y="268" width="18" height="12" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <rect x="60" y="268" width="18" height="12" rx="2" fill="rgba(255,160,50,0.1)" stroke="rgba(255,160,50,0.22)" strokeWidth="1"/>
            <text x="45" y="302" fontSize="7" fill="rgba(255,255,255,0.2)" textAnchor="middle">{t.facility.counterTablesReception}</text>

            <rect x="2" y="372" width="86" height="124" rx="5" fill="rgba(255,160,50,0.06)" stroke="rgba(255,160,50,0.3)" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="45" y="400" fontSize="7" fill="rgba(255,160,50,0.85)" textAnchor="middle" fontWeight="500">{t.facility.outdoorCafe}</text>
            <circle cx="30" cy="424" r="7" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="45" cy="420" r="7" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <circle cx="60" cy="424" r="7" fill="rgba(255,160,50,0.08)" stroke="rgba(255,160,50,0.25)" strokeWidth="1"/>
            <text x="45" y="448" fontSize="7" fill="rgba(255,255,255,0.18)" textAnchor="middle">{t.facility.openSeating}</text>

            <rect x="92" y="8" width="20" height="488" fill="rgba(255,255,255,0.012)"/>
            <line x1="92" y1="8" x2="92" y2="496" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <line x1="112" y1="8" x2="112" y2="496" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <text x="102" y="270" fontSize="7" fill="rgba(255,255,255,0.16)" textAnchor="middle" transform="rotate(-90,102,270)" letterSpacing="2">{t.facility.walkway}</text>

            <rect x="116" y="8" width="140" height="108" rx="5" fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="186" y="60" fontSize="10" fill="rgba(255,255,255,0.18)" textAnchor="middle" fontWeight="500">N.A.</text>

            <line x1="116" y1="124" x2="256" y2="124" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4,3"/>

            <rect x="116" y="130" width="140" height="108" rx="5" fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="186" y="182" fontSize="10" fill="rgba(255,255,255,0.18)" textAnchor="middle" fontWeight="500">N.A.</text>

            <line x1="116" y1="246" x2="256" y2="246" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4,3"/>

            <rect x="116" y="252" width="140" height="114" rx="6" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="186" y="270" fontSize="7" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500">{t.facility.court1}</text>
            <rect x="126" y="277" width="120" height="80" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="126" y1="317" x2="246" y2="317" stroke="rgba(204,255,0,0.13)" strokeWidth="1" strokeDasharray="5,4"/>
            <line x1="186" y1="277" x2="186" y2="357" stroke="rgba(204,255,0,0.07)" strokeWidth="1"/>
            <line x1="172" y1="277" x2="172" y2="357" stroke="rgba(204,255,0,0.27)" strokeWidth="1.2"/>
            <line x1="200" y1="277" x2="200" y2="357" stroke="rgba(204,255,0,0.27)" strokeWidth="1.2"/>
            <rect x="172" y="277" width="28" height="80" fill="rgba(204,255,0,0.03)"/>
            <text x="186" y="353" fontSize="16" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">1</text>

            <rect x="116" y="374" width="140" height="120" rx="6" fill="rgba(204,255,0,0.04)" stroke="rgba(204,255,0,0.6)" strokeWidth="1.4"/>
            <text x="186" y="392" fontSize="7" fill="rgba(204,255,0,0.45)" textAnchor="middle" fontWeight="500">{t.facility.court2}</text>
            <rect x="126" y="399" width="120" height="86" rx="3" fill="none" stroke="rgba(204,255,0,0.18)" strokeWidth="1"/>
            <line x1="126" y1="442" x2="246" y2="442" stroke="rgba(204,255,0,0.13)" strokeWidth="1" strokeDasharray="5,4"/>
            <line x1="186" y1="399" x2="186" y2="485" stroke="rgba(204,255,0,0.07)" strokeWidth="1"/>
            <line x1="172" y1="399" x2="172" y2="485" stroke="rgba(204,255,0,0.27)" strokeWidth="1.2"/>
            <line x1="200" y1="399" x2="200" y2="485" stroke="rgba(204,255,0,0.27)" strokeWidth="1.2"/>
            <rect x="172" y="399" width="28" height="86" fill="rgba(204,255,0,0.03)"/>
            <text x="186" y="481" fontSize="16" fill="rgba(204,255,0,0.06)" textAnchor="middle" fontWeight="700">2</text>

            <text x="256" y="516" fontSize="6" fill="rgba(255,255,255,0.12)" textAnchor="end">Not to scale</text>

          </svg>
          </div>
          <p className="sr-only">
            The Courtyard facility includes two sheltered and covered pickleball courts (Court 1 Interior and Court 2 Streetside), an indoor caf&#233; with front desk and reception, an outdoor caf&#233; with open seating, a separate outdoor seating area, and men&apos;s and women&apos;s locker rooms with showers. The entrance opens from the street into a central walkway connecting all areas. Additional spaces are coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
