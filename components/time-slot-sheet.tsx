'use client';

import { useEffect, useCallback, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { TriangleAlert as AlertTriangle, ChevronDown, ChevronLeft } from 'lucide-react';
import {
  generateSlots,
  getSlotsByPeriod,
  formatDuration,
  formatSlotRange,
  SlotSelection,
} from '@/lib/time-slots';
import { useTimeSlotSelection } from '@/hooks/use-time-slot-selection';
import { TimeSlotRow } from './time-slot-row';
import { SheetCalendar } from './sheet-calendar';

const DEMO_OCCUPIED = ['09:00', '09:30', '14:00', '15:30', '19:00', '19:30', '20:00'];
const DISMISS_THRESHOLD = 0.35;
const VELOCITY_THRESHOLD = 800;

type SheetView = 'slot-view' | 'calendar-view';

interface TimeSlotSheetProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (selection: SlotSelection) => void;
  onDateChange: (date: Date) => void;
  selectedDate: Date | undefined;
  initialSelection?: SlotSelection;
}

function SlotSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-3 w-16 rounded bg-white/[0.06] animate-pulse" />
      <div className="flex gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="min-h-[44px] h-8 w-12 rounded-lg bg-white/[0.06] animate-pulse shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export function TimeSlotSheet({
  open,
  onClose,
  onConfirm,
  onDateChange,
  selectedDate,
  initialSelection,
}: TimeSlotSheetProps) {
  const [sheetView, setSheetView] = useState<SheetView>('slot-view');
  const [loading, setLoading] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const touchStartY = useRef<number | null>(null);
  const touchTimestamp = useRef<number>(0);
  const sheetRef = useRef<HTMLDivElement>(null);

  const slots = useMemo(() => generateSlots(DEMO_OCCUPIED), []);
  const grouped = useMemo(() => getSlotsByPeriod(slots), [slots]);

  const {
    selection,
    rangeError,
    isComplete,
    handleSlotTap,
    resetSelection,
    confirmSelection,
    setSelection,
  } = useTimeSlotSelection(slots);

  useEffect(() => {
    if (open && initialSelection?.startSlot && initialSelection?.endSlot) {
      setSelection(initialSelection);
    } else if (open) {
      resetSelection();
    }
    if (open) {
      setSheetView('slot-view');
      setLoading(false);
      setDragY(0);
      setIsDragging(false);
      setIsClosing(false);
      setHasEntered(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHasEntered(true);
        });
      });
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleConfirm = useCallback(() => {
    const result = confirmSelection();
    if (result) {
      onConfirm(result);
    }
  }, [confirmSelection, onConfirm]);

  const dismissSheet = useCallback(() => {
    const sheetHeight = sheetRef.current?.offsetHeight ?? window.innerHeight;
    setIsClosing(true);
    setIsDragging(false);
    setDragY(sheetHeight);
    const timeout = setTimeout(() => {
      onClose();
      setIsClosing(false);
      setDragY(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleOverlayClick = useCallback(() => {
    dismissSheet();
  }, [dismissSheet]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchTimestamp.current = Date.now();
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = e.touches[0].clientY - touchStartY.current;
    setDragY(Math.max(0, delta));
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartY.current === null) return;
    const sheetHeight = sheetRef.current?.offsetHeight ?? 400;
    const ratio = dragY / sheetHeight;
    const elapsed = Date.now() - touchTimestamp.current;
    const velocity = (dragY / elapsed) * 1000;

    if (ratio > DISMISS_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
      dismissSheet();
    } else {
      setIsDragging(false);
      setDragY(0);
    }
    touchStartY.current = null;
  }, [dragY, dismissSheet]);

  const handleDateChipTap = useCallback(() => {
    if (selectedDate) {
      setSheetView('calendar-view');
    }
  }, [selectedDate]);

  const handleCalendarBack = useCallback(() => {
    setSheetView('slot-view');
  }, []);

  const handleDateConfirm = useCallback(
    (date: Date) => {
      onDateChange(date);
      resetSelection();
      setSheetView('slot-view');
      setLoading(true);
      setTimeout(() => setLoading(false), 600);
    },
    [onDateChange, resetSelection]
  );

  if (!open) return null;

  const hasSelection = !!selection.startSlot;
  const hasRange = !!selection.startSlot && !!selection.endSlot;
  const sheetHeight = sheetRef.current?.offsetHeight ?? 400;
  const dragProgress = Math.min(dragY / sheetHeight, 1);
  const overlayOpacity = 1 - dragProgress * 0.8;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{
          opacity: isClosing ? 0 : hasEntered ? overlayOpacity : 1,
          transition: isDragging ? 'none' : 'opacity 0.3s ease-out',
        }}
        onClick={handleOverlayClick}
      />

      <div
        ref={sheetRef}
        className="absolute bottom-0 left-0 right-0"
        style={{
          transform: hasEntered
            ? `translateY(${dragY}px)`
            : 'translateY(100%)',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="bg-forest-light rounded-t-2xl border-t border-white/10 shadow-[0_-16px_60px_rgba(0,0,0,0.5)]">
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-9 h-[3px] rounded-full bg-white/20" />
          </div>

          {sheetView === 'slot-view' ? (
            <>
              <div className="px-5 pb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Pick a time slot</span>
                {selectedDate && (
                  <button
                    onClick={handleDateChipTap}
                    className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-lime/25 text-white/60 hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    {format(selectedDate, 'EEE, MMM d')}
                    <ChevronDown className="w-2.5 h-2.5 text-white/50" />
                  </button>
                )}
              </div>

              <div className="px-5 py-4 space-y-4">
                {loading ? (
                  <>
                    <SlotSkeleton />
                    <SlotSkeleton />
                    <SlotSkeleton />
                  </>
                ) : (
                  <>
                    <TimeSlotRow
                      label="Morning"
                      slots={grouped.morning}
                      selection={selection}
                      onSlotTap={handleSlotTap}
                    />
                    <TimeSlotRow
                      label="Afternoon"
                      slots={grouped.afternoon}
                      selection={selection}
                      onSlotTap={handleSlotTap}
                    />
                    <TimeSlotRow
                      label="Evening"
                      slots={grouped.evening}
                      selection={selection}
                      onSlotTap={handleSlotTap}
                    />
                  </>
                )}
              </div>

              {hasSelection && !loading && (
                <div className="mx-5 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  {rangeError ? (
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-xs text-amber-400">
                        A slot in this range is unavailable. Adjust your selection.
                      </span>
                    </div>
                  ) : hasRange ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Selected</span>
                      <span className="text-sm font-medium text-lime">
                        {formatSlotRange(selection.startSlot!, selection.endSlot!)}
                        {' \u00B7 '}
                        {formatDuration(selection.startSlot!, selection.endSlot!)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Selected</span>
                      <span className="text-xs text-white/50">Tap an end time to complete</span>
                    </div>
                  )}
                </div>
              )}

              <div className="px-5 pt-4 pb-6">
                <button
                  onClick={handleConfirm}
                  disabled={!isComplete || loading}
                  className={`w-full h-11 rounded-[10px] text-[13px] font-medium transition-all duration-200 ${
                    isComplete && !loading
                      ? 'bg-lime text-forest hover:bg-lime-dim active:scale-[0.98]'
                      : 'bg-lime/40 text-forest/60 cursor-default'
                  }`}
                >
                  Confirm time
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="px-5 pb-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleCalendarBack}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.12] transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
                  </button>
                  <span className="text-[13px] font-medium text-white">Select a date</span>
                </div>
                {selectedDate && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/60">
                    {format(selectedDate, 'EEE, MMM d')}
                  </span>
                )}
              </div>

              {selectedDate && (
                <SheetCalendar
                  confirmedDate={selectedDate}
                  onConfirm={handleDateConfirm}
                  onBack={handleCalendarBack}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
