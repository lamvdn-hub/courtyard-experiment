"use client";

import { ArrowRight, Umbrella, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { PhotoSlideshow } from "@/components/photo-slideshow";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-14 sm:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-forest opacity-80" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-slate-400">
                Book online, instant confirmation
              </span>
            </div>

            <h1 className="text-[3.25rem] sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.1]">
              Courtyard <span className="text-lime">Awaits You.</span>
            </h1>

            <p className="text-[15px] text-white/[0.65] max-w-lg leading-relaxed sm:text-xl sm:text-slate-400">
              Covered courts. Free equipment care. A caf&eacute; to unwind after
              your games. At Courtyard, leave the details to us and just enjoy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-8 h-14 text-base transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 group"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Court
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="hidden sm:inline-flex text-white border border-white/20 hover:bg-white/10 hover:text-white rounded-xl px-8 h-14 text-base transition-all duration-200"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>

              <a
                href="#how-it-works"
                className="sm:hidden text-[14px] text-center text-white/[0.55] transition-colors hover:text-white/70"
              >
                See how it works &rarr;
              </a>
            </div>

            <div className="flex items-center gap-6 sm:mt-0 pt-0 sm:pt-4">
              {[
                { icon: Shield, label: "Free Equipment and Cleaning" },
                { icon: Umbrella, label: "Covered & Sheltered" },
                { icon: Users, label: "All Skill Levels" },
              ].map(({ icon: Icon, label }) => (
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

        <div className="lg:hidden mt-8">
          <PhotoSlideshow mode="mobile" />
        </div>
      </div>
    </section>
  );
}
