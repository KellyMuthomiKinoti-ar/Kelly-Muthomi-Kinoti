import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: 'slate' | 'amber' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Enterprise Icon Button Component
 * Accessible icon button with explicit aria-label and WCAG 2.2 touch target compliance.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  variant = 'slate',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variantClasses = {
    slate:
      'bg-slate-900/60 border border-slate-700/80 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800/80 active:scale-95',
    amber:
      'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/20 active:scale-95',
    ghost:
      'bg-transparent text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 active:scale-95',
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
