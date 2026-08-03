import React from 'react';
import { COMPONENT_GUIDELINES } from '../../data/designSystem';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
}

/**
 * Enterprise Button Component
 * Strictly adheres to Phase 2 design tokens, WCAG 2.2 AA contrast rules, and touch target sizing.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0',
    amber:
      'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/20 active:scale-98',
    secondary:
      'border border-slate-700/80 bg-slate-900/60 text-slate-200 backdrop-blur-md hover:bg-slate-800/80 hover:border-amber-500/40 hover:text-amber-400 active:scale-98',
    outline:
      'border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800/50 hover:border-slate-600 active:scale-98',
    ghost:
      'bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 active:scale-98',
  };

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 min-h-[36px]',
    md: 'px-5 py-2.5 text-sm gap-2 min-h-[44px]',
    lg: 'px-6 py-3.5 text-base gap-2.5 min-h-[48px]',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
