'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { LanguageSwitcher } from '@/components/navigation/language-switcher';
import { useLanguage } from '@/lib/language-context';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { lang, t } = useLanguage();

  const navLinks = [
    { label: t.mobile.howItWorks, href: '#how-it-works' },
    { label: t.mobile.ourFacility, href: '#courts' },
    { label: t.mobile.faq, href: '#faq' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 220);
  }, [onClose, triggerRef]);

  const handleNavClick = useCallback((href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 220);
  }, [onClose]);

  const handleCtaClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] md:hidden flex flex-col animate-fade-in"
      style={{ backgroundColor: '#0a1a0c' }}
      role="menu"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between px-4 h-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2">
          <Image
            src="/courtyard_logo.webp"
            alt="Courtyard Pickleball Logo"
            width={72}
            height={72}
            className="h-[72px] w-auto"
            priority
          />
        </div>
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          aria-label="Close menu"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <X
            className="w-[14px] h-[14px]"
            style={{ stroke: 'rgba(255,255,255,0.7)', strokeWidth: '1.5px', strokeLinecap: 'round' }}
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-8">
        <nav>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="flex items-center justify-between transition-colors"
              style={{
                padding: '18px 0',
                fontSize: '18px',
                fontWeight: 500,
                color: '#fff',
                letterSpacing: '-0.01em',
                borderBottom: index < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                outline: 'none',
              }}
            >
              {link.label}
              <ArrowRight className="w-4 h-4" style={{ opacity: 0.3 }} />
            </a>
          ))}
        </nav>

        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            marginTop: '32px',
            marginBottom: '28px',
          }}
        />

        <div style={{ marginBottom: '24px' }}>
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {t.mobile.language}
          </p>
          <LanguageSwitcher currentLang={lang} variant="mobile" />
        </div>

        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            marginBottom: '28px',
          }}
        />

        <div>
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            {t.mobile.readyToPlay}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="flex items-center justify-center w-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#ccff00',
              color: '#0a1a0c',
              fontSize: '15px',
              fontWeight: 500,
              padding: '16px 0',
              borderRadius: '12px',
            }}
          >
            {t.mobile.secureYourCourt}&nbsp;&rarr;
          </a>
        </div>
      </div>

      <div
        className="px-6 py-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p
          className="text-center"
          style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          {t.mobile.openHours}
        </p>
      </div>
    </div>
  );
}
