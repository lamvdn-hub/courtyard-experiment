"use client";

import { ArrowRight, Umbrella, Shield, Users } from "lucide-react";
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

            <div className="flex flex-col sm:flex-row gap-4">
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
    </section>
  );
}
