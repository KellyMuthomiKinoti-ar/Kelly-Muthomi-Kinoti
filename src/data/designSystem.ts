/**
 * ============================================================================
 * ENTERPRISE BRAND & DESIGN SYSTEM TOKENS
 * ============================================================================
 * 
 * Inspired by Apple, Vercel, Stripe, Linear, GitHub, and Microsoft Design Systems.
 * Provides a standardized, mathematically scaled token architecture for color,
 * typography, spacing, elevation, border-radius, and motion language.
 * 
 * All values conform to WCAG 2.2 AA accessibility contrast rules and
 * responsive mobile-to-desktop design patterns.
 */

export interface ColorToken {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  wcagContrastOnDark: string;
  usage: string;
}

export interface TypographyToken {
  scale: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
  desktopSize: string;
  usage: string;
}

export interface SpacingToken {
  step: string;
  value: string;
  rem: string;
  usage: string;
}

export interface ElevationToken {
  level: string;
  boxShadow: string;
  borderClass: string;
  usage: string;
}

export interface MotionToken {
  name: string;
  duration: string;
  easing: string;
  usage: string;
}

export interface ComponentGuideline {
  name: string;
  description: string;
  baseClasses: string;
  interactiveStates: string;
  accessibilityRules: string;
}

export interface BrandGuideline {
  principle: string;
  summary: string;
  doRule: string;
  dontRule: string;
}

/**
 * COLOR PALETTE & VARIABLES
 * Sophisticated neutral slate background with warm amber accents,
 * emerald success signals, and royal cyan interactive accents.
 */
export const DESIGN_TOKENS_COLORS: Record<string, ColorToken[]> = {
  neutrals: [
    {
      name: 'Slate 950 (Canvas Base)',
      hex: '#020617',
      rgb: '2, 6, 23',
      hsl: '222, 84%, 5%',
      wcagContrastOnDark: 'N/A (Base)',
      usage: 'Primary dark mode canvas background'
    },
    {
      name: 'Slate 900 (Surface High)',
      hex: '#0f172a',
      rgb: '15, 23, 42',
      hsl: '222, 47%, 11%',
      wcagContrastOnDark: '1.2:1 (Surface)',
      usage: 'Card backgrounds, modal containers, and navigation bars'
    },
    {
      name: 'Slate 800 (Border & Divider)',
      hex: '#1e293b',
      rgb: '30, 41, 59',
      hsl: '215, 32%, 18%',
      wcagContrastOnDark: '1.8:1 (Border)',
      usage: 'Subtle borders, separators, and hover background surfaces'
    },
    {
      name: 'Slate 300 (Primary Body Text)',
      hex: '#cbd5e1',
      rgb: '203, 213, 225',
      hsl: '213, 27%, 84%',
      wcagContrastOnDark: '12.4:1 (AAA)',
      usage: 'Main descriptive paragraphs, list items, and descriptions'
    },
    {
      name: 'Slate 50 (High-Contrast Heading)',
      hex: '#f8fafc',
      rgb: '248, 250, 252',
      hsl: '210, 40%, 98%',
      wcagContrastOnDark: '18.1:1 (AAA)',
      usage: 'H1–H6 section titles, brand labels, and prominent statistics'
    }
  ],
  accents: [
    {
      name: 'Amber 400 (Brand Primary)',
      hex: '#fbbf24',
      rgb: '251, 191, 36',
      hsl: '43, 96%, 56%',
      wcagContrastOnDark: '9.8:1 (AAA)',
      usage: 'Primary CTA buttons, highlight text, and interactive badges'
    },
    {
      name: 'Amber 500 (Brand Active/Hover)',
      hex: '#f59e0b',
      rgb: '245, 158, 11',
      hsl: '38, 92%, 50%',
      wcagContrastOnDark: '7.6:1 (AAA)',
      usage: 'Hover states for amber controls and active tab underlines'
    },
    {
      name: 'Cyan 400 (Tech & STEM Accent)',
      hex: '#22d3ee',
      rgb: '34, 211, 238',
      hsl: '188, 86%, 53%',
      wcagContrastOnDark: '9.4:1 (AAA)',
      usage: 'EdTech tags, research publications, and interactive charts'
    },
    {
      name: 'Emerald 400 (Success / Live Status)',
      hex: '#34d1bf',
      rgb: '52, 211, 153',
      hsl: '158, 64%, 52%',
      wcagContrastOnDark: '9.1:1 (AAA)',
      usage: 'Availability status indicators, live deployment links, and success toasts'
    }
  ]
};

/**
 * TYPOGRAPHY SCALE (Major Second / Perfect Fourth scaling)
 */
export const DESIGN_TOKENS_TYPOGRAPHY: TypographyToken[] = [
  {
    scale: 'Display Hero (H1-Hero)',
    fontSize: '2.5rem (40px)',
    lineHeight: '1.15',
    letterSpacing: '-0.03em',
    fontWeight: '800 (ExtraBold)',
    desktopSize: '4.25rem (68px)',
    usage: 'Main landing hero titles and prominent value propositions'
  },
  {
    scale: 'Section Heading (H2)',
    fontSize: '1.875rem (30px)',
    lineHeight: '1.25',
    letterSpacing: '-0.02em',
    fontWeight: '700 (Bold)',
    desktopSize: '2.5rem (40px)',
    usage: 'Primary section titles (Projects, About, Experience, Skills)'
  },
  {
    scale: 'Sub-section Title (H3)',
    fontSize: '1.25rem (20px)',
    lineHeight: '1.35',
    letterSpacing: '-0.01em',
    fontWeight: '600 (SemiBold)',
    desktopSize: '1.5rem (24px)',
    usage: 'Project titles, job positions, and modular feature cards'
  },
  {
    scale: 'Body Primary (P1)',
    fontSize: '1rem (16px)',
    lineHeight: '1.65',
    letterSpacing: '0em',
    fontWeight: '400 (Regular)',
    desktopSize: '1.125rem (18px)',
    usage: 'Core paragraph copy, case study text, and teaching philosophy'
  },
  {
    scale: 'Caption & Meta (Small)',
    fontSize: '0.875rem (14px)',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    fontWeight: '500 (Medium)',
    desktopSize: '0.875rem (14px)',
    usage: 'Timestamps, badge tags, form hints, and footer metadata'
  }
];

/**
 * SPACING & MARGIN SCALE (4px Base Grid)
 */
export const DESIGN_TOKENS_SPACING: SpacingToken[] = [
  { step: '1', value: '4px', rem: '0.25rem', usage: 'Tight icon-to-label gaps and badge inner vertical padding' },
  { step: '2', value: '8px', rem: '0.5rem', usage: 'Small tag padding and button icon spacing' },
  { step: '4', value: '16px', rem: '1rem', usage: 'Standard inner card padding and control spacing' },
  { step: '6', value: '24px', rem: '1.5rem', usage: 'Card inner padding on desktop and group gaps' },
  { step: '8', value: '32px', rem: '2rem', usage: 'Section headers separation and hero subtitle margins' },
  { step: '12', value: '48px', rem: '3rem', usage: 'Between primary modular cards and footer sections' },
  { step: '20', value: '80px', rem: '5rem', usage: 'Desktop vertical section separation padding (py-20 / py-24)' }
];

/**
 * ELEVATION & SHADOW SYSTEM
 */
export const DESIGN_TOKENS_ELEVATION: ElevationToken[] = [
  {
    level: 'Surface 0 (Base Canvas)',
    boxShadow: 'none',
    borderClass: 'border-slate-900',
    usage: 'Root background layer'
  },
  {
    level: 'Surface 1 (Card / Pill)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
    borderClass: 'border border-slate-800/80',
    usage: 'Interactive cards, filter tabs, and skill chips'
  },
  {
    level: 'Surface 2 (Hover / Elevated Card)',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
    borderClass: 'border border-slate-700/80 hover:border-amber-500/40',
    usage: 'Card hover state and active project modals'
  },
  {
    level: 'Surface 3 (Modal Overlay & Glassmorphism)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(251, 191, 36, 0.15)',
    borderClass: 'border border-slate-700/90 backdrop-blur-xl bg-slate-900/90',
    usage: 'Floating dialogs, sticky navigation headers, and command palette'
  }
];

/**
 * MOTION & ANIMATION TOKENS
 */
export const DESIGN_TOKENS_MOTION: MotionToken[] = [
  {
    name: 'Fast Interactive (Hover / Focus)',
    duration: '150ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    usage: 'Button color transitions, chip highlights, and focus rings'
  },
  {
    name: 'Medium Enter (Card Reveal / Modal Open)',
    duration: '300ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1) (Ease-Out Quint)',
    usage: 'Modal entrances, menu expansion, and accordion drawers'
  },
  {
    name: 'Smooth Spring (Framer Motion Hero & Scroll)',
    duration: '500ms – 700ms',
    easing: 'spring (stiffness: 100, damping: 20)',
    usage: 'Hero title staggered fade-ins and scroll-triggered section reveal'
  }
];

/**
 * COMPONENT ARCHITECTURAL GUIDELINES
 */
export const COMPONENT_GUIDELINES: ComponentGuideline[] = [
  {
    name: 'Primary Action Button (CTA)',
    description: 'Used for main conversion actions such as "Explore Projects", "Book Consultation", and "Download Resume".',
    baseClasses: 'inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950',
    interactiveStates: 'hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    accessibilityRules: 'Minimum touch target 44×44px; text color slate-950 maintains 9.8:1 AAA contrast against amber background.'
  },
  {
    name: 'Secondary Action Button / Glass Pill',
    description: 'Used for secondary actions, filter buttons, and GitHub/Demo links.',
    baseClasses: 'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border border-slate-700/80 bg-slate-900/60 text-slate-200 backdrop-blur-md',
    interactiveStates: 'hover:bg-slate-800/80 hover:border-amber-500/40 hover:text-amber-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
    accessibilityRules: 'Clear visible border for high-contrast mode; label always single-line without truncation.'
  },
  {
    name: 'Enterprise Feature / Project Card',
    description: 'Container for projects, work experience cards, and interactive educational modules.',
    baseClasses: 'group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm p-6 md:p-8 transition-all duration-300',
    interactiveStates: 'hover:bg-slate-900/70 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5',
    accessibilityRules: 'Inner padding (24-32px) matches or exceeds corner radius ratio (16px); heading tag hierarchy strictly preserved.'
  },
  {
    name: 'Status Badge / Tech Chip',
    description: 'Compact tags for technologies (React, TypeScript, SPSS) and status pills.',
    baseClasses: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-300 border border-slate-700/50',
    interactiveStates: 'hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-colors',
    accessibilityRules: 'Never wrap text onto multiple lines; ensure sufficient color contrast.'
  }
];

/**
 * BRAND ARCHITECTURAL PRINCIPLES
 */
export const BRAND_GUIDELINES: BrandGuideline[] = [
  {
    principle: '01. Purposeful Visual Contrast',
    summary: 'Every visual element must justify its place through typography, spatial rhythm, or color meaning.',
    doRule: 'Use warm amber (#fbbf24) for high-value interactive CTAs and emerald (#34d1bf) for live availability and verified metrics.',
    dontRule: 'Never use arbitrary gradients, low-contrast cyan-on-slate text, or meaningless glowing drop-shadows.'
  },
  {
    principle: '02. Mathematical Radius Scaling',
    summary: 'Nested rounded containers must follow the Inner Radius = Outer Radius - Distance rule.',
    doRule: 'For a 24px outer card with 8px inner padding, use a 16px radius for child image containers.',
    dontRule: 'Never combine a thick colored accent border with oversized rounded corners that clash.'
  },
  {
    principle: '03. Desktop-First Precision, Mobile-First Responsiveness',
    summary: 'Layouts scale smoothly from 320px mobile viewports up to 1920px+ ultra-wide monitors.',
    doRule: 'Use responsive Tailwind prefixes (sm:, md:, lg:, xl:) with constrained max-w-7xl wrappers.',
    dontRule: 'Never use fixed pixel widths that overflow or hide content on small mobile screens.'
  },
  {
    principle: '04. Strict WCAG 2.2 AA Compliance',
    summary: 'Universal accessibility for educators, students, recruiters, and engineering leaders.',
    doRule: 'Ensure all body text has at least 4.5:1 contrast and interactive controls have visible focus rings.',
    dontRule: 'Never suppress keyboard focus outlines or rely solely on color to communicate state.'
  }
];
