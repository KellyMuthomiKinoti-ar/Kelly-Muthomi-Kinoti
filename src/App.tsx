import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CertModal } from './components/CertModal';
import { Footer } from './components/Footer';

// Interactive Features & Blog Engine (Lazy Loaded for Bundle Optimization)
import { ResearchPublications } from './components/ResearchPublications';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeachingPhilosophySection } from './components/TeachingPhilosophySection';
import { FaqSection } from './components/FaqSection';
import { ConsultationBooking } from './components/ConsultationBooking';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { GlobalCommandPalette } from './components/GlobalCommandPalette';

import { BlogSection } from './components/BlogSection';
import { AuthModal } from './components/AuthModal';
import { BlogReaderModal } from './components/BlogReaderModal';
import { UserRatingModal } from './components/UserRatingModal';

import { INITIAL_BLOG_POSTS, INITIAL_USER_RATINGS } from './data/blogData';
import { Certification, BlogPost, UserRating, User, BlogComment } from './types';
import { motion, useScroll, useSpring } from 'motion/react';

// Lazy-loaded heavy interactive modules to reduce initial JavaScript bundle size and improve page load metrics
const LessonPlanGenerator = lazy(() =>
  import('./components/LessonPlanGenerator').then((module) => ({
    default: module.LessonPlanGenerator,
  }))
);

const ProjectCostEstimator = lazy(() =>
  import('./components/ProjectCostEstimator').then((module) => ({
    default: module.ProjectCostEstimator,
  }))
);

const InteractiveMathSandbox = lazy(() =>
  import('./components/InteractiveMathSandbox').then((module) => ({
    default: module.InteractiveMathSandbox,
  }))
);

const AnalyticsDemo = lazy(() =>
  import('./components/AnalyticsDemo').then((module) => ({
    default: module.AnalyticsDemo,
  }))
);

// Reusable accessible loading fallback for lazy-loaded interactive modules
const InteractiveModuleFallback: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle = 'Loading interactive module...',
}) => (
  <div className="w-full max-w-6xl mx-auto my-12 p-8 sm:p-12 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center min-h-[340px] text-center shadow-lg">
    <div className="w-11 h-11 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
    <h3 className="text-lg font-semibold text-slate-200 tracking-wide">{title}</h3>
    <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
  </div>
);

// Reusable Framer Motion-based page wrapper to animate the page smoothly on load without jarring
const PageMotionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

// Stable Framer Motion wrapper for individual sections, preventing any blinking or visual jarring
const SectionMotionWrapper: React.FC<{ children: React.ReactNode; priority?: boolean }> = ({ children, priority = false }) => {
  if (priority) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.05, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '300px 0px 0px 0px' }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  // Track scroll depth for the viewport reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // User Auth & Session
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('kelly_user_session');
    return saved ? JSON.parse(saved) : null;
  });

  // Blog Engine State - Read from curated static dataset
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('kelly_blog_posts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  // Ratings State
  const [ratings, setRatings] = useState<UserRating[]>(() => {
    const saved = localStorage.getItem('kelly_user_ratings');
    return saved ? JSON.parse(saved) : INITIAL_USER_RATINGS;
  });

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const [isRateOpen, setIsRateOpen] = useState(false);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('kelly_blog_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('kelly_user_ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('kelly_user_session', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('kelly_user_session');
    }
  }, [currentUser]);

  // Global Keydown Listener for Quick Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleOpenCertModal = (cert?: Certification) => {
    setSelectedCert(cert || null);
    setIsCertModalOpen(true);
  };

  // Blog Handler Actions
  const handleLikePost = (postId: string) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      })
    );
    if (readingPost && readingPost.id === postId) {
      setReadingPost(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handleRatePost = (postId: string, ratingValue: number) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            ratingCount: p.ratingCount + 1,
            ratingSum: p.ratingSum + ratingValue
          };
        }
        return p;
      })
    );
  };

  const handleAddComment = (postId: string, commentText: string) => {
    const newComment: BlogComment = {
      id: 'c-' + Date.now(),
      postId,
      authorName: currentUser?.name || 'Reader Visitor',
      authorRole: currentUser?.role === 'admin' ? 'TSC Registered Educator' : 'Community Member',
      content: commentText,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0
    };

    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return { ...p, comments: [newComment, ...p.comments] };
        }
        return p;
      })
    );

    if (readingPost && readingPost.id === postId) {
      setReadingPost(prev =>
        prev ? { ...prev, comments: [newComment, ...prev.comments] } : null
      );
    }
  };

  const handleSubmitUserRating = (newRating: UserRating) => {
    setRatings(prev => [newRating, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Subtle Reading Progress Bar at top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 origin-left z-[100] pointer-events-none shadow-[0_0_10px_rgba(251,191,36,0.6)]"
        style={{ scaleX }}
      />

      {/* Top Floating Navigation */}
      <HeaderNav
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertModal={() => handleOpenCertModal()}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Layout */}
      <PageMotionWrapper>
        <main id="main-content">
        <SectionMotionWrapper priority>
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenCertModal={() => handleOpenCertModal()}
          />
        </SectionMotionWrapper>

        {/* Professional Narrative & Career Overview */}
        <SectionMotionWrapper priority>
          <AboutSection
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenCertModal={() => handleOpenCertModal()}
          />
        </SectionMotionWrapper>

        {/* Full-Stack Web Projects Showcase */}
        <SectionMotionWrapper>
          <ProjectsSection />
        </SectionMotionWrapper>

        {/* KNOWLEDGE HUB & TECHNICAL ARTICLES */}
        <SectionMotionWrapper>
          <BlogSection
            posts={posts}
            ratings={ratings}
            currentUser={currentUser}
            onOpenAuth={() => setIsAuthOpen(true)}
            onOpenReader={(post) => {
              setReadingPost(post);
              setIsReaderOpen(true);
            }}
            onOpenRateModal={() => setIsRateOpen(true)}
          />
        </SectionMotionWrapper>

        {/* Interactive CBC Lesson Plan & STEM Problem Generator */}
        <SectionMotionWrapper>
          <Suspense
            fallback={
              <InteractiveModuleFallback
                title="CBC STEM Lesson Plan Generator"
                subtitle="Loading interactive lesson planner & STEM problem generator..."
              />
            }
          >
            <LessonPlanGenerator />
          </Suspense>
        </SectionMotionWrapper>

        {/* Web & EdTech Project Investment Calculator */}
        <SectionMotionWrapper>
          <Suspense
            fallback={
              <InteractiveModuleFallback
                title="Project Cost & Architecture Estimator"
                subtitle="Loading interactive budget calculator..."
              />
            }
          >
            <ProjectCostEstimator />
          </Suspense>
        </SectionMotionWrapper>

        {/* Professional Teaching Philosophy & CBC Pillars */}
        <SectionMotionWrapper>
          <TeachingPhilosophySection />
        </SectionMotionWrapper>

        {/* Professional Experience Timeline */}
        <SectionMotionWrapper>
          <ExperienceSection />
        </SectionMotionWrapper>

        {/* Mathematics & Business Financial Calculator Sandbox */}
        <SectionMotionWrapper>
          <Suspense
            fallback={
              <InteractiveModuleFallback
                title="Interactive Math & Financial Sandbox"
                subtitle="Loading STEM simulation tools & calculators..."
              />
            }
          >
            <InteractiveMathSandbox />
          </Suspense>
        </SectionMotionWrapper>

        {/* Verified Certifications & Licensing */}
        <SectionMotionWrapper>
          <CertificationsSection
            onOpenCertModal={handleOpenCertModal}
          />
        </SectionMotionWrapper>

        {/* Skills Matrix & Competency Breakdown */}
        <SectionMotionWrapper>
          <SkillsSection />
        </SectionMotionWrapper>

        {/* Academic Research Papers & SPSS Studies */}
        <SectionMotionWrapper>
          <ResearchPublications />
        </SectionMotionWrapper>

        {/* Verified Institutional & Client Testimonials Wall */}
        <SectionMotionWrapper>
          <TestimonialsSection />
        </SectionMotionWrapper>

        {/* Interactive Analytics & Data Dashboard Demo */}
        <SectionMotionWrapper>
          <Suspense
            fallback={
              <InteractiveModuleFallback
                title="Statistical Research & SPSS Analytics Demo"
                subtitle="Loading interactive charts & data visualization tools..."
              />
            }
          >
            <AnalyticsDemo />
          </Suspense>
        </SectionMotionWrapper>

        {/* Academic Education & Background */}
        <SectionMotionWrapper>
          <EducationSection />
        </SectionMotionWrapper>

        {/* Professional Interests & Technical Passion */}
        <SectionMotionWrapper>
          <InterestsSection />
        </SectionMotionWrapper>

        {/* Frequently Asked Questions Accordion */}
        <SectionMotionWrapper>
          <FaqSection />
        </SectionMotionWrapper>

        {/* Direct Appointment & Consultation Booking Portal */}
        <SectionMotionWrapper>
          <ConsultationBooking />
        </SectionMotionWrapper>

        {/* Contact Form & Direct Touch Points */}
        <SectionMotionWrapper>
          <ContactSection />
        </SectionMotionWrapper>
        </main>
      </PageMotionWrapper>

      {/* Footer */}
      <SectionMotionWrapper>
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCertModal={() => handleOpenCertModal()}
        />
      </SectionMotionWrapper>

      {/* Floating Messenger Widget */}
      <FloatingWhatsAppWidget />

      {/* Global Quick Jump Command Palette (Ctrl+K) */}
      <GlobalCommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertModal={() => handleOpenCertModal()}
      />

      {/* Interactive Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Certification Modal */}
      <CertModal
        isOpen={isCertModalOpen}
        selectedCert={selectedCert}
        onClose={() => setIsCertModalOpen(false)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />

      {/* Blog Article Reader & Downloader Modal */}
      <BlogReaderModal
        post={readingPost}
        isOpen={isReaderOpen}
        onClose={() => {
          setIsReaderOpen(false);
          setReadingPost(null);
        }}
        currentUser={currentUser}
        onLikePost={handleLikePost}
        onRatePost={handleRatePost}
        onAddComment={handleAddComment}
        onSelectPost={(post) => setReadingPost(post)}
      />

      {/* User "Rate Me" Rating Submission Modal */}
      <UserRatingModal
        isOpen={isRateOpen}
        onClose={() => setIsRateOpen(false)}
        currentUser={currentUser}
        onSubmitRating={handleSubmitUserRating}
      />
    </div>
  );
}

