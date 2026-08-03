import React from 'react';
import { DESIGN_TOKENS_ELEVATION } from '../../data/designSystem';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'interactive' | 'glass' | 'subtle';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Enterprise Card Component
 * Uses the mathematical elevation and border-radius rules defined in our design system.
 */
export const Card: React.FC<CardProps> = ({
  variant = 'interactive',
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyle =
    'relative rounded-2xl border transition-all duration-300 text-slate-200 overflow-hidden';

  const variantStyles = {
    base: 'border-slate-800/80 bg-slate-900/40 p-6 md:p-8',
    interactive:
      'border-slate-800/80 bg-slate-900/40 p-6 md:p-8 hover:bg-slate-900/70 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5',
    glass:
      'border-slate-700/80 bg-slate-900/60 backdrop-blur-md shadow-lg p-6 md:p-8 hover:border-amber-500/40 hover:bg-slate-900/80',
    subtle: 'border-slate-800/50 bg-slate-950/40 p-5',
  };

  const clickableClass = onClick ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400' : '';

  return (
    <div
      className={`${baseStyle} ${variantStyles[variant]} ${clickableClass} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
};
