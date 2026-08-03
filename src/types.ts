export type ProjectCategory = 'all' | 'e-commerce' | 'web-app' | 'edtech';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'e-commerce' | 'web-app' | 'edtech';
  link: string;
  githubUrl?: string;
  displayUrl: string;
  techStack: string[];
  features: string[];
  description: string;
  metrics?: string;
  badge?: string;
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
  };
  challengesSolved?: {
    title: string;
    solution: string;
  }[];
  keyMetrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent?: boolean;
  location: string;
  platforms?: string[];
  responsibilities: string[];
  highlights?: string[];
  techAndTools?: string[];
}

export interface Certification {
  id: string;
  title: string;
  regNumber?: string;
  issuingBody: string;
  topics?: string[];
  description: string;
  badge: string;
  keyHighlights: string[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  year: string;
  gradeDetails?: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level: number; // 0-100
  badgeType: 'primary' | 'secondary' | 'accent' | 'highlight';
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface Interest {
  id: string;
  title: string;
  icon: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: 'education' | 'web-dev' | 'research';
  quote: string;
  rating: number;
  avatarInitials: string;
  badge: string;
  date: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  field: string;
  year: string;
  abstract: string;
  methodology: string;
  toolsUsed: string[];
  keyFindings: string[];
  citation: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatarInitials: string;
}

export interface BlogComment {
  id: string;
  postId: string;
  authorName: string;
  authorRole: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  category: 'edtech' | 'web-dev' | 'cbc-math' | 'spss-research' | 'insights';
  tags: string[];
  coverImage: string;
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  ratingCount: number;
  ratingSum: number;
  comments: BlogComment[];
  isFeatured?: boolean;
  status?: 'published' | 'draft' | 'scheduled';
  seoMetadata?: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedSlugs?: string[];
}

export interface UserRating {
  id: string;
  userName: string;
  userRole: string;
  rating: number; // 1 to 5
  category: 'teaching' | 'web-dev' | 'research' | 'overall';
  reviewTitle: string;
  reviewText: string;
  createdAt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'education' | 'web-dev' | 'research';
}

