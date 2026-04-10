'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import { LanguageProvider, useLanguage } from '@/lib/language-context';
import { StickyNav } from '@/components/sticky-nav';
import { HeroSection } from '@/components/hero-section';
import { StickyBookingBar } from '@/components/sticky-booking-bar';
import { CourtSelection, CourtSelectionHandle } from '@/components/court-selection';
import { CourtsShowcase } from '@/components/courts-showcase';
import { HowItWorks } from '@/components/how-it-works';
import { FAQSection } from '@/components/faq/faq-section';
import { FAQSchema } from '@/components/faq/faq-schema';
import { LocalBusinessSchema } from '@/components/faq/local-business-schema';
import { Footer } from '@/components/footer';
import { BookingInline } from '@/components/booking-inline';
import { TimeSlotSheet } from '@/components/time-slot-sheet';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { SlotSelection } from '@/lib/time-slots';
import { AnimatedSection } from '@/components/animated-section';

function BookingKicker() {
  const { t } = useLanguage();
  return (
    <>
      <p className="text-center text-sm font-semibold tracking-widest uppercase text-lime mb-6">
        {t.cta.courtWaiting}
      </p>
    </>
  );
}

function BookingDisclaimer() {
  const { t } = useLanguage();
  return (
    <p className="text-center text-xs text-white/40 mt-4">
      {t.cta.noAccount}
    </p>
  );
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [confirmedTime, setConfirmedTime] = useState<SlotSelection | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const courtSelectionRef = useRef<CourtSelectionHandle>(null);
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(() => ({ threshold: 0.3 }), []);
  const isBookingVisible = useIntersectionObserver(bookingSectionRef, observerOptions);

  const showStickyBar = !!selectedDate && !isBookingVisible;

  const hasDateAndTime = !!selectedDate && !!confirmedTime?.startSlot && !!confirmedTime?.endSlot;

  const scrollToCourts = useCallback(() => {
    const courtsEl = document.getElementById('courts');
    if (courtsEl) {
      courtsEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        courtSelectionRef.current?.highlightCourts();
      }, 600);
    }
  }, []);

  const scrollToBooking = useCallback(() => {
    const bookingEl = document.getElementById('booking-section');
    if (bookingEl) {
      const top = bookingEl.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleCheckAvailability = useCallback(() => {
    scrollToCourts();
  }, [scrollToCourts]);

  const openTimeSheet = useCallback(() => {
    setSheetOpen(true);
  }, []);

  const handleTimeConfirm = useCallback((selection: SlotSelection) => {
    setConfirmedTime(selection);
    setSheetOpen(false);
  }, []);

  const handleSheetDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
    setConfirmedTime(null);
  }, []);

  return (
    <LanguageProvider>
      <main className="relative">
        <ScrollReset />
        <FAQSchema />
        <LocalBusinessSchema />

        <StickyNav />

        <StickyBookingBar
          visible={showStickyBar}
          selectedDate={selectedDate}
          confirmedTime={confirmedTime}
          onDateClick={scrollToBooking}
          onTimeClick={openTimeSheet}
        />

        <MobileBottomCTA />

        <HeroSection />

        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>

        <AnimatedSection>
          <CourtsShowcase />
        </AnimatedSection>

        <AnimatedSection id="booking-section-anim">
        <div id="booking-section" ref={bookingSectionRef} className="relative z-30 pt-12 pb-0 sm:pt-12 sm:pb-0">
          <div className="max-w-4xl mx-auto px-4">
            <div className="border-t border-white/20 mb-6 sm:mb-8" />
            <BookingKicker />
            <BookingInline
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              confirmedTime={confirmedTime}
              onTimeClick={openTimeSheet}
              onCheckAvailability={handleCheckAvailability}
            />
            <BookingDisclaimer />
          </div>
        </div>

        </AnimatedSection>

        <AnimatedSection>
          <CourtSelection ref={courtSelectionRef} hasDateAndTime={hasDateAndTime} />
        </AnimatedSection>

        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>

        <Footer />

        <TimeSlotSheet
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          onConfirm={handleTimeConfirm}
          onDateChange={handleSheetDateChange}
          selectedDate={selectedDate}
          initialSelection={confirmedTime ?? undefined}
        />
      </main>
    </LanguageProvider>
  );
}
