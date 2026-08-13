import React, { useState } from 'react';
import { ActiveTab, Course, Note, User } from './types';
import { COURSES, NOTES, BLOG_POSTS, INTERNSHIPS, MOCK_USER } from './data/mockData';

// Component Imports
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBadges } from './components/FeatureBadges';
import { CourseGrid } from './components/CourseGrid';
import { NotesLibrary } from './components/NotesLibrary';
import { CourseDetail } from './components/CourseDetail';
import { StudentDashboard } from './components/StudentDashboard';
import { InternshipView } from './components/InternshipView';
import { BlogView } from './components/BlogView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { AuthModal } from './components/AuthModal';
import { PDFPreviewModal } from './components/PDFPreviewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

// Toast Notification
import { CheckCircle2, Download, BookOpen, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [previewNote, setPreviewNote] = useState<Note | null>(null);
  const [checkoutItem, setCheckoutItem] = useState<Course | Note | null>(null);
  const [user, setUser] = useState<User | null>(MOCK_USER); // Logged in state default for preview
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setActiveTab('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnroll = (course: Course) => {
    if (!user) {
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }
    setCheckoutItem(course);
  };

  const handleDownloadNote = (note: Note) => {
    if (note.isFree) {
      showToast(
        'Downloading PDF Note',
        `"${note.title}" (${note.pages} pages) has started downloading.`
      );
    } else {
      if (!user) {
        setAuthMode('login');
        setAuthModalOpen(true);
        return;
      }
      setCheckoutItem(note);
    }
  };

  const handleCheckoutSuccess = (item: Course | Note) => {
    showToast(
      'Purchase Completed!',
      `You now have full access to "${item.title}". Check your dashboard.`
    );
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col font-sans text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
      
      {/* Toast Banner Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-gold-500 shadow-2xl rounded-2xl p-4 max-w-sm flex items-start gap-3 text-slate-900 animate-bounce">
          <div className="w-9 h-9 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-gold-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold font-serif text-slate-900">{toastMessage.title}</h4>
            <p className="text-[11px] text-slate-600 leading-tight mt-0.5">{toastMessage.desc}</p>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-slate-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openAuthModal={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        user={user}
      />

      {/* Main View Router Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <FeatureBadges />
            <CourseGrid
              courses={COURSES}
              onSelectCourse={handleSelectCourse}
              onEnroll={handleEnroll}
              setActiveTab={setActiveTab}
              isFullPage={false}
            />
            {/* Quick Preview of Notes Library on Home */}
            <NotesLibrary
              notes={NOTES.slice(0, 6)}
              onPreviewNote={(note) => setPreviewNote(note)}
              onDownloadNote={handleDownloadNote}
            />
          </>
        )}

        {activeTab === 'courses' && (
          <CourseGrid
            courses={COURSES}
            onSelectCourse={handleSelectCourse}
            onEnroll={handleEnroll}
            setActiveTab={setActiveTab}
            isFullPage={true}
          />
        )}

        {activeTab === 'notes' && (
          <NotesLibrary
            notes={NOTES}
            onPreviewNote={(note) => setPreviewNote(note)}
            onDownloadNote={handleDownloadNote}
          />
        )}

        {activeTab === 'course-detail' && (
          <CourseDetail
            course={selectedCourse}
            onEnroll={handleEnroll}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'dashboard' && user && (
          <StudentDashboard
            user={user}
            courses={COURSES}
            notes={NOTES}
            setActiveTab={setActiveTab}
            onLogout={() => {
              setUser(null);
              setActiveTab('home');
              showToast('Logged Out', 'You have been logged out safely.');
            }}
          />
        )}

        {activeTab === 'internship' && (
          <InternshipView internships={INTERNSHIPS} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'blog' && <BlogView posts={BLOG_POSTS} />}

        {activeTab === 'about' && <AboutView />}

        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onLoginSuccess={(loggedInUser) => {
          setUser(loggedInUser);
          showToast('Welcome!', `Logged in as ${loggedInUser.name}`);
        }}
      />

      {/* PDF Document Preview Modal */}
      <PDFPreviewModal
        note={previewNote}
        onClose={() => setPreviewNote(null)}
        onDownload={handleDownloadNote}
      />

      {/* Payment Checkout Modal */}
      <CheckoutModal
        item={checkoutItem}
        onClose={() => setCheckoutItem(null)}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Global Footer */}
      {activeTab !== 'dashboard' && <Footer setActiveTab={setActiveTab} />}

    </div>
  );
}
