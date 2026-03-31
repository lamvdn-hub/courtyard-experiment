import { Thermometer, Footprints, MapPin, Star, Users, Crown } from 'lucide-react';

const courts = [
  {
    name: 'Court #01 - #03',
    surface: 'ProCushion Elite',
    feature: 'Climate Controlled',
    featureIcon: Thermometer,
    location: 'Near Main Entrance',
  },
  {
    name: 'Court #04 - #06',
    surface: 'ProCushion Elite',
    feature: 'Pro Cushioning',
    featureIcon: Footprints,
    location: 'Near Social Lounge',
  },
  {
    name: 'Court #07 - #09',
    surface: 'ProCushion Pro',
    feature: 'Spectator Gallery',
    featureIcon: Users,
    location: 'Near Coaching Center',
  },
  {
    name: 'Court #10 - #12',
    surface: 'ProCushion Pro',
    feature: 'VIP Access',
    featureIcon: Crown,
    location: 'Near VIP Lounge',
  },
];

export function CourtsShowcase() {
  return (
    <section id="courts" className="pt-12 pb-24 sm:pt-12 sm:pb-32 relative scroll-mt-16 md:scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Courts
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            12 regulation courts with pro-grade surfaces, climate control, and real-time availability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {courts.map((court) => (
            <div
              key={court.name}
              className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-forest-light border border-white/[0.06] mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-light to-forest" />
                <svg
                  viewBox="0 0 60 40"
                  className="absolute inset-0 w-full h-full p-4 opacity-30 group-hover:opacity-50 transition-opacity"
                  fill="none"
                >
                  <rect x="2" y="2" width="56" height="36" rx="2" stroke="currentColor" strokeWidth="1" className="text-white/30" />
                  <line x1="30" y1="2" x2="30" y2="38" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                  <line x1="2" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" className="text-lime/40" />
                </svg>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{court.name}</h3>

              <div className="flex items-center gap-1.5 mb-3">
                <Star className="w-3.5 h-3.5 text-lime" />
                <span className="text-xs text-slate-400">{court.surface}</span>
              </div>

              <div className="flex items-center gap-1.5 mb-2">
                <court.featureIcon className="w-3.5 h-3.5 text-lime" />
                <span className="text-xs font-medium text-white/70">{court.feature}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white/30" />
                <span className="text-xs text-white/40">{court.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
