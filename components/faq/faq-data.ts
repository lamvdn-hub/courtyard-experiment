import type { Language } from '@/lib/translations';

export interface FAQ {
  question: string;
  answer: string;
}

const en: FAQ[] = [
  {
    question: 'How do I book a court at Courtyard Pickle?',
    answer:
      'Clicking any "Book" or "Reserve" button on this page takes you to our booking partner\'s secure site, where you can select your preferred date, time, and court at Courtyard Pickle in Da Nang. After finalizing the payment you will receive the confirmation instantly in your email.',
  },
  {
    question: 'How much does it cost to rent a pickleball court in Da Nang?',
    answer:
      'Court rental pricing varies by time slot and group size. Full pricing is shown during checkout on our booking partner\'s site. Click any "Book" button on this page to see current rates.',
  },
  {
    question: 'What are your opening hours?',
    answer:
      'Courtyard Pickleball in Da Nang is open daily from 05:00 to 22:00. Hours may vary on public holidays \u2014 check our booking calendar for live availability.',
  },
  {
    question: 'Where is Courtyard Pickleball located?',
    answer:
      'You can find us at 27 D\u01B0\u01A1ng Th\u1ECB Xu\u00E2n Qu\u00FD, Ng\u0169 H\u00E0nh S\u01A1n District, \u0110\u00E0 N\u1EB5ng, Vi\u1EC7t Nam.',
  },
  {
    question: 'Do I need to bring my own pickleball paddle?',
    answer:
      'Not at all. Courtyard Pickleball provides free paddles and balls for all players. Just show up and play.',
  },
  {
    question: 'Can beginners play at Courtyard Pickleball?',
    answer:
      'We run dedicated beginner-friendly social sessions where experienced players help newcomers learn the basics. Private and group lessons are also available \u2014 book directly through our booking partner or contact us to arrange.',
  },
  {
    question: 'Do you offer pickleball lessons in Da Nang?',
    answer:
      'Yes. We offer both private and group lessons suitable for all levels at Courtyard Pickleball in Da Nang. Lessons can be booked through our booking partner or by contacting us directly.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer:
      'You can reschedule any booking up to 12 hours in advance at no charge. Cancellations made more than 12 hours before your session are eligible for a full refund. Cancellations within 12 hours are non-refundable.',
  },
  {
    question: 'What should I wear to play pickleball?',
    answer:
      'Comfortable athletic wear is all you need. We have locker rooms and a full changing area available at the facility.',
  },
  {
    question: 'Is there parking at Courtyard Pickleball in Da Nang?',
    answer:
      'Yes. Dedicated motorcycle parking is available on-site. Car parking is available curbside directly in front of the facility on D\u01B0\u01A1ng Th\u1ECB Xu\u00E2n Qu\u00FD.',
  },
  {
    question: 'Can I book pickleball courts for a group or private event in Da Nang?',
    answer:
      'Yes. We accommodate group sessions, corporate events, and private tournaments at Courtyard Pickleball, serving Da Nang and surrounding areas. Contact us at +84 932150006 or message us on Facebook to discuss availability, pricing, and setup.',
  },
  {
    question: 'Can I walk in without a reservation?',
    answer:
      'Walk-ins are welcome when courts are available, but we recommend booking in advance to guarantee your slot, especially on weekends.',
  },
];

const vi: FAQ[] = [
  {
    question: 'L\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 \u0111\u1EB7t s\u00E2n pickleball t\u1EA1i \u0110\u00E0 N\u1EB5ng?',
    answer:
      'Ch\u1EC9 c\u1EA7n nh\u1EA5p v\u00E0o b\u1EA5t k\u1EF3 n\u00FAt \u201C\u0110\u1EB7t s\u00E2n\u201D n\u00E0o tr\u00EAn trang n\u00E0y, b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c chuy\u1EC3n \u0111\u1EBFn trang \u0111\u1EB7t ch\u1ED7 b\u1EA3o m\u1EADt c\u1EE7a \u0111\u1ED1i t\u00E1c. T\u1EA1i \u0111\u00E2y, b\u1EA1n c\u00F3 th\u1EC3 ch\u1ECDn ng\u00E0y, gi\u1EDD v\u00E0 s\u00E2n mong mu\u1ED1n t\u1EA1i Courtyard Pickleball \u0110\u00E0 N\u1EB5ng. Sau khi ho\u00E0n t\u1EA5t thanh to\u00E1n, b\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c email x\u00E1c nh\u1EADn t\u1EE9c th\u00EC.',
  },
  {
    question: 'Chi ph\u00ED thu\u00EA s\u00E2n pickleball t\u1EA1i \u0110\u00E0 N\u1EB5ng l\u00E0 bao nhi\u00EAu?',
    answer:
      'Gi\u00E1 thu\u00EA s\u00E2n s\u1EBD thay \u0111\u1ED5i t\u00F9y theo khung gi\u1EDD v\u00E0 s\u1ED1 l\u01B0\u1EE3ng ng\u01B0\u1EDDi ch\u01A1i. M\u1EE9c gi\u00E1 chi ti\u1EBFt s\u1EBD \u0111\u01B0\u1EE3c hi\u1EC3n th\u1ECB t\u1EA1i trang thanh to\u00E1n c\u1EE7a \u0111\u1ED1i t\u00E1c \u0111\u1EB7t s\u00E2n. H\u00E3y nh\u1EA5p v\u00E0o n\u00FAt \u201C\u0110\u1EB7t s\u00E2n\u201D \u0111\u1EC3 xem b\u1EA3ng gi\u00E1 c\u1EADp nh\u1EADt m\u1EDBi nh\u1EA5t.',
  },
  {
    question: 'Gi\u1EDD m\u1EDF c\u1EEDa c\u1EE7a s\u00E2n l\u00E0 khi n\u00E0o?',
    answer:
      'Courtyard Pickleball \u0110\u00E0 N\u1EB5ng m\u1EDF c\u1EEDa h\u00E0ng ng\u00E0y t\u1EEB 05:00 \u0111\u1EBFn 22:00. Gi\u1EDD ho\u1EA1t \u0111\u1ED9ng c\u00F3 th\u1EC3 thay \u0111\u1ED5i v\u00E0o c\u00E1c ng\u00E0y l\u1EC5 \u2014 vui l\u00F2ng ki\u1EC3m tra l\u1ECBch \u0111\u1EB7t s\u00E2n \u0111\u1EC3 c\u1EADp nh\u1EADt t\u00ECnh tr\u1EA1ng s\u00E2n tr\u1ED1ng th\u1EF1c t\u1EBF.',
  },
  {
    question: 'Courtyard Pickleball n\u1EB1m \u1EDF \u0111\u00E2u?',
    answer:
      'B\u1EA1n c\u00F3 th\u1EC3 t\u00ECm th\u1EA5y ch\u00FAng t\u00F4i t\u1EA1i s\u1ED1 27 D\u01B0\u01A1ng Th\u1ECB Xu\u00E2n Qu\u00FD, Qu\u1EADn Ng\u0169 H\u00E0nh S\u01A1n, \u0110\u00E0 N\u1EB5ng, Vi\u1EC7t Nam.',
  },
  {
    question: 'T\u00F4i c\u00F3 c\u1EA7n t\u1EF1 mang theo v\u1EE3t kh\u00F4ng?',
    answer:
      'Kh\u00F4ng c\u1EA7n thi\u1EBFt. Courtyard Pickleball cung c\u1EA5p v\u1EE3t v\u00E0 b\u00F3ng mi\u1EC5n ph\u00ED cho t\u1EA5t c\u1EA3 ng\u01B0\u1EDDi ch\u01A1i. B\u1EA1n ch\u1EC9 c\u1EA7n \u0111\u1EBFn s\u00E2n v\u00E0 s\u1EB5n s\u00E0ng nh\u1EADp cu\u1ED9c.',
  },
  {
    question: 'Ng\u01B0\u1EDDi m\u1EDBi b\u1EAFt \u0111\u1EA7u c\u00F3 th\u1EC3 ch\u01A1i t\u1EA1i Courtyard Pickleball kh\u00F4ng?',
    answer:
      'Ch\u1EAFc ch\u1EAFn r\u1ED3i! Ch\u00FAng t\u00F4i c\u00F3 c\u00E1c bu\u1ED5i giao l\u01B0u d\u00E0nh ri\u00EAng cho ng\u01B0\u1EDDi m\u1EDBi, n\u01A1i c\u00E1c ng\u01B0\u1EDDi ch\u01A1i kinh nghi\u1EC7m s\u1EBD h\u1ED7 tr\u1EE3 b\u1EA1n h\u1ECDc nh\u1EEFng k\u1EF9 thu\u1EADt c\u01A1 b\u1EA3n. C\u00E1c l\u1EDBp h\u1ECDc c\u00E1 nh\u00E2n v\u00E0 nh\u00F3m c\u0169ng lu\u00F4n s\u1EB5n s\u00E0ng \u2014 b\u1EA1n c\u00F3 th\u1EC3 \u0111\u1EB7t tr\u1EF1c ti\u1EBFp qua \u0111\u1ED1i t\u00E1c ho\u1EB7c li\u00EAn h\u1EC7 v\u1EDBi ch\u00FAng t\u00F4i \u0111\u1EC3 \u0111\u01B0\u1EE3c t\u01B0 v\u1EA5n.',
  },
  {
    question: 'S\u00E2n c\u00F3 l\u1EDBp d\u1EA1y ch\u01A1i pickleball t\u1EA1i \u0110\u00E0 N\u1EB5ng kh\u00F4ng?',
    answer:
      'C\u00F3. Ch\u00FAng t\u00F4i cung c\u1EA5p c\u1EA3 l\u1EDBp h\u1ECDc c\u00E1 nh\u00E2n v\u00E0 l\u1EDBp nh\u00F3m ph\u00F9 h\u1EE3p v\u1EDBi m\u1ECDi tr\u00ECnh \u0111\u1ED9 t\u1EA1i Courtyard Pickleball \u0110\u00E0 N\u1EB5ng. B\u1EA1n c\u00F3 th\u1EC3 \u0111\u1EB7t l\u1EDBp th\u00F4ng qua \u0111\u1ED1i t\u00E1c \u0111\u1EB7t s\u00E2n ho\u1EB7c li\u00EAn h\u1EC7 tr\u1EF1c ti\u1EBFp v\u1EDBi ch\u00FAng t\u00F4i.',
  },
  {
    question: 'Ch\u00EDnh s\u00E1ch h\u1EE7y s\u00E2n v\u00E0 ho\u00E0n ti\u1EC1n nh\u01B0 th\u1EBF n\u00E0o?',
    answer:
      'B\u1EA1n c\u00F3 th\u1EC3 \u0111\u1ED5i l\u1ECBch \u0111\u1EB7t s\u00E2n mi\u1EC5n ph\u00ED tr\u01B0\u1EDBc gi\u1EDD ch\u01A1i \u00EDt nh\u1EA5t 12 ti\u1EBFng. C\u00E1c y\u00EAu c\u1EA7u h\u1EE7y s\u00E2n tr\u01B0\u1EDBc 12 ti\u1EBFng s\u1EBD \u0111\u01B0\u1EE3c ho\u00E0n ti\u1EC1n \u0111\u1EA7y \u0111\u1EE7. C\u00E1c tr\u01B0\u1EDDng h\u1EE3p h\u1EE7y trong v\u00F2ng 12 ti\u1EBFng tr\u01B0\u1EDBc gi\u1EDD ch\u01A1i s\u1EBD kh\u00F4ng \u0111\u01B0\u1EE3c ho\u00E0n ti\u1EC1n.',
  },
  {
    question: 'T\u00F4i n\u00EAn m\u1EB7c g\u00EC khi ch\u01A1i pickleball?',
    answer:
      'B\u1EA1n ch\u1EC9 c\u1EA7n m\u1EB7c trang ph\u1EE5c th\u1EC3 thao tho\u1EA3i m\u00E1i. Ch\u00FAng t\u00F4i c\u00F3 s\u1EB5n ph\u00F2ng thay \u0111\u1ED3 v\u00E0 khu v\u1EF1c v\u1EC7 sinh hi\u1EC7n \u0111\u1EA1i ngay t\u1EA1i c\u01A1 s\u1EDF \u0111\u1EC3 ph\u1EE5c v\u1EE5 b\u1EA1n.',
  },
  {
    question: 'Courtyard Pickleball \u0110\u00E0 N\u1EB5ng c\u00F3 ch\u1ED7 \u0111\u1EADu xe kh\u00F4ng?',
    answer:
      'C\u00F3. Ch\u00FAng t\u00F4i c\u00F3 khu v\u1EF1c \u0111\u1EADu xe m\u00E1y ri\u00EAng t\u1EA1i ch\u1ED7. \u0110\u1ED1i v\u1EDBi \u00F4 t\u00F4, b\u1EA1n c\u00F3 th\u1EC3 \u0111\u1EADu d\u1ECDc l\u1EC1 \u0111\u01B0\u1EDDng ngay ph\u00EDa tr\u01B0\u1EDBc s\u00E2n tr\u00EAn \u0111\u01B0\u1EDDng D\u01B0\u01A1ng Th\u1ECB Xu\u00E2n Qu\u00FD.',
  },
  {
    question: 'T\u00F4i c\u00F3 th\u1EC3 \u0111\u1EB7t s\u00E2n cho nh\u00F3m ho\u1EB7c s\u1EF1 ki\u1EC7n ri\u00EAng t\u1EA1i \u0110\u00E0 N\u1EB5ng kh\u00F4ng?',
    answer:
      'C\u00F3. Ch\u00FAng t\u00F4i nh\u1EADn t\u1ED5 ch\u1EE9c c\u00E1c bu\u1ED5i giao l\u01B0u nh\u00F3m, s\u1EF1 ki\u1EC7n c\u00F4ng ty v\u00E0 gi\u1EA3i \u0111\u1EA5u n\u1ED9i b\u1ED9 t\u1EA1i Courtyard Pickleball. Vui l\u00F2ng li\u00EAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i +84 932150006 ho\u1EB7c nh\u1EAFn tin qua Facebook \u0111\u1EC3 th\u1EA3o lu\u1EADn v\u1EC1 l\u1ECBch tr\u1ED1ng, m\u1EE9c gi\u00E1 v\u00E0 kh\u00E2u t\u1ED5 ch\u1EE9c.',
  },
  {
    question: 'T\u00F4i c\u00F3 th\u1EC3 \u0111\u1EBFn ch\u01A1i m\u00E0 kh\u00F4ng c\u1EA7n \u0111\u1EB7t tr\u01B0\u1EDBc kh\u00F4ng?',
    answer:
      'Ch\u00FAng t\u00F4i lu\u00F4n ch\u00E0o \u0111\u00F3n kh\u00E1ch v\u00E3ng lai n\u1EBFu c\u00F2n s\u00E2n tr\u1ED1ng. Tuy nhi\u00EAn, ch\u00FAng t\u00F4i khuy\u1EBFn kh\u00EDch b\u1EA1n n\u00EAn \u0111\u1EB7t s\u00E2n tr\u01B0\u1EDBc \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o c\u00F3 ch\u1ED7, \u0111\u1EB7c bi\u1EC7t l\u00E0 v\u00E0o c\u00E1c ng\u00E0y cu\u1ED1i tu\u1EA7n.',
  },
];

const faqsByLanguage: Record<Language, FAQ[]> = { en, vi };

export function getFaqs(lang: Language): FAQ[] {
  return faqsByLanguage[lang] ?? faqsByLanguage.en;
}

export const faqs = en;
