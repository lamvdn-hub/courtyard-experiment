export type Language = 'en' | 'vi';

export interface Translations {
  nav: {
    howItWorks: string;
    facility: string;
    faq: string;
    secureYourCourt: string;
  };
  hero: {
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryMobile: string;
  };
  features: {
    equipment: string;
    sheltered: string;
    skillLevels: string;
  };
  mobile: {
    language: string;
    readyToPlay: string;
    secureYourCourt: string;
    howItWorks: string;
    ourFacility: string;
    faq: string;
    openHours: string;
  };
  howItWorks: {
    kicker: string;
    header: string;
    subheader: string;
    step1Title: string;
    step1Desc: string;
    step1MobileTitle: string;
    step1MobileDesc: string;
    step2Title: string;
    step2Desc: string;
    step2MobileTitle: string;
    step2MobileDesc: string;
    step3Title: string;
    step3Desc: string;
    step3MobileTitle: string;
    step3MobileDesc: string;
  };
  facility: {
    header: string;
    subheader: string;
    outdoorCafe: string;
    indoorCafe: string;
    outdoorArea: string;
    lockerRooms: string;
    mens: string;
    womens: string;
    showers: string;
    entrance: string;
    walkway: string;
    court1: string;
    court2: string;
    comingSoon: string;
  };
  cta: {
    readyTitle: string;
    reserve: string;
    disclaimer: string;
  };
}

const en: Translations = {
  nav: {
    howItWorks: 'How it Works',
    facility: 'Facility',
    faq: 'FAQ',
    secureYourCourt: 'Secure Your Court',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Awaits You.',
    description:
      'Covered courts. Free equipment care. A caf\u00e9 to unwind after your games. At Courtyard, leave the details to us and just enjoy.',
    ctaPrimary: 'Book a Court',
    ctaSecondary: 'How It Works',
    ctaSecondaryMobile: 'See how it works',
  },
  features: {
    equipment: 'Free Equipment and Cleaning',
    sheltered: 'Covered & Sheltered',
    skillLevels: 'All Skill Levels',
  },
  mobile: {
    language: 'Language',
    readyToPlay: 'Ready to play?',
    secureYourCourt: 'Secure your court',
    howItWorks: 'How it works',
    ourFacility: 'Our facility',
    faq: 'FAQ',
    openHours: 'Open daily 05:00 \u2013 22:00  \u00b7  2 courts available',
  },
  howItWorks: {
    kicker: 'Simple as 1-2-3',
    header: 'How It Works',
    subheader: 'From booking to playing in under 60 seconds.',
    step1Title: 'Pick Your Date & Court',
    step1Desc: 'View real time availability, choose your preferred date and court on our booking page.',
    step1MobileTitle: 'Pick your date & court',
    step1MobileDesc: 'Browse availability on our booking page',
    step2Title: 'Confirm & Pay',
    step2Desc: 'Complete your payment securely through our trusted partner. Instant confirmation sent to your email.',
    step2MobileTitle: 'Confirm & pay',
    step2MobileDesc: 'Secure checkout. Instant email confirmation',
    step3Title: 'Show Up & Play',
    step3Desc: "Court's ready, refreshment prepared, even gears are included. Simply arrive and enjoy your time.",
    step3MobileTitle: 'Show up & play',
    step3MobileDesc: 'Gear ready. Courts prepped. Just arrive',
  },
  facility: {
    header: 'Our Facility',
    subheader: 'Everything you need all under one roof.',
    outdoorCafe: 'OUTDOOR CAF\u00C9',
    indoorCafe: 'INDOOR CAF\u00C9',
    outdoorArea: 'OUTDOOR AREA',
    lockerRooms: 'LOCKER ROOMS',
    mens: "Men's",
    womens: "Women's",
    showers: 'Showers',
    entrance: 'ENTRANCE',
    walkway: 'WALKWAY',
    court1: 'COURT 1 \u00B7 INTERIOR',
    court2: 'COURT 2 \u00B7 STREETSIDE',
    comingSoon: 'Coming soon',
  },
  cta: {
    readyTitle: 'Ready to play?',
    reserve: 'Reserve Your Court',
    disclaimer: "You\u2019ll be taken to our secure booking partner to complete your reservation.",
  },
};

const vi: Translations = {
  nav: {
    howItWorks: 'C\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng',
    facility: 'C\u01a1 s\u1edf v\u1eadt ch\u1ea5t',
    faq: 'C\u00e2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p',
    secureYourCourt: '\u0110\u1eb7t s\u00e2n ngay',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Ch\u1edd \u0110\u00f3n B\u1ea1n.',
    description:
      'H\u1ec7 th\u1ed1ng s\u00e2n m\u00e1i che. D\u1ecbch v\u1ee5 ch\u0103m s\u00f3c d\u1ee5ng c\u1ee5 mi\u1ec5n ph\u00ed. Caf\u00e9 th\u01b0 gi\u00e3n sau tr\u1eadn \u0111\u1ea5u. T\u1ea1i Courtyard, h\u00e3y \u0111\u1ec3 ch\u00fang t\u00f4i lo m\u1ecdi th\u1ee9, vi\u1ec7c c\u1ee7a b\u1ea1n l\u00e0 t\u1eadn h\u01b0\u1edfng cu\u1ed9c ch\u01a1i.',
    ctaPrimary: '\u0110\u1eb7t s\u00e2n ngay',
    ctaSecondary: 'T\u00ecm hi\u1ec3u th\u00eam',
    ctaSecondaryMobile: 'T\u00ecm hi\u1ec3u th\u00eam',
  },
  features: {
    equipment: 'Mi\u1ec5n ph\u00ed d\u1ee5ng c\u1ee5 & v\u1ec7 sinh',
    sheltered: 'S\u00e2n c\u00f3 m\u00e1i che hi\u1ec7n \u0111\u1ea1i',
    skillLevels: 'Ph\u00f9 h\u1ee3p m\u1ecdi c\u1ea5p \u0111\u1ed9',
  },
  mobile: {
    language: 'Ng\u00f4n ng\u1eef',
    readyToPlay: 'S\u1eb5n s\u00e0ng ch\u01a1i?',
    secureYourCourt: '\u0110\u1eb7t s\u00e2n ngay',
    howItWorks: 'C\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng',
    ourFacility: 'C\u01a1 s\u1edf v\u1eadt ch\u1ea5t',
    faq: 'C\u00e2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p',
    openHours: 'M\u1edf c\u1eeda h\u00e0ng ng\u00e0y 05:00 \u2013 22:00  \u00b7  2 s\u00e2n',
  },
  howItWorks: {
    kicker: '\u0110\u01A0N GI\u1EA2N TRONG 3 B\u01AF\u1EDAC',
    header: 'Quy tr\u00ECnh \u0111\u1EB7t s\u00E2n',
    subheader: 'T\u1EEB \u0111\u1EB7t s\u00E2n \u0111\u1EBFn nh\u1EADp cu\u1ED9c ch\u1EC9 trong 60 gi\u00E2y.',
    step1Title: 'Ch\u1ECDn ng\u00E0y & \u0111\u1EB7t s\u00E2n',
    step1Desc: 'Xem l\u1ECBch tr\u1ED1ng th\u1EDDi gian th\u1EF1c, ch\u1ECDn ng\u00E0y v\u00E0 s\u00E2n b\u1EA1n mu\u1ED1n ngay tr\u00EAn trang \u0111\u1EB7t ch\u1ED7.',
    step1MobileTitle: 'Ch\u1ECDn ng\u00E0y & \u0111\u1EB7t s\u00E2n',
    step1MobileDesc: 'Xem l\u1ECBch tr\u1ED1ng tr\u00EAn trang \u0111\u1EB7t ch\u1ED7',
    step2Title: 'X\u00E1c nh\u1EADn & Thanh to\u00E1n',
    step2Desc: 'Thanh to\u00E1n b\u1EA3o m\u1EADt qua \u0111\u1ED1i t\u00E1c uy t\u00EDn. X\u00E1c nh\u1EADn s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi t\u1EE9c th\u00EC \u0111\u1EBFn email c\u1EE7a b\u1EA1n.',
    step2MobileTitle: 'X\u00E1c nh\u1EADn & Thanh to\u00E1n',
    step2MobileDesc: 'Thanh to\u00E1n b\u1EA3o m\u1EADt. X\u00E1c nh\u1EADn qua email',
    step3Title: '\u0110\u1EBFn s\u00E2n & Tr\u1EA3i nghi\u1EC7m',
    step3Desc: 'S\u00E2n \u0111\u00E3 s\u1EB5n s\u00E0ng, n\u01B0\u1EDBc u\u1ED1ng ph\u1EE5c v\u1EE5 t\u1EADn n\u01A1i, h\u1ED7 tr\u1EE3 c\u1EA3 d\u1EE5ng c\u1EE5 ch\u01A1i. B\u1EA1n ch\u1EC9 c\u1EA7n \u0111\u1EBFn v\u00E0 t\u1EADn h\u01B0\u1EDFng.',
    step3MobileTitle: '\u0110\u1EBFn s\u00E2n & Tr\u1EA3i nghi\u1EC7m',
    step3MobileDesc: 'S\u00E2n s\u1EB5n s\u00E0ng. Ch\u1EC9 c\u1EA7n \u0111\u1EBFn',
  },
  facility: {
    header: 'C\u01A1 s\u1EDF v\u1EADt ch\u1EA5t',
    subheader: 'Ti\u1EC7n \u00EDch to\u00E0n di\u1EC7n t\u1EA1i m\u1ED9t \u0111i\u1EC3m \u0111\u1EBFn.',
    outdoorCafe: 'CAF\u00C9 NGO\u00C0I TR\u1EDCI',
    indoorCafe: 'CAF\u00C9 TRONG NH\u00C0',
    outdoorArea: 'KHU V\u1EF0C NGO\u00C0I TR\u1EDCI',
    lockerRooms: 'PH\u00D2NG THAY \u0110\u1ED2',
    mens: 'Nam',
    womens: 'N\u1EEF',
    showers: 'Ph\u00F2ng t\u1EAFm',
    entrance: 'L\u1ED0I V\u00C0O',
    walkway: 'L\u1ED0I \u0110I B\u1ED8',
    court1: 'S\u00C2N 1 \u00B7 TRONG NH\u00C0',
    court2: 'S\u00C2N 2 \u00B7 M\u1EACT PH\u1ED0',
    comingSoon: 'S\u1EAFp ra m\u1EAFt',
  },
  cta: {
    readyTitle: 'S\u1EB5n s\u00E0ng nh\u1EADp cu\u1ED9c?',
    reserve: '\u0110\u1EB7t s\u00E2n ngay',
    disclaimer: 'B\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c chuy\u1EC3n \u0111\u1EBFn trang thanh to\u00E1n b\u1EA3o m\u1EADt c\u1EE7a \u0111\u1ED1i t\u00E1c \u0111\u1EC3 ho\u00E0n t\u1EA5t \u0111\u1EB7t ch\u1ED7.',
  },
};

const translations: Record<Language, Translations> = { en, vi };

export function getTranslations(lang: string): Translations {
  return translations[lang as Language] ?? translations.en;
}
