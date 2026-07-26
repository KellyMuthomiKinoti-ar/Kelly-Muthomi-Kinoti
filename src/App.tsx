import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { SummarySection } from './components/SummarySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { AnalyticsDemo } from './components/AnalyticsDemo';
import { EducationSection } from './components/EducationSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CertModal } from './components/CertModal';
import { Footer } from './components/Footer';

// Interactive Features & Blog Engine
import { LessonPlanGenerator } from './components/LessonPlanGenerator';
import { ProjectCostEstimator } from './components/ProjectCostEstimator';
import { InteractiveMathSandbox } from './components/InteractiveMathSandbox';
import { ResearchPublications } from './components/ResearchPublications';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeachingPhilosophySection } from './components/TeachingPhilosophySection';
import { FaqSection } from './components/FaqSection';
import { ConsultationBooking } from './components/ConsultationBooking';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { GlobalCommandPalette } from './components/GlobalCommandPalette';

import { BlogSection } from './components/BlogSection';
import { AuthModal } from './components/AuthModal';
import { BlogWriterModal } from './components/BlogWriterModal';
import { BlogReaderModal } from './components/BlogReaderModal';
import { UserRatingModal } from './components/UserRatingModal';

import { INITIAL_BLOG_POSTS, INITIAL_USER_RATINGS } from './data/blogData';
import { Certification, BlogPost, UserRating, User, BlogComment } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // User Auth & Session
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('kelly_user_session');
    return saved ? JSON.parse(saved) : null;
  });

  // Blog Engine State
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
  const [isWriterOpen, setIsWriterOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
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

  const handleOpenCertModal = (cert?: Certification) => {
    setSelectedCert(cert || null);
    setIsCertModalOpen(true);
  };

  // Blog Handler Actions
  const handleSaveBlogPost = (post: BlogPost) => {
    setPosts(prev => {
      const exists = prev.some(p => p.id === post.id);
      if (exists) {
        return prev.map(p => (p.id === post.id ? post : p));
      }
      return [post, ...prev];
    });
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this blog article?')) {
      setPosts(prev => prev.filter(p => p.id !== postId));
    }
  };

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
      {/* Top Floating Navigation */}
      <HeaderNav
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertModal={() => handleOpenCertModal()}
      />

      {/* Main Page Layout */}
      <main id="main-content">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCertModal={() => handleOpenCertModal()}
        />

        {/* Career Summary & Key Statistics */}
        <SummarySection />

        {/* Full-Stack Web Projects Showcase */}
        <ProjectsSection />

        {/* INTERACTIVE BLOG ENGINE & USER RATINGS BOARD */}
        <BlogSection
          posts={posts}
          ratings={ratings}
          currentUser={currentUser}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenWriter={(postToEdit) => {
            setEditingPost(postToEdit || null);
            setIsWriterOpen(true);
          }}
          onOpenReader={(post) => {
            setReadingPost(post);
            setIsReaderOpen(true);
          }}
          onOpenRateModal={() => setIsRateOpen(true)}
          onDeletePost={handleDeletePost}
        />

        {/* Interactive CBC Lesson Plan & STEM Problem Generator */}
        <LessonPlanGenerator />

        {/* Web & EdTech Project Investment Calculator */}
        <ProjectCostEstimator />

        {/* Professional Teaching Philosophy & CBC Pillars */}
        <TeachingPhilosophySection />

        {/* Professional Experience Timeline */}
        <ExperienceSection />

        {/* Mathematics & Business Financial Calculator Sandbox */}
        <InteractiveMathSandbox />

        {/* Verified Certifications & Licensing */}
        <CertificationsSection
          onOpenCertModal={handleOpenCertModal}
        />

        {/* Skills Matrix & Competency Breakdown */}
        <SkillsSection />

        {/* Academic Research Papers & SPSS Studies */}
        <ResearchPublications />

        {/* Verified Institutional & Client Testimonials Wall */}
        <TestimonialsSection />

        {/* Interactive Analytics & Data Dashboard Demo */}
        <AnalyticsDemo />

        {/* Academic Education & Background */}
        <EducationSection />

        {/* Professional Interests & Technical Passion */}
        <InterestsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Direct Appointment & Consultation Booking Portal */}
        <ConsultationBooking />

        {/* Contact Form & Direct Touch Points */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertModal={() => handleOpenCertModal()}
      />

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

      {/* Blog Article Writer & Manager Modal */}
      <BlogWriterModal
        isOpen={isWriterOpen}
        onClose={() => {
          setIsWriterOpen(false);
          setEditingPost(null);
        }}
        currentUser={currentUser}
        onSaveBlogPost={handleSaveBlogPost}
        editingPost={editingPost}
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

