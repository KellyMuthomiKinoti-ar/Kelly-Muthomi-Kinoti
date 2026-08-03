import React from 'react';

export interface StatusBadgeProps {
  status?: 'available' | 'busy' | 'away' | 'offline';
  label?: string;
  className?: string;
}

/**
 * Enterprise Status Badge Component
 * Displays availability status with animated pulse dot for real-time visual feedback.
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status = 'available',
  label = 'Available for Full-Stack & EdTech Roles',
  className = '',
}) => {
  const statusConfig = {
    available: {
      dotColor: 'bg-emerald-400',
      pulseColor: 'bg-emerald-400',
      badgeBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300',
    },
    busy: {
      dotColor: 'bg-amber-400',
      pulseColor: 'bg-amber-400',
      badgeBg: 'bg-amber-950/40 border-amber-500/30 text-amber-300',
    },
    away: {
      dotColor: 'bg-cyan-400',
      pulseColor: 'bg-cyan-400',
      badgeBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300',
    },
    offline: {
      dotColor: 'bg-slate-400',
      pulseColor: 'bg-slate-400',
      badgeBg: 'bg-slate-900 border-slate-700 text-slate-400',
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${config.badgeBg} ${className}`}
      role="status"
      aria-label={`Status: ${label}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.pulseColor}`}
        />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dotColor}`} />
      </span>
      <span>{label}</span>
    </div>
  );
};
