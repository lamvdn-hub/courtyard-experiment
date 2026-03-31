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
      'Clicking any "Book" or "Reserve" button on this page takes you to our booking partner\'s secure site where you can select your date, court, and payment details. Confirmation is sent to your email instantly.',
  },
  {
    question: 'Do I need my own paddle?',
    answer:
      'Not at all. Every booking includes complimentary access to pro-grade Selkirk paddles and premium pickleballs. Just show up and play.',
  },
  {
    question: "What if I'm a beginner?",
    answer:
      'We love beginners. Our daily "Kitchen Sink" hours are reserved exclusively for new players, with optional on-court coaching available. No judgment, just good rallies.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Life happens. You can reschedule any booking up to 12 hours in advance through our booking partner. No fees, no hassle, no questions.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Clean, non-marking court shoes are required. Beyond that, comfortable athletic wear is all you need. We have lockers and a full changing area onsite.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes. We offer free dedicated parking with over 100 spots, plus a covered drop-off zone. Bike racks and EV charging stations are also available.',
  },
  {
    question: 'Can I book for a group or event?',
    answer:
      'Absolutely. We offer group packages for 4+ courts, complete with a private lounge area, catering options, and a dedicated event coordinator. Perfect for corporate outings and parties.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative">
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
