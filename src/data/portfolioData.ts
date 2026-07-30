import { Project, Experience, Certification, EducationItem, SkillCategoryGroup, Interest } from '../types';

export const PERSONAL_INFO = {
  name: 'KELLY MUTHOMI KINOTI',
  initials: 'KMK',
  profileImage: 'https://lh3.googleusercontent.com/d/1OJiIK5LYfwZscXDruBn-Hnz1P87EX24x',
  tscNo: 'Licensed & Registered',
  headline: 'Full-Stack Web Developer & STEM Educator | EdTech Software Engineer, PHP/React Architect & Data Analyst',
  shortTitle: 'Full-Stack Developer & STEM Educator',
  location: 'Nairobi, Kenya',
  phone: '+254 708 220 323',
  phoneClean: '+254708220323',
  email: 'kellymuthomi22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kelly-muthomi/',
  facebook: 'https://www.facebook.com/kelly.mnaa/',
  twitter: 'https://x.com/kellymnaaa',
  tiktok: 'https://www.tiktok.com/@kellymuthomikinoti',
  github: 'https://github.com/kellymuthomi',
  summary: 'Full-stack web developer and TSC-registered STEM educator specializing in EdTech software engineering, PHP/React web applications, relational database design, and statistical data analytics. Holds a B.A. in Education (Business Studies & Mathematics) from Moi University with 6+ years combining software engineering, ICT leadership, and empirical research.',
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
    badge: 'Live E-Commerce'
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
    badge: 'Live Travel Tech'
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
    badge: 'Live EdTech'
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
    id: 'independent-tech-consultant',
    role: 'Independent Full-Stack Web Developer & Data Consultant',
    organization: 'Independent Software Engineering & Statistical Consulting',
    period: '2022 – 2025',
    isCurrent: false,
    location: 'Nairobi / Remote',
    responsibilities: [
      'Engineered custom full-stack web applications, e-commerce platforms, and database solutions for regional businesses and educational clients.',
      'Designed and executed statistical data models (SPSS, STATA, SAS) and quantitative analytics for research projects and educational evaluations.',
      'Built custom administrative dashboards, client portals, and responsive CMS solutions using PHP, React, MySQL, and Tailwind CSS.',
      'Provided digital transformation consulting to schools and small enterprises transitioning to web-based management.'
    ],
    highlights: [
      'Engineered 3 major live production platforms (StyledKid, WildLens, Menwe School)',
      'Built automated inventory and M-Pesa payment integration prototypes',
      'Delivered data analytics and statistical modeling for 100+ research projects'
    ],
    techAndTools: ['Full-Stack Web Dev', 'PHP & React', 'MySQL', 'SPSS Analytics', 'M-Pesa Integration', 'Data Modeling']
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
    regNumber: 'TSC Licensed',
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
    regNumber: 'KEMI-KEMIS-2024',
    issuingBody: 'Kenya Education Management Institute (KEMI), Ministry of Education',
    badge: 'KEMI Certified',
    description: 'Specialized administrative certification covering the complete lifecycle of the Kenya Education Management Information System (KEMIS).',
    topics: [
      'KEMIS System Fundamentals & Architecture',
      'Institution Module (Theory & Practicals)',
      'Learner Module & Learner Transfer Procedures (Theory & Practicals)',
      'Reporting Module & Institutional Analytics (Theory & Practicals)',
      'User Management Module & Access Control (Theory & Practicals)'
    ],
    keyHighlights: [
      'Expertise in institutional education data management',
      'Comprehensive mastery of student transfer protocols',
      'Advanced reporting and institutional metrics analytics',
      'User access control and data security management'
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
      { name: 'AI Development Tools', category: 'Workflow', level: 88, badgeType: 'highlight' }
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
      { name: 'Academic Research Manuscripts (APA/IEEE)', category: 'Publishing', level: 96, badgeType: 'accent' },
      { name: 'Peer Review & Quality Assurance', category: 'Editorial', level: 94, badgeType: 'secondary' },
      { name: 'Project Proposals & Feasibility Reports', category: 'Documentation', level: 92, badgeType: 'primary' }
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
