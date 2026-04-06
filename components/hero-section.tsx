"use client";

import { ArrowRight, Umbrella, Shield, Users, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { PhotoSlideshow } from "@/components/photo-slideshow";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, label: t.features.equipment },
    { icon: Umbrella, label: t.features.sheltered },
    { icon: Users, label: t.features.skillLevels },
  ];

  return (
    <section className="relative min-h-screen flex items-start pt-24 sm:pt-20 sm:items-center overflow-hidden pb-6 sm:pb-0">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* using a placeholder video for now */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest/85 backdrop-blur-[2px]" />
      </div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime/10 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
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

            <p className="text-[15px] text-white/[0.65] max-w-lg leading-relaxed sm:text-xl sm:text-slate-300">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                asChild
                className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-8 h-14 text-base transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 group"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
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

            {/* Social Proof Inline */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border-2 border-forest" alt="Player 1" />
                <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full border-2 border-forest" alt="Player 2" />
                <img src="https://i.pravatar.cc/100?img=13" className="w-8 h-8 rounded-full border-2 border-forest" alt="Player 3" />
                <div className="w-8 h-8 rounded-full border-2 border-forest bg-forest flex items-center justify-center text-[10px] text-white font-medium z-10">+</div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-lime text-lime" />
                  ))}
                </div>
                <span className="text-xs text-white/80 font-medium">Join 500+ local players</span>
              </div>
            </div>

            <div className="flex items-center gap-6 sm:mt-0 pt-4 sm:pt-6">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-lime" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative z-10 hover:scale-[1.02] transition-transform duration-500">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <PhotoSlideshow mode="desktop" />
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-8 mb-0 relative z-10">
          <PhotoSlideshow mode="mobile" />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#how-it-works" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity hidden lg:flex z-10">
        <span className="text-[10px] text-white/70 font-semibold uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-lime" />
      </a>
    </section>
  );
}
