import { Project, Experience, Certification, EducationItem, SkillCategoryGroup, Interest } from '../types';

export const PERSONAL_INFO = {
  name: 'KELLY MUTHOMI KINOTI',
  initials: 'KMK',
  profileImage: 'https://lh3.googleusercontent.com/d/1OJiIK5LYfwZscXDruBn-Hnz1P87EX24x',
  tscNo: 'Licensed & Registered',
  headline: 'TSC-Registered Educator | Mathematics & Business Studies Teacher | Computer Studies Instructor | Full-Stack Web Developer | WordPress Specialist | Academic Researcher & Data Analyst',
  shortTitle: 'Full-Stack Developer & STEM Educator',
  location: 'Nairobi, Kenya',
  phone: '+254 708 220 323',
  phoneClean: '+254708220323',
  email: 'kellymuthomi22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kelly-muthomi/',
  facebook: 'https://www.facebook.com/kelly.mnaa/',
  twitter: 'https://x.com/kellymnaaa',
  tiktok: 'https://www.tiktok.com/@kellymuthomikinoti',
  instagram: 'https://www.instagram.com/kellymuthomikinoti/',
  github: 'https://github.com/kellymuthomi',
  summary: 'Highly motivated and results-driven TSC-registered educator, full-stack web developer, academic researcher, and data analyst with over 6+ years of professional experience spanning education, software development, digital transformation, and academic research support. Possesses a strong academic foundation from Moi University and extensive expertise in Mathematics, Business Studies, Computer Studies, web application development, educational technology integration, statistical analysis, and digital project management. Skilled in PHP, MySQL, JavaScript, HTML5, CSS3, WordPress, SPSS, SAS, STATA, and modern AI-assisted development platforms (Lovable).',
  livePortfolios: [
    { name: 'StyledKid E-Commerce', url: 'https://styledkid.co.ke' },
    { name: 'WildLens Adventure', url: 'https://wildlensadventure.com' },
    { name: 'Menwe Junior School Web App', url: 'https://menwe-school.vercel.app/' },
  ]
};

export const CAREER_MILESTONES = [
  {
    value: '6+',
    label: 'Years Combined Exp.',
    detail: 'Full-Stack Web Engineering & STEM Pedagogy'
  },
  {
    value: 'Full-Stack',
    label: 'Web Architect',
    detail: 'PHP, React, MySQL, WordPress & EdTech Applications'
  },
  {
    value: 'TSC Licensed',
    label: 'STEM Educator',
    detail: 'Mathematics, Computer Studies & Business Education'
  },
  {
    value: 'KEMI',
    label: 'Certified Admin',
    detail: 'KEMIS Education Data & System Operations'
  },
  {
    value: 'Statistical',
    label: 'Research Analyst',
    detail: 'SPSS, SAS, STATA & Advanced Data Modeling'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'styledkid',
    title: 'StyledKid',
    subtitle: 'Full-Stack E-Commerce Web Platform',
    category: 'e-commerce',
    link: 'https://styledkid.co.ke',
    githubUrl: 'https://github.com/kellymuthomi/styledkid-ecommerce',
    displayUrl: 'styledkid.co.ke',
    techStack: ['PHP', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'WordPress', 'XAMPP'],
    features: [
      'Relational MySQL schema architecture for complex product catalogs',
      'Custom PHP backend inventory & content management workflows',
      'Dynamic product showcase with fast filtering and search capabilities',
      'Responsive, modern UI designed for high mobile conversion',
      'Local server testing & optimization via XAMPP development stack'
    ],
    description: 'A robust, custom full-stack e-commerce solution built with PHP, MySQL, and WordPress. Designed to handle inventory management, product visualization, and high-converting checkout flows with a responsive front-end experience.',
    badge: 'Live E-Commerce',
    architecture: {
      frontend: 'Responsive HTML5/CSS3/JavaScript (ES6+) with AJAX Cart & Instant Search',
      backend: 'Custom PHP 8+ object-oriented backend & WordPress e-commerce engine',
      database: 'Normalized relational MySQL database with indexed product SKU & order tables',
      devops: 'XAMPP local staging stack, Linux Apache production server with SSL encryption & M-Pesa webhook integration'
    },
    challengesSolved: [
      {
        title: 'Real-Time Inventory Synchronization',
        solution: 'Engineered database row-level locking and transactional SQL queries to prevent overselling during high-concurrency checkout bursts.'
      },
      {
        title: 'Mobile Page Load Optimization',
        solution: 'Implemented WebP image compression, asset minification, and browser caching to achieve <1.1s initial First Contentful Paint on 3G/4G mobile networks.'
      }
    ],
    keyMetrics: [
      { label: 'LCP Performance', value: '0.9s' },
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Mobile Share', value: '82%' },
      { label: 'Database Queries', value: '<40ms avg' }
    ]
  },
  {
    id: 'wildlens',
    title: 'WildLens Adventure',
    subtitle: 'Safari & Tourism Booking Engine',
    category: 'web-app',
    link: 'https://wildlensadventure.com',
    githubUrl: 'https://github.com/kellymuthomi/wildlens-safari-engine',
    displayUrl: 'wildlensadventure.com',
    techStack: ['WordPress', 'Custom PHP', 'JavaScript', 'HTML5', 'CSS3', 'SEO Tools'],
    features: [
      'Custom WordPress architecture customized for safari package management',
      'Integrated tour booking & inquiry capture system',
      'Dynamic lead-capture forms with automated response routing',
      'Optimized for speed, high performance, and seamless mobile usability',
      'Comprehensive search engine optimization (SEO) implementation'
    ],
    description: 'An interactive booking engine and digital showcase for safari and tourism experiences. Features custom package management, inquiry forms, and high performance tuning.',
    badge: 'Live Travel Tech',
    architecture: {
      frontend: 'Dynamic JavaScript booking widget with interactive package filters and pricing calculators',
      backend: 'Custom PHP routing layer with automated inquiry distribution and SMTP email notification dispatchers',
      database: 'MySQL database storing tour itineraries, seasonal pricing tiers, and traveler inquiries',
      devops: 'Cloud Linux hosting with Cloudflare Edge CDN caching & automated SEO schema generation'
    },
    challengesSolved: [
      {
        title: 'Dynamic Multi-Day Safari Package Pricing',
        solution: 'Architected a flexible JSON-backed pricing matrix in PHP that dynamically calculates group discounts and seasonal lodge tariffs in real time.'
      },
      {
        title: 'Lead Capture & Spam Mitigation',
        solution: 'Integrated server-side rate limiting and custom honeypot validation without friction, reducing spam inquiries by 98% while improving real conversion.'
      }
    ],
    keyMetrics: [
      { label: 'SEO Score', value: '98/100' },
      { label: 'Inquiry Lift', value: '+45%' },
      { label: 'CDN Hit Ratio', value: '94%' },
      { label: 'Spam Reduction', value: '98%' }
    ]
  },
  {
    id: 'menwe-school',
    title: 'Menwe Junior School',
    subtitle: 'School Management & Digital Visibility Web App',
    category: 'edtech',
    link: 'https://menwe-school.vercel.app/',
    githubUrl: 'https://github.com/kellymuthomi/menwe-school-webapp',
    displayUrl: 'menwe-school.vercel.app',
    techStack: ['Next.js / React', 'Web Architecture', 'Vercel Cloud Hosting', 'UI/UX Design'],
    features: [
      'Modern web app engineered to boost institutional digital presence',
      'Streamlined parent, teacher, and student information access portal',
      'Supports institutional ICT adoption and digital record communication',
      'Ultra-fast load times deployed on Vercel cloud edge network',
      'Clean, accessible, and responsive user experience for all stakeholders'
    ],
    description: 'A Next.js & React-powered web application built to digitize school communication, showcase academic excellence, and facilitate smooth information sharing between parents, teachers, and administrators.',
    badge: 'Live EdTech',
    architecture: {
      frontend: 'Next.js App Router with React Server Components, Tailwind CSS styling, and accessible responsive navigation',
      backend: 'Next.js Serverless API routes and edge functions for institutional announcements & contact workflows',
      database: 'JSON/headless CMS data architecture for low-latency academic calendar & curriculum data delivery',
      devops: 'Vercel Global Edge Network deployment with automated GitHub CI/CD pipeline and instant preview branches'
    },
    challengesSolved: [
      {
        title: 'Low-Bandwidth CBC Parent Portal Access',
        solution: 'Optimized client bundle sizes and implemented static site generation (SSG) so parents can load school schedules and notices even in low-bandwidth rural areas.'
      },
      {
        title: 'Institutional Data Security & KEMIS Alignment',
        solution: 'Structured clear public-facing academic portals while keeping KEMIS Ministry of Education data strictly secure in separate administrative channels.'
      }
    ],
    keyMetrics: [
      { label: 'PageLoad Time', value: '0.4s' },
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Edge Locations', value: 'Global CDN' },
      { label: 'Parent Reach', value: '100%' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'menwe-educator',
    role: 'Educator & KEMIS Data Administrator',
    organization: 'Menwe Junior School',
    period: 'January 2025 – Present',
    isCurrent: true,
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Deliver competency-based instruction (CBC) in Mathematics, Business Studies, and Computer Studies for junior secondary learners.',
      'Develop learner-centered lesson plans, conduct practical ICT lab sessions, and foster digital literacy across student body.',
      'Lead KEMIS (Kenya Education Management Information System) data administration, overseeing institution modules, learner profiles, transfers, and institutional analytics.',
      'Architected, built, and deployed the school\'s web application (menwe-school.vercel.app) to enhance institutional digital visibility and ICT integration.'
    ],
    highlights: [
      'Fully digitized institutional web presence on Vercel cloud',
      'Pioneered KEMIS learner transfer & profile tracking workflow',
      'Implemented hands-on computer science & STEM workshops'
    ],
    techAndTools: ['CBC STEM Pedagogy', 'KEMIS Admin', 'Next.js', 'Vercel', 'Computer Science Teaching']
  },
  {
    id: 'lead-fullstack-researcher',
    role: 'Lead Full-Stack Web Developer & Academic Researcher',
    organization: 'Freelance / Global Academic Platforms',
    period: 'April 2018 – Present',
    isCurrent: true,
    location: 'Nairobi / Global Remote',
    responsibilities: [
      'Design, develop, and maintain custom web applications, e-commerce platforms (StyledKid), and booking engines (WildLens Adventure) using PHP, MySQL, JavaScript, HTML5, CSS3, and WordPress.',
      'Implement REST API integrations, database-driven workflows, website speed/SEO optimization, and AI-assisted development tools including Lovable.',
      'Conduct quantitative and qualitative research analysis, statistical modeling (SPSS, SAS, STATA, Advanced Excel), and survey design for academic and professional projects.',
      'Prepare academic and technical documentation adhering to APA, MLA, Harvard, IEEE, and Chicago citation standards with rigorous proofreading and quality assurance.'
    ],
    highlights: [
      'Engineered scalable e-commerce and tour booking platforms for international clients',
      'Delivered quantitative and qualitative statistical analysis for 100+ research projects',
      'Accelerated software delivery using modern AI-powered development tools (Lovable)'
    ],
    techAndTools: ['Full-Stack Web Dev', 'PHP & WordPress', 'MySQL', 'SPSS / SAS / STATA', 'Lovable AI', 'APA / IEEE / Harvard']
  },
  {
    id: 'secondary-educator',
    role: 'Mathematics, Business Studies & Computer Studies Educator',
    organization: 'Secondary Schools (Kandie Secondary School & Eldoret Central Secondary School)',
    period: 'September 2018 – 2022',
    isCurrent: false,
    location: 'Kenya',
    responsibilities: [
      'Delivered rigorous secondary school curricula for Mathematics, Business Studies, and Computer Studies across KCSE levels.',
      'Instructed students in foundational programming logic, software applications, hardware diagnostics, maintenance, and overall ICT literacy.',
      'Managed student academic databases, continuous assessments (CATs), terminal reports, and national assessment tracking systems.',
      'Mentored STEM and computer clubs, encouraging youth innovation and practical technology application.'
    ],
    highlights: [
      'Sustained high pass rates in national KCSE Mathematics and Business examinations',
      'Built custom spreadsheet tracking tools for student assessment records',
      'Guided student ICT club projects in software basic logic'
    ],
    techAndTools: ['KCSE Curriculum', 'Programming Logic', 'Assessment Analytics', 'MS Excel', 'Database Management']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'tsc-license',
    title: 'Registered Teacher License',
    regNumber: 'TSC Licensed Educator',
    issuingBody: 'Teachers Service Commission (TSC), Kenya',
    badge: 'TSC Certified',
    description: 'Official government license authorizing professional teaching in Kenya for Mathematics, Business Studies, and Computer Science disciplines.',
    keyHighlights: [
      'Official Active & Registered Teacher License',
      'Authorized for Mathematics & Business Studies',
      'Certified for Secondary & Junior Secondary Computer Studies',
      'CBC (Competency Based Curriculum) aligned instructor'
    ]
  },
  {
    id: 'kemis-cert',
    title: 'KEMIS Certified Administrator',
    regNumber: 'Certified June 2026',
    issuingBody: 'Kenya Education Management Institute (KEMI), Ministry of Education (June 2026)',
    badge: 'KEMI Certified',
    description: 'Certified by KEMI (Ministry of Education, June 2026) in managing the Kenya Education Management Information System. Specialized in learner transfers, institution module configuration, administrative user access, and reporting analytics.',
    topics: [
      'KEMIS System Fundamentals & Architecture',
      'Institution Module Configuration (Theory & Practicals)',
      'Learner Module & Learner Transfer Procedures (Theory & Practicals)',
      'Reporting Module & Institutional Analytics (Theory & Practicals)',
      'Administrative User Management & Access Control'
    ],
    keyHighlights: [
      'Certified by Ministry of Education / KEMI (June 2026)',
      'Comprehensive mastery of student transfer protocols',
      'Advanced reporting and institutional metrics analytics',
      'Administrative user access and data security management'
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'moi-uni',
    qualification: 'Bachelor of Arts in Education (Business Studies & Mathematics)',
    institution: 'Moi University, Kenya',
    year: 'Graduated 2020',
    description: 'Comprehensive undergraduate degree combining rigorous pedagogical methodology, advanced Mathematics (Calculus, Statistics, Algebra), and Business Economics & Accounting.'
  },
  {
    id: 'chugu-boys',
    qualification: 'Kenya Certificate of Secondary Education (KCSE)',
    institution: 'Chugu Boys High School',
    year: 'Completed 2012',
    description: 'Secondary education with high achievement in Mathematics, Business Studies, and Sciences.'
  },
  {
    id: 'chogoria-primary',
    qualification: 'Kenya Certificate of Primary Education (KCPE)',
    institution: 'Chogoria Boys Boarding Primary School',
    year: 'Completed 2006',
    description: 'Foundational primary education certificate.'
  }
];

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'web-dev',
    title: 'Software Engineering & Web Development',
    description: 'Full-stack web applications, relational databases, APIs, and modern CMS platforms',
    icon: 'Code',
    skills: [
      { name: 'PHP', category: 'Backend Language', level: 95, badgeType: 'primary' },
      { name: 'MySQL Relational Schema', category: 'Database', level: 92, badgeType: 'primary' },
      { name: 'JavaScript (ES6+) & TypeScript', category: 'Frontend', level: 90, badgeType: 'primary' },
      { name: 'React & Next.js Frameworks', category: 'Frontend', level: 88, badgeType: 'primary' },
      { name: 'HTML5 & Tailwind CSS', category: 'UI / Styling', level: 95, badgeType: 'primary' },
      { name: 'WordPress Core Development', category: 'CMS Architecture', level: 94, badgeType: 'primary' },
      { name: 'RESTful APIs & M-Pesa Integration', category: 'Integrations', level: 90, badgeType: 'highlight' },
      { name: 'Git & GitHub Version Control', category: 'Dev Tools', level: 92, badgeType: 'accent' },
      { name: 'XAMPP Local Server Stack', category: 'DevOps', level: 90, badgeType: 'secondary' },
      { name: 'AI-Assisted Development (Lovable)', category: 'Workflow', level: 92, badgeType: 'highlight' }
    ]
  },
  {
    id: 'research-data',
    title: 'Data Analytics & Research Methodology',
    description: 'Statistical software packages, quantitative modeling, data visualization & hypothesis testing',
    icon: 'BarChart3',
    skills: [
      { name: 'SPSS Analysis Package', category: 'Statistics', level: 96, badgeType: 'highlight' },
      { name: 'STATA Data Analytics', category: 'Statistics', level: 92, badgeType: 'highlight' },
      { name: 'SAS Statistical Suite', category: 'Statistics', level: 88, badgeType: 'highlight' },
      { name: 'Advanced MS Excel (VLOOKUP, Pivot)', category: 'Data Analysis', level: 95, badgeType: 'primary' },
      { name: 'Quantitative & Empirical Research', category: 'Methodology', level: 94, badgeType: 'primary' },
      { name: 'Statistical Modeling & Regression', category: 'Data Science', level: 92, badgeType: 'accent' },
      { name: 'Survey & Questionnaire Design', category: 'Data Capture', level: 90, badgeType: 'secondary' },
      { name: 'Interactive Data Visualization', category: 'Reporting', level: 90, badgeType: 'accent' }
    ]
  },
  {
    id: 'education-pedagogy',
    title: 'STEM Education & Institutional Tech',
    description: 'Mathematics, Business Studies & Computer Science instruction, CBC curriculum & KEMIS admin',
    icon: 'GraduationCap',
    skills: [
      { name: 'Mathematics Instruction', category: 'STEM Curriculum', level: 96, badgeType: 'primary' },
      { name: 'Computer Studies Pedagogy', category: 'STEM Curriculum', level: 95, badgeType: 'primary' },
      { name: 'Business Education', category: 'Curriculum', level: 94, badgeType: 'primary' },
      { name: 'CBC (Competency Based) Curriculum', category: 'Education', level: 94, badgeType: 'highlight' },
      { name: 'KEMIS System Administration', category: 'GovTech Admin', level: 95, badgeType: 'highlight' },
      { name: 'EdTech & Digital Classroom Integration', category: 'EdTech', level: 95, badgeType: 'highlight' },
      { name: 'Student Academic Assessment Tools', category: 'Evaluation', level: 92, badgeType: 'secondary' }
    ]
  },
  {
    id: 'publishing-doc',
    title: 'Technical Writing & Documentation',
    description: 'Software documentation, academic research publishing & technical specifications',
    icon: 'FileText',
    skills: [
      { name: 'Technical Documentation & Specifications', category: 'Engineering', level: 95, badgeType: 'primary' },
      { name: 'Academic Research & Citations (APA, MLA, Harvard, IEEE, Chicago)', category: 'Publishing', level: 96, badgeType: 'accent' },
      { name: 'Peer Review & Quality Assurance', category: 'Editorial', level: 94, badgeType: 'secondary' },
      { name: 'Project Proposals & Feasibility Reports', category: 'Documentation', level: 92, badgeType: 'primary' }
    ]
  },
  {
    id: 'professional-skills',
    title: 'Professional Competencies & Leadership',
    description: 'Core interpersonal, project management, and client leadership competencies',
    icon: 'Briefcase',
    skills: [
      { name: 'Leadership & Mentorship', category: 'Management', level: 95, badgeType: 'primary' },
      { name: 'Project Management', category: 'Delivery', level: 94, badgeType: 'primary' },
      { name: 'Client Relationship Management', category: 'Client Success', level: 95, badgeType: 'highlight' },
      { name: 'Team Collaboration', category: 'Teamwork', level: 95, badgeType: 'accent' },
      { name: 'Critical Thinking & Problem Solving', category: 'Strategy', level: 96, badgeType: 'primary' },
      { name: 'Effective Communication', category: 'Interpersonal', level: 95, badgeType: 'primary' },
      { name: 'Time Management', category: 'Execution', level: 94, badgeType: 'secondary' },
      { name: 'Technical Documentation', category: 'Reporting', level: 95, badgeType: 'accent' }
    ]
  }
];

export const INTERESTS: Interest[] = [
  {
    id: 'edtech',
    title: 'Educational Technology (EdTech)',
    icon: 'Laptop',
    description: 'Building accessible web software and tools that modernize classroom delivery and bridge digital divides in African education.',
    tag: 'EdTech Systems'
  },
  {
    id: 'ai-edu',
    title: 'AI in Education',
    icon: 'Sparkles',
    description: 'Leveraging Artificial Intelligence to personalize STEM learning pathways, automate assessment workflows, and assist teachers.',
    tag: 'Next-Gen Learning'
  },
  {
    id: 'digital-transform',
    title: 'Digital Transformation',
    icon: 'RefreshCw',
    description: 'Transitioning traditional institutional workflows to modern cloud database systems like KEMIS and modern web portals.',
    tag: 'GovTech & EdGov'
  },
  {
    id: 'software-arch',
    title: 'Software Architecture',
    icon: 'Layers',
    description: 'Designing scalable relational database schemas, decoupled PHP/WordPress systems, and fast React frontend architectures.',
    tag: 'Full-Stack Engineering'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Visualization',
    icon: 'PieChart',
    description: 'Transforming complex quantitative data sets into actionable institutional intelligence through SPSS, STATA, and interactive charts.',
    tag: 'Statistical Research'
  },
  {
    id: 'research-innovation',
    title: 'Research & Innovation',
    icon: 'Compass',
    description: 'Conducting empirical research studies, publishing rigorous manuscripts, and exploring data-backed solutions to educational challenges.',
    tag: 'Academic Rigor'
  },
  {
    id: 'e-learning',
    title: 'E-Learning Systems',
    icon: 'BookOpen',
    description: 'Engineering interactive learning platforms that support distance learning and self-paced student skill acquisition.',
    tag: 'Online Classrooms'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    icon: 'TrendingUp',
    description: 'Fostering tech startups, sustainable e-commerce platforms (like StyledKid), and safari travel engines (like WildLens Adventure).',
    tag: 'Tech Business'
  }
];
