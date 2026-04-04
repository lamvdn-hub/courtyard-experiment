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
    slogan?: string;
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
    openSeating: string;
    counterTablesReception: string;
  };
  cta: {
    readyTitle: string;
    reserve: string;
    disclaimer: string;
  };
  faq: {
    kicker: string;
    header: string;
    subheader: string;
  };
  footer: {
    description: string;
    contactTitle: string;
    messageFacebook: string;
    chatZalo: string;
    locationTitle: string;
    addressLine1: string;
    addressLine2: string;
    hours: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
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
      'Covered courts. Free equipment care. A café to unwind after your games. At Courtyard, leave the details to us and just enjoy.',
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
    openHours: 'Open daily 05:00 – 22:00  ·  2 courts available',
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
    outdoorCafe: 'OUTDOOR CAFÉ',
    indoorCafe: 'INDOOR CAFÉ',
    outdoorArea: 'OUTDOOR AREA',
    lockerRooms: 'LOCKER ROOMS',
    mens: "Men's",
    womens: "Women's",
    showers: 'Showers',
    entrance: 'ENTRANCE',
    walkway: 'WALKWAY',
    court1: 'COURT 1 · INTERIOR',
    court2: 'COURT 2 · STREETSIDE',
    comingSoon: 'Coming soon',
    openSeating: 'Open seating',
    counterTablesReception: 'Counter · Tables · Reception',
  },
  cta: {
    readyTitle: 'Ready to play?',
    reserve: 'Reserve Your Court',
    disclaimer: "You'll be taken to our secure booking partner to complete your reservation.",
  },
  faq: {
    kicker: 'Got Questions?',
    header: 'Everything You Need to Know',
    subheader: 'Straight answers. No runaround.',
  },
  footer: {
    description: 'Courtyard Pickleball is Da Nang\'s premier pickleball facility, offering court rentals, coaching, and social play at 27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam.',
    contactTitle: 'CONTACT US',
    messageFacebook: 'Facebook',
    chatZalo: 'Zalo',
    locationTitle: 'LOCATION',
    addressLine1: '27 Thị Xuân Quý',
    addressLine2: 'Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam',
    hours: 'Open Daily: 5 am – 10 pm',
    copyright: 'Courtyard Pickleball. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
};

const vi: Translations = {
  nav: {
    howItWorks: 'Quy trình đặt sân',
    facility: 'Cơ sở vật chất',
    faq: 'Câu hỏi thường gặp',
    secureYourCourt: 'Đặt sân ngay',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Pickle.',
    slogan: 'Nơi Cảm Xúc Được Chạm Tới',
    description:
      'Hệ thống sân có mái che. Dịch vụ cho thuê và vệ sinh dụng cụ miễn phí. Café thư giãn sau trận đấu. Tại Courtyard, hãy để chúng tôi lo mọi thứ để bạn có thể tận hưởng cuộc chơi.',
    ctaPrimary: 'Đặt sân ngay',
    ctaSecondary: 'Tìm hiểu thêm',
    ctaSecondaryMobile: 'Tìm hiểu thêm',
  },
  features: {
    equipment: 'Miễn phí dụng cụ & vệ sinh',
    sheltered: 'Sân có mái che hiện đại',
    skillLevels: 'Phù hợp mọi cấp độ',
  },
  mobile: {
    language: 'Ngôn ngữ',
    readyToPlay: 'Sẵn sàng chơi?',
    secureYourCourt: 'Đặt sân ngay',
    howItWorks: 'Quy trình đặt sân',
    ourFacility: 'Cơ sở vật chất',
    faq: 'Câu hỏi thường gặp',
    openHours: 'Mở cửa hàng ngày 05:00 – 22:00  ·  2 sân',
  },
  howItWorks: {
    kicker: 'ĐƠN GIẢN TRONG 3 BƯỚC',
    header: 'Quy Trình Đặt Sân',
    subheader: 'Xác nhận chỉ trong 60 giây.',
    step1Title: 'Chọn ngày & đặt sân',
    step1Desc: 'Xem lịch trống thời gian thực, chọn ngày và sân bạn muốn ngay trên trang đặt chỗ.',
    step1MobileTitle: 'Chọn ngày & đặt sân',
    step1MobileDesc: 'Xem lịch trống trên trang đặt chỗ',
    step2Title: 'Xác nhận & thanh toán',
    step2Desc: 'Thanh toán bảo mật qua đối tác uy tín. Xác nhận sẽ được gửi tức thì đến email của bạn.',
    step2MobileTitle: 'Xác nhận & thanh toán',
    step2MobileDesc: 'Thanh toán bảo mật. Xác nhận qua email',
    step3Title: 'Đến sân & trải nghiệm',
    step3Desc: 'Sân đã sẵn sàng, nước uống phục vụ tận nơi, hỗ trợ cả dụng cụ chơi. Bạn chỉ cần đến và tận hưởng.',
    step3MobileTitle: 'Đến sân & trải nghiệm',
    step3MobileDesc: 'Mọi thứ sẵn sàng. Chỉ cần bạn đến trải nghiệm',
  },
  facility: {
    header: 'Cơ sở vật chất',
    subheader: 'Tiện ích toàn diện tại một điểm đến.',
    outdoorCafe: 'CAFÉ NGOÀI TRỜI',
    indoorCafe: 'CAFÉ TRONG NHÀ',
    outdoorArea: 'KHU VỰC NGOÀI TRỜI',
    lockerRooms: 'PHÒNG THAY ĐỒ',
    mens: 'Nam',
    womens: 'Nữ',
    showers: 'Phòng tắm',
    entrance: 'LỐI VÀO',
    walkway: 'LỐI ĐI BỘ',
    court1: 'SÂN 1 · TRONG NHÀ',
    court2: 'SÂN 2 · MẶT ĐƯỜNG',
    comingSoon: 'Sắp ra mắt',
    openSeating: 'Chỗ ngồi tự do',
    counterTablesReception: 'Bàn ghế · Lễ tân',
  },
  cta: {
    readyTitle: 'Sẵn Sàng Nhập Cuộc?',
    reserve: 'Đặt Sân Ngay',
    disclaimer: 'Bạn sẽ được chuyển đến trang đặt sân chính thức của Alobo để hoàn tất quá trình.',
  },
  faq: {
    kicker: 'BẠN CÒN THẮC MẮC?',
    header: 'Tất Tần Tật Thông Tin Bạn Cần',
    subheader: 'Trả lời trực diện. Không lòng vòng.',
  },
  footer: {
    description: 'Courtyard Pickleball là tổ hợp sân pickleball hàng đầu tại Đà Nẵng, chuyên cung cấp dịch vụ thuê sân, đào tạo và giao lưu cộng đồng tại số 27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam.',
    contactTitle: 'LIÊN HỆ',
    messageFacebook: 'Facebook',
    chatZalo: 'Zalo',
    locationTitle: 'ĐỊA ĐIỂM',
    addressLine1: '27 Thị Xuân Quý',
    addressLine2: 'Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam',
    hours: 'Mở cửa hàng ngày: 05:00 – 22:00',
    copyright: 'Courtyard Pickleball. Bảo lưu mọi quyền.',
    privacyPolicy: 'Chính sách bảo mật',
    termsOfService: 'Điều khoản dịch vụ',
  },
};

const translations: Record<Language, Translations> = { en, vi };

export function getTranslations(lang: string): Translations {
  return translations[lang as Language] ?? translations.en;
}
