import { CalendarDays, ShieldCheck, Trophy, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Pick Your Date & Court',
    description:
      'Tap the button below to browse real-time availability. Choose your preferred date and court on our booking page.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Confirm & Pay',
    description:
      'Complete your reservation securely in under a minute. Instant confirmation sent to your email.',
  },
  {
    number: '03',
    icon: Trophy,
    title: 'Show Up & Play',
    description:
      'Gear included. Courts prepped. Just arrive, check in, and own the kitchen. Post-game lounge awaits.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-24 sm:pt-32 pb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lime text-sm font-semibold tracking-widest uppercase mb-4">
            Simple as 1-2-3
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From booking to playing in under 60 seconds.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                  <step.icon className="w-6 h-6 text-lime" />
                </div>
                <span className="text-4xl font-bold text-white/[0.06] group-hover:text-white/[0.1] transition-colors">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden sm:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 w-10 lg:w-12 items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white/15" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
