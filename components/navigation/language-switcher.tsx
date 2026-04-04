'use client';

import { Globe } from 'lucide-react';
import { LANGUAGES } from '@/lib/constants';

interface LanguageSwitcherProps {
  currentLang: string;
  variant?: 'desktop' | 'mobile';
}

export function LanguageSwitcher({ currentLang, variant = 'desktop' }: LanguageSwitcherProps) {
  const handleSwitch = (langCode: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.location.href = url.toString();
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-3">
        <Globe className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.35)' }} />
        <div className="flex items-center gap-2">
          {LANGUAGES.map((lang, index) => (
            <span key={lang.code} className="flex items-center gap-2">
              <button
                onClick={() => handleSwitch(lang.code)}
                lang={lang.code}
                disabled={currentLang === lang.code}
                className="transition-colors duration-200"
                style={{
                  fontSize: '14px',
                  fontWeight: currentLang === lang.code ? 700 : 500,
                  color: currentLang === lang.code ? '#fff' : 'rgba(255,255,255,0.35)',
                  background: 'none',
                  border: 'none',
                  cursor: currentLang === lang.code ? 'default' : 'pointer',
                  padding: 0,
                }}
                aria-label={`Switch to ${lang.label}`}
                aria-current={currentLang === lang.code ? 'true' : undefined}
              >
                {lang.label}
              </button>
              {index < LANGUAGES.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.12)', userSelect: 'none' }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 mr-4">
      <Globe className="w-[18px] h-[18px]" style={{ color: '#80A080' }} />
      <div className="flex items-center gap-1.5 text-sm font-medium">
        {LANGUAGES.map((lang, index) => (
          <span key={lang.code} className="flex items-center gap-1.5">
            <button
              onClick={() => handleSwitch(lang.code)}
              lang={lang.code}
              disabled={currentLang === lang.code}
              className="transition-colors duration-200 hover:text-white"
              style={{
                color: currentLang === lang.code ? '#fff' : '#80A080',
                fontWeight: currentLang === lang.code ? 700 : 500,
                background: 'none',
                border: 'none',
                cursor: currentLang === lang.code ? 'default' : 'pointer',
                padding: 0,
                fontSize: '14px',
              }}
              aria-label={`Switch to ${lang.label}`}
              aria-current={currentLang === lang.code ? 'true' : undefined}
            >
              {lang.label}
            </button>
            {index < LANGUAGES.length - 1 && (
              <span style={{ color: '#334D33', userSelect: 'none' }}>|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
