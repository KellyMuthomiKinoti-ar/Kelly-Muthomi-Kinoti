import { Project, Experience, Certification, EducationItem, SkillCategoryGroup, Interest } from '../types';

export const PERSONAL_INFO = {
  name: 'KELLY MUTHOMI KINOTI',
  initials: 'KMK',
  profileImage: 'https://lh3.googleusercontent.com/d/1OJiIK5LYfwZscXDruBn-Hnz1P87EX24x',
  tscNo: 'Licensed & Registered',
  headline: 'TSC-Registered Educator | Mathematics, Business Studies & Computer Science Teacher | Full-Stack Web Developer | WordPress Specialist | Academic Researcher & Data Analyst',
  shortTitle: 'Full-Stack Developer, Educator & Data Analyst',
  location: 'Nairobi, Kenya',
  phone: '+254 708 220 323',
  phoneClean: '+254708220323',
  email: 'kellymuthomi22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kelly-muthomi-104760155/',
  github: 'https://github.com',
  summary: 'Highly motivated and results-driven TSC-registered educator, full-stack web developer, academic researcher, and data analyst with 6+ years of experience across education, software development, digital transformation, and statistical research. Holds a Bachelor of Arts in Education (Business Studies & Mathematics) from Moi University. Expert in bridging technology and education by delivering CBC-aligned STEM instruction, engineering modern web solutions, and leading quantitative/qualitative research projects.',
  livePortfolios: [
    { name: 'StyledKid E-Commerce', url: 'https://styledkid.co.ke' },
    { name: 'WildLens Adventure', url: 'https://wildlensadventure.com' },
    { name: 'Menwe Junior School Web App', url: 'https://menwe-school.vercel.app/' },
  ]
};

export const CAREER_MILESTONES = [
  {
    value: '6+',
    label: 'Years Experience',
    detail: 'Education, ICT Integration, Web Dev & Research'
  },
  {
    value: 'TSC #1030686',
    label: 'Fully Licensed',
    detail: 'Mathematics, Business & Computer Studies'
  },
  {
    value: 'KEMI',
    label: 'Certified Admin',
    detail: 'KEMIS Data & System Operations'
  },
  {
    value: 'Full-Stack',
    label: 'Web Architect',
    detail: 'E-Commerce, CMS & EdTech Web Applications'
  },
  {
    value: 'Statistical',
    label: 'Research Expert',
    detail: 'SPSS, SAS, STATA & Advanced Excel'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'styledkid',
    title: 'StyledKid',
    subtitle: 'Full-Stack E-Commerce Web Platform',
    category: 'e-commerce',
    link: 'https://styledkid.co.ke',
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
    location: 'Nairobi / Kenya',
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
  },
  {
    id: 'freelance-developer-researcher',
    role: 'Lead Full-Stack Web Developer & Academic Researcher',
    organization: 'Freelance / Global Academic Platforms (Studybay, Fiverr, Studypool, Uvocorp)',
    period: 'April 2018 – Present',
    isCurrent: true,
    location: 'Remote / Global',
    platforms: ['Studybay', 'Fiverr', 'Studypool', 'Uvocorp'],
    responsibilities: [
      'Full-Stack Web Engineering: Design, develop, and maintain custom web applications, e-commerce stores, and WordPress CMS sites using PHP, MySQL, JavaScript, REST APIs, and modern AI development tooling (Lovable).',
      'Research & Data Analytics: Execute quantitative and qualitative statistical modeling, survey/questionnaire design, hypothesis testing, and interactive data visualization using SPSS, SAS, STATA, and Advanced Excel.',
      'Editorial & Compliance: Produce technical documentation, code explanations, and research manuscripts adhering strictly to APA, MLA, Harvard, IEEE, and Chicago formatting guidelines.',
      'Client Relationship & Quality: Partner with global clients to diagnose software requirements, deliver clean code, and provide data-driven insights with 100% compliance to specifications.'
    ],
    highlights: [
      '5-Star rated technical writer & data analyst on international platforms',
      'Delivered 300+ successful software projects and research manuscripts',
      'Expert in cross-disciplinary statistical analysis (SPSS, STATA, SAS)'
    ],
    techAndTools: ['PHP', 'MySQL', 'JavaScript', 'SPSS', 'STATA', 'SAS', 'Advanced Excel', 'APA/IEEE Writing', 'WordPress']
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
    title: 'Programming & Web Development',
    description: 'Full-stack engineering, database design, and modern CMS customization',
    icon: 'Code',
    skills: [
      { name: 'PHP', category: 'Programming', level: 92, badgeType: 'primary' },
      { name: 'MySQL Database Design', category: 'Database', level: 90, badgeType: 'primary' },
      { name: 'JavaScript (ES6+)', category: 'Programming', level: 88, badgeType: 'primary' },
      { name: 'HTML5 & CSS3', category: 'Frontend', level: 95, badgeType: 'primary' },
      { name: 'WordPress Development', category: 'CMS', level: 94, badgeType: 'primary' },
      { name: 'REST API Integration', category: 'Backend', level: 85, badgeType: 'secondary' },
      { name: 'Responsive Web Design', category: 'UI/UX', level: 96, badgeType: 'primary' },
      { name: 'E-Commerce Engineering', category: 'Web Dev', level: 90, badgeType: 'accent' },
      { name: 'Local Env (XAMPP)', category: 'DevOps', level: 92, badgeType: 'secondary' },
      { name: 'AI Development (Lovable)', category: 'AI Tools', level: 88, badgeType: 'highlight' },
      { name: 'Next.js & React', category: 'Frontend', level: 84, badgeType: 'primary' }
    ]
  },
  {
    id: 'research-data',
    title: 'Research & Data Analytics',
    description: 'Statistical modeling, software packages, survey design & quantitative research',
    icon: 'BarChart3',
    skills: [
      { name: 'SPSS', category: 'Statistics', level: 95, badgeType: 'highlight' },
      { name: 'STATA', category: 'Statistics', level: 90, badgeType: 'highlight' },
      { name: 'SAS', category: 'Statistics', level: 86, badgeType: 'highlight' },
      { name: 'Advanced MS Excel', category: 'Analytics', level: 96, badgeType: 'primary' },
      { name: 'Quantitative Research', category: 'Research', level: 94, badgeType: 'primary' },
      { name: 'Qualitative Research', category: 'Research', level: 90, badgeType: 'primary' },
      { name: 'Statistical Modeling', category: 'Data Science', level: 92, badgeType: 'accent' },
      { name: 'Survey & Questionnaire Design', category: 'Data', level: 92, badgeType: 'secondary' },
      { name: 'Data Visualization', category: 'Analytics', level: 88, badgeType: 'accent' },
      { name: 'Literature Reviews', category: 'Research', level: 95, badgeType: 'secondary' },
      { name: 'Research Methodology', category: 'Academia', level: 95, badgeType: 'primary' }
    ]
  },
  {
    id: 'education-pedagogy',
    title: 'Education & Pedagogy',
    description: 'STEM instruction, CBC curriculum execution, and educational technology',
    icon: 'GraduationCap',
    skills: [
      { name: 'Mathematics Instruction', category: 'Pedagogy', level: 96, badgeType: 'primary' },
      { name: 'Business Studies Education', category: 'Pedagogy', level: 94, badgeType: 'primary' },
      { name: 'Computer Studies Instruction', category: 'STEM', level: 95, badgeType: 'primary' },
      { name: 'CBC Curriculum Implementation', category: 'Education', level: 92, badgeType: 'highlight' },
      { name: 'STEM Education', category: 'STEM', level: 94, badgeType: 'accent' },
      { name: 'EdTech Integration', category: 'EdTech', level: 95, badgeType: 'highlight' },
      { name: 'Student Assessment & Evaluation', category: 'Pedagogy', level: 92, badgeType: 'secondary' },
      { name: 'Digital Literacy Facilitation', category: 'ICT', level: 96, badgeType: 'primary' },
      { name: 'KEMIS Administration', category: 'Gov Tech', level: 95, badgeType: 'highlight' }
    ]
  },
  {
    id: 'publishing-doc',
    title: 'Publishing & Documentation',
    description: 'Academic formatting styles, technical writing, and peer review standards',
    icon: 'FileText',
    skills: [
      { name: 'APA Citation Style', category: 'Academic', level: 98, badgeType: 'primary' },
      { name: 'MLA Citation Style', category: 'Academic', level: 96, badgeType: 'primary' },
      { name: 'Harvard Citation Style', category: 'Academic', level: 95, badgeType: 'primary' },
      { name: 'IEEE Citation Style', category: 'Technical', level: 94, badgeType: 'accent' },
      { name: 'Chicago Citation Style', category: 'Academic', level: 92, badgeType: 'secondary' },
      { name: 'Technical Writing', category: 'Writing', level: 95, badgeType: 'primary' },
      { name: 'Track Changes & QA', category: 'Editing', level: 96, badgeType: 'secondary' },
      { name: 'Proofreading & Editing', category: 'Writing', level: 95, badgeType: 'secondary' },
      { name: 'Google Workspace', category: 'Productivity', level: 95, badgeType: 'primary' },
      { name: 'MS Office Suite', category: 'Productivity', level: 98, badgeType: 'primary' }
    ]
  },
  {
    id: 'leadership-pro',
    title: 'Professional & Leadership Skills',
    description: 'Project management, critical thinking, client engagement, and problem solving',
    icon: 'Users',
    skills: [
      { name: 'Leadership', category: 'Management', level: 92, badgeType: 'primary' },
      { name: 'Project Management', category: 'Management', level: 90, badgeType: 'primary' },
      { name: 'Client Relationship Management', category: 'Client Success', level: 94, badgeType: 'accent' },
      { name: 'Critical Thinking', category: 'Core', level: 96, badgeType: 'primary' },
      { name: 'Team Collaboration', category: 'Core', level: 95, badgeType: 'secondary' },
      { name: 'Time Management', category: 'Productivity', level: 94, badgeType: 'secondary' },
      { name: 'Problem Solving', category: 'Core', level: 96, badgeType: 'primary' }
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
