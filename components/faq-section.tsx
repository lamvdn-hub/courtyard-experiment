'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I complete my booking?',
    answer:
      'Clicking any "Book" or "Reserve" button on this page takes you to our booking partner\'s secure site, where you can select your preferred date, time, and court. After finalizing the payment you will receive the confirmation instantly in your email.',
  },
  {
    question: 'Do I need my own paddle?',
    answer:
      'Not at all. We offer free paddles and even balls. Just show up and play.',
  },
  {
    question: "What if I'm a beginner?",
    answer:
      'No problem at all. We have dedicated social slots for beginners, and even lesson options as well. Please reach out and we\'ll assist you with anything.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand life happens. You can reschedule any booking up to 12 hours in advance through our booking partner with no extra fees.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Comfortable athletic wear is all you need. We have locker rooms and a full changing area available.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes. We have a spacious area dedicated for motorcycles, and the curbside infront of our facility for those with cars.',
  },
  {
    question: 'Can I book for a group or event?',
    answer:
      'Absolutely. Please reach out through our contact details for full support and confirmation.',
  },
];

export function FAQSection() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lime text-sm font-semibold tracking-widest uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-400 text-lg">
            Straight answers. No runaround.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 overflow-hidden data-[state=open]:bg-white/[0.06] data-[state=open]:border-white/[0.12] transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-lime hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
