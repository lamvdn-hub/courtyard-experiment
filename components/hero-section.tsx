"use client";

import { ArrowRight, Umbrella, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoSlideshow } from "@/components/photo-slideshow";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, label: t.features.equipment },
    { icon: Umbrella, label: t.features.sheltered },
    { icon: Users, label: t.features.skillLevels },
  ];

  return (
    <section className="relative min-h-screen flex items-start pt-24 sm:pt-20 sm:items-center overflow-hidden pb-6 sm:pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-forest opacity-80" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-[3.25rem] sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.1]">
                {t.hero.headlinePart1}{" "}
                <span className="text-lime">{t.hero.headlinePart2}</span>
              </h1>

              {t.hero.slogan && (
                <h2 className="border-l-2 border-lime pl-[14px] mt-[14px] text-[18px] font-normal italic text-white/75 leading-snug">
                  {t.hero.slogan}
                </h2>
              )}
            </div>

            <p className="text-[15px] text-white/[0.65] max-w-lg leading-relaxed sm:text-xl sm:text-slate-400">
              {t.hero.description}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToBooking}
                  className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-8 h-14 text-base transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 group cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="hidden sm:inline-flex text-white border border-white/20 hover:bg-white/10 hover:text-white rounded-xl px-8 h-14 text-base transition-all duration-200"
                >
                  <a href="#how-it-works">{t.hero.ctaSecondary}</a>
                </Button>

                <a
                  href="#how-it-works"
                  className="sm:hidden text-[14px] text-center pt-[13px] text-white/[0.55] transition-colors hover:text-white/70"
                >
                  {t.hero.ctaSecondaryMobile} &rarr;
                </a>
              </div>

              {/* Social Proof Badge */}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 mb-4 sm:mb-0 sm:mt-0">
                <div className="flex -space-x-3 isolate">
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#1B2923] flex items-center justify-center overflow-hidden z-30">
                    <img src="https://i.pravatar.cc/100?img=33" alt="player" className="w-full h-full object-cover"/>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#1B2923] flex items-center justify-center overflow-hidden z-20">
                    <img src="https://i.pravatar.cc/100?img=47" alt="player" className="w-full h-full object-cover"/>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#1B2923] flex items-center justify-center overflow-hidden z-10">
                    <img src="https://i.pravatar.cc/100?img=12" alt="player" className="w-full h-full object-cover"/>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#1B2923] border-2 border-[#16211C] flex items-center justify-center overflow-hidden z-0 bg-lime/20 text-lime text-[10px] font-bold">
                    +500
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex text-lime text-[12px]">
                    ★★★★★
                  </div>
                  <span className="text-[13px] text-white/80 font-medium">Join 500+ local players</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 sm:mt-0 pt-0 sm:pt-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-lime" />
                  <span className="text-xs sm:text-sm text-slate-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <PhotoSlideshow mode="desktop" />
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-8 mb-0">
          <PhotoSlideshow mode="mobile" />
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden sm:flex opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <div className="w-6 h-10 border-[1.5px] border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2 bg-lime rounded-full animate-bounce mt-0.5" />
        </div>
      </div>
    </section>
  );
}
