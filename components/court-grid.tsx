'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MapPin, Users, Wifi, Trophy, CircleCheck as CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type CourtStatus = 'available' | 'occupied' | 'selected';

interface Court {
  id: number;
  name: string;
  status: CourtStatus;
  nearbyAmenity: string;
  surface: string;
}

const initialCourts: Court[] = [
  { id: 1, name: 'Court #01', status: 'available', nearbyAmenity: 'Near Main Entrance', surface: 'ProCushion Elite' },
  { id: 2, name: 'Court #02', status: 'available', nearbyAmenity: 'Near Main Entrance', surface: 'ProCushion Elite' },
  { id: 3, name: 'Court #03', status: 'occupied', nearbyAmenity: 'Near Pro Shop', surface: 'ProCushion Elite' },
  { id: 4, name: 'Court #04', status: 'available', nearbyAmenity: 'Near the Social Lounge', surface: 'ProCushion Elite' },
  { id: 5, name: 'Court #05', status: 'occupied', nearbyAmenity: 'Near the Social Lounge', surface: 'ProCushion Elite' },
  { id: 6, name: 'Court #06', status: 'available', nearbyAmenity: 'Near Recovery Zone', surface: 'ProCushion Elite' },
  { id: 7, name: 'Court #07', status: 'occupied', nearbyAmenity: 'Near Spectator Gallery', surface: 'ProCushion Pro' },
  { id: 8, name: 'Court #08', status: 'available', nearbyAmenity: 'Near Spectator Gallery', surface: 'ProCushion Pro' },
  { id: 9, name: 'Court #09', status: 'available', nearbyAmenity: 'Near Coaching Center', surface: 'ProCushion Pro' },
  { id: 10, name: 'Court #10', status: 'occupied', nearbyAmenity: 'Near Coaching Center', surface: 'ProCushion Pro' },
  { id: 11, name: 'Court #11', status: 'available', nearbyAmenity: 'Near VIP Lounge', surface: 'ProCushion Pro' },
  { id: 12, name: 'Court #12', status: 'available', nearbyAmenity: 'Near VIP Lounge', surface: 'ProCushion Pro' },
];

export interface CourtGridHandle {
  highlightCourts: () => void;
}

interface CourtGridProps {
  onCourtConfirmed?: (court: Court) => void;
}

export const CourtGrid = forwardRef<CourtGridHandle, CourtGridProps>(
  function CourtGrid({ onCourtConfirmed }, ref) {
    const [courts, setCourts] = useState<Court[]>(initialCourts);
    const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [highlighting, setHighlighting] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    useImperativeHandle(ref, () => ({
      highlightCourts: () => {
        setHighlighting(true);
        setTimeout(() => setHighlighting(false), 4500);
      },
    }));

    const handleCourtClick = (court: Court) => {
      if (court.status === 'occupied') return;

      setCourts((prev) =>
        prev.map((c) => ({
          ...c,
          status:
            c.id === court.id
              ? 'selected'
              : c.status === 'selected'
              ? 'available'
              : c.status,
        }))
      );

      setSelectedCourt(court);
      setConfirmed(false);
      setDialogOpen(true);
    };

    const handleConfirm = () => {
      setConfirmed(true);
      onCourtConfirmed?.(selectedCourt!);
      setTimeout(() => setDialogOpen(false), 1200);
    };

    const handleDialogClose = (open: boolean) => {
      if (!open && !confirmed) {
        setCourts((prev) =>
          prev.map((c) => ({
            ...c,
            status: c.status === 'selected' ? 'available' : c.status,
          }))
        );
        setSelectedCourt(null);
      }
      setDialogOpen(open);
    };

    return (
      <section id="courts" className="pt-12 pb-24 sm:pt-12 sm:pb-32 relative scroll-mt-16 md:scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Choose Your Court
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              12 regulation courts with pro-grade surfaces. Select an available court to reserve your session.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-white/40" />
                <span className="text-sm text-slate-400">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10 border-2 border-white/10" />
                <span className="text-sm text-slate-400">Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-lime border-2 border-lime" />
                <span className="text-sm text-slate-400">Selected</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {courts.map((court) => (
              <button
                key={court.id}
                onClick={() => handleCourtClick(court)}
                disabled={court.status === 'occupied'}
                className={`relative group aspect-[4/3] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3 ${
                  court.status === 'selected'
                    ? 'bg-lime/20 border-lime shadow-lg shadow-lime/20 animate-pulse-glow'
                    : court.status === 'occupied'
                    ? 'bg-white/[0.03] border-white/[0.06] opacity-50 cursor-not-allowed'
                    : `bg-white/[0.04] border-white/[0.12] hover:bg-white/[0.08] hover:border-white/30 hover:shadow-lg hover:shadow-white/5 cursor-pointer ${
                        highlighting ? 'animate-court-highlight' : ''
                      }`
                }`}
              >
                <svg viewBox="0 0 60 40" className="w-full max-w-[48px] opacity-40" fill="none">
                  <rect x="2" y="2" width="56" height="36" rx="2" stroke="currentColor" strokeWidth="1" className={court.status === 'selected' ? 'text-lime' : 'text-white/30'} />
                  <line x1="30" y1="2" x2="30" y2="38" stroke="currentColor" strokeWidth="0.5" className={court.status === 'selected' ? 'text-lime' : 'text-white/20'} />
                  <line x1="2" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" className={court.status === 'selected' ? 'text-lime/60' : 'text-white/15'} />
                </svg>

                <span className={`text-xs font-semibold tracking-wide ${
                  court.status === 'selected' ? 'text-lime' : 'text-white/80'
                }`}>
                  {court.name}
                </span>

                {court.status === 'occupied' && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/50 font-medium">Live</span>
                  </div>
                )}

                {court.status === 'selected' && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="w-4 h-4 text-lime" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
          <DialogContent className="bg-forest-light border-white/10 text-white max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-white text-xl">
                {confirmed ? 'Court Reserved!' : selectedCourt?.name}
              </DialogTitle>
              <DialogDescription className="text-slate-400">
                {confirmed
                  ? `${selectedCourt?.name} has been added to your session.`
                  : selectedCourt?.nearbyAmenity}
              </DialogDescription>
            </DialogHeader>

            {!confirmed ? (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-lime shrink-0" />
                    <span className="text-sm text-white/70">{selectedCourt?.nearbyAmenity}</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Trophy className="w-4 h-4 text-lime shrink-0" />
                    <span className="text-sm text-white/70">{selectedCourt?.surface}</span>
                  </div>
                </div>

                <Button
                  onClick={handleConfirm}
                  className="w-full bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl h-12 transition-all duration-200"
                >
                  Confirm Selection
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center py-4">
                <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8 text-lime" />
                </div>
                <p className="text-sm text-slate-400">You&apos;re all set. See you on the court.</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    );
  }
);
