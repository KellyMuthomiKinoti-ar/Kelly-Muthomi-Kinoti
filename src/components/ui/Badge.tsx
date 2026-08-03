import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'slate' | 'amber' | 'emerald' | 'cyan' | 'purple' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Enterprise Badge Component
 * Single-line labels with balanced inner padding and border contrast.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'slate',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center gap-1.5 font-semibold rounded-full whitespace-nowrap select-none transition-colors';

  const variantClasses = {
    slate: 'bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:border-slate-600',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20',
    outline: 'bg-transparent text-slate-300 border border-slate-700 hover:border-amber-400/40 hover:text-amber-300',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
