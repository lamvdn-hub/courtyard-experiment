'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

function FacebookButtonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" fill="#1877F2"/>
      <path d="M12 6.5H10.5C10.2 6.5 10 6.7 10 7V8.5H12L11.7 10.5H10V16H8V10.5H6.5V8.5H8V7C8 5.9 8.9 5 10 5H12V6.5Z" fill="#fff"/>
    </svg>
  );
}

function ZaloButtonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 16C3 16 4.8 14.8 5.8 14.2C7.2 13.4 8.2 13.2 10 13.2C14 13.2 17 11 17 8.2C17 5.4 14 3.2 10 3.2C6 3.2 3 5.4 3 8.2C3 9.8 4 11.2 5.5 12.2L5 16H3Z" fill="#0068FF" stroke="#0068FF" strokeWidth="0.5" strokeLinejoin="round"/>
      <text x="10" y="9.5" fontSize="5" fill="#fff" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Zalo</text>
    </svg>
  );
}

const socialButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '10px 16px',
  fontSize: '13px',
  color: 'rgba(255,255,255,0.6)',
  cursor: 'pointer',
  transition: 'background 0.2s, border-color 0.2s',
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div
        className="relative mx-auto px-6 md:px-12"
        style={{ maxWidth: '1100px', paddingTop: '40px', paddingBottom: '40px' }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Image
                src="/courtyard_logo.webp"
                alt="Courtyard Pickleball Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-white font-bold text-base tracking-tight">
                COURTYARD PICKLEBALL
              </span>
            </div>
            <p
              className="text-[13px] max-w-[380px]"
              style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}
            >
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {t.footer.contactTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61571952061949"
                target="_blank"
                rel="noopener noreferrer"
                style={socialButtonStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <FacebookButtonIcon />
                {t.footer.messageFacebook}
              </a>
              <a
                href="https://zalo.me/g/xegehi407"
                target="_blank"
                rel="noopener noreferrer"
                style={socialButtonStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <ZaloButtonIcon />
                {t.footer.chatZalo}
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {t.footer.locationTitle}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    {t.footer.addressLine1}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    {t.footer.addressLine2}
                  </p>
                </div>
              </div>
              <p
                className="text-[13px]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {t.footer.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
