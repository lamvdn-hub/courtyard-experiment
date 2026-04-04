'use client';

import { useState, forwardRef, useImperativeHandle } from 'react';

type CourtStatus = 'available' | 'occupied' | 'selected' | 'neutral';

interface CourtInfo {
  id: number;
  name: string;
  detail: string;
}

const COURTS: CourtInfo[] = [
  { id: 1, name: 'Court 1', detail: 'Near entrance \u00B7 Covered' },
  { id: 2, name: 'Court 2', detail: 'Interior \u00B7 Covered' },
];

export interface CourtSelectionHandle {
  highlightCourts: () => void;
}

interface CourtSelectionProps {
  hasDateAndTime: boolean;
  onCourtSelected?: (courtId: number | null) => void;
}

function CourtDiagramSVG() {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '55%', height: '70%', opacity: 0.6 }}
    >
      <rect x="4" y="4" width="112" height="72" rx="3" stroke="#ccff00" strokeWidth="1.2" />
      <line x1="4" y1="40" x2="116" y2="40" stroke="#ccff00" strokeWidth="1" strokeDasharray="5,4" />
      <line x1="60" y1="4" x2="60" y2="76" stroke="#ccff00" strokeWidth="0.7" />
      <line x1="4" y1="30" x2="116" y2="30" stroke="#ccff00" strokeWidth="1.2" />
      <line x1="4" y1="50" x2="116" y2="50" stroke="#ccff00" strokeWidth="1.2" />
      <rect x="4" y="30" width="112" height="20" fill="rgba(204,255,0,0.04)" />
    </svg>
  );
}

function StatusBadge({ status }: { status: CourtStatus }) {
  if (status === 'neutral') return null;

  const isAvailable = status === 'available' || status === 'selected';

  return (
    <span
      className="absolute top-[10px] right-[10px] text-[10px] font-medium rounded-[20px] px-2 py-[3px]"
      style={
        isAvailable
          ? {
              background: 'rgba(204,255,0,0.15)',
              color: '#ccff00',
              border: '1px solid rgba(204,255,0,0.25)',
            }
          : {
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.4)',
              border: 'none',
            }
      }
    >
      {isAvailable ? 'Available' : 'Occupied'}
    </span>
  );
}

function ActionButton({
  status,
  onClick,
}: {
  status: CourtStatus;
  onClick?: () => void;
}) {
  if (status === 'neutral') {
    return (
      <div
        className="w-full text-center text-xs font-medium py-2 rounded-lg"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.25)',
          fontSize: '12px',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        Select date & time first
      </div>
    );
  }

  if (status === 'occupied') {
    return (
      <div
        className="w-full text-center"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.25)',
          fontSize: '12px',
          fontWeight: 500,
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        Not available
      </div>
    );
  }

  if (status === 'selected') {
    return (
      <button
        onClick={onClick}
        className="w-full text-center"
        style={{
          background: 'rgba(204,255,0,0.15)',
          border: '1px solid rgba(204,255,0,0.4)',
          color: '#ccff00',
          fontSize: '12px',
          fontWeight: 600,
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        Court selected &#10003;
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full text-center transition-colors hover:brightness-110"
      style={{
        background: 'rgba(204,255,0,0.1)',
        border: '1px solid rgba(204,255,0,0.25)',
        color: '#ccff00',
        fontSize: '12px',
        fontWeight: 500,
        padding: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      Select this court
    </button>
  );
}

export const CourtSelection = forwardRef<CourtSelectionHandle, CourtSelectionProps>(
  function CourtSelection({ hasDateAndTime, onCourtSelected }, ref) {
    const [selectedCourtId, setSelectedCourtId] = useState<number | null>(null);
    const [courtAvailability, setCourtAvailability] = useState<Record<number, boolean>>({
      1: true,
      2: true,
    });

    useImperativeHandle(ref, () => ({
      highlightCourts: () => {
        setCourtAvailability({
          1: Math.random() > 0.3,
          2: Math.random() > 0.3,
        });
      },
    }));

    const getStatus = (courtId: number): CourtStatus => {
      if (!hasDateAndTime) return 'neutral';
      if (!courtAvailability[courtId]) return 'occupied';
      if (selectedCourtId === courtId) return 'selected';
      return 'available';
    };

    const handleCardClick = (courtId: number) => {
      const status = getStatus(courtId);
      if (status === 'occupied' || status === 'neutral') return;

      const newSelected = selectedCourtId === courtId ? null : courtId;
      setSelectedCourtId(newSelected);
      onCourtSelected?.(newSelected);
    };

    return (
      <section id="courts" className="pt-12 pb-24 sm:pt-12 sm:pb-32 relative scroll-mt-16 md:scroll-mt-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '860px' }}>
          <div className="text-center" style={{ marginBottom: '28px' }}>
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: '24px', marginBottom: '6px' }}
            >
              <span className="sm:hidden">Choose Your Court</span>
              <span className="hidden sm:inline" style={{ fontSize: '28px' }}>Choose Your Court</span>
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              Select a court and continue booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {COURTS.map((court) => {
              const status = getStatus(court.id);
              const isOccupied = status === 'occupied';
              const isSelected = status === 'selected';

              return (
                <div
                  key={court.id}
                  onClick={() => handleCardClick(court.id)}
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    background: isSelected ? 'rgba(204,255,0,0.04)' : '#132015',
                    border: isSelected
                      ? '2px solid #ccff00'
                      : isOccupied
                      ? '1px solid rgba(255,255,255,0.07)'
                      : status === 'available'
                      ? '1px solid rgba(204,255,0,0.25)'
                      : '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    opacity: isOccupied ? 0.5 : 1,
                    cursor: isOccupied || status === 'neutral' ? 'default' : 'pointer',
                  }}
                >
                  <div
                    className="relative flex items-center justify-center h-[120px] sm:h-[140px]"
                    style={{
                      background: '#1a3020',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <CourtDiagramSVG />
                    <StatusBadge status={status} />
                  </div>

                  <div
                    className="px-4 sm:px-[18px]"
                    style={{ paddingTop: '16px', paddingBottom: '18px' }}
                  >
                    <p
                      className="text-white"
                      style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}
                    >
                      {court.name}
                    </p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '14px' }}>
                      {court.detail}
                    </p>
                    <ActionButton
                      status={status}
                      onClick={() => handleCardClick(court.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);
