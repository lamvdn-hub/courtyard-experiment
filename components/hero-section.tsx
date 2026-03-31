import { ArrowRight, Wifi, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BOOKING_URL } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-forest opacity-80" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="text-sm text-slate-400">8 of 12 courts active now</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Courtyard Pickle
              <br />
              <span className="text-lime">Is Calling.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed">
              12 Climate-controlled courts. Pro-grade cushioning. Post-game lounge.
              Welcome to pickleball, elevated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-8 h-14 text-base transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 group">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Court
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-white border border-white/20 hover:bg-white/10 hover:text-white rounded-xl px-8 h-14 text-base transition-all duration-200">
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              {[
                { icon: Shield, label: 'Pro-Grade Equipment' },
                { icon: Wifi, label: 'Climate Controlled' },
                { icon: Users, label: 'All Skill Levels' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-lime" />
                  <span className="text-xs sm:text-sm text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-forest-light border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-light to-forest" />

              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                fill="none"
              >
                <rect
                  x="40"
                  y="30"
                  width="320"
                  height="240"
                  rx="4"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2"
                />
                <line
                  x1="200"
                  y1="30"
                  x2="200"
                  y2="270"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2"
                />
                <line
                  x1="40"
                  y1="150"
                  x2="360"
                  y2="150"
                  stroke="rgba(212,255,0,0.3)"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                />
                <rect
                  x="120"
                  y="100"
                  width="160"
                  height="100"
                  rx="4"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="4"
                  fill="rgba(212,255,0,0.6)"
                />
              </svg>

              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-xs text-white font-medium">Live Court View</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/15">
                  <span className="text-xs text-white/70">Court #07</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-lime/20 backdrop-blur-xl border border-lime/30">
                  <span className="text-xs text-lime font-medium">In Session</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-lime/10 border border-lime/20 backdrop-blur-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-lime">12</div>
                <div className="text-xs text-white/60">Courts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
