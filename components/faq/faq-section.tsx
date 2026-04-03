'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/lib/language-context';
import { getFaqs } from './faq-data';

export function FAQSection() {
  const { lang, t } = useLanguage();
  const faqItems = getFaqs(lang);

  return (
    <section id="faq" className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lime text-sm font-semibold tracking-widest uppercase mb-4">
            {t.faq.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {t.faq.header}
          </h2>
          <p className="text-slate-400 text-lg">
            {t.faq.subheader}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((faq, index) => (
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
