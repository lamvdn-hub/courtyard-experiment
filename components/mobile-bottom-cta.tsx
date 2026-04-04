'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function MobileBottomCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('booking-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`fixed z-50 md:hidden transition-all duration-300 left-3 right-3 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-full pointer-events-none'
      }`}
      style={{ bottom: 'max(8px, env(safe-area-inset-bottom, 20px))' }}
    >
      <div className="bg-forest/90 backdrop-blur-2xl border border-lime/20 rounded-2xl px-4 py-3">
        <button
          onClick={scrollToBooking}
          className="flex items-center justify-center gap-2 w-full bg-lime text-forest font-bold hover:bg-lime-dim rounded-xl h-12 text-sm transition-all duration-200 group cursor-pointer"
        >
          {t.cta.reserve}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
