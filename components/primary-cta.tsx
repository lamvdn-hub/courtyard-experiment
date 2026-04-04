'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BOOKING_URL } from '@/lib/constants';
import { useLanguage } from '@/lib/language-context';

export function PrimaryCTA() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-12 sm:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime/[0.03] to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          {t.cta.readyTitle}
        </h2>

        <div className="mt-8">
          <Button asChild className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-10 h-14 text-base transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 group">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t.cta.reserve}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <p className="text-white/40 text-[13px] mt-4">
          {t.cta.disclaimer}
        </p>
      </div>
    </section>
  );
}
