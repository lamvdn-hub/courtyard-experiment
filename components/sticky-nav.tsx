'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/mobile-menu';
import { LanguageSwitcher } from '@/components/navigation/language-switcher';
import { useLanguage } from '@/lib/language-context';

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { lang, t } = useLanguage();

  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('booking-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const navLinks = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.facility, href: '#facility' },
    { label: t.nav.faq, href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <Image
                src="/courtyard_logo.webp"
                alt="Courtyard Pickleball Logo"
                width={72}
                height={72}
                className="h-[72px] w-auto transition-transform group-hover:scale-105"
                priority
              />
              <span className="text-white font-bold text-base tracking-tight hidden sm:block">
                COURTYARD PICKLE
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex">
                <LanguageSwitcher currentLang={lang} />
              </div>
              <Button
                onClick={scrollToBooking}
                className="hidden md:inline-flex bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-6 transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 cursor-pointer"
              >
                {t.nav.secureYourCourt}
              </Button>
              <button
                ref={hamburgerRef}
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-white p-2"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerRef={hamburgerRef}
      />
    </>
  );
}
