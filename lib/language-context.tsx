'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { DEFAULT_LANGUAGE } from '@/lib/constants';
import { getTranslations, type Translations, type Language } from '@/lib/translations';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANGUAGE as Language,
  t: getTranslations(DEFAULT_LANGUAGE),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE as Language);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang === 'vi' || paramLang === 'en') {
      setLang(paramLang);
    }
  }, []);

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
