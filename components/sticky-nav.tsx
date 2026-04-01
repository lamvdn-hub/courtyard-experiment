'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BOOKING_URL } from '@/lib/constants';

const navLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Facility', href: '#courts' },
  { label: 'FAQ', href: '#faq' },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
              COURTYARD PICKLEBALL
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
            <Button asChild className="hidden md:inline-flex bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl px-6 transition-all duration-200 hover:shadow-lg hover:shadow-lime/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Secure Your Court
              </a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-forest/95 backdrop-blur-2xl border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-slate-400 hover:text-white transition-colors py-2 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl mt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Secure Your Court
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
